import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { Feedback } from '@screens/Feedback';
import { NewMeal } from '@screens/NewMeal';

import { Loading } from '@components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  
  return (
    <ThemeProvider theme={theme}>
    
    <StatusBar 
      barStyle={"dark-content"}
      backgroundColor={"transparent"}
      translucent
    />

    {fontsLoaded ? <NewMeal /> : <Loading />}

    </ThemeProvider>
  );
}
