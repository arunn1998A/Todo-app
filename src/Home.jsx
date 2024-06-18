import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
// import About from './About'

function AboutPage(){
    return(

  <div>
    <h2>second page</h2>
  </div>
    )
}
function GalleryPage(){
   return (
    <div>
    <h3>gallery</h3>

    </div>
   )

   
}
function HomePage() {
  return (
<BrowserRouter>
<div>
       
       <header>
       <h1>Sample project</h1>
       <span style={{flex:1}} />

       <h2>
               home page contains will appear here
           </h2>
       <nav>
       <Link to={'/'}>Home</Link>
       <Link to={'/about'}>About</Link>
       <Link to={'/gallery'}>Gallery</Link>
       
       </nav>
       </header>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route  path='about'  element={<AboutPage/>} />
        <Route  path='gallery'  element={<GalleryPage/>} />
       </Routes>
   </div>
{/* <About/> */}

   
</BrowserRouter>

  )
}

  

export default HomePage