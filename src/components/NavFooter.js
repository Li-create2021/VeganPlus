
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import './NavFooter.css';
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
// import { IoCalendarNumberSharp } from "react-icons/io5";
// import { FaUserCog } from "react-icons/fa";
// import MealPlan from './MealPlan';
// import Settings from './Settings';

const NavFooter = () => {
	return (
		
    <>
      
        <ul className="footer">
        
            <li><NavLink to='/'> <FaHome size={25} color={"#009999"}/> </NavLink></li>
            <li><NavLink to='/Recipes'><BiFoodMenu size={25} color={"#009999"}/></NavLink> </li> 
            <li><NavLink to='/Favorites'><MdFavoriteBorder size={25} color={"#009999"}/></NavLink></li>
            {/* <li> <NavLink to='/MealPlan'><IoCalendarNumberSharp size={25} color={"#009999"}/></NavLink></li>
            <li><NavLink to='/Settings'><FaUserCog size={25} color={"#009999"}/></NavLink ></li> */}

        </ul>
        
        <Switch>
        
            <Route exact path= '/' component={Home} />
            <Route path= '/Recipes' component={Recipes} />
            <Route path= '/Favorites' component={Favorites} />
            {/* <Route path= '/MealPlan' component={MealPlan} />
            <Route path= '/Settings' component={Settings} /> */}

        </Switch>

		</>
	);
};

export default NavFooter;