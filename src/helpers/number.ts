export const numberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatNumber = (x: string | number): { display: string } => {
  const display = `₦${x}`

  return { display }
}
