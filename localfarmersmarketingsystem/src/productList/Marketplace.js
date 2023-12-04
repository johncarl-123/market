// Marketplace.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import '../styles/Marketplace.css';

import eggplantImage from '../assets/eggplant.image.jpg';
import potatoImage from '../assets/potato.image.jpg';
import tomatoImage from '../assets/tomato.image.webp';
import letuceImage from '../assets/letuce.image.jpg';
import eggImage from '../assets/egg.image.jpg';
import pigImage from '../assets/pig1.image.jpg';
import riceImage from '../assets/rice.image.jpg';
import squashImage from '../assets/squash.image.jpg';
import sweetPotatoImage from '../assets/sweetPotato.image.jpg';
import carrrotImage from '../assets/carrot.image.webp';
import bananaImage from '../assets/banana.image.jpg';
import coconutImage from '../assets/coconut.image.jpeg';
import starAppleImage from '../assets/starApple.image.jpg';
import starFruitImage from '../assets/starFruit.image.jpg';
import jackFruitImage from '../assets/jackFruit.image.jpg';
import mangoImage from '../assets/mango.image.webp';





const initialProducts = [
  { id: 1, name: 'Eggplant ', price: 20, image: eggplantImage },
  { id: 2, name: 'Potato ', price: 20, image: potatoImage  },
  { id: 3, name: 'Tomato ', price: 20, image: tomatoImage},
  { id: 4, name: 'Letuce ', price: 20, image: letuceImage },
  { id: 5, name: 'Egg ', price: 20, image: eggImage  },
  { id: 6, name: 'Pig ', price: 20, image: pigImage  },
  { id: 7, name: 'Rice ', price: 20, image: riceImage  },
  { id: 8, name: 'Squash ', price: 20, image: squashImage   },
  { id: 9, name: 'SweetPotato ', price: 20, image: sweetPotatoImage  },
  { id: 10, name: 'Carrot ', price: 20, image: carrrotImage },
  { id: 11, name: 'Mango ', price: 20, image: mangoImage },
  { id: 12, name: 'Banana ', price: 20, image: bananaImage },
  { id: 13, name: 'Coconut ', price: 20, image: coconutImage },
  { id: 14, name: 'StarApple ', price: 20, image: starAppleImage},
  { id: 15, name: 'StarFruit ', price: 20, image: starFruitImage },
  { id: 16, name: 'JackFruit ', price: 20, image: jackFruitImage },
  
  
];


const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>₱{product.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
);

const Marketplace = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddProductFormVisible, setAddProductFormVisible] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Search button clicked:', searchQuery);
  };

  const openAddProductForm = () => {
    setAddProductFormVisible(true);
  };

  const closeAddProductForm = () => {
    setAddProductFormVisible(false);
  };

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // Hide the form after adding a product
    closeAddProductForm();
  };

  return (
    <div className="marketplace">
      <div className="UserDashBoard">
        <div className="leftSide">
          <Link to="/userdashboard">Profile</Link>
        </div>
        <div className="rightSide">
          <h1>Marketplace</h1>
        </div>
        <div className="add-product-container">
          <button onClick={openAddProductForm}>+</button>
        </div>
        {isAddProductFormVisible && (
          <AddProductForm addProduct={addProduct} onClose={closeAddProductForm} />
        )}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Marketplace;