var questionNum = 0;                                                    // keep count of question, used for IF condition.
var question = '<h1>Enter your name:</h1>';  
var newVal = 0;               // first question

var output = document.getElementById('output');             // store id="output" in output variable
output.innerHTML = question;                                                    // ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
        output.innerHTML = '<h1>Hello ' + input + '!</h1>';// output response
        document.getElementById("input").value = "";        // clear text box
        question = '<p>What was your revenue for October 2019?<br>Please enter a whole number.</p>';                 // load next question       
        setTimeout(timedQuestion, 1000);                                    // output next question after 2sec delay
    }

    else if (questionNum == 1) {
        if (input < 10000){
            output.innerHTML = "<p>Unfortunately, you are not qualified to receive an advance from us.<br>Please reach back once your business has grown a bit more.</p>"
        }

        else{
            newVal = input;
            document.getElementById("input").value = "";        // clear text box
            question = '<p>Are you incorporated? Please answer yes or no.</p>';
            setTimeout(timedQuestion, 1000);                                    // output next question after 2sec delay
            }
        }
    else if (questionNum == 2){
        if (input == 'No' || input == 'no'){
            output.innerHTML = "<p>Unfortunately, you are not qualified to receive an advance from us.<br>Please reach back once your business has grown a bit more.</p>"
        }
        else if (input != 'Yes' && input != 'yes'){
            output.innerHTML = "<p>Please answer yes or no.</p>"
            setTimeout(timedQuestion, 1000);
        }
        else{
            output.innerHTML = '<p>You are eligible to receive $' + (0.2 * newVal) + '.</p>';
            document.getElementById("input").value = "";   
            question = '<p>Thank you for signing up.<br>A representative should be in touch shortly!</p>'                         
            setTimeout(timedQuestion, 1000);

        }
    } 
}
function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();                                                                                      // run bot function when enter key pressed
    questionNum++;                                                                      // increase questionNum count by 1
  }
});
