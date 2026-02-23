import { useEffect, useState, useRef } from 'react';

const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const menuRef = useRef(null);
    
    const toggleDropdown = (e) => {
        if (e) e.preventDefault();
        
        setIsDropdownOpen(prev => !prev);
    };
    
    useEffect(() => {
        
        function handleClickOutside(event) {
            const dropdown = menuRef.current.querySelector('.dropdown-services');
            if (menuRef.current && !menuRef.current.contains(dropdown) && !menuRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        
        document.addEventListener('click', handleClickOutside);
        
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

  return (
    <>
    <header className="App-header">
        <div className="logo">
          <p className="logo-text">Imaginary Website</p>
        </div>
        <div className="menu" ref={menuRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          
          <div className='services-wrapper'>
          
          <a href="#services" onClick={toggleDropdown}>Services</a>
          {isDropdownOpen && (
            <nav className="dropdown-services">
                <div className="dropdown-content">
                    <a href="#web-design">Web Design</a>
                    <a href="#seo">SEO</a>
                    <a href="#marketing">Marketing</a>
                </div>
            </nav>
          )}
          
          </div>
          
          <a href="#contact">Contact</a>
        </div>
      </header>
    </>
    );
  }

export default Header;