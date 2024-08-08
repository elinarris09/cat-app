import React, { useState } from "react";
import axios from "axios"

const CatsContext = React.createContext()

function CatsContextProvider(props) {
const [allTheCatsInfo, setAllTheCatsInfo] = useState([])

const baseUrl = "http://localhost:8000/cats"
  
  function getCats() {
    axios.get(baseUrl)
      .then(res => setAllTheCatsInfo(res.data))
      .catch(err => console.log(err))
  }

  function addCat(newCat) {
    axios.post(baseUrl, newCat)
      .then(res => setAllTheCatsInfo(prevCats => [...prevCats, res.data]))
      .catch(err => console.log(err))
    }

    function deleteCat(catId) {
    axios.delete(`${baseUrl}/${catId}`)
      .then(res => {
        setAllTheCatsInfo(prevCats => prevCats.filter(cat => cat._id !== catId))
        console.log(res)
      })
      .catch(err => console.log(err))
     }
  
  function editCat(updates, catId) {
    axios.put(`${baseUrl}/${catId}`, updates)
      .then(res => {
        setAllTheCatsInfo(prevCats => prevCats.map(cat => cat._id !== catId ? cat : res.data))
      })
      .catch(err => console.log(err))
    }

return (
    <CatsContext.Provider
        value={{
            getCats,
            addCat,
            deleteCat,
            editCat,
            baseUrl,
            allTheCatsInfo
        }}
    >
        {props.children}
    </CatsContext.Provider>
  )
}

export {CatsContext, CatsContextProvider}