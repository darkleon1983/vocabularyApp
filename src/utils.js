const makeFourItemsArray = (sourceArray, newArray = []) => {
  for (let i = 0; i <= 2; i++) {
    let item = newArray.shift();
    newArray.push(item);
    return newArray;
  }
};

export default makeFourItemsArray;
