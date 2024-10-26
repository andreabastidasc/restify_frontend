import { useState } from 'react';

export function useThemeMode() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return {
        isDarkTheme,
        toggleTheme,
    };
}
