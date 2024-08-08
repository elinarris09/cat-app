import React, { useContext } from "react";
import CatForm from "./CatForm";
import { CatsContext } from "./CatsContext";

export default function CatFormPage() {

    const { addCat } = useContext(CatsContext)

    return(
        <>
        <div className='cat-container'>
            <CatForm
                submit={addCat}
                btnText="Submit Cat"
            />
        </div>
        </>
    )
}