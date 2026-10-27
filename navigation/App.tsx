import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'


// cria o objeto da navegação 
// através dele vamos ter os métodos necessários

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // Componente que envolve os outros
    <NavigationContainer>
      {/* componente que indica que vamos trabalhar com navegação por pilha/stack */}
      {/* initialRouteName indica qual é a tela que vai aparecer primeiro */}
      <Stack.Navigator initialRouteName="Login">
        {/* Dentro de Stack.Navigator ficam as Stake.Screen */}
        {/* Eles representam cada tela de navegação */}
        {/* Cada uma tem um nome e qual página ela representa */}
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}