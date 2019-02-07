$("#add-burger").on("click", (event) => {
  //avoid reload page
  event.preventDefault();

  const newBurger = {
    name: $("#name-input").val().trim()
  }

  //console.log(newBurger);
  //ajax call
  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: newBurger
  }).then(result => {
    //console.log("success");
    //alert("New Burger Added");
    $("#name-input").val("")
    location.reload();
  });
});

//event listenner for a click on a list group item
$(".to-eat").on("click", function (event) {
  event.preventDefault();

  //console.log("i was clicked");
  $(this).addClass("list-group-item-success");

  const burgerId = $(this).attr("data-id");
  const burgerName = $(this).attr("data-name");

  $("#confirm-burger").text(burgerName);

  //confirm order burger;
  $(document).on("click", "#confirm-order", function (event) {
    // console.log(burgerId);
    //ajax call to update the burger devoured column
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "PUT",
    }).then(result => {
      // alert("Burger devoured!");
      location.reload();
    });
  });
});

//refresh page on when a modal is close to get rid of the selection hover
$("#confirm-modal").on("hidden.bs.modal", function () {
  location.reload();
});

//event listenner for a click on a list group item
$(".eaten").on("click", function (event) {
  event.preventDefault();

  //console.log("i was clicked");
  $(this).addClass("list-group-item-danger");

  const burgerId = $(this).attr("data-id");
  const burgerName = $(this).attr("data-name");

  // $("#confirm-burger").text(burgerName);

  //confirm order burger;
  $(document).on("click", "#confirm-delete", function (event) {
    // console.log(burgerId);
    //ajax call to update the burger devoured column
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "DELETE",
    }).then(result => {
      // alert("Burger devoured!");
      location.reload();
    });
  });

  //refresh page on when a modal is close to get rid of the selection hover
  $("#delete-modal").on("hidden.bs.modal", function () {
    location.reload();
  });
});

//control panel
//resetting
$("#reset").on("click", () => {
  //
  console.log("Resetting burgers to non devoured");
  $.ajax({
    url: "/api/burgers/reset",
    method: "PUT"
  }).then(result => {
    //reload page
    location.reload();
  })
});

//deleting all burgers
$("#clear").on("click", () => {
  //
  console.log("deleting burgers");
  $.ajax({
    url: "/api/burgers/clear",
    method: "DELETE"
  }).then(result => {
    //reload page
    location.reload();
  })
});