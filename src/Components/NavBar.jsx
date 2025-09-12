import "./components.css"
import { useNavigate } from "react-router-dom";
function NavBar({logo}) {
    const navigate = useNavigate();
    return (
        
        <nav className="navbar">
            <div className="flex items-center">
                <img src={logo} alt="" srcSet="" className="h-15" />
                <h1 className="text-4xl text-blue-700 font-bold">StockSync</h1>
            </div>

            <ul className="flex space-x-8 text-lg font-medium items-center">
                <li>About</li>
                <li>Features</li>
                <button className="btn" onClick={() => navigate('/login')}>Login</button>

            </ul>
        </nav>
    )
}
export default NavBar;