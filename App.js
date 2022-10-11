import React from 'react';
import { SafeAreaView} from 'react-native';
import OnboardingScreen from './src/components/screens/onboarding-screens/OnboardingScreen';



const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
       <OnboardingScreen/>
    </SafeAreaView>
  );
};

export default App;
