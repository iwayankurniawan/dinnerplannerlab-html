var SideBarController = function(view,model){

 plusGuest1.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

 minusGuest1.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });

}
