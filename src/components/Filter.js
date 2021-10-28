import FilterDataList from "./FilterData";

function FilterData() {
    const [isSelected, setIsSelected] = React.useState(false);

    function handleIsSelected() {
        setIsSelected(!isSelected);
    }

    return (
        <div>
            <button onClick={handleIsSelected}>
                {setIsSelected ? '❎' : ''}
            </button>
            <ul>
                {FilterDataList.map((dish, index) =>
                    <li key={index}>
                        <input type="checkbox" /> {dish.dishType}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Filter;