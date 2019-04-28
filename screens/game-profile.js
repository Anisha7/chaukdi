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
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

// profile setup for game
class GameProfileScreen extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
          team1 : 'Enter Team1 Name',
          player1: 'Enter player1 Name for Team1',
          player2: 'Enter player2 Name for Team1',
          team2 : 'Enter Team2 Name',
          player3 : 'Enter player1 Name for Team2',
          player4: 'Enter player2 Name for Team2'
      }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text>Profile</Text>
                {/* team 1 */}
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({team1: text})}
                    value={this.state.team1}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({player1: text})}
                    value={this.state.player1}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({player2: text})}
                    value={this.state.player2}
                />
                
                {/*  team 2  */}
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({team2: text})}
                    value={this.state.team2}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({player3: text})}
                    value={this.state.player3}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({player4: text})}
                    value={this.state.player4}
                />

                {/* button to navigate, pass in form values as props */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate('Game', this.state)}
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
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});

export default GameProfileScreen;