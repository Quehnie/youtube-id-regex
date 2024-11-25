# GET YOUTUBE ID FROM URL

Regex to extract the youtube id from given url.

## Install

Install with [npm](https://npmjs.org)

```
$ npm install youtube-id-regex
```

## Usage

```js
var youtubeIdRegex = require('youtube-id-regex');
youtubeIdRegex().test('yourString') // Returns true or false.
youtubeIdRegex().exec('yourString')[1]; // Returns the youtube id.
````

## Possible strings containing youtube id

#### Supports both domains

Urls with **youtube.com** but also **youtube-nocookie.com** are supported.

#### Urls with different queries

```js
// Results as true.
youtubeIdRegex().test('youtube.com/watch?v=z9dIAG2gpwc');
youtubeIdRegex().test('youtube.com/watch?feature=related&v=z9dIAG2gpwc');
youtubeIdRegex().test('youtube.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('www.youtube.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('youtube-nocookie.com/watch?feature=related&v=z9dIAG2gpwc');
youtubeIdRegex().test('youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('https://www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('http://www.youtube-nocookie.com/watch?v=z9dIAG2gpwc&feature=related');
youtubeIdRegex().test('http://www.youtube.com/watch?v=z9dIAG2gpwc');
youtubeIdRegex().test('http://www.youtube.com/watch?feature=related&v=z9dIAG2gpwc');
```

#### Sentence contains youtube url

```js
// Results as true.
youtubeIdRegex().test('Just some text with this https://www.youtube.com/watch?v=z9dIAG2gpwc youtube video link in it.');
```

## Author

[Quehnie](https://github.com/Quehnie)
