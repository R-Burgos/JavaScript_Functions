console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count == 0){
        count = 1;
    }
    if(count < 0){
        count *= -1;
    }
    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(10);
printOdds(50);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let oldEnough = `Congrats ${userName}, you can drive!`;
    let tooYoung = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }
}
checkAge("Ruben", 33);
checkAge("Joe", 16);
checkAge("Sam", 12);

//Exercise 3
function checkQuodrant(x,y){
    if (x > 0 && y > 0){
        return `Quadrant 1`;
    } else if (x < 0 && y > 0){
        return `Quadrant 2`;
    } else if (x < 0 && y < 0){
        return `Quadrant 3`;
    } else if (x > 0 && y > 0){
        return `Quadrant 4`;
    } else if (x == 0 && y != 0){
        return `X Axis`;
    } else if (x != 0 && y ==0){
        return `Y Axis`;
    } else {
        return `Origin`;
    }
}
console.log(checkQuodrant(0,3));
console.log(checkQuodrant(-3,0));
console.log(checkQuodrant(0,0));
console.log(checkQuodrant(1,-5));
console.log(checkQuodrant(-5,3));
console.log(checkQuodrant(1,8));
console.log(checkQuodrant(-8,-3));

//Exercise 4
function validTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c){
    let isValid = validTriangle(a,b,c);
    if(isValid){
        if (a == b && b == c){
            console.log(`Equilateral`);
        } else if( a == b || b == c || a == c){
            console.log(`Isosceles`);
        }else{
            console.log(`Not a valid triangle`);
        }
    }
}
checkTriangle(1, 2, 2);
checkTriangle(1, 1, 2);
checkTriangle(2, 2, 2);
checkTriangle(3, 2, 1);
checkTriangle(3, 3, 4);

//Exercise 5
function dataUsage(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectdAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average projected use: ${projectdAvg} GB/Day`);
    console.log(`Your remaining data is: ${remainingData}`);

    if(currentAvg > projectdAvg){
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectdAvg){
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/Day), 
    continuing this high usage, you'll end up using ${planLimit - projectedUsage} data plan by`);
}

dataUsage(50, 12, 25);