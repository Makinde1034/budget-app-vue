import api from './index'
import type {
  BudgetCardProps,
  CreateBudegtRequest,
  FetchUserBudgetResponse,
  RegisterRequest,
  updateBudgetRequest
} from './types'

export const fetchBudgets = async (): Promise<FetchUserBudgetResponse> => {
  try {
    const res = await api.getUserBudgets()
    console.log(res.data)
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export const createBudget = async (data: CreateBudegtRequest) => {
  try {
    const res = await api.createUserBudgets(data)
    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const fetchBudgetActivities = async (id: string) => {
  try {
    const res = await api.getBudgetActivities(id)
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export const fetchBudget = async (id: string): Promise<BudgetCardProps> => {
  try {
    const res = await api.getBudget(id)
    console.log(res.data)
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export const updateBudget = async (data: updateBudgetRequest) => {
  try {
    const res = await api.updateBudget(data)
    console.log(res.data)
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export const register = async (data: RegisterRequest) => {
  try {
    const res = await api.register(data)
    localStorage.setItem("token",res.data.token)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err.response.data.msg)
  }
}

export const login = async (data: RegisterRequest) => {
  try {
    const res = await api.login(data)
    console.log(res.data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err.response.data.msg)
  }
}