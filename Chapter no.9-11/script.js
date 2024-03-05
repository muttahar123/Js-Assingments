var html = +prompt("Enter your obtained html marks");
var css = +prompt("Enter your obtained css marks");
var javaScript = +prompt("Enter your obtained js marks");
var obtainedNumbers = html + css + javaScript;
var totalNumbers = 300;

var percentage = obtainedNumbers / totalNumbers * 100;
if(percentage >= 80){
    var Aone =
    console.log("Congrats A+ Grade !!")
}else if(percentage >= 70){
    var Agrade =
    console.log("Congrats A Grade !!")
}else if(percentage >= 60){
    var Bgrade =
    console.log("Sirf B Grade !!")
}else if(percentage < 60){
    var Fail =
    console.log("Congrats you are fail !!")
}else{
    var invalid =
    console.log("Numbers are not valid")
}
console.log(percentage)

document.write(`<h1>Marks Sheet</h1>
<h4>Total Marks:${totalNumbers}</h4>
<h4>Percentage ${percentage}</h4>
<h4>Grade : ${invalid}</h4>
<h4>Remarks : ${invalid}</h4>
`)