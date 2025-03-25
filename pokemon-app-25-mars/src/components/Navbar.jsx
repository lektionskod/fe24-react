import NavItem from './NavItem';

function Navbar() {
  const navItems = ['Pokedex', 'Team Generator', 'Search Pokemon'];

  return (
    <nav className="nav">
        <ul className="nav__list">
          {
            navItems.map((item, index) => <NavItem key={index} text={item} />)
          }
        </ul>
    </nav>
  )
}

export default Navbar;
