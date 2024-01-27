import React from 'react'
import { Tabs, router } from 'expo-router'
import { Settings, Home ,ReceiptText } from 'lucide-react-native'

const Dashlayout = () => {
  return (
    <Tabs  screenOptions={{ headerStyle: {
        backgroundColor: '#f1f7fe',
        borderBottomWidth: 0, // Set the header background color
        elevation: 0,
        shadowOpacity: 0,
      },
      tabBarStyle: {
        backgroundColor: '#f1f7fe',
        borderTopWidth: 0, // Set the tab bar background color
       
       
      },
      tabBarActiveTintColor: '#0b2546',
      tabBarLabelStyle : {
        fontFamily : 'FiraSans_400Regular'
      }
      }}>
        <Tabs.Screen name="index" options={{ title: "", tabBarLabel : "Home" ,tabBarIcon: ({color}) => (<Home color={color} />) }}  />
        <Tabs.Screen name='accounting' options={{tabBarLabel: "Accounting" , tabBarIcon: ({color}) => (<ReceiptText color={color} />)}} />
        <Tabs.Screen name="settings"  options={{title : "" , tabBarLabel : "Settings" ,tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ), }} />
    </Tabs>
  )
}

export default Dashlayout