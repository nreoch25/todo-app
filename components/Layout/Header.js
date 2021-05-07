import { Fragment, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <Link href="/">
        <NavLink
          style={{ cursor: "pointer", fontSize: "20px" }}
          className="font-weight-bold text-white"
        >
          TODO APP
        </NavLink>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/todos">
              <NavLink style={{ cursor: "pointer" }}>Todos</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/create">
              <NavLink style={{ cursor: "pointer" }}>Create Todo</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
