/*
================== BIG O =========================
Big 0 is a way mathematically to figure out which of two codes are better, the one that runs efficiently.
We want our code to run as quick as possible, be as efficient as possible.

-Time Complexity: Is no measured by time, is measured from the number of operations made.
-Space Complexity: Is the amount of memory that something uses.

Omega Ω - Best Case
Theta θ - Average Case
Omicron Ο - Worst Case

Big 0 Notations
- O(n) It runs n times, number of operations is proportional.
- O(n^2) Loop with in a loop.
- O(1) Most Efficient, Constant.
- O(log(n)) Divide and conquer.
- O(nlog(n)) Used in some sorting algorithms, efficient as you can make a sorting algorithm, unless you are sorting numbers.

Drop Constants: We always drop the constants, is used to simplify the BigO Notations.
Drop Non Dominants: Other way to simplify the BigO Notations.
Different Terms for Inputs: If we have to inputs with different values, the way we can simplify is with O(a+b) and for nested loops O(a*b).
*/


/* O(n) */
function logItems(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
    for(let j=0; j<n; j++){
        console.log(j);
    }
}
logItems(3);

/* O(n^2) */
function logItems2(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i,j);
        }
    }
}
logItems2(3);

/* O(1) */
function addItems(n){
    return n+n; //O(1)
}