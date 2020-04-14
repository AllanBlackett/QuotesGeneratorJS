// Execute any functions when the document is fully loaded.
$(document).ready(function () {

  //********** Quotes Section  **********//
 
  displayQuoteFromArray();

  // When #nextQuote button is clicked, generate new quote   
  $("#nextQuote").click(function () {
    // fadeOut() method gradually changes the opacity, from visible to hidden (fading effect)
    $('#main').fadeOut();
    getRandomQuote();
  });


}); // End document ready
