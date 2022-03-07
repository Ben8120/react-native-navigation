import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Page2Screen({ navigation : {goBack, navigate, push} }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Page 2 Details Screen</Text>
        <Button
          title="Go back to home"
          onPress={() => navigate('Home')}
        />
        <Button
          title="Go to page 3"
          onPress={() => push('Page3')}
        />
        <Button
          title="Go back to Previous screen"
          onPress={() => goBack()}
        />
      </View>
    );
  }
  export default Page2Screen;

