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
                <NavbarBrand href = '/'>24-Hour Project</NavbarBrand>
            </Navbar>
        </header>
    );
};

export default Header;