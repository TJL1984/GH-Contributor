(function() {
  'use strict';

  window.contributor = window.contributor || {};

    $('#search')
      .on('submit', function findRepos(event){
        event.preventDefault();

        var token = $('.api').val();
          // console.log(token);
        var query = $('.query').val();
          // console.log(query);

        window.contributor.findRepos(query, token)

        .then(function handleSuccess(data) {
          console.log('success', data);

          var randomRepo = data.items;
          var randomSelector = randomRepo[ Math.ceil(Math.random() * randomRepo.length) ];
          var url = randomSelector.repos_url;
          var a = window.contributor.getRepos(token, url);

          return a;
        })
        .fail(function handleSuccess(xhr) {
          console.log('failure', xhr);
        });

      });

}());
