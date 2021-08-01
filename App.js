import 'react-native-gesture-handler'
import React from 'react'
import {StyleSheet} from 'react-native'
import { Provider } from  'react-redux'
import store from './store'
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
        <NavigationContainer>
          <TabNavigator/>
        </NavigationContainer>
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