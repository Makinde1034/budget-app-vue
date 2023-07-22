export type BudgetCardProps = {
  name: string
  amountRemaining: string
  daysLeft: string
  CreatedAt: string
  DeletedAt: string | null
  ID: string
  UpdatedAt: string
  amount: number
  amountSpent: string
  description: string
  endDate: string
  startDate: string
  color:string
}

export type FetchUserBudgetResponse = BudgetCardProps[]

export type CreateBudegtRequest = {
  name : string,
  amount : any,
  startDate : string,
  endDate : string,
  description ?: string
  color:string
}

export type updateBudgetRequest = {
  amount : string,
  title : string,
  id:string
}