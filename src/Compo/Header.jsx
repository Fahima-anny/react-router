import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

const Style = {
    display:'flex',
    gap: '30px' ,
    justifyContent : 'center'
}


    return (
       <div>
        <nav style={Style}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </nav>
       </div>
    );
};

export default Header;