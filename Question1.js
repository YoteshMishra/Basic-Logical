const sampleArr =[23, 45, 44, 22, 67, 76, 98, 63];
let newEven =[];
let newOdd = [];

function evenNumFunc(arr) {
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
	  newEven.push(arr[i]);
	} else {
          newOdd.push(arr[i]);
        }

  }
return {
evenArr : newEven,
oddArr : newOdd
};
 
}


const data = evenNumFunc(sampleArr);