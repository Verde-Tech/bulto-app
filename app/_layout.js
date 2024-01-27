import React ,{ useEffect ,useState} from 'react'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Slot ,SplashScreen} from 'expo-router'
import { useFonts, PlayfairDisplay_400Regular ,PlayfairDisplay_700Bold} from '@expo-google-fonts/playfair-display'
import { FiraSans_400Regular ,FiraSans_700Bold } from '@expo-google-fonts/fira-sans'


SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
const [fontsLoaded, fontError] = useFonts ({
    PlayfairDisplay_400Regular, PlayfairDisplay_700Bold ,FiraSans_400Regular ,FiraSans_700Bold
})

useEffect(() => {
    if (fontsLoaded || fontError) {
        SplashScreen.hideAsync()
    }
}, [fontsLoaded ,fontError]);

if(!fontsLoaded && !fontError) {
    return null
}

  return (
    <GluestackUIProvider config={config} >
    <Slot />
    </GluestackUIProvider>
  )
}

export default RootLayout