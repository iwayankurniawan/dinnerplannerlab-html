$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	 var sideBarView = new SideBarView($("#sideBarView"),model);
	 var searchView = new SearchView($("#searchView"),model);
	 var dishItemView = new DishItemView($("#dishItemView"),model);
	//var dishDetailView = new DishDetailView($("#dishDetailView"),model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
