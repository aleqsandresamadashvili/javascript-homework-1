//* 1 პირველი სავარჯიშო
let age = 100

if( age < 50) {
    console.log ("ნაკლებია 50-ზე")
}
else if( age > 20 ) {
    console.log ("მეტია 20-ზე")
}
else {
    console.log("შეცდომა")
}

let numbers = 100 < 50 ? "ნაკლებია 50-ზე": (age > 20 ? "მეტია 20-ზე" : "შეცდომა")

console.log(numbers)

//* 2 პირველი სავარჯიშო
let name = 'მარიამ'

if( name = "მარიამ" ) {
    console.log("true")
}
else{
    console.log("false")
}
//* 3 მესამე სავარჯიშო
let surname = 'მარიამ'

switch (surname) {
    case 'მარიამ':
    console.log("true")
    break;
    case 'mariami':
    console.log('false')
    break;
}
//* 4 მეოთხე სავარჯიშო
let box = 20
console.log(typeof box)

//* 5 მეხუთე სავარჯიშო
let number = 10
console.log(String(number))
