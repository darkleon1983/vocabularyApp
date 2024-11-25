const makeFourItemsArray = (sourceArray, stateFunction, word) => {
  let newArray = [];
  for (let i = 0; i <= 2; i++) {
    let item = sourceArray.shift();
    newArray.push(item);
  }
  newArray.push(word);
  stateFunction(newArray);
};

export default makeFourItemsArray;
