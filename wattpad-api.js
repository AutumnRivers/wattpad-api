const fetch = require('snekfetch');

exports.storyTitle = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
	}
   const storyTitle = data.then(story => story.title)
   return storyTitle
}

exports.storyDesc = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyDesc = data.then(story => story.description)
   return storyDesc
}

exports.storyAuthor = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthor = data.then(story => story.user.name)
   return storyAuthor
}

exports.storyCover = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyCover = data.then(story => story.cover)
   return storyCover
}

exports.storyReadCount = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyReadCount = data.then(story => story.readCount)
   return storyReadCount
}

exports.storyVoteCount = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyVoteCount = data.then(story => story.voteCount)
   return storyVoteCount
}

exports.storyAuthorFullName = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthorFullName = data.then(story => story.user.fullname)
   return storyAuthorFullName
}

exports.storyAuthorAvatar = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthorAvatar = data.then(story => story.user.avatar)
   return storyAuthorAvatar
}

exports.storiesData = (apikey, query, offset, limit) => {
	{
	const authToken = "Basic " + apikey;
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	if(!limit) {
		var limit = 5
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=${limit}&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories)))
    }
   const storiesData = data
   return storiesData
}