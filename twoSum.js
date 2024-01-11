/**
 * [2,6,9,1], 7 and return [6, 1]
 * [2.5,5,3,6,2,1], 5 and return [3,2]
 * 
 * 
 * Pseudocode
 * -----------
 * function(arr, num)
 * return []
 * valArray
 * nested loop
 * push to valArr
 * return valArr
 */

let twoSum = function(arr, num){
    if(arr.length == 0){
        return []
    }

    
    for(let i = 0; i <= arr.length -1; i++){
        valArr = []
        for(let j = 0; j <= arr.length -1; j++){
            if(arr[i] + arr[j] == num && i != j){
                valArr.push(arr[i])
                valArr.push(arr[j])
        
            }
        }
    }

    return valArr

}


let result = twoSum([2,6,9,1], 7)
console.log(result)


// time complexity = O(n2)
// Space complexity = O(1)