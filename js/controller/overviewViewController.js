var OverviewViewController = function(view, model, gc) {
  //alert("lewat ah");
  view.btnBack.click(function(){
    //alert("masup sini");
    gc.showActiveView("search");

  });

  view.btnNext.click(function(){
    //alert("masup sini");
    gc.showActiveView("summary");

  });
}
