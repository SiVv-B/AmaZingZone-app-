import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import data from './data'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { Badge, CarouselItem, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { Store } from './Store'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SignInScreen'

function App() {
  
const {state} = useContext(Store)
const {cart} = state
  return (
    <div className="d-flex flex-column site-container">
      <BrowserRouter>
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>AmaZingZone</NavBar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                🛒Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a,c)=>a + c.quantity, 0)}

                     
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />

            </Routes>
          </Container>
        </main>
        <footer className="row center">
          <div className="text-center">All rights reserved</div>
          {/*   {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div> */}
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
