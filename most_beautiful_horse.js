import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

imageString = 'https://turkmenportal.com/images/uploads/images/news/2022/4/23/ICC_0666.jpg'
imageString2 = 'https://horseyhooves.com/wp-content/uploads/2021/04/Marwan-Al-Shaqab.jpg.webp'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Behold. The most beautiful horse in the world, 2022*.
      </Text>
      <Text>
      </Text>
      <Text>
      *As judged by Turkmenistan.
      </Text>
      <Image style={{ width: 300, height: 300}} source={{ uri: imageString}} ></Image>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        And a bonus, this hot bitch.
      </Text>
      <Image style={{ width: 300, height: 300}} source={{ uri: imageString2}} ></Image>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sexy Horse" component={HomeScreen} />
      <Tab.Screen name="Bonus Sexy Horse" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
