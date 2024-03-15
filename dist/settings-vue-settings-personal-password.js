/*! For license information please see settings-vue-settings-personal-password.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,s={19429:(t,e,n)=>{var s=n(85471),r=n(88837),o=n(9518),a=n(16044),i=n(26287),l=n(99498),d=n(85168);const c={name:"PasswordSection",components:{NcSettingsSection:r.A,NcButton:o.A,NcPasswordField:a.A},data:()=>({oldPass:"",newPass:""}),methods:{changePassword(){i.A.post((0,l.Jv)("/settings/personal/changepassword"),{oldpassword:this.oldPass,newpassword:this.newPass}).then((t=>t.data)).then((t=>{"error"===t.status?(this.errorMessage=t.data.message,(0,d.Qg)(t.data.message)):(0,d.Te)(t.data.message)}))}}};var p=n(85072),u=n.n(p),h=n(97825),m=n.n(h),f=n(77659),w=n.n(f),g=n(55056),v=n.n(g),A=n(10540),b=n.n(A),P=n(41113),y=n.n(P),S=n(84619),N={};N.styleTagTransform=y(),N.setAttributes=v(),N.insert=w().bind(null,"head"),N.domAPI=m(),N.insertStyleElement=b(),u()(S.A,N),S.A&&S.A.locals&&S.A.locals;const x=(0,n(14486).A)(c,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Password")}},[e("form",{attrs:{id:"passwordform",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.changePassword.apply(null,arguments)}}},[e("NcPasswordField",{attrs:{id:"old-pass",label:t.t("settings","Current password"),name:"oldpassword",value:t.oldPass,autocomplete:"current-password",autocapitalize:"none",spellcheck:"false"},on:{"update:value":function(e){t.oldPass=e}}}),t._v(" "),e("NcPasswordField",{attrs:{id:"new-pass",label:t.t("settings","New password"),value:t.newPass,maxlength:469,autocomplete:"new-password",autocapitalize:"none",spellcheck:"false","check-password-strength":!0},on:{"update:value":function(e){t.newPass=e}}}),t._v(" "),e("NcButton",{attrs:{type:"primary","native-type":"submit",disabled:0===t.newPass.length||0===t.oldPass.length}},[t._v("\n\t\t\t"+t._s(t.t("settings","Change password"))+"\n\t\t")])],1)])}),[],!1,null,null,null).exports;var C=n(53334);n.nc=btoa(OC.requestToken),s.Ay.prototype.t=C.Tl,s.Ay.prototype.n=C.zw,new s.Ay({el:"#security-password",name:"main-personal-password",render:t=>t(x)})},84619:(t,e,n)=>{n.d(e,{A:()=>i});var s=n(71354),r=n.n(s),o=n(76314),a=n.n(o)()(r());a.push([t.id,"\n#passwordform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tmax-width: 400px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/PasswordSection.vue"],names:[],mappings:";AAiGA;CACA,aAAA;CACA,sBAAA;CACA,SAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright 2022 Carl Schwan <carl@carlschwan.eu>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n<template>\n\t<NcSettingsSection :name="t(\'settings\', \'Password\')">\n\t\t<form id="passwordform" method="POST" @submit.prevent="changePassword">\n\t\t\t<NcPasswordField id="old-pass"\n\t\t\t\t:label="t(\'settings\', \'Current password\')"\n\t\t\t\tname="oldpassword"\n\t\t\t\t:value.sync="oldPass"\n\t\t\t\tautocomplete="current-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tspellcheck="false" />\n\n\t\t\t<NcPasswordField id="new-pass"\n\t\t\t\t:label="t(\'settings\', \'New password\')"\n\t\t\t\t:value.sync="newPass"\n\t\t\t\t:maxlength="469"\n\t\t\t\tautocomplete="new-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tspellcheck="false"\n\t\t\t\t:check-password-strength="true" />\n\n\t\t\t<NcButton type="primary"\n\t\t\t\tnative-type="submit"\n\t\t\t\t:disabled="newPass.length === 0 || oldPass.length === 0">\n\t\t\t\t{{ t(\'settings\', \'Change password\') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport NcSettingsSection from \'@nextcloud/vue/dist/Components/NcSettingsSection.js\'\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcPasswordField from \'@nextcloud/vue/dist/Components/NcPasswordField.js\'\nimport axios from \'@nextcloud/axios\'\nimport { generateUrl } from \'@nextcloud/router\'\nimport { showSuccess, showError } from \'@nextcloud/dialogs\'\n\nexport default {\n\tname: \'PasswordSection\',\n\tcomponents: {\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t\tNcPasswordField,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\toldPass: \'\',\n\t\t\tnewPass: \'\',\n\t\t}\n\t},\n\tmethods: {\n\t\tchangePassword() {\n\t\t\taxios.post(generateUrl(\'/settings/personal/changepassword\'), {\n\t\t\t\toldpassword: this.oldPass,\n\t\t\t\tnewpassword: this.newPass,\n\t\t\t})\n\t\t\t\t.then(res => res.data)\n\t\t\t\t.then(data => {\n\t\t\t\t\tif (data.status === \'error\') {\n\t\t\t\t\t\tthis.errorMessage = data.data.message\n\t\t\t\t\t\tshowError(data.data.message)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshowSuccess(data.data.message)\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n\n<style>\n\t#passwordform {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tmax-width: 400px;\n\t}\n</style>\n'],sourceRoot:""}]);const i=a}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={id:t,loaded:!1,exports:{}};return s[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=s,t=[],o.O=(e,n,s,r)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],r=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((t=>o.O[t](n[l])))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,s,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{1359:"93ce268d719fb104336a",8618:"1e8f15db3b14455fef8f"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="nextcloud:",o.l=(t,s,r,a)=>{if(e[t])e[t].push(s);else{var i,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+r){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",n+r),i.src=t),e[t]=[s];var u=(n,s)=>{i.onerror=i.onload=null,clearTimeout(h);var r=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((t=>t(s))),n)return n(s)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=186,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=n[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={186:0};o.f.j=(e,n)=>{var s=o.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise(((n,r)=>s=t[e]=[n,r]));n.push(s[2]=r);var a=o.p+o.u(e),i=new Error;o.l(a,(n=>{if(o.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,n)=>{var s,r,a=n[0],i=n[1],l=n[2],d=0;if(a.some((e=>0!==t[e]))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var c=l(o)}for(e&&e(n);d<a.length;d++)r=a[d],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(19429)));a=o.O(a)})();
//# sourceMappingURL=settings-vue-settings-personal-password.js.map?v=55ac3081b5135dfc507b