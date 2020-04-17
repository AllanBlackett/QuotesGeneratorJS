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

  //.......................................................................
  
  // display quotes from displayQuoteFromArray() function call 
  function displayQuote(response) {
    console.log(response.quote);
    // Displaying results
    $("#quote").text(response.quote);
    $('#author').text(response.author);
    $('#main').fadeIn(1200);
  }

  // create a function that will display quotes from this array if AJAX call fails    
  function displayQuoteFromArray() {
    let myQuotes = [{
        author: "Malcom X",
        quote: "No, I don't worry. I tell you, I am a man who believed that I died 20 years ago, and I live like a man who is dead already. I have no fear, whatsoever, of anybody or anything."
      },
      {
        author: "Soren Aabye Kierkegaard",
        quote: "People demand freedom of speech to make up for the freedom of thought which they avoid"
      },
      {
        author: "Oscar Wilde",
        quote: "The only way to get rid of a temptation is to yield to it."
      },
      {
        author: "Aldous Huxley",
        quote: "Maybe this world is another planet's Hell."
      },
      {
        author: "Thomas Alba Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work."
      }
    ];

    // Using Math.floor to generate random Array Items from quotes   
    let random = Math.floor(Math.random() * 5);
    displayQuote(myQuotes[random]);
  }

}); // End document ready
