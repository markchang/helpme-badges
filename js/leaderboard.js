var details = {}

details['Late Night Helper'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by responding to a helpme between the hours of 3 - 6 AM</h5><img src=badges/badge_0_late_night.png>" data-original-title="Late Night Helper">Late Night Helper</a>'
details['Jack of all Trades'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by achieving at least "Level 1" status in all "Experience" badges</h5><img src=badges/badge_1_jack.png>" data-original-title="Jack of all Trades">Jack of all Trades</a>'
details['Heating Up'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by responding to three consecutive requests</h5><img src=badges/badge_2_heating_up.png>" data-original-title="Heating Up">Heating Up</a>'
details['Wish You Were Here'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by responding to a helpme from a student or person who does not currently reside on campus (LOA, alum, etc).</h5><img src=badges/badge_3_wish_you_were_here.png>" data-original-title="Wish You Were Here">Wish You Were Here</a>'
details['Super Buddy'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by responding to three requests from the same person</h5><img src=badges/badge_4_super_buddy.png>" data-original-title="Super Buddy">Super Buddy</a>'
details['Make a Wish'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Earned by sending a response at 11:11</h5><img src=badges/badge_5_make_a_wish.png>" data-original-title="Make a Wish">Make a Wish</a>'
details['Junk Yard'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Get a level for every 3 responses to THING requests</h5><img src=badges/exp_junk_yard.png>" data-original-title="Junk Yard">Junk Yard</a>'
details['Pantry'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Get a level for every 3 responses to ingredient requests</h5><img src=badges/exp_pantry.png>" data-original-title="Pantry">Pantry</a>'
details['Public Transit'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Get a level for every 3 responses to ride requests</h5><img src=badges/exp_transit.png>" data-original-title="Public Transit">Public Transit</a>'
details['Speedy Gonzales'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Awarded to the person with the fastest recorded response time</h5><img src=badges/trophy_speedy.png>" data-original-title="Speedy Gonzales">Speedy Gonzales</a>'
details['The Champion'] = '<a class="popper" href="#" rel="popover" data-content="<h5>Awarded to the person who is currently at the top of the leaderboard for most helpme responses</h5><img src=badges/trophy_champion.png>" data-original-title="The Champion">The Champion</a>'

$(document).ready(function() {
	$.get('data.csv', function(data_csv) {
		var leaderboard = $.csv2Array(data_csv)
		for(var i = 1; i < leaderboard.length; i++) {
			var name = leaderboard[i][0]
			var points = leaderboard[i][1]
			var achievements = leaderboard[i][2].split(',')
			var a_html = ""

			for(j=0;j<achievements.length;j++) {
				if(achievements[j].trim()) {
					a_html += details[achievements[j].trim()]
					if( j < achievements.length - 1 )
						a_html += ", "
				} 
			}

			var html = "<tr><td>"+name+"</td><td>"+points+"</td><td>"+a_html+"</td></tr>"
			$("#leaderboard-table").append(html)
		}

		$('a[rel=popover]').popover()
	})
})