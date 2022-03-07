import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';

function Page3Screen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
            <Text style={{ color: 'red' }}>Page 3 Screen</Text>
            <Button
                title="Go back to page 2"
                onPress={() => navigation.dispatch(
                    CommonActions.navigate({
                        name: 'Page2',
                        params: {},
                    })
                )}
            />
            <Button
                title="Go back to Home screen :root "
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}
export default Page3Screen;
