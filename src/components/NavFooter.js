
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import MealPlan from './MealPlan';
import Settings from './Settings';
import './NavFooter.css';

const NavFooter = () => {
	return (
		
    <>
      
        <ul className="footer">
        
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Recipes'>Recipes</NavLink> </li> 
            <li><NavLink to='/Favorites'>Favorites</NavLink></li>
            <li><NavLink to='/MealPlan'>Meal Plan</NavLink></li>
            <li><NavLink to='/Settings'>Settings</NavLink></li>

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