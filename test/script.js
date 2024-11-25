// Testing the examples from the README.md

var youtubeIdRegex = require('youtube-id-regex');
var testStrings = [
    'youtube.com/watch?v=z9dIAG2gpwc',
    'youtube.com/watch?feature=related&v=z9dIAG2gpwc',
    'youtube.com/watch?v=z9dIAG2gpwc&feature=related',
    'www.youtube.com/watch?v=z9dIAG2gpwc&feature=related',
    'youtube-nocookie.com/watch?feature=related&v=z9dIAG2gpwc',
    'youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related',
    'www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related',
    'https://www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related',
    'http://www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related',
    'http://www.youtube.com/watch?v=z9dIAG2gpwc',
    'http://www.youtube.com/watch?feature=related&v=z9dIAG2gpwc',
    'Just some text with this https://www.youtube.com/watch?v=z9dIAG2gpwc youtube video link in it.'
];

testStrings.forEach((testString) => {
    console.log(`Testing: "${testString}"`);
    console.log(youtubeIdRegex().test(testString));
    console.log(`Youtube ID: "${youtubeIdRegex().exec(testString)[1]}"`);
    console.log('-------------------------------------------------------------------------------------------------');
});
