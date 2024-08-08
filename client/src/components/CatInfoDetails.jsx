import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CatsContext } from './CatsContext'
import CatForm from "./CatForm";

export default function CatInfoDetails() {
    const { _id } = useParams()
    const { allTheCatsInfo, deleteCat, editCat } = useContext(CatsContext)
    const [editToggle, setEditToggle] = useState(false)

    const foundItem = allTheCatsInfo.find(
        info => info._id === _id
    )

    console.log(foundItem)

  return (
    <div className="cat-details">
            { !editToggle ?
            <>
                <h1>Name: {foundItem.name}</h1>
                <img src={foundItem.img}/>
                <h2>Type: {foundItem.type}</h2>
                <p>Mood: {foundItem.mood}</p>
                <p>Description: {foundItem.description}</p>
                <small>ID: {foundItem._id}</small>
                <hr/>
            <button 
                className="delete-btn" 
                onClick={() => deleteCat(_id)}>
                    Delete
            </button>
            <button 
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >
                Edit
            </button>
            </>

            :

            <>
            <CatForm
                name={foundItem.name}
                img={foundItem.img}
                mood={foundItem.mood}
                type={foundItem.type}
                description={foundItem.description}
                _id={foundItem._id}
                btnText="Submit Edit"
                submit={editCat}
            />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >
                Close
                </button>
            </>

            }
        </div>
  )
}