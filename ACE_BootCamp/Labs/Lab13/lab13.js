
     function age() {
       var birthYear = prompt("Tell Me Your Birth Year?");
       var futureYear = prompt("Give Me a Future Year");
       var age = [];
       for (var i = birthYear; i < futureYear; i++) {
         age.push(birthYear);
       }
      confirm("You will be either " + (age.length - 1) + " or " + age.length + " in " + futureYear + ".");
     }