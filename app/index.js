import React from 'react'
import { Text, Box} from '@gluestack-ui/themed'
import { router } from 'expo-router'
import { Pressable } from 'react-native'


const index = () => {

const onPress = () => {
    router.replace('/dashboard')
}
  return (
   <Box flex={1} justifyContent='center' p={20} bgColor='$blue300'>
    <Text fontFamily='PlayfairDisplay_700Bold' fontSize={50} lineHeight={50} textAlign='left' bold color="#0b2546">
        Bulto
    </Text>
    <Text color='#0b2546' fontFamily='PlayfairDisplay_400Regular'>Re-imagine your Business</Text>
<Pressable onPress={onPress}>
<Text underline color='#0b2546' fontFamily='PlayfairDisplay_400Regular'  mt={70}>Start Today</Text>
</Pressable>
    
   </Box>
  )
}

export default index