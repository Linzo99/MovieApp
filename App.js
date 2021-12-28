import 'react-native-gesture-handler'
import React from 'react'
import {StyleSheet} from 'react-native'
import { Provider } from  'react-redux'
import store from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import TabNavigator from './components/navigation'


const queryClient = new QueryClient({
  defaultOptions:{
    refetchOnWindowFocus: false,
    staleTime: 5000
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <TabNavigator/>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1F1F20'
  }
})