# wattpad-api
An NPM module for interacting with the Wattpad API

**Note: You *will* need an API key for this to work! Grab one [here!](https://developer.wattpad.com/)**

## What does this do?
This module interacts with the Wattpad API. At time of upload, this can only do story-related  things. I will (hopefully) add more, such as searching for lists, categories, etc.

## How do I use it?
Here's an example.
```javascript
const wattpad = require("wattpad-api")
const key = "Your API key"

wattpad.storyTitle(key, "Welcoming January", 1).then(title => console.log(title))
```

Let's break this down.
Of course, you have to require the package.

Then, you store your API key into a variable/const/whatever. You don't *have* to do this, but it'll save you a LOT of trouble.

Then you search. So, what are the arguments?  
`apikey` - Your API key. 

`query` - The title of the story you're looking for. Defaults to "story"  

`offset` - An offset on the search. Defaults to 0.  

## Docs and stuff
All of these are returned in a promise. If you're wondering why, skip to the Q&A.

The docs have been moved to [here](https://www.gitbook.com/book/smartieyt/wattpad-api-docs/details).

## Q&A
**Are you associated with Wattpad, do you know anybody from Wattpad, etc.?**  
No, I am not associated with Wattpad. I'm not stealing anything here, I'm just simplifying the use of their API.

**Why is everything in a promise?**  
Because I suck at coding. But hey, it works!

**Your code is messy, you used a const wrong, I don't even know what I'm looking at, etc.**  
See above.

**Can you add {insert feature}?**  
Probably, yeah. If you want to add it yourself, feel free to make a pull request.

**Does this mean I can read stories from my command line, browser, discord bot, etc?????**  
No, it does not. The Wattpad API does not return the content of the story's parts.

**This is way too simplified!**  
I know, I know. This may look like spoon-feeding. But really, I'm just trying to help out!

**I have an issue!**  
Please try doing what you were doing again a few times more before opening an issue.

**Can I use this for my website, discord bot, etc?**  
Sure, go right ahead!
