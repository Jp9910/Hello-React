import "./TextField.css"
export const TextField =  (props) => {
    
    const placeholderModificada = `${props.placeholder}...` 

    

    const FunctionAtTypying = (event) => {
        // The read-only _target_ property of the _Event_ interface is a reference to the object
        // onto which the event was dispatched. It is different from Event.currentTarget when
        // the event handler is called during the bubbling or capturing phase of the event. 
        //console.log(event.target.value)

        props.setState( event.target.value )
        //console.log(props.state)
    }

    // Setting the _value_ attribute in the following component will hard-code it in the component.
    // This is because React doesn't keep rerendering the component, so the state is immutable.
    // The only way to reflect a change in state is by (manually rerendering the component?).
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.state} onInput={FunctionAtTypying} required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

// This file only defines the component itself.