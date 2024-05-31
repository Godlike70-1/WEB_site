const obj = {
    name:"Manzil",
    age:10
}
let name_ = obj.name
if(obj.age <=18){
    delete obj.age;
    console.log("Deleted age property")
}else{
    console.log("you are qualified for talking big things")
}


function multi_objs(){
    const DAta = {
        Name:"God",
        abilities:{
            water: "Water shot gun",
            Ulti:"veil of discord"
        }
    }
    console.log(DAta.abilities.water);
}
multi_objs()
