const makeFourItemsArray = (sourceArray, stateFunction) => {
  let newArray = [];
  for (let i = 0; i <= 2; i++) {
    let item = sourceArray.shift();
    newArray.push(item);
  }
  stateFunction(newArray);
};

export default makeFourItemsArray;
