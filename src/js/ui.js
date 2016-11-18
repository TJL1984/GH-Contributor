(function() {
  'use strict';

  window.contributor = window.contributor || {};

    $('#search')
      .on('submit', function Repos(event){
        event.preventDefault();

        var token = $('#api-key').val();
          // console.log(token);
        var query = $('#query').val();
          // console.log(query);

        window.contributor.findRepos(query, token)

        .then(function handleSuccess(data) {
          console.log('success', data);

          var randomRepo = data.items;
          var randomSelector = randomRepo[ Math.ceil(Math.random() * randomRepo.length) ];
          var url = randomSelector.commits_url;
          var a = window.contributor.getRepos(token, url);

            return a;
        })

        .then (function handleSuccess(data) {
          console.log('Second', data);
          // var author = data[0].commit.author.name;
          // console.log(author);
          // var avatar =
        }
      );
    });
}());
