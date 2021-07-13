function cashRegister(){
  var b = document.getElementById('input').value;
  var a = document.getElementById('input1').value;
  var c = document.getElementById('input2').value;
  var m = document.getElementById('input3').value;
  var e = document.getElementById('input4').value;
  var t = document.getElementById('input5').value;
  b = (b*3.99);
  a = (a*3.99);
  c = (c*2.99);
  m = (m*1.40);
  e = (e*9.99);
  t = (t*1.50);
  total = (b+a+c+m+e+t);
  
  document.getElementById('tt').innerHTML = 'Total price is $' + total + '!'
}