# 📸 rmMeta-Extension  
🚀 **Removes image tag metadata, keeping only the `src` attribute for clean display.**  
sample piece no License 

---

## 📖 Overview  
This extension is great for decluttering images by removing unnecessary metadata in `<img>` tags, leaving only the source for a seamless browsing experience.  

---

## 🛠️ How to Use  
Follow these steps to get started:  

1. **📂 Copy the folder** containing this extension's files to your system.  
2. **🔧 Enable Chrome Developer Mode**:  
   - Open Chrome and navigate to `chrome://extensions`.  
   - Toggle **Developer mode** (top-right corner).  
3. **📥 Load the Extension**:  
   - Click on **Load Unpacked** (top-left corner).  
   - Select the **parent folder** of this extension.  
4. **✅ Turn on the Extension**:  
   - Ensure the extension is toggled on after installation.  

---

## 🧩 Files  

### `manifest.json`  
- Change the host permission to for all other sites but will throught error sometimes and alway when in browser internal sites
 ```
  "host_permissions": ["<all_urls>"],

```
```json
{
  "manifest_version": 3,
  "name": "rmMeta-Extension",
  "version": "1.0",
  "description": "Removes all metadata from img tags except src.",
  "permissions": ["scripting", "activeTab"],
  "host_permissions": ["http://*/*", "https://*/*"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html"
  }
}
