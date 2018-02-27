var DishItemView = function (container, model){

  model.addObserver(this);

    this.containerDishItem = container;
    var dishItem = container;
    var tempDish;

var showDishItem = function(){
    container.find("#dishLoading").show();
    container.find("#errorText").hide();
    model.getAllDishes1(model.getFilterType(),model.getFilter(), function(dishView){
      container.find("#dishLoading").hide();
      container.find("#errorText").hide();
      for (i=0;i<dishView.length;i++){
          tempDish = dishView[i];
          var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col-sm-2"));
          container.find("#dish"+i).append($("<div>")
                      .append($("<a>").attr("href","#")
                        .append($("<img>").attr("class","img-responsive").attr("src",tempDish.image).attr("id",tempDish.id))));

            container.find("#dish"+i).append($("<div>")
                      .append($("<p>").html(tempDish.title)));
       }

      }, function(error) {
        container.find("#errorText").show();
        container.find("#dishLoading").hide();
      });
  }

  //initialize
  showDishItem();

    this.update = function(obj) {
      switch (obj) {
        case "search":
        for (m=0;m<model.getFullMenu().length;m++){
          var removeDish =container.find("#dish"+m);
          removeDish.remove();
        }
        showDishItem();

          break;
        default:
      }
    }
  }
