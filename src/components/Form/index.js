import Button from "../Button/Button"
import DropdownSelect from "../DropdownSelect"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {
    const teams = [
        "TSM", "T1", "ROX"
    ]
    const submit = (event) => {
        event.preventDefault()
        console.log("Send form data")
    }
    return (
        <section className="Form">
            <form onSubmit={submit}>
                <h2>Fill in the data to create your player card.</h2>
                <TextField label="Name" placeholder="Type your name" required={true} />
                <TextField label="Role" placeholder="Type your role" required={true} />
                <TextField label="Image" placeholder="Type the path to your image" required={false} />
                <DropdownSelect label="Team" items={teams} required={true} />
                <Button text="Enviar">
                    Criar card
                </Button>
            </form>
        </section>
        //Everything between the opening and closure of the component is considered its children
    )
}

export default Form