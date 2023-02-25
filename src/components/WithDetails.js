import React from 'react'

const WithDetails = ({ pig }) => {
    return (
        <div>
            <h1>{ pig.name }</h1>
            <h3>🐷 Specialty: { pig.specialty }</h3>
            <h2>{ pig.weight } kilos</h2>
            <h4 className="achievementText">🎖️ { pig["highest medal achieved"]} medal achieved</h4>
            { pig.greased ? <h3>Greased</h3> : <div>Not Greased</div> }
        </div>
    )
}

export default WithDetails