import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import CadastroFuncionario from './views/Funcionario/Funcionario-List';

const Stack = createStackNavigator();

function Routes(){
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="CadastroFuncionario"
                  component={CadastroFuncionario}
                  options={{ headerShown: false }}
              />

          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;