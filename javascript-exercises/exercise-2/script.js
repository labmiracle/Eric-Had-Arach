function sum(arr, n) {
  if (n <= 0 || n > arr.length) {
    return 'The number of items entered is incorrect';
  }
  
  if (n === 1) {
    return arr[0];
  }
  return arr[n-1] + sum(arr, n-1);  
}


