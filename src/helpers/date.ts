import dayjs from 'dayjs'

export const getDaysLeft = (startDate: string, endDate: string) => {
  const date1 = dayjs(startDate)
  const date2 = dayjs(endDate)
  return date2.diff(date1, 'days');
}
