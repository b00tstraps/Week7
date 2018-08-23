/*
**VERY EASY:** Create and add three elements of your choice to the page.

const veryEasy = "<h1>Very Easy</h1><div>this is a very easy div</div><p>this is a very easy paragraph</p>";

$('#veryeasy').html(veryEasy);
*/



/*
**EASY:** Create a button that when you click on it, it toggles a message inside of a div. Using a condition that you create (hint: checking if a random number is of a certain value), toggle the message fast or slow.
If the condition is TRUE, toggle the message fast. If the condition is FALSE, toggle the message slow.

$('button').click(function() {
  var randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber === 7) {
      $('p').text("You've landed on the right number! (7)").toggle("fast").toggle("fast");
    } else if (randomNumber !== 7) {
      $('p').text("Not even close!").toggle("slow").toggle("slow");
    }
});
*/




/*
**MEDIUM:** Using the jQuery validation plug in, validate a form that you create. Must contain full name, address, state, city, zip, email and telephone number.

$("#medium").validate({
  rules: {
    fullname: "required",
    address: "required",
    city: "required",
    state: "required",
    zip: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    fullname: "Please enter your full name",
    email: {
      required: "In order to submit form, you will need to enter a valid e-mail",
      email: "Your e-mail address must be in the correct format. Ex. x@x.com"
    }
  }
});
*/


/*
**HARD:**
`<a href="http://www.apple.com">Apple</a>`
`<a href="http://www.google.com">Google</a>`
`<a href="http://www.redventures.com">Red Ventures</a>`
Given these 3 a tags in an HTML document, write a script that adds a target="_blank" property to each a tag and then add a title property to each a tag with the same URL that is in the href property.
For example, the Red Ventures link should look like this: `<a href="http://www.redventures.com" target="_blank" title="http://www.redventures.com">Red Ventures</a>`



$('a').attr("target", "_blank");
$('a').each(function () {
  $(this).attr("title", $(this).attr("href"));
});
*/


$('button').click(function() {
  var settotal = $('input[name=settotal]').val();
  var setduration = $('input[name=setduration]').val();
  var restperiod = $('input[name=restperiod]').val();
  for (i = settotal; i > 0; i--) {
      countdown(setduration);
      countdown(restperiod);
  };
  alert("Congrats on finishing your set!");
});

function countdown(timer) {
  setInterval(function() {
    timer --;
    if (timer >= 0) {
      $('#count').html(timer);
    } if (timer === 0) {
      clearInterval(timer);
    }
  }, 1000);
};
