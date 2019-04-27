import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


// title page with play button and how to play button
class HomeScreen extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text style={styles.title}>CHAUKDI</Text>
                <Text style={styles.subtitle}>A 4-player pass n' play card game</Text>

                {/* play button */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate('Profile')}
                    >
                    <Text style={styles.buttonText}> PLAY </Text>
                </TouchableHighlight>
                {/* how to play */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate('Rules')}
                    >
                    <Text style={styles.buttonText}> RULES </Text>
                </TouchableHighlight>

            </View>
        )
    }
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      padding: 20,
      fontSize: 30
    },
    subtitle: {
      padding: 10,
      fontSize: 10
    },
    button: {
      padding: 20,
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    buttonText: {
        fontSize: 24
    }
  });

  export default HomeScreen;