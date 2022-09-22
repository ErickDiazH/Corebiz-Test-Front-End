import axios from 'axios'
const ENDPOINT = 'https://corebiz-test.herokuapp.com/api/v1'
export const sendNewsletterService = async (payload) => {
  const response = await axios.post(`${ENDPOINT}/newsletter`, payload)
  return response
}