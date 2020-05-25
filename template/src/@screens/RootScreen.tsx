import React from "react"
import {
  View,
  StyleSheet,
} from "react-native"
import { NavigationProp, RouteProp } from "@react-navigation/native"
import { RootStackNavigatorParamList } from "@navigators/RootStackNavigator"

type Props = {
  // route will hold the params
  route: RouteProp<RootStackNavigatorParamList, "Root">
  // navigation will hold the navigation actions
  navigation: NavigationProp<RootStackNavigatorParamList, "Root">
}

const RootScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
})

export default RootScreen
