import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(props) {

  const router = useRouter();

  const name = "< Praveen Kumar Nagarajan />";
  const navList = [
    { label: "< Projects />", nav: "/projects" },
    { label: "< Skills />", nav: "/skills" },
    { label: "< Blogs />", nav: "/blogs" },
    { label: "< Contact />", nav: "/contact" }
  ];

  return (
    <div className="header">
      <a href="/about" className="owner">
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
      </ul>
    </div>
  );
}
