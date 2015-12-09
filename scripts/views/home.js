var Home = (function() {

	foo = {
		tweet1 : [{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@johnsnow"
			},
			text : "Someone once said that I know nothing..."
		}],
		tweet2 : [{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@johnsnow"
			},
			text : "Someone once said that I know nothing..."
		}]
	};

	var twitterData = {
		user: {
			profile_image_url : "assets/avatar.png",
			name : "@johnsnow"
		},
		text : "Someone once said that I know nothing..."
	};

	// Partials
	var tweetPartial = $('#active-tweet-partial').html();
		tweetPartialCompiled = _.template( tweetPartial );

	// DOM Handlers
	function getTweetData() {
		return twitterData;
	}

	sqTweetData = getTweetData();

	// KICKSTART VIEW
	function initHome() {

		// load main content
		$('#main-content').html(tweetPartialCompiled( sqTweetData ));

	}
	return {
		init: initHome
	};

})();
