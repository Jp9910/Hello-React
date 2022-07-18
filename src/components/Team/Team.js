import PlayerCard from "../PlayerCard/PlayerCard"
import "./Team.css"

const Time = (props) => {
    const css = {backgroundColor: props.cor2}
    return (
        <section className="team" style={css}>
            <h3 style={{ borderColor: props.cor1 }}>{props.name}</h3>
            <PlayerCard/>
        </section>
    )
}

export default Time