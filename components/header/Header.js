import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header(props) {
  const router = useRouter();

  const name = "< Praveen Kumar Nagarajan />";
  const navList = [
    { label: "< Projects />", nav: "/projects" },
    { label: "< Skills />", nav: "/skills" },
    { label: "< Blogs />", nav: "/blogs" },
    { label: "< Contact />", nav: "/contact" },
  ];

  return (
    <Navbar bg="light" expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="/about" className="owner"> {name} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="nav_list">
            {navList.map(function (nav) {
              return (
                <li
                  className={
                    nav.nav === router.pathname ? `nav_link active` : `nav_link`
                  }
                  key={nav.nav}
                >
                  <Link href={nav.nav}>{nav.label}</Link>
                </li>
              );
            })}
          </ul>
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/projects"> Projects </Nav.Link>
            <Nav.Link href="/skills"> Skills </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  {
    /* <a href="/about" className="owner">
    {name}
  </a>
  <ul className="nav_list">
    {navList.map(function (nav) {
      return (
        <li className={(nav.nav === router.pathname) ? `nav_link active` : `nav_link`} key={nav.nav}>
          <Link href={nav.nav}>{nav.label}</Link>
        </li>
      );
    })}
  </ul> */
  }
}
