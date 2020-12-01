
export const createDishObj = (apiDataArr: object[]) => {
  return apiDataArr.map((apiDish: any) => {
    return {
      idMeal: apiDish.idMeal,
      strArea: apiDish.strArea,
      strMeal: apiDish.strMeal,
      strCategory: apiDish.strCategory,
      strMealThumb: apiDish.strMealThumb,
    }
  })
}

export const createDishDetailObj = (apiDataObj: any) => {
  const ingridients = Object.entries(apiDataObj)
  .filter(([key, value]) => key.includes('strIngredient') && value)
  .map(([key, value]) => String(value));
  return {
    idMeal: apiDataObj.idMeal,
    strArea: apiDataObj.strArea,
    strMeal: apiDataObj.strMeal,
    strCategory: apiDataObj.strCategory,
    strMealThumb: apiDataObj.strMealThumb,
    strInstructions: apiDataObj.strInstructions,
    ingridients
  }
}

export const createParamsArr = (paramsObjArray: object[]) => {
  return paramsObjArray.map((paramObj) => {
    const [ paramStr ] = Object.values(paramObj);
    return paramStr;
  })
}