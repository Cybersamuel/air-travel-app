import { Link } from "react-router-dom";


class Navbar extends React.Component{

    render() {
        return(
            <nav className="navbar">
                <Link to="/" >List of Flights</Link>
                <Link to="/change/:id" >Update User Info</Link>
                <Link to="/create">New Flights</Link>
                <Link to="/user">New user</Link>
                <Link to="/user/:id">Change User</Link>
            </nav>
        )
    }

}