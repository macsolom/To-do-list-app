//  Add a new item to the list
function newItem(){
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === " ") {
         alert("you must add an item!")
    }
    else{
       $("#list").append(li);
    }

// Cross out an item from the list
    li.on("dblclick",function crossOut(){
          li.toggleClass("strike")
      });

// Add the delete "X" button & add class delete
let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);


    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }
// Ability to reorder the items:
    $('#list').sortable();
}
