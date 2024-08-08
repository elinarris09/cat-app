import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Cat(props) {
    const { name, img, _id } = props
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/cats/${_id}`)
    }

    return (
        <div className="cat">
            <h2>{name}</h2>
            <img onClick={handleClick} src={img}/>
        </div>
    )
}