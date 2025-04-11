def combination_sum(candidates,target):
    result  = []


    def bt(start,current):
        n = 0

        for x in current:
            n = n + x
        print(n)
        if n == target:
            result.append(current)

        i = start 
        while i < len(candidates):
            current.append(candidates[i])
            bt(i+1,current)
            current.pop()
            i += 1

    bt(0,[])
    return result


print(combination_sum([2,3,6,7], 7))
        

