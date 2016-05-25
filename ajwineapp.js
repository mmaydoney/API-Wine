$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/97f58c/wines",
    success: function(wine) {
      //console.log(wine);
      console.log(wine[0].name + "'s vintage is " + wine[0].year + " and the varietal is "  + wine[0].grapes + " grown in "  + wine[0].region + " of " + wine[0].country + ". " + wine[0].description);
      console.log(wine[1].name + "'s vintage is " + wine[1].year + " and the varietal is "  + wine[1].grapes + " grown in "  + wine[1].region + " of " + wine[1].country + ". " + wine[1].description);
      console.log(wine[2].name + "'s vintage is " + wine[2].year + " and the varietal is "  + wine[2].grapes + " grown in "  + wine[2].region + " of " + wine[2].country + ". " + wine[2].description);
      console.log(wine[3].name + "'s vintage is " + wine[3].year + " and the varietal is "  + wine[3].grapes + " grown in "  + wine[3].region + " of " + wine[3].country + ". " + wine[3].description);
      console.log(wine[4].name + "'s vintage is " + wine[4].year + " and the varietal is "  + wine[4].grapes + " grown in "  + wine[4].region + " of " + wine[4].country + ". " + wine[4].description);
      console.log(wine[5].name + "'s vintage is " + wine[5].year + " and the varietal is "  + wine[5].grapes + " grown in "  + wine[5].region + " of " + wine[5].country + ". " + wine[5].description);
      console.log(wine[6].name + "'s vintage is " + wine[6].year + " and the varietal is "  + wine[6].grapes + " grown in "  + wine[6].region + " of " + wine[6].country + ". " + wine[6].description);
      console.log(wine[7].name + "'s vintage is " + wine[7].year + " and the varietal is "  + wine[7].grapes + " grown in "  + wine[7].region + " of " + wine[7].country + ". " + wine[7].description);


    //create alerts for each wine with [name] [year] [grapes] [country] [description]
    },
    error: function() {
      //alert("Error in data");
    }
  })
});
