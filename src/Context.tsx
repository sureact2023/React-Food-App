import { createContext } from 'react'

export const UserContent = createContext({
    name: 'Susan',
    balance: 10,
    isLoggedIn : false
  })