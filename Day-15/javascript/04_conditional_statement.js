console.log("//////////---if statements---///////////");
console.log("*****statement false hoy to print na thay*****");
console.log("before my if statement:");
let age = 20;
console.log(age);
if (age >= 18) {
    console.log("your statement true:");
}
if (age <= 18) {
    console.log("your statement false:");
}
console.log("after my if statement:");
console.log("----------------------------------------");
console.log("if else statement");
let box = 23;
if (box >= 18) {
    console.log("you can vote");
}
else if (box <= 18) {
    console.log("you cannot vote");
}
else {
    console.log("you are 18");
}
console.log("---------------------------------------");
let color = "green";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken light");
}