var DishItemView = function (container, model){

  model.addObserver(this);

  this.dishClick = new Array();
  var dishItem = container;
  //var dishItem = $("#dishItemView");

  // var dishView = model.getFullMenu();

  //var dishes = model.getSelectedDish(model.getFilterType());
  model.getAllDishesAPI("", "a",
      function(data){
        loadDishesToHtml(data);
      },
      function(err){
        alert("wah rusak");
      }
    );
  var tempDish;



  //load dish to html search panel
  var loadDishesToHtml = function(dishView){
    //Dish View in Choose Menu Page HTML
    for (i=0;i<dishView.menuItems.length;i++){
      tempDish = dishView.menuItems[i];
      var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col-sm-2"));

      container.find("#dish"+i).append($("<div>")
      .append($("<a>").attr("href","#")
      .append($("<img>").attr("class","img-responsive").attr("src", tempDish.image).attr("id",tempDish.id))));

      container.find("#dish"+i).append($("<div>")
      .append($("<p>").html(tempDish.title)));

      //BUAT WAWAN
      //wan ini dibawah klo dinyalain jadi error. tapi gue gatau kenapa. jadi gue matiin.
      //tolong cari tau ya gimana biar bisa daftarin click lagi
      //this.dishClick.push(container.find("#" + tempDish.id));
    }
  }

  //update when another view trigger event
  this.update = function(obj) {
    switch (obj) {
      case "search":
      for (m=0;m<model.getFullMenu().length;m++){
        var removeDish =container.find("#dish"+m);
        removeDish.remove();
      }

      this.dishClick = new Array();

      var dishView1 = model.getAllDishes(model.getFilterType(),model.getFilter());
      var tempDish1;
      for (l=0;l<dishView1.length;l++){
        tempDish1 = dishView1[l];
        var dishListl= dishItem.append($("<div>").attr("id","dish"+l).attr("class","col"));
        container.find("#dish"+l).append($("<div>")
        .append($("<a>").attr("href","#")
        .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish1.image).attr("id",tempDish1.id))));
        container.find("#dish"+l).append($("<div>")
        .append($("<p>").html(tempDish1.name)));

        this.dishClick.push(container.find("#" + tempDish1.id));
      }
      break;
      default:
    }
  }
}
