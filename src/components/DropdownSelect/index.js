import "./DropdownSelect.css"

const DropdownSelect = (props) => {
    console.log(props.items)
    return (
        <div className="Dropdown-Select">
            <label>{props.label}</label>
            <select>
                {props.items.map((item,index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownSelect