import axios from 'axios'
import startServer from '../start-server'

let server

beforeAll(() => {
  return startServer().then(s => {
    server = s
  })
})

afterAll(done => {
  server.close(done)
})

test('can get users', () => {
  axios
    .get('http://localhost:3001/api/users')
    .then(respose => {
      console.log(response.data.users)
    })
})
