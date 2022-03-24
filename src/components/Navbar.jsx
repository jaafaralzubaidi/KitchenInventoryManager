import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Kitchen Inventory Manager</h1>
            <div className="links">
                <Link to="/">Zone Management</Link>
                <Link to="/register">Register Food</Link>
                <Link to="/search">Search Food</Link>
            </div>
        </div>
      );
}
 
export default Navbar;