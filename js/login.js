
$("#appPassCode").keyup(function(event) 
{
	if (event.keyCode === 13)
		$("#enterApp").click();
});

function validatePassword()
{
	var pass = $("#appPassCode").val();
	$("#appPassCode").val('');
	return pass === "se7en";
}

$(document).ready(function()
{
	db.find({}, function(err, docs)
	{
		if(docs.length != 0)
		{
			$('#appPassCode').val('se7en');
			$('#enterApp').trigger('click');
		}
	});
	nwin.show();
	nwin.maximize();
});

document.addEventListener('contextmenu', event => event.preventDefault());
