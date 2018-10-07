import subprocess

def appendCommit(commit, filename):
    jsonData = json.loads(commit)
    data = commit['date'] + ' ' + commit['comment'] + '\n'
    for add in commit['adds']:
        data += '\t' + add['acct'] + '\t' + add['val']

    with open(filename, 'a') as ledger:
        ledger.write(data)


def getBalance(filename):
    bashCommand = "ledger -f " + filename + " -o bal.tmp balance"
    proc = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)

    bal = []
    with open("bal.tmp") as f:
        for line in f.readlines():
            bal.append([line])
    return json.dumps(bal)

def getRegister(filename):
    bashCommand = "ledger -f " + filename + " -o reg.tmp register"
    proc = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)

    last_date = ''
    last_comment = ''
    difference = ''
    reg = []
    with open('reg.tmp') as f:
        for line in f.readlines():
            if line[0] != ' ':
                date = line[0:8]
                comment = getUntilDoubleSpace(line[10:55])
                account = getUntilDoubleSpace(line[10:56])
                for i in range(102, 136):
                    if line[i] != " ":
                        difference += line[i]
                reg.append({'date' : date, 'comment' : comment, 'account' : account})
            else:
                account = getUntilDoubleSpace(line[10:56])
                for i in range(102, 136):
                    if line[i] != " ":
                        difference += line[i]
    return json.dumps(reg)

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
