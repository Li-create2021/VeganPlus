
import { Link } from 'react-router-dom';
import './NavFooter.css';
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { nanoid } from 'nanoid';


const NavFooter = ({clickHandler}) => {
	    
    return (
		
        <>
            <ul className="footer">             

                        <li key={nanoid()} className="nav-links">
                            <Link to="/">  <FaHome size={25} color={"#009999"}/></Link>
                        </li>
                        
                        <li key={nanoid()} className="nav-links" onClick={() => window.location.reload()}>                
                            <Link to="/Recipes"> <BiFoodMenu size={25} color={"#009999"}/></Link>
                        </li>

                        <li key={nanoid()} className="nav-links">
                            <Link to="/Favorites">  <MdFavoriteBorder size={25} color={"#009999"}/></Link>
                        </li>
        
            </ul>
		</>
	);
};

export default NavFooter;