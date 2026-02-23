import { useState, useRef, useEffect } from 'react';

const Dropdown = ({ label, items, href = "#" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef} >
      <a href={href} onClick={toggleDropdown}>{label}</a>
      {isOpen && (
        <nav className="dropdown-menu">
          <div className="dropdown-content">
            {items.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Dropdown;