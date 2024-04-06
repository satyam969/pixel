import { useState } from 'react'
import Hero from './hero'
import './App.css'
import Leftbox from './leftbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="maincont">

<Leftbox/>
      <Hero/>


    </div>
    
    </>
  )
}

export default App
