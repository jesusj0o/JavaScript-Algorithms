/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]

*/

const squareNumber = (nums) => {
    
    let squareArray = []; 
    let leftPointer = 0; 
    let rigthPointer = nums.length - 1;

    for(let i = nums.length - 1; i >= 0; i--){  
        if(Math.abs(nums[rigthPointer]) > Math.abs(nums[leftPointer])){ 
            squareArray.unshift(Math.pow(nums[rigthPointer], 2));
            rigthPointer--;
        }else{ 
            squareArray.unshift(Math.pow(nums[leftPointer], 2));
            leftPointer++;
        }
    }
    return squareArray;
}

let nums = [-4,-1,0,3,10]; 
console.log(squareNumber(nums));
