var currentQuestion = 0;
var duration = 91;
var numberOfQuestions = 15;

var participant = 

{
	'cheated': false,
	'startTimeStamp': 0,
	'latestTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
{
	filename : path.join(ngui.App.dataPath, 'iecse-isc-18.db'),
	autoload : true
});