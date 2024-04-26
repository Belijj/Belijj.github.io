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
                    <li><a href = '/how'>How it works</a></li>
                    <li><a href = '/team'>Our Team</a></li>
<<<<<<< HEAD
                    <li><a href = '/links'>Links</a></li>
=======
                    <li><a href = '/test'>Links</a></li>
>>>>>>> 0ff66c6c4fcf131e038dd5b856bd24789c7f16cf
                    <li><a href = '/contacts'>Contacts</a></li>
                </ul>
            </nav>
    </header>
  );
}

export default Header;