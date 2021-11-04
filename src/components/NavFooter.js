
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import MealPlan from './MealPlan';
import Settings from './Settings';
import './NavFooter.css';
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import {nanoid} from 'nanoid';


const NavFooter = () => {
	return (
		
    <>
      
        <ul className="footer">
        
            <li key={nanoid()}><NavLink  to='/'> <FaHome/> </NavLink></li>
            <li key={nanoid()}><NavLink to='/Recipes'><BiFoodMenu/></NavLink> </li> 
            <li key={nanoid()}><NavLink to='/Favorites'><MdFavoriteBorder/></NavLink></li>
            <li key={nanoid()}> <NavLink to='/MealPlan'><IoCalendarNumberSharp/></NavLink></li>
            <li key={nanoid()}><NavLink to='/Settings'><FaUserCog/></NavLink></li>

        </ul>
        
        <Switch>
        
            <Route exact path= '/' component={Home} />
            <Route path= '/Recipes' component={Recipes} />
            <Route path= '/Favorites' component={Favorites} />
            <Route path= '/MealPlan' component={MealPlan} />
            <Route path= '/Settings' component={Settings} />

        </Switch>

		</>
	);
};

export default NavFooter;