import React from 'react'

const Tasks = ({ data }) => {
    return (
        <> 
        { data.map(dataa =>
            <div className="card" key={dataa.id}>
                    <h3>{dataa.heading}</h3>
                    <p>{dataa.detail}</p>
               
            </div>
        )}

        </>
    )
}

export default Tasks
