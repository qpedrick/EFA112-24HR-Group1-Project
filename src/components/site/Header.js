import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className = 'header'>
                <NavbarBrand href = '/'>React Library</NavbarBrand>
            </Navbar>
        </header>
    );
};

export default Header;