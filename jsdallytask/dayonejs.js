// A.	Create a pure function called calculateTotal(price, tax) that returns the total amount without modifying any external state.

function calculateTotal(price, tax){
return price

} 
console.log(calculateTotal(500,2))


// F.	Create a Car constructor function with properties like brand and speed.

class Car{
   constructor(brand,speed){
      this.brand=brand
      this.speed=speed
}
print() {
 console.log(this.brand,this.speed)    
    }
}
obj=new Car('nano',120)
obj.print()


// S.	Add a method using prototype called increaseSpeed that adds a given value to the 
// T.	current speed.

function funcone(vlaueone){
//   console.log('hii from funcone ...')
this.valueone=vlaueone
};

funcone.prototype.funtwo=function(valuetwo){
let sum=this.valueone+valuetwo
console.log(sum)
}

let obj=new funcone(100)
// obj.funcone()
obj.funtwo(100)

// U.	Create 2 car objects and test the method.



const carobj={
carnameone:'bmw',
carone:function(){
console.log('car name is ',this.carnameone);

},
carnametwo:'nano',
cartwo:function(){
console.log('car name is ',this.carnametwo);
  },
};
	
carobj.cartwo()
carobj.carone()

