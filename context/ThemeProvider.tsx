"use client"

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from 'react';

interface ThemeProvideProps {
    children: ReactNode;
}

export default function ThemeProvide({ children }: ThemeProvideProps) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}