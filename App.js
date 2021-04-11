import React from 'react'
import Routes from './src/routes'
import {Provider as StoreProvider} from 'react-redux'
import providerStore from './src/redux/store'

const App = () => {
  return (
    <StoreProvider store={providerStore}>
      <Routes />
    </StoreProvider>
  )
}

export default App