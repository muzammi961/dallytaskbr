// // one


function func(number1,number2){
 console.log(number2/number1)
}

func(10,20)


// two

try{
    let denominator=0
    if(denominator==0){
  throw Error('this is the denominator is zero ')
    }
}catch(error){
   console.log('this is ',error.message)

}finally{
    console.log('this code has finshed')
}


// three

try{
let value=10/0;
console.log(value)
}catch(error){
 console.log('this is error...'.error.message)

}finally{
    console.log('this code has finshed')
}



// four


try{
  let value=prompt('enter the value...')
  console.log(value)
}catch{
    
}finally{
    console.log('this code has completed  ...')
}





// function divideNumbers(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Denominator cannot be zero.");
//     }
//     let result = a / b;
//     console.log("Result:", result);
//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     console.log("Operation complete.");
//   }
// }

// divideNumbers(10, 2);  
// divideNumbers(10, 0);  