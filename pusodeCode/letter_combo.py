def letter_combo(digit):
    if len(digit) == 0:
        return []


    digit_map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    result = []

    def backtrack(index,current):
        if index == len(digit):
            result.append(current)
            return
        current_digit = digit[index]
        p_char = digit_map[current_digit]

        for lettter in p_char:
            backtrack(index+1,current + lettter)

    backtrack(0,"")
    return result


print(letter_combo("34"))
