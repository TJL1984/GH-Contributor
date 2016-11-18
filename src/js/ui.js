(function() {
  'use strict';

  window.contributor = window.contributor || {};
    console.log("Where am I?");

    $('#search')
      .on('submit', function findRepos(event){
        event.preventDefault();

        var api = $("#api-key").val();
          console.log(api);
        var query = $("#query").val();
          console.log(query);

          window.contributor.findRepos(api, query)

        .done(function handleSuccess(data) {
          console.log('Success!', data);

          var randomRepo = data.items;
          var randomSelector = randomRepo[ Math.ceil(Math.random() * randomRepo.length) ];
            console.log(randomSelector);
        })

        .fail(function handlefail(xhr) {
          console.log('Please try again', xhr);
        });

      });
}());
