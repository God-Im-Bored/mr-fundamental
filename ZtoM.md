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
