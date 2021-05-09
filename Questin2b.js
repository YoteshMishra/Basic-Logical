let number = 1000010001;

const get1ConsecutiveNum = (num) => {
let totalNumsOfOne = 0;
let arrNum = String(num).split('');

  for(let i = 0; i < arrNum.length; i++) {
	if( i === arrNum.length - 1 && arrNum[arrNum.length - 1] === '0') {
		totalNumsOfOne = totalNumsOfOne;
   } else if(arrNum[i] === '1') {
	totalNumsOfOne += 1;
   } else {
	totalNumsOfOne = 0;
   }
  }
 return totalNumsOfOne;
}

const arr = get1ConsecutiveNum(number);
console.log(arr);