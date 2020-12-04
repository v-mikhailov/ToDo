import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, searchByCategory } from '../../Redux/API/apiAction';
import { RootState } from '../../Redux/rootReducer';
import { CategoryInterface } from '../../Interfaces/apiInterfaces';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '80%',
  },
  categoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRigth: '20px'
  },
  img: {
    width: '72px',
    height: '72px'
  },
}));


const CategoriesList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.dishes.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleClick = (event: any) => {
    dispatch(searchByCategory(event.currentTarget.textContent))
  }

  return (
    <div className={styles.container}>
      {categories && (
        <Carousel
          itemPadding={[0, 15]}
          itemsToShow={6}
          pagination={false}
        >
          {
            categories.map((category: CategoryInterface) => {
              return (
                <div 
                  className={styles.categoryBlock} 
                  key={category.strCategory}
                  onClick={handleClick}
                >
                  <Avatar alt={category.strCategory} src={category.strCategoryThumb} className={styles.img}/>
                  <Typography>
                    {category.strCategory}
                  </Typography>
                </div>
              )
            })
          }
        </Carousel>
      )}
    </div>
  )
}

export default CategoriesList;