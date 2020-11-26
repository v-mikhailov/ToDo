import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCertainDish } from '../../Redux/API/apiAction';
import { RootState } from '../../Redux/rootReducer';
import { Checkbox, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

interface DishDetail {
  match: any
}

const DishDetail : React.FC<DishDetail> = ({match}) => {
  const dispatch = useDispatch();
  const certainDish = useSelector((state: RootState) => state.dishes.certainDish)


  // так норм делать?
  const findIngredients = () => {
    const ingredientsArr = []
    for (let key in certainDish) {
      if (key.includes('strIngredient')) {
        if (certainDish[key]) {
          ingredientsArr.push(certainDish[key])
        }
      }
    }
    return ingredientsArr
  }

  useEffect(() => {
    dispatch(getCertainDish(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <div>
      <Link to="/api">
        Api Page
      </Link>
      <Typography variant="h4" gutterBottom>
        {certainDish.strMeal}
      </Typography>
      <Divider /> 
      <Container>
        <img src={certainDish.strMealThumb} alt={`${certainDish.strMeal}`}></img>
        <Typography variant="h6">
          Ingredients
        </Typography>
        <List> 
          {
            findIngredients().map((ingredient : string) => {
              return (
                <ListItem key={ingredient} dense button>
                  <ListItemIcon>
                  <Checkbox />
                  </ListItemIcon>
                  <ListItemText  primary={ingredient} />
                </ListItem>
              )
            })
          }
        </List>
        <Typography variant="h6">
          Instructions
        </Typography>
        <Typography variant="body1">
          {certainDish.strInstructions}
        </Typography>
      </Container>
    </div>
  )
}

export default DishDetail;

