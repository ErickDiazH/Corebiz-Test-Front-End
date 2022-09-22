import axios from 'axios'
const ENDPOINT = 'https://corebiz-test.herokuapp.com/api/v1'
export const getProductsService = async () => {
  const response = await axios.get(`${ENDPOINT}/products`)
  return response
}