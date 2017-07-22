var activeBadgeText = "ON";

chrome.browserAction.onClicked.addListener(function(tab) {
  // State is stored in the Badge because...
  chrome.browserAction.getBadgeText({tabId: tab.id}, function(badgeText) {
    if (badgeText === activeBadgeText) {
      removeNoValidate(tab);
    } else {
      addNoValidate(tab);
    }
  })
});

function addNoValidate(tab) {
  chrome.browserAction.setBadgeText({text: activeBadgeText, tabId: tab.id});
  chrome.browserAction.setBadgeBackgroundColor({color: "#2ecc16", tabId: tab.id});

  chrome.tabs.executeScript({
    code: "var formValidationRemoverInterval = window.setInterval(formValidationRemover, 1000);"+
    "function formValidationRemover() {"+
      "var nodes = document.getElementsByTagName('form');"+
      "for (var i = 0; i < nodes.length; ++i) { nodes[i].setAttribute('novalidate', 'novalidate'); }"+
    "}"
  });
}

function removeNoValidate(tab) {
  chrome.browserAction.setBadgeText({text: "", tabId: tab.id});

  chrome.tabs.executeScript({
    code: "if (typeof formValidationRemoverInterval !== 'undefined') { window.clearTimeout(formValidationRemoverInterval); }"
  });
}
