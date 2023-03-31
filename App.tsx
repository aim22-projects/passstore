import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='auth'>
          <Stack.Screen name='auth' component={AuthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

