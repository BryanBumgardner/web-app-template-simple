

var playerData;

$(document).ready(function() {
    console.log("Hello world.")
    getData();
});


function getData() {
	$.getJSON("js/ChaseHeadley.json", function(data){
		console.log(data);
		playerData = data;

		drawStuff();

	});


}

function drawStuff() {


	$(".chart").html(playerData.name);

	$.each(playerData.stats, function(i, item){
		$(".chart").append("<p>"+item.AVG+"</p>");

	});


}

