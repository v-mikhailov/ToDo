import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

import { RootState } from '../../Redux/rootReducer';


const DishList = () => {
  const dishes = useSelector((state: RootState) => state.dishes.dishes)
  return (
    <List>
      {
        dishes.map((dish: any) => {
          return (
            <ListItem key={dish.idMeal}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={dish.strMeal} secondary={dish.strArea} />
            </ListItem>
          )
        })
      }
  </List>
  )
}

export default DishList;