import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import '../styles/Marketplace.css';

const ProductList = ({ products, onDelete, onAddToCart }) => {
  const [modalProduct, setModalProduct] = useState(null);

  const handleImageClick = (product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="product-list">
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleImageClick(product)}
            />
            <div className="product-info">
              <div>
                <label>Name:</label>
                <h2>{product.name}</h2>
              </div>
              <div>
                <label>Description:</label>
                <p>{product.description}</p>
              </div>
              <p>Price: ₱{product.price} per kilo</p>
              <div className="button-container">
                <button onClick={() => onDelete(product.id)}>Delete</button>
                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}

      {modalProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={modalProduct.image} alt={modalProduct.name} />
          </div>
        </div>
      )}
    </div>
  );
};

const Marketplace = () => {
  // Remove unused 'navigate' variable
  // const navigate = useNavigate();

  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(storedProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddProductFormVisible, setAddProductFormVisible] = useState(false);

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    console.log('Search button clicked:', searchQuery);
  };

  const openAddProductForm = () => {
    setAddProductFormVisible(true);
  };

  const closeAddProductForm = () => {
    setAddProductFormVisible(false);
  };

  const addProductToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  const deleteProduct = (identifier) => {
    const isNumeric = !isNaN(identifier);
    setProducts((prevProducts) =>
      prevProducts.filter((product) =>
        isNumeric ? product.id !== parseInt(identifier) : product.name !== identifier
      )
    );
  };

  const addProductToMarketplace = (newProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = Array.isArray(prevProducts) ? [...prevProducts, newProduct] : [newProduct];
      return updatedProducts;
    });
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="marketplace">
      <div className="UserDashBoard">
        <div className="leftSide">
          <Link to="/userdashboard">Profile</Link>
        </div>
        <div className="rightSide">
          <h1>Welcome to our Marketplace</h1>
        </div>
        <div className="add-product-container">
          <button onClick={openAddProductForm}>+</button>
        </div>
        {isAddProductFormVisible && (
          <AddProductForm addProduct={addProductToMarketplace} onClose={closeAddProductForm} />
        )}
        <Link to="/cart" className="view-cart-link">
          View Cart
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {/* Pass addProductToCart to the ProductList component */}
        <ProductList
          products={filteredProducts}
          onDelete={deleteProduct}
          onAddToCart={addProductToCart}
        />
      </div>
    </div>
  );
};

export default Marketplace;
