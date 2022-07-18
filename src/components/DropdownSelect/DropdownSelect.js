import "./DropdownSelect.css"

const DropdownSelect = (props) => {
    
    // In the _onInput_ property, refering _atChoosing_ is equivalent to the arrow function used
    const atChoosing = (event) => { // eslint-disable-line no-unused-vars
        props.setState(event.target.value)
    }
    
    return (
        <div className="Dropdown-Select">
            <label>{props.label}</label>
            <select 
                value={props.state}
                required={props.required}
                onInput={(event) => {props.setState(event.target.value)}}
            >
                <option value=""></option>
                {props.items.map((item,index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownSelect