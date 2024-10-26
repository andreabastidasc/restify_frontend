import { 
    MD3LightTheme as DefaultTheme, 
    PaperProvider 
} from 'react-native-paper';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

import { useThemeMode } from '@/hooks/useThemeMode';
import { darkTheme, lightTheme } from '@/constants/styles/colors';
import i18n from '@/i18n';
import 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { isDarkTheme } = useThemeMode();
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    const combinedTheme = { 
        ...DefaultTheme, 
        colors: { 
            ...DefaultTheme.colors, 
            ...currentTheme 
        } 
    };

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <PaperProvider theme={combinedTheme}>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </PaperProvider>
    );
}
