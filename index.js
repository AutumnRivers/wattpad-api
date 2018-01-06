const fetch = require('snekfetch');
const noKey = "You need an API key!";
const noQuery = "You need to enter something for a query.";
const noID = "You need a list ID, normal search queries will not work!";

exports.storyTitle = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}	
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
	}
   const storyTitle = data.then(story => story.title)
   return storyTitle
}

exports.storyDesc = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyDesc = data.then(story => story.description)
   return storyDesc
}

exports.storyAuthor = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthor = data.then(story => story.user.name)
   return storyAuthor
}

exports.storyCover = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyCover = data.then(story => story.cover)
   return storyCover
}

exports.storyReadCount = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyReadCount = data.then(story => story.readCount)
   return storyReadCount
}

exports.storyVoteCount = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyVoteCount = data.then(story => story.voteCount)
   return storyVoteCount
}

exports.storyAuthorFullName = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthorFullName = data.then(story => story.user.fullname)
   return storyAuthorFullName
}

exports.storyAuthorAvatar = (apikey, query, offset) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=1&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories))[0])
    }
   const storyAuthorAvatar = data.then(story => story.user.avatar)
   return storyAuthorAvatar
}

exports.storiesData = (apikey, query, offset, limit) => {
	{
	const authToken = "Basic " + apikey;
	if(!query || typeof query !== "string") {
		var query = "story"
	}
	var query = query.split(' ').join("%20")
	if(!offset) {
		var offset = 0
	}
	if(!apikey) {
		throw "You need an API key!"
	}
	if(!limit) {
		var limit = 5
	}
	
	var data = fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=${limit}&offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.stories)))
    }
   const storiesData = data
   return storiesData
}

exports.userList = (apikey, userName, offset) => {
	{
	if(!apikey) throw noKey;
	const authToken = "Basic " + apikey;
	
	if(!userName) throw "Can't search for a blank user.";
	
	if(!offset) {
		var offset = 0;
	}
	
	var listData = fetch.get(`https:/\/api.wattpad.com:443/v4/users/${userName}/lists?offset=${offset}`).set('Authorization', authToken).then(request => JSON.parse(JSON.stringify(request.body.lists))[0])
	}
	const userList = listData
	return userList
}
	
exports.listName = (apikey, listID, offset) => {
	{
		if(!apikey) throw noKey;
		if(!listID) throw noID;
		const authToken = "Basic " + apikey;
		
		var listID = parseInt(listID);
		if(isNaN(listID)) {
			throw noID;
		}
		
		if(!offset) {
			var offset = 0;
		}
		
		var data = fetch.get(`https:/\/api.wattpad.com:443/v4/lists/${listID}?offset=${offset}`).set('Authorization', authToken).then(request => request.body)
	}
	const listName = data.then(list => list.name)
	return listName
}


exports.listStoryCount = (apikey, listID, offset) => {
	{
		if(!apikey) throw noKey;
		if(!listID) throw noID;
		const authToken = "Basic " + apikey;
		
		var listID = parseInt(listID);
		if(isNaN(listID)) {
			throw noID;
		}
		
		if(!offset) {
			var offset = 0;
		}
		
		var data = fetch.get(`https:/\/api.wattpad.com:443/v4/lists/${listID}?offset=${offset}`).set('Authorization', authToken).then(request => request.body)
	}
	const listStoryCount = data.then(list => list.numStories)
	return listStoryCount
}

exports.listStory = (apikey, listID, offset) => {
	{
		if(!apikey) throw noKey;
		if(!listID) throw noID;
		const authToken = "Basic " + apikey;
		
		var listID = parseInt(listID);
		if(isNaN(listID)) {
			throw noID;
		}
		
		if(!offset) {
			var offset = 0;
		}
		
		var data = fetch.get(`https:/\/api.wattpad.com:443/v4/lists/${listID}?offset=${offset}`).set('Authorization', authToken).then(request => request.body.stories[0])
	}
	const listStory = data.then(story => story.title)
	return listStory
}

exports.listStories = (apikey, listID, offset, limit) => {
	{
		if(!apikey) throw noKey;
		if(!listID) throw noID;
		const authToken = "Basic " + apikey;
		
		var listID = parseInt(listID);
		if(isNaN(listID)) {
			throw noID;
		}
		
		if(!offset) {
			var offset = 0;
		}
		
		if(!limit) {
			var limit = 5;
		}
		
		var data = fetch.get(`https:/\/api.wattpad.com:443/v4/lists/${listID}?offset=${offset}&limit=${limit}`).set('Authorization', authToken).then(request => request.body.stories)
	}
	const listStories = data
	return listStories
}

exports.listData = (apikey, listID, offset, limit) => {
	{
		if(!apikey) throw noKey;
		if(!listID) throw noID;
		const authToken = "Basic " + apikey;
		
		var listID = parseInt(listID);
		if(isNaN(listID)) {
			throw noID;
		}
		
		if(!offset) {
			var offset = 0;
		}
		
		if(!limit) {
			var limit = 5;
		}
		
		var data = fetch.get(`https:/\/api.wattpad.com:443/v4/lists/${listID}?offset=${offset}&limit=${limit}`).set('Authorization', authToken).then(request => request.body)
	}
	const listData = data
	return listData
}
