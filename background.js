chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "raspberrypi.local:8888";
  chrome.tabs.create({ url: newURL });
});

