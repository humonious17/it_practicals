$(document).ready(function () {
    $('#styleButton').click(function () {
      // Redesign the page using jQuery
      $('#content').css({
        'background-color': '#007BFF',
        'color': '#fff',
        'box-shadow': '0 0 10px rgba(255, 255, 255, 0.5)'
      });
  
      $('h1, h2').css('color', '#fff');
      $('ul').css({
        'color': '#fff',
        'margin-left': '0'
      });
  
      $('li').css('border-bottom', '1px solid rgba(255, 255, 255, 0.5)');
  
      $('button').css({
        'background-color': '#fff',
        'color': '#007BFF',
        'border': '1px solid #007BFF'
      });
  
      // Additional styling can be added as needed
    });
  });
  