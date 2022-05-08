// 1) შევქმნათ რიცხვითი მასივი, და შემოვიტანოთ რიცხვები ჩვენი სურვილისამებრ

let numbers = [10,30,90,70,50,300,400,100,200,500,600,700,800]

// 2) გავფილტროთ ყველა რიცხვი რომელიც არის 50 დან 500-მდე, გაფილტრული მასივი 
// გავუშვათ foreach ციკლში და მისი გამოყენებით დავბეჭდოთ თითოეული ელემენტი კონსოლში.

let findNumber = numbers.filter(number)
function number(element){
    return element >= 50 && element <= 500
}
findNumber.forEach(mbewdavi);
function mbewdavi(x){
    console.log(x);
}


// 3) დავასორტიროთ მასივი ზრდადობის და კლებადობის მიხედვით.


findNumber.sort(ascending)
function ascending(n1,n2){
    return n1-n2;
}
console.log("ზრდადობით დალაგებული: " + findNumber)

findNumber.sort(descending)
function descending(n1,n2){
    return n2-n1;
}
console.log("კლებადობით დალაგებული: " + findNumber)


// 4) გავაკეთოთ 2 ღილაკი:1.ზრდადობა 2.კლებადობა
// თუ დავაჭერთ ზრდადობას h1-ში გამოიტანოს ზრდადობით დალაგებული მასივი
// თუ დავაჭერთ კლებადობას h1-ში გამოიტანოს კლებადობით დალაგებული მასივი


let h1Tag = document.querySelector(".h1txt")
h1Tag.innerText += " 90,70,50,300,400,100,200,500";
function displayNumbersInAscending(){
    findNumber.sort(ascending)
    h1Tag.innerHTML = "Numbers: " + (findNumber);
}
function displayNumbersInDescending(){
    findNumber.sort(descending)
    h1Tag.innerHTML = "Numbers: " + (findNumber);
}


// 5) შევამოწმოთ მასივის ყველა ელემენტი არის თუ არა ლუწი და შედეგი დავბეჭდოთ კონსოლში : "მასივის ყველა ელემენტი არის ლუწი"


for(var number of findNumber){
    if (number % 2 == 0){
        console.log("მასივის ყველა ელემენტი არის ლუწი");
    }
}