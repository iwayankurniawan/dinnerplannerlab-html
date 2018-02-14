var SideBarController = function(view,model,gc){

 plusGuest1.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

 minusGuest1.click(function(){
   if (model.getNumberOfGuests() > 0){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  }
 });

 createDinner.click(function(){
   gc.showActiveView("overview");
 });

}
