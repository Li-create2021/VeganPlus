import { Link, useHistory } from 'react-router-dom';
import './NavFooter.css';
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { nanoid } from 'nanoid';


const NavFooter = ({ setHide }) => {
    let history = useHistory();

    return (

        <>
            <ul className="footer">

                <li className="nav-links">
                    <FaHome size={25} color={"rgb(38, 170, 21)"} onClick={() => history.push('/')} />
                </li>

                <li className="nav-links">
                    <BiFoodMenu size={25} color={"rgb(38, 170, 21)"} onClick={() => history.push('/Recipes')} />
                </li>

                <li className="nav-links">
                    <MdFavoriteBorder size={25} color={"rgb(38, 170, 21)"} onClick={() => history.push('/Favorites')} />
                </li>

            </ul>
        </>
    );
};

export default NavFooter;