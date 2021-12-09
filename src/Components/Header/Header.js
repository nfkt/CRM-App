import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Next } from "react-bootstrap/esm/PageItem";
import UserContext from "../../context/user-context";

function Header() {
  const userContext = useContext(UserContext);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('mytoken');
  const username = localStorage.getItem('username');


  return (
    <div className="navbarnfkt">
      <div className="headerTitle">
        <div className="headerContent">Training Academy Management System</div>
      </div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand >{username}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {role !== ('Admin' || 'Manager') && <Nav.Link>
                <Link to="/home" className="navItem">
                  Home
                </Link>
              </Nav.Link>
              }
              {token && (
                <Link
                  className="navItem"
                  onClick={() => {
                    userContext.logout(); window.location = "/home/login"
                  }}
                  to="home/login"
                >
                  Logout
                </Link>
              )}
              {!token && (
                <Link className="navItem" to="/home/login">
                  Login
                </Link>
              )}
              {!token && (
                <Link className="navItem" to="/home/register">
                  Register
                </Link>
              )}

              {role === 'Admin' && token && (
                <Link className="navItem" to="/admin/register-manager">
                  Add Manager
                </Link>
              )}
              {role === ('User') && (
                <Link className="navItem" to="/user/view-courses">
                  View Course
                </Link>
              )}

              {role === ('User') && (
                <Link className="navItem" to="/user/view-resources">
                  View Resource
                </Link>
              )}

              {role !== ('Admin' || 'Manager') &&
                <NavDropdown title="Enquiry" id="basic-nav-dropdown">

                  {role === 'User' && token && <NavDropdown.Item>
                    <Link to="/user/course-enquiry">Course Enquiry</Link>
                  </NavDropdown.Item>}

                  {!token && <NavDropdown.Item>
                    <Link to="/home/course-enquiry">Course Enquiry</Link>
                  </NavDropdown.Item>}

                  {!token && <NavDropdown.Item>
                    <Link to="/home/resource-enquiry">Resource Enquiry</Link>
                  </NavDropdown.Item>}

                  {role === ('User') && token && <NavDropdown.Item>
                    <Link to="/user/resource-enquiry">Resource Enquiry</Link>
                  </NavDropdown.Item>}
                </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
