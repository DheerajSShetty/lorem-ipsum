$('#ipsumForm').submit(function(event) {
  var type;
  var num = document.getElementById("howmany").value;
  var html = document.getElementById("htmlneeded").checked;
  var temp = "";
  if (document.getElementById("optradio1").checked)
  {
    if (html === true) {
       for (i = 0; i < num; ++i) {
          temp += paraHtml[i % 4];
          temp += "\n\n";
       }
    } else {
       for (i = 0; i < num; ++i) {
          temp += paraNonHtml[i % 4];
          temp += "\n\n";
       }
    }
  }
  else if (document.getElementById("optradio2").checked)
  {
    if (html === true) {
       for (i = 0; i < num; ++i) {
          temp += wordsHtml[i % 7];
          temp += "\n\n";
       }
    } else {
       for (i = 0; i < num; ++i) {
          temp += wordsNonHtml[i % 7];
          temp += "\n\n";
       }
    }
  }
  else 
  {
    if (html === true) {
       for (i = 0; i < num; ++i) {
          temp += lettersHtml[i % 3];
          temp += "\n\n";
       }
    } else {
       for (i = 0; i < num; ++i) {
          temp += lettersNonHtml[i % 10];
          temp += "\n\n";
       }
    }
  }
  $('#outputtext').val(temp);  

  event.preventDefault();
});


