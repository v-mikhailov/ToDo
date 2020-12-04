import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, Divider } from '@material-ui/core';
import { DishInterface } from '../../Interfaces/apiInterfaces';

interface DishCardProps {
  dishes: DishInterface[]
}

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    minWidth: '265px',
  },
  link: {
    textDecoration: "none",
  },
}));

const DishCard : React.FC<DishCardProps> = ({dishes}) => {
  const styles = useStyles();

  return (
    <React.Fragment>
    {
      dishes.map((dish: DishInterface) => {
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
                  <Typography gutterBottom variant="h6" component="h2">
                    {dish.strMeal}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider />
              <CardActions>
                <Link to={`/api/dish/${dish.idMeal}` } className={styles.link}>
                  <Button size="small" color="primary">
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