function newItem() {

//  Add a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert('You must add an item!')
  } else {
    let list = $('#list');
    list.append(li);
  }

// Cross out an item from the list
  li.on('dblclick', function(){
  li.toggleClass('strike');
  });

// Add the delete "X" button & add class delete
let crossOutButton = $('<crossOutButton></crossOutButton>');
li.append(crossOutButton);
crossOutButton.append(document.createTextNode('X'));
crossOutButton.on('click', function(){
  li.addClass('delete');
});

// Ability to reorder the items:
  $('#list').sortable();

}
