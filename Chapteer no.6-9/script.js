var userinput = prompt("Enter your table number")
console.log(userinput)
document.write('Number Table')
document.write(`<h4>${userinput}x 1 = ${userinput}</h4>`)
document.write(`<h4>${userinput}x 2 = ${userinput*2}</h4>`)
document.write(`<h4>${userinput}x 3 = ${userinput*3}</h4>`)
document.write(`<h4>${userinput}x 4 = ${userinput*4}</h4>`)
document.write(`<h4>${userinput}x 5 = ${userinput*5}</h4>`)
document.write(`<h4>${userinput}x 6 = ${userinput*6}</h4>`)
document.write(`<h4>${userinput}x 7 = ${userinput*7}</h4>`)
document.write(`<h4>${userinput}x 8 = ${userinput*8}</h4>`)
document.write(`<h4>${userinput}x 9 = ${userinput*9}</h4>`)
document.write(`<h4>${userinput}x 10 = ${userinput*10}</h4>`)

// Document.write(`<h1></h1>`)

var userSub1 = +prompt(`Enter your first subject.`)
var userSub2 = +prompt(`Enter your Second subject.`)
var userSub3 = +prompt(`Enter your Third subject.`)
console.log(userSub1)
console.log(userSub2)
console.log(userSub3)
var total = userSub1+userSub2+userSub3

// document.write(`The total obtain number is ${total}.`)
var percentage = total/300*100
document.write(`The total obtain number is ${total}.<br> Your percentage is ${percentage}`)
