!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealSearch=e()}(this,(function(){"use strict";var t,e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){try{return!!t()}catch(t){return!0}},o=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),a=c,l=Function.prototype,f=l.call,s=a&&l.bind.bind(f,f),p=a?s:function(t){return function(){return f.apply(t,arguments)}},d=p,g=d({}.toString),v=d("".slice),y=function(t){return v(g(t),8,-1)},h=y,b=p,m=function(t){if("Function"===h(t))return b(t)},x="object"==typeof document&&document.all,S={all:x,IS_HTMLDDA:void 0===x&&void 0!==x},w=S.all,O=S.IS_HTMLDDA?function(t){return"function"==typeof t||t===w}:function(t){return"function"==typeof t},E=r,j=O,I=/#|\.prototype\./,R=function(t,e){var n=P[T(t)];return n==_||n!=C&&(j(e)?E(e):!!e)},T=R.normalize=function(t){return String(t).replace(I,".").toLowerCase()},P=R.data={},C=R.NATIVE="N",_=R.POLYFILL="P",A=R,k=O,N=S.all,D=S.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:k(t)||t===N}:function(t){return"object"==typeof t?null!==t:k(t)},M=D,L=String,$=TypeError,F=function(t){if(M(t))return t;throw $(L(t)+" is not an object")},z=O,K=String,W=TypeError,B=m,U=F,Y=function(t){if("object"==typeof t||z(t))return t;throw W("Can't set "+K(t)+" as a prototype")},H=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=B(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return U(n),Y(r),e?t(n,r):n.__proto__=r,n}}():void 0),V=O,G=D,q=H,X={},J=D,Q=u.document,Z=J(Q)&&J(Q.createElement),tt=function(t){return Z?Q.createElement(t):{}},et=tt,nt=!o&&!r((function(){return 7!=Object.defineProperty(et("div"),"a",{get:function(){return 7}}).a})),rt=o&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),ot=c,it=Function.prototype.call,ut=ot?it.bind(it):function(){return it.apply(it,arguments)},ct=u,at=O,lt=function(t){return at(t)?t:void 0},ft=function(t,e){return arguments.length<2?lt(ct[t]):ct[t]&&ct[t][e]},st=m({}.isPrototypeOf),pt=u,dt=ft("navigator","userAgent")||"",gt=pt.process,vt=pt.Deno,yt=gt&&gt.versions||vt&&vt.version,ht=yt&&yt.v8;ht&&(e=(t=ht.split("."))[0]>0&&t[0]<4?1:+(t[0]+t[1])),!e&&dt&&(!(t=dt.match(/Edge\/(\d+)/))||t[1]>=74)&&(t=dt.match(/Chrome\/(\d+)/))&&(e=+t[1]);var bt=e,mt=r,xt=!!Object.getOwnPropertySymbols&&!mt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&bt&&bt<41})),St=xt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,wt=ft,Ot=O,Et=st,jt=Object,It=St?function(t){return"symbol"==typeof t}:function(t){var e=wt("Symbol");return Ot(e)&&Et(e.prototype,jt(t))},Rt=String,Tt=O,Pt=function(t){try{return Rt(t)}catch(t){return"Object"}},Ct=TypeError,_t=function(t){return null==t},At=function(t){if(Tt(t))return t;throw Ct(Pt(t)+" is not a function")},kt=_t,Nt=function(t,e){var n=t[e];return kt(n)?void 0:At(n)},Dt=ut,Mt=O,Lt=D,$t=TypeError,Ft={exports:{}},zt=u,Kt=Object.defineProperty,Wt=function(t,e){try{Kt(zt,t,{value:e,configurable:!0,writable:!0})}catch(n){zt[t]=e}return e},Bt=Wt,Ut="__core-js_shared__",Yt=u[Ut]||Bt(Ut,{}),Ht=Yt;(Ft.exports=function(t,e){return Ht[t]||(Ht[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Vt=_t,Gt=TypeError,qt=function(t){if(Vt(t))throw Gt("Can't call method on "+t);return t},Xt=qt,Jt=Object,Qt=function(t){return Jt(Xt(t))},Zt=Qt,te=m({}.hasOwnProperty),ee=Object.hasOwn||function(t,e){return te(Zt(t),e)},ne=m,re=0,oe=Math.random(),ie=ne(1..toString),ue=function(t){return"Symbol("+(void 0===t?"":t)+")_"+ie(++re+oe,36)},ce=u,ae=Ft.exports,le=ee,fe=ue,se=xt,pe=St,de=ae("wks"),ge=ce.Symbol,ve=ge&&ge.for,ye=pe?ge:ge&&ge.withoutSetter||fe,he=function(t){if(!le(de,t)||!se&&"string"!=typeof de[t]){var e="Symbol."+t;se&&le(ge,t)?de[t]=ge[t]:de[t]=pe&&ve?ve(e):ye(e)}return de[t]},be=ut,me=D,xe=It,Se=Nt,we=function(t,e){var n,r;if("string"===e&&Mt(n=t.toString)&&!Lt(r=Dt(n,t)))return r;if(Mt(n=t.valueOf)&&!Lt(r=Dt(n,t)))return r;if("string"!==e&&Mt(n=t.toString)&&!Lt(r=Dt(n,t)))return r;throw $t("Can't convert object to primitive value")},Oe=TypeError,Ee=he("toPrimitive"),je=function(t,e){if(!me(t)||xe(t))return t;var n,r=Se(t,Ee);if(r){if(void 0===e&&(e="default"),n=be(r,t,e),!me(n)||xe(n))return n;throw Oe("Can't convert object to primitive value")}return void 0===e&&(e="number"),we(t,e)},Ie=It,Re=function(t){var e=je(t,"string");return Ie(e)?e:e+""},Te=o,Pe=nt,Ce=rt,_e=F,Ae=Re,ke=TypeError,Ne=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Me="enumerable",Le="configurable",$e="writable";X.f=Te?Ce?function(t,e,n){if(_e(t),e=Ae(e),_e(n),"function"==typeof t&&"prototype"===e&&"value"in n&&$e in n&&!n.writable){var r=De(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Le in n?n.configurable:r.configurable,enumerable:Me in n?n.enumerable:r.enumerable,writable:!1})}return Ne(t,e,n)}:Ne:function(t,e,n){if(_e(t),e=Ae(e),_e(n),Pe)try{return Ne(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ke("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Fe=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},ze=X,Ke=Fe,We=o?function(t,e,n){return ze.f(t,e,Ke(1,n))}:function(t,e,n){return t[e]=n,t},Be={},Ue=r,Ye=y,He=Object,Ve=m("".split),Ge=Ue((function(){return!He("z").propertyIsEnumerable(0)}))?function(t){return"String"==Ye(t)?Ve(t,""):He(t)}:He,qe=qt,Xe=function(t){return Ge(qe(t))},Je=Math.ceil,Qe=Math.floor,Ze=Math.trunc||function(t){var e=+t;return(e>0?Qe:Je)(e)},tn=function(t){var e=+t;return e!=e||0===e?0:Ze(e)},en=tn,nn=Math.max,rn=Math.min,on=tn,un=Math.min,cn=function(t){return t>0?un(on(t),9007199254740991):0},an=cn,ln=Xe,fn=function(t,e){var n=en(t);return n<0?nn(n+e,0):rn(n,e)},sn=function(t){return an(t.length)},pn=function(t){return function(e,n,r){var o,i=ln(e),u=sn(i),c=fn(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},dn={includes:pn(!0),indexOf:pn(!1)},gn={},vn=ee,yn=Xe,hn=dn.indexOf,bn=gn,mn=m([].push),xn=function(t,e){var n,r=yn(t),o=0,i=[];for(n in r)!vn(bn,n)&&vn(r,n)&&mn(i,n);for(;e.length>o;)vn(r,n=e[o++])&&(~hn(i,n)||mn(i,n));return i},Sn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wn=xn,On=Sn.concat("length","prototype");Be.f=Object.getOwnPropertyNames||function(t){return wn(t,On)};var En=D,jn=y,In=he("match"),Rn={};Rn[he("toStringTag")]="z";var Tn="[object z]"===String(Rn),Pn=Tn,Cn=O,_n=y,An=he("toStringTag"),kn=Object,Nn="Arguments"==_n(function(){return arguments}()),Dn=Pn?_n:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=kn(t),An))?n:Nn?_n(e):"Object"==(r=_n(e))&&Cn(e.callee)?"Arguments":r},Mn=Dn,Ln=String,$n=function(t){if("Symbol"===Mn(t))throw TypeError("Cannot convert a Symbol value to a string");return Ln(t)},Fn=F,zn=function(){var t=Fn(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},Kn=ut,Wn=ee,Bn=st,Un=zn,Yn=RegExp.prototype,Hn=function(t){var e=t.flags;return void 0!==e||"flags"in Yn||Wn(t,"flags")||!Bn(Yn,t)?e:Kn(Un,t)},Vn=r,Gn=u.RegExp,qn=Vn((function(){var t=Gn("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Xn=qn||Vn((function(){return!Gn("a","y").sticky})),Jn={BROKEN_CARET:qn||Vn((function(){var t=Gn("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Xn,UNSUPPORTED_Y:qn},Qn=X.f,Zn={exports:{}},tr=o,er=ee,nr=Function.prototype,rr=tr&&Object.getOwnPropertyDescriptor,or=er(nr,"name"),ir={EXISTS:or,PROPER:or&&"something"===function(){}.name,CONFIGURABLE:or&&(!tr||tr&&rr(nr,"name").configurable)},ur=O,cr=Yt,ar=m(Function.toString);ur(cr.inspectSource)||(cr.inspectSource=function(t){return ar(t)});var lr,fr,sr,pr=cr.inspectSource,dr=O,gr=u.WeakMap,vr=dr(gr)&&/native code/.test(String(gr)),yr=Ft.exports,hr=ue,br=yr("keys"),mr=function(t){return br[t]||(br[t]=hr(t))},xr=vr,Sr=u,wr=D,Or=We,Er=ee,jr=Yt,Ir=mr,Rr=gn,Tr="Object already initialized",Pr=Sr.TypeError,Cr=Sr.WeakMap;if(xr||jr.state){var _r=jr.state||(jr.state=new Cr);_r.get=_r.get,_r.has=_r.has,_r.set=_r.set,lr=function(t,e){if(_r.has(t))throw Pr(Tr);return e.facade=t,_r.set(t,e),e},fr=function(t){return _r.get(t)||{}},sr=function(t){return _r.has(t)}}else{var Ar=Ir("state");Rr[Ar]=!0,lr=function(t,e){if(Er(t,Ar))throw Pr(Tr);return e.facade=t,Or(t,Ar,e),e},fr=function(t){return Er(t,Ar)?t[Ar]:{}},sr=function(t){return Er(t,Ar)}}var kr={set:lr,get:fr,has:sr,enforce:function(t){return sr(t)?fr(t):lr(t,{})},getterFor:function(t){return function(e){var n;if(!wr(e)||(n=fr(e)).type!==t)throw Pr("Incompatible receiver, "+t+" required");return n}}},Nr=r,Dr=O,Mr=ee,Lr=o,$r=ir.CONFIGURABLE,Fr=pr,zr=kr.enforce,Kr=kr.get,Wr=Object.defineProperty,Br=Lr&&!Nr((function(){return 8!==Wr((function(){}),"length",{value:8}).length})),Ur=String(String).split("String"),Yr=Zn.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Mr(t,"name")||$r&&t.name!==e)&&(Lr?Wr(t,"name",{value:e,configurable:!0}):t.name=e),Br&&n&&Mr(n,"arity")&&t.length!==n.arity&&Wr(t,"length",{value:n.arity});try{n&&Mr(n,"constructor")&&n.constructor?Lr&&Wr(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=zr(t);return Mr(r,"source")||(r.source=Ur.join("string"==typeof e?e:"")),t};Function.prototype.toString=Yr((function(){return Dr(this)&&Kr(this).source||Fr(this)}),"toString");var Hr=O,Vr=X,Gr=Zn.exports,qr=Wt,Xr=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(Hr(n)&&Gr(n,i,r),r.global)o?t[e]=n:qr(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:Vr.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Jr=ft,Qr=X,Zr=o,to=he("species"),eo=r,no=u.RegExp,ro=eo((function(){var t=no(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),oo=r,io=u.RegExp,uo=oo((function(){var t=io("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),co=o,ao=u,lo=m,fo=A,so=function(t,e,n){var r,o;return q&&V(r=e.constructor)&&r!==n&&G(o=r.prototype)&&o!==n.prototype&&q(t,o),t},po=We,go=Be.f,vo=st,yo=function(t){var e;return En(t)&&(void 0!==(e=t[In])?!!e:"RegExp"==jn(t))},ho=$n,bo=Hn,mo=Jn,xo=function(t,e,n){n in t||Qn(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})},So=Xr,wo=r,Oo=ee,Eo=kr.enforce,jo=function(t){var e=Jr(t),n=Qr.f;Zr&&e&&!e[to]&&n(e,to,{configurable:!0,get:function(){return this}})},Io=ro,Ro=uo,To=he("match"),Po=ao.RegExp,Co=Po.prototype,_o=ao.SyntaxError,Ao=lo(Co.exec),ko=lo("".charAt),No=lo("".replace),Do=lo("".indexOf),Mo=lo("".slice),Lo=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$o=/a/g,Fo=/a/g,zo=new Po($o)!==$o,Ko=mo.MISSED_STICKY,Wo=mo.UNSUPPORTED_Y,Bo=co&&(!zo||Ko||Io||Ro||wo((function(){return Fo[To]=!1,Po($o)!=$o||Po(Fo)==Fo||"/a/i"!=Po($o,"i")})));if(fo("RegExp",Bo)){for(var Uo=function(t,e){var n,r,o,i,u,c,a=vo(Co,this),l=yo(t),f=void 0===e,s=[],p=t;if(!a&&l&&f&&t.constructor===Uo)return t;if((l||vo(Co,t))&&(t=t.source,f&&(e=bo(p))),t=void 0===t?"":ho(t),e=void 0===e?"":ho(e),p=t,Io&&"dotAll"in $o&&(r=!!e&&Do(e,"s")>-1)&&(e=No(e,/s/g,"")),n=e,Ko&&"sticky"in $o&&(o=!!e&&Do(e,"y")>-1)&&Wo&&(e=No(e,/y/g,"")),Ro&&(i=function(t){for(var e,n=t.length,r=0,o="",i=[],u={},c=!1,a=!1,l=0,f="";r<=n;r++){if("\\"===(e=ko(t,r)))e+=ko(t,++r);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:Ao(Lo,Mo(t,r+1))&&(r+=2,a=!0),o+=e,l++;continue;case">"===e&&a:if(""===f||Oo(u,f))throw new _o("Invalid capture group name");u[f]=!0,i[i.length]=[f,l],a=!1,f="";continue}a?f+=e:o+=e}return[o,i]}(t),t=i[0],s=i[1]),u=so(Po(t,e),a?this:Co,Uo),(r||o||s.length)&&(c=Eo(u),r&&(c.dotAll=!0,c.raw=Uo(function(t){for(var e,n=t.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(e=ko(t,r))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+ko(t,++r);return o}(t),n)),o&&(c.sticky=!0),s.length&&(c.groups=s)),t!==p)try{po(u,"source",""===p?"(?:)":p)}catch(t){}return u},Yo=go(Po),Ho=0;Yo.length>Ho;)xo(Uo,Po,Yo[Ho++]);Co.constructor=Uo,Uo.prototype=Co,So(ao,"RegExp",Uo,{constructor:!0})}jo("RegExp");var Vo={},Go={},qo={}.propertyIsEnumerable,Xo=Object.getOwnPropertyDescriptor,Jo=Xo&&!qo.call({1:2},1);Go.f=Jo?function(t){var e=Xo(this,t);return!!e&&e.enumerable}:qo;var Qo=o,Zo=ut,ti=Go,ei=Fe,ni=Xe,ri=Re,oi=ee,ii=nt,ui=Object.getOwnPropertyDescriptor;Vo.f=Qo?ui:function(t,e){if(t=ni(t),e=ri(e),ii)try{return ui(t,e)}catch(t){}if(oi(t,e))return ei(!Zo(ti.f,t,e),t[e])};var ci={};ci.f=Object.getOwnPropertySymbols;var ai=ft,li=Be,fi=ci,si=F,pi=m([].concat),di=ai("Reflect","ownKeys")||function(t){var e=li.f(si(t)),n=fi.f;return n?pi(e,n(t)):e},gi=ee,vi=di,yi=Vo,hi=X,bi=u,mi=Vo.f,xi=We,Si=Xr,wi=Wt,Oi=function(t,e,n){for(var r=vi(e),o=hi.f,i=yi.f,u=0;u<r.length;u++){var c=r[u];gi(t,c)||n&&gi(n,c)||o(t,c,i(e,c))}},Ei=A,ji={},Ii=xn,Ri=Sn,Ti=Object.keys||function(t){return Ii(t,Ri)},Pi=o,Ci=rt,_i=X,Ai=F,ki=Xe,Ni=Ti;ji.f=Pi&&!Ci?Object.defineProperties:function(t,e){Ai(t);for(var n,r=ki(e),o=Ni(e),i=o.length,u=0;i>u;)_i.f(t,n=o[u++],r[n]);return t};var Di,Mi=ft("document","documentElement"),Li=F,$i=ji,Fi=Sn,zi=gn,Ki=Mi,Wi=tt,Bi=mr("IE_PROTO"),Ui=function(){},Yi=function(t){return"<script>"+t+"</"+"script>"},Hi=function(t){t.write(Yi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Vi=function(){try{Di=new ActiveXObject("htmlfile")}catch(t){}var t,e;Vi="undefined"!=typeof document?document.domain&&Di?Hi(Di):((e=Wi("iframe")).style.display="none",Ki.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Yi("document.F=Object")),t.close(),t.F):Hi(Di);for(var n=Fi.length;n--;)delete Vi.prototype[Fi[n]];return Vi()};zi[Bi]=!0;var Gi=Object.create||function(t,e){var n;return null!==t?(Ui.prototype=Li(t),n=new Ui,Ui.prototype=null,n[Bi]=t):n=Vi(),void 0===e?n:$i.f(n,e)},qi=ut,Xi=m,Ji=$n,Qi=zn,Zi=Jn,tu=Ft.exports,eu=Gi,nu=kr.get,ru=ro,ou=uo,iu=tu("native-string-replace",String.prototype.replace),uu=RegExp.prototype.exec,cu=uu,au=Xi("".charAt),lu=Xi("".indexOf),fu=Xi("".replace),su=Xi("".slice),pu=function(){var t=/a/,e=/b*/g;return qi(uu,t,"a"),qi(uu,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),du=Zi.BROKEN_CARET,gu=void 0!==/()??/.exec("")[1];(pu||gu||du||ru||ou)&&(cu=function(t){var e,n,r,o,i,u,c,a=this,l=nu(a),f=Ji(t),s=l.raw;if(s)return s.lastIndex=a.lastIndex,e=qi(cu,s,f),a.lastIndex=s.lastIndex,e;var p=l.groups,d=du&&a.sticky,g=qi(Qi,a),v=a.source,y=0,h=f;if(d&&(g=fu(g,"y",""),-1===lu(g,"g")&&(g+="g"),h=su(f,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==au(f,a.lastIndex-1))&&(v="(?: "+v+")",h=" "+h,y++),n=new RegExp("^(?:"+v+")",g)),gu&&(n=new RegExp("^"+v+"$(?!\\s)",g)),pu&&(r=a.lastIndex),o=qi(uu,d?n:a,h),d?o?(o.input=su(o.input,y),o[0]=su(o[0],y),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:pu&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),gu&&o&&o.length>1&&qi(iu,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=eu(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var vu=cu;(function(t,e){var n,r,o,i,u,c=t.target,a=t.global,l=t.stat;if(n=a?bi:l?bi[c]||wi(c,{}):(bi[c]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(u=mi(n,r))&&u.value:n[r],!Ei(a?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Oi(i,o)}(t.sham||o&&o.sham)&&xi(i,"sham",!0),Si(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==vu},{exec:vu});var yu=ir.PROPER,hu=Xr,bu=F,mu=$n,xu=r,Su=Hn,wu="toString",Ou=RegExp.prototype.toString,Eu=xu((function(){return"/a/b"!=Ou.call({source:"a",flags:"b"})})),ju=yu&&Ou.name!=wu;(Eu||ju)&&hu(RegExp.prototype,wu,(function(){var t=bu(this);return"/"+mu(t.source)+"/"+mu(Su(t))}),{unsafe:!0});var Iu=c,Ru=Function.prototype,Tu=Ru.apply,Pu=Ru.call,Cu="object"==typeof Reflect&&Reflect.apply||(Iu?Pu.bind(Tu):function(){return Pu.apply(Tu,arguments)}),_u=m,Au=Xr,ku=vu,Nu=r,Du=he,Mu=We,Lu=Du("species"),$u=RegExp.prototype,Fu=m,zu=tn,Ku=$n,Wu=qt,Bu=Fu("".charAt),Uu=Fu("".charCodeAt),Yu=Fu("".slice),Hu=function(t){return function(e,n){var r,o,i=Ku(Wu(e)),u=zu(n),c=i.length;return u<0||u>=c?t?"":void 0:(r=Uu(i,u))<55296||r>56319||u+1===c||(o=Uu(i,u+1))<56320||o>57343?t?Bu(i,u):r:t?Yu(i,u,u+2):o-56320+(r-55296<<10)+65536}},Vu={codeAt:Hu(!1),charAt:Hu(!0)}.charAt,Gu=m,qu=Qt,Xu=Math.floor,Ju=Gu("".charAt),Qu=Gu("".replace),Zu=Gu("".slice),tc=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,ec=/\$([$&'`]|\d{1,2})/g,nc=ut,rc=F,oc=O,ic=y,uc=vu,cc=TypeError,ac=Cu,lc=ut,fc=m,sc=function(t,e,n,r){var o=Du(t),i=!Nu((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),u=i&&!Nu((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Lu]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!u||n){var c=_u(/./[o]),a=e(o,""[t],(function(t,e,n,r,o){var u=_u(t),a=e.exec;return a===ku||a===$u.exec?i&&!o?{done:!0,value:c(e,n,r)}:{done:!0,value:u(n,e,r)}:{done:!1}}));Au(String.prototype,t,a[0]),Au($u,o,a[1])}r&&Mu($u[o],"sham",!0)},pc=r,dc=F,gc=O,vc=_t,yc=tn,hc=cn,bc=$n,mc=qt,xc=function(t,e,n){return e+(n?Vu(t,e).length:1)},Sc=Nt,wc=function(t,e,n,r,o,i){var u=n+t.length,c=r.length,a=ec;return void 0!==o&&(o=qu(o),a=tc),Qu(i,a,(function(i,a){var l;switch(Ju(a,0)){case"$":return"$";case"&":return t;case"`":return Zu(e,0,n);case"'":return Zu(e,u);case"<":l=o[Zu(a,1,-1)];break;default:var f=+a;if(0===f)return i;if(f>c){var s=Xu(f/10);return 0===s?i:s<=c?void 0===r[s-1]?Ju(a,1):r[s-1]+Ju(a,1):i}l=r[f-1]}return void 0===l?"":l}))},Oc=function(t,e){var n=t.exec;if(oc(n)){var r=nc(n,t,e);return null!==r&&rc(r),r}if("RegExp"===ic(t))return nc(uc,t,e);throw cc("RegExp#exec called on incompatible receiver")},Ec=he("replace"),jc=Math.max,Ic=Math.min,Rc=fc([].concat),Tc=fc([].push),Pc=fc("".indexOf),Cc=fc("".slice),_c="$0"==="a".replace(/./,"$0"),Ac=!!/./[Ec]&&""===/./[Ec]("a","$0");sc("replace",(function(t,e,n){var r=Ac?"$":"$0";return[function(t,n){var r=mc(this),o=vc(t)?void 0:Sc(t,Ec);return o?lc(o,t,r,n):lc(e,bc(r),t,n)},function(t,o){var i=dc(this),u=bc(t);if("string"==typeof o&&-1===Pc(o,r)&&-1===Pc(o,"$<")){var c=n(e,i,u,o);if(c.done)return c.value}var a=gc(o);a||(o=bc(o));var l=i.global;if(l){var f=i.unicode;i.lastIndex=0}for(var s=[];;){var p=Oc(i,u);if(null===p)break;if(Tc(s,p),!l)break;""===bc(p[0])&&(i.lastIndex=xc(u,hc(i.lastIndex),f))}for(var d,g="",v=0,y=0;y<s.length;y++){for(var h=bc((p=s[y])[0]),b=jc(Ic(yc(p.index),u.length),0),m=[],x=1;x<p.length;x++)Tc(m,void 0===(d=p[x])?d:String(d));var S=p.groups;if(a){var w=Rc([h],m,b,u);void 0!==S&&Tc(w,S);var O=bc(ac(o,void 0,w))}else O=wc(h,u,b,m,S,o);b>=v&&(g+=Cc(u,v,b)+O,v=b+h.length)}return g+Cc(u,v)}]}),!!pc((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!_c||Ac);var kc=m,Nc=Xr,Dc=Date.prototype,Mc="Invalid Date",Lc="toString",$c=kc(Dc.toString),Fc=kc(Dc.getTime);String(new Date(NaN))!=Mc&&Nc(Dc,Lc,(function(){var t=Fc(this);return t==t?$c(this):Mc}));var zc=Dn,Kc=Tn?{}.toString:function(){return"[object "+zc(this)+"]"};Tn||Xr(Object.prototype,"toString",Kc,{unsafe:!0})
/*!
	 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
	 * by navigatating to that slide and highlighting it.
	 *
	 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
	 */;return function(){var t,e,n,r,o,i,u;function c(){(e=document.createElement("div")).classList.add("searchbox"),e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.zIndex=10,e.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=e.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",t.getRevealElement().appendChild(e),n.addEventListener("keyup",(function(e){if(13===e.keyCode)e.preventDefault(),function(){if(i){var e=n.value;""===e?(u&&u.remove(),r=null):(u=new f("slidecontent"),r=u.apply(e),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(t.slide(r[o].h,r[o].v),o++))}(),i=!1;else i=!0}),!1),l()}function a(){e||c(),e.style.display="inline",n.focus(),n.select()}function l(){e||c(),e.style.display="none",u&&u.remove()}function f(e,n){var r=document.getElementById(e)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),u=["#ff6","#a0ffff","#9f9","#f99","#f6f"],c=[],a=0,l="",f=[];this.setRegex=function(t){t=t.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+t+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(e){if(null!=e&&e&&l&&!i.test(e.nodeName)){if(e.hasChildNodes())for(var n=0;n<e.childNodes.length;n++)this.hiliteWords(e.childNodes[n]);var r,s;if(3==e.nodeType)if((r=e.nodeValue)&&(s=l.exec(r))){for(var p=e;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=t.getIndices(p),g=f.length,v=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(v=!0);v||f.push(d),c[s[0].toLowerCase()]||(c[s[0].toLowerCase()]=u[a++%u.length]);var y=document.createElement(o);y.appendChild(document.createTextNode(s[0])),y.style.backgroundColor=c[s[0].toLowerCase()],y.style.fontStyle="inherit",y.style.color="#000";var h=e.splitText(s.index);h.nodeValue=h.nodeValue.substring(s[0].length),e.parentNode.insertBefore(y,h)}}},this.remove=function(){for(var t,e=document.getElementsByTagName(o);e.length&&(t=e[0]);)t.parentNode.replaceChild(t.firstChild,t)},this.apply=function(t){if(null!=t&&t)return this.remove(),this.setRegex(t),this.hiliteWords(r),f}}return{id:"search",init:function(n){(t=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(t){"F"==t.key&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e||c(),"inline"!==e.style.display?a():l())}),!1)},open:a}}}));
