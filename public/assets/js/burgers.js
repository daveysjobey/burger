$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newHungry = $(this).data("newhungry");
      if (newHungry == true){
        newHungry= false;
      }
      else {newHungry=true}

      var newHungryState = {
        devoured: newHungry
      };
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: newHungryState
      }).then(
        function() {
          console.log("changed devoured to", newHungry);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  
    
  });
  