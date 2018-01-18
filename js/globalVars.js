
function isSpaceChar(char){ return (char < 33 || char > 126);}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

/*
QuestionA Link Format:
<div id="qn13" class="questionLink" onclick="displayQuestion(13)">
	<div id="qn13T" class="questionNumber">
		Question 13
	</div>
</div>
*/

function setVariables()
{
	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
	}
	$('#sideBarID').html(questionLinksHTML);

	for(let i=1;i<=numberOfQuestions;i++)
	{
		if(questions[i]['solved'])
			$("#qn" + i + "T").css({'color' : '#37B76C'});
		else if(questions[i]['attempted'])
			$("#qn" + i + "T").css({'color' : '#FF3F2F'});
	}


	$('#countDown').countdown(participant['endTimeStamp'])
	.on('update.countdown', function(event) 
	{
		var format = '%H:%M:%S';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) 
	{
		$(this).text("00:00:00");
			// uncomment while deploying

		$("#submitButton").css("pointer-events","none");
		alert('Your time\'s up!');
	});
	// nwin.show();
	// nwin.maximize();

}

function displayQuestion(n)
{
	currentQuestion = n;
	// $('#appHeaderID').text("Question " + currentQuestion);
	$('#questionDescriptionID').html(questions[currentQuestion]['questionStatement']);
	$('#answerText').val('');
}

function openNav()
{ 
	$('#myScore').text(participant['score']);
	$('#mySidenav').css({'width' : '23%', 'transition' : '0.3s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.0s'});}

function submit()
{
	submitX(function()
	{
		// db.remove({}, { multi: true }, function (err, numRemoved) 
		// {
		// 	db.insert(
		// 	{
		// 		participant: participant,
		// 		questions: questions
		// 	}, function(err, newDocs){
		// 		console.log(err);
		// 		console.log(newDocs);
		// 	});
		// });
	});
}

function submitX(callback) 
{
	var typedAnswer = $('#answerText').val();

	if(currentQuestion <= 0 || questions[currentQuestion]['solved'])
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"T";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return callback();

	if(participant['submissionHistory'][currentQuestion].indexOf(typedAnswer) >= 0)
		if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
			return callback();

	participant['submissionHistory'][currentQuestion].push(typedAnswer);

	if(Sha256.hash(typedAnswer) === questions[currentQuestion]['answer']) 
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		questions[currentQuestion]['attempts'] = -1;
		$(id).css({'color' : '#37B76C'});
		questions[currentQuestion]['solved'] = true;
		var maxScore =  questions[currentQuestion]['score'];
		var minutesPassed = Math.floor((new Date().getTime() - participant['startTimeStamp']) / 60000);
		var obtainableScore = maxScore * (1 - minutesPassed * 0.01);
		participant['score'] += obtainableScore;
		$('#sDinner2').text(participant['score']);
		callback();
	}
	else if(questions[currentQuestion]['attempts'] > 0)
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		questions[currentQuestion]['attempts']++;
		$(id).css({'color' : '#FF3F2F'});
		callback();
	}

}

function launchApp()
{
	// db.find({}, function(err, docs)
	// {
	// 	if(docs.length == 0)
	// 	{
			participant['startTimeStamp'] = new Date().getTime();
			participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
	// 		db.insert(
	// 		{
	// 			participant: participant,
	// 			questions: questions
	// 		},function(err, newDocs){	setVariables();	});
	// 	}
	// 	else
	// 	{
	// 		participant = docs[0].participant;
	// 		questions   = docs[0].questions;

	// 		$('#sDinner2').text(participant['score']);
			setVariables();
	// 	}
	// });
}

$(document).ready(function() 
{
	try{ launchApp(); } 
	catch(err){ console.log(err); }
});

// document.addEventListener('contextmenu', event => event.preventDefault());
