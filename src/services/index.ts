import axios from 'axios'
import type { CreateBudegtRequest, updateBudgetRequest, RegisterRequest } from './types'

const token = localStorage.getItem('token')

export default {
  getUserBudgets() {
    return axios({
      url: 'http://localhost:4000/get-budgets',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  },
  createUserBudgets(data: CreateBudegtRequest) {
    return axios({
      url: 'http://localhost:4000/create-budget',
      method: 'POST',
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getBudgetActivities(id: string) {
    return axios({
      url: `http://localhost:4000/budget-activities/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getBudget(id: string) {
    return axios({
      url: `http://localhost:4000/fetch-budget/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  updateBudget(data: updateBudgetRequest) {
    return axios({
      url: `http://localhost:4000/update-budget/${data.id}`,
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
  register(data: RegisterRequest) {
    return axios({
      url: `http://localhost:4000/register`,
      method: 'POST',
      data
    })
  },
  login(data: RegisterRequest) {
    return axios({
      url: `http://localhost:4000/login`,
      method: 'POST',
      data
    })
  },
  verifyToken(){
    return axios({
      url:'http://localhost:4000/verify-token',
      method:'POST',
      data : {
        token 
      }
    })
  }
}
