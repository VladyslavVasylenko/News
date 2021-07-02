'use strict';

$(document).ready(function(){
  $(".search-btn").click(function(){
    $(".search-wrap, .search-input ").toggleClass("active");
    $("input[type='text']").focus();
  });
});