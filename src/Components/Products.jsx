import React, { useEffect, useState } from 'react'
import { getAllRecipiesAPI, removeARecipieDetailAPI } from '../Services/allAPIs'
import { Link, useNavigate } from 'react-router-dom';
import Carosel from './Carosel';
import AddNewRecipie from './AddNewRecipie';
import { MDBBtn } from 'mdb-react-ui-kit';


function Products() {
    const[allRecipies,setAllrecipies]=useState('')
    const[searchKey,setSearchKey]=useState('')

    const allRecipiesOnHomePage=async()=>{
        const result=await getAllRecipiesAPI(searchKey)
        setAllrecipies(result.data)
    }
        // console.log(allRecipies);
const handleDelete=async (id)=>{
    const result=await removeARecipieDetailAPI(id)
    allRecipiesOnHomePage()
}


    useEffect(()=>{
        allRecipiesOnHomePage()
    },[searchKey])
  return (
    <div>
        <Carosel/>
        <div className="my-5"><AddNewRecipie allRecipiesOnHomePage={allRecipiesOnHomePage}/></div>

        <form className='d-flex input-group mx-auto w-75'>
            <input type='search' className='form-control ' onChange={e=>setSearchKey(e.target.value)} placeholder='Search Here' aria-label='Search' />
          </form>


         <section className="p-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {allRecipies.length>0?allRecipies.map((recipe)=>
                   
                    <div className="col mb-5">
                        <div className="card  h-100" key={recipe.id} style={{overflow:'hidden'}}>
                            
                            <img className="card-img-top" height={250} src={recipe.image} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{recipe.name}</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {recipe.cuisine} dish
                                </div>
                            </div>
                              
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Link to={`/details/${recipe.id}`}>  <span className="btn btn-outline-dark mt-auto" >See More...</span>
                                </Link> 
                                <div onClick={()=>handleDelete(recipe?.id)} className='btn ms-3 btn-outline-danger'>DELETE</div>
                            </div> 
                            </div>
                        </div>
                    </div>
                        ):<p className='text-danger fw-bold'>No Results</p>}
                   
                
                  
                </div>
            </div>
        </section>
    </div>
  )
}

export default Products