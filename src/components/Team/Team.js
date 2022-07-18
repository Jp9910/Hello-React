import PlayerCard from "../PlayerCard/PlayerCard"
import "./Team.css"

const Team = (props) => {
    const css = {backgroundColor: props.cor2}
    console.log("asdf:" + JSON.stringify(props.players))
    // To have a conditional rendering, a condition is placed INSIDE the return statement, before the actual jsx.
    // It can be either a >boolean condition<, like AND, or a >ternary expression<.
    // Using a boolean condition --> return (props.players.length > 0 && <section className="" ...)
    return (
        props.players.length > 0 ?
        <section className="team" style={css}>
            <h3 style={{ borderColor: props.cor1 }}>{props.name}</h3>
            <div className="players">
                {props.players.map(player => 
                                    <PlayerCard
                                        name={player.name}
                                        role={player.role}
                                        image={player.imageLink}
                                    />
                                )
                }
            </div>
        </section>
        : 
        "" // Otherwise, returns an empty string
    )
}

export default Team