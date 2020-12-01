import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/rootReducer';
import { getAreaList, searchByArea } from '../../Redux/API/apiAction';

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


const AreaList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const areaList = useSelector((state: RootState) => state.dishes.areaList);

  useEffect(() => {
    dispatch(getAreaList())
  }, [dispatch])

  const handleClick = (event: any) => {
    dispatch(searchByArea(event.target.textContent))
  }

  return (
    <ul className={styles.list}>
      {
        areaList.map((area: string) => {
          return (
            <li 
              className={styles.li}
              key={area}
              onClick={handleClick}
            >
              {area}
            </li>
          )
        })
      }
    </ul>
  )
}

export default AreaList;