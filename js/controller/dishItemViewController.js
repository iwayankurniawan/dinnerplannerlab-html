var DishItemViewController = function(view,model){

      for(let i in view.dishClick){
        view.dishClick[i].on("click", function(event){
        model.addDishToMenu(view.dishClick[i].attr("id"));
      });
    };


}
