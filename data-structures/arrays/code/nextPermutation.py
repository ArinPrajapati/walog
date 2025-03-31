class Solution(object):
    def reverse(self, nums, start):
        i = start
        j = len(nums) - 1

        while i < j:
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i += 1
            j -= 1

    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        i = n - 2

        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1

        if i < 0:
            self.reverse(nums, i + 1)
            return
        j = n - 1

        while j >= 0 and nums[j] <= nums[i]:
            j -= 1

        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

        self.reverse(nums, i + 1)
        
        


a = [1, 2, 3]
Solution().nextPermutation([1, 2, 3])
print(a)
