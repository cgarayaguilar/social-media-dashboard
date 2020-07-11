import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const value = {
    isDarkMode,
    activateDarkMode: () => {
      setIsDarkMode(true)
    },
    disableDarkMode: () => {
      setIsDarkMode(false)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
