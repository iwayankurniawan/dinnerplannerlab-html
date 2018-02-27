var DishItemViewController = function(view,model, gc){

      model.addObserver(this);
    //   var id=0;
    //   for(let i in view.dishClick){
    //
    //     view.dishClick[i].on("click", function(event){
    //       id=view.dishClick[i].attr("id");
    //       //model.addDishToMenu(id);
    //
    //       model.setCurrentDish(id);
    //
    //       gc.showActiveView("detail");
    //   });
    // };
    //
    // this.update = function(obj) {
    //   switch (obj) {
    //     case "search":
    //           var id=0;
    //           for(let i in view.dishClick){
    //
    //             view.dishClick[i].on("click", function(event){
    //               id=view.dishClick[i].attr("id");
    //               //model.addDishToMenu(id);
    //
    //               model.setCurrentDish(id);
    //
    //               gc.showActiveView("detail");
    //           });
    //         };
    //       break;
    //     default:
    //   }
    // }

    //console.log(view.containerDishItem);



    // $("#dishItemView").click(function(event){
    //   model.setCurrentDish(event.target.id);
    //   gc.showActiveView("detail");
    // });

    view.containerDishItem.click(function(event){
      model.setCurrentDish(event.target.id);
      gc.showActiveView("detail");
    });

    this.update = function(obj) {
      switch (obj) {
        case "search":
              var id=0;

              view.containerDishItem.click(function(event){
                model.setCurrentDish(event.target.id);
                gc.showActiveView("detail");
              });

            break;
          default:
        }
      }
}
