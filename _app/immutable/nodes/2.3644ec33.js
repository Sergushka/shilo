import{s as cs,n as In,o as zc,f as An,h as Hc,b as wo,i as Kc}from"../chunks/scheduler.185ca572.js";import{S as ls,i as us,g as De,h as ke,j as hs,f as qt,k as ot,a as Un,A as Gc,s as Ro,c as Co,z as Vr,B as Po,C as Qc,r as si,u as ii,v as oi,d as ai,t as ci,w as li}from"../chunks/index.b36da1c6.js";function ui(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Wc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(So(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Xc;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yc=function(e){const t=So(e);return Vo.encodeByteArray(t,!0)},wn=function(e){return Yc(e).replace(/\./g,"")},Jc=function(e){try{return Vo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=()=>Zc().__FIREBASE_DEFAULTS__,el=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jc(e[1]);return t&&JSON.parse(t)},Do=()=>{try{return tl()||el()||nl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rl=e=>{var t,n;return(n=(t=Do())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ko=e=>{const t=rl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bo=()=>{var e;return(e=Do())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[wn(JSON.stringify(n)),wn(JSON.stringify(o)),a].join(".")}function il(){try{return typeof indexedDB=="object"}catch{return!1}}function ol(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="FirebaseError";class Gt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=al,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?cl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,r)}}function cl(e,t){return e.replace(ll,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ll=/\{\$([^}]+)}/g;function Dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(hi(i)&&hi(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){return e&&e._delegate?e._delegate:e}class ie{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dl(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hl(e){return e===Mt?void 0:e}function dl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ul(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const pl={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},gl=V.INFO,ml={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},_l=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=ml[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xo{constructor(t){this.name=t,this._logLevel=gl,this._logHandler=_l,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const yl=(e,t)=>t.some(n=>e instanceof n);let di,fi;function El(){return di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tl(){return fi||(fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lo=new WeakMap,kr=new WeakMap,Fo=new WeakMap,hr=new WeakMap,ds=new WeakMap;function vl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Pt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Lo.set(n,e)}).catch(()=>{}),ds.set(t,e),t}function Il(e){if(kr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});kr.set(e,t)}let br={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return kr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Al(e){br=e(br)}function wl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(dr(this),t,...n);return Fo.set(r,t.sort?t.sort():[t]),Pt(r)}:Tl().includes(e)?function(...t){return e.apply(dr(this),t),Pt(Lo.get(this))}:function(...t){return Pt(e.apply(dr(this),t))}}function Rl(e){return typeof e=="function"?wl(e):(e instanceof IDBTransaction&&Il(e),yl(e,El())?new Proxy(e,br):e)}function Pt(e){if(e instanceof IDBRequest)return vl(e);if(hr.has(e))return hr.get(e);const t=Rl(e);return t!==e&&(hr.set(e,t),ds.set(t,e)),t}const dr=e=>ds.get(e);function Cl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Pl=["get","getKey","getAll","getAllKeys","count"],Sl=["put","add","delete","clear"],fr=new Map;function pi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fr.get(t))return fr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Sl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fr.set(t,i),i}Al(e=>({...e,get:(t,n,r)=>pi(t,n)||e.get(t,n,r),has:(t,n)=>!!pi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Nr="@firebase/app",gi="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new xo("@firebase/app"),kl="@firebase/app-compat",bl="@firebase/analytics-compat",Nl="@firebase/analytics",Ol="@firebase/app-check-compat",Ml="@firebase/app-check",xl="@firebase/auth",Ll="@firebase/auth-compat",Fl="@firebase/database",Ul="@firebase/database-compat",Bl="@firebase/functions",$l="@firebase/functions-compat",ql="@firebase/installations",jl="@firebase/installations-compat",zl="@firebase/messaging",Hl="@firebase/messaging-compat",Kl="@firebase/performance",Gl="@firebase/performance-compat",Ql="@firebase/remote-config",Wl="@firebase/remote-config-compat",Xl="@firebase/storage",Yl="@firebase/storage-compat",Jl="@firebase/firestore",Zl="@firebase/firestore-compat",tu="firebase",eu="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]",nu={[Nr]:"fire-core",[kl]:"fire-core-compat",[Nl]:"fire-analytics",[bl]:"fire-analytics-compat",[Ml]:"fire-app-check",[Ol]:"fire-app-check-compat",[xl]:"fire-auth",[Ll]:"fire-auth-compat",[Fl]:"fire-rtdb",[Ul]:"fire-rtdb-compat",[Bl]:"fire-fn",[$l]:"fire-fn-compat",[ql]:"fire-iid",[jl]:"fire-iid-compat",[zl]:"fire-fcm",[Hl]:"fire-fcm-compat",[Kl]:"fire-perf",[Gl]:"fire-perf-compat",[Ql]:"fire-rc",[Wl]:"fire-rc-compat",[Xl]:"fire-gcs",[Yl]:"fire-gcs-compat",[Jl]:"fire-fst",[Zl]:"fire-fst-compat","fire-js":"fire-js",[tu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Map,Mr=new Map;function ru(e,t){try{e.container.addComponent(t)}catch(n){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function be(e){const t=e.name;if(Mr.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Mr.set(t,e);for(const n of Rn.values())ru(n,e);return!0}function Uo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new Oo("app","Firebase",su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=eu;function $o(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Or,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=bo()),!n)throw St.create("no-options");const i=Rn.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new fl(s);for(const c of Mr.values())o.addComponent(c);const a=new iu(n,r,o);return Rn.set(s,a),a}function qo(e=Or){const t=Rn.get(e);if(!t&&e===Or&&bo())return $o();if(!t)throw St.create("no-app",{appName:e});return t}function Vt(e,t,n){var r;let s=(r=nu[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}be(new ie(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="firebase-heartbeat-database",au=1,Ne="firebase-heartbeat-store";let pr=null;function jo(){return pr||(pr=Cl(ou,au,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ne)}}}).catch(e=>{throw St.create("idb-open",{originalErrorMessage:e.message})})),pr}async function cu(e){try{return await(await jo()).transaction(Ne).objectStore(Ne).get(zo(e))}catch(t){if(t instanceof Gt)jt.warn(t.message);else{const n=St.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(n.message)}}}async function mi(e,t){try{const r=(await jo()).transaction(Ne,"readwrite");await r.objectStore(Ne).put(t,zo(e)),await r.done}catch(n){if(n instanceof Gt)jt.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function zo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=1024,uu=30*24*60*60*1e3;class hu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_i();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=uu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_i(),{heartbeatsToSend:n,unsentEntries:r}=du(this._heartbeatsCache.heartbeats),s=wn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _i(){return new Date().toISOString().substring(0,10)}function du(e,t=lu){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return il()?ol().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function yi(e){return wn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e){be(new ie("platform-logger",t=>new Vl(t),"PRIVATE")),be(new ie("heartbeat",t=>new hu(t),"PRIVATE")),Vt(Nr,gi,e),Vt(Nr,gi,"esm2017"),Vt("fire-js","")}pu("");var gu="firebase",mu="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(gu,mu,"app");var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,fs=fs||{},v=_u||self;function Bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ke(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function yu(e){return Object.prototype.hasOwnProperty.call(e,gr)&&e[gr]||(e[gr]=++Eu)}var gr="closure_uid_"+(1e9*Math.random()>>>0),Eu=0;function Tu(e,t,n){return e.call.apply(e.bind,arguments)}function vu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Tu:Z=vu,Z.apply(null,arguments)}function cn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function H(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Nt(){this.s=this.s,this.o=this.o}var Iu=0;Nt.prototype.s=!1;Nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Iu!=0)&&yu(this)};Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ho=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ps(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ei(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Au=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function Oe(e){return/^[\s\xa0]*$/.test(e)}function $n(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return $n().indexOf(e)!=-1}function gs(e){return gs[" "](e),e}gs[" "]=function(){};function wu(e,t){var n=mh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ru=ft("Opera"),oe=ft("Trident")||ft("MSIE"),Ko=ft("Edge"),xr=Ko||oe,Go=ft("Gecko")&&!($n().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),Cu=$n().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Qo(){var e=v.document;return e?e.documentMode:void 0}var Lr;t:{var mr="",_r=function(){var e=$n();if(Go)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ko)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Cu)return/WebKit\/(\S+)/.exec(e);if(Ru)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_r&&(mr=_r?_r[1]:""),oe){var yr=Qo();if(yr!=null&&yr>parseFloat(mr)){Lr=String(yr);break t}}Lr=mr}var Fr;if(v.document&&oe){var Ti=Qo();Fr=Ti||parseInt(Lr,10)||void 0}else Fr=void 0;var Pu=Fr;function Me(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Go){t:{try{gs(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Su[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Me.$.h.call(this)}}H(Me,tt);var Su={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Vu=0;function Du(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Vu,this.fa=this.ia=!1}function qn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ms(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ku(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Wo(e){const t={};for(const n in e)t[n]=e[n];return t}const vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<vi.length;i++)n=vi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function jn(e){this.src=e,this.g={},this.h=0}jn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Br(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Du(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ur(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Ho(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(qn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Br(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Er={};function Yo(e,t,n,r,s){if(r&&r.once)return Zo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yo(e,t[i],n,r,s);return null}return n=Ts(n),e&&e[Ge]?e.O(t,n,Ke(r)?!!r.capture:!!r,s):Jo(e,t,n,!1,r,s)}function Jo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ke(s)?!!s.capture:!!s,a=Es(e);if(a||(e[_s]=a=new jn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=bu(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Au||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ea(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bu(){function e(n){return t.call(e.src,e.listener,n)}const t=Nu;return e}function Zo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Zo(e,t[i],n,r,s);return null}return n=Ts(n),e&&e[Ge]?e.P(t,n,Ke(r)?!!r.capture:!!r,s):Jo(e,t,n,!0,r,s)}function ta(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ta(e,t[i],n,r,s);else r=Ke(r)?!!r.capture:!!r,n=Ts(n),e&&e[Ge]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Br(i,n,r,s),-1<n&&(qn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Br(t,n,r,s)),(n=-1<e?t[e]:null)&&ys(n))}function ys(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ge])Ur(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ea(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Es(t))?(Ur(n,e),n.h==0&&(n.src=null,t[_s]=null)):qn(e)}}}function ea(e){return e in Er?Er[e]:Er[e]="on"+e}function Nu(e,t){if(e.fa)e=!0;else{t=new Me(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ys(e),e=n.call(r,t)}return e}function Es(e){return e=e[_s],e instanceof jn?e:null}var Tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ts(e){return typeof e=="function"?e:(e[Tr]||(e[Tr]=function(t){return e.handleEvent(t)}),e[Tr])}function z(){Nt.call(this),this.i=new jn(this),this.S=this,this.J=null}H(z,Nt);z.prototype[Ge]=!0;z.prototype.removeEventListener=function(e,t,n,r){ta(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var s=t;t=new tt(r,e),Xo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ln(o,r,!0,t)&&s}if(o=t.g=e,s=ln(o,r,!0,t)&&s,s=ln(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ln(o,r,!1,t)&&s}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)qn(n[r]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};z.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ln(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ur(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var vs=v.JSON.stringify;class Ou{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Mu(){var e=Is;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xu{constructor(){this.h=this.g=null}add(t,n){const r=na.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var na=new Ou(()=>new Lu,e=>e.reset());class Lu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fu(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Uu(e){v.setTimeout(()=>{throw e},0)}let xe,Le=!1,Is=new xu,ra=()=>{const e=v.Promise.resolve(void 0);xe=()=>{e.then(Bu)}};var Bu=()=>{for(var e;e=Mu();){try{e.h.call(e.g)}catch(n){Uu(n)}var t=na;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1};function zn(e,t){z.call(this),this.h=e||1,this.g=t||v,this.j=Z(this.qb,this),this.l=Date.now()}H(zn,z);m=zn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(As(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){zn.$.N.call(this),As(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function sa(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,sa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $u extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:sa(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){Nt.call(this),this.h=e,this.g={}}H(Fe,Nt);var Ii=[];function ia(e,t,n,r){Array.isArray(n)||(n&&(Ii[0]=n.toString()),n=Ii);for(var s=0;s<n.length;s++){var i=Yo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function oa(e){ms(e.g,function(t,n){this.g.hasOwnProperty(n)&&ys(t)},e),e.g={}}Fe.prototype.N=function(){Fe.$.N.call(this),oa(this)};Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hn(){this.g=!0}Hn.prototype.Ea=function(){this.g=!1};function qu(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function ju(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Jt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Hu(e,n)+(r?" "+r:"")})}function zu(e,t){e.info(function(){return"TIMEOUT: "+t})}Hn.prototype.info=function(){};function Hu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vs(n)}catch{return t}}var Qt={},Ai=null;function Kn(){return Ai=Ai||new z}Qt.Ta="serverreachability";function aa(e){tt.call(this,Qt.Ta,e)}H(aa,tt);function Ue(e){const t=Kn();W(t,new aa(t))}Qt.STAT_EVENT="statevent";function ca(e,t){tt.call(this,Qt.STAT_EVENT,e),this.stat=t}H(ca,tt);function st(e){const t=Kn();W(t,new ca(t,e))}Qt.Ua="timingevent";function la(e,t){tt.call(this,Qt.Ua,e),this.size=t}H(la,tt);function Qe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Gn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ua={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rs(){}Rs.prototype.h=null;function wi(e){return e.h||(e.h=e.i())}function ha(){}var We={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cs(){tt.call(this,"d")}H(Cs,tt);function Ps(){tt.call(this,"c")}H(Ps,tt);var $r;function Qn(){}H(Qn,Rs);Qn.prototype.g=function(){return new XMLHttpRequest};Qn.prototype.i=function(){return{}};$r=new Qn;function Xe(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Fe(this),this.P=Ku,e=xr?125:void 0,this.V=new zn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var Ku=45e3,qr={},Cn={};m=Xe.prototype;m.setTimeout=function(e){this.P=e};function jr(e,t,n){e.L=1,e.v=Xn(It(t)),e.s=n,e.S=!0,fa(e,null)}function fa(e,t){e.G=Date.now(),Ye(e),e.A=It(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),va(n.i,"t",r),e.C=0,n=e.l.J,e.h=new da,e.g=qa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $u(Z(e.Pa,e,e.g),e.O)),ia(e.U,e.g,"readystatechange",e.nb),t=e.I?Wo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ue(),qu(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const u=gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xr||this.g&&(this.h.h||this.g.ja()||Si(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Ue(3):Ue(2)),Wn(this);var n=this.g.da();this.ca=n;e:if(pa(this)){var r=Si(this.g);e="";var s=r.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Re(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ju(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oe(a)){var l=a;break e}}l=null}if(n=l)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,n);else{this.i=!1,this.o=3,st(12),xt(this),Re(this);break t}}this.S?(ga(this,u,o),xr&&this.i&&u==3&&(ia(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),zr(this,o)),u==4&&xt(this),this.i&&!this.J&&(u==4?Fa(this.l,this):(this.i=!1,Ye(this)))}else fh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),xt(this),Re(this)}}}catch{}finally{}};function pa(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ga(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=Gu(e,n),s==Cn){t==4&&(e.o=4,st(14),r=!1),Jt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==qr){e.o=4,st(15),Jt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Jt(e.j,e.m,s,null),zr(e,s);pa(e)&&s!=Cn&&s!=qr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ns(t),t.M=!0,st(11))):(Jt(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),Re(e))}m.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.C<t.length&&(Wn(this),ga(this,e,t),this.i&&e!=4&&Ye(this))}};function Gu(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Cn:(n=Number(t.substring(n,r)),isNaN(n)?qr:(r+=1,r+n>t.length?Cn:(t=t.slice(r,r+n),e.C=r+n,t)))}m.cancel=function(){this.J=!0,xt(this)};function Ye(e){e.Y=Date.now()+e.P,ma(e,e.P)}function ma(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Qe(Z(e.lb,e),t)}function Wn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(zu(this.j,this.A),this.L!=2&&(Ue(),st(17)),xt(this),this.o=2,Re(this)):ma(this,this.Y-e)};function Re(e){e.l.H==0||e.J||Fa(e.l,e)}function xt(e){Wn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,As(e.V),oa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function zr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Hr(n.i,e))){if(!e.K&&Hr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Vn(n),Zn(n);else break t;bs(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qe(Z(n.ib,n),6e3));if(1>=wa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lt(n,11)}else if((e.K||n.g==e)&&Vn(n),!Oe(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ss(i,i.h),i.h=null))}if(r.F){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,N(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=$a(r,r.J?r.pa:null,r.Y),o.K){Ra(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Wn(a),Ye(a)),r.g=o}else xa(r);0<n.j.length&&tr(n)}else l[0]!="stop"&&l[0]!="close"||Lt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Lt(n,7):ks(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ue(4)}catch{}}function Qu(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Bn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Wu(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Bn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function _a(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Bn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Wu(e),r=Qu(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,Pn(this,e.j),this.s=e.s,this.g=e.g,Sn(this,e.m),this.l=e.l;var t=e.i,n=new Be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ri(this,n),this.o=e.o}else e&&(t=String(e).match(ya))?(this.h=!1,Pn(this,t[1]||"",!0),this.s=ve(t[2]||""),this.g=ve(t[3]||"",!0),Sn(this,t[4]),this.l=ve(t[5]||"",!0),Ri(this,t[6]||"",!0),this.o=ve(t[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ie(t,Ci,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ie(t,Ci,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ie(n,n.charAt(0)=="/"?Zu:Ju,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ie(n,eh)),e.join("")};function It(e){return new Ut(e)}function Pn(e,t,n){e.j=n?ve(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Sn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ri(e,t,n){t instanceof Be?(e.i=t,nh(e.i,e.h)):(n||(t=Ie(t,th)),e.i=new Be(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Xn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ve(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ie(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Yu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ci=/[#\/\?@]/g,Ju=/[#\?:]/g,Zu=/[#\?]/g,th=/[#\?@]/g,eh=/#/g;function Be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&Xu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Be.prototype;m.add=function(e,t){Ot(this),this.i=null,e=fe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ea(e,t){Ot(e),t=fe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ta(e,t){return Ot(e),t=fe(e,t),e.g.has(t)}m.forEach=function(e,t){Ot(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};m.ta=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};m.Z=function(e){Ot(this);let t=[];if(typeof e=="string")Ta(this,e)&&(t=t.concat(this.g.get(fe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ot(this),this.i=null,e=fe(this,e),Ta(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function va(e,t,n){Ea(e,t),0<n.length&&(e.i=null,e.g.set(fe(e,t),ps(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function fe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function nh(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ea(this,r),va(this,s,n))},e)),e.j=t}var rh=class{constructor(e,t){this.g=e,this.map=t}};function Ia(e){this.l=e||sh,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sh=10;function Aa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function wa(e){return e.h?1:e.g?e.g.size:0}function Hr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ss(e,t){e.g?e.g.add(t):e.h=t}function Ra(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ia.prototype.cancel=function(){if(this.i=Ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ca(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ps(e.i)}var ih=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function oh(){this.g=new ih}function ah(e,t,n){const r=n||"";try{_a(e,function(s,i){let o=s;Ke(s)&&(o=vs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function ch(e,t){const n=new Hn;if(v.Image){const r=new Image;r.onload=cn(un,n,r,"TestLoadImage: loaded",!0,t),r.onerror=cn(un,n,r,"TestLoadImage: error",!1,t),r.onabort=cn(un,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=cn(un,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function un(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Je(e){this.l=e.fc||null,this.j=e.ob||!1}H(Je,Rs);Je.prototype.g=function(){return new Yn(this.l,this.j)};Je.prototype.i=function(e){return function(){return e}}({});function Yn(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Vs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Yn,z);var Vs=0;m=Yn.prototype;m.open=function(e,t){if(this.readyState!=Vs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$e(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=Vs};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Pa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ze(this):$e(this),this.readyState==3&&Pa(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,Ze(this))};m.Ya=function(e){this.g&&(this.response=e,Ze(this))};m.ka=function(){this.g&&Ze(this)};function Ze(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$e(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $e(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var lh=v.JSON.parse;function x(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sa,this.L=this.M=!1}H(x,z);var Sa="",uh=/^https?$/i,hh=["POST","PUT"];m=x.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$r.g(),this.C=this.u?wi(this.u):wi($r),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Pi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=v.FormData&&e instanceof v.FormData,!(0<=Ho(hh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ka(this),0<this.B&&((this.L=dh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=ws(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Pi(this,i)}};function dh(e){return oe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof fs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function Pi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Va(e),Jn(e)}function Va(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Jn(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),x.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Da(this):this.kb())};m.kb=function(){Da(this)};function Da(e){if(e.h&&typeof fs<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)ws(e.La,0,e);else if(W(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(ya)[1]||null;!s&&v.self&&v.self.location&&(s=v.self.location.protocol.slice(0,-1)),r=!uh.test(s?s.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var i=2<gt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Va(e)}}finally{Jn(e)}}}}function Jn(e,t){if(e.g){ka(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function ka(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),lh(t)}};function Si(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Sa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function fh(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Oe(e[r]))continue;var n=Fu(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}ku(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ba(e){let t="";return ms(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ds(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ba(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Na(e){this.Ga=0,this.j=[],this.l=new Hn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ee("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ee("baseRetryDelayMs",5e3,e),this.hb=Ee("retryDelaySeedMs",1e4,e),this.eb=Ee("forwardChannelMaxRetries",2,e),this.xa=Ee("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ia(e&&e.concurrentRequestLimit),this.Ja=new oh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=Na.prototype;m.ra=8;m.H=1;function ks(e){if(Oa(e),e.H==3){var t=e.W++,n=It(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),tn(e,n),t=new Xe(e,e.l,t),t.L=2,t.v=Xn(It(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=qa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ye(t)}Ba(e)}function Zn(e){e.g&&(Ns(e),e.g.cancel(),e.g=null)}function Oa(e){Zn(e),e.u&&(v.clearTimeout(e.u),e.u=null),Vn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function tr(e){if(!Aa(e.i)&&!e.m){e.m=!0;var t=e.Na;xe||ra(),Le||(xe(),Le=!0),Is.add(t,e),e.C=0}}function ph(e,t){return wa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Qe(Z(e.Na,e,t),Ua(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Xe(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Wo(i),Xo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ma(this,s,t),n=It(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),tn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ba(i)))+"&"+t:this.o&&Ds(n,this.o,i)),Ss(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,jr(s,n,null)):jr(s,n,t),this.H=2}}else this.H==3&&(e?Vi(this,e):this.j.length==0||Aa(this.i)||Vi(this))};function Vi(e,t){var n;t?n=t.m:n=e.W++;const r=It(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),tn(e,r),e.o&&e.s&&Ds(r,e.o,e.s),n=new Xe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ma(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ss(e.i,n),jr(n,r,t)}function tn(e,t){e.na&&ms(e.na,function(n,r){N(t,r,n)}),e.h&&_a({},function(n,r){N(t,r,n)})}function Ma(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Z(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{ah(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function xa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;xe||ra(),Le||(xe(),Le=!0),Is.add(t,e),e.A=0}}function bs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Qe(Z(e.Ma,e),Ua(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,La(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Qe(Z(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Zn(this),La(this))};function Ns(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function La(e){e.g=new Xe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=It(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),tn(e,t),e.o&&e.s&&Ds(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Xn(It(t)),n.s=null,n.S=!0,fa(n,e)}m.ib=function(){this.v!=null&&(this.v=null,Zn(this),bs(this),st(19))};function Vn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Fa(e,t){var n=null;if(e.g==t){Vn(e),Ns(e),e.g=null;var r=2}else if(Hr(e.i,t))n=t.F,Ra(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Kn(),W(r,new la(r,n)),tr(e)}else xa(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&ph(e,t)||r==2&&bs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function Ua(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Lt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Z(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Pn(n,"https"),Xn(n)),ch(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),Ba(e),Oa(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function Ba(e){if(e.H=0,e.ma=[],e.h){const t=Ca(e.i);(t.length!=0||e.j.length!=0)&&(Ei(e.ma,t),Ei(e.ma,e.j),e.i.i.length=0,ps(e.j),e.j.length=0),e.h.ya()}}function $a(e,t,n){var r=n instanceof Ut?It(n):new Ut(n);if(r.g!="")t&&(r.g=t+"."+r.g),Sn(r,r.m);else{var s=v.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ut(null);r&&Pn(i,r),t&&(i.g=t),s&&Sn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),tn(e,r),r}function qa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new x(new Je({ob:!0})):new x(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function ja(){}m=ja.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Dn(){if(oe&&!(10<=Number(Pu)))throw Error("Environmental error: no available transport.")}Dn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){z.call(this),this.g=new Na(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Oe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Oe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pe(this)}H(lt,z);lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=$a(e,null,e.Y),tr(e)};lt.prototype.close=function(){ks(this.g)};lt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=vs(e),e=n);t.j.push(new rh(t.fb++,e)),t.H==3&&tr(t)};lt.prototype.N=function(){this.g.h=null,delete this.j,ks(this.g),delete this.g,lt.$.N.call(this)};function za(e){Cs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(za,Cs);function Ha(){Ps.call(this),this.status=1}H(Ha,Ps);function pe(e){this.g=e}H(pe,ja);pe.prototype.Ba=function(){W(this.g,"a")};pe.prototype.Aa=function(e){W(this.g,new za(e))};pe.prototype.za=function(e){W(this.g,new Ha)};pe.prototype.ya=function(){W(this.g,"b")};function gh(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}H(dt,gh);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)vr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){vr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){vr(this,r),s=0;break}}this.h=s,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function k(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var mh={};function Os(e){return-128<=e&&128>e?wu(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return Zt;if(0>e)return Q(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Kr;return new k(t,0)}function Ka(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Q(Ka(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=Zt,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=mt(Math.pow(t,i)),r=r.R(i).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var Kr=4294967296,Zt=Os(0),Gr=Os(1),Di=Os(16777216);m=k.prototype;m.ea=function(){if(ut(this))return-Q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Kr+r)*t,t*=Kr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(vt(this))return"0";if(ut(this))return"-"+Q(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var s=bn(n,t).g;n=kn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,vt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function vt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ut(e){return e.h==-1}m.X=function(e){return e=kn(this,e),ut(e)?-1:vt(e)?0:1};function Q(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new k(n,~e.h).add(Gr)}m.abs=function(){return ut(this)?Q(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new k(n,n[n.length-1]&-2147483648?-1:0)};function kn(e,t){return e.add(Q(t))}m.R=function(e){if(vt(this)||vt(e))return Zt;if(ut(this))return ut(e)?Q(this).R(Q(e)):Q(Q(this).R(e));if(ut(e))return Q(this.R(Q(e)));if(0>this.X(Di)&&0>e.X(Di))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,hn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,hn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,hn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,hn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new k(n,0)};function hn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Te(e,t){this.g=e,this.h=t}function bn(e,t){if(vt(t))throw Error("division by zero");if(vt(e))return new Te(Zt,Zt);if(ut(e))return t=bn(Q(e),t),new Te(Q(t.g),Q(t.h));if(ut(t))return t=bn(e,Q(t)),new Te(Q(t.g),t.h);if(30<e.g.length){if(ut(e)||ut(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Gr,r=t;0>=r.X(e);)n=ki(n),r=ki(r);var s=Wt(n,1),i=Wt(r,1);for(r=Wt(r,2),n=Wt(n,2);!vt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Wt(r,1),n=Wt(n,1)}return t=kn(e,s.R(t)),new Te(s,t)}for(s=Zt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=mt(n),o=i.R(t);ut(o)||0<o.X(e);)n-=r,i=mt(n),o=i.R(t);vt(i)&&(i=Gr),s=s.add(i),e=kn(e,o)}return new Te(s,e)}m.gb=function(e){return bn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new k(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new k(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new k(n,this.h^e.h)};function ki(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new k(n,e.h)}function Wt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new k(s,e.h)}Dn.prototype.createWebChannel=Dn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Gn.NO_ERROR=0;Gn.TIMEOUT=8;Gn.HTTP_ERROR=6;ua.COMPLETE="complete";ha.EventType=We;We.OPEN="a";We.CLOSE="b";We.ERROR="c";We.MESSAGE="d";z.prototype.listen=z.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=mt;k.fromString=Ka;var _h=function(){return new Dn},yh=function(){return Kn()},Ir=Gn,Eh=ua,Th=Qt,bi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vh=Je,dn=ha,Ih=x,Ah=dt,te=k;const Ni="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new xo("@firebase/firestore");function Oi(){return zt.logLevel}function _(e,...t){if(zt.logLevel<=V.DEBUG){const n=t.map(Ms);zt.debug(`Firestore (${ge}): ${e}`,...n)}}function At(e,...t){if(zt.logLevel<=V.ERROR){const n=t.map(Ms);zt.error(`Firestore (${ge}): ${e}`,...n)}}function ae(e,...t){if(zt.logLevel<=V.WARN){const n=t.map(Ms);zt.warn(`Firestore (${ge}): ${e}`,...n)}}function Ms(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+e;throw At(t),new Error(t)}function q(e,t){e||A()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Gt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Rh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ch{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new Ga(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return q(t===null||typeof t=="string"),new Y(t)}}class Ph{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ph(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(q(typeof n.token=="string"),this.R=n.token,new Vh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=kh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function ce(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new ct(0,0))}static max(){return new I(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n,r){n===void 0?n=0:n>t.length&&A(),r===void 0?r=t.length-n:r>t.length-n&&A(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof qe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends qe{construct(t,n,r){return new M(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Nh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends qe{construct(t,n,r){return new at(t,n,r)}static isValidIdentifier(t){return Nh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(M.fromString(t))}static fromName(t){return new T(M.fromString(t).popFirst(5))}static empty(){return new T(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new M(t.slice()))}}function Oh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=I.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Dt(s,T.empty(),t)}function Mh(e){return new Dt(e.readTime,e.key,-1)}class Dt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Dt(I.min(),T.empty(),-1)}static max(){return new Dt(I.max(),T.empty(),-1)}}function xh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==Lh)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(s=>s?f.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new f((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new f((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function en(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ls.ae=-1;function er(e){return e==null}function Qr(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Uh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fn(this.root,t,this.comparator,!0)}}class fn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??G.RED,this.left=s??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new G(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return G.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,n,r,s,i){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new xi(this.data.getIterator())}getIteratorFrom(t){return new xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Rt([])}unionWith(t){let n=new et(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qa("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Bh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(e){if(q(!!e),typeof e=="string"){let t=0;const n=Bh.exec(e);if(q(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:B(e.seconds),nanos:B(e.nanos)}}function B(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Us(e){const t=e.mapValue.fields.__previous_value__;return Fs(t)?Us(t):t}function je(e){const t=kt(e.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Fs(e)?4:qh(e)?9007199254740991:10:A()}function _t(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return je(e).isEqual(je(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kt(s.timestampValue),a=kt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return B(s.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return B(s.integerValue)===B(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=B(s.doubleValue),a=B(i.doubleValue);return o===a?Qr(o)===Qr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ce(e.arrayValue.values||[],t.arrayValue.values||[],_t);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Mi(o)!==Mi(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!_t(o[c],a[c])))return!1;return!0}(e,t);default:return A()}}function He(e,t){return(e.values||[]).find(n=>_t(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=Kt(e),r=Kt(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=B(i.integerValue||i.doubleValue),c=B(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Li(e.timestampValue,t.timestampValue);case 4:return Li(je(e),je(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Ht(i),c=Ht(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=D(a[l],c[l]);if(u!==0)return u}return D(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(B(i.latitude),B(o.latitude));return a!==0?a:D(B(i.longitude),B(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=le(a[l],c[l]);if(u)return u}return D(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===pn.mapValue&&o===pn.mapValue)return 0;if(i===pn.mapValue)return 1;if(o===pn.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=D(c[h],u[h]);if(d!==0)return d;const p=le(a[c[h]],l[u[h]]);if(p!==0)return p}return D(c.length,u.length)}(e.mapValue,t.mapValue);default:throw A()}}function Li(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=kt(e),r=kt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function ue(e){return Wr(e)}function Wr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=kt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ht(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wr(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wr(n.fields[o])}`;return s+"}"}(e.mapValue):A()}function Xr(e){return!!e&&"integerValue"in e}function Bs(e){return!!e&&"arrayValue"in e}function Fi(e){return!!e&&"nullValue"in e}function Ui(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ar(e){return!!e&&"mapValue"in e}function Ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return nr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ce(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ar(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(n)}setAll(t){let n=at.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ce(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ar(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){nr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new pt(Ce(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,I.min(),I.min(),I.min(),pt.empty(),0)}static newFoundDocument(t,n,r,s){return new J(t,1,n,I.min(),r,s,0)}static newNoDocument(t,n){return new J(t,2,n,I.min(),I.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new J(t,3,n,I.min(),I.min(),pt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,n){this.position=t,this.inclusive=n}}function Bi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=le(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $i(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_t(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n="asc"){this.field=t,this.dir=n}}function jh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{}class $ extends Wa{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Hh(t,n,r):n==="array-contains"?new Qh(t,r):n==="in"?new Wh(t,r):n==="not-in"?new Xh(t,r):n==="array-contains-any"?new Yh(t,r):new $(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Kh(t,r):new Gh(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(le(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(le(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yt extends Wa{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new yt(t,n)}matches(t){return Xa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Xa(e){return e.op==="and"}function Ya(e){return zh(e)&&Xa(e)}function zh(e){for(const t of e.filters)if(t instanceof yt)return!1;return!0}function Yr(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+ue(e.value);if(Ya(e))return e.filters.map(t=>Yr(t)).join(",");{const t=e.filters.map(n=>Yr(n)).join(",");return`${e.op}(${t})`}}function Ja(e,t){return e instanceof $?function(r,s){return s instanceof $&&r.op===s.op&&r.field.isEqual(s.field)&&_t(r.value,s.value)}(e,t):e instanceof yt?function(r,s){return s instanceof yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ja(o,s.filters[a]),!0):!1}(e,t):void A()}function Za(e){return e instanceof $?function(n){return`${n.field.canonicalString()} ${n.op} ${ue(n.value)}`}(e):e instanceof yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Za).join(" ,")+"}"}(e):"Filter"}class Hh extends ${constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Kh extends ${constructor(t,n){super(t,"in",n),this.keys=tc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Gh extends ${constructor(t,n){super(t,"not-in",n),this.keys=tc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function tc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class Qh extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bs(n)&&He(n.arrayValue,this.value)}}class Wh extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&He(this.value.arrayValue,n)}}class Xh extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!He(this.value.arrayValue,n)}}class Yh extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>He(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function qi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Jh(e,t,n,r,s,i,o)}function $s(e){const t=S(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Yr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),er(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ue(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ue(r)).join(",")),t.he=n}return t.he}function qs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!jh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ja(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$i(e.startAt,t.startAt)&&$i(e.endAt,t.endAt)}function Jr(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Zh(e,t,n,r,s,i,o,a){return new rr(e,t,n,r,s,i,o,a)}function ec(e){return new rr(e)}function ji(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function td(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ed(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function nd(e){return e.collectionGroup!==null}function ee(e){const t=S(e);if(t.Pe===null){t.Pe=[];const n=ed(t),r=td(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Pe(n)),t.Pe.push(new Pe(at.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Pe(at.keyField(),i))}}}return t.Pe}function wt(e){const t=S(e);if(!t.Ie)if(t.limitType==="F")t.Ie=qi(t.path,t.collectionGroup,ee(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of ee(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Pe(i.field,o))}const r=t.endAt?new Nn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Nn(t.startAt.position,t.startAt.inclusive):null;t.Ie=qi(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function Zr(e,t,n){return new rr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sr(e,t){return qs(wt(e),wt(t))&&e.limitType===t.limitType}function nc(e){return`${$s(wt(e))}|lt:${e.limitType}`}function ts(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Za(s)).join(", ")}]`),er(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ue(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ue(s)).join(",")),`Target(${r})`}(wt(e))}; limitType=${e.limitType})`}function ir(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):T.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ee(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Bi(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ee(r),s)||r.endAt&&!function(o,a,c){const l=Bi(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ee(r),s))}(e,t)}function rd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function rc(e){return(t,n)=>{let r=!1;for(const s of ee(e)){const i=sd(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sd(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?le(c,l):A()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){nr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Uh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new L(T.comparator);function bt(){return id}const sc=new L(T.comparator);function Ae(...e){let t=sc;for(const n of e)t=t.insert(n.key,n);return t}function od(e){let t=sc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ft(){return Se()}function ic(){return Se()}function Se(){return new me(e=>e.toString(),(e,t)=>e.isEqual(t))}const ad=new et(T.comparator);function P(...e){let t=ad;for(const n of e)t=t.add(n);return t}const cd=new et(D);function ld(){return cd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(t)?"-0":t}}function hd(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this._=void 0}}function dd(e,t,n){return e instanceof es?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fs(i)&&(i=Us(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof On?oc(e,t):e instanceof Mn?ac(e,t):function(s,i){const o=pd(s,i),a=zi(o)+zi(s.Te);return Xr(o)&&Xr(s.Te)?hd(a):ud(s.serializer,a)}(e,t)}function fd(e,t,n){return e instanceof On?oc(e,t):e instanceof Mn?ac(e,t):n}function pd(e,t){return e instanceof ns?function(r){return Xr(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class es extends or{}class On extends or{constructor(t){super(),this.elements=t}}function oc(e,t){const n=cc(t);for(const r of e.elements)n.some(s=>_t(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mn extends or{constructor(t){super(),this.elements=t}}function ac(e,t){let n=cc(t);for(const r of e.elements)n=n.filter(s=>!_t(s,r));return{arrayValue:{values:n}}}class ns extends or{constructor(t,n){super(),this.serializer=t,this.Te=n}}function zi(e){return B(e.integerValue||e.doubleValue)}function cc(e){return Bs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function gd(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof On&&s instanceof On||r instanceof Mn&&s instanceof Mn?ce(r.elements,s.elements,_t):r instanceof ns&&s instanceof ns?_t(r.Te,s.Te):r instanceof es&&s instanceof es}(e.transform,t.transform)}class $t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new $t}static exists(t){return new $t(void 0,t)}static updateTime(t){return new $t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function En(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class js{}function lc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _d(e.key,$t.none()):new zs(e.key,e.data,$t.none());{const n=e.data,r=pt.empty();let s=new et(at.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(e.key,r,new Rt(s.toArray()),$t.none())}}function md(e,t,n){e instanceof zs?function(s,i,o){const a=s.value.clone(),c=Ki(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ar?function(s,i,o){if(!En(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ki(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(uc(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ve(e,t,n,r){return e instanceof zs?function(i,o,a,c){if(!En(i.precondition,o))return a;const l=i.value.clone(),u=Gi(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof ar?function(i,o,a,c){if(!En(i.precondition,o))return a;const l=Gi(i.fieldTransforms,c,o),u=o.data;return u.setAll(uc(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return En(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Hi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ce(r,s,(i,o)=>gd(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class zs extends js{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends js{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ki(e,t,n){const r=new Map;q(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,fd(o,a,n[s]))}return r}function Gi(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dd(i,o,t))}return r}class _d extends js{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&md(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ve(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ve(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ic();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=lc(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(n,r)=>Hi(n,r))&&ce(this.baseMutations,t.baseMutations,(n,r)=>Hi(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U,C;function hc(e){if(e===void 0)return At("GRPC error has no .code"),g.UNKNOWN;switch(e){case U.OK:return g.OK;case U.CANCELLED:return g.CANCELLED;case U.UNKNOWN:return g.UNKNOWN;case U.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case U.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case U.INTERNAL:return g.INTERNAL;case U.UNAVAILABLE:return g.UNAVAILABLE;case U.UNAUTHENTICATED:return g.UNAUTHENTICATED;case U.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case U.NOT_FOUND:return g.NOT_FOUND;case U.ALREADY_EXISTS:return g.ALREADY_EXISTS;case U.PERMISSION_DENIED:return g.PERMISSION_DENIED;case U.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case U.ABORTED:return g.ABORTED;case U.OUT_OF_RANGE:return g.OUT_OF_RANGE;case U.UNIMPLEMENTED:return g.UNIMPLEMENTED;case U.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(C=U||(U={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gn}static getOrCreateInstance(){return gn===null&&(gn=new Hs),gn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let gn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new te([4294967295,4294967295],0);function Qi(e){const t=vd().encode(e),n=new Ah;return n.update(t),new Uint8Array(n.digest())}function Wi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new te([n,r],0),new te([s,i],0)]}class Ks{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new we(`Invalid padding: ${n}`);if(r<0)throw new we(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new we(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new we(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=te.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(te.fromNumber(r)));return s.compare(Id)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Qi(t),[r,s]=Wi(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ks(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Qi(t),[r,s]=Wi(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class we extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new cr(I.min(),s,new L(D),bt(),P())}}class nn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new nn(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class dc{constructor(t,n){this.targetId=t,this.pe=n}}class fc{constructor(t,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xi{constructor(){this.ye=0,this.we=Ji(),this.Se=nt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=P(),n=P(),r=P();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:A()}}),new nn(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Ji()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ad{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=bt(),this.$e=Yi(),this.Ue=new L(D)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Jr(a))if(i===0){const c=new T(a.path);this.ze(s,c,J.newNoDocument(c,I.min()))}else q(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(t,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Hs.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,w){var R,E,O,rt,F,b;const it={localCacheCount:p,existenceFilterCount:w.count},K=w.unchangedNames;return K&&(it.bloomFilter={applied:h===0,hashCount:(R=K==null?void 0:K.hashCount)!==null&&R!==void 0?R:0,bitmapLength:(rt=(O=(E=K==null?void 0:K.bits)===null||E===void 0?void 0:E.bitmap)===null||O===void 0?void 0:O.length)!==null&&rt!==void 0?rt:0,padding:(b=(F=K==null?void 0:K.bits)===null||F===void 0?void 0:F.padding)!==null&&b!==void 0?b:0},d&&(it.bloomFilter.mightContain=d)),it}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Ht(i).toUint8Array()}catch(h){if(h instanceof Qa)return ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Ks(c,o,a)}catch(h){return ae(h instanceof we?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Jr(a.target)){const c=new T(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,J.newNoDocument(c,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=P();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new cr(t,n,this.Ue,this.Ke,r);return this.Ke=bt(),this.$e=Yi(),this.Ue=new L(D),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Xi,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new et(D),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Xi),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Yi(){return new L(T.comparator)}function Ji(){return new L(T.comparator)}const wd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cd=(()=>({and:"AND",or:"OR"}))();class Pd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function rs(e,t){return e.useProto3Json||er(t)?t:{value:t}}function Sd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ne(e){return q(!!e),I.fromTimestamp(function(n){const r=kt(n);return new ct(r.seconds,r.nanos)}(e))}function Dd(e,t){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function pc(e){const t=M.fromString(e);return q(yc(t)),t}function wr(e,t){const n=pc(t);if(n.get(1)!==e.databaseId.projectId)throw new y(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(gc(n))}function ss(e,t){return Dd(e.databaseId,t)}function kd(e){const t=pc(e);return t.length===4?M.emptyPath():gc(t)}function Zi(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gc(e){return q(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function bd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(q(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(q(u===void 0||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?g.UNKNOWN:hc(l.code);return new y(u,l.message||"")}(o);n=new fc(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=wr(e,r.document.name),i=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):I.min(),a=new pt({mapValue:{fields:r.document.fields}}),c=J.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Tn(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=wr(e,r.document),i=r.readTime?ne(r.readTime):I.min(),o=J.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Tn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=wr(e,r.document),i=r.removedTargetIds||[];n=new Tn([],i,s,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Td(s,i),a=r.targetId;n=new dc(a,o)}}return n}function Nd(e,t){return{documents:[ss(e,t.path)]}}function Od(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ss(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ss(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return _c(yt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Xt(h.field),direction:Ld(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=rs(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Md(e){let t=kd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){q(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=mc(h);return d instanceof yt&&Ya(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(w){return new Pe(Yt(w.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,er(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Nn(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Nn(p,d)}(n.endAt)),Zh(t,s,o,i,a,"F",c,l)}function xd(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function mc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yt(n.unaryFilter.field);return $.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(n.unaryFilter.field);return $.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(n.unaryFilter.field);return $.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yt(n.unaryFilter.field);return $.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(n){return $.create(Yt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return yt.create(n.compositeFilter.filters.map(r=>mc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(n.compositeFilter.op))}(e):A()}function Ld(e){return wd[e]}function Fd(e){return Rd[e]}function Ud(e){return Cd[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return at.fromServerFormat(e.fieldPath)}function _c(e){return e instanceof $?function(n){if(n.op==="=="){if(Ui(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NAN"}};if(Fi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ui(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NAN"}};if(Fi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(n.field),op:Fd(n.op),value:n.value}}}(e):e instanceof yt?function(n){const r=n.getFilters().map(s=>_c(s));return r.length===1?r[0]:{compositeFilter:{op:Ud(n.op),filters:r}}}(e):A()}function yc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n,r,s,i=I.min(),o=I.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ct(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.ct=t}}function $d(e){const t=Md({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.sn=new jd}addToCollectionParentIndex(t,n){return this.sn.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Dt.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class jd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new et(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new et(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new he(0)}static On(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.changes=new me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ve(r.mutation,s,Rt.empty(),ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const s=Ft();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ae();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ft();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=bt();const o=Se(),a=function(){return Se()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ar)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ve(u.mutation,l,u.mutation.getFieldMask(),ct.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Hd(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Se();let s=new L((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||P()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ic();u.forEach(d=>{if(!i.has(d)){const p=lc(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):f.resolve(Ft());let a=-1,c=i;return o.next(l=>f.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?f.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,P())).next(u=>({batchId:a,changes:od(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let s=Ae();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Ae();return this.indexManager.getCollectionParents(t,s).next(o=>f.forEach(o,a=>{const c=function(u,h){return new rr(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,J.newInvalidDocument(l)))});let o=Ae();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ve(l.mutation,c,Rt.empty(),ct.now()),ir(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return f.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ne(s.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:$d(s.bundledQuery),readTime:ne(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.overlays=new L(T.comparator),this.cr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ft();return f.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const s=Ft(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return f.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new L((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ft(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return f.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ed(n,r));let i=this.cr.get(n);i===void 0&&(i=P(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.lr=new et(j.hr),this.Pr=new et(j.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new j(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new j(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new T(new M([])),r=new j(n,t),s=new j(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new T(new M([])),r=new j(n,t),s=new j(n,t+1);let i=P();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new j(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class j{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return T.comparator(t.key,n.key)||D(t.mr,n.mr)}static Ir(t,n){return D(t.mr,n.mr)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new et(j.hr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new j(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new j(n,0),s=new j(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(D);return n.forEach(s=>{const i=new j(s,0),o=new j(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),f.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;T.isDocumentKey(i)||(i=i.child(""));const o=new j(new T(i),0);let a=new et(D);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),f.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){q(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return f.forEach(n.mutations,s=>{const i=new j(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new j(n,0),s=this.pr.firstAfterOrEqual(r);return f.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.Dr=t,this.docs=function(){return new L(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():J.newInvalidDocument(n))}getEntries(t,n){let r=bt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():J.newInvalidDocument(s))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=bt();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||xh(Mh(u),r)<=0||(s.has(u.key)||ir(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,r,s){A()}vr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Yd(this)}getSize(t){return f.resolve(this.size)}}class Yd extends zd{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.persistence=t,this.Cr=new me(n=>$s(n),qs),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Gs,this.targetCount=0,this.Or=he.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),f.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new he(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Ln(n),f.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Ls(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Jd(this),this.indexManager=new qd,this.remoteDocumentCache=function(s){return new Xd(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Bd(n),this.Qr=new Gd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Qd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Wd(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const s=new tf(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return f.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class tf extends Fh{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.Wr=new Gs,this.Gr=null}static zr(t){return new Qs(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),f.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.jr,r=>{const s=T.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,I.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return f.or([()=>f.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=P(),s=P();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ws(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(ji(n))return f.resolve(null);let r=wt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zr(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=P(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,Zr(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,s){return ji(n)||s.isEqual(I.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(Oi()<=V.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ts(n)),this.ji(t,o,n,Oh(s,-1)))})}Gi(t,n){let r=new et(rc(t));return n.forEach((s,i)=>{ir(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return Oi()<=V.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ts(n)),this.Ki.getDocumentsMatchingQuery(t,n,Dt.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new L(D),this.Yi=new me(i=>$s(i),qs),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kd(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function rf(e,t,n,r){return new nf(e,t,n,r)}async function Ec(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=P();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function Tc(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function sf(e,t){const n=S(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(R,E,O){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,p,u)&&a.push(n.kr.updateTargetData(i,p))});let c=bt(),l=P();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(of(i,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(I.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function of(e,t,n){let r=P(),s=P();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=bt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(I.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function af(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,f.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Ct(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function is(e,t,n){const r=S(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!en(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function to(e,t,n){const r=S(e);let s=I.min(),i=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=S(c),d=h.Yi.get(u);return d!==void 0?f.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,wt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:I.min(),n?i:P())).next(a=>(cf(r,rd(t),a),{documents:a,ss:i})))}function cf(e,t,n){let r=e.Zi.get(t)||I.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class eo{constructor(){this.activeTargetIds=ld()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lf{constructor(){this.Hs=new eo,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new eo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn=null;function Rr(){return mn===null?mn=function(){return 268435456+Math.round(2147483648*Math.random())}():mn++,"0x"+mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class ff extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,s,i,o){const a=Rr(),c=this.Vo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={};return this.mo(l,i,o),this.fo(n,c,l,s).then(u=>(_("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ae("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}po(n,r,s,i,o,a){return this.Ro(n,r,s,i,o)}mo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Vo(n,r){const s=hf[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,n,r,s){const i=Rr();return new Promise((o,a)=>{const c=new Ih;c.setWithCredentials(!0),c.listenOnce(Eh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ir.NO_ERROR:const u=c.getResponseJson();_(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ir.TIMEOUT:_(X,`RPC '${t}' ${i} timed out`),a(new y(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const h=c.getStatus();if(_(X,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const w=function(E){const O=E.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(O)>=0?O:g.UNKNOWN}(p.status);a(new y(w,p.message))}else a(new y(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(X,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);_(X,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}yo(t,n,r){const s=Rr(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=_h(),a=yh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new vh({})),this.mo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");_(X,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const w=new df({so:E=>{p?_(X,`Not sending because RPC '${t}' stream ${s} is closed:`,E):(d||(_(X,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),_(X,`RPC '${t}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),R=(E,O,rt)=>{E.listen(O,F=>{try{rt(F)}catch(b){setTimeout(()=>{throw b},0)}})};return R(h,dn.EventType.OPEN,()=>{p||_(X,`RPC '${t}' stream ${s} transport opened.`)}),R(h,dn.EventType.CLOSE,()=>{p||(p=!0,_(X,`RPC '${t}' stream ${s} transport closed`),w.Po())}),R(h,dn.EventType.ERROR,E=>{p||(p=!0,ae(X,`RPC '${t}' stream ${s} transport errored:`,E),w.Po(new y(g.UNAVAILABLE,"The operation could not be completed")))}),R(h,dn.EventType.MESSAGE,E=>{var O;if(!p){const rt=E.data[0];q(!!rt);const F=rt,b=F.error||((O=F[0])===null||O===void 0?void 0:O.error);if(b){_(X,`RPC '${t}' stream ${s} received error:`,b);const it=b.status;let K=function(jc){const ri=U[jc];if(ri!==void 0)return hc(ri)}(it),on=b.message;K===void 0&&(K=g.INTERNAL,on="Unknown error status: "+it+" with message "+b.message),p=!0,w.Po(new y(K,on)),h.close()}else _(X,`RPC '${t}' stream ${s} received:`,rt),w.Io(rt)}}),R(a,Th.STAT_EVENT,E=>{E.stat===bi.PROXY?_(X,`RPC '${t}' stream ${s} detected buffering proxy`):E.stat===bi.NOPROXY&&_(X,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.ho()},0),w}}function Cr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e){return new Pd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.wo=r,this.So=s,this.bo=i,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n,r,s,i,o,a,c){this.ii=t,this.No=r,this.Bo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Ic(t,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Lo===n&&this.Xo(r,s)},r=>{t(()=>{const s=new y(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(s)})})}Xo(t,n){const r=this.Zo(this.Lo);this.stream=this.t_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.e_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return n=>{this.ii.enqueueAndForget(()=>this.Lo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gf extends pf{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}t_(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.Qo.reset();const n=bd(this.serializer,t),r=function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?ne(o.readTime):I.min()}(t);return this.listener.n_(n,r)}r_(t){const n={};n.database=Zi(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Jr(c)?{documents:Nd(i,c)}:{query:Od(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vd(i,o.resumeToken);const l=rs(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=Sd(i,o.snapshotVersion.toTimestamp());const l=rs(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=xd(this.serializer,t);r&&(n.labels=r),this.jo(n)}i_(t){const n={};n.database=Zi(this.serializer),n.removeTarget=t,this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.l_=!1}h_(){if(this.l_)throw new y(g.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ro(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(g.UNKNOWN,s.toString())})}po(t,n,r,s){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.po(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(g.UNKNOWN,i.toString())})}terminate(){this.l_=!0}}class _f{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(At(n),this.E_=!1):_("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=i,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{sn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=S(c);l.p_.add(4),await rn(l),l.S_.set("Unknown"),l.p_.delete(4),await lr(l)}(this))})}),this.S_=new _f(r,s)}}async function lr(e){if(sn(e))for(const t of e.y_)await t(!0)}async function rn(e){for(const t of e.y_)await t(!1)}function Ac(e,t){const n=S(e);n.g_.has(t.targetId)||(n.g_.set(t.targetId,t),Js(n)?Ys(n):_e(n).$o()&&Xs(n,t))}function wc(e,t){const n=S(e),r=_e(n);n.g_.delete(t),r.$o()&&Rc(n,t),n.g_.size===0&&(r.$o()?r.Go():sn(n)&&n.S_.set("Unknown"))}function Xs(e,t){if(e.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}_e(e).r_(t)}function Rc(e,t){e.b_.Be(t),_e(e).i_(t)}function Ys(e){e.b_=new Ad({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.g_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),_e(e).start(),e.S_.d_()}function Js(e){return sn(e)&&!_e(e).Ko()&&e.g_.size>0}function sn(e){return S(e).p_.size===0}function Cc(e){e.b_=void 0}async function Ef(e){e.g_.forEach((t,n)=>{Xs(e,t)})}async function Tf(e,t){Cc(e),Js(e)?(e.S_.V_(t),Ys(e)):e.S_.set("Unknown")}async function vf(e,t,n){if(e.S_.set("Online"),t instanceof fc&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.g_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.g_.delete(a),s.b_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ro(e,r)}else if(t instanceof Tn?e.b_.We(t):t instanceof dc?e.b_.Ze(t):e.b_.je(t),!n.isEqual(I.min()))try{const r=await Tc(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.b_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.g_.get(l);u&&i.g_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.g_.get(c);if(!u)return;i.g_.set(c,u.withResumeToken(nt.EMPTY_BYTE_STRING,u.snapshotVersion)),Rc(i,c);const h=new Ct(u.target,c,l,u.sequenceNumber);Xs(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await ro(e,r)}}async function ro(e,t,n){if(!en(t))throw t;e.p_.add(1),await rn(e),e.S_.set("Offline"),n||(n=()=>Tc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.p_.delete(1),await lr(e)})}async function so(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=sn(n);n.p_.add(3),await rn(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.p_.delete(3),await lr(n)}async function If(e,t){const n=S(e);t?(n.p_.delete(2),await lr(n)):t||(n.p_.add(2),await rn(n),n.S_.set("Unknown"))}function _e(e){return e.D_||(e.D_=function(n,r,s){const i=S(n);return i.h_(),new gf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:Ef.bind(null,e),uo:Tf.bind(null,e),n_:vf.bind(null,e)}),e.y_.push(async t=>{t?(e.D_.Wo(),Js(e)?Ys(e):e.S_.set("Unknown")):(await e.D_.stop(),Cc(e))})),e.D_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Zs(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pc(e,t){if(At("AsyncQueue",`${t}: ${e}`),en(e))return new y(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t?(n,r)=>t(n,r)||T.comparator(n.key,r.key):(n,r)=>T.comparator(n.key,r.key),this.keyedMap=Ae(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.C_=new L(T.comparator)}track(t){const n=t.doc.key,r=this.C_.get(n);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(n,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(n):t.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):A():this.C_=this.C_.insert(n,t)}F_(){const t=[];return this.C_.inorderTraversal((n,r)=>{t.push(r)}),t}}class de{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new de(t,n,re.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.M_=void 0,this.listeners=[]}}class wf{constructor(){this.queries=new me(t=>nc(t),sr),this.onlineState="Unknown",this.x_=new Set}}async function Rf(e,t){const n=S(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Af),s)try{i.M_=await n.onListen(r)}catch(o){const a=Pc(o,`Initialization of query '${ts(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.O_(n.onlineState),i.M_&&t.N_(i.M_)&&ti(n)}async function Cf(e,t){const n=S(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Pf(e,t){const n=S(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.N_(s)&&(r=!0);o.M_=s}}r&&ti(n)}function Sf(e,t,n){const r=S(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ti(e){e.x_.forEach(t=>{t.next()})}class Vf{constructor(t,n,r){this.query=t,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new de(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.L_?this.q_(t)&&(this.B_.next(t),n=!0):this.Q_(t,this.onlineState)&&(this.K_(t),n=!0),this.k_=t,n}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),n=!0),n}Q_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(t){t=de.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.key=t}}class Vc{constructor(t){this.key=t}}class Df{constructor(t,n){this.query=t,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=P(),this.mutatedKeys=P(),this.ta=rc(t),this.na=new re(this.ta)}get ra(){return this.Z_}ia(t,n){const r=n?n.sa:new io,s=n?n.na:this.na;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),p=ir(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?w!==R&&(r.track({type:3,doc:p}),E=!0):this.oa(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.ta(p,c)>0||l&&this.ta(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:i}}oa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const i=t.sa.F_();i.sort((l,u)=>function(d,p){const w=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return w(d)-w(p)}(l.type,u.type)||this.ta(l.doc,u.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,i.length!==0||c?{snapshot:new de(this.query,t.na,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new io,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=P(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return t.forEach(r=>{this.ea.has(r)||n.push(new Vc(r))}),this.ea.forEach(r=>{t.has(r)||n.push(new Sc(r))}),n}la(t){this.Z_=t.ss,this.ea=P();const n=this.ia(t.documents);return this.applyChanges(n,!0)}ha(){return de.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class kf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class bf{constructor(t){this.key=t,this.Pa=!1}}class Nf{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new me(a=>nc(a),sr),this.Ea=new Map,this.da=new Set,this.Aa=new L(T.comparator),this.Ra=new Map,this.Va=new Gs,this.ma={},this.fa=new Map,this.ga=he.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function Of(e,t){const n=$f(e);let r,s;const i=n.Ta.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ha();else{const o=await af(n.localStore,wt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Mf(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ac(n.remoteStore,o)}return s}async function Mf(e,t,n,r,s){e.ya=(h,d,p)=>async function(R,E,O,rt){let F=E.view.ia(O);F.zi&&(F=await to(R.localStore,E.query,!1).then(({documents:K})=>E.view.ia(K,F)));const b=rt&&rt.targetChanges.get(E.targetId),it=E.view.applyChanges(F,R.isPrimaryClient,b);return ao(R,E.targetId,it.ua),it.snapshot}(e,h,d,p);const i=await to(e.localStore,t,!0),o=new Df(t,i.ss),a=o.ia(i.documents),c=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);ao(e,n,l.ua);const u=new kf(t,n,o);return e.Ta.set(t,u),e.Ea.has(n)?e.Ea.get(n).push(t):e.Ea.set(n,[t]),l.snapshot}async function xf(e,t){const n=S(e),r=n.Ta.get(t),s=n.Ea.get(r.targetId);if(s.length>1)return n.Ea.set(r.targetId,s.filter(i=>!sr(i,t))),void n.Ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await is(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wc(n.remoteStore,r.targetId),os(n,r.targetId)}).catch(xs)):(os(n,r.targetId),await is(n.localStore,r.targetId,!0))}async function Dc(e,t){const n=S(e);try{const r=await sf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ra.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Pa=!0:s.modifiedDocuments.size>0?q(o.Pa):s.removedDocuments.size>0&&(q(o.Pa),o.Pa=!1))}),await bc(n,r,t)}catch(r){await xs(r)}}function oo(e,t,n){const r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ta.forEach((i,o)=>{const a=o.view.O_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=S(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.O_(a)&&(l=!0)}),l&&ti(c)}(r.eventManager,t),s.length&&r.Ia.n_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Lf(e,t,n){const r=S(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ra.get(t),i=s&&s.key;if(i){let o=new L(T.comparator);o=o.insert(i,J.newNoDocument(i,I.min()));const a=P().add(i),c=new cr(I.min(),new Map,new L(D),o,a);await Dc(r,c),r.Aa=r.Aa.remove(i),r.Ra.delete(t),ei(r)}else await is(r.localStore,t,!1).then(()=>os(r,t,n)).catch(xs)}function os(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ea.get(t))e.Ta.delete(r),n&&e.Ia.wa(r,n);e.Ea.delete(t),e.isPrimaryClient&&e.Va.Ar(t).forEach(r=>{e.Va.containsKey(r)||kc(e,r)})}function kc(e,t){e.da.delete(t.path.canonicalString());const n=e.Aa.get(t);n!==null&&(wc(e.remoteStore,n),e.Aa=e.Aa.remove(t),e.Ra.delete(n),ei(e))}function ao(e,t,n){for(const r of n)r instanceof Sc?(e.Va.addReference(r.key,t),Ff(e,r)):r instanceof Vc?(_("SyncEngine","Document no longer in limbo: "+r.key),e.Va.removeReference(r.key,t),e.Va.containsKey(r.key)||kc(e,r.key)):A()}function Ff(e,t){const n=t.key,r=n.path.canonicalString();e.Aa.get(n)||e.da.has(r)||(_("SyncEngine","New document in limbo: "+n),e.da.add(r),ei(e))}function ei(e){for(;e.da.size>0&&e.Aa.size<e.maxConcurrentLimboResolutions;){const t=e.da.values().next().value;e.da.delete(t);const n=new T(M.fromString(t)),r=e.ga.next();e.Ra.set(r,new bf(n)),e.Aa=e.Aa.insert(n,r),Ac(e.remoteStore,new Ct(wt(ec(n.path)),r,"TargetPurposeLimboResolution",Ls.ae))}}async function bc(e,t,n){const r=S(e),s=[],i=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ws.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ia.n_(s),await async function(c,l){const u=S(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(l,d=>f.forEach(d.Li,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>f.forEach(d.ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!en(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.Ji.get(d),w=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(w);u.Ji=u.Ji.insert(d,R)}}}(r.localStore,i))}async function Uf(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Ec(n.localStore,t);n.currentUser=t,function(i,o){i.fa.forEach(a=>{a.forEach(c=>{c.reject(new y(g.CANCELLED,o))})}),i.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bc(n,r.ts)}}function Bf(e,t){const n=S(e),r=n.Ra.get(t);if(r&&r.Pa)return P().add(r.key);{let s=P();const i=n.Ea.get(t);if(!i)return s;for(const o of i){const a=n.Ta.get(o);s=s.unionWith(a.view.ra)}return s}}function $f(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lf.bind(null,t),t.Ia.n_=Pf.bind(null,t.eventManager),t.Ia.wa=Sf.bind(null,t.eventManager),t}class co{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rf(this.persistence,new ef,t.initialUser,this.serializer)}createPersistence(t){return new Zd(Qs.zr,this.serializer)}createSharedClientState(t){return new lf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uf.bind(null,this.syncEngine),await If(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wf}()}createDatastore(t){const n=vc(t.databaseInfo.databaseId),r=function(i){return new ff(i)}(t.databaseInfo);return function(i,o,a,c){return new mf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new yf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>oo(this.syncEngine,n,0),function(){return no.v()?new no:new uf}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new Nf(s,i,o,a,c,l);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=S(n);_("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await rn(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):At("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Y.UNAUTHENTICATED,this.clientId=bh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Pc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Pr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ec(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kf(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>so(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>so(t.remoteStore,i)),e._onlineComponents=t}function Hf(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Kf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Hf(n))throw n;ae("Error using user provided cache. Falling back to memory cache: "+n),await Pr(e,new co)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Pr(e,new co);return e._offlineComponents}async function Gf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await lo(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await lo(e,new qf))),e._onlineComponents}async function Qf(e){const t=await Gf(e),n=t.eventManager;return n.onListen=Of.bind(null,t.syncEngine),n.onUnlisten=xf.bind(null,t.syncEngine),n}function Wf(e,t,n={}){const r=new Bt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new jf({next:d=>{o.enqueueAndForget(()=>Cf(i,h)),d.fromCache&&c.source==="server"?l.reject(new y(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Vf(a,u,{includeMetadataChanges:!0,U_:!0});return Rf(i,h)}(await Qf(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(e,t,n){if(!n)throw new y(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yf(e,t,n,r){if(t===!0&&r===!0)throw new y(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ho(e){if(T.isDocumentKey(e))throw new y(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Jf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function as(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jf(e);throw new y(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ni{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wh;switch(r.type){case"firstParty":return new Sh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uo.get(n);r&&(_("ComponentProvider","Removing Datastore"),uo.delete(n),r.terminate())}(this),Promise.resolve()}}function Zf(e,t,n,r={}){var s;const i=(e=as(e,ni))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Y.MOCK_USER;else{a=No(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new y(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Y(l)}e._authCredentials=new Rh(new Ga(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ur(this.firestore,t,this._query)}}class ye{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ye(this.firestore,t,this._key)}}class se extends ur{constructor(t,n,r){super(t,n,ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ye(this.firestore,null,new T(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function tp(e,t,...n){if(e=Mo(e),Xf("collection","path",t),e instanceof ni){const r=M.fromString(t,...n);return ho(r),new se(e,null,r)}{if(!(e instanceof ye||e instanceof se))throw new y(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M.fromString(t,...n));return ho(r),new se(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Ic(this,"async_queue_retry"),this.Za=()=>{const n=Cr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const n=Cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new Bt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!en(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const n=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw At("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(t,n,r){this.Xa(),this.Ya.indexOf(t)>-1&&(n=0);const s=Zs.createAndSchedule(this,t,n,r,i=>this.nu(i));return this.za.push(s),s}Xa(){this.ja&&A()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const n of this.za)if(n.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const n=this.za.indexOf(t);this.za.splice(n,1)}}class Oc extends ni{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new ep}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mc(this),this._firestoreClient.terminate()}}function np(e,t){const n=typeof e=="object"?e:qo(),r=typeof e=="string"?e:t||"(default)",s=Uo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ko("firestore");i&&Zf(s,...i)}return s}function rp(e){return e._firestoreClient||Mc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new $h(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Nc(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new zf(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xn(nt.fromBase64String(t))}catch(n){throw new y(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xn(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}const ip=new RegExp("[~\\*/\\[\\]]");function op(e,t,n){if(t.search(ip)>=0)throw po(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xc(...t.split("."))._internalPath}catch{throw po(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function po(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new y(g.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Fc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ap extends Lc{data(){return super.data()}}function Fc(e,t){return typeof t=="string"?op(e,t):t instanceof xc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lp{convertValue(t,n="none"){switch(Kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return B(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw A()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return nr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new sp(B(t.latitude),B(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Us(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(je(t));default:return null}}convertTimestamp(t){const n=kt(t);return new ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=M.fromString(t);q(yc(r));const s=new ze(r.get(1),r.get(3)),i=new T(r.popFirst(5));return s.isEqual(n)||At(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class up extends Lc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Fc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vn extends up{data(t={}){return super.data(t)}}class hp{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new _n(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new vn(this._firestore,this._userDataWriter,r.key,r,new _n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new vn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new _n(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new vn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new _n(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:dp(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class fp extends lp{constructor(t){super(),this.firestore=t}convertBytes(t){return new xn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ye(this.firestore,null,n)}}function pp(e){e=as(e,ur);const t=as(e.firestore,Oc),n=rp(t),r=new fp(t);return cp(e._query),Wf(n,e._query).then(s=>new hp(t,r,e,s))}(function(t,n=!0){(function(s){ge=s})(Bo),be(new ie("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Oc(new Ch(r.getProvider("auth-internal")),new Dh(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new y(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Vt(Ni,"4.0.0",t),Vt(Ni,"4.0.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="firebasestorage.googleapis.com",gp="storageBucket",mp=2*60*1e3,_p=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Gt{constructor(t,n,r=0){super(Sr(t),`Firebase Storage: ${n} (${Sr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Sr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function Sr(e){return"storage/"+e}function yp(){const e="An unknown error occurred, please check the error payload for server response.";return new Tt(Et.UNKNOWN,e)}function Ep(){return new Tt(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Tp(){return new Tt(Et.CANCELED,"User canceled the upload/download.")}function vp(e){return new Tt(Et.INVALID_URL,"Invalid URL '"+e+"'.")}function Ip(e){return new Tt(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function go(e){return new Tt(Et.INVALID_ARGUMENT,e)}function Bc(){return new Tt(Et.APP_DELETED,"The Firebase app was deleted.")}function Ap(e){return new Tt(Et.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ht.makeFromUrl(t,n)}catch{return new ht(t,"")}if(r.path==="")return r;throw Ip(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),w={bucket:1,path:3},R=n===Uc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",O=new RegExp(`^https?://${R}/${s}/${E}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:p,indices:w,postModify:l},{regex:O,indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<F.length;b++){const it=F[b],K=it.regex.exec(t);if(K){const on=K[it.indices.bucket];let an=K[it.indices.path];an||(an=""),r=new ht(on,an),it.postModify(r);break}}if(r==null)throw vp(t);return r}}class wp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,t.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,e(p,c())},E)}function d(){i&&clearTimeout(i)}function p(E,...O){if(l){d();return}if(E){d(),u.call(null,E,...O);return}if(c()||o){d(),u.call(null,E,...O);return}r<64&&(r*=2);let F;a===1?(a=2,F=0):F=(r+Math.random())*1e3,h(F)}let w=!1;function R(E){w||(w=!0,d(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function Cp(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e){return e!==void 0}function mo(e,t,n,r){if(r<t)throw go(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw go(`Invalid value for '${e}'. Expected ${n} or less.`)}function Sp(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Ln||(Ln={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,w)=>{this.resolve_=p,this.reject_=w,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new yn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ln.NO_ERROR,c=i.getStatus();if(!a||Vp(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ln.ABORT;r(!1,new yn(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new yn(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Pp(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=yp();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Bc():Tp();o(c)}else{const c=Ep();o(c)}};this.canceled_?n(!1,new yn(!1,null,!0)):this.backoffId_=Rp(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Cp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yn{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function kp(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function bp(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Np(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Op(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Mp(e,t,n,r,s,i,o=!0){const a=Sp(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Np(l,t),kp(l,n),bp(l,i),Op(l,r),new Dp(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Lp(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,n){this._service=t,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Fn(t,n)}get root(){const t=new ht(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lp(this._location.path)}get storage(){return this._service}get parent(){const t=xp(this._location.path);if(t===null)return null;const n=new ht(this._location.bucket,t);return new Fn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ap(t)}}function _o(e,t){const n=t==null?void 0:t[gp];return n==null?null:ht.makeFromBucketSpec(n,e)}function Fp(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:No(s,e.app.options.projectId))}class Up{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Uc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mp,this._maxUploadRetryTime=_p,this._requests=new Set,s!=null?this._bucket=ht.makeFromBucketSpec(s,this._host):this._bucket=_o(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,t):this._bucket=_o(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){mo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){mo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Fn(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new wp(Bc());{const o=Mp(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const yo="@firebase/storage",Eo="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="storage";function Bp(e=qo(),t){e=Mo(e);const r=Uo(e,$c).getImmediate({identifier:t}),s=ko("storage");return s&&$p(r,...s),r}function $p(e,t,n,r={}){Fp(e,t,n,r)}function qp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Up(n,r,s,t,Bo)}function jp(){be(new ie($c,qp,"PUBLIC").setMultipleInstances(!0)),Vt(yo,Eo,""),Vt(yo,Eo,"esm2017")}jp();const zp="AIzaSyDtYpu49ROzVOCJ58JqzS1LZrFp33iX-Nw",Hp="shilo-amir.firebaseapp.com",Kp="shilo-amir",Gp="shilo-amir.appspot.com",Qp="397722109672",Wp="1:397722109672:web:47100476fdd0e93a10ab5d",Xp={apiKey:zp,authDomain:Hp,projectId:Kp,storageBucket:Gp,messagingSenderId:Qp,appId:Wp},qc=$o(Xp),Yp=np(qc);Bp(qc);async function Jp(){const e=tp(Yp,"images");return(await pp(e)).docs.map(r=>r.data().url)}async function Zp(){return{urls:await Jp()}}const fg=Object.freeze(Object.defineProperty({__proto__:null,load:Zp},Symbol.toStringTag,{value:"Module"}));function To(e,t,n){const r=e.slice();return r[7]=t[n],r}function vo(e){let t,n,r,s,i,o;return{c(){t=De("div"),n=De("img"),s=Ro(),this.h()},l(a){t=ke(a,"DIV",{class:!0});var c=hs(t);n=ke(c,"IMG",{class:!0,src:!0,alt:!0}),s=Co(c),c.forEach(qt),this.h()},h(){ot(n,"class","img"),An(n.src,r=Ao(e[7]))||ot(n,"src",r),ot(n,"alt","SHILO"),ot(t,"class","container")},m(a,c){Un(a,t,c),Vr(t,n),e[6](n),Vr(t,s),i||(o=Po(n,"click",e[5]),i=!0)},p(a,c){c&2&&!An(n.src,r=Ao(a[7]))&&ot(n,"src",r)},d(a){a&&qt(t),e[6](null),i=!1,o()}}}function tg(e){let t,n=ui(e[1]),r=[];for(let s=0;s<n.length;s+=1)r[s]=vo(To(e,n,s));return{c(){t=De("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=ke(s,"DIV",{class:!0});var i=hs(t);for(let o=0;o<r.length;o+=1)r[o].l(i);i.forEach(qt),this.h()},h(){ot(t,"class","gallery")},m(s,i){Un(s,t,i);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null)},p(s,[i]){if(i&3){n=ui(s[1]);let o;for(o=0;o<n.length;o+=1){const a=To(s,n,o);r[o]?r[o].p(a,i):(r[o]=vo(a),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:In,o:In,d(s){s&&qt(t),Gc(r,s)}}}const Io=5;function Ao(e){return e.replace("WhatsApp","small_WhatsApp")}function eg(e,t,n){let r,{urls:s=[]}=t,i=0,o,a;zc(()=>{n(4,a=new IntersectionObserver(u=>{const h=u[0];h.isIntersecting&&(a.unobserve(h.target),n(3,i+=1))},{threshold:.5})),a.observe(o)});function c(u){Hc.call(this,e,u)}function l(u){wo[u?"unshift":"push"](()=>{o=u,n(0,o),n(4,a)})}return e.$$set=u=>{"urls"in u&&n(2,s=u.urls)},e.$$.update=()=>{e.$$.dirty&12&&n(1,r=s.slice(Io*0,Io*(i+1))),e.$$.dirty&17&&o&&n(0,o.onload=u=>{a.observe(u.target)},o)},[o,r,s,i,a,c,l]}class ng extends ls{constructor(t){super(),us(this,t,eg,tg,cs,{urls:2})}}function rg(e){let t,n,r,s,i;return{c(){t=De("div"),n=De("img"),this.h()},l(o){t=ke(o,"DIV",{class:!0,tabindex:!0,"aria-hidden":!0});var a=hs(t);n=ke(a,"IMG",{alt:!0,src:!0,class:!0}),a.forEach(qt),this.h()},h(){ot(n,"alt","Shilo big mode"),An(n.src,r=e[0])||ot(n,"src",r),ot(n,"class","modal-img"),ot(t,"class",e[1]),ot(t,"tabindex","-1"),ot(t,"aria-hidden","true")},m(o,a){Un(o,t,a),Vr(t,n),s||(i=Po(t,"click",e[2]),s=!0)},p(o,[a]){a&1&&!An(n.src,r=o[0])&&ot(n,"src",r),a&2&&ot(t,"class",o[1])},i:In,o:In,d(o){o&&qt(t),s=!1,i()}}}function sg(e,t,n){let r,{hideModal:s=!0}=t,{src:i}=t;function o(a){var c;((c=a==null?void 0:a.target)==null?void 0:c.localName)!="img"&&n(3,s=!0)}return e.$$set=a=>{"hideModal"in a&&n(3,s=a.hideModal),"src"in a&&n(0,i=a.src)},e.$$.update=()=>{e.$$.dirty&8&&(s?n(1,r="hidden fixed top-0 left-0 w-screen h-screen bg-black/70 justify-center items-center"):n(1,r="flex fixed top-0 left-0 w-screen h-screen bg-black/70 justify-center items-center"))},[i,r,o,s]}class ig extends ls{constructor(t){super(),us(this,t,sg,rg,cs,{hideModal:3,src:0})}}function og(e){let t,n,r,s,i;t=new ng({props:{urls:e[0].urls}}),t.$on("click",e[3]);function o(c){e[4](c)}let a={src:e[2]};return e[1]!==void 0&&(a.hideModal=e[1]),r=new ig({props:a}),wo.push(()=>Qc(r,"hideModal",o)),{c(){si(t.$$.fragment),n=Ro(),si(r.$$.fragment)},l(c){ii(t.$$.fragment,c),n=Co(c),ii(r.$$.fragment,c)},m(c,l){oi(t,c,l),Un(c,n,l),oi(r,c,l),i=!0},p(c,[l]){const u={};l&1&&(u.urls=c[0].urls),t.$set(u);const h={};l&4&&(h.src=c[2]),!s&&l&2&&(s=!0,h.hideModal=c[1],Kc(()=>s=!1)),r.$set(h)},i(c){i||(ai(t.$$.fragment,c),ai(r.$$.fragment,c),i=!0)},o(c){ci(t.$$.fragment,c),ci(r.$$.fragment,c),i=!1},d(c){c&&qt(n),li(t,c),li(r,c)}}}function ag(e,t,n){let{data:r}=t,s=!0,i="";function o(c){n(1,s=!1);const l=c.target.src;n(2,i=l.replace("small_",""))}function a(c){s=c,n(1,s)}return e.$$set=c=>{"data"in c&&n(0,r=c.data)},[r,s,i,o,a]}class pg extends ls{constructor(t){super(),us(this,t,ag,og,cs,{data:0})}}export{pg as component,fg as universal};
