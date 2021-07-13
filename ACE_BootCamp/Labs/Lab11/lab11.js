function myFunction(){
  var childran = document.getElementById("input1").value;
  var partner = document.getElementById("input2").value;
  var location = document.getElementById("input3").value;
  var job = document.getElementById("input4").value;
  var future = 'Hurrah ! You will become a ' + job + ' living in ' + location + ', you will get married to ' + partner + ' and will have ' + childran
    + ' children in future.';
  document.getElementById("future").innerHTML = future;}
 