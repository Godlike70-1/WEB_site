let b=typeof 'a'
console.log('the data type of b is:',b)

//array and for looping array 

var store=['cars','dirt bikes','iphones','billions of dollars']
console.log('the store include:',store[0])

console.log('The code says:',store[store.length+1])
let leng_=store.length
console.log('the store include generated using for loop is:')
for(let j=0; j<leng_; j++){
    console.log(store[j]);
}
//objects like dictionaries in python
var minerals={
    'gold':1000,
    'diamond':10000,
    'cristal':100000,
    'silver':100,
    'you':'Hacker'
}
// for(let i=0; i<)
console.log(Object.keys(minerals).length)
let length_=Object.keys(minerals).length
//we cant do for loop in object cause it couldnt be done indexing.
// for(let i=0; i<length_; i++){
//     console.log('the value of',Object.keys(minerals['']),'is')
// }