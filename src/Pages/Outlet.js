import React from 'react';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import data from '../data';

function Outlet() {

   /*  const discount = data.products.map((product, key) => {
        if (product.discount >= 0) {
        }
    }); */

    return (
        <div>
            <Menu />
            <Header />
            <Footer />
        </div>
    )
};

export default Outlet;
