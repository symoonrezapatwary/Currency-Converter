
var curr1, curr2;

function conversion(){
    var from = document.getElementById("value").value;
    var curr1 = document.getElementById("from").value;
    var curr2 = document.getElementById("to").value;
    var ans;

if (curr1 === "Taka" && curr2 === "Taka2") ans = from;
if (curr1 === "Taka" && curr2 === "USD2") ans = from*0.012;
if (curr1 === "Taka" && curr2 === "INR2") ans = from*0.89;

if (curr1 === "USD" && curr2 === "USD2") ans = from;
if (curr1 === "USD" && curr2 === "Taka2") ans = from*84.86;
if (curr1 === "USD" && curr2 === "INR2") ans = from*75.63;

if (curr1 === "INR" && curr2 === "INR2") ans =from;
if (curr1 === "INR" && curr2 === "USD2") ans = from*0.016;
if (curr1 === "INR" && curr2 === "Taka2") ans = from*1.12;

document.getElementById("answer").value = ans;
}
