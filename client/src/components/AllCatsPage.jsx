import React, { useContext, useEffect } from 'react'
import { CatsContext } from './CatsContext'
import Cat from './Cat'

export default function AllCatsPage() {
  const { allTheCatsInfo, getCats, deleteCat, editCat } = useContext(CatsContext)

  useEffect(() => {
    getCats()
  }, [])

  const allData = allTheCatsInfo.map(data => {
    return (
      <Cat
        key={data._id}
        deleteCat={deleteCat}
        editCat={editCat}
        {...data}
      />
    )
  })

  console.log(allTheCatsInfo)

  return (
    <div className='info-page'>
      <h1>All The Cats</h1>
      <small>*Click the cat images to see detailed information.</small>
      <br/>
      <br/>
      <br/>
      {allData}
    </div>
  )
}