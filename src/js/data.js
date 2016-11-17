(function() {
  'use strict';

  window.contributor = window.contributor || {};
  window.contributor.findRepos = findRepos;

  /**
   * param
   * param
   */
  $.ajax({
    url: 'https://api.github.com/search/repositories?q=...'
    method: 'GET',
    dataType: JSON,
    headers: {
      Authorization: 'token' + userToken,
      'content-type': 'application/json'
    }
  })

}());
