import "./TextField.css"
export const TextField =  (props) => {
    const placeholderModificada = `${props.placeholder}...` 
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

// This file only defines the component itself.