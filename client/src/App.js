import React from 'react'
import { Router } from "@reach/router"
import Gallery from "./pages/Gallery"
import UploadForm from "./pages/UploadForm"

const App = () => {
  return (
    <Router>
      <Gallery path='/' />
      <UploadForm path='/upload' />
    </Router>
  )
}

export default App
