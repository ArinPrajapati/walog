def generate(numRows):
    if numRows <= 0:
        return []
    dp = []

    for i in range(numRows):
        row = [1]

        if i > 0:
            prev_row = dp[i -1]
            for j in range(1,i):
                row.append(prev_row[j - 1] + prev_row[j])
            row.append(1)
        dp.append(row)

    return dp



            
            
print(generate(5))
