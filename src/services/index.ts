import axios from 'axios'
import { CreateBudegtRequest } from './types'

export default {
  getUserBudgets() {
    return axios({
      url: 'http://localhost:4000/get-budgets',
      method: 'GET'
    })
  },
  createUserBudgets(data:CreateBudegtRequest) {
    return axios({
      url: 'http://localhost:4000/create-budget',
      method: 'POST',
      data
    })
  }
}
