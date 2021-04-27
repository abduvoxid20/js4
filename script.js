var num = +prompt('Son kiriting')

while (isNaN(num) || num <= 0) {
    num = +prompt('Notori kiritingiz, boshidan kiriting')
}

var power = +prompt('Daraja kiriting')

while (isNaN(power) || power <= 0) {
    power = +prompt('Notori kiritingiz, boshidan kiriting')
}

var answer = 1

for (let i = 1 ; i <= power ; i++) {
    answer = answer *num
}

console.log(answer);





