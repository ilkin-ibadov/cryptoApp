import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import HomePage from './src/HomePage';
import CoinDetailsScreen from './src/CoinDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaProvider style={{backgroundColor: '#0D0D0D'}}>
      <SafeAreaView style={{flex: 1}} edges={['right', 'top', 'left']}>
        {connected ? (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CoinDetail"
                component={CoinDetailsScreen}
                options={{
                  title: 'Coin details',
                  headerStyle: {
                    backgroundColor: '#52525b',
                  },
                  headerTintColor: '#fff',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <StyledText className="text-base text-white">
            No internet connection
          </StyledText>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
