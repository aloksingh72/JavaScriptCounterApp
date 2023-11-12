
//jiski id counter hai uski vlaue nikal kar countValue me store kar denge

const countValue = document.querySelector('#Counter');
//uske baad hamne function bana liya hai increment aur decrement ka
const increment = () => {
     // string value ko number ke form me badna ho parseInt ka use karenge
    // isliye parseInt ka use kiya gaya hai 

    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value=value + 1;
    //set the vlaue onto UI
    countValue.innerText = value;
   
};
const decrement = () => {
     //get the value from UI
     let value = parseInt(countValue.innerText);
     //Update the value
     value=value - 1;
     //set the vlaue onto UI
     countValue.innerText = value;

};