import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import React from 'react'

function Carosel() {
  return (
    <>
        <MDBCarousel  interval={2000}>
      <MDBCarouselItem itemId={1} interval={2000}>
        <img src='https://images.alphacoders.com/276/276653.jpg'   style={{objectFit:'cover'}}   height={600}  className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://wallpapercave.com/wp/wp2393879.jpg' style={{objectFit:'cover'}} height={600}  className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://wallpapers.com/images/hd/4k-ultra-hd-scrumptious-burger-aioh6ory71p624oa.jpg' style={{objectFit:'cover'}} height={600} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel> 
    </>
  )
}

export default Carosel