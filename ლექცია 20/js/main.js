// დავალება 1. 
// დავწეროთ ფუნქცია, რომელიც დაითვლის სიტყვაში, რამდენი ხმოვანია და დაგვიბეჭდავს h1-ტეგში მათ რაოდენოაბს.
// ხმოვანი ასოებია : "ა,ე,ი,ო,უ, a,e,i,o,u"


function countVowels(text){
    let vowels = ["ა","ე","ი","ო","უ","a","e","i","o","u"]
    let vowelCount = 0
    for (const symbol of text){
        for(const vowel of vowels){
            if(symbol == vowel){
                vowelCount++
            }
        }
    }
    return vowelCount
}
let vowels = countVowels('ნებისმიერი')
let h1Tag = document.querySelector(".vowelCount")
h1Tag.innerText += " სიტყვაში 'ნებისმიერი' არის:  " + vowels;


// დავალება 2.
// დავწეროთ ფუნქცია, რომელიც აიღებს წინადადებას input-ველიდან და ამ წინადადებიდან ყველაზე ყველაზე დიდ სიტყვას დაბეჭდავს h1-ტეგში.
// მაგ: თუ ჩავწერთ input-ში :"Web Development Tutorial", h1-ში უნდა დაიბეჭდოს Development.


let longestWordInput = document.querySelector('#longestWordInput')
let longestWordTag = document.querySelector('.longestWord')
function displayLongestWordInHtml(){
    let text = longestWordInput.value;
    longestWordTag.innerHTML = "ყველაზე გრძელი სიტყვაა:  " + longestWordInText(text);
}
function longestWordInText(text){
    let words = text.split(" ");
    let longestWord = words[0];
    // console.log(words[0].length);
    for (const word of words){
        if(longestWord.length < word.length){
            longestWord = word;
        }
    }
    return longestWord;
}