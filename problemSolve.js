function calculateTax(income,expenses){
    if(typeof income !== 'number'||
        typeof expenses !== 'number'||
        income <= 0 ||
        expenses <= 0 ||
        income < expenses

    ){
        return 'Invalid Input';
    }

    const different = income - expenses;
    const tax = different*.20;
    return tax;
}
const value = calculateTax(10000,3000);
console.log(value);


//----------------------------------------------

 function sendNotification(email){
    if(email.indexOf('@') === -1){
        return "Invalid Email";
    }
    const parts = email.split('@');
    const userName = parts[0];
    const domainName = parts[1];
    return userName + 'send you an email from' + domainName;
}

console.log(sendNotification('zahid @ gamil.com'));
console.log(sendNotification('invalid email.com')) 


//----------------------------------------------



function checkDigitalInName(name){
    if (typeof name !== 'string'){
        return "Invalid Input"
    }

    for (let i = 0; i <name.length; i++){
        if( !isNaN(name[i]) && name[i] !== ' '){
            return true;
        }
    }
    return false;
}
const value1 = checkDigitalInName('raju3432');
const value2 = checkDigitalInName('ashik khan')
const value3 = checkDigitalInName(454254)
console.log(value1);
console.log(value2)
console.log(value3)



//----------------------------------------------



function calculateFinalScore(obj){
    if(typeof obj !== 'object' || obj === null){
        return "Invalid Input"
    }

    const {name,testScore,schoolGrade,isFFamily} = obj;

    if(typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean'){
        return 'Invalid Input'
    }

    if(testScore > 50 || schoolGrade > 30 || testScore < 0 ||schoolGrade > 30 || testScore < 0 || schoolGrade < 0 ){
        return "Invalid Input"
    }

    let Result = testScore + schoolGrade;

    if(isFFamily){
        Result = Result + 20 ;
    }

    return Result >= 80;
}

const student1 = {
    name:'ashik',
    testScore:46,
    schoolGrade:26,
    isFFamily:true
}
const student2 = {
    name:'ashik',
    testScore:36,
    schoolGrade:16,
    isFFamily:false
}

console.log(calculateFinalScore(student1))
console.log(calculateFinalScore("hollo"))


//----------------------------------------------



function waitingTime(waitingTimes,serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }

    const allTime = waitingTimes.reduce((sum,time) => sum + time, 0);

    const averageTime = Math.round(allTime / waitingTimes.length);
    
    const waitingPeople = serialNumber - waitingTimes.length-1;

    const waitingTime = waitingPeople *averageTime;

    return waitingTime;
}

let waitingTimes = [3,5,7,11,6];
let serialNumber = 10;

console.log(waitingTime(waitingTimes,serialNumber));