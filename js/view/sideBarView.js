var SideBarView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests);

  var dishName = container.find("#dishName");
  dishName.html("menu name from model");

  var dishCost = container.find("#dishCost");
  dishCost.html("menu price from model");
}
