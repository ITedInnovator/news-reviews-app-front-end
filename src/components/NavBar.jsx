import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link className="menu-link" to="/topics/football">Football</Link> |
            <Link to="/topics/coding">Coding</Link> |
            <Link to="/topics/cooking">Cooking</Link>


        </nav>
    )
}