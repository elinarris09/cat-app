import React, { useState } from "react";

export default function CatForm(props) {
    const initInputs = { 
        name: props.name || "", 
        mood: props.mood || "", 
        img: props.img || "",
        type:  props.type || "",
        description: props.description || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

console.log(inputs, "inputs")

    return (
        <form className="cat-form" onSubmit={handleSubmit}>
            <h1>Cat Form</h1>
            <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Cat Name"/> 
            <input type="text" name="mood" value={inputs.mood} onChange={handleChange} placeholder="Cat's Mood"/>
            <input type="url" name="img" value={inputs.img} onChange={handleChange} placeholder="Picture URL of Cat"/>

            <hr/>

            Type?<br/>
            Domestic <input type="radio" name="type" value="Domestic" onChange={handleChange}/>
            Wild <input type="radio" name="type" value="Wild" onChange={handleChange}/>

            <hr/>

            <input type="text" name="description" value={inputs.description} onChange={handleChange} placeholder="Brief Description of Cat..."/>

            <br/>

            <button>Submit Cat</button>
        </form>
    )
}