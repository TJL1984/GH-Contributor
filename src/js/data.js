(function() {
  'use strict';

  window.contributor = window.contributor || {};
  window.contributor.findRepos = findRepos;
  window.contributor.getRepos = getRepos;

  /**
   * @param {String} query Will search for repositories
   * @param {String} token What the user will use while they search
   * @return {Promise} Will manage randomizing and selecting the contributor
   */
  function findRepos(query, token) {
    return $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + query,
      method: 'GET',
      dataType: 'json',
      headers: {
          Authorization: 'token' + token,
      }
    });
  }

  function getRepos(token, url) {
    return $.ajax({
      url: url.split('') [0],
      method: 'GET',
      dataType: 'json',
      headers: {
        Authorization: 'token' + token
      }
    });
  }

}());
