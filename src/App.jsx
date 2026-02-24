import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 >Web Tasarimi ve Programlama </h1 >
        <h2 >LAB -1</h2 >
        <p>Ad Soyad: [Ahmet]</p>
         <p>Ogrenci No: [230541077]</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
