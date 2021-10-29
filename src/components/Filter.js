import FilterData from "./FilterData";
import './FilterStyle.css';

function Filter(props) {

    return (
        <div className="recipe-filter">
            <ul className="filter-list">
                {FilterData.map((dish, index) =>
                    < li key={index} style={{ listStyleType: "none", color: "white" }}>
                        <input type="checkbox" /> {dish.dishType}
                    </li>
                )}
            </ul>
        </div >

    )
}

export default Filter;