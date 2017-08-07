import makeMeASandwich from '../make-me-a-sandwich.js'

test('returns null if sandwich does not exist', () => {
  const req = getReq()
  const result = makeMeASandwich(req)
  expect(result).toBe(null)
})

test('returns my sandwich', () => {
  const sandwich = 'Monte Cristo'
  const req = getReq(sandwich)
  const result = makeMeASandwich(req)
  expect(result).toBe(sandwich)
})

function getReq(sandwich) {
  return {query: {sandwich: sandwich}}
}
