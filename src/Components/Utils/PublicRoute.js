import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'

export default function PublicOnlyRoute({ component, componentProps, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/dashboard'} />
          : <Component {...componentProps} />
      )}
    />
  )
}