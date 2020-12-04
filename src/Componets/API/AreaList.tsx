import React, { useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel'

import { RootState } from '../../Redux/rootReducer';
import { getAreaList, searchByArea } from '../../Redux/API/apiAction';


import American from '../../Images/united-states-of-america-flag-icon-64.png';
import British from '../../Images/united-kingdom-flag-icon-64.png';
import Canadian from '../../Images/canada-flag-icon-64.png'; 
import Chinese from '../../Images/china-flag-icon-64.png';
import Dutch from '../../Images/netherlands-flag-icon-64.png';
import Egyptian from '../../Images/egypt-flag-icon-64.png';
import French from '../../Images/france-flag-icon-64.png';
import Greek from '../../Images/greece-flag-icon-64.png';


const useStyles = makeStyles(() => ({
  container: {
    width: '80%',
  },
  flag: {
    width: '64px',
    height: '43px'
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
    <div className={styles.container}>
      <Carousel
        itemPadding={[0, 15]}
        itemsToShow={6}
        pagination={false}
      >
        {
          areaList.map((area: string) => {
            return (
              <Typography onClick={handleClick} key={area}>
                {area}
              </Typography>
            )
          })
        }



        {/* <div onClick>
         <img src={American} alt="Logo"  className={styles.flag}/>
        </div>
        <div>
         <img src={British} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={Canadian} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={Chinese} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={Dutch} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={Egyptian} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={French} alt="Logo" className={styles.flag}/>
        </div>   
        <div>
         <img src={Greek} alt="Logo" className={styles.flag}/>
        </div>           */}
      </Carousel>
    </div>
  )
}

export default AreaList;