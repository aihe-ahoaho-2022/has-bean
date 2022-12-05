const connection = require('./connection')
module.exports = {
  getReviews,
  addReviews,
  editReviews,
  deleteReview,
}

function getReviews(db = connection) {
  return db('reviews').select()
}

function addReviews(newReview, db = connection) {
  return db('reviews').insert(newReview)
}

function editReviews(id, newContent, db = connection) {
  return db('reviews').where({ id }).insert(newContent)
}

function deleteReview(id, db = connection) {
  return db('reviews').where({ id }).del()
}
