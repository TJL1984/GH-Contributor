(function() {
  'use strict';

  window.contributor = window.contributor || {};
  window.contributor.findRepos = findRepos;
  window.contributor.getRepos = getRepos;

  /**
   * @param {String} query Will search for repositories
   * @param {String} token The user's authorization key
   */
  function findRepos(query, token) {
    console.log(query, token);
    return $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + query,
      method: 'GET',
      dataType: 'json',
      headers: {
          Authorization: 'token ' + token
      }
    });
  }

  function getRepos(token, url) {
    return $.ajax({
      url: url.split("{")[0],
      method: 'GET',
      dataType: 'json',
      headers: {
        Authorization: 'token' + token
      }
    });
  }

}());
