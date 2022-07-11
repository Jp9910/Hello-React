import DropdownSelect from "../DropdownSelect"
import TextField from "../TextField"
import "./Form.css"

const Form = () => {
    const teams = [
        "TSM", "T1", "ROX"
    ]
    return (
        <section className="Form">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField label="Name" placeholder="Type your name" />
                <TextField label="Role" placeholder="Type your role" />
                <TextField label="Image" placeholder="Type the path to your image" />
                <DropdownSelect label="Team" items={teams}/>
            </form>
        </section>
    )
}

export default Form