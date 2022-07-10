import TextField from "../TextField"
import "./Form.css"

const Form = () => {
    return (
        <section className="Form">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField label="Name" placeholder="Type your name" />
                <TextField label="Role" placeholder="Type your role" />
                <TextField label="Image" placeholder="Type the path to your image" />
            </form>
        </section>
    )
}

export default Form