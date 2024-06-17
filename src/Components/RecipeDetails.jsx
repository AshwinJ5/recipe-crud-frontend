import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getARecipieDetailAPI } from '../Services/allAPIs';

function RecipeDetails() {
  const { id } = useParams();
  const [recipieDetails, setRecipieDetails] = useState(null);

  const getARecipieDetails = async () => {
    try {
      const result = await getARecipieDetailAPI(id);
      setRecipieDetails(result.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  useEffect(() => {
    getARecipieDetails();
  }, []);

  if (!recipieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={recipieDetails.image} alt={recipieDetails.name} />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{recipieDetails.name}</h1>
              <div className="fs-5 mb-4">
                <span>Cuisine: {recipieDetails.cuisine}</span>
              </div>
              <span className="my-3">Meal Type: {recipieDetails.mealType}</span>
              <div className="my-3">Time required for meal preparation: {recipieDetails.prepTimeMinutes} mins</div>
              <div className="h3 fw-bolder">Ingredients</div>
              <ul>
                {recipieDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="lead">{ingredient}</li>
                ))}
              </ul>
              
            </div>
          </div>
          <div className="h3 fw-bolder">How to prepare:</div>
              <ol>
                {recipieDetails.instructions.map((instruction, index) => (
                  <li key={index} className="lead">{instruction}</li>
                ))}
              </ol>
        </div>
      </section>
    </>
  );
}

export default RecipeDetails;
