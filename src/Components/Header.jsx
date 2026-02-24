import { useState } from 'react';
import Dropdown from './Dropdown';
import Win from './Win';

const Header = () => {

  const [showAbout, setShowAbout] = useState(false);
  
  return (
    <>
    <header className="App-header">
        <div className="logo">
          <p className="logo-text">Imaginary Website</p>
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about" onClick={() => setShowAbout(!showAbout)}>About</a>
          
        <Dropdown
          label="Services"
          href="#services"
          items={[
            { label: 'Web Design', href: '#web-design' },
            { label: 'SEO', href: '#seo' },
            { label: 'Marketing', href: '#marketing' },
          ]}
        />
          <Dropdown
            label="Contact"
            href="#contact"
            items={[
              { label: "CEO", href: "#contact/ceo" },
              { label: "Customer service", href: "#contact/service"}
            ]}
          />
          
        </div>
      </header>
      {showAbout && <Win title="About this web site" contents="This is an imaginary website." okButtonText="Ok" onConfirm={() => setShowAbout(!showAbout)} />}
    
    </>
    );
  }

export default Header;