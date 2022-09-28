import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
// import './app.css'
import Wallet from './pages/Wallet'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wallet />
    </>
  )
}
