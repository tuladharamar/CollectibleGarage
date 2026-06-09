
import { Route, Routes } from 'react-router-dom'
import './App.css'
import View from './Components/View'
import Navbar from './Components/Navbar'
import Collection from './Pages/Collection'
import CollectionDetails from './Pages/CollectionDetails'
import Diecast from './Pages/Diecast'
import Lego from './Pages/Lego'
import HotWheels from './Pages/HotWheels'
import Footer from './Components/Footer'
import { useState } from 'react'
import Cart from '../src/Pages/Cart'
import NotFound from './Pages/NotFound'

function App() {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/collection' element={<Collection search={search} />} />
        <Route path='/collectionDetails/:id' element={<CollectionDetails/>}/>
        <Route path='/hotwheels' element={<HotWheels/>}/>
        <Route path="/lego" element={<Lego/>}/>
        <Route path='/diecast' element={<Diecast/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>



    </>
  )
}

export default App
