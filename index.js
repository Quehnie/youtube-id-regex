/**
 * youtube-id-regex <https://github.com/quehnie/youtube-regex>
 *
 * Copyright (c) 2024 Quehnie, contributors.
 * Released under the MIT license.
 */

'use strict';

function youtubeIdRegex() {
  var regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/g;

  return regex;
}

module.exports = youtubeIdRegex();
