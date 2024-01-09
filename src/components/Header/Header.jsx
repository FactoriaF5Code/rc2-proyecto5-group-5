import './Header.css';
import logo from '../../assets/img/logoAsturFlix.png';
import userImg from '../../assets/img/userImg.png';
import btnMore from '../../assets/img/btn-mas.png';

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='' className='logo left' />
      </Link>
      <nav className='left'>
        <ul>
          <Link to='/'>
            <li>Películas</li>
          </Link>
          <Link to='/series'>
            <li>Series</li>
          </Link>
        </ul>
      </nav>
      <ul className='header__userLogo right'>
        <a href=''>
          <li>
            <img src={userImg} alt='' />
          </li>
        </a>
        <li id='header__userLogo-more'>
          <img src={btnMore} alt='' />
        </li>
      </ul>
    </header>
  );
}
