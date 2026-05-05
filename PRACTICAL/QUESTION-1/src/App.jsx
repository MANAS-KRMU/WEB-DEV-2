import React from 'react'
import { useContext } from 'react'

const App = () => {

  const context = useContext(Context)

  return (
    <div>
      <h1 style={context.color}></h1>
    </div>
  )
}

export default App
