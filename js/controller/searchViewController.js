var SearchViewController = function(view,model){

  view.searchDish.click(function(){
      model.setFilterType(typeOption.value,searchBox.value);
  });

}
