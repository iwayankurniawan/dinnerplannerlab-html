var GeneralController = function() {
  var arrViews = new Array();
  var sbView = $("#sideBarView");
  var seaView = $("#searchView");
  var diView = $("#dishItemView");
  var ddView = $("#dishDetailView");
  var sumView = $("#summaryView");
  var oView = $("#overviewView");
  var wView = $("#welcomeView");

  this.initiateViews = function(arr) {
    arrViews.push(sbView);
    arrViews.push(seaView);
    arrViews.push(diView);
    arrViews.push(ddView);
    arrViews.push(sumView);
    arrViews.push(oView);
    arrViews.push(wView);
  }

  this.showActiveView = function(name) {

    //hide all views
    for (i in arrViews){
      arrViews[i].hide();
    }

    //show only the selected
    switch (name) {
      case "welcome":
        wView.show();
        break;
      case "search":
        sbView.show();
        seaView.show();
        diView.show();
        break;
      case "detail":
        sbView.show();
        ddView.show();
        break;
      case "overview":
        oView.show();
        break;
      case "summary":
        sumView.show();
        break;
      default:

    }
  }


}
