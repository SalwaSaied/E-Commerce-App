import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import wishlist from "../images/wishlist.svg";
import compare from "../images/compare.svg";
import menu from "../images/menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setNavOpen(false);
  };

  return (
    <>
      {/* Top Strip */}
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:{" "}
                <a className='text-white' href='tel:+91 544545454'> +91 544545454</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Upper Header */}
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='header-responsive'>
            <div className='row align-items-center'>
              <div className='col-2'>
                <h2>
                  <Link className='text-white' to="/">E-Commerce</Link>
                </h2>
              </div>
              <div className='col-5'>
                <div className="input-group">
                  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." />
                  <span className="input-group-text p-3"><BsSearch className='fs-6' /></span>
                </div>
              </div>
              <div className='col-5'>
                <div className='header-upper-links d-flex align-items-center justify-content-between'>
                  <Link to="/compare-product" className='text-white d-flex align-items-center gap-10'>
                    <img src={compare} alt="compare" />
                    <p className='mb-0'>Compare<br /> Products</p>
                  </Link>
                  <Link to="/wishlist" className='text-white d-flex align-items-center gap-10'>
                    <img src={wishlist} alt="wishlist" />
                    <p className='mb-0'>Favourite<br />WishList</p>
                  </Link>
                  <Link to="/login" className='text-white d-flex align-items-center gap-10'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0'>Login<br />My Account</p>
                  </Link>
                  <Link to="/cart" className='text-white d-flex align-items-center gap-10'>
                    <img src="/images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Header with Responsive Menu */}
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30 position-relative'>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    onClick={toggleMenu}
                  >
                    <img src={menu} alt="menu" />
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  {isMenuOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="" onClick={closeMenus}>Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="" onClick={closeMenus}>Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="" onClick={closeMenus}>Something else here</Link></li>
                    </ul>
                  )}
                </div>
                {/* Hamburger icon for mobile */}
                <button
                  className="menu-toggle"
                  aria-label="Toggle navigation"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{ background: 'none', border: 'none', color: 'white', fontSize: 28, marginLeft: 'auto', marginRight: 10, display: 'none' }}
                >
                  &#9776;
                </button>
                <div className={`menu-links${navOpen ? ' open' : ''}`}>
                  <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center gap-15'>
                    <NavLink to="/" onClick={closeMenus}>Home</NavLink>
                    <NavLink to="/product" onClick={closeMenus}>Products</NavLink>
                    <NavLink to="/about" onClick={closeMenus}>About</NavLink>
                    <NavLink to="/contact" onClick={closeMenus}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;