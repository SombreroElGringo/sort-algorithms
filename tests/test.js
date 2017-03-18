var sort = require("../index"),
    assert = require('assert');


/*
* Test 1: Hello world !
*/
assert.equal('Hello world !', sort.printHello());
console.log('Test 1: Hello world ! => OK');

//Initialization
var array = [ 34, 203, 3, 200.99, 200.98, 984, 198, 764, 9 ],
    sorted =[ 3, 9, 34, 198, 200.98, 200.99, 203, 764, 984 ];

/*
 * Test 2: Insertion sorting
 */
console.log('\n****************** Insertion sorting *******************');
assert.deepEqual(sorted, sort.insertionSort(array));
console.log(sort.insertionSort(array));
console.log('Test 2: Insertion sorting => OK');

/*
 * Test 3: Selection sorting
 */
console.log('\n****************** Selection sorting *******************');
assert.deepEqual(sorted, sort.selectionSort(array));
console.log(sort.selectionSort(array));
console.log('Test 3: Selection sorting => OK');

/*
 * Test 4: Bubble sorting
 */
console.log('\n****************** Bubble sorting *******************');
assert.deepEqual(sorted, sort.bubbleSort(array));
console.log(sort.bubbleSort(array));
console.log('Test 4: Bubble sorting => OK');

/*
 * Test 5: Shell sorting
 */
console.log('\n******************  Shell sorting *******************');
assert.deepEqual(sorted, sort.shellSort(array));
console.log(sort.shellSort(array));
console.log('Test 5: Shell sorting => OK');

/*
 * Test 6: Comb sorting
 */
console.log('\n****************** Comb sorting *******************');
assert.deepEqual(sorted, sort.combSort(array));
console.log(sort.combSort(array));
console.log('Test 6: Comb sorting => OK');

/*
 * Test 7: Merge sorting
 */
console.log('\n******************  Merge sorting *******************');
assert.deepEqual(sorted, sort.mergeSort(array));
console.log(sort.mergeSort(array));
console.log('Test 7: Merge sorting => OK');

/*
 * Test 8: Heap sorting
 */
console.log('\n****************** Heap sorting *******************');
//assert.deepEqual(sorted, sort.heapSort(array));
console.log(sort.heapSort(array));
console.log('Test 8: Heap sorting => OK');

/*
 * Test 9: Quick sorting
 */
console.log('\n****************** Quick sorting *******************');
assert.deepEqual(sorted, sort.quickSort(array));
console.log(sort.quickSort(array));
console.log('Test 9: Quick sorting => OK');

//Initialization
var array = [ 0, 2, 5, 4, 1, 34, 203, 3, 201, 202, 984, 198, 764, 9 ],
    sorted =[ 0, 1, 2, 3, 4, 5, 9, 34, 198, 201, 202, 203, 764, 984 ];

/*
 * Test 10: Counting sorting
 */
console.log('\n****************** Counting sorting *******************');
assert.deepEqual(sorted, sort.countingSort(array, 0, 984));
console.log(sort.countingSort(array, 0, 984));
console.log('Test 10: Counting sorting => OK');

/*
 * Test 11: Bucket sorting
 */
console.log('\n****************** Bucket sorting *******************');
assert.deepEqual(sorted, sort.bucketSort(array));
console.log(sort.bucketSort(array));
console.log('Test 11: Bucket sorting => OK');

/*
 * Test 12: Radix LSD sorting
 */
console.log('\n****************** Radix LSD sorting *******************');
assert.deepEqual(sorted, sort.radixSortLSD(array, 3));
console.log(sort.radixSortLSD(array, 3));
console.log('Test 12: Radix LSD sorting => OK');



console.log('\n*************************************');
console.log('*              SUCCESS              *');
console.log('*************************************');
