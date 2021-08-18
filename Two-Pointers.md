## Pair with Target Sum (easy)

### Time: O(n) --- Space: O(1)

###### Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

###### Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

```JavaScript
const twoSumPointer = (array, target) => {
    let left = 0, right = array.length - 1, result = []

    while (left < right) {
        if (array[left] + array[right] === target) {
            result.push(left, right)
            return result
        } else if (array[left] + array[right] < target) {
            left++
        } else if (array[left] + array[right] > target) {
            right--
        } else {
            return [-1, -1]
        }
    }
}
```

## Remove Duplicates (easy)

### Time: --- Space:

###### Given an array of sorted numbers, remove all duplicates from it.

###### You should not use any extra space; after removing the duplicates in-place return the new length of the array.

```JavaScript
// iterate the array and whenever we see a non-duplicate number we move it next to the last non-duplicate number we’ve seen
const remover = (array) => {
    let next = 1, i = 1

    while (i < array.length) {
        if (array[next - 1] !== array[i]) {
            array[next] = array[i]
            next += 1
        }
        i += 1
    }
    return next
}
```
