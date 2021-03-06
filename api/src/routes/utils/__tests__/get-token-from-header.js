// Things to know:
// - `test` is a global function from Jest:
//   `test(messageString, testerFunction)`
//   Learn more here: https://facebook.github.io/jest/docs/api.html#testname-fn
// - `expect` is a global function from Jest
//   which allows you to make assertsions. For
//   example:
//     `expect(1).toBe(1)`
//   Learn more here: https://facebook.github.io/jest/docs/expect.html
//
// Write unit tests for getTokenFromHeader.
// See `api/src/routes/utils/get-token-from-header.js`
// to see how this function has been implemented and
// how it's intended to be used. Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from '../get-token-from-header'
describe('getTokenFromHeader', () => {
  test('returns null if req headers doesn`t have authorization field', () => {
    const req = {headers: {}}
    expect(getTokenFromHeader(req)).toBe(null)
  })

  test('returns null if authorization doesnt start with `Token`', () => {
    const req = getReq('test.token.value')
    expect(getTokenFromHeader(req)).toBe(null)
  })

  test('returns authorization token', () => {
    const token = 'test.token.value'
    const req = getReq(`Token ${token}`)
    expect(getTokenFromHeader(req)).toBe(token)
  })
})

function getReq(authorization) {
  return {headers: {authorization: authorization}}
}
//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=eduardo.portilho@gmail.com*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////
