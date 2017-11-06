
   function clearFields() {
     document.getElementById("textBlock").innerHTML = "";
   }
   function copyFunction() {
     var x = document.forms[0];
     var txt = "";
     var i;
     for (i = 0; i < x.length; i++) {
       if (i == 0) {
         txt = txt + "Platform: " + x.elements[i].value + ".\n";
       }
       else if (i == 1) {
         txt = txt + "Function: " + x.elements[i].value + ".\n";
       }
       else if (i == 2) {
         txt = txt + "Loan: " + x.elements[i].value + ".\n";
       }
       else if (i == 3) {
         txt = txt + "Bwr Lname: " + x.elements[i].value + ".\n";
       }
       else if (i == 4) {
         txt = txt + "Buat Location: " + x.elements[i].value + ".\n";
       }
       else if (i == 5) {
         txt = txt + "Able to Move on: " + x.elements[i].value + ".\n";
       }
       else if (i == 6) {
         txt = txt + "Call Type: " + x.elements[i].value + ".\n";
       }
       else if (i == 7) {
         txt = txt + "BUAT Ambassadar: " + x.elements[i].value + ".\n";
       }
       else if (i == 8) {
         txt = txt + "Procedure Avail: " + x.elements[i].value + ".\n";
       }
       else if (i == 9) {
         txt = txt + "Feedback: " + x.elements[i].value + ".\n";
       }

   }
document.getElementById("textBlock").innerHTML = txt;
var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
var copyTextarea = document.querySelector('.js-copytextarea');
copyTextarea.select();

try {
  var successful = document.execCommand('copy');
  var msg = successful ? 'successful' : 'unsuccessful';
  console.log('Copying text command was ' + msg);
} catch (err) {
  console.log('Oops, unable to copy');
}
}
