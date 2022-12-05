import React, { useEffect, useState } from 'react'

// import { useDispatch } from 'react-redux'
// import { fetchRoasters } from '../actions/roasters'
// import { fetchCafes } from '../actions/cafes'
// import { fetchSearchRoasters } from '../actions/searchRoasters'

import MapShow from './MapShow'
import Search from './Search'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
// import Result from './Result'

export default function Home() {
  //useSelector to use the result redux
  //will use hardcoded info for now to make this state work
  const selectedResult = useSelector((state) => state.searchResult)
  const [coOrds, setCoOrds] = useState({
    lng: '45.827483279857349',
    lat: '-45.827483279857349',
    roasters: [
      {
        id: 3,
        name: 'Global Byte Cafe',
        lng: '168.3469571',
        lat: '-46.4085996',
        address: '150 Dee Street, Invercargill 9810',
        city: 'Invercargill',
        roaster_id: 1,
      },
      {
        id: 4,
        name: 'The Baker Man Cafe',
        lng: '173.26744090990596',
        lat: ' -34.95715117036878',
        address: '8 State Highway 10, Awanui 0486',
        city: 'Awanui',
        roaster_id: 1,
      },
    ],
  })

  // Function for onClick for markers on map, this will be used once we start the search Roaster > all cafes related > click on one marker
  function moreInfo(id) {
    console.log('New Cords ', id)
  }

  const [viewInfo, setViewInfo] = useState()
  useEffect(() => {
    setViewInfo(zoomAndCenterInfo(coOrds.roasters))
  }, [])

  const imageIcon = '/img/coffee.png'

  function zoomAndCenterInfo(coOrds) {
    // add if statement if there is length =1 for coOrds to set zoom
    // around the marker and cet centre
    //Find center of all points by finding half of max long and lat
    const latCoOrds = coOrds.map((coOrds) => coOrds.lat)
    const latCentre = (Math.max(...latCoOrds) + Math.min(...latCoOrds)) / 2

    const lngCoOrds = coOrds.map((coOrds) => coOrds.lng)
    const lngCentre = (Math.max(...lngCoOrds) + Math.min(...lngCoOrds)) / 2

    if (coOrds.length > 1) {
      const latRange = Math.abs(Math.max(...latCoOrds) - Math.min(...latCoOrds))
      const latDist = latRange * 111.32 // Distance in km

      const lngRange = Math.abs(Math.max(...lngCoOrds) - Math.min(...lngCoOrds))
      const lngDist = lngRange * 40075 * (Math.cos(latRange) / 360) // Dist in km

      // Find zoom by...
      const tileSize = 512 //px !!! Dunno how many tiles ffs
      const ratio = 30 // km/px at zoom level 1 for values at -40 latitude
      const zoomLevel =
        Math.log10(
          (tileSize * ratio) / Math.max(Math.abs(lngDist), Math.abs(latDist))
        ) / Math.log10(1.81) // Dimesnionless exponential equation to find zoom

      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: zoomLevel,
      }
    } else {
      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: 7.5,
      }
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.map}>
          {viewInfo && (
            <MapShow
              moreInfo={moreInfo}
              viewInfo={viewInfo}
              imageIcon={imageIcon}
              coOrds={coOrds}
            />
          )}
        </div>
        <div className={styles.right}>
          <h1>Find where your favourite coffee is served!</h1>
          <Search />
          <div>
            {selectedResult == '' ? (
              <div></div>
            ) : selectedResult.length >= 1 ? (
              <div className={styles.detail}>
                {selectedResult?.map(
                  ({ id, cafeName, address, roasterName }) => {
                    return (
                      <div key={id}>
                        <h2>{cafeName}</h2>
                        <p>{address}</p>
                        <p>Roaster: {roasterName}</p>
                      </div>
                    )
                  }
                )}
              </div>
            ) : (
              <div></div>
            )}
            <Link to={`/addNewCafe`}>
              <button>ADD NEW CAFE</button>
            </Link>
          </div>
        </div>
        <Link to="/addroaster">
          <button>Add Roaster</button>
        </Link>
      </div>
    </>
  )
}
