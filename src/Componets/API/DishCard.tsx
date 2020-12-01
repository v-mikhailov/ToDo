import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { DishInterface  } from '../../Interfaces/apiInterfaces';

interface DishCardProps {
  dishes: object[]
}

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    minWidth: '265px',
    minHeight: '320px'
  },
  button: {
    position: 'absolute',
    bottom: '8px',
  }
}));

const DishCard : React.FC<DishCardProps> = ({dishes}) => {
  const styles = useStyles();

  return (
    <React.Fragment>
    {
      dishes.map((dish: any) => {
        return (
            <Card key={dish.idMeal} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={`${dish.strMeal} picture`}
                  height="150"
                  image={`${dish.strMealThumb}`}
                  title={dish.strMeal}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dish.strMeal}
                  </Typography>
                  <p>
                    Cusine: {dish.strArea}
                  </p>
                  <p>
                    Category: {dish.strCategory}
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/api/dish/${dish.idMeal}`}>
                  <Button size="small" color="primary" className={styles.button}>
                    Open recipe
                  </Button>
                </Link>
              </CardActions>
            </Card>
        )
      })
    }
    </React.Fragment>
  )
}

export default DishCard