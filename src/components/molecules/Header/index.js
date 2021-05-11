import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Icon } from '../../atoms';
import './index.scss';

const Header = () => {
  return (
    <header className='header'>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <Navbar.Brand href="/">littleTAGs</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="col-cm-6 col-md-9">
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Women</Nav.Link>
                    <Nav.Link href="/products">Men</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
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
                    <Icon name='search' />
                    <Icon name='user' />
                    <Icon name='checkout' />
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
      <div>
        
      </div>
    </header>
  );
};

export default Header;
