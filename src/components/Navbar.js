import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="mainNav">
                <div className="logo">
                    <h2>
                        <Link to="/" style={{color:"#fff",textDecoration:"none"}}>NoteBook</Link>
                    </h2>
                </div>
                <div className="menu-link">
                    <ul>
                        {/* <li>
                            <Link>Home</Link>
                        </li> */}
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service'>Service</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;