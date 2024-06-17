import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a style={{textDecoration:"none"}} className='text-dark' href='/'>
          Recipe Management App
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer