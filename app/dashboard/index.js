import React from 'react'
import { Text, Box, VStack, Button, HStack } from '@gluestack-ui/themed'
import { ArrowUpCircle, MoreVertical } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { ArrowDownCircle } from 'lucide-react-native'

const Home = () => {
  return (
    <Box bg='#f1f7fe' flex={1}>
      <VStack p={20}>
        <Box 
          bgColor='#09529b' 
          p={10} 
          h={180}
          justifyContent='center' 
          borderRadius={10} 
          position="relative"  // Make this Box a relative container
        >
            <TouchableOpacity>

            
          <MoreVertical 
            color='white' 
            position="absolute" // Absolutely position the icon
            top={10} right={2}   // Position towards the top right corner
            size={18} 
          />
          </TouchableOpacity>
          <Text color='white' size='sm' fontFamily='FiraSans_400Regular'>
            Account Balance
          </Text>
          <Box flexDirection='row' alignItems='flex-end'>
            <Text color='white' size='2xl' bold fontFamily='FiraSans_700Bold'>
              20 000
            </Text>
            <Text color='white' size='sm' alignSelf='flex-end'>
              ZMW
            </Text>
          </Box>
          <Box   borderRadius={10} p={5} mt={50} justifyContent='flex-end'>
            <Button borderWidth={1} size='sm' borderRadius={10} variant='outline' borderColor='white' alignSelf='flex-end'>
                <Text color='white'>
                    Add Account
                </Text>
            </Button>
          </Box>
        </Box>

        <Box bg='$red500' h={100} borderRadius={10} mt={20}>
          <HStack justifyContent='space-between' alignItems='center' h="100%">
            <VStack justifyContent='center' alignItems='center' flex={1}>
              <ArrowDownCircle fill="white" color="green" strokeWidth={1} size={30} />
              <Text color='$coolGray300'>
                Received
              </Text>
              <Text color='$white' bold>
                200010ZMW
              </Text>
            </VStack>
            <Box borderWidth={1} bgColor='white' h={90} borderColor='white' mt={5} borderRadius={10} mb={5}/>
            <VStack justifyContent='center' alignItems='center' flex={1}>
              <ArrowUpCircle size={30} color='red' strokeWidth={1} fill='white' />
              <Text color='$coolGray300'>
                Sent
              </Text>
              <Text bold color="$white">
                134000ZMW
              </Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default Home