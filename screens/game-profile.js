import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';


class TextInputStyled extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

// title page with play button and how to play button
class GameProfileScreen extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
          team1 : '',
          player11: '',
          player12: '',
          team2 : '',
          player21 : '',
          player22 : ''
      }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text>Profile</Text>
                <TextInputStyled text="Enter Team1 Name" />
                <TextInputStyled text="Enter player1 Name for Team1" />
                <TextInputStyled text="Enter player2 Name for Team1" />

                <TextInputStyled text="Enter Team2 Name" />
                <TextInputStyled text="Enter player1 Name for Team2" />
                <TextInputStyled text="Enter player2 Name for Team2" />

                {/* button to navigate, pass in form values as props */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate('current-play')}
                >
                    <Text style={styles.buttonText}> START GAME </Text>
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

export default GameProfileScreen;