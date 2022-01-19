import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar } from "react-bootstrap";

export default function Header(props) {
  const router = useRouter();

  const name = "< Praveen Kumar Nagarajan />";
  const navList = [
    { label: "< Projects />", nav: "/projects" },
    { label: "< Skills />", nav: "/skills" },
    { label: "< Blogs />", nav: "/blogs" },
    { label: "< More About Me />", nav: "/contact" },
  ];

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="header"
      style={{ backgroundColor: "#f9f8f4 !important" }}
    >
      <Container fluid>
        <Navbar.Brand href="/about" className="owner">
          {name}
        </Navbar.Brand>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
