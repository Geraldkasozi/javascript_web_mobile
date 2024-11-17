// Write a JavaScript program that checks the temperature and prints it
const checkTemp = (temp)=>{
    if(temp > 30){
        console.log('Its too hot')
    }else if(temp >= 20 && temp <= 30 ){
        console.log('Its moderate')
    }else{
         console.log("Its cold")
    }
}

console.log(checkTemp(30))

// Write a JavaScript program that checks if a person is eligible for admission to a school. The
const checkScore =(score)=>{
 if(score >= 70){
    console.log("Eligible for Admission")
 }else if(score >= 50 && score <= 69){
    console.log("Admission on probation")
 }else{
    console.log("Not eligible for admission")
 }
}

console.log(checkScore(49))

// Write a JavaScript program that checks if a village has enough clean water for its residents. The
const checkWater = (litres)=>{
    if(litres > 500){
        console.log('Enough water')
    }else if(litres >= 200 && litres <= 500){
        console.log('Water is limited')
    }else{
        console.log('water shortage')
    }
}

console.log(checkWater(100))

// Write a JavaScript program that checks the quality of a product. The conditions are:
const checkQuality = (expired=false, quality)=>{
  if(expired === true){
     if(quality > 8){
        console.log('Good Quality')
     }else if(quality >= 5 && quality <= 8){
           console.log("average quality")
     }else{
        console.log("poor quality")
     }
  }else{
    console.log("Do not use")
  }
}

console.log(checkQuality(true, 2))
