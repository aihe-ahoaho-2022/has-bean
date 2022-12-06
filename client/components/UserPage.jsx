import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews, removeReview } from '../actions/userpage'
import { useAuth0 } from '@auth0/auth0-react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { IfAuthenticated } from './Authenticated'
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function UserPage() {
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } = useAuth0()
  const dispatch = useDispatch()
  let reviews = useSelector((state) => state.reviews)

  useEffect( async () => {
    const token = await getAccessTokenSilently()
    if (isAuthenticated) {dispatch(fetchReviews(token))}
  }, [isAuthenticated])
  const options = {
     scales: {
      r: {
        max: 5.0,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  }

  const handleDelete = async (e, id) => {
    const token = await getAccessTokenSilently()
    dispatch(removeReview(id, token))
  }

  const handleSignIn = (e) => {
    loginWithRedirect()
  }

  return (
    <>
      <div>
        <h1>I&apos;ve Bean</h1>
        { isAuthenticated == false ? 
        <div> Please <button onClick={handleSignIn}>login / register</button> to see your reviews.</div>
        :
        <div>
        <Link to="/reviews/add">
          <button>Add a review</button>
        </Link>
        {reviews?.map((review) => {
          const data = {
            type: 'radar',
            labels: ['Flavour', 'Aroma', 'Acidity', 'Body', 'Aftertaste'],
            datasets: [
              {
                label: 'Flavour Profile',
                data: [
                  review.flavour,
                  review.aroma,
                  review.acidity,
                  review.body,
                  review.aftertaste,
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          }

          return (
            <div key={review.id}>
              <div>
                <Radar data={data} options={options} />
              </div>
              <ul>
                <li>My comment: {review.comment}</li>
                <li>Overall Rating: {review.rating}</li>
                <li>Coffee Type: {review.coffee_type}</li>
                <li>Bean Name: {review.beansName}</li>
                <li>Cafe Name: {review.cafesName}</li>
                <li>Roasters Name: {review.roasterName}</li>
                <li>Roasters Notes: {review.flavourDesc}</li>
              </ul>
              <button
                onClick={(e) => {
                  handleDelete(e, review.id)
                }}
              >
                Delete comment
              </button>
            </div>
          )
          })
        }
        </div>
        }
      </div>
    </>
  )
}
