## ✅ 3️⃣ sw.js (SERVICE WORKER – NOTIFICATIONS)
```javascript
self.addEventListener('message',e=>{
const {title,body,date,time}=e.data;
const t=new Date(`${date}T${time}:00`).getTime()-Date.now();
if(t>0)setTimeout(()=>{
self.registration.showNotification(title,{body});
},t);
});
```


---
