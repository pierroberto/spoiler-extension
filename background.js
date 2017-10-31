function onRequest(request, sender, sendResponse) {
  alert(request);
  chrome.pageAction.show(sender.tab.id);
  sendResponse('abelski was found');
}
chrome.extension.onRequest.addEventListener(onRequest);
