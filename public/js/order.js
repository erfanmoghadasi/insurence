$('.inputbox-select').on('change', function() {
    if ($(this).val()) {
  return $(this).css('color', 'black');
    } else {
  return $(this).css('color', '#ccc');
    }
  });