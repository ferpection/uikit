import { useContext } from 'react'
import { ThemeContext } from '../components/contexts/ThemeContext'

export const useTheme = () => useContext(ThemeContext)
