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
  const certainDish = useSelector((state: RootState) => state.dishes.certainDish.dish);
  const ingredients = useSelector((state: RootState) => state.dishes.certainDish.ingridients);
  let keyCounter = 0;

  useEffect(() => {
    dispatch(getCertainDish(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <div>
      {
        (certainDish && ingredients) && (
          <React.Fragment>
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
                  ingredients.map((ingredient : string) => {
                    return (
                      <ListItem key={`${ingredient}_${keyCounter++}`} dense button>
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
          </React.Fragment>
        )
      }
    </div>
  )
}

export default DishDetail;

