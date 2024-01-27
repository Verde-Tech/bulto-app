import React from 'react'
import { Avatar, AvatarFallbackText, Box,Text, VStack} from '@gluestack-ui/themed'
import { ChevronRight, User2 ,Wallet ,Info } from 'lucide-react-native'
import { Pressable, TouchableOpacity } from 'react-native'



const Settings = () => {
  return (
    <Box bg="#f1f7fe" flex={1}>
    <VStack>
      <Box mt={2}  alignItems='center'>
        <Avatar size={30}>
         <AvatarFallbackText fontFamily='FiraSans_400Regular'>
          Munya Makosa
         </AvatarFallbackText>
        </Avatar>
        <Text fontFamily='FiraSans_400Regular'>
          Munya Makosa
        </Text>
      </Box>
      <Box  borderWidth={0.1} bgColor='#0b2546' mt={30} ml={10} mr={10} />
      <TouchableOpacity>
<Box  flexDirection='row' p={20}  alignItems='center'>
       <User2 color="#0b2546" size={30} />
        <Text color='#0b2546' fontFamily='FiraSans_400Regular' ml={10}>
          My Profile
        </Text>
        <Box flex={1} alignItems='flex-end'>
          <ChevronRight color='#0b2546' />
        </Box>
      </Box>
      </TouchableOpacity>
      <TouchableOpacity>
<Box  flexDirection='row' p={20}  alignItems='center'>
       <Wallet color='#0b2546' size={30} />
        <Text color='#0b2546' fontFamily='FiraSans_400Regular' ml={10}>
          Mobile Wallet
        </Text>
        <Box flex={1} alignItems='flex-end'>
          <ChevronRight color='#0b2546' />
        </Box>
      </Box>
      </TouchableOpacity>
      <TouchableOpacity>
<Box  flexDirection='row' p={20}  alignItems='center'>
       <Info color='#0b2546' size={30} />
        <Text color='#0b2546' fontFamily='FiraSans_400Regular' ml={10}>
          Business Information
        </Text>
        <Box flex={1} alignItems='flex-end'>
          <ChevronRight color='#0b2546' />
        </Box>
      </Box>
      </TouchableOpacity>
    </VStack>
    </Box>
  )
}

export default Settings