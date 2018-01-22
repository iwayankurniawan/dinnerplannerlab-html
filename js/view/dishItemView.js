var DishItemView = function (container, model){
    var dishItem = $("#dishItem");
    var dishView = model.getFullMenu();
    var tempDish;


    for (i=0;i<dishView.length;i++){
      tempDish = dishView[i];
      var dishList= dishItem.append($("<div>").attr("id","dish"+i));
      $("#dish"+i).append($("<div>").attr("id",i)
                  .append($("<a>").attr("href","#")
                    .append($("<img>").attr("src","images/"+tempDish.image))));
        $("#dish"+i).append($("<div>")
                  .append($("<p>").html(tempDish.name)));
                }
}
