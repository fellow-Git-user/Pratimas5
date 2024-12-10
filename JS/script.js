// let numbsArray = [2 , 3, 4];
// numbsArray.unshift(1);
// console.log(numbsArray);

//Pirmas budas su new Set
// let numbsArray = [1, 2, 2, 3, 3, 3, 4];
// let noDuplicates = new Set(numbsArray);

// let numbsArrayNoDuplicates = [...noDuplicates];

// for (let i = 0; i < numbsArray.length; i++){
    
// }

// for (let i = 0; i < numbsArrayNoDuplicates.length; i++){

// }

// let arrLength = numbsArrayNoDuplicates.length;

// console.log(`[${numbsArray}] -> ${arrLength} (skirtingi elementai: ${numbsArrayNoDuplicates})`)

// let numbsArray = [1, 2, 2, 3, 3, 3, 4];
// let numbsEmptyArray = [];

// for (let i = 0; i < numbsArray.length; i++){
//     if (!numbsEmptyArray.includes(numbsArray[i])){
//         numbsEmptyArray.push(numbsArray[i]);
//     }
// }
// console.log(numbsEmptyArray);

// let initialArray = [-3, 1, -2, 4, -5, 6];
// console.log(initialArray);

// let positiveNumbers = [];

// for (let i = 0; i < initialArray.length; i++){
//     if (initialArray[i] > 0 ){
//         positiveNumbers.push(initialArray[i]);
//     } 
// }
// console.log(positiveNumbers);

// let firstArray = [1, 2, 3, 4, 3, 5];
// let element = 3;

// let noDuplicates = new Set(firstArray);
// let numbsWithoutDuplicates = [...noDuplicates];
// console.log(numbsWithoutDuplicates);

//  for (let i = 0; i < numbsWithoutDuplicates.length; i++){ 
//  }

//  for (let i = 0; i < firstArray.length; i++){  
//  }

//  let noDuplicatesArrayLength = numbsWithoutDuplicates.length;
//  let firstArrayLength = firstArray.length;

//  console.log(noDuplicatesArrayLength)
//  console.log(firstArrayLength)

//  if (firstArrayLength !== noDuplicatesArrayLength){
//     console.log('True, elementas pasikartoja')   
//  } else{
//     console.log('False, elementas nepasikartoja')
// }

let initialArray = [1, 2, 3, 4, 5];
console.log(initialArray);

for(let i = 0; i < initialArray.length; i++){
    // console.log(initialArray[i]);

    let arrayNumber = initialArray[i];

    if (arrayNumber % 2 !== 0) {
        
        arrayNumber = arrayNumber * 3;
        
    } else if (arrayNumber % 2 === 0) {
        arrayNumber = arrayNumber / 2;
    }

    initialArray[i] = arrayNumber;
    
}

for(let i = 0; i < initialArray.length; i++){
    console.log(initialArray[i])
}




