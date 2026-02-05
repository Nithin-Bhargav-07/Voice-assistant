import { useState } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { HomeScreen } from './screens/HomeScreen';
import { VoiceScreen } from './screens/VoiceScreen';
import { StoreScreen } from './screens/StoreScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { CaregiverScreen } from './screens/CaregiverScreen';
import { NavigationBar } from './components/NavigationBar';

type AuthScreen = 'login' | 'register' | null;
type NavItem = 'home' | 'voice' | 'store' | 'checkout' | 'caregiver';

function App() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [activeScreen, setActiveScreen] = useState<NavItem>('home');

  const handleLogin = () => {
    setAuthScreen(null);
  };

  const handleRegister = () => {
    setAuthScreen(null);
  };

  // Show authentication screens first
  if (authScreen === 'login') {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onSwitchToRegister={() => setAuthScreen('register')}
      />
    );
  }

  if (authScreen === 'register') {
    return (
      <RegisterScreen
        onRegister={handleRegister}
        onSwitchToLogin={() => setAuthScreen('login')}
      />
    );
  }

  // Main app screens after authentication
  return (
    <div className="w-screen min-h-screen">
      {activeScreen === 'home' && (
        <HomeScreen
          onVoiceClick={() => setActiveScreen('voice')}
          onBrowseClick={() => setActiveScreen('store')}
        />
      )}
      {activeScreen === 'voice' && <VoiceScreen />}
      {activeScreen === 'store' && (
        <StoreScreen onVoiceClick={() => setActiveScreen('voice')} />
      )}
      {activeScreen === 'checkout' && <CheckoutScreen />}
      {activeScreen === 'caregiver' && <CaregiverScreen />}

      <NavigationBar active={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
}

export default App;
