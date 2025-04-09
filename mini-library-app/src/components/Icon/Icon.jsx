import { Link } from 'react-router-dom';
import './icon.css';

function Icon() {
  return (
    <Link to="/" className="link">
        <i className="icon fa-solid fa-arrow-left"></i>
    </Link>
  )
}

export default Icon;
