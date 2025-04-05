def merge_sorted_array(nums1,nums2):
    p1 = 0
    p2 = 0
    arr = []
    while p1 < len(nums1) and p2 < len(nums2):
        if nums1[p1] < nums2[p2]:
            arr.append(nums1[p1])
            p1 += 1
        else: 
            arr.append(nums2[p2])
            p2 += 1
    if p1 < len(nums1):
        for i in range(p1,len(nums1)):
            arr.append(nums1[i])
    elif p2 < len(nums2):
        for i in range(p2,len(nums2)):
            arr.append(nums2[i])
    return arr

print(merge_sorted_array([1, 3, 5], [2, 4, 6]))
