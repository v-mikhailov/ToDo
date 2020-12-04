import React, { useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel'

import { RootState } from '../../Redux/rootReducer';
import { getAreaList, searchByArea } from '../../Redux/API/apiAction';


import USA from '../../Images/united-states-of-america-flag-icon-64.png';
import GB from '../../Images/united-kingdom-flag-icon-64.png';
import Canada from '../../Images/canada-flag-icon-64.png'; 
import China from '../../Images/china-flag-icon-64.png';
import Netherlands from '../../Images/netherlands-flag-icon-64.png';
import Egypt from '../../Images/egypt-flag-icon-64.png';
import France from '../../Images/france-flag-icon-64.png';
import Greece from '../../Images/greece-flag-icon-64.png';
import India from '../../Images/india-flag-icon-64.png'
import Ireland from '../../Images/ireland-flag-icon-64.png'
import Italy from '../../Images/italy-flag-icon-64.png'
import Jamaica from '../../Images/jamaica-flag-icon-64.png'
import Japan from '../../Images/japan-flag-icon-64.png'
import Kenya from '../../Images/kenya-flag-icon-64.png'
import Malaysia from '../../Images/malaysia-flag-icon-64.png'
import Mexico from '../../Images/mexico-flag-icon-64.png'
import Morocco from '../../Images/morocco-flag-icon-64.png'
import Poland from '../../Images/poland-flag-icon-64.png'
import Russia from '../../Images/russia-flag-icon-64.png'
import Spain from '../../Images/spain-flag-icon-64.png'
import Thailand from '../../Images/thailand-flag-icon-64.png'
import Tunisia from '../../Images/tunisia-flag-icon-64.png'
import Turkey from '../../Images/turkey-flag-icon-64.png'
import Vietnam from '../../Images/vietnam-flag-icon-64.png'

const useStyles = makeStyles(() => ({
  container: {
    width: '80%',
  },
  flag: {
    width: '64px',
    height: '43px'
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
        <div onClick={handleClick}>
         <img src={USA} alt="Logo"  className={styles.flag}/>
         <Typography className={styles.country}>
            American
         </Typography>
        </div>
        <div onClick={handleClick}>
         <img src={GB} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            British
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={Canada} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Canadian
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={China} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Chinese
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={Netherlands} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Dutch
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={Egypt} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Egyptain
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={France} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            French
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={Greece} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Greek
         </Typography>
        </div>   
        <div onClick={handleClick}>
         <img src={India} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Indian
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Ireland} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Irish
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Italy} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
           Italian
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Jamaica} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Jamaican
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Japan} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Japanese
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Kenya} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Kenyan
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Malaysia} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Malaysian
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Mexico} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Mexican
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Morocco} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Moroccan
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Poland} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Polish
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Russia} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Russian
         </Typography>
        </div>             
        <div onClick={handleClick}>
         <img src={Spain} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Spanish
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Thailand} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Thai
         </Typography>
        </div>       
        <div onClick={handleClick}>
         <img src={Tunisia} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Tunisian
         </Typography>
        </div>
        <div onClick={handleClick}>
         <img src={Turkey} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Turkish
         </Typography>
        </div>
        <div onClick={handleClick}>
         <img src={Vietnam} alt="Logo" className={styles.flag}/>
         <Typography className={styles.country}>
            Vietnamese
         </Typography>
        </div>                      
      </Carousel>
    </div>
  )
}

export default AreaList;