const connection = require('./connection')
module.exports = {
  getReviews,
  getReviewById,
  addReviews,
  editReviews,
  deleteReview,
  getReviewByBeanId,
  userCanEdit,
}

function getReviews(auth0Id, db = connection) {
  return db('reviews')
    .join('beans', 'reviews.bean_id', 'beans.id')
    .join('cafes', 'reviews.cafe_id', 'cafes.id')
    .join('roasters', 'reviews.roaster_id', 'roasters.id')
    .select(
      'beans.flavour_profile as flavourProfile',
      'beans.name as beansName',
      'beans.flavour_profile as flavourDesc',
      'cafes.name as cafesName',
      'cafes.city as cafesCity',
      'roasters.name as roasterName',
      'reviews.*'
    )
    .where('auth_user_id', auth0Id)
}

function getReviewById(id, db = connection) {
  return db('reviews').where({ id }).select()
}
function getReviewByBeanId(bean_id, db = connection) {
  return db('reviews').where({ bean_id }).select()
}

function addReviews(newReview, db = connection) {
  return db('reviews').insert(newReview)
}

function editReviews(id, newContent, db = connection) {
  return db('reviews').where({ id }).update(newContent)
}

function deleteReview(id, db = connection) {
  return db('reviews').where({ id }).del()
}

function userCanEdit(id, auth0Id, db = connection) {
  return db('reviews')
    .where('id', id)
    .first()
    .then((review) => {
      if (review.auth_user_id !== auth0Id) {
        throw new Error('Unauthorized')
      }
    })
}