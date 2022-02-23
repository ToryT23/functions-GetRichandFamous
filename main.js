//Define a function named buyClay.
// The function needs no parameters. It should return an object with no properties on it yet.

const buyClay = () => {
    const clay = {

    }
    return clay
}

//Define a function named makePottery. You need to give it the empty object that buyClay produced, 
//so it needs a single parameter to capture that value and use it.
//The function should perform the task of adding a new property named shape, and its value should be "Bowl".
// The function should then return the object after the new property was added.
const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"
    return clayObject
}
// Define a function named bisqueFire. You need to give it the object that makePottery produced, 
// so it needs a single parameter to capture that value and use it.
// The function should perform the task of adding a new property named readyForGlazing, and 
// its value should be true. The function should then return the object after the new property was added.
const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    return clayObject
}
// Define a function named glazePottery. You need to give it the object that bisqueFire produced, 
// so it needs a single parameter to capture that value and use it.
// The function should check if the pottery has been bisque fired already and is ready for glazing. 
// If it has not, you should log the following message to the console.
// If the pottery has been bisque fired, the function should perform the task of adding a new property 
// named glazing, and its value should be "Midnight Blue". 
// The function should then return the object after the new property was added.
const glazePottery = (clayObject) => {
    if(clayObject.readyForGlazing === true) {
        return clayObject.glazing = "Midnight Blue"
    }else {
        if(clayObject.readyForGlazing === false)
        return "Make sure you bisque fire the pottery before you glaze it."
    }
    return clayObject
}
// Define a function named finalFiring. 
// You need to give it the object that glazePottery produced, so it needs a parameter to capture
//  that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.
// The function should perform the task of adding a new property named cracked, and
//  its value depend on the value of the temperature parameter. 
//  If that value is higher than 1200, then the value of the cracked property must be true.
//  If the value is 1200, or less, the value should be false.
// The function should then return the object after the new property was added.
// To test the function, make sure you invoke it and pass two arguments. First test if a high temperate cracks 
// the pottery
const finalFiring = (clayObject, temperature) => {
    if(temperature > 1200) {
     return clayObject.cracked = true
    }
    if (temperature <= 1200) {
    return clayObject.cracked = false
    }
    return clayObject
}

const newClay = buyClay()

//const firedPottery1400 = finalFiring(glazedPottery, 1400)
//console.log(firedPottery1400)

//const firedPottery1200 = finalFiring(glazedPottery, 1200)
//console.log(firedPottery1200)

makePottery(newClay)
bisqueFire(newClay)
glazePottery(newClay)
finalFiring(newClay, 1700)
console.log(newClay)