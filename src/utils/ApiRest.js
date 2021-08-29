import axios from 'axios'

const URI = 'http://localhost:3000/api/items'

export const CallApi = (endpoint) => {
  return new Promise((resolve, reject) => {
    axios.get(URI + endpoint).then((dataJson) => {
      resolve(dataJson)
    }).catch((error) => {
      reject(error)
    })
  })
}
