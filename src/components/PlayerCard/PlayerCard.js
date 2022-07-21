import './PlayerCard.css'

// Another way to get the properties is to use the javascript 'de-structure' operator, which 
// will split the main object into multiple singular variables.
const PlayerCard = ({name, role, image, bgColor, atChampionRemoved, id}) => {
    console.log(name,role,image)
    const remover = (event) => {
        event.preventDefault()
        atChampionRemoved(id)
    }
    return (
        <div className='player'>
            <div className='player-header' style={{backgroundColor: bgColor}}>
                <img src={image} alt={name}/>
            </div>

            <div className='player-footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <button onClick={remover}>Remove</button>
            </div>
        </div>
    )
}

export default PlayerCard