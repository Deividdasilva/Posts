
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">Postagens</Link>
      <Link className="favoritos" to="/favoritos">Favoritos</Link>
    </header>
  )
}