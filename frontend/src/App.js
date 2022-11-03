import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import data from './data'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <div className='d-flex flex-column site-container'>
      <BrowserRouter>
        <header>
          <NavBar bg="dark" variant='dark'>
<Container>
  <LinkContainer to="/">
  <NavBar.Brand>AmazonSiv</NavBar.Brand>
  </LinkContainer>
</Container>
          </NavBar>     
        </header>
        <main>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
			<Route path="/product/:slug" element={<ProductScreen />} />
		  </Routes>
          </Container>
        </main>
        <footer className="row center">
          <div className='text-center'>All rights reserved</div>
        {/*   {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div> */}
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
