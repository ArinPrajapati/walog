def generatePascalls_trinagle(rowIndex):
    if rowIndex == 1:
        return [1]
    if rowIndex == 2:
        return [1,1]


    dp = [[1,1]]

    for i in range(rowIndex+1-2):
        newArray = []
        newArray.append(1)

        for i in range(1,len(dp[0])):
            a = dp[0][i] + dp[0][i - 1]
            newArray.append(a)

        newArray.append(1)
        dp.pop(0)
        dp.append(newArray)

    return dp[0]



print(generatePascalls_trinagle(4))

