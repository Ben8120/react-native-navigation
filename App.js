import React, { useState} from 'react';
import { Button, View, Text} from 'react-native';
import { Divider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

import Page2Screen from './page2';
import Page3Screen from './page3';
import MainTab from './mainTab';
import DrawerContainer from './testdrawer';

function HomeScreen({ navigation }) {
  const [prodName, setProdName] = useState('nil');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput style={{height: 40}}
        placeholder="Enter product Name"
        value={prodName}
        onChangeText={setProdName}
      />
      <Divider style={{ backgroundColor: 'blue' }} />
      <Text>You have entered {prodName}</Text>
      <Button 
        title="Show Navigation with info"
        onPress={() => {
          navigation.navigate('Detail', {
            itemId: 1,
            itemName: prodName,
            itemDescription: 'product information...',
          });
        }}
      />
      <Button 
        title="Show Tab"
        onPress={() => navigation.push('PageTab')}
      />
      <Button
        title="Experiment the Drawer Navigation"
        onPress={() => navigation.push('DrawerPage')}
      />
       </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, itemName, itemDescription } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item Id: {JSON.stringify(itemId)}</Text>
      <Text>Item Name: {JSON.stringify(itemName)}</Text>
      <Text>Item Description: {JSON.stringify(itemDescription)}</Text>
      <Button title='Go To Next Page 2' onPress={() => navigation.push('Page2')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen}/> 
        <Stack.Screen name="Page2" component={Page2Screen}/> 
        <Stack.Screen name="Page3" component={Page3Screen}/> 
        <Stack.Screen name="PageTab" component={MainTab}/> 
        <Stack.Screen name="DrawerPage" component={DrawerContainer}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
