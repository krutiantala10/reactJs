import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h2>MyApp function</h2>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyApp /> */}
    <App />
  </React.StrictMode>
  // MyApp()
  // AnotherElement
)
