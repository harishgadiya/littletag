import { useContext, useEffect, useRef, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Login from '../../molecules/Login';
import { Button, Circle, Icon } from '../../atoms';
import './header.scss';
import { auth } from '../../../config/firebase-config';
import SearchInput from '../../molecules/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../api/userAPIs';
import { getCartProducts, getWishlistProducts } from '../../../api/productAPIs';
import Logo from './Logo';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const Header = () => {
  const { openLoginPopup, name, checkoutProductCount, wishlistProductCount, userId } = useSelector((state) => ({
    ...state?.login,
    name: state?.user?.name,
    userId: state?.user?.id,
    checkoutProductCount: state?.checkout?.productCount,
    wishlistProductCount: state?.wishlist?.productCount,
  }));
  const [loginPopup, setLoginPopup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      if (scrollPosition > 86) {
        headerRef.current.classList.add('sticky');
        // setShowSearch(true);
      } else {
        headerRef.current.classList.remove('sticky');
        // setShowSearch(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setLoginPopup(openLoginPopup);
  }, [openLoginPopup]);

  useEffect(() => {
    getCartProducts(dispatch, userId);
    getWishlistProducts(dispatch, userId);
  }, [dispatch, userId]);

  const loginHandler = () => {
    setLoginPopup((prev) => !prev);
  };

  const wishlistHandler = () => {
    history.push('/wishlist');
  };

  const handleSearch = (value, shouldInvoke) => {
    setShowSearch(!showSearch);
    if (shouldInvoke) {
      setShowSearch(value);
    }
  };

  const checkoutHandler = () => {
    history.push('/checkout');
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        logoutUser(dispatch);
        console.log('logged out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleNavigation = (url) => {
    history.push(url);
  };

  if (name && loginPopup) {
    setLoginPopup(false);
  }

  const usernameIntials =
    name
      ?.split(' ')
      ?.map((word) => word?.[0])
      ?.join('') || '';

  return (
    <header className="header" ref={headerRef}>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <div className="row">
            <div className="col-2 show-small">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <div className="col-2 col-lg-2">
              <Navbar.Brand href="/">
                <Logo />
              </Navbar.Brand>
            </div>
            <div className="col-8 show-small">
              <Nav>
                <Button className="search-input" onClick={handleSearch} text={<Icon name="search" />} />
                {usernameIntials.length > 0 ? (
                  <NavDropdown title={<div className="username">{usernameIntials}</div>}>
                    <NavDropdown.Item className="p-1" onClick={() => handleNavigation('/profile')}>
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item className="p-1" onClick={handleSignOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Icon name="user" onClick={loginHandler} />
                )}
                <div className="position-relative">
                  {wishlistProductCount > 0 && <Circle text={wishlistProductCount} />}
                  <Icon
                    name={wishlistProductCount > 0 ? 'heart-filled' : 'heart'}
                    className="heart"
                    onClick={wishlistHandler}
                  />
                </div>
                <div className="position-relative">
                  {checkoutProductCount > 0 && <Circle text={checkoutProductCount} />}
                  <Icon
                    name={checkoutProductCount > 0 ? 'checkout-filled' : 'checkout'}
                    className="heart"
                    onClick={checkoutHandler}
                  />
                </div>
              </Nav>
            </div>
            <div className="col-12 col-md-10 ">
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-9">
                      <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/listing?gender=female">Women</Nav.Link>
                        <Nav.Link href="/listing?gender=male">Men</Nav.Link>
                        <Nav.Link href="/listing">All Products</Nav.Link>
                      </Nav>
                    </div>
                    <div className="col-md-3 hide-small">
                      <Nav>
                        <Button className="search-input" onClick={handleSearch} text={<Icon name="search" />} />
                        {usernameIntials.length > 0 ? (
                          <NavDropdown title={<div className="username">{usernameIntials}</div>}>
                            <NavDropdown.Item className="p-1" onClick={() => handleNavigation('/profile')}>
                              My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item className="p-1" onClick={handleSignOut}>
                              Logout
                            </NavDropdown.Item>
                          </NavDropdown>
                        ) : (
                          <Icon name="user" onClick={loginHandler} />
                        )}
                        <div className="position-relative">
                          {wishlistProductCount > 0 && <Circle text={wishlistProductCount} />}
                          <Icon
                            name={wishlistProductCount > 0 ? 'heart-filled' : 'heart'}
                            className="heart"
                            onClick={wishlistHandler}
                          />
                        </div>
                        <div className="position-relative">
                          {checkoutProductCount > 0 && <Circle text={checkoutProductCount} />}
                          <Icon
                            name={checkoutProductCount > 0 ? 'checkout-filled' : 'checkout'}
                            className="heart"
                            onClick={checkoutHandler}
                          />
                        </div>
                      </Nav>
                    </div>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
      {showSearch && <SearchInput udpateState={(value) => handleSearch(false, true)} />}
      <div>{loginPopup && <Login {...{ isShow: loginPopup, onCloseHandler: loginHandler }} />}</div>
    </header>
  );
};

export default Header;
