import React from "react"
{{if AddActionSheetSupport}}import {ActionSheetProvider} from "@expo/react-native-action-sheet"{{end}}
import AppContainer from "@navigators/AppContainer"

// dependency of native navigation
import { useScreens } from "react-native-screens"
useScreens()

// The root component, host of the navigation container
const App = () => {
  return (
    {{if AddActionSheetSupport}}<ActionSheetProvider>{{end}}
    <AppContainer />
    {{if AddActionSheetSupport}}</ActionSheetProvider>{{end}}
  )
}

export default app
