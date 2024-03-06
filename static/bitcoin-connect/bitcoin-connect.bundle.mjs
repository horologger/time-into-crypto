/* esm.sh - esbuild bundle(@getalby/bitcoin-connect@3.2.0) es2022 production */
var P0=Object.create;var uo=Object.defineProperty;var U0=Object.getOwnPropertyDescriptor;var D0=Object.getOwnPropertyNames;var M0=Object.getPrototypeOf,B0=Object.prototype.hasOwnProperty;var vs=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),$0=(t,e)=>{for(var r in e)uo(t,r,{get:e[r],enumerable:!0})},H0=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of D0(e))!B0.call(t,i)&&i!==r&&uo(t,i,{get:()=>e[i],enumerable:!(o=U0(e,i))||o.enumerable});return t};var Es=(t,e,r)=>(r=t!=null?P0(M0(t)):{},H0(e||!t||!t.__esModule?uo(r,"default",{value:t,enumerable:!0}):r,t));var ec=vs((Xa,Qa)=>{var Ja=function(){var t=function(_,y){var E=236,x=17,b=_,N=r[y],O=null,w=0,C=null,A=[],S={},k=function(T,I){w=b*4+17,O=function(R){for(var P=new Array(R),V=0;V<R;V+=1){P[V]=new Array(R);for(var B=0;B<R;B+=1)P[V][B]=null}return P}(w),L(0,0),L(w-7,0),L(0,w-7),H(),M(),j(T,I),b>=7&&Z(T),C==null&&(C=F(b,N,A)),$(C,I)},L=function(T,I){for(var R=-1;R<=7;R+=1)if(!(T+R<=-1||w<=T+R))for(var P=-1;P<=7;P+=1)I+P<=-1||w<=I+P||(0<=R&&R<=6&&(P==0||P==6)||0<=P&&P<=6&&(R==0||R==6)||2<=R&&R<=4&&2<=P&&P<=4?O[T+R][I+P]=!0:O[T+R][I+P]=!1)},U=function(){for(var T=0,I=0,R=0;R<8;R+=1){k(!0,R);var P=i.getLostPoint(S);(R==0||T>P)&&(T=P,I=R)}return I},M=function(){for(var T=8;T<w-8;T+=1)O[T][6]==null&&(O[T][6]=T%2==0);for(var I=8;I<w-8;I+=1)O[6][I]==null&&(O[6][I]=I%2==0)},H=function(){for(var T=i.getPatternPosition(b),I=0;I<T.length;I+=1)for(var R=0;R<T.length;R+=1){var P=T[I],V=T[R];if(O[P][V]==null)for(var B=-2;B<=2;B+=1)for(var G=-2;G<=2;G+=1)B==-2||B==2||G==-2||G==2||B==0&&G==0?O[P+B][V+G]=!0:O[P+B][V+G]=!1}},Z=function(T){for(var I=i.getBCHTypeNumber(b),R=0;R<18;R+=1){var P=!T&&(I>>R&1)==1;O[Math.floor(R/3)][R%3+w-8-3]=P}for(var R=0;R<18;R+=1){var P=!T&&(I>>R&1)==1;O[R%3+w-8-3][Math.floor(R/3)]=P}},j=function(T,I){for(var R=N<<3|I,P=i.getBCHTypeInfo(R),V=0;V<15;V+=1){var B=!T&&(P>>V&1)==1;V<6?O[V][8]=B:V<8?O[V+1][8]=B:O[w-15+V][8]=B}for(var V=0;V<15;V+=1){var B=!T&&(P>>V&1)==1;V<8?O[8][w-V-1]=B:V<9?O[8][15-V-1+1]=B:O[8][15-V-1]=B}O[w-8][8]=!T},$=function(T,I){for(var R=-1,P=w-1,V=7,B=0,G=i.getMaskFunction(I),z=w-1;z>0;z-=2)for(z==6&&(z-=1);;){for(var q=0;q<2;q+=1)if(O[P][z-q]==null){var J=!1;B<T.length&&(J=(T[B]>>>V&1)==1);var Y=G(P,z-q);Y&&(J=!J),O[P][z-q]=J,V-=1,V==-1&&(B+=1,V=7)}if(P+=R,P<0||w<=P){P-=R,R=-R;break}}},D=function(T,I){for(var R=0,P=0,V=0,B=new Array(I.length),G=new Array(I.length),z=0;z<I.length;z+=1){var q=I[z].dataCount,J=I[z].totalCount-q;P=Math.max(P,q),V=Math.max(V,J),B[z]=new Array(q);for(var Y=0;Y<B[z].length;Y+=1)B[z][Y]=255&T.getBuffer()[Y+R];R+=q;var ee=i.getErrorCorrectPolynomial(J),se=c(B[z],ee.getLength()-1),ae=se.mod(ee);G[z]=new Array(ee.getLength()-1);for(var Y=0;Y<G[z].length;Y+=1){var ce=Y+ae.getLength()-G[z].length;G[z][Y]=ce>=0?ae.getAt(ce):0}}for(var oe=0,Y=0;Y<I.length;Y+=1)oe+=I[Y].totalCount;for(var pe=new Array(oe),ye=0,Y=0;Y<P;Y+=1)for(var z=0;z<I.length;z+=1)Y<B[z].length&&(pe[ye]=B[z][Y],ye+=1);for(var Y=0;Y<V;Y+=1)for(var z=0;z<I.length;z+=1)Y<G[z].length&&(pe[ye]=G[z][Y],ye+=1);return pe},F=function(T,I,R){for(var P=h.getRSBlocks(T,I),V=n(),B=0;B<R.length;B+=1){var G=R[B];V.put(G.getMode(),4),V.put(G.getLength(),i.getLengthInBits(G.getMode(),T)),G.write(V)}for(var z=0,B=0;B<P.length;B+=1)z+=P[B].dataCount;if(V.getLengthInBits()>z*8)throw"code length overflow. ("+V.getLengthInBits()+">"+z*8+")";for(V.getLengthInBits()+4<=z*8&&V.put(0,4);V.getLengthInBits()%8!=0;)V.putBit(!1);for(;!(V.getLengthInBits()>=z*8||(V.put(E,8),V.getLengthInBits()>=z*8));)V.put(x,8);return D(V,P)};S.addData=function(T,I){I=I||"Byte";var R=null;switch(I){case"Numeric":R=l(T);break;case"Alphanumeric":R=p(T);break;case"Byte":R=d(T);break;case"Kanji":R=a(T);break;default:throw"mode:"+I}A.push(R),C=null},S.isDark=function(T,I){if(T<0||w<=T||I<0||w<=I)throw T+","+I;return O[T][I]},S.getModuleCount=function(){return w},S.make=function(){if(b<1){for(var T=1;T<40;T++){for(var I=h.getRSBlocks(T,N),R=n(),P=0;P<A.length;P++){var V=A[P];R.put(V.getMode(),4),R.put(V.getLength(),i.getLengthInBits(V.getMode(),T)),V.write(R)}for(var B=0,P=0;P<I.length;P++)B+=I[P].dataCount;if(R.getLengthInBits()<=B*8)break}b=T}k(!1,U())},S.createTableTag=function(T,I){T=T||2,I=typeof I>"u"?T*4:I;var R="";R+='<table style="',R+=" border-width: 0px; border-style: none;",R+=" border-collapse: collapse;",R+=" padding: 0px; margin: "+I+"px;",R+='">',R+="<tbody>";for(var P=0;P<S.getModuleCount();P+=1){R+="<tr>";for(var V=0;V<S.getModuleCount();V+=1)R+='<td style="',R+=" border-width: 0px; border-style: none;",R+=" border-collapse: collapse;",R+=" padding: 0px; margin: 0px;",R+=" width: "+T+"px;",R+=" height: "+T+"px;",R+=" background-color: ",R+=S.isDark(P,V)?"#000000":"#ffffff",R+=";",R+='"/>';R+="</tr>"}return R+="</tbody>",R+="</table>",R},S.createSvgTag=function(T,I,R,P){var V={};typeof arguments[0]=="object"&&(V=arguments[0],T=V.cellSize,I=V.margin,R=V.alt,P=V.title),T=T||2,I=typeof I>"u"?T*4:I,R=typeof R=="string"?{text:R}:R||{},R.text=R.text||null,R.id=R.text?R.id||"qrcode-description":null,P=typeof P=="string"?{text:P}:P||{},P.text=P.text||null,P.id=P.text?P.id||"qrcode-title":null;var B=S.getModuleCount()*T+I*2,G,z,q,J,Y="",ee;for(ee="l"+T+",0 0,"+T+" -"+T+",0 0,-"+T+"z ",Y+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',Y+=V.scalable?"":' width="'+B+'px" height="'+B+'px"',Y+=' viewBox="0 0 '+B+" "+B+'" ',Y+=' preserveAspectRatio="xMinYMin meet"',Y+=P.text||R.text?' role="img" aria-labelledby="'+K([P.id,R.id].join(" ").trim())+'"':"",Y+=">",Y+=P.text?'<title id="'+K(P.id)+'">'+K(P.text)+"</title>":"",Y+=R.text?'<description id="'+K(R.id)+'">'+K(R.text)+"</description>":"",Y+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',Y+='<path d="',q=0;q<S.getModuleCount();q+=1)for(J=q*T+I,G=0;G<S.getModuleCount();G+=1)S.isDark(q,G)&&(z=G*T+I,Y+="M"+z+","+J+ee);return Y+='" stroke="transparent" fill="black"/>',Y+="</svg>",Y},S.createDataURL=function(T,I){T=T||2,I=typeof I>"u"?T*4:I;var R=S.getModuleCount()*T+I*2,P=I,V=R-I;return m(R,R,function(B,G){if(P<=B&&B<V&&P<=G&&G<V){var z=Math.floor((B-P)/T),q=Math.floor((G-P)/T);return S.isDark(q,z)?0:1}else return 1})},S.createImgTag=function(T,I,R){T=T||2,I=typeof I>"u"?T*4:I;var P=S.getModuleCount()*T+I*2,V="";return V+="<img",V+=' src="',V+=S.createDataURL(T,I),V+='"',V+=' width="',V+=P,V+='"',V+=' height="',V+=P,V+='"',R&&(V+=' alt="',V+=K(R),V+='"'),V+="/>",V};var K=function(T){for(var I="",R=0;R<T.length;R+=1){var P=T.charAt(R);switch(P){case"<":I+="&lt;";break;case">":I+="&gt;";break;case"&":I+="&amp;";break;case'"':I+="&quot;";break;default:I+=P;break}}return I},W=function(T){var I=1;T=typeof T>"u"?I*2:T;var R=S.getModuleCount()*I+T*2,P=T,V=R-T,B,G,z,q,J,Y={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},ee={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},se="";for(B=0;B<R;B+=2){for(z=Math.floor((B-P)/I),q=Math.floor((B+1-P)/I),G=0;G<R;G+=1)J="\u2588",P<=G&&G<V&&P<=B&&B<V&&S.isDark(z,Math.floor((G-P)/I))&&(J=" "),P<=G&&G<V&&P<=B+1&&B+1<V&&S.isDark(q,Math.floor((G-P)/I))?J+=" ":J+="\u2588",se+=T<1&&B+1>=V?ee[J]:Y[J];se+=`
`}return R%2&&T>0?se.substring(0,se.length-R-1)+Array(R+1).join("\u2580"):se.substring(0,se.length-1)};return S.createASCII=function(T,I){if(T=T||1,T<2)return W(I);T-=1,I=typeof I>"u"?T*2:I;var R=S.getModuleCount()*T+I*2,P=I,V=R-I,B,G,z,q,J=Array(T+1).join("\u2588\u2588"),Y=Array(T+1).join("  "),ee="",se="";for(B=0;B<R;B+=1){for(z=Math.floor((B-P)/T),se="",G=0;G<R;G+=1)q=1,P<=G&&G<V&&P<=B&&B<V&&S.isDark(z,Math.floor((G-P)/T))&&(q=0),se+=q?J:Y;for(z=0;z<T;z+=1)ee+=se+`
`}return ee.substring(0,ee.length-1)},S.renderTo2dContext=function(T,I){I=I||2;for(var R=S.getModuleCount(),P=0;P<R;P++)for(var V=0;V<R;V++)T.fillStyle=S.isDark(P,V)?"black":"white",T.fillRect(P*I,V*I,I,I)},S};t.stringToBytesFuncs={default:function(_){for(var y=[],E=0;E<_.length;E+=1){var x=_.charCodeAt(E);y.push(x&255)}return y}},t.stringToBytes=t.stringToBytesFuncs.default,t.createStringToBytes=function(_,y){var E=function(){for(var b=f(_),N=function(){var M=b.read();if(M==-1)throw"eof";return M},O=0,w={};;){var C=b.read();if(C==-1)break;var A=N(),S=N(),k=N(),L=String.fromCharCode(C<<8|A),U=S<<8|k;w[L]=U,O+=1}if(O!=y)throw O+" != "+y;return w}(),x=63;return function(b){for(var N=[],O=0;O<b.length;O+=1){var w=b.charCodeAt(O);if(w<128)N.push(w);else{var C=E[b.charAt(O)];typeof C=="number"?(C&255)==C?N.push(C):(N.push(C>>>8),N.push(C&255)):N.push(x)}}return N}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var _=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],y=1335,E=7973,x=21522,b={},N=function(O){for(var w=0;O!=0;)w+=1,O>>>=1;return w};return b.getBCHTypeInfo=function(O){for(var w=O<<10;N(w)-N(y)>=0;)w^=y<<N(w)-N(y);return(O<<10|w)^x},b.getBCHTypeNumber=function(O){for(var w=O<<12;N(w)-N(E)>=0;)w^=E<<N(w)-N(E);return O<<12|w},b.getPatternPosition=function(O){return _[O-1]},b.getMaskFunction=function(O){switch(O){case o.PATTERN000:return function(w,C){return(w+C)%2==0};case o.PATTERN001:return function(w,C){return w%2==0};case o.PATTERN010:return function(w,C){return C%3==0};case o.PATTERN011:return function(w,C){return(w+C)%3==0};case o.PATTERN100:return function(w,C){return(Math.floor(w/2)+Math.floor(C/3))%2==0};case o.PATTERN101:return function(w,C){return w*C%2+w*C%3==0};case o.PATTERN110:return function(w,C){return(w*C%2+w*C%3)%2==0};case o.PATTERN111:return function(w,C){return(w*C%3+(w+C)%2)%2==0};default:throw"bad maskPattern:"+O}},b.getErrorCorrectPolynomial=function(O){for(var w=c([1],0),C=0;C<O;C+=1)w=w.multiply(c([1,s.gexp(C)],0));return w},b.getLengthInBits=function(O,w){if(1<=w&&w<10)switch(O){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw"mode:"+O}else if(w<27)switch(O){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw"mode:"+O}else if(w<41)switch(O){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw"mode:"+O}else throw"type:"+w},b.getLostPoint=function(O){for(var w=O.getModuleCount(),C=0,A=0;A<w;A+=1)for(var S=0;S<w;S+=1){for(var k=0,L=O.isDark(A,S),U=-1;U<=1;U+=1)if(!(A+U<0||w<=A+U))for(var M=-1;M<=1;M+=1)S+M<0||w<=S+M||U==0&&M==0||L==O.isDark(A+U,S+M)&&(k+=1);k>5&&(C+=3+k-5)}for(var A=0;A<w-1;A+=1)for(var S=0;S<w-1;S+=1){var H=0;O.isDark(A,S)&&(H+=1),O.isDark(A+1,S)&&(H+=1),O.isDark(A,S+1)&&(H+=1),O.isDark(A+1,S+1)&&(H+=1),(H==0||H==4)&&(C+=3)}for(var A=0;A<w;A+=1)for(var S=0;S<w-6;S+=1)O.isDark(A,S)&&!O.isDark(A,S+1)&&O.isDark(A,S+2)&&O.isDark(A,S+3)&&O.isDark(A,S+4)&&!O.isDark(A,S+5)&&O.isDark(A,S+6)&&(C+=40);for(var S=0;S<w;S+=1)for(var A=0;A<w-6;A+=1)O.isDark(A,S)&&!O.isDark(A+1,S)&&O.isDark(A+2,S)&&O.isDark(A+3,S)&&O.isDark(A+4,S)&&!O.isDark(A+5,S)&&O.isDark(A+6,S)&&(C+=40);for(var Z=0,S=0;S<w;S+=1)for(var A=0;A<w;A+=1)O.isDark(A,S)&&(Z+=1);var j=Math.abs(100*Z/w/w-50)/5;return C+=j*10,C},b}(),s=function(){for(var _=new Array(256),y=new Array(256),E=0;E<8;E+=1)_[E]=1<<E;for(var E=8;E<256;E+=1)_[E]=_[E-4]^_[E-5]^_[E-6]^_[E-8];for(var E=0;E<255;E+=1)y[_[E]]=E;var x={};return x.glog=function(b){if(b<1)throw"glog("+b+")";return y[b]},x.gexp=function(b){for(;b<0;)b+=255;for(;b>=256;)b-=255;return _[b]},x}();function c(_,y){if(typeof _.length>"u")throw _.length+"/"+y;var E=function(){for(var b=0;b<_.length&&_[b]==0;)b+=1;for(var N=new Array(_.length-b+y),O=0;O<_.length-b;O+=1)N[O]=_[O+b];return N}(),x={};return x.getAt=function(b){return E[b]},x.getLength=function(){return E.length},x.multiply=function(b){for(var N=new Array(x.getLength()+b.getLength()-1),O=0;O<x.getLength();O+=1)for(var w=0;w<b.getLength();w+=1)N[O+w]^=s.gexp(s.glog(x.getAt(O))+s.glog(b.getAt(w)));return c(N,0)},x.mod=function(b){if(x.getLength()-b.getLength()<0)return x;for(var N=s.glog(x.getAt(0))-s.glog(b.getAt(0)),O=new Array(x.getLength()),w=0;w<x.getLength();w+=1)O[w]=x.getAt(w);for(var w=0;w<b.getLength();w+=1)O[w]^=s.gexp(s.glog(b.getAt(w))+N);return c(O,0).mod(b)},x}var h=function(){var _=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],y=function(b,N){var O={};return O.totalCount=b,O.dataCount=N,O},E={},x=function(b,N){switch(N){case r.L:return _[(b-1)*4+0];case r.M:return _[(b-1)*4+1];case r.Q:return _[(b-1)*4+2];case r.H:return _[(b-1)*4+3];default:return}};return E.getRSBlocks=function(b,N){var O=x(b,N);if(typeof O>"u")throw"bad rs block @ typeNumber:"+b+"/errorCorrectionLevel:"+N;for(var w=O.length/3,C=[],A=0;A<w;A+=1)for(var S=O[A*3+0],k=O[A*3+1],L=O[A*3+2],U=0;U<S;U+=1)C.push(y(k,L));return C},E}(),n=function(){var _=[],y=0,E={};return E.getBuffer=function(){return _},E.getAt=function(x){var b=Math.floor(x/8);return(_[b]>>>7-x%8&1)==1},E.put=function(x,b){for(var N=0;N<b;N+=1)E.putBit((x>>>b-N-1&1)==1)},E.getLengthInBits=function(){return y},E.putBit=function(x){var b=Math.floor(y/8);_.length<=b&&_.push(0),x&&(_[b]|=128>>>y%8),y+=1},E},l=function(_){var y=e.MODE_NUMBER,E=_,x={};x.getMode=function(){return y},x.getLength=function(O){return E.length},x.write=function(O){for(var w=E,C=0;C+2<w.length;)O.put(b(w.substring(C,C+3)),10),C+=3;C<w.length&&(w.length-C==1?O.put(b(w.substring(C,C+1)),4):w.length-C==2&&O.put(b(w.substring(C,C+2)),7))};var b=function(O){for(var w=0,C=0;C<O.length;C+=1)w=w*10+N(O.charAt(C));return w},N=function(O){if("0"<=O&&O<="9")return O.charCodeAt(0)-48;throw"illegal char :"+O};return x},p=function(_){var y=e.MODE_ALPHA_NUM,E=_,x={};x.getMode=function(){return y},x.getLength=function(N){return E.length},x.write=function(N){for(var O=E,w=0;w+1<O.length;)N.put(b(O.charAt(w))*45+b(O.charAt(w+1)),11),w+=2;w<O.length&&N.put(b(O.charAt(w)),6)};var b=function(N){if("0"<=N&&N<="9")return N.charCodeAt(0)-48;if("A"<=N&&N<="Z")return N.charCodeAt(0)-65+10;switch(N){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+N}};return x},d=function(_){var y=e.MODE_8BIT_BYTE,E=_,x=t.stringToBytes(_),b={};return b.getMode=function(){return y},b.getLength=function(N){return x.length},b.write=function(N){for(var O=0;O<x.length;O+=1)N.put(x[O],8)},b},a=function(_){var y=e.MODE_KANJI,E=_,x=t.stringToBytesFuncs.SJIS;if(!x)throw"sjis not supported.";(function(O,w){var C=x(O);if(C.length!=2||(C[0]<<8|C[1])!=w)throw"sjis not supported."})("\u53CB",38726);var b=x(_),N={};return N.getMode=function(){return y},N.getLength=function(O){return~~(b.length/2)},N.write=function(O){for(var w=b,C=0;C+1<w.length;){var A=(255&w[C])<<8|255&w[C+1];if(33088<=A&&A<=40956)A-=33088;else if(57408<=A&&A<=60351)A-=49472;else throw"illegal char at "+(C+1)+"/"+A;A=(A>>>8&255)*192+(A&255),O.put(A,13),C+=2}if(C<w.length)throw"illegal char at "+(C+1)},N},u=function(){var _=[],y={};return y.writeByte=function(E){_.push(E&255)},y.writeShort=function(E){y.writeByte(E),y.writeByte(E>>>8)},y.writeBytes=function(E,x,b){x=x||0,b=b||E.length;for(var N=0;N<b;N+=1)y.writeByte(E[N+x])},y.writeString=function(E){for(var x=0;x<E.length;x+=1)y.writeByte(E.charCodeAt(x))},y.toByteArray=function(){return _},y.toString=function(){var E="";E+="[";for(var x=0;x<_.length;x+=1)x>0&&(E+=","),E+=_[x];return E+="]",E},y},g=function(){var _=0,y=0,E=0,x="",b={},N=function(w){x+=String.fromCharCode(O(w&63))},O=function(w){if(!(w<0)){if(w<26)return 65+w;if(w<52)return 97+(w-26);if(w<62)return 48+(w-52);if(w==62)return 43;if(w==63)return 47}throw"n:"+w};return b.writeByte=function(w){for(_=_<<8|w&255,y+=8,E+=1;y>=6;)N(_>>>y-6),y-=6},b.flush=function(){if(y>0&&(N(_<<6-y),_=0,y=0),E%3!=0)for(var w=3-E%3,C=0;C<w;C+=1)x+="="},b.toString=function(){return x},b},f=function(_){var y=_,E=0,x=0,b=0,N={};N.read=function(){for(;b<8;){if(E>=y.length){if(b==0)return-1;throw"unexpected end of file./"+b}var w=y.charAt(E);if(E+=1,w=="=")return b=0,-1;if(w.match(/^\s$/))continue;x=x<<6|O(w.charCodeAt(0)),b+=6}var C=x>>>b-8&255;return b-=8,C};var O=function(w){if(65<=w&&w<=90)return w-65;if(97<=w&&w<=122)return w-97+26;if(48<=w&&w<=57)return w-48+52;if(w==43)return 62;if(w==47)return 63;throw"c:"+w};return N},v=function(_,y){var E=_,x=y,b=new Array(_*y),N={};N.setPixel=function(A,S,k){b[S*E+A]=k},N.write=function(A){A.writeString("GIF87a"),A.writeShort(E),A.writeShort(x),A.writeByte(128),A.writeByte(0),A.writeByte(0),A.writeByte(0),A.writeByte(0),A.writeByte(0),A.writeByte(255),A.writeByte(255),A.writeByte(255),A.writeString(","),A.writeShort(0),A.writeShort(0),A.writeShort(E),A.writeShort(x),A.writeByte(0);var S=2,k=w(S);A.writeByte(S);for(var L=0;k.length-L>255;)A.writeByte(255),A.writeBytes(k,L,255),L+=255;A.writeByte(k.length-L),A.writeBytes(k,L,k.length-L),A.writeByte(0),A.writeString(";")};var O=function(A){var S=A,k=0,L=0,U={};return U.write=function(M,H){if(M>>>H)throw"length over";for(;k+H>=8;)S.writeByte(255&(M<<k|L)),H-=8-k,M>>>=8-k,L=0,k=0;L=M<<k|L,k=k+H},U.flush=function(){k>0&&S.writeByte(L)},U},w=function(A){for(var S=1<<A,k=(1<<A)+1,L=A+1,U=C(),M=0;M<S;M+=1)U.add(String.fromCharCode(M));U.add(String.fromCharCode(S)),U.add(String.fromCharCode(k));var H=u(),Z=O(H);Z.write(S,L);var j=0,$=String.fromCharCode(b[j]);for(j+=1;j<b.length;){var D=String.fromCharCode(b[j]);j+=1,U.contains($+D)?$=$+D:(Z.write(U.indexOf($),L),U.size()<4095&&(U.size()==1<<L&&(L+=1),U.add($+D)),$=D)}return Z.write(U.indexOf($),L),Z.write(k,L),Z.flush(),H.toByteArray()},C=function(){var A={},S=0,k={};return k.add=function(L){if(k.contains(L))throw"dup key:"+L;A[L]=S,S+=1},k.size=function(){return S},k.indexOf=function(L){return A[L]},k.contains=function(L){return typeof A[L]<"u"},k};return N},m=function(_,y,E){for(var x=v(_,y),b=0;b<y;b+=1)for(var N=0;N<_;N+=1)x.setPixel(N,b,E(N,b));var O=u();x.write(O);for(var w=g(),C=O.toByteArray(),A=0;A<C.length;A+=1)w.writeByte(C[A]);return w.flush(),"data:image/gif;base64,"+w};return t}();(function(){Ja.stringToBytesFuncs["UTF-8"]=function(t){function e(r){for(var o=[],i=0;i<r.length;i++){var s=r.charCodeAt(i);s<128?o.push(s):s<2048?o.push(192|s>>6,128|s&63):s<55296||s>=57344?o.push(224|s>>12,128|s>>6&63,128|s&63):(i++,s=65536+((s&1023)<<10|r.charCodeAt(i)&1023),o.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63))}return o}return e(t)}})();(function(t){typeof define=="function"&&define.amd?define([],t):typeof Xa=="object"&&(Qa.exports=t())})(function(){return Ja})});var tc=vs((Br,ci)=>{(function(t,e){typeof Br=="object"&&typeof ci=="object"?ci.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Br=="object"?Br["@lightninglabs/lnc-web"]=e():t["@lightninglabs/lnc-web"]=e()})(Br,function(){return(()=>{var t={5931:function(o){var i;i=()=>(()=>{"use strict";var s={6877:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.faradayServer=d(p.serviceNames.frdrpc.FaradayServer,a)}},7382:function(h,n,l){var p=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(n,"__esModule",{value:!0}),n.LitApi=n.TaprootAssetsApi=n.FaradayApi=n.PoolApi=n.LoopApi=n.LndApi=void 0;var d=l(3152);Object.defineProperty(n,"LndApi",{enumerable:!0,get:function(){return p(d).default}});var a=l(1343);Object.defineProperty(n,"LoopApi",{enumerable:!0,get:function(){return p(a).default}});var u=l(2146);Object.defineProperty(n,"PoolApi",{enumerable:!0,get:function(){return p(u).default}});var g=l(6877);Object.defineProperty(n,"FaradayApi",{enumerable:!0,get:function(){return p(g).default}});var f=l(3151);Object.defineProperty(n,"TaprootAssetsApi",{enumerable:!0,get:function(){return p(f).default}});var v=l(1929);Object.defineProperty(n,"LitApi",{enumerable:!0,get:function(){return p(v).default}})},1929:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.autopilot=d(p.serviceNames.litrpc.Autopilot,a),this.firewall=d(p.serviceNames.litrpc.Firewall,a),this.sessions=d(p.serviceNames.litrpc.Sessions,a),this.status=d(p.serviceNames.litrpc.Status,a)}},3152:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.autopilot=d(p.serviceNames.autopilotrpc.Autopilot,a),this.chainNotifier=d(p.serviceNames.chainrpc.ChainNotifier,a),this.invoices=d(p.serviceNames.invoicesrpc.Invoices,a),this.lightning=d(p.serviceNames.lnrpc.Lightning,a),this.router=d(p.serviceNames.routerrpc.Router,a),this.signer=d(p.serviceNames.signrpc.Signer,a),this.walletKit=d(p.serviceNames.walletrpc.WalletKit,a),this.walletUnlocker=d(p.serviceNames.lnrpc.WalletUnlocker,a),this.watchtower=d(p.serviceNames.watchtowerrpc.Watchtower,a),this.watchtowerClient=d(p.serviceNames.wtclientrpc.WatchtowerClient,a)}},1343:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.swapClient=d(p.serviceNames.looprpc.SwapClient,a),this.debug=d(p.serviceNames.looprpc.Debug,a)}},2146:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.trader=d(p.serviceNames.poolrpc.Trader,a),this.channelAuctioneer=d(p.serviceNames.poolrpc.ChannelAuctioneer,a),this.hashmail=d(p.serviceNames.poolrpc.HashMail,a)}},3151:(h,n,l)=>{Object.defineProperty(n,"__esModule",{value:!0});var p=l(1644);n.default=function(d,a){this.taprootAssets=d(p.serviceNames.taprpc.TaprootAssets,a),this.mint=d(p.serviceNames.mintrpc.Mint,a),this.assetWallet=d(p.serviceNames.assetwalletrpc.AssetWallet,a),this.universe=d(p.serviceNames.universerpc.Universe,a)}},8713:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(f,v,m,_){_===void 0&&(_=m),Object.defineProperty(f,_,{enumerable:!0,get:function(){return v[m]}})}:function(f,v,m,_){_===void 0&&(_=m),f[_]=v[m]}),d=this&&this.__exportStar||function(f,v){for(var m in f)m==="default"||Object.prototype.hasOwnProperty.call(v,m)||p(v,f,m)};Object.defineProperty(n,"__esModule",{value:!0}),n.subscriptionMethods=n.TaprootAssetsApi=n.LitApi=n.FaradayApi=n.PoolApi=n.LoopApi=n.LndApi=n.snakeKeysToCamel=n.isObject=n.camelKeysToSnake=void 0,d(l(5894),n);var a=l(1848);Object.defineProperty(n,"camelKeysToSnake",{enumerable:!0,get:function(){return a.camelKeysToSnake}}),Object.defineProperty(n,"isObject",{enumerable:!0,get:function(){return a.isObject}}),Object.defineProperty(n,"snakeKeysToCamel",{enumerable:!0,get:function(){return a.snakeKeysToCamel}});var u=l(7382);Object.defineProperty(n,"LndApi",{enumerable:!0,get:function(){return u.LndApi}}),Object.defineProperty(n,"LoopApi",{enumerable:!0,get:function(){return u.LoopApi}}),Object.defineProperty(n,"PoolApi",{enumerable:!0,get:function(){return u.PoolApi}}),Object.defineProperty(n,"FaradayApi",{enumerable:!0,get:function(){return u.FaradayApi}}),Object.defineProperty(n,"LitApi",{enumerable:!0,get:function(){return u.LitApi}}),Object.defineProperty(n,"TaprootAssetsApi",{enumerable:!0,get:function(){return u.TaprootAssetsApi}});var g=l(1644);Object.defineProperty(n,"subscriptionMethods",{enumerable:!0,get:function(){return g.subscriptionMethods}})},3241:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(9825),n)},5273:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(6726),n)},1071:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(5374),n)},2076:(h,n)=>{var l,p,d,a;Object.defineProperty(n,"__esModule",{value:!0}),n.CloseRecommendationRequest_Metric=n.EntryType=n.FiatBackend=n.Granularity=void 0,(a=n.Granularity||(n.Granularity={})).UNKNOWN_GRANULARITY="UNKNOWN_GRANULARITY",a.MINUTE="MINUTE",a.FIVE_MINUTES="FIVE_MINUTES",a.FIFTEEN_MINUTES="FIFTEEN_MINUTES",a.THIRTY_MINUTES="THIRTY_MINUTES",a.HOUR="HOUR",a.SIX_HOURS="SIX_HOURS",a.TWELVE_HOURS="TWELVE_HOURS",a.DAY="DAY",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.FiatBackend||(n.FiatBackend={})).UNKNOWN_FIATBACKEND="UNKNOWN_FIATBACKEND",d.COINCAP="COINCAP",d.COINDESK="COINDESK",d.CUSTOM="CUSTOM",d.COINGECKO="COINGECKO",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.EntryType||(n.EntryType={})).UNKNOWN="UNKNOWN",p.LOCAL_CHANNEL_OPEN="LOCAL_CHANNEL_OPEN",p.REMOTE_CHANNEL_OPEN="REMOTE_CHANNEL_OPEN",p.CHANNEL_OPEN_FEE="CHANNEL_OPEN_FEE",p.CHANNEL_CLOSE="CHANNEL_CLOSE",p.RECEIPT="RECEIPT",p.PAYMENT="PAYMENT",p.FEE="FEE",p.CIRCULAR_RECEIPT="CIRCULAR_RECEIPT",p.FORWARD="FORWARD",p.FORWARD_FEE="FORWARD_FEE",p.CIRCULAR_PAYMENT="CIRCULAR_PAYMENT",p.CIRCULAR_FEE="CIRCULAR_FEE",p.SWEEP="SWEEP",p.SWEEP_FEE="SWEEP_FEE",p.CHANNEL_CLOSE_FEE="CHANNEL_CLOSE_FEE",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.CloseRecommendationRequest_Metric||(n.CloseRecommendationRequest_Metric={})).UNKNOWN="UNKNOWN",l.UPTIME="UPTIME",l.REVENUE="REVENUE",l.INCOMING_VOLUME="INCOMING_VOLUME",l.OUTGOING_VOLUME="OUTGOING_VOLUME",l.TOTAL_VOLUME="TOTAL_VOLUME",l.UNRECOGNIZED="UNRECOGNIZED"},915:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(2076),n)},5894:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(L,U,M,H){H===void 0&&(H=M),Object.defineProperty(L,H,{enumerable:!0,get:function(){return U[M]}})}:function(L,U,M,H){H===void 0&&(H=M),L[H]=U[M]}),d=this&&this.__setModuleDefault||(Object.create?function(L,U){Object.defineProperty(L,"default",{enumerable:!0,value:U})}:function(L,U){L.default=U}),a=this&&this.__importStar||function(L){if(L&&L.__esModule)return L;var U={};if(L!=null)for(var M in L)M!=="default"&&Object.prototype.hasOwnProperty.call(L,M)&&p(U,L,M);return d(U,L),U};Object.defineProperty(n,"__esModule",{value:!0}),n.universerpc=n.taprpc=n.mintrpc=n.assetwalletrpc=n.poolrpc=n.looprpc=n.wtclientrpc=n.watchtowerrpc=n.walletrpc=n.signrpc=n.routerrpc=n.lnrpc=n.invoicesrpc=n.chainrpc=n.autopilotrpc=n.litrpc=n.frdrpc=void 0;var u=a(l(915));n.frdrpc=u;var g=a(l(5903));n.litrpc=g;var f=a(l(5273));n.autopilotrpc=f;var v=a(l(1071));n.chainrpc=v;var m=a(l(5312));n.invoicesrpc=m;var _=a(l(8452));n.lnrpc=_;var y=a(l(1226));n.routerrpc=y;var E=a(l(1207));n.signrpc=E;var x=a(l(9367));n.walletrpc=x;var b=a(l(6412));n.watchtowerrpc=b;var N=a(l(3946));n.wtclientrpc=N;var O=a(l(9011));n.looprpc=O;var w=a(l(3377));n.poolrpc=w;var C=a(l(3241));n.assetwalletrpc=C;var A=a(l(956));n.mintrpc=A;var S=a(l(4914));n.taprpc=S;var k=a(l(1877));n.universerpc=k},5312:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(6212),n)},481:(h,n)=>{var l;Object.defineProperty(n,"__esModule",{value:!0}),n.ActionState=void 0,(l=n.ActionState||(n.ActionState={})).STATE_UNKNOWN="STATE_UNKNOWN",l.STATE_PENDING="STATE_PENDING",l.STATE_DONE="STATE_DONE",l.STATE_ERROR="STATE_ERROR",l.UNRECOGNIZED="UNRECOGNIZED"},6166:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},2199:(h,n)=>{var l,p;Object.defineProperty(n,"__esModule",{value:!0}),n.SessionState=n.SessionType=void 0,(p=n.SessionType||(n.SessionType={})).TYPE_MACAROON_READONLY="TYPE_MACAROON_READONLY",p.TYPE_MACAROON_ADMIN="TYPE_MACAROON_ADMIN",p.TYPE_MACAROON_CUSTOM="TYPE_MACAROON_CUSTOM",p.TYPE_UI_PASSWORD="TYPE_UI_PASSWORD",p.TYPE_AUTOPILOT="TYPE_AUTOPILOT",p.TYPE_MACAROON_ACCOUNT="TYPE_MACAROON_ACCOUNT",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.SessionState||(n.SessionState={})).STATE_CREATED="STATE_CREATED",l.STATE_IN_USE="STATE_IN_USE",l.STATE_REVOKED="STATE_REVOKED",l.STATE_EXPIRED="STATE_EXPIRED",l.UNRECOGNIZED="UNRECOGNIZED"},9815:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},5903:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(481),n),d(l(6166),n),d(l(2199),n),d(l(9815),n)},6726:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},5374:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},6212:(h,n)=>{var l;Object.defineProperty(n,"__esModule",{value:!0}),n.LookupModifier=void 0,(l=n.LookupModifier||(n.LookupModifier={})).DEFAULT="DEFAULT",l.HTLC_SET_ONLY="HTLC_SET_ONLY",l.HTLC_SET_BLANK="HTLC_SET_BLANK",l.UNRECOGNIZED="UNRECOGNIZED"},9021:(h,n)=>{var l,p,d,a,u,g,f,v,m,_,y,E,x,b,N,O,w,C,A,S;Object.defineProperty(n,"__esModule",{value:!0}),n.Failure_FailureCode=n.HTLCAttempt_HTLCStatus=n.Payment_PaymentStatus=n.Invoice_InvoiceState=n.ChannelEventUpdate_UpdateType=n.PendingChannelsResponse_ForceClosedChannel_AnchorState=n.PeerEvent_EventType=n.Peer_SyncType=n.ChannelCloseSummary_ClosureType=n.UpdateFailure=n.FeatureBit=n.PaymentFailureReason=n.InvoiceHTLCState=n.NodeMetricType=n.ResolutionOutcome=n.ResolutionType=n.Initiator=n.CommitmentType=n.AddressType=n.OutputScriptType=void 0,(S=n.OutputScriptType||(n.OutputScriptType={})).SCRIPT_TYPE_PUBKEY_HASH="SCRIPT_TYPE_PUBKEY_HASH",S.SCRIPT_TYPE_SCRIPT_HASH="SCRIPT_TYPE_SCRIPT_HASH",S.SCRIPT_TYPE_WITNESS_V0_PUBKEY_HASH="SCRIPT_TYPE_WITNESS_V0_PUBKEY_HASH",S.SCRIPT_TYPE_WITNESS_V0_SCRIPT_HASH="SCRIPT_TYPE_WITNESS_V0_SCRIPT_HASH",S.SCRIPT_TYPE_PUBKEY="SCRIPT_TYPE_PUBKEY",S.SCRIPT_TYPE_MULTISIG="SCRIPT_TYPE_MULTISIG",S.SCRIPT_TYPE_NULLDATA="SCRIPT_TYPE_NULLDATA",S.SCRIPT_TYPE_NON_STANDARD="SCRIPT_TYPE_NON_STANDARD",S.SCRIPT_TYPE_WITNESS_UNKNOWN="SCRIPT_TYPE_WITNESS_UNKNOWN",S.SCRIPT_TYPE_WITNESS_V1_TAPROOT="SCRIPT_TYPE_WITNESS_V1_TAPROOT",S.UNRECOGNIZED="UNRECOGNIZED",(A=n.AddressType||(n.AddressType={})).WITNESS_PUBKEY_HASH="WITNESS_PUBKEY_HASH",A.NESTED_PUBKEY_HASH="NESTED_PUBKEY_HASH",A.UNUSED_WITNESS_PUBKEY_HASH="UNUSED_WITNESS_PUBKEY_HASH",A.UNUSED_NESTED_PUBKEY_HASH="UNUSED_NESTED_PUBKEY_HASH",A.TAPROOT_PUBKEY="TAPROOT_PUBKEY",A.UNUSED_TAPROOT_PUBKEY="UNUSED_TAPROOT_PUBKEY",A.UNRECOGNIZED="UNRECOGNIZED",(C=n.CommitmentType||(n.CommitmentType={})).UNKNOWN_COMMITMENT_TYPE="UNKNOWN_COMMITMENT_TYPE",C.LEGACY="LEGACY",C.STATIC_REMOTE_KEY="STATIC_REMOTE_KEY",C.ANCHORS="ANCHORS",C.SCRIPT_ENFORCED_LEASE="SCRIPT_ENFORCED_LEASE",C.SIMPLE_TAPROOT="SIMPLE_TAPROOT",C.UNRECOGNIZED="UNRECOGNIZED",(w=n.Initiator||(n.Initiator={})).INITIATOR_UNKNOWN="INITIATOR_UNKNOWN",w.INITIATOR_LOCAL="INITIATOR_LOCAL",w.INITIATOR_REMOTE="INITIATOR_REMOTE",w.INITIATOR_BOTH="INITIATOR_BOTH",w.UNRECOGNIZED="UNRECOGNIZED",(O=n.ResolutionType||(n.ResolutionType={})).TYPE_UNKNOWN="TYPE_UNKNOWN",O.ANCHOR="ANCHOR",O.INCOMING_HTLC="INCOMING_HTLC",O.OUTGOING_HTLC="OUTGOING_HTLC",O.COMMIT="COMMIT",O.UNRECOGNIZED="UNRECOGNIZED",(N=n.ResolutionOutcome||(n.ResolutionOutcome={})).OUTCOME_UNKNOWN="OUTCOME_UNKNOWN",N.CLAIMED="CLAIMED",N.UNCLAIMED="UNCLAIMED",N.ABANDONED="ABANDONED",N.FIRST_STAGE="FIRST_STAGE",N.TIMEOUT="TIMEOUT",N.UNRECOGNIZED="UNRECOGNIZED",(b=n.NodeMetricType||(n.NodeMetricType={})).UNKNOWN="UNKNOWN",b.BETWEENNESS_CENTRALITY="BETWEENNESS_CENTRALITY",b.UNRECOGNIZED="UNRECOGNIZED",(x=n.InvoiceHTLCState||(n.InvoiceHTLCState={})).ACCEPTED="ACCEPTED",x.SETTLED="SETTLED",x.CANCELED="CANCELED",x.UNRECOGNIZED="UNRECOGNIZED",(E=n.PaymentFailureReason||(n.PaymentFailureReason={})).FAILURE_REASON_NONE="FAILURE_REASON_NONE",E.FAILURE_REASON_TIMEOUT="FAILURE_REASON_TIMEOUT",E.FAILURE_REASON_NO_ROUTE="FAILURE_REASON_NO_ROUTE",E.FAILURE_REASON_ERROR="FAILURE_REASON_ERROR",E.FAILURE_REASON_INCORRECT_PAYMENT_DETAILS="FAILURE_REASON_INCORRECT_PAYMENT_DETAILS",E.FAILURE_REASON_INSUFFICIENT_BALANCE="FAILURE_REASON_INSUFFICIENT_BALANCE",E.UNRECOGNIZED="UNRECOGNIZED",(y=n.FeatureBit||(n.FeatureBit={})).DATALOSS_PROTECT_REQ="DATALOSS_PROTECT_REQ",y.DATALOSS_PROTECT_OPT="DATALOSS_PROTECT_OPT",y.INITIAL_ROUING_SYNC="INITIAL_ROUING_SYNC",y.UPFRONT_SHUTDOWN_SCRIPT_REQ="UPFRONT_SHUTDOWN_SCRIPT_REQ",y.UPFRONT_SHUTDOWN_SCRIPT_OPT="UPFRONT_SHUTDOWN_SCRIPT_OPT",y.GOSSIP_QUERIES_REQ="GOSSIP_QUERIES_REQ",y.GOSSIP_QUERIES_OPT="GOSSIP_QUERIES_OPT",y.TLV_ONION_REQ="TLV_ONION_REQ",y.TLV_ONION_OPT="TLV_ONION_OPT",y.EXT_GOSSIP_QUERIES_REQ="EXT_GOSSIP_QUERIES_REQ",y.EXT_GOSSIP_QUERIES_OPT="EXT_GOSSIP_QUERIES_OPT",y.STATIC_REMOTE_KEY_REQ="STATIC_REMOTE_KEY_REQ",y.STATIC_REMOTE_KEY_OPT="STATIC_REMOTE_KEY_OPT",y.PAYMENT_ADDR_REQ="PAYMENT_ADDR_REQ",y.PAYMENT_ADDR_OPT="PAYMENT_ADDR_OPT",y.MPP_REQ="MPP_REQ",y.MPP_OPT="MPP_OPT",y.WUMBO_CHANNELS_REQ="WUMBO_CHANNELS_REQ",y.WUMBO_CHANNELS_OPT="WUMBO_CHANNELS_OPT",y.ANCHORS_REQ="ANCHORS_REQ",y.ANCHORS_OPT="ANCHORS_OPT",y.ANCHORS_ZERO_FEE_HTLC_REQ="ANCHORS_ZERO_FEE_HTLC_REQ",y.ANCHORS_ZERO_FEE_HTLC_OPT="ANCHORS_ZERO_FEE_HTLC_OPT",y.AMP_REQ="AMP_REQ",y.AMP_OPT="AMP_OPT",y.UNRECOGNIZED="UNRECOGNIZED",(_=n.UpdateFailure||(n.UpdateFailure={})).UPDATE_FAILURE_UNKNOWN="UPDATE_FAILURE_UNKNOWN",_.UPDATE_FAILURE_PENDING="UPDATE_FAILURE_PENDING",_.UPDATE_FAILURE_NOT_FOUND="UPDATE_FAILURE_NOT_FOUND",_.UPDATE_FAILURE_INTERNAL_ERR="UPDATE_FAILURE_INTERNAL_ERR",_.UPDATE_FAILURE_INVALID_PARAMETER="UPDATE_FAILURE_INVALID_PARAMETER",_.UNRECOGNIZED="UNRECOGNIZED",(m=n.ChannelCloseSummary_ClosureType||(n.ChannelCloseSummary_ClosureType={})).COOPERATIVE_CLOSE="COOPERATIVE_CLOSE",m.LOCAL_FORCE_CLOSE="LOCAL_FORCE_CLOSE",m.REMOTE_FORCE_CLOSE="REMOTE_FORCE_CLOSE",m.BREACH_CLOSE="BREACH_CLOSE",m.FUNDING_CANCELED="FUNDING_CANCELED",m.ABANDONED="ABANDONED",m.UNRECOGNIZED="UNRECOGNIZED",(v=n.Peer_SyncType||(n.Peer_SyncType={})).UNKNOWN_SYNC="UNKNOWN_SYNC",v.ACTIVE_SYNC="ACTIVE_SYNC",v.PASSIVE_SYNC="PASSIVE_SYNC",v.PINNED_SYNC="PINNED_SYNC",v.UNRECOGNIZED="UNRECOGNIZED",(f=n.PeerEvent_EventType||(n.PeerEvent_EventType={})).PEER_ONLINE="PEER_ONLINE",f.PEER_OFFLINE="PEER_OFFLINE",f.UNRECOGNIZED="UNRECOGNIZED",(g=n.PendingChannelsResponse_ForceClosedChannel_AnchorState||(n.PendingChannelsResponse_ForceClosedChannel_AnchorState={})).LIMBO="LIMBO",g.RECOVERED="RECOVERED",g.LOST="LOST",g.UNRECOGNIZED="UNRECOGNIZED",(u=n.ChannelEventUpdate_UpdateType||(n.ChannelEventUpdate_UpdateType={})).OPEN_CHANNEL="OPEN_CHANNEL",u.CLOSED_CHANNEL="CLOSED_CHANNEL",u.ACTIVE_CHANNEL="ACTIVE_CHANNEL",u.INACTIVE_CHANNEL="INACTIVE_CHANNEL",u.PENDING_OPEN_CHANNEL="PENDING_OPEN_CHANNEL",u.FULLY_RESOLVED_CHANNEL="FULLY_RESOLVED_CHANNEL",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.Invoice_InvoiceState||(n.Invoice_InvoiceState={})).OPEN="OPEN",a.SETTLED="SETTLED",a.CANCELED="CANCELED",a.ACCEPTED="ACCEPTED",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.Payment_PaymentStatus||(n.Payment_PaymentStatus={})).UNKNOWN="UNKNOWN",d.IN_FLIGHT="IN_FLIGHT",d.SUCCEEDED="SUCCEEDED",d.FAILED="FAILED",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.HTLCAttempt_HTLCStatus||(n.HTLCAttempt_HTLCStatus={})).IN_FLIGHT="IN_FLIGHT",p.SUCCEEDED="SUCCEEDED",p.FAILED="FAILED",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.Failure_FailureCode||(n.Failure_FailureCode={})).RESERVED="RESERVED",l.INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS="INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS",l.INCORRECT_PAYMENT_AMOUNT="INCORRECT_PAYMENT_AMOUNT",l.FINAL_INCORRECT_CLTV_EXPIRY="FINAL_INCORRECT_CLTV_EXPIRY",l.FINAL_INCORRECT_HTLC_AMOUNT="FINAL_INCORRECT_HTLC_AMOUNT",l.FINAL_EXPIRY_TOO_SOON="FINAL_EXPIRY_TOO_SOON",l.INVALID_REALM="INVALID_REALM",l.EXPIRY_TOO_SOON="EXPIRY_TOO_SOON",l.INVALID_ONION_VERSION="INVALID_ONION_VERSION",l.INVALID_ONION_HMAC="INVALID_ONION_HMAC",l.INVALID_ONION_KEY="INVALID_ONION_KEY",l.AMOUNT_BELOW_MINIMUM="AMOUNT_BELOW_MINIMUM",l.FEE_INSUFFICIENT="FEE_INSUFFICIENT",l.INCORRECT_CLTV_EXPIRY="INCORRECT_CLTV_EXPIRY",l.CHANNEL_DISABLED="CHANNEL_DISABLED",l.TEMPORARY_CHANNEL_FAILURE="TEMPORARY_CHANNEL_FAILURE",l.REQUIRED_NODE_FEATURE_MISSING="REQUIRED_NODE_FEATURE_MISSING",l.REQUIRED_CHANNEL_FEATURE_MISSING="REQUIRED_CHANNEL_FEATURE_MISSING",l.UNKNOWN_NEXT_PEER="UNKNOWN_NEXT_PEER",l.TEMPORARY_NODE_FAILURE="TEMPORARY_NODE_FAILURE",l.PERMANENT_NODE_FAILURE="PERMANENT_NODE_FAILURE",l.PERMANENT_CHANNEL_FAILURE="PERMANENT_CHANNEL_FAILURE",l.EXPIRY_TOO_FAR="EXPIRY_TOO_FAR",l.MPP_TIMEOUT="MPP_TIMEOUT",l.INVALID_ONION_PAYLOAD="INVALID_ONION_PAYLOAD",l.INTERNAL_FAILURE="INTERNAL_FAILURE",l.UNKNOWN_FAILURE="UNKNOWN_FAILURE",l.UNREADABLE_FAILURE="UNREADABLE_FAILURE",l.UNRECOGNIZED="UNRECOGNIZED"},4288:(h,n)=>{var l,p,d,a,u,g;Object.defineProperty(n,"__esModule",{value:!0}),n.HtlcEvent_EventType=n.MissionControlConfig_ProbabilityModel=n.ChanStatusAction=n.ResolveHoldForwardAction=n.PaymentState=n.FailureDetail=void 0,(g=n.FailureDetail||(n.FailureDetail={})).UNKNOWN="UNKNOWN",g.NO_DETAIL="NO_DETAIL",g.ONION_DECODE="ONION_DECODE",g.LINK_NOT_ELIGIBLE="LINK_NOT_ELIGIBLE",g.ON_CHAIN_TIMEOUT="ON_CHAIN_TIMEOUT",g.HTLC_EXCEEDS_MAX="HTLC_EXCEEDS_MAX",g.INSUFFICIENT_BALANCE="INSUFFICIENT_BALANCE",g.INCOMPLETE_FORWARD="INCOMPLETE_FORWARD",g.HTLC_ADD_FAILED="HTLC_ADD_FAILED",g.FORWARDS_DISABLED="FORWARDS_DISABLED",g.INVOICE_CANCELED="INVOICE_CANCELED",g.INVOICE_UNDERPAID="INVOICE_UNDERPAID",g.INVOICE_EXPIRY_TOO_SOON="INVOICE_EXPIRY_TOO_SOON",g.INVOICE_NOT_OPEN="INVOICE_NOT_OPEN",g.MPP_INVOICE_TIMEOUT="MPP_INVOICE_TIMEOUT",g.ADDRESS_MISMATCH="ADDRESS_MISMATCH",g.SET_TOTAL_MISMATCH="SET_TOTAL_MISMATCH",g.SET_TOTAL_TOO_LOW="SET_TOTAL_TOO_LOW",g.SET_OVERPAID="SET_OVERPAID",g.UNKNOWN_INVOICE="UNKNOWN_INVOICE",g.INVALID_KEYSEND="INVALID_KEYSEND",g.MPP_IN_PROGRESS="MPP_IN_PROGRESS",g.CIRCULAR_ROUTE="CIRCULAR_ROUTE",g.UNRECOGNIZED="UNRECOGNIZED",(u=n.PaymentState||(n.PaymentState={})).IN_FLIGHT="IN_FLIGHT",u.SUCCEEDED="SUCCEEDED",u.FAILED_TIMEOUT="FAILED_TIMEOUT",u.FAILED_NO_ROUTE="FAILED_NO_ROUTE",u.FAILED_ERROR="FAILED_ERROR",u.FAILED_INCORRECT_PAYMENT_DETAILS="FAILED_INCORRECT_PAYMENT_DETAILS",u.FAILED_INSUFFICIENT_BALANCE="FAILED_INSUFFICIENT_BALANCE",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.ResolveHoldForwardAction||(n.ResolveHoldForwardAction={})).SETTLE="SETTLE",a.FAIL="FAIL",a.RESUME="RESUME",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.ChanStatusAction||(n.ChanStatusAction={})).ENABLE="ENABLE",d.DISABLE="DISABLE",d.AUTO="AUTO",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.MissionControlConfig_ProbabilityModel||(n.MissionControlConfig_ProbabilityModel={})).APRIORI="APRIORI",p.BIMODAL="BIMODAL",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.HtlcEvent_EventType||(n.HtlcEvent_EventType={})).UNKNOWN="UNKNOWN",l.SEND="SEND",l.RECEIVE="RECEIVE",l.FORWARD="FORWARD",l.UNRECOGNIZED="UNRECOGNIZED"},885:(h,n)=>{var l,p;Object.defineProperty(n,"__esModule",{value:!0}),n.MuSig2Version=n.SignMethod=void 0,(p=n.SignMethod||(n.SignMethod={})).SIGN_METHOD_WITNESS_V0="SIGN_METHOD_WITNESS_V0",p.SIGN_METHOD_TAPROOT_KEY_SPEND_BIP0086="SIGN_METHOD_TAPROOT_KEY_SPEND_BIP0086",p.SIGN_METHOD_TAPROOT_KEY_SPEND="SIGN_METHOD_TAPROOT_KEY_SPEND",p.SIGN_METHOD_TAPROOT_SCRIPT_SPEND="SIGN_METHOD_TAPROOT_SCRIPT_SPEND",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.MuSig2Version||(n.MuSig2Version={})).MUSIG2_VERSION_UNDEFINED="MUSIG2_VERSION_UNDEFINED",l.MUSIG2_VERSION_V040="MUSIG2_VERSION_V040",l.MUSIG2_VERSION_V100RC2="MUSIG2_VERSION_V100RC2",l.UNRECOGNIZED="UNRECOGNIZED"},1213:(h,n)=>{var l,p,d;Object.defineProperty(n,"__esModule",{value:!0}),n.ChangeAddressType=n.WitnessType=n.AddressType=void 0,(d=n.AddressType||(n.AddressType={})).UNKNOWN="UNKNOWN",d.WITNESS_PUBKEY_HASH="WITNESS_PUBKEY_HASH",d.NESTED_WITNESS_PUBKEY_HASH="NESTED_WITNESS_PUBKEY_HASH",d.HYBRID_NESTED_WITNESS_PUBKEY_HASH="HYBRID_NESTED_WITNESS_PUBKEY_HASH",d.TAPROOT_PUBKEY="TAPROOT_PUBKEY",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.WitnessType||(n.WitnessType={})).UNKNOWN_WITNESS="UNKNOWN_WITNESS",p.COMMITMENT_TIME_LOCK="COMMITMENT_TIME_LOCK",p.COMMITMENT_NO_DELAY="COMMITMENT_NO_DELAY",p.COMMITMENT_REVOKE="COMMITMENT_REVOKE",p.HTLC_OFFERED_REVOKE="HTLC_OFFERED_REVOKE",p.HTLC_ACCEPTED_REVOKE="HTLC_ACCEPTED_REVOKE",p.HTLC_OFFERED_TIMEOUT_SECOND_LEVEL="HTLC_OFFERED_TIMEOUT_SECOND_LEVEL",p.HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL="HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL",p.HTLC_OFFERED_REMOTE_TIMEOUT="HTLC_OFFERED_REMOTE_TIMEOUT",p.HTLC_ACCEPTED_REMOTE_SUCCESS="HTLC_ACCEPTED_REMOTE_SUCCESS",p.HTLC_SECOND_LEVEL_REVOKE="HTLC_SECOND_LEVEL_REVOKE",p.WITNESS_KEY_HASH="WITNESS_KEY_HASH",p.NESTED_WITNESS_KEY_HASH="NESTED_WITNESS_KEY_HASH",p.COMMITMENT_ANCHOR="COMMITMENT_ANCHOR",p.COMMITMENT_NO_DELAY_TWEAKLESS="COMMITMENT_NO_DELAY_TWEAKLESS",p.COMMITMENT_TO_REMOTE_CONFIRMED="COMMITMENT_TO_REMOTE_CONFIRMED",p.HTLC_OFFERED_TIMEOUT_SECOND_LEVEL_INPUT_CONFIRMED="HTLC_OFFERED_TIMEOUT_SECOND_LEVEL_INPUT_CONFIRMED",p.HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL_INPUT_CONFIRMED="HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL_INPUT_CONFIRMED",p.LEASE_COMMITMENT_TIME_LOCK="LEASE_COMMITMENT_TIME_LOCK",p.LEASE_COMMITMENT_TO_REMOTE_CONFIRMED="LEASE_COMMITMENT_TO_REMOTE_CONFIRMED",p.LEASE_HTLC_OFFERED_TIMEOUT_SECOND_LEVEL="LEASE_HTLC_OFFERED_TIMEOUT_SECOND_LEVEL",p.LEASE_HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL="LEASE_HTLC_ACCEPTED_SUCCESS_SECOND_LEVEL",p.TAPROOT_PUB_KEY_SPEND="TAPROOT_PUB_KEY_SPEND",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.ChangeAddressType||(n.ChangeAddressType={})).CHANGE_ADDRESS_TYPE_UNSPECIFIED="CHANGE_ADDRESS_TYPE_UNSPECIFIED",l.CHANGE_ADDRESS_TYPE_P2TR="CHANGE_ADDRESS_TYPE_P2TR",l.UNRECOGNIZED="UNRECOGNIZED"},7939:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},2482:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},9921:(h,n)=>{var l;Object.defineProperty(n,"__esModule",{value:!0}),n.PolicyType=void 0,(l=n.PolicyType||(n.PolicyType={})).LEGACY="LEGACY",l.ANCHOR="ANCHOR",l.UNRECOGNIZED="UNRECOGNIZED"},8452:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(9021),n),d(l(7939),n)},5598:(h,n)=>{var l,p,d,a,u,g;Object.defineProperty(n,"__esModule",{value:!0}),n.AutoReason=n.LiquidityRuleType=n.FailureReason=n.SwapState=n.SwapType=n.AddressType=void 0,(g=n.AddressType||(n.AddressType={})).ADDRESS_TYPE_UNKNOWN="ADDRESS_TYPE_UNKNOWN",g.TAPROOT_PUBKEY="TAPROOT_PUBKEY",g.UNRECOGNIZED="UNRECOGNIZED",(u=n.SwapType||(n.SwapType={})).LOOP_OUT="LOOP_OUT",u.LOOP_IN="LOOP_IN",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.SwapState||(n.SwapState={})).INITIATED="INITIATED",a.PREIMAGE_REVEALED="PREIMAGE_REVEALED",a.HTLC_PUBLISHED="HTLC_PUBLISHED",a.SUCCESS="SUCCESS",a.FAILED="FAILED",a.INVOICE_SETTLED="INVOICE_SETTLED",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.FailureReason||(n.FailureReason={})).FAILURE_REASON_NONE="FAILURE_REASON_NONE",d.FAILURE_REASON_OFFCHAIN="FAILURE_REASON_OFFCHAIN",d.FAILURE_REASON_TIMEOUT="FAILURE_REASON_TIMEOUT",d.FAILURE_REASON_SWEEP_TIMEOUT="FAILURE_REASON_SWEEP_TIMEOUT",d.FAILURE_REASON_INSUFFICIENT_VALUE="FAILURE_REASON_INSUFFICIENT_VALUE",d.FAILURE_REASON_TEMPORARY="FAILURE_REASON_TEMPORARY",d.FAILURE_REASON_INCORRECT_AMOUNT="FAILURE_REASON_INCORRECT_AMOUNT",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.LiquidityRuleType||(n.LiquidityRuleType={})).UNKNOWN="UNKNOWN",p.THRESHOLD="THRESHOLD",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.AutoReason||(n.AutoReason={})).AUTO_REASON_UNKNOWN="AUTO_REASON_UNKNOWN",l.AUTO_REASON_BUDGET_NOT_STARTED="AUTO_REASON_BUDGET_NOT_STARTED",l.AUTO_REASON_SWEEP_FEES="AUTO_REASON_SWEEP_FEES",l.AUTO_REASON_BUDGET_ELAPSED="AUTO_REASON_BUDGET_ELAPSED",l.AUTO_REASON_IN_FLIGHT="AUTO_REASON_IN_FLIGHT",l.AUTO_REASON_SWAP_FEE="AUTO_REASON_SWAP_FEE",l.AUTO_REASON_MINER_FEE="AUTO_REASON_MINER_FEE",l.AUTO_REASON_PREPAY="AUTO_REASON_PREPAY",l.AUTO_REASON_FAILURE_BACKOFF="AUTO_REASON_FAILURE_BACKOFF",l.AUTO_REASON_LOOP_OUT="AUTO_REASON_LOOP_OUT",l.AUTO_REASON_LOOP_IN="AUTO_REASON_LOOP_IN",l.AUTO_REASON_LIQUIDITY_OK="AUTO_REASON_LIQUIDITY_OK",l.AUTO_REASON_BUDGET_INSUFFICIENT="AUTO_REASON_BUDGET_INSUFFICIENT",l.AUTO_REASON_FEE_INSUFFICIENT="AUTO_REASON_FEE_INSUFFICIENT",l.UNRECOGNIZED="UNRECOGNIZED"},9283:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},9011:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(5598),n),d(l(9283),n)},956:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(800),n)},9927:(h,n)=>{var l,p,d,a,u,g,f,v,m,_,y,E,x,b;Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidOrder_FailReason=n.AccountDiff_AccountState=n.SubscribeError_Error=n.OrderReject_OrderRejectReason=n.OrderMatchReject_RejectReason=n.DurationBucketState=n.OrderState=n.ChannelConfirmationConstraints=n.ChannelAnnouncementConstraints=n.NodeTier=n.AuctionType=n.OrderChannelType=n.AuctionAccountState=n.ChannelType=void 0,(b=n.ChannelType||(n.ChannelType={})).TWEAKLESS="TWEAKLESS",b.ANCHORS="ANCHORS",b.SCRIPT_ENFORCED_LEASE="SCRIPT_ENFORCED_LEASE",b.UNRECOGNIZED="UNRECOGNIZED",(x=n.AuctionAccountState||(n.AuctionAccountState={})).STATE_PENDING_OPEN="STATE_PENDING_OPEN",x.STATE_OPEN="STATE_OPEN",x.STATE_EXPIRED="STATE_EXPIRED",x.STATE_PENDING_UPDATE="STATE_PENDING_UPDATE",x.STATE_CLOSED="STATE_CLOSED",x.STATE_PENDING_BATCH="STATE_PENDING_BATCH",x.STATE_EXPIRED_PENDING_UPDATE="STATE_EXPIRED_PENDING_UPDATE",x.UNRECOGNIZED="UNRECOGNIZED",(E=n.OrderChannelType||(n.OrderChannelType={})).ORDER_CHANNEL_TYPE_UNKNOWN="ORDER_CHANNEL_TYPE_UNKNOWN",E.ORDER_CHANNEL_TYPE_PEER_DEPENDENT="ORDER_CHANNEL_TYPE_PEER_DEPENDENT",E.ORDER_CHANNEL_TYPE_SCRIPT_ENFORCED="ORDER_CHANNEL_TYPE_SCRIPT_ENFORCED",E.UNRECOGNIZED="UNRECOGNIZED",(y=n.AuctionType||(n.AuctionType={})).AUCTION_TYPE_BTC_INBOUND_LIQUIDITY="AUCTION_TYPE_BTC_INBOUND_LIQUIDITY",y.AUCTION_TYPE_BTC_OUTBOUND_LIQUIDITY="AUCTION_TYPE_BTC_OUTBOUND_LIQUIDITY",y.UNRECOGNIZED="UNRECOGNIZED",(_=n.NodeTier||(n.NodeTier={})).TIER_DEFAULT="TIER_DEFAULT",_.TIER_0="TIER_0",_.TIER_1="TIER_1",_.UNRECOGNIZED="UNRECOGNIZED",(m=n.ChannelAnnouncementConstraints||(n.ChannelAnnouncementConstraints={})).ANNOUNCEMENT_NO_PREFERENCE="ANNOUNCEMENT_NO_PREFERENCE",m.ONLY_ANNOUNCED="ONLY_ANNOUNCED",m.ONLY_UNANNOUNCED="ONLY_UNANNOUNCED",m.UNRECOGNIZED="UNRECOGNIZED",(v=n.ChannelConfirmationConstraints||(n.ChannelConfirmationConstraints={})).CONFIRMATION_NO_PREFERENCE="CONFIRMATION_NO_PREFERENCE",v.ONLY_CONFIRMED="ONLY_CONFIRMED",v.ONLY_ZEROCONF="ONLY_ZEROCONF",v.UNRECOGNIZED="UNRECOGNIZED",(f=n.OrderState||(n.OrderState={})).ORDER_SUBMITTED="ORDER_SUBMITTED",f.ORDER_CLEARED="ORDER_CLEARED",f.ORDER_PARTIALLY_FILLED="ORDER_PARTIALLY_FILLED",f.ORDER_EXECUTED="ORDER_EXECUTED",f.ORDER_CANCELED="ORDER_CANCELED",f.ORDER_EXPIRED="ORDER_EXPIRED",f.ORDER_FAILED="ORDER_FAILED",f.UNRECOGNIZED="UNRECOGNIZED",(g=n.DurationBucketState||(n.DurationBucketState={})).NO_MARKET="NO_MARKET",g.MARKET_CLOSED="MARKET_CLOSED",g.ACCEPTING_ORDERS="ACCEPTING_ORDERS",g.MARKET_OPEN="MARKET_OPEN",g.UNRECOGNIZED="UNRECOGNIZED",(u=n.OrderMatchReject_RejectReason||(n.OrderMatchReject_RejectReason={})).UNKNOWN="UNKNOWN",u.SERVER_MISBEHAVIOR="SERVER_MISBEHAVIOR",u.BATCH_VERSION_MISMATCH="BATCH_VERSION_MISMATCH",u.PARTIAL_REJECT="PARTIAL_REJECT",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.OrderReject_OrderRejectReason||(n.OrderReject_OrderRejectReason={})).DUPLICATE_PEER="DUPLICATE_PEER",a.CHANNEL_FUNDING_FAILED="CHANNEL_FUNDING_FAILED",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.SubscribeError_Error||(n.SubscribeError_Error={})).UNKNOWN="UNKNOWN",d.SERVER_SHUTDOWN="SERVER_SHUTDOWN",d.ACCOUNT_DOES_NOT_EXIST="ACCOUNT_DOES_NOT_EXIST",d.INCOMPLETE_ACCOUNT_RESERVATION="INCOMPLETE_ACCOUNT_RESERVATION",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.AccountDiff_AccountState||(n.AccountDiff_AccountState={})).OUTPUT_RECREATED="OUTPUT_RECREATED",p.OUTPUT_DUST_EXTENDED_OFFCHAIN="OUTPUT_DUST_EXTENDED_OFFCHAIN",p.OUTPUT_DUST_ADDED_TO_FEES="OUTPUT_DUST_ADDED_TO_FEES",p.OUTPUT_FULLY_SPENT="OUTPUT_FULLY_SPENT",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.InvalidOrder_FailReason||(n.InvalidOrder_FailReason={})).INVALID_AMT="INVALID_AMT",l.UNRECOGNIZED="UNRECOGNIZED"},3961:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},8456:(h,n)=>{var l,p,d,a;Object.defineProperty(n,"__esModule",{value:!0}),n.MatchRejectReason=n.MatchState=n.AccountState=n.AccountVersion=void 0,(a=n.AccountVersion||(n.AccountVersion={})).ACCOUNT_VERSION_LND_DEPENDENT="ACCOUNT_VERSION_LND_DEPENDENT",a.ACCOUNT_VERSION_LEGACY="ACCOUNT_VERSION_LEGACY",a.ACCOUNT_VERSION_TAPROOT="ACCOUNT_VERSION_TAPROOT",a.ACCOUNT_VERSION_TAPROOT_V2="ACCOUNT_VERSION_TAPROOT_V2",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.AccountState||(n.AccountState={})).PENDING_OPEN="PENDING_OPEN",d.PENDING_UPDATE="PENDING_UPDATE",d.OPEN="OPEN",d.EXPIRED="EXPIRED",d.PENDING_CLOSED="PENDING_CLOSED",d.CLOSED="CLOSED",d.RECOVERY_FAILED="RECOVERY_FAILED",d.PENDING_BATCH="PENDING_BATCH",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.MatchState||(n.MatchState={})).PREPARE="PREPARE",p.ACCEPTED="ACCEPTED",p.REJECTED="REJECTED",p.SIGNED="SIGNED",p.FINALIZED="FINALIZED",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.MatchRejectReason||(n.MatchRejectReason={})).NONE="NONE",l.SERVER_MISBEHAVIOR="SERVER_MISBEHAVIOR",l.BATCH_VERSION_MISMATCH="BATCH_VERSION_MISMATCH",l.PARTIAL_REJECT_COLLATERAL="PARTIAL_REJECT_COLLATERAL",l.PARTIAL_REJECT_DUPLICATE_PEER="PARTIAL_REJECT_DUPLICATE_PEER",l.PARTIAL_REJECT_CHANNEL_FUNDING_FAILED="PARTIAL_REJECT_CHANNEL_FUNDING_FAILED",l.UNRECOGNIZED="UNRECOGNIZED"},3377:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(9927),n),d(l(3961),n),d(l(8456),n)},1226:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(4288),n)},1644:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.subscriptionMethods=n.serviceNames=void 0,n.serviceNames={frdrpc:{FaradayServer:"frdrpc.FaradayServer"},litrpc:{Firewall:"litrpc.Firewall",Autopilot:"litrpc.Autopilot",Sessions:"litrpc.Sessions",Status:"litrpc.Status"},autopilotrpc:{Autopilot:"autopilotrpc.Autopilot"},chainrpc:{ChainNotifier:"chainrpc.ChainNotifier"},invoicesrpc:{Invoices:"invoicesrpc.Invoices"},lnrpc:{Lightning:"lnrpc.Lightning",WalletUnlocker:"lnrpc.WalletUnlocker"},routerrpc:{Router:"routerrpc.Router"},signrpc:{Signer:"signrpc.Signer"},walletrpc:{WalletKit:"walletrpc.WalletKit"},watchtowerrpc:{Watchtower:"watchtowerrpc.Watchtower"},wtclientrpc:{WatchtowerClient:"wtclientrpc.WatchtowerClient"},looprpc:{SwapClient:"looprpc.SwapClient",Debug:"looprpc.Debug"},poolrpc:{ChannelAuctioneer:"poolrpc.ChannelAuctioneer",HashMail:"poolrpc.HashMail",Trader:"poolrpc.Trader"},assetwalletrpc:{AssetWallet:"assetwalletrpc.AssetWallet"},mintrpc:{Mint:"mintrpc.Mint"},taprpc:{TaprootAssets:"taprpc.TaprootAssets"},universerpc:{Universe:"universerpc.Universe"}},n.subscriptionMethods=["chainrpc.ChainNotifier.RegisterConfirmationsNtfn","chainrpc.ChainNotifier.RegisterSpendNtfn","chainrpc.ChainNotifier.RegisterBlockEpochNtfn","invoicesrpc.Invoices.SubscribeSingleInvoice","lnrpc.Lightning.SubscribeTransactions","lnrpc.Lightning.SubscribePeerEvents","lnrpc.Lightning.SubscribeChannelEvents","lnrpc.Lightning.OpenChannel","lnrpc.Lightning.ChannelAcceptor","lnrpc.Lightning.CloseChannel","lnrpc.Lightning.SendPayment","lnrpc.Lightning.SendToRoute","lnrpc.Lightning.SubscribeInvoices","lnrpc.Lightning.SubscribeChannelGraph","lnrpc.Lightning.SubscribeChannelBackups","lnrpc.Lightning.RegisterRPCMiddleware","lnrpc.Lightning.SubscribeCustomMessages","routerrpc.Router.SendPaymentV2","routerrpc.Router.TrackPaymentV2","routerrpc.Router.TrackPayments","routerrpc.Router.SubscribeHtlcEvents","routerrpc.Router.SendPayment","routerrpc.Router.TrackPayment","routerrpc.Router.HtlcInterceptor","looprpc.SwapClient.Monitor","poolrpc.ChannelAuctioneer.SubscribeBatchAuction","poolrpc.ChannelAuctioneer.SubscribeSidecar","poolrpc.HashMail.RecvStream","taprpc.TaprootAssets.SubscribeSendAssetEventNtfns"]},1207:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(885),n)},9825:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},800:(h,n)=>{var l;Object.defineProperty(n,"__esModule",{value:!0}),n.BatchState=void 0,(l=n.BatchState||(n.BatchState={})).BATCH_STATE_UNKNOWN="BATCH_STATE_UNKNOWN",l.BATCH_STATE_PEDNING="BATCH_STATE_PEDNING",l.BATCH_STATE_FROZEN="BATCH_STATE_FROZEN",l.BATCH_STATE_COMMITTED="BATCH_STATE_COMMITTED",l.BATCH_STATE_BROADCAST="BATCH_STATE_BROADCAST",l.BATCH_STATE_CONFIRMED="BATCH_STATE_CONFIRMED",l.BATCH_STATE_FINALIZED="BATCH_STATE_FINALIZED",l.BATCH_STATE_SEEDLING_CANCELLED="BATCH_STATE_SEEDLING_CANCELLED",l.BATCH_STATE_SPROUT_CANCELLED="BATCH_STATE_SPROUT_CANCELLED",l.UNRECOGNIZED="UNRECOGNIZED"},3827:(h,n)=>{var l,p,d,a,u;Object.defineProperty(n,"__esModule",{value:!0}),n.AddrEventStatus=n.OutputType=n.AssetVersion=n.AssetMetaType=n.AssetType=void 0,(u=n.AssetType||(n.AssetType={})).NORMAL="NORMAL",u.COLLECTIBLE="COLLECTIBLE",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.AssetMetaType||(n.AssetMetaType={})).META_TYPE_OPAQUE="META_TYPE_OPAQUE",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.AssetVersion||(n.AssetVersion={})).ASSET_VERSION_V0="ASSET_VERSION_V0",d.ASSET_VERSION_V1="ASSET_VERSION_V1",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.OutputType||(n.OutputType={})).OUTPUT_TYPE_SIMPLE="OUTPUT_TYPE_SIMPLE",p.OUTPUT_TYPE_SPLIT_ROOT="OUTPUT_TYPE_SPLIT_ROOT",p.OUTPUT_TYPE_PASSIVE_ASSETS_ONLY="OUTPUT_TYPE_PASSIVE_ASSETS_ONLY",p.OUTPUT_TYPE_PASSIVE_SPLIT_ROOT="OUTPUT_TYPE_PASSIVE_SPLIT_ROOT",p.OUTPUT_TYPE_SIMPLE_PASSIVE_ASSETS="OUTPUT_TYPE_SIMPLE_PASSIVE_ASSETS",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.AddrEventStatus||(n.AddrEventStatus={})).ADDR_EVENT_STATUS_UNKNOWN="ADDR_EVENT_STATUS_UNKNOWN",l.ADDR_EVENT_STATUS_TRANSACTION_DETECTED="ADDR_EVENT_STATUS_TRANSACTION_DETECTED",l.ADDR_EVENT_STATUS_TRANSACTION_CONFIRMED="ADDR_EVENT_STATUS_TRANSACTION_CONFIRMED",l.ADDR_EVENT_STATUS_PROOF_RECEIVED="ADDR_EVENT_STATUS_PROOF_RECEIVED",l.ADDR_EVENT_STATUS_COMPLETED="ADDR_EVENT_STATUS_COMPLETED",l.UNRECOGNIZED="UNRECOGNIZED"},4765:(h,n)=>{var l,p,d,a,u;Object.defineProperty(n,"__esModule",{value:!0}),n.AssetTypeFilter=n.SortDirection=n.AssetQuerySort=n.UniverseSyncMode=n.ProofType=void 0,(u=n.ProofType||(n.ProofType={})).PROOF_TYPE_UNSPECIFIED="PROOF_TYPE_UNSPECIFIED",u.PROOF_TYPE_ISSUANCE="PROOF_TYPE_ISSUANCE",u.PROOF_TYPE_TRANSFER="PROOF_TYPE_TRANSFER",u.UNRECOGNIZED="UNRECOGNIZED",(a=n.UniverseSyncMode||(n.UniverseSyncMode={})).SYNC_ISSUANCE_ONLY="SYNC_ISSUANCE_ONLY",a.SYNC_FULL="SYNC_FULL",a.UNRECOGNIZED="UNRECOGNIZED",(d=n.AssetQuerySort||(n.AssetQuerySort={})).SORT_BY_NONE="SORT_BY_NONE",d.SORT_BY_ASSET_NAME="SORT_BY_ASSET_NAME",d.SORT_BY_ASSET_ID="SORT_BY_ASSET_ID",d.SORT_BY_ASSET_TYPE="SORT_BY_ASSET_TYPE",d.SORT_BY_TOTAL_SYNCS="SORT_BY_TOTAL_SYNCS",d.SORT_BY_TOTAL_PROOFS="SORT_BY_TOTAL_PROOFS",d.SORT_BY_GENESIS_HEIGHT="SORT_BY_GENESIS_HEIGHT",d.SORT_BY_TOTAL_SUPPLY="SORT_BY_TOTAL_SUPPLY",d.UNRECOGNIZED="UNRECOGNIZED",(p=n.SortDirection||(n.SortDirection={})).SORT_DIRECTION_ASC="SORT_DIRECTION_ASC",p.SORT_DIRECTION_DESC="SORT_DIRECTION_DESC",p.UNRECOGNIZED="UNRECOGNIZED",(l=n.AssetTypeFilter||(n.AssetTypeFilter={})).FILTER_ASSET_NONE="FILTER_ASSET_NONE",l.FILTER_ASSET_NORMAL="FILTER_ASSET_NORMAL",l.FILTER_ASSET_COLLECTIBLE="FILTER_ASSET_COLLECTIBLE",l.UNRECOGNIZED="UNRECOGNIZED"},4914:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(3827),n)},1877:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(4765),n)},9367:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(1213),n)},6412:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(2482),n)},3946:function(h,n,l){var p=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),d=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||p(u,a,g)};Object.defineProperty(n,"__esModule",{value:!0}),d(l(9921),n)},1848:(h,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.camelKeysToSnake=n.snakeKeysToCamel=n.isObject=void 0;var l=function(p){return Array.isArray(p)};n.isObject=function(p){return p===Object(p)&&!l(p)&&typeof p!="function"},n.snakeKeysToCamel=function(p){if((0,n.isObject)(p)){var d={};return Object.keys(p).forEach(function(a){var u;d[u=a,u.replace(/([-_][a-z])/gi,function(g){return g.toUpperCase().replace("-","").replace("_","")})]=(0,n.snakeKeysToCamel)(p[a])}),d}return l(p)?p.map(function(a){return(0,n.snakeKeysToCamel)(a)}):p},n.camelKeysToSnake=function(p){if((0,n.isObject)(p)){var d={};return Object.keys(p).forEach(function(a){var u;d[u=a,u.replace(/[A-Z]/g,function(g){return"_".concat(g.toLowerCase())})]=(0,n.camelKeysToSnake)(p[a])}),d}return l(p)?p.map(function(a){return(0,n.camelKeysToSnake)(a)}):p}}},c={};return function h(n){var l=c[n];if(l!==void 0)return l.exports;var p=c[n]={exports:{}};return s[n].call(p.exports,p,p.exports,h),p.exports}(8713)})(),o.exports=i()},8831:(o,i,s)=>{o=s.nmd(o);var c=s(5108),h=s(4155);(()=>{if(s.g===void 0)if(typeof window<"u")window.global=window;else{if(typeof self>"u")throw new Error("cannot export Go (neither global, window nor self is defined)");self.global=self}if(s.g.require||(s.g.require=s(5049)),!s.g.fs&&s.g.require){let d=s(2203);typeof d=="object"&&d!==null&&Object.keys(d).length!==0&&(s.g.fs=d)}let n=()=>{let d=new Error("not implemented");return d.code="ENOSYS",d};if(!s.g.fs){let d="";s.g.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(a,u){d+=p.decode(u);let g=d.lastIndexOf(`
`);return g!=-1&&(c.log(d.substr(0,g)),d=d.substr(g+1)),u.length},write(a,u,g,f,v,m){g===0&&f===u.length&&v===null?m(null,this.writeSync(a,u)):m(n())},chmod(a,u,g){g(n())},chown(a,u,g,f){f(n())},close(a,u){u(n())},fchmod(a,u,g){g(n())},fchown(a,u,g,f){f(n())},fstat(a,u){u(n())},fsync(a,u){u(null)},ftruncate(a,u,g){g(n())},lchown(a,u,g,f){f(n())},link(a,u,g){g(n())},lstat(a,u){u(n())},mkdir(a,u,g){g(n())},open(a,u,g,f){f(n())},read(a,u,g,f,v,m){m(n())},readdir(a,u){u(n())},readlink(a,u){u(n())},rename(a,u,g){g(n())},rmdir(a,u){u(n())},stat(a,u){u(n())},symlink(a,u,g){g(n())},truncate(a,u,g){g(n())},unlink(a,u){u(n())},utimes(a,u,g,f){f(n())}}}if(s.g.process||(s.g.process={getuid:()=>-1,getgid:()=>-1,geteuid:()=>-1,getegid:()=>-1,getgroups(){throw n()},pid:-1,ppid:-1,umask(){throw n()},cwd(){throw n()},chdir(){throw n()}}),!s.g.crypto&&s.g.require){let d=s(4229);s.g.crypto={getRandomValues(a){d.randomFillSync(a)}}}if(!s.g.crypto)throw new Error("global.crypto is not available, polyfill required (getRandomValues only)");if(s.g.performance||(s.g.performance={now(){let[d,a]=h.hrtime();return 1e3*d+a/1e6}}),!s.g.TextEncoder&&s.g.require&&(s.g.TextEncoder=s(9539).TextEncoder),!s.g.TextEncoder)throw new Error("global.TextEncoder is not available, polyfill required");if(!s.g.TextDecoder&&s.g.require&&(s.g.TextDecoder=s(9539).TextDecoder),!s.g.TextDecoder)throw new Error("global.TextDecoder is not available, polyfill required");let l=new TextEncoder("utf-8"),p=new TextDecoder("utf-8");if(s.g.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=y=>{y!==0&&c.warn("exit code:",y)},this._exitPromise=new Promise(y=>{this._resolveExitPromise=y}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let d=(y,E)=>{this.mem.setUint32(y+0,E,!0),this.mem.setUint32(y+4,Math.floor(E/4294967296),!0)},a=y=>this.mem.getUint32(y+0,!0)+4294967296*this.mem.getInt32(y+4,!0),u=y=>{let E=this.mem.getFloat64(y,!0);if(E===0)return;if(!isNaN(E))return E;let x=this.mem.getUint32(y,!0);return this._values[x]},g=(y,E)=>{if(typeof E=="number"&&E!==0)return isNaN(E)?(this.mem.setUint32(y+4,2146959360,!0),void this.mem.setUint32(y,0,!0)):void this.mem.setFloat64(y,E,!0);if(E===void 0)return void this.mem.setFloat64(y,0,!0);let b=this._ids.get(E);b===void 0&&(b=this._idPool.pop(),b===void 0&&(b=this._values.length),this._values[b]=E,this._goRefCounts[b]=0,this._ids.set(E,b)),this._goRefCounts[b]++;let N=0;switch(typeof E){case"object":E!==null&&(N=1);break;case"string":N=2;break;case"symbol":N=3;break;case"function":N=4}this.mem.setUint32(y+4,2146959360|N,!0),this.mem.setUint32(y,b,!0)},f=y=>{let E=a(y+0),x=a(y+8);return new Uint8Array(this._inst.exports.mem.buffer,E,x)},v=y=>{let E=a(y+0),x=a(y+8),b=new Array(x);for(let N=0;N<x;N++)b[N]=u(E+8*N);return b},m=y=>{let E=a(y+0),x=a(y+8);return p.decode(new DataView(this._inst.exports.mem.buffer,E,x))},_=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":y=>{y>>>=0;let E=this.mem.getInt32(y+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(E)},"runtime.wasmWrite":y=>{let E=a(8+(y>>>=0)),x=a(y+16),b=this.mem.getInt32(y+24,!0);fs.writeSync(E,new Uint8Array(this._inst.exports.mem.buffer,x,b))},"runtime.resetMemoryDataView":y=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":y=>{d(8+(y>>>=0),1e6*(_+performance.now()))},"runtime.walltime":y=>{y>>>=0;let E=new Date().getTime();d(y+8,E/1e3),this.mem.setInt32(y+16,E%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":y=>{y>>>=0;let E=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(E,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(E);)c.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},a(y+8)+1)),this.mem.setInt32(y+16,E,!0)},"runtime.clearTimeoutEvent":y=>{y>>>=0;let E=this.mem.getInt32(y+8,!0);clearTimeout(this._scheduledTimeouts.get(E)),this._scheduledTimeouts.delete(E)},"runtime.getRandomData":y=>{y>>>=0,crypto.getRandomValues(f(y+8))},"syscall/js.finalizeRef":y=>{y>>>=0;let E=this.mem.getUint32(y+8,!0);if(this._goRefCounts[E]--,this._goRefCounts[E]===0){let x=this._values[E];this._values[E]=null,this._ids.delete(x),this._idPool.push(E)}},"syscall/js.stringVal":y=>{g(24+(y>>>=0),m(y+8))},"syscall/js.valueGet":y=>{y>>>=0;let E=Reflect.get(u(y+8),m(y+16));y=this._inst.exports.getsp()>>>0,g(y+32,E)},"syscall/js.valueSet":y=>{y>>>=0,Reflect.set(u(y+8),m(y+16),u(y+32))},"syscall/js.valueDelete":y=>{y>>>=0,Reflect.deleteProperty(u(y+8),m(y+16))},"syscall/js.valueIndex":y=>{g(24+(y>>>=0),Reflect.get(u(y+8),a(y+16)))},"syscall/js.valueSetIndex":y=>{y>>>=0,Reflect.set(u(y+8),a(y+16),u(y+24))},"syscall/js.valueCall":y=>{y>>>=0;try{let E=u(y+8),x=Reflect.get(E,m(y+16)),b=v(y+32),N=Reflect.apply(x,E,b);y=this._inst.exports.getsp()>>>0,g(y+56,N),this.mem.setUint8(y+64,1)}catch(E){y=this._inst.exports.getsp()>>>0,g(y+56,E),this.mem.setUint8(y+64,0)}},"syscall/js.valueInvoke":y=>{y>>>=0;try{let E=u(y+8),x=v(y+16),b=Reflect.apply(E,void 0,x);y=this._inst.exports.getsp()>>>0,g(y+40,b),this.mem.setUint8(y+48,1)}catch(E){y=this._inst.exports.getsp()>>>0,g(y+40,E),this.mem.setUint8(y+48,0)}},"syscall/js.valueNew":y=>{y>>>=0;try{let E=u(y+8),x=v(y+16),b=Reflect.construct(E,x);y=this._inst.exports.getsp()>>>0,g(y+40,b),this.mem.setUint8(y+48,1)}catch(E){y=this._inst.exports.getsp()>>>0,g(y+40,E),this.mem.setUint8(y+48,0)}},"syscall/js.valueLength":y=>{d(16+(y>>>=0),parseInt(u(y+8).length))},"syscall/js.valuePrepareString":y=>{y>>>=0;let E=l.encode(String(u(y+8)));g(y+16,E),d(y+24,E.length)},"syscall/js.valueLoadString":y=>{let E=u(8+(y>>>=0));f(y+16).set(E)},"syscall/js.valueInstanceOf":y=>{y>>>=0,this.mem.setUint8(y+24,u(y+8)instanceof u(y+16)?1:0)},"syscall/js.copyBytesToGo":y=>{let E=f(8+(y>>>=0)),x=u(y+32);if(!(x instanceof Uint8Array||x instanceof Uint8ClampedArray))return void this.mem.setUint8(y+48,0);let b=x.subarray(0,E.length);E.set(b),d(y+40,b.length),this.mem.setUint8(y+48,1)},"syscall/js.copyBytesToJS":y=>{let E=u(8+(y>>>=0)),x=f(y+16);if(!(E instanceof Uint8Array||E instanceof Uint8ClampedArray))return void this.mem.setUint8(y+48,0);let b=x.subarray(0,E.length);E.set(b),d(y+40,b.length),this.mem.setUint8(y+48,1)},debug:y=>{c.log(y)}}}}async run(d){if(!(d instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=d,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,s.g,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[s.g,5],[this,6]]),this._idPool=[],this.exited=!1;let a=4096,u=m=>{let _=a,y=l.encode(m+"\0");return new Uint8Array(this.mem.buffer,a,y.length).set(y),a+=y.length,a%8!=0&&(a+=8-a%8),_},g=this.argv.length,f=[];this.argv.forEach(m=>{f.push(u(m))}),f.push(0),Object.keys(this.env).sort().forEach(m=>{f.push(u(`${m}=${this.env[m]}`))}),f.push(0);let v=a;if(f.forEach(m=>{this.mem.setUint32(a,m,!0),this.mem.setUint32(a+4,0,!0),a+=8}),a>=8192)throw new Error("command line too long");this._inst.exports.run(g,v),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(d){let a=this;return function(){let u={id:d,this:this,args:arguments};return a._pendingEvent=u,a._resume(),u.result}}},s.g.require&&s.g.require.main===o&&s.g.process&&s.g.process.versions&&!s.g.process.versions.electron){h.argv.length<3&&(c.error("usage: go_js_wasm_exec [wasm binary] [arguments]"),h.exit(1));let d=new Go;d.argv=h.argv.slice(2),d.env=Object.assign({TMPDIR:s(5381).tmpdir()},h.env),d.exit=h.exit,WebAssembly.instantiate(fs.readFileSync(h.argv[2]),d.importObject).then(a=>(h.on("exit",u=>{u!==0||d.exited||(d._pendingEvent={id:0},d._resume())}),d.run(a.instance))).catch(a=>{c.error(a),h.exit(1)})}})()},5049:o=>{function i(s){var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}i.keys=()=>[],i.resolve=i,i.id=5049,o.exports=i},9282:(o,i,s)=>{"use strict";var c=s(4155),h=s(5108);function n(W){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},n(W)}var l,p,d=s(2136).codes,a=d.ERR_AMBIGUOUS_ARGUMENT,u=d.ERR_INVALID_ARG_TYPE,g=d.ERR_INVALID_ARG_VALUE,f=d.ERR_INVALID_RETURN_VALUE,v=d.ERR_MISSING_ARGS,m=s(5961),_=s(9539).inspect,y=s(9539).types,E=y.isPromise,x=y.isRegExp,b=Object.assign?Object.assign:s(8091).assign,N=Object.is?Object.is:s(609);function O(){var W=s(9158);l=W.isDeepEqual,p=W.isDeepStrictEqual}var w=!1,C=o.exports=L,A={};function S(W){throw W.message instanceof Error?W.message:new m(W)}function k(W,T,I,R){if(!I){var P=!1;if(T===0)P=!0,R="No value argument passed to `assert.ok()`";else if(R instanceof Error)throw R;var V=new m({actual:I,expected:!0,message:R,operator:"==",stackStartFn:W});throw V.generatedMessage=P,V}}function L(){for(var W=arguments.length,T=new Array(W),I=0;I<W;I++)T[I]=arguments[I];k.apply(void 0,[L,T.length].concat(T))}C.fail=function W(T,I,R,P,V){var B,G=arguments.length;if(G===0)B="Failed";else if(G===1)R=T,T=void 0;else{if(w===!1){w=!0;var z=c.emitWarning?c.emitWarning:h.warn.bind(h);z("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")}G===2&&(P="!=")}if(R instanceof Error)throw R;var q={actual:T,expected:I,operator:P===void 0?"fail":P,stackStartFn:V||W};R!==void 0&&(q.message=R);var J=new m(q);throw B&&(J.message=B,J.generatedMessage=!0),J},C.AssertionError=m,C.ok=L,C.equal=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");T!=I&&S({actual:T,expected:I,message:R,operator:"==",stackStartFn:W})},C.notEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");T==I&&S({actual:T,expected:I,message:R,operator:"!=",stackStartFn:W})},C.deepEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");l===void 0&&O(),l(T,I)||S({actual:T,expected:I,message:R,operator:"deepEqual",stackStartFn:W})},C.notDeepEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");l===void 0&&O(),l(T,I)&&S({actual:T,expected:I,message:R,operator:"notDeepEqual",stackStartFn:W})},C.deepStrictEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");l===void 0&&O(),p(T,I)||S({actual:T,expected:I,message:R,operator:"deepStrictEqual",stackStartFn:W})},C.notDeepStrictEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");l===void 0&&O(),p(T,I)&&S({actual:T,expected:I,message:R,operator:"notDeepStrictEqual",stackStartFn:W})},C.strictEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");N(T,I)||S({actual:T,expected:I,message:R,operator:"strictEqual",stackStartFn:W})},C.notStrictEqual=function W(T,I,R){if(arguments.length<2)throw new v("actual","expected");N(T,I)&&S({actual:T,expected:I,message:R,operator:"notStrictEqual",stackStartFn:W})};var U=function W(T,I,R){var P=this;(function(V,B){if(!(V instanceof B))throw new TypeError("Cannot call a class as a function")})(this,W),I.forEach(function(V){V in T&&(R!==void 0&&typeof R[V]=="string"&&x(T[V])&&T[V].test(R[V])?P[V]=R[V]:P[V]=T[V])})};function M(W,T,I,R,P,V){if(!(I in W)||!p(W[I],T[I])){if(!R){var B=new U(W,P),G=new U(T,P,W),z=new m({actual:B,expected:G,operator:"deepStrictEqual",stackStartFn:V});throw z.actual=W,z.expected=T,z.operator=V.name,z}S({actual:W,expected:T,message:R,operator:V.name,stackStartFn:V})}}function H(W,T,I,R){if(typeof T!="function"){if(x(T))return T.test(W);if(arguments.length===2)throw new u("expected",["Function","RegExp"],T);if(n(W)!=="object"||W===null){var P=new m({actual:W,expected:T,message:I,operator:"deepStrictEqual",stackStartFn:R});throw P.operator=R.name,P}var V=Object.keys(T);if(T instanceof Error)V.push("name","message");else if(V.length===0)throw new g("error",T,"may not be an empty object");return l===void 0&&O(),V.forEach(function(B){typeof W[B]=="string"&&x(T[B])&&T[B].test(W[B])||M(W,T,B,I,V,R)}),!0}return T.prototype!==void 0&&W instanceof T||!Error.isPrototypeOf(T)&&T.call({},W)===!0}function Z(W){if(typeof W!="function")throw new u("fn","Function",W);try{W()}catch(T){return T}return A}function j(W){return E(W)||W!==null&&n(W)==="object"&&typeof W.then=="function"&&typeof W.catch=="function"}function $(W){return Promise.resolve().then(function(){var T;if(typeof W=="function"){if(!j(T=W()))throw new f("instance of Promise","promiseFn",T)}else{if(!j(W))throw new u("promiseFn",["Function","Promise"],W);T=W}return Promise.resolve().then(function(){return T}).then(function(){return A}).catch(function(I){return I})})}function D(W,T,I,R){if(typeof I=="string"){if(arguments.length===4)throw new u("error",["Object","Error","Function","RegExp"],I);if(n(T)==="object"&&T!==null){if(T.message===I)throw new a("error/message",'The error message "'.concat(T.message,'" is identical to the message.'))}else if(T===I)throw new a("error/message",'The error "'.concat(T,'" is identical to the message.'));R=I,I=void 0}else if(I!=null&&n(I)!=="object"&&typeof I!="function")throw new u("error",["Object","Error","Function","RegExp"],I);if(T===A){var P="";I&&I.name&&(P+=" (".concat(I.name,")")),P+=R?": ".concat(R):".";var V=W.name==="rejects"?"rejection":"exception";S({actual:void 0,expected:I,operator:W.name,message:"Missing expected ".concat(V).concat(P),stackStartFn:W})}if(I&&!H(T,I,R,W))throw T}function F(W,T,I,R){if(T!==A){if(typeof I=="string"&&(R=I,I=void 0),!I||H(T,I)){var P=R?": ".concat(R):".",V=W.name==="doesNotReject"?"rejection":"exception";S({actual:T,expected:I,operator:W.name,message:"Got unwanted ".concat(V).concat(P,`
`)+'Actual message: "'.concat(T&&T.message,'"'),stackStartFn:W})}throw T}}function K(){for(var W=arguments.length,T=new Array(W),I=0;I<W;I++)T[I]=arguments[I];k.apply(void 0,[K,T.length].concat(T))}C.throws=function W(T){for(var I=arguments.length,R=new Array(I>1?I-1:0),P=1;P<I;P++)R[P-1]=arguments[P];D.apply(void 0,[W,Z(T)].concat(R))},C.rejects=function W(T){for(var I=arguments.length,R=new Array(I>1?I-1:0),P=1;P<I;P++)R[P-1]=arguments[P];return $(T).then(function(V){return D.apply(void 0,[W,V].concat(R))})},C.doesNotThrow=function W(T){for(var I=arguments.length,R=new Array(I>1?I-1:0),P=1;P<I;P++)R[P-1]=arguments[P];F.apply(void 0,[W,Z(T)].concat(R))},C.doesNotReject=function W(T){for(var I=arguments.length,R=new Array(I>1?I-1:0),P=1;P<I;P++)R[P-1]=arguments[P];return $(T).then(function(V){return F.apply(void 0,[W,V].concat(R))})},C.ifError=function W(T){if(T!=null){var I="ifError got unwanted exception: ";n(T)==="object"&&typeof T.message=="string"?T.message.length===0&&T.constructor?I+=T.constructor.name:I+=T.message:I+=_(T);var R=new m({actual:T,expected:null,operator:"ifError",message:I,stackStartFn:W}),P=T.stack;if(typeof P=="string"){var V=P.split(`
`);V.shift();for(var B=R.stack.split(`
`),G=0;G<V.length;G++){var z=B.indexOf(V[G]);if(z!==-1){B=B.slice(0,z);break}}R.stack="".concat(B.join(`
`),`
`).concat(V.join(`
`))}throw R}},C.strict=b(K,C,{equal:C.strictEqual,deepEqual:C.deepStrictEqual,notEqual:C.notStrictEqual,notDeepEqual:C.notDeepStrictEqual}),C.strict.strict=C.strict},5961:(o,i,s)=>{"use strict";var c=s(4155);function h(S,k,L){return k in S?Object.defineProperty(S,k,{value:L,enumerable:!0,configurable:!0,writable:!0}):S[k]=L,S}function n(S,k){for(var L=0;L<k.length;L++){var U=k[L];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(S,U.key,U)}}function l(S,k){return!k||v(k)!=="object"&&typeof k!="function"?p(S):k}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function d(S){var k=typeof Map=="function"?new Map:void 0;return d=function(L){if(L===null||(U=L,Function.toString.call(U).indexOf("[native code]")===-1))return L;var U;if(typeof L!="function")throw new TypeError("Super expression must either be null or a function");if(k!==void 0){if(k.has(L))return k.get(L);k.set(L,M)}function M(){return u(L,arguments,f(this).constructor)}return M.prototype=Object.create(L.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),g(M,L)},d(S)}function a(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function u(S,k,L){return u=a()?Reflect.construct:function(U,M,H){var Z=[null];Z.push.apply(Z,M);var j=new(Function.bind.apply(U,Z));return H&&g(j,H.prototype),j},u.apply(null,arguments)}function g(S,k){return g=Object.setPrototypeOf||function(L,U){return L.__proto__=U,L},g(S,k)}function f(S){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},f(S)}function v(S){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},v(S)}var m=s(9539).inspect,_=s(2136).codes.ERR_INVALID_ARG_TYPE;function y(S,k,L){return(L===void 0||L>S.length)&&(L=S.length),S.substring(L-k.length,L)===k}var E="",x="",b="",N="",O={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function w(S){var k=Object.keys(S),L=Object.create(Object.getPrototypeOf(S));return k.forEach(function(U){L[U]=S[U]}),Object.defineProperty(L,"message",{value:S.message}),L}function C(S){return m(S,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}var A=function(S){function k(M){var H;if(function(V,B){if(!(V instanceof B))throw new TypeError("Cannot call a class as a function")}(this,k),v(M)!=="object"||M===null)throw new _("options","Object",M);var Z=M.message,j=M.operator,$=M.stackStartFn,D=M.actual,F=M.expected,K=Error.stackTraceLimit;if(Error.stackTraceLimit=0,Z!=null)H=l(this,f(k).call(this,String(Z)));else if(c.stderr&&c.stderr.isTTY&&(c.stderr&&c.stderr.getColorDepth&&c.stderr.getColorDepth()!==1?(E="\x1B[34m",x="\x1B[32m",N="\x1B[39m",b="\x1B[31m"):(E="",x="",N="",b="")),v(D)==="object"&&D!==null&&v(F)==="object"&&F!==null&&"stack"in D&&D instanceof Error&&"stack"in F&&F instanceof Error&&(D=w(D),F=w(F)),j==="deepStrictEqual"||j==="strictEqual")H=l(this,f(k).call(this,function(V,B,G){var z="",q="",J=0,Y="",ee=!1,se=C(V),ae=se.split(`
`),ce=C(B).split(`
`),oe=0,pe="";if(G==="strictEqual"&&v(V)==="object"&&v(B)==="object"&&V!==null&&B!==null&&(G="strictEqualObject"),ae.length===1&&ce.length===1&&ae[0]!==ce[0]){var ye=ae[0].length+ce[0].length;if(ye<=10){if(!(v(V)==="object"&&V!==null||v(B)==="object"&&B!==null||V===0&&B===0))return"".concat(O[G],`

`)+"".concat(ae[0]," !== ").concat(ce[0],`
`)}else if(G!=="strictEqualObject"&&ye<(c.stderr&&c.stderr.isTTY?c.stderr.columns:80)){for(;ae[0][oe]===ce[0][oe];)oe++;oe>2&&(pe=`
  `.concat(function(Be,Je){if(Je=Math.floor(Je),Be.length==0||Je==0)return"";var lo=Be.length*Je;for(Je=Math.floor(Math.log(Je)/Math.log(2));Je;)Be+=Be,Je--;return Be+Be.substring(0,lo-Be.length)}(" ",oe),"^"),oe=0)}}for(var le=ae[ae.length-1],ie=ce[ce.length-1];le===ie&&(oe++<2?Y=`
  `.concat(le).concat(Y):z=le,ae.pop(),ce.pop(),ae.length!==0&&ce.length!==0);)le=ae[ae.length-1],ie=ce[ce.length-1];var Ce=Math.max(ae.length,ce.length);if(Ce===0){var Re=se.split(`
`);if(Re.length>30)for(Re[26]="".concat(E,"...").concat(N);Re.length>27;)Re.pop();return"".concat(O.notIdentical,`

`).concat(Re.join(`
`),`
`)}oe>3&&(Y=`
`.concat(E,"...").concat(N).concat(Y),ee=!0),z!==""&&(Y=`
  `.concat(z).concat(Y),z="");var me=0,xe=O[G]+`
`.concat(x,"+ actual").concat(N," ").concat(b,"- expected").concat(N),ze=" ".concat(E,"...").concat(N," Lines skipped");for(oe=0;oe<Ce;oe++){var we=oe-J;if(ae.length<oe+1)we>1&&oe>2&&(we>4?(q+=`
`.concat(E,"...").concat(N),ee=!0):we>3&&(q+=`
  `.concat(ce[oe-2]),me++),q+=`
  `.concat(ce[oe-1]),me++),J=oe,z+=`
`.concat(b,"-").concat(N," ").concat(ce[oe]),me++;else if(ce.length<oe+1)we>1&&oe>2&&(we>4?(q+=`
`.concat(E,"...").concat(N),ee=!0):we>3&&(q+=`
  `.concat(ae[oe-2]),me++),q+=`
  `.concat(ae[oe-1]),me++),J=oe,q+=`
`.concat(x,"+").concat(N," ").concat(ae[oe]),me++;else{var ht=ce[oe],Ye=ae[oe],Ct=Ye!==ht&&(!y(Ye,",")||Ye.slice(0,-1)!==ht);Ct&&y(ht,",")&&ht.slice(0,-1)===Ye&&(Ct=!1,Ye+=","),Ct?(we>1&&oe>2&&(we>4?(q+=`
`.concat(E,"...").concat(N),ee=!0):we>3&&(q+=`
  `.concat(ae[oe-2]),me++),q+=`
  `.concat(ae[oe-1]),me++),J=oe,q+=`
`.concat(x,"+").concat(N," ").concat(Ye),z+=`
`.concat(b,"-").concat(N," ").concat(ht),me+=2):(q+=z,z="",we!==1&&oe!==0||(q+=`
  `.concat(Ye),me++))}if(me>20&&oe<Ce-2)return"".concat(xe).concat(ze,`
`).concat(q,`
`).concat(E,"...").concat(N).concat(z,`
`)+"".concat(E,"...").concat(N)}return"".concat(xe).concat(ee?ze:"",`
`).concat(q).concat(z).concat(Y).concat(pe)}(D,F,j)));else if(j==="notDeepStrictEqual"||j==="notStrictEqual"){var W=O[j],T=C(D).split(`
`);if(j==="notStrictEqual"&&v(D)==="object"&&D!==null&&(W=O.notStrictEqualObject),T.length>30)for(T[26]="".concat(E,"...").concat(N);T.length>27;)T.pop();H=T.length===1?l(this,f(k).call(this,"".concat(W," ").concat(T[0]))):l(this,f(k).call(this,"".concat(W,`

`).concat(T.join(`
`),`
`)))}else{var I=C(D),R="",P=O[j];j==="notDeepEqual"||j==="notEqual"?(I="".concat(O[j],`

`).concat(I)).length>1024&&(I="".concat(I.slice(0,1021),"...")):(R="".concat(C(F)),I.length>512&&(I="".concat(I.slice(0,509),"...")),R.length>512&&(R="".concat(R.slice(0,509),"...")),j==="deepEqual"||j==="equal"?I="".concat(P,`

`).concat(I,`

should equal

`):R=" ".concat(j," ").concat(R)),H=l(this,f(k).call(this,"".concat(I).concat(R)))}return Error.stackTraceLimit=K,H.generatedMessage=!Z,Object.defineProperty(p(H),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),H.code="ERR_ASSERTION",H.actual=D,H.expected=F,H.operator=j,Error.captureStackTrace&&Error.captureStackTrace(p(H),$),H.stack,H.name="AssertionError",l(H)}var L,U;return function(M,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(H&&H.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),H&&g(M,H)}(k,S),L=k,U=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:m.custom,value:function(M,H){return m(this,function(Z){for(var j=1;j<arguments.length;j++){var $=arguments[j]!=null?arguments[j]:{},D=Object.keys($);typeof Object.getOwnPropertySymbols=="function"&&(D=D.concat(Object.getOwnPropertySymbols($).filter(function(F){return Object.getOwnPropertyDescriptor($,F).enumerable}))),D.forEach(function(F){h(Z,F,$[F])})}return Z}({},H,{customInspect:!1,depth:0}))}}],U&&n(L.prototype,U),k}(d(Error));o.exports=A},2136:(o,i,s)=>{"use strict";function c(g){return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},c(g)}function h(g){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)},h(g)}function n(g,f){return n=Object.setPrototypeOf||function(v,m){return v.__proto__=m,v},n(g,f)}var l,p,d={};function a(g,f,v){v||(v=Error);var m=function(_){function y(E,x,b){var N;return function(O,w){if(!(O instanceof w))throw new TypeError("Cannot call a class as a function")}(this,y),N=function(O,w){return!w||c(w)!=="object"&&typeof w!="function"?function(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}(O):w}(this,h(y).call(this,function(O,w,C){return typeof f=="string"?f:f(O,w,C)}(E,x,b))),N.code=g,N}return function(E,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(x&&x.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),x&&n(E,x)}(y,_),y}(v);d[g]=m}function u(g,f){if(Array.isArray(g)){var v=g.length;return g=g.map(function(m){return String(m)}),v>2?"one of ".concat(f," ").concat(g.slice(0,v-1).join(", "),", or ")+g[v-1]:v===2?"one of ".concat(f," ").concat(g[0]," or ").concat(g[1]):"of ".concat(f," ").concat(g[0])}return"of ".concat(f," ").concat(String(g))}a("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),a("ERR_INVALID_ARG_TYPE",function(g,f,v){var m,_,y,E,x;if(l===void 0&&(l=s(9282)),l(typeof g=="string","'name' must be a string"),typeof f=="string"&&(_="not ",f.substr(0,_.length)===_)?(m="must not be",f=f.replace(/^not /,"")):m="must be",function(N,O,w){return(w===void 0||w>N.length)&&(w=N.length),N.substring(w-O.length,w)===O}(g," argument"))y="The ".concat(g," ").concat(m," ").concat(u(f,"type"));else{var b=(typeof x!="number"&&(x=0),x+1>(E=g).length||E.indexOf(".",x)===-1?"argument":"property");y='The "'.concat(g,'" ').concat(b," ").concat(m," ").concat(u(f,"type"))}return y+". Received type ".concat(c(v))},TypeError),a("ERR_INVALID_ARG_VALUE",function(g,f){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"is invalid";p===void 0&&(p=s(9539));var m=p.inspect(f);return m.length>128&&(m="".concat(m.slice(0,128),"...")),"The argument '".concat(g,"' ").concat(v,". Received ").concat(m)},TypeError,RangeError),a("ERR_INVALID_RETURN_VALUE",function(g,f,v){var m;return m=v&&v.constructor&&v.constructor.name?"instance of ".concat(v.constructor.name):"type ".concat(c(v)),"Expected ".concat(g,' to be returned from the "').concat(f,'"')+" function but got ".concat(m,".")},TypeError),a("ERR_MISSING_ARGS",function(){for(var g=arguments.length,f=new Array(g),v=0;v<g;v++)f[v]=arguments[v];l===void 0&&(l=s(9282)),l(f.length>0,"At least one arg needs to be specified");var m="The ",_=f.length;switch(f=f.map(function(y){return'"'.concat(y,'"')}),_){case 1:m+="".concat(f[0]," argument");break;case 2:m+="".concat(f[0]," and ").concat(f[1]," arguments");break;default:m+=f.slice(0,_-1).join(", "),m+=", and ".concat(f[_-1]," arguments")}return"".concat(m," must be specified")},TypeError),o.exports.codes=d},9158:(o,i,s)=>{"use strict";function c(B,G){return function(z){if(Array.isArray(z))return z}(B)||function(z,q){var J=[],Y=!0,ee=!1,se=void 0;try{for(var ae,ce=z[Symbol.iterator]();!(Y=(ae=ce.next()).done)&&(J.push(ae.value),!q||J.length!==q);Y=!0);}catch(oe){ee=!0,se=oe}finally{try{Y||ce.return==null||ce.return()}finally{if(ee)throw se}}return J}(B,G)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(B){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},h(B)}var n=/a/g.flags!==void 0,l=function(B){var G=[];return B.forEach(function(z){return G.push(z)}),G},p=function(B){var G=[];return B.forEach(function(z,q){return G.push([q,z])}),G},d=Object.is?Object.is:s(609),a=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},u=Number.isNaN?Number.isNaN:s(360);function g(B){return B.call.bind(B)}var f=g(Object.prototype.hasOwnProperty),v=g(Object.prototype.propertyIsEnumerable),m=g(Object.prototype.toString),_=s(9539).types,y=_.isAnyArrayBuffer,E=_.isArrayBufferView,x=_.isDate,b=_.isMap,N=_.isRegExp,O=_.isSet,w=_.isNativeError,C=_.isBoxedPrimitive,A=_.isNumberObject,S=_.isStringObject,k=_.isBooleanObject,L=_.isBigIntObject,U=_.isSymbolObject,M=_.isFloat32Array,H=_.isFloat64Array;function Z(B){if(B.length===0||B.length>10)return!0;for(var G=0;G<B.length;G++){var z=B.charCodeAt(G);if(z<48||z>57)return!0}return B.length===10&&B>=Math.pow(2,32)}function j(B){return Object.keys(B).filter(Z).concat(a(B).filter(Object.prototype.propertyIsEnumerable.bind(B)))}function $(B,G){if(B===G)return 0;for(var z=B.length,q=G.length,J=0,Y=Math.min(z,q);J<Y;++J)if(B[J]!==G[J]){z=B[J],q=G[J];break}return z<q?-1:q<z?1:0}function D(B,G,z,q){if(B===G)return B!==0||!z||d(B,G);if(z){if(h(B)!=="object")return typeof B=="number"&&u(B)&&u(G);if(h(G)!=="object"||B===null||G===null||Object.getPrototypeOf(B)!==Object.getPrototypeOf(G))return!1}else{if(B===null||h(B)!=="object")return(G===null||h(G)!=="object")&&B==G;if(G===null||h(G)!=="object")return!1}var J,Y,ee,se,ae=m(B);if(ae!==m(G))return!1;if(Array.isArray(B)){if(B.length!==G.length)return!1;var ce=j(B),oe=j(G);return ce.length===oe.length&&K(B,G,z,q,1,ce)}if(ae==="[object Object]"&&(!b(B)&&b(G)||!O(B)&&O(G)))return!1;if(x(B)){if(!x(G)||Date.prototype.getTime.call(B)!==Date.prototype.getTime.call(G))return!1}else if(N(B)){if(!N(G)||(ee=B,se=G,!(n?ee.source===se.source&&ee.flags===se.flags:RegExp.prototype.toString.call(ee)===RegExp.prototype.toString.call(se))))return!1}else if(w(B)||B instanceof Error){if(B.message!==G.message||B.name!==G.name)return!1}else{if(E(B)){if(z||!M(B)&&!H(B)){if(!function(le,ie){return le.byteLength===ie.byteLength&&$(new Uint8Array(le.buffer,le.byteOffset,le.byteLength),new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength))===0}(B,G))return!1}else if(!function(le,ie){if(le.byteLength!==ie.byteLength)return!1;for(var Ce=0;Ce<le.byteLength;Ce++)if(le[Ce]!==ie[Ce])return!1;return!0}(B,G))return!1;var pe=j(B),ye=j(G);return pe.length===ye.length&&K(B,G,z,q,0,pe)}if(O(B))return!(!O(G)||B.size!==G.size)&&K(B,G,z,q,2);if(b(B))return!(!b(G)||B.size!==G.size)&&K(B,G,z,q,3);if(y(B)){if(Y=G,(J=B).byteLength!==Y.byteLength||$(new Uint8Array(J),new Uint8Array(Y))!==0)return!1}else if(C(B)&&!function(le,ie){return A(le)?A(ie)&&d(Number.prototype.valueOf.call(le),Number.prototype.valueOf.call(ie)):S(le)?S(ie)&&String.prototype.valueOf.call(le)===String.prototype.valueOf.call(ie):k(le)?k(ie)&&Boolean.prototype.valueOf.call(le)===Boolean.prototype.valueOf.call(ie):L(le)?L(ie)&&BigInt.prototype.valueOf.call(le)===BigInt.prototype.valueOf.call(ie):U(ie)&&Symbol.prototype.valueOf.call(le)===Symbol.prototype.valueOf.call(ie)}(B,G))return!1}return K(B,G,z,q,0)}function F(B,G){return G.filter(function(z){return v(B,z)})}function K(B,G,z,q,J,Y){if(arguments.length===5){Y=Object.keys(B);var ee=Object.keys(G);if(Y.length!==ee.length)return!1}for(var se=0;se<Y.length;se++)if(!f(G,Y[se]))return!1;if(z&&arguments.length===5){var ae=a(B);if(ae.length!==0){var ce=0;for(se=0;se<ae.length;se++){var oe=ae[se];if(v(B,oe)){if(!v(G,oe))return!1;Y.push(oe),ce++}else if(v(G,oe))return!1}var pe=a(G);if(ae.length!==pe.length&&F(G,pe).length!==ce)return!1}else{var ye=a(G);if(ye.length!==0&&F(G,ye).length!==0)return!1}}if(Y.length===0&&(J===0||J===1&&B.length===0||B.size===0))return!0;if(q===void 0)q={val1:new Map,val2:new Map,position:0};else{var le=q.val1.get(B);if(le!==void 0){var ie=q.val2.get(G);if(ie!==void 0)return le===ie}q.position++}q.val1.set(B,q.position),q.val2.set(G,q.position);var Ce=V(B,G,z,Y,q,J);return q.val1.delete(B),q.val2.delete(G),Ce}function W(B,G,z,q){for(var J=l(B),Y=0;Y<J.length;Y++){var ee=J[Y];if(D(G,ee,z,q))return B.delete(ee),!0}return!1}function T(B){switch(h(B)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":B=+B;case"number":if(u(B))return!1}return!0}function I(B,G,z){var q=T(z);return q??(G.has(q)&&!B.has(q))}function R(B,G,z,q,J){var Y=T(z);if(Y!=null)return Y;var ee=G.get(Y);return!(ee===void 0&&!G.has(Y)||!D(q,ee,!1,J))&&!B.has(Y)&&D(q,ee,!1,J)}function P(B,G,z,q,J,Y){for(var ee=l(B),se=0;se<ee.length;se++){var ae=ee[se];if(D(z,ae,J,Y)&&D(q,G.get(ae),J,Y))return B.delete(ae),!0}return!1}function V(B,G,z,q,J,Y){var ee=0;if(Y===2){if(!function(oe,pe,ye,le){for(var ie=null,Ce=l(oe),Re=0;Re<Ce.length;Re++){var me=Ce[Re];if(h(me)==="object"&&me!==null)ie===null&&(ie=new Set),ie.add(me);else if(!pe.has(me)){if(ye||!I(oe,pe,me))return!1;ie===null&&(ie=new Set),ie.add(me)}}if(ie!==null){for(var xe=l(pe),ze=0;ze<xe.length;ze++){var we=xe[ze];if(h(we)==="object"&&we!==null){if(!W(ie,we,ye,le))return!1}else if(!ye&&!oe.has(we)&&!W(ie,we,ye,le))return!1}return ie.size===0}return!0}(B,G,z,J))return!1}else if(Y===3){if(!function(oe,pe,ye,le){for(var ie=null,Ce=p(oe),Re=0;Re<Ce.length;Re++){var me=c(Ce[Re],2),xe=me[0],ze=me[1];if(h(xe)==="object"&&xe!==null)ie===null&&(ie=new Set),ie.add(xe);else{var we=pe.get(xe);if(we===void 0&&!pe.has(xe)||!D(ze,we,ye,le)){if(ye||!R(oe,pe,xe,ze,le))return!1;ie===null&&(ie=new Set),ie.add(xe)}}}if(ie!==null){for(var ht=p(pe),Ye=0;Ye<ht.length;Ye++){var Ct=c(ht[Ye],2),Be=(xe=Ct[0],Ct[1]);if(h(xe)==="object"&&xe!==null){if(!P(ie,oe,xe,Be,ye,le))return!1}else if(!(ye||oe.has(xe)&&D(oe.get(xe),Be,!1,le)||P(ie,oe,xe,Be,!1,le)))return!1}return ie.size===0}return!0}(B,G,z,J))return!1}else if(Y===1)for(;ee<B.length;ee++){if(!f(B,ee)){if(f(G,ee))return!1;for(var se=Object.keys(B);ee<se.length;ee++){var ae=se[ee];if(!f(G,ae)||!D(B[ae],G[ae],z,J))return!1}return se.length===Object.keys(G).length}if(!f(G,ee)||!D(B[ee],G[ee],z,J))return!1}for(ee=0;ee<q.length;ee++){var ce=q[ee];if(!D(B[ce],G[ce],z,J))return!1}return!0}o.exports={isDeepEqual:function(B,G){return D(B,G,!1)},isDeepStrictEqual:function(B,G){return D(B,G,!0)}}},1924:(o,i,s)=>{"use strict";var c=s(210),h=s(5559),n=h(c("String.prototype.indexOf"));o.exports=function(l,p){var d=c(l,!!p);return typeof d=="function"&&n(l,".prototype.")>-1?h(d):d}},5559:(o,i,s)=>{"use strict";var c=s(8612),h=s(210),n=h("%Function.prototype.apply%"),l=h("%Function.prototype.call%"),p=h("%Reflect.apply%",!0)||c.call(l,n),d=h("%Object.getOwnPropertyDescriptor%",!0),a=h("%Object.defineProperty%",!0),u=h("%Math.max%");if(a)try{a({},"a",{value:1})}catch{a=null}o.exports=function(f){var v=p(c,l,arguments);if(d&&a){var m=d(v,"length");m.configurable&&a(v,"length",{value:1+u(0,f.length-(arguments.length-1))})}return v};var g=function(){return p(c,n,arguments)};a?a(o.exports,"apply",{value:g}):o.exports.apply=g},5108:(o,i,s)=>{var c=s(9539),h=s(9282);function n(){return new Date().getTime()}var l,p=Array.prototype.slice,d={};l=s.g!==void 0&&s.g.console?s.g.console:typeof window<"u"&&window.console?window.console:{};for(var a=[[function(){},"log"],[function(){l.log.apply(l,arguments)},"info"],[function(){l.log.apply(l,arguments)},"warn"],[function(){l.warn.apply(l,arguments)},"error"],[function(m){d[m]=n()},"time"],[function(m){var _=d[m];if(!_)throw new Error("No such label: "+m);delete d[m];var y=n()-_;l.log(m+": "+y+"ms")},"timeEnd"],[function(){var m=new Error;m.name="Trace",m.message=c.format.apply(null,arguments),l.error(m.stack)},"trace"],[function(m){l.log(c.inspect(m)+`
`)},"dir"],[function(m){if(!m){var _=p.call(arguments,1);h.ok(!1,c.format.apply(null,_))}},"assert"]],u=0;u<a.length;u++){var g=a[u],f=g[0],v=g[1];l[v]||(l[v]=f)}o.exports=l},452:function(o,i,s){var c;o.exports=(c=s(8249),s(8269),s(8214),s(888),s(5109),function(){var h=c,n=h.lib.BlockCipher,l=h.algo,p=[],d=[],a=[],u=[],g=[],f=[],v=[],m=[],_=[],y=[];(function(){for(var b=[],N=0;N<256;N++)b[N]=N<128?N<<1:N<<1^283;var O=0,w=0;for(N=0;N<256;N++){var C=w^w<<1^w<<2^w<<3^w<<4;C=C>>>8^255&C^99,p[O]=C,d[C]=O;var A=b[O],S=b[A],k=b[S],L=257*b[C]^16843008*C;a[O]=L<<24|L>>>8,u[O]=L<<16|L>>>16,g[O]=L<<8|L>>>24,f[O]=L,L=16843009*k^65537*S^257*A^16843008*O,v[C]=L<<24|L>>>8,m[C]=L<<16|L>>>16,_[C]=L<<8|L>>>24,y[C]=L,O?(O=A^b[b[b[k^A]]],w^=b[b[w]]):O=w=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],x=l.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var b=this._keyPriorReset=this._key,N=b.words,O=b.sigBytes/4,w=4*((this._nRounds=O+6)+1),C=this._keySchedule=[],A=0;A<w;A++)A<O?C[A]=N[A]:(L=C[A-1],A%O?O>6&&A%O==4&&(L=p[L>>>24]<<24|p[L>>>16&255]<<16|p[L>>>8&255]<<8|p[255&L]):(L=p[(L=L<<8|L>>>24)>>>24]<<24|p[L>>>16&255]<<16|p[L>>>8&255]<<8|p[255&L],L^=E[A/O|0]<<24),C[A]=C[A-O]^L);for(var S=this._invKeySchedule=[],k=0;k<w;k++){if(A=w-k,k%4)var L=C[A];else L=C[A-4];S[k]=k<4||A<=4?L:v[p[L>>>24]]^m[p[L>>>16&255]]^_[p[L>>>8&255]]^y[p[255&L]]}}},encryptBlock:function(b,N){this._doCryptBlock(b,N,this._keySchedule,a,u,g,f,p)},decryptBlock:function(b,N){var O=b[N+1];b[N+1]=b[N+3],b[N+3]=O,this._doCryptBlock(b,N,this._invKeySchedule,v,m,_,y,d),O=b[N+1],b[N+1]=b[N+3],b[N+3]=O},_doCryptBlock:function(b,N,O,w,C,A,S,k){for(var L=this._nRounds,U=b[N]^O[0],M=b[N+1]^O[1],H=b[N+2]^O[2],Z=b[N+3]^O[3],j=4,$=1;$<L;$++){var D=w[U>>>24]^C[M>>>16&255]^A[H>>>8&255]^S[255&Z]^O[j++],F=w[M>>>24]^C[H>>>16&255]^A[Z>>>8&255]^S[255&U]^O[j++],K=w[H>>>24]^C[Z>>>16&255]^A[U>>>8&255]^S[255&M]^O[j++],W=w[Z>>>24]^C[U>>>16&255]^A[M>>>8&255]^S[255&H]^O[j++];U=D,M=F,H=K,Z=W}D=(k[U>>>24]<<24|k[M>>>16&255]<<16|k[H>>>8&255]<<8|k[255&Z])^O[j++],F=(k[M>>>24]<<24|k[H>>>16&255]<<16|k[Z>>>8&255]<<8|k[255&U])^O[j++],K=(k[H>>>24]<<24|k[Z>>>16&255]<<16|k[U>>>8&255]<<8|k[255&M])^O[j++],W=(k[Z>>>24]<<24|k[U>>>16&255]<<16|k[M>>>8&255]<<8|k[255&H])^O[j++],b[N]=D,b[N+1]=F,b[N+2]=K,b[N+3]=W},keySize:8});h.AES=n._createHelper(x)}(),c.AES)},5109:function(o,i,s){var c,h,n,l,p,d,a,u,g,f,v,m,_,y,E,x,b,N,O;o.exports=(c=s(8249),s(888),void(c.lib.Cipher||(h=c,n=h.lib,l=n.Base,p=n.WordArray,d=n.BufferedBlockAlgorithm,a=h.enc,a.Utf8,u=a.Base64,g=h.algo.EvpKDF,f=n.Cipher=d.extend({cfg:l.extend(),createEncryptor:function(w,C){return this.create(this._ENC_XFORM_MODE,w,C)},createDecryptor:function(w,C){return this.create(this._DEC_XFORM_MODE,w,C)},init:function(w,C,A){this.cfg=this.cfg.extend(A),this._xformMode=w,this._key=C,this.reset()},reset:function(){d.reset.call(this),this._doReset()},process:function(w){return this._append(w),this._process()},finalize:function(w){return w&&this._append(w),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function w(C){return typeof C=="string"?O:b}return function(C){return{encrypt:function(A,S,k){return w(S).encrypt(C,A,S,k)},decrypt:function(A,S,k){return w(S).decrypt(C,A,S,k)}}}}()}),n.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),v=h.mode={},m=n.BlockCipherMode=l.extend({createEncryptor:function(w,C){return this.Encryptor.create(w,C)},createDecryptor:function(w,C){return this.Decryptor.create(w,C)},init:function(w,C){this._cipher=w,this._iv=C}}),_=v.CBC=function(){var w=m.extend();function C(A,S,k){var L,U=this._iv;U?(L=U,this._iv=void 0):L=this._prevBlock;for(var M=0;M<k;M++)A[S+M]^=L[M]}return w.Encryptor=w.extend({processBlock:function(A,S){var k=this._cipher,L=k.blockSize;C.call(this,A,S,L),k.encryptBlock(A,S),this._prevBlock=A.slice(S,S+L)}}),w.Decryptor=w.extend({processBlock:function(A,S){var k=this._cipher,L=k.blockSize,U=A.slice(S,S+L);k.decryptBlock(A,S),C.call(this,A,S,L),this._prevBlock=U}}),w}(),y=(h.pad={}).Pkcs7={pad:function(w,C){for(var A=4*C,S=A-w.sigBytes%A,k=S<<24|S<<16|S<<8|S,L=[],U=0;U<S;U+=4)L.push(k);var M=p.create(L,S);w.concat(M)},unpad:function(w){var C=255&w.words[w.sigBytes-1>>>2];w.sigBytes-=C}},n.BlockCipher=f.extend({cfg:f.cfg.extend({mode:_,padding:y}),reset:function(){var w;f.reset.call(this);var C=this.cfg,A=C.iv,S=C.mode;this._xformMode==this._ENC_XFORM_MODE?w=S.createEncryptor:(w=S.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==w?this._mode.init(this,A&&A.words):(this._mode=w.call(S,this,A&&A.words),this._mode.__creator=w)},_doProcessBlock:function(w,C){this._mode.processBlock(w,C)},_doFinalize:function(){var w,C=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(C.pad(this._data,this.blockSize),w=this._process(!0)):(w=this._process(!0),C.unpad(w)),w},blockSize:4}),E=n.CipherParams=l.extend({init:function(w){this.mixIn(w)},toString:function(w){return(w||this.formatter).stringify(this)}}),x=(h.format={}).OpenSSL={stringify:function(w){var C=w.ciphertext,A=w.salt;return(A?p.create([1398893684,1701076831]).concat(A).concat(C):C).toString(u)},parse:function(w){var C,A=u.parse(w),S=A.words;return S[0]==1398893684&&S[1]==1701076831&&(C=p.create(S.slice(2,4)),S.splice(0,4),A.sigBytes-=16),E.create({ciphertext:A,salt:C})}},b=n.SerializableCipher=l.extend({cfg:l.extend({format:x}),encrypt:function(w,C,A,S){S=this.cfg.extend(S);var k=w.createEncryptor(A,S),L=k.finalize(C),U=k.cfg;return E.create({ciphertext:L,key:A,iv:U.iv,algorithm:w,mode:U.mode,padding:U.padding,blockSize:w.blockSize,formatter:S.format})},decrypt:function(w,C,A,S){return S=this.cfg.extend(S),C=this._parse(C,S.format),w.createDecryptor(A,S).finalize(C.ciphertext)},_parse:function(w,C){return typeof w=="string"?C.parse(w,this):w}}),N=(h.kdf={}).OpenSSL={execute:function(w,C,A,S){S||(S=p.random(8));var k=g.create({keySize:C+A}).compute(w,S),L=p.create(k.words.slice(C),4*A);return k.sigBytes=4*C,E.create({key:k,iv:L,salt:S})}},O=n.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:N}),encrypt:function(w,C,A,S){var k=(S=this.cfg.extend(S)).kdf.execute(A,w.keySize,w.ivSize);S.iv=k.iv;var L=b.encrypt.call(this,w,C,k.key,S);return L.mixIn(k),L},decrypt:function(w,C,A,S){S=this.cfg.extend(S),C=this._parse(C,S.format);var k=S.kdf.execute(A,w.keySize,w.ivSize,C.salt);return S.iv=k.iv,b.decrypt.call(this,w,C,k.key,S)}}))))},8249:function(o,i,s){var c;o.exports=(c=c||function(h,n){var l;if(typeof window<"u"&&window.crypto&&(l=window.crypto),typeof self<"u"&&self.crypto&&(l=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(l=globalThis.crypto),!l&&typeof window<"u"&&window.msCrypto&&(l=window.msCrypto),!l&&s.g!==void 0&&s.g.crypto&&(l=s.g.crypto),!l)try{l=s(2480)}catch{}var p=function(){if(l){if(typeof l.getRandomValues=="function")try{return l.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof l.randomBytes=="function")try{return l.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},d=Object.create||function(){function b(){}return function(N){var O;return b.prototype=N,O=new b,b.prototype=null,O}}(),a={},u=a.lib={},g=u.Base={extend:function(b){var N=d(this);return b&&N.mixIn(b),N.hasOwnProperty("init")&&this.init!==N.init||(N.init=function(){N.$super.init.apply(this,arguments)}),N.init.prototype=N,N.$super=this,N},create:function(){var b=this.extend();return b.init.apply(b,arguments),b},init:function(){},mixIn:function(b){for(var N in b)b.hasOwnProperty(N)&&(this[N]=b[N]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},f=u.WordArray=g.extend({init:function(b,N){b=this.words=b||[],this.sigBytes=N??4*b.length},toString:function(b){return(b||m).stringify(this)},concat:function(b){var N=this.words,O=b.words,w=this.sigBytes,C=b.sigBytes;if(this.clamp(),w%4)for(var A=0;A<C;A++){var S=O[A>>>2]>>>24-A%4*8&255;N[w+A>>>2]|=S<<24-(w+A)%4*8}else for(var k=0;k<C;k+=4)N[w+k>>>2]=O[k>>>2];return this.sigBytes+=C,this},clamp:function(){var b=this.words,N=this.sigBytes;b[N>>>2]&=4294967295<<32-N%4*8,b.length=h.ceil(N/4)},clone:function(){var b=g.clone.call(this);return b.words=this.words.slice(0),b},random:function(b){for(var N=[],O=0;O<b;O+=4)N.push(p());return new f.init(N,b)}}),v=a.enc={},m=v.Hex={stringify:function(b){for(var N=b.words,O=b.sigBytes,w=[],C=0;C<O;C++){var A=N[C>>>2]>>>24-C%4*8&255;w.push((A>>>4).toString(16)),w.push((15&A).toString(16))}return w.join("")},parse:function(b){for(var N=b.length,O=[],w=0;w<N;w+=2)O[w>>>3]|=parseInt(b.substr(w,2),16)<<24-w%8*4;return new f.init(O,N/2)}},_=v.Latin1={stringify:function(b){for(var N=b.words,O=b.sigBytes,w=[],C=0;C<O;C++){var A=N[C>>>2]>>>24-C%4*8&255;w.push(String.fromCharCode(A))}return w.join("")},parse:function(b){for(var N=b.length,O=[],w=0;w<N;w++)O[w>>>2]|=(255&b.charCodeAt(w))<<24-w%4*8;return new f.init(O,N)}},y=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(_.stringify(b)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(b){return _.parse(unescape(encodeURIComponent(b)))}},E=u.BufferedBlockAlgorithm=g.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(b){typeof b=="string"&&(b=y.parse(b)),this._data.concat(b),this._nDataBytes+=b.sigBytes},_process:function(b){var N,O=this._data,w=O.words,C=O.sigBytes,A=this.blockSize,S=C/(4*A),k=(S=b?h.ceil(S):h.max((0|S)-this._minBufferSize,0))*A,L=h.min(4*k,C);if(k){for(var U=0;U<k;U+=A)this._doProcessBlock(w,U);N=w.splice(0,k),O.sigBytes-=L}return new f.init(N,L)},clone:function(){var b=g.clone.call(this);return b._data=this._data.clone(),b},_minBufferSize:0}),x=(u.Hasher=E.extend({cfg:g.extend(),init:function(b){this.cfg=this.cfg.extend(b),this.reset()},reset:function(){E.reset.call(this),this._doReset()},update:function(b){return this._append(b),this._process(),this},finalize:function(b){return b&&this._append(b),this._doFinalize()},blockSize:16,_createHelper:function(b){return function(N,O){return new b.init(O).finalize(N)}},_createHmacHelper:function(b){return function(N,O){return new x.HMAC.init(b,O).finalize(N)}}}),a.algo={});return a}(Math),c)},8269:function(o,i,s){var c,h,n;o.exports=(c=s(8249),n=(h=c).lib.WordArray,h.enc.Base64={stringify:function(l){var p=l.words,d=l.sigBytes,a=this._map;l.clamp();for(var u=[],g=0;g<d;g+=3)for(var f=(p[g>>>2]>>>24-g%4*8&255)<<16|(p[g+1>>>2]>>>24-(g+1)%4*8&255)<<8|p[g+2>>>2]>>>24-(g+2)%4*8&255,v=0;v<4&&g+.75*v<d;v++)u.push(a.charAt(f>>>6*(3-v)&63));var m=a.charAt(64);if(m)for(;u.length%4;)u.push(m);return u.join("")},parse:function(l){var p=l.length,d=this._map,a=this._reverseMap;if(!a){a=this._reverseMap=[];for(var u=0;u<d.length;u++)a[d.charCodeAt(u)]=u}var g=d.charAt(64);if(g){var f=l.indexOf(g);f!==-1&&(p=f)}return function(v,m,_){for(var y=[],E=0,x=0;x<m;x++)if(x%4){var b=_[v.charCodeAt(x-1)]<<x%4*2|_[v.charCodeAt(x)]>>>6-x%4*2;y[E>>>2]|=b<<24-E%4*8,E++}return n.create(y,E)}(l,p,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},c.enc.Base64)},3786:function(o,i,s){var c,h,n;o.exports=(c=s(8249),n=(h=c).lib.WordArray,h.enc.Base64url={stringify:function(l,p=!0){var d=l.words,a=l.sigBytes,u=p?this._safe_map:this._map;l.clamp();for(var g=[],f=0;f<a;f+=3)for(var v=(d[f>>>2]>>>24-f%4*8&255)<<16|(d[f+1>>>2]>>>24-(f+1)%4*8&255)<<8|d[f+2>>>2]>>>24-(f+2)%4*8&255,m=0;m<4&&f+.75*m<a;m++)g.push(u.charAt(v>>>6*(3-m)&63));var _=u.charAt(64);if(_)for(;g.length%4;)g.push(_);return g.join("")},parse:function(l,p=!0){var d=l.length,a=p?this._safe_map:this._map,u=this._reverseMap;if(!u){u=this._reverseMap=[];for(var g=0;g<a.length;g++)u[a.charCodeAt(g)]=g}var f=a.charAt(64);if(f){var v=l.indexOf(f);v!==-1&&(d=v)}return function(m,_,y){for(var E=[],x=0,b=0;b<_;b++)if(b%4){var N=y[m.charCodeAt(b-1)]<<b%4*2|y[m.charCodeAt(b)]>>>6-b%4*2;E[x>>>2]|=N<<24-x%4*8,x++}return n.create(E,x)}(l,d,u)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"},c.enc.Base64url)},298:function(o,i,s){var c;o.exports=(c=s(8249),function(){var h=c,n=h.lib.WordArray,l=h.enc;function p(d){return d<<8&4278255360|d>>>8&16711935}l.Utf16=l.Utf16BE={stringify:function(d){for(var a=d.words,u=d.sigBytes,g=[],f=0;f<u;f+=2){var v=a[f>>>2]>>>16-f%4*8&65535;g.push(String.fromCharCode(v))}return g.join("")},parse:function(d){for(var a=d.length,u=[],g=0;g<a;g++)u[g>>>1]|=d.charCodeAt(g)<<16-g%2*16;return n.create(u,2*a)}},l.Utf16LE={stringify:function(d){for(var a=d.words,u=d.sigBytes,g=[],f=0;f<u;f+=2){var v=p(a[f>>>2]>>>16-f%4*8&65535);g.push(String.fromCharCode(v))}return g.join("")},parse:function(d){for(var a=d.length,u=[],g=0;g<a;g++)u[g>>>1]|=p(d.charCodeAt(g)<<16-g%2*16);return n.create(u,2*a)}}}(),c.enc.Utf16)},888:function(o,i,s){var c,h,n,l,p,d,a,u;o.exports=(u=s(8249),s(2783),s(9824),n=(h=(c=u).lib).Base,l=h.WordArray,d=(p=c.algo).MD5,a=p.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:d,iterations:1}),init:function(g){this.cfg=this.cfg.extend(g)},compute:function(g,f){for(var v,m=this.cfg,_=m.hasher.create(),y=l.create(),E=y.words,x=m.keySize,b=m.iterations;E.length<x;){v&&_.update(v),v=_.update(g).finalize(f),_.reset();for(var N=1;N<b;N++)v=_.finalize(v),_.reset();y.concat(v)}return y.sigBytes=4*x,y}}),c.EvpKDF=function(g,f,v){return a.create(v).compute(g,f)},u.EvpKDF)},2209:function(o,i,s){var c,h,n,l;o.exports=(l=s(8249),s(5109),h=(c=l).lib.CipherParams,n=c.enc.Hex,c.format.Hex={stringify:function(p){return p.ciphertext.toString(n)},parse:function(p){var d=n.parse(p);return h.create({ciphertext:d})}},l.format.Hex)},9824:function(o,i,s){var c,h,n;o.exports=(h=(c=s(8249)).lib.Base,n=c.enc.Utf8,void(c.algo.HMAC=h.extend({init:function(l,p){l=this._hasher=new l.init,typeof p=="string"&&(p=n.parse(p));var d=l.blockSize,a=4*d;p.sigBytes>a&&(p=l.finalize(p)),p.clamp();for(var u=this._oKey=p.clone(),g=this._iKey=p.clone(),f=u.words,v=g.words,m=0;m<d;m++)f[m]^=1549556828,v[m]^=909522486;u.sigBytes=g.sigBytes=a,this.reset()},reset:function(){var l=this._hasher;l.reset(),l.update(this._iKey)},update:function(l){return this._hasher.update(l),this},finalize:function(l){var p=this._hasher,d=p.finalize(l);return p.reset(),p.finalize(this._oKey.clone().concat(d))}})))},1354:function(o,i,s){var c;o.exports=(c=s(8249),s(4938),s(4433),s(298),s(8269),s(3786),s(8214),s(2783),s(2153),s(7792),s(34),s(7460),s(3327),s(706),s(9824),s(2112),s(888),s(5109),s(8568),s(4242),s(9968),s(7660),s(1148),s(3615),s(2807),s(1077),s(6475),s(6991),s(2209),s(452),s(4253),s(1857),s(4454),s(3974),c)},4433:function(o,i,s){var c;o.exports=(c=s(8249),function(){if(typeof ArrayBuffer=="function"){var h=c.lib.WordArray,n=h.init,l=h.init=function(p){if(p instanceof ArrayBuffer&&(p=new Uint8Array(p)),(p instanceof Int8Array||typeof Uint8ClampedArray<"u"&&p instanceof Uint8ClampedArray||p instanceof Int16Array||p instanceof Uint16Array||p instanceof Int32Array||p instanceof Uint32Array||p instanceof Float32Array||p instanceof Float64Array)&&(p=new Uint8Array(p.buffer,p.byteOffset,p.byteLength)),p instanceof Uint8Array){for(var d=p.byteLength,a=[],u=0;u<d;u++)a[u>>>2]|=p[u]<<24-u%4*8;n.call(this,a,d)}else n.apply(this,arguments)};l.prototype=h}}(),c.lib.WordArray)},8214:function(o,i,s){var c;o.exports=(c=s(8249),function(h){var n=c,l=n.lib,p=l.WordArray,d=l.Hasher,a=n.algo,u=[];(function(){for(var y=0;y<64;y++)u[y]=4294967296*h.abs(h.sin(y+1))|0})();var g=a.MD5=d.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(y,E){for(var x=0;x<16;x++){var b=E+x,N=y[b];y[b]=16711935&(N<<8|N>>>24)|4278255360&(N<<24|N>>>8)}var O=this._hash.words,w=y[E+0],C=y[E+1],A=y[E+2],S=y[E+3],k=y[E+4],L=y[E+5],U=y[E+6],M=y[E+7],H=y[E+8],Z=y[E+9],j=y[E+10],$=y[E+11],D=y[E+12],F=y[E+13],K=y[E+14],W=y[E+15],T=O[0],I=O[1],R=O[2],P=O[3];T=f(T,I,R,P,w,7,u[0]),P=f(P,T,I,R,C,12,u[1]),R=f(R,P,T,I,A,17,u[2]),I=f(I,R,P,T,S,22,u[3]),T=f(T,I,R,P,k,7,u[4]),P=f(P,T,I,R,L,12,u[5]),R=f(R,P,T,I,U,17,u[6]),I=f(I,R,P,T,M,22,u[7]),T=f(T,I,R,P,H,7,u[8]),P=f(P,T,I,R,Z,12,u[9]),R=f(R,P,T,I,j,17,u[10]),I=f(I,R,P,T,$,22,u[11]),T=f(T,I,R,P,D,7,u[12]),P=f(P,T,I,R,F,12,u[13]),R=f(R,P,T,I,K,17,u[14]),T=v(T,I=f(I,R,P,T,W,22,u[15]),R,P,C,5,u[16]),P=v(P,T,I,R,U,9,u[17]),R=v(R,P,T,I,$,14,u[18]),I=v(I,R,P,T,w,20,u[19]),T=v(T,I,R,P,L,5,u[20]),P=v(P,T,I,R,j,9,u[21]),R=v(R,P,T,I,W,14,u[22]),I=v(I,R,P,T,k,20,u[23]),T=v(T,I,R,P,Z,5,u[24]),P=v(P,T,I,R,K,9,u[25]),R=v(R,P,T,I,S,14,u[26]),I=v(I,R,P,T,H,20,u[27]),T=v(T,I,R,P,F,5,u[28]),P=v(P,T,I,R,A,9,u[29]),R=v(R,P,T,I,M,14,u[30]),T=m(T,I=v(I,R,P,T,D,20,u[31]),R,P,L,4,u[32]),P=m(P,T,I,R,H,11,u[33]),R=m(R,P,T,I,$,16,u[34]),I=m(I,R,P,T,K,23,u[35]),T=m(T,I,R,P,C,4,u[36]),P=m(P,T,I,R,k,11,u[37]),R=m(R,P,T,I,M,16,u[38]),I=m(I,R,P,T,j,23,u[39]),T=m(T,I,R,P,F,4,u[40]),P=m(P,T,I,R,w,11,u[41]),R=m(R,P,T,I,S,16,u[42]),I=m(I,R,P,T,U,23,u[43]),T=m(T,I,R,P,Z,4,u[44]),P=m(P,T,I,R,D,11,u[45]),R=m(R,P,T,I,W,16,u[46]),T=_(T,I=m(I,R,P,T,A,23,u[47]),R,P,w,6,u[48]),P=_(P,T,I,R,M,10,u[49]),R=_(R,P,T,I,K,15,u[50]),I=_(I,R,P,T,L,21,u[51]),T=_(T,I,R,P,D,6,u[52]),P=_(P,T,I,R,S,10,u[53]),R=_(R,P,T,I,j,15,u[54]),I=_(I,R,P,T,C,21,u[55]),T=_(T,I,R,P,H,6,u[56]),P=_(P,T,I,R,W,10,u[57]),R=_(R,P,T,I,U,15,u[58]),I=_(I,R,P,T,F,21,u[59]),T=_(T,I,R,P,k,6,u[60]),P=_(P,T,I,R,$,10,u[61]),R=_(R,P,T,I,A,15,u[62]),I=_(I,R,P,T,Z,21,u[63]),O[0]=O[0]+T|0,O[1]=O[1]+I|0,O[2]=O[2]+R|0,O[3]=O[3]+P|0},_doFinalize:function(){var y=this._data,E=y.words,x=8*this._nDataBytes,b=8*y.sigBytes;E[b>>>5]|=128<<24-b%32;var N=h.floor(x/4294967296),O=x;E[15+(b+64>>>9<<4)]=16711935&(N<<8|N>>>24)|4278255360&(N<<24|N>>>8),E[14+(b+64>>>9<<4)]=16711935&(O<<8|O>>>24)|4278255360&(O<<24|O>>>8),y.sigBytes=4*(E.length+1),this._process();for(var w=this._hash,C=w.words,A=0;A<4;A++){var S=C[A];C[A]=16711935&(S<<8|S>>>24)|4278255360&(S<<24|S>>>8)}return w},clone:function(){var y=d.clone.call(this);return y._hash=this._hash.clone(),y}});function f(y,E,x,b,N,O,w){var C=y+(E&x|~E&b)+N+w;return(C<<O|C>>>32-O)+E}function v(y,E,x,b,N,O,w){var C=y+(E&b|x&~b)+N+w;return(C<<O|C>>>32-O)+E}function m(y,E,x,b,N,O,w){var C=y+(E^x^b)+N+w;return(C<<O|C>>>32-O)+E}function _(y,E,x,b,N,O,w){var C=y+(x^(E|~b))+N+w;return(C<<O|C>>>32-O)+E}n.MD5=d._createHelper(g),n.HmacMD5=d._createHmacHelper(g)}(Math),c.MD5)},8568:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.mode.CFB=function(){var h=c.lib.BlockCipherMode.extend();function n(l,p,d,a){var u,g=this._iv;g?(u=g.slice(0),this._iv=void 0):u=this._prevBlock,a.encryptBlock(u,0);for(var f=0;f<d;f++)l[p+f]^=u[f]}return h.Encryptor=h.extend({processBlock:function(l,p){var d=this._cipher,a=d.blockSize;n.call(this,l,p,a,d),this._prevBlock=l.slice(p,p+a)}}),h.Decryptor=h.extend({processBlock:function(l,p){var d=this._cipher,a=d.blockSize,u=l.slice(p,p+a);n.call(this,l,p,a,d),this._prevBlock=u}}),h}(),c.mode.CFB)},9968:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.mode.CTRGladman=function(){var h=c.lib.BlockCipherMode.extend();function n(p){if((p>>24&255)==255){var d=p>>16&255,a=p>>8&255,u=255&p;d===255?(d=0,a===255?(a=0,u===255?u=0:++u):++a):++d,p=0,p+=d<<16,p+=a<<8,p+=u}else p+=16777216;return p}var l=h.Encryptor=h.extend({processBlock:function(p,d){var a=this._cipher,u=a.blockSize,g=this._iv,f=this._counter;g&&(f=this._counter=g.slice(0),this._iv=void 0),function(_){(_[0]=n(_[0]))===0&&(_[1]=n(_[1]))}(f);var v=f.slice(0);a.encryptBlock(v,0);for(var m=0;m<u;m++)p[d+m]^=v[m]}});return h.Decryptor=l,h}(),c.mode.CTRGladman)},4242:function(o,i,s){var c,h,n;o.exports=(n=s(8249),s(5109),n.mode.CTR=(h=(c=n.lib.BlockCipherMode.extend()).Encryptor=c.extend({processBlock:function(l,p){var d=this._cipher,a=d.blockSize,u=this._iv,g=this._counter;u&&(g=this._counter=u.slice(0),this._iv=void 0);var f=g.slice(0);d.encryptBlock(f,0),g[a-1]=g[a-1]+1|0;for(var v=0;v<a;v++)l[p+v]^=f[v]}}),c.Decryptor=h,c),n.mode.CTR)},1148:function(o,i,s){var c,h;o.exports=(h=s(8249),s(5109),h.mode.ECB=((c=h.lib.BlockCipherMode.extend()).Encryptor=c.extend({processBlock:function(n,l){this._cipher.encryptBlock(n,l)}}),c.Decryptor=c.extend({processBlock:function(n,l){this._cipher.decryptBlock(n,l)}}),c),h.mode.ECB)},7660:function(o,i,s){var c,h,n;o.exports=(n=s(8249),s(5109),n.mode.OFB=(h=(c=n.lib.BlockCipherMode.extend()).Encryptor=c.extend({processBlock:function(l,p){var d=this._cipher,a=d.blockSize,u=this._iv,g=this._keystream;u&&(g=this._keystream=u.slice(0),this._iv=void 0),d.encryptBlock(g,0);for(var f=0;f<a;f++)l[p+f]^=g[f]}}),c.Decryptor=h,c),n.mode.OFB)},3615:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.pad.AnsiX923={pad:function(h,n){var l=h.sigBytes,p=4*n,d=p-l%p,a=l+d-1;h.clamp(),h.words[a>>>2]|=d<<24-a%4*8,h.sigBytes+=d},unpad:function(h){var n=255&h.words[h.sigBytes-1>>>2];h.sigBytes-=n}},c.pad.Ansix923)},2807:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.pad.Iso10126={pad:function(h,n){var l=4*n,p=l-h.sigBytes%l;h.concat(c.lib.WordArray.random(p-1)).concat(c.lib.WordArray.create([p<<24],1))},unpad:function(h){var n=255&h.words[h.sigBytes-1>>>2];h.sigBytes-=n}},c.pad.Iso10126)},1077:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.pad.Iso97971={pad:function(h,n){h.concat(c.lib.WordArray.create([2147483648],1)),c.pad.ZeroPadding.pad(h,n)},unpad:function(h){c.pad.ZeroPadding.unpad(h),h.sigBytes--}},c.pad.Iso97971)},6991:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.pad.NoPadding={pad:function(){},unpad:function(){}},c.pad.NoPadding)},6475:function(o,i,s){var c;o.exports=(c=s(8249),s(5109),c.pad.ZeroPadding={pad:function(h,n){var l=4*n;h.clamp(),h.sigBytes+=l-(h.sigBytes%l||l)},unpad:function(h){var n=h.words,l=h.sigBytes-1;for(l=h.sigBytes-1;l>=0;l--)if(n[l>>>2]>>>24-l%4*8&255){h.sigBytes=l+1;break}}},c.pad.ZeroPadding)},2112:function(o,i,s){var c,h,n,l,p,d,a,u,g;o.exports=(g=s(8249),s(2783),s(9824),n=(h=(c=g).lib).Base,l=h.WordArray,d=(p=c.algo).SHA1,a=p.HMAC,u=p.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:d,iterations:1}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,v){for(var m=this.cfg,_=a.create(m.hasher,f),y=l.create(),E=l.create([1]),x=y.words,b=E.words,N=m.keySize,O=m.iterations;x.length<N;){var w=_.update(v).finalize(E);_.reset();for(var C=w.words,A=C.length,S=w,k=1;k<O;k++){S=_.finalize(S),_.reset();for(var L=S.words,U=0;U<A;U++)C[U]^=L[U]}y.concat(w),b[0]++}return y.sigBytes=4*N,y}}),c.PBKDF2=function(f,v,m){return u.create(m).compute(f,v)},g.PBKDF2)},3974:function(o,i,s){var c;o.exports=(c=s(8249),s(8269),s(8214),s(888),s(5109),function(){var h=c,n=h.lib.StreamCipher,l=h.algo,p=[],d=[],a=[],u=l.RabbitLegacy=n.extend({_doReset:function(){var f=this._key.words,v=this.cfg.iv,m=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],_=this._C=[f[2]<<16|f[2]>>>16,4294901760&f[0]|65535&f[1],f[3]<<16|f[3]>>>16,4294901760&f[1]|65535&f[2],f[0]<<16|f[0]>>>16,4294901760&f[2]|65535&f[3],f[1]<<16|f[1]>>>16,4294901760&f[3]|65535&f[0]];this._b=0;for(var y=0;y<4;y++)g.call(this);for(y=0;y<8;y++)_[y]^=m[y+4&7];if(v){var E=v.words,x=E[0],b=E[1],N=16711935&(x<<8|x>>>24)|4278255360&(x<<24|x>>>8),O=16711935&(b<<8|b>>>24)|4278255360&(b<<24|b>>>8),w=N>>>16|4294901760&O,C=O<<16|65535&N;for(_[0]^=N,_[1]^=w,_[2]^=O,_[3]^=C,_[4]^=N,_[5]^=w,_[6]^=O,_[7]^=C,y=0;y<4;y++)g.call(this)}},_doProcessBlock:function(f,v){var m=this._X;g.call(this),p[0]=m[0]^m[5]>>>16^m[3]<<16,p[1]=m[2]^m[7]>>>16^m[5]<<16,p[2]=m[4]^m[1]>>>16^m[7]<<16,p[3]=m[6]^m[3]>>>16^m[1]<<16;for(var _=0;_<4;_++)p[_]=16711935&(p[_]<<8|p[_]>>>24)|4278255360&(p[_]<<24|p[_]>>>8),f[v+_]^=p[_]},blockSize:4,ivSize:2});function g(){for(var f=this._X,v=this._C,m=0;m<8;m++)d[m]=v[m];for(v[0]=v[0]+1295307597+this._b|0,v[1]=v[1]+3545052371+(v[0]>>>0<d[0]>>>0?1:0)|0,v[2]=v[2]+886263092+(v[1]>>>0<d[1]>>>0?1:0)|0,v[3]=v[3]+1295307597+(v[2]>>>0<d[2]>>>0?1:0)|0,v[4]=v[4]+3545052371+(v[3]>>>0<d[3]>>>0?1:0)|0,v[5]=v[5]+886263092+(v[4]>>>0<d[4]>>>0?1:0)|0,v[6]=v[6]+1295307597+(v[5]>>>0<d[5]>>>0?1:0)|0,v[7]=v[7]+3545052371+(v[6]>>>0<d[6]>>>0?1:0)|0,this._b=v[7]>>>0<d[7]>>>0?1:0,m=0;m<8;m++){var _=f[m]+v[m],y=65535&_,E=_>>>16,x=((y*y>>>17)+y*E>>>15)+E*E,b=((4294901760&_)*_|0)+((65535&_)*_|0);a[m]=x^b}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}h.RabbitLegacy=n._createHelper(u)}(),c.RabbitLegacy)},4454:function(o,i,s){var c;o.exports=(c=s(8249),s(8269),s(8214),s(888),s(5109),function(){var h=c,n=h.lib.StreamCipher,l=h.algo,p=[],d=[],a=[],u=l.Rabbit=n.extend({_doReset:function(){for(var f=this._key.words,v=this.cfg.iv,m=0;m<4;m++)f[m]=16711935&(f[m]<<8|f[m]>>>24)|4278255360&(f[m]<<24|f[m]>>>8);var _=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],y=this._C=[f[2]<<16|f[2]>>>16,4294901760&f[0]|65535&f[1],f[3]<<16|f[3]>>>16,4294901760&f[1]|65535&f[2],f[0]<<16|f[0]>>>16,4294901760&f[2]|65535&f[3],f[1]<<16|f[1]>>>16,4294901760&f[3]|65535&f[0]];for(this._b=0,m=0;m<4;m++)g.call(this);for(m=0;m<8;m++)y[m]^=_[m+4&7];if(v){var E=v.words,x=E[0],b=E[1],N=16711935&(x<<8|x>>>24)|4278255360&(x<<24|x>>>8),O=16711935&(b<<8|b>>>24)|4278255360&(b<<24|b>>>8),w=N>>>16|4294901760&O,C=O<<16|65535&N;for(y[0]^=N,y[1]^=w,y[2]^=O,y[3]^=C,y[4]^=N,y[5]^=w,y[6]^=O,y[7]^=C,m=0;m<4;m++)g.call(this)}},_doProcessBlock:function(f,v){var m=this._X;g.call(this),p[0]=m[0]^m[5]>>>16^m[3]<<16,p[1]=m[2]^m[7]>>>16^m[5]<<16,p[2]=m[4]^m[1]>>>16^m[7]<<16,p[3]=m[6]^m[3]>>>16^m[1]<<16;for(var _=0;_<4;_++)p[_]=16711935&(p[_]<<8|p[_]>>>24)|4278255360&(p[_]<<24|p[_]>>>8),f[v+_]^=p[_]},blockSize:4,ivSize:2});function g(){for(var f=this._X,v=this._C,m=0;m<8;m++)d[m]=v[m];for(v[0]=v[0]+1295307597+this._b|0,v[1]=v[1]+3545052371+(v[0]>>>0<d[0]>>>0?1:0)|0,v[2]=v[2]+886263092+(v[1]>>>0<d[1]>>>0?1:0)|0,v[3]=v[3]+1295307597+(v[2]>>>0<d[2]>>>0?1:0)|0,v[4]=v[4]+3545052371+(v[3]>>>0<d[3]>>>0?1:0)|0,v[5]=v[5]+886263092+(v[4]>>>0<d[4]>>>0?1:0)|0,v[6]=v[6]+1295307597+(v[5]>>>0<d[5]>>>0?1:0)|0,v[7]=v[7]+3545052371+(v[6]>>>0<d[6]>>>0?1:0)|0,this._b=v[7]>>>0<d[7]>>>0?1:0,m=0;m<8;m++){var _=f[m]+v[m],y=65535&_,E=_>>>16,x=((y*y>>>17)+y*E>>>15)+E*E,b=((4294901760&_)*_|0)+((65535&_)*_|0);a[m]=x^b}f[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,f[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,f[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,f[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,f[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,f[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,f[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,f[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}h.Rabbit=n._createHelper(u)}(),c.Rabbit)},1857:function(o,i,s){var c;o.exports=(c=s(8249),s(8269),s(8214),s(888),s(5109),function(){var h=c,n=h.lib.StreamCipher,l=h.algo,p=l.RC4=n.extend({_doReset:function(){for(var u=this._key,g=u.words,f=u.sigBytes,v=this._S=[],m=0;m<256;m++)v[m]=m;m=0;for(var _=0;m<256;m++){var y=m%f,E=g[y>>>2]>>>24-y%4*8&255;_=(_+v[m]+E)%256;var x=v[m];v[m]=v[_],v[_]=x}this._i=this._j=0},_doProcessBlock:function(u,g){u[g]^=d.call(this)},keySize:8,ivSize:0});function d(){for(var u=this._S,g=this._i,f=this._j,v=0,m=0;m<4;m++){f=(f+u[g=(g+1)%256])%256;var _=u[g];u[g]=u[f],u[f]=_,v|=u[(u[g]+u[f])%256]<<24-8*m}return this._i=g,this._j=f,v}h.RC4=n._createHelper(p);var a=l.RC4Drop=p.extend({cfg:p.cfg.extend({drop:192}),_doReset:function(){p._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)d.call(this)}});h.RC4Drop=n._createHelper(a)}(),c.RC4)},706:function(o,i,s){var c;o.exports=(c=s(8249),function(h){var n=c,l=n.lib,p=l.WordArray,d=l.Hasher,a=n.algo,u=p.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),g=p.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=p.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),v=p.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),m=p.create([0,1518500249,1859775393,2400959708,2840853838]),_=p.create([1352829926,1548603684,1836072691,2053994217,0]),y=a.RIPEMD160=d.extend({_doReset:function(){this._hash=p.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(C,A){for(var S=0;S<16;S++){var k=A+S,L=C[k];C[k]=16711935&(L<<8|L>>>24)|4278255360&(L<<24|L>>>8)}var U,M,H,Z,j,$,D,F,K,W,T,I=this._hash.words,R=m.words,P=_.words,V=u.words,B=g.words,G=f.words,z=v.words;for($=U=I[0],D=M=I[1],F=H=I[2],K=Z=I[3],W=j=I[4],S=0;S<80;S+=1)T=U+C[A+V[S]]|0,T+=S<16?E(M,H,Z)+R[0]:S<32?x(M,H,Z)+R[1]:S<48?b(M,H,Z)+R[2]:S<64?N(M,H,Z)+R[3]:O(M,H,Z)+R[4],T=(T=w(T|=0,G[S]))+j|0,U=j,j=Z,Z=w(H,10),H=M,M=T,T=$+C[A+B[S]]|0,T+=S<16?O(D,F,K)+P[0]:S<32?N(D,F,K)+P[1]:S<48?b(D,F,K)+P[2]:S<64?x(D,F,K)+P[3]:E(D,F,K)+P[4],T=(T=w(T|=0,z[S]))+W|0,$=W,W=K,K=w(F,10),F=D,D=T;T=I[1]+H+K|0,I[1]=I[2]+Z+W|0,I[2]=I[3]+j+$|0,I[3]=I[4]+U+D|0,I[4]=I[0]+M+F|0,I[0]=T},_doFinalize:function(){var C=this._data,A=C.words,S=8*this._nDataBytes,k=8*C.sigBytes;A[k>>>5]|=128<<24-k%32,A[14+(k+64>>>9<<4)]=16711935&(S<<8|S>>>24)|4278255360&(S<<24|S>>>8),C.sigBytes=4*(A.length+1),this._process();for(var L=this._hash,U=L.words,M=0;M<5;M++){var H=U[M];U[M]=16711935&(H<<8|H>>>24)|4278255360&(H<<24|H>>>8)}return L},clone:function(){var C=d.clone.call(this);return C._hash=this._hash.clone(),C}});function E(C,A,S){return C^A^S}function x(C,A,S){return C&A|~C&S}function b(C,A,S){return(C|~A)^S}function N(C,A,S){return C&S|A&~S}function O(C,A,S){return C^(A|~S)}function w(C,A){return C<<A|C>>>32-A}n.RIPEMD160=d._createHelper(y),n.HmacRIPEMD160=d._createHmacHelper(y)}(Math),c.RIPEMD160)},2783:function(o,i,s){var c,h,n,l,p,d,a,u;o.exports=(h=(c=u=s(8249)).lib,n=h.WordArray,l=h.Hasher,p=c.algo,d=[],a=p.SHA1=l.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(g,f){for(var v=this._hash.words,m=v[0],_=v[1],y=v[2],E=v[3],x=v[4],b=0;b<80;b++){if(b<16)d[b]=0|g[f+b];else{var N=d[b-3]^d[b-8]^d[b-14]^d[b-16];d[b]=N<<1|N>>>31}var O=(m<<5|m>>>27)+x+d[b];O+=b<20?1518500249+(_&y|~_&E):b<40?1859775393+(_^y^E):b<60?(_&y|_&E|y&E)-1894007588:(_^y^E)-899497514,x=E,E=y,y=_<<30|_>>>2,_=m,m=O}v[0]=v[0]+m|0,v[1]=v[1]+_|0,v[2]=v[2]+y|0,v[3]=v[3]+E|0,v[4]=v[4]+x|0},_doFinalize:function(){var g=this._data,f=g.words,v=8*this._nDataBytes,m=8*g.sigBytes;return f[m>>>5]|=128<<24-m%32,f[14+(m+64>>>9<<4)]=Math.floor(v/4294967296),f[15+(m+64>>>9<<4)]=v,g.sigBytes=4*f.length,this._process(),this._hash},clone:function(){var g=l.clone.call(this);return g._hash=this._hash.clone(),g}}),c.SHA1=l._createHelper(a),c.HmacSHA1=l._createHmacHelper(a),u.SHA1)},7792:function(o,i,s){var c,h,n,l,p,d;o.exports=(d=s(8249),s(2153),h=(c=d).lib.WordArray,n=c.algo,l=n.SHA256,p=n.SHA224=l.extend({_doReset:function(){this._hash=new h.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=l._doFinalize.call(this);return a.sigBytes-=4,a}}),c.SHA224=l._createHelper(p),c.HmacSHA224=l._createHmacHelper(p),d.SHA224)},2153:function(o,i,s){var c;o.exports=(c=s(8249),function(h){var n=c,l=n.lib,p=l.WordArray,d=l.Hasher,a=n.algo,u=[],g=[];(function(){function m(x){for(var b=h.sqrt(x),N=2;N<=b;N++)if(!(x%N))return!1;return!0}function _(x){return 4294967296*(x-(0|x))|0}for(var y=2,E=0;E<64;)m(y)&&(E<8&&(u[E]=_(h.pow(y,.5))),g[E]=_(h.pow(y,.3333333333333333)),E++),y++})();var f=[],v=a.SHA256=d.extend({_doReset:function(){this._hash=new p.init(u.slice(0))},_doProcessBlock:function(m,_){for(var y=this._hash.words,E=y[0],x=y[1],b=y[2],N=y[3],O=y[4],w=y[5],C=y[6],A=y[7],S=0;S<64;S++){if(S<16)f[S]=0|m[_+S];else{var k=f[S-15],L=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,U=f[S-2],M=(U<<15|U>>>17)^(U<<13|U>>>19)^U>>>10;f[S]=L+f[S-7]+M+f[S-16]}var H=E&x^E&b^x&b,Z=(E<<30|E>>>2)^(E<<19|E>>>13)^(E<<10|E>>>22),j=A+((O<<26|O>>>6)^(O<<21|O>>>11)^(O<<7|O>>>25))+(O&w^~O&C)+g[S]+f[S];A=C,C=w,w=O,O=N+j|0,N=b,b=x,x=E,E=j+(Z+H)|0}y[0]=y[0]+E|0,y[1]=y[1]+x|0,y[2]=y[2]+b|0,y[3]=y[3]+N|0,y[4]=y[4]+O|0,y[5]=y[5]+w|0,y[6]=y[6]+C|0,y[7]=y[7]+A|0},_doFinalize:function(){var m=this._data,_=m.words,y=8*this._nDataBytes,E=8*m.sigBytes;return _[E>>>5]|=128<<24-E%32,_[14+(E+64>>>9<<4)]=h.floor(y/4294967296),_[15+(E+64>>>9<<4)]=y,m.sigBytes=4*_.length,this._process(),this._hash},clone:function(){var m=d.clone.call(this);return m._hash=this._hash.clone(),m}});n.SHA256=d._createHelper(v),n.HmacSHA256=d._createHmacHelper(v)}(Math),c.SHA256)},3327:function(o,i,s){var c;o.exports=(c=s(8249),s(4938),function(h){var n=c,l=n.lib,p=l.WordArray,d=l.Hasher,a=n.x64.Word,u=n.algo,g=[],f=[],v=[];(function(){for(var y=1,E=0,x=0;x<24;x++){g[y+5*E]=(x+1)*(x+2)/2%64;var b=(2*y+3*E)%5;y=E%5,E=b}for(y=0;y<5;y++)for(E=0;E<5;E++)f[y+5*E]=E+(2*y+3*E)%5*5;for(var N=1,O=0;O<24;O++){for(var w=0,C=0,A=0;A<7;A++){if(1&N){var S=(1<<A)-1;S<32?C^=1<<S:w^=1<<S-32}128&N?N=N<<1^113:N<<=1}v[O]=a.create(w,C)}})();var m=[];(function(){for(var y=0;y<25;y++)m[y]=a.create()})();var _=u.SHA3=d.extend({cfg:d.cfg.extend({outputLength:512}),_doReset:function(){for(var y=this._state=[],E=0;E<25;E++)y[E]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(y,E){for(var x=this._state,b=this.blockSize/2,N=0;N<b;N++){var O=y[E+2*N],w=y[E+2*N+1];O=16711935&(O<<8|O>>>24)|4278255360&(O<<24|O>>>8),w=16711935&(w<<8|w>>>24)|4278255360&(w<<24|w>>>8),(R=x[N]).high^=w,R.low^=O}for(var C=0;C<24;C++){for(var A=0;A<5;A++){for(var S=0,k=0,L=0;L<5;L++)S^=(R=x[A+5*L]).high,k^=R.low;var U=m[A];U.high=S,U.low=k}for(A=0;A<5;A++){var M=m[(A+4)%5],H=m[(A+1)%5],Z=H.high,j=H.low;for(S=M.high^(Z<<1|j>>>31),k=M.low^(j<<1|Z>>>31),L=0;L<5;L++)(R=x[A+5*L]).high^=S,R.low^=k}for(var $=1;$<25;$++){var D=(R=x[$]).high,F=R.low,K=g[$];K<32?(S=D<<K|F>>>32-K,k=F<<K|D>>>32-K):(S=F<<K-32|D>>>64-K,k=D<<K-32|F>>>64-K);var W=m[f[$]];W.high=S,W.low=k}var T=m[0],I=x[0];for(T.high=I.high,T.low=I.low,A=0;A<5;A++)for(L=0;L<5;L++){var R=x[$=A+5*L],P=m[$],V=m[(A+1)%5+5*L],B=m[(A+2)%5+5*L];R.high=P.high^~V.high&B.high,R.low=P.low^~V.low&B.low}R=x[0];var G=v[C];R.high^=G.high,R.low^=G.low}},_doFinalize:function(){var y=this._data,E=y.words,x=(this._nDataBytes,8*y.sigBytes),b=32*this.blockSize;E[x>>>5]|=1<<24-x%32,E[(h.ceil((x+1)/b)*b>>>5)-1]|=128,y.sigBytes=4*E.length,this._process();for(var N=this._state,O=this.cfg.outputLength/8,w=O/8,C=[],A=0;A<w;A++){var S=N[A],k=S.high,L=S.low;k=16711935&(k<<8|k>>>24)|4278255360&(k<<24|k>>>8),L=16711935&(L<<8|L>>>24)|4278255360&(L<<24|L>>>8),C.push(L),C.push(k)}return new p.init(C,O)},clone:function(){for(var y=d.clone.call(this),E=y._state=this._state.slice(0),x=0;x<25;x++)E[x]=E[x].clone();return y}});n.SHA3=d._createHelper(_),n.HmacSHA3=d._createHmacHelper(_)}(Math),c.SHA3)},7460:function(o,i,s){var c,h,n,l,p,d,a,u;o.exports=(u=s(8249),s(4938),s(34),h=(c=u).x64,n=h.Word,l=h.WordArray,p=c.algo,d=p.SHA512,a=p.SHA384=d.extend({_doReset:function(){this._hash=new l.init([new n.init(3418070365,3238371032),new n.init(1654270250,914150663),new n.init(2438529370,812702999),new n.init(355462360,4144912697),new n.init(1731405415,4290775857),new n.init(2394180231,1750603025),new n.init(3675008525,1694076839),new n.init(1203062813,3204075428)])},_doFinalize:function(){var g=d._doFinalize.call(this);return g.sigBytes-=16,g}}),c.SHA384=d._createHelper(a),c.HmacSHA384=d._createHmacHelper(a),u.SHA384)},34:function(o,i,s){var c;o.exports=(c=s(8249),s(4938),function(){var h=c,n=h.lib.Hasher,l=h.x64,p=l.Word,d=l.WordArray,a=h.algo;function u(){return p.create.apply(p,arguments)}var g=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var m=0;m<80;m++)f[m]=u()})();var v=a.SHA512=n.extend({_doReset:function(){this._hash=new d.init([new p.init(1779033703,4089235720),new p.init(3144134277,2227873595),new p.init(1013904242,4271175723),new p.init(2773480762,1595750129),new p.init(1359893119,2917565137),new p.init(2600822924,725511199),new p.init(528734635,4215389547),new p.init(1541459225,327033209)])},_doProcessBlock:function(m,_){for(var y=this._hash.words,E=y[0],x=y[1],b=y[2],N=y[3],O=y[4],w=y[5],C=y[6],A=y[7],S=E.high,k=E.low,L=x.high,U=x.low,M=b.high,H=b.low,Z=N.high,j=N.low,$=O.high,D=O.low,F=w.high,K=w.low,W=C.high,T=C.low,I=A.high,R=A.low,P=S,V=k,B=L,G=U,z=M,q=H,J=Z,Y=j,ee=$,se=D,ae=F,ce=K,oe=W,pe=T,ye=I,le=R,ie=0;ie<80;ie++){var Ce,Re,me=f[ie];if(ie<16)Re=me.high=0|m[_+2*ie],Ce=me.low=0|m[_+2*ie+1];else{var xe=f[ie-15],ze=xe.high,we=xe.low,ht=(ze>>>1|we<<31)^(ze>>>8|we<<24)^ze>>>7,Ye=(we>>>1|ze<<31)^(we>>>8|ze<<24)^(we>>>7|ze<<25),Ct=f[ie-2],Be=Ct.high,Je=Ct.low,lo=(Be>>>19|Je<<13)^(Be<<3|Je>>>29)^Be>>>6,us=(Je>>>19|Be<<13)^(Je<<3|Be>>>29)^(Je>>>6|Be<<26),ds=f[ie-7],x0=ds.high,A0=ds.low,hs=f[ie-16],O0=hs.high,ps=hs.low;Re=(Re=(Re=ht+x0+((Ce=Ye+A0)>>>0<Ye>>>0?1:0))+lo+((Ce+=us)>>>0<us>>>0?1:0))+O0+((Ce+=ps)>>>0<ps>>>0?1:0),me.high=Re,me.low=Ce}var qt,S0=ee&ae^~ee&oe,gs=se&ce^~se&pe,N0=P&B^P&z^B&z,T0=V&G^V&q^G&q,R0=(P>>>28|V<<4)^(P<<30|V>>>2)^(P<<25|V>>>7),ys=(V>>>28|P<<4)^(V<<30|P>>>2)^(V<<25|P>>>7),I0=(ee>>>14|se<<18)^(ee>>>18|se<<14)^(ee<<23|se>>>9),k0=(se>>>14|ee<<18)^(se>>>18|ee<<14)^(se<<23|ee>>>9),ms=g[ie],L0=ms.high,bs=ms.low,Tr=ye+I0+((qt=le+k0)>>>0<le>>>0?1:0),ws=ys+T0;ye=oe,le=pe,oe=ae,pe=ce,ae=ee,ce=se,ee=J+(Tr=(Tr=(Tr=Tr+S0+((qt+=gs)>>>0<gs>>>0?1:0))+L0+((qt+=bs)>>>0<bs>>>0?1:0))+Re+((qt+=Ce)>>>0<Ce>>>0?1:0))+((se=Y+qt|0)>>>0<Y>>>0?1:0)|0,J=z,Y=q,z=B,q=G,B=P,G=V,P=Tr+(R0+N0+(ws>>>0<ys>>>0?1:0))+((V=qt+ws|0)>>>0<qt>>>0?1:0)|0}k=E.low=k+V,E.high=S+P+(k>>>0<V>>>0?1:0),U=x.low=U+G,x.high=L+B+(U>>>0<G>>>0?1:0),H=b.low=H+q,b.high=M+z+(H>>>0<q>>>0?1:0),j=N.low=j+Y,N.high=Z+J+(j>>>0<Y>>>0?1:0),D=O.low=D+se,O.high=$+ee+(D>>>0<se>>>0?1:0),K=w.low=K+ce,w.high=F+ae+(K>>>0<ce>>>0?1:0),T=C.low=T+pe,C.high=W+oe+(T>>>0<pe>>>0?1:0),R=A.low=R+le,A.high=I+ye+(R>>>0<le>>>0?1:0)},_doFinalize:function(){var m=this._data,_=m.words,y=8*this._nDataBytes,E=8*m.sigBytes;return _[E>>>5]|=128<<24-E%32,_[30+(E+128>>>10<<5)]=Math.floor(y/4294967296),_[31+(E+128>>>10<<5)]=y,m.sigBytes=4*_.length,this._process(),this._hash.toX32()},clone:function(){var m=n.clone.call(this);return m._hash=this._hash.clone(),m},blockSize:32});h.SHA512=n._createHelper(v),h.HmacSHA512=n._createHmacHelper(v)}(),c.SHA512)},4253:function(o,i,s){var c;o.exports=(c=s(8249),s(8269),s(8214),s(888),s(5109),function(){var h=c,n=h.lib,l=n.WordArray,p=n.BlockCipher,d=h.algo,a=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],u=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],g=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],v=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],m=d.DES=p.extend({_doReset:function(){for(var x=this._key.words,b=[],N=0;N<56;N++){var O=a[N]-1;b[N]=x[O>>>5]>>>31-O%32&1}for(var w=this._subKeys=[],C=0;C<16;C++){var A=w[C]=[],S=g[C];for(N=0;N<24;N++)A[N/6|0]|=b[(u[N]-1+S)%28]<<31-N%6,A[4+(N/6|0)]|=b[28+(u[N+24]-1+S)%28]<<31-N%6;for(A[0]=A[0]<<1|A[0]>>>31,N=1;N<7;N++)A[N]=A[N]>>>4*(N-1)+3;A[7]=A[7]<<5|A[7]>>>27}var k=this._invSubKeys=[];for(N=0;N<16;N++)k[N]=w[15-N]},encryptBlock:function(x,b){this._doCryptBlock(x,b,this._subKeys)},decryptBlock:function(x,b){this._doCryptBlock(x,b,this._invSubKeys)},_doCryptBlock:function(x,b,N){this._lBlock=x[b],this._rBlock=x[b+1],_.call(this,4,252645135),_.call(this,16,65535),y.call(this,2,858993459),y.call(this,8,16711935),_.call(this,1,1431655765);for(var O=0;O<16;O++){for(var w=N[O],C=this._lBlock,A=this._rBlock,S=0,k=0;k<8;k++)S|=f[k][((A^w[k])&v[k])>>>0];this._lBlock=A,this._rBlock=C^S}var L=this._lBlock;this._lBlock=this._rBlock,this._rBlock=L,_.call(this,1,1431655765),y.call(this,8,16711935),y.call(this,2,858993459),_.call(this,16,65535),_.call(this,4,252645135),x[b]=this._lBlock,x[b+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function _(x,b){var N=(this._lBlock>>>x^this._rBlock)&b;this._rBlock^=N,this._lBlock^=N<<x}function y(x,b){var N=(this._rBlock>>>x^this._lBlock)&b;this._lBlock^=N,this._rBlock^=N<<x}h.DES=p._createHelper(m);var E=d.TripleDES=p.extend({_doReset:function(){var x=this._key.words;if(x.length!==2&&x.length!==4&&x.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var b=x.slice(0,2),N=x.length<4?x.slice(0,2):x.slice(2,4),O=x.length<6?x.slice(0,2):x.slice(4,6);this._des1=m.createEncryptor(l.create(b)),this._des2=m.createEncryptor(l.create(N)),this._des3=m.createEncryptor(l.create(O))},encryptBlock:function(x,b){this._des1.encryptBlock(x,b),this._des2.decryptBlock(x,b),this._des3.encryptBlock(x,b)},decryptBlock:function(x,b){this._des3.decryptBlock(x,b),this._des2.encryptBlock(x,b),this._des1.decryptBlock(x,b)},keySize:6,ivSize:2,blockSize:2});h.TripleDES=p._createHelper(E)}(),c.TripleDES)},4938:function(o,i,s){var c,h,n,l,p,d;o.exports=(c=s(8249),n=(h=c).lib,l=n.Base,p=n.WordArray,(d=h.x64={}).Word=l.extend({init:function(a,u){this.high=a,this.low=u}}),d.WordArray=l.extend({init:function(a,u){a=this.words=a||[],this.sigBytes=u??8*a.length},toX32:function(){for(var a=this.words,u=a.length,g=[],f=0;f<u;f++){var v=a[f];g.push(v.high),g.push(v.low)}return p.create(g,this.sigBytes)},clone:function(){for(var a=l.clone.call(this),u=a.words=this.words.slice(0),g=u.length,f=0;f<g;f++)u[f]=u[f].clone();return a}}),c)},9435:o=>{var i=1e3,s=60*i,c=60*s,h=24*c;function n(l,p,d,a){var u=p>=1.5*d;return Math.round(l/d)+" "+a+(u?"s":"")}o.exports=function(l,p){p=p||{};var d,a,u=typeof l;if(u==="string"&&l.length>0)return function(g){if(!((g=String(g)).length>100)){var f=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);if(f){var v=parseFloat(f[1]);switch((f[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*v;case"weeks":case"week":case"w":return 6048e5*v;case"days":case"day":case"d":return v*h;case"hours":case"hour":case"hrs":case"hr":case"h":return v*c;case"minutes":case"minute":case"mins":case"min":case"m":return v*s;case"seconds":case"second":case"secs":case"sec":case"s":return v*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return v;default:return}}}}(l);if(u==="number"&&isFinite(l))return p.long?(d=l,(a=Math.abs(d))>=h?n(d,a,h,"day"):a>=c?n(d,a,c,"hour"):a>=s?n(d,a,s,"minute"):a>=i?n(d,a,i,"second"):d+" ms"):function(g){var f=Math.abs(g);return f>=h?Math.round(g/h)+"d":f>=c?Math.round(g/c)+"h":f>=s?Math.round(g/s)+"m":f>=i?Math.round(g/i)+"s":g+"ms"}(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))}},1227:(o,i,s)=>{var c=s(5108),h=s(4155);i.formatArgs=function(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+o.exports.humanize(this.diff),!this.useColors)return;let p="color: "+this.color;l.splice(1,0,p,"color: inherit");let d=0,a=0;l[0].replace(/%[a-zA-Z%]/g,u=>{u!=="%%"&&(d++,u==="%c"&&(a=d))}),l.splice(a,0,p)},i.save=function(l){try{l?i.storage.setItem("debug",l):i.storage.removeItem("debug")}catch{}},i.load=function(){let l;try{l=i.storage.getItem("debug")}catch{}return!l&&h!==void 0&&"env"in h&&(l=h.env.DEBUG),l},i.useColors=function(){return!(typeof window>"u"||!window.process||window.process.type!=="renderer"&&!window.process.__nwjs)||(typeof navigator>"u"||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},i.storage=function(){try{return localStorage}catch{}}(),i.destroy=(()=>{let l=!1;return()=>{l||(l=!0,c.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],i.log=c.debug||c.log||(()=>{}),o.exports=s(2447)(i);let{formatters:n}=o.exports;n.j=function(l){try{return JSON.stringify(l)}catch(p){return"[UnexpectedJSONParseError]: "+p.message}}},2447:(o,i,s)=>{var c=s(5108);o.exports=function(h){function n(d){let a,u,g,f=null;function v(...m){if(!v.enabled)return;let _=v,y=Number(new Date),E=y-(a||y);_.diff=E,_.prev=a,_.curr=y,a=y,m[0]=n.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");let x=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,(b,N)=>{if(b==="%%")return"%";x++;let O=n.formatters[N];if(typeof O=="function"){let w=m[x];b=O.call(_,w),m.splice(x,1),x--}return b}),n.formatArgs.call(_,m),(_.log||n.log).apply(_,m)}return v.namespace=d,v.useColors=n.useColors(),v.color=n.selectColor(d),v.extend=l,v.destroy=n.destroy,Object.defineProperty(v,"enabled",{enumerable:!0,configurable:!1,get:()=>f!==null?f:(u!==n.namespaces&&(u=n.namespaces,g=n.enabled(d)),g),set:m=>{f=m}}),typeof n.init=="function"&&n.init(v),v}function l(d,a){let u=n(this.namespace+(a===void 0?":":a)+d);return u.log=this.log,u}function p(d){return d.toString().substring(2,d.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(d){return d instanceof Error?d.stack||d.message:d},n.disable=function(){let d=[...n.names.map(p),...n.skips.map(p).map(a=>"-"+a)].join(",");return n.enable(""),d},n.enable=function(d){let a;n.save(d),n.namespaces=d,n.names=[],n.skips=[];let u=(typeof d=="string"?d:"").split(/[\s,]+/),g=u.length;for(a=0;a<g;a++)u[a]&&((d=u[a].replace(/\*/g,".*?"))[0]==="-"?n.skips.push(new RegExp("^"+d.substr(1)+"$")):n.names.push(new RegExp("^"+d+"$")))},n.enabled=function(d){if(d[d.length-1]==="*")return!0;let a,u;for(a=0,u=n.skips.length;a<u;a++)if(n.skips[a].test(d))return!1;for(a=0,u=n.names.length;a<u;a++)if(n.names[a].test(d))return!0;return!1},n.humanize=s(9435),n.destroy=function(){c.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(h).forEach(d=>{n[d]=h[d]}),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(d){let a=0;for(let u=0;u<d.length;u++)a=(a<<5)-a+d.charCodeAt(u),a|=0;return n.colors[Math.abs(a)%n.colors.length]},n.enable(n.load()),n}},4289:(o,i,s)=>{"use strict";var c=s(2215),h=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",n=Object.prototype.toString,l=Array.prototype.concat,p=Object.defineProperty,d=s(1044)(),a=p&&d,u=function(f,v,m,_){var y;(!(v in f)||typeof(y=_)=="function"&&n.call(y)==="[object Function]"&&_())&&(a?p(f,v,{configurable:!0,enumerable:!1,value:m,writable:!0}):f[v]=m)},g=function(f,v){var m=arguments.length>2?arguments[2]:{},_=c(v);h&&(_=l.call(_,Object.getOwnPropertySymbols(v)));for(var y=0;y<_.length;y+=1)u(f,_[y],v[_[y]],m[_[y]])};g.supportsDescriptors=!!a,o.exports=g},8091:o=>{"use strict";function i(s,c){if(s==null)throw new TypeError("Cannot convert first argument to object");for(var h=Object(s),n=1;n<arguments.length;n++){var l=arguments[n];if(l!=null)for(var p=Object.keys(Object(l)),d=0,a=p.length;d<a;d++){var u=p[d],g=Object.getOwnPropertyDescriptor(l,u);g!==void 0&&g.enumerable&&(h[u]=l[u])}}return h}o.exports={assign:i,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:i})}}},4029:(o,i,s)=>{"use strict";var c=s(5320),h=Object.prototype.toString,n=Object.prototype.hasOwnProperty,l=function(a,u,g){for(var f=0,v=a.length;f<v;f++)n.call(a,f)&&(g==null?u(a[f],f,a):u.call(g,a[f],f,a))},p=function(a,u,g){for(var f=0,v=a.length;f<v;f++)g==null?u(a.charAt(f),f,a):u.call(g,a.charAt(f),f,a)},d=function(a,u,g){for(var f in a)n.call(a,f)&&(g==null?u(a[f],f,a):u.call(g,a[f],f,a))};o.exports=function(a,u,g){if(!c(u))throw new TypeError("iterator must be a function");var f;arguments.length>=3&&(f=g),h.call(a)==="[object Array]"?l(a,u,f):typeof a=="string"?p(a,u,f):d(a,u,f)}},7648:o=>{"use strict";var i="Function.prototype.bind called on incompatible ",s=Array.prototype.slice,c=Object.prototype.toString,h="[object Function]";o.exports=function(n){var l=this;if(typeof l!="function"||c.call(l)!==h)throw new TypeError(i+l);for(var p,d=s.call(arguments,1),a=function(){if(this instanceof p){var m=l.apply(this,d.concat(s.call(arguments)));return Object(m)===m?m:this}return l.apply(n,d.concat(s.call(arguments)))},u=Math.max(0,l.length-d.length),g=[],f=0;f<u;f++)g.push("$"+f);if(p=Function("binder","return function ("+g.join(",")+"){ return binder.apply(this,arguments); }")(a),l.prototype){var v=function(){};v.prototype=l.prototype,p.prototype=new v,v.prototype=null}return p}},8612:(o,i,s)=>{"use strict";var c=s(7648);o.exports=Function.prototype.bind||c},210:(o,i,s)=>{"use strict";var c,h=SyntaxError,n=Function,l=TypeError,p=function(M){try{return n('"use strict"; return ('+M+").constructor;")()}catch{}},d=Object.getOwnPropertyDescriptor;if(d)try{d({},"")}catch{d=null}var a=function(){throw new l},u=d?function(){try{return a}catch{try{return d(arguments,"callee").get}catch{return a}}}():a,g=s(1405)(),f=Object.getPrototypeOf||function(M){return M.__proto__},v={},m=typeof Uint8Array>"u"?c:f(Uint8Array),_={"%AggregateError%":typeof AggregateError>"u"?c:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?c:ArrayBuffer,"%ArrayIteratorPrototype%":g?f([][Symbol.iterator]()):c,"%AsyncFromSyncIteratorPrototype%":c,"%AsyncFunction%":v,"%AsyncGenerator%":v,"%AsyncGeneratorFunction%":v,"%AsyncIteratorPrototype%":v,"%Atomics%":typeof Atomics>"u"?c:Atomics,"%BigInt%":typeof BigInt>"u"?c:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?c:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?c:Float32Array,"%Float64Array%":typeof Float64Array>"u"?c:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?c:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":v,"%Int8Array%":typeof Int8Array>"u"?c:Int8Array,"%Int16Array%":typeof Int16Array>"u"?c:Int16Array,"%Int32Array%":typeof Int32Array>"u"?c:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":g?f(f([][Symbol.iterator]())):c,"%JSON%":typeof JSON=="object"?JSON:c,"%Map%":typeof Map>"u"?c:Map,"%MapIteratorPrototype%":typeof Map<"u"&&g?f(new Map()[Symbol.iterator]()):c,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?c:Promise,"%Proxy%":typeof Proxy>"u"?c:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?c:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?c:Set,"%SetIteratorPrototype%":typeof Set<"u"&&g?f(new Set()[Symbol.iterator]()):c,"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?c:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":g?f(""[Symbol.iterator]()):c,"%Symbol%":g?Symbol:c,"%SyntaxError%":h,"%ThrowTypeError%":u,"%TypedArray%":m,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>"u"?c:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?c:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?c:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?c:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?c:WeakMap,"%WeakRef%":typeof WeakRef>"u"?c:WeakRef,"%WeakSet%":typeof WeakSet>"u"?c:WeakSet},y=function M(H){var Z;if(H==="%AsyncFunction%")Z=p("async function () {}");else if(H==="%GeneratorFunction%")Z=p("function* () {}");else if(H==="%AsyncGeneratorFunction%")Z=p("async function* () {}");else if(H==="%AsyncGenerator%"){var j=M("%AsyncGeneratorFunction%");j&&(Z=j.prototype)}else if(H==="%AsyncIteratorPrototype%"){var $=M("%AsyncGenerator%");$&&(Z=f($.prototype))}return _[H]=Z,Z},E={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},x=s(8612),b=s(7642),N=x.call(Function.call,Array.prototype.concat),O=x.call(Function.apply,Array.prototype.splice),w=x.call(Function.call,String.prototype.replace),C=x.call(Function.call,String.prototype.slice),A=x.call(Function.call,RegExp.prototype.exec),S=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,k=/\\(\\)?/g,L=function(M){var H=C(M,0,1),Z=C(M,-1);if(H==="%"&&Z!=="%")throw new h("invalid intrinsic syntax, expected closing `%`");if(Z==="%"&&H!=="%")throw new h("invalid intrinsic syntax, expected opening `%`");var j=[];return w(M,S,function($,D,F,K){j[j.length]=F?w(K,k,"$1"):D||$}),j},U=function(M,H){var Z,j=M;if(b(E,j)&&(j="%"+(Z=E[j])[0]+"%"),b(_,j)){var $=_[j];if($===v&&($=y(j)),$===void 0&&!H)throw new l("intrinsic "+M+" exists, but is not available. Please file an issue!");return{alias:Z,name:j,value:$}}throw new h("intrinsic "+M+" does not exist!")};o.exports=function(M,H){if(typeof M!="string"||M.length===0)throw new l("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof H!="boolean")throw new l('"allowMissing" argument must be a boolean');if(A(/^%?[^%]*%?$/,M)===null)throw new h("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var Z=L(M),j=Z.length>0?Z[0]:"",$=U("%"+j+"%",H),D=$.name,F=$.value,K=!1,W=$.alias;W&&(j=W[0],O(Z,N([0,1],W)));for(var T=1,I=!0;T<Z.length;T+=1){var R=Z[T],P=C(R,0,1),V=C(R,-1);if((P==='"'||P==="'"||P==="`"||V==='"'||V==="'"||V==="`")&&P!==V)throw new h("property names with quotes must have matching quotes");if(R!=="constructor"&&I||(K=!0),b(_,D="%"+(j+="."+R)+"%"))F=_[D];else if(F!=null){if(!(R in F)){if(!H)throw new l("base intrinsic for "+M+" exists, but the property is not available.");return}if(d&&T+1>=Z.length){var B=d(F,R);F=(I=!!B)&&"get"in B&&!("originalValue"in B.get)?B.get:F[R]}else I=b(F,R),F=F[R];I&&!K&&(_[D]=F)}}return F}},7296:(o,i,s)=>{"use strict";var c=s(210)("%Object.getOwnPropertyDescriptor%",!0);if(c)try{c([],"length")}catch{c=null}o.exports=c},1044:(o,i,s)=>{"use strict";var c=s(210)("%Object.defineProperty%",!0),h=function(){if(c)try{return c({},"a",{value:1}),!0}catch{return!1}return!1};h.hasArrayLengthDefineBug=function(){if(!h())return null;try{return c([],"length",{value:1}).length!==1}catch{return!0}},o.exports=h},1405:(o,i,s)=>{"use strict";var c=typeof Symbol<"u"&&Symbol,h=s(5419);o.exports=function(){return typeof c=="function"&&typeof Symbol=="function"&&typeof c("foo")=="symbol"&&typeof Symbol("bar")=="symbol"&&h()}},5419:o=>{"use strict";o.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var i={},s=Symbol("test"),c=Object(s);if(typeof s=="string"||Object.prototype.toString.call(s)!=="[object Symbol]"||Object.prototype.toString.call(c)!=="[object Symbol]")return!1;for(s in i[s]=42,i)return!1;if(typeof Object.keys=="function"&&Object.keys(i).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(i).length!==0)return!1;var h=Object.getOwnPropertySymbols(i);if(h.length!==1||h[0]!==s||!Object.prototype.propertyIsEnumerable.call(i,s))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(i,s);if(n.value!==42||n.enumerable!==!0)return!1}return!0}},6410:(o,i,s)=>{"use strict";var c=s(5419);o.exports=function(){return c()&&!!Symbol.toStringTag}},7642:(o,i,s)=>{"use strict";var c=s(8612);o.exports=c.call(Function.call,Object.prototype.hasOwnProperty)},5717:o=>{typeof Object.create=="function"?o.exports=function(i,s){s&&(i.super_=s,i.prototype=Object.create(s.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}))}:o.exports=function(i,s){if(s){i.super_=s;var c=function(){};c.prototype=s.prototype,i.prototype=new c,i.prototype.constructor=i}}},2584:(o,i,s)=>{"use strict";var c=s(6410)(),h=s(1924)("Object.prototype.toString"),n=function(d){return!(c&&d&&typeof d=="object"&&Symbol.toStringTag in d)&&h(d)==="[object Arguments]"},l=function(d){return!!n(d)||d!==null&&typeof d=="object"&&typeof d.length=="number"&&d.length>=0&&h(d)!=="[object Array]"&&h(d.callee)==="[object Function]"},p=function(){return n(arguments)}();n.isLegacyArguments=l,o.exports=p?n:l},5320:o=>{"use strict";var i,s,c=Function.prototype.toString,h=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply;if(typeof h=="function"&&typeof Object.defineProperty=="function")try{i=Object.defineProperty({},"length",{get:function(){throw s}}),s={},h(function(){throw 42},null,i)}catch(v){v!==s&&(h=null)}else h=null;var n=/^\s*class\b/,l=function(v){try{var m=c.call(v);return n.test(m)}catch{return!1}},p=function(v){try{return!l(v)&&(c.call(v),!0)}catch{return!1}},d=Object.prototype.toString,a=typeof Symbol=="function"&&!!Symbol.toStringTag,u=!(0 in[,]),g=function(){return!1};if(typeof document=="object"){var f=document.all;d.call(f)===d.call(document.all)&&(g=function(v){if((u||!v)&&(v===void 0||typeof v=="object"))try{var m=d.call(v);return(m==="[object HTMLAllCollection]"||m==="[object HTML document.all class]"||m==="[object HTMLCollection]"||m==="[object Object]")&&v("")==null}catch{}return!1})}o.exports=h?function(v){if(g(v))return!0;if(!v||typeof v!="function"&&typeof v!="object")return!1;try{h(v,null,i)}catch(m){if(m!==s)return!1}return!l(v)&&p(v)}:function(v){if(g(v))return!0;if(!v||typeof v!="function"&&typeof v!="object")return!1;if(a)return p(v);if(l(v))return!1;var m=d.call(v);return!(m!=="[object Function]"&&m!=="[object GeneratorFunction]"&&!/^\[object HTML/.test(m))&&p(v)}},8662:(o,i,s)=>{"use strict";var c,h=Object.prototype.toString,n=Function.prototype.toString,l=/^\s*(?:function)?\*/,p=s(6410)(),d=Object.getPrototypeOf;o.exports=function(a){if(typeof a!="function")return!1;if(l.test(n.call(a)))return!0;if(!p)return h.call(a)==="[object GeneratorFunction]";if(!d)return!1;if(c===void 0){var u=function(){if(!p)return!1;try{return Function("return function*() {}")()}catch{}}();c=!!u&&d(u)}return d(a)===c}},8611:o=>{"use strict";o.exports=function(i){return i!=i}},360:(o,i,s)=>{"use strict";var c=s(5559),h=s(4289),n=s(8611),l=s(9415),p=s(3194),d=c(l(),Number);h(d,{getPolyfill:l,implementation:n,shim:p}),o.exports=d},9415:(o,i,s)=>{"use strict";var c=s(8611);o.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:c}},3194:(o,i,s)=>{"use strict";var c=s(4289),h=s(9415);o.exports=function(){var n=h();return c(Number,{isNaN:n},{isNaN:function(){return Number.isNaN!==n}}),n}},5692:(o,i,s)=>{"use strict";var c=s(4029),h=s(3083),n=s(1924),l=n("Object.prototype.toString"),p=s(6410)(),d=s(7296),a=typeof globalThis>"u"?s.g:globalThis,u=h(),g=n("Array.prototype.indexOf",!0)||function(_,y){for(var E=0;E<_.length;E+=1)if(_[E]===y)return E;return-1},f=n("String.prototype.slice"),v={},m=Object.getPrototypeOf;p&&d&&m&&c(u,function(_){var y=new a[_];if(Symbol.toStringTag in y){var E=m(y),x=d(E,Symbol.toStringTag);if(!x){var b=m(E);x=d(b,Symbol.toStringTag)}v[_]=x.get}}),o.exports=function(_){if(!_||typeof _!="object")return!1;if(!p||!(Symbol.toStringTag in _)){var y=f(l(_),8,-1);return g(u,y)>-1}return!!d&&function(E){var x=!1;return c(v,function(b,N){if(!x)try{x=b.call(E)===N}catch{}}),x}(_)}},4244:o=>{"use strict";var i=function(s){return s!=s};o.exports=function(s,c){return s===0&&c===0?1/s==1/c:s===c||!(!i(s)||!i(c))}},609:(o,i,s)=>{"use strict";var c=s(4289),h=s(5559),n=s(4244),l=s(5624),p=s(2281),d=h(l(),Object);c(d,{getPolyfill:l,implementation:n,shim:p}),o.exports=d},5624:(o,i,s)=>{"use strict";var c=s(4244);o.exports=function(){return typeof Object.is=="function"?Object.is:c}},2281:(o,i,s)=>{"use strict";var c=s(5624),h=s(4289);o.exports=function(){var n=c();return h(Object,{is:n},{is:function(){return Object.is!==n}}),n}},8987:(o,i,s)=>{"use strict";var c;if(!Object.keys){var h=Object.prototype.hasOwnProperty,n=Object.prototype.toString,l=s(1414),p=Object.prototype.propertyIsEnumerable,d=!p.call({toString:null},"toString"),a=p.call(function(){},"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],g=function(m){var _=m.constructor;return _&&_.prototype===m},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},v=function(){if(typeof window>"u")return!1;for(var m in window)try{if(!f["$"+m]&&h.call(window,m)&&window[m]!==null&&typeof window[m]=="object")try{g(window[m])}catch{return!0}}catch{return!0}return!1}();c=function(m){var _=m!==null&&typeof m=="object",y=n.call(m)==="[object Function]",E=l(m),x=_&&n.call(m)==="[object String]",b=[];if(!_&&!y&&!E)throw new TypeError("Object.keys called on a non-object");var N=a&&y;if(x&&m.length>0&&!h.call(m,0))for(var O=0;O<m.length;++O)b.push(String(O));if(E&&m.length>0)for(var w=0;w<m.length;++w)b.push(String(w));else for(var C in m)N&&C==="prototype"||!h.call(m,C)||b.push(String(C));if(d)for(var A=function(k){if(typeof window>"u"||!v)return g(k);try{return g(k)}catch{return!1}}(m),S=0;S<u.length;++S)A&&u[S]==="constructor"||!h.call(m,u[S])||b.push(u[S]);return b}}o.exports=c},2215:(o,i,s)=>{"use strict";var c=Array.prototype.slice,h=s(1414),n=Object.keys,l=n?function(d){return n(d)}:s(8987),p=Object.keys;l.shim=function(){if(Object.keys){var d=function(){var a=Object.keys(arguments);return a&&a.length===arguments.length}(1,2);d||(Object.keys=function(a){return h(a)?p(c.call(a)):p(a)})}else Object.keys=l;return Object.keys||l},o.exports=l},1414:o=>{"use strict";var i=Object.prototype.toString;o.exports=function(s){var c=i.call(s),h=c==="[object Arguments]";return h||(h=c!=="[object Array]"&&s!==null&&typeof s=="object"&&typeof s.length=="number"&&s.length>=0&&i.call(s.callee)==="[object Function]"),h}},4155:o=>{var i,s,c=o.exports={};function h(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function l(_){if(i===setTimeout)return setTimeout(_,0);if((i===h||!i)&&setTimeout)return i=setTimeout,setTimeout(_,0);try{return i(_,0)}catch{try{return i.call(null,_,0)}catch{return i.call(this,_,0)}}}(function(){try{i=typeof setTimeout=="function"?setTimeout:h}catch{i=h}try{s=typeof clearTimeout=="function"?clearTimeout:n}catch{s=n}})();var p,d=[],a=!1,u=-1;function g(){a&&p&&(a=!1,p.length?d=p.concat(d):u=-1,d.length&&f())}function f(){if(!a){var _=l(g);a=!0;for(var y=d.length;y;){for(p=d,d=[];++u<y;)p&&p[u].run();u=-1,y=d.length}p=null,a=!1,function(E){if(s===clearTimeout)return clearTimeout(E);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(E);try{s(E)}catch{try{return s.call(null,E)}catch{return s.call(this,E)}}}(_)}}function v(_,y){this.fun=_,this.array=y}function m(){}c.nextTick=function(_){var y=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)y[E-1]=arguments[E];d.push(new v(_,y)),d.length!==1||a||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=m,c.addListener=m,c.once=m,c.off=m,c.removeListener=m,c.removeAllListeners=m,c.emit=m,c.prependListener=m,c.prependOnceListener=m,c.listeners=function(_){return[]},c.binding=function(_){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(_){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},380:function(o,i,s){"use strict";var c=this&&this.__awaiter||function(p,d,a,u){return new(a||(a=Promise))(function(g,f){function v(y){try{_(u.next(y))}catch(E){f(E)}}function m(y){try{_(u.throw(y))}catch(E){f(E)}}function _(y){var E;y.done?g(y.value):(E=y.value,E instanceof a?E:new a(function(x){x(E)})).then(v,m)}_((u=u.apply(p,d||[])).next())})},h=this&&this.__generator||function(p,d){var a,u,g,f,v={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(_){return function(y){return function(E){if(a)throw new TypeError("Generator is already executing.");for(;v;)try{if(a=1,u&&(g=2&E[0]?u.return:E[0]?u.throw||((g=u.return)&&g.call(u),0):u.next)&&!(g=g.call(u,E[1])).done)return g;switch(u=0,g&&(E=[2&E[0],g.value]),E[0]){case 0:case 1:g=E;break;case 4:return v.label++,{value:E[1],done:!1};case 5:v.label++,u=E[1],E=[0];continue;case 7:E=v.ops.pop(),v.trys.pop();continue;default:if(!((g=(g=v.trys).length>0&&g[g.length-1])||E[0]!==6&&E[0]!==2)){v=0;continue}if(E[0]===3&&(!g||E[1]>g[0]&&E[1]<g[3])){v.label=E[1];break}if(E[0]===6&&v.label<g[1]){v.label=g[1],g=E;break}if(g&&v.label<g[2]){v.label=g[2],v.ops.push(E);break}g[2]&&v.ops.pop(),v.trys.pop();continue}E=d.call(p,v)}catch(x){E=[6,x],u=0}finally{a=g=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}([_,y])}}};Object.defineProperty(i,"__esModule",{value:!0}),i.createRpc=void 0;var n=s(5931);function l(p,d){return new Proxy({},{get:function(a,u,g){var f,v=this,m=(f=u.toString())&&f[0].toUpperCase()+f.slice(1),_="".concat(p,".").concat(m);return n.subscriptionMethods.includes(_)?function(y,E,x){d.subscribe(_,y,E,x)}:function(y){return c(v,void 0,void 0,function(){return h(this,function(E){switch(E.label){case 0:return[4,d.request(_,y)];case 1:return[2,E.sent()]}})})}}})}i.createRpc=l,i.default=l},8713:function(o,i,s){"use strict";var c=this&&this.__createBinding||(Object.create?function(a,u,g,f){f===void 0&&(f=g),Object.defineProperty(a,f,{enumerable:!0,get:function(){return u[g]}})}:function(a,u,g,f){f===void 0&&(f=g),a[f]=u[g]}),h=this&&this.__exportStar||function(a,u){for(var g in a)g==="default"||Object.prototype.hasOwnProperty.call(u,g)||c(u,a,g)},n=this&&this.__awaiter||function(a,u,g,f){return new(g||(g=Promise))(function(v,m){function _(x){try{E(f.next(x))}catch(b){m(b)}}function y(x){try{E(f.throw(x))}catch(b){m(b)}}function E(x){var b;x.done?v(x.value):(b=x.value,b instanceof g?b:new g(function(N){N(b)})).then(_,y)}E((f=f.apply(a,u||[])).next())})},l=this&&this.__generator||function(a,u){var g,f,v,m,_={label:0,sent:function(){if(1&v[0])throw v[1];return v[1]},trys:[],ops:[]};return m={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function y(E){return function(x){return function(b){if(g)throw new TypeError("Generator is already executing.");for(;_;)try{if(g=1,f&&(v=2&b[0]?f.return:b[0]?f.throw||((v=f.return)&&v.call(f),0):f.next)&&!(v=v.call(f,b[1])).done)return v;switch(f=0,v&&(b=[2&b[0],v.value]),b[0]){case 0:case 1:v=b;break;case 4:return _.label++,{value:b[1],done:!1};case 5:_.label++,f=b[1],b=[0];continue;case 7:b=_.ops.pop(),_.trys.pop();continue;default:if(!((v=(v=_.trys).length>0&&v[v.length-1])||b[0]!==6&&b[0]!==2)){_=0;continue}if(b[0]===3&&(!v||b[1]>v[0]&&b[1]<v[3])){_.label=b[1];break}if(b[0]===6&&_.label<v[1]){_.label=v[1],v=b;break}if(v&&_.label<v[2]){_.label=v[2],_.ops.push(b);break}v[2]&&_.ops.pop(),_.trys.pop();continue}b=u.call(a,_)}catch(N){b=[6,N],f=0}finally{g=v=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([E,x])}}},p=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(i,"__esModule",{value:!0}),s(8831);var d=p(s(2262));WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=function(a,u){return n(void 0,void 0,void 0,function(){var g;return l(this,function(f){switch(f.label){case 0:return[4,a];case 1:return[4,f.sent().arrayBuffer()];case 2:return g=f.sent(),[4,WebAssembly.instantiate(g,u)];case 3:return[2,f.sent()]}})})}),h(s(5931),i),i.default=d.default},2262:function(o,i,s){"use strict";var c=this&&this.__awaiter||function(f,v,m,_){return new(m||(m=Promise))(function(y,E){function x(O){try{N(_.next(O))}catch(w){E(w)}}function b(O){try{N(_.throw(O))}catch(w){E(w)}}function N(O){var w;O.done?y(O.value):(w=O.value,w instanceof m?w:new m(function(C){C(w)})).then(x,b)}N((_=_.apply(f,v||[])).next())})},h=this&&this.__generator||function(f,v){var m,_,y,E,x={label:0,sent:function(){if(1&y[0])throw y[1];return y[1]},trys:[],ops:[]};return E={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(E[Symbol.iterator]=function(){return this}),E;function b(N){return function(O){return function(w){if(m)throw new TypeError("Generator is already executing.");for(;x;)try{if(m=1,_&&(y=2&w[0]?_.return:w[0]?_.throw||((y=_.return)&&y.call(_),0):_.next)&&!(y=y.call(_,w[1])).done)return y;switch(_=0,y&&(w=[2&w[0],y.value]),w[0]){case 0:case 1:y=w;break;case 4:return x.label++,{value:w[1],done:!1};case 5:x.label++,_=w[1],w=[0];continue;case 7:w=x.ops.pop(),x.trys.pop();continue;default:if(!((y=(y=x.trys).length>0&&y[y.length-1])||w[0]!==6&&w[0]!==2)){x=0;continue}if(w[0]===3&&(!y||w[1]>y[0]&&w[1]<y[3])){x.label=w[1];break}if(w[0]===6&&x.label<y[1]){x.label=y[1],y=w;break}if(y&&x.label<y[2]){x.label=y[2],x.ops.push(w);break}y[2]&&x.ops.pop(),x.trys.pop();continue}w=v.call(f,x)}catch(C){w=[6,C],_=0}finally{m=y=0}if(5&w[0])throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}([N,O])}}},n=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(i,"__esModule",{value:!0});var l=s(5931),p=s(380),d=n(s(1712)),a=s(1095),u={wasmClientCode:"https://lightning.engineering/lnc-v0.2.8-alpha.wasm",namespace:"default",serverHost:"mailbox.terminal.lightning.today:443"},g=function(){function f(v){var m=Object.assign({},u,v);this._wasmClientCode=m.wasmClientCode,this._namespace=m.namespace,m.credentialStore?this.credentials=m.credentialStore:(this.credentials=new d.default(m.namespace,m.password),this.credentials.isPaired||(this.credentials.serverHost=m.serverHost),m.pairingPhrase&&(this.credentials.pairingPhrase=m.pairingPhrase));var _=s.g||window||self;this.go=new _.Go,this.lnd=new l.LndApi(p.createRpc,this),this.loop=new l.LoopApi(p.createRpc,this),this.pool=new l.PoolApi(p.createRpc,this),this.faraday=new l.FaradayApi(p.createRpc,this),this.tapd=new l.TaprootAssetsApi(p.createRpc,this),this.lit=new l.LitApi(p.createRpc,this)}return Object.defineProperty(f.prototype,"wasm",{get:function(){return globalThis[this._namespace]},set:function(v){globalThis[this._namespace]=v},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"isReady",{get:function(){return this.wasm&&this.wasm.wasmClientIsReady&&this.wasm.wasmClientIsReady()},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"isConnected",{get:function(){return this.wasm&&this.wasm.wasmClientIsConnected&&this.wasm.wasmClientIsConnected()},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"status",{get:function(){return this.wasm&&this.wasm.wasmClientStatus&&this.wasm.wasmClientStatus()},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"expiry",{get:function(){return this.wasm&&this.wasm.wasmClientGetExpiry&&new Date(1e3*this.wasm.wasmClientGetExpiry())},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"isReadOnly",{get:function(){return this.wasm&&this.wasm.wasmClientIsReadOnly&&this.wasm.wasmClientIsReadOnly()},enumerable:!1,configurable:!0}),f.prototype.hasPerms=function(v){return this.wasm&&this.wasm.wasmClientHasPerms&&this.wasm.wasmClientHasPerms(v)},f.prototype.preload=function(){return c(this,void 0,void 0,function(){var v;return h(this,function(m){switch(m.label){case 0:return v=this,[4,WebAssembly.instantiateStreaming(fetch(this._wasmClientCode),this.go.importObject)];case 1:return v.result=m.sent(),a.wasmLog.info("downloaded WASM file"),[2]}})})},f.prototype.run=function(){return c(this,void 0,void 0,function(){var v=this;return h(this,function(m){switch(m.label){case 0:return this.isReady?[3,2]:[4,this.preload()];case 1:m.sent(),m.label=2;case 2:return typeof this.wasm!="object"&&(this.wasm={}),this.wasm.onLocalPrivCreate||(this.wasm.onLocalPrivCreate=function(_){a.wasmLog.debug("local private key created: "+_),v.credentials.localKey=_}),this.wasm.onRemoteKeyReceive||(this.wasm.onRemoteKeyReceive=function(_){a.wasmLog.debug("remote key received: "+_),v.credentials.remoteKey=_}),this.wasm.onAuthData||(this.wasm.onAuthData=function(_){a.wasmLog.debug("auth data received: "+_)}),this.go.argv=["wasm-client","--debuglevel=trace","--namespace="+this._namespace,"--onlocalprivcreate=".concat(this._namespace,".onLocalPrivCreate"),"--onremotekeyreceive=".concat(this._namespace,".onRemoteKeyReceive"),"--onauthdata=".concat(this._namespace,".onAuthData")],this.result?(this.go.run(this.result.instance),[4,WebAssembly.instantiate(this.result.module,this.go.importObject)]):[3,4];case 3:return m.sent(),[3,5];case 4:throw new Error("Can't find WASM instance.");case 5:return[2]}})})},f.prototype.connect=function(){return c(this,void 0,void 0,function(){var v,m,_,y,E,x=this;return h(this,function(b){switch(b.label){case 0:return this.isConnected?[2]:this.isReady?[3,3]:[4,this.run()];case 1:return b.sent(),[4,this.waitTilReady()];case 2:b.sent(),b.label=3;case 3:return v=this.credentials,m=v.pairingPhrase,_=v.localKey,y=v.remoteKey,E=v.serverHost,this.wasm.wasmClientConnectServer(E,!1,m,_,y),typeof window<"u"?window.addEventListener("unload",this.wasm.wasmClientDisconnect):a.wasmLog.info("No unload event listener added. window is not available"),[2,new Promise(function(N,O){var w=0,C=setInterval(function(){w++,x.isConnected?(clearInterval(C),N(),a.wasmLog.info("The WASM client is connected to the server"),x.credentials.password&&x.credentials.clear(!0)):w>20&&(clearInterval(C),O(new Error("Failed to connect the WASM client to the proxy server")))},500)})]}})})},f.prototype.disconnect=function(){this.wasm.wasmClientDisconnect()},f.prototype.waitTilReady=function(){return c(this,void 0,void 0,function(){var v=this;return h(this,function(m){return[2,new Promise(function(_,y){var E=0,x=setInterval(function(){E++,v.isReady?(clearInterval(x),_(),a.wasmLog.info("The WASM client is ready")):E>20&&(clearInterval(x),y(new Error("Failed to load the WASM client")))},500)})]})})},f.prototype.request=function(v,m){var _=this;return new Promise(function(y,E){a.wasmLog.debug("".concat(v," request"),m);var x=JSON.stringify(m||{});_.wasm.wasmClientInvokeRPC(v,x,function(b){try{var N=JSON.parse(b),O=(0,l.snakeKeysToCamel)(N);a.wasmLog.debug("".concat(v," response"),O),y(O)}catch{return a.wasmLog.debug("".concat(v," raw response"),b),void E(new Error(b))}})})},f.prototype.subscribe=function(v,m,_,y){a.wasmLog.debug("".concat(v," request"),m);var E=JSON.stringify(m||{});this.wasm.wasmClientInvokeRPC(v,E,function(x){try{var b=JSON.parse(x),N=(0,l.snakeKeysToCamel)(b);a.wasmLog.debug("".concat(v," response"),N),_&&_(N)}catch(w){a.wasmLog.debug("".concat(v," error"),w);var O=new Error(x);y&&y(O)}})},f}();i.default=g},1712:(o,i,s)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var c=s(5121),h="lnc-web",n=function(){function l(p,d){this.persisted={salt:"",cipher:"",serverHost:"",localKey:"",remoteKey:"",pairingPhrase:""},this._localKey="",this._remoteKey="",this._pairingPhrase="",this.namespace="default",p&&(this.namespace=p),this._load(),d&&(this.password=d)}return Object.defineProperty(l.prototype,"password",{get:function(){return this._password||""},set:function(p){if(this.persisted.cipher){var d=this.persisted,a=d.cipher,u=d.salt;if(!(0,c.verifyTestCipher)(a,p,u))throw new Error("The password provided is not valid");this._password=p,this._pairingPhrase=this._decrypt(this.persisted.pairingPhrase),this._localKey=this._decrypt(this.persisted.localKey),this._remoteKey=this._decrypt(this.persisted.remoteKey)}else this._password=p,this.persisted.salt=(0,c.generateSalt)(),this.persisted.cipher=(0,c.createTestCipher)(p,this.persisted.salt),this.pairingPhrase&&(this.persisted.pairingPhrase=this._encrypt(this.pairingPhrase)),this.localKey&&(this.persisted.localKey=this._encrypt(this.localKey)),this.remoteKey&&(this.persisted.remoteKey=this._encrypt(this.remoteKey)),this._save(),this.clear(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"serverHost",{get:function(){return this.persisted.serverHost},set:function(p){this.persisted.serverHost=p,this._save()},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"pairingPhrase",{get:function(){return this._pairingPhrase},set:function(p){this._pairingPhrase=p,this._password&&(this.persisted.pairingPhrase=this._encrypt(p),this._save())},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"localKey",{get:function(){return this._localKey},set:function(p){this._localKey=p,this._password&&(this.persisted.localKey=this._encrypt(p),this._save())},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"remoteKey",{get:function(){return this._remoteKey},set:function(p){this._remoteKey=p,this._password&&(this.persisted.remoteKey=this._encrypt(p),this._save())},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"isPaired",{get:function(){return!!this.persisted.remoteKey||!!this.persisted.pairingPhrase},enumerable:!1,configurable:!0}),l.prototype.clear=function(p){if(!p){var d="".concat(h,":").concat(this.namespace);localStorage.removeItem(d)}this.persisted={salt:"",cipher:"",serverHost:this.persisted.serverHost,localKey:"",remoteKey:"",pairingPhrase:""},this._localKey="",this._remoteKey="",this._pairingPhrase="",this._password=void 0},l.prototype._load=function(){if(typeof localStorage<"u")try{var p="".concat(h,":").concat(this.namespace),d=localStorage.getItem(p);if(!d)return;this.persisted=JSON.parse(d)}catch(u){var a=u.message;throw new Error("Failed to load secure data: ".concat(a))}},l.prototype._save=function(){if(typeof localStorage<"u"){var p="".concat(h,":").concat(this.namespace);localStorage.setItem(p,JSON.stringify(this.persisted))}},l.prototype._encrypt=function(p){return p&&this._password?(0,c.encrypt)(p,this._password,this.persisted.salt):""},l.prototype._decrypt=function(p){return p&&this._password?(0,c.decrypt)(p,this._password,this.persisted.salt):""},l}();i.default=n},5121:(o,i,s)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.verifyTestCipher=i.createTestCipher=i.decrypt=i.encrypt=i.generateSalt=void 0;var c=s(1354),h="Irrelevant data for password verification";i.generateSalt=function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=new Uint8Array(32);return globalThis.crypto.getRandomValues(l),l=l.map(function(p){return n.charCodeAt(p%n.length)}),String.fromCharCode.apply(null,l)},i.encrypt=function(n,l,p){return c.AES.encrypt(JSON.stringify(n),l+p).toString()},i.decrypt=function(n,l,p){var d=c.AES.decrypt(n,l+p);return JSON.parse(d.toString(c.enc.Utf8))},i.createTestCipher=function(n,l){return(0,i.encrypt)(h,n,l)},i.verifyTestCipher=function(n,l,p){try{return(0,i.decrypt)(n,l,p)===h}catch{return!1}}},1095:function(o,i,s){"use strict";var c=this&&this.__spreadArray||function(d,a,u){if(u||arguments.length===2)for(var g,f=0,v=a.length;f<v;f++)!g&&f in a||(g||(g=Array.prototype.slice.call(a,0,f)),g[f]=a[f]);return d.concat(g||Array.prototype.slice.call(a))},h=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(i,"__esModule",{value:!0}),i.actionLog=i.wasmLog=i.grpcLog=i.log=i.Logger=i.LogLevel=void 0;var n,l=h(s(1227));(function(d){d[d.debug=1]="debug",d[d.info=2]="info",d[d.warn=3]="warn",d[d.error=4]="error",d[d.none=5]="none"})(n=i.LogLevel||(i.LogLevel={}));var p=function(){function d(a,u){var g=this;this.debug=function(f){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];return g._log(n.debug,f,v)},this.info=function(f){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];return g._log(n.info,f,v)},this.warn=function(f){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];return g._log(n.warn,f,v)},this.error=function(f){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];return g._log(n.error,f,v)},this._levelToOutput=a,this._logger=(0,l.default)(u)}return d.fromEnv=function(a){var u=n.none;if(globalThis.localStorage&&globalThis.localStorage.getItem("debug")){var g=globalThis.localStorage.getItem("debug-level")||"debug";u=n[g]}return new d(u,a)},d.prototype._log=function(a,u,g){if(!(this._levelToOutput>a)){var f=Object.keys(n).reduce(function(v,m){return a===n[m]?m:v},"??");this._logger.apply(this,c(["[".concat(f,"] ").concat(u)],g,!1))}},d}();i.Logger=p,i.log=p.fromEnv("main"),i.grpcLog=p.fromEnv("grpc"),i.wasmLog=p.fromEnv("wasm"),i.actionLog=p.fromEnv("action")},384:o=>{o.exports=function(i){return i&&typeof i=="object"&&typeof i.copy=="function"&&typeof i.fill=="function"&&typeof i.readUInt8=="function"}},5955:(o,i,s)=>{"use strict";var c=s(2584),h=s(8662),n=s(6430),l=s(5692);function p($){return $.call.bind($)}var d=typeof BigInt<"u",a=typeof Symbol<"u",u=p(Object.prototype.toString),g=p(Number.prototype.valueOf),f=p(String.prototype.valueOf),v=p(Boolean.prototype.valueOf);if(d)var m=p(BigInt.prototype.valueOf);if(a)var _=p(Symbol.prototype.valueOf);function y($,D){if(typeof $!="object")return!1;try{return D($),!0}catch{return!1}}function E($){return u($)==="[object Map]"}function x($){return u($)==="[object Set]"}function b($){return u($)==="[object WeakMap]"}function N($){return u($)==="[object WeakSet]"}function O($){return u($)==="[object ArrayBuffer]"}function w($){return typeof ArrayBuffer<"u"&&(O.working?O($):$ instanceof ArrayBuffer)}function C($){return u($)==="[object DataView]"}function A($){return typeof DataView<"u"&&(C.working?C($):$ instanceof DataView)}i.isArgumentsObject=c,i.isGeneratorFunction=h,i.isTypedArray=l,i.isPromise=function($){return typeof Promise<"u"&&$ instanceof Promise||$!==null&&typeof $=="object"&&typeof $.then=="function"&&typeof $.catch=="function"},i.isArrayBufferView=function($){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView($):l($)||A($)},i.isUint8Array=function($){return n($)==="Uint8Array"},i.isUint8ClampedArray=function($){return n($)==="Uint8ClampedArray"},i.isUint16Array=function($){return n($)==="Uint16Array"},i.isUint32Array=function($){return n($)==="Uint32Array"},i.isInt8Array=function($){return n($)==="Int8Array"},i.isInt16Array=function($){return n($)==="Int16Array"},i.isInt32Array=function($){return n($)==="Int32Array"},i.isFloat32Array=function($){return n($)==="Float32Array"},i.isFloat64Array=function($){return n($)==="Float64Array"},i.isBigInt64Array=function($){return n($)==="BigInt64Array"},i.isBigUint64Array=function($){return n($)==="BigUint64Array"},E.working=typeof Map<"u"&&E(new Map),i.isMap=function($){return typeof Map<"u"&&(E.working?E($):$ instanceof Map)},x.working=typeof Set<"u"&&x(new Set),i.isSet=function($){return typeof Set<"u"&&(x.working?x($):$ instanceof Set)},b.working=typeof WeakMap<"u"&&b(new WeakMap),i.isWeakMap=function($){return typeof WeakMap<"u"&&(b.working?b($):$ instanceof WeakMap)},N.working=typeof WeakSet<"u"&&N(new WeakSet),i.isWeakSet=function($){return N($)},O.working=typeof ArrayBuffer<"u"&&O(new ArrayBuffer),i.isArrayBuffer=w,C.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&C(new DataView(new ArrayBuffer(1),0,1)),i.isDataView=A;var S=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function k($){return u($)==="[object SharedArrayBuffer]"}function L($){return S!==void 0&&(k.working===void 0&&(k.working=k(new S)),k.working?k($):$ instanceof S)}function U($){return y($,g)}function M($){return y($,f)}function H($){return y($,v)}function Z($){return d&&y($,m)}function j($){return a&&y($,_)}i.isSharedArrayBuffer=L,i.isAsyncFunction=function($){return u($)==="[object AsyncFunction]"},i.isMapIterator=function($){return u($)==="[object Map Iterator]"},i.isSetIterator=function($){return u($)==="[object Set Iterator]"},i.isGeneratorObject=function($){return u($)==="[object Generator]"},i.isWebAssemblyCompiledModule=function($){return u($)==="[object WebAssembly.Module]"},i.isNumberObject=U,i.isStringObject=M,i.isBooleanObject=H,i.isBigIntObject=Z,i.isSymbolObject=j,i.isBoxedPrimitive=function($){return U($)||M($)||H($)||Z($)||j($)},i.isAnyArrayBuffer=function($){return typeof Uint8Array<"u"&&(w($)||L($))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function($){Object.defineProperty(i,$,{enumerable:!1,value:function(){throw new Error($+" is not supported in userland")}})})},9539:(o,i,s)=>{var c=s(4155),h=s(5108),n=Object.getOwnPropertyDescriptors||function(D){for(var F=Object.keys(D),K={},W=0;W<F.length;W++)K[F[W]]=Object.getOwnPropertyDescriptor(D,F[W]);return K},l=/%[sdj%]/g;i.format=function(D){if(!N(D)){for(var F=[],K=0;K<arguments.length;K++)F.push(u(arguments[K]));return F.join(" ")}K=1;for(var W=arguments,T=W.length,I=String(D).replace(l,function(P){if(P==="%%")return"%";if(K>=T)return P;switch(P){case"%s":return String(W[K++]);case"%d":return Number(W[K++]);case"%j":try{return JSON.stringify(W[K++])}catch{return"[Circular]"}default:return P}}),R=W[K];K<T;R=W[++K])x(R)||!C(R)?I+=" "+R:I+=" "+u(R);return I},i.deprecate=function(D,F){if(c!==void 0&&c.noDeprecation===!0)return D;if(c===void 0)return function(){return i.deprecate(D,F).apply(this,arguments)};var K=!1;return function(){if(!K){if(c.throwDeprecation)throw new Error(F);c.traceDeprecation?h.trace(F):h.error(F),K=!0}return D.apply(this,arguments)}};var p={},d=/^$/;if(c.env.NODE_DEBUG){var a=c.env.NODE_DEBUG;a=a.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),d=new RegExp("^"+a+"$","i")}function u(D,F){var K={seen:[],stylize:f};return arguments.length>=3&&(K.depth=arguments[2]),arguments.length>=4&&(K.colors=arguments[3]),E(F)?K.showHidden=F:F&&i._extend(K,F),O(K.showHidden)&&(K.showHidden=!1),O(K.depth)&&(K.depth=2),O(K.colors)&&(K.colors=!1),O(K.customInspect)&&(K.customInspect=!0),K.colors&&(K.stylize=g),v(K,D,K.depth)}function g(D,F){var K=u.styles[F];return K?"\x1B["+u.colors[K][0]+"m"+D+"\x1B["+u.colors[K][1]+"m":D}function f(D,F){return D}function v(D,F,K){if(D.customInspect&&F&&k(F.inspect)&&F.inspect!==i.inspect&&(!F.constructor||F.constructor.prototype!==F)){var W=F.inspect(K,D);return N(W)||(W=v(D,W,K)),W}var T=function(q,J){if(O(J))return q.stylize("undefined","undefined");if(N(J)){var Y="'"+JSON.stringify(J).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return q.stylize(Y,"string")}return b(J)?q.stylize(""+J,"number"):E(J)?q.stylize(""+J,"boolean"):x(J)?q.stylize("null","null"):void 0}(D,F);if(T)return T;var I=Object.keys(F),R=function(q){var J={};return q.forEach(function(Y,ee){J[Y]=!0}),J}(I);if(D.showHidden&&(I=Object.getOwnPropertyNames(F)),S(F)&&(I.indexOf("message")>=0||I.indexOf("description")>=0))return m(F);if(I.length===0){if(k(F)){var P=F.name?": "+F.name:"";return D.stylize("[Function"+P+"]","special")}if(w(F))return D.stylize(RegExp.prototype.toString.call(F),"regexp");if(A(F))return D.stylize(Date.prototype.toString.call(F),"date");if(S(F))return m(F)}var V,B="",G=!1,z=["{","}"];return y(F)&&(G=!0,z=["[","]"]),k(F)&&(B=" [Function"+(F.name?": "+F.name:"")+"]"),w(F)&&(B=" "+RegExp.prototype.toString.call(F)),A(F)&&(B=" "+Date.prototype.toUTCString.call(F)),S(F)&&(B=" "+m(F)),I.length!==0||G&&F.length!=0?K<0?w(F)?D.stylize(RegExp.prototype.toString.call(F),"regexp"):D.stylize("[Object]","special"):(D.seen.push(F),V=G?function(q,J,Y,ee,se){for(var ae=[],ce=0,oe=J.length;ce<oe;++ce)Z(J,String(ce))?ae.push(_(q,J,Y,ee,String(ce),!0)):ae.push("");return se.forEach(function(pe){pe.match(/^\d+$/)||ae.push(_(q,J,Y,ee,pe,!0))}),ae}(D,F,K,R,I):I.map(function(q){return _(D,F,K,R,q,G)}),D.seen.pop(),function(q,J,Y){return q.reduce(function(ee,se){return se.indexOf(`
`),ee+se.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?Y[0]+(J===""?"":J+`
 `)+" "+q.join(`,
  `)+" "+Y[1]:Y[0]+J+" "+q.join(", ")+" "+Y[1]}(V,B,z)):z[0]+B+z[1]}function m(D){return"["+Error.prototype.toString.call(D)+"]"}function _(D,F,K,W,T,I){var R,P,V;if((V=Object.getOwnPropertyDescriptor(F,T)||{value:F[T]}).get?P=V.set?D.stylize("[Getter/Setter]","special"):D.stylize("[Getter]","special"):V.set&&(P=D.stylize("[Setter]","special")),Z(W,T)||(R="["+T+"]"),P||(D.seen.indexOf(V.value)<0?(P=x(K)?v(D,V.value,null):v(D,V.value,K-1)).indexOf(`
`)>-1&&(P=I?P.split(`
`).map(function(B){return"  "+B}).join(`
`).slice(2):`
`+P.split(`
`).map(function(B){return"   "+B}).join(`
`)):P=D.stylize("[Circular]","special")),O(R)){if(I&&T.match(/^\d+$/))return P;(R=JSON.stringify(""+T)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(R=R.slice(1,-1),R=D.stylize(R,"name")):(R=R.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),R=D.stylize(R,"string"))}return R+": "+P}function y(D){return Array.isArray(D)}function E(D){return typeof D=="boolean"}function x(D){return D===null}function b(D){return typeof D=="number"}function N(D){return typeof D=="string"}function O(D){return D===void 0}function w(D){return C(D)&&L(D)==="[object RegExp]"}function C(D){return typeof D=="object"&&D!==null}function A(D){return C(D)&&L(D)==="[object Date]"}function S(D){return C(D)&&(L(D)==="[object Error]"||D instanceof Error)}function k(D){return typeof D=="function"}function L(D){return Object.prototype.toString.call(D)}function U(D){return D<10?"0"+D.toString(10):D.toString(10)}i.debuglog=function(D){if(D=D.toUpperCase(),!p[D])if(d.test(D)){var F=c.pid;p[D]=function(){var K=i.format.apply(i,arguments);h.error("%s %d: %s",D,F,K)}}else p[D]=function(){};return p[D]},i.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},i.types=s(5955),i.isArray=y,i.isBoolean=E,i.isNull=x,i.isNullOrUndefined=function(D){return D==null},i.isNumber=b,i.isString=N,i.isSymbol=function(D){return typeof D=="symbol"},i.isUndefined=O,i.isRegExp=w,i.types.isRegExp=w,i.isObject=C,i.isDate=A,i.types.isDate=A,i.isError=S,i.types.isNativeError=S,i.isFunction=k,i.isPrimitive=function(D){return D===null||typeof D=="boolean"||typeof D=="number"||typeof D=="string"||typeof D=="symbol"||D===void 0},i.isBuffer=s(384);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function H(){var D=new Date,F=[U(D.getHours()),U(D.getMinutes()),U(D.getSeconds())].join(":");return[D.getDate(),M[D.getMonth()],F].join(" ")}function Z(D,F){return Object.prototype.hasOwnProperty.call(D,F)}i.log=function(){h.log("%s - %s",H(),i.format.apply(i,arguments))},i.inherits=s(5717),i._extend=function(D,F){if(!F||!C(F))return D;for(var K=Object.keys(F),W=K.length;W--;)D[K[W]]=F[K[W]];return D};var j=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;function $(D,F){if(!D){var K=new Error("Promise was rejected with a falsy value");K.reason=D,D=K}return F(D)}i.promisify=function(D){if(typeof D!="function")throw new TypeError('The "original" argument must be of type Function');if(j&&D[j]){var F;if(typeof(F=D[j])!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(F,j,{value:F,enumerable:!1,writable:!1,configurable:!0}),F}function F(){for(var K,W,T=new Promise(function(P,V){K=P,W=V}),I=[],R=0;R<arguments.length;R++)I.push(arguments[R]);I.push(function(P,V){P?W(P):K(V)});try{D.apply(this,I)}catch(P){W(P)}return T}return Object.setPrototypeOf(F,Object.getPrototypeOf(D)),j&&Object.defineProperty(F,j,{value:F,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(F,n(D))},i.promisify.custom=j,i.callbackify=function(D){if(typeof D!="function")throw new TypeError('The "original" argument must be of type Function');function F(){for(var K=[],W=0;W<arguments.length;W++)K.push(arguments[W]);var T=K.pop();if(typeof T!="function")throw new TypeError("The last argument must be of type Function");var I=this,R=function(){return T.apply(I,arguments)};D.apply(this,K).then(function(P){c.nextTick(R.bind(null,null,P))},function(P){c.nextTick($.bind(null,P,R))})}return Object.setPrototypeOf(F,Object.getPrototypeOf(D)),Object.defineProperties(F,n(D)),F}},6430:(o,i,s)=>{"use strict";var c=s(4029),h=s(3083),n=s(1924),l=s(7296),p=n("Object.prototype.toString"),d=s(6410)(),a=typeof globalThis>"u"?s.g:globalThis,u=h(),g=n("String.prototype.slice"),f={},v=Object.getPrototypeOf;d&&l&&v&&c(u,function(_){if(typeof a[_]=="function"){var y=new a[_];if(Symbol.toStringTag in y){var E=v(y),x=l(E,Symbol.toStringTag);if(!x){var b=v(E);x=l(b,Symbol.toStringTag)}f[_]=x.get}}});var m=s(5692);o.exports=function(_){return!!m(_)&&(d&&Symbol.toStringTag in _?function(y){var E=!1;return c(f,function(x,b){if(!E)try{var N=x.call(y);N===b&&(E=N)}catch{}}),E}(_):g(p(_),8,-1))}},4229:()=>{},2203:()=>{},5381:()=>{},2480:()=>{},3083:(o,i,s)=>{"use strict";var c=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],h=typeof globalThis>"u"?s.g:globalThis;o.exports=function(){for(var n=[],l=0;l<c.length;l++)typeof h[c[l]]=="function"&&(n[n.length]=c[l]);return n}}},e={};function r(o){var i=e[o];if(i!==void 0)return i.exports;var s=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}return r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),r.o=(o,i)=>Object.prototype.hasOwnProperty.call(o,i),r.nmd=o=>(o.paths=[],o.children||(o.children=[]),o),r(8713)})()})});import b4 from"/v135/node_events.js";function fo(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function j0(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function kt(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function F0(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");fo(t.outputLen),fo(t.blockLen)}function V0(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function W0(t,e){kt(t);let r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}var G0={number:fo,bool:j0,bytes:kt,hash:F0,exists:V0,output:W0},Ne=G0;var rn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;var ho=t=>t instanceof Uint8Array;var pt=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),at=(t,e)=>t<<32-e|t>>>e,Z0=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Z0)throw new Error("Non little-endian hardware is not supported");var K0=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ie(t){if(!ho(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=K0[t[r]];return e}function Lt(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);let e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(e/2);for(let o=0;o<r.length;o++){let i=o*2,s=t.slice(i,i+2),c=Number.parseInt(s,16);if(Number.isNaN(c)||c<0)throw new Error("Invalid byte sequence");r[o]=c}return r}function po(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function ct(t){if(typeof t=="string"&&(t=po(t)),!ho(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function rt(...t){let e=new Uint8Array(t.reduce((o,i)=>o+i.length,0)),r=0;return t.forEach(o=>{if(!ho(o))throw new Error("Uint8Array expected");e.set(o,r),r+=o.length}),e}var hr=class{clone(){return this._cloneInto()}},z0=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function _s(t,e){if(e!==void 0&&(typeof e!="object"||!z0(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function gt(t){let e=o=>t().update(ct(o)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function yt(t=32){if(rn&&typeof rn.getRandomValues=="function")return rn.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function q0(t,e,r,o){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,o);let i=BigInt(32),s=BigInt(4294967295),c=Number(r>>i&s),h=Number(r&s),n=o?4:0,l=o?0:4;t.setUint32(e+n,c,o),t.setUint32(e+l,h,o)}var Pt=class extends hr{constructor(e,r,o,i){super(),this.blockLen=e,this.outputLen=r,this.padOffset=o,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=pt(this.buffer)}update(e){Ne.exists(this);let{view:r,buffer:o,blockLen:i}=this;e=ct(e);let s=e.length;for(let c=0;c<s;){let h=Math.min(i-this.pos,s-c);if(h===i){let n=pt(e);for(;i<=s-c;c+=i)this.process(n,c);continue}o.set(e.subarray(c,c+h),this.pos),this.pos+=h,c+=h,this.pos===i&&(this.process(r,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Ne.exists(this),Ne.output(e,this),this.finished=!0;let{buffer:r,view:o,blockLen:i,isLE:s}=this,{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>i-c&&(this.process(o,0),c=0);for(let d=c;d<i;d++)r[d]=0;q0(o,i-8,BigInt(this.length*8),s),this.process(o,0);let h=pt(e),n=this.outputLen;if(n%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let l=n/4,p=this.get();if(l>p.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)h.setUint32(4*d,p[d],s)}digest(){let{buffer:e,outputLen:r}=this;this.digestInto(e);let o=e.slice(0,r);return this.destroy(),o}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:r,buffer:o,length:i,finished:s,destroyed:c,pos:h}=this;return e.length=i,e.pos=h,e.finished=s,e.destroyed=c,i%r&&e.buffer.set(o),e}};var Y0=(t,e,r)=>t&e^~t&r,J0=(t,e,r)=>t&e^t&r^e&r,X0=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ut=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Dt=new Uint32Array(64),nn=class extends Pt{constructor(){super(64,32,8,!1),this.A=Ut[0]|0,this.B=Ut[1]|0,this.C=Ut[2]|0,this.D=Ut[3]|0,this.E=Ut[4]|0,this.F=Ut[5]|0,this.G=Ut[6]|0,this.H=Ut[7]|0}get(){let{A:e,B:r,C:o,D:i,E:s,F:c,G:h,H:n}=this;return[e,r,o,i,s,c,h,n]}set(e,r,o,i,s,c,h,n){this.A=e|0,this.B=r|0,this.C=o|0,this.D=i|0,this.E=s|0,this.F=c|0,this.G=h|0,this.H=n|0}process(e,r){for(let d=0;d<16;d++,r+=4)Dt[d]=e.getUint32(r,!1);for(let d=16;d<64;d++){let a=Dt[d-15],u=Dt[d-2],g=at(a,7)^at(a,18)^a>>>3,f=at(u,17)^at(u,19)^u>>>10;Dt[d]=f+Dt[d-7]+g+Dt[d-16]|0}let{A:o,B:i,C:s,D:c,E:h,F:n,G:l,H:p}=this;for(let d=0;d<64;d++){let a=at(h,6)^at(h,11)^at(h,25),u=p+a+Y0(h,n,l)+X0[d]+Dt[d]|0,f=(at(o,2)^at(o,13)^at(o,22))+J0(o,i,s)|0;p=l,l=n,n=h,h=c+u|0,c=s,s=i,i=o,o=u+f|0}o=o+this.A|0,i=i+this.B|0,s=s+this.C|0,c=c+this.D|0,h=h+this.E|0,n=n+this.F|0,l=l+this.G|0,p=p+this.H|0,this.set(o,i,s,c,h,n,l,p)}roundClean(){Dt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},go=class extends nn{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}},$e=gt(()=>new nn),rp=gt(()=>new go);var vo={};$0(vo,{bitGet:()=>ou,bitLen:()=>nu,bitMask:()=>Rr,bitSet:()=>iu,bytesToHex:()=>Yt,bytesToNumberBE:()=>He,bytesToNumberLE:()=>an,concatBytes:()=>mt,createHmacDrbg:()=>wo,ensureBytes:()=>ke,equalBytes:()=>ru,hexToBytes:()=>Jt,hexToNumber:()=>mo,numberToBytesBE:()=>lt,numberToBytesLE:()=>bo,numberToHexUnpadded:()=>As,numberToVarBytesBE:()=>tu,utf8ToBytes:()=>Os,validateObject:()=>xt});var xs=BigInt(0),on=BigInt(1),Q0=BigInt(2),sn=t=>t instanceof Uint8Array,eu=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Yt(t){if(!sn(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=eu[t[r]];return e}function As(t){let e=t.toString(16);return e.length&1?`0${e}`:e}function mo(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function Jt(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);let e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(e/2);for(let o=0;o<r.length;o++){let i=o*2,s=t.slice(i,i+2),c=Number.parseInt(s,16);if(Number.isNaN(c)||c<0)throw new Error("Invalid byte sequence");r[o]=c}return r}function He(t){return mo(Yt(t))}function an(t){if(!sn(t))throw new Error("Uint8Array expected");return mo(Yt(Uint8Array.from(t).reverse()))}function lt(t,e){return Jt(t.toString(16).padStart(e*2,"0"))}function bo(t,e){return lt(t,e).reverse()}function tu(t){return Jt(As(t))}function ke(t,e,r){let o;if(typeof e=="string")try{o=Jt(e)}catch(s){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`)}else if(sn(e))o=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);let i=o.length;if(typeof r=="number"&&i!==r)throw new Error(`${t} expected ${r} bytes, got ${i}`);return o}function mt(...t){let e=new Uint8Array(t.reduce((o,i)=>o+i.length,0)),r=0;return t.forEach(o=>{if(!sn(o))throw new Error("Uint8Array expected");e.set(o,r),r+=o.length}),e}function ru(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function Os(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function nu(t){let e;for(e=0;t>xs;t>>=on,e+=1);return e}function ou(t,e){return t>>BigInt(e)&on}var iu=(t,e,r)=>t|(r?on:xs)<<BigInt(e),Rr=t=>(Q0<<BigInt(t-1))-on,yo=t=>new Uint8Array(t),Cs=t=>Uint8Array.from(t);function wo(t,e,r){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let o=yo(t),i=yo(t),s=0,c=()=>{o.fill(1),i.fill(0),s=0},h=(...d)=>r(i,o,...d),n=(d=yo())=>{i=h(Cs([0]),d),o=h(),d.length!==0&&(i=h(Cs([1]),d),o=h())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let d=0,a=[];for(;d<e;){o=h();let u=o.slice();a.push(u),d+=o.length}return mt(...a)};return(d,a)=>{c(),n(d);let u;for(;!(u=a(l()));)n();return c(),u}}var su={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function xt(t,e,r={}){let o=(i,s,c)=>{let h=su[s];if(typeof h!="function")throw new Error(`Invalid validator "${s}", expected function`);let n=t[i];if(!(c&&n===void 0)&&!h(n,t))throw new Error(`Invalid param ${String(i)}=${n} (${typeof n}), expected ${s}`)};for(let[i,s]of Object.entries(e))o(i,s,!1);for(let[i,s]of Object.entries(r))o(i,s,!0);return t}var Pe=BigInt(0),Oe=BigInt(1),Xt=BigInt(2),au=BigInt(3),Eo=BigInt(4),Ss=BigInt(5),Ns=BigInt(8),cu=BigInt(9),lu=BigInt(16);function Ae(t,e){let r=t%e;return r>=Pe?r:e+r}function uu(t,e,r){if(r<=Pe||e<Pe)throw new Error("Expected power/modulo > 0");if(r===Oe)return Pe;let o=Oe;for(;e>Pe;)e&Oe&&(o=o*t%r),t=t*t%r,e>>=Oe;return o}function et(t,e,r){let o=t;for(;e-- >Pe;)o*=o,o%=r;return o}function cn(t,e){if(t===Pe||e<=Pe)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let r=Ae(t,e),o=e,i=Pe,s=Oe,c=Oe,h=Pe;for(;r!==Pe;){let l=o/r,p=o%r,d=i-c*l,a=s-h*l;o=r,r=p,i=c,s=h,c=d,h=a}if(o!==Oe)throw new Error("invert: does not exist");return Ae(i,e)}function fu(t){let e=(t-Oe)/Xt,r,o,i;for(r=t-Oe,o=0;r%Xt===Pe;r/=Xt,o++);for(i=Xt;i<t&&uu(i,e,t)!==t-Oe;i++);if(o===1){let c=(t+Oe)/Eo;return function(n,l){let p=n.pow(l,c);if(!n.eql(n.sqr(p),l))throw new Error("Cannot find square root");return p}}let s=(r+Oe)/Xt;return function(h,n){if(h.pow(n,e)===h.neg(h.ONE))throw new Error("Cannot find square root");let l=o,p=h.pow(h.mul(h.ONE,i),r),d=h.pow(n,s),a=h.pow(n,r);for(;!h.eql(a,h.ONE);){if(h.eql(a,h.ZERO))return h.ZERO;let u=1;for(let f=h.sqr(a);u<l&&!h.eql(f,h.ONE);u++)f=h.sqr(f);let g=h.pow(p,Oe<<BigInt(l-u-1));p=h.sqr(g),d=h.mul(d,g),a=h.mul(a,p),l=u}return d}}function du(t){if(t%Eo===au){let e=(t+Oe)/Eo;return function(o,i){let s=o.pow(i,e);if(!o.eql(o.sqr(s),i))throw new Error("Cannot find square root");return s}}if(t%Ns===Ss){let e=(t-Ss)/Ns;return function(o,i){let s=o.mul(i,Xt),c=o.pow(s,e),h=o.mul(i,c),n=o.mul(o.mul(h,Xt),c),l=o.mul(h,o.sub(n,o.ONE));if(!o.eql(o.sqr(l),i))throw new Error("Cannot find square root");return l}}return t%lu,fu(t)}var hu=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function _o(t){let e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=hu.reduce((o,i)=>(o[i]="function",o),e);return xt(t,r)}function pu(t,e,r){if(r<Pe)throw new Error("Expected power > 0");if(r===Pe)return t.ONE;if(r===Oe)return e;let o=t.ONE,i=e;for(;r>Pe;)r&Oe&&(o=t.mul(o,i)),i=t.sqr(i),r>>=Oe;return o}function gu(t,e){let r=new Array(e.length),o=e.reduce((s,c,h)=>t.is0(c)?s:(r[h]=s,t.mul(s,c)),t.ONE),i=t.inv(o);return e.reduceRight((s,c,h)=>t.is0(c)?s:(r[h]=t.mul(s,r[h]),t.mul(s,c)),i),r}function ln(t,e){let r=e!==void 0?e:t.toString(2).length,o=Math.ceil(r/8);return{nBitLength:r,nByteLength:o}}function Ts(t,e,r=!1,o={}){if(t<=Pe)throw new Error(`Expected Fp ORDER > 0, got ${t}`);let{nBitLength:i,nByteLength:s}=ln(t,e);if(s>2048)throw new Error("Field lengths over 2048 bytes are not supported");let c=du(t),h=Object.freeze({ORDER:t,BITS:i,BYTES:s,MASK:Rr(i),ZERO:Pe,ONE:Oe,create:n=>Ae(n,t),isValid:n=>{if(typeof n!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof n}`);return Pe<=n&&n<t},is0:n=>n===Pe,isOdd:n=>(n&Oe)===Oe,neg:n=>Ae(-n,t),eql:(n,l)=>n===l,sqr:n=>Ae(n*n,t),add:(n,l)=>Ae(n+l,t),sub:(n,l)=>Ae(n-l,t),mul:(n,l)=>Ae(n*l,t),pow:(n,l)=>pu(h,n,l),div:(n,l)=>Ae(n*cn(l,t),t),sqrN:n=>n*n,addN:(n,l)=>n+l,subN:(n,l)=>n-l,mulN:(n,l)=>n*l,inv:n=>cn(n,t),sqrt:o.sqrt||(n=>c(h,n)),invertBatch:n=>gu(h,n),cmov:(n,l,p)=>p?l:n,toBytes:n=>r?bo(n,s):lt(n,s),fromBytes:n=>{if(n.length!==s)throw new Error(`Fp.fromBytes: expected ${s}, got ${n.length}`);return r?an(n):He(n)}});return Object.freeze(h)}function Rs(t,e,r=!1){t=ke("privateHash",t);let o=t.length,i=ln(e).nByteLength+8;if(i<24||o<i||o>1024)throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${o}`);let s=r?an(t):He(t);return Ae(s,e-Oe)+Oe}var mu=BigInt(0),Co=BigInt(1);function Is(t,e){let r=(i,s)=>{let c=s.negate();return i?c:s},o=i=>{let s=Math.ceil(e/i)+1,c=2**(i-1);return{windows:s,windowSize:c}};return{constTimeNegate:r,unsafeLadder(i,s){let c=t.ZERO,h=i;for(;s>mu;)s&Co&&(c=c.add(h)),h=h.double(),s>>=Co;return c},precomputeWindow(i,s){let{windows:c,windowSize:h}=o(s),n=[],l=i,p=l;for(let d=0;d<c;d++){p=l,n.push(p);for(let a=1;a<h;a++)p=p.add(l),n.push(p);l=p.double()}return n},wNAF(i,s,c){let{windows:h,windowSize:n}=o(i),l=t.ZERO,p=t.BASE,d=BigInt(2**i-1),a=2**i,u=BigInt(i);for(let g=0;g<h;g++){let f=g*n,v=Number(c&d);c>>=u,v>n&&(v-=a,c+=Co);let m=f,_=f+Math.abs(v)-1,y=g%2!==0,E=v<0;v===0?p=p.add(r(y,s[m])):l=l.add(r(E,s[_]))}return{p:l,f:p}},wNAFCached(i,s,c,h){let n=i._WINDOW_SIZE||1,l=s.get(i);return l||(l=this.precomputeWindow(i,n),n!==1&&s.set(i,h(l))),this.wNAF(n,l,c)}}}function xo(t){return _o(t.Fp),xt(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ln(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function bu(t){let e=xo(t);xt(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:o,a:i}=e;if(r){if(!o.eql(i,o.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}var{bytesToNumberBE:wu,hexToBytes:vu}=vo,Qt={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){let{Err:e}=Qt;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");let r=t[1],o=t.subarray(2,r+2);if(!r||o.length!==r)throw new e("Invalid signature integer: wrong length");if(o[0]&128)throw new e("Invalid signature integer: negative");if(o[0]===0&&!(o[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:wu(o),l:t.subarray(r+2)}},toSig(t){let{Err:e}=Qt,r=typeof t=="string"?vu(t):t;if(!(r instanceof Uint8Array))throw new Error("ui8a expected");let o=r.length;if(o<2||r[0]!=48)throw new e("Invalid signature tag");if(r[1]!==o-2)throw new e("Invalid signature: incorrect length");let{d:i,l:s}=Qt._parseInt(r.subarray(2)),{d:c,l:h}=Qt._parseInt(s);if(h.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:c}},hexFromSig(t){let e=l=>Number.parseInt(l[0],16)&8?"00"+l:l,r=l=>{let p=l.toString(16);return p.length&1?`0${p}`:p},o=e(r(t.s)),i=e(r(t.r)),s=o.length/2,c=i.length/2,h=r(s),n=r(c);return`30${r(c+s+4)}02${n}${i}02${h}${o}`}},At=BigInt(0),nt=BigInt(1),fp=BigInt(2),ks=BigInt(3),dp=BigInt(4);function Eu(t){let e=bu(t),{Fp:r}=e,o=e.toBytes||((g,f,v)=>{let m=f.toAffine();return mt(Uint8Array.from([4]),r.toBytes(m.x),r.toBytes(m.y))}),i=e.fromBytes||(g=>{let f=g.subarray(1),v=r.fromBytes(f.subarray(0,r.BYTES)),m=r.fromBytes(f.subarray(r.BYTES,2*r.BYTES));return{x:v,y:m}});function s(g){let{a:f,b:v}=e,m=r.sqr(g),_=r.mul(m,g);return r.add(r.add(_,r.mul(g,f)),v)}if(!r.eql(r.sqr(e.Gy),s(e.Gx)))throw new Error("bad generator point: equation left != right");function c(g){return typeof g=="bigint"&&At<g&&g<e.n}function h(g){if(!c(g))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function n(g){let{allowedPrivateKeyLengths:f,nByteLength:v,wrapPrivateKey:m,n:_}=e;if(f&&typeof g!="bigint"){if(g instanceof Uint8Array&&(g=Yt(g)),typeof g!="string"||!f.includes(g.length))throw new Error("Invalid key");g=g.padStart(v*2,"0")}let y;try{y=typeof g=="bigint"?g:He(ke("private key",g,v))}catch{throw new Error(`private key must be ${v} bytes, hex or bigint, not ${typeof g}`)}return m&&(y=Ae(y,_)),h(y),y}let l=new Map;function p(g){if(!(g instanceof d))throw new Error("ProjectivePoint expected")}class d{constructor(f,v,m){if(this.px=f,this.py=v,this.pz=m,f==null||!r.isValid(f))throw new Error("x required");if(v==null||!r.isValid(v))throw new Error("y required");if(m==null||!r.isValid(m))throw new Error("z required")}static fromAffine(f){let{x:v,y:m}=f||{};if(!f||!r.isValid(v)||!r.isValid(m))throw new Error("invalid affine point");if(f instanceof d)throw new Error("projective point not allowed");let _=y=>r.eql(y,r.ZERO);return _(v)&&_(m)?d.ZERO:new d(v,m,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){let v=r.invertBatch(f.map(m=>m.pz));return f.map((m,_)=>m.toAffine(v[_])).map(d.fromAffine)}static fromHex(f){let v=d.fromAffine(i(ke("pointHex",f)));return v.assertValidity(),v}static fromPrivateKey(f){return d.BASE.multiply(n(f))}_setWindowSize(f){this._WINDOW_SIZE=f,l.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}let{x:f,y:v}=this.toAffine();if(!r.isValid(f)||!r.isValid(v))throw new Error("bad point: x or y not FE");let m=r.sqr(v),_=s(f);if(!r.eql(m,_))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:f}=this.toAffine();if(r.isOdd)return!r.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){p(f);let{px:v,py:m,pz:_}=this,{px:y,py:E,pz:x}=f,b=r.eql(r.mul(v,x),r.mul(y,_)),N=r.eql(r.mul(m,x),r.mul(E,_));return b&&N}negate(){return new d(this.px,r.neg(this.py),this.pz)}double(){let{a:f,b:v}=e,m=r.mul(v,ks),{px:_,py:y,pz:E}=this,x=r.ZERO,b=r.ZERO,N=r.ZERO,O=r.mul(_,_),w=r.mul(y,y),C=r.mul(E,E),A=r.mul(_,y);return A=r.add(A,A),N=r.mul(_,E),N=r.add(N,N),x=r.mul(f,N),b=r.mul(m,C),b=r.add(x,b),x=r.sub(w,b),b=r.add(w,b),b=r.mul(x,b),x=r.mul(A,x),N=r.mul(m,N),C=r.mul(f,C),A=r.sub(O,C),A=r.mul(f,A),A=r.add(A,N),N=r.add(O,O),O=r.add(N,O),O=r.add(O,C),O=r.mul(O,A),b=r.add(b,O),C=r.mul(y,E),C=r.add(C,C),O=r.mul(C,A),x=r.sub(x,O),N=r.mul(C,w),N=r.add(N,N),N=r.add(N,N),new d(x,b,N)}add(f){p(f);let{px:v,py:m,pz:_}=this,{px:y,py:E,pz:x}=f,b=r.ZERO,N=r.ZERO,O=r.ZERO,w=e.a,C=r.mul(e.b,ks),A=r.mul(v,y),S=r.mul(m,E),k=r.mul(_,x),L=r.add(v,m),U=r.add(y,E);L=r.mul(L,U),U=r.add(A,S),L=r.sub(L,U),U=r.add(v,_);let M=r.add(y,x);return U=r.mul(U,M),M=r.add(A,k),U=r.sub(U,M),M=r.add(m,_),b=r.add(E,x),M=r.mul(M,b),b=r.add(S,k),M=r.sub(M,b),O=r.mul(w,U),b=r.mul(C,k),O=r.add(b,O),b=r.sub(S,O),O=r.add(S,O),N=r.mul(b,O),S=r.add(A,A),S=r.add(S,A),k=r.mul(w,k),U=r.mul(C,U),S=r.add(S,k),k=r.sub(A,k),k=r.mul(w,k),U=r.add(U,k),A=r.mul(S,U),N=r.add(N,A),A=r.mul(M,U),b=r.mul(L,b),b=r.sub(b,A),A=r.mul(L,S),O=r.mul(M,O),O=r.add(O,A),new d(b,N,O)}subtract(f){return this.add(f.negate())}is0(){return this.equals(d.ZERO)}wNAF(f){return u.wNAFCached(this,l,f,v=>{let m=r.invertBatch(v.map(_=>_.pz));return v.map((_,y)=>_.toAffine(m[y])).map(d.fromAffine)})}multiplyUnsafe(f){let v=d.ZERO;if(f===At)return v;if(h(f),f===nt)return this;let{endo:m}=e;if(!m)return u.unsafeLadder(this,f);let{k1neg:_,k1:y,k2neg:E,k2:x}=m.splitScalar(f),b=v,N=v,O=this;for(;y>At||x>At;)y&nt&&(b=b.add(O)),x&nt&&(N=N.add(O)),O=O.double(),y>>=nt,x>>=nt;return _&&(b=b.negate()),E&&(N=N.negate()),N=new d(r.mul(N.px,m.beta),N.py,N.pz),b.add(N)}multiply(f){h(f);let v=f,m,_,{endo:y}=e;if(y){let{k1neg:E,k1:x,k2neg:b,k2:N}=y.splitScalar(v),{p:O,f:w}=this.wNAF(x),{p:C,f:A}=this.wNAF(N);O=u.constTimeNegate(E,O),C=u.constTimeNegate(b,C),C=new d(r.mul(C.px,y.beta),C.py,C.pz),m=O.add(C),_=w.add(A)}else{let{p:E,f:x}=this.wNAF(v);m=E,_=x}return d.normalizeZ([m,_])[0]}multiplyAndAddUnsafe(f,v,m){let _=d.BASE,y=(x,b)=>b===At||b===nt||!x.equals(_)?x.multiplyUnsafe(b):x.multiply(b),E=y(this,v).add(y(f,m));return E.is0()?void 0:E}toAffine(f){let{px:v,py:m,pz:_}=this,y=this.is0();f==null&&(f=y?r.ONE:r.inv(_));let E=r.mul(v,f),x=r.mul(m,f),b=r.mul(_,f);if(y)return{x:r.ZERO,y:r.ZERO};if(!r.eql(b,r.ONE))throw new Error("invZ was invalid");return{x:E,y:x}}isTorsionFree(){let{h:f,isTorsionFree:v}=e;if(f===nt)return!0;if(v)return v(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:f,clearCofactor:v}=e;return f===nt?this:v?v(d,this):this.multiplyUnsafe(e.h)}toRawBytes(f=!0){return this.assertValidity(),o(d,this,f)}toHex(f=!0){return Yt(this.toRawBytes(f))}}d.BASE=new d(e.Gx,e.Gy,r.ONE),d.ZERO=new d(r.ZERO,r.ONE,r.ZERO);let a=e.nBitLength,u=Is(d,e.endo?Math.ceil(a/2):a);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:n,weierstrassEquation:s,isWithinCurveOrder:c}}function _u(t){let e=xo(t);return xt(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Ls(t){let e=_u(t),{Fp:r,n:o}=e,i=r.BYTES+1,s=2*r.BYTES+1;function c(U){return At<U&&U<r.ORDER}function h(U){return Ae(U,o)}function n(U){return cn(U,o)}let{ProjectivePoint:l,normPrivateKeyToScalar:p,weierstrassEquation:d,isWithinCurveOrder:a}=Eu({...e,toBytes(U,M,H){let Z=M.toAffine(),j=r.toBytes(Z.x),$=mt;return H?$(Uint8Array.from([M.hasEvenY()?2:3]),j):$(Uint8Array.from([4]),j,r.toBytes(Z.y))},fromBytes(U){let M=U.length,H=U[0],Z=U.subarray(1);if(M===i&&(H===2||H===3)){let j=He(Z);if(!c(j))throw new Error("Point is not on curve");let $=d(j),D=r.sqrt($),F=(D&nt)===nt;return(H&1)===1!==F&&(D=r.neg(D)),{x:j,y:D}}else if(M===s&&H===4){let j=r.fromBytes(Z.subarray(0,r.BYTES)),$=r.fromBytes(Z.subarray(r.BYTES,2*r.BYTES));return{x:j,y:$}}else throw new Error(`Point of length ${M} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)}}),u=U=>Yt(lt(U,e.nByteLength));function g(U){let M=o>>nt;return U>M}function f(U){return g(U)?h(-U):U}let v=(U,M,H)=>He(U.slice(M,H));class m{constructor(M,H,Z){this.r=M,this.s=H,this.recovery=Z,this.assertValidity()}static fromCompact(M){let H=e.nByteLength;return M=ke("compactSignature",M,H*2),new m(v(M,0,H),v(M,H,2*H))}static fromDER(M){let{r:H,s:Z}=Qt.toSig(ke("DER",M));return new m(H,Z)}assertValidity(){if(!a(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!a(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(M){return new m(this.r,this.s,M)}recoverPublicKey(M){let{r:H,s:Z,recovery:j}=this,$=N(ke("msgHash",M));if(j==null||![0,1,2,3].includes(j))throw new Error("recovery id invalid");let D=j===2||j===3?H+e.n:H;if(D>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");let F=j&1?"03":"02",K=l.fromHex(F+u(D)),W=n(D),T=h(-$*W),I=h(Z*W),R=l.BASE.multiplyAndAddUnsafe(K,T,I);if(!R)throw new Error("point at infinify");return R.assertValidity(),R}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new m(this.r,h(-this.s),this.recovery):this}toDERRawBytes(){return Jt(this.toDERHex())}toDERHex(){return Qt.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Jt(this.toCompactHex())}toCompactHex(){return u(this.r)+u(this.s)}}let _={isValidPrivateKey(U){try{return p(U),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{let U=e.randomBytes(r.BYTES+8),M=Rs(U,o);return lt(M,e.nByteLength)},precompute(U=8,M=l.BASE){return M._setWindowSize(U),M.multiply(BigInt(3)),M}};function y(U,M=!0){return l.fromPrivateKey(U).toRawBytes(M)}function E(U){let M=U instanceof Uint8Array,H=typeof U=="string",Z=(M||H)&&U.length;return M?Z===i||Z===s:H?Z===2*i||Z===2*s:U instanceof l}function x(U,M,H=!0){if(E(U))throw new Error("first arg must be private key");if(!E(M))throw new Error("second arg must be public key");return l.fromHex(M).multiply(p(U)).toRawBytes(H)}let b=e.bits2int||function(U){let M=He(U),H=U.length*8-e.nBitLength;return H>0?M>>BigInt(H):M},N=e.bits2int_modN||function(U){return h(b(U))},O=Rr(e.nBitLength);function w(U){if(typeof U!="bigint")throw new Error("bigint expected");if(!(At<=U&&U<O))throw new Error(`bigint expected < 2^${e.nBitLength}`);return lt(U,e.nByteLength)}function C(U,M,H=A){if(["recovered","canonical"].some(V=>V in H))throw new Error("sign() legacy options not supported");let{hash:Z,randomBytes:j}=e,{lowS:$,prehash:D,extraEntropy:F}=H;$==null&&($=!0),U=ke("msgHash",U),D&&(U=ke("prehashed msgHash",Z(U)));let K=N(U),W=p(M),T=[w(W),w(K)];if(F!=null){let V=F===!0?j(r.BYTES):F;T.push(ke("extraEntropy",V,r.BYTES))}let I=mt(...T),R=K;function P(V){let B=b(V);if(!a(B))return;let G=n(B),z=l.BASE.multiply(B).toAffine(),q=h(z.x);if(q===At)return;let J=h(G*h(R+q*W));if(J===At)return;let Y=(z.x===q?0:2)|Number(z.y&nt),ee=J;return $&&g(J)&&(ee=f(J),Y^=1),new m(q,ee,Y)}return{seed:I,k2sig:P}}let A={lowS:e.lowS,prehash:!1},S={lowS:e.lowS,prehash:!1};function k(U,M,H=A){let{seed:Z,k2sig:j}=C(U,M,H),$=e;return wo($.hash.outputLen,$.nByteLength,$.hmac)(Z,j)}l.BASE._setWindowSize(8);function L(U,M,H,Z=S){let j=U;if(M=ke("msgHash",M),H=ke("publicKey",H),"strict"in Z)throw new Error("options.strict was renamed to lowS");let{lowS:$,prehash:D}=Z,F,K;try{if(typeof j=="string"||j instanceof Uint8Array)try{F=m.fromDER(j)}catch(z){if(!(z instanceof Qt.Err))throw z;F=m.fromCompact(j)}else if(typeof j=="object"&&typeof j.r=="bigint"&&typeof j.s=="bigint"){let{r:z,s:q}=j;F=new m(z,q)}else throw new Error("PARSE");K=l.fromHex(H)}catch(z){if(z.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if($&&F.hasHighS())return!1;D&&(M=e.hash(M));let{r:W,s:T}=F,I=N(M),R=n(T),P=h(I*R),V=h(W*R),B=l.BASE.multiplyAndAddUnsafe(K,P,V)?.toAffine();return B?h(B.x)===W:!1}return{CURVE:e,getPublicKey:y,getSharedSecret:x,sign:k,verify:L,ProjectivePoint:l,Signature:m,utils:_}}var un=class extends hr{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,Ne.hash(e);let o=ct(r);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let i=this.blockLen,s=new Uint8Array(i);s.set(o.length>i?e.create().update(o).digest():o);for(let c=0;c<s.length;c++)s[c]^=54;this.iHash.update(s),this.oHash=e.create();for(let c=0;c<s.length;c++)s[c]^=106;this.oHash.update(s),s.fill(0)}update(e){return Ne.exists(this),this.iHash.update(e),this}digestInto(e){Ne.exists(this),Ne.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:r,iHash:o,finished:i,destroyed:s,blockLen:c,outputLen:h}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=c,e.outputLen=h,e.oHash=r._cloneInto(e.oHash),e.iHash=o._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Xe=(t,e,r)=>new un(t,e).update(r).digest();Xe.create=(t,e)=>new un(t,e);function Cu(t){return{hash:t,hmac:(e,...r)=>Xe(t,e,rt(...r)),randomBytes:yt}}function Ps(t,e){let r=o=>Ls({...t,...Cu(o)});return Object.freeze({...r(e),create:r})}var pn=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),fn=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Ms=BigInt(1),dn=BigInt(2),Us=(t,e)=>(t+e/dn)/e;function Bs(t){let e=pn,r=BigInt(3),o=BigInt(6),i=BigInt(11),s=BigInt(22),c=BigInt(23),h=BigInt(44),n=BigInt(88),l=t*t*t%e,p=l*l*t%e,d=et(p,r,e)*p%e,a=et(d,r,e)*p%e,u=et(a,dn,e)*l%e,g=et(u,i,e)*u%e,f=et(g,s,e)*g%e,v=et(f,h,e)*f%e,m=et(v,n,e)*v%e,_=et(m,h,e)*f%e,y=et(_,r,e)*p%e,E=et(y,c,e)*g%e,x=et(E,o,e)*l%e,b=et(x,dn,e);if(!Oo.eql(Oo.sqr(b),t))throw new Error("Cannot find square root");return b}var Oo=Ts(pn,void 0,void 0,{sqrt:Bs}),je=Ps({a:BigInt(0),b:BigInt(7),Fp:Oo,n:fn,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{let e=fn,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),o=-Ms*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=r,c=BigInt("0x100000000000000000000000000000000"),h=Us(s*t,e),n=Us(-o*t,e),l=Ae(t-h*r-n*i,e),p=Ae(-h*o-n*s,e),d=l>c,a=p>c;if(d&&(l=e-l),a&&(p=e-p),l>c||p>c)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:l,k2neg:a,k2:p}}}},$e),gn=BigInt(0),$s=t=>typeof t=="bigint"&&gn<t&&t<pn,xu=t=>typeof t=="bigint"&&gn<t&&t<fn,Ds={};function hn(t,...e){let r=Ds[t];if(r===void 0){let o=$e(Uint8Array.from(t,i=>i.charCodeAt(0)));r=mt(o,o),Ds[t]=r}return $e(mt(r,...e))}var To=t=>t.toRawBytes(!0).slice(1),So=t=>lt(t,32),Ao=t=>Ae(t,pn),Ir=t=>Ae(t,fn),Ro=je.ProjectivePoint,Au=(t,e,r)=>Ro.BASE.multiplyAndAddUnsafe(t,e,r);function No(t){let e=je.utils.normPrivateKeyToScalar(t),r=Ro.fromPrivateKey(e);return{scalar:r.hasEvenY()?e:Ir(-e),bytes:To(r)}}function Hs(t){if(!$s(t))throw new Error("bad x: need 0 < x < p");let e=Ao(t*t),r=Ao(e*t+BigInt(7)),o=Bs(r);o%dn!==gn&&(o=Ao(-o));let i=new Ro(t,o,Ms);return i.assertValidity(),i}function js(...t){return Ir(He(hn("BIP0340/challenge",...t)))}function Ou(t){return No(t).bytes}function Su(t,e,r=yt(32)){let o=ke("message",t),{bytes:i,scalar:s}=No(e),c=ke("auxRand",r,32),h=So(s^He(hn("BIP0340/aux",c))),n=hn("BIP0340/nonce",h,i,o),l=Ir(He(n));if(l===gn)throw new Error("sign failed: k is zero");let{bytes:p,scalar:d}=No(l),a=js(p,i,o),u=new Uint8Array(64);if(u.set(p,0),u.set(So(Ir(d+a*s)),32),!Fs(u,o,i))throw new Error("sign: Invalid signature produced");return u}function Fs(t,e,r){let o=ke("signature",t,64),i=ke("message",e),s=ke("publicKey",r,32);try{let c=Hs(He(s)),h=He(o.subarray(0,32));if(!$s(h))return!1;let n=He(o.subarray(32,64));if(!xu(n))return!1;let l=js(So(h),To(c),i),p=Au(c,n,Ir(-l));return!(!p||!p.hasEvenY()||p.toAffine().x!==h)}catch{return!1}}var Ot={getPublicKey:Ou,sign:Su,verify:Fs,utils:{randomPrivateKey:je.utils.randomPrivateKey,lift_x:Hs,pointToBytes:To,numberToBytesBE:lt,bytesToNumberBE:He,taggedHash:hn,mod:Ae}};function er(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function ut(...t){let e=(i,s)=>c=>i(s(c)),r=Array.from(t).reverse().reduce((i,s)=>i?e(i,s.encode):s.encode,void 0),o=t.reduce((i,s)=>i?e(i,s.decode):s.decode,void 0);return{encode:r,decode:o}}function bt(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(r=>{if(er(r),r<0||r>=t.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${t.length})`);return t[r]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);let o=t.indexOf(r);if(o===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${t}`);return o})}}}function wt(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of e)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function Lr(t,e="="){if(er(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.encode: non-string input=${o}`);for(;r.length*t%8;)r.push(e);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of r)if(typeof i!="string")throw new Error(`padding.decode: non-string input=${i}`);let o=r.length;if(o*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;o>0&&r[o-1]===e;o--)if(!((o-1)*t%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,o)}}}function zs(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Vs(t,e,r){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let o=0,i=[],s=Array.from(t);for(s.forEach(c=>{if(er(c),c<0||c>=e)throw new Error(`Wrong integer: ${c}`)});;){let c=0,h=!0;for(let n=o;n<s.length;n++){let l=s[n],p=e*c+l;if(!Number.isSafeInteger(p)||e*c/e!==c||p-l!==e*c)throw new Error("convertRadix: carry overflow");if(c=p%r,s[n]=Math.floor(p/r),!Number.isSafeInteger(s[n])||s[n]*r+c!==p)throw new Error("convertRadix: carry overflow");if(h)s[n]?h=!1:o=n;else continue}if(i.push(c),h)break}for(let c=0;c<t.length-1&&t[c]===0;c++)i.push(0);return i.reverse()}var qs=(t,e)=>e?qs(e,t%e):t,yn=(t,e)=>t+(e-qs(t,e));function Io(t,e,r,o){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(yn(e,r)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${r} carryBits=${yn(e,r)}`);let i=0,s=0,c=2**r-1,h=[];for(let n of t){if(er(n),n>=2**e)throw new Error(`convertRadix2: invalid data word=${n} from=${e}`);if(i=i<<e|n,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=r;s-=r)h.push((i>>s-r&c)>>>0);i&=2**s-1}if(i=i<<r-s&c,!o&&s>=e)throw new Error("Excess padding");if(!o&&i)throw new Error(`Non-zero padding: ${i}`);return o&&s>0&&h.push(i>>>0),h}function Ys(t){return er(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Vs(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Vs(e,t,2**8))}}}function St(t,e=!1){if(er(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(yn(8,t)>32||yn(t,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Io(Array.from(r),8,t,!e)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Io(r,t,8,e))}}}function Ws(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Js(t,e){if(er(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let o=e(r).slice(0,t),i=new Uint8Array(r.length+t);return i.set(r),i.set(o,r.length),i},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let o=r.slice(0,-t),i=e(o).slice(0,t),s=r.slice(-t);for(let c=0;c<t;c++)if(i[c]!==s[c])throw new Error("Invalid checksum");return o}}}var Pr={alphabet:bt,chain:ut,checksum:Js,radix:Ys,radix2:St,join:wt,padding:Lr},Nu=ut(St(4),bt("0123456789ABCDEF"),wt("")),Tu=ut(St(5),bt("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Lr(5),wt("")),Up=ut(St(5),bt("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Lr(5),wt("")),Dp=ut(St(5),bt("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),wt(""),zs(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),ot=ut(St(6),bt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Lr(6),wt("")),Ru=ut(St(6),bt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Lr(6),wt("")),Lo=t=>ut(Ys(58),bt(t),wt("")),mn=Lo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Mp=Lo("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),Bp=Lo("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Gs=[0,2,3,5,6,7,9,10,11],Iu={encode(t){let e="";for(let r=0;r<t.length;r+=8){let o=t.subarray(r,r+8);e+=mn.encode(o).padStart(Gs[o.length],"1")}return e},decode(t){let e=[];for(let r=0;r<t.length;r+=11){let o=t.slice(r,r+11),i=Gs.indexOf(o.length),s=mn.decode(o);for(let c=0;c<s.length-i;c++)if(s[c]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-i)))}return Uint8Array.from(e)}},Xs=t=>ut(Js(4,e=>t(t(e))),mn),ko=ut(bt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),wt("")),Zs=[996825010,642813549,513874426,1027748829,705979059];function kr(t){let e=t>>25,r=(t&33554431)<<5;for(let o=0;o<Zs.length;o++)(e>>o&1)===1&&(r^=Zs[o]);return r}function Ks(t,e,r=1){let o=t.length,i=1;for(let s=0;s<o;s++){let c=t.charCodeAt(s);if(c<33||c>126)throw new Error(`Invalid prefix (${t})`);i=kr(i)^c>>5}i=kr(i);for(let s=0;s<o;s++)i=kr(i)^t.charCodeAt(s)&31;for(let s of e)i=kr(i)^s;for(let s=0;s<6;s++)i=kr(i);return i^=r,ko.encode(Io([i%2**30],30,5,!1))}function Qs(t){let e=t==="bech32"?1:734539939,r=St(5),o=r.decode,i=r.encode,s=Ws(o);function c(p,d,a=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(d)||d.length&&typeof d[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof d}`);let u=p.length+7+d.length;if(a!==!1&&u>a)throw new TypeError(`Length ${u} exceeds limit ${a}`);return p=p.toLowerCase(),`${p}1${ko.encode(d)}${Ks(p,d,e)}`}function h(p,d=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||d!==!1&&p.length>d)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${d})`);let a=p.toLowerCase();if(p!==a&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=a;let u=p.lastIndexOf("1");if(u===0||u===-1)throw new Error('Letter "1" must be present between prefix and data only');let g=p.slice(0,u),f=p.slice(u+1);if(f.length<6)throw new Error("Data must be at least 6 characters long");let v=ko.decode(f).slice(0,-6),m=Ks(g,v,e);if(!f.endsWith(m))throw new Error(`Invalid checksum in ${p}: expected "${m}"`);return{prefix:g,words:v}}let n=Ws(h);function l(p){let{prefix:d,words:a}=h(p,!1);return{prefix:d,words:a,bytes:o(a)}}return{encode:c,decode:h,decodeToBytes:l,decodeUnsafe:n,fromWords:o,fromWordsUnsafe:s,toWords:i}}var Mt=Qs("bech32"),$p=Qs("bech32m"),ku={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},Lu=ut(St(4),bt("0123456789abcdef"),wt(""),zs(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),Pu={utf8:ku,hex:Lu,base16:Nu,base32:Tu,base64:ot,base64url:Ru,base58:mn,base58xmr:Iu},Hp=`Invalid encoding type. Available types: ${Object.keys(Pu).join(", ")}`;var Po=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);function Uu(t,e,r,o){Ne.hash(t);let i=_s({dkLen:32,asyncTick:10},o),{c:s,dkLen:c,asyncTick:h}=i;if(Ne.number(s),Ne.number(c),Ne.number(h),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");let n=ct(e),l=ct(r),p=new Uint8Array(c),d=Xe.create(t,n),a=d._cloneInto().update(l);return{c:s,dkLen:c,asyncTick:h,DK:p,PRF:d,PRFSalt:a}}function Du(t,e,r,o,i){return t.destroy(),e.destroy(),o&&o.destroy(),i.fill(0),r}function ea(t,e,r,o){let{c:i,dkLen:s,DK:c,PRF:h,PRFSalt:n}=Uu(t,e,r,o),l,p=new Uint8Array(4),d=pt(p),a=new Uint8Array(h.outputLen);for(let u=1,g=0;g<s;u++,g+=h.outputLen){let f=c.subarray(g,g+h.outputLen);d.setInt32(0,u,!1),(l=n._cloneInto(l)).update(p).digestInto(a),f.set(a.subarray(0,f.length));for(let v=1;v<i;v++){h._cloneInto(l).update(a).digestInto(a);for(let m=0;m<f.length;m++)f[m]^=a[m]}}return Du(h,n,c,l,a)}var bn=BigInt(4294967295),Uo=BigInt(32);function ta(t,e=!1){return e?{h:Number(t&bn),l:Number(t>>Uo&bn)}:{h:Number(t>>Uo&bn)|0,l:Number(t&bn)|0}}function Mu(t,e=!1){let r=new Uint32Array(t.length),o=new Uint32Array(t.length);for(let i=0;i<t.length;i++){let{h:s,l:c}=ta(t[i],e);[r[i],o[i]]=[s,c]}return[r,o]}var Bu=(t,e)=>BigInt(t>>>0)<<Uo|BigInt(e>>>0),$u=(t,e,r)=>t>>>r,Hu=(t,e,r)=>t<<32-r|e>>>r,ju=(t,e,r)=>t>>>r|e<<32-r,Fu=(t,e,r)=>t<<32-r|e>>>r,Vu=(t,e,r)=>t<<64-r|e>>>r-32,Wu=(t,e,r)=>t>>>r-32|e<<64-r,Gu=(t,e)=>e,Zu=(t,e)=>t,Ku=(t,e,r)=>t<<r|e>>>32-r,zu=(t,e,r)=>e<<r|t>>>32-r,qu=(t,e,r)=>e<<r-32|t>>>64-r,Yu=(t,e,r)=>t<<r-32|e>>>64-r;function Ju(t,e,r,o){let i=(e>>>0)+(o>>>0);return{h:t+r+(i/2**32|0)|0,l:i|0}}var Xu=(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),Qu=(t,e,r,o)=>e+r+o+(t/2**32|0)|0,e2=(t,e,r,o)=>(t>>>0)+(e>>>0)+(r>>>0)+(o>>>0),t2=(t,e,r,o,i)=>e+r+o+i+(t/2**32|0)|0,r2=(t,e,r,o,i)=>(t>>>0)+(e>>>0)+(r>>>0)+(o>>>0)+(i>>>0),n2=(t,e,r,o,i,s)=>e+r+o+i+s+(t/2**32|0)|0,o2={fromBig:ta,split:Mu,toBig:Bu,shrSH:$u,shrSL:Hu,rotrSH:ju,rotrSL:Fu,rotrBH:Vu,rotrBL:Wu,rotr32H:Gu,rotr32L:Zu,rotlSH:Ku,rotlSL:zu,rotlBH:qu,rotlBL:Yu,add:Ju,add3L:Xu,add3H:Qu,add4L:e2,add4H:t2,add5H:n2,add5L:r2},ue=o2;var[i2,s2]=ue.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Bt=new Uint32Array(80),$t=new Uint32Array(80),pr=class extends Pt{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:r,Bh:o,Bl:i,Ch:s,Cl:c,Dh:h,Dl:n,Eh:l,El:p,Fh:d,Fl:a,Gh:u,Gl:g,Hh:f,Hl:v}=this;return[e,r,o,i,s,c,h,n,l,p,d,a,u,g,f,v]}set(e,r,o,i,s,c,h,n,l,p,d,a,u,g,f,v){this.Ah=e|0,this.Al=r|0,this.Bh=o|0,this.Bl=i|0,this.Ch=s|0,this.Cl=c|0,this.Dh=h|0,this.Dl=n|0,this.Eh=l|0,this.El=p|0,this.Fh=d|0,this.Fl=a|0,this.Gh=u|0,this.Gl=g|0,this.Hh=f|0,this.Hl=v|0}process(e,r){for(let y=0;y<16;y++,r+=4)Bt[y]=e.getUint32(r),$t[y]=e.getUint32(r+=4);for(let y=16;y<80;y++){let E=Bt[y-15]|0,x=$t[y-15]|0,b=ue.rotrSH(E,x,1)^ue.rotrSH(E,x,8)^ue.shrSH(E,x,7),N=ue.rotrSL(E,x,1)^ue.rotrSL(E,x,8)^ue.shrSL(E,x,7),O=Bt[y-2]|0,w=$t[y-2]|0,C=ue.rotrSH(O,w,19)^ue.rotrBH(O,w,61)^ue.shrSH(O,w,6),A=ue.rotrSL(O,w,19)^ue.rotrBL(O,w,61)^ue.shrSL(O,w,6),S=ue.add4L(N,A,$t[y-7],$t[y-16]),k=ue.add4H(S,b,C,Bt[y-7],Bt[y-16]);Bt[y]=k|0,$t[y]=S|0}let{Ah:o,Al:i,Bh:s,Bl:c,Ch:h,Cl:n,Dh:l,Dl:p,Eh:d,El:a,Fh:u,Fl:g,Gh:f,Gl:v,Hh:m,Hl:_}=this;for(let y=0;y<80;y++){let E=ue.rotrSH(d,a,14)^ue.rotrSH(d,a,18)^ue.rotrBH(d,a,41),x=ue.rotrSL(d,a,14)^ue.rotrSL(d,a,18)^ue.rotrBL(d,a,41),b=d&u^~d&f,N=a&g^~a&v,O=ue.add5L(_,x,N,s2[y],$t[y]),w=ue.add5H(O,m,E,b,i2[y],Bt[y]),C=O|0,A=ue.rotrSH(o,i,28)^ue.rotrBH(o,i,34)^ue.rotrBH(o,i,39),S=ue.rotrSL(o,i,28)^ue.rotrBL(o,i,34)^ue.rotrBL(o,i,39),k=o&s^o&h^s&h,L=i&c^i&n^c&n;m=f|0,_=v|0,f=u|0,v=g|0,u=d|0,g=a|0,{h:d,l:a}=ue.add(l|0,p|0,w|0,C|0),l=h|0,p=n|0,h=s|0,n=c|0,s=o|0,c=i|0;let U=ue.add3L(C,S,L);o=ue.add3H(U,w,A,k),i=U|0}({h:o,l:i}=ue.add(this.Ah|0,this.Al|0,o|0,i|0)),{h:s,l:c}=ue.add(this.Bh|0,this.Bl|0,s|0,c|0),{h,l:n}=ue.add(this.Ch|0,this.Cl|0,h|0,n|0),{h:l,l:p}=ue.add(this.Dh|0,this.Dl|0,l|0,p|0),{h:d,l:a}=ue.add(this.Eh|0,this.El|0,d|0,a|0),{h:u,l:g}=ue.add(this.Fh|0,this.Fl|0,u|0,g|0),{h:f,l:v}=ue.add(this.Gh|0,this.Gl|0,f|0,v|0),{h:m,l:_}=ue.add(this.Hh|0,this.Hl|0,m|0,_|0),this.set(o,i,s,c,h,n,l,p,d,a,u,g,f,v,m,_)}roundClean(){Bt.fill(0),$t.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Do=class extends pr{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},Mo=class extends pr{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},Bo=class extends pr{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}},Ur=gt(()=>new pr),Xp=gt(()=>new Do),Qp=gt(()=>new Mo),e3=gt(()=>new Bo);var a2=t=>t[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function ra(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function na(t){let e=ra(t),r=e.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:r}}function oa(t){Ne.bytes(t,16,20,24,28,32)}function ia(t,e=128){if(Ne.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return u2(yt(e/8),t)}var c2=t=>{let e=8-t.length/4;return new Uint8Array([$e(t)[0]>>e<<e])};function sa(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),Pr.chain(Pr.checksum(1,c2),Pr.radix2(11,!0),Pr.alphabet(t))}function l2(t,e){let{words:r}=na(t),o=sa(e).decode(r);return oa(o),o}function u2(t,e){return oa(t),sa(e).encode(t).join(a2(e)?"\u3000":" ")}function aa(t,e){try{l2(t,e)}catch{return!1}return!0}var f2=t=>ra(`mnemonic${t}`);function ca(t,e=""){return ea(Ur,na(t).nfkd,f2(e),{c:2048,dkLen:64})}var d2=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),ua=Uint8Array.from({length:16},(t,e)=>e),h2=ua.map(t=>(9*t+5)%16),Ho=[ua],jo=[h2];for(let t=0;t<4;t++)for(let e of[Ho,jo])e.push(e[t].map(r=>d2[r]));var fa=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),p2=Ho.map((t,e)=>t.map(r=>fa[e][r])),g2=jo.map((t,e)=>t.map(r=>fa[e][r])),y2=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),m2=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),wn=(t,e)=>t<<e|t>>>32-e;function la(t,e,r,o){return t===0?e^r^o:t===1?e&r|~e&o:t===2?(e|~r)^o:t===3?e&o|r&~o:e^(r|~o)}var vn=new Uint32Array(16),$o=class extends Pt{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){let{h0:e,h1:r,h2:o,h3:i,h4:s}=this;return[e,r,o,i,s]}set(e,r,o,i,s){this.h0=e|0,this.h1=r|0,this.h2=o|0,this.h3=i|0,this.h4=s|0}process(e,r){for(let u=0;u<16;u++,r+=4)vn[u]=e.getUint32(r,!0);let o=this.h0|0,i=o,s=this.h1|0,c=s,h=this.h2|0,n=h,l=this.h3|0,p=l,d=this.h4|0,a=d;for(let u=0;u<5;u++){let g=4-u,f=y2[u],v=m2[u],m=Ho[u],_=jo[u],y=p2[u],E=g2[u];for(let x=0;x<16;x++){let b=wn(o+la(u,s,h,l)+vn[m[x]]+f,y[x])+d|0;o=d,d=l,l=wn(h,10)|0,h=s,s=b}for(let x=0;x<16;x++){let b=wn(i+la(g,c,n,p)+vn[_[x]]+v,E[x])+a|0;i=a,a=p,p=wn(n,10)|0,n=c,c=b}}this.set(this.h1+h+p|0,this.h2+l+a|0,this.h3+d+i|0,this.h4+o+c|0,this.h0+s+n|0)}roundClean(){vn.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}},da=gt(()=>new $o);var En=je.ProjectivePoint,Fo=Xs($e);function ha(t){return BigInt(`0x${Ie(t)}`)}function b2(t){return Lt(t.toString(16).padStart(64,"0"))}var w2=po("Bitcoin seed"),Vo={private:76066276,public:76067358},Wo=2147483648,v2=t=>da($e(t)),E2=t=>pt(t).getUint32(0,!1),_n=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);let e=new Uint8Array(4);return pt(e).setUint32(0,t,!1),e},Cn=class t{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return E2(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){let e=this.privateKey;if(!e)throw new Error("No private key");return Fo.encode(this.serialize(this.versions.private,rt(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Fo.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,r=Vo){if(kt(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);let o=Xe(Ur,w2,e);return new t({versions:r,chainCode:o.slice(32),privateKey:o.slice(0,32)})}static fromExtendedKey(e,r=Vo){let o=Fo.decode(e),i=pt(o),s=i.getUint32(0,!1),c={versions:r,depth:o[4],parentFingerprint:i.getUint32(5,!1),index:i.getUint32(9,!1),chainCode:o.slice(13,45)},h=o.slice(45),n=h[0]===0;if(s!==r[n?"private":"public"])throw new Error("Version mismatch");return n?new t({...c,privateKey:h.slice(1)}):new t({...c,publicKey:h})}static fromJSON(e){return t.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Vo,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!je.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:ha(e.privateKey),this.privKeyBytes=b2(this.privKey),this.pubKey=je.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=En.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=v2(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;let r=e.replace(/^[mM]'?\//,"").split("/"),o=this;for(let i of r){let s=/^(\d+)('?)$/.exec(i);if(!s||s.length!==3)throw new Error(`Invalid child index: ${i}`);let c=+s[1];if(!Number.isSafeInteger(c)||c>=Wo)throw new Error("Invalid index");s[2]==="'"&&(c+=Wo),o=o.deriveChild(c)}return o}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=_n(e);if(e>=Wo){let h=this.privateKey;if(!h)throw new Error("Could not derive hardened child key");r=rt(new Uint8Array([0]),h,r)}else r=rt(this.pubKey,r);let o=Xe(Ur,this.chainCode,r),i=ha(o.slice(0,32)),s=o.slice(32);if(!je.utils.isValidPrivateKey(i))throw new Error("Tweak bigger than curve order");let c={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){let h=Ae(this.privKey+i,je.CURVE.n);if(!je.utils.isValidPrivateKey(h))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=h}else{let h=En.fromHex(this.pubKey).add(En.fromPrivateKey(i));if(h.equals(En.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=h.toRawBytes(!0)}return new t(c)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return kt(e,32),je.sign(e,this.privKey).toCompactRawBytes()}verify(e,r){if(kt(e,32),kt(r,64),!this.publicKey)throw new Error("No publicKey set!");let o;try{o=je.Signature.fromCompact(r)}catch{return!1}return je.verify(o,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,r){if(!this.chainCode)throw new Error("No chainCode set");return kt(r,33),rt(_n(e),new Uint8Array([this.depth]),_n(this.parentFingerprint),_n(this.index),this.chainCode,r)}};var _2=t=>t instanceof Uint8Array;var Nt=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));var C2=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!C2)throw new Error("Non little-endian hardware is not supported");function xn(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function An(t){if(typeof t=="string"&&(t=xn(t)),!_2(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}var x2=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function pa(t,e){if(e!==void 0&&(typeof e!="object"||!x2(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function gr(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function Zo(t,e){if(t.length!==e.length)throw new Error("equalBytes: Different size of Uint8Arrays");let r=!0;for(let o=0;o<t.length;o++)r&&(r=t[o]===e[o]);return r}function Ko(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function A2(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function ga(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function O2(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");Ko(t.outputLen),Ko(t.blockLen)}function S2(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function N2(t,e){ga(t);let r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}var T2={number:Ko,bool:A2,bytes:ga,hash:O2,exists:S2,output:N2},qe=T2;var Ze=(t,e)=>t[e++]&255|(t[e++]&255)<<8,zo=class{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=An(e),gr(e,32);let r=Ze(e,0),o=Ze(e,2),i=Ze(e,4),s=Ze(e,6),c=Ze(e,8),h=Ze(e,10),n=Ze(e,12),l=Ze(e,14);this.r[0]=r&8191,this.r[1]=(r>>>13|o<<3)&8191,this.r[2]=(o>>>10|i<<6)&7939,this.r[3]=(i>>>7|s<<9)&8191,this.r[4]=(s>>>4|c<<12)&255,this.r[5]=c>>>1&8190,this.r[6]=(c>>>14|h<<2)&8191,this.r[7]=(h>>>11|n<<5)&8065,this.r[8]=(n>>>8|l<<8)&8191,this.r[9]=l>>>5&127;for(let p=0;p<8;p++)this.pad[p]=Ze(e,16+2*p)}process(e,r,o=!1){let i=o?0:2048,{h:s,r:c}=this,h=c[0],n=c[1],l=c[2],p=c[3],d=c[4],a=c[5],u=c[6],g=c[7],f=c[8],v=c[9],m=Ze(e,r+0),_=Ze(e,r+2),y=Ze(e,r+4),E=Ze(e,r+6),x=Ze(e,r+8),b=Ze(e,r+10),N=Ze(e,r+12),O=Ze(e,r+14),w=s[0]+(m&8191),C=s[1]+((m>>>13|_<<3)&8191),A=s[2]+((_>>>10|y<<6)&8191),S=s[3]+((y>>>7|E<<9)&8191),k=s[4]+((E>>>4|x<<12)&8191),L=s[5]+(x>>>1&8191),U=s[6]+((x>>>14|b<<2)&8191),M=s[7]+((b>>>11|N<<5)&8191),H=s[8]+((N>>>8|O<<8)&8191),Z=s[9]+(O>>>5|i),j=0,$=j+w*h+C*(5*v)+A*(5*f)+S*(5*g)+k*(5*u);j=$>>>13,$&=8191,$+=L*(5*a)+U*(5*d)+M*(5*p)+H*(5*l)+Z*(5*n),j+=$>>>13,$&=8191;let D=j+w*n+C*h+A*(5*v)+S*(5*f)+k*(5*g);j=D>>>13,D&=8191,D+=L*(5*u)+U*(5*a)+M*(5*d)+H*(5*p)+Z*(5*l),j+=D>>>13,D&=8191;let F=j+w*l+C*n+A*h+S*(5*v)+k*(5*f);j=F>>>13,F&=8191,F+=L*(5*g)+U*(5*u)+M*(5*a)+H*(5*d)+Z*(5*p),j+=F>>>13,F&=8191;let K=j+w*p+C*l+A*n+S*h+k*(5*v);j=K>>>13,K&=8191,K+=L*(5*f)+U*(5*g)+M*(5*u)+H*(5*a)+Z*(5*d),j+=K>>>13,K&=8191;let W=j+w*d+C*p+A*l+S*n+k*h;j=W>>>13,W&=8191,W+=L*(5*v)+U*(5*f)+M*(5*g)+H*(5*u)+Z*(5*a),j+=W>>>13,W&=8191;let T=j+w*a+C*d+A*p+S*l+k*n;j=T>>>13,T&=8191,T+=L*h+U*(5*v)+M*(5*f)+H*(5*g)+Z*(5*u),j+=T>>>13,T&=8191;let I=j+w*u+C*a+A*d+S*p+k*l;j=I>>>13,I&=8191,I+=L*n+U*h+M*(5*v)+H*(5*f)+Z*(5*g),j+=I>>>13,I&=8191;let R=j+w*g+C*u+A*a+S*d+k*p;j=R>>>13,R&=8191,R+=L*l+U*n+M*h+H*(5*v)+Z*(5*f),j+=R>>>13,R&=8191;let P=j+w*f+C*g+A*u+S*a+k*d;j=P>>>13,P&=8191,P+=L*p+U*l+M*n+H*h+Z*(5*v),j+=P>>>13,P&=8191;let V=j+w*v+C*f+A*g+S*u+k*a;j=V>>>13,V&=8191,V+=L*d+U*p+M*l+H*n+Z*h,j+=V>>>13,V&=8191,j=(j<<2)+j|0,j=j+$|0,$=j&8191,j=j>>>13,D+=j,s[0]=$,s[1]=D,s[2]=F,s[3]=K,s[4]=W,s[5]=T,s[6]=I,s[7]=R,s[8]=P,s[9]=V}finalize(){let{h:e,pad:r}=this,o=new Uint16Array(10),i=e[1]>>>13;e[1]&=8191;for(let h=2;h<10;h++)e[h]+=i,i=e[h]>>>13,e[h]&=8191;e[0]+=i*5,i=e[0]>>>13,e[0]&=8191,e[1]+=i,i=e[1]>>>13,e[1]&=8191,e[2]+=i,o[0]=e[0]+5,i=o[0]>>>13,o[0]&=8191;for(let h=1;h<10;h++)o[h]=e[h]+i,i=o[h]>>>13,o[h]&=8191;o[9]-=8192;let s=(i^1)-1;for(let h=0;h<10;h++)o[h]&=s;s=~s;for(let h=0;h<10;h++)e[h]=e[h]&s|o[h];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let c=e[0]+r[0];e[0]=c&65535;for(let h=1;h<8;h++)c=(e[h]+r[h]|0)+(c>>>16)|0,e[h]=c&65535}update(e){qe.exists(this);let{buffer:r,blockLen:o}=this;e=An(e);let i=e.length;for(let s=0;s<i;){let c=Math.min(o-this.pos,i-s);if(c===o){for(;o<=i-s;s+=o)this.process(e,s);continue}r.set(e.subarray(s,s+c),this.pos),this.pos+=c,s+=c,this.pos===o&&(this.process(r,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){qe.exists(this),qe.output(e,this),this.finished=!0;let{buffer:r,h:o}=this,{pos:i}=this;if(i){for(r[i++]=1;i<16;i++)r[i]=0;this.process(r,0,!0)}this.finalize();let s=0;for(let c=0;c<8;c++)e[s++]=o[c]>>>0,e[s++]=o[c]>>>8;return e}digest(){let{buffer:e,outputLen:r}=this;this.digestInto(e);let o=e.slice(0,r);return this.destroy(),o}};function R2(t){let e=(o,i)=>t(i).update(An(o)).digest(),r=t(new Uint8Array(32));return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=o=>t(o),e}var I2=R2(t=>new zo(t));var k2=xn("expand 16-byte k"),L2=xn("expand 32-byte k"),P2=Nt(k2),U2=Nt(L2),ya=t=>!(t.byteOffset%4),ma=t=>{let{core:e,rounds:r,counterRight:o,counterLen:i,allow128bitKeys:s,extendNonceFn:c,blockLen:h}=pa({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);qe.number(i),qe.number(r),qe.number(h),qe.bool(o),qe.bool(s);let n=h/4;if(h%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(l,p,d,a,u=0)=>{if(qe.bytes(l),qe.bytes(p),qe.bytes(d),a||(a=new Uint8Array(d.length)),qe.bytes(a),qe.number(u),u<0||u>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(a.length<d.length)throw new Error(`Salsa/ChaCha: output (${a.length}) is shorter than data (${d.length})`);let g=[],f,v;if(l.length===32)f=l,v=U2;else if(l.length===16&&s)f=new Uint8Array(32),f.set(l),f.set(l,16),v=P2,g.push(f);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${l.length}`);if(c){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");f=c(v,f,p.subarray(0,16),new Uint8Array(32)),g.push(f),p=p.subarray(16)}let m=16-i;if(p.length!==m)throw new Error(`Salsa/ChaCha: nonce must be ${m} or 16 bytes`);if(m!==12){let w=new Uint8Array(12);w.set(p,o?0:12-p.length),g.push(p=w)}let _=new Uint8Array(h),y=Nt(_),E=Nt(f),x=Nt(p),b=ya(d)&&Nt(d),N=ya(a)&&Nt(a);g.push(y);let O=d.length;for(let w=0,C=u;w<O;C++){if(e(v,E,x,y,C,r),C>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");let A=Math.min(h,O-w);if(A===h&&N&&b){let S=w/4;if(w%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let k=0;k<n;k++)N[S+k]=b[S+k]^y[k];w+=h;continue}for(let S=0;S<A;S++)a[w+S]=d[w+S]^_[S];w+=A}for(let w=0;w<g.length;w++)g[w].fill(0);return a}};var de=(t,e)=>t<<e|t>>>32-e;function D2(t,e,r,o,i,s=20){let c=t[0],h=t[1],n=t[2],l=t[3],p=e[0],d=e[1],a=e[2],u=e[3],g=e[4],f=e[5],v=e[6],m=e[7],_=i,y=r[0],E=r[1],x=r[2],b=c,N=h,O=n,w=l,C=p,A=d,S=a,k=u,L=g,U=f,M=v,H=m,Z=_,j=y,$=E,D=x;for(let K=0;K<s;K+=2)b=b+C|0,Z=de(Z^b,16),L=L+Z|0,C=de(C^L,12),b=b+C|0,Z=de(Z^b,8),L=L+Z|0,C=de(C^L,7),N=N+A|0,j=de(j^N,16),U=U+j|0,A=de(A^U,12),N=N+A|0,j=de(j^N,8),U=U+j|0,A=de(A^U,7),O=O+S|0,$=de($^O,16),M=M+$|0,S=de(S^M,12),O=O+S|0,$=de($^O,8),M=M+$|0,S=de(S^M,7),w=w+k|0,D=de(D^w,16),H=H+D|0,k=de(k^H,12),w=w+k|0,D=de(D^w,8),H=H+D|0,k=de(k^H,7),b=b+A|0,D=de(D^b,16),M=M+D|0,A=de(A^M,12),b=b+A|0,D=de(D^b,8),M=M+D|0,A=de(A^M,7),N=N+S|0,Z=de(Z^N,16),H=H+Z|0,S=de(S^H,12),N=N+S|0,Z=de(Z^N,8),H=H+Z|0,S=de(S^H,7),O=O+k|0,j=de(j^O,16),L=L+j|0,k=de(k^L,12),O=O+k|0,j=de(j^O,8),L=L+j|0,k=de(k^L,7),w=w+C|0,$=de($^w,16),U=U+$|0,C=de(C^U,12),w=w+C|0,$=de($^w,8),U=U+$|0,C=de(C^U,7);let F=0;o[F++]=c+b|0,o[F++]=h+N|0,o[F++]=n+O|0,o[F++]=l+w|0,o[F++]=p+C|0,o[F++]=d+A|0,o[F++]=a+S|0,o[F++]=u+k|0,o[F++]=g+L|0,o[F++]=f+U|0,o[F++]=v+M|0,o[F++]=m+H|0,o[F++]=_+Z|0,o[F++]=y+j|0,o[F++]=E+$|0,o[F++]=x+D|0}var qo=ma({core:D2,counterRight:!1,counterLen:4,allow128bitKeys:!1});function M2(t,e,r){return Ne.hash(t),r===void 0&&(r=new Uint8Array(t.outputLen)),Xe(t,ct(r),ct(e))}var Yo=new Uint8Array([0]),ba=new Uint8Array;function B2(t,e,r,o=32){if(Ne.hash(t),Ne.number(o),o>255*t.outputLen)throw new Error("Length should be <= 255*HashLen");let i=Math.ceil(o/t.outputLen);r===void 0&&(r=ba);let s=new Uint8Array(i*t.outputLen),c=Xe.create(t,e),h=c._cloneInto(),n=new Uint8Array(c.outputLen);for(let l=0;l<i;l++)Yo[0]=l+1,h.update(l===0?ba:n).update(r).update(Yo).digestInto(n),s.set(n,t.outputLen*l),c._cloneInto(h);return c.destroy(),h.destroy(),n.fill(0),Yo.fill(0),s.slice(0,o)}var wa=(t,e,r,o,i)=>B2(t,M2(t,e,r),o,i);var $2=Object.defineProperty,Le=(t,e)=>{for(var r in e)$2(t,r,{get:e[r],enumerable:!0})};function Ea(){return Ie(Ot.utils.randomPrivateKey())}function Sn(t){return Ie(Ot.getPublicKey(t))}var H2={};Le(H2,{MessageNode:()=>_a,MessageQueue:()=>Ca,insertEventIntoAscendingList:()=>V2,insertEventIntoDescendingList:()=>F2,normalizeURL:()=>j2,utf8Decoder:()=>vt,utf8Encoder:()=>it});var vt=new TextDecoder("utf-8"),it=new TextEncoder;function j2(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function F2(t,e){let r=0,o=t.length-1,i,s=r;if(o<0)s=0;else if(e.created_at<t[o].created_at)s=o+1;else if(e.created_at>=t[r].created_at)s=r;else for(;;){if(o<=r+1){s=o;break}if(i=Math.floor(r+(o-r)/2),t[i].created_at>e.created_at)r=i;else if(t[i].created_at<e.created_at)o=i;else{s=i;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function V2(t,e){let r=0,o=t.length-1,i,s=r;if(o<0)s=0;else if(e.created_at>t[o].created_at)s=o+1;else if(e.created_at<=t[r].created_at)s=r;else for(;;){if(o<=r+1){s=o;break}if(i=Math.floor(r+(o-r)/2),t[i].created_at<e.created_at)r=i;else if(t[i].created_at>e.created_at)o=i;else{s=i;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}var _a=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},Ca=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){let e=new _a(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},yr=Symbol("verified");function W2(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Et(t,e){let r=t;return r.pubkey=Sn(e),r.id=mr(r),r.sig=K2(r,e),r[yr]=!0,r}function G2(t){if(!Jo(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function mr(t){let e=$e(it.encode(G2(t)));return Ie(e)}var Z2=t=>t instanceof Object;function Jo(t){if(!Z2(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let r=t.tags[e];if(!Array.isArray(r))return!1;for(let o=0;o<r.length;o++)if(typeof r[o]=="object")return!1}return!0}function Nn(t){if(typeof t[yr]=="boolean")return t[yr];let e=mr(t);if(e!==t.id)return t[yr]=!1;try{return t[yr]=Ot.verify(t.sig,e,t.pubkey)}catch{return t[yr]=!1}}function K2(t,e){return Ie(Ot.sign(mr(t),e))}function z2(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(r=>e.id.startsWith(r))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(r=>e.pubkey.startsWith(r)))return!1;for(let r in t)if(r[0]==="#"){let o=r.slice(1),i=t[`#${o}`];if(i&&!e.tags.find(([s,c])=>s===r.slice(1)&&i.indexOf(c)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function q2(t,e){for(let r=0;r<t.length;r++)if(z2(t[r],e))return!0;return!1}var Y2={};Le(Y2,{getHex64:()=>Tn,getInt:()=>xa,getSubscriptionId:()=>Aa,matchEventId:()=>J2,matchEventKind:()=>Q2,matchEventPubkey:()=>X2});function Tn(t,e){let r=e.length+3,o=t.indexOf(`"${e}":`)+r,i=t.slice(o).indexOf('"')+o+1;return t.slice(i,i+64)}function xa(t,e){let r=e.length,o=t.indexOf(`"${e}":`)+r+3,i=t.slice(o),s=Math.min(i.indexOf(","),i.indexOf("}"));return parseInt(i.slice(0,s),10)}function Aa(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let r=t.slice(e+7+1).indexOf('"');if(r===-1)return null;let o=e+7+1+r,i=t.slice(o+1,80).indexOf('"');if(i===-1)return null;let s=o+1+i;return t.slice(o+1,s)}function J2(t,e){return e===Tn(t,"id")}function X2(t,e){return e===Tn(t,"pubkey")}function Q2(t,e){return e===xa(t,"kind")}var va=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function Oa(t,e={}){let{listTimeout:r=3e3,getTimeout:o=3e3,countTimeout:i=3e3}=e;var s,c={},h=va(),n={},l={},p;async function d(){return p||(p=new Promise((m,_)=>{try{s=new WebSocket(t)}catch(b){_(b)}s.onopen=()=>{h.connect.forEach(b=>b()),m()},s.onerror=()=>{p=void 0,h.error.forEach(b=>b()),_()},s.onclose=async()=>{p=void 0,h.disconnect.forEach(b=>b())};let y=new Ca,E;s.onmessage=b=>{y.enqueue(b.data),E||(E=setInterval(x,0))};function x(){if(y.size===0){clearInterval(E),E=null;return}var b=y.dequeue();if(!b)return;let N=Aa(b);if(N){let O=c[N];if(O&&O.alreadyHaveEvent&&O.alreadyHaveEvent(Tn(b,"id"),t))return}try{let O=JSON.parse(b);switch(O[0]){case"EVENT":{let S=O[1],k=O[2];Jo(k)&&c[S]&&(c[S].skipVerification||Nn(k))&&q2(c[S].filters,k)&&(c[S],(n[S]?.event||[]).forEach(L=>L(k)));return}case"COUNT":let w=O[1],C=O[2];c[w]&&(n[w]?.count||[]).forEach(S=>S(C));return;case"EOSE":{let S=O[1];S in n&&(n[S].eose.forEach(k=>k()),n[S].eose=[]);return}case"OK":{let S=O[1],k=O[2],L=O[3]||"";if(S in l){let{resolve:U,reject:M}=l[S];k?U(null):M(new Error(L))}return}case"NOTICE":let A=O[1];h.notice.forEach(S=>S(A));return;case"AUTH":{let S=O[1];h.auth?.forEach(k=>k(S));return}}}catch{return}}}),p)}function a(){return s?.readyState===1}async function u(){a()||await d()}async function g(m){let _=JSON.stringify(m);if(!(!a()&&(await new Promise(y=>setTimeout(y,1e3)),!a())))try{s.send(_)}catch(y){console.log(y)}}let f=(m,{verb:_="REQ",skipVerification:y=!1,alreadyHaveEvent:E=null,id:x=Math.random().toString().slice(2)}={})=>{let b=x;c[b]={id:b,filters:m,skipVerification:y,alreadyHaveEvent:E},g([_,b,...m]);let N={sub:(O,w={})=>f(O||m,{skipVerification:w.skipVerification||y,alreadyHaveEvent:w.alreadyHaveEvent||E,id:b}),unsub:()=>{delete c[b],delete n[b],g(["CLOSE",b])},on:(O,w)=>{n[b]=n[b]||{event:[],count:[],eose:[]},n[b][O].push(w)},off:(O,w)=>{let C=n[b],A=C[O].indexOf(w);A>=0&&C[O].splice(A,1)},get events(){return ef(N)}};return N};function v(m,_){return new Promise((y,E)=>{if(!m.id){E(new Error(`event ${m} has no id`));return}let x=m.id;g([_,m]),l[x]={resolve:y,reject:E}})}return{url:t,sub:f,on:(m,_)=>{h[m].push(_),m==="connect"&&s?.readyState===1&&_()},off:(m,_)=>{let y=h[m].indexOf(_);y!==-1&&h[m].splice(y,1)},list:(m,_)=>new Promise(y=>{let E=f(m,_),x=[],b=setTimeout(()=>{E.unsub(),y(x)},r);E.on("eose",()=>{E.unsub(),clearTimeout(b),y(x)}),E.on("event",N=>{x.push(N)})}),get:(m,_)=>new Promise(y=>{let E=f([m],_),x=setTimeout(()=>{E.unsub(),y(null)},o);E.on("event",b=>{E.unsub(),clearTimeout(x),y(b)})}),count:m=>new Promise(_=>{let y=f(m,{...f,verb:"COUNT"}),E=setTimeout(()=>{y.unsub(),_(null)},i);y.on("count",x=>{y.unsub(),clearTimeout(E),_(x)})}),async publish(m){await v(m,"EVENT")},async auth(m){await v(m,"AUTH")},connect:u,close(){h=va(),n={},l={},s?.readyState===WebSocket.OPEN&&s.close()},get status(){return s?.readyState??3}}}async function*ef(t){let e,r=[],o=i=>{e?(e(i),e=void 0):r.push(i)};t.on("event",o);try{for(;;)r.length>0?yield r.shift():yield await new Promise(s=>{e=s})}finally{t.off("event",o)}}var Rn={};Le(Rn,{BECH32_REGEX:()=>Na,decode:()=>In,naddrEncode:()=>cf,neventEncode:()=>af,noteEncode:()=>of,nprofileEncode:()=>sf,npubEncode:()=>nf,nrelayEncode:()=>lf,nsecEncode:()=>rf});var Sa=5e3,Na=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function tf(t){let e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function In(t){let{prefix:e,words:r}=Mt.decode(t,Sa),o=new Uint8Array(Mt.fromWords(r));switch(e){case"nprofile":{let i=On(o);if(!i[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Ie(i[0][0]),relays:i[1]?i[1].map(s=>vt.decode(s)):[]}}}case"nevent":{let i=On(o);if(!i[0]?.[0])throw new Error("missing TLV 0 for nevent");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(i[2]&&i[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(i[3]&&i[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:Ie(i[0][0]),relays:i[1]?i[1].map(s=>vt.decode(s)):[],author:i[2]?.[0]?Ie(i[2][0]):void 0,kind:i[3]?.[0]?parseInt(Ie(i[3][0]),16):void 0}}}case"naddr":{let i=On(o);if(!i[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!i[2]?.[0])throw new Error("missing TLV 2 for naddr");if(i[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!i[3]?.[0])throw new Error("missing TLV 3 for naddr");if(i[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:vt.decode(i[0][0]),pubkey:Ie(i[2][0]),kind:parseInt(Ie(i[3][0]),16),relays:i[1]?i[1].map(s=>vt.decode(s)):[]}}}case"nrelay":{let i=On(o);if(!i[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:vt.decode(i[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:Ie(o)};default:throw new Error(`unknown prefix ${e}`)}}function On(t){let e={},r=t;for(;r.length>0;){let o=r[0],i=r[1];if(!i)throw new Error(`malformed TLV ${o}`);let s=r.slice(2,2+i);if(r=r.slice(2+i),s.length<i)throw new Error(`not enough data to read on TLV ${o}`);e[o]=e[o]||[],e[o].push(s)}return e}function rf(t){return Xo("nsec",t)}function nf(t){return Xo("npub",t)}function of(t){return Xo("note",t)}function Dr(t,e){let r=Mt.toWords(e);return Mt.encode(t,r,Sa)}function Xo(t,e){let r=Lt(e);return Dr(t,r)}function sf(t){let e=kn({0:[Lt(t.pubkey)],1:(t.relays||[]).map(r=>it.encode(r))});return Dr("nprofile",e)}function af(t){let e;t.kind!=null&&(e=tf(t.kind));let r=kn({0:[Lt(t.id)],1:(t.relays||[]).map(o=>it.encode(o)),2:t.author?[Lt(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return Dr("nevent",r)}function cf(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let r=kn({0:[it.encode(t.identifier)],1:(t.relays||[]).map(o=>it.encode(o)),2:[Lt(t.pubkey)],3:[new Uint8Array(e)]});return Dr("naddr",r)}function lf(t){let e=kn({0:[it.encode(t)]});return Dr("nrelay",e)}function kn(t){let e=[];return Object.entries(t).forEach(([r,o])=>{o.forEach(i=>{let s=new Uint8Array(i.length+2);s.set([parseInt(r)],0),s.set([i.length],1),s.set(i,2),e.push(s)})}),rt(...e)}var Ln={};Le(Ln,{decrypt:()=>uf,encrypt:()=>Ta});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function Ta(t,e,r){let o=je.getSharedSecret(t,"02"+e),i=Ra(o),s=Uint8Array.from(yt(16)),c=it.encode(r),h=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["encrypt"]),n=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},h,c),l=ot.encode(new Uint8Array(n)),p=ot.encode(new Uint8Array(s.buffer));return`${l}?iv=${p}`}async function uf(t,e,r){let[o,i]=r.split("?iv="),s=je.getSharedSecret(t,"02"+e),c=Ra(s),h=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),n=ot.decode(o),l=ot.decode(i),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:l},h,n);return vt.decode(p)}function Ra(t){return t.slice(1,33)}var ff={};Le(ff,{NIP05_REGEX:()=>Ia,queryProfile:()=>pf,searchDomain:()=>hf,useFetchImplementation:()=>df});var Ia=/^(?:([\w.+-]+)@)?([\w.-]+)$/,Pn;try{Pn=fetch}catch{}function df(t){Pn=t}async function hf(t,e=""){try{return(await(await Pn(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function pf(t){let e=t.match(Ia);if(!e)return null;let[r,o="_",i]=e;try{let s=await Pn(`https://${i}/.well-known/nostr.json?name=${o}`),{names:c,relays:h}=gf(await s.json()),n=c[o];return n?{pubkey:n,relays:h?.[n]}:null}catch{return null}}function gf(t){let e={names:{}};for(let[r,o]of Object.entries(t.names))typeof r=="string"&&typeof o=="string"&&(e.names[r]=o);if(t.relays){e.relays={};for(let[r,o]of Object.entries(t.relays))typeof r=="string"&&Array.isArray(o)&&(e.relays[r]=o.filter(i=>typeof i=="string"))}return e}var yf={};Le(yf,{generateSeedWords:()=>bf,privateKeyFromSeedWords:()=>mf,validateWords:()=>wf});function mf(t,e){let o=Cn.fromMasterSeed(ca(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!o)throw new Error("could not derive private key");return Ie(o)}function bf(){return ia(Po)}function wf(t){return aa(t,Po)}var vf={};Le(vf,{parse:()=>Ef});function Ef(t){let e={reply:void 0,root:void 0,mentions:[],profiles:[]},r=[];for(let o of t.tags)o[0]==="e"&&o[1]&&r.push(o),o[0]==="p"&&o[1]&&e.profiles.push({pubkey:o[1],relays:o[2]?[o[2]]:[]});for(let o=0;o<r.length;o++){let i=r[o],[s,c,h,n]=i,l={id:c,relays:h?[h]:[]},p=o===0,d=o===r.length-1;if(n==="root"){e.root=l;continue}if(n==="reply"){e.reply=l;continue}if(n==="mention"){e.mentions.push(l);continue}if(p){e.root=l;continue}if(d){e.reply=l;continue}e.mentions.push(l)}return e}var _f={};Le(_f,{getPow:()=>ka,minePow:()=>Cf});function ka(t){let e=0;for(let r=0;r<t.length;r++){let o=parseInt(t[r],16);if(o===0)e+=4;else{e+=Math.clz32(o)-28;break}}return e}function Cf(t,e){let r=0,o=t,i=["nonce",r.toString(),e.toString()];for(o.tags.push(i);;){let s=Math.floor(new Date().getTime()/1e3);if(s!==o.created_at&&(r=0,o.created_at=s),i[1]=(++r).toString(),o.id=mr(o),ka(o.id)>=e)break}return o}var xf={};Le(xf,{finishRepostEvent:()=>Af,getRepostedEvent:()=>Of,getRepostedEventPointer:()=>La});function Af(t,e,r,o){return Et({kind:6,tags:[...t.tags??[],["e",e.id,r],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},o)}function La(t){if(t.kind!==6)return;let e,r;for(let o=t.tags.length-1;o>=0&&(e===void 0||r===void 0);o--){let i=t.tags[o];i.length>=2&&(i[0]==="e"&&e===void 0?e=i:i[0]==="p"&&r===void 0&&(r=i))}if(e!==void 0)return{id:e[1],relays:[e[2],r?.[2]].filter(o=>typeof o=="string"),author:r?.[1]}}function Of(t,{skipVerification:e}={}){let r=La(t);if(r===void 0||t.content==="")return;let o;try{o=JSON.parse(t.content)}catch{return}if(o.id===r.id&&!(!e&&!Nn(o)))return o}var Sf={};Le(Sf,{NOSTR_URI_REGEX:()=>Un,parse:()=>Tf,test:()=>Nf});var Un=new RegExp(`nostr:(${Na.source})`);function Nf(t){return typeof t=="string"&&new RegExp(`^${Un.source}$`).test(t)}function Tf(t){let e=t.match(new RegExp(`^${Un.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:In(e[1])}}var Rf={};Le(Rf,{finishReactionEvent:()=>If,getReactedEventPointer:()=>kf});function If(t,e,r){let o=e.tags.filter(i=>i.length>=2&&(i[0]==="e"||i[0]==="p"));return Et({...t,kind:7,tags:[...t.tags??[],...o,["e",e.id],["p",e.pubkey]],content:t.content??"+"},r)}function kf(t){if(t.kind!==7)return;let e,r;for(let o=t.tags.length-1;o>=0&&(e===void 0||r===void 0);o--){let i=t.tags[o];i.length>=2&&(i[0]==="e"&&e===void 0?e=i:i[0]==="p"&&r===void 0&&(r=i))}if(!(e===void 0||r===void 0))return{id:e[1],relays:[e[2],r[2]].filter(o=>o!==void 0),author:r[1]}}var Lf={};Le(Lf,{createDelegation:()=>Pf,getDelegator:()=>Uf});function Pf(t,e){let r=[];(e.kind||-1)>=0&&r.push(`kind=${e.kind}`),e.until&&r.push(`created_at<${e.until}`),e.since&&r.push(`created_at>${e.since}`);let o=r.join("&");if(o==="")throw new Error("refusing to create a delegation without any conditions");let i=$e(it.encode(`nostr:delegation:${e.pubkey}:${o}`)),s=Ie(Ot.sign(i,t));return{from:Sn(t),to:e.pubkey,cond:o,sig:s}}function Uf(t){let e=t.tags.find(h=>h[0]==="delegation"&&h.length>=4);if(!e)return null;let r=e[1],o=e[2],i=e[3],s=o.split("&");for(let h=0;h<s.length;h++){let[n,l,p]=s[h].split(/\b/);if(!(n==="kind"&&l==="="&&t.kind===parseInt(p))){if(n==="created_at"&&l==="<"&&t.created_at<parseInt(p))continue;if(n==="created_at"&&l===">"&&t.created_at>parseInt(p))continue;return null}}let c=$e(it.encode(`nostr:delegation:${t.pubkey}:${o}`));return Ot.verify(i,c,r)?r:null}var Df={};Le(Df,{matchAll:()=>Mf,regex:()=>Qo,replaceAll:()=>Bf});var Qo=()=>new RegExp(`\\b${Un.source}\\b`,"g");function*Mf(t){let e=t.matchAll(Qo());for(let r of e)try{let[o,i]=r;yield{uri:o,value:i,decoded:In(i),start:r.index,end:r.index+o.length}}catch{}}function Bf(t,e){return t.replaceAll(Qo(),(r,o)=>e({uri:r,value:o,decoded:In(o)}))}var $f={};Le($f,{channelCreateEvent:()=>Hf,channelHideMessageEvent:()=>Vf,channelMessageEvent:()=>Ff,channelMetadataEvent:()=>jf,channelMuteUserEvent:()=>Wf});var Hf=(t,e)=>{let r;if(typeof t.content=="object")r=JSON.stringify(t.content);else if(typeof t.content=="string")r=t.content;else return;return Et({kind:40,tags:[...t.tags??[]],content:r,created_at:t.created_at},e)},jf=(t,e)=>{let r;if(typeof t.content=="object")r=JSON.stringify(t.content);else if(typeof t.content=="string")r=t.content;else return;return Et({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:r,created_at:t.created_at},e)},Ff=(t,e)=>{let r=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&r.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Et({kind:42,tags:[...r,...t.tags??[]],content:t.content,created_at:t.created_at},e)},Vf=(t,e)=>{let r;if(typeof t.content=="object")r=JSON.stringify(t.content);else if(typeof t.content=="string")r=t.content;else return;return Et({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:r,created_at:t.created_at},e)},Wf=(t,e)=>{let r;if(typeof t.content=="object")r=JSON.stringify(t.content);else if(typeof t.content=="string")r=t.content;else return;return Et({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:r,created_at:t.created_at},e)},Gf={};Le(Gf,{useFetchImplementation:()=>Zf,validateGithub:()=>Kf});var ei;try{ei=fetch}catch{}function Zf(t){ei=t}async function Kf(t,e,r){try{return await(await ei(`https://gist.github.com/${e}/${r}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var zf={};Le(zf,{authenticate:()=>qf});var qf=async({challenge:t,relay:e,sign:r})=>{let o={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await r(o))},Yf={};Le(Yf,{decrypt:()=>Xf,encrypt:()=>Jf,utils:()=>tr});var tr={v2:{maxPlaintextSize:65408,minCiphertextSize:100,maxCiphertextSize:102400,getConversationKey(t,e){return je.getSharedSecret(t,"02"+e).subarray(1,33)},getMessageKeys(t,e){let r=wa($e,t,e,"nip44-v2",76);return{encryption:r.subarray(0,32),nonce:r.subarray(32,44),auth:r.subarray(44,76)}},calcPadding(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("expected positive integer");if(t<=32)return 32;let e=1<<Math.floor(Math.log2(t-1))+1,r=e<=256?32:e/8;return r*(Math.floor((t-1)/r)+1)},pad(t){let e=it.encode(t),r=e.length;if(r<1||r>=tr.v2.maxPlaintextSize)throw new Error("invalid plaintext length: must be between 1b and 64KB");let o=tr.v2.calcPadding(r),i=new Uint8Array(o-r),s=new Uint8Array(2);return new DataView(s.buffer).setUint16(0,r),rt(s,e,i)},unpad(t){let e=new DataView(t.buffer).getUint16(0),r=t.subarray(2,2+e);if(e===0||r.length!==e||t.length!==2+tr.v2.calcPadding(e))throw new Error("invalid padding");return vt.decode(r)}}};function Jf(t,e,r={}){let o=r.version??2;if(o!==2)throw new Error("unknown encryption version "+o);let i=r.salt??yt(32);gr(i,32);let s=tr.v2.getMessageKeys(t,i),c=tr.v2.pad(e),h=qo(s.encryption,s.nonce,c),n=Xe($e,s.auth,h);return ot.encode(rt(new Uint8Array([o]),i,h,n))}function Xf(t,e){let r=tr.v2;gr(t,32);let o=e.length;if(o<r.minCiphertextSize||o>=r.maxCiphertextSize)throw new Error("invalid ciphertext length: "+o);if(e[0]==="#")throw new Error("unknown encryption version");let i;try{i=ot.decode(e)}catch(a){throw new Error("invalid base64: "+a.message)}let s=i.subarray(0,1)[0];if(s!==2)throw new Error("unknown encryption version "+s);let c=i.subarray(1,33),h=i.subarray(33,-32),n=i.subarray(-32),l=r.getMessageKeys(t,c),p=Xe($e,l.auth,h);if(!Zo(p,n))throw new Error("invalid MAC");let d=qo(l.encryption,l.nonce,h);return r.unpad(d)}var Qf={};Le(Qf,{makeNwcRequestEvent:()=>td,parseConnectionString:()=>ed});function ed(t){let{pathname:e,searchParams:r}=new URL(t),o=e,i=r.get("relay"),s=r.get("secret");if(!o||!i||!s)throw new Error("invalid connection string");return{pubkey:o,relay:i,secret:s}}async function td({pubkey:t,secret:e,invoice:r}){let i=await Ta(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:r}})),s={kind:23194,created_at:Math.round(Date.now()/1e3),content:i,tags:[["p",t]]};return Et(s,e)}var rd={};Le(rd,{getZapEndpoint:()=>od,makeZapReceipt:()=>ad,makeZapRequest:()=>id,useFetchImplementation:()=>nd,validateZapRequest:()=>sd});var ti;try{ti=fetch}catch{}function nd(t){ti=t}async function od(t){try{let e="",{lud06:r,lud16:o}=JSON.parse(t.content);if(r){let{words:c}=Mt.decode(r,1e3),h=Mt.fromWords(c);e=vt.decode(h)}else if(o){let[c,h]=o.split("@");e=`https://${h}/.well-known/lnurlp/${c}`}else return null;let s=await(await ti(e)).json();if(s.allowsNostr&&s.nostrPubkey)return s.callback}catch{}return null}function id({profile:t,event:e,amount:r,relays:o,comment:i=""}){if(!r)throw new Error("amount not given");if(!t)throw new Error("profile not given");let s={kind:9734,created_at:Math.round(Date.now()/1e3),content:i,tags:[["p",t],["amount",r.toString()],["relays",...o]]};return e&&s.tags.push(["e",e]),s}function sd(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!Jo(e))return"Zap request is not a valid Nostr event.";if(!Nn(e))return"Invalid signature on zap request.";let r=e.tags.find(([s,c])=>s==="p"&&c);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let o=e.tags.find(([s,c])=>s==="e"&&c);return o&&!o[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([s,c])=>s==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function ad({zapRequest:t,preimage:e,bolt11:r,paidAt:o}){let s=JSON.parse(t).tags.filter(([h])=>h==="e"||h==="p"||h==="a"),c={kind:9735,created_at:Math.round(o.getTime()/1e3),content:"",tags:[...s,["bolt11",r],["description",t]]};return e&&c.tags.push(["preimage",e]),c}var cd={};Le(cd,{getToken:()=>ld,unpackEventFromToken:()=>Ua,validateEvent:()=>Da,validateToken:()=>ud});var Pa="Nostr ";async function ld(t,e,r,o=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");let i=W2(27235);i.tags=[["u",t],["method",e]],i.created_at=Math.round(new Date().getTime()/1e3);let s=await r(i);return(o?Pa:"")+ot.encode(it.encode(JSON.stringify(s)))}async function ud(t,e,r){let o=await Ua(t).catch(s=>{throw s});return await Da(o,e,r).catch(s=>{throw s})}async function Ua(t){if(!t)throw new Error("Missing token");t=t.replace(Pa,"");let e=vt.decode(ot.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function Da(t,e,r){if(!t)throw new Error("Invalid nostr event");if(!Nn(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");let o=t.tags.find(s=>s[0]==="u");if(o?.length!==1&&o?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");let i=t.tags.find(s=>s[0]==="method");if(i?.length!==1&&i?.[1].toLowerCase()!==r.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}function be(){return be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},be.apply(this,arguments)}function fd(t,e){if(t==null)return{};var r,o,i={},s=Object.keys(t);for(o=0;o<s.length;o++)e.indexOf(r=s[o])>=0||(i[r]=t[r]);return i}function dd(t){return Object.entries(t).map(([e,r])=>e&&r?`${e}=${r}`:"").filter(e=>e).join("&")}var ri=class extends Error{constructor(e,r,o,i){let s=e.toString();r&&(s+=` ${r}`),s+=": ",s+=i.message?i.message:JSON.stringify(i),super(s),this.status=void 0,this.statusText=void 0,this.headers=void 0,this.error=void 0,this.status=e,this.statusText=r,this.headers=o,this.error=i}};var hd=["auth","endpoint","params","request_body","method","max_retries","base_url","user_agent","headers"],pd="https://api.getalby.com";async function $a(t,e,r=0){let o=await fetch(t,e);if(o.status===429&&r>0){let i=Number(o.headers.get("x-rate-limit-reset")),s=Number(o.headers.get("x-rate-limit-remaining")),c=1e3*i-Date.now(),h=1e3;return s===0&&(h=c),await new Promise(n=>setTimeout(n,h)),$a(t,e,r-1)}return o}async function gd(t){let{auth:e,endpoint:r,params:o={},request_body:i,method:s,max_retries:c,base_url:h=pd,user_agent:n,headers:l}=t,p=fd(t,hd),d=new URL(h+r);d.search=dd(o);let a=s==="POST"&&!!i,u=e?await e.getAuthHeader(d.href,s):void 0,g=await $a(d.toString(),be({headers:be({},a?{"Content-Type":"application/json; charset=utf-8"}:void 0,u,l,{"User-Agent":n??"@getalby/sdk","X-User-Agent":n??"@getalby/sdk"}),method:s,body:a?JSON.stringify(i):void 0},p),c);if(!g.ok){let f=await g.json();throw new ri(g.status,g.statusText,g.headers,f)}return g}async function Fe(t){return(await gd(t)).json()}var ni=class{constructor(e){this.bearer_token=void 0,this.bearer_token=e}getAuthHeader(){return{Authorization:`Bearer ${this.bearer_token}`}}};var yd={alby:{authorizationUrl:"https://nwc.getalby.com/apps/new",relayUrl:"wss://relay.getalby.com/v1",walletPubkey:"69effe7b49a6dd5cf525bd0905917a5005ffe480b58eeb8e861418cf3ae760d9"}},Ma={get_info:"getInfo",get_balance:"getBalance",make_invoice:"makeInvoice",pay_invoice:"sendPayment",pay_keysend:"payKeysend",lookup_invoice:"lookupInvoice",list_transactions:"listTransactions"},Dn=class t{static parseWalletConnectUrl(e){e=e.replace("nostrwalletconnect://","http://").replace("nostr+walletconnect://","http://");let r=new URL(e),o={};o.walletPubkey=r.host;let i=r.searchParams.get("secret"),s=r.searchParams.get("relay");return i&&(o.secret=i),s&&(o.relayUrl=s),o}static withNewSecret(e){return(e=e||{}).secret=Ea(),new t(e)}constructor(e){var r;this.relay=void 0,this.relayUrl=void 0,this.secret=void 0,this.walletPubkey=void 0,this.options=void 0,this.subscribers=void 0,this._enabled=!1,e&&e.nostrWalletConnectUrl&&(e=be({},t.parseWalletConnectUrl(e.nostrWalletConnectUrl),e));let o=yd[((r=e)==null?void 0:r.providerName)||"alby"];this.options=be({},o,e||{}),this.relayUrl=this.options.relayUrl,this.relay=Oa(this.relayUrl),this.options.secret&&(this.secret=this.options.secret.toLowerCase().startsWith("nsec")?Rn.decode(this.options.secret).data:this.options.secret),this.walletPubkey=this.options.walletPubkey.toLowerCase().startsWith("npub")?Rn.decode(this.options.walletPubkey).data:this.options.walletPubkey,this.subscribers={},globalThis.WebSocket===void 0&&console.error("WebSocket is undefined. Make sure to `import websocket-polyfill` for nodejs environments")}on(e,r){this.subscribers[e]=r}notify(e,r){let o=this.subscribers[e];o&&o(r)}getNostrWalletConnectUrl(e=!0){let r=`nostr+walletconnect://${this.walletPubkey}?relay=${this.relayUrl}&pubkey=${this.publicKey}`;return e&&(r=`${r}&secret=${this.secret}`),r}get nostrWalletConnectUrl(){return this.getNostrWalletConnectUrl()}get connected(){return this.relay.status===1}get publicKey(){if(!this.secret)throw new Error("Missing secret key");return Sn(this.secret)}getPublicKey(){return Promise.resolve(this.publicKey)}signEvent(e){if(!this.secret)throw new Error("Missing secret key");return Promise.resolve(Et(e,this.secret))}getEventHash(e){return mr(e)}async enable(){this._enabled=!0}close(){return this.relay.close()}async encrypt(e,r){if(!this.secret)throw new Error("Missing secret");return await Ln.encrypt(this.secret,e,r)}async decrypt(e,r){if(!this.secret)throw new Error("Missing secret");return await Ln.decrypt(this.secret,e,r)}async getInfo(){await this.checkConnected();let e=["lightning","nostr"],r="Alby JS SDK";try{return await this.executeNip47Request("get_info",void 0,o=>!!o.methods,o=>({methods:o.methods.map(i=>Ma[i]),node:{alias:o.alias,pubkey:o.pubkey,color:o.color},supports:e,version:r}))}catch(o){return console.error("Failed to request get_info",o),{methods:["sendPayment"],node:{},supports:e,version:r}}}async getBalance(){return await this.checkConnected(),this.executeNip47Request("get_balance",void 0,e=>e.balance!==void 0,e=>({balance:Math.floor(e.balance/1e3),currency:"sats"}))}async sendPayment(e){return await this.checkConnected(),this.executeNip47Request("pay_invoice",{invoice:e},r=>!!r.preimage,r=>({preimage:r.preimage}))}async keysend(e){return await this.checkConnected(),this.executeNip47Request("pay_keysend",{amount:1e3*+e.amount,pubkey:e.destination,tlv_records:e.customRecords?Object.entries(e.customRecords).map(r=>({type:parseInt(r[0]),value:r[1]})):[]},r=>!!r.preimage,r=>({preimage:r.preimage}))}lnurl(e){throw new Error("Method not implemented.")}async makeInvoice(e){var r;await this.checkConnected();let o=typeof e=="object"?e:void 0,i=+((r=o?.amount)!=null?r:e);if(!i)throw new Error("No amount specified");return this.executeNip47Request("make_invoice",{amount:1e3*i,description:o?.defaultMemo},s=>!!s.invoice,s=>({paymentRequest:s.invoice}))}async lookupInvoice(e){return await this.checkConnected(),this.executeNip47Request("lookup_invoice",{invoice:e.paymentRequest,payment_hash:e.paymentHash},r=>!!r.invoice,r=>({preimage:r.preimage,paymentRequest:r.invoice,paid:!!r.settled_at}))}async listTransactions(e){return await this.checkConnected(),this.executeNip47Request("list_transactions",e,r=>!!r.transactions,r=>({transactions:r.transactions.map(md)}))}request(e,r){throw new Error("Method not implemented.")}signMessage(e){throw new Error("Method not implemented.")}verifyMessage(e,r){throw new Error("Method not implemented.")}getAuthorizationUrl(e){if(!this.options.authorizationUrl)throw new Error("Missing authorizationUrl option");let r=new URL(this.options.authorizationUrl);return e!=null&&e.name&&r.searchParams.set("name",e?.name),r.searchParams.set("pubkey",this.publicKey),e!=null&&e.returnTo&&r.searchParams.set("return_to",e.returnTo),e!=null&&e.budgetRenewal&&r.searchParams.set("budget_renewal",e.budgetRenewal),e!=null&&e.expiresAt&&r.searchParams.set("expires_at",Math.floor(e.expiresAt.getTime()/1e3).toString()),e!=null&&e.maxAmount&&r.searchParams.set("max_amount",e.maxAmount.toString()),e?.editable!==void 0&&r.searchParams.set("editable",e.editable.toString()),e!=null&&e.requestMethods&&r.searchParams.set("request_methods",e.requestMethods.join(" ")),r}initNWC(e={}){e.name||(e.name=document.location.host);let r=this.getAuthorizationUrl(e),o=window.outerHeight/2+window.screenY-300,i=window.outerWidth/2+window.screenX-200;return new Promise((s,c)=>{let h=window.open(r.toString(),`${document.title} - Wallet Connect`,`height=600,width=400,top=${o},left=${i}`);if(!h)return void c();let n=p=>{let d=p.data;d&&d.type==="nwc:success"&&p.origin===`${r.protocol}//${r.host}`&&(s(d),clearInterval(l),window.removeEventListener("message",n),h&&h.close())},l=setInterval(()=>{h&&h.closed&&(c(),clearInterval(l),window.removeEventListener("message",n))},500);window.addEventListener("message",n)})}async checkConnected(){if(!this._enabled)throw new Error("please call enable() and await the promise before calling this function");if(!this.secret)throw new Error("Missing secret key");await this.relay.connect()}executeNip47Request(e,r,o,i){var s=this;let c=Ma[e];return new Promise((h,n)=>{(async function(){let l={method:e,params:r},p=await s.encrypt(s.walletPubkey,JSON.stringify(l)),d={kind:23194,created_at:Math.floor(Date.now()/1e3),tags:[["p",s.walletPubkey]],content:p,pubkey:s.publicKey},a=await s.signEvent(d),u=s.relay.sub([{kinds:[23195],authors:[s.walletPubkey],"#e":[a.id]}]),g=setTimeout(function(){u.unsub(),n({error:`reply timeout: event ${a.id}`,code:"INTERNAL"})},6e4);u.on("event",async function(v){clearTimeout(g),u.unsub();let m=await s.decrypt(s.walletPubkey,v.content),_;try{_=JSON.parse(m)}catch{return void n({error:"invalid response",code:"INTERNAL"})}var y,E;v.kind==23195&&_.result?o(_.result)?(h(i(_.result)),s.notify(c,_.result)):n({error:"Response from NWC failed validation: "+JSON.stringify(_.result),code:"INTERNAL"}):n({error:(y=_.error)==null?void 0:y.message,code:(E=_.error)==null?void 0:E.code})});let f=setTimeout(function(){n({error:`Publish timeout: event ${a.id}`})},5e3);try{await s.relay.publish(a),clearTimeout(f)}catch(v){clearTimeout(f),n({error:`Failed to publish request: ${v}`})}})()})}};function md(t){return be({},t,{amount:Math.floor(t.amount/1e3),fees_paid:t.fees_paid?Math.floor(t.fees_paid/1e3):0})}var bd=Dn;function Ba(t){let e={};return t.recipient.customKey&&t.recipient.customValue&&(e[t.recipient.customKey]=t.recipient.customValue),e[7629169]=JSON.stringify(t.boostagram),{destination:t.recipient.address,amount:t.amount,customRecords:e}}var Mn=class{constructor(e,r){this.auth=void 0,this.defaultRequestOptions=void 0,this.auth=typeof e=="string"?new ni(e):e,this.defaultRequestOptions=be({},r,{user_agent:r?.user_agent})}accountBalance(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/balance",params:e,method:"GET"}))}accountSummary(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/user/summary",params:e,method:"GET"}))}accountInformation(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/user/me",params:e,method:"GET"}))}accountValue4Value(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/user/value4value",params:e,method:"GET"}))}incomingInvoices(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/invoices/incoming",params:e,method:"GET"}))}outgoingInvoices(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/invoices/outgoing",params:e,method:"GET"}))}invoices(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/invoices",params:e,method:"GET"}))}getInvoice(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:`/invoices/${e}`,method:"GET"}))}decodeInvoice(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:`/decode/bolt11/${e}`,method:"GET"}))}createInvoice(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/invoices",request_body:e,method:"POST"}))}keysend(e,r){let o,i;return Array.isArray(e)?(o="/payments/keysend/multi",i={keysends:e}):(o="/payments/keysend",i=e),Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:o,request_body:i,method:"POST"}))}sendPayment(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/payments/bolt11",request_body:e,method:"POST"}))}sendBoostagram(e,r){let o,i;return Array.isArray(e)?(o="/payments/keysend/multi",i={keysends:e.map(s=>Ba(s))}):(o="/payments/keysend",i=Ba(e)),Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:o,request_body:i,method:"POST"}))}sendToAlbyAccount(e,r){return console.warn("sendToAlbyAccount is deprecated. Please use sendBoostagramToAlbyAccount instead."),this.sendBoostagramToAlbyAccount(e,r)}sendBoostagramToAlbyAccount(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/payments/keysend",request_body:{destination:"030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3",customRecords:{696969:e.account},amount:e.amount,memo:e.memo},method:"POST"}))}createWebhookEndpoint(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/webhook_endpoints",request_body:e,method:"POST"}))}deleteWebhookEndpoint(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:`/webhook_endpoints/${e}`,method:"DELETE"}))}getSwapInfo(e){return Fe(be({auth:this.auth},this.defaultRequestOptions,e,{endpoint:"/swaps/info",method:"GET"}))}createSwap(e,r){return Fe(be({auth:this.auth},this.defaultRequestOptions,r,{endpoint:"/swaps",method:"POST",request_body:e}))}},Mr={__proto__:null,NostrWebLNProvider:Dn,NWC:bd,OauthWeblnProvider:class{constructor(t){this.client=void 0,this.auth=void 0,this.oauth=void 0,this.subscribers=void 0,this.isExecuting=void 0,this.auth=t.auth,this.client=new Mn(t.auth),this.oauth=!0,this.subscribers={},this.isExecuting=!1}on(t,e){this.subscribers[t]=e}notify(t,e){let r=this.subscribers[t];r&&r(e)}async enable(){var t;if(!this.isExecuting){if((t=this.auth.token)!=null&&t.access_token)return{enabled:!0};if(typeof window>"u"||window.document===void 0)throw new Error("Missing access token");try{this.isExecuting=!0,await this.openAuthorization()}finally{this.isExecuting=!1}}}async sendPayment(t){if(!this.isExecuting)try{this.isExecuting=!0;let e=await this.client.sendPayment({invoice:t});return this.notify("sendPayment",e),{preimage:e.payment_preimage}}catch(e){let r="Unknown Error";throw e instanceof Error&&(r=e.message),new Error(r)}finally{this.isExecuting=!1}}async keysend(t){if(!this.isExecuting)try{this.isExecuting=!0;let e=await this.client.keysend(t);return this.notify("keysend",e),{preimage:e.payment_preimage}}catch(e){let r="Unknown Error";throw e instanceof Error&&(r=e.message),new Error(r)}finally{this.isExecuting=!1}}async getInfo(){return{alias:"Alby"}}async makeInvoice(t){if(!this.isExecuting)try{this.isExecuting=!0;let e=await this.client.createInvoice({amount:parseInt(t.amount.toString()),description:t.defaultMemo});return this.notify("makeInvoice",e),{paymentRequest:e.payment_request}}catch(e){let r="Unknown Error";throw e instanceof Error&&(r=e.message),new Error(r)}finally{this.isExecuting=!1}}async openAuthorization(){var t=this;let e=window.outerHeight/2+window.screenY-350,r=window.outerWidth/2+window.screenX-300,o=await this.auth.generateAuthURL({code_challenge_method:"S256"});return new Promise((i,s)=>{let c=window.open(o,`${document.title} - WebLN enable`,`height=700,width=600,top=${e},left=${r}`),h=!1;window.addEventListener("message",async function(n){let l=n.data;if(l&&l.type==="alby:oauth:success"&&n.origin===`${document.location.protocol}//${document.location.host}`&&!h){h=!0,console.info("Processing OAuth code response");let p=l.payload.code;try{await t.auth.requestAccessToken(p),t.client=new Mn(t.auth),c&&c.close(),t.notify("enable"),i({enabled:!0})}catch(d){console.error(d),s({enabled:!1})}}})})}}};var Ha=t=>{let e,r=new Set,o=(p,d)=>{let a=typeof p=="function"?p(e):p;if(!Object.is(a,e)){let u=e;e=d??(typeof a!="object"||a===null)?a:Object.assign({},e,a),r.forEach(g=>g(e,u))}},i=()=>e,n={setState:o,getState:i,getInitialState:()=>l,subscribe:p=>(r.add(p),()=>r.delete(p)),destroy:()=>{(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},l=e=t(o,i,n);return n},ja=t=>t?Ha(t):Ha;var ii=class{constructor(e){this.storage=void 0,this.storage=e||{}}getItem(e){return this.storage[e]}setItem(e,r){this.storage[e]=r}};var C4=new ii;async function wd(t){let e=typeof t=="string"?new TextEncoder().encode(t):t,r=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map(o=>o.toString(16).padStart(2,"0")).join("")}var Fa,oi,vd=(Fa=function(t,e){function r(w){if(!Number.isSafeInteger(w))throw new Error(`Wrong integer: ${w}`)}function o(...w){let C=(A,S)=>k=>A(S(k));return{encode:Array.from(w).reverse().reduce((A,S)=>A?C(A,S.encode):S.encode,void 0),decode:w.reduce((A,S)=>A?C(A,S.decode):S.decode,void 0)}}function i(w){return{encode:C=>{if(!Array.isArray(C)||C.length&&typeof C[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return C.map(A=>{if(r(A),A<0||A>=w.length)throw new Error(`Digit index outside alphabet: ${A} (alphabet: ${w.length})`);return w[A]})},decode:C=>{if(!Array.isArray(C)||C.length&&typeof C[0]!="string")throw new Error("alphabet.decode input should be array of strings");return C.map(A=>{if(typeof A!="string")throw new Error(`alphabet.decode: not string element=${A}`);let S=w.indexOf(A);if(S===-1)throw new Error(`Unknown letter: "${A}". Allowed: ${w}`);return S})}}}function s(w=""){if(typeof w!="string")throw new Error("join separator should be string");return{encode:C=>{if(!Array.isArray(C)||C.length&&typeof C[0]!="string")throw new Error("join.encode input should be array of strings");for(let A of C)if(typeof A!="string")throw new Error(`join.encode: non-string input=${A}`);return C.join(w)},decode:C=>{if(typeof C!="string")throw new Error("join.decode input should be string");return C.split(w)}}}function c(w,C="="){if(r(w),typeof C!="string")throw new Error("padding chr should be string");return{encode(A){if(!Array.isArray(A)||A.length&&typeof A[0]!="string")throw new Error("padding.encode input should be array of strings");for(let S of A)if(typeof S!="string")throw new Error(`padding.encode: non-string input=${S}`);for(;A.length*w%8;)A.push(C);return A},decode(A){if(!Array.isArray(A)||A.length&&typeof A[0]!="string")throw new Error("padding.encode input should be array of strings");for(let k of A)if(typeof k!="string")throw new Error(`padding.decode: non-string input=${k}`);let S=A.length;if(S*w%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;S>0&&A[S-1]===C;S--)if(!((S-1)*w%8))throw new Error("Invalid padding: string has too much padding");return A.slice(0,S)}}}function h(w){if(typeof w!="function")throw new Error("normalize fn should be function");return{encode:C=>C,decode:C=>w(C)}}function n(w,C,A){if(C<2)throw new Error(`convertRadix: wrong from=${C}, base cannot be less than 2`);if(A<2)throw new Error(`convertRadix: wrong to=${A}, base cannot be less than 2`);if(!Array.isArray(w))throw new Error("convertRadix: data should be array");if(!w.length)return[];let S=0,k=[],L=Array.from(w);for(L.forEach(U=>{if(r(U),U<0||U>=C)throw new Error(`Wrong integer: ${U}`)});;){let U=0,M=!0;for(let H=S;H<L.length;H++){let Z=L[H],j=C*U+Z;if(!Number.isSafeInteger(j)||C*U/C!==U||j-Z!=C*U)throw new Error("convertRadix: carry overflow");if(U=j%A,L[H]=Math.floor(j/A),!Number.isSafeInteger(L[H])||L[H]*A+U!==j)throw new Error("convertRadix: carry overflow");M&&(L[H]?M=!1:S=H)}if(k.push(U),M)break}for(let U=0;U<w.length-1&&w[U]===0;U++)k.push(0);return k.reverse()}Object.defineProperty(e,"__esModule",{value:!0}),e.bytes=e.stringToBytes=e.str=e.bytesToString=e.hex=e.utf8=e.bech32m=e.bech32=e.base58check=e.base58xmr=e.base58xrp=e.base58flickr=e.base58=e.base64url=e.base64=e.base32crockford=e.base32hex=e.base32=e.base16=e.utils=e.assertNumber=void 0,e.assertNumber=r;let l=(w,C)=>C?l(C,w%C):w,p=(w,C)=>w+(C-l(w,C));function d(w,C,A,S){if(!Array.isArray(w))throw new Error("convertRadix2: data should be array");if(C<=0||C>32)throw new Error(`convertRadix2: wrong from=${C}`);if(A<=0||A>32)throw new Error(`convertRadix2: wrong to=${A}`);if(p(C,A)>32)throw new Error(`convertRadix2: carry overflow from=${C} to=${A} carryBits=${p(C,A)}`);let k=0,L=0,U=2**A-1,M=[];for(let H of w){if(r(H),H>=2**C)throw new Error(`convertRadix2: invalid data word=${H} from=${C}`);if(k=k<<C|H,L+C>32)throw new Error(`convertRadix2: carry overflow pos=${L} from=${C}`);for(L+=C;L>=A;L-=A)M.push((k>>L-A&U)>>>0);k&=2**L-1}if(k=k<<A-L&U,!S&&L>=C)throw new Error("Excess padding");if(!S&&k)throw new Error(`Non-zero padding: ${k}`);return S&&L>0&&M.push(k>>>0),M}function a(w){return r(w),{encode:C=>{if(!(C instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return n(Array.from(C),256,w)},decode:C=>{if(!Array.isArray(C)||C.length&&typeof C[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(n(C,w,256))}}}function u(w,C=!1){if(r(w),w<=0||w>32)throw new Error("radix2: bits should be in (0..32]");if(p(8,w)>32||p(w,8)>32)throw new Error("radix2: carry overflow");return{encode:A=>{if(!(A instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return d(Array.from(A),8,w,!C)},decode:A=>{if(!Array.isArray(A)||A.length&&typeof A[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(d(A,w,8,C))}}}function g(w){if(typeof w!="function")throw new Error("unsafeWrapper fn should be function");return function(...C){try{return w.apply(null,C)}catch{}}}function f(w,C){if(r(w),typeof C!="function")throw new Error("checksum fn should be function");return{encode(A){if(!(A instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let S=C(A).slice(0,w),k=new Uint8Array(A.length+w);return k.set(A),k.set(S,A.length),k},decode(A){if(!(A instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let S=A.slice(0,-w),k=C(S).slice(0,w),L=A.slice(-w);for(let U=0;U<w;U++)if(k[U]!==L[U])throw new Error("Invalid checksum");return S}}}e.utils={alphabet:i,chain:o,checksum:f,radix:a,radix2:u,join:s,padding:c},e.base16=o(u(4),i("0123456789ABCDEF"),s("")),e.base32=o(u(5),i("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),c(5),s("")),e.base32hex=o(u(5),i("0123456789ABCDEFGHIJKLMNOPQRSTUV"),c(5),s("")),e.base32crockford=o(u(5),i("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),s(""),h(w=>w.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),e.base64=o(u(6),i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),c(6),s("")),e.base64url=o(u(6),i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),c(6),s(""));let v=w=>o(a(58),i(w),s(""));e.base58=v("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),e.base58flickr=v("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),e.base58xrp=v("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");let m=[0,2,3,5,6,7,9,10,11];e.base58xmr={encode(w){let C="";for(let A=0;A<w.length;A+=8){let S=w.subarray(A,A+8);C+=e.base58.encode(S).padStart(m[S.length],"1")}return C},decode(w){let C=[];for(let A=0;A<w.length;A+=11){let S=w.slice(A,A+11),k=m.indexOf(S.length),L=e.base58.decode(S);for(let U=0;U<L.length-k;U++)if(L[U]!==0)throw new Error("base58xmr: wrong padding");C=C.concat(Array.from(L.slice(L.length-k)))}return Uint8Array.from(C)}},e.base58check=w=>o(f(4,C=>w(w(C))),e.base58);let _=o(i("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),s("")),y=[996825010,642813549,513874426,1027748829,705979059];function E(w){let C=w>>25,A=(33554431&w)<<5;for(let S=0;S<y.length;S++)(C>>S&1)==1&&(A^=y[S]);return A}function x(w,C,A=1){let S=w.length,k=1;for(let L=0;L<S;L++){let U=w.charCodeAt(L);if(U<33||U>126)throw new Error(`Invalid prefix (${w})`);k=E(k)^U>>5}k=E(k);for(let L=0;L<S;L++)k=E(k)^31&w.charCodeAt(L);for(let L of C)k=E(k)^L;for(let L=0;L<6;L++)k=E(k);return k^=A,_.encode(d([k%2**30],30,5,!1))}function b(w){let C=w==="bech32"?1:734539939,A=u(5),S=A.decode,k=A.encode,L=g(S);function U(M,H=90){if(typeof M!="string")throw new Error("bech32.decode input should be string, not "+typeof M);if(M.length<8||H!==!1&&M.length>H)throw new TypeError(`Wrong string length: ${M.length} (${M}). Expected (8..${H})`);let Z=M.toLowerCase();if(M!==Z&&M!==M.toUpperCase())throw new Error("String must be lowercase or uppercase");let j=(M=Z).lastIndexOf("1");if(j===0||j===-1)throw new Error('Letter "1" must be present between prefix and data only');let $=M.slice(0,j),D=M.slice(j+1);if(D.length<6)throw new Error("Data must be at least 6 characters long");let F=_.decode(D).slice(0,-6),K=x($,F,C);if(!D.endsWith(K))throw new Error(`Invalid checksum in ${M}: expected "${K}"`);return{prefix:$,words:F}}return{encode:function(M,H,Z=90){if(typeof M!="string")throw new Error("bech32.encode prefix should be string, not "+typeof M);if(!Array.isArray(H)||H.length&&typeof H[0]!="number")throw new Error("bech32.encode words should be array of numbers, not "+typeof H);let j=M.length+7+H.length;if(Z!==!1&&j>Z)throw new TypeError(`Length ${j} exceeds limit ${Z}`);return`${M=M.toLowerCase()}1${_.encode(H)}${x(M,H,C)}`},decode:U,decodeToBytes:function(M){let{prefix:H,words:Z}=U(M,!1);return{prefix:H,words:Z,bytes:S(Z)}},decodeUnsafe:g(U),fromWords:S,fromWordsUnsafe:L,toWords:k}}e.bech32=b("bech32"),e.bech32m=b("bech32m"),e.utf8={encode:w=>new TextDecoder().decode(w),decode:w=>new TextEncoder().encode(w)},e.hex=o(u(4),i("0123456789abcdef"),s(""),h(w=>{if(typeof w!="string"||w.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof w} with length ${w.length}`);return w.toLowerCase()}));let N={utf8:e.utf8,hex:e.hex,base16:e.base16,base32:e.base32,base64:e.base64,base64url:e.base64url,base58:e.base58,base58xmr:e.base58xmr},O=`Invalid encoding type. Available types: ${Object.keys(N).join(", ")}`;e.bytesToString=(w,C)=>{if(typeof w!="string"||!N.hasOwnProperty(w))throw new TypeError(O);if(!(C instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return N[w].encode(C)},e.str=e.bytesToString,e.stringToBytes=(w,C)=>{if(!N.hasOwnProperty(w))throw new TypeError(O);if(typeof C!="string")throw new TypeError("stringToBytes() expects string");return N[w].decode(C)},e.bytes=e.stringToBytes},Fa(oi={exports:{}},oi.exports),oi.exports),{bech32:_t,hex:ft,utf8:Ed}=vd,Va={bech32:"bc",pubKeyHash:0,scriptHash:5,validWitnessVersions:[0]},Wa={bech32:"tb",pubKeyHash:111,scriptHash:196,validWitnessVersions:[0]},Ga={bech32:"bcrt",pubKeyHash:111,scriptHash:196,validWitnessVersions:[0]},Za={bech32:"sb",pubKeyHash:63,scriptHash:123,validWitnessVersions:[0]},Bn=["option_data_loss_protect","initial_routing_sync","option_upfront_shutdown_script","gossip_queries","var_onion_optin","gossip_queries_ex","option_static_remotekey","payment_secret","basic_mpp","option_support_large_channel"],_d={m:BigInt(1e3),u:BigInt(1e6),n:BigInt(1e9),p:BigInt(1e12)},Cd=BigInt("2100000000000000000"),Ka=BigInt(1e11),si={payment_hash:1,payment_secret:16,description:13,payee:19,description_hash:23,expiry:6,min_final_cltv_expiry:24,fallback_address:9,route_hint:3,feature_bits:5,metadata:27},qa={};for(let t=0,e=Object.keys(si);t<e.length;t++){let r=e[t],o=si[e[t]].toString();qa[o]=r}var xd={1:t=>ft.encode(_t.fromWordsUnsafe(t)),16:t=>ft.encode(_t.fromWordsUnsafe(t)),13:t=>Ed.encode(_t.fromWordsUnsafe(t)),19:t=>ft.encode(_t.fromWordsUnsafe(t)),23:t=>ft.encode(_t.fromWordsUnsafe(t)),27:t=>ft.encode(_t.fromWordsUnsafe(t)),6:$n,24:$n,3:function(t){let e=[],r,o,i,s,c,h=_t.fromWordsUnsafe(t);for(;h.length>0;)r=ft.encode(h.slice(0,33)),o=ft.encode(h.slice(33,41)),i=parseInt(ft.encode(h.slice(41,45)),16),s=parseInt(ft.encode(h.slice(45,49)),16),c=parseInt(ft.encode(h.slice(49,51)),16),h=h.slice(51),e.push({pubkey:r,short_channel_id:o,fee_base_msat:i,fee_proportional_millionths:s,cltv_expiry_delta:c});return e},5:function(t){let e=t.slice().reverse().map(i=>[!!(1&i),!!(2&i),!!(4&i),!!(8&i),!!(16&i)]).reduce((i,s)=>i.concat(s),[]);for(;e.length<2*Bn.length;)e.push(!1);let r={};Bn.forEach((i,s)=>{let c;c=e[2*s]?"required":e[2*s+1]?"supported":"unsupported",r[i]=c});let o=e.slice(2*Bn.length);return r.extra_bits={start_bit:2*Bn.length,bits:o,has_required:o.reduce((i,s,c)=>c%2!=0?i||!1:i||s,!1)},r}};function Ad(t){return e=>({tagCode:parseInt(t),words:_t.encode("unknown",e,Number.MAX_SAFE_INTEGER)})}function $n(t){return t.reverse().reduce((e,r,o)=>e+r*Math.pow(32,o),0)}var Hn=class{constructor(e){var r,o,i;if(this.paymentRequest=void 0,this.paymentHash=void 0,this.preimage=void 0,this.verify=void 0,this.satoshi=void 0,this.expiry=void 0,this.timestamp=void 0,this.createdDate=void 0,this.expiryDate=void 0,this.description=void 0,this.paymentRequest=e.pr,!this.paymentRequest)throw new Error("Invalid payment request");let s=(c=>{if(!c)return null;try{let h=function(m,_){if(typeof m!="string")throw new Error("Lightning Payment Request must be string");if(m.slice(0,2).toLowerCase()!=="ln")throw new Error("Not a proper lightning payment request");let y=[],E=_t.decode(m,Number.MAX_SAFE_INTEGER);m=m.toLowerCase();let x=E.prefix,b=E.words,N=m.slice(x.length+1),O=b.slice(-104);b=b.slice(0,-104);let w=x.match(/^ln(\S+?)(\d*)([a-zA-Z]?)$/);if(w&&!w[2]&&(w=x.match(/^ln(\S+)$/)),!w)throw new Error("Not a proper lightning payment request");y.push({name:"lightning_network",letters:"ln"});let C=w[1],A;switch(C){case Va.bech32:A=Va;break;case Wa.bech32:A=Wa;break;case Ga.bech32:A=Ga;break;case Za.bech32:A=Za}if(!A||A.bech32!==C)throw new Error("Unknown coin bech32 prefix");y.push({name:"coin_network",letters:C,value:A});let S=w[2],k;S?(k=function(D,F){let K,W;if(D.slice(-1).match(/^[munp]$/))K=D.slice(-1),W=D.slice(0,-1);else{if(D.slice(-1).match(/^[^munp0-9]$/))throw new Error("Not a valid multiplier for the amount");W=D}if(!W.match(/^\d+$/))throw new Error("Not a valid human readable amount");let T=BigInt(W),I=K?T*Ka/_d[K]:T*Ka;if(K==="p"&&T%BigInt(10)!==BigInt(0)||I>Cd)throw new Error("Amount is outside of valid range");return I.toString()}(S+w[3]),y.push({name:"amount",letters:w[2]+w[3],value:k})):k=null,y.push({name:"separator",letters:"1"});let L=$n(b.slice(0,7)),U,M,H,Z;for(b=b.slice(7),y.push({name:"timestamp",letters:N.slice(0,7),value:L}),N=N.slice(7);b.length>0;){let D=b[0].toString();U=qa[D]||"unknown_tag",M=xd[D]||Ad(D),b=b.slice(1),H=$n(b.slice(0,2)),b=b.slice(2),Z=b.slice(0,H),b=b.slice(H),y.push({name:U,tag:N[0],letters:N.slice(0,3+H),value:M(Z)}),N=N.slice(3+H)}y.push({name:"signature",letters:N.slice(0,104),value:ft.encode(_t.fromWordsUnsafe(O))}),N=N.slice(104),y.push({name:"checksum",letters:N});let j={paymentRequest:m,sections:y,get expiry(){let D=y.find(F=>F.name==="expiry");if(D)return $("timestamp")+D.value},get route_hints(){return y.filter(D=>D.name==="route_hint").map(D=>D.value)}};for(let D in si)D!=="route_hint"&&Object.defineProperty(j,D,{get:()=>$(D)});return j;function $(D){let F=y.find(K=>K.name===D);return F?F.value:void 0}}(c);if(!h||!h.sections)return null;let n=h.sections.find(m=>m.name==="payment_hash");if(n?.name!=="payment_hash"||!n.value)return null;let l=n.value,p=h.sections.find(m=>m.name==="amount");if(p?.name!=="amount"||p.value===void 0)return null;let d=parseInt(p.value)/1e3,a=h.sections.find(m=>m.name==="timestamp");if(a?.name!=="timestamp"||!a.value)return null;let u=a.value,g,f=h.sections.find(m=>m.name==="expiry");f?.name==="expiry"&&(g=f.value);let v=h.sections.find(m=>m.name==="description");return{paymentHash:l,satoshi:d,timestamp:u,expiry:g,description:v?.name==="description"?v?.value:void 0}}catch{return null}})(this.paymentRequest);if(!s)throw new Error("Failed to decode payment request");this.paymentHash=s.paymentHash,this.satoshi=s.satoshi,this.timestamp=s.timestamp,this.expiry=s.expiry,this.createdDate=new Date(1e3*this.timestamp),this.expiryDate=this.expiry?new Date(1e3*(this.timestamp+this.expiry)):void 0,this.description=(r=s.description)!=null?r:null,this.verify=(o=e.verify)!=null?o:null,this.preimage=(i=e.preimage)!=null?i:null}async isPaid(){if(this.preimage)return this.validatePreimage(this.preimage);if(this.verify)return await this.verifyPayment();throw new Error("Could not verify payment")}async validatePreimage(e){if(!e||!this.paymentHash)return!1;try{let o=await wd((r=e,Uint8Array.from(r.match(/.{1,2}/g).map(i=>parseInt(i,16)))));return this.paymentHash===o}catch{return!1}var r}async verifyPayment(){if(!this.verify)throw new Error("LNURL verify not available");let e=await fetch(this.verify),r=await e.json();return r.preimage&&(this.preimage=r.preimage),r.settled}};var ai=async t=>{let e="https://getalby.com/api/rates/"+t.toLowerCase()+".json";return(await(await fetch(e)).json()).rate_float/1e8},za=async({satoshi:t,currency:e})=>{let r=await ai(e);return Number(t)*r},Ya={__proto__:null,getFiatBtcRate:ai,getFiatValue:za,getSatoshiValue:async({amount:t,currency:e})=>{let r=await ai(e);return Math.floor(Number(t)/r)},getFormattedFiatValue:async({satoshi:t,currency:e,locale:r})=>(r||(r="en"),(await za({satoshi:t,currency:e})).toLocaleString(r,{style:"currency",currency:e}))};var Jl=Es(ec(),1),_r=class{constructor(e){this._config=e}async unload(){}},Od=t=>{let e=[];for(let r=0,o=atob(t.replace(/[ \r\n]+$/,""));r<o.length;++r){let i=o.charCodeAt(r).toString(16);i.length===1&&(i="0"+i),e[e.length]=i}return e.join("")},Ke;async function Xl(){try{if(Ke)return Ke;let t=(await Promise.resolve().then(()=>Es(tc(),1))).default;return Ke=new t,Ke}catch(t){throw console.error(t),new Error("LNC is not available")}}var rc="ONLY CONNECT TO TRUSTED WEBSITES",Yn=class{constructor(e){this.lnc=e}enable(){return Promise.resolve()}async getInfo(){let e=await Ke.lnd.lightning.getInfo();return{methods:["enable","getBalance","getInfo","sendPayment"],version:"1.0",node:{alias:e.alias,pubkey:e.identityPubkey,color:e.color},supports:["lightning"]}}makeInvoice(e){throw new Error("Method not implemented.")}async sendPayment(e){let r=await Ke.lnd.lightning.sendPaymentSync({paymentRequest:e});if(r.paymentError)throw new Error(r.paymentError);if(!r.paymentPreimage)throw new Error("No preimage in response");if(typeof r.paymentPreimage!="string")throw new Error("expected preimage as string");return{preimage:Od(r.paymentPreimage)}}async getBalance(){var e;let r=await Ke.lnd.lightning.channelBalance();return{balance:parseInt(((e=r.localBalance)==null?void 0:e.sat)||"0")}}keysend(e){throw new Error("Method not implemented.")}lnurl(e){throw new Error("Method not implemented.")}lookupInvoice(e){throw new Error("Method not implemented.")}signMessage(e){throw new Error("Method not implemented.")}verifyMessage(e,r){throw new Error("Method not implemented.")}},Jn=class{constructor(e,r){this._instanceUrl=e,this._adminKey=r}enable(){return Promise.resolve()}async getInfo(){return{node:{alias:(await this.requestLnbits("GET","/api/v1/wallet")).name,pubkey:""},methods:["getInfo","getBalance","sendPayment"],version:"1.0",supports:["lightning"]}}makeInvoice(e){throw new Error("Method not implemented.")}async sendPayment(e){let r=await this.requestLnbits("POST","/api/v1/payments",{bolt11:e,out:!0}),o=await this.requestLnbits("GET",`/api/v1/payments/${r.payment_hash}`);if(!o.preimage)throw new Error("No preimage");return{preimage:o.preimage}}async getBalance(){let e=await this.requestLnbits("GET","/api/v1/wallet");return{balance:Math.floor(e.balance/1e3)}}keysend(e){throw new Error("Method not implemented.")}lnurl(e){throw new Error("Method not implemented.")}lookupInvoice(e){throw new Error("Method not implemented.")}signMessage(e){throw new Error("Method not implemented.")}verifyMessage(e,r){throw new Error("Method not implemented.")}async requestLnbits(e,r,o){let i=null,s=new Headers;if(s.append("Accept","application/json"),s.append("Content-Type","application/json"),s.append("X-Api-Key",this._adminKey),e==="POST")i=JSON.stringify(o);else if(o!==void 0)throw new Error("TODO: support args in GET");let c=await fetch(this._instanceUrl+r+"",{method:e,headers:s,body:i});if(!c.ok){let h=await c.json();throw console.error("errBody",h),new Error(h.detail)}return await c.json()}},nc=!1,Er=class extends _r{constructor(e){super(e)}async init(){if(!this._config.nwcUrl)throw new Error("no nwc URL provided");return new Mr.NostrWebLNProvider({nostrWalletConnectUrl:this._config.nwcUrl})}},Sd={"extension.generic":class extends _r{constructor(t){super(t)}init(){if(!window.webln)throw new Error("No WebLN provider available");return Promise.resolve(window.webln)}},"nwc.alby":Er,"nwc.generic":Er,"nwc.mutiny":Er,"nwc.umbrel":Er,lnbits:class extends _r{constructor(t){super(t)}async init(){if(!this._config.lnbitsInstanceUrl)throw new Error("no lnbits URL provided");if(!this._config.lnbitsAdminKey)throw new Error("no lnbits admin key provided");return new Jn(this._config.lnbitsInstanceUrl,this._config.lnbitsAdminKey)}},lnc:class extends _r{constructor(t){super(t)}async init(){await Xl();let t=new Yn(Ke);try{let e=!Ke.credentials.pairingPhrase;for(e?(console.log("Pairing phrase does not exist"),Ke.credentials.password=rc):console.log("Pairing phrase set"),await Ke.connect(),e||(Ke.credentials.password=rc);!Ke.isConnected;)console.log("Waiting to connect..."),await new Promise(r=>{setTimeout(r,100)})}catch(e){throw console.error(e),Ke.disconnect(),Ke.credentials.clear(),e}return t}async unload(){Ke.disconnect(),Ke.credentials.clear(),await super.unload()}}},ne=ja((t,e)=>({route:"/start",routeHistory:[],modalOpen:!1,currency:void 0,showBalance:void 0,connected:!1,connecting:!1,error:void 0,alias:void 0,balance:void 0,connectorName:void 0,appName:void 0,filters:void 0,invoice:void 0,provider:void 0,providerConfig:void 0,connector:void 0,config:void 0,connect:async r=>{t({connecting:!0,error:void 0});try{let o=new Sd[r.connectorType](r),i=await o.init();await i.enable(),t({config:r,connector:o,connected:!0,connecting:!1,provider:i,connectorName:r.connectorName,route:"/start"}),function(s){window.localStorage.setItem("bc:config",JSON.stringify(s))}(r)}catch(o){console.error(o),t({error:o.toString(),connecting:!1}),e().disconnect()}},disconnect:()=>{var r;(r=e().connector)==null||r.unload(),t({config:void 0,connector:void 0,connected:!1,connectorName:void 0,provider:void 0,modalOpen:!1}),window.localStorage.removeItem("bc:config")},pushRoute:r=>{e().route!==r&&t({route:r,routeHistory:[...e().routeHistory,e().route]})},popRoute(){let r=e().routeHistory,o=r.pop()||"/start";t({route:o,routeHistory:r})},clearRouteHistory(){t({route:"/start",routeHistory:[]})},setModalOpen:r=>{t({modalOpen:r})},setAppName:r=>{t({appName:r})},setShowBalance:r=>{t({showBalance:r})},setFilters:r=>{t({filters:r})},setProviderConfig:r=>{t({providerConfig:r})},setError:r=>{t({error:r})},setCurrency:r=>{r?window.localStorage.setItem("bc:currency",r):window.localStorage.removeItem("bc:currency"),t({currency:r})}}));function re(t,e,r,o){var i,s=arguments.length,c=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,e,r,o);else for(var h=t.length-1;h>=0;h--)(i=t[h])&&(c=(s<3?i(c):s>3?i(e,r,c):i(e,r))||c);return s>3&&c&&Object.defineProperty(e,r,c),c}globalThis.window&&(function(){let t=window.localStorage.getItem("bc:config");if(t){let r=JSON.parse(t);ne.getState().connect(r)}let e=window.localStorage.getItem("bc:currency");e&&ne.getState().setCurrency(e)}(),window.addEventListener("webln:enabled",()=>{ne.getState().connecting||ne.getState().connect({connectorName:"Extension",connectorType:"extension.generic"})}),function(){if(globalThis.document&&!nc){nc=!0;for(let t of["Inter","Roboto Mono"]){let e=document.createElement("link");e.href=`https://fonts.googleapis.com/css2?family=${t}:wght@400;500;600;700&display=swap`,e.rel="stylesheet",document.head.appendChild(e)}}}()),typeof SuppressedError=="function"&&SuppressedError;var zn=globalThis,Yi=zn.ShadowRoot&&(zn.ShadyCSS===void 0||zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ji=Symbol(),oc=new WeakMap,Xn=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Yi&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=oc.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&oc.set(r,e))}return e}toString(){return this.cssText}},Xi=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Xn(r,t,Ji)},ic=Yi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return(o=>new Xn(typeof o=="string"?o:o+"",void 0,Ji))(r)})(t):t,{is:Nd,defineProperty:Td,getOwnPropertyDescriptor:Rd,getOwnPropertyNames:Id,getOwnPropertySymbols:kd,getPrototypeOf:Ld}=Object,co=globalThis,sc=co.trustedTypes,Pd=sc?sc.emptyScript:"",Ud=co.reactiveElementPolyfillSupport,Zr=(t,e)=>t,Qn={toAttribute(t,e){switch(e){case Boolean:t=t?Pd:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Qi=(t,e)=>!Nd(t,e),ac={attribute:!0,type:String,converter:Qn,reflect:!1,hasChanged:Qi};Symbol.metadata??=Symbol("metadata"),co.litPropertyMetadata??=new WeakMap;var Wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ac){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Td(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){let{get:i,set:s}=Rd(this.prototype,e)??{get(){return this[r]},set(c){this[r]=c}};return{get(){return i?.call(this)},set(c){let h=i?.call(this);s.call(this,c),this.requestUpdate(e,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ac}static _$Ei(){if(this.hasOwnProperty(Zr("elementProperties")))return;let e=Ld(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zr("properties"))){let r=this.properties,o=[...Id(r),...kd(r)];for(let i of o)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)r.unshift(ic(i))}else e!==void 0&&r.push(ic(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,o)=>{if(Yi)r.adoptedStyleSheets=o.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of o){let s=document.createElement("style"),c=zn.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=i.cssText,r.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:Qn).toAttribute(r,o.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){let o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=o.getPropertyOptions(i),c=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qn;this._$Em=i,this[i]=c.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,o,i=!1,s){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Qi)(i?s:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$ES?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$ET()}catch(o){throw e=!1,this._$ET(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$ES?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EO(r,this[r])),this._$ET()}updated(e){}firstUpdated(e){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[Zr("elementProperties")]=new Map,Wt[Zr("finalized")]=new Map,Ud?.({ReactiveElement:Wt}),(co.reactiveElementVersions??=[]).push("2.0.0");var es=globalThis,eo=es.trustedTypes,cc=eo?eo.createPolicy("lit-html",{createHTML:t=>t}):void 0,lc="$lit$",Ft=`lit$${(Math.random()+"").slice(9)}$`,Ql="?"+Ft,Dd=`<${Ql}>`,fr=document,to=()=>fr.createComment(""),zr=t=>t===null||typeof t!="object"&&typeof t!="function",uc=Array.isArray,li=`[ 	
\f\r]`,$r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fc=/-->/g,dc=/>/g,rr=RegExp(`>|${li}(?:([^\\s"'>=/]+)(${li}*=${li}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hc=/'/g,pc=/"/g,gc=/^(?:script|style|textarea|title)$/i,qr=Symbol.for("lit-noChange"),We=Symbol.for("lit-nothing"),yc=new WeakMap,cr=fr.createTreeWalker(fr,129);function e0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return cc!==void 0?cc.createHTML(e):e}var Yr=class t{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,c=0,h=e.length-1,n=this.parts,[l,p]=((d,a)=>{let u=d.length-1,g=[],f,v=a===2?"<svg>":"",m=$r;for(let _=0;_<u;_++){let y=d[_],E,x,b=-1,N=0;for(;N<y.length&&(m.lastIndex=N,x=m.exec(y),x!==null);)N=m.lastIndex,m===$r?x[1]==="!--"?m=fc:x[1]!==void 0?m=dc:x[2]!==void 0?(gc.test(x[2])&&(f=RegExp("</"+x[2],"g")),m=rr):x[3]!==void 0&&(m=rr):m===rr?x[0]===">"?(m=f??$r,b=-1):x[1]===void 0?b=-2:(b=m.lastIndex-x[2].length,E=x[1],m=x[3]===void 0?rr:x[3]==='"'?pc:hc):m===pc||m===hc?m=rr:m===fc||m===dc?m=$r:(m=rr,f=void 0);let O=m===rr&&d[_+1].startsWith("/>")?" ":"";v+=m===$r?y+Dd:b>=0?(g.push(E),y.slice(0,b)+lc+y.slice(b)+Ft+O):y+Ft+(b===-2?_:O)}return[e0(d,v+(d[u]||"<?>")+(a===2?"</svg>":"")),g]})(e,r);if(this.el=t.createElement(l,o),cr.currentNode=this.el.content,r===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=cr.nextNode())!==null&&n.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(lc)){let a=p[c++],u=i.getAttribute(d).split(Ft),g=/([.?@])?(.*)/.exec(a);n.push({type:1,index:s,name:g[2],strings:u,ctor:g[1]==="."?Ni:g[1]==="?"?Ti:g[1]==="@"?Ri:xr}),i.removeAttribute(d)}else d.startsWith(Ft)&&(n.push({type:6,index:s}),i.removeAttribute(d));if(gc.test(i.tagName)){let d=i.textContent.split(Ft),a=d.length-1;if(a>0){i.textContent=eo?eo.emptyScript:"";for(let u=0;u<a;u++)i.append(d[u],to()),cr.nextNode(),n.push({type:2,index:++s});i.append(d[a],to())}}}else if(i.nodeType===8)if(i.data===Ql)n.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Ft,d+1))!==-1;)n.push({type:7,index:s}),d+=Ft.length-1}s++}}static createElement(e,r){let o=fr.createElement("template");return o.innerHTML=e,o}};function Cr(t,e,r=t,o){if(e===qr)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl,s=zr(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=Cr(t,i._$AS(t,e.values),i,o)),e}var Si=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??fr).importNode(r,!0);cr.currentNode=i;let s=cr.nextNode(),c=0,h=0,n=o[0];for(;n!==void 0;){if(c===n.index){let l;n.type===2?l=new ro(s,s.nextSibling,this,e):n.type===1?l=new n.ctor(s,n.name,n.strings,this,e):n.type===6&&(l=new Ii(s,this,e)),this._$AV.push(l),n=o[++h]}c!==n?.index&&(s=cr.nextNode(),c++)}return cr.currentNode=fr,i}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},ro=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=We,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Cr(this,e,r),zr(e)?e===We||e==null||e===""?(this._$AH!==We&&this._$AR(),this._$AH=We):e!==this._$AH&&e!==qr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):(o=>uc(o)||typeof o?.[Symbol.iterator]=="function")(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==We&&zr(this._$AH)?this._$AA.nextSibling.data=e:this.$(fr.createTextNode(e)),this._$AH=e}g(e){let{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Yr.createElement(e0(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{let s=new Si(i,this),c=s.u(this.options);s.p(r),this.$(c),this._$AH=s}}_$AC(e){let r=yc.get(e.strings);return r===void 0&&yc.set(e.strings,r=new Yr(e)),r}T(e){uc(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let s of e)i===r.length?r.push(o=new t(this.k(to()),this.k(to()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=We,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=We}_$AI(e,r=this,o,i){let s=this.strings,c=!1;if(s===void 0)e=Cr(this,e,r,0),c=!zr(e)||e!==this._$AH&&e!==qr,c&&(this._$AH=e);else{let h=e,n,l;for(e=s[0],n=0;n<s.length-1;n++)l=Cr(this,h[o+n],r,n),l===qr&&(l=this._$AH[n]),c||=!zr(l)||l!==this._$AH[n],l===We?e=We:e!==We&&(e+=(l??"")+s[n+1]),this._$AH[n]=l}c&&!i&&this.O(e)}O(e){e===We?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ni=class extends xr{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===We?void 0:e}},Ti=class extends xr{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==We)}},Ri=class extends xr{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=Cr(this,e,r,0)??We)===qr)return;let o=this._$AH,i=e===We&&o!==We||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==We&&(o===We||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ii=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Cr(this,e)}},Md=es.litHtmlPolyfillSupport;Md?.(Yr,ro),(es.litHtmlVersions??=[]).push("3.1.0");var ts=globalThis,no=ts.trustedTypes,mc=no?no.createPolicy("lit-html",{createHTML:t=>t}):void 0,t0="$lit$",Gt=`lit$${(Math.random()+"").slice(9)}$`,r0="?"+Gt,Bd=`<${r0}>`,dr=document,Jr=()=>dr.createComment(""),Xr=t=>t===null||typeof t!="object"&&typeof t!="function",bc=Array.isArray,ui=`[ 	
\f\r]`,Hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wc=/-->/g,vc=/>/g,nr=RegExp(`>|${ui}(?:([^\\s"'>=/]+)(${ui}*=${ui}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ec=/'/g,_c=/"/g,n0=/^(?:script|style|textarea|title)$/i,o0=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),te=o0(1),_e=o0(2),Ar=Symbol.for("lit-noChange"),Ge=Symbol.for("lit-nothing"),Cc=new WeakMap,lr=dr.createTreeWalker(dr,129);function i0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mc!==void 0?mc.createHTML(e):e}var $d=(t,e)=>{let r=t.length-1,o=[],i,s=e===2?"<svg>":"",c=Hr;for(let h=0;h<r;h++){let n=t[h],l,p,d=-1,a=0;for(;a<n.length&&(c.lastIndex=a,p=c.exec(n),p!==null);)a=c.lastIndex,c===Hr?p[1]==="!--"?c=wc:p[1]!==void 0?c=vc:p[2]!==void 0?(n0.test(p[2])&&(i=RegExp("</"+p[2],"g")),c=nr):p[3]!==void 0&&(c=nr):c===nr?p[0]===">"?(c=i??Hr,d=-1):p[1]===void 0?d=-2:(d=c.lastIndex-p[2].length,l=p[1],c=p[3]===void 0?nr:p[3]==='"'?_c:Ec):c===_c||c===Ec?c=nr:c===wc||c===vc?c=Hr:(c=nr,i=void 0);let u=c===nr&&t[h+1].startsWith("/>")?" ":"";s+=c===Hr?n+Bd:d>=0?(o.push(l),n.slice(0,d)+t0+n.slice(d)+Gt+u):n+Gt+(d===-2?h:u)}return[i0(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),o]},Qr=class t{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,c=0,h=e.length-1,n=this.parts,[l,p]=$d(e,r);if(this.el=t.createElement(l,o),lr.currentNode=this.el.content,r===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=lr.nextNode())!==null&&n.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(t0)){let a=p[c++],u=i.getAttribute(d).split(Gt),g=/([.?@])?(.*)/.exec(a);n.push({type:1,index:s,name:g[2],strings:u,ctor:g[1]==="."?Li:g[1]==="?"?Pi:g[1]==="@"?Ui:Sr}),i.removeAttribute(d)}else d.startsWith(Gt)&&(n.push({type:6,index:s}),i.removeAttribute(d));if(n0.test(i.tagName)){let d=i.textContent.split(Gt),a=d.length-1;if(a>0){i.textContent=no?no.emptyScript:"";for(let u=0;u<a;u++)i.append(d[u],Jr()),lr.nextNode(),n.push({type:2,index:++s});i.append(d[a],Jr())}}}else if(i.nodeType===8)if(i.data===r0)n.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Gt,d+1))!==-1;)n.push({type:7,index:s}),d+=Gt.length-1}s++}}static createElement(e,r){let o=dr.createElement("template");return o.innerHTML=e,o}};function Or(t,e,r=t,o){if(e===Ar)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl,s=Xr(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=Or(t,i._$AS(t,e.values),i,o)),e}var ki=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??dr).importNode(r,!0);lr.currentNode=i;let s=lr.nextNode(),c=0,h=0,n=o[0];for(;n!==void 0;){if(c===n.index){let l;n.type===2?l=new en(s,s.nextSibling,this,e):n.type===1?l=new n.ctor(s,n.name,n.strings,this,e):n.type===6&&(l=new Di(s,this,e)),this._$AV.push(l),n=o[++h]}c!==n?.index&&(s=lr.nextNode(),c++)}return lr.currentNode=dr,i}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},en=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=Ge,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Or(this,e,r),Xr(e)?e===Ge||e==null||e===""?(this._$AH!==Ge&&this._$AR(),this._$AH=Ge):e!==this._$AH&&e!==Ar&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):(o=>bc(o)||typeof o?.[Symbol.iterator]=="function")(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ge&&Xr(this._$AH)?this._$AA.nextSibling.data=e:this.$(dr.createTextNode(e)),this._$AH=e}g(e){let{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Qr.createElement(i0(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{let s=new ki(i,this),c=s.u(this.options);s.p(r),this.$(c),this._$AH=s}}_$AC(e){let r=Cc.get(e.strings);return r===void 0&&Cc.set(e.strings,r=new Qr(e)),r}T(e){bc(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let s of e)i===r.length?r.push(o=new t(this.k(Jr()),this.k(Jr()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Sr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=Ge,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ge}_$AI(e,r=this,o,i){let s=this.strings,c=!1;if(s===void 0)e=Or(this,e,r,0),c=!Xr(e)||e!==this._$AH&&e!==Ar,c&&(this._$AH=e);else{let h=e,n,l;for(e=s[0],n=0;n<s.length-1;n++)l=Or(this,h[o+n],r,n),l===Ar&&(l=this._$AH[n]),c||=!Xr(l)||l!==this._$AH[n],l===Ge?e=Ge:e!==Ge&&(e+=(l??"")+s[n+1]),this._$AH[n]=l}c&&!i&&this.j(e)}j(e){e===Ge?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Li=class extends Sr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ge?void 0:e}},Pi=class extends Sr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ge)}},Ui=class extends Sr{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=Or(this,e,r,0)??Ge)===Ar)return;let o=this._$AH,i=e===Ge&&o!==Ge||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==Ge&&(o===Ge||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Di=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Or(this,e)}},Hd=ts.litHtmlPolyfillSupport;Hd?.(Qr,en),(ts.litHtmlVersions??=[]).push("3.0.0");var ur=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((o,i,s)=>{let c=s?.renderBefore??i,h=c._$litPart$;if(h===void 0){let n=s?.renderBefore??null;c._$litPart$=h=new en(i.insertBefore(Jr(),n),n,void 0,s??{})}return h._$AI(o),h})(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ar}};ur._$litElement$=!0,ur.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ur});var jd=globalThis.litElementPolyfillSupport;jd?.({LitElement:ur}),(globalThis.litElementVersions??=[]).push("4.0.0");var ge=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Fd={attribute:!0,type:String,converter:Qn,reflect:!1,hasChanged:Qi},Vd=(t=Fd,e,r)=>{let{kind:o,metadata:i}=r,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),o==="accessor"){let{name:c}=r;return{set(h){let n=e.get.call(this);e.set.call(this,h),this.requestUpdate(c,n,t)},init(h){return h!==void 0&&this.C(c,void 0,t),h}}}if(o==="setter"){let{name:c}=r;return function(h){let n=this[c];e.call(this,h),this.requestUpdate(c,n,t)}}throw Error("Unsupported decorator location: "+o)};function Me(t){return(e,r)=>typeof r=="object"?Vd(t,e,r):((o,i,s)=>{let c=i.hasOwnProperty(s);return i.constructor.createProperty(s,c?{...o,wrapped:!0}:o),c?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}function Ee(t){return Me({...t,state:!0,attribute:!1})}var xc,Ac,Nr=class extends ur{updated(e){var r;if(super.updated(e),globalThis.document&&globalThis.document.documentElement.classList.contains("dark")&&(r=this.shadowRoot)!=null&&(r=r.children)!=null&&r.length)for(let o of this.shadowRoot.children)o.classList.contains("dark")||o.classList.add("dark")}_getBrandColorLuminance(){return globalThis.window?function(e){if(e.startsWith("#"))return e=e.slice(1),(.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16))/255;if(e.startsWith("rgb")||e.startsWith("rgba")){let r=e.match(/\d+(\.\d+)?/g);return(.299*parseFloat(r[0])+.587*parseFloat(r[1])+.114*parseFloat(r[2]))/255}throw new Error("Unsupported luminance: "+e)}(window.getComputedStyle(this).getPropertyValue("--bc-color-brand")||"#196CE7"):0}};Nr.styles=[Xi(xc||(xc=(t=>t)`
      :host {
        // global css reset in shadow DOM
        all: initial;
        font-variant-numeric: slashed-zero;
      }
      // TODO: move to individual components - only needed by a couple of icons
      .hover-animation:hover .hover-right-up {
        transform: translateX(2px) translateY(-2px);
        transition: all 0.3s;
      }
      .hover-animation:hover .hover-right {
        transform: translateX(3px);
        transition: all 0.3s;
      }
    `))];var he=class extends Nr{constructor(){super(),this._modalOpen=!1,this._connected=!1,this._connecting=!1,this._connectorName=void 0,this._appName=void 0,this._filters=void 0,this._error=void 0,this._connected=ne.getState().connected,this._connecting=ne.getState().connecting,this._connectorName=ne.getState().connectorName,this._appName=ne.getState().appName,this._filters=ne.getState().filters,this._error=ne.getState().error,this._route=ne.getState().route,this._modalOpen=ne.getState().modalOpen,ne.subscribe(e=>{this._connected=e.connected,this._connecting=e.connecting,this._connectorName=e.connectorName,this._appName=e.appName,this._filters=e.filters,this._error=e.error,this._route=e.route,this._modalOpen=e.modalOpen})}connectedCallback(){super.connectedCallback(),this.appName!=null&&ne.getState().setAppName(this.appName),this.filters!=null&&ne.getState().setFilters(this.filters)}};re([Ee()],he.prototype,"_modalOpen",void 0),re([Ee()],he.prototype,"_connected",void 0),re([Ee()],he.prototype,"_connecting",void 0),re([Ee()],he.prototype,"_connectorName",void 0),re([Ee()],he.prototype,"_appName",void 0),re([Ee()],he.prototype,"_filters",void 0),re([Ee()],he.prototype,"_error",void 0),re([Ee()],he.prototype,"_route",void 0),re([Me({type:String,attribute:"app-name"})],he.prototype,"appName",void 0),re([Me({type:Array,attribute:"filters",converter:(t,e)=>t?.split(",")})],he.prototype,"filters",void 0);var Kr=_e(Ac||(Ac=(t=>t)`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4635 6.0794C17.4325 6.83684 18.8238 7.94315 18.5058 9.88813C18.3285 10.984 17.8283 11.6586 17.1374 12.0334C16.8767 12.1748 16.8191 12.6131 17.0507 12.7984C18.0431 13.592 18.4393 14.7164 17.8152 16.4238C16.9057 18.9138 14.8635 19.177 12.1521 18.6697C11.9858 18.6385 11.8223 18.7396 11.7792 18.9032L11.4563 20.1009C11.3343 20.5633 10.8605 20.8392 10.3981 20.7173C9.93541 20.5953 9.65932 20.1212 9.78149 19.6586L10.0909 18.5121C10.1354 18.3439 10.0349 18.1715 9.86676 18.1266C9.62998 18.0632 9.39019 17.9976 9.14679 17.9294C8.97646 17.8817 8.79964 17.9822 8.75452 18.1532L8.44373 19.3067C8.32182 19.7688 7.8483 20.0446 7.38616 19.9226C6.92422 19.8007 6.64851 19.3274 6.77026 18.8655L7.08988 17.677C7.13458 17.5073 7.03399 17.3333 6.86481 17.2869C6.81003 17.2718 6.75512 17.2567 6.70008 17.2415L6.69828 17.241C6.4604 17.1755 6.22001 17.1094 5.97667 17.0449L5.42127 16.8919C4.80739 16.7299 4.48576 16.0556 4.74625 15.4767C4.95488 15.013 5.47104 14.7734 5.96239 14.9043C5.97132 14.9067 5.98016 14.909 5.98891 14.9113C6.1066 14.9426 6.10094 14.9199 6.21958 14.8924C6.46112 14.8366 6.58893 14.6373 6.65055 14.4901L7.80952 10.0986L7.81254 10.0867L8.63176 6.98069C8.63683 6.96147 8.64021 6.94184 8.64116 6.92198C8.65547 6.62155 8.78957 6.31876 8.35166 6.11178C8.25682 6.06695 8.16354 6.02432 8.06217 5.99736C8.04539 5.9929 8.02808 5.98833 8.01032 5.98367C7.51444 5.85341 7.21198 5.34932 7.34263 4.85356C7.47162 4.36411 7.9731 4.07202 8.46248 4.2013L9.43668 4.47448C9.68634 4.54012 9.94146 4.60362 10.2006 4.66691C10.3681 4.70784 10.5375 4.60681 10.5815 4.44006L10.8668 3.39102C10.9889 2.9288 11.4625 2.65299 11.9247 2.77495C12.3871 2.89693 12.663 3.37062 12.541 3.83294L12.2715 4.82295C12.2273 4.99041 12.3292 5.16145 12.4975 5.20248C12.7444 5.26269 12.9911 5.32354 13.2353 5.38588C13.4 5.42795 13.5684 5.32988 13.6118 5.16547L13.8783 4.18608C14.0003 3.72357 14.4741 3.44751 14.9366 3.56948C15.3992 3.69145 15.6753 4.16533 15.5533 4.62789L15.2637 5.69461C15.2215 5.85461 15.3091 6.01999 15.4635 6.0794ZM11.2479 8.6805L11.4769 7.81121C11.5836 7.40644 11.9982 7.16477 12.403 7.27142C12.8077 7.37807 13.0494 7.79266 12.9428 8.19743L12.7137 9.06672L13.5829 9.29575C13.9877 9.4024 14.2294 9.81699 14.1227 10.2218C14.0161 10.6265 13.6015 10.8682 13.1967 10.7615L12.3275 10.5325L12.0984 11.4018C11.9918 11.8066 11.5772 12.0483 11.1724 11.9416C10.7676 11.835 10.5259 11.4204 10.6326 11.0156L10.8617 10.1463L9.99225 9.91722C9.58747 9.81056 9.34579 9.39598 9.45245 8.99121C9.5591 8.58644 9.9737 8.34477 10.3785 8.45142L11.2479 8.6805ZM13.2927 12.7001L13.0636 13.5693L12.1942 13.3403C11.7895 13.2336 11.3749 13.4753 11.2682 13.8801C11.1615 14.2848 11.4032 14.6994 11.808 14.8061L12.6774 15.0351L12.4484 15.9045C12.3417 16.3092 12.5834 16.7238 12.9882 16.8305C13.3929 16.9371 13.8075 16.6954 13.9142 16.2907L14.1432 15.4214L15.0125 15.6504C15.4172 15.757 15.8318 15.5154 15.9385 15.1106C16.0451 14.7058 15.8035 14.2912 15.3987 14.1846L14.5295 13.9556L14.7585 13.0863C14.8652 12.6815 14.6235 12.2669 14.2187 12.1603C13.8139 12.0536 13.3994 12.2953 13.2927 12.7001Z" fill="currentColor"/>
</svg>`));function Zt(){return Zt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Zt.apply(this,arguments)}function rs(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function Wd(t,e=","){return t.map(rs).join(e)}var s0=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function oo(t){for(var e=9,r=t.length;r--;)e=Math.imul(e^t.charCodeAt(r),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function ns(t,e="@media "){return e+ve(t).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(o=>`(${o}-width:${r[o]})`).join(" and "))).join(",")}function ve(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function Oc(t){return t}function Mi(){}var Ue={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function a0(t){return t.match(/[-=:;]/g)?.length||0}function Bi(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(a0(t),15)<<18}var Gd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function os({n:t,i:e,v:r=[]},o,i,s){t&&(t=rs({n:t,i:e,v:r})),s=[...ve(s)];for(let c of r){let h=o.theme("screens",c);for(let n of ve(h&&ns(h)||o.v(c)))s.push(n),i|=h?67108864|Bi(n):c=="dark"?1073741824:n[0]=="@"?Bi(n):1<<~(/:([a-z-]+)/.test(n)&&~Gd.indexOf(RegExp.$1.slice(2,7))||-18)}return{n:t,p:i,r:s,i:e}}var c0=new Map;function $i(t){if(t.d){let e=[],r=fi(t.r.reduce((o,i)=>i[0]=="@"?(e.push(i),o):i?fi(o,s=>fi(i,c=>{let h=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(c);if(h){let n=s.indexOf(h[1]);return~n?s.slice(0,n)+h[0]+s.slice(n+h[1].length):di(s,c)}return di(c,s)})):o,"&"),o=>di(o,t.n?"."+s0(t.n):""));return r&&e.push(r.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((o,i)=>i+"{"+o+"}",t.d)}}function fi(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,o,i)=>e(o)+i)}function di(t,e){return t.replace(/&/g,e)}var Sc=new Intl.Collator("en",{numeric:!0});function l0(t,e){for(var r=0,o=t.length;r<o;){let i=o+r>>1;0>=u0(t[i],e)?r=i+1:o=i}return o}function u0(t,e){let r=t.p&Ue.o;return r!=(e.p&Ue.o)||r!=Ue.b&&r!=Ue.o?t.p-e.p||t.o-e.o||Sc.compare(Nc(t.n),Nc(e.n))||Sc.compare(Tc(t.n),Tc(e.n)):0}function Nc(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function Tc(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function hi(t,e){return Math.round(parseInt(t,16)*e)}function Kt(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:r="1",opacityVariable:o}=e,i=o?`var(${o})`:r;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let s=(t.length-1)/3,c=[17,1,.062272][s-1];return`rgba(${[hi(t.substr(1,s),c),hi(t.substr(1+s,s),c),hi(t.substr(1+2*s,s),c),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function f0(t,e,r,o,i=[]){return function s(c,{n:h,p:n,r:l=[],i:p},d){let a=[],u="",g=0,f=0;for(let _ in c||{}){var v,m;let y=c[_];if(_[0]=="@"){if(!y)continue;if(_[1]=="a"){a.push(...ss(h,n,so(""+y),d,n,l,p,!0));continue}if(_[1]=="l"){for(let E of ve(y))a.push(...s(E,{n:h,p:(v=Ue[_[7]],n&~Ue.o|v),r:_[7]=="d"?[]:l,i:p},d));continue}if(_[1]=="i"){a.push(...ve(y).map(E=>({p:-1,o:0,r:[],d:_+" "+E})));continue}if(_[1]=="k"){a.push({p:Ue.d,o:0,r:[_],d:s(y,{p:Ue.d},d).map($i).join("")});continue}if(_[1]=="f"){a.push(...ve(y).map(E=>({p:Ue.d,o:0,r:[_],d:s(E,{p:Ue.d},d).map($i).join("")})));continue}}if(typeof y!="object"||Array.isArray(y))_=="label"&&y?h=y+oo(JSON.stringify([n,p,c])):(y||y===0)&&(_=_.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),f+=1,g=Math.max(g,(m=_)[0]=="-"?0:a0(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),u+=(u?";":"")+ve(y).map(E=>d.s(_,is(""+E,d.theme)+(p?" !important":""))).join(";"));else if(_[0]=="@"||_.includes("&")){let E=n;_[0]=="@"&&(_=_.replace(/\bscreen\(([^)]+)\)/g,(x,b)=>{let N=d.theme("screens",b);return N?(E|=67108864,ns(N,"")):x}),E|=Bi(_)),a.push(...s(y,{n:h,p:E,r:[...l,_],i:p},d))}else a.push(...s(y,{p:n,r:[...l,_]},d))}return a.unshift({n:h,p:n,o:Math.max(0,15-f)+1.5*Math.min(g||15,15),r:l,d:u}),a.sort(u0)}(t,os(e,r,o,i),r)}function is(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,o,i,s,c="")=>{let h=e(i,c);return typeof h=="function"&&/color|fill|stroke/i.test(i)?Kt(h):""+ve(h).filter(n=>Object(n)!==n)})}function d0(t,e){let r,o=[];for(let i of t)i.d&&i.n?r?.p==i.p&&""+r.r==""+i.r?(r.c=[r.c,i.c].filter(Boolean).join(" "),r.d=r.d+";"+i.d):o.push(r={...i,n:i.n&&e}):o.push({...i,n:i.n&&e});return o}function io(t,e,r=Ue.u,o,i){let s=[];for(let c of t)for(let h of function(n,l,p,d,a){let u=function(g,f){let v=c0.get(g.n);return v?v(g,f):f.r(g.n,g.v[0]=="dark")}(n={...n,i:n.i||a},l);return u?typeof u=="string"?({r:d,p}=os(n,l,p,d),d0(io(so(u),l,p,d,n.i),n.n)):Array.isArray(u)?u.map(g=>{var f,v;return{o:0,...g,r:[...ve(d),...ve(g.r)],p:(f=p,v=g.p??p,f&~Ue.o|v)}}):f0(u,n,l,p,d):[{c:rs(n),p:0,o:0,r:[]}]}(c,e,r,o,i))s.splice(l0(s,h),0,h);return s}function ss(t,e,r,o,i,s,c,h){return d0((h?r.flatMap(n=>io([n],o,i,s,c)):io(r,o,i,s,c)).map(n=>n.p&Ue.o&&(n.n||e==Ue.b)?{...n,p:n.p&~Ue.o|e,o:0}:n),t)}function Zd(t,e,r,o){return c0.set(t,(i,s)=>{let{n:c,p:h,r:n,i:l}=os(i,s,e);return r&&ss(c,e,r,s,h,n,l,o)}),t}function pi(t,e,r){if(t[t.length-1]!="("){let o=[],i=!1,s=!1,c="";for(let h of t)if(h!="("&&!/[~@]$/.test(h)){if(h[0]=="!"&&(h=h.slice(1),i=!i),h.endsWith(":")){o[h=="dark:"?"unshift":"push"](h.slice(0,-1));continue}h[0]=="-"&&(h=h.slice(1),s=!s),h.endsWith("-")&&(h=h.slice(0,-1)),h&&h!="&"&&(c+=(c&&"-")+h)}c&&(s&&(c="-"+c),e[0].push({n:c,v:o.filter(Kd),i}))}}function Kd(t,e,r){return r.indexOf(t)==e}var Rc=new Map;function so(t){let e=Rc.get(t);if(!e){let r=[],o=[[]],i=0,s=0,c=null,h=0,n=(l,p=0)=>{i!=h&&(r.push(t.slice(i,h+p)),l&&pi(r,o)),i=h+1};for(;h<t.length;h++){let l=t[h];if(s)t[h-1]!="\\"&&(s+=+(l=="[")||-(l=="]"));else if(l=="[")s+=1;else if(c)t[h-1]!="\\"&&c.test(t.slice(h))&&(c=null,i=h+RegExp.lastMatch.length);else if(l!="/"||t[h-1]=="\\"||t[h+1]!="*"&&t[h+1]!="/")if(l=="(")n(),r.push(l);else if(l==":")t[h+1]!=":"&&n(!1,1);else if(/[\s,)]/.test(l)){n(!0);let p=r.lastIndexOf("(");if(l==")"){let d=r[p-1];if(/[~@]$/.test(d)){let a=o.shift();r.length=p,pi([...r,"#"],o);let{v:u}=o[0].pop();for(let g of a)g.v.splice(+(g.v[0]=="dark")-+(u[0]=="dark"),u.length);pi([...r,Zd(d.length>1?d.slice(0,-1)+oo(JSON.stringify([d,a])):d+"("+Wd(a)+")",Ue.a,a,/@$/.test(d))],o)}p=r.lastIndexOf("(",p-1)}r.length=p+1}else/[~@]/.test(l)&&t[h+1]=="("&&o.unshift([]);else c=t[h+1]=="*"?/^\*\//:/^[\r\n]/}n(!0),Rc.set(t,e=o[0])}return e}function X(t,e,r){return[t,Hi(e,r)]}function Hi(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(r,o)=>({[t]:e?e(r,o):ji(r,1)}):r=>t||{[r[1]]:ji(r,2)}}function ji(t,e,r=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${r} * -1)`:r}function Q(t,e,r,o){return[t,zd(e,r,o)]}function zd(t,e,r){let o=typeof e=="string"?(i,s)=>({[e]:r?r(i,s):i._}):e||(({1:i,_:s},c,h)=>({[i||h]:s}));return(i,s)=>{let c=h0(t||i[1]),h=s.theme(c,i.$$)??zt(i.$$,c,s);if(h!=null)return i._=ji(i,0,h),o(i,s,c)}}function Ve(t,e={},r){return[t,qd(e,r)]}function qd(t={},e){return(r,o)=>{let{section:i=h0(r[0]).replace("-","")+"Color"}=t,[s,c]=(r.$$.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1);if(!s)return;let h=o.theme(i,s)||zt(s,i,o);if(!h||typeof h=="object")return;let{opacityVariable:n=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:l=i.replace("Color","Opacity"),property:p=i,selector:d}=t,a=o.theme(l,c||"DEFAULT")||c&&zt(c,l,o),u=e||(({_:f})=>{let v=qn(p,f);return d?{[d]:v}:v});r._={value:Kt(h,{opacityVariable:n||void 0,opacityValue:a||void 0}),color:f=>Kt(h,f),opacityVariable:n||void 0,opacityValue:a||void 0};let g=u(r,o);if(!r.dark){let f=o.d(i,s,h);f&&f!==h&&(r._={value:Kt(f,{opacityVariable:n||void 0,opacityValue:a||"1"}),color:v=>Kt(f,v),opacityVariable:n||void 0,opacityValue:a||void 0},g={"&":g,[o.v("dark")]:u(r,o)})}return g}}function qn(t,e){let r={};return typeof e=="string"?r[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(r[e.opacityVariable]=e.opacityValue||"1"),r[t]=e.value),r}function zt(t,e,r){if(t[0]=="["&&t.slice(-1)=="]"){if(t=tn(is(t.slice(1,-1),r.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!/^color:/.test(t)&&!/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t)||/image/i.test(e)&&!/^image:/.test(t)&&!/^[a-z-]+\(/.test(t)||/weight/i.test(e)&&!/^(number|any):/.test(t)&&!/^\d+$/.test(t)||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function h0(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function tn(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,r="",o,i="")=>tn(r)+o+tn(i)):t.replace(/(^|[^\\])_+/g,(e,r)=>r+" ".repeat(e.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}function Ic({presets:t=[],...e}){let r={darkMode:void 0,darkColor:void 0,preflight:e.preflight!==!1&&[],theme:{},variants:ve(e.variants),rules:ve(e.rules),ignorelist:ve(e.ignorelist),hash:void 0,stringify:(o,i)=>o+":"+i,finalize:[]};for(let o of ve([...t,{darkMode:e.darkMode,darkColor:e.darkColor,preflight:e.preflight!==!1&&ve(e.preflight),theme:e.theme,hash:e.hash,stringify:e.stringify,finalize:e.finalize}])){let{preflight:i,darkMode:s=r.darkMode,darkColor:c=r.darkColor,theme:h,variants:n,rules:l,ignorelist:p,hash:d=r.hash,stringify:a=r.stringify,finalize:u}=typeof o=="function"?o(r):o;r={preflight:r.preflight!==!1&&i!==!1&&[...r.preflight,...ve(i)],darkMode:s,darkColor:c,theme:{...r.theme,...h,extend:{...r.theme.extend,...h?.extend}},variants:[...r.variants,...ve(n)],rules:[...r.rules,...ve(l)],ignorelist:[...r.ignorelist,...ve(p)],hash:d,stringify:a,finalize:[...r.finalize,...ve(u)]}}return r}function kc(t,e,r,o,i,s){for(let c of e){let h=r.get(c);h||r.set(c,h=o(c));let n=h(t,i,s);if(n)return n}}function Yd(t){var e;return Fi(t[0],typeof(e=t[1])=="function"?e:()=>e)}function Jd(t){return Array.isArray(t)?Fi(t[0],Hi(t[1],t[2])):Fi(t,Hi(void 0,void 0))}function Fi(t,e){return p0(t,(r,o,i,s)=>{let c=o.exec(r);if(c)return c.$$=r.slice(c[0].length),c.dark=s,e(c,i)})}function p0(t,e){let r=ve(t).map(Xd);return(o,i,s)=>{for(let c of r){let h=e(o,c,i,s);if(h)return h}}}function Xd(t){return typeof t=="string"?RegExp("^"+t+(t.includes("$")||t.slice(-1)=="-"?"":"$")):t}function gi(t){let e=t?.cssRules?t:(t&&typeof t!="string"?t:function(r){let o=document.querySelector(r||'style[data-twind=""]');return o&&o.tagName=="STYLE"||(o=document.createElement("style"),document.head.prepend(o)),o.dataset.twind="claimed",o}(t)).sheet;return{target:e,snapshot(){let r=Array.from(e.cssRules,o=>o.cssText);return()=>{this.clear(),r.forEach(this.insert)}},clear(){for(let r=e.cssRules.length;r--;)e.deleteRule(r)},destroy(){e.ownerNode?.remove()},insert(r,o){try{e.insertRule(r,o)}catch{e.insertRule(":root{}",o)}},resume:Mi}}var Vi={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...tt(4,"rem",4,.5,.5),...tt(12,"rem",4,5),14:"3.5rem",...tt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:fe("blur"),backdropBrightness:fe("brightness"),backdropContrast:fe("contrast"),backdropGrayscale:fe("grayscale"),backdropHueRotate:fe("hueRotate"),backdropInvert:fe("invert"),backdropOpacity:fe("opacity"),backdropSaturate:fe("saturate"),backdropSepia:fe("sepia"),backgroundColor:fe("colors"),backgroundImage:{none:"none"},backgroundOpacity:fe("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...tt(200,"",100,0,50),...tt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:fe("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:fe("spacing"),borderWidth:{DEFAULT:"1px",...st(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:fe("colors"),caretColor:fe("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...tt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:fe("borderColor"),divideOpacity:fe("borderOpacity"),divideWidth:fe("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),...jr(2,6),...jr(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:fe("spacing"),gradientColorStops:fe("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),...jr(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),...jr(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...tt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...tt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:fe("spacing"),placeholderColor:fe("colors"),placeholderOpacity:fe("opacity"),outlineColor:fe("colors"),outlineOffset:st(8,"px"),outlineWidth:st(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:fe("colors"),ringOffsetWidth:st(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...st(8,"px")},rotate:{...st(2,"deg"),...st(12,"deg",3),...st(180,"deg",45)},saturate:tt(200,"",100,0,50),scale:{...tt(150,"",100,0,50),...tt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:fe("spacing"),scrollPadding:fe("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...st(2,"deg"),...st(12,"deg",3)},space:fe("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:tt(2),textColor:fe("colors"),textDecorationColor:fe("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...st(8,"px")},textUnderlineOffset:{auto:"auto",...st(8,"px")},textIndent:fe("spacing"),textOpacity:fe("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:fe("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),...jr(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...tt(50,"",1,0,10),auto:"auto"}};function jr(t,e){let r={};do for(var o=1;o<t;o++)r[`${o}/${t}`]=Number((o/t*100).toFixed(6))+"%";while(++t<=e);return r}function st(t,e,r=0){let o={};for(;r<=t;r=2*r||1)o[r]=r+e;return o}function tt(t,e="",r=1,o=0,i=1,s={}){for(;o<=t;o+=i)s[o]=o/r+e;return s}function fe(t){return({theme:e})=>e(t)}var Qd={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Vi.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Vi.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},eh=[X("\\[([-\\w]+):(.+)]",({1:t,2:e},r)=>({"@layer overrides":{"&":{[t]:zt(`[${e}]`,"",r)}}})),X("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),Q("aspect-","aspectRatio"),X("container",(t,{theme:e})=>{let{screens:r=e("screens"),center:o,padding:i}=e("container"),s={width:"100%",marginRight:o&&"auto",marginLeft:o&&"auto",...c("xs")};for(let h in r){let n=r[h];typeof n=="string"&&(s[ns(n)]={"&":{maxWidth:n,...c(h)}})}return s;function c(h){let n=i&&(typeof i=="string"?i:i[h]||i.DEFAULT);if(n)return{paddingRight:n,paddingLeft:n}}}),Q("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),X("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),X("box-(border|content)","boxSizing",({1:t})=>t+"-box"),X("hidden",{display:"none"}),X("table-(auto|fixed)","tableLayout"),X(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",X("isolate","isolation"),X("object-(contain|cover|fill|none|scale-down)","objectFit"),Q("object-","objectPosition"),X("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",jn),X("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),X("(static|fixed|absolute|relative|sticky)","position"),Q("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),Q("-?(top|bottom|left|right)(?:$|-)","inset"),X("(visible|collapse)","visibility"),X("invisible",{visibility:"hidden"}),Q("-?z-","zIndex"),X("flex-((row|col)(-reverse)?)","flexDirection",Lc),X("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),Q("(flex-(?:grow|shrink))(?:$|-)"),Q("(flex)-"),Q("grow(?:$|-)","flexGrow"),Q("shrink(?:$|-)","flexShrink"),Q("basis-","flexBasis"),Q("-?(order)-"),"-?(order)-(\\d+)",Q("grid-cols-","gridTemplateColumns"),X("grid-cols-(\\d+)","gridTemplateColumns",Mc),Q("col-","gridColumn"),X("col-(span)-(\\d+)","gridColumn",Dc),Q("col-start-","gridColumnStart"),X("col-start-(auto|\\d+)","gridColumnStart"),Q("col-end-","gridColumnEnd"),X("col-end-(auto|\\d+)","gridColumnEnd"),Q("grid-rows-","gridTemplateRows"),X("grid-rows-(\\d+)","gridTemplateRows",Mc),Q("row-","gridRow"),X("row-(span)-(\\d+)","gridRow",Dc),Q("row-start-","gridRowStart"),X("row-start-(auto|\\d+)","gridRowStart"),Q("row-end-","gridRowEnd"),X("row-end-(auto|\\d+)","gridRowEnd"),X("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>jn(Lc(t))),X("grid-flow-(dense)","gridAutoFlow"),Q("auto-cols-","gridAutoColumns"),Q("auto-rows-","gridAutoRows"),Q("gap-x(?:$|-)","gap","columnGap"),Q("gap-y(?:$|-)","gap","rowGap"),Q("gap(?:$|-)","gap"),"(justify-(?:items|self))-",X("justify-","justifyContent",Pc),X("(content|items|self)-",t=>({["align-"+t[1]]:Pc(t)})),X("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),Q("p([xytrbl])?(?:$|-)","padding",br("padding")),Q("-?m([xytrbl])?(?:$|-)","margin",br("margin")),Q("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),X("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),Q("w-","width"),Q("min-w-","minWidth"),Q("max-w-","maxWidth"),Q("h-","height"),Q("min-h-","minHeight"),Q("max-h-","maxHeight"),Q("font-","fontWeight"),Q("font-","fontFamily",({_:t})=>typeof(t=ve(t))[1]=="string"?{fontFamily:dt(t)}:{fontFamily:dt(t[0]),...t[1]}),X("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),X("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),X("italic","fontStyle"),X("not-italic",{fontStyle:"normal"}),X("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:r})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(r?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...Vt({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),Q("tracking-","letterSpacing"),Q("leading-","lineHeight"),X("list-(inside|outside)","listStylePosition"),Q("list-","listStyleType"),X("list-","listStyleType"),Q("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),Ve("placeholder-",{property:"color",selector:"&::placeholder"}),X("text-(left|center|right|justify|start|end)","textAlign"),X("text-(ellipsis|clip)","textOverflow"),Q("text-opacity-","textOpacity","--tw-text-opacity"),Ve("text-",{property:"color"}),Q("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),Q("indent-","textIndent"),X("(overline|underline|line-through)","textDecorationLine"),X("no-underline",{textDecorationLine:"none"}),Q("underline-offset-","textUnderlineOffset"),Ve("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),Q("decoration-","textDecorationThickness"),X("decoration-","textDecorationStyle"),X("(uppercase|lowercase|capitalize)","textTransform"),X("normal-case",{textTransform:"none"}),X("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),X("align-","verticalAlign"),X("whitespace-","whiteSpace"),X("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),X("break-words",{overflowWrap:"break-word"}),X("break-all",{wordBreak:"break-all"}),X("break-keep",{wordBreak:"keep-all"}),Ve("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ve("accent-",{opacityVariable:!1,opacitySection:"opacity"}),X("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${ar(t," ")},var(--tw-gradient-stops))`),Ve("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ve("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),Ve("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),X("bg-(fixed|local|scroll)","backgroundAttachment"),X("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),X(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),X("bg-blend-","backgroundBlendMode"),X("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),Q("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ve("bg-",{section:"backgroundColor"}),Q("bg-","backgroundImage"),Q("bg-","backgroundPosition"),X("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",jn),Q("bg-","backgroundSize"),Q("rounded(?:$|-)","borderRadius"),Q("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let r={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${ar(r[0])}-radius`]:e,[`border-${ar(r[1])}-radius`]:e}}),X("border-(collapse|separate)","borderCollapse"),Q("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),X("border-(solid|dashed|dotted|double|none)","borderStyle"),Q("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...Vt({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ve("border-([xytrbl])-",{section:"borderColor"},br("border","Color")),Ve("border-"),Q("border-([xytrbl])(?:$|-)","borderWidth",br("border","Width")),Q("border(?:$|-)","borderWidth"),Q("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),X("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),X("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),Q("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let r={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${ar(r[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${ar(r[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),Ve("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),Q("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ve("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),Q("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),X("ring-inset",{"--tw-ring-inset":"inset"}),Ve("ring-",{property:"--tw-ring-color"}),Q("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...Vt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Kt(e("ringOffsetColor","","#fff")),"--tw-ring-color":Kt(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),Ve("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),Q("shadow(?:$|-)","boxShadow",({_:t})=>({...Vt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":dt(t),"--tw-shadow-colored":dt(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),Q("(opacity)-"),X("mix-blend-","mixBlendMode"),...Uc(),...Uc("backdrop-"),Q("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:dt(t),transitionTimingFunction:t._=="none"?void 0:dt(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:dt(e("transitionDuration",""))})),Q("duration(?:$|-)","transitionDuration","transitionDuration",dt),Q("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",dt),Q("delay(?:$|-)","transitionDelay","transitionDelay",dt),Q("animate(?:$|-)","animation",(t,{theme:e,h:r,e:o})=>{let i=dt(t),s=i.split(" "),c=e("keyframes",s[0]);return c?{["@keyframes "+(s[0]=o(r(s[0])))]:c,animation:s.join(" ")}:{animation:i}}),"(transform)-(none)",X("transform",Wi),X("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":g0(t=="gpu")})),Q("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Wi()})),Q("-?(rotate)-","rotate",yi),Q("-?(translate-[xy])-","translate",yi),Q("-?(skew-[xy])-","skew",yi),X("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",jn),"(appearance)-",Q("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",Q("(cursor)-"),"(cursor)-",X("snap-(none)","scroll-snap-type"),X("snap-(x|y|both)",({1:t})=>({...Vt({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),X("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),X("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),X("snap-(normal|always)","scroll-snap-stop"),X("scroll-(auto|smooth)","scroll-behavior"),Q("scroll-p([xytrbl])?(?:$|-)","padding",br("scroll-padding")),Q("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",br("scroll-margin")),X("touch-(auto|none|manipulation)","touch-action"),X("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:r})=>({...Vt({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":r?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),X("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),X("outline",{outlineStyle:"solid"}),X("outline-(dashed|dotted|double)","outlineStyle"),Q("-?(outline-offset)-"),Ve("outline-",{opacityVariable:!1,opacitySection:"opacity"}),Q("outline-","outlineWidth"),"(pointer-events)-",Q("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],X("select-(none|text|all|auto)","userSelect"),Ve("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ve("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),Q("stroke-","strokeWidth"),X("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),X("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function jn(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function Lc(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function ar(t,e="-"){let r=[];for(let o of t)r.push({t:"top",r:"right",b:"bottom",l:"left"}[o]);return r.join(e)}function dt(t){return t&&""+(t._||t)}function Pc({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function br(t,e=""){return({1:r,_:o})=>{let i={x:"lr",y:"tb"}[r]||r+r;return i?{...qn(t+"-"+ar(i[0])+e,o),...qn(t+"-"+ar(i[1])+e,o)}:qn(t+e,o)}}function Uc(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),r={};for(let o of e)r[`--tw-${t}${o}`]="var(--tw-empty,/*!*/ /*!*/)";return r={...Vt(r),[`${t}filter`]:e.map(o=>`var(--tw-${t}${o})`).join(" ")},[`(${t}filter)-(none)`,X(`${t}filter`,r),...e.map(o=>Q(`${o[0]=="h"?"-?":""}(${t}${o})(?:$|-)`,o,({1:i,_:s})=>({[`--tw-${i}`]:ve(s).map(c=>`${o}(${c})`).join(" "),...r})))]}function yi({1:t,_:e}){return{["--tw-"+t]:e,...Wi()}}function Wi(){return{...Vt({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":g0()}),transform:"var(--tw-transform)"}}function g0(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Dc({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function Mc({1:t}){return`repeat(${t},minmax(0,1fr))`}function Vt(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var th=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["(portrait|landscape)",({1:t})=>`@media (orientation:${t})`],["contrast-(more|less)",({1:t})=>`@media (prefers-contrast:${t})`],["(first-(letter|line)|placeholder|backdrop|before|after)",({1:t})=>`&::${t}`],["(marker|selection)",({1:t})=>`& *::${t},&::${t}`],["file","&::file-selector-button"],["(first|last|only)",({1:t})=>`&:${t}-child`],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["(aria|data)-",({1:t,$$:e},r)=>e&&`&[${t}-${r.theme(t,e)||zt(e,"",r)||`${e}="true"`}]`],["((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",({2:t,3:e="",4:r,5:o="",6:i=e},{e:s,h:c,v:h})=>{let n=tn(o)||(r[0]=="["?r:h(r.slice(1)));return`${(n.includes("&")?n:"&"+n).replace(/&/g,`:merge(.${s(c(t+i))})`)}${t[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:t})=>`[dir="${t}"] &`],["supports-",({$$:t},e)=>{if(t&&(t=e.theme("supports",t)||zt(t,"",e)),t)return t.includes(":")||(t+=":var(--tw)"),/^\w*\s*\(/.test(t)||(t=`(${t})`),`@supports ${t.replace(/\b(and|or|not)\b/g," $1 ").trim()}`}],["max-",({$$:t},e)=>{if(t&&(t=e.theme("screens",t)||zt(t,"",e)),typeof t=="string")return`@media not all and (min-width:${t})`}],["min-",({$$:t},e)=>(t&&(t=zt(t,"",e)),t&&`@media (min-width:${t})`)],[/^\[(.+)]$/,({1:t})=>/[&@]/.test(t)&&tn(t).replace(/[}]+$/,"").split("{")]],rh={__proto__:null,slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}};function nh({disablePreflight:t}={}){return function({colors:e,disablePreflight:r}={}){return{preflight:r?void 0:Qd,theme:{...Vi,colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",...e}},variants:th,rules:eh,finalize:o=>o.n&&o.d&&o.r.some(i=>/^&::(before|after)$/.test(i))&&!/(^|;)content:/.test(o.d)?{...o,d:"content:var(--tw-content);"+o.d}:o}}({colors:rh,disablePreflight:t})}var oh=typeof ShadowRoot<"u"&&(typeof ShadyCSS>"u"||ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;function mi(t){return t.shadowRoot||t.attachShadow({mode:"open"})}var bi={"brand-light":"var(--bc-color-brand, #196CE7)","brand-dark":"var(--bc-color-brand-dark, var(--bc-color-brand, #3994FF))","brand-mixed-light":"color-mix(in srgb, var(--bc-color-brand, #196CE7) var(--bc-brand-mix, 100%), black)","brand-mixed-dark":"color-mix(in srgb, var(--bc-color-brand-dark, var(--bc-color-brand, #3994FF)) var(--bc-brand-mix, 100%), white)","foreground-light":"#000","foreground-dark":"#fff","background-light":"#fff","background-dark":"#000","neutral-primary-light":"#262626","neutral-primary-dark":"#E4E4E4","neutral-secondary-light":"#525252","neutral-secondary-dark":"#A2A2A2","neutral-tertiary-light":"#A2A2A2","neutral-tertiary-dark":"#525252"},ih={"glass-light":"linear-gradient(180deg, rgba(211, 211, 211, 0.20) 0%, rgba(255, 255, 255, 0.20) 50%);","glass-dark":"linear-gradient(180deg, rgba(211, 211, 211, 0.10) 0%, rgba(0, 0, 0, 0.20) 50%)"},Se=()=>globalThis.window?function(t,e=!0){let r=function(){if(oh)try{let n=gi(new CSSStyleSheet);return n.connect=l=>{let p=mi(l);p.adoptedStyleSheets=[...p.adoptedStyleSheets,n.target]},n.disconnect=Mi,n}catch{}let s=document.createElement("style");s.media="not all",document.head.prepend(s);let c=[gi(s)],h=new WeakMap;return{get target(){return c[0].target},snapshot(){let n=c.map(l=>l.snapshot());return()=>n.forEach(l=>l())},clear(){c.forEach(n=>n.clear())},destroy(){c.forEach(n=>n.destroy())},insert(n,l,p){c[0].insert(n,l,p);let d=this.target.cssRules[l];c.forEach((a,u)=>u&&a.target.insertRule(d.cssText,l))},resume:(n,l)=>c[0].resume(n,l),connect(n){let l=document.createElement("style");mi(n).appendChild(l);let p=gi(l),{cssRules:d}=this.target;for(let a=0;a<d.length;a++)p.target.insertRule(d[a].cssText,a);c.push(p),h.set(n,p)},disconnect(n){let l=c.indexOf(h.get(n));l>=0&&c.splice(l,1)}}}(),o=function(s,c){let h=Ic(s),n=function({theme:u,darkMode:g,darkColor:f=Mi,variants:v,rules:m,hash:_,stringify:y,ignorelist:E,finalize:x}){let b=new Map,N=new Map,O=new Map,w=new Map,C=p0(E,(k,L)=>L.test(k));v.push(["dark",Array.isArray(g)||g=="class"?`${ve(g)[1]||".dark"} &`:typeof g=="string"&&g!="media"?g:"@media (prefers-color-scheme:dark)"]);let A=typeof _=="function"?k=>_(k,oo):_?oo:Oc;A!==Oc&&x.push(k=>({...k,n:k.n&&A(k.n),d:k.d?.replace(/--(tw(?:-[\w-]+)?)\b/g,(L,U)=>"--"+A(U).replace("#",""))}));let S={theme:function({extend:k={},...L}){let U={},M={get colors(){return H("colors")},theme:H,negative:()=>({}),breakpoints(j){let $={};for(let D in j)typeof j[D]=="string"&&($["screen-"+D]=j[D]);return $}};return H;function H(j,$,D,F){if(j){if({1:j,2:F}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(j)||[,j],/[.[]/.test(j)){let I=[];j.replace(/\[([^\]]+)\]|([^.[]+)/g,(R,P,V=P)=>I.push(V)),j=I.shift(),D=$,$=I.join("-")}let W=U[j]||Object.assign(Object.assign(U[j]={},Z(L,j)),Z(k,j));if($==null)return W;$||($="DEFAULT");let T=W[$]??$.split("-").reduce((I,R)=>I?.[R],W)??D;return F?Kt(T,{opacityValue:is(F,H)}):T}let K={};for(let W of[...Object.keys(L),...Object.keys(k)])K[W]=H(W);return K}function Z(j,$){let D=j[$];return typeof D=="function"&&(D=D(M)),D&&/color|fill|stroke/i.test($)?function F(K,W=[]){let T={};for(let I in K){let R=K[I],P=[...W,I];T[P.join("-")]=R,I=="DEFAULT"&&(P=W,T[W.join("-")]=R),typeof R=="object"&&Object.assign(T,F(R,P))}return T}(D):D}}(u),e:s0,h:A,s:(k,L)=>y(k,L,S),d:(k,L,U)=>f(k,L,S,U),v:k=>(b.has(k)||b.set(k,kc(k,v,N,Yd,S)||"&:"+k),b.get(k)),r(k,L){let U=JSON.stringify([k,L]);return O.has(U)||O.set(U,!C(k,S)&&kc(k,m,w,Jd,S,L)),O.get(U)},f:k=>x.reduce((L,U)=>U(L,S),k)};return S}(h),l=new Map,p=[],d=new Set;function a(u){let g=n.f(u),f=$i(g);if(f&&!d.has(f)){d.add(f);let v=l0(p,u);c.insert(f,v,u),p.splice(v,0,u)}return g.n}return c.resume(u=>l.set(u,u),(u,g)=>{c.insert(u,p.length,g),p.push(g),d.add(u)}),Object.defineProperties(function(u){if(!l.size)for(let f of ve(h.preflight))typeof f=="function"&&(f=f(n)),f&&(typeof f=="string"?ss("",Ue.b,so(f),n,Ue.b,[],!1,!0):f0(f,{},n,Ue.b)).forEach(a);let g=l.get(u=""+u);if(!g){let f=new Set;for(let v of io(so(u),n))f.add(v.c).add(a(v));g=[...f].filter(Boolean).join(" "),l.set(u,g).set(g,g)}return g},Object.getOwnPropertyDescriptors({get target(){return c.target},theme:n.theme,config:h,snapshot(){let u=c.snapshot(),g=new Set(d),f=new Map(l),v=[...p];return()=>{u(),d=g,l=f,p=v}},clear(){c.clear(),d=new Set,l=new Map,p=[]},destroy(){this.clear(),c.destroy()}}))}({...t,hash:t.hash??e},r),i=function(s){let c=new MutationObserver(h);return{observe(l){c.observe(l,{attributeFilter:["class"],subtree:!0,childList:!0}),n(l),h([{target:l,type:""}])},disconnect(){c.disconnect()}};function h(l){for(let{type:p,target:d}of l)if(p[0]=="a")n(d);else for(let a of d.querySelectorAll("[class]"))n(a);c.takeRecords()}function n(l){let p,d=l.getAttribute?.("class");d&&function(a,u){return a!=u&&""+a.split(" ").sort()!=""+u.split(" ").sort()}(d,p=s(d))&&l.setAttribute("class",p)}}(o);return function(s){return class extends s{connectedCallback(){super.connectedCallback?.(),r.connect(this),i.observe(mi(this))}disconnectedCallback(){r.disconnect(this),super.disconnectedCallback?.()}constructor(...c){super(...c),this.tw=o}}}}(Ic({darkMode:globalThis.bcDarkMode,theme:{fontFamily:{sans:["Inter","sans-serif"],mono:["Roboto Mono","monospace"]},extend:{borderColor:Zt({},bi),backgroundColor:Zt({},bi),textColor:Zt({},bi),backgroundImage:Zt({},ih),animation:{darken:"darken 0.2s ease-out forwards","fade-in":"fade-in 0.2s ease-out forwards"},keyframes:{darken:{"0%":{opacity:0},"100%":{opacity:.5}},lighten:{"0%":{opacity:.5},"100%":{opacity:0}},"fade-in":{"0%":{opacity:0},"100%":{opacity:1}},"fade-out":{"0%":{opacity:1},"100%":{opacity:0}}}}},presets:[nh({})],hash:!1})):sh;function sh(t){return t}var Bc,y0=_e(Bc||(Bc=(t=>t)`
<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
`)),Qe="transition-all hover:brightness-90 dark:hover:brightness-110 active:scale-95 cursor-pointer",Gi="hover-animation",Te="text-brand-mixed-light dark:text-brand-mixed-dark",as="text-foreground-light dark:text-foreground-dark",Zi="text-neutral-primary-light dark:text-neutral-primary-dark",De="text-neutral-secondary-light dark:text-neutral-secondary-dark",Rt="text-neutral-tertiary-light dark:text-neutral-tertiary-dark",ao="border-neutral-secondary-light dark:border-neutral-secondary-dark",cs="border-neutral-tertiary-light dark:border-neutral-tertiary-dark",$c,Hc,jc,Ki=t=>t;function m0(){return te($c||($c=Ki`<div
    class="absolute top-0 left-0 w-full h-full rounded-lg border-2 pointer-events-none ${0} opacity-5"
  ></div>`),cs)}function ah(t){ne.getState().connected&&t(ne.getState().provider);let e=ne.subscribe(async(r,o)=>{if(r.connected&&!o.connected){if(!r.provider)throw new Error("No provider available");t(r.provider)}});return()=>{e()}}function T4(t){ne.getState().connecting&&t();let e=ne.subscribe(async(r,o)=>{r.connecting&&!o.connecting&&t()});return()=>{e()}}function R4(t){let e=ne.subscribe(async(r,o)=>{!r.connected&&o.connected&&t()});return()=>{e()}}function I4(t){let e=ne.subscribe(async(r,o)=>{r.modalOpen&&!o.modalOpen&&t()});return()=>{e()}}function b0(t){let e=ne.subscribe(async(r,o)=>{!r.modalOpen&&o.modalOpen&&t()});return()=>{e()}}async function k4(){let t=ne.getState().provider;if(!t&&(w0(),await new Promise((e,r)=>{let o=b0(()=>{o(),i(),t&&e(),r("Modal closed without connecting")}),i=ah(s=>{t=s})}),!t))throw new Error("No WebLN provider available");return t}function L4(){return console.warn("Bitcoin Connect: isConnected is deprecated and will be removed in the next major version"),ne.getState().connected}function P4(t={}){ne.getState().setAppName(t.appName),ne.getState().setFilters(t.filters),ne.getState().setShowBalance(t.showBalance),ne.getState().setProviderConfig(t.providerConfig)}function w0(){let t=document.createElement("bc-modal"),e=document.createElement("bc-connect");e.setAttribute("closable","closable"),t.appendChild(e),document.body.appendChild(t),ne.getState().setModalOpen(!0)}function ch({invoice:t,onPaid:e,onCancelled:r}){if(document.querySelector("bc-modal"))throw new Error("bc-modal already in DOM");let o=document.createElement("bc-modal"),i=document.createElement("bc-payment");i.setAttribute("closable","closable"),i.setAttribute("invoice",t),o.appendChild(i);let s=!1,c=n=>{s=!0,e?.(n.detail)};window.addEventListener("bc:onpaid",c);let h=b0(()=>{h(),window.removeEventListener("bc:onpaid",c),s||r==null||r()});return document.body.appendChild(o),ne.getState().setModalOpen(!0),{setPaid:n=>{i.setAttribute("paid","paid"),i.dispatchEvent(new CustomEvent("bc:onpaid",{bubbles:!0,composed:!0,detail:n}))}}}function v0(){let t=document.querySelector("bc-modal");t&&document.body.removeChild(t),ne.getState().setModalOpen(!1),ne.getState().clearRouteHistory(),ne.getState().setError(void 0)}function U4(){ne.getState().disconnect()}function D4(){return ne.getState().config}var Fc,lh=t=>t,Fr=class extends Se()(he){constructor(){super(),this._loadBalance(),this._selectedCurrency=ne.getState().currency,ne.subscribe((t,e)=>{this._selectedCurrency=t.currency,t.currency!==e.currency&&this._convertBalance(),t.connected!==e.connected&&t.connected&&this._loadBalance()})}render(){return te(Fc||(Fc=lh` <span
      class="font-medium font-sans mr-2 flex justify-center items-center gap-0.5 ${0}"
    >
      <span class="font-mono">${0} </span></span
    >`),Te,this._balance||"Loading...")}async _convertBalance(){if(this._balanceSats)if(this._selectedCurrency&&this._selectedCurrency!=="sats")try{let t=await Ya.getFiatValue({satoshi:this._balanceSats,currency:this._selectedCurrency}),e=parseFloat(t.toFixed(2));this._balance=new Intl.NumberFormat(void 0,{style:"currency",currency:this._selectedCurrency}).format(e)}catch(t){console.error(t)}else this._balance=this._balanceSats.toLocaleString(void 0,{useGrouping:!0})+" sats"}_loadBalance(){var t=this;(async function(){try{let e=ne.getState().provider;if(!e)return;if(!e.getBalance)throw new Error("The current WebLN provider does not support getBalance");let r=await e.getBalance();r&&(t._balanceSats=r.balance,t._convertBalance())}catch(e){t._balance="\u26A0\uFE0F",console.error(e)}})()}};re([Ee()],Fr.prototype,"_balance",void 0),re([Ee()],Fr.prototype,"_balanceSats",void 0),re([Ee()],Fr.prototype,"_selectedCurrency",void 0),Fr=re([ge("bc-balance")],Fr);var Vc,Wc,Gc,Zc,Kc,zc,qc,Yc,or=t=>t,Fn=class extends Se()(he){constructor(){super(),this.title="Connect Wallet",this._showBalance=void 0,this._showBalance=ne.getState().showBalance,ne.subscribe(t=>{this._showBalance=t.showBalance})}render(){let t=this._connecting||!this._connected&&this._modalOpen;return te(Vc||(Vc=or`<div>
      <div
        class="relative inline-flex ${0} cursor-pointer 
          rounded-lg gap-2 justify-center items-center"
        @click=${0}
      >
        <div
          class="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none ${0}"
        ></div>
        ${0}
        <bci-button variant="primary">
          ${0}
          <span class="font-semibold">
            ${0}
          </span>
        </bci-button>
        ${0}
      </div>
    </div>`),Qe,this._onClick,this._connected?"bg-glass-light dark:bg-glass-dark":"",this._connected?m0():"",t?te(Wc||(Wc=or`<span class="ml-1 mr-1">${0}</span>`),y0):this._connected?null:te(Gc||(Gc=or`<span class="-ml-0.5">${0}</span>`),Kr),t?te(Zc||(Zc=or`Connecting...`)):this._connected?te(Kc||(Kc=or`Connected`)):te(zc||(zc=or`${0}`),this.title),this._connected&&this._showBalance!==!1?te(qc||(qc=or`<bc-balance class="select-none cursor-pointer"></bc-balance> `)):null)}_onClick(){w0()}};re([Me()],Fn.prototype,"title",void 0),re([Ee()],Fn.prototype,"_showBalance",void 0),Fn=re([ge("bc-button")],Fn);var uh=_e(Yc||(Yc=(t=>t)`
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
<path d="M7 16.5106L13.5511 22L23 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`)),Jc,Xc,Qc,e1,t1,r1,wr=t=>t,ir=class extends Se()(he){constructor(){super(...arguments),this.title="Pay Now",this._waitingForInvoice=!1,this._paid=!1}updated(t){var e;super.updated(t),t.has("invoice")&&this.invoice&&this._waitingForInvoice&&this._launchModal(),t.has("preimage")&&this.preimage&&((e=this._setPaid)==null||e.call(this,{preimage:this.preimage}))}render(){let t=this._waitingForInvoice||this._modalOpen;return te(Jc||(Jc=wr` <div class="inline-flex" @click=${0}>
      <bci-button variant="primary">
        ${0}
        <span class="font-semibold">
          ${0}
        </span>
      </bci-button>
    </div>`),this._onClick,t?te(Xc||(Xc=wr`<span class="ml-1 mr-1">${0}</span>`),y0):this._paid?te(Qc||(Qc=wr`<span class="-ml-0.5">${0}</span>`),uh):te(e1||(e1=wr`<span class="-ml-0.5">${0}</span>`),Kr),t?te(t1||(t1=wr`Loading...`)):te(r1||(r1=wr`${0}`),this._paid?"Paid":this.title))}_onClick(){this._paid||(this._waitingForInvoice=!0,this.invoice&&this._launchModal())}_launchModal(){if(this._waitingForInvoice=!1,!this.invoice)throw new Error("No invoice available");let{setPaid:t}=ch({onPaid:()=>{this._paid=!0},invoice:this.invoice});this._setPaid=t}};re([Me()],ir.prototype,"title",void 0),re([Me()],ir.prototype,"invoice",void 0),re([Me({})],ir.prototype,"preimage",void 0),re([Ee()],ir.prototype,"_waitingForInvoice",void 0),re([Ee()],ir.prototype,"_paid",void 0),ir=re([ge("bc-pay-button")],ir);var n1,o1,fh=t=>t,Vr=class extends Se()(Nr){constructor(){super(...arguments),this.variant="secondary",this.ghost=!1,this.block=!1}render(){let t=this._getBrandColorLuminance();return te(n1||(n1=fh`<button
      class="relative h-10 px-4 font-sans font-semibold rounded-lg flex justify-center items-center
        ${0} rounded-lg w-full ${0}
        ${0}
        ${0}
        "
    >
      ${0}
      <!-- TODO: why can the inner border not be conditionally rendered? -->

      <div
        class="flex gap-2  ${0} justify-center items-center"
      >
        <slot></slot>
      </div>
    </button>`),this.ghost?"":"shadow",Qe,this.variant==="primary"?"bg-brand-light dark:bg-brand-dark":"",this.variant==="primary"?t>.5?"text-black":"text-white":this.variant==="secondary"?`${Te}`:`${Rt}`,this.ghost?null:this.variant==="primary"?m0():this.variant==="secondary"?te(Hc||(Hc=Ki`<div
    class="absolute -z-10 top-0 left-0 w-full h-full border-2 rounded-lg ${0}"
  ></div>`),"border-brand-mixed-light dark:border-brand-mixed-dark"):te(jc||(jc=Ki`<div
    class="absolute -z-10 top-0 left-0 w-full h-full border-2 rounded-lg ${0}"
  ></div>`),cs),this.block?"w-full":"")}};re([Me()],Vr.prototype,"variant",void 0),re([Me({type:Boolean})],Vr.prototype,"ghost",void 0),re([Me({type:Boolean})],Vr.prototype,"block",void 0),Vr=re([ge("bci-button")],Vr);var dh=_e(o1||(o1=(t=>t)`
<svg class="w-14 h-14" width="55" height="54" fill="none" version="1.1" viewBox="1 0 55 54" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <rect x="31" y="1" width="24" height="24" rx="6" fill="#34D14A"/>
 <path d="M40.3358 5H44.2816V11.3676H41.8352V7.04983H39.6436L40.3358 5Z" fill="#fff"/>
 <path d="m43 21c2.4853 0 4.5-1.973 4.5-4.4068s-2.0147-4.4067-4.5-4.4067-4.5 1.9729-4.5 4.4067 2.0147 4.4068 4.5 4.4068zm2.457-4.4068c0 1.3289-1.1 2.4062-2.457 2.4062s-2.4571-1.0773-2.4571-2.4062 1.1001-2.4062 2.4571-2.4062 2.457 1.0773 2.457 2.4062z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
 <g>
  <rect x="3" y="1" width="24" height="24" rx="6" fill="url(#paint0_linear_0_1)"/>
  <g stroke="#000">
   <path d="m19.114 20.571c2.1021 0 3.0589-4.6548 3.0589-6.4197 0-1.3756-0.9492-2.2093-2.1971-2.2093-1.2401 0-2.2469 0.5332-2.2594 1.1936 0 1.7428-0.3067 7.4354 1.3976 7.4354z" fill="#fff" stroke-width=".62601"/>
   <path d="m11.436 20.571c-2.1021 0-3.0589-4.6548-3.0589-6.4197 0-1.3756 0.94922-2.2093 2.1971-2.2093 1.2401 0 2.2469 0.5332 2.2594 1.1936 0 1.7428 0.3067 7.4354-1.3976 7.4354z" fill="#fff" stroke-width=".62601"/>
   <path d="m9.6923 13.592v-1e-4l11.02-0.0266c-0.2431 2.4089-1.5497 4.4004-3.3059 5.3171-0.5801 0.3028-0.9789 0.8289-1.3292 1.2909-0.0063 0.0083-0.0126 0.0166-0.0188 0.0248l-1e-4 1e-4c-0.2847 0.3756-0.5424 0.7119-0.8573 0.9598-0.315-0.2479-0.5727-0.5842-0.8574-0.9598v-1e-4l-0.0188-0.0248c-0.3503-0.462-0.7492-0.9881-1.3293-1.2909-1.7495-0.9132-3.0528-2.8931-3.3031-5.2904z" fill="#FFDF6F" stroke-width=".62284"/>
   <ellipse cx="15.213" cy="13.545" rx="5.5089" ry="1.8363" fill="#000" stroke-width=".62601"/>
   <path d="m10.789 16.633s2.7172 0.9182 4.4655 0.9182 4.4656-0.9182 4.4656-0.9182" stroke-linecap="round" stroke-width=".62601"/>
  </g>
  <circle transform="matrix(-1 0 0 1 11.277 4.4467)" cx="1.2457" cy="1.2457" r="1.2457" fill="#000"/>
  <path d="m9.8238 5.5054 2.3252 2.3252" stroke="#000" stroke-width=".62284"/>
  <circle cx="20.204" cy="5.6923" r="1.2457" fill="#000"/>
  <path d="m20.433 5.5054-2.3253 2.3252" stroke="#000" stroke-width=".62284"/>
  <path d="m10.385 13.125c-0.67142-0.3196-1.0622-1.0373-0.93126-1.7693 0.56176-3.1416 2.9029-5.4978 5.7057-5.4978 2.8095 0 5.1552 2.3677 5.7097 5.5207 0.1289 0.7333-0.265 1.4507-0.9387 1.7677-1.4415 0.6783-3.0516 1.0575-4.7502 1.0575-1.7164 0-3.3423-0.3871-4.7952-1.0788z" clip-rule="evenodd" fill="#FFDF6F" fill-rule="evenodd"/>
  <path d="m20.869 11.379-0.3067 0.0539 0.3067-0.0539zm-11.109 0.0319c0.5428-3.0356 2.7866-5.2412 5.3991-5.2412v-0.62283c-2.993 0-5.4315 2.5069-6.0122 5.7544l0.61311 0.1096zm5.3991-5.2412c2.6188 0 4.8672 2.2164 5.403 5.2632l0.6134-0.1079c-0.5732-3.2592-3.0161-5.7781-6.0164-5.7781v0.62283zm4.6384 6.6952c-1.4009 0.6593-2.9658 1.0279-4.6176 1.0279v0.6229c1.7454 0 3.4007-0.3898 4.8828-1.0872l-0.2652-0.5636zm-4.6176 1.0279c-1.6691 0-3.2494-0.3763-4.6614-1.0485l-0.2677 0.5623c1.4939 0.7112 3.1654 1.1091 4.9291 1.1091v-0.6229zm5.3822-2.4599c0.1034 0.5879-0.2114 1.1717-0.7646 1.432l0.2652 0.5636c0.7943-0.3738 1.2673-1.2248 1.1128-2.1035l-0.6134 0.1079zm-11.415-0.1316c-0.15685 0.8771 0.31241 1.7285 1.1039 2.1053l0.2677-0.5623c-0.55123-0.2625-0.86344-0.8465-0.7585-1.4334l-0.61311-0.1096z" fill="#000"/>
  <path d="m11.583 12.345c-0.5405-0.2201-0.861-0.7951-0.6738-1.3478 0.5775-1.7043 2.2621-2.9377 4.2503-2.9377s3.6727 1.2334 4.2502 2.9377c0.1873 0.5527-0.1333 1.1276-0.6737 1.3477-1.1038 0.4496-2.3112 0.6973-3.5765 0.6973s-2.4728-0.2477-3.5765-0.6972z" clip-rule="evenodd" fill="#000" fill-rule="evenodd"/>
  <ellipse cx="16.592" cy="10.716" rx="1.0381" ry=".83045" fill="#fff"/>
  <ellipse cx="13.62" cy="10.717" rx="1.0381" ry=".83045" fill="#fff"/>
 </g>
 <path d="m51.5 40h-1.5v-4c0-0.5305-0.2107-1.0392-0.5858-1.4143-0.3751-0.375-0.8838-0.5857-1.4142-0.5857h-4v-1.5c0-0.6631-0.2634-1.299-0.7322-1.7678-0.4689-0.4689-1.1048-0.7322-1.7678-0.7322s-1.2989 0.2633-1.7678 0.7322c-0.4688 0.4688-0.7322 1.1047-0.7322 1.7678v1.5h-4c-0.5304 0-1.0391 0.2107-1.4142 0.5857-0.3751 0.3751-0.5858 0.8838-0.5858 1.4143v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-1.5v3.8c0 0.5304 0.2107 1.0391 0.5858 1.4142 0.3751 0.375 0.8838 0.5858 1.4142 0.5858h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.5h3.8c0.5304 0 1.0391-0.2108 1.4142-0.5858 0.3751-0.3751 0.5858-0.8838 0.5858-1.4142v-4h1.5c0.663 0 1.2989-0.2634 1.7678-0.7323 0.4688-0.4688 0.7322-1.1047 0.7322-1.7677 0-0.6631-0.2634-1.299-0.7322-1.7678-0.4689-0.4689-1.1048-0.7322-1.7678-0.7322z" fill="#525252"/>
 <rect x="3" y="29.081" width="24" height="24" ry="6.0057" fill="url(#linearGradient28)" stroke-width="0"/>
 <g transform="matrix(.25817 0 0 .25817 5.4677 38.257)" fill="#fff">
  <path d="m0 12.6 14.013-7v-0.62903h-14.013v-4.9741h22.76v7.4611l-13.985 6.943v0.628h14.042v4.9741h-22.818z"/>
  <path d="m40.444 10.314v-0.68599c3.8542 0 6.4164-1.6083 6.4164-4.4207 0-3.7005-2.7083-5.2062-7.5676-5.2062h-14.992v20h14.992c5.2371 0 7.5676-1.8798 7.5676-4.8259 0-3.0612-1.8692-4.8612-6.4164-4.8612zm-4.0003 5.143h-4.518v-3.343h4.518c1.4611 0 2.2156 0.6591 2.2156 1.658 0 1.2923-0.8798 1.685-2.2156 1.685zm0-7.6h-4.518v-3.3161h4.518c1.172 0 2.2156 0.29013 2.2156 1.685 0 1.3285-1.2023 1.6311-2.2156 1.6311z"/>
  <path d="m47.92 0h13.784c8.3691 0 12.142 4.113 12.142 10 0 6.1834-4.5347 10-12.142 10h-13.784zm17.783 10c0-3.5306-2.4672-4.857-4.8634-4.857h-4.9491v9.714h4.9491c2.367 0 4.8634-1.3264 4.8634-4.857z"/>
 </g>
 <defs>
  <linearGradient id="paint0_linear_0_1" x1="15" x2="15" y1="1" y2="23.857" gradientUnits="userSpaceOnUse">
   <stop stop-color="#FFDE6E" offset=".6691"/>
   <stop stop-color="#F8C455" offset="1"/>
  </linearGradient>
  <linearGradient id="linearGradient28" x1="3" x2="27" y1="36.903" y2="45.382" gradientUnits="userSpaceOnUse">
   <stop stop-color="#916bf8" offset="0"/>
   <stop stop-color="#9c60dd" offset=".28564"/>
   <stop stop-color="#b44aa7" offset=".55368"/>
   <stop stop-color="#e21f3d" offset="1"/>
  </linearGradient>
 </defs>
</svg>
`)),i1,hh=t=>t,It=class extends Se()(he){constructor(e,r,o,i){super(),this._connectorType=e,this._title=r,this._background=o,this._icon=i}render(){return te(i1||(i1=hh`<div
      class="flex flex-col justify-between items-center w-32 -mx-4 cursor-pointer ${0}"
      @click=${0}
    >
      <div
        class="w-16 h-16 drop-shadow rounded-2xl flex justify-center items-center overflow-hidden"
        style="background: ${0};"
      >
        ${0}
      </div>
      <span
        class="text-sm mt-3 font-sans font-medium text-center w-28 h-7 flex justify-center items-center ${0}"
      >
        ${0}
      </span>
    </div>`),Qe,this._onClick,this._background,this._icon,De,this._title)}_connect(e){ne.getState().connect(Zt({},e,{connectorName:this._title,connectorType:this._connectorType}))}},s1,a1=class extends It{constructor(){super("extension.generic","Extension Wallets","#ffffff",dh)}_onClick(){this._connect({})}};a1=re([ge("bc-extension-connector")],a1);var ph=_e(s1||(s1=(t=>t)`<svg width="45" height="64" viewBox="0 0 45 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9716 52.1905C38.5774 52.1905 41.1289 39.7778 41.1289 35.0713C41.1289 31.4029 38.5976 29.1797 35.2699 29.1797C31.9629 29.1797 29.2782 30.6017 29.2449 32.3627C29.2448 37.01 28.4268 52.1905 32.9716 52.1905Z" fill="white" stroke="black" stroke-width="1.66938"/>
<path d="M12.4972 52.1905C6.89139 52.1905 4.33989 39.7778 4.33989 35.0713C4.33989 31.4029 6.87114 29.1797 10.1989 29.1797C13.5058 29.1797 16.1906 30.6017 16.2239 32.3627C16.224 37.01 17.0419 52.1905 12.4972 52.1905Z" fill="white" stroke="black" stroke-width="1.66938"/>
<path d="M7.84577 33.579L7.84575 33.5787C7.83973 33.5213 7.8514 33.488 7.86332 33.4663C7.87739 33.4406 7.90412 33.4101 7.949 33.3846C8.04196 33.3318 8.17216 33.3222 8.29337 33.3931C12.457 35.8337 17.2594 37.2328 22.4806 37.2328C27.7028 37.2328 32.5942 35.8065 36.7846 33.3233C36.905 33.252 37.0349 33.2608 37.1281 33.3133C37.1732 33.3386 37.2001 33.3691 37.2144 33.3949C37.2264 33.4167 37.2382 33.4501 37.2324 33.5076C36.5842 39.9314 33.0999 45.2421 28.4166 47.6866L28.4165 47.6867C26.8697 48.4942 25.8061 49.897 24.8719 51.1291L24.8218 51.1952L24.8217 51.1954C24.0624 52.197 23.3752 53.094 22.5354 53.755C21.6955 53.094 21.0084 52.197 20.2491 51.1954L20.249 51.1952C20.2323 51.1732 20.2156 51.1512 20.1989 51.1291C19.2647 49.897 18.2011 48.4942 16.6542 47.6867L16.6542 47.6866C11.9887 45.2516 8.51323 39.9716 7.84577 33.579Z" fill="#FFDF6F" stroke="black" stroke-width="1.6609"/>
<ellipse cx="22.5675" cy="33.4515" rx="14.6905" ry="4.89684" fill="black" stroke="black" stroke-width="1.66938"/>
<path d="M10.7715 41.6875C10.7715 41.6875 18.0175 44.1359 22.6797 44.1359C27.3419 44.1359 34.5879 41.6875 34.5879 41.6875" stroke="black" stroke-width="1.66938" stroke-linecap="round"/>
<circle cx="3.3218" cy="3.3218" r="3.3218" transform="matrix(-1 0 0 1 12.0703 9.19043)" fill="black"/>
<path d="M8.19579 12.0137L14.3965 18.2144" stroke="black" stroke-width="1.6609"/>
<circle cx="35.8784" cy="12.5122" r="3.3218" fill="black"/>
<path d="M36.4878 12.0137L30.2871 18.2144" stroke="black" stroke-width="1.6609"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.69481 32.3343C7.90447 31.482 6.86251 29.568 7.21154 27.6161C8.70958 19.2385 14.9526 12.9551 22.4267 12.9551C29.9188 12.9551 36.174 19.269 37.6526 27.677C37.9965 29.6325 36.946 31.5456 35.1496 32.391C31.3055 34.1999 27.0119 35.2111 22.482 35.2111C17.9051 35.2111 13.5693 34.1788 9.69481 32.3343Z" fill="#FFDF6F"/>
<path d="M37.6526 27.677L36.8347 27.8209L37.6526 27.677ZM8.02903 27.7623C9.47654 19.6673 15.46 13.7855 22.4267 13.7855V12.1246C14.4452 12.1246 7.94263 18.8097 6.39406 27.4699L8.02903 27.7623ZM22.4267 13.7855C29.4101 13.7855 35.4059 19.696 36.8347 27.8209L38.4705 27.5332C36.9421 18.842 30.4275 12.1246 22.4267 12.1246V13.7855ZM34.796 31.6396C31.0602 33.3976 26.8871 34.3807 22.482 34.3807V36.0416C27.1366 36.0416 31.5508 35.0023 35.5032 33.1424L34.796 31.6396ZM22.482 34.3807C18.0312 34.3807 13.8172 33.377 10.0518 31.5845L9.33786 33.0841C13.3215 34.9806 17.779 36.0416 22.482 36.0416V34.3807ZM36.8347 27.8209C37.1104 29.3886 36.2709 30.9454 34.796 31.6396L35.5032 33.1424C37.6211 32.1457 38.8825 29.8763 38.4705 27.5332L36.8347 27.8209ZM6.39406 27.4699C5.97582 29.8089 7.22718 32.0793 9.33786 33.0841L10.0518 31.5845C8.58176 30.8847 7.7492 29.3272 8.02903 27.7623L6.39406 27.4699Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8892 30.2522C11.4481 29.6652 10.5932 28.1319 11.0926 26.6582C12.6325 22.1132 17.1248 18.8242 22.4266 18.8242C27.7285 18.8242 32.2208 22.1132 33.7607 26.6582C34.2601 28.1319 33.4052 29.6652 31.9641 30.2522C29.0207 31.4509 25.8008 32.1114 22.4266 32.1114C19.0525 32.1114 15.8326 31.4509 12.8892 30.2522Z" fill="black"/>
<ellipse cx="26.2447" cy="25.9098" rx="2.76817" ry="2.21453" fill="white"/>
<ellipse cx="18.3209" cy="25.9118" rx="2.76817" ry="2.21453" fill="white"/>
</svg>
`)),c1,l1=class extends It{constructor(){super("nwc.alby","Alby Account","linear-gradient(180deg, #FFDE6E 63.72%, #F8C455 95.24%)",ph)}async _onClick(){var t;let e=Mr.NostrWebLNProvider.withNewSecret(),r=ne.getState().providerConfig;await e.initNWC(Zt({},(r==null||(t=r.nwc)==null?void 0:t.authorizationUrlOptions)||{},{name:this._appName||"Bitcoin Connect"})),this._connect({nwcUrl:e.getNostrWalletConnectUrl(!0)})}};l1=re([ge("bc-alby-nwc-connector")],l1);var gh=_e(c1||(c1=(t=>t)`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none"><g style="display:inline"><g fill="#5351fb" fill-rule="evenodd" clip-rule="evenodd" style="display:inline;fill:#fff"><path d="M85.331 184.218c-6.917 0-11.155 2.022-13.85 5.2a6.182 6.182 0 0 1-9.43-7.993c5.653-6.67 13.792-9.571 23.28-9.571 7.975 0 15.284 2.025 21.77 6.105 6.72-3.983 13.8-6.105 21.176-6.105 7.212 0 14.02 2.03 20.35 5.892 5.65-3.803 12.43-5.551 19.984-5.551 9.476 0 17.823 2.744 24.606 8.52a6.182 6.182 0 0 1-8.017 9.413c-4.246-3.616-9.63-5.57-16.589-5.57-6.572 0-11.296 1.74-14.748 4.719a7.727 7.727 0 0 1-9.545.435l-.11-.078c-5.225-3.71-10.498-5.416-15.93-5.416-5.532 0-11.148 1.77-16.945 5.692a7.728 7.728 0 0 1-8.945-.202l-.192-.143c-4.85-3.55-10.398-5.348-16.864-5.348z" style="fill:#fff" transform="matrix(.35359 0 0 .35359 -13.26 -25.708)"/><path d="M162.587 149.19c-9.016-7.82-20.638-11.791-35.402-11.507-14.833.285-26.352 4.547-35.094 12.368-8.816 7.887-15.392 19.916-19.275 36.76a6.182 6.182 0 1 1-12.047-2.776c4.261-18.487 11.803-33.11 23.078-43.197 11.351-10.154 25.895-15.186 43.101-15.517 17.275-.332 32.033 4.375 43.741 14.53 11.605 10.066 19.632 24.98 24.534 44.03a6.182 6.182 0 0 1-11.974 3.08c-4.505-17.51-11.544-29.863-20.66-37.77z" style="fill:#fff" transform="matrix(.35359 0 0 .35359 -13.26 -25.708)"/></g></g></svg>`)),u1,f1=class extends It{constructor(){super("nwc.umbrel","Umbrel","#5250fb",gh)}async _onClick(){ne.getState().pushRoute("/umbrel")}};f1=re([ge("bc-umbrel-nwc-connector")],f1);var yh=_e(u1||(u1=(t=>t)`<svg class="w-10 h-10" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.7274 23.9471C41.9608 25.7054 39.52 25.284 37.7615 23.5178C37.7615 23.5178 37.7615 23.5178 37.7613 23.5175L23.53 9.22225L30.1989 2.52452C32.1302 0.584715 35.4069 1.18529 36.5245 3.68405L43.9437 23.0097C44.0657 23.3272 43.9888 23.6869 43.7476 23.927L39.0614 28.5911L43.7272 23.9471H43.7274Z" fill="#472459"/>
<path d="M37.7607 24.8117C37.7607 24.8117 37.7607 24.8117 37.7604 24.8114L19.145 6.11204C17.3862 4.34557 14.5285 4.33895 12.7616 6.0972L1.32946 17.4755C-0.437483 19.234 -0.443845 22.0913 1.31462 23.8581L19.9298 42.5572C21.6886 44.3237 24.5463 44.3303 26.3132 42.572L29.9892 38.9135L31.0661 37.8417L27.6301 34.393C25.0886 36.0405 21.656 35.7473 19.4344 33.512L17.0962 31.1593C16.7639 30.8248 16.7654 30.2897 17.1 29.9574L18.2506 28.814L15.3608 25.9063C14.9078 25.4504 14.8368 24.7173 15.2453 24.2238C15.7126 23.6572 16.5555 23.6307 17.0634 24.1417L19.9897 27.0862L22.2839 24.8069L19.3941 21.8992C18.9411 21.4433 18.8701 20.7102 19.2823 20.2133C19.753 19.6504 20.5925 19.6201 21.1004 20.1311L24.0267 23.0757L25.1811 21.9286C25.5156 21.5963 26.0508 21.5978 26.3832 21.9323L28.7213 24.2851C30.9432 26.5206 31.2143 29.955 29.55 32.4858L32.9844 35.9326L34.9417 33.9846L37.7453 31.194L43.7263 25.2413C41.9597 26.9996 39.5189 26.5781 37.7602 24.8119L37.7607 24.8117Z" fill="url(#paint0_linear_856_1234)"/>
<defs>
<linearGradient id="paint0_linear_856_1234" x1="21.8632" y1="4.78284" x2="21.8632" y2="43.8864" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCA4A"/>
<stop offset="1" stop-color="#F7931A"/>
</linearGradient>
</defs>
</svg>`)),E0="Nostr Wallet Connect",d1,h1=class extends It{constructor(){super("nwc.generic",E0,"#ffffff",yh)}async _onClick(){ne.getState().pushRoute("/nwc")}};h1=re([ge("bc-nwc-connector")],h1);var mh=_e(d1||(d1=(t=>t)`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
<path d="M2.5 28.4H5.08333V29.7H8.95833V28.4H10.25V15.4H11.5417V12.8H10.25V11.5H7.66667V12.8H6.375V14.1H5.08333V15.4H8.95833V18H7.66667V19.3H5.08333V18H3.79167V12.8H5.08333V11.5H6.375V10.2H14.125V11.5H15.4167V12.8H16.7083V15.4H18V18H19.2917V19.3H20.5833V16.7H21.875V15.4H23.1667V12.8H24.4583V10.2H25.75V8.9H27.0417V6.3H29.625V5H32.2083V6.3H33.5V7.6H30.9167V6.3H29.625V7.6H28.3333V23.2H29.625V29.7H30.9167V31H25.75V29.7H24.4583V16.7H23.1667V18H21.875V20.6H20.5833V23.2H19.2917V25.8H16.7083V23.2H15.4167V20.6H14.125V16.7H12.8333V24.5H11.5417V28.4H10.25V29.7H8.95833V31H3.79167V29.7H2.5V28.4Z" fill="#f42058"/>
</svg>`)),zi="Mutiny",p1,g1=class extends It{constructor(){super("nwc.mutiny",zi,"linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(3,33,93,1) 100%)",mh)}async _onClick(){ne.getState().pushRoute("/mutiny")}};g1=re([ge("bc-mutiny-nwc-connector")],g1);var bh=_e(p1||(p1=(t=>t)`<svg class="w-10 h-10" width="28" height="55" viewBox="0 0 28 55" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff" fill-rule="nonzero"><path d="M27.25 30.506L11.354 53.692a.84.84 0 11-1.385-.954l15.896-23.185a.84.84 0 111.385.953zM25.16 26.374L9.629 49.082a.84.84 0 01-1.385-.954L23.776 25.42a.84.84 0 011.385.954zM20.438 1.576L2.43 27.895h16.895l-1.136 1.68H.363a.84.84 0 01-.227-1.158L19.006.622a.84.84 0 011.159-.227c.398.253.52.78.273 1.181z"></path><path d="M22.118 6.617L10.24 23.99h11.763l-1.158 1.68H7.062l1.136-1.68L20.733 5.686a.84.84 0 011.385.931z"></path></g></svg>`)),y1=class extends It{constructor(){super("lnc","Lightning Node Connect","#101727",bh)}async _onClick(){let t=window.prompt("Enter pairing phrase");if(!t)return;let e=await Xl();if(!e)throw new Error("LNC not supported");e.credentials.pairingPhrase=t,this._connect({})}};y1=re([ge("bc-lnc-connector")],y1);var m1,b1,w1,v1,E1,_1,C1,x1,A1,Ht=t=>t,O1=class extends Se()(he){render(){let t=[];return t.push(te(m1||(m1=Ht`<bc-alby-nwc-connector></bc-alby-nwc-connector>`))),t.push(te(b1||(b1=Ht`<bc-mutiny-nwc-connector></bc-mutiny-nwc-connector>`))),t.push(te(w1||(w1=Ht`<bc-umbrel-nwc-connector></bc-umbrel-nwc-connector>`))),t.push(te(v1||(v1=Ht`<bc-nwc-connector></bc-nwc-connector>`))),this._filters&&this._filters.indexOf("nwc")!==-1||(window.webln&&t.push(te(E1||(E1=Ht`<bc-extension-connector></bc-extension-connector>`))),t.push(te(_1||(_1=Ht`<bc-lnbits-connector></bc-lnbits-connector>`))),t.push(te(C1||(C1=Ht`<bc-lnc-connector></bc-lnc-connector>`)))),te(x1||(x1=Ht`
      <div class="flex justify-center items-start flex-wrap gap-5">
        ${0}
      </div>
    `),t)}};O1=re([ge("bc-connector-list")],O1);var wh=_e(A1||(A1=(t=>t)`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
<path d="M11.25 20.25H4.75C4.19772 20.25 3.75 19.8023 3.75 19.25L3.75 4.75C3.75 4.19772 4.19772 3.75 4.75 3.75L11.25 3.75" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.25 12L9 12M20.25 12L15.75 16.5M20.25 12L15.75 7.5" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="hover-right"/>
</svg>`)),S1,N1,vh=t=>t;function _0(t){return te(S1||(S1=vh`<div class="mt-12">
    <span class="text-xs mb-1 ${0}"
      >Connected through <span class="font-bold">${0}</span></span
    >

    <bci-button
      @click=${0}
      ghost
      variant="neutral"
      class=${0}
    >
      ${0}
      <span class="text-sm ${0}"
        >Disconnect</span
      >
    </bci-button>
  </div>`),De,t,Eh,Gi,wh,Rt)}function Eh(){ne.getState().setModalOpen(!1),setTimeout(()=>{ne.getState().disconnect()},200)}var C0=_e(N1||(N1=(t=>t)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6665 7.16699L12.4998 12.0003M12.4998 12.0003L17.3332 16.8337M12.4998 12.0003L17.3332 7.16699M12.4998 12.0003L7.6665 16.8337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)),T1,R1,I1,k1,Vn=t=>t,Wn=class extends Se()(he){constructor(){super(),this._isSwitchingCurrency=!1,this._selectedCurrency=ne.getState().currency,ne.subscribe(t=>{this._selectedCurrency=t.currency})}render(){let t=[{name:"SATS",value:"sats"}];try{t.push(...Intl.supportedValuesOf("currency").map(e=>({name:e,value:e})))}catch{t.push({name:"USD",value:"USD"})}return te(T1||(T1=Vn`<div class="flex justify-center items-center gap-2">
      ${0}
    </div>`),this._isSwitchingCurrency?te(R1||(R1=Vn`
            <br />
            <select
              class="${0} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @change=${0}
            >
              ${0}
            </select>
            <div
              class="${0} ${0}"
              @click=${0}
            >
              ${0}
            </div>
          `),Te,e=>this._handleCurrencyChange(e),t.map(e=>te(I1||(I1=Vn`
                  <option
                    value=${0}
                    ?selected=${0}
                  >
                    ${0}
                  </option>
                `),e.value,this._selectedCurrency===e.value,e.name)),Qe,Rt,this._toggleSelectVisibility,C0):te(k1||(k1=Vn`<div
            class="${0}"
            @click=${0}
          >
            <slot></slot>
          </div>`),Qe,this._toggleSelectVisibility))}_toggleSelectVisibility(){this._isSwitchingCurrency=!this._isSwitchingCurrency}_handleCurrencyChange(t){let e=t.target.value;ne.getState().setCurrency(e)}};re([Ee()],Wn.prototype,"_isSwitchingCurrency",void 0),re([Ee()],Wn.prototype,"_selectedCurrency",void 0),Wn=re([ge("bc-currency-switcher")],Wn);var L1,P1,U1,D1,M1,B1,Wr=t=>t,wi=class extends Se()(he){constructor(){super(),this._showBalance=void 0,this._showBalance=ne.getState().showBalance,ne.subscribe(t=>{this._showBalance=t.showBalance})}render(){return te(L1||(L1=Wr`<div
      class="flex flex-col justify-center items-center w-full font-sans"
    >
      ${0}
    </div>`),this._connected?te(P1||(P1=Wr`
            ${0}
            ${0}
          `),te(this._showBalance!==!1?U1||(U1=Wr`<span
                    class="text-xs font-medium mb-2 ${0}"
                    >Balance</span
                  >
                  <bc-currency-switcher>
                    <bc-balance class="text-2xl"></bc-balance>
                  </bc-currency-switcher>`):D1||(D1=Wr` <span
                  class="text-lg font-medium mt-4 -mb-4 ${0}"
                  >Wallet Connected</span
                >`),De),_0(this._connectorName)):te(M1||(M1=Wr`
            <h1
              class="my-8 ${0} w-64 max-w-full text-center"
            >
              How would you like to
              connect${0}?
            </h1>

            <bc-connector-list></bc-connector-list>

            <div class="flex flex-col items-center w-full font-sans text-sm">
              <h1 class="mt-8 ${0} text-center">
                Don't have a bitcoin lightning wallet?
                <a
                  class="no-underline font-bold ${0} ${0} "
                  @click=${0}
                  >Get one here</a
                >
              </h1>
            </div>
          `),Zi,this._appName?`
to ${this._appName}`:"",Zi,Qe,Te,()=>ne.getState().pushRoute("/new-wallet")))}};re([Ee()],wi.prototype,"_showBalance",void 0),wi=re([ge("bc-start")],wi);var _h=_e(B1||(B1=(t=>t)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7">
<path d="M14.2929 16L10.6464 12.3536C10.4512 12.1583 10.4512 11.8417 10.6464 11.6464L14.2929 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`)),$1,H1,Ch=t=>t,vi=class extends Se()(he){constructor(){super(...arguments),this._goBack=()=>{ne.getState().popRoute(),ne.getState().setError(void 0)}}render(){return te($1||($1=Ch`<div
      class="flex justify-center items-center gap-2 w-full relative pb-4"
    >
      <div class="absolute left-8 h-full flex items-center justify-center">
        <div
          class="${0} ${0}"
          @click=${0}
        >
          ${0}
        </div>
      </div>
      <div class="font-sans font-medium ${0}">
        ${0}
      </div>
    </div>`),Qe,Rt,this._goBack,_h,De,this.heading)}};re([Me()],vi.prototype,"heading",void 0),vi=re([ge("bc-navbar")],vi);var j1=_e(H1||(H1=(t=>t)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 6H6.1C5.53995 6 5.25992 6 5.04601 6.10899C4.85785 6.20487 4.70487 6.35785 4.60899 6.54601C4.5 6.75992 4.5 7.03995 4.5 7.6V18.4C4.5 18.9601 4.5 19.2401 4.60899 19.454C4.70487 19.6422 4.85785 19.7951 5.04601 19.891C5.25992 20 5.53995 20 6.1 20H16.9C17.4601 20 17.7401 20 17.954 19.891C18.1422 19.7951 18.2951 19.6422 18.391 19.454C18.5 19.2401 18.5 18.9601 18.5 18.4V15" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 4H20.5M20.5 4V10M20.5 4L11.5 13" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="hover-right-up"/>
</svg>`)),F1,V1,W1,G1=t=>t;function ls(t){let e=`border-t ${cs} ${t?"w-24":"w-full"}`;return te(F1||(F1=G1`<div
    class="w-full px-8 flex gap-2 justify-center items-center opacity-20 dark:opacity-60"
  >
    <hr class=${0} />
    ${0}
  </div>`),e,t?te(V1||(V1=G1`
          <span class=${0}>${0}</span>
          <hr class=${0} />
        `),Rt,t,e):null)}var xh=_e(W1||(W1=(t=>t)`<svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 -my-4">
<ellipse opacity="0.1" cx="7.70773" cy="21.5226" rx="3.4509" ry="0.637088" fill="black"/>
<path d="M11.0342 18.4211C12.817 18.4211 13.6285 14.4735 13.6285 12.9767C13.6285 11.8101 12.8235 11.103 11.7652 11.103C10.7135 11.103 9.85965 11.5553 9.84905 12.1153C9.84902 13.5933 9.5889 18.4211 11.0342 18.4211Z" fill="white" stroke="currentColor" stroke-width="0.530907"/>
<path d="M4.52264 18.4211C2.73985 18.4211 1.9284 14.4735 1.9284 12.9767C1.9284 11.8101 2.7334 11.103 3.79171 11.103C4.84341 11.103 5.69723 11.5553 5.70784 12.1153C5.70786 13.5933 5.96799 18.4211 4.52264 18.4211Z" fill="white" stroke="currentColor" stroke-width="0.530907"/>
<mask id="path-4-inside-1_362_874" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6445 12.5235C12.6735 12.2374 12.352 12.0646 12.1046 12.2113C10.8114 12.9776 9.30208 13.4175 7.68997 13.4175C6.09291 13.4175 4.59668 12.9858 3.31165 12.2326C3.06376 12.0873 2.74334 12.2612 2.77318 12.547C2.9933 14.6548 4.14156 16.4192 5.71508 17.2405C6.15438 17.4698 6.46173 17.8751 6.77033 18.282C7.0197 18.6108 7.26988 18.9407 7.59116 19.1797C7.62857 19.2075 7.66755 19.2222 7.70759 19.2222C7.74762 19.2222 7.78658 19.2075 7.82397 19.1797C8.14538 18.9407 8.39562 18.6108 8.64504 18.2819C8.9536 17.875 9.26091 17.4698 9.70016 17.2405C11.2796 16.4162 12.4305 14.6418 12.6445 12.5235Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6445 12.5235C12.6735 12.2374 12.352 12.0646 12.1046 12.2113C10.8114 12.9776 9.30208 13.4175 7.68997 13.4175C6.09291 13.4175 4.59668 12.9858 3.31165 12.2326C3.06376 12.0873 2.74334 12.2612 2.77318 12.547C2.9933 14.6548 4.14156 16.4192 5.71508 17.2405C6.15438 17.4698 6.46173 17.8751 6.77033 18.282C7.0197 18.6108 7.26988 18.9407 7.59116 19.1797C7.62857 19.2075 7.66755 19.2222 7.70759 19.2222C7.74762 19.2222 7.78658 19.2075 7.82397 19.1797C8.14538 18.9407 8.39562 18.6108 8.64504 18.2819C8.9536 17.875 9.26091 17.4698 9.70016 17.2405C11.2796 16.4162 12.4305 14.6418 12.6445 12.5235Z" fill="#FFDF6F"/>
<path d="M5.71508 17.2405L5.96074 16.7698L5.71508 17.2405ZM6.77033 18.282L6.34731 18.6028H6.34731L6.77033 18.282ZM7.59116 19.1797L7.27429 19.6057L7.27429 19.6057L7.59116 19.1797ZM7.82397 19.1797L8.14076 19.6058L8.14076 19.6058L7.82397 19.1797ZM8.64504 18.2819L8.22202 17.9611L8.22202 17.9611L8.64504 18.2819ZM9.70016 17.2405L9.94582 17.7112H9.94582L9.70016 17.2405ZM12.1046 12.2113L12.3752 12.668L12.1046 12.2113ZM12.6445 12.5235L12.1163 12.4702L12.6445 12.5235ZM11.8339 11.7545C10.6205 12.4737 9.20424 12.8866 7.68997 12.8866V13.9484C9.39992 13.9484 11.0024 13.4815 12.3752 12.668L11.8339 11.7545ZM7.68997 12.8866C6.18981 12.8866 4.78593 12.4813 3.5801 11.7746L3.0432 12.6907C4.40743 13.4902 5.996 13.9484 7.68997 13.9484V12.8866ZM2.24515 12.6022C2.48098 14.8605 3.71574 16.7958 5.46941 17.7111L5.96074 16.7698C4.56738 16.0426 3.50562 14.4492 3.30122 12.4919L2.24515 12.6022ZM5.46941 17.7111C5.78479 17.8758 6.0236 18.1759 6.34731 18.6028L7.19335 17.9612C6.89987 17.5742 6.52397 17.0638 5.96074 16.7698L5.46941 17.7111ZM6.34731 18.6028C6.58755 18.9196 6.88185 19.3137 7.27429 19.6057L7.90804 18.7537C7.65791 18.5676 7.45184 18.302 7.19335 17.9612L6.34731 18.6028ZM7.27429 19.6057C7.38246 19.6861 7.5299 19.7531 7.70759 19.7531V18.6913C7.80519 18.6913 7.87468 18.7289 7.90803 18.7537L7.27429 19.6057ZM7.70759 19.7531C7.8852 19.7531 8.03259 19.6862 8.14076 19.6058L7.50719 18.7537C7.54057 18.7289 7.61005 18.6913 7.70759 18.6913V19.7531ZM8.14076 19.6058C8.53339 19.3138 8.82778 18.9195 9.06806 18.6027L8.22202 17.9611C7.96346 18.302 7.75738 18.5677 7.50719 18.7537L8.14076 19.6058ZM9.06806 18.6027C9.39174 18.1759 9.6305 17.8758 9.94582 17.7112L9.45451 16.7699C8.89133 17.0638 8.51547 17.5741 8.22202 17.9611L9.06806 18.6027ZM9.94582 17.7112C11.706 16.7925 12.9435 14.8462 13.1728 12.5769L12.1163 12.4702C11.9176 14.4373 10.8531 16.0399 9.45451 16.7699L9.94582 17.7112ZM3.5801 11.7746C3.28427 11.6012 2.93961 11.6167 2.67587 11.7666C2.40507 11.9206 2.20605 12.2278 2.24515 12.6022L3.30122 12.4919C3.30493 12.5275 3.29778 12.5713 3.27544 12.6121C3.25447 12.6503 3.22616 12.6752 3.20065 12.6897C3.15164 12.7176 3.09113 12.7188 3.0432 12.6907L3.5801 11.7746ZM12.3752 12.668C12.3274 12.6963 12.2669 12.6954 12.2177 12.6677C12.1921 12.6533 12.1637 12.6286 12.1426 12.5903C12.12 12.5496 12.1127 12.5057 12.1163 12.4702L13.1728 12.5769C13.2106 12.2021 13.0103 11.8954 12.7386 11.7425C12.4741 11.5936 12.1291 11.5796 11.8339 11.7545L12.3752 12.668Z" fill="black" mask="url(#path-4-inside-1_362_874)"/>
<ellipse cx="7.72545" cy="12.4621" rx="4.67198" ry="1.55733" fill="black" stroke="black" stroke-width="0.530907"/>
<path d="M3.97363 15.0811C3.97363 15.0811 6.27807 15.8597 7.76077 15.8597C9.24347 15.8597 11.5479 15.0811 11.5479 15.0811" stroke="black" stroke-width="0.530907" stroke-linecap="round"/>
<circle cx="1.05642" cy="1.05642" r="1.05642" transform="matrix(-1 0 0 1 4.38745 4.74609)" fill="black"/>
<path d="M3.15497 5.64404L5.12695 7.61603" stroke="black" stroke-width="0.528211"/>
<circle cx="11.9585" cy="5.80252" r="1.05642" fill="black"/>
<path d="M12.1522 5.64404L10.1802 7.61603" stroke="black" stroke-width="0.528211"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.63088 12.1065C3.0615 11.8354 2.73014 11.2267 2.84114 10.606C3.31755 7.94167 5.303 5.94336 7.67995 5.94336C10.0627 5.94336 12.052 7.95136 12.5222 10.6253C12.6316 11.2472 12.2975 11.8556 11.7262 12.1245C10.5037 12.6998 9.13817 13.0214 7.69756 13.0214C6.24199 13.0214 4.86309 12.6931 3.63088 12.1065Z" fill="#FFDF6F"/>
<path d="M12.5222 10.6253L12.7823 10.5796L12.5222 10.6253ZM11.7262 12.1245L11.8386 12.3635L11.7262 12.1245ZM2.84114 10.606L3.10112 10.6525L2.84114 10.606ZM3.63088 12.1065L3.7444 11.868L3.63088 12.1065ZM3.10112 10.6525C3.56146 8.07803 5.46436 6.20746 7.67995 6.20746V5.67925C5.14164 5.67925 3.07364 7.8053 2.58115 10.5595L3.10112 10.6525ZM7.67995 6.20746C9.90088 6.20746 11.8077 8.08716 12.2621 10.6711L12.7823 10.5796C12.2962 7.81556 10.2244 5.67925 7.67995 5.67925V6.20746ZM11.6137 11.8855C10.4257 12.4446 9.09849 12.7573 7.69756 12.7573V13.2855C9.17785 13.2855 10.5817 12.955 11.8386 12.3635L11.6137 11.8855ZM7.69756 12.7573C6.28209 12.7573 4.9419 12.4381 3.7444 11.868L3.51736 12.3449C4.78428 12.9481 6.20189 13.2855 7.69756 13.2855V12.7573ZM12.2621 10.6711C12.3498 11.1697 12.0828 11.6648 11.6137 11.8855L11.8386 12.3635C12.5122 12.0465 12.9134 11.3248 12.7823 10.5796L12.2621 10.6711ZM2.58115 10.5595C2.44814 11.3033 2.84611 12.0254 3.51736 12.3449L3.7444 11.868C3.2769 11.6455 3.01213 11.1501 3.10112 10.6525L2.58115 10.5595Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.64674 11.4442C4.18843 11.2575 3.91656 10.7699 4.07537 10.3012C4.56513 8.8558 5.99378 7.80981 7.67991 7.80981C9.36604 7.80981 10.7947 8.8558 11.2845 10.3012C11.4433 10.7699 11.1714 11.2575 10.7131 11.4442C9.777 11.8254 8.75299 12.0355 7.67991 12.0355C6.60684 12.0355 5.58282 11.8254 4.64674 11.4442Z" fill="black"/>
<ellipse cx="8.895" cy="10.0634" rx="0.880351" ry="0.704281" fill="white"/>
<ellipse cx="6.37474" cy="10.0639" rx="0.880351" ry="0.704281" fill="white"/>
<path d="M25.3078 11.6284L24.3574 9.04272L23.4489 11.6284H25.3078ZM23.1274 5.99577H25.6712L29.2213 15.3882L26.7195 15.6398L26.0346 13.6271H22.75L22.0931 15.5H19.5633L23.1274 5.99577ZM32.463 15.5H29.9193V5.78612L32.463 5.63238V15.5ZM35.1432 15.5H33.8573V5.78612L36.4011 5.63238V14.2281L35.1432 15.5ZM35.5765 11.3629L34.8637 9.72758C35.0314 9.52259 35.2457 9.32691 35.5066 9.14055C35.7768 8.94488 36.075 8.78647 36.4011 8.66534C36.7272 8.54421 37.0627 8.48364 37.4074 8.48364C38.0783 8.48364 38.6747 8.60943 39.1965 8.86102C39.7183 9.1126 40.1283 9.49929 40.4264 10.0211C40.7339 10.5429 40.8877 11.2091 40.8877 12.0198C40.8877 12.8211 40.7339 13.492 40.4264 14.0324C40.1283 14.5729 39.709 14.9782 39.1685 15.2484C38.6374 15.5186 38.0131 15.6537 37.2956 15.6537C37.0161 15.6537 36.7366 15.6118 36.457 15.528C36.1868 15.4441 35.9166 15.3136 35.6464 15.1366C35.3855 14.9502 35.1246 14.708 34.8637 14.4098L35.5765 12.9143C35.8467 13.1659 36.1123 13.3615 36.3732 13.5013C36.6341 13.6318 36.8856 13.697 37.1279 13.697C37.3422 13.697 37.5332 13.6318 37.701 13.5013C37.8687 13.3709 38.0038 13.1799 38.1063 12.9283C38.2088 12.6767 38.26 12.3785 38.26 12.0338C38.26 11.689 38.2088 11.4001 38.1063 11.1672C38.0131 10.9249 37.8733 10.7432 37.687 10.6221C37.5099 10.501 37.2863 10.4404 37.0161 10.4404C36.7925 10.4404 36.5642 10.5243 36.3312 10.692C36.0983 10.8597 35.8467 11.0833 35.5765 11.3629ZM43.4036 15.528L43.4595 15.3742L41.0275 9.14055L43.3757 8.46967L44.7594 12.5509L46.0592 8.72125H48.589L45.6119 16.2967C45.4722 16.6601 45.2439 16.9955 44.9271 17.303C44.6103 17.6105 44.2422 17.8714 43.8229 18.0857C43.4036 18.3 42.9703 18.4584 42.5231 18.5609L41.6705 16.5902C41.8941 16.497 42.1271 16.3945 42.3693 16.2827C42.6209 16.1709 42.8445 16.0498 43.0402 15.9193C43.2359 15.7889 43.357 15.6584 43.4036 15.528Z" fill="currentColor"/>
</svg>
`)),Z1,Ah=t=>t,K1=class extends Se()(he){render(){return te(Z1||(Z1=Ah`<div>
      <bc-navbar class="flex w-full" heading="About"></bc-navbar>
      <div class="font-sans text-sm w-full">
        <div class="px-8">
          <div class="font-bold mb-1 ${0}">
            How does it work?
          </div>
          <p class="mb-2 ${0}">
            Bitcoin Connect is a way to connect to your lightning wallet from
            any browser.
          </p>
          <div class="flex flex-col gap-3 ${0}">
            <p>
              💾 Your connection is saved in local storage, so next time you
              visit the site will connect automatically.
            </p>
            <p>
              💸 Make sure to set budgets and permissions for sites you do not
              trust.
            </p>
          </div>
        </div>

        <div class="flex gap-4 w-full my-6 px-8">
          <a
            href="https://bitcoin-connect.com"
            target="_blank"
            class="${0} flex-1"
          >
            <bci-button>
              <span class="${0}">Learn more</span>
              ${0}
            </bci-button>
          </a>
          <a
            href="https://github.com/getAlby/bitcoin-connect"
            target="_blank"
            class="${0} flex-1"
          >
            <bci-button>
              <span class="${0}">Use it</span>
              ${0}
            </bci-button>
          </a>
        </div>
        ${0}
        <div
          class="flex w-full justify-center items-center mt-4 gap-1 font-sans"
        >
          <span class="block ${0}"
            >Made with love by</span
          >
          <span class="${0}"> ${0} </span>
        </div>
      </div>
    </div>`),Te,De,De,Gi,Te,j1,Gi,Te,j1,ls(),Rt,as,xh)}};K1=re([ge("bc-help")],K1);var z1,Oh=t=>t,Ei=class extends Se()(he){constructor(){super(...arguments),this._nwcUrl=""}render(){return te(z1||(z1=Oh`<div class="w-full">
      <bc-navbar class="flex w-full" heading="Nostr Wallet Connect"></bc-navbar>
      <div class="font-sans text-sm w-full">
        <div class="px-8 pt-4 w-full">
          <div class="mb-1 ${0}">
            Enter your
            <a
              href="https://nwc.getalby.com/about"
              target="_blank"
              class="font-bold"
              >NWC connection string
            </a>
            below
          </div>

          <input
            value=${0}
            @change=${0}
            placeholder="nostr+walletconnect://..."
            type="password"
            class="w-full mb-8 rounded-lg p-2 border-1 ${0}"
          />
          <bci-button @click=${0}>
            <span class="${0}">Connect</span>
          </bci-button>
        </div>
      </div>
    </div>`),De,this._nwcUrl,this.nwcUrlChanged,ao,this.onConnect,Te)}nwcUrlChanged(t){this._nwcUrl=t.target.value}async onConnect(){this._nwcUrl?await ne.getState().connect({nwcUrl:this._nwcUrl,connectorName:E0,connectorType:"nwc.generic"}):ne.getState().setError("Please enter a URL")}};re([Ee()],Ei.prototype,"_nwcUrl",void 0),Ei=re([ge("bc-nwc")],Ei);var q1,Y1,Sh=t=>t,_i=class extends Se()(he){constructor(){super(...arguments),this._nwcUrl=""}render(){return te(q1||(q1=Sh`<div class="w-full">
      <bc-navbar
        class="flex w-full"
        heading=${0}
      ></bc-navbar>
      <div class="font-sans text-sm w-full">
        <div class="px-8 pt-4 w-full">
          <div class="mb-2 ${0}">
            1. Add a new
            <a
              href="https://app.mutinywallet.com/settings/connections?name=${0}"
              target="_blank"
              class="font-bold"
              >Wallet Connection
            </a>
            from
            <span class="${0}"
              >Settings => Wallet Connections</span
            >
            and copy the connection string.
          </div>
          <div class="mb-1 ${0}">
            2. Paste the connection string below:
          </div>

          <input
            value=${0}
            @change=${0}
            placeholder="nostr+walletconnect://..."
            type="password"
            class="w-full mb-8 rounded-lg p-2 border-1 ${0}"
          />
          <bci-button @click=${0}>
            <span class="${0}">Connect</span>
          </bci-button>
        </div>
      </div>
    </div>`),zi,De,this._appName,Rt,De,this._nwcUrl,this.nwcUrlChanged,ao,this.onClickConnect,Te)}nwcUrlChanged(t){this._nwcUrl=t.target.value}async onClickConnect(){this._nwcUrl?await ne.getState().connect({nwcUrl:this._nwcUrl,connectorName:zi,connectorType:"nwc.mutiny"}):ne.getState().setError("Please enter a URL")}};re([Ee()],_i.prototype,"_nwcUrl",void 0),_i=re([ge("bc-mutiny")],_i);var Nh=_e(Y1||(Y1=(t=>t)`<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 0H0V256H256V0Z" fill="#673AB7"/>
<path d="M165 53H91V134.785H113.31V202L165 112.224H135.934L165 53Z" fill="white"/>
</svg>`)),qi="LNbits",J1=class extends It{constructor(){super("lnbits",qi,"#673ab7",Nh)}async _onClick(){ne.getState().pushRoute("/lnbits")}};J1=re([ge("bc-lnbits-connector")],J1);var X1,Th=t=>t,Gn=class extends Se()(he){constructor(){super(...arguments),this._lnbitsAdminKey="",this._lnbitsUrl="https://legend.lnbits.com"}render(){return te(X1||(X1=Th`<div class="w-full">
      <bc-navbar
        class="flex w-full"
        heading=${0}
      ></bc-navbar>
      <div class="font-sans text-sm w-full">
        <div class="px-8 pt-4 w-full">
          <div class="mb-4 ${0}">
            In LNbits, choose the wallet you want to connect, open it, click on
            API docs and copy the Admin Key. Paste it below:
          </div>

          <div class="mb-1 ${0}">
            LNbits Admin Key
          </div>
          <input
            value=${0}
            @change=${0}
            type="password"
            placeholder="Your 32 digit admin key"
            class="w-full mb-8 rounded-lg p-2 border-1 ${0}"
          />
          <div class="mb-1 ${0}">
            LNbits URL
          </div>

          <input
            value=${0}
            @change=${0}
            class="w-full mb-8 rounded-lg p-2 border-1 ${0}"
          />
          <bci-button @click=${0}>
            <span class="${0}">Connect</span>
          </bci-button>
        </div>
      </div>
    </div>`),qi,Zi,De,this._lnbitsAdminKey,this._lnbitsAdminKeyChanged,ao,De,this._lnbitsUrl,this._lnbitsUrlChanged,ao,this.onConnect,Te)}_lnbitsAdminKeyChanged(t){this._lnbitsAdminKey=t.target.value}_lnbitsUrlChanged(t){this._lnbitsUrl=t.target.value}async onConnect(){this._lnbitsAdminKey?this._lnbitsUrl?await ne.getState().connect({lnbitsAdminKey:this._lnbitsAdminKey,lnbitsInstanceUrl:this._lnbitsUrl,connectorName:qi,connectorType:"lnbits"}):ne.getState().setError("Please enter your LNbits instance URL"):ne.getState().setError("Please enter your admin key")}};re([Ee()],Gn.prototype,"_lnbitsAdminKey",void 0),re([Ee()],Gn.prototype,"_lnbitsUrl",void 0),Gn=re([ge("bc-lnbits")],Gn);var Q1,Rh=t=>t,el=class extends Se()(he){render(){return te(Q1||(Q1=Rh`<div class="w-full">
      <bc-navbar class="flex w-full" heading="Umbrel"></bc-navbar>
      <div class="font-sans text-sm w-full">
        <div class="px-8 pt-4 w-full">
          <div class="mb-4 ${0}">
            Install the App "NWC" from the Umbrel app store and click the
            connect button below. If you don't use
            <span class="italic">umbrel.local</span>
            as your umbrel domain use the Generic NWC connector instead.
          </div>
          <bci-button @click=${0}>
            <span class="${0}">Connect</span>
          </bci-button>
        </div>
      </div>
    </div>`),De,this.onConnect,Te)}async onConnect(){let t=Mr.NostrWebLNProvider.withNewSecret({authorizationUrl:"http://umbrel.local:58000/apps/new"});await t.initNWC({name:this._appName||"Bitcoin Connect"}),await ne.getState().connect({nwcUrl:t.getNostrWalletConnectUrl(),connectorName:"Umbrel",connectorType:"nwc.umbrel"})}};el=re([ge("bc-umbrel")],el);var tl,Ih=t=>t,rl=t=>_e(tl||(tl=Ih`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class=${0}>
<g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="currentColor">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>`),t||"w-7 h-7"),nl,kh=_e(nl||(nl=(t=>t)`
<svg width="150" height="150" viewBox="0 0 150 150" version="1.1" xml:space="preserve"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:svg="http://www.w3.org/2000/svg"
  class="w-32 h-32 mt-4"
>
	<circle id="ring" cx="75" cy="75" r="48.5" fill="none" stroke="currentColor" stroke-width="5" transform="rotate(-90 75 75)" stroke-dasharray="400 400" stroke-dashoffset="400">
		<animate attributeName="stroke-dashoffset" begin="0.1s" dur="1.5s" values="500; 80; 0" fill="freeze" calcMode="spline" keyTimes="0; 0.99; 1" keySplines="0.28 0.4 0.38 1; 0 0 1 1"/>
		<animate attributeName="r" begin="1.8s" dur=".8s" values="47; 65" fill="freeze"/>
		<animate attributeName="stroke-width" begin="1.8s" dur=".8s" values="6; 0" fill="freeze"/>
	</circle>
	<circle id="circle" cx="75" cy="75" r="0" fill="currentColor" stroke="none">
		<animate attributeName="r" begin="1.4s" dur=".5s" fill="freeze" calcMode="spline" values="0; 60; 50" keyTimes="0; 0.75; 1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
	</circle>
	<path id="check" d="M 51.749354,79.542286 63.437424,91.567026 98.46891,58.494402" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-dasharray="65 65" stroke-dashoffset="65">
		<animate attributeName="stroke-dashoffset" begin="1.8s" dur=".5s" values="65; 0" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.42 0 0.58 1"/>
	</path>
</svg>
`)),ol,Lh=_e(ol||(ol=(t=>t)`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33341 5.33341V4.80008C5.33341 4.05334 5.33341 3.67998 5.47874 3.39476C5.60657 3.14388 5.81054 2.9399 6.06143 2.81207C6.34664 2.66675 6.72001 2.66675 7.46675 2.66675H11.2001C11.9468 2.66675 12.3202 2.66675 12.6054 2.81207C12.8563 2.9399 13.0603 3.14388 13.1881 3.39476C13.3334 3.67998 13.3334 4.05334 13.3334 4.80008V8.53342C13.3334 9.28015 13.3334 9.65352 13.1881 9.93874C13.0603 10.1896 12.8563 10.3936 12.6054 10.5214C12.3202 10.6667 11.9468 10.6667 11.2001 10.6667H10.6667M10.6667 7.46675V11.2001C10.6667 11.9468 10.6667 12.3202 10.5214 12.6054C10.3936 12.8563 10.1896 13.0603 9.93874 13.1881C9.65352 13.3334 9.28015 13.3334 8.53342 13.3334H4.80008C4.05334 13.3334 3.67998 13.3334 3.39476 13.1881C3.14388 13.0603 2.9399 12.8563 2.81207 12.6054C2.66675 12.3202 2.66675 11.9468 2.66675 11.2001V7.46675C2.66675 6.72001 2.66675 6.34664 2.81207 6.06143C2.9399 5.81054 3.14388 5.60657 3.39476 5.47874C3.67998 5.33341 4.05334 5.33341 4.80008 5.33341H8.53342C9.28015 5.33341 9.65352 5.33341 9.93874 5.47874C10.1896 5.60657 10.3936 5.81054 10.5214 6.06143C10.6667 6.34664 10.6667 6.72001 10.6667 7.46675Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`)),il,Ph=_e(il||(il=(t=>t)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6.5V17C4.5 18.6569 5.84315 20 7.5 20H17.5C19.1569 20 20.5 18.6569 20.5 17V12C20.5 10.3431 19.1569 9 17.5 9H16.5M4.5 6.5C4.5 7.88071 5.61929 9 7 9H16.5M4.5 6.5C4.5 5.11929 5.61929 4 7 4H14.5C15.6046 4 16.5 4.89543 16.5 6V9" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M16 15.375C16.4832 15.375 16.875 14.9832 16.875 14.5C16.875 14.0168 16.4832 13.625 16 13.625C15.5168 13.625 15.125 14.0168 15.125 14.5C15.125 14.9832 15.5168 15.375 16 15.375Z" fill="white" stroke="currentColor" stroke-width="0.75"/>
</svg>`)),sl,Uh=_e(sl||(sl=(t=>t)`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H8C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6ZM6 5C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5H6ZM13 6C13 4.34315 14.3431 3 16 3H18C19.6569 3 21 4.34315 21 6V8C21 9.65685 19.6569 11 18 11H16C14.3431 11 13 9.65685 13 8V6ZM16 5C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5H16ZM3 16C3 14.3431 4.34315 13 6 13H8C9.65685 13 11 14.3431 11 16V18C11 19.6569 9.65685 21 8 21H6C4.34315 21 3 19.6569 3 18V16ZM6 15C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15H6ZM14 13C14.5523 13 15 13.4477 15 14V15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H14C13.4477 17 13 16.5523 13 16V14C13 13.4477 13.4477 13 14 13ZM17 14C17 13.4477 17.4477 13 18 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H18C17.4477 15 17 14.5523 17 14ZM17 18C17 17.4477 17.4477 17 18 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z" fill="currentColor"/>
<path d="M15 20C15 20.5523 14.5523 21 14 21C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19C14.5523 19 15 19.4477 15 20Z" fill="currentColor"/>
<path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="currentColor"/>
<path d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z" fill="currentColor"/>
<path d="M18 7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7Z" fill="currentColor"/>
</svg>`)),al,cl,ll,ul,fl,dl,hl,pl,gl,yl,Tt=t=>t,sr=class extends Se()(he){constructor(){super(...arguments),this._hasCopiedInvoice=!1,this._isPaying=!1,this._showQR=!1}updated(t){super.updated(t),t.has("paid")&&this.paid&&setTimeout(()=>{v0()},3e3)}render(){if(!this.invoice)return null;let t;try{t=new Hn({pr:this.invoice})}catch(o){return console.error(o),ne.getState().setError(o.message),null}let e=(0,Jl.default)(0,"L");e.addData(this.invoice),e.make();let r=window.innerWidth<600;return te(al||(al=Tt` <div
      class="flex flex-col justify-center items-center font-sans w-full"
    >
      <h2 class="text-2xl mb-6 ${0}">
        <span
          class="font-bold font-mono text-4xl align-bottom ${0}"
          >${0}</span
        >&nbsp;sats
      </h2>
      ${0}
    </div>`),De,Te,t.satoshi.toLocaleString(void 0,{useGrouping:!0}),this._connected||this.paid?this.paid?te(cl||(cl=Tt`<div
              class="flex flex-col justify-center items-center ${0}"
            >
              <p class="font-bold">Paid!</p>
              ${0}
            </div>`),Te,kh):this._isPaying?te(ll||(ll=Tt`<div class="flex flex-col justify-center items-center">
              <p class="${0} mb-5">Paying...</p>
              ${0}
            </div>`),De,rl(`w-48 h-48 ${Te}`)):te(ul||(ul=Tt`<bci-button variant="primary" @click=${0}>
                <span class="-ml-0.5">${0}</span>
                Confirm Payment
              </bci-button>
              ${0} `),this._payInvoice,Kr,_0(this._connectorName)):te(fl||(fl=Tt`
            <div class="flex justify-center items-center">
              ${0}
              <p class="${0}">
                Waiting for payment
              </p>
            </div>

            ${0}
            ${0}
          `),rl(`w-7 h-7 ${Te}`),De,r?te(hl||(hl=Tt`
                  <div class="mt-8 w-full flex flex-col gap-4">
                    <a href="lightning:${0}">
                      <bci-button variant="primary" block>
                        ${0} Open in a Bitcoin Wallet
                      </bci-button>
                    </a>
                    <bci-button block @click=${0}>
                      <span class="-ml-0.5">${0}</span>Connect Wallet
                    </bci-button>
                    ${0}
                  </div>
                `),this.invoice,Ph,this._onClickConnectWallet,Kr,this._showQR?null:te(pl||(pl=Tt`<bci-button
                          block
                          @click=${0}
                        >
                          ${0}Copy & Display Invoice
                        </bci-button>`),this._copyAndDisplayInvoice,Uh)):te(dl||(dl=Tt`<div class="mt-8">
                    <bci-button variant="primary" @click=${0}>
                    <span class="-ml-0.5">${0}</span>
                    Connect Wallet to Pay
                  </bci-button>
                  </div>
                  <div class="w-full py-4">${0}</div>

                  <p class="font-medium ${0}">
                    Scan to Pay
                  </p>
              </div>`),this._onClickConnectWallet,Kr,ls("or"),De),!r||this._showQR?te(gl||(gl=Tt`
                <!-- add margin only on dark mode because on dark mode the qr has a white border -->
                <a href="lightning:${0}" class="dark:mt-2">
                  <img src=${0} class="rounded-lg"></img>
                </a>
                <a
                  @click=${0}
                  class="
                  flex gap-1
                  mt-4
                  ${0} ${0} font-semibold text-xs"
                  >
                  ${0}
                  ${0}
                </a>
            `),this.invoice,e.createDataURL(4),this._copyInvoice,Te,Qe,this._hasCopiedInvoice?null:Lh,this._hasCopiedInvoice?"Copied!":"Copy Invoice"):null))}_onClickConnectWallet(){this.dispatchEvent(new Event("onclickconnectwallet",{bubbles:!0,composed:!0}))}_copyAndDisplayInvoice(){this._copyInvoice(),this._showQR=!0}_copyInvoice(){this.invoice&&(navigator.clipboard.writeText(this.invoice),this._hasCopiedInvoice=!0,setTimeout(()=>{this._hasCopiedInvoice=!1},2e3))}async _payInvoice(){this._isPaying=!0;try{let t=ne.getState().provider;if(!t)throw new Error("No WebLN provider available");if(!this.invoice)throw new Error("No invoice to pay");let e=await t.sendPayment(this.invoice);if(!e.preimage)throw new Error("No preimage in result");this.dispatchEvent(new CustomEvent("bc:onpaid",{bubbles:!0,composed:!0,detail:e})),this.paid=!0}catch(t){console.error(t),ne.getState().setError(t.message)}this._isPaying=!1}};re([Ee()],sr.prototype,"_hasCopiedInvoice",void 0),re([Ee()],sr.prototype,"_isPaying",void 0),re([Ee()],sr.prototype,"_showQR",void 0),re([Me({type:String})],sr.prototype,"invoice",void 0),re([Me({type:Boolean})],sr.prototype,"paid",void 0),sr=re([ge("bc-send-payment")],sr);var Dh=_e(yl||(yl=(t=>t)`<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse opacity="0.1" cx="32.1415" cy="61.8203" rx="10.8066" ry="1.99506" fill="black"/>
<path d="M42.5586 52.1078C48.1415 52.1078 50.6826 39.7459 50.6826 35.0587C50.6826 31.4053 48.1617 29.1912 44.8476 29.1912C41.5541 29.1912 38.8804 30.6074 38.8472 32.3612C38.8471 36.9895 38.0325 52.1078 42.5586 52.1078Z" fill="white" stroke="black" stroke-width="1.66255"/>
<path d="M22.1679 52.1078C16.5851 52.1078 14.044 39.7459 14.044 35.0587C14.044 31.4053 16.5649 29.1912 19.879 29.1912C23.1724 29.1912 25.8462 30.6074 25.8794 32.3612C25.8795 36.9895 26.6941 52.1078 22.1679 52.1078Z" fill="white" stroke="black" stroke-width="1.66255"/>
<path d="M17.5357 33.5726L17.5357 33.5724C17.5297 33.5152 17.5413 33.482 17.5532 33.4604C17.5672 33.4348 17.5938 33.4044 17.6385 33.379C17.7311 33.3264 17.8608 33.3169 17.9815 33.3875L18.3992 32.6737L17.981 33.3872C22.1277 35.818 26.9107 37.2115 32.1107 37.2115C37.3115 37.2115 42.183 35.791 46.3562 33.318C46.4761 33.2469 46.6055 33.2557 46.6983 33.308C46.7432 33.3333 46.77 33.3636 46.7842 33.3893C46.7962 33.411 46.808 33.4442 46.8022 33.5016C46.1566 39.899 42.6866 45.1881 38.0224 47.6226L38.0224 47.6226C36.4819 48.4268 35.4226 49.8239 34.4922 51.051C34.4756 51.073 34.4589 51.0949 34.4423 51.1168L34.4422 51.117C33.686 52.1145 33.0017 53.0078 32.1653 53.6661C31.3289 53.0078 30.6445 52.1145 29.8883 51.117L29.8882 51.1168C29.8716 51.0949 29.855 51.073 29.8383 51.051C28.9079 49.8239 27.8487 48.4268 26.3082 47.6226L26.3081 47.6226C21.6617 45.1975 18.2005 39.9391 17.5357 33.5726Z" fill="#FFDF6F" stroke="black" stroke-width="1.65411"/>
<ellipse cx="32.1969" cy="33.4459" rx="14.6305" ry="4.87682" fill="black" stroke="black" stroke-width="1.66255"/>
<path d="M20.4482 41.6479C20.4482 41.6479 27.6647 44.0864 32.3078 44.0864C36.9509 44.0864 44.1673 41.6479 44.1673 41.6479" stroke="black" stroke-width="1.66255" stroke-linecap="round"/>
<circle cx="3.30822" cy="3.30822" r="3.30822" transform="matrix(-1 0 0 1 21.7446 9.28369)" fill="black"/>
<path d="M17.8852 12.0955L24.0605 18.2708" stroke="black" stroke-width="1.65411"/>
<circle cx="45.4537" cy="12.5919" r="3.30822" fill="black"/>
<path d="M46.0601 12.0955L39.8848 18.2708" stroke="black" stroke-width="1.65411"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3753 32.3329C17.5923 31.4841 16.5546 29.578 16.9022 27.634C18.3941 19.2907 24.6116 13.033 32.0551 13.033C39.5166 13.033 45.7462 19.3211 47.2187 27.6947C47.5612 29.6422 46.5151 31.5474 44.726 32.3894C40.8976 34.1909 36.6215 35.198 32.1102 35.198C27.552 35.198 23.234 34.1699 19.3753 32.3329Z" fill="#FFDF6F"/>
<path d="M47.2187 27.6947L46.4042 27.838L47.2187 27.6947ZM44.726 32.3894L44.3738 31.641L44.726 32.3894ZM16.9022 27.634L16.088 27.4885L16.9022 27.634ZM19.3753 32.3329L19.0198 33.0797L19.3753 32.3329ZM17.7163 27.7796C19.1579 19.7177 25.1169 13.86 32.0551 13.86V12.2059C24.1063 12.2059 17.6303 18.8637 16.088 27.4885L17.7163 27.7796ZM32.0551 13.86C39.01 13.86 44.9812 19.7463 46.4042 27.838L48.0333 27.5515C46.5111 18.8958 40.0232 12.2059 32.0551 12.2059V13.86ZM44.3738 31.641C40.6533 33.3918 36.4973 34.3709 32.1102 34.3709V36.0251C36.7458 36.0251 41.1419 34.99 45.0781 33.1377L44.3738 31.641ZM32.1102 34.3709C27.6776 34.3709 23.4808 33.3714 19.7308 31.5862L19.0198 33.0797C22.9872 34.9684 27.4265 36.0251 32.1102 36.0251V34.3709ZM46.4042 27.838C46.6788 29.3993 45.8428 30.9498 44.3738 31.641L45.0781 33.1377C47.1874 32.1451 48.4437 29.885 48.0333 27.5515L46.4042 27.838ZM16.088 27.4885C15.6715 29.8178 16.9178 32.079 19.0198 33.0797L19.7308 31.5862C18.2668 30.8893 17.4376 29.3381 17.7163 27.7796L16.088 27.4885Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.557 30.2587C21.1218 29.6741 20.2704 28.1471 20.7678 26.6794C22.3014 22.153 26.7753 18.8774 32.0555 18.8774C37.3357 18.8774 41.8095 22.153 43.3432 26.6794C43.8406 28.1471 42.9892 29.6741 41.554 30.2587C38.6226 31.4525 35.4159 32.1103 32.0555 32.1103C28.6951 32.1103 25.4884 31.4525 22.557 30.2587Z" fill="black"/>
<ellipse cx="35.8599" cy="25.935" rx="2.75685" ry="2.20548" fill="white"/>
<ellipse cx="27.9678" cy="25.9362" rx="2.75685" ry="2.20548" fill="white"/>
</svg>

`)),ml,Mh=_e(ml||(ml=(t=>t)`<?xml version="1.0" encoding="UTF-8"?>
<svg width="80" height="80" fill="none" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <defs>
  <linearGradient id="linearGradient16" x1="22" x2="22" y1="6" y2="38" gradientUnits="userSpaceOnUse">
   <stop stop-color="#020024" offset="0"/>
   <stop stop-color="#03215d" offset="1"/>
  </linearGradient>
 </defs>
 <g>
  <rect x="6" y="6" width="32" height="32" ry="7.9595" fill="url(#linearGradient16)" stroke-width="0"/>
  <path d="m10.161 29.944h1.9732v0.99297h2.9598v-0.99297h0.9866v-9.9297h0.98663v-1.9859h-0.98663v-0.99297h-1.9732v0.99297h-0.9866v0.99297h-0.9866v0.99297h2.9598v1.9859h-0.9866v0.99297h-1.9732v-0.99297h-0.9866v-3.9719h0.9866v-0.99297h0.9866v-0.99297h5.9196v0.99297h0.98663v0.99297h0.98655v1.9859h0.98663v1.9859h0.98663v0.99297h0.98655v-1.9859h0.98663v-0.99297h0.98663v-1.9859h0.98655v-1.9859h0.98663v-0.99297h0.98663v-1.9859h1.9732v-0.99297h1.9732v0.99297h0.98663v0.99297h-1.9732v-0.99297h-0.98663v0.99297h-0.98663v11.916h0.98663v4.9648h0.98663v0.99297h-3.9464v-0.99297h-0.98663v-9.9297h-0.98655v0.99297h-0.98663v1.9859h-0.98663v1.9859h-0.98655v1.9859h-1.9733v-1.9859h-0.98655v-1.9859h-0.98663v-2.9789h-0.98663v5.9578h-0.98655v2.9789h-0.98663v0.99297h-0.9866v0.99297h-3.9464v-0.99297h-0.9866z" fill="#f42058" stroke-width=".76382"/>
 </g>
 <g>
  <rect x="26" y="26" width="32" height="32" ry="7.9595" fill="#673ab7" stroke-width="0"/>
  <path d="m46.707 32.522h-9.4143v10.405h2.8383v8.5511l6.576-11.421h-3.6978z" fill="#fff" stroke-width=".12722"/>
 </g>
</svg>
`)),bl,Bh=t=>t,wl=class extends Se()(he){render(){return te(bl||(bl=Bh`<div>
      <bc-navbar
        class="flex w-full"
        heading="Get a bitcoin lightning wallet"
      ></bc-navbar>

      <div class="gap-4 w-full my-6 px-8 font-sans text-sm w-full">
        <div class="flex flex-row items-center space-x-4">
          <div>
            <div class="w-20 h-20">${0}</div>
          </div>
          <p class="text-sm text-justify ${0}">
            For quick setup of a bitcoin lightning wallet we recommend signing
            up for the
            <a
              href="https://getalby.com/#alby-account"
              target="_blank"
              class="no-underline font-bold ${0} ${0} "
              >Alby Account</a
            >, which you can pair with the
            <a
              href="https://getalby.com/#alby-extension"
              target="_blank"
              class="no-underline font-bold ${0} ${0} "
              >Alby Browser Extension</a
            >.
          </p>
        </div>
        <br />
        <br />
        <div class="flex flex-row items-center space-x-4">
          <div>
            <div class="w-20 h-20">${0}</div>
          </div>
          <p class="text-sm text-justify ${0}">
            More advanced users could try also solutions like
            <a
              href="https://www.mutinywallet.com"
              target="_blank"
              class="no-underline font-bold ${0} ${0} "
              >Mutiny</a
            >
            or
            <a
              href="https://lnbits.com"
              target="_blank"
              class="no-underline font-bold ${0} ${0} "
              >LNBits</a
            >.
          </p>
        </div>
      </div>
    </div>`),Dh,De,Qe,Te,Qe,Te,Mh,De,Qe,Te,Qe,Te)}};wl=re([ge("bc-new-wallet")],wl);var vl,El,_l,Cl,xl,Al,Ol,Sl,jt=t=>t,$h={"/start":te(vl||(vl=jt`<bc-start class="flex w-full"></bc-start>`)),"/help":te(El||(El=jt`<bc-help class="flex w-full"></bc-help>`)),"/nwc":te(_l||(_l=jt`<bc-nwc class="flex w-full"></bc-nwc>`)),"/mutiny":te(Cl||(Cl=jt`<bc-mutiny class="flex w-full"></bc-mutiny>`)),"/lnbits":te(xl||(xl=jt`<bc-lnbits class="flex w-full"></bc-lnbits>`)),"/umbrel":te(Al||(Al=jt`<bc-umbrel class="flex w-full"></bc-umbrel>`)),"/send-payment":te(Ol||(Ol=jt`<bc-send-payment
    invoice="{params.invoice}"
    class="flex w-full justify-center"
  ></bc-send-payment>`)),"/new-wallet":te(Sl||(Sl=jt`<bc-new-wallet class="flex w-full"></bc-new-wallet>`))},Nl,Hh=t=>t,Tl=class extends Se()(he){render(){return te(Nl||(Nl=Hh`<div class="flex flex-col w-full">${0}</div>`),$h[this._route])}};Tl=re([ge("bc-router-outlet")],Tl);var Rl,Il,jh=t=>t,kl=class extends Se()(Nr){render(){return te(Rl||(Rl=jh`<div
      class="${0} w-full flex-1 animate-pulse"
    >
      <h1
        class="w-1/2 h-7 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md"
      ></h1>
      <div
        class="w-1/2 h-4 mt-8 mb-2 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md"
      ></div>
      <div
        class="mb-12 h-10 w-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md"
      ></div>
      ${0}
      <div
        class="my-4 h-4 w-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md"
      ></div>
      <div
        class="h-10 w-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md"
      ></div>
    </div>`),as,ls())}};kl=re([ge("bci-connecting")],kl);var Fh=_e(Il||(Il=(t=>t)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.665 18.33C13.5404 18.3311 14.4074 18.1592 15.2162 17.8242C16.025 17.4892 16.7596 16.9977 17.3778 16.3778C17.9977 15.7596 18.4892 15.025 18.8242 14.2162C19.1592 13.4074 19.3311 12.5404 19.33 11.665C19.3311 10.7896 19.1592 9.92256 18.8242 9.11378C18.4892 8.305 17.9976 7.5704 17.3778 6.95218C16.7596 6.33235 16.025 5.84079 15.2162 5.50577C14.4074 5.17075 13.5404 4.99887 12.665 5.00001C11.7896 4.99889 10.9226 5.17078 10.1138 5.5058C9.305 5.84082 8.5704 6.33236 7.95218 6.95218C7.33236 7.5704 6.84082 8.305 6.5058 9.11378C6.17078 9.92256 5.99889 10.7896 6.00001 11.665C5.99887 12.5404 6.17075 13.4074 6.50577 14.2162C6.84079 15.025 7.33235 15.7596 7.95218 16.3778C8.5704 16.9976 9.305 17.4892 10.1138 17.8242C10.9226 18.1592 11.7896 18.3311 12.665 18.33Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M12.6649 12.9149V11.9152C12.9615 11.9152 13.2515 11.8272 13.4981 11.6625C13.7447 11.4977 13.9369 11.2635 14.0504 10.9895C14.1639 10.7155 14.1936 10.4139 14.1357 10.123C14.0779 9.83215 13.935 9.56495 13.7253 9.35523C13.5156 9.14551 13.2484 9.00269 12.9575 8.94483C12.6666 8.88697 12.3651 8.91667 12.091 9.03017C11.817 9.14366 11.5828 9.33587 11.418 9.58247C11.2532 9.82908 11.1653 10.119 11.1653 10.4156" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6653 15.7497C12.8642 15.7497 13.055 15.6707 13.1956 15.5301C13.3363 15.3895 13.4153 15.1987 13.4153 14.9999C13.4153 14.801 13.3363 14.6103 13.1956 14.4696C13.055 14.329 12.8642 14.25 12.6653 14.25C12.4664 14.25 12.2756 14.329 12.135 14.4696C11.9943 14.6103 11.9153 14.801 11.9153 14.9999C11.9153 15.1987 11.9943 15.3895 12.135 15.5301C12.2756 15.6707 12.4664 15.7497 12.6653 15.7497Z" fill="currentColor"/>
</svg>
`)),Ll,Pl,Ul,Ci=t=>t,Zn=class extends Se()(he){render(){return te(Ll||(Ll=Ci`<div
      class="flex justify-center items-center gap-2 w-full relative"
    >
      <div
        class="absolute right-0 h-full flex items-center justify-center gap-2"
      >
        ${0}
        ${0}
      </div>
      <div class="flex items-center justify-center">
        <slot></slot>
      </div>
    </div>`),this.showHelp?te(Pl||(Pl=Ci`<div
              class="${0} ${0}"
              @click=${0}
            >
              ${0}
            </div>`),Qe,Rt,()=>ne.getState().pushRoute("/help"),Fh):null,this.closable?te(Ul||(Ul=Ci`<div
              class="${0} ${0}"
              @click=${0}
            >
              ${0}
            </div>`),Qe,Rt,this._handleClose,C0):null)}_handleClose(){this.dispatchEvent(new Event("onclose",{bubbles:!0,composed:!0}))}};re([Me({type:Boolean})],Zn.prototype,"closable",void 0),re([Me({type:Boolean,attribute:"show-help"})],Zn.prototype,"showHelp",void 0),Zn=re([ge("bc-modal-header")],Zn);var Dl,Ml,Vh=t=>t,Bl=class extends Se()(he){constructor(){super(...arguments),this._handleClose=()=>{v0()}}render(){return te(Dl||(Dl=Vh` <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-end sm:items-center z-[21000]"
    >
      <div
        class="absolute top-0 left-0 w-full h-full -z-10 ${0} animate-darken"
      ></div>
      <div
        class="transition-all p-4 pt-6 pb-8 rounded-2xl shadow-2xl flex justify-center items-center w-full bg-white dark:bg-black max-w-md max-sm:rounded-b-none
        animate-fade-in"
      >
        <slot @onclose=${0}></slot>
      </div>
    </div>`),"bg-foreground-light dark:bg-foreground-dark",this._handleClose)}};Bl=re([ge("bc-modal")],Bl);var Wh=_e(Ml||(Ml=(t=>t)`<svg width="116" height="14" viewBox="0 0 116 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.88623 4.23009C7.4526 4.23009 7.94227 4.33038 8.35525 4.53097C8.76823 4.73156 9.11041 5.00295 9.3818 5.34513C9.65319 5.68732 9.85378 6.0885 9.98357 6.54867C10.1134 7.00885 10.1783 7.50443 10.1783 8.0354C10.1783 8.84956 10.0249 9.62242 9.71809 10.354C9.4231 11.0737 9.01602 11.705 8.49685 12.2478C7.97767 12.7788 7.3641 13.2035 6.65614 13.5221C5.94817 13.8289 5.18121 13.9823 4.35525 13.9823C4.24905 13.9823 4.06026 13.9764 3.78888 13.9646C3.52929 13.9646 3.2284 13.941 2.88622 13.8938C2.54404 13.8466 2.17826 13.7758 1.78888 13.6814C1.41129 13.587 1.05141 13.4572 0.709229 13.292L3.77118 0.424778L6.51454 0L5.4172 4.56637C5.65318 4.46018 5.88917 4.37758 6.12516 4.31858C6.36115 4.25959 6.61484 4.23009 6.88623 4.23009ZM4.58534 11.8053C4.99832 11.8053 5.3877 11.705 5.75348 11.5044C6.11926 11.3038 6.43195 11.0384 6.69153 10.708C6.96292 10.3658 7.17531 9.9823 7.3287 9.55752C7.4821 9.13274 7.55879 8.69027 7.55879 8.23009C7.55879 7.66372 7.4644 7.22124 7.27561 6.90266C7.08681 6.58407 6.73873 6.42478 6.23136 6.42478C6.06616 6.42478 5.84788 6.45428 5.57649 6.51328C5.3169 6.57227 5.08091 6.69617 4.86852 6.88496L3.70038 11.7345C3.77118 11.7463 3.83018 11.7581 3.87737 11.7699C3.93637 11.7817 3.99537 11.7935 4.05436 11.8053C4.11336 11.8053 4.18416 11.8053 4.26675 11.8053C4.34935 11.8053 4.45554 11.8053 4.58534 11.8053Z" fill="currentColor"/>
<path d="M13.1552 13.7345H10.5357L12.7481 4.42478H15.3853L13.1552 13.7345ZM14.4295 3.29204C14.0637 3.29204 13.7333 3.18584 13.4384 2.97345C13.1434 2.74926 12.9959 2.41298 12.9959 1.9646C12.9959 1.71681 13.0431 1.48673 13.1375 1.27434C13.2437 1.05015 13.3794 0.861357 13.5446 0.707964C13.7097 0.542772 13.8985 0.412979 14.1109 0.318584C14.3351 0.224189 14.5711 0.176991 14.8189 0.176991C15.1847 0.176991 15.5151 0.289086 15.81 0.513274C16.105 0.725664 16.2525 1.05605 16.2525 1.50442C16.2525 1.75221 16.1994 1.9882 16.0932 2.21239C15.9988 2.42478 15.869 2.61357 15.7038 2.77876C15.5387 2.93215 15.344 3.05605 15.1198 3.15044C14.9074 3.24484 14.6773 3.29204 14.4295 3.29204Z" fill="currentColor"/>
<path d="M17.7251 2.1062L20.4685 1.68142L19.7959 4.42478H22.734L22.203 6.58407H19.2827L18.5039 9.84071C18.4331 10.1121 18.3859 10.3658 18.3623 10.6018C18.3505 10.8378 18.38 11.0443 18.4508 11.2212C18.5334 11.3864 18.6691 11.5162 18.8579 11.6106C19.0467 11.705 19.3063 11.7522 19.6367 11.7522C19.9198 11.7522 20.1912 11.7286 20.4508 11.6814C20.7222 11.6224 20.9936 11.5457 21.265 11.4513L21.4597 13.469C21.1057 13.5988 20.7222 13.7109 20.3092 13.8053C19.8962 13.8997 19.4066 13.9469 18.8402 13.9469C18.026 13.9469 17.3948 13.8289 16.9464 13.5929C16.498 13.3451 16.1794 13.0148 15.9906 12.6018C15.8018 12.177 15.7192 11.6932 15.7428 11.1504C15.7664 10.6077 15.849 10.0354 15.9906 9.43363L17.7251 2.1062Z" fill="currentColor"/>
<path d="M22.475 10.0177C22.475 9.21534 22.6048 8.46018 22.8644 7.75221C23.124 7.04425 23.4957 6.42478 23.9794 5.89381C24.4632 5.36283 25.0473 4.94395 25.7316 4.63717C26.4278 4.33038 27.2007 4.17699 28.0502 4.17699C28.5812 4.17699 29.0532 4.23009 29.4662 4.33628C29.8909 4.43068 30.2744 4.56047 30.6166 4.72567L29.7139 6.77876C29.478 6.68437 29.2302 6.60177 28.9706 6.53097C28.7228 6.44838 28.416 6.40708 28.0502 6.40708C27.1653 6.40708 26.4691 6.70797 25.9617 7.30974C25.4544 7.89971 25.2007 8.70797 25.2007 9.73452C25.2007 10.3363 25.3305 10.826 25.5901 11.2035C25.8496 11.5693 26.3275 11.7522 27.0237 11.7522C27.3659 11.7522 27.6963 11.7168 28.0148 11.646C28.3334 11.5752 28.6166 11.4867 28.8644 11.3805L29.0591 13.4867C28.7287 13.6165 28.3629 13.7286 27.9617 13.823C27.5724 13.9292 27.0945 13.9823 26.5281 13.9823C25.7965 13.9823 25.1771 13.8761 24.6697 13.6637C24.1623 13.4513 23.7434 13.1681 23.4131 12.8142C23.0827 12.4484 22.8408 12.0236 22.6874 11.5398C22.5458 11.0561 22.475 10.5487 22.475 10.0177Z" fill="currentColor"/>
<path d="M33.8569 13.9823C33.2316 13.9823 32.6888 13.8879 32.2286 13.6991C31.7684 13.5103 31.385 13.2448 31.0782 12.9027C30.7832 12.5605 30.559 12.1593 30.4056 11.6991C30.2522 11.2271 30.1755 10.708 30.1755 10.1416C30.1755 9.43363 30.2876 8.72567 30.5118 8.0177C30.7478 7.30974 31.09 6.67257 31.5383 6.1062C31.9867 5.53982 32.5354 5.07965 33.1844 4.72567C33.8333 4.35988 34.5767 4.17699 35.4145 4.17699C36.028 4.17699 36.5649 4.27139 37.0251 4.46018C37.4971 4.64897 37.8805 4.91445 38.1755 5.25664C38.4823 5.59882 38.7124 6.0059 38.8658 6.47788C39.0192 6.93805 39.0959 7.45133 39.0959 8.0177C39.0959 8.72567 38.9838 9.43363 38.7596 10.1416C38.5354 10.8496 38.205 11.4867 37.7684 12.0531C37.3319 12.6195 36.7832 13.0855 36.1224 13.4513C35.4735 13.8053 34.7183 13.9823 33.8569 13.9823ZM35.1667 6.40708C34.7773 6.40708 34.4351 6.51918 34.1401 6.74336C33.8451 6.96755 33.5973 7.25074 33.3968 7.59292C33.1962 7.9351 33.0428 8.31269 32.9366 8.72567C32.8422 9.12685 32.795 9.51033 32.795 9.87611C32.795 10.4779 32.8894 10.944 33.0782 11.2743C33.267 11.5929 33.6091 11.7522 34.1047 11.7522C34.4941 11.7522 34.8363 11.6401 35.1313 11.4159C35.4263 11.1917 35.674 10.9086 35.8746 10.5664C36.0752 10.2242 36.2227 9.85251 36.3171 9.45133C36.4233 9.03835 36.4764 8.64897 36.4764 8.28319C36.4764 7.68142 36.382 7.22124 36.1932 6.90266C36.0044 6.57227 35.6622 6.40708 35.1667 6.40708Z" fill="currentColor"/>
<path d="M42.0732 13.7345H39.4537L41.6661 4.42478H44.3033L42.0732 13.7345ZM43.3475 3.29204C42.9818 3.29204 42.6514 3.18584 42.3564 2.97345C42.0614 2.74926 41.9139 2.41298 41.9139 1.9646C41.9139 1.71681 41.9611 1.48673 42.0555 1.27434C42.1617 1.05015 42.2974 0.861357 42.4626 0.707964C42.6278 0.542772 42.8166 0.412979 43.0289 0.318584C43.2531 0.224189 43.4891 0.176991 43.7369 0.176991C44.1027 0.176991 44.4331 0.289086 44.7281 0.513274C45.0231 0.725664 45.1705 1.05605 45.1705 1.50442C45.1705 1.75221 45.1174 1.9882 45.0113 2.21239C44.9169 2.42478 44.7871 2.61357 44.6219 2.77876C44.4567 2.93215 44.262 3.05605 44.0378 3.15044C43.8254 3.24484 43.5953 3.29204 43.3475 3.29204Z" fill="currentColor"/>
<path d="M46.2538 4.84956C46.4544 4.79056 46.6727 4.72566 46.9087 4.65487C47.1564 4.57227 47.4278 4.50148 47.7228 4.44248C48.0296 4.37168 48.3659 4.31859 48.7317 4.28319C49.1092 4.23599 49.534 4.21239 50.006 4.21239C51.3983 4.21239 52.3541 4.61357 52.8733 5.41593C53.3924 6.21829 53.4809 7.31564 53.1387 8.70797L51.9352 13.7345H49.298L50.4662 8.81416C50.537 8.50738 50.5901 8.21239 50.6255 7.92921C50.6727 7.63422 50.6727 7.38053 50.6255 7.16814C50.5783 6.94395 50.4662 6.76696 50.2892 6.63717C50.124 6.49558 49.8644 6.42478 49.5104 6.42478C49.1682 6.42478 48.8202 6.46018 48.4662 6.53097L46.7494 13.7345H44.1122L46.2538 4.84956Z" fill="currentColor"/>
<path d="M59.411 14C58.6441 14 57.9656 13.8879 57.3756 13.6637C56.7974 13.4395 56.3137 13.1209 55.9243 12.708C55.5349 12.295 55.2399 11.7994 55.0393 11.2212C54.8505 10.6313 54.7561 9.9705 54.7561 9.23894C54.7561 8.17699 54.9213 7.16224 55.2517 6.19469C55.5939 5.22714 56.0718 4.37168 56.6853 3.62832C57.3107 2.88496 58.06 2.29499 58.9331 1.85841C59.8063 1.41003 60.7798 1.18584 61.8535 1.18584C62.7739 1.18584 63.5054 1.28024 64.0482 1.46903C64.6028 1.65782 64.998 1.83481 65.234 2L64.5261 3.41593C64.2547 3.23894 63.883 3.07375 63.411 2.92035C62.9508 2.75516 62.4022 2.67257 61.765 2.67257C60.9508 2.67257 60.2193 2.86726 59.5703 3.25664C58.9213 3.63422 58.3727 4.1298 57.9243 4.74336C57.4759 5.34513 57.1337 6.0295 56.8977 6.79646C56.6617 7.55162 56.5438 8.30089 56.5438 9.04425C56.5438 11.3451 57.5408 12.4956 59.5349 12.4956C59.9597 12.4956 60.3373 12.4661 60.6677 12.4071C61.0098 12.3481 61.3107 12.2832 61.5703 12.2124C61.8299 12.1298 62.06 12.0413 62.2606 11.9469C62.4612 11.8525 62.6382 11.7699 62.7915 11.6991L63.0039 13.1858C62.8623 13.2684 62.6736 13.3569 62.4376 13.4513C62.2134 13.5457 61.9479 13.6342 61.6411 13.7168C61.3343 13.7994 60.9921 13.8643 60.6146 13.9115C60.237 13.9705 59.8358 14 59.411 14Z" fill="currentColor"/>
<path d="M67.2379 13.9646C66.2703 13.9646 65.5093 13.6814 64.9547 13.115C64.4119 12.5369 64.1406 11.7463 64.1406 10.7434C64.1406 10.059 64.235 9.33924 64.4237 8.58407C64.6243 7.82891 64.937 7.13274 65.3618 6.49558C65.7866 5.85841 66.3352 5.33333 67.0078 4.92035C67.6804 4.50737 68.4945 4.30089 69.4503 4.30089C70.4178 4.30089 71.173 4.58997 71.7158 5.16814C72.2704 5.73451 72.5476 6.51918 72.5476 7.52213C72.5476 8.20649 72.4473 8.92626 72.2468 9.68142C72.058 10.4366 71.7512 11.1327 71.3264 11.7699C70.9016 12.4071 70.353 12.9322 69.6804 13.3451C69.0078 13.7581 68.1937 13.9646 67.2379 13.9646ZM67.5211 12.5664C68.0521 12.5664 68.524 12.413 68.937 12.1062C69.3618 11.7994 69.7158 11.41 69.999 10.9381C70.294 10.4543 70.5181 9.92331 70.6715 9.34513C70.8249 8.76696 70.9016 8.20649 70.9016 7.66372C70.9016 7.06195 70.7718 6.58407 70.5122 6.23009C70.2527 5.87611 69.8043 5.69912 69.1671 5.69912C68.6361 5.69912 68.1583 5.85251 67.7335 6.15929C67.3205 6.46608 66.9665 6.86136 66.6715 7.34513C66.3883 7.81711 66.1701 8.34219 66.0167 8.92036C65.8633 9.49853 65.7866 10.059 65.7866 10.6018C65.7866 11.2035 65.9164 11.6814 66.176 12.0354C66.4355 12.3894 66.8839 12.5664 67.5211 12.5664Z" fill="currentColor"/>
<path d="M74.8253 13.7345H73.1793L75.3032 4.88496C75.8459 4.71977 76.43 4.58997 77.0554 4.49558C77.6926 4.38938 78.2589 4.33628 78.7545 4.33628C79.2855 4.33628 79.7398 4.41298 80.1173 4.56637C80.5067 4.70796 80.8194 4.90856 81.0554 5.16814C81.2914 5.41593 81.4625 5.72271 81.5687 6.0885C81.6867 6.44248 81.7457 6.83186 81.7457 7.25664C81.7457 7.52803 81.7221 7.81711 81.6749 8.1239C81.6277 8.41888 81.5687 8.71977 81.4979 9.02655L80.3651 13.7345H78.7191L79.7634 9.38053C79.8459 9.05015 79.9226 8.71387 79.9934 8.37168C80.076 8.0295 80.1173 7.70502 80.1173 7.39823C80.1173 6.92626 79.9875 6.53687 79.728 6.23009C79.4684 5.91151 78.9846 5.75221 78.2766 5.75221C77.9816 5.75221 77.6926 5.76991 77.4094 5.80531C77.1262 5.84071 76.8902 5.88791 76.7014 5.9469L74.8253 13.7345Z" fill="currentColor"/>
<path d="M84.2197 13.7345H82.5736L84.6975 4.88496C85.2403 4.71977 85.8244 4.58997 86.4498 4.49558C87.0869 4.38938 87.6533 4.33628 88.1489 4.33628C88.6798 4.33628 89.1341 4.41298 89.5117 4.56637C89.9011 4.70796 90.2138 4.90856 90.4498 5.16814C90.6857 5.41593 90.8568 5.72271 90.963 6.0885C91.081 6.44248 91.14 6.83186 91.14 7.25664C91.14 7.52803 91.1164 7.81711 91.0692 8.1239C91.022 8.41888 90.963 8.71977 90.8922 9.02655L89.7595 13.7345H88.1135L89.1577 9.38053C89.2403 9.05015 89.317 8.71387 89.3878 8.37168C89.4704 8.0295 89.5117 7.70502 89.5117 7.39823C89.5117 6.92626 89.3819 6.53687 89.1223 6.23009C88.8627 5.91151 88.379 5.75221 87.671 5.75221C87.376 5.75221 87.0869 5.76991 86.8037 5.80531C86.5206 5.84071 86.2846 5.88791 86.0958 5.9469L84.2197 13.7345Z" fill="currentColor"/>
<path d="M94.2335 8.90266C94.9179 8.87906 95.5432 8.83776 96.1096 8.77876C96.676 8.70797 97.1656 8.59587 97.5786 8.44248C97.9916 8.27729 98.3102 8.059 98.5344 7.78761C98.7704 7.51623 98.8884 7.16224 98.8884 6.72567C98.8884 6.61947 98.8648 6.50738 98.8176 6.38938C98.7822 6.27139 98.7114 6.16519 98.6052 6.0708C98.5108 5.9646 98.3751 5.88201 98.1981 5.82301C98.0211 5.75221 97.8028 5.71682 97.5432 5.71682C97.1302 5.71682 96.7409 5.80531 96.3751 5.9823C96.0211 6.15929 95.7025 6.39528 95.4193 6.69027C95.1361 6.97345 94.8943 7.30974 94.6937 7.69912C94.4931 8.0767 94.3397 8.47788 94.2335 8.90266ZM95.9149 13.9646C95.3131 13.9646 94.794 13.882 94.3574 13.7168C93.9208 13.5398 93.555 13.3038 93.26 13.0089C92.9651 12.7021 92.7468 12.3481 92.6052 11.9469C92.4636 11.5457 92.3928 11.1209 92.3928 10.6726C92.3928 9.84661 92.5167 9.05015 92.7645 8.28319C93.0123 7.51623 93.3662 6.83776 93.8264 6.24779C94.2866 5.65782 94.8471 5.19174 95.5078 4.84956C96.1686 4.49558 96.9179 4.31858 97.7556 4.31858C98.2394 4.31858 98.6524 4.38348 98.9946 4.51328C99.3485 4.63127 99.6317 4.79646 99.8441 5.00885C100.068 5.22124 100.234 5.46903 100.34 5.75221C100.446 6.0236 100.499 6.30679 100.499 6.60177C100.499 7.15634 100.399 7.62832 100.198 8.0177C99.9975 8.39528 99.732 8.71387 99.4016 8.97345C99.0713 9.23304 98.6819 9.43363 98.2335 9.57522C97.7969 9.71682 97.3367 9.82891 96.853 9.91151C96.381 9.9941 95.8972 10.0531 95.4016 10.0885C94.9179 10.1121 94.4577 10.1357 94.0211 10.1593C94.0093 10.2537 94.0034 10.3304 94.0034 10.3894C94.0034 10.4484 94.0034 10.4956 94.0034 10.531C94.0034 10.8024 94.0329 11.0619 94.0919 11.3097C94.1627 11.5457 94.2866 11.7581 94.4636 11.9469C94.6406 12.1239 94.8825 12.2655 95.1892 12.3717C95.5078 12.4779 95.9208 12.531 96.4282 12.531C96.6524 12.531 96.8825 12.5133 97.1185 12.4779C97.3662 12.4307 97.5963 12.3776 97.8087 12.3186C98.0329 12.2478 98.2276 12.1829 98.3928 12.1239C98.5698 12.0531 98.6937 11.9882 98.7645 11.9292L98.9061 13.3274C98.6701 13.4572 98.2866 13.5929 97.7556 13.7345C97.2364 13.8879 96.6229 13.9646 95.9149 13.9646Z" fill="currentColor"/>
<path d="M101.199 10.4425C101.199 9.64012 101.317 8.86726 101.553 8.1239C101.801 7.38053 102.161 6.72567 102.633 6.15929C103.105 5.59292 103.683 5.14454 104.368 4.81416C105.052 4.47198 105.837 4.30089 106.722 4.30089C107.111 4.30089 107.483 4.33038 107.837 4.38938C108.191 4.43658 108.527 4.53687 108.846 4.69027L108.226 6.0708C108.037 5.9646 107.813 5.88201 107.553 5.82301C107.306 5.76401 106.981 5.73451 106.58 5.73451C106.002 5.73451 105.483 5.86431 105.022 6.1239C104.562 6.37168 104.167 6.70797 103.837 7.13274C103.518 7.54572 103.27 8.0295 103.093 8.58407C102.928 9.12685 102.846 9.69322 102.846 10.2832C102.846 10.59 102.875 10.8791 102.934 11.1504C103.005 11.4218 103.123 11.6637 103.288 11.8761C103.453 12.0767 103.671 12.236 103.943 12.354C104.226 12.472 104.58 12.531 105.005 12.531C105.217 12.531 105.441 12.5133 105.677 12.4779C105.913 12.4307 106.132 12.3776 106.332 12.3186C106.533 12.2596 106.71 12.2006 106.863 12.1416C107.028 12.0708 107.146 12.0059 107.217 11.9469L107.359 13.3451C107.135 13.4867 106.787 13.6224 106.315 13.7522C105.843 13.8938 105.306 13.9646 104.704 13.9646C104.138 13.9646 103.636 13.882 103.199 13.7168C102.763 13.5398 102.397 13.2979 102.102 12.9912C101.807 12.6726 101.583 12.3009 101.43 11.8761C101.276 11.4395 101.199 10.9617 101.199 10.4425Z" fill="currentColor"/>
<path d="M111.557 13.9823C110.672 13.9823 110.023 13.7876 109.61 13.3982C109.197 13.0089 108.99 12.4425 108.99 11.6991C108.99 11.2153 109.073 10.5959 109.238 9.84071L111.132 1.9646L112.849 1.68142L112.158 4.53097H115.291L114.955 5.91151H111.822L110.849 9.9823C110.707 10.5369 110.636 11.0207 110.636 11.4336C110.636 11.823 110.742 12.1062 110.955 12.2832C111.167 12.4484 111.521 12.531 112.017 12.531C112.359 12.531 112.695 12.4779 113.026 12.3717C113.356 12.2537 113.61 12.1475 113.787 12.0531L113.91 13.4513C113.734 13.5575 113.433 13.6696 113.008 13.7876C112.583 13.9174 112.099 13.9823 111.557 13.9823Z" fill="currentColor"/>
</svg>

`)),$l,Gh=_e($l||($l=(t=>t)`<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4996 8.6934C13.5646 12.4434 9.76602 14.7256 6.01514 13.7905C2.26579 12.8555 -0.0166852 9.05718 0.918793 5.30739C1.8534 1.55695 5.65197 -0.725474 9.40176 0.209458C13.1524 1.14439 15.4347 4.94318 14.4996 8.6934Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.52902 4.06707C10.5141 4.44605 11.2102 4.99957 11.0511 5.97269C10.9624 6.52101 10.7122 6.8585 10.3665 7.04603C10.236 7.1168 10.2072 7.33609 10.3231 7.42878C10.8196 7.82585 11.0179 8.38842 10.7056 9.24266C10.2505 10.4885 9.22882 10.6202 7.87222 10.3663C7.78904 10.3508 7.70726 10.4014 7.68566 10.4832L7.52414 11.0824C7.46306 11.3138 7.22603 11.4518 6.99467 11.3908C6.76319 11.3298 6.62506 11.0926 6.68618 10.8612L6.84101 10.2875C6.86324 10.2033 6.81295 10.1171 6.72884 10.0946C6.61038 10.0629 6.49041 10.0301 6.36863 9.99598C6.28341 9.9721 6.19494 10.0224 6.17237 10.108L6.01688 10.6851C5.95588 10.9163 5.71897 11.0543 5.48775 10.9932C5.25664 10.9322 5.11869 10.6955 5.17961 10.4643L5.33952 9.86967C5.36188 9.78479 5.31155 9.69775 5.22691 9.67449C5.1995 9.66696 5.17203 9.6594 5.1445 9.65182L5.1436 9.65157C5.02458 9.6188 4.90431 9.58569 4.78256 9.55341L4.50468 9.47686C4.19755 9.39585 4.03663 9.05848 4.16696 8.76881C4.27134 8.53681 4.52958 8.41694 4.77541 8.48242C4.77988 8.48361 4.7843 8.48479 4.78868 8.48595C4.84757 8.50157 4.84473 8.49023 4.90409 8.4765C5.02494 8.44855 5.08888 8.34885 5.11971 8.2752L5.69957 6.078L5.70108 6.07204L6.11095 4.51802C6.11349 4.5084 6.11518 4.49858 6.11565 4.48865C6.12282 4.33833 6.18991 4.18684 5.97081 4.08327C5.92336 4.06085 5.87669 4.03952 5.82597 4.02603C5.81758 4.0238 5.80892 4.02151 5.80003 4.01918C5.55193 3.954 5.40061 3.7018 5.46597 3.45375C5.53051 3.20887 5.78141 3.06273 6.02626 3.12741L6.51367 3.26409C6.63858 3.29693 6.76622 3.3287 6.89587 3.36037C6.97969 3.38084 7.06441 3.3303 7.08644 3.24687L7.22919 2.722C7.29025 2.49074 7.52721 2.35275 7.75848 2.41376C7.9898 2.47479 8.12784 2.71179 8.0668 2.94311L7.93196 3.43844C7.90985 3.52223 7.96087 3.6078 8.04506 3.62833C8.16859 3.65845 8.29203 3.6889 8.41417 3.72009C8.4966 3.74114 8.58086 3.69207 8.60256 3.60981L8.73588 3.11979C8.79692 2.88839 9.03398 2.75027 9.26539 2.81129C9.49683 2.87232 9.63496 3.10941 9.57392 3.34084L9.42905 3.87456C9.40794 3.95461 9.45175 4.03735 9.52902 4.06707ZM7.41985 5.36848L7.53445 4.93355C7.58781 4.73103 7.79524 4.61012 7.99776 4.66348C8.20028 4.71684 8.32119 4.92427 8.26783 5.12679L8.15323 5.56172L8.58812 5.67631C8.79064 5.72967 8.91155 5.9371 8.85819 6.13962C8.80483 6.34214 8.5974 6.46305 8.39488 6.40969L7.95999 6.2951L7.84539 6.73004C7.79203 6.93256 7.5846 7.05348 7.38208 7.00012C7.17956 6.94675 7.05865 6.73932 7.11201 6.53681L7.22661 6.10186L6.79163 5.98725C6.58911 5.93389 6.4682 5.72646 6.52156 5.52394C6.57492 5.32142 6.78235 5.20051 6.98487 5.25387L7.41985 5.36848ZM8.44291 7.37958L8.32831 7.81451L7.89332 7.6999C7.6908 7.64654 7.48337 7.76745 7.43001 7.96997C7.37665 8.17249 7.49757 8.37992 7.70008 8.43328L8.13507 8.54789L8.02046 8.98284C7.9671 9.18536 8.08802 9.39279 8.29054 9.44615C8.49305 9.49951 8.70048 9.37859 8.75385 9.17608L8.86845 8.74113L9.30334 8.85572C9.50585 8.90908 9.71328 8.78817 9.76665 8.58565C9.82001 8.38313 9.69909 8.1757 9.49658 8.12234L9.06169 8.00775L9.17629 7.57282C9.22965 7.3703 9.10873 7.16287 8.90621 7.10951C8.7037 7.05615 8.49627 7.17707 8.44291 7.37958Z" fill="white"/>
</svg>`)),Hl,xi,jl,Fl,Vl,Wl,Gl,Gr=t=>t,Ai=(xi=class extends(Hl=Se()(he)){render(){return te(jl||(jl=Gr`<div class="w-full flex-col justify-center items-center">
      <bc-modal-header class="flex w-full" show-help ?closable=${0}>
        <div class="${0} mr-[2px]">
          ${0}
        </div>
        <div class="${0}">${0}</div>
      </bc-modal-header>
      <div class="flex w-full pt-8">
        ${0}
      </div>
      ${0}
    </div>`),this.closable,Te,Gh,as,Wh,te(this._connecting?Fl||(Fl=Gr`<bci-connecting class="flex w-full"></bci-connecting>`):Vl||(Vl=Gr` <bc-router-outlet class="flex w-full"></bc-router-outlet>`)),this._error?te(Wl||(Wl=Gr`<p class="mt-4 text-center font-sans text-red-500">
            ${0}
          </p>`),this._error):null)}},xi.styles=[...Hl.styles,Xi(Gl||(Gl=Gr`
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `))],xi);re([Me({type:Boolean})],Ai.prototype,"closable",void 0),Ai=re([ge("bc-connect")],Ai);var Zl,Oi,Kl,zl,ql,Yl,Kn=t=>t,vr=(Oi=class extends(Zl=Se()(he)){constructor(){super(),this._showConnect=!1,ne.subscribe((t,e)=>{t.connected!==e.connected&&t.connected&&(this._showConnect=!1)})}render(){return this._showConnect&&!this.paid?te(Kl||(Kl=Kn` <bc-connect></bc-connect>`)):te(zl||(zl=Kn`<div class="w-full flex-col justify-center items-center">
          <bc-modal-header class="flex w-full" ?closable=${0}>
            <p
              class="font-sans font-medium ${0}"
            >
              Payment Request
            </p>
          </bc-modal-header>
          <div class="flex flex-col justify-center items-center w-full pt-8">
            <bc-send-payment
              .invoice=${0}
              ?paid=${0}
              @onclickconnectwallet=${0}
            ></bc-send-payment>
          </div>
          ${0}
        </div>`),this.closable,De,this.invoice,this.paid,this._onClickConnectWallet,this._error?te(ql||(ql=Kn`<p class="mt-4 text-center font-sans text-red-500">
                ${0}
              </p>`),this._error):null)}_onClickConnectWallet(){this._showConnect=!0}},Oi.styles=[...Zl.styles,Xi(Yl||(Yl=Kn`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    `))],Oi);re([Me({type:Boolean})],vr.prototype,"closable",void 0),re([Me({type:String})],vr.prototype,"invoice",void 0),re([Me({type:Boolean})],vr.prototype,"paid",void 0),re([Ee()],vr.prototype,"_showConnect",void 0),vr=re([ge("bc-payment")],vr);var M4={NostrWebLNProvider:Mr.NostrWebLNProvider,LNCWebLNProvider:Yn,LnbitsWebLNProvider:Jn};export{l1 as AlbyNWCConnector,Fr as Balance,Fn as Button,Ai as ConnectFlow,O1 as ConnectorList,Wn as CurrencySwitcher,a1 as ExtensionConnector,h1 as GenericNWCConnector,y1 as LNCConnector,Bl as Modal,g1 as MutinyNWCConnector,ir as PayButton,sr as SendPayment,vr as SendPaymentFlow,f1 as UmbrelNWCConnector,M4 as WebLNProviders,v0 as closeModal,U4 as disconnect,E0 as genericConnectorTitle,D4 as getConnectorConfig,P4 as init,L4 as isConnected,w0 as launchModal,ch as launchPaymentModal,zi as mutinyNWCConnectorTitle,ah as onConnected,T4 as onConnecting,R4 as onDisconnected,b0 as onModalClosed,I4 as onModalOpened,k4 as requestProvider};
/*! Bundled license information:

@lightninglabs/lnc-web/dist/index.js:
  (*! For license information please see index.js.LICENSE.txt *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ciphers/esm/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=bitcoin-connect.bundle.mjs.map