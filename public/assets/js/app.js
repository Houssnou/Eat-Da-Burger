$("#add-burger").on("click", (event) => {
  //avoid reload page
  event.preventDefault();
  //make the button active
  console.log("we're in the app.js");

  const newBurger = {
    name: $("#name-input").val().trim()
  }
  console.log(newBurger);

  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: newBurger
  }).then(result => {
    console.log("success");
    alert("New Burger Added");
    location.reload();
  });
});

//event listenner for a click on a list group item
$(".to-eat").on("click", function (event) {
  event.preventDefault();
  console.log("i was clicked");

  $(this).addClass("list-group-item-success");

  const burgerId = $(this).attr("data-id");
  console.log(burgerId);
  //$(this).tab('show')
  $.ajax({
    url: "/api/burgers/" + burgerId,
    method: "PUT",
  }).then(result => {
    alert("Burger devoured!");
    location.reload();
  });
})