const intersection = (nums1,nums2) => {
    // let [sorted1, sorted2] = [Array.from(new Set(nums1.sort((a,b)=> a-b))),Array.from(new Set(nums2.sort((a,b)=> a-b)))]
    // console.log(sorted1,sorted2)
    return nums1.filter(value => nums2.includes(value))
}
arr1 = [1,2,2,1]
arr2 = [2,2]
console.log(intersection(arr1,arr2))