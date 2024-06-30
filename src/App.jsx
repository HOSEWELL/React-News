import { useState } from 'react'
import './App.css'
import News from './assets/components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{alignSelf:'center', fontSize:'xx-large', fontWeight:'1200', color:'red'}}>Breaking News</h1>
      <News />
    </>
  )
}

export default App
