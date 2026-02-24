import Dropdown from './Dropdown';

const Header = () => {

  return (
    <>
    <header className="App-header">
        <div className="logo">
          <p className="logo-text">Imaginary Website</p>
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          
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
    </>
    );
  }

export default Header;