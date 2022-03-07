import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MoreScreen from './tab3';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Process" component={ProcessingScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>  
  );
}

function AddScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Screen</Text>
      </View>
    );
  }
  
  function ProcessingScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Process Screen</Text>
      </View>
    );
  }
  