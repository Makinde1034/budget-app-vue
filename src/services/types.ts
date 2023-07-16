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
}[]

export type CreateBudegtRequest = {
  name : string,
  amount : any,
  startDate : string,
  endDate : string,
  description ?: string
}