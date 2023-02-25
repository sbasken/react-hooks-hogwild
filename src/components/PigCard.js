import React, { useState } from 'react'
import NoDetails from './NoDetails'
import WithDetails from './WithDetails'

const PigCard = ({pig}) => {

  const [ showDetails, setShowDetails] = useState( true )

  


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