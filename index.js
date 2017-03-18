/*
 *	@author: SombreroElGringo
 *
 *	@git: https://github.com/SombreroElGringo
 *
 *	@description: Sort-algorithms regroup all the popular sorting algorithms.
 *
 *                1	Simple sorts
 *                  1.1	Insertion sort
 *                  1.2	Selection sort
 *                 2	Efficient sorts
 *                  2.1	Merge sort
 *                  2.2	Heapsort
 *                  2.3	Quicksort
 *                 3	Bubble sort and variants
 *                  3.1	Bubble sort
 *                  3.2	Shellsort
 *                  3.3	Comb sort
 *                 4	Distribution sort
 *                  4.1	Counting sort
 *                  4.2	Bucket sort
 *                  4.3	Radix sort
 *
 *	@version: 1.0.0
 *
 *	@license: MIT
 *
**/

exports.printHello = function () {
  console.log('Hello world !');
  return 'Hello world !';
}


//------------------------------------------ Simple sort

/**
 * Insertion sort algorithm.<br><br>
 *
 * Insertion sort is a simple sorting algorithm that is relatively efficient for small lists and mostly sorted lists, and is often used as part of more sophisticated algorithms.
 * It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list.[17] In arrays, the new list and the remaining elements can share the array's space, but insertion is expensive, requiring shifting all following elements over by one.
 * Shellsort (see below) is a variant of insertion sort that is more efficient for larger lists.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.insertionSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function insertionSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.insertionSort = function (array) {
  var i,
      y;

  for (i=0; i < array.length; i++) {
    var temp = array[i];

    for (y=i-1; y > -1 && array[y] > temp; y--) {
      array[y+1] = array[y];
    }
    array[y+1] = temp;
  }
  return array;
}

/**
 * Selection sort algorithm.<br><br>
 *
 * Selection sort is an in-place comparison sort. It has O(n^2) complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
 * Selection sort is noted for its simplicity, and also has performance advantages over more complicated algorithms in certain situations.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * conso.selectionSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function selectionSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.selectionSort = function (array) {
  var i,
      y,
      min;
    for (i=0; i < array.length; i++){
      //set minimum to this position
      min = i;
      //check the rest of the array to see if anything is smaller
      for (y=i+1; y < array.length; y++){
        if (array[y] < array[min]){
          min = y;
        }
      }
      //if the minimum isn't in the position, swap it
      if (i != min){
        swap(array, i, min);
      }
    }
  return array;
}


//------------------------------------------ Bubble sort and variants

/**
 * Bubble sort algorithm.<br><br>
 *
 * Bubble sort is a simple sorting algorithm.
 * The algorithm starts at the beginning of the data set.
 * It compares the first two elements, and if the first is greater than the second, it swaps them.
 * It continues doing this for each pair of adjacent elements to the end of the data set.
 * It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.
 * This algorithm's average time and worst-case performance is O(n^2), so it is rarely used to sort large, unordered data sets.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.bubbleSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function bubbleSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.bubbleSort = function (array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length-1; i++) {
      if( array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

/**
 * Shell sort algorithm.<br><br>
 *
 * Shellsort was invented by Donald Shell in 1959.
 * It improves upon bubble sort and insertion sort by moving out of order elements more than one position at a time.
 * The concept behind Shellsort is that both of these algorithms perform in O(kn) time, where k is the greatest distance between two out-of-place elements.
 * This means that generally, they perform in O(n^2), but for data that is mostly sorted, with only a few elements out of place, they perform faster.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.shellSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function shellSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.shellSort = function (array) {
  var length = array.length,
      h = 1;
  while( h < length / 3){
      h = 3 * h + 1;
  }

  while( h > 0 ){
    for ( var i = h; i < length; i++){
      for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
        swap(array, j, j-h);
      }
    }
    //decreasing h
    h = --h / 3
  }
  return array;
}

/**
 * Comb sort algorithm.<br><br>
 *
 * Comb sort is a relatively simple sorting algorithm originally designed by Wlodzimierz Dobosiewicz in 1980.
 * It was later rediscovered and popularized by Stephen Lacey and Richard Box with a Byte Magazine article published in April 1991.
 * Comb sort improves on bubble sort. The basic idea is to eliminate turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.combSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function combSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.combSort = function (array) {
  var interval = Math.floor(array.length/1.3);
  while (interval > 0) {
    for(var i=0; i+interval<array.length; i+=1) {
      if (array[i] > array[i+interval]) {
        var small = array[i+interval];
        array[i+interval] = array[i];
        array[i] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  return array;
}


//------------------------------------------ Efficient sort

/**
 * Merge sort algorithm.<br><br>
 *
 * Merge sort takes advantage of the ease of merging already sorted lists into a new sorted list.
 * It starts by comparing every two elements (i.e., 1 with 2, then 3 with 4...) and swapping them if the first should come after the second.
 * It then merges each of the resulting lists of two into lists of four, then merges those lists of four, and so on; until at last two lists are merged into the final sorted list.
 * Of the algorithms described here, this is the first that scales well to very large lists, because its worst-case running time is O(n log n).
 * It is also easily applied to lists, not only arrays, as it only requires sequential access, not random access.
 * However, it has additional O(n) space complexity, and involves a large number of copies in simple implementations.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.mergeSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function mergeSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.mergeSort = function (array) {
  // Terminal case: 0 or 1 item arrays don't need sorting
  if (array.length < 2) {
    return array;
  }
  var middle = Math.floor(array.length / 2),
      left    = array.slice(0, middle),
      right   = array.slice(middle);

  return merge(left, right);
}

/**
 *
 * @function merge(left, right)
 * @param {Array} array whit the left and the right part of the input array.
 * @return {Array} Sorted array.
 */

function merge(left, right){
  var result  = [],
      il = 0,
      ir = 0;
  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Heap sort algorithm.<br><br>
 *
 * Heapsort is a much more efficient version of selection sort.
 * It also works by determining the largest (or smallest) element of the list, placing that at the end (or beginning) of the list, then continuing with the rest of the list, but accomplishes this task efficiently by using a data structure called a heap, a special type of binary tree.
 * Once the data list has been made into a heap, the root node is guaranteed to be the largest (or smallest) element.
 * When it is removed and placed at the end of the list, the heap is rearranged so the largest element remaining moves to the root.
 * Using the heap, finding the next largest element takes O(log n) time, instead of O(n) for a linear scan as in simple selection sort.
 * This allows Heapsort to run in O(n log n) time, and this is also the worst case complexity.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.heapSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function heapSort(array)
 * @param {Array} array The array to sort.
 * @param {function} heapify The function compare.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */

exports.heapSort = function (array) {
  buildHeap(array);
  for (var i = array.length-1; i >= 1; i--) {
    swap(array, 0, i);
    array.heapSize--;
    heapify(array, 0);
  }
  return array;
}

function buildHeap(array) {
  array.heapSize = array.length;
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i);
  }
}


function heapify(array, i) {
  var l = 2 * i;
  var r = l + 1;
  var largest;
  if (l < array.heapSize && array[l] > array[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r < array.heapSize && array[r] > array[largest]) {
    largest = r;
  }
  if (largest != i) {
    swap(array, i, largest);
    heapify(array, largest);
  }
}

function swap(array, index_A, index_B) {
    var temp = array[index_A];
    array[index_A] = array[index_B];
    array[index_B] = temp;
}

/**
 * Quick sort algorithm.<br><br>
 *
 * Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array an element called a pivot is selected.
 * All elements smaller than the pivot are moved before it and all greater elements are moved after it.
 * This can be done efficiently in linear time and in-place.
 * The lesser and greater sublists are then recursively sorted.
 * This yields average time complexity of O(n log n), with low overhead, and thus this is a popular algorithm.
 * Efficient implementations of quicksort (with in-place partitioning) are typically unstable sorts and somewhat complex, but are among the fastest sorting algorithms in practice.
 * Together with its modest O(log n) space usage, quicksort is one of the most popular sorting algorithms and is available in many standard programming libraries.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.quickSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function quickSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.quickSort = function (array) {
  if (array.length == 0) return [];

  var left = [],
      right = [],
      pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if(array[i] < pivot)
      left.push(array[i])
    else
      right.push(array[i]);
  }
  return this.quickSort(left).concat(pivot, this.quickSort(right));
}


//------------------------------------------ Distribution sort

/**
 * Counting sort algorithm.<br><br>
 *
 * Counting sort is applicable when each input is known to belong to a particular set, S, of possibilities.
 * The algorithm runs in O(|S| + n) time and O(|S|) memory where n is the length of the input.
 * It works by creating an integer array of size |S| and using the ith bin to count the occurrences of the ith member of S in the input.
 * Each input is then counted by incrementing the value of its corresponding bin.
 * Afterward, the counting array is looped through to arrange all of the inputs in order.
 * This sorting algorithm often cannot be used because S needs to be reasonably small for the algorithm to be efficient, but it is extremely fast and demonstrates great asymptotic behavior as n increases.
 * It also can be modified to provide stable behavior.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.countingSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function countingSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.countingSort = function (array, min, max) {
  var i,
      y = 0,
      count = [];

  for (i = min; i <= max; i++) {
      count[i] = 0;
  }

  for (i=0; i < array.length; i++) {
      count[array[i]]++;
  }

  for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
          array[y++] = i;
      }
  }
  return array;
}

/**
 * Bucket sort algorithm.<br><br>
 *
 * Bucket sort is a divide and conquer sorting algorithm that generalizes counting sort by partitioning an array into a finite number of buckets.
 * Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
 * A bucket sort works best when the elements of the data set are evenly distributed across all buckets.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.bucketSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function bucketSort(array)
 * @param {Array} array Input array.
 * @param key A function that maps values of a to integers.
 * @return {Array} Sorted array.
 */

exports.bucketSort = function (array, key) {
  key = key || function(x) { return x; };
  var len = array.length,
      buckets = [],
      i,
      y,
      b,
      d = 0;

  for (d; d < 32; d += 4) {
    for (i = 16; i--;) {
      buckets[i] = [];
    }
    for (i = len; i--;)
    {
      buckets[(key(array[i]) >> d) & 15].push(array[i]);
    }
    for (b = 0; b < 16; b++) {
      for (y = buckets[b].length; y--;) {
        array[++i] = buckets[b][y];
      }
    }
  }
  return array;
}

/**
 * Radix sort algorithm.<br><br>
 *
 * Radix sort is an algorithm that sorts numbers by processing individual digits. n numbers consisting of k digits each are sorted in O(n · k) time.
 * Radix sort can process digits of each number either starting from the least significant digit (LSD) or starting from the most significant digit (MSD).
 * The LSD algorithm first sorts the list by the least significant digit while preserving their relative order using a stable sort.
 * Then it sorts them by the next digit, and so on from the least significant to the most significant, ending up with a sorted list.
 * While the LSD radix sort requires the use of a stable sort, the MSD radix sort algorithm does not (unless stable sorting is desired).
 * In-place MSD radix sort is not stable. It is common for the counting sort algorithm to be used internally by the radix sort.
 * A hybrid sorting approach, such as using insertion sort for small bins improves performance of radix sort significantly.
 *
 * @example
 * var sort = require('sort-algorithms')
 * var array = [2, 5, 1, 0, 4];
 * console.log(sort.radixSort(array)); // [ 0, 1, 2, 4, 5 ]
 *
 * @function radixSort(array)
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */

exports.radixSortLSD = function (array, maxDigit) {
  var counter = [[]],
      mod = 10,
      dev = 1;
   for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
       for (var y = 0; y < array.length; y++) {
           var bucket = parseInt((array[y] % mod) / dev);
           if (counter[bucket] == null ) {
               counter[bucket] = [];
           }
           counter[bucket].push(array[y]);
       }
       var pos = 0;
       for (var y = 0; y < counter.length; y++) {
           var value = null ;
           if (counter[y] != null ) {
               while ((value = counter[y].shift()) != null ) {
                   array[pos++] = value;
               }
           }
       }
   }
   return array;
}
