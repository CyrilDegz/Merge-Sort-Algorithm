/*
Name: DE GUZMAN, Cyril Ethan A.
Language: JavaScript
Paradigm: Scripting
References: https://stackabuse.com/merge-sort-in-javascript/
            https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
 */


function merge(left, right) {
    let sortedArray = [];

    while(left.length && right.length) {
        if(left[0] < right[0])
            sortedArray.push(left.shift());
        else
            sortedArray.push(right.shift());
    }

    fullarray = [ ...sortedArray, ...left, ...right ];

    // table print row
    row[tableCtr] = table.insertRow(tableCtr);
    cell[tableCtr] = row[tableCtr].insertCell(0);
    cell[tableCtr].innerHTML = '' + fullarray;
    tableCtr++;

    console.log('' + fullarray);
    return fullarray;
}

function mergeSort(array) {
    let half = array.length / 2;

    if(array.length < 2)
        return array;
    
    let left = array.splice(0, half);

    return merge(mergeSort(left), mergeSort(array));
}

let array = new Array();
let nElem = window.prompt("Input the number of elements:");

for(let i = 0; i < nElem; i++)
    array[i] = window.prompt("[" + (i + 1) + "] input number");

// counters
var tableCtr = 0;
var row = [];
var cell = [];
// labels
var title = document.getElementById("title");
var initArray = document.getElementById("initArray");

// table creation
var table = document.getElementById("sorttable");

// innerHTML initializations
title.innerHTML = "Algorithm Process";
initArray.innerHTML = 'Initial Array: '+ array;

// console logs for backup
console.log("Array: " + array);  
console.log("Sorting...");
console.log("Sorted Array: " + mergeSort(array));