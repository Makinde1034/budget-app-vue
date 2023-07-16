import api from './index'
import { BudgetCardProps,CreateBudegtRequest } from './types'

export const fetchBudgets = async (): Promise<BudgetCardProps> => {
  try {
    const res = await api.getUserBudgets()
    console.log(res)
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export const createBudget = async (data : CreateBudegtRequest) => {
  try{
    const res = await api.createUserBudgets(data)
    return res
  }catch(err){
    throw new Error(err)
  }
}
