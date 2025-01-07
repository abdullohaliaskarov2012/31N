let words = ["nashr", "nom", "nok", "apple", "banana", "grape", "orange"];

let withN = [];
let withoutN = [];

for (let word of words) {
    if (word.includes('n')) {
        if (withN.length < 100) {
            withN.push(word);
        }
    } else {
        if (withoutN.length < 100) {
            withoutN.push(word);

        }
    }
}

// Natijalarni chiqaramiz
console.log("3 ta element 'n' harfi bilan:", withN);
console.log("4 ta element 'n' harfisiz:", withoutN);


