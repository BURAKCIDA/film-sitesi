'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

const providers = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default providers