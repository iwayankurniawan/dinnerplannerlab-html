var DishItemView = function (container, model){


  var dishItem = container;
  //var dishItem = $("#dishItemView");

  var dishView = model.getFullMenu();
  var tempDish;

  //Dish View in Choose Menu Page HTML
  for (i=0;i<dishView.length;i++){
    tempDish = dishView[i];
    var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col"));
    container.find("#dish"+i).append($("<div>").attr("id",i)
    .append($("<a>").attr("href","#")
    .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish.image))));
    container.find("#dish"+i).append($("<div>")
    .append($("<p>").html(tempDish.name)));
  }


}
