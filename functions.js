//on click
function add(a,eig8,unde_){
    eig8=['array'];
    console.log('the array is printed as:',eig8);
    // unde_=parseInt(prompt('enter:'))
    // alert('hello world')
    unde_=6;
    for(let i=1; i<unde_; i++){
        a='';
        for(let j=1; j<i; j++){
            a+=j;
        }
        console.log(a)
    }
    //unchangable variables
    const cant_=10;
    // var cant_=100;
    console.log('what does it says?:(const vs others)', cant_);
    //obj_dept
    let manzil={
        'home':'kirtipur',
        'age':19,
        'class':'first',
        'learns': 'hacking'
    }
    console.log(manzil.home)
}
add()



