import React from 'react';
import '../styles/Header.css';
import Links from './Links';
import { Link, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Header() {

    let location = useLocation();

    let header;
    let btn = "btn";
    let h1;
    let paragraph;
    switch (location.pathname) {
        case '/' :
            header = "header__hero home";
            btn += " btn-home";
            h1 = <h1 className="header__primaryTitle">Amazing shoes at an amazing <span className="yellow">price</span></h1>;
            break;
        case '/shop' :
            header = "header__hero shop";
            btn += " btn-display";
            h1 = <h1 className="header__primaryTitle title__alt">Find <span className="yellow">your</span> perfect shoes</h1>;
            paragraph = "paragraph-display";
            break;
        case '/sales' :
            header = "header__hero sales";
            btn += " btn-display";
            h1 = <h1 className="header__primaryTitle title__alt">Mid season <span className="red">Sales</span> <br/> Up to <span className="red">20%</span> off</h1>;
            paragraph = "paragraph-display";
            break;
        default :
            header = "header__hero";
            break;
    }

    return (
        <header className={header}>
            <Links />
            <Fade bottom cascade>
                <div className="container spacing">
                    {h1}
                    <p className={paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perspiciatis facilis beatae laudantium
                        quidem enim sit sequi!</p>
                    <Link to="/shop" className={btn}>See what we have</Link>
                </div>
            </Fade>
        </header>
    )
};

export default Header;
