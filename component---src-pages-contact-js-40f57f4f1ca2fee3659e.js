(self.webpackChunkdesserts_app_marketing=self.webpackChunkdesserts_app_marketing||[]).push([[501],{2547:function(e,t,n){"use strict";var a=n(2119);var i=n(2318),r=null,s="https://api.emailjs.com";function o(e,t,n){return void 0===n&&(n={}),new Promise((function(i,r){var s=new XMLHttpRequest;for(var o in s.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):r(t)})),s.addEventListener("error",(function(e){r(new a.EmailJSResponseStatus(e.target))})),s.open("POST",e,!0),n)s.setRequestHeader(o,n[o]);s.send(t)}))}function m(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e,t){r=e,s=t||"https://api.emailjs.com"}function c(e,t,n,a){var i={lib_version:"2.6.4",user_id:a||r,service_id:e,template_id:t,template_params:m(n)};return o(s+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function u(e,t,n,a){var m;if("string"==typeof n&&(n=document.querySelector("#"!==(m=n)[0]&&"."!==m[0]?"#"+m:m)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(n);var l=new FormData(n);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",a||r),o(s+"/api/v1.0/email/send-form",l).then((function(e){return i.UI.successState(n),e}),(function(e){return i.UI.errorState(n),Promise.reject(e)}))}t.ZP={init:l,send:c,sendForm:u}},2119:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},2318:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},3113:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),i=n(4267),r=n(838),s=n(453),o=n(8063),m=n(920),l=n(9355),c=n(8129),u=n(4029),d=n(3332),p=n(2547),f=(0,m.Z)((function(e){var t,n;return{title:(t={},t[e.breakpoints.down("md")]={fontSize:"2em"},t),formContainer:(n={},n[e.breakpoints.down("md")]={margin:0},n)}})),v=function(e){var t=e.infoProps,n=f(),i=t.title,o=t.description;return a.createElement(r.Z,{container:!0,item:!0,justify:"center",spacing:4},a.createElement(r.Z,{item:!0,xs:12},a.createElement(s.Z,{className:n.title,variant:"h2",align:"center"},i)),a.createElement(r.Z,{item:!0,xs:12,md:9,align:"center"},a.createElement(s.Z,{variant:"body1"},o)),a.createElement(r.Z,{item:!0,xs:12},a.createElement("form",{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),p.ZP.sendForm("service_q2pwxzm","template_4a3b6ho",e.target,"user_4TrA5Sj6OvYB8xTLZd3v8").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Your email was successfully sent!")}},a.createElement(r.Z,{className:n.formContainer,item:!0,container:!0,xs:12,justify:"center",spacing:4},a.createElement(r.Z,{item:!0,xs:12,md:5},a.createElement(u.Z,{label:"Your Name",name:"user_name",variant:"outlined",fullWidth:!0})),a.createElement(r.Z,{item:!0,xs:12,md:5},a.createElement(u.Z,{label:"Your Email",name:"user_email",variant:"outlined",fullWidth:!0})),a.createElement(r.Z,{item:!0,xs:12,md:10},a.createElement(u.Z,{label:"Your Message",name:"message",variant:"outlined",fullWidth:!0,multiline:!0,rows:6})),a.createElement(r.Z,{container:!0,item:!0,justify:"flex-end",xs:12,md:10},a.createElement(d.Z,{id:"send-email-button",variant:"contained",type:"submit",color:"primary",disableElevation:!0},"Send Email"))))))},E=(0,m.Z)((function(e){var t,n;return{root:(t={color:"#232129",paddingTop:"2em",maxWidth:"100vw",margin:0},t[e.breakpoints.up("sm")]={paddingTop:"3em"},t[e.breakpoints.up("md")]={paddingTop:"4em",margin:"0 auto",maxWidth:"1440px"},t),jumbotron:{marginBottom:"2em"},body:(n={borderRadius:"12px",padding:"3em 16px 4em",overflow:"hidden"},n[e.breakpoints.up("sm")]={padding:"6em calc(1/12 * 100%)"},n[e.breakpoints.up("md")]={padding:"6em calc(1/12 * 100%) 12em"},n)}})),g=function(){var e=E(),t=(0,l.Z)(),n=(0,c.Z)(t.breakpoints.down("md"));return a.createElement(i.Z,null,a.createElement("title",null,"Contact Us"),a.createElement(r.Z,{className:e.root,container:!0,justify:"center",spacing:4},a.createElement(r.Z,{className:e.jumbotron,container:!0,item:!0,direction:"column",alignItems:"center",alignContent:"center",spacing:n?2:4,xs:12,sm:11,md:7},a.createElement(r.Z,{item:!0},a.createElement(s.Z,{variant:"h1"},"Contact Us")),a.createElement(r.Z,{item:!0},a.createElement(s.Z,{variant:"subtitle1"},"Connect with us directly via email or follow us for updates on our social media pages! We promise to make it worth your time ",a.createElement("span",{role:"img","aria-label":"smile"},"😊")))),a.createElement(r.Z,{item:!0,xs:12,md:11},a.createElement(o.Z,{className:e.body,elevation:6},a.createElement(r.Z,{container:!0,direction:"column",spacing:10},a.createElement(v,{infoProps:{title:"Send us an Email",description:"Reach out to our team if you have any questions or want to make a business inquiry."}}))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-40f57f4f1ca2fee3659e.js.map