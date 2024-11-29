import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='product'>
          <Product />
      </div>
    </>
  )
}

export default App
