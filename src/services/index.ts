import axios from 'axios'
import { CreateBudegtRequest, updateBudgetRequest } from './types'

export default {
  getUserBudgets() {
    return axios({
      url: 'http://localhost:4000/get-budgets',
      method: 'GET'
    })
  },
  createUserBudgets(data: CreateBudegtRequest) {
    return axios({
      url: 'http://localhost:4000/create-budget',
      method: 'POST',
      data
    })
  },
  getBudgetActivities(id: string) {
    return axios({
      url: `http://localhost:4000/budget-activities/${id}`
    })
  },
  getBudget(id: string) {
    return axios({
      url: `http://localhost:4000/fetch-budget/${id}`
    })
  },
  updateBudget(data: updateBudgetRequest) {
    return axios({
      url: `http://localhost:4000/update-budget/${data.id}`,
      method: 'POST',
      data: {
        title: data.title,
        amount: data.amount
      }
    })
  }
}
