
var executed = false;
var exprArray= [];
var decimalStatInsert = false;
var piNsertStat = false;
var decNumInsert = false;
var firstPer = false;
var symbolStat = false;
var i = 7;
var opInserted = false;
var afterEqualLastSym = false;
var expAlert;
var firstNegStat = false;
 console.log("varStatus", afterEqualLastSym, opInserted, executed, decimalStatInsert, piNsertStat, decNumInsert);

function insert(num){
 if(executed == false){
 document.calc.display.value=""
 executed = true;
}

if(num === '*' || num === '/' || num === '+'|| num === '-'){
 if(exprArray[exprArray.length - 1] == '+' || exprArray[exprArray.length - 1] == '-' || exprArray[exprArray.length -1 == '*' || exprArray[exprArray.length - 1] == '/']){
   exprArray.pop();
   exprArray.push(num);
   opInserted = true;
   console.log("raw array" , exprArray);
 }

}

 if(opInserted == false){
   document.calc.display.value = document.calc.display.value + num;
   exprArray.push(num)
     console.log("joined array" , exprArray.join(''))
 }

 if(Number(document.calc.display.value.length) <= 10){
   document.calc.display.value = document.calc.display.value
 }else{
   document.getElementById("buttonNum0").disabled = true;
   document.getElementById("buttonNum1").disabled = true;
   document.getElementById("buttonNum2").disabled = true;
   document.getElementById("buttonNum3").disabled = true;
   document.getElementById("buttonNum4").disabled = true;
   document.getElementById("buttonNum5").disabled = true;
   document.getElementById("buttonNum6").disabled = true;
   document.getElementById("buttonNum7").disabled = true;
   document.getElementById("buttonNum8").disabled = true;
   document.getElementById("buttonNum9").disabled = true;
   document.getElementById("decimalButton").disabled = true;
   document.getElementById("piButton").disabled = true;
 }

 if(decNumInsert == false){
   let commaInput = Number(document.calc.display.value.split(",").join("")).toLocaleString();
   document.calc.display.value = commaInput;
 }
}

function clearCalc(){
 afterEqualLastSym = false;
 opInserted = false
 document.calc.display.value=0;
  i = i = 7;
  console.log("iOnClearCalc", i)
 executed = false;
 decimalStatInsert = false;
 piNsertStat = false;
 decNumInsert = false;
 firstNegStat = false
 console.log("status", afterEqualLastSym, opInserted, executed, decimalStatInsert, piNsertStat, decNumInsert)
   exprArray = [];
   document.getElementById("buttonNum0").disabled = false;
   document.getElementById("buttonNum1").disabled = false;
   document.getElementById("buttonNum2").disabled = false;
   document.getElementById("buttonNum3").disabled = false;
   document.getElementById("buttonNum4").disabled = false;
   document.getElementById("buttonNum5").disabled = false;
   document.getElementById("buttonNum6").disabled = false;
   document.getElementById("buttonNum7").disabled = false;
   document.getElementById("buttonNum8").disabled = false;
   document.getElementById("buttonNum9").disabled = false;
   document.getElementById("piButton").disabled = false;
   document.getElementById("decimalButton").disabled = false
}

function clearOnOp(){
 opInserted = false
  i = i = 7;
  console.log("iOnClearOP", i)
 symbolStat = false
 firstPer = false;
 document.calc.display.value= 0
 executed = false;
 decimalStatInsert = false;
 piNsertStat = false;
 decNumInsert = false;
 firstNegStat = true;
 document.getElementById("buttonNum0").disabled = false;
 document.getElementById("buttonNum1").disabled = false;
 document.getElementById("buttonNum2").disabled = false;
 document.getElementById("buttonNum3").disabled = false;
 document.getElementById("buttonNum4").disabled = false;
 document.getElementById("buttonNum5").disabled = false;
 document.getElementById("buttonNum6").disabled = false;
 document.getElementById("buttonNum7").disabled = false;
 document.getElementById("buttonNum8").disabled = false;
 document.getElementById("buttonNum9").disabled = false;
 document.getElementById("piButton").disabled = false;
 document.getElementById("decimalButton").disabled = false;
}

function equal(){
 symbolStat = false
 firstPer = false;
 piNsertStat = false;
 afterEqualLastSym = true;
 document.getElementById("decimalButton").disabled = true;
 document.getElementById("buttonNum0").disabled = true;
 document.getElementById("buttonNum1").disabled = true;
 document.getElementById("buttonNum2").disabled = true;
 document.getElementById("buttonNum3").disabled = true;
 document.getElementById("buttonNum4").disabled = true;
 document.getElementById("buttonNum5").disabled = true;
 document.getElementById("buttonNum6").disabled = true;
 document.getElementById("buttonNum7").disabled = true;
 document.getElementById("buttonNum8").disabled = true;
 document.getElementById("buttonNum9").disabled = true;
 document.getElementById("piButton").disabled = true;

 let calcEval= eval(exprArray.join(''));
 if(exprArray.join(",").includes("e")){
    expAlert = true;
 }

 console.log(expAlert)
   exprArray = [];
   exprArray.push(calcEval)
   console.log("evaluated raw", calcEval)
 if(calcEval > 999999999 || calcEval < -999999999){
   document.calc.display.value = calcEval.toExponential(9)
 }else{
   document.calc.display.value=calcEval.toLocaleString("en")
 }
 if(expAlert == true){
   document.calc.display.value = calcEval
 }

 if(document.calc.display.value === "Infinity" || document.calc.display.value === "∞" || document.calc.display.value === "NaN") {
   document.calc.display.value = "error!";

 }

}

function numberNegation(){
 document.calc.display.value = document.calc.display.value.split(",").join('')
 let numsCountNeg = document.calc.display.value.length
 document.calc.display.value = document.calc.display.value * -1
 let negValue = document.calc.display.value
 document.calc.display.value = Number(document.calc.display.value.split(",").join('')).toLocaleString();
 if(firstNegStat == false){
   exprArray[exprArray.length - exprArray.length ]= exprArray[exprArray.length - exprArray.length] *-1
   console.log("negatedNumber" , exprArray)
   firstNegStat = true;
 }else{
   let whereToNegate = exprArray.length - numsCountNeg
   while(exprArray.length >= whereToNegate){
     exprArray.pop();
   }
   exprArray.push(negValue)
 }

}

function numberPercentage(){
 document.calc.display.value = document.calc.display.value.split(",").join("")
if(afterEqualLastSym == false){
 if(firstPer == false){
   let numsCount = document.calc.display.value.length
   numsCount = numsCount -1
   console.log("nums", numsCount)
 let amountToBeRemoved = exprArray.length - numsCount

 while(exprArray.length >= amountToBeRemoved){
   exprArray.pop();
 }

 document.calc.display.value = Number(document.calc.display.value) / 100
exprArray[amountToBeRemoved] = document.calc.display.value
 console.log(exprArray)
 firstPer = true;

}else{

let numsCount2 = document.calc.display.value.length
numsCount2 = numsCount2 - i

 console.log("nums2", numsCount2)
 let amountToBeRemoved2 = exprArray.length - numsCount2
exprArray.splice(exprArray.length -1)

 document.calc.display.value = document.calc.display.value / 100
 exprArray.push(document.calc.display.value)
console.log("array", exprArray)
console.log("calcDisplay", document.calc.display.value)
 if(document.calc.display.value>= 0.9999999){
   let expon= Number(document.calc.display.value)
   console.log(typeof expon);
   document.calc.display.value = expon.toExponential(9)
 }

 i = i+2;
 console.log("percentaged array", exprArray)

}

}else{
 document.calc.display.value = document.calc.display.value / 100
 exprArray = []
 exprArray.push(document.calc.display.value)
 let expon= Number(document.calc.display.value)
 console.log(typeof expon);
 if(document.calc.display.value>= 0.9999999){
 document.calc.display.value = expon.toExponential(9)

}

}

}

function decimalInsert(num){
 if(decimalStatInsert == false){
   document.calc.display.value = document.calc.display.value + num
   exprArray.push(num)
   console.log("decimal array", exprArray)
   decimalStatInsert = true;
   decNumInsert = true;
   document.getElementById("decimalButton").disabled = true;
 }

}

function piInsert(num){
 if(piNsertStat == false){
   document.calc.display.value = ''
   document.calc.display.value = document.calc.display.value + num
   exprArray.push(num)
   console.log("array with PI", exprArray)
   piNsertStat = true;
 }
}
