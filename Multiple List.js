function ListOfMultiples(num,length){
    let arrayOfMultiple=[]

    let multiple=1
    for (let i=0 ; i<length ; i++){
        arrayOfMultiple.push(num*multiple)
        multiple++
    }
    return arrayOfMultiple
} 
console.log(ListOfMultiples(7,5))
console.log(ListOfMultiples(12,10))
console.log(ListOfMultiples(17,6))