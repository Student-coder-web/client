import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { logOut } from "../services/firebase";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Career Path", path: "/career" },
    { name: "Job Search", path: "/jobs" },
    { name: "Learning Hub", path: "/learning" },
    { name: "Dashboard", path: "/dashboard" },
    {name:"ResumeAnalyzer",path:"/resumeanlyzer"}
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content display:flex gap-10">
          
         
          <Link to="/" className="navbar-logo">
            AI Career Coach
          </Link>

         
          <div className="navbar-desktop-menu">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            {currentUser ? (
              <div className="auth-buttons-container">
                <Link to="/profile" className="auth-profile-link">
                  <User size={16} />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="auth-logout-button"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="navbar-cta">
                Get Started
              </Link>
            )}
          </div>

      
          <button
            className="navbar-mobile-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isOpen ? 'show' : ''}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        {currentUser ? (
          <>
            <Link to="/profile" className="navbar-link flex items-center gap-1" onClick={() => setIsOpen(false)}>
              <User size={16} />
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="navbar-mobile-cta flex items-center gap-1"
            >
              <LogOut size={16} />
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}
