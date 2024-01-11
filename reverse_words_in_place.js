/*
Given an sentence, reverse each word in place

Examples
-------
"How are you" -> "woH era uoa"
"Come here" -> "emoC ereh"

Pseudocode
--------
functio(sentence)
split
nested loop
reverse
store reversed word in a variable
create an empty reversed_array
Append reversed word to array
create reverseSentense variable
loop through reverse word array
concatenate each word to the revverse sentence adding spaces after each word
return reversedSentense.trim()
*/

function reverseSentenceInPlace(sentence){
    if(sentence.length == 0){
        return "Sentence cannot be empty!!!"
    }

    if(typeof sentence != "string"){
        return "Type Error: Only strings allowed"
    }

    let arrayOfWords = sentence.split(" ")
    let reversedArray = []
    let reversedSentence = ""

    for(let i = 0; i < arrayOfWords.length; i++){
        reverseWord = ""
        for(let j = arrayOfWords[i].length - 1; j >= 0; j--){
            reverseWord = reverseWord + arrayOfWords[i][j]
        }

        reversedArray.push(reverseWord)

    }

    for(let i = 0; i < reversedArray.length; i++){
        reversedSentence = reversedSentence + reversedArray[i] + " "
    }


    return reversedSentence.trim()
}

let result = reverseSentenceInPlace("How are you")
console.log(result)

// time complexity = O(n^2) + O(n) = O(n^2)
// space complexity = O(n) + O(n) + O(n) +O(n) = O(n)