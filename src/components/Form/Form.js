import { useState } from "react"
import Button from "../Button/Button"
import DropdownSelect from "../DropdownSelect/DropdownSelect"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {
    const teams = [
        "TSM", "T1", "ROX"
    ]

    //A hook keeps a state inside a function 
    const [
        nameReadOnlyState, // stateful value (represents the state of the component)
        setNameState // function to update the state of the component
    ] = useState("")
    const [roleReadOnlyState, setRoleState] = useState("")
    const [imageReadOnlyState, setImageState] = useState("")
    const [teamReadOnlyState, setTeamState] = useState("TSM") // Set TSM as initial value

    const submit = (event) => {
        event.preventDefault()
        console.log("Sent form data: " , nameReadOnlyState, roleReadOnlyState, imageReadOnlyState, teamReadOnlyState)
        props.atPlayerRegistered({ // Send an object containing the form values
            nameReadOnlyState,
            roleReadOnlyState,
            imageReadOnlyState,
            teamReadOnlyState
        })
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
                    setState={setRoleState}
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
                    items={teams}
                    required={true}
                    state={teamReadOnlyState}
                    setState={setTeamState}
                />
                <Button text="Send">
                    Criar card
                </Button>
            </form>
        </section>
        //Everything between the opening and closure of the component is considered its children
    )
}

export default Form