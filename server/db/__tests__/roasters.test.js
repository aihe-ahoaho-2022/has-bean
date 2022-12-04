const knex = require('knex')
const { test } = require('../knexfile')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)
const { getRoasters, addRoaster } = require('../roasters')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getRosters', () => {
  it('gets all roasters from roaster table in db', () => {
    expect.assertions(2)
    return getRoasters(testDb).then((roaster) => {
      expect(roaster).toHaveLength(20)
      expect(roaster[0].name).toBe('Coffee Supreme')
    })
  })
  it('add a new roaster to the roatser table in db', () => {
    expect.assertions(1)
    const fakeData = {
      id: 1,
      name: 'Coffee Test',
      location: 'Wellington',
      details: 'Better coffee for all',
      url: 'https://coffeesupreme.com/',
      image_url: 'https://tinyurl.com/3afx7e7m',
    }
    return addRoaster(fakeData, testDb).then((id) => {
      expect(id[0]).toBe(21)
    })
  })
})