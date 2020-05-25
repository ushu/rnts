import React, { useCallback } from "react"
{{if AddFirebaseAnalytics}}
import analytics from "@react-native-firebase/analytics"
import {
  NavigationContainer as RNNavigationContainer,
  NavigationContainerProps as Props,
  NavigationState,
} from "@react-navigation/native"

// dig into all the active routes to find the current route name
const getActiveRouteName = (state: NavigationState): string => {
  const route = state.routes[state.index]
  if (route.state) {
    return getActiveRouteName(route.state as NavigationState)
  }
  return route.name
}

const NavigationContainer: React.FC<Props> = props => {
  const routeNameRef = React.useRef<string>("")
  const onStateChange = useCallback(
    (state: NavigationState | undefined) => {
      // Detect screen name change
      const previousRouteName = routeNameRef.current
      const currentRouteName = getActiveRouteName(state as NavigationState)
      if (currentRouteName && previousRouteName !== currentRouteName) {
        if (__DEV__)
          console.debug(
            `Transitioning "${previousRouteName}" ➡ "${currentRouteName}"`,
          )
        analytics().setCurrentScreen(currentRouteName)
      }
      routeNameRef.current = currentRouteName
    },
    [routeNameRef],
  )

  return <RNNavigationContainer onStateChange={onStateChange} {...props} />
}

export default NavigationContainer
{{else}}
import { NavigationContainer } from "@react-navigation/native"

export default NavigationContainer
{{end}}

