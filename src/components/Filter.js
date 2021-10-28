import FilterData from "./FilterData";
import { useState } from 'react';
import './FilterStyle.css';

function Filter(props) {
    //const [isSelected, setIsSelected] = useState(props.isSelected);
    return (
        <div className="recipe-filter">
            {/*<h4>Dish Type:</h4>*/}
            <ul className="filter-list">
                {FilterData.map((dish, index) =>
                    <li key={index} style={{ listStyleType: "none", color: "white" }}>
                        <input type="checkbox" /> {dish.dishType}
                    </li>
                )}
            </ul>
        </div >
    )
}

export default Filter;