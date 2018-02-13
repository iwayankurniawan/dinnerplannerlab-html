var SearchView = function (container, model){

  model.addObserver(this);

  this.typeOption = container.find("#typeOption");
  this.searchBox = container.find("#searchBox");
  this.searchDish = container.find("#searchDish");

  this.update = function(obj) {
    
  }

}
