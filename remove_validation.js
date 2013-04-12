chrome.tabs.executeScript(null, {code:"var nodes = document.getElementsByTagName('form');for (var i = 0; i < nodes.length; ++i) {nodes[i].setAttribute('novalidate', 'novalidate');}"});

window.setTimeout(function() {
    window.close();
}, 1200);
