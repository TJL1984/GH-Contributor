(function() {
  'use strict';

  window.contributor = window.contributor || {};
    console.log("Here I am");

    $('#search')
      .on('submit', function findRepos(event){
        event.preventDefault();

        var token = $('#api-key').val();
          console.log(token);
        var query = $('#query').val();
          console.log(query);

        window.contributor.findRepos(query, token);

        .then(function handleSuccess(data) {
          console.log('success', data);

          var randomRepo = data.items;
          var randomSelector = randomRepo[ Math.ceil(Math.random() * randomRepo.length) ];
          var url = randomSelector.repos_url;
            // console.log(randomSelector);
          var a = window.contributor.getRepos(token, url);

          return a;
        })

        .fail(function handlefail(xhr) {
          console.log('Please try again', xhr);
        });

      });

}());
