// გავაკეთოთ სახელების მასივი ["ანა", "ელენე", "ნიკო","ნიკოლოზ"...], ამ სახელების მასივიდან კონსოლში დაიბეჭდოს
// მხოლოდ ის სახელები, რომელთა პირველი და ბოლო ასო იქნება ერთნაირი მაგ: ანა, ელენე.


let names = ["ანა", "ელენე", "ირაკლი", "ნიკო", "ნიკოლოზ"]
let existsName = false
for (var n of names){
    if(n[0] == n[n.length-1]){
        console.log(n)
        existsName = true
    }
}
if(existsName == false){
    console.log('ასეთი სახელი ვერ მოიძებნა')
}


// დავბეჭდოთ მასივის ყველა ელემენტი აყვანილი 2 ხარისხში.(კვადრატში)


// let numbers = [1, 2, 3, 4, 5]
// for(var number of numbers){
//     console.log(number * number)
// }


// დაბეჭდეთ მასივიდან ის რიცვხები, რომლებიც აღემატება პირველი და ბოლო რიცხვის საშუალოს.


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let average = (numbers[0] + numbers[9])/2
// for(var number of numbers){
//     if (number > average) {
//         console.log(number);
//     }
// }


// მასივიდან დაბეჭდეთ მხოლოდ და მხოლოდ ლუწი რიცხვები


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// for(var number of numbers){
//     if (number % 2 == 0){
//         console.log(number);
//     }
// }


// while-ის გამოყენებით დაბეჭდეთ კონსოლში 0-დან 20-მდე რიცხვები


// var number = 0
// while(number < 20){
//     number++
//     console.log(number)
// }


// while-ის გამოყენებით დაბეჭდეთ ყველა ლუწი ციფრი 0-დან 20მდე, 0-ის გარდა


// var number = 0
// while(number<20){
//     number++;
//     if(number % 2 == 0){
//         console.log(number)
//     }
// }


// while-ის გამოყენებით დავბეჭდოთ 0-20მდე რიცხვებიდან 3-ის ჯერადი რიცხვები,ასევე ცალკე ცვლადში დავითვალოთ მათი ჯამი და დავბეჭდოთ კონსოლში.


// let number = 0
// let jami = 0
// while (number < 20){
//     number++

//     if(number % 3 == 0){
//         console.log(number);
//         jami += number;
//     }

// }
// console.log('jami: ' + jami)



// გავაკეთოთ რიცხვების მასივი და while-ის გამოყენებით კონსოლში დავბეჭდოთ მასივის ყველა ელემენტი.


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// var i=0;
// while (i < numbers.length){
//     console.log(numbers[i]);

//     i++;
// }


// გავაკეთოთ რიცხვების მასივი და გავაკეთოთ 2 ცარიელი მასივი ლუწი რიცხვებისთვის, კენტი რიცხვებისთვის.
// რიცხვების მასივიდან კენტები ჩავწეროთ კენტების მასივში, ლუწები ჩავწეროთ ლუწების მასივში.
// ამ კენტების მასივიდან html-ის ტეგების სახით გამოვიტანოთ საიტზე მათი მნიშვნელობები p ტეგებში წითელი ფერის წარწერებით.
// ლუწების მასივიდან html-ის ტეგების სახით გამოვიტანოთ საიტზე მათი მნიშვნელობები h1 ტეგებში მწვანე ფერის წარწერით.


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let test = document.getElementById("txt-txt")
// for(var number of numbers){
//     if(number % 2 == 0){
//         test.innerHTML += `<h1 class="luwi"> ${number} </h1>`
//     }else{
//         test.innerHTML += `<p class="kenti"> ${number} </p>`
//     }
// }
// let luwebi = document.querySelectorAll(".luwi")
// for(var luwi of luwebi){
//     luwi.style.color = "green"
// }
// let kentebi = document.querySelectorAll(".kenti")
// for(var kenti of kentebi){
//     kenti.style.color = "red"
// }


// გავაკეთოთ ცვლადი, რომელშიც მნიშვნელობას შემოვიტანთ prompt-ის გამოყენებით. 
// prompt-ში უნდა გამოვიდეს წარწერა "შემოიყვანეთ ტექსტი"
// გავაკეთოთ ცვლადი, რომელშიც მნიშვნელობას შემოვიტანთ prompt-ის გამოყენებით.
// prompt-ში უნდა გამოვიდეს წარწერა "შემოიყვანეთ ფერი ინგლისურად. მაგ:red
// შემოყვანილი ტექსტი h1 ტეგის სახით გამოვიტანოთ საიტზე და ტექსტის ფერი იყოს ის რაც მომხმარებელმა prompt-ში შემოიყვანა 


// let text = prompt("შემოიყვანეთ ტექსტი")
// let color = prompt("შემოიყვანეთ ფერი ინგლისურად. მაგ: red")
// let textWrite = document.getElementById("txt-txt")
// textWrite.innerHTML = `<h1 class="info">${text}</h1>`
// let colorAny = document.querySelector(".info")
// colorAny.style.color = color