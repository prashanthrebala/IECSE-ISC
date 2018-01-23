
function isSpaceChar(char){ return (char < 33 || char > 126);}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

/*
Question Link Format:
<div id="qn13" class="questionLink" onclick="displayQuestion(13)">
	<div id="qn13T" class="questionNumber">
		Question 13
	</div>
</div>
*/

var randomCounter = 0;

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
		randomCounter++;
		randomCounter %= 10;
		if(randomCounter == 0 && new Date().getTime() < participant['latestTimeStamp'] && !participant['cheated'])
		{
			participant['cheated'] = true;
			alert('The system time has been changed.');
			$("#submitButton").css("pointer-events","none");
			$("#disqualifiedModal").show();
			openNav();
			db.remove({}, { multi: true }, function (err, numRemoved) 
			{
				db.insert(
				{
					participant: participant,
					questions: questions
				}, function(err, newDocs){
					console.log(err);
					console.log(newDocs);
				});
			});
		}
		if(randomCounter == 0 && new Date().getTime() - participant['latestTimeStamp'] >= 60000)
		{
			participant['latestTimeStamp'] = new Date().getTime();
			db.remove({}, { multi: true }, function (err, numRemoved) 
			{
				db.insert(
				{
					participant: participant,
					questions: questions
				}, function(err, newDocs){
					console.log(err);
					console.log(newDocs);
				});
			});
		}

	})
	.on('finish.countdown', function(event) 
	{
		$(this).text("00:00:00");
		$("#submitButton").css("pointer-events","none");
		alert('Your time\'s up!');
	});

	if(participant['cheated'])
	{
		$("#disqualifiedModal").show();
		openNav();
		return;
	}

}

function obtainableScore(n)
{
	var timeElapsedInMinutes = Math.floor((new Date().getTime() - participant['startTimeStamp']) / 60000);
	var penalties = questions[n]['penalties'];
	var maxScore = questions[n]['score'];
	return Math.floor(Math.max(maxScore * (1 - 0.01 * timeElapsedInMinutes - 0.05 * penalties), 
									maxScore * 0.3));
}

function getTable()
{
	var tableContent = "<div class='tableOfScores'><div class='tableOfScoresRow'><div>Problem</div><div>Penalties</div><div>Score</div></div><hr>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		var div1 = "<div>" + i + "</div>";
		var div2 = "<div>" + questions[i]['penalties'] + "</div>";
		var div3 = "<div>" + (questions[i]['scored'] == 0 ? obtainableScore(i) : "<span style='color: #37B76C'>" + questions[i]['scored'] + "</span>") + "</div>";
		tableContent += "<div class='tableOfScoresRow'>" + div1 + div2 + div3 + "</div><hr>";
	}
	tableContent += "</div>";
	return tableContent;
}

function displayQuestion(n)
{
	closeNav();
	currentQuestion = n;
	$('#appHeaderID').text("Question " + currentQuestion);
	$('#questionDescriptionID').html(questionStatements[currentQuestion]);
	$('#answerText').val('');
}

function openNav()
{ 
	$('#myScore').text(participant['score']);
	$('#tableOfScoresID').html(getTable());
	$('#mySidenav').css({'width' : '28%', 'transition' : '0.3s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.0s'});}

function submit()
{
	submitX(function()
	{
		db.remove({}, { multi: true }, function (err, numRemoved) 
		{
			db.insert(
			{
				participant: participant,
				questions: questions
			}, function(err, newDocs){
				console.log(err);
				console.log(newDocs);
			});
		});
	});
}

function submitX(callback) 
{
	var typedAnswer = $('#answerText').val();

	if(currentQuestion <= 0 || questions[currentQuestion]['solved'] || participant['cheated'])
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"T";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return callback();

	var hashedAnswer = Sha256.hash(typedAnswer);

	if(participant['submissionHistory'][currentQuestion].indexOf(hashedAnswer) >= 0)
		if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
			return callback();

	participant['submissionHistory'][currentQuestion].push(hashedAnswer);

	if(hashedAnswer === questions[currentQuestion]['answer']) 
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		$(id).css({'color' : '#37B76C'});
		questions[currentQuestion]['solved'] = true;
		questions[currentQuestion]['scored'] = obtainableScore(currentQuestion);
		participant['score'] += questions[currentQuestion]['scored'];
		$('#sDinner2').text(participant['score']);
	}
	else
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		questions[currentQuestion]['penalties']++;
		$(id).css({'color' : '#FF3F2F'});
	}
	callback();
}

function launchApp()
{
	db.find({}, function(err, docs)
	{
		if(docs.length == 0)
		{
			participant['startTimeStamp'] = new Date().getTime();
			participant['latestTimeStamp'] = participant['startTimeStamp'];
			participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
			db.insert(
			{
				participant: participant,
				questions: questions
			},function(err, newDocs){	setVariables();	});
		}
		else
		{
			participant = docs[0].participant;
			questions   = docs[0].questions;

			$('#sDinner2').text(participant['score']);
			setVariables();
		}
	});
}

$(document).ready(function() 
{
	try{ launchApp(); } 
	catch(err){ console.log(err); }
});

document.addEventListener('contextmenu', event => event.preventDefault());

