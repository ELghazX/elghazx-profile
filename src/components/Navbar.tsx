import { useLocation } from "react-router";
import { Link } from "react-router";

// export default function Navbar() {
//
//   return <nav className="font-display font-bold text-2xl flex justify-center gap-4 p-18">
//     <Link to="">Home</Link>
//     <Link to="">Project</Link>
//     <Link to="">Certification</Link>
//     <Link to="">About</Link>
//     <Link to="">Resume</Link>
//     <Link to="">Contact</Link>
//   </nav>
// }
export default function Navbar() {
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'project', label: 'PROJECT', path: '/project' },
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="flex justify-center items-center h-16 gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`text-gray-900 px-3 py-2 text-sm font-bold font-display uppercase tracking-wide transition-colors duration-200 ${location.pathname === item.path
              ? 'underline underline-offset-8 '
              : 'text-gray-100 hover:underline underline-offset-8'
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
