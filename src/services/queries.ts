import api from './index'
import type {
  BudgetCardProps,
  CreateBudegtRequest,
  FetchUserBudgetResponse,
  RegisterRequest,
  updateBudgetRequest
} from './types'
//import { handleInvalidToken } from '@/helpers/navigation'

export const fetchBudgets = async (): Promise<FetchUserBudgetResponse> => {
  try {
    const res = await api.getUserBudgets()
    return res.data
  } catch (err:any) {
    throw new Error(err)
  }
}

export const createBudget = async (data: CreateBudegtRequest) => { 
  try {
    const res = await api.createUserBudgets(data)
    return res
  } catch (err:any) {
    throw new Error(err)
  }
}

export const fetchBudgetActivities = async (id: string) => {
  try {
    const res = await api.getBudgetActivities(id)
    return res.data
  } catch (err:any) {
    throw new Error(err)
  }
}

export const fetchBudget = async (id: string): Promise<BudgetCardProps> => {
  try {
    const res = await api.getBudget(id)
    return res.data
  } catch (err:any) {
    throw new Error(err)
  }
}

export const updateBudget = async (data: updateBudgetRequest) => {
  try {
    const res = await api.updateBudget(data)
    return res.data
  } catch (err:any) {
    throw new Error(err)
  }
}

export const deleteBudget = () => {
  console.log('deleted')
}

export const register = async (data: RegisterRequest) => { 
  try {
    const res = await api.register(data)
    localStorage.setItem("token",res.data.token)
    return res.data
  } catch (err:any) {

    throw new Error(err.response.data.msg) 
  }
}

export const login = async (data: RegisterRequest) => {
  try {
    const res = await api.login(data)
    localStorage.setItem("token",res.data.token)
    return res.data
  } catch (err:any) {

    throw new Error(err.response.data.msg)
  }
}