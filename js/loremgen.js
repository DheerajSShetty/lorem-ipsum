var paraHtml = ["<p>I think the big problem this country has is being politically correct. I've been challenged by so many people, and I don't frankly  have time for total political correctness. And to be honest with you, this country doesn't have time either.</p>",
"One thing about television, it brings out personality. People are able to watch me in action. They hear my voice and see my eyes. There's nothing I can hide. That's me. Television brings out your flaws, your weaknesses, your strengths, and you truths. The audience either likes you or it doesn't.",
"I actually don't have a bad hairline."];

var paraNonHtml = ["abc", "efg", "hij"];

var wordsNonHtml = ["voice", "country", "ice"];

var wordsHtml = ["<p>voice</p>", "<h>country</h>", "<a>ice</a>"];

var lettersNonHtml = ["I", "j"];

var lettersHtml = ["<", "/", ">"];

$('#ipsumForm').submit(function(event) {
  var type;
  var num = document.getElementById("howmany").value;
  var html = document.getElementById("htmlneeded").checked;
  var temp = "";
  if (document.getElementById("optradio1").checked)
  {
    if (html === true) {
       for (i = 0; i < num; ++i) {
          temp += paraHtml[i % 3];
          temp += "\n\n";
       }
    } else {
       for (i = 0; i < num; ++i) {
          temp += paraNonHtml[i % 3];
          temp += "\n\n";
       }
    }
  }
  else if (document.getElementById("optradio2").checked)
  {
    if (html === true) {
       for (i = 0; i < num; ++i) {
          temp += wordsHtml[i % 3];
          temp += "\n\n";
       }
    } else {
       for (i = 0; i < num; ++i) {
          temp += wordsNonHtml[i % 3];
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
          temp += lettersNonHtml[i % 3];
          temp += "\n\n";
       }
    }
  }
  $('#outputtext').val(temp);  

  event.preventDefault();
});


