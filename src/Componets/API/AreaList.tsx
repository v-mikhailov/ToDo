import React, { useEffect } from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel'

import { RootState } from '../../Redux/rootReducer';
import { getAreaList, searchByArea } from '../../Redux/API/apiAction';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '80%',
  },
  flag: {
    width: '64px',
    height: '43px',
  },
  country: {
    textAlign: 'center'
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
    dispatch(searchByArea(event.currentTarget.textContent))
  }

  return (
    <div className={styles.container}>
      <Carousel
        itemPadding={[0, 15]}
        itemsToShow={6}
        pagination={false}
      >
         {
            areaList.map((area: string) => {
               return (
                  <div onClick={handleClick} key={area}>
                     <img src={require(`../../Images/${area.toLocaleLowerCase()}-icon.png`)} alt={`${area} flag`} className={styles.flag}/>
                     <Typography className={styles.country}>
                        American
                     </Typography>
                 </div>         
               )
            })
         }
      </Carousel>
    </div>
  )
}

export default AreaList;