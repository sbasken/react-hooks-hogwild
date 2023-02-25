import React, { useState } from 'react'


const PigCard = ({pig}) => {

  const [ showDetails, setShowDetails] = useState( true )

  const NoDetails = ({ name, image }) => {
        return (
            <div>
                <h1>{ name }</h1>
                <img src={ image } alt={ name }/>
            </div>
    )
  }
  const WithDetails = ({ pig }) => {
    return (
        <div>
            <h1>{ pig.name }</h1>
            <h3>{ pig.specialty }</h3>
            <h2>{ pig.weight } kilos</h2>
            <h4 className="achievementText">{ pig["highest medal achieved"]} medal achieved</h4>
            { pig.greased ? <h3>Greased</h3> : <div>Not Greased</div> }
        </div>
    )
  }
  


  function handleClick() {
    setShowDetails(showDetails => !showDetails)
  }

  return (
    <div onClick={ handleClick } className='ui three wide column image pigTile'>
        { showDetails ? <NoDetails name={ pig.name } image={ pig.image }/> : <WithDetails pig={pig}/>}
    </div>
  )
}

export default PigCard