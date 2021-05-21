import React, { useContext, useState } from 'react'


export const AppContext = React.createContext()

const AppProvider: React.FC = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light')

    const value = { themeMode }
    return (<ThemeContext.Provider value={value}>{ children }</ThemeContext.Provider>)
}

export const useTheme = () => {
    const context = useContext(AppContext)
    const { themeMode } = context
    return { themeMode }
}

export default AppProvider