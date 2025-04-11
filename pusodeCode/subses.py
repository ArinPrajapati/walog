def subsets(nums):
    result = []

    def backtrack(start, current):
        print(f"backtrack {start} {current}")
        
        subsets_copy = []
        for x in current:
            subsets_copy.append(x)
        result.append(subsets_copy)
        print(f"result {result}")


        i = start 
        while i < len(nums):
            current.append(nums[i])
            print(f"current after {current}")
            backtrack(i + 1, current)
            print("pop running")
            current.pop()
            i += 1

    backtrack(0,[])
    return result


print(subsets([1,2,3]))
