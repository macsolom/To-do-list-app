function newItem(){

  //  Add a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must add an item!");
  } else {
    $('#list').append(li);
  }

  // Cross out an item from the list
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // Add the delete "X" button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  // Add CLASS DELETE
  function deleteListItem() {
    li.addClass('delete');
  }

  // Ability to reorder the items:
   $('#list').sortable();

}
