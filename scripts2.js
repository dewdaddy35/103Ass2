// Create a price claculation, tax  and display information

function Quantity(){
    let Qty = Number(prompt ("Enter Quantity"));
    let g1 = 54.99;
    let Sub = (g1 * Qty); 
    let s = Sub.toFixed(2);
        console.log("Qty " + Qty)  
    console.log("Subtotal $" + Sub);
    let b = .013;
    let tax = (Sub * b);
    let t = tax.toFixed(2);
    console.log("Tax $" + t);
    let final = (Sub + tax);
    let f = final.toFixed(2);
    console.log("Price $" + f);
}


//document.getElementById("results").innerHTML+=`
//<li class ="error">
//    <p>${Sub}</p>
//    <p>${tax}</p>
//    <p>${final}</p>
//</li>
//`;



//function userInfo(){
//    let userName=prompt("Enter your name");
//    let email=prompt("Enter your email");
//    let salary=prompt("Enter your monthly Salary");
//    let total = Number(salary)*12;
//    console.log(userName, email);
//    console.log(total);
//}

//Function to adding up two values
//function sum(){
//    let a = number(prompt("Enter a:"));
//    let b = number(prompt("Enter b:"));
//
//    let sum =a+b;
//    console.log(sum);
//}


//create a function that gets two grades (0-100) and calculates the average

//function calculateAverage(){
///    let a =Number(prompt("Enter first grade"));
//    let b =Number(prompt("Enter sencond grade"));
    
//    let sumAverage= (a + b) / 3;
 //   console.log(sumAverage);







