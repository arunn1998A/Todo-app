import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ViewUserPage from './components/ViewUserPage';
import ListUserPage from './components/ListUserPage';
import EditUserPage from './components/EditUserPage';
import AddUserPage from './components/AddUserPage';
// import axios from 'axios';



function Jso() {
  return (
   <BrowserRouter>
    <div>

    <Navbar bg="dark" varient="dark">
      <Container>
        <Navbar.Brand style={{color:'#fff'}} href="/">API Application</Navbar.Brand>
<Nav className="float-right"></Nav>      
          <Nav className="me-auto">
            <Nav.Link style={{color:'#fff'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'#fff'}} href="/add">Add New</Nav.Link>
           
            
      
          </Nav>
 
      </Container>
    </Navbar>

      <Container className='pt-5'>
      <Routes>
<Route index element={<ListUserPage/>} />
<Route path={'add'} element={<AddUserPage/>}  />
<Route  path={'users/:userId/edit'} element={<EditUserPage/>} />
<Route path={'users/:userId'} element={<ViewUserPage/>}  />

      </Routes>


      </Container>
    </div>
   </BrowserRouter>
  )
}

export default Jso