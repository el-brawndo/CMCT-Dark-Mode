function closeTab(info, tab) {
  chrome.tabs.remove(tab.id);
}

browser.contextMenus.create({
  "title": "Close Tab",
  "contexts": ["all"],
  "onclick": closeTab
});