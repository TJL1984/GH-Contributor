(function() {
  'use strict';

  window.contributor = window.contributor || {};
  window.contributor.findRepos = findRepos;

  /**
   * @param {String} text Will search for repositories
   * @param {String} token What the user will use while they search
   * @return {Promise} Will manage the Ajax callback
   */
     function findRepos(text, token) {

    $.ajax({
        url: 'https://api.github.com/search/repositories?q=',
        method: 'GET',
        dataType: JSON,
        headers: {
        Authorization: "token" + api,
          'content-type': 'application/json'
        }
      })

      .done(function successHandler(data){
        console.log("Yay!", data);
      })

      .fail(function failHandler(xhr){
        console.log("No dice", xhr)
      })
    }

}());
