import './header.css';
import logo from './logo.jpg';


function Header() {
  return (
    <header>
            <nav className='navbar'>
              <a href='/' className="a">
                <div className="logoP">
                    <img src={logo} href="/"/>
                </div>
              </a>
                
                <ul className='nav-menu'>
                    <li><a href = '/'>Home</a></li>
                    <li><a href = '/about'>About</a></li>
                    <li><a href = '/contacts'>How it works</a></li>
                    <li><a href = '/team'>Our Team</a></li>
                    <li><a href = '/contacts'>Links</a></li>
                    <li><a href = '/contacts'>Contacts</a></li>
                </ul>
                <div className="lupa">lupa</div>
            </nav>
    </header>
  );
}

export default Header;