import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RootScreen from "@screens/RootScreen"

type Props = {}

export type RootStackNavigatorParamList = {
  Root: undefined
}

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>()

const RootStackNavigator: React.FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName={"Root"}>
        <Stack.Screen
          name="Root"
          component={RootScreen}
        />
    </Stack.Navigator>
  )
}

export default RootStackNavigator
