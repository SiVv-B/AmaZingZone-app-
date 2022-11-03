import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import data from './data'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">AmazonSiv</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
			<Route path="/product/:slug" element={<ProductScreen />} />
		  </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
