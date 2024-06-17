import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import { addARecipieDetailAPI } from '../Services/allAPIs';


function AddNewRecipie({allRecipiesOnHomePage}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[recipieDetailsAddNew,setRecipieDetailsAddNew]=useState({
      id:"",
      name:"",
      ingredients:"",
      instructions:"",
      prepTimeMinutes:"",
      cookTimeMinutes:"",
      servings:"",
      difficulty:"",
      cuisine:"",
      caloriesPerServing:"",
      tags:"",
      userId:"",
      image:"",
      rating:"",
      reviewCount:"",
      mealType:""
    })

    const addNewRecipe=async()=>{
      const {id,name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,tags,userId,image,rating,reviewCount,mealType}=recipieDetailsAddNew
      if (!id || !name || !ingredients || !instructions || !prepTimeMinutes || !difficulty || !cuisine || !image || !mealType) {
        alert('Missing Fields Found')
      } else {
        const reqBody=new FormData()

        reqBody.append("id",id)
        reqBody.append("name",name)
        reqBody.append("ingredients",ingredients)
        reqBody.append("instructions",instructions)
        reqBody.append("prepTimeMinutes",prepTimeMinutes)
        reqBody.append("cookTimeMinutes",cookTimeMinutes)
        reqBody.append("servings",servings)
        reqBody.append("difficulty",difficulty)
        reqBody.append("cuisine",cuisine)
        reqBody.append("caloriesPerServing",caloriesPerServing)
        reqBody.append("tags",tags)
        reqBody.append("userId",userId)
        reqBody.append("image",image)
        reqBody.append("rating",rating)
        reqBody.append("reviewCount",reviewCount)
        reqBody.append("mealType",mealType)

        try {
          const result=await addARecipieDetailAPI(reqBody)
          if (result.status===200) {
            handleClose()
            setRecipieDetailsAddNew({
              id: "",
              name: "",
              ingredients: "",
              instructions: "",
              prepTimeMinutes: "",
              cookTimeMinutes: "",
              servings: "",
              difficulty: "",
              cuisine: "",
              caloriesPerServing: "",
              tags: "",
              userId: "",
              image: "",
              rating: "",
              reviewCount: "",
              mealType: ""
            })
            console.log(result.data);
          }else{
            alert(result)
          } 
        } catch (error) {
          console.log(error);
        }
      }
    }
  console.log(recipieDetailsAddNew);

  

  useEffect(()=>{
    allRecipiesOnHomePage()
  },[recipieDetailsAddNew])
  return (
    <div className='text-center'>
        <div style={{backgroundColor:'#FF5F00'}} onClick={handleShow} className="btn mx-auto ">
            Add New Recipie
        </div>






        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='xl'
      >
        <Modal.Header >
          <Modal.Title className='mx-auto'>Add New Recipie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <FloatingLabel controlId="floatingInput" label="Id" className="mb-3">
        <Form.Control type="number" placeholder='' onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,id:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Recipie Name" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,name:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Ingredients Required" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,ingredients:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Instructions for cooking" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,instructions:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Time taken for preparation in mins " className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,prepTimeMinutes:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Difficulty Level" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,difficulty:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Cuisine Type" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,cuisine:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Meal Type" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,mealType:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Meal Image Link" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,image:e.target.value})} />
        </FloatingLabel>
        {/* <FloatingLabel controlId="floatingInput" label="Cooking Time in mins" className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,cookTimeMinutes:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Serving for " className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,servings:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Calories per serving" className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,caloriesPerServing:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Tags" className="mb-3">
        <Form.Control type="text" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,tags:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="UserId" className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,userId:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Review Count" className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,reviewCount:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="rating" className="mb-3">
        <Form.Control type="number" placeholder=''  onChange={e=>setRecipieDetailsAddNew({...recipieDetailsAddNew,rating:e.target.value})} />
        </FloatingLabel> */}

        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#FF5F00'}} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{backgroundColor:'#002379'}} onClick={addNewRecipe}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddNewRecipie