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

  
  // Grabbing the quotes using Ajax call
  function getRandomQuote() {
    $.ajax({
      type: "POST",
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      dataType: "json",
      success: displayAPIQuote,
      // display quotes from an displayQuoteFromArray array if AJAX call fails
      error: displayQuoteFromArray,
      beforeSend: setHeader,
    });

    // setting what kind of response it will return
    function setHeader(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "XEmG41b3OumshAGz4MeTGVfhZNmdp1Cty6ajsnAKusfLZ0iZKC");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    }
  }

  // display quotes from API call
  function displayAPIQuote(response) {
    console.log(response[0].quote);
    // Displaying results
    $('#quote').text(response[0].quote);
    $('#author').text(response[0].author);
    $('#main').fadeIn(1200);
  }


}); // End document ready
