const data = require('./data.json');

const changeData  = ()  =>{
  let newData = {
    h: ['username', 'hair_color', 'height'],
    d: []
  }
  for (let i of data) {
    let output = [i.username, i.hair_color, i.height]
    newData.d.push(output)
  }
  return newData

}

const divided = (number) => {
  if ((number % 2) !== 0 && (number % 3) !==0){
    return null
  }else if ((number % 2) === 0 && (number % 3) ===0) {
    return "CIRCLE STAR"
  }else if ((number % 2) === 0) {
    return "CIRCLE"
  }else {
    return "STAR"
  }
}

const algorithmic = (number) => {
  let maxNumber = number - 1
  let countTableIndex = Array.from({length: number +1}, (_, i) => 0);

    countTableIndex[0] = 1;

    for(let i = 1; i < maxNumber + 1; i++) {
      for(let j = 1; j < number + 1; j++) {
        // is j greater than or equal to i ?
        if (j >= i) {
          // Update current countTableIndex[j] state
          countTableIndex[j] = countTableIndex[j] + countTableIndex[j - i];
        }
      }
    }
    // Return the total number of ways
    return(countTableIndex[number]);
}


module.exports = {changeData, divided, algorithmic}
