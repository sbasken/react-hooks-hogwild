import React from 'react'
import PigCard from './PigCard'

const PigContainer = ({pigs}) => {

    const pigsToDisplay = pigs.map( pig => {
        return <PigCard key={ pig.name } pig={pig} />
    })

  return (
    <div className="ui grid container">
        {pigsToDisplay}
    </div>
  )
}

export default PigContainer