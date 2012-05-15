$(document).ready(function() {
	$.get('data.csv', function(data) {
		alert('Loaded data')
	})
	$("#leaderboard-table").append("<tr><td>hi</td></tr>")
})