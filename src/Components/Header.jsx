import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
 

function Header() {
    const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
         <MDBNavbar expand='lg' light bgColor='light' style={{position:"sticky",top:"0",zIndex:"1"}}>
      <MDBContainer>
        <MDBNavbarBrand href='/' style={{color:"#FF5F00"}} className='fw-bolder fs-4 w-50'>RECIPE APP</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Header