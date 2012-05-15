$(document).ready(function() {
	$.get('data.csv', function(data_csv) {
		console.log('Retrieved data.csv')
		var leaderboard = $.csv2Array(data_csv)
		console.log(leaderboard)
		for(var i = 1; i < leaderboard.length; i++) {
			var name = leaderboard[i][0]
			var points = leaderboard[i][1]
			var achievements = leaderboard[i][2]

			var html = "<tr><td>"+name+"</td><td>"+points+"</td><td>"+achievements+"</td></tr>"

			$("#leaderboard-table").append(html)
		}
	})
})