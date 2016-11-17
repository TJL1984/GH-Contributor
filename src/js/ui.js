(function() {
  'use strict';

  window.contributor = window.contributor || {};
    console.log("Where am I?");

    $('#find')
      .on('submit', function findRepos(event){
        event.preventDefault();

        var api = $(".api").val();
          console.log(api);
        var query = $(".query").val();
          console.log(query);

        window.contributor.findRepos(api, query);
      });
}());
