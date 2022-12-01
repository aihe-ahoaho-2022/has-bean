import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

//this is where we have individual informaion of the roaster
export default function Roaster() {
  const params = useParams()
  const roasterId = Number(params.id)
  //this is where we access the global redux state to access the single roaster
  const roasters = useSelector((state) => state.roasters)
  const searchRoasters = useSelector((state) => state.searchRoasters)

  //select the single roaster by filter
  const singleRoaster = roasters.find((roaster) => roaster.id === roasterId)

  console.log('searchRoaster in Roaster.jsx', searchRoasters);

  function mapRoasterCafes(query) {
    const filteredRoasters = searchRoasters.filter( ({roasterName}) => roasterName.toLowerCase().includes(query.toLowerCase()));
   return filteredRoasters?.map((oneCafe) => {
      const { id, cafeName, address, city } = oneCafe
      return (
        <div key={id}>
          <ul>
            <li>{cafeName}</li>
            <li>{address}</li>
            <li>{city}</li>
          </ul>
        </div>
      )
      })
  }

  return (
    <>
      <div>
        {singleRoaster && (
          <div>
            <h3>{singleRoaster.name}</h3>
            <p>Roastery location: {singleRoaster.location}</p>
            <p>{singleRoaster.details}</p>
          </div>
        )}
      </div>
      {mapRoasterCafes(singleRoaster?.name)}
    </>
  )
}
