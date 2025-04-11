def count_and_say(n:int):
    if n == 1:
        return 1
    say = "1" 
    for i in range(n - 1):
        count = 0
        newSay = ""
        last = ""
        for i in range(len(say)):
            if i == 0:
                last = say[0]
                count = 1
            else:
                if last != say[i]:
                    newSay = newSay + str(count) + last
                    count = 1
                    last = say[i]
                else:
                    count = count + 1

        newSay += str(count) + say[-1]
        say = newSay

    print(say)
    return say


            




       

count_and_say(3)



