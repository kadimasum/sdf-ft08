/*
Given a string of a given length, reverse each character in the string

example
--------
"hello" -> "olleh"
"hey" -> "yeh"
"welcome" -> "emoclew"

Pseudocode
---------
function(str)
if empty return "String cannot be empty"
if datatype != string return "Only strings allowed"
looping in reverse order
store charachacters in a variable
return reversed string

*/

function reverseString(str){
    if(str.length == 0){
        return  "String cannot be empty"
    }

    if(typeof str != "string"){
        return "Only strings allowed"
    }

    let reversed_str = ""
    for(let i = str.length - 1; i >= 0; i--){
        reversed_str = reversed_str + str[i]
    }

    return reversed_str

}

let result = reverseString("7.9")
console.log(result)


// Space complexity = O(n)
// Time complexity = O(n)