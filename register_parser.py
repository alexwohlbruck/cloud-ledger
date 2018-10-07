
def getRegister(filename):
    last_date = ''
    last_comment = ''
    difference = ''
    with open(filename) as f:
        for line in f.readlines():
            if line[0] != ' ':
                date = line[0:8]
                comment = getUntilDoubleSpace(line[10:55])
                account = getUntilDoubleSpace(line[10:56])
                for i in range(102, 136):
                    if line[i] != " ":
                        difference += line[i]
            else:
                account = getUntilDoubleSpace(line[10:56])
                for i in range(102, 136):
                    if line[i] != " ":
                        difference += line[i]




def getUntilDoubleSpace(string):
    count = 0
    newString = ''
    newChar = string[0]
    oldChar = ''
    for ch in string:
        if newChar != ' ' and oldChar != ' ':
            newString += string[count]
            count += 1
        else:
            return newString
    oldChar = newChar
