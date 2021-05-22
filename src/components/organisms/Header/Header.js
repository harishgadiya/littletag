import { useContext, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Login from '../../molecules/Login';
import { UserContext } from '../../../contexts/AuthContext';
import { Icon } from '../../atoms';
import './header.scss';
import { auth } from '../../../config/firebase-config';

const Header = () => {
  const currentUser = useContext(UserContext);
  const [loginPopup, setLoginPopup] = useState(false);
  const history = useHistory();
  const loginHandler = () => {
    setLoginPopup((prev) => !prev);
  };
  const wishlistHandler = () => {
    history.push('/wishlist');
  };

  const checkoutHandler = () => {
    history.push('/checkout');
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('logged out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (currentUser && loginPopup) {
    setLoginPopup(false);
  }

  const usernameIntials =
    (currentUser && currentUser.displayName.split(' ')) || [];

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2">
              <Navbar.Brand href="/">littleTAGs</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="col-cm-6 col-md-10">
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9">
                      <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Women</Nav.Link>
                        <Nav.Link href="/products">Men</Nav.Link>
                        <Nav.Link href="/listing">Listing</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="/profile">
                          My Profile
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                      </Nav>
                    </div>
                    <div className="col-md-3">
                      <Nav>
                        {/* hello {currentUser && currentUser.displayName} */}
                        <Icon name="search" />
                        {usernameIntials.length ? (
                          <NavDropdown
                            title={
                              <div className="username">{`${usernameIntials[0][0]}${usernameIntials[1][0]}`}</div>
                            }
                          >
                            <NavDropdown.Item onClick={handleSignOut}>
                              Logout
                            </NavDropdown.Item>
                          </NavDropdown>
                        ) : (
                          <Icon name="user" onClick={loginHandler} />
                        )}
                        <Icon
                          name="heart"
                          className="heart"
                          onClick={wishlistHandler}
                        />
                        <Icon
                          name="checkout"
                          onClick={checkoutHandler}
                        />
                      </Nav>
                    </div>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
      {/* <nav>
        <ul>
          <li>
            <a href='/'>About us</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav> */}
      <div>{loginPopup && <Login />}</div>
    </header>
  );
};

export default Header;
