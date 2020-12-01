import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, searchByCategory } from '../../Redux/API/apiAction';
import { RootState } from '../../Redux/rootReducer';

const useStyles = makeStyles(() => ({
    list: {
      display: 'flex',
      width: 'auto',
      justifyContent: 'center',
      flexWrap: "wrap",
      listStyle: 'none'
    },
    li: {
      display: 'block',
      border: '1px solid black',
      padding: '8px 12px'
    }
}));


const CategoriesList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.dishes.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleClick = (event: any) => {
    dispatch(searchByCategory(event.target.textContent))
  }

  return (
    <div>
      <ul className={styles.list}>
      {
        categories.map((category: string) => {
          return (
            <li 
              className={styles.li} 
              key={category}
              onClick={handleClick}
            >
              {category}
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default CategoriesList;