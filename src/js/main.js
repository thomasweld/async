// import jquery
import $ from 'jquery';

// check for jquery
console.log($);

// import template function that builds html from API data
import card from './templates/card'

// assign api url to a variable for later use
var url = 'https://randomuser.me/api/?results=12&nat=us';

// assign HTML area where template will render profile cards on the page
// will append results here later
var cardArea = $('.profiles');

// Make My Request
var dataRequest = $.getJSON(url);

console.log(dataRequest);

var cardsHTML = '';

// When it succedes, call my template Card Function
dataRequest.then( function (res) {

  var formArr = res.results;

  formArr.forEach( function (user) {
    console.log(user);
    console.log(user.picture.large);

    // passing each user into card function for templating / processing
    var html = card(user);

    cardsHTML += html;

  });

  // append each result user card to html section class=cardArea
  cardArea.append(cardsHTML);

});



//
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data){
//     console.log('success', data);
//
//   }
// });
