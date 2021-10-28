import React from "react";

function Checkbox() {
    const [active, setActive] = React.useState(true);

    function handleChange() {
        setActive(!active);
    }

    return (
        <input type="checkbox" onChange={handleChange} checked={active} />)
}

export default Checkbox;
