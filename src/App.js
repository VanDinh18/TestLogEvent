import React, { Component } from 'react';
import { Button, Alert, View, Text, StyleSheet } from 'react-native';
import analytics, { firebase } from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

class App extends Component {
    constructor(props) {
        super(props);
    }
    logEvent = () => {
        console.log("log event");
        firebase.analytics().setUserProperties({ favorite_food: 'apples' });
    }
    notiEvent = () => {
        console.log("notification");
    }
    requestUserPermission = async () => {
        console.log('permistion');
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        title="log event"
                        onPress={() => this.logEvent()} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="notification"
                        onPress={() => this.notiEvent()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
});

export default App;