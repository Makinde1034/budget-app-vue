import api from '../services/index'
import router from '../router'

export const handleAuthorizedRouteNavigation = async () => {
  const isAuthenticated = await api.verifyToken()
  if (!isAuthenticated.data.isTokenValid) {
    router.push({ name: 'regiter' })
  }
}

export const handleInvalidToken = (msg: string) => {
  const tokenError = msg.includes("Invalid token")
  console.log(tokenError)
  if(tokenError){
    router.push({ name: 'register' })
  }
}
