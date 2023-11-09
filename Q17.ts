const Dinner: string[] = ["Engr Ali Mirza","Sir Sahil Adeem","Moulana Syed Moududi","Syed Qutub", "Adolf Hitler","Mohammad Ali Jinnah","Allama Iqbal"];

let Message: string =" would you mind joining me for Dinner Tonight? Other guests will also be there as I got a bigger dining table! ";

console.log("Original Guest List ", Dinner);

console.log(Dinner[6],"The Dinner has been Postponed !");
Dinner.pop();
console.log(Dinner[5],"The Dinner has been Postponed !");
Dinner.pop();
console.log(Dinner[4],"The Dinner has been Postponed !");
Dinner.pop();
console.log(Dinner[3],"The Dinner has been Postponed !");
Dinner.pop();
console.log(Dinner[2],"The Dinner has been Postponed !");
Dinner.pop();


console.log("New Guests List : ",Dinner);

let note: string="you are still invited ! ";
console.log(Dinner[0], note);
console.log(Dinner[1], note);


