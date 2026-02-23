import { useState } from 'react'
import SplashScreen from './SplashScreen'
import './index.css'

export default function App() {
  const [entered, setEntered] = useState(false)

  if (entered) {
    // Redirect to the existing portfolio site
    window.location.href = 'https://my-personal-website-six-nu.vercel.app/'
    return null
  }

  return <SplashScreen onEnter={() => setEntered(true)} />
}
