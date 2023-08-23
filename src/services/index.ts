import axios from 'axios'
import type { CreateBudegtRequest, updateBudgetRequest, RegisterRequest } from './types'

const token = localStorage.getItem('token')

const BASE_URL = 'https://budgetbuddy-ou7t.onrender.com'

export default {
  getUserBudgets() {
    return axios({
      url: `${BASE_URL}/get-budgets`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  createUserBudgets(data: CreateBudegtRequest) {
    return axios({
      url: `${BASE_URL}/create-budget`,
      method: 'POST',
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getBudgetActivities(id: string) {
    return axios({
      url: `${BASE_URL}/budget-activities/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getBudget(id: string) {
    return axios({
      url: `${BASE_URL}/fetch-budget/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  updateBudget(data: updateBudgetRequest) {
    return axios({
      url: `${BASE_URL}/update-budget/${data.id}`,
      method: 'POST',
      data: {
        title: data.title,
        amount: data.amount
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  deleteBudget() {
    
  },
  register(data: RegisterRequest) {
    return axios({
      url: `${BASE_URL}/register`,
      method: 'POST',
      data
    })
  },
  login(data: RegisterRequest) {
    return axios({
      url: `${BASE_URL}/login`,
      method: 'POST',
      data
    })
  },
  verifyToken() {
    return axios({
      url: `${BASE_URL}/verify-token`,
      method: 'POST',
      data: {
        token
      }
    })
  }
}
