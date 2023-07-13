
var operator = null
var firstNum = ''
var secNum = ''

function clearResult() {
    firstNum = document.getElementById("userInput").textContent = "";
    secNum = ''
    operator = null
}

function appendNumber(value) {
    console.log(operator)
    if (firstNum == '') {
        document.getElementById("userInput").textContent = "";
    }
    if (operator != null) {
        console.log(operator)
        document.getElementById("userInput").textContent += value
        secNum += value
    } else {
        document.getElementById("userInput").textContent += value
        firstNum += value
    }
    console.log("firstNum =" + firstNum)
    console.log("secNum =" + secNum)

}

function appendOperator(value) {
    if (firstNum == '') {
        if (document.getElementById("userInput").textContent == '' || document.getElementById("userInput").textContent == 'Error' ) {
            document.getElementById("userInput").textContent = 'Error'
            return
        }
        firstNum = document.getElementById("userInput").textContent
    }
    if (value == '+') {
        console.log('plus')
        operator = '+'
        document.getElementById("userInput").innerHTML += '+';
    } else if (value == '-') {
        console.log('minus')
        operator = '-'
        document.getElementById("userInput").innerHTML += '-';
    } else if (value == 'x') {
        console.log('times')
        operator = 'x'
        document.getElementById("userInput").innerHTML += '&times;';
    } else if (value == '/') {
        console.log('divide')
        operator = '/'
        document.getElementById("userInput").innerHTML += '&divide;';
    } else if (value == '%') {
        console.log('%')
        operator = '%'
        document.getElementById("userInput").innerHTML += '&percnt;';
        calculate()
    } else if (value == 'changeSign') {
        if (operator != null) {
            console.log(secNum)
            if (secNum.startsWith('-')) {
                secNum = secNum.substring(1)
                document.getElementById("userInput").innerHTML = firstNum + operator + secNum;
            } else {
                secNum = '-' + secNum
                document.getElementById("userInput").innerHTML = firstNum + operator + secNum;
            }
        } else {
            if (firstNum.startsWith('-')) {
                firstNum = firstNum.substring(1)
                document.getElementById("userInput").innerHTML = firstNum;
            } else {
                firstNum = '-' + firstNum
                document.getElementById("userInput").innerHTML = firstNum;
            }
        }
    }

}

function calculate() {
    if (operator == '+') {
        console.log('plus')
        document.getElementById("userInput").textContent = parseFloat(firstNum) + parseFloat(secNum)
    } else if (operator == '-') {
        console.log('minus')
        document.getElementById("userInput").textContent = parseFloat(firstNum) - parseFloat(secNum)
    } else if (operator == 'x') {
        console.log('times')
        document.getElementById("userInput").textContent = parseFloat(firstNum) * parseFloat(secNum)
    } else if (operator == '/') {
        console.log('divide')
        document.getElementById("userInput").textContent = parseFloat(firstNum) / parseFloat(secNum)
    } else if (operator == '%') {
        console.log('%')
        document.getElementById("userInput").textContent = parseInt(firstNum) / 100
    }
    firstNum = ''
    secNum = ''
    operator = null
}

