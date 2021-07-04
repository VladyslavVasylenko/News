'use strict';

$(document).ready(function(){
  $(".search-btn").click(function(){
    $(".search-wrap, .search-input ").toggleClass("active");
    $(".search-input").focus();
  });
});