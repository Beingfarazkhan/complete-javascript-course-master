"use strict";

// // let hasDriverLicense = false;
// // const passTest = true;
// // if(passTest) hasDriversLicense=true;
// // if(hasDriverLicense) console.log("you can drive your car now : ")

// // function logger(){
// //     console.log("My name is faraz ;)");
// // }
// // logger();
// // logger();
// // logger();

// // function foodProcessor(apples, oranges){
// //  console.log(apples, oranges);
// //  const juice = `juice made with ${apples} apples and ${oranges} oranges.` ;
// //  return juice;
// // }

// // const appleJuice = foodProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = foodProcessor(3, 4);
// // console.log(appleOrangeJuice);

// //Function declaration
// function calcAge1(birthYear){
//     const age  = 2022- birthYear ;
//     return age;
//     // return 2037 - birthYear
// }

// const age1 = calcAge1(2002);
// console.log(age1)

// //Function Expressions
// const calcAge2 = function(birthYear){
//     return 2022- birthYear ;
// }
// const age2 = calcAge2(2002);
// console.log(age1, age2);

// //arrow function
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

//coding challenge 1
// const avg = (score1, score2, score3) => (score1 + score2+ score3)/3 ;
// let avgDolphins = avg(44, 23, 71);
// let avgKoalas = avg(65, 54, 49);

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2*avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)  ;
//     }
//     else if(avgKoalas>= 2*avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)  ;
//     }
//     else{
//         console.log("No team wins! ");
//     }
// }

// checkWinner (avgDolphins, avgKoalas) ;
// checkWinner (500, 200) ;

// const friends = ['goku', 'gohan', 'picollo'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// const bill1 = 125;
// const bill2 = 555;
// const bill3 = 44;

// function calcTip(bill){
//     if(bill>=50 && bill<=300){
//         return bill*0.15 ;
//     }
//     else{
//         return bill*0.2 ;
//     }
// }
// const tip1 = calcTip(bill1);
// const tip2 = calcTip(bill2);
// const tip3 = calcTip(bill3);

// const tip = [tip1, tip2, tip3];
// console.log(tip);
// const total = [tip1+bill1, tip2+bill2, tip3 + bill3];
// console.log(total);

// const jonas = {
// firstName : 'Jonas',
// lastName : 'Smith',
// age : 2022- 1991,
// job : 'Teacher',
// friends : ['A','B','C']
// };

// console.log(jonas.job);
// console.log(jonas['job']);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Smith',
//     birthYear : 1991,
//     job : 'Teacher',
//     friends : ['A','B','C'],
//     hasDriverLicense : true ,
//     // calcAge : function (birthYear){
//     //     return 2022 - birthYear;
//     // }
//     calcAge : function(){
//         this.age = 2022 - this.birthYear ;
//         return this.age;
//     },
//     getSummary : function(){
//         return `${this.firstName} is ${this.calcAge()} years old and has ${this.hasDriverLicense ? 'a' : 'no'} drivers license.`
//     }
//     };

//     console.log(jonas.calcAge());
//     console.log(jonas.calcAge());
//     console.log(jonas.calcAge());
//     console.log(jonas.calcAge());
//     console.log(jonas.age);
//     console.log(jonas.getSummary())
// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(2002));

// const mark = {
//     fullName : 'Mark Miller',
//     weight : 78,
//     height : 1.69,
//     calcBmi : function(){
//         this.bmi = this.weight/(this.height**2);
//         return this.bmi ;
//     }
// }
// const john = {
//     fullName : 'John Smith',
//     weight : 92,
//     height : 1.95,
//     calcBmi : function(){
//         this.bmi = this.weight/(this.height**2);
//         return this.bmi ;
//     }
// }
// john.calcBmi();
// mark.calcBmi();

// if(john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi} .)`);
// }
// else{
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi} .)`);

// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep} 🏋🏻‍♂️ .`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];

// for(let i = jonas.length - 1 ; i >= 0 ; i-- ){
//     console.log(i, jonas[i], typeof(jonas[i]));

// }
// let rep = 1;
// while (rep<=10) {
//     console.log(`lifting weight repitition ${rep} 🏋🏻‍♂️ . `);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1 ;
// console.log(dice);

// while(dice !== 6){
//     console.log(`You Rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1 ;
//     if(dice==6)  console.log(`Loop is about to end....`);
// }

// const bills = [22, 295,176,440,37,105,10,1100,86,52];
// let tip = [];
// let total = [];

// const calcTip = bill => (bill>50 && bill<300) ? bill * 0.15 : bill * 0.2 ;

// for(let num = 0 ; num < bills.length ; num++){
//     tip[num] = calcTip(bills[num]);
//     total[num] = tip[num] + bills[num];
// }
// console.log("Tips:");
// console.log(tip);
// console.log("Total bills : ");
// console.log(total);

// function calcAverage(arr){
//     let sum = 0;
//     for(let i = 0 ; i< arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg ;
// }

// console.log(`The average of the random array is ${calcAverage([1,2,3,4,5,6,7,8,9])} .`)
// console.log(`The average of all the bills is ${calcAverage(total)} .`)
// console.log(`The average of all the tips is ${calcAverage(tip)} .`)
console.log("hello");
console.log("world");
