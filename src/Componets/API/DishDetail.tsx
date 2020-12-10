import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCertainDish } from '../../Redux/API/apiAction';
import { RootState } from '../../Redux/rootReducer';
import { Box, Container, makeStyles, Theme, Typography } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

interface DishDetail {
  match: any
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(3)
  },
  dishName: {
    fontWeight: 'bold',
  },
  dishCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      marginBottom: 0
    },
  },
  textBlock: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '45%',
    },
  },
  center: {
    height: 'auto'
  }, 
  instruction: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      textAlign: 'start',
    },
  },
  ingredients: {
    textAlign: 'center',
    marginBottom: theme.spacing(2)
  },
  ingredientContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  ingredientBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  ingredientImg: {
    width: '60px',
    height: '60px',
    [theme.breakpoints.up('xs')]: {
      width: '75px',
      height: '75px',
    },
  },
  ingredientText: {
    textAlign: 'center'
  }
}))

const DishDetail : React.FC<DishDetail> = ({match}) => {
  const dispatch = useDispatch();
  const certainDish = useSelector((state: RootState) => state.dishes.certainDish);
  const ingridients = useSelector((state: RootState) => state.dishes.certainDish.ingridients);
  const styles = useStyles();

  useEffect(() => {
    dispatch(getCertainDish(match.params.id))
  }, [dispatch, match.params.id]);

  return (
    <div>
      <Header isDishDetailPage={true}/>
      {
        (certainDish && ingridients) && (
          <Container className={styles.container}>
            <Typography variant="h3" gutterBottom className={styles.dishName}>
              {certainDish.strMeal}
            </Typography>
              <Box className={styles.dishCard}>
                <img 
                  src={certainDish.strMealThumb} 
                  alt={`${certainDish.strMeal}`}
                  className={styles.img}
                />
                <div className={styles.textBlock}>
                  <div className={styles.center}>
                    <Typography variant="h4" className={styles.instruction}>
                      Instructions
                    </Typography>
                    <Typography variant="body1">
                      {certainDish.strInstructions}
                    </Typography>
                  </div>
                </div>
              </Box>
              <Box className={styles.container}>
                <Typography variant="h4" className={styles.ingredients}>
                  Ingredients
                </Typography>
                <Box className={styles.ingredientContainer}>
                {
                  ingridients.map((ingredient: string) => {
                    return (
                      <div className={styles.ingredientBlock} key={ingredient}>
                        <img  
                          src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`} 
                          alt={ingredient}
                          className={styles.ingredientImg}
                        />
                        <Typography variant='caption' className={styles.ingredientText}>
                          {ingredient}
                        </Typography>
                      </div>
                    )
                  })
                }
                </Box>
              </Box>
          </Container>
        )
      }
      <Footer/>
    </div>
  )
}

export default DishDetail;

