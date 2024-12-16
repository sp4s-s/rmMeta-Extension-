chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          [...img.attributes].forEach(attr => {
            if (attr.name !== 'src') img.removeAttribute(attr.name);
          });
          img.setAttribute('src', src);
        });
      }
    });
  });
  