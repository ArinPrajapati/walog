def first_unique_char(s):
    map = {}

    for i in range(len(s)):
        map[s[i]] = map.get(s[i],0) + 1
    for i in range(len(s)):
        if map.get(s[i]) == 1:
            return i
    return -1



print(first_unique_char("leetcode"))
