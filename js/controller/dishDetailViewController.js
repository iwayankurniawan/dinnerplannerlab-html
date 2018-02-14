var DishDetailViewController = function(view, model, gc) {
  //alert("lewat ah");
  view.btnBack.click(function(){
    //alert("masup sini");
    gc.showActiveView("search");

  });

  view.btnAdd.click(function(){
    model.addDishToMenu(model.getDefaultDishId());
    gc.showActiveView("search");
  });
}
