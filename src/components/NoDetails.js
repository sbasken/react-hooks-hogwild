import React from 'react'

const NoDetails = ({ name, image }) => {
    return (
        <div>
            <h1>{ name }</h1>
            <img src={ image } alt={ name }/>
        </div>
)
}

export default NoDetails