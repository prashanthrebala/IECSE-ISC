var currentQuestion = 0;
var duration = 91;
var numberOfQuestions = 15;
var defaultTries = [100, 1, 1, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 7, 9, 9];

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
};

// var ngui = require('nw.gui');
// var nwin = ngui.Window.get();
// var DataStore = require('nedb');
// var path = require('path');
// var db = new DataStore(
// {
// 	filename : path.join(ngui.App.dataPath, 'Kaiser.db'),
// 	autoload : true
// });