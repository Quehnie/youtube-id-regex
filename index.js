/**
 * youtube-id-regex <https://github.com/quehnie/youtube-regex>
 *
 * Copyright (c) 2024 Quehnie, contributors.
 * Released under the MIT license.
 */

'use strict';

function youtubeIdRegex() {
  var regex = /(?:youtube(?:-nocookie)?\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/g;

  return regex;
}

module.exports = youtubeIdRegex;
