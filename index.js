let Parser = require('rss-parser');
let prompt = require('prompt-sync')();

let parser = new Parser();

(async () => {
	let url = prompt('Enter feed url: ', 'https://www.reddit.com/.rss');
	let feed = await parser.parseURL(url);
	console.log(feed.title);

	feed.items.forEach((item, index) => {
		console.log(`${index}. ` + item.title + ': ' + item.link);
		console.log('\n');
	});
})();
