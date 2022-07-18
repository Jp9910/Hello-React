import './PlayerCard.css'

// Another way to get the properties is to use the javascript 'de-structure' operator, which 
// will split the main object into multiple singular variables.
const PlayerCard = ({name, role, image}) => {
    console.log(name,role,image)
    return (
        <div>
            <div>
                <img src={image} alt={name}/>
            </div>

            <div>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default PlayerCard