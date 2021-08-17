## Maximum Sum Subarray of Size K (easy)

### Time: O(n) --- Space: O(1)

###### Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

```JavaScript
const checkMax = (array, target) => {
    let start = 0, end = null, windowSum = 0, maxSum = 0

    for (let end = 0; end < array.length; end++) {
        windowSum += array[end]

        if (end >= target - 1) {
            maxSum = Math.max(maxSum, windowSum)
            windowsum -= array[start]
            start +1
        }
    }
    return maxSum
}
```

## Smallest Subarray with a given sum (easy)

### Time: O(n) --- Space: O(1)

###### Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.

###### Return 0, if no such subarray exist

```JavaScript
const checker = (array, target) => {
    let start = 0, end = null, windowLength = Infinity, windowSum = 0

    for (let end = 0; end < array.length; end++) {
        windowSum += array[end]

        while (windowSum >= target) {
            windowLength = Math.min(windowLength, end - start + 1)
            windowSum -= array[end]
            start++
        }
    }
    if (windowLength === Infinity) {
        return 0
    }
    return windowLength
}
```

## Longest Substring with K Distinct Characters (medium)

### Time; --- Space:

###### Given a string, find the length of the longest substring in it with no more than K distinct characters.

```JavaScript
// 'a r a c i i'
// ref = {a : 1}
// ref = {a : 1, r : 1}
// ref = {a : 2, r : 1}
// ref = {a : 2, r: 1, c: 1}
const checker = (string, limit) => {
    let start = 0, end = null, maxLength = 0, ref = {}

    for (let end = 0; end < string.length; end++) {
        const rightChar = string[end]
        if (!(rightChar in ref)) {
            ref[rightChar] = 0
        }
        ref[rightChar] += 1

        while (Object.keys(ref).length > limit) {
            const leftChar = string[start]
            ref[leftChar] -= 1
            if (ref[leftChar] === 0) {
                delete ref[leftChar]
            }
            start += 1
        }

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}

```
