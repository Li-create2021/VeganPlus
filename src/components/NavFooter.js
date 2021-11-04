
import { Link } from 'react-router-dom';
import './NavFooter.css';
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";


const NavFooter = () => {
	return (
		
    <>
      
        <ul className="footer">
                
                    <li>
                        <Link to="/">  <FaHome size={25} color={"#009999"}/></Link>
                    </li>
                    
                    <li>                
                        <Link to="/Recipes"> <BiFoodMenu size={25} color={"#009999"}/></Link>
                    </li>

                    <li>
                        <Link to="/Favorites">  <MdFavoriteBorder size={25} color={"#009999"}/></Link>
                    </li>
       
        </ul>
        
   

		</>
	);
};

export default NavFooter;