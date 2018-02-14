var DishItemViewController = function(view,model, gc){
      var id=0;
      for(let i in view.dishClick){
        view.dishClick[i].on("click", function(event){
          id=view.dishClick[i].attr("id");
          //model.addDishToMenu(id);
          model.setCurrentDish(id);

          gc.showActiveView("detail");
      });
    };


}
