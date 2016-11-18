(function() {
  'use strict';

  window.contributor = window.contributor || {};
  window.contributor.findRepos = findRepos;
  window.contributor.getRepos = getRepos;

  /**
   * @param {String} text Will search for repositories
   * @param {String} token What the user will use while they search
   * @return {Promise} Will manage randomizing and selecting the contributor
   */
     function findRepos(text, token) {

    $.ajax({
        url: 'https://api.github.com/search/repositories?q=',
        method: 'GET',
        dataType: 'json',
        headers: {
            Authorization: "token" + token,
        }
      })

      .then(function successHandler(data){
        console.log("Yay!", data);
      })

      .fail(function failHandler(xhr){
        console.log("No dice", xhr);
      });

    }

    /**
     * @param {[type]} api Handles the
     * @param {[type]} url Handles the
     * @param {Promise} finds the contributor's commits.
     */
    function getRepos(api, url){
      return $.ajax({
        url:url.split("{") [0],
        method: 'GET',
        dataType: 'json',
        headers: {
          Authorization: "token" + api
        }
      });
    }


}());
