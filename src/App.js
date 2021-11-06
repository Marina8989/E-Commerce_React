import React, {useState} from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import {  commerce } from './lib/commerce';
import {Navbar, Products} from './components';

const App = () => {
    const [products, setProducts] = useState([])
    return(
        <div>
            <Navbar />
            <Products/>
        </div>
    )
}

export default App;