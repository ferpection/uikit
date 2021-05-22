import { useContext } from 'react'
import { ThemeMutationContext } from '../contexts/ThemeContext'

export const useThemeMutation = () => useContext(ThemeMutationContext)
