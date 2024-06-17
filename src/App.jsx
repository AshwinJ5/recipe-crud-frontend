import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeDetails from './Components/RecipeDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <Header/>

<Routes>
  <Route element={<Products/>} path='/' />
  <Route element={<RecipeDetails/>} path='/details/:id' />
</Routes>

     <Footer/>
    </>
  )
}

export default App
