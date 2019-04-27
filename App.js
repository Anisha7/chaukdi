import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home-screen';
import GameProfileScreen from './screens/game-profile';
import RulesScreen from './screens/rules';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: GameProfileScreen },
  Rules: { screen: RulesScreen}
})

const App = createAppContainer(MainNavigator)

export default App;