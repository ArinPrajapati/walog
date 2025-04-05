def is_palindrome(s:str):
    sR = ""
    sN = ""
    for char in s:
        char = char.lower()
        if char.isalpha():
            sR = char + sR
            sN = sN + char
    print(sR == sN)
        
a = input()
is_palindrome(a)
