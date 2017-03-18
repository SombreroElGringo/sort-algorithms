# sort-algorithms
Sort-algorithms regroup all the popular sorting algorithms.

## 1	Simple sorts
 - ## 1.1	Insertion sort
 
  Insertion sort is a simple sorting algorithm that is relatively efficient for small lists and mostly sorted lists, and is often used as part of more sophisticated algorithms.
  It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list. 
  In arrays, the new list and the remaining elements can share the array's space, but insertion is expensive, requiring shifting all following elements over by one.
  Shellsort (see below) is a variant of insertion sort that is more efficient for larger lists.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.insertionSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 1.2	Selection sort
 
  Selection sort is an in-place comparison sort. It has O(n^2) complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
  Selection sort is noted for its simplicity, and also has performance advantages over more complicated algorithms in certain situations.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.selectionSort(array)); // [ 0, 1, 2, 4, 5 ]
```
## 2 Efficient sorts
 - ## 2.1	Merge sort
 
  Merge sort takes advantage of the ease of merging already sorted lists into a new sorted list.
  It starts by comparing every two elements (i.e., 1 with 2, then 3 with 4...) and swapping them if the first should come after the second.
  It then merges each of the resulting lists of two into lists of four, then merges those lists of four, and so on; until at last two lists are merged into the final sorted list.
  Of the algorithms described here, this is the first that scales well to very large lists, because its worst-case running time is O(n log n).
  It is also easily applied to lists, not only arrays, as it only requires sequential access, not random access.
  However, it has additional O(n) space complexity, and involves a large number of copies in simple implementations.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.mergeSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 2.2	Heapsort
 
  Heapsort is a much more efficient version of selection sort.
  It also works by determining the largest (or smallest) element of the list, placing that at the end (or beginning) of the list, then continuing with the rest of the list, but accomplishes this task efficiently by using a data structure called a heap, a special type of binary tree.
  Once the data list has been made into a heap, the root node is guaranteed to be the largest (or smallest) element.
  When it is removed and placed at the end of the list, the heap is rearranged so the largest element remaining moves to the root.
  Using the heap, finding the next largest element takes O(log n) time, instead of O(n) for a linear scan as in simple selection sort.
  This allows Heapsort to run in O(n log n) time, and this is also the worst case complexity.
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.heapSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 2.3	Quicksort
 
 Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array an element called a pivot is selected.
  All elements smaller than the pivot are moved before it and all greater elements are moved after it.
  This can be done efficiently in linear time and in-place.
  The lesser and greater sublists are then recursively sorted.
  This yields average time complexity of O(n log n), with low overhead, and thus this is a popular algorithm.
  Efficient implementations of quicksort (with in-place partitioning) are typically unstable sorts and somewhat complex, but are among the fastest sorting algorithms in practice.
  Together with its modest O(log n) space usage, quicksort is one of the most popular sorting algorithms and is available in many standard programming libraries.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.quickSort(array)); // [ 0, 1, 2, 4, 5 ]
```
## 3	Bubble sort and variants
 - ## 3.1	Bubble sort
 
  Bubble sort is a simple sorting algorithm.
  The algorithm starts at the beginning of the data set.
  It compares the first two elements, and if the first is greater than the second, it swaps them.
  It continues doing this for each pair of adjacent elements to the end of the data set.
  It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.
  This algorithm's average time and worst-case performance is O(n^2), so it is rarely used to sort large, unordered data sets.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.bubbleSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 3.2	Shellsort
 
  Shellsort was invented by Donald Shell in 1959.
  It improves upon bubble sort and insertion sort by moving out of order elements more than one position at a time.
  The concept behind Shellsort is that both of these algorithms perform in O(kn) time, where k is the greatest distance between two out-of-place elements.
  This means that generally, they perform in O(n^2), but for data that is mostly sorted, with only a few elements out of place, they perform faster.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.shellSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 3.3	Comb sort
 
  Comb sort is a relatively simple sorting algorithm originally designed by Wlodzimierz Dobosiewicz in 1980.
  It was later rediscovered and popularized by Stephen Lacey and Richard Box with a Byte Magazine article published in April 1991.
  Comb sort improves on bubble sort. The basic idea is to eliminate turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously.
 
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.combSort(array)); // [ 0, 1, 2, 4, 5 ]
```
## 4	Distribution sort
 - ## 4.1	Counting sort
 
  Counting sort is applicable when each input is known to belong to a particular set, S, of possibilities.
  The algorithm runs in O(|S| + n) time and O(|S|) memory where n is the length of the input.
  It works by creating an integer array of size |S| and using the ith bin to count the occurrences of the ith member of S in  the input.
  Each input is then counted by incrementing the value of its corresponding bin.
  Afterward, the counting array is looped through to arrange all of the inputs in order.
  This sorting algorithm often cannot be used because S needs to be reasonably small for the algorithm to be efficient, but it is extremely fast and demonstrates great asymptotic behavior as n increases.
  It also can be modified to provide stable behavior.
  
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  var min = 0;
  var max = 5;
  console.log(sort.countingSort(array, min, max)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 4.2	Bucket sort
 
  Bucket sort is a divide and conquer sorting algorithm that generalizes counting sort by partitioning an array into a finite number of buckets.
  Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
  A bucket sort works best when the elements of the data set are evenly distributed across all buckets.
  
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  console.log(sort.bucketSort(array)); // [ 0, 1, 2, 4, 5 ]
```
 - ## 4.3	Radix LSD sort
 
  Radix sort is an algorithm that sorts numbers by processing individual digits. n numbers consisting of k digits each are sorted in O(n · k) time.
  Radix sort can process digits of each number either starting from the least significant digit (LSD) or starting from the  most significant digit (MSD).
  The LSD algorithm first sorts the list by the least significant digit while preserving their relative order using a stable sort.
  Then it sorts them by the next digit, and so on from the least significant to the most significant, ending up with a sorted list.
  While the LSD radix sort requires the use of a stable sort, the MSD radix sort algorithm does not (unless stable sorting is desired).
  
 ```js
  var sort = require('sort-algorithms')
  var array = [2, 5, 1, 0, 4];
  var maxDigit = 1;
  console.log(sort.radixSortLSD(array,  maxDigit)); // [ 0, 1, 2, 4, 5 ]
```
# License - MIT

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
