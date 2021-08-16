## Two Sum (easy)

### Time: O(n) --- Space: O(1)

###### Given an array of intergers and an integer, return indicies of the two numbers such that they add up to the target

```JavaScript
const twoSum = (nums, target) => {
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (hash[diff] && hash[diff] !== i) {
            return [i, hash[diff]]
        }
    }

}

```

## Container w/ Most Water (medium)

### Time: O(n) --- Space: O(1)

###### Given n non-negative integers, where each represents a point at a coordinate (i, ai).

###### n vertical lines are drawn such that two endpoints of the line i is at (i, ai) and (i, 0)

###### Find two lines, which, together with the x-axis forms a container, such that the container contains the most water

```JavaScript
const mostWater = (heights) => {
    let maxOne = 0, maxTwo = heights.length - 1, maxArea = 0

    while (maxOne < maxTwo) {
        const width = maxTwo - maxOne
        const height = Math.min(heights[maxOne], heights[maxTwo])
        const area = height * width
        maxArea = Math.max(maxArea, area)

        if (heights[maxOne <= heights[maxTwo]]) {
            maxOne++
        } else {
            maxTwo++
        }

    }
    return maxArea
}
```

## Trapping Rain Water (hard)

### Time: O(n) --- Spcae: O(1)

###### Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

```JavaScript
const trapper = (heights) => {
    let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0

    while (left < right) {
        if (heights[left] <= heights[right]) {
              if (heights[left] >= maxLeft) {
        maxLeft = heights[left]
      } else {
        totalWater += maxLeft - heights[left]
      }
      left++
    } else {
      if (heights[right] >= maxRight) {
        maxright = heights[right]
      } else {
        totalWater += maxRight - heights[right]
      }
      right--
        }
    }
    return totalWater
}
```

## Backspace String Compare (easy)

### Time: O(1) --- Space: O(1)

###### Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

```JavaScript
const compare = (S, T) => {
    let s = [], t = []

    for (let i = 0; i <S.length; i++) {
        if (S[i] === '#') {
            s.pop()
        } else {
            s.push(S[i])
        }
    }

    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            t.pop()
        } else {
            t.push(T[i])
        }
    }
    s = s.join('')
    t = t.join('')
    s === t

}
```

## Longest Substring w/out Repeating Characters (medium)

### Time: O(n) --- Space: O(1)

###### Given a string s, find the length of the longest substring without repeating characters

```JavaScript
const substringCheck = (s) => {
    let hash = {}, start = 0, maxLength = 0, arr = s.split('')

    for (let i = 0; i < s.length; i++) {
        let current = hash[arr[i]]
        if (current !== null && start <= current) {
            start = current + 1
        } else {
            maxLength = Math.max(maxLength, i = start + 1)
        }
        hash[arr[i]] = i
    }
    return maxLength
}
```
