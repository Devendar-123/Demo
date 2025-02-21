import React, { useState, useEffect } from 'react';
import "./task.css"
import ProductList from './ProductList';
import productsData from './array.json'
import FilterSort from './Filters';
import "./task.css"
const Parent = ()=> {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    
    let filtered = [...products];
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    if (sortOrder === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [category, priceRange, sortOrder, products]);

  return (
    <div className="container">
      <FilterSort
        setCategory={setCategory}
        setPriceRange={setPriceRange}
        setSortOrder={setSortOrder}
        category={category}
        priceRange={priceRange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Parent;
