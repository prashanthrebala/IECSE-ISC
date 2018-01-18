
$("#appPassCode").keyup(function(event) 
{
	if (event.keyCode === 13)
		$("#enterApp").click();
});

function validatePassword()
{
	var pass = $("#appPassCode").val();
	$("#appPassCode").val('');
	return Sha256.hash(pass) === "2cd9806015c95a30962f40a0c5747e913658576947eae167c2517a67a1ee345e";
}

$(document).ready(function()
{
	db.find({}, function(err, docs)
	{
		if(docs.length != 0)
		{
			$('#appPassCode').val('kaiser1601');
			$('#enterApp').trigger('click');
		}
	});
});

document.addEventListener('contextmenu', event => event.preventDefault());
