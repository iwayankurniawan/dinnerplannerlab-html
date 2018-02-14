$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var generalController = new GeneralController();

	var sbView = $("#sideBarView");
	var seaView = $("#searchView");
	var diView = $("#dishItemView");
	var ddView = $("#dishDetailView");
	var sumView = $("#summaryView");
	var oView = $("#overviewView");
	var wView = $("#welcomeView");

	// And create the instance of ExampleView
	var sideBarView = new SideBarView(sbView,model);
	var sideBarController = new SideBarController(sideBarView,model,generalController);

	var searchView = new SearchView(seaView,model);
	var searchViewController = new SearchViewController(searchView,model);

	var dishItemView = new DishItemView(diView,model);
	var dishItemViewController = new DishItemViewController(dishItemView,model, generalController);

	var dishDetailView = new DishDetailView(ddView,model);
	var dishDetailViewController = new DishDetailViewController(dishDetailView, model, generalController);

	var summaryView = new SummaryView(sumView, model);
	var summaryViewController = new SummaryViewController(summaryView, model, generalController);

	var overviewView = new OverviewView(oView, model);
	var overviewViewController = new OverviewViewController(overviewView, model, generalController);

	var welcomeView = new WelcomeView(wView, model);
	var welcomeViewController = new WelcomeViewController(welcomeView, model, generalController);

	generalController.initiateViews();
	generalController.showActiveView("welcome");

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */



});
