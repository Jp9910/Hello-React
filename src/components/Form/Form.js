import { useState } from "react"
import Button from "../Button/Button"
import DropdownSelect from "../DropdownSelect/DropdownSelect"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {

    // A hook keeps a state inside a function.
    // Whenever we want the component to react to some change in the value of a variable and
    // rerender, we need to indicate that using the useState setter. If simply using another
    // variable, the value will be altered but the DOM won't be updated.
    const [
        nameReadOnlyState, // stateful value (represents the state of the component)
        setNameState // function to update the state of the component
    ] = useState("")
    const [roleReadOnlyState, setRoleState] = useState("")
    const [imageReadOnlyState, setImageState] = useState("")
    const [teamReadOnlyState, setTeamState] = useState("") // Set TSM as initial value

    const submit = (event) => {
        event.preventDefault()
        console.log("Sent form data: " , nameReadOnlyState, roleReadOnlyState, imageReadOnlyState, teamReadOnlyState)
        props.atPlayerRegistered({ // Send an object containing the form values
            //a line with just "name" is equivalent to "name: name"
            name: nameReadOnlyState,
            role: roleReadOnlyState,
            imageLink: imageReadOnlyState,
            team: teamReadOnlyState
        })
        // Clear the form fields after insertion
        setNameState('')
        setRoleState('')
        setImageState('')
    }

    return (
        <section className="Form">
            <form onSubmit={submit}>
                <h2>Fill in the data to create your player card.</h2>
                <TextField 
                    label="Name"
                    placeholder="Type your name"
                    required={true}
                    state={nameReadOnlyState}
                    setState={state => setNameState(state)}
                />
                <TextField
                    label="Role"
                    placeholder="Type your role"
                    required={true}
                    state={roleReadOnlyState}
                    setState={setRoleState} // Is this the same as _setState={state => setRoleState(state)}_ ?
                />
                <TextField
                    label="Image"
                    placeholder="Type the path to your image"
                    required={false}
                    state={imageReadOnlyState}
                    setState={setImageState} 
                />
                <DropdownSelect
                    label="Team"
                    items={props.teamNames}
                    required={true}
                    state={teamReadOnlyState}
                    setState={setTeamState}
                />
                <Button text="Send">
                    Register
                </Button>
            </form>
        </section>
        //Everything between the opening and closure of the component is considered its children
    )
}

export default Form