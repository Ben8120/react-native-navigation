import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {FAB} from 'react-native-elements'

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
    return (
        <Drawer.Navigator initialRouteName="Item1">
          <Drawer.Screen name="Item1" component={Item1Screen} />
          <Drawer.Screen name="Item2" component={Item2Screen} />
          <Drawer.Screen name="Item3" component={Item3Screen} />
        </Drawer.Navigator>
    );
}

function Item1Screen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FAB 
          onPress={() => navigation.navigate('Item2')}
          placement="right"
          icon={{name: 'add-circle'}} //Ionicons category
          size="small"
        />
      </View>
    );
  }
  
function Item2Screen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Item1')} title="Move to Item1" />
        </View>
    );
}
function Item3Screen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green' }}>
        </View>
    );
}
  