var para = ["<p>I think the big problem this country has is being politically correct. I've been challenged by so many people, and I don't frankly  have time for total political correctness. And to be honest with you, this country doesn't have time either.</p>",
"One thing about television, it brings out personality. People are able to watch me in action. They hear my voice and see my eyes. There's nothing I can hide. That's me. Television brings out your flaws, your weaknesses, your strengths, and you truths. The audience either likes you or it doesn't.",
"I actually don't have a bad hairline."];

var words = ["voice", "country", "ice"];
var sentences = ["I think the big problem this country has is being politically correct", "One thing about television, it brings out personality.",
"They hear my voice and see my eyes."];

$('#ipsumForm').submit(function(event) {
  var type;
  var num = document.getElementById("howmany").value;
  var html = document.getElementById("htmlneeded").checked;

  if (document.getElementById("optradio1").checked)
  {
    $('#outputtext').val(para);  
  }
  else if (document.getElementById("optradio2").checked)
  {
    $('#outputtext').val(words);
  }
  else 
  {
    $('#outputtext').val(sentences);
  }

  event.preventDefault();
});


