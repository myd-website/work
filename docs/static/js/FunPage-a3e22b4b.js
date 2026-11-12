import{d as ie,r as h,c as G,x as ve,a as ke,m,b as $,e,t as f,F as z,j as H,q as O,n as ae,i as T,g as D,w as te,a9 as se,B as oe,C as Me,D as ge,h as J,I as ce,_ as re,f as F,s as dn,aa as cn,ab as $e,ac as nn,E as wn,u as pn,p as Ge,z as Ln,ad as Cn,G as Mn,ae as pe,H as Te,K as Tn,L as an}from"./index-b37438cb.js";import{r as me,s as we}from"./random-97a3ed34.js";const xn={class:"game-card random-game","aria-labelledby":"random-title"},In={class:"game-heading"},Sn={id:"random-title"},An={class:"game-description"},En={class:"game-segments","aria-label":"随机工具"},Pn=["disabled","aria-pressed","onClick"],On={class:"dice-count","aria-label":"骰子数量"},Bn=["disabled","aria-pressed","onClick"],Nn=["disabled"],Dn=["disabled"],Rn={class:"number-stage"},Gn={class:"number-fields"},Kn={key:0,class:"game-error",role:"alert"},Un={class:"game-status random-status","aria-live":"polite","aria-atomic":"true"},qn=ie({__name:"RandomTools",props:{active:{type:Boolean}},setup(a){const s=a,n=h("dice"),l=[{id:"dice",name:"掷骰子"},{id:"coin",name:"抛硬币"},{id:"number",name:"随机数"}],t=h(1),u=h([1]),o=h([{x:0,y:0}]),i=h(!1),v=h(""),p=h(0),b=h("正面"),d=h(1),c=h(100),r=h(),L=h(""),y=[[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]],A=["front","top","right","left","bottom","back"],X=G(()=>n.value==="dice"?"掷一点小运气":n.value==="coin"?"正反之间，听听心意":"让数字带来一点惊喜"),K=G(()=>n.value==="dice"?"一颗、两颗、三颗，每次都是新的可能。":n.value==="coin"?"拿不定主意时，让硬币轻轻翻个面。":"设定一个范围，抽取属于这一刻的数字。");let M,P="";function R(){i.value=!1,v.value=P,P=""}function w(E){i.value=!0,v.value="",P=E,M=setTimeout(R,window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:920)}function g(E){i.value||t.value===E||(t.value=E,u.value=Array(E).fill(1),o.value=Array.from({length:E},()=>({x:0,y:0})),v.value="")}function S(){if(i.value)return;const E=[[0,0],[-90,0],[0,-90],[0,90],[90,0],[0,180]];u.value=Array.from({length:t.value},()=>me(6)+1),o.value=u.value.map((Y,B)=>{const _=o.value[B],[W,x]=E[Y-1];return{x:_.x+720+(W-_.x%360+360)%360,y:_.y+720+(x-_.y%360+360)%360}}),w(u.value.length===1?`掷出了 ${u.value[0]} 点`:`${u.value.join(" + ")} = ${u.value.reduce((Y,B)=>Y+B,0)} 点`)}function q(){if(i.value)return;const E=me(2);b.value=E===0?"正面":"反面",p.value+=1800+(E*180-p.value%360+360)%360,w(`这次是${b.value}`)}function C(){L.value="";const E=Number(d.value),Y=Number(c.value);if(String(d.value).trim()===""||String(c.value).trim()===""||!Number.isInteger(E)||!Number.isInteger(Y)||E<0||Y>1e6||Y<E){L.value="请输入 0～1000000 范围内的整数，且上限不能小于下限。";return}r.value=E+me(Y-E+1),v.value=`抽到了 ${r.value}`}return ve([d,c],()=>{r.value=void 0,v.value=L.value=""}),ve(n,()=>{v.value=L.value=""}),ve(()=>s.active,E=>{!E&&i.value&&(clearTimeout(M),R())}),ke(()=>clearTimeout(M)),(E,Y)=>{const B=ce;return m(),$("section",xn,[e("header",In,[e("div",null,[Y[2]||(Y[2]=e("p",{class:"game-eyebrow"},"A SMALL DOSE OF SERENDIPITY",-1)),e("h2",Sn,f(X.value),1),e("p",An,f(K.value),1)]),Y[3]||(Y[3]=e("span",{class:"game-stamp"},"✦",-1))]),e("div",En,[(m(),$(z,null,H(l,_=>e("button",{key:_.id,type:"button",disabled:i.value,"aria-pressed":n.value===_.id,class:O({selected:n.value===_.id}),onClick:W=>n.value=_.id},f(_.name),11,Pn)),64))]),n.value==="dice"?(m(),$(z,{key:0},[(m(),$("div",{key:t.value,class:O(["dice-stage",{rolling:i.value}]),"aria-hidden":"true"},[(m(!0),$(z,null,H(u.value.length,_=>(m(),$("div",{key:_,class:"dice-space"},[e("div",{class:"dice-cube",style:ae({transform:`rotateX(-18deg) rotateY(-25deg) rotateX(${o.value[_-1].x}deg) rotateY(${o.value[_-1].y}deg)`})},[(m(),$(z,null,H(A,(W,x)=>e("div",{key:W,class:O(["dice-face",`face-${W}`,{"single-pip":x===0}])},[(m(!0),$(z,null,H(y[x],k=>(m(),$("i",{key:k,style:ae({gridRow:Math.floor(k/3)+1,gridColumn:k%3+1})},null,4))),128))],2)),64))],4)]))),128))],2)),e("div",On,[Y[4]||(Y[4]=e("span",null,"几颗骰子？",-1)),(m(),$(z,null,H([1,2,3],_=>e("button",{key:_,type:"button",disabled:i.value,class:O({selected:t.value===_}),"aria-pressed":t.value===_,onClick:W=>g(_)},f(_)+" 颗 ",11,Bn)),64))]),e("button",{type:"button",class:"game-primary roll-button",disabled:i.value,onClick:S},[T(B,{name:"replay"}),D(f(i.value?"好运翻滚中…":"掷一次骰子"),1)],8,Nn)],64)):n.value==="coin"?(m(),$(z,{key:1},[e("div",{class:O(["coin-stage",{flipping:i.value}]),"aria-hidden":"true"},[e("div",{class:"coin",style:ae({transform:`rotateY(${p.value}deg)`})},Y[5]||(Y[5]=[e("span",{class:"coin-face coin-heads"},[e("b",null,"✦"),e("small",null,"正面")],-1),e("span",{class:"coin-face coin-tails"},[e("b",null,"☾"),e("small",null,"反面")],-1)]),4)],2),e("button",{type:"button",class:"game-primary roll-button",disabled:i.value,onClick:q},f(i.value?"让硬币飞一会…":"抛一枚硬币"),9,Dn)],64)):(m(),$(z,{key:2},[e("div",Rn,[T(se,{name:"number-pop",mode:"out-in"},{default:te(()=>[(m(),$("strong",{key:r.value===void 0?"empty":v.value+r.value},f(r.value??"—"),1))]),_:1}),Y[6]||(Y[6]=e("small",null,"给随机留一个位置",-1))]),e("form",{class:"number-form",onSubmit:ge(C,["prevent"])},[e("div",Gn,[e("label",null,[Y[7]||(Y[7]=D("最小值")),oe(e("input",{"onUpdate:modelValue":Y[0]||(Y[0]=_=>d.value=_),type:"number",min:"0",max:"1000000",step:"1",required:""},null,512),[[Me,d.value]])]),Y[9]||(Y[9]=e("span",{"aria-hidden":"true"},"—",-1)),e("label",null,[Y[8]||(Y[8]=D("最大值")),oe(e("input",{"onUpdate:modelValue":Y[1]||(Y[1]=_=>c.value=_),type:"number",min:"0",max:"1000000",step:"1",required:""},null,512),[[Me,c.value]])])]),Y[10]||(Y[10]=e("button",{type:"submit",class:"game-primary roll-button"}," 抽取一个数字 ",-1))],32),L.value?(m(),$("p",Kn,f(L.value),1)):J("",!0)],64)),e("p",Un,f(i.value?"再等一小下，惊喜马上揭晓。":v.value||"准备好了吗？把选择交给一点运气。"),1),Y[11]||(Y[11]=e("p",{class:"game-footnote random-note"},"每次独立随机 · 仅供日常娱乐",-1))])}}});const Fn=re(qn,[["__scopeId","data-v-e80217ab"]]),Vn=a=>Math.sqrt(a.length),zn=(a=3)=>Array.from({length:a*a},(s,n)=>(n+1)%(a*a)),mn=a=>a.length>0&&a.every((s,n)=>s===(n+1)%a.length);function Pe(a,s=3){const n=s*s;return[a-s,a+s,a-1,a+1].filter(l=>l>=0&&l<n&&Math.abs(Math.floor(l/s)-Math.floor(a/s))+Math.abs(l%s-a%s)===1)}function Ke(a,s){const n=a.indexOf(0);if(!Pe(n,Vn(a)).includes(s))return a;const l=[...a];return[l[n],l[s]]=[l[s],l[n]],l}function ln(a=me,s=3){let n=zn(s),l=-1;for(let t=0;t<s*s*20;t++){const u=n.indexOf(0),o=Pe(u,s).filter(i=>i!==l);n=Ke(n,o[a(o.length)]),l=u}return mn(n)&&(n=Ke(n,Pe(n.indexOf(0),s)[0])),n}const Xn={class:"cube-container","aria-hidden":"true"},Yn={class:"cube-scene"},jn={class:"cube-view"},Hn=ie({__name:"CelebrationCube",setup(a){const s={x:0,y:1,z:2},n=[{axis:"x",layer:1},{axis:"y",layer:-1},{axis:"z",layer:1}],l=[{name:"front",axis:2,side:1,color:"#92ab88"},{name:"back",axis:2,side:-1,color:"#95b6b4"},{name:"right",axis:0,side:1,color:"#d7aa91"},{name:"left",axis:0,side:-1,color:"#b6a5c8"},{name:"top",axis:1,side:-1,color:"#e8cf8c"},{name:"bottom",axis:1,side:1,color:"#f1e8cf"}];function t([o,i,v],p){return p==="x"?[o,-v,i]:p==="y"?[v,i,-o]:[-i,o,v]}const u=[-1,0,1].flatMap(o=>[-1,0,1].flatMap(i=>[-1,0,1].flatMap(v=>{if(o===0&&i===0&&v===0)return[];const p=[o,i,v];let b=[...p],d=[[1,0,0],[0,1,0],[0,0,1]];const c=n.map(({axis:L,layer:y})=>{const A=b[s[L]]===y;return A&&(b=t(b,L),d=d.map(X=>t(X,L))),A}),r=[...d[0],0,...d[1],0,...d[2],0,0,0,0,1];return[{id:p.join(","),affected:c,transform:`translate3d(${b.map(L=>`${L*25}px`).join(",")}) matrix3d(${r.join(",")})`,colors:l.map(L=>p[L.axis]===L.side?L.color:"#6a7763")}]})));return(o,i)=>(m(),$("div",Xn,[e("div",Yn,[i[0]||(i[0]=e("div",{class:"cube-shadow"},null,-1)),e("div",jn,[(m(!0),$(z,null,H(F(u),v=>(m(),$("div",{key:v.id,class:"cube-origin"},[e("div",{class:O(["cube-pivot",{"turn-x":v.affected[0]}])},[e("div",{class:O(["cube-pivot",{"turn-y":v.affected[1]}])},[e("div",{class:O(["cube-pivot",{"turn-z":v.affected[2]}])},[e("div",{class:"cube-piece",style:ae({transform:v.transform})},[(m(),$(z,null,H(l,(p,b)=>e("span",{key:p.name,class:O(["cube-face",`face-${p.name}`]),style:ae({backgroundColor:v.colors[b]})},null,6)),64))],4)],2)],2)],2)]))),128))]),i[1]||(i[1]=e("span",{class:"cube-check"},"✓",-1))])]))}});const Wn=re(Hn,[["__scopeId","data-v-67550ec8"]]),Jn=""+new URL("../webp/trophy-955179c0.webp",import.meta.url).href,Qn=""+new URL("../png/trophy-5f3efc48.png",import.meta.url).href,Zn={key:0,class:"game-celebration","aria-hidden":"true"},ea={class:"celebration-card"},na={key:1},aa=["srcset"],la=["src"],ta={key:2,class:"celebration-fallback"},sa=ie({__name:"GameCelebration",props:{active:{type:Boolean},variant:{default:"cube"}},setup(a){const s=a,n=h(!1),l=h(!1);let t;function u(){t!==void 0&&clearTimeout(t),t=void 0}return ve(()=>s.active,o=>{u(),n.value=o,l.value=!1,o&&(t=setTimeout(()=>{n.value=!1,t=void 0},3600))},{immediate:!0,flush:"sync"}),ke(u),(o,i)=>n.value?(m(),$("div",Zn,[e("div",ea,[i[1]||(i[1]=e("span",{class:"celebration-spark spark-one"},"✦",-1)),i[2]||(i[2]=e("span",{class:"celebration-spark spark-two"},"✧",-1)),i[3]||(i[3]=e("span",{class:"celebration-spark spark-three"},"✦",-1)),i[4]||(i[4]=e("span",{class:"celebration-spark spark-four"},"✧",-1)),e("div",{class:O(["celebration-art",{"celebration-art--cube":o.variant==="cube"}])},[o.variant==="cube"?(m(),dn(Wn,{key:0})):l.value?(m(),$("span",ta,"✦")):(m(),$("picture",na,[e("source",{media:"(prefers-reduced-motion: reduce)",srcset:F(Qn)},null,8,aa),e("img",{src:F(Jn),alt:"",width:"128",height:"128",draggable:"false",onError:i[0]||(i[0]=v=>l.value=!0)},null,40,la)]))],2),i[5]||(i[5]=e("h3",null,"你太棒了",-1))])])):J("",!0)}});const de=re(sa,[["__scopeId","data-v-17d7ed02"]]),oa={class:"game-card puzzle-game","aria-labelledby":"puzzle-title"},ua={class:"game-heading"},ia={class:"game-stamp"},ra={class:"game-segments",role:"group","aria-label":"华容道规格"},va=["aria-pressed","onClick"],da={class:"game-stats"},ca={class:"stat-small"},pa=["disabled","aria-label","onClick"],ma={key:0,"aria-hidden":"true"},$a={class:"game-actions"},fa=ie({__name:"SlidingPuzzle",props:{active:{type:Boolean}},setup(a){const s=a,n=[3,4],l=h(3),t=G(()=>l.value*l.value-1),u=h(ln(void 0,l.value)),o=h(0),i=h(0),v=G(()=>mn(u.value)),p=G(()=>Pe(u.value.indexOf(0),l.value)),b=G(()=>`${String(Math.floor(i.value/6e4)).padStart(2,"0")}:${String(Math.floor(i.value/1e3)%60).padStart(2,"0")}`);let d,c=0,r=0;function L(){d!==void 0&&(clearInterval(d),d=void 0,c+=Date.now()-r,i.value=c)}ve(()=>s.active&&o.value>0&&!v.value,M=>{if(!M)return L();r=Date.now(),d=setInterval(()=>{i.value=c+Date.now()-r},250)},{flush:"sync"});function y(M){if(!s.active||v.value)return;const P=Ke(u.value,M);P!==u.value&&(u.value=P,o.value++)}function A(){L(),o.value=0,c=i.value=0,u.value=ln(void 0,l.value)}function X(M){l.value!==M&&(l.value=M,A())}function K(M){const P=u.value.indexOf(0),R=l.value,w={ArrowUp:P-R,ArrowDown:P+R,ArrowLeft:P-1,ArrowRight:P+1}[M.key];w===void 0||M.isComposing||M.altKey||M.ctrlKey||M.metaKey||(M.preventDefault(),y(w))}return ke(L),(M,P)=>{const R=ce;return m(),$("section",oa,[e("header",ua,[P[0]||(P[0]=e("div",null,[e("p",{class:"game-eyebrow"},"SLIDE INTO PLACE"),e("h2",{id:"puzzle-title"},"数字华容道"),e("p",{class:"game-description"},"小小方格，让每一个数字找到自己的位置。")],-1)),e("span",ia,"01—"+f(String(t.value).padStart(2,"0")),1)]),e("div",ra,[(m(),$(z,null,H(n,w=>e("button",{key:w,type:"button",class:O({selected:l.value===w}),"aria-pressed":l.value===w,onClick:g=>X(w)},f(w)+" × "+f(w)+" · "+f(w*w)+" 格 ",11,va)),64))]),e("div",da,[e("div",null,[P[2]||(P[2]=e("small",null,"移动步数",-1)),e("strong",null,[D(f(o.value),1),P[1]||(P[1]=e("span",null,"步",-1))])]),e("div",null,[P[3]||(P[3]=e("small",null,"本局用时",-1)),e("strong",null,f(b.value),1)]),e("div",null,[P[4]||(P[4]=e("small",null,"目标顺序",-1)),e("strong",ca,"1 → "+f(t.value),1)])]),(m(),dn(cn,{key:l.value,name:"puzzle-tile",tag:"div",class:O(["puzzle-board",`size-${l.value}`]),style:ae({gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`}),tabindex:"0","aria-label":`${l.value} × ${l.value} 数字华容道，点击空格旁的数字移动，方向键移动空格`,onKeydown:K},{default:te(()=>[(m(!0),$(z,null,H(u.value,(w,g)=>(m(),$("button",{key:w,type:"button",class:O({"puzzle-empty":w===0,"can-move":p.value.includes(g),"in-place":w===g+1}),disabled:!w||v.value||!p.value.includes(g),"aria-label":w?`数字 ${w}，第 ${Math.floor(g/l.value)+1} 行第 ${g%l.value+1} 列`:"空格",onClick:S=>y(g)},[D(f(w||""),1),w?(m(),$("span",ma,"·")):J("",!0)],10,pa))),128))]),_:1},8,["class","style","aria-label"])),e("p",{class:O(["game-status",{success:v.value}]),"aria-live":"polite"},f(v.value?`拼好了！你用了 ${o.value} 步，把小世界归了位。`:"点击空格旁的数字移动，也可以用方向键移动空格。"),3),e("div",$a,[e("button",{type:"button",class:"game-primary",onClick:A},[T(R,{name:"replay"}),P[5]||(P[5]=D("换一盘"))]),P[6]||(P[6]=e("span",{class:"game-footnote"},"切换格数会重新开局；切换游戏会暂停计时，保留本局进度",-1))]),T(de,{active:v.value&&M.active},null,8,["active"])])}}});const ga=re(fa,[["__scopeId","data-v-66859819"]]);function Ne(a,s,n=me){const l=Array.from({length:16},(t,u)=>u).filter(t=>!a.some(u=>u.index===t));return l.length?[...a,{id:s,index:l[n(l.length)],value:n(10)===0?4:2}]:a}function ba(a,s){const n=[],l=[],t=[];let u=0;for(let i=0;i<4;i++){const v=Array.from({length:4},(d,c)=>s==="left"?i*4+c:s==="right"?i*4+3-c:s==="up"?c*4+i:(3-c)*4+i),p=v.map(d=>a.find(c=>c.index===d)).filter(d=>!!d);let b=0;for(let d=0;d<p.length;d++){const c=p[d],r=p[d+1],L=v[b++];n.push({...c,index:L}),r&&c.value===r.value?(n.push({...r,index:L}),l.push({...c,index:L,value:c.value*2}),u+=c.value*2,t.push(c.id),d++):l.push({...c,index:L})}}const o=n.some(i=>a.find(v=>v.id===i.id).index!==i.index);return{tiles:l,motions:n,score:u,moved:o,mergedIds:t}}function De(a){return a.length<16?!0:a.some(s=>a.some(n=>n.value===s.value&&(s.index%4<3&&n.index===s.index+1||n.index===s.index+4)))}const ha=["aria-label"],ya=["data-direction","aria-label","disabled","onClick"],_a={class:"direction-label","aria-hidden":"true"},ka=ie({__name:"GameDirectionPad",props:{label:{},disabled:{type:Boolean}},emits:["move"],setup(a,{emit:s}){const n=a,l=s,t=[{id:"up",text:"向上",label:"向上移动"},{id:"left",text:"向左",label:"向左移动"},{id:"down",text:"向下",label:"向下移动"},{id:"right",text:"向右",label:"向右移动"}];function u(o){n.disabled||l("move",o)}return(o,i)=>(m(),$("div",{class:"direction-pad",role:"group","aria-label":o.label},[(m(),$(z,null,H(t,v=>e("button",{key:v.id,type:"button",class:"direction-key","data-direction":v.id,"aria-label":v.label,disabled:o.disabled,onClick:p=>u(v.id)},[i[0]||(i[0]=e("svg",{class:"direction-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",focusable:"false"},[e("path",{d:"M12 19V5m-6 6 6-6 6 6"})],-1)),e("span",_a,f(v.text),1)],8,ya)),64))],8,ha))}});const $n=re(ka,[["__scopeId","data-v-d4128e12"]]),wa={class:"game-card merge-game","aria-labelledby":"merge-title"},La={class:"game-stats"},Ca={class:"merge-cells","aria-hidden":"true"},Ma=["aria-label"],Ta={key:0,class:"merge-overlay"},xa={id:"merge-status",class:"game-status","aria-live":"polite"},Ia={class:"game-actions"},Sa=ie({__name:"Game2048",props:{active:{type:Boolean}},setup(a){const s=a;let n=1;const l=h([]),t=h(0),u=h(0),o=h(0),i=h(!1),v=h(!1),p=h("playing"),b=h([]),d=h(-1),c=G(()=>Math.max(0,...l.value.map(g=>g.value)));let r,L,y;function A(){clearTimeout(r),L=void 0,i.value=!1,y=void 0,l.value=Ne(Ne([],n++),n++),t.value=o.value=0,p.value="playing",v.value=!1,b.value=[],d.value=-1}A();function X(){if(!L)return;const g=L;L=void 0,d.value=n++,l.value=Ne(g.tiles,d.value),b.value=g.mergedIds,t.value+=g.score,u.value=Math.max(u.value,t.value),o.value++,i.value=!1,!v.value&&c.value>=2048?p.value="won":De(l.value)||(p.value="over")}function K(g){if(!s.active||i.value||p.value!=="playing")return;const S=ba(l.value,g);if(!S.moved){De(l.value)||(p.value="over");return}b.value=[],d.value=-1,i.value=!0,L=S,l.value=S.motions,r=setTimeout(X,window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:150)}function M(){p.value==="won"&&(v.value=!0,p.value=De(l.value)?"playing":"over")}function P(g){const S={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"}[g.key];!S||g.isComposing||g.altKey||g.ctrlKey||g.metaKey||(g.preventDefault(),K(S))}function R(g){!g.isPrimary||g.button!==0||(y={x:g.clientX,y:g.clientY,id:g.pointerId},g.currentTarget.setPointerCapture(g.pointerId))}function w(g){if(!y||y.id!==g.pointerId)return;const S=g.clientX-y.x,q=g.clientY-y.y;y=void 0,!(Math.max(Math.abs(S),Math.abs(q))<24)&&K(Math.abs(S)>Math.abs(q)?S>0?"right":"left":q>0?"down":"up")}return ve(()=>s.active,g=>{g||(y=void 0,clearTimeout(r),X())}),ke(()=>{clearTimeout(r),L=void 0}),(g,S)=>{const q=ce;return m(),$("section",wa,[S[14]||(S[14]=$e('<header class="game-heading" data-v-20a7af33><div data-v-20a7af33><p class="game-eyebrow" data-v-20a7af33>A LITTLE MORE, A LITTLE CLOSER</p><h2 id="merge-title" data-v-20a7af33>慢慢合成 2048</h2><p class="game-description" data-v-20a7af33>相同的数字碰个面，每一步都多一点可能。</p></div><span class="game-stamp" data-v-20a7af33>2ⁿ</span></header>',1)),e("div",La,[e("div",null,[S[8]||(S[8]=e("small",null,"本局得分",-1)),e("strong",null,f(t.value),1)]),e("div",null,[S[9]||(S[9]=e("small",null,"本次页面最高分",-1)),e("strong",null,f(u.value),1)]),e("div",null,[S[11]||(S[11]=e("small",null,"已移动",-1)),e("strong",null,[D(f(o.value),1),S[10]||(S[10]=e("span",null,"步",-1))])])]),e("div",{class:"merge-board",tabindex:"0",role:"group","aria-label":"2048 棋盘，可用方向键、WASD、滑动或下方按钮操作","aria-describedby":"merge-status",onKeydown:P,onPointerdown:R,onPointerup:w,onPointercancel:S[6]||(S[6]=C=>nn(y)?y.value=void 0:y=void 0),onLostpointercapture:S[7]||(S[7]=C=>nn(y)?y.value=void 0:y=void 0)},[e("div",Ca,[(m(),$(z,null,H(16,C=>e("span",{key:C})),64))]),(m(!0),$(z,null,H(l.value,C=>(m(),$("div",{key:C.id,class:"merge-tile",style:ae({"--x":C.index%4,"--y":Math.floor(C.index/4)}),"aria-label":`第 ${Math.floor(C.index/4)+1} 行第 ${C.index%4+1} 列，${C.value}`},[e("span",{class:O(["tile-value",`value-${Math.min(C.value,2048)}`,{"tile-merged":b.value.includes(C.id),"tile-born":d.value===C.id,"tile-long":C.value>9999}])},f(C.value),3)],12,Ma))),128)),p.value!=="playing"?(m(),$("div",Ta,[e("span",null,f(p.value==="won"?"✦":"↻"),1),e("h3",null,f(p.value==="won"?"2048，合成啦！":"这一局，先到这里"),1),e("p",null,f(p.value==="won"?"还可以继续，看看下一个数字。":`得到了 ${t.value} 分，再来一次试试看。`),1),p.value==="won"?(m(),$("button",{key:0,type:"button",class:"game-primary",onPointerdown:S[0]||(S[0]=ge(()=>{},["stop"])),onPointerup:S[1]||(S[1]=ge(()=>{},["stop"])),onKeydown:S[2]||(S[2]=ge(()=>{},["stop"])),onClick:M}," 继续挑战",32)):J("",!0),e("button",{type:"button",onPointerdown:S[3]||(S[3]=ge(()=>{},["stop"])),onPointerup:S[4]||(S[4]=ge(()=>{},["stop"])),onKeydown:S[5]||(S[5]=ge(()=>{},["stop"])),onClick:A}," 再来一局 ",32)])):J("",!0)],32),T($n,{label:"2048 方向控制",disabled:i.value||p.value!=="playing",onMove:K},null,8,["disabled"]),e("p",xa,f(p.value==="won"?"已合成 2048！可以继续挑战。":p.value==="over"?`没有可移动的位置了，本局 ${t.value} 分。`:`最大数字 ${c.value} · 滑动棋盘、方向键或下方按钮操作`),1),e("div",Ia,[e("button",{type:"button",onClick:A},[T(q,{name:"replay"}),S[12]||(S[12]=D("重新开始"))]),S[13]||(S[13]=e("span",{class:"game-footnote"},"无效移动不生成数字，每轮只合并一次",-1))]),T(de,{active:p.value==="won"&&g.active},null,8,["active"])])}}});const Aa=re(Sa,[["__scopeId","data-v-20a7af33"]]),Ea={class:"game-card guess-game","aria-labelledby":"guess-title"},Pa={class:"game-segments","aria-label":"猜数字范围"},Oa=["aria-pressed","onClick"],Ba={class:"guess-hint","aria-live":"polite"},Na={class:"game-footnote"},Da=["disabled","placeholder","aria-invalid","aria-describedby"],Ra=["disabled"],Ga={key:0,id:"guess-error",class:"game-error",role:"alert"},Ka={class:"game-actions"},Ua=ie({__name:"GuessNumber",setup(a){const s=h(100),n=h(me(100)+1),l=h(""),t=h(""),u=h(1),o=h(100),i=h(!1),v=h([]),p=G(()=>v.value.length?v.value[v.value.length-1].hint:"心里藏了一个数字，来猜猜看。");function b(c=s.value){s.value=c,n.value=me(c)+1,l.value=t.value="",u.value=1,o.value=c,v.value=[],i.value=!1}function d(){if(i.value)return;t.value="";const c=l.value.trim(),r=Number(c);if(!/^\d+$/.test(c)||!Number.isInteger(r)||r<u.value||r>o.value){t.value=`请输入 ${u.value}～${o.value} 之间的整数。`;return}const L=r===n.value?"correct":r>n.value?"high":"low",y=L==="correct"?"就是这个数字，猜中了！":L==="high"?"有点大了，再小一点 ↓":"有点小了，再大一点 ↑";v.value.push({value:r,hint:y,direction:L}),L==="correct"?i.value=!0:L==="high"?o.value=r-1:u.value=r+1,l.value=""}return(c,r)=>{const L=ce;return m(),$("section",Ea,[r[9]||(r[9]=$e('<header class="game-heading" data-v-048c599b><div data-v-048c599b><p class="game-eyebrow" data-v-048c599b>FOLLOW YOUR LITTLE HUNCH</p><h2 id="guess-title" data-v-048c599b>猜猜我在想什么</h2><p class="game-description" data-v-048c599b>范围越来越小，离答案也越来越近。</p></div><span class="game-stamp" data-v-048c599b>?</span></header>',1)),e("div",Pa,[(m(),$(z,null,H([100,1e3],y=>e("button",{key:y,type:"button",class:O({selected:s.value===y}),"aria-pressed":s.value===y,onClick:A=>b(y)}," 1～"+f(y)+f(y===100?" · 轻松猜":" · 挑战一下"),11,Oa)),64))]),e("div",{class:O(["guess-orbit",{"guess-won":i.value}])},[r[4]||(r[4]=e("span",{class:"orbit-dot"},null,-1)),(m(),$("strong",{key:i.value?n.value:v.value.length},f(i.value?n.value:"?"),1)),e("small",null,f(i.value?"找到了！":"一个等待被发现的数字"),1)],2),e("div",Ba,[e("p",{class:O(["game-status",{success:i.value}])},f(p.value),3),e("p",Na,f(i.value?`用了 ${v.value.length} 次，直觉和推理都很棒。`:`当前范围 ${u.value}～${o.value} · 已猜 ${v.value.length} 次`),1)]),e("form",{class:"guess-form",onSubmit:ge(d,["prevent"]),onKeydown:r[2]||(r[2]=wn(y=>{y.isComposing&&y.preventDefault()},["enter"]))},[r[6]||(r[6]=e("label",{class:"sr-only",for:"guess-input"},"输入你猜的数字",-1)),oe(e("input",{id:"guess-input","onUpdate:modelValue":r[0]||(r[0]=y=>l.value=y),inputmode:"numeric",autocomplete:"off",maxlength:"4",disabled:i.value,placeholder:`${u.value}～${o.value}，你的答案是？`,"aria-invalid":!!t.value,"aria-describedby":t.value?"guess-error":void 0,onInput:r[1]||(r[1]=y=>t.value="")},null,40,Da),[[Me,l.value]]),e("button",{type:"submit",class:"game-primary",disabled:i.value},r[5]||(r[5]=[D(" 猜一下 "),e("span",{"aria-hidden":"true"},"↗",-1)]),8,Ra)],32),t.value?(m(),$("p",Ga,f(t.value),1)):J("",!0),T(cn,{name:"guess-history",tag:"ol",class:"guess-history","aria-label":"本局猜测记录"},{default:te(()=>[(m(!0),$(z,null,H([...v.value].reverse(),y=>(m(),$("li",{key:y.value,class:O(y.direction)},[e("strong",null,f(y.value),1),e("span",null,f(y.direction==="correct"?"猜中了 ✓":y.direction==="high"?"偏大 ↓":"偏小 ↑"),1)],2))),128))]),_:1}),e("div",Ka,[e("button",{type:"button",onClick:r[3]||(r[3]=y=>b())},[T(L,{name:"replay"}),r[7]||(r[7]=D("换个数字"))]),r[8]||(r[8]=e("span",{class:"game-footnote"},"无效输入不计次数",-1))]),T(de,{active:i.value},null,8,["active"])])}}});const qa=re(Ua,[["__scopeId","data-v-048c599b"]]),Fa=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function Ue(a){for(const s of Fa){const[n,l,t]=s;if(a[n]&&a[n]===a[l]&&a[n]===a[t])return{winner:a[n],line:s}}return{winner:a.every(Boolean)?"draw":null,line:[]}}function Va(a){if(Ue(a).winner)return-1;const s=new Map,n=[4,0,2,6,8,1,3,5,7];function l(o,i,v){const p=Ue(o).winner;if(p)return p==="draw"?0:p==="O"?10-v:v-10;const b=o.map(r=>r??"-").join("")+i;if(s.has(b))return s.get(b);const d=n.filter(r=>!o[r]).map(r=>{const L=[...o];return L[r]=i,l(L,i==="O"?"X":"O",v+1)}),c=i==="O"?Math.max(...d):Math.min(...d);return s.set(b,c),c}let t=-1/0,u=-1;for(const o of n){if(a[o])continue;const i=[...a];i[o]="O";const v=l(i,"X",0);v>t&&(t=v,u=o)}return u}const za={class:"game-card tic-game","aria-labelledby":"tic-title"},Xa={class:"game-segments","aria-label":"井字棋对战方式"},Ya=["aria-pressed"],ja=["aria-pressed"],Ha={class:"game-stats tic-stats"},Wa=["aria-busy"],Ja=["disabled","aria-label","onClick"],Qa={key:0,class:"thinking-dots","aria-hidden":"true"},Za={class:"game-actions"},el={class:"game-footnote"},nl=ie({__name:"TicTacToe",props:{active:{type:Boolean}},setup(a){const s=a,n=h("computer"),l=h(Array(9).fill(null)),t=h("X"),u=h({X:0,O:0,draw:0}),o=h(!1),i=G(()=>Ue(l.value)),v=G(()=>i.value.winner==="draw"?"势均力敌，这局是平局。":i.value.winner?`${i.value.winner==="X"?"叉叉":"圆圈"}连成一线，赢啦！`:o.value?"圆圈正在想下一步…":`轮到${t.value==="X"?"叉叉 ×":"圆圈 ○"}落子${n.value==="computer"&&t.value==="X"?"，你先来":""}`);let p;function b(){clearTimeout(p),o.value=!1}function d(){b(),l.value=Array(9).fill(null),t.value="X"}function c(y){if(!Number.isInteger(y)||y<0||y>=9||l.value[y]||i.value.winner)return;l.value[y]=t.value;const A=i.value.winner;A?u.value[A]++:t.value=t.value==="X"?"O":"X"}function r(){b(),!(!s.active||n.value!=="computer"||t.value!=="O"||i.value.winner)&&(o.value=!0,p=setTimeout(()=>{o.value=!1,s.active&&n.value==="computer"&&t.value==="O"&&!i.value.winner&&c(Va(l.value))},window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:420))}function L(y){!s.active||o.value||n.value==="computer"&&t.value==="O"||(c(y),r())}return ve(()=>s.active,r),ve(n,()=>{d(),u.value={X:0,O:0,draw:0}}),ke(b),(y,A)=>{const X=ce;return m(),$("section",za,[A[8]||(A[8]=$e('<header class="game-heading" data-v-0eebf11d><div data-v-0eebf11d><p class="game-eyebrow" data-v-0eebf11d>YOUR MOVE, MY MOVE</p><h2 id="tic-title" data-v-0eebf11d>一起画个圈圈叉叉</h2><p class="game-description" data-v-0eebf11d>横着、竖着、斜着，先连成三个就赢。</p></div><span class="game-stamp" data-v-0eebf11d>○×</span></header>',1)),e("div",Xa,[e("button",{type:"button",class:O({selected:n.value==="computer"}),"aria-pressed":n.value==="computer",onClick:A[0]||(A[0]=K=>n.value="computer")}," 和电脑下",10,Ya),e("button",{type:"button",class:O({selected:n.value==="local"}),"aria-pressed":n.value==="local",onClick:A[1]||(A[1]=K=>n.value="local")}," 两个人玩 ",10,ja)]),e("div",Ha,[e("div",{class:O({"current-player":!i.value.winner&&t.value==="X"})},[e("small",null,"叉叉 "+f(n.value==="computer"?"· 你":"· 玩家一"),1),e("strong",null,[D(f(u.value.X),1),A[2]||(A[2]=e("span",null,"胜",-1))])],2),e("div",null,[A[4]||(A[4]=e("small",null,"握手言和",-1)),e("strong",null,[D(f(u.value.draw),1),A[3]||(A[3]=e("span",null,"局",-1))])]),e("div",{class:O({"current-player":!i.value.winner&&t.value==="O"})},[e("small",null,"圆圈 "+f(n.value==="computer"?"· 电脑":"· 玩家二"),1),e("strong",null,[D(f(u.value.O),1),A[5]||(A[5]=e("span",null,"胜",-1))])],2)]),e("div",{class:"tic-board",role:"group","aria-label":"井字棋棋盘","aria-busy":o.value},[(m(!0),$(z,null,H(l.value,(K,M)=>(m(),$("button",{key:M,type:"button",disabled:!!K||!!i.value.winner||o.value||n.value==="computer"&&t.value==="O",class:O({"winning-cell":i.value.line.includes(M)}),"aria-label":`第 ${Math.floor(M/3)+1} 行第 ${M%3+1} 列，${K==="X"?"叉叉":K==="O"?"圆圈":"空格，可落子"}`,onClick:P=>L(M)},[K?(m(),$("span",{key:0,class:O(["tic-mark",K==="X"?"mark-x":"mark-o"]),"aria-hidden":"true"},null,2)):J("",!0)],10,Ja))),128))],8,Wa),e("p",{class:O(["game-status",{success:i.value.winner}]),"aria-live":"polite"},[o.value?(m(),$("span",Qa,A[6]||(A[6]=[e("i",null,null,-1),e("i",null,null,-1),e("i",null,null,-1)]))):J("",!0),D(f(v.value),1)],2),e("div",Za,[e("button",{type:"button",class:"game-primary",onClick:d},[T(X,{name:"replay"}),A[7]||(A[7]=D("再下一局"))]),e("span",el,f(n.value==="computer"?"你执叉叉先手，电脑会认真迎战":"共用这块屏幕，轮流落子"),1)]),T(de,{active:y.active&&!!(i.value.winner&&i.value.winner!=="draw")},null,8,["active"])])}}});const al=re(nl,[["__scopeId","data-v-0eebf11d"]]);function qe(a,s){const n=[],l=Math.floor(s/a),t=s%a;for(let u=Math.max(0,l-1);u<=Math.min(a-1,l+1);u++)for(let o=Math.max(0,t-1);o<=Math.min(a-1,t+1);o++)(u!==l||o!==t)&&n.push(u*a+o);return n}function tn(a,s){if(!Number.isInteger(a)||a<4||a>12||!Number.isInteger(s)||s<1||s>a*a-9)throw new Error("扫雷棋盘或地雷数量不正确。");return{size:a,mineCount:s,mines:Array(a*a).fill(!1),opened:Array(a*a).fill(!1),flags:Array(a*a).fill(!1),phase:"ready"}}const fn=(a,s)=>Number.isInteger(s)&&s>=0&&s<a.mines.length;function Ae(a,s){return qe(a.size,s).filter(n=>a.mines[n]).length}function ll(a,s){if(!fn(a,s)||a.opened[s]||a.phase==="won"||a.phase==="lost"||!a.flags[s]&&a.flags.filter(Boolean).length>=a.mineCount)return a;const n=[...a.flags];return n[s]=!n[s],{...a,flags:n}}function tl(a,s,n=me){if(!fn(a,s)||a.opened[s]||a.flags[s]||a.phase==="won"||a.phase==="lost")return a;const l={...a,mines:[...a.mines],opened:[...a.opened],phase:"playing"};if(a.phase==="ready"){const u=new Set([s,...qe(a.size,s)]),o=a.mines.map((i,v)=>v).filter(i=>!u.has(i));for(let i=0;i<a.mineCount;i++){const v=n(o.length);l.mines[o[v]]=!0,o.splice(v,1)}}if(l.opened[s]=!0,l.mines[s])return{...l,phase:"lost"};const t=[s];for(let u=0;u<t.length;u++){const o=t[u];if(!Ae(l,o))for(const i of qe(a.size,o))l.opened[i]||l.flags[i]||l.mines[i]||(l.opened[i]=!0,t.push(i))}return l.opened.filter(Boolean).length===l.mines.length-l.mineCount&&(l.phase="won"),l}const sl={class:"game-card mine-game","aria-labelledby":"mine-title"},ol={class:"game-segments","aria-label":"扫雷难度"},ul=["aria-pressed","onClick"],il={class:"game-stats"},rl={class:"game-segments","aria-label":"扫雷操作"},vl=["aria-pressed"],dl=["aria-pressed"],cl=["disabled","aria-label","onClick"],pl={"aria-hidden":"true"},ml={class:"game-actions"},$l=ie({__name:"Minesweeper",props:{active:{type:Boolean}},setup(a){const s=a,n=h(tn(6,6)),l=h(!1),t=G(()=>n.value.phase==="won"||n.value.phase==="lost"),u=G(()=>n.value.flags.filter(Boolean).length),o=G(()=>n.value.mines.length-n.value.mineCount-n.value.opened.filter(Boolean).length+(n.value.phase==="lost"?1:0));function i(b){!s.active||t.value||(n.value=l.value?ll(n.value,b):tl(n.value,b))}function v(b=n.value.size){n.value=tn(b,b===6?6:10),l.value=!1}function p(b){const d=n.value,c=`第 ${Math.floor(b/d.size)+1} 行第 ${b%d.size+1} 列`;return d.phase==="lost"&&d.mines[b]?`${c}，地雷`:d.opened[b]?`${c}，已翻开，周围 ${Ae(d,b)} 颗雷`:`${c}，${d.flags[b]?"已标旗":"未翻开"}，点击${l.value?"切换标旗":"翻开"}`}return(b,d)=>{const c=ce;return m(),$("section",sl,[d[11]||(d[11]=$e('<header class="game-heading" data-v-cd3f451d><div data-v-cd3f451d><p class="game-eyebrow" data-v-cd3f451d>THINK BEFORE THE NEXT STEP</p><h2 id="mine-title" data-v-cd3f451d>轻松扫雷</h2><p class="game-description" data-v-cd3f451d> 数字表示周围八格的雷数。翻开所有安全格就赢。 </p></div><span class="game-stamp" aria-hidden="true" data-v-cd3f451d>⚑</span></header>',1)),e("div",ol,[(m(),$(z,null,H([6,8],r=>e("button",{key:r,type:"button",class:O({selected:n.value.size===r}),"aria-pressed":n.value.size===r,onClick:L=>v(r)},f(r)+" × "+f(r)+" · "+f(r===6?"6 颗雷":"10 颗雷"),11,ul)),64))]),e("div",il,[e("div",null,[d[4]||(d[4]=e("small",null,"地雷总数",-1)),e("strong",null,[D(f(n.value.mineCount),1),d[3]||(d[3]=e("span",null,"颗",-1))])]),e("div",null,[d[6]||(d[6]=e("small",null,"已经标旗",-1)),e("strong",null,[D(f(u.value),1),d[5]||(d[5]=e("span",null,"面",-1))])]),e("div",null,[d[8]||(d[8]=e("small",null,"待翻安全格",-1)),e("strong",null,[D(f(o.value),1),d[7]||(d[7]=e("span",null,"格",-1))])])]),e("div",rl,[e("button",{type:"button",class:O({selected:!l.value}),"aria-pressed":!l.value,onClick:d[0]||(d[0]=r=>l.value=!1)}," 翻开格子",10,vl),e("button",{type:"button",class:O({selected:l.value}),"aria-pressed":l.value,onClick:d[1]||(d[1]=r=>l.value=!0)}," ⚑ 标旗 / 取消 ",10,dl)]),e("div",{class:"mine-board",style:ae({gridTemplateColumns:`repeat(${n.value.size}, minmax(0, 1fr))`}),role:"group","aria-label":"扫雷棋盘"},[(m(!0),$(z,null,H(n.value.mines,(r,L)=>(m(),$("button",{key:L,type:"button",class:O({opened:n.value.opened[L],flagged:n.value.flags[L],mine:n.value.phase==="lost"&&n.value.mines[L],mistaken:n.value.phase==="lost"&&n.value.flags[L]&&!n.value.mines[L]}),style:ae({"--number-color":["#7c8771","#4775a2","#4f885d","#bb775c","#8b70a6","#987237","#477b82","#705b65","#5f634c"][F(Ae)(n.value,L)]}),disabled:n.value.opened[L]||t.value||!b.active,"aria-label":p(L),onClick:y=>i(L)},[e("span",pl,f(n.value.phase==="lost"&&n.value.mines[L]?"✹":n.value.phase==="lost"&&n.value.flags[L]&&!n.value.mines[L]?"×":n.value.flags[L]?"⚑":n.value.opened[L]?F(Ae)(n.value,L)||"":"·"),1)],14,cl))),128))],4),e("p",{class:O(["game-status",{success:n.value.phase==="won"}]),"aria-live":"polite"},f(n.value.phase==="won"?"所有安全格都找到了，推理成功！":n.value.phase==="lost"?"碰到小地雷啦，休息一下再挑战。":n.value.phase==="ready"?"第一下和周围一圈都安全，放心开始。":l.value?`标旗模式：点击格子放置或取消旗帜，最多 ${n.value.mineCount} 面。`:"根据数字推理；不确定时切到标旗模式。"),3),e("div",ml,[e("button",{type:"button",class:"game-primary",onClick:d[2]||(d[2]=r=>v())},[T(c,{name:"replay"}),d[9]||(d[9]=D("重新布一局"))]),d[10]||(d[10]=e("span",{class:"game-footnote"},"手机点上方按钮切换标旗，无需长按或右键",-1))]),T(de,{active:n.value.phase==="won"&&b.active},null,8,["active"])])}}});const fl=re($l,[["__scopeId","data-v-cd3f451d"]]);function Fe(a,s,n){if(!Number.isInteger(n)||n<0||n>=a.length)return a;const l=[...a],t=Math.floor(n/s),u=n%s;for(const[o,i]of[[t,u],[t-1,u],[t+1,u],[t,u-1],[t,u+1]])o>=0&&o<s&&i>=0&&i<s&&(l[o*s+i]=!l[o*s+i]);return l}function sn(a,s=me){if(![3,4,5].includes(a))throw new Error("请选择有效的翻灯棋盘。");let n=Array(a*a).fill(!1);const l=Array(a*a).fill(!1);for(let t=0;t<n.length;t++)s(2)&&(n=Fe(n,a,t),l[t]=!0);if(!n.some(Boolean)){const t=Math.floor(n.length/2);n=Fe(n,a,t),l[t]=!l[t]}return{size:a,board:n,solution:l}}function gl(a,s){const n=Fe(a.board,a.size,s);if(n===a.board)return a;const l=[...a.solution];return l[s]=!l[s],{...a,board:n,solution:l}}const bl={class:"game-card lights-game","aria-labelledby":"lights-title"},hl={class:"game-segments","aria-label":"翻灯难度"},yl=["aria-pressed","onClick"],_l={class:"game-stats"},kl=["disabled","aria-pressed","aria-label","onClick"],wl={"aria-hidden":"true"},Ll={class:"game-actions"},Cl=["disabled"],Ml=["disabled"],Tl=ie({__name:"LightsPuzzle",props:{active:{type:Boolean}},setup(a){const s=a,n=h(sn(4)),l=h(0),t=h(-1),u=h([]),o=G(()=>n.value.board.filter(Boolean).length),i=G(()=>o.value===0);function v(c){if(!s.active||i.value)return;const r=gl(n.value,c);r!==n.value&&(u.value=[...u.value.slice(-99),n.value],n.value=r,l.value++,t.value=-1)}function p(){!s.active||!u.value.length||(n.value=u.value.pop(),l.value--,t.value=-1)}function b(){s.active&&!i.value&&(t.value=n.value.solution.findIndex(Boolean))}function d(c=n.value.size){n.value=sn(c),u.value=[],l.value=0,t.value=-1}return(c,r)=>{const L=ce;return m(),$("section",bl,[r[7]||(r[7]=$e('<header class="game-heading" data-v-950fed88><div data-v-950fed88><p class="game-eyebrow" data-v-950fed88>A LITTLE SWITCH OF PERSPECTIVE</p><h2 id="lights-title" data-v-950fed88>翻灯谜阵</h2><p class="game-description" data-v-950fed88> 点一盏灯，自己和上下左右一起翻转。让所有灯熄灭吧。 </p></div><span class="game-stamp" aria-hidden="true" data-v-950fed88>☼</span></header>',1)),e("div",hl,[(m(),$(z,null,H([3,4,5],y=>e("button",{key:y,type:"button",class:O({selected:n.value.size===y}),"aria-pressed":n.value.size===y,onClick:A=>d(y)},f(y)+" × "+f(y)+" · "+f(y===3?"热身":y===4?"动脑":"挑战"),11,yl)),64))]),e("div",_l,[e("div",null,[r[2]||(r[2]=e("small",null,"已经点了",-1)),e("strong",null,[D(f(l.value),1),r[1]||(r[1]=e("span",null,"步",-1))])]),e("div",null,[r[4]||(r[4]=e("small",null,"还亮着",-1)),e("strong",null,[D(f(o.value),1),r[3]||(r[3]=e("span",null,"盏",-1))])]),r[5]||(r[5]=e("div",null,[e("small",null,"目标"),e("strong",{class:"stat-small"},"全部熄灭")],-1))]),e("div",{class:"lights-board",style:ae({gridTemplateColumns:`repeat(${n.value.size}, minmax(0, 1fr))`}),role:"group","aria-label":"翻灯棋盘"},[(m(!0),$(z,null,H(n.value.board,(y,A)=>(m(),$("button",{key:A,type:"button",class:O({lit:y,suggested:t.value===A}),disabled:i.value||!c.active,"aria-pressed":y,"aria-label":`第 ${Math.floor(A/n.value.size)+1} 行第 ${A%n.value.size+1} 列，${y?"亮灯":"熄灭"}${t.value===A?"，建议点这里":""}`,onClick:X=>v(A)},[e("span",wl,f(y?"☀":"·"),1)],10,kl))),128))],4),e("p",{class:O(["game-status",{success:i.value}]),"aria-live":"polite"},f(i.value?`全部熄灭！用了 ${l.value} 步，思路很亮。`:t.value>=0?`试试第 ${Math.floor(t.value/n.value.size)+1} 行第 ${t.value%n.value.size+1} 列，虚线框已标出。`:"每局都有解，不限时间，慢慢想。"),3),e("div",Ll,[e("button",{type:"button",class:"game-primary",onClick:r[0]||(r[0]=y=>d())},[T(L,{name:"replay"}),r[6]||(r[6]=D("换一局"))]),e("button",{type:"button",disabled:!u.value.length,onClick:p}," 撤销一步",8,Cl),e("button",{type:"button",disabled:i.value,onClick:b}," 给我一点提示 ",8,Ml)]),T(de,{active:i.value&&c.active},null,8,["active"])])}}});const xl=re(Tl,[["__scopeId","data-v-950fed88"]]),be=[{name:"薄荷绿",color:"#699b82",symbol:"✿"},{name:"蜜桃橙",color:"#ce886b",symbol:"◆"},{name:"葡萄紫",color:"#9c83bb",symbol:"✦"},{name:"晴空蓝",color:"#6898b9",symbol:"●"},{name:"麦穗黄",color:"#b39a4c",symbol:"▲"}];function Ve(a,s,n){const l=[];return n>=a&&l.push(n-a),n+a<s&&l.push(n+a),n%a>0&&l.push(n-1),n%a<a-1&&n+1<s&&l.push(n+1),l}function Ye(a,s,n){if(!Number.isInteger(n)||n<0||n>=a.length||a[n]===null)return[];const l=new Set([n]),t=[n];for(let u=0;u<t.length;u++)for(const o of Ve(s,a.length,t[u]))!l.has(o)&&a[o]===a[n]&&(l.add(o),t.push(o));return t}function ze(a,s,n,l=me){if(!Number.isInteger(a)||!Number.isInteger(s)||a<2||s<2||a>12||s>12||!Number.isInteger(n)||n<2||n>be.length)throw new Error("彩色棋盘参数不正确。");const t=Array.from({length:a*s},()=>l(n));return t[1]=t[0],t.every(u=>u===t[0])&&(t[t.length-1]=(t[0]+1)%n),t}function on(a,s,n,l=me){const t=ze(a,s,n,l),u=new Map;for(const o of t)u.set(o,(u.get(o)??0)+1);for(const[o,i]of u){if(i!==1)continue;const v=t.findIndex((p,b)=>b>=2&&u.get(p)>2);if(v>=0){const p=t[v];t[v]=o,u.set(p,u.get(p)-1),u.set(o,2)}else t[t.indexOf(o)]=t[0],u.set(o,0),u.set(t[0],u.get(t[0])+1)}return t}function Il(a,s,n){if(!Number.isInteger(n)||n<0||n>=be.length||n===a[0])return a;const l=[...a];for(const t of Ye(a,s,0))l[t]=n;return l}function gn(a,s){return a.some((n,l)=>n!==null&&(l%s<s-1&&a[l+1]===n||a[l+s]===n))}function Sl(a,s,n=me){if(gn(a,s))return a;const l=[],t=new Map;a.forEach((c,r)=>{c!==null&&(l.push(r),t.set(c,(t.get(c)??0)+1))});const u=[...t].find(([,c])=>c>=2);if(!u)return a;const o=l.find(c=>Ve(s,a.length,c).some(r=>a[r]!==null));if(o===void 0)return a;const i=Ve(s,a.length,o).find(c=>a[c]!==null),v=u[0],p=l.map(c=>a[c]);p.splice(p.indexOf(v),1),p.splice(p.indexOf(v),1);for(let c=p.length-1;c>0;c--){const r=n(c+1);[p[c],p[r]]=[p[r],p[c]]}const b=[...a];b[o]=b[i]=v;let d=0;for(const c of l)c!==o&&c!==i&&(b[c]=p[d++]);return b}function bn(a,s,n){const l=Ye(a,s,n);if(l.length<2)return l;const t=a.flatMap((u,o)=>u===a[n]?[o]:[]);if(t.length===l.length+1){const u=new Set(l);l.push(t.find(o=>!u.has(o)))}return l}function Al(a,s,n){const l=bn(a,s,n);if(l.length<2)return{board:a,removed:[],points:0};const t=[...a];for(const v of l)t[v]=null;const u=a.length/s,o=Array(a.length).fill(null);let i=0;for(let v=0;v<s;v++){const p=Array.from({length:u},(b,d)=>t[d*s+v]).filter(b=>b!==null);p.length&&(p.forEach((b,d)=>{o[(u-p.length+d)*s+i]=b}),i++)}return{board:o,removed:l,points:l.length*(l.length-1)*5}}const El={class:"game-card flood-game","aria-labelledby":"flood-title"},Pl={class:"game-segments","aria-label":"漫游棋盘大小"},Ol=["aria-pressed","onClick"],Bl={class:"game-stats"},Nl=["aria-label"],Dl={class:"flood-palette",role:"group","aria-label":"选择下一个颜色"},Rl=["disabled","aria-label","aria-pressed","onClick"],Gl={"aria-hidden":"true"},Kl={class:"game-actions"},Ul=["disabled"],ql=ie({__name:"ColorFlood",props:{active:{type:Boolean}},setup(a){const s=a,n=h(6),l=h(ze(6,6,5)),t=h(0),u=h([]),o=G(()=>new Set(Ye(l.value,n.value,0))),i=G(()=>o.value.size===l.value.length);function v(d){if(!s.active||i.value)return;const c=Il(l.value,n.value,d);c!==l.value&&(u.value=[...u.value.slice(-99),l.value],l.value=c,t.value++)}function p(){!s.active||!u.value.length||(l.value=u.value.pop(),t.value--)}function b(d=n.value){n.value=d,l.value=ze(d,d,5),u.value=[],t.value=0}return(d,c)=>{const r=ce;return m(),$("section",El,[c[7]||(c[7]=$e('<header class="game-heading" data-v-4cd3c2ab><div data-v-4cd3c2ab><p class="game-eyebrow" data-v-4cd3c2ab>LET A LITTLE COLOR GROW</p><h2 id="flood-title" data-v-4cd3c2ab>色彩漫游</h2><p class="game-description" data-v-4cd3c2ab> 从左上角的小星星出发，换个颜色，吞并相邻同色区域。 </p></div><span class="game-stamp" aria-hidden="true" data-v-4cd3c2ab>◈</span></header>',1)),e("div",Pl,[(m(),$(z,null,H([6,8],L=>e("button",{key:L,type:"button",class:O({selected:n.value===L}),"aria-pressed":n.value===L,onClick:y=>b(L)},f(L)+" × "+f(L)+" · "+f(L===6?"轻松漫游":"大一点的世界"),11,Ol)),64))]),e("div",Bl,[e("div",null,[c[2]||(c[2]=e("small",null,"换色次数",-1)),e("strong",null,[D(f(t.value),1),c[1]||(c[1]=e("span",null,"次",-1))])]),e("div",null,[c[3]||(c[3]=e("small",null,"已连接区域",-1)),e("strong",null,[D(f(o.value.size),1),e("span",null,"/ "+f(l.value.length),1)])]),e("div",null,[c[5]||(c[5]=e("small",null,"完成进度",-1)),e("strong",null,[D(f(Math.round(o.value.size/l.value.length*100)),1),c[4]||(c[4]=e("span",null,"%",-1))])])]),e("div",{class:"flood-board",style:ae({gridTemplateColumns:`repeat(${n.value}, minmax(0, 1fr))`}),role:"img","aria-label":`色彩棋盘，左上角当前为${F(be)[l.value[0]].name}，已连接 ${o.value.size} 格，共 ${l.value.length} 格`},[(m(!0),$(z,null,H(l.value,(L,y)=>(m(),$("span",{key:y,style:ae({background:F(be)[L].color}),class:O({connected:o.value.has(y)}),"aria-hidden":"true"},f(y===0?"★":F(be)[L].symbol),7))),128))],12,Nl),e("div",Dl,[(m(!0),$(z,null,H(F(be),(L,y)=>(m(),$("button",{key:L.name,type:"button",style:ae({background:L.color}),class:O({chosen:l.value[0]===y}),disabled:i.value||l.value[0]===y||!d.active,"aria-label":`换成${L.name}`,"aria-pressed":l.value[0]===y,onClick:A=>v(y)},[e("span",Gl,f(L.symbol),1),e("small",null,f(L.name),1)],14,Rl))),128))]),e("p",{class:O(["game-status",{success:i.value}]),"aria-live":"polite"},f(i.value?`颜色连成一片！用了 ${t.value} 次，给自己一个赞。`:"选下方颜色，让左上角的区域慢慢长大。不限步数。"),3),e("div",Kl,[e("button",{type:"button",class:"game-primary",onClick:c[0]||(c[0]=L=>b())},[T(r,{name:"replay"}),c[6]||(c[6]=D("换一片颜色"))]),e("button",{type:"button",disabled:!u.value.length,onClick:p}," 撤销一步 ",8,Ul)]),T(de,{active:i.value&&d.active},null,8,["active"])])}}});const Fl=re(ql,[["__scopeId","data-v-4cd3c2ab"]]),Vl={class:"game-card bubble-game","aria-labelledby":"bubble-title"},zl={class:"game-stats"},Xl=["disabled","aria-hidden","aria-label","onPointerenter","onFocus","onClick"],Yl={key:0,"aria-hidden":"true"},jl={class:"game-actions"},Hl=["disabled"],fe=7,un=8,Wl=ie({__name:"BubblePop",props:{active:{type:Boolean}},setup(a){const s=a,n=h(on(un,fe,4)),l=h(0),t=h(0),u=h(-1),o=h([]),i=h(0),v=h(""),p=h([]),b=G(()=>new Set(bn(n.value,fe,u.value))),d=G(()=>n.value.filter(K=>K!==null).length),c=G(()=>!gn(n.value,fe)),r=G(()=>d.value===0),L=G(()=>l.value+(r.value?500:0));function y(K){if(!s.active||c.value)return;const M=Al(n.value,fe,K);if(!M.removed.length){v.value="至少两颗上下或左右相连的同色泡泡才能消除。";return}const P=Sl(M.board,fe);p.value=[...p.value.slice(-99),{board:n.value,score:l.value,rounds:t.value}],n.value=P,l.value+=M.points,t.value++,o.value=M.removed,i.value++,u.value=-1,v.value=`啪！消除 ${M.removed.length} 颗，获得 ${M.points} 分。`,P!==M.board&&(v.value+=" 已自动重排，相邻同色泡泡可以继续消除。")}function A(){if(!s.active||!p.value.length)return;const K=p.value.pop();n.value=K.board,l.value=K.score,t.value=K.rounds,o.value=[],u.value=-1,v.value="已经回到上一步，再换个思路试试。"}function X(){n.value=on(un,fe,4),p.value=[],o.value=[],u.value=-1,l.value=t.value=0,v.value=""}return(K,M)=>{const P=ce;return m(),$("section",Vl,[M[11]||(M[11]=$e('<header class="game-heading" data-v-c3ca175f><div data-v-c3ca175f><p class="game-eyebrow" data-v-c3ca175f>POP AWAY THE BUSY DAY</p><h2 id="bubble-title" data-v-c3ca175f>泡泡消消乐</h2><p class="game-description" data-v-c3ca175f> 点掉相连的同色泡泡；若该色将只剩一颗，会一并高亮和消除。无组合时自动重排。 </p></div><span class="game-stamp" aria-hidden="true" data-v-c3ca175f>◌</span></header>',1)),e("div",zl,[e("div",null,[M[4]||(M[4]=e("small",null,"本局得分",-1)),e("strong",null,[D(f(L.value),1),M[3]||(M[3]=e("span",null,"分",-1))])]),e("div",null,[M[6]||(M[6]=e("small",null,"还剩泡泡",-1)),e("strong",null,[D(f(d.value),1),M[5]||(M[5]=e("span",null,"颗",-1))])]),e("div",null,[M[8]||(M[8]=e("small",null,"连消次数",-1)),e("strong",null,[D(f(t.value),1),M[7]||(M[7]=e("span",null,"次",-1))])])]),e("div",{class:"bubble-board",role:"group","aria-label":"泡泡棋盘",onPointerleave:M[1]||(M[1]=R=>u.value=-1)},[(m(!0),$(z,null,H(n.value,(R,w)=>(m(),$("button",{key:w,type:"button",class:O({empty:R===null,highlighted:b.value.size>=2&&b.value.has(w)}),style:ae({"--bubble-color":R===null?"transparent":F(be)[R].color}),disabled:R===null||c.value||!K.active,"aria-hidden":R===null?!0:void 0,"aria-label":R===null?void 0:`第 ${Math.floor(w/fe)+1} 行第 ${w%fe+1} 列，${F(be)[R].name}泡泡`,onPointerenter:g=>u.value=w,onFocus:g=>u.value=w,onBlur:M[0]||(M[0]=g=>u.value=-1),onClick:g=>y(w)},[R!==null?(m(),$("span",Yl,f(F(be)[R].symbol),1)):J("",!0)],46,Xl))),128)),(m(),$("div",{key:i.value,class:"bubble-burst","aria-hidden":"true"},[(m(!0),$(z,null,H(o.value,R=>(m(),$("i",{key:R,style:ae({gridColumn:R%fe+1,gridRow:Math.floor(R/fe)+1})},"✧",4))),128))]))],32),e("p",{class:O(["game-status",{success:r.value}]),"aria-live":"polite"},f(r.value?`${v.value} 全部清空！额外奖励 500 分，畅快收工。`:c.value?"没有可消组合了。可以撤销再想想，或轻松换一局。":v.value||"至少两颗同色泡泡上下或左右相连，就能一起消除。"),3),e("div",jl,[e("button",{type:"button",class:"game-primary",onClick:M[2]||(M[2]=R=>X())},[T(P,{name:"replay"}),M[9]||(M[9]=D("再来一盘"))]),e("button",{type:"button",disabled:!p.value.length,onClick:A}," 撤销一步",8,Hl),M[10]||(M[10]=e("span",{class:"game-footnote"},"不限时间 · 两颗得 10 分 · 连消越多越划算",-1))]),T(de,{active:r.value&&K.active},null,8,["active"])])}}});const Jl=re(Wl,[["__scopeId","data-v-c3ca175f"]]);function je(a,s){const n=Math.sqrt(a),l=Math.floor(s/a),t=s%a;return Array.from({length:a*a},(u,o)=>o).filter(u=>u!==s&&(Math.floor(u/a)===l||u%a===t||Math.floor(Math.floor(u/a)/n)===Math.floor(l/n)&&Math.floor(u%a/n)===Math.floor(t/n)))}function He(a,s){return a.flatMap((n,l)=>n&&je(s,l).some(t=>a[t]===n)?[l]:[])}function Ql(a,s){if(a.length!==s*s||a.some(o=>!Number.isInteger(o)||o<0||o>s)||He(a,s).length)return 0;const n=[...a],l=n.map((o,i)=>je(s,i));let t=0;function u(){if(t>=2)return;let o=-1,i=[];for(let v=0;v<n.length;v++){if(n[v])continue;const p=new Set(l[v].map(d=>n[d])),b=Array.from({length:s},(d,c)=>c+1).filter(d=>!p.has(d));if(!b.length)return;if((o<0||b.length<i.length)&&(o=v,i=b,b.length===1))break}if(o<0){t++;return}for(const v of i)if(n[o]=v,u(),t>=2)break;n[o]=0}return u(),t}function rn(a){if(a!==4&&a!==9)throw new Error("请选择 4×4 或 9×9 数独。");const s=Math.sqrt(a),n=()=>we(Array.from({length:s},(b,d)=>d)).flatMap(b=>we(Array.from({length:s},(d,c)=>b*s+c))),l=n(),t=n(),u=we(Array.from({length:a},(b,d)=>d+1)),o=l.flatMap(b=>t.map(d=>u[(b*s+Math.floor(b/s)+d)%a])),i=[...o],v=a===4?8:40;let p=0;for(const b of we(Array.from({length:a*a},(d,c)=>c))){const d=i[b];if(i[b]=0,Ql(i,a)!==1?i[b]=d:p++,p>=v)break}return{size:a,givens:i,solution:o}}function Zl(a,s){return a.length===s*s&&a.every(n=>Number.isInteger(n)&&n>=1&&n<=s)&&!He(a,s).length}const et={class:"game-card sudoku-game","aria-labelledby":"sudoku-title"},nt={class:"game-segments","aria-label":"数独规格"},at=["aria-pressed","onClick"],lt={class:"game-stats"},tt=["aria-label"],st=["aria-pressed","aria-label","onClick"],ot={key:0},ut={class:"sudoku-keypad","aria-label":"填写数字"},it=["disabled","onClick"],rt={class:"game-actions"},vt=["aria-pressed"],dt=["disabled"],ct=["disabled"],pt=["disabled"],mt=ie({__name:"SudokuGame",props:{active:{type:Boolean}},setup(a){const s=a,n=h(rn(4)),l=h([...n.value.givens]),t=h(l.value.map(()=>[])),u=h(l.value.findIndex(w=>!w)),o=h(!1),i=h(0),v=h(0),p=h("点选格子，再选择下方数字。浅色数字可以修改。"),b=h([]),d=G(()=>He(l.value,n.value.size)),c=G(()=>je(n.value.size,u.value)),r=G(()=>Zl(l.value,n.value.size)),L=G(()=>l.value.filter(Boolean).length),y=G(()=>Array.from({length:n.value.size},(w,g)=>g+1));function A(){b.value=[...b.value.slice(-199),{board:[...l.value],notes:t.value.map(w=>[...w]),moves:i.value,hints:v.value}]}function X(w=n.value.size){n.value=rn(w),l.value=[...n.value.givens],t.value=l.value.map(()=>[]),u.value=l.value.findIndex(g=>!g),b.value=[],i.value=v.value=0,o.value=!1,p.value="每行、每列和每个粗线宫内，数字都不能重复。"}function K(w){const g=u.value;if(!(!s.active||r.value||n.value.givens[g]||!Number.isInteger(w)||w<0||w>n.value.size)){if(o.value&&w&&l.value[g]){p.value="先擦除这个数字，再记笔记。";return}(!o.value||!w)&&l.value[g]===w&&(w||!t.value[g].length)||(A(),o.value&&w?t.value[g]=t.value[g].includes(w)?t.value[g].filter(S=>S!==w):[...t.value[g],w].sort():(l.value[g]=w,t.value[g]=[]),i.value++,p.value=d.value.length?"标红的数字在同行、同列或同宫重复了，可以修改或撤销。":"慢慢推理，不限时间。")}}function M(){if(!s.active)return;const w=b.value.pop();w&&(l.value=w.board,t.value=w.notes,i.value=w.moves,v.value=w.hints,p.value="已撤销上一步。")}function P(){if(!s.active||r.value)return;const w=u.value,g=!n.value.givens[w]&&l.value[w]!==n.value.solution[w]?w:l.value.findIndex((S,q)=>S!==n.value.solution[q]);g<0||(A(),u.value=g,l.value[g]=n.value.solution[g],t.value[g]=[],v.value++,i.value++,p.value=`已填入第 ${Math.floor(g/n.value.size)+1} 行第 ${g%n.value.size+1} 列的正确数字。`)}function R(w){if(!s.active||w.isComposing||w.altKey||w.ctrlKey||w.metaKey)return;const g=n.value.size,S=Math.floor(u.value/g),q=u.value%g,C={ArrowUp:Math.max(0,S-1)*g+q,ArrowDown:Math.min(g-1,S+1)*g+q,ArrowLeft:S*g+Math.max(0,q-1),ArrowRight:S*g+Math.min(g-1,q+1)}[w.key];C!==void 0?(w.preventDefault(),u.value=C):/^[1-9]$/.test(w.key)&&+w.key<=g?(w.preventDefault(),K(+w.key)):["Backspace","Delete","0"].includes(w.key)&&(w.preventDefault(),K(0))}return(w,g)=>{const S=ce;return m(),$("section",et,[g[8]||(g[8]=$e('<header class="game-heading" data-v-ac0c9ea8><div data-v-ac0c9ea8><p class="game-eyebrow" data-v-ac0c9ea8>ONE NUMBER, ONE LITTLE DISCOVERY</p><h2 id="sudoku-title" data-v-ac0c9ea8>慢慢数独</h2><p class="game-description" data-v-ac0c9ea8>给每个数字找位置，让思路一点点清晰。</p></div><span class="game-stamp" data-v-ac0c9ea8>1—9</span></header>',1)),e("div",nt,[(m(),$(z,null,H([4,9],q=>e("button",{key:q,type:"button",class:O({selected:n.value.size===q}),"aria-pressed":n.value.size===q,onClick:C=>X(q)},f(q)+" × "+f(q)+" · "+f(q===4?"入门":"标准"),11,at)),64))]),e("div",lt,[e("div",null,[g[3]||(g[3]=e("small",null,"已填格子",-1)),e("strong",null,[D(f(L.value),1),e("span",null,"/ "+f(l.value.length),1)])]),e("div",null,[g[4]||(g[4]=e("small",null,"落笔次数",-1)),e("strong",null,f(i.value),1)]),e("div",null,[g[6]||(g[6]=e("small",null,"使用提示",-1)),e("strong",null,[D(f(v.value),1),g[5]||(g[5]=e("span",null,"次",-1))])])]),e("div",{class:"sudoku-board",style:ae({"--size":n.value.size}),role:"group",tabindex:"0","aria-label":`${n.value.size}乘${n.value.size}数独，方向键选格、数字键填写，删除键擦除`,onKeydown:R},[(m(!0),$(z,null,H(l.value,(q,C)=>(m(),$("button",{key:C,type:"button",tabindex:"-1",class:O({given:n.value.givens[C],selected:u.value===C,related:c.value.includes(C),same:q&&q===l.value[u.value],conflict:d.value.includes(C),"box-right":(C%n.value.size+1)%Math.sqrt(n.value.size)===0&&C%n.value.size!==n.value.size-1,"box-bottom":(Math.floor(C/n.value.size)+1)%Math.sqrt(n.value.size)===0&&Math.floor(C/n.value.size)!==n.value.size-1}),"aria-pressed":u.value===C,"aria-label":`第 ${Math.floor(C/n.value.size)+1} 行第 ${C%n.value.size+1} 列，${q||"空格"}${n.value.givens[C]?"，固定数字":""}${d.value.includes(C)?"，数字冲突":""}${!q&&t.value[C].length?"，笔记"+t.value[C].join("、"):""}`,onClick:E=>u.value=C},[q?(m(),$("span",ot,f(q),1)):(m(),$("span",{key:1,class:"sudoku-notes",style:ae({gridTemplateColumns:`repeat(${Math.sqrt(n.value.size)}, 1fr)`})},[(m(!0),$(z,null,H(y.value,E=>(m(),$("small",{key:E},f(t.value[C].includes(E)?E:""),1))),128))],4))],10,st))),128))],44,tt),e("div",ut,[(m(!0),$(z,null,H(y.value,q=>(m(),$("button",{key:q,type:"button",disabled:r.value||!!n.value.givens[u.value],onClick:C=>K(q)},f(q),9,it))),128))]),e("p",{class:O(["game-status",{success:r.value}]),"aria-live":"polite"},f(r.value?`填好了！用了 ${i.value} 次落笔、${v.value} 次提示。`:p.value),3),e("div",rt,[e("button",{type:"button",class:O({"game-primary":o.value}),"aria-pressed":o.value,onClick:g[0]||(g[0]=q=>o.value=!o.value)},f(o.value?"笔记已开启":"记笔记"),11,vt),e("button",{type:"button",disabled:r.value||!!n.value.givens[u.value],onClick:g[1]||(g[1]=q=>K(0))}," 擦除",8,dt),e("button",{type:"button",disabled:!b.value.length,onClick:M}," 撤销",8,ct),e("button",{type:"button",disabled:r.value,onClick:P},"填一格提示",8,pt),e("button",{type:"button",onClick:g[2]||(g[2]=q=>X())},[T(S,{name:"replay"}),g[7]||(g[7]=D("换一题 "))])]),g[9]||(g[9]=e("p",{class:"game-footnote sudoku-note"}," 每题经过唯一解校验 · 固定数字不可修改 · 切换游戏保留本局 ",-1)),T(de,{active:r.value&&w.active},null,8,["active"])])}}});const $t=re(mt,[["__scopeId","data-v-ac0c9ea8"]]),ft=`; Microban (April 2000 revision)
; Author: David W. Skinner
; Contact: sasquatch@bentonrea.com
; Source: http://sneezingtiger.com/sokoban/levels/microbanText.html
; Original author site: http://users.bentonrea.com/~sasquatch/sokoban/
; Original level order, map rows and title notes preserved.

; Level 1
####
# .#
#  ###
#*@  #
#  $ #
#  ###
####

; Level 2
######
#    #
# #@ #
# $* #
# .* #
#    #
######

; Level 3
  ####
###  ####
#     $ #
# #  #$ #
# . .#@ #
#########

; Level 4
########
#      #
# .**$@#
#      #
#####  #
    ####

; Level 5
 #######
 #     #
 # .$. #
## $@$ #
#  .$. #
#      #
########

; Level 6
###### #####
#    ###   #
# $$     #@#
# $ #...   #
#   ########
#####

; Level 7
#######
#     #
# .$. #
# $.$ #
# .$. #
# $.$ #
#  @  #
#######

; Level 8
  ######
  # ..@#
  # $$ #
  ## ###
   # #
   # #
#### #
#    ##
# #   #
#   # #
###   #
  #####

; Level 9
#####
#.  ##
#@$$ #
##   #
 ##  #
  ##.#
   ###

; Level 10
      #####
      #.  #
      #.# #
#######.# #
# @ $ $ $ #
# # # # ###
#       #
#########

; Level 11
  ######
  #    #
  # ##@##
### # $ #
# ..# $ #
#       #
#  ######
####

; Level 12
#####
#   ##
# $  #
## $ ####
 ###@.  #
  #  .# #
  #     #
  #######

; Level 13
####
#. ##
#.@ #
#. $#
##$ ###
 # $  #
 #    #
 #  ###
 ####

; Level 14
#######
#     #
# # # #
#. $*@#
#   ###
#####

; Level 15
     ###
######@##
#    .* #
#   #   #
#####$# #
    #   #
    #####

; Level 16
 ####
 #  ####
 #     ##
## ##   #
#. .# @$##
#   # $$ #
#  .#    #
##########

; Level 17
#####
# @ #
#...#
#$$$##
#    #
#    #
######

; Level 18
#######
#     #
#. .  #
# ## ##
#  $ #
###$ #
  #@ #
  #  #
  ####

; Level 19
########
#   .. #
#  @$$ #
##### ##
   #  #
   #  #
   #  #
   ####

; Level 20
#######
#     ###
#  @$$..#
#### ## #
  #     #
  #  ####
  #  #
  ####

; Level 21
####
#  ####
# . . #
# $$#@#
##    #
 ######

; Level 22
#####
#   ###
#. .  #
#   # #
## #  #
 #@$$ #
 #    #
 #  ###
 ####

; Level 23
#######
#  *  #
#     #
## # ##
 #$@.#
 #   #
 #####

; Level 24
# #####
  #   #
###$$@#
#   ###
#     #
# . . #
#######

; Level 25
 ####
 #  ###
 # $$ #
##... #
#  @$ #
#   ###
#####

; Level 26
 #####
 # @ #
 #   #
###$ #
# ...#
# $$ #
###  #
  ####

; Level 27
######
#   .#
# ## ##
#  $$@#
# #   #
#.  ###
#####

; Level 28
#####
#   #
# @ #
# $$###
##. . #
 #    #
 ######

; Level 29
     #####
     #   ##
     #    #
 ######   #
##     #. #
# $ $ @  ##
# ######.#
#        #
##########

; Level 30
####
#  ###
# $$ #
#... #
# @$ #
#   ##
#####

; Level 31
  ####
 ##  #
##@$.##
# $$  #
# . . #
###   #
  #####

; Level 32
 ####
##  ###
#     #
#.**$@#
#   ###
##  #
 ####

; Level 33
#######
#. #  #
#  $  #
#. $#@#
#  $  #
#. #  #
#######

; Level 34
  ####
###  ####
#       #
#@$***. #
#       #
#########

; Level 35
  ####
 ##  #
 #. $#
 #.$ #
 #.$ #
 #.$ #
 #. $##
 #   @#
 ##   #
  #####

; Level 36
####
#  ############
# $ $ $ $ $ @ #
# .....       #
###############

; Level 37
      ###
##### #.#
#   ###.#
#   $ #.#
# $  $  #
#####@# #
    #   #
    #####

; Level 38
##########
#        #
# ##.### #
# # $$ . #
# . @$## #
#####    #
    ######

; Level 39
#####
#   ####
# # # .#
#    $ ###
### #$.  #
#   #@   #
# # ######
#   #
#####

; Level 40
 #####
 #   #
##   ##
# $$$ #
# .+. #
#######

; Level 41
#######
#     #
#@$$$ ##
#  #...#
##    ##
 ######

; Level 42
   ####
   #  #
   #@ #
####$.#
#   $.#
# # $.#
#    ##
######

; Level 43
     ####
     # @#
     #  #
###### .#
#   $  .#
#  $$# .#
#    ####
###  #
  ####

; Level 44
; 'Duh!'
#####
#@$.#
#####

; Level 45
######
#... #
#  $ #
# #$##
#  $ #
#  @ #
######

; Level 46
 ######
##    #
#  ## #
# # $ #
#  * .#
## #@##
 #   #
 #####

; Level 47
  #######
###     #
# $ $   #
# ### #####
# @ . .   #
#   ###   #
##### #####

; Level 48
######
#  @ #
#  # ##
# .#  ##
# .$$$ #
# .#   #
####   #
   #####

; Level 49
######
# @  #
# $# #
# $  #
# $ ##
### ####
 #  #  #
 #...  #
 #     #
 #######

; Level 50
  ####
###  #####
#  $  @..#
# $    # #
### #### #
  #      #
  ########

; Level 51
####
#  ###
#    ###
#  $*@ #
### .# #
  #    #
  ######

; Level 52
  ####
### @#
#  $ #
#  *.#
#  *.#
#  $ #
###  #
  ####

; Level 53
 #####
##. .##
# * * #
#  #  #
# $ $ #
## @ ##
 #####

; Level 54
      ######
      #    #
  ##### .  #
###  ###.  #
# $  $  . ##
# @$$ # . #
##    #####
 ######

; Level 55
########
# @ #  #
#      #
#####$ #
    #  ###
 ## #$ ..#
 ## #  ###
    ####

; Level 56
#####
#   ###
#  $  #
##* . #
 #   @#
 ######

; Level 57
  ####
  #  #
  #@ #
  #  #
### ####
#    * #
#  $   #
#####. #
    ####

; Level 58
####
#  ####
#.*$  #
# .$# #
## @  #
 #   ##
 #####

; Level 59
############
#          #
# ####### @##
# #         #
# #  $   #  #
# $$ #####  #
###  # # ...#
  #### #    #
       ######

; Level 60
 #########
 #       #
##@##### #
#  #   # #
#  #   $.#
#  ##$##.#
##$##  #.#
#   $  #.#
#   #  ###
########

; Level 61
########
#      #
# #### #
# #...@#
# ###$###
# #     #
#  $$ $ #
####   ##
   #.###
   ###

; Level 62
   ##########
####    ##  #
#  $$$....$@#
#      ###  #
#   #### ####
#####

; Level 63
#####   ####
#   ##### .#
#       $  ########
###  #### .$    @ #
  #  #  #  ####   #
  ####  ####  #####

; Level 64
 ######
##    #
#   $ #
#  $$ #
### .#####
  ##.# @ #
   #.  $ #
   #. ####
   ####

; Level 65
  ######
  #    #
  #  $ #
 ####$ #
## $ $ #
#....# ##
#     @ #
##  #   #
 ########

; Level 66
   ###
   #@#
 ###$###
##  .  ##
#  # #  #
# #   # #
# #   # #
# #   # #
#  # #  #
## $ $ ##
 ##. .##
  #   #
  #   #
  #####

; Level 67
#####
#   ##
# #  #
#@$*.##
##  . #
 # $# #
 ##   #
  #####

; Level 68
 ####
 #  ######
##    $  #
# .# $   #
# .#$#####
# .@ #
######

; Level 69
####  ####
#  ####  #
#  #  #  #
#  #    $##
#  . .#$  #
#@ ## # $ #
#   . #   #
###########

; Level 70
#####
# @ ####
#      #
# $ $$ #
##$##  #
#   ####
# ..  #
##..  #
 ###  #
   ####

; Level 71
###########
#     #   ###
# $@$ # .  .#
# ## ### ## #
# #       # #
# #   #   # #
# ######### #
#           #
#############

; Level 72
  ####
 ##  #####
 #  $  @ #
 #  $#   #
#### #####
#  #   #
#    $ #
# ..#  #
#  .####
#  ##
####

; Level 73
####
#  #####
# $$ $ #
#      #
## ## ##
#...#@#
# ### ##
#      #
#  #   #
########

; Level 74
 ####
 #  #######
 #$ @#   .#
## #$$   .#
#  $  ##..#
#   # #####
###   #
  #####

; Level 75
 #######
## ....##
#   ######
#   $ $ @#
###  $ $ #
  ###    #
    ######

; Level 76
 #####
##   #
#    #####
#  #.#   #
#@ #.# $ #
#  #.#  ##
#    #  #
##  ##$$#
 ##     #
  #  ####
  ####

; Level 77
##########
# @ .... #
#   ####$##
## #  $ $ #
 # $      #
 #   ######
 #####

; Level 78
 #######
##     ##
#  $ $  #
# $ $ $ #
## ### ####
 #@  .....#
 ##     ###
  #######

; Level 79
 #########
 #    #  #
## $#$#  #
#  .$.@  #
#  .#    #
##########

; Level 80
####
#  #######
#  . ## .#
# $#    .#
## ## # .#
 #    #  #
 #### #  #
  # @$ ###
  # $$ #
  #    #
  ######

; Level 81
 #####
 #   #
 # . #
## * #
#  *##
#  @##
## $ #
 #   #
 #####

; Level 82
#####
#   ###
# .   ##
##*#$  #
# .# $ #
# @## ##
#     #
#######

; Level 83
######
#    ##
# $ $ ##
## $$  #
 # #   #
 # ## ##
 #  . .#
 # @. .#
 #  ####
 ####

; Level 84
########
#  ... #
#  ### ##
#  # $  #
## #@$  #
 # # $  #
 # ### #####
 #         #
 #   ###   #
 ##### #####

; Level 85
       ####
 #######  #
 # $      #
 #   $ $  #
 # ########
## # .  #
#  # #  #
#  @ . ##
## # # #
 #   . #
 #######

; Level 86
    ####
  ###  ##
 ## $   #
## $  # #
# @#$$  #
# ..  ###
# ..###
#####

; Level 87
     ####
######  #
#       #
#  ... .#
##$######
# $  #
#   $###
##  $  #
 ## @  #
  ######

; Level 88
     ####
 # ###  #
 # #    #
 # #  # #
 # #$ #.#
 # #  # # #
 # #$ #.# #
   #  # # #
####$ #.# #
# @     # #
#   #  ## #
########

; Level 89
##########
#   ##   #
# $  $@# #
#### # $ #
   #.#  ##
 # #.# $#
 # #.   #
 # #.   #
   ######

; Level 90
 ########
 #  @   #
 # $  $ #
### ## ###
#  $..$  #
#   ..   #
##########

; Level 91
###########
#    .##  #
# $$@..$$ #
#   ##.   #
###########

; Level 92
  ####
  #  #    #####
  #  #    #   #
  #  ######.# #
####  $    .  #
#   $$# ###.# #
#   #   # #   #
######### #@ ##
          #  #
          ####

; Level 93
 #########
##   #   ##
#    #    #
#  $ # $  #
#   *.*   #
####.@.####
#   *.*   #
#  $ # $  #
#    #    #
##   #   ##
 #########

; Level 94
#########
# @ #   #
# $ $   #
##$### ##
#  ...  #
#   #   #
######  #
     ####

; Level 95
########
#@     #
# .$$. #
# $..$ #
# $..$ #
# .$$. #
#      #
########

; Level 96
  ######
  #    #
  #    #
#####  #
#   #.#####
#   $@$   #
#####.#   #
   ## ## ##
   #   $.#
   #   ###
   #####

; Level 97
   ####
   #  ########
#### $ $.....#
#   $   ######
#@### ###
#  $  #
# $ # #
## #  #
 #    #
 ######

; Level 98
#####
#   ## ####
#  $ ### .#
# $   $  .#
## $#####.# ####
# $  # # .###  #
#    # # .#  @ #
###  # #       #
  #### ##     ##
        #######

; Level 99
               #####
               #   #
#######  ####### # #
#     #  #  #      #
#  @  ####  #     ####
#  #    ....## ####  #
#    ##### ## $$ $ $ #
######   #           #
         #  ##########
         ####

; Level 100
#######
# @#  #
#.$   #
#. # $##
#.$#   #
#. # $ #
#  #   #
########

; Level 101
; 'Lockdown'
  #####
  #   #
  # # #######
  #  *  #   #
  ## ##   # #
  #     #*  #
### # # # ###
#  *#$+   #
# #   ## ##
#   #  *  #
####### # #
      #   #
      #####

; Level 102
###########
#....#    #
#  #   $$ #
#  @  ##  #
#     ##$ #
######  $ #
     #    #
     ######

; Level 103
  #####
  # . ##
### $  #
# . $#@#
# #$ . #
#  $ ###
## . #
 #####

; Level 104
    #####
#####   #
#    $  #
#  $#$#@#
### #   #
  # ... #
  ###  ##
    #  #
    ####

; Level 105
 #### ####
##  ###  ##
#   # #   #
#  *. .*  #
###$   $###
 #   @   #
###$   $###
#  *. .*  #
#   # #   #
##  ###  ##
 #### ####

; Level 106
 ########
 #      #
 #@   $ #
## ###$ #
# .....###
# $ $ $  #
###### # #
     #   #
     #####

; Level 107
########
#      #
# $*** #
# *  * #
# *  * #
# ***. #
#     @#
########

; Level 108
####     #####
#  ###   #   ##
#    #   #$ $ #
#..# ##### #  #
#  @    # $ $ #
#..#         ##
##   #########
 #####

; Level 109
  #######
# #     #
# # # # #
  # @ $ #
### ### #
#   ### #
# $  ##.#
## $  #.#
 ## $  .#
# ## $#.#
## ## #.#
### #   #
### #####

; Level 110
  ####
  #  #
  # $####
###. .  #
# $ # $ #
#  . .###
####$ #
   # @#
   ####

; Level 111
######
#    ####
#    ...#
#    ...#
######  #
  #  #  #
  # $$ ##
  # @$  #
  # $$  #
  ## $# #
   #    #
   ######

; Level 112
 #####
##   ####
#  $$$  #
# #   $ #
#   $## ##
###  #.  #
  #  #   #
 ##### ###
 #   # ##
 # @....#
 #      #
 #   #  #
 ########

; Level 113
   #####
  ##   #
###  # #
#    . #
#  ## #####
#  . . #  ##
#  # @ $   ###
#####. #  $  #
    ####  $  #
       ## $ ##
        #  ##
        #  #
        ####

; Level 114
######
#    ###
#  # $ #
#  $ @ #
## ## #####
#  #......#
# $ $ $ $ #
##   ######
 #####

; Level 115
    #####
#####   ####
#     #    #
#  #.....  #
##  ## # ###
 #$$@$$$ #
 #     ###
 #######

; Level 116
     #####
   ###   #
####.....#
# @$$$$$ #
#     # ##
#####   #
    #####

; Level 117
 #### ####
 #  ###  ##
 #      @ #
##..###   #
#      #  #
#...#$  # #
# ## $$ $ #
#  $    ###
####  ###
   ####

; Level 118
 #####
##   ##
#  $  ##
# $ $  ##
###$# . ##
  # # .  #
 ## ##.  #
 # @  . ##
 #   #  #
 ########

; Level 119
  ######
  #    ##
 ## ##  #
 # $$ # #
 # @$ # #
 #    # #
#### #  #
#  ... ##
#     ##
#######

; Level 120
      ####
#######  #
# $      ##
# $#####  #
#  @#  #  #
## ##..   #
#  # ..####
# $  ###
# $###
#  #
####

; Level 121
 ######
 # .  #
##$.# #
#  *  #
# ..###
##$ # #####
## ## #   #
#  #### # #
#   @ $ $ #
##  #     #
 ##########

; Level 122
#####
#   ###
# #$  #
# $   #
# $ $ #
# $#  #
#  @###
## ########
#      ...#
#         #
########..#
       ####

; Level 123
########
#      #
# $ $$ ########
##### @##. .  #
    #$  # .   #
    #   #. . ##
    #$# ## # #
    #        #
    #  ###  ##
    #  # ####
    ####

; Level 124
##############
#      #     #
# $@$$ # . ..#
## ## ### ## #
 # #       # #
 # #   #   # #
 # ######### #
 #           #
 #############

; Level 125
      #####
      #   ##
      # $  #
######## #@##
# .  # $ $  #
#        $# #
#...#####   #
#####   #####

; Level 126
 ###########
##.......  #
# $$$$$$$@ #
#   # # # ##
# # #     #
#   #######
#####

; Level 127
## ####
####  ####
 # $ $.  #
## #  .$ #
#   ##.###
#  $  . #
# @ #   #
#  ######
####

; Level 128
  #########
###   #   #
# * $ . . #
#   $ ## ##
####*#   #
 #  @  ###
 #   ###
 #####

; Level 129
  #########
### @ #   #
# * $ *.. #
#   $ #   #
####*#  ###
 #     ##
 #   ###
 #####

; Level 130
#####  #####
#   ####.. #
# $$$      #
#   $#  .. #
### @#  ## #
  #  ##    #
  ##########

; Level 131
#####
#   #
# . #
#.@.###
##.#  #
#  $  #
# $   #
##$$  #
 #  ###
 #  #
 ####

; Level 132
####
# @###
#.*  #####
#..#$$ $ #
##       #
 # # ##  #
 #   #####
 #####

; Level 133
 #######
 #  . .###
 # . . . #
### #### #
#  @$  $ #
#  $$  $ #
####   ###
   #####

; Level 134
        ####
#########  #
#   ## $   #
#  $   ##  #
### #. .# ##
  # #. .#$##
  # #   #  #
  # @ $    #
  #  #######
  ####

; Level 135
#######
#     #####
# $$#@##..#
# #       #
#  $ # #  #
#### $  ..#
   ########

; Level 136
 #######
 #     #
## ###$##
#.$   @ #
# .. #$ #
#.##  $ #
#    ####
######

; Level 137
       ####
      ##  ###
####  #  $  #
#  #### $ $ #
#   ..# #$  #
#  #   @  ###
## #..# ###
 # ## # #
 #      #
 ########

; Level 138
  ####
###  #
#    ###
# # . .#
# @ ...####
# # # #   ##
#   # $$   #
#####  $ $ #
    ##$ # ##
     #    #
     ######

; Level 139
 ####
##  ####
#   ...#
#   ...#
#   # ##
#   #@ #### ####
##### $   ###  #
    #  ##$ $   #
   ###     $$  #
   # $  ##   ###
   #    ######
   ######

; Level 140
######## #####
#  #   ###   #
#      ## $  #
#.# @ ## $  ##
#.#   # $  ##
#.#    $  ##
#. ## #####
##    #
 ######

; Level 141
  ########
  #  # . #
  #   .*.#
  #  # * #
####$##.##
#      $ #
# $ ## $ #
#   @#   #
##########

; Level 142
  ####
  #  #
  #  ####
###$.$  #
#  .@.  #
#  $.$###
####  #
   #  #
   ####

; Level 143
####
#  ####
# $   #
# .#  #
# $# ##
# .  #
#### #
   # #
 ### ###
 #  $  #
## #$# ##
# $ @ $ #
# ..#.. #
###   ###
  #####

; Level 144
   ####
 ###  #####
 # $$ #   #
 # $ . .$$##
 # .. #. $ #
### #** .  #
#  . **# ###
# $ .# .. #
##$$.@. $ #
 #   # $$ #
 #####  ###
     ####

; Level 145
   #####
   # @ #
  ##   ##
###.$$$.###
#  $...$  #
#  $.#.$  #
#  $...$  #
###.$$$.###
  ##   ##
   #   #
   #####

; Level 146
 #######
##  .  ##
# .$$$. #
# $. .$ #
#.$ @ $.#
# $. .$ #
# .$$$. #
##  .  ##
 #######

; Level 147
; 'reduction of (Mas Sasquatch 8)'
       #####
########   #
#.   .  @#.#
#  ###     #
## $  #    #
 # $   #####
 # $#  #
 ## #  #
  #   ##
  #####

; Level 148
; 'from (Original 18)'
###########
#  .  #   #
# #.  @   #
#  #..# #######
##  ## $$ $ $ #
 ##           #
  #############

; Level 149
; 'from (Boxxle 43)'
 ####
##  ###
#@$   #
### $ #
 #  ######
 #  $....#
 #  # ####
 ## # #
 # $# #
 #    #
 #  ###
 ####

; Level 150
; 'from (Original 47)'
     ####
 #####  #
 #     $#######
## ## ..#  ...#
# $ $$#$  @   #
#        ###  #
#######  # ####
      ####

; Level 151
; 'from (Original 47)'
   ####
   #  #
 ###  #
##  $ #
#   # #
# #$$ ######
# #   #   .#
#  $  @   .#
###  ####..#
  ####  ####

; Level 152
; 'reduced (Mas Sasquatch 23)'
###### ####
#     #    #
#.##  #$##  #
#   #     #  #
#$  # ###  #  #
# #      #  # #
# # ####  # # #
#. @    $ * . #
###############

; Level 153
; 'reduction of (Revenge 306)'
#############
#.# @#  #   #
#.#$$   # $ #
#.#  # $#   #
#.# $#  # $##
#.#  # $#  #
#.# $#  # $#
#..  # $   #
#..  #  #  #
############

; Level 154
; 'Take the long way home.'
 ############################
 #                          #
 # ######################## #
 # #                      # #
 # # #################### # #
 # # #                  # # #
 # # # ################ # # #
 # # # #              # # # #
 # # # # ############ # # # #
 # # # # #            # # # #
 # # # # # ############ # # #
 # # # # #              # # #
 # # # # ################ # #
 # # # #                  # #
##$# # #################### #
#. @ #                      #
#############################

; Level 155
; 'The Dungeon'
    ######               ####
#####*#  #################  ##
#   ###                      #
#        ########  ####  ##  #
### ####     #  ####  ####  ##
#*# # .# # # #     #     #   #
#*# #  #     # ##  # ##  ##  #
###    ### ###  # ##  # ##  ##
 #   # #*#      #     # #    #
 #   # ###  #####  #### #    #
 #####   #####  ####### ######
 #   # # #**#               #
## # #   #**#  #######  ##  #
#    #########  #    ##### ###
# #             # $        #*#
#   #########  ### @#####  #*#
#####       #### ####   ######

`,hn=[{id:"first-push",name:"第一步",map:["#######","#     #","# @$. #","#     #","#######"]},{id:"turn-around",name:"绕到后面",map:["#######","#  .  #","#  $  #","# @   #","#     #","#######"]},{id:"two-friends",name:"两个伙伴",map:["########","# .  . #","# $  $ #","#   @  #","#      #","########"]},{id:"side-by-side",name:"并肩归位",map:["########","#  ..  #","#      #","#  $$  #","# @    #","########"]},{id:"around-wall",name:"墙角转弯",map:["########","#   .  #","#   #  #","# $    #","#   @  #","#      #","########"]},{id:"small-store",name:"小小仓库",map:["########","# .  . #","#   #  #","# $$   #","#   @  #","#      #","########"]},{id:"three-crates",name:"排好队伍",map:["########","# ...  #","#      #","# $$$  #","#   @  #","#      #","########"]},{id:"long-way",name:"留出通道",map:["########","# .  . #","# #    #","#  $$  #","#  #   #","#   @  #","#      #","########"]}];function Xe(a){const s=Math.max(0,...a.map(d=>d.length));if(!s||s>64||a.length>64||a.some(d=>/[^# .$@*+]/.test(d)))throw new Error("推箱子地图格式不正确。");const n=a.flatMap(d=>[...d.padEnd(s," ")]),l=new Set;function t(d){n[d]===" "&&!l.has(d)&&(l.add(d),u.push(d))}const u=[];for(let d=0;d<n.length;d++)(d<s||d>=n.length-s||d%s===0||d%s===s-1)&&t(d);for(let d=0;d<u.length;d++){const c=u[d];c%s>0&&t(c-1),c%s<s-1&&t(c+1),c>=s&&t(c-s),c+s<n.length&&t(c+s)}const o=[],i=[],v=[],p=[];if(n.forEach((d,c)=>{d==="#"&&o.push(c),".*+".includes(d)&&i.push(c),"$*".includes(d)&&v.push(c),"@+".includes(d)&&p.push(c)}),p.length!==1||!v.length||v.length!==i.length)throw new Error("箱子、目标或人物数量不正确。");const b={width:s,height:a.length,walls:o,voids:[...l],goals:i,boxes:v,player:p[0]};if(n.some((d,c)=>!"# ".includes(d)&&["up","down","left","right"].some(r=>{const L=_e(b,c,r);return L<0||l.has(L)})))throw new Error("推箱子地图必须由墙封闭。");return b}function gt(a,s,n){const l=[];let t=[];function u(){if(!t.length)return;Xe(t);const o=l.length+1;l.push({id:`${s}-${String(o).padStart(3,"0")}`,name:`${n} ${o}`,map:t}),t=[]}for(const o of a.replace(/^\uFEFF/,"").split(/\r?\n/))if(!o.trimStart().startsWith(";"))if(!o.trim())u();else if(/^[# .$@*+]+$/.test(o))t.push(o);else throw new Error("推箱子关卡文件包含无法识别的内容。");if(u(),!l.length)throw new Error("推箱子关卡文件为空。");return l}function _e(a,s,n){const l=s%a.width,t=Math.floor(s/a.width),[u,o]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[n],i=l+u,v=t+o;return i<0||v<0||i>=a.width||v>=a.height?-1:v*a.width+i}function bt(a,s){const n=_e(a,a.player,s);if(n<0||a.walls.includes(n)||a.voids.includes(n))return{board:a,pushed:!1};const l=a.boxes.includes(n);if(!l)return{board:{...a,player:n},pushed:l};const t=_e(a,n,s);return t<0||a.walls.includes(t)||a.voids.includes(t)||a.boxes.includes(t)?{board:a,pushed:!1}:{board:{...a,player:n,boxes:a.boxes.map(u=>u===n?t:u)},pushed:l}}const ht=a=>a.boxes.every(s=>a.goals.includes(s));function yt(a){const s=n=>n<0||a.walls.includes(n)||a.voids.includes(n);return a.boxes.filter(n=>!a.goals.includes(n)&&(s(_e(a,n,"up"))||s(_e(a,n,"down")))&&(s(_e(a,n,"left"))||s(_e(a,n,"right"))))}const yn=gt(ft,"microban","Microban"),Re=[{id:"intro",name:"入门练习",author:"本站自编",levels:hn},{id:"microban",name:"Microban",author:"David W. Skinner",levels:yn}];[...hn,...yn];function We(a){const s=pn(),n=G(()=>s.data.gameProgress??{}),l=u=>n.value[`${a}:${u}`];function t(u,o){return l(u)!==void 0&&l(u)<=o?!0:Ge(()=>s.commit(i=>{i.gameProgress??(i.gameProgress={});const v=`${a}:${u}`;i.gameProgress[v]=Math.min(i.gameProgress[v]??o,o)}))}return{best:l,save:t}}const _t={key:0,class:"level-pagination","aria-label":"关卡分页"},kt=["disabled"],wt=["disabled"],Lt={class:"puzzle-levels","aria-label":"选择关卡"},Ct=["aria-pressed","aria-label","onClick"],Mt={key:0,"aria-hidden":"true"},Tt={key:1,class:"game-status"},xt={key:0},he=20,It=ie({__name:"PuzzleLevels",props:{levels:{},current:{},best:{type:Function}},emits:["change"],setup(a){const s=a,n=h(0),l=G(()=>Math.max(1,Math.ceil(s.levels.length/he))),t=G(()=>Array.from({length:l.value},(o,i)=>({value:i,label:`${i*he+1}–${Math.min((i+1)*he,s.levels.length)} / ${s.levels.length}`}))),u=G(()=>s.levels.slice(n.value*he,(n.value+1)*he).map((o,i)=>({level:o,index:n.value*he+i})));return ve([()=>s.current,()=>s.levels],()=>{n.value=Math.min(l.value-1,Math.max(0,Math.floor(s.current/he)))},{immediate:!0}),(o,i)=>(m(),$(z,null,[l.value>1?(m(),$("div",_t,[e("button",{type:"button",disabled:n.value===0,onClick:i[0]||(i[0]=v=>n.value--)},"上一组",8,kt),T(Ln,{class:"level-range","model-value":n.value,label:"关卡范围",options:t.value,"onUpdate:modelValue":i[1]||(i[1]=v=>n.value=Number(v))},null,8,["model-value","options"]),e("button",{type:"button",disabled:n.value===l.value-1,onClick:i[2]||(i[2]=v=>n.value++)}," 下一组 ",8,wt)])):J("",!0),e("div",Lt,[(m(!0),$(z,null,H(u.value,({level:v,index:p})=>(m(),$("button",{key:v.id,type:"button",class:O({selected:o.current===p,completed:o.best(v.id)!==void 0}),"aria-pressed":o.current===p,"aria-label":`第 ${p+1} 关：${v.name}${o.best(v.id)!==void 0?"，已通关":""}`,onClick:b=>o.$emit("change",p)},[D(f(p+1),1),o.best(v.id)!==void 0?(m(),$("small",Mt,"✓")):J("",!0)],10,Ct))),128))]),o.levels[o.current]?(m(),$("p",Tt,[D(" 第 "+f(o.current+1)+" 关 · "+f(o.levels[o.current].name),1),o.best(o.levels[o.current].id)!==void 0?(m(),$("span",xt," · 最好 "+f(o.best(o.levels[o.current].id))+" 步",1)):J("",!0)])):J("",!0)],64))}});const Je=re(It,[["__scopeId","data-v-1a52169b"]]),St={class:"game-card sokoban-game","aria-labelledby":"sokoban-title"},At={class:"sokoban-packs","aria-label":"选择推箱子题库"},Et=["aria-pressed","onClick"],Pt={class:"sokoban-source"},Ot={class:"game-stats"},Bt={key:0,class:"sokoban-source"},Nt={class:"sokoban-viewport"},Dt=["viewBox","width","height"],Rt=["width","height"],Gt=["transform","aria-hidden","aria-label"],Kt={key:0,class:"wall-lines",d:"M0 12h29M0 24h29"},Ut={key:1,class:"goal-mark",cx:"14.5",cy:"14.5",r:"4.5"},qt={key:2,"aria-hidden":"true"},Ft=["d"],Vt={key:3,"aria-hidden":"true"},zt={key:4,class:"dead-corner",x:"2",y:"2",width:"25",height:"25",rx:"3"},Xt={class:"game-actions"},Yt=["disabled"],jt={key:1,class:"game-footnote sokoban-note"},Ht=ie({__name:"SokobanGame",props:{active:{type:Boolean}},setup(a){const s=a,n=We("sokoban"),l=new Map,t=h(0),u=G(()=>Re[t.value]),o=G(()=>u.value.levels),i=G(()=>o.value.filter(C=>n.best(C.id)!==void 0).length),v=h(0),p=h(0),b=h(0),d=h(!0),c=G(()=>o.value[v.value]),r=h(Xe(c.value.map)),L=G(()=>r.value.width>12||r.value.height>14),y=G(()=>({width:r.value.width*32+11,height:r.value.height*32+11})),A=h([]),X=G(()=>ht(r.value)),K=G(()=>yt(r.value)),M=G(()=>r.value.boxes.filter(C=>r.value.goals.includes(C)).length),P=h("把所有箱子推到圆点上。只能推，不能拉。");function R(C=v.value){!Number.isInteger(C)||!o.value[C]||(v.value=C,r.value=Xe(c.value.map),A.value=[],p.value=b.value=0,d.value=!0,P.value="把所有箱子推到圆点上。只能推，不能拉。")}function w(C){C===t.value||!Number.isInteger(C)||!Re[C]||(l.set(u.value.id,v.value),t.value=C,R(l.get(u.value.id)??0))}function g(C){if(!s.active||X.value)return;const E=bt(r.value,C);if(E.board===r.value){P.value="这边被挡住了，换一个方向试试。";return}A.value=[...A.value.slice(-499),{board:r.value,pushes:b.value}],r.value=E.board,p.value++,E.pushed&&b.value++,P.value="留一点转身空间，慢慢把箱子送回家。",X.value&&(d.value=n.save(c.value.id,p.value))}function S(){if(!s.active)return;const C=A.value.pop();C&&(r.value=C.board,b.value=C.pushes,p.value--,P.value="已同时还原人物与箱子位置。")}function q(C){if(C.isComposing||C.altKey||C.ctrlKey||C.metaKey)return;const E={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"}[C.key];E&&(C.preventDefault(),g(E))}return(C,E)=>{const Y=ce;return m(),$("section",St,[E[10]||(E[10]=$e('<header class="game-heading" data-v-9eabc9a7><div data-v-9eabc9a7><p class="game-eyebrow" data-v-9eabc9a7>A LITTLE PUSH, A LITTLE PLAN</p><h2 id="sokoban-title" data-v-9eabc9a7>小小推箱子</h2><p class="game-description" data-v-9eabc9a7>想好站在哪里，再把每个箱子送回家。</p></div><span class="game-stamp" data-v-9eabc9a7>▣</span></header>',1)),e("div",At,[(m(!0),$(z,null,H(F(Re),(B,_)=>(m(),$("button",{key:B.id,type:"button",class:O({selected:_===t.value}),"aria-pressed":_===t.value,onClick:W=>w(_)},f(B.name)+" · "+f(B.levels.length)+" 关 ",11,Et))),128))]),e("p",Pt,f(u.value.author)+" · 已通关 "+f(i.value)+" / "+f(o.value.length),1),T(Je,{levels:o.value,current:v.value,best:F(n).best,onChange:R},null,8,["levels","current","best"]),e("div",Ot,[e("div",null,[E[3]||(E[3]=e("small",null,"移动步数",-1)),e("strong",null,f(p.value),1)]),e("div",null,[E[4]||(E[4]=e("small",null,"推动次数",-1)),e("strong",null,f(b.value),1)]),e("div",null,[E[5]||(E[5]=e("small",null,"箱子归位",-1)),e("strong",null,[D(f(M.value),1),e("span",null,"/ "+f(r.value.boxes.length),1)])])]),L.value?(m(),$("p",Bt," 全图预览 · "+f(r.value.width)+" 列 × "+f(r.value.height)+" 行 ",1)):J("",!0),e("div",Nt,[(m(),$("svg",{class:O(["sokoban-board",{"large-map":L.value}]),viewBox:`0 0 ${y.value.width} ${y.value.height}`,width:y.value.width,height:y.value.height,preserveAspectRatio:"xMidYMid meet",role:"group",tabindex:"0","aria-label":"推箱子地图，方向键或 WASD 移动人物，也可使用下方方向按钮",onKeydown:q},[e("rect",{class:"board-frame",width:y.value.width,height:y.value.height,rx:"14"},null,8,Rt),(m(!0),$(z,null,H(r.value.width*r.value.height,(B,_)=>(m(),$("g",{key:_,class:O(["sokoban-cell",{wall:r.value.walls.includes(_),void:r.value.voids.includes(_),goal:r.value.goals.includes(_),box:r.value.boxes.includes(_),player:r.value.player===_,home:r.value.boxes.includes(_)&&r.value.goals.includes(_),stuck:K.value.includes(_)}]),transform:`translate(${_%r.value.width*32+7} ${Math.floor(_/r.value.width)*32+7})`,role:"img","aria-hidden":r.value.voids.includes(_)||void 0,"aria-label":`第 ${Math.floor(_/r.value.width)+1} 行第 ${_%r.value.width+1} 列，${r.value.walls.includes(_)?"墙":r.value.player===_?"人物":r.value.boxes.includes(_)?r.value.goals.includes(_)?"已归位箱子":"箱子":r.value.goals.includes(_)?"目标":"地面"}`},[E[8]||(E[8]=e("rect",{class:"cell-tile",width:"29",height:"29",rx:"5"},null,-1)),r.value.walls.includes(_)?(m(),$("path",Kt)):J("",!0),r.value.goals.includes(_)?(m(),$("circle",Ut)):J("",!0),r.value.boxes.includes(_)?(m(),$("g",qt,[E[6]||(E[6]=e("rect",{class:"box-tile",x:"2",y:"2",width:"25",height:"25",rx:"3"},null,-1)),e("path",{class:"box-mark",d:r.value.goals.includes(_)?"M8 15l4 4 9-10":"M9 9l11 11M20 9 9 20"},null,8,Ft)])):J("",!0),r.value.player===_?(m(),$("g",Vt,E[7]||(E[7]=[e("circle",{class:"player-token",cx:"14.5",cy:"14.5",r:"10.5"},null,-1),e("circle",{class:"player-dot",cx:"14.5",cy:"14.5",r:"3"},null,-1)]))):J("",!0),K.value.includes(_)?(m(),$("rect",zt)):J("",!0)],10,Gt))),128))],42,Dt))]),T($n,{label:"推箱子方向控制",disabled:X.value,onMove:g},null,8,["disabled"]),e("p",{class:O(["game-status",{success:X.value}]),"aria-live":"polite"},f(X.value?`全部归位！用了 ${p.value} 步、推动 ${b.value} 次。${d.value?"成绩已保存。":"成绩保存失败，可重试。"}`:K.value.length?"有箱子进入非目标墙角，已用虚线标出；可以撤销或重开。":P.value),3),e("div",Xt,[e("button",{type:"button",disabled:!A.value.length,onClick:S}," 撤销一步",8,Yt),e("button",{type:"button",onClick:E[0]||(E[0]=B=>R())},[T(Y,{name:"replay"}),E[9]||(E[9]=D("重开本关"))]),X.value&&!d.value?(m(),$("button",{key:0,type:"button",onClick:E[1]||(E[1]=B=>d.value=F(n).save(c.value.id,p.value))}," 重试保存")):J("",!0),X.value&&v.value<o.value.length-1?(m(),$("button",{key:1,type:"button",class:"game-primary",onClick:E[2]||(E[2]=B=>R(v.value+1))}," 下一关 → ")):J("",!0)]),E[11]||(E[11]=e("p",{class:"game-footnote sokoban-note"}," 虚线提示仅识别墙角死局 · 其他卡住的情况也可撤销 · 不限时间 ",-1)),u.value.id==="microban"?(m(),$("p",jt," Microban © David W. Skinner · sasquatch@bentonrea.com ")):J("",!0),T(de,{active:X.value&&C.active},null,8,["active"])])}}});const Wt=re(Ht,[["__scopeId","data-v-9eabc9a7"]]),U=(a,s,n,l,t)=>({id:a,x:s,y:n,length:l,axis:t}),xe=[{id:"first-exit",name:"让一条路",blocks:[U("target",0,2,2,"h"),U("a",2,1,2,"v"),U("b",4,2,2,"v")]},{id:"make-room",name:"挪出空间",blocks:[U("target",1,2,2,"h"),U("a",0,0,2,"h"),U("b",0,1,3,"v"),U("c",3,0,3,"v"),U("d",4,1,2,"h"),U("e",4,2,3,"v"),U("f",1,3,2,"h"),U("g",2,4,2,"h")]},{id:"crossroads",name:"交错之间",blocks:[U("target",0,2,2,"h"),U("a",5,2,2,"v"),U("b",2,0,2,"h"),U("c",1,0,2,"v"),U("d",0,4,2,"v"),U("e",4,4,2,"h"),U("f",4,1,2,"v"),U("g",3,2,3,"v"),U("h",5,0,2,"v")]},{id:"detour",name:"先绕个弯",blocks:[U("target",0,2,2,"h"),U("a",5,1,3,"v"),U("b",2,4,2,"v"),U("c",4,5,2,"h"),U("d",2,2,2,"v"),U("e",1,3,2,"v"),U("f",2,0,2,"h"),U("g",4,4,2,"h"),U("h",4,2,2,"v")]},{id:"patient-turn",name:"有序通行",blocks:[U("target",0,2,2,"h"),U("a",0,5,3,"h"),U("b",4,1,2,"v"),U("c",2,0,3,"h"),U("d",4,4,2,"h"),U("e",1,0,2,"v"),U("f",2,1,3,"v"),U("g",3,1,2,"v"),U("h",2,4,2,"h")]},{id:"last-lane",name:"最后一条车道",blocks:[U("target",0,2,2,"h"),U("a",2,0,2,"v"),U("b",3,4,3,"h"),U("c",0,5,2,"h"),U("d",2,2,2,"v"),U("e",4,1,2,"h"),U("f",0,3,2,"h"),U("g",0,0,2,"v"),U("h",4,2,2,"v")]}];function _n(a){const s=new Set;return!a.length||a[0].id!=="target"||a[0].axis!=="h"||a[0].y!==2||a[0].length!==2||new Set(a.map(n=>n.id)).size!==a.length?!1:a.every(n=>{if(![n.x,n.y,n.length].every(Number.isInteger)||![2,3].includes(n.length)||!["h","v"].includes(n.axis))return!1;for(let l=0;l<n.length;l++){const t=n.x+(n.axis==="h"?l:0),u=n.y+(n.axis==="v"?l:0),o=u*6+t;if(t<0||u<0||t>=6||u>=6||s.has(o))return!1;s.add(o)}return!0})}function Ee(a,s,n){if(!a.find(t=>t.id===s)||!Number.isInteger(n)||!n||Math.abs(n)>5)return a;for(let t=Math.sign(n);Math.abs(t)<=Math.abs(n);t+=Math.sign(n)){const u=a.map(o=>o.id===s?{...o,x:o.x+(o.axis==="h"?t:0),y:o.y+(o.axis==="v"?t:0)}:o);if(!_n(u))return a}return a.map(t=>t.id===s?{...t,x:t.x+(t.axis==="h"?n:0),y:t.y+(t.axis==="v"?n:0)}:t)}const kn=a=>{var s;return((s=a[0])==null?void 0:s.x)===4};function*Jt(a,s=2e4){if(!_n(a))return null;const n=u=>u.map(o=>`${o.x},${o.y}`).join(";"),l=[{blocks:a,parent:-1}],t=new Set([n(a)]);for(let u=0;u<l.length;u++){u&&u%60===0&&(yield);const o=l[u];if(kn(o.blocks)){const i=[];let v=u;for(;l[v].move;)i.unshift(l[v].move),v=l[v].parent;return i}for(const i of o.blocks)for(const v of[-1,1])for(let p=1;p<=5;p++){const b=v*p,d=Ee(o.blocks,i.id,b);if(d===o.blocks)break;const c=n(d);if(!t.has(c)){if(l.length>=s)return null;t.add(c),l.push({blocks:d,parent:u,move:{id:i.id,delta:b}})}}}return null}async function Qt(a,s){const n=Jt(a,4e3);for(;!s();){const l=n.next();if(l.done)return l.value;await new Promise(t=>setTimeout(t,0))}return null}const Zt={class:"game-card unblock-game","aria-labelledby":"unblock-title"},es={class:"game-heading"},ns={id:"unblock-title"},as={class:"game-segments","aria-label":"解堵主题"},ls=["aria-pressed"],ts=["aria-pressed"],ss=["aria-pressed","aria-label","onFocus","onPointerdown","onClick"],os={class:"block-mark"},us={key:0,class:"car-window","aria-hidden":"true"},is={class:"game-segments","aria-label":"移动选中方块"},rs=["disabled"],vs=["disabled"],ds={class:"game-actions"},cs=["disabled"],ps=["disabled"],ms=ie({__name:"UnblockGame",props:{active:{type:Boolean}},setup(a){const s=a,n=We("unblock"),l=h(0),t=h("cars"),u=G(()=>xe[l.value]),o=h(u.value.blocks.map(B=>({...B}))),i=h(0),v=h("target"),p=h("把目标块移动到右侧出口。每次有效拖动算一步。"),b=h(!0),d=h(!1);let c=0;function r(){c++,d.value=!1}const L=h([]),y=G(()=>kn(o.value)),A=["#cb806d","#91a781","#a89ab8","#d2b675","#82a9af","#b5bd8a","#c69d7a","#99a3c1","#8eb6a2"],X=h(),K=G(()=>{var B;return(B=X.value)!=null&&B.delta?Ee(o.value,X.value.id,X.value.delta):o.value}),M=G(()=>o.value.find(B=>B.id===v.value));function P(){X.value=void 0}function R(B=l.value){!Number.isInteger(B)||!xe[B]||(P(),r(),l.value=B,o.value=u.value.blocks.map(_=>({..._})),i.value=0,L.value=[],v.value="target",b.value=!0,p.value="目标是右侧出口；方块只能沿长边方向移动。")}function w(B,_){if(!s.active||y.value)return;P();const W=Ee(o.value,B,_);W!==o.value&&(r(),L.value=[...L.value.slice(-199),o.value],o.value=W,v.value=B,i.value++,p.value="移动成功，继续为目标块腾出位置。",y.value&&(b.value=n.save(u.value.id,i.value)))}function g(){if(!s.active)return;P(),r();const B=L.value.pop();B&&(o.value=B,i.value--,p.value="已撤销上一步。")}async function S(){if(!s.active||y.value||d.value)return;P(),d.value=!0;const B=++c,_=await Qt(o.value,()=>B!==c);if(B!==c||!s.active)return;d.value=!1;const W=_==null?void 0:_[0];if(!W){p.value="本次提示计算达到上限，请尝试撤销或自行调整。";return}v.value=W.id;const x=o.value.find(k=>k.id===W.id);p.value=`试试把选中的${W.id==="target"?"目标块":"方块"}向${x.axis==="h"?W.delta>0?"右":"左":W.delta>0?"下":"上"}移动 ${Math.abs(W.delta)} 格。`}function q(B,_){if(!s.active||y.value||!B.isPrimary||B.button!==0)return;v.value=_.id,r();const W=B.currentTarget,x=W.parentElement.getBoundingClientRect().width;X.value={id:_.id,pointer:B.pointerId,start:_.axis==="h"?B.clientX:B.clientY,cell:x/6,delta:0},W.setPointerCapture(B.pointerId)}function C(B){if(!s.active)return P();const _=X.value;if(!_||_.pointer!==B.pointerId)return;const W=o.value.find(Q=>Q.id===_.id),x=Math.max(-5,Math.min(5,Math.round(((W.axis==="h"?B.clientX:B.clientY)-_.start)/_.cell)));let k=0;for(let Q=Math.sign(x);x&&Math.abs(Q)<=Math.abs(x)&&Ee(o.value,W.id,Q)!==o.value;Q+=Math.sign(x))k=Q;_.delta=k}function E(B){if(!s.active)return P();if(!X.value||X.value.pointer!==B.pointerId)return;C(B);const{id:_,delta:W}=X.value;P(),w(_,W)}function Y(B){if(B.isComposing||B.altKey||B.ctrlKey||B.metaKey)return;const _=(M.value.axis==="h"?{ArrowLeft:-1,ArrowRight:1}:{ArrowUp:-1,ArrowDown:1})[B.key];_!==void 0&&(B.preventDefault(),P(),w(v.value,_))}return ve(()=>s.active,B=>{B||(P(),r())}),ve(t,P),ke(()=>{P(),r()}),(B,_)=>{const W=ce;return m(),$("section",Zt,[e("header",es,[e("div",null,[_[7]||(_[7]=e("p",{class:"game-eyebrow"},"MAKE A LITTLE ROOM TO MOVE",-1)),e("h2",ns,f(t.value==="cars"?"交通堵塞":"滑块解堵"),1),_[8]||(_[8]=e("p",{class:"game-description"},"挪一挪，让红色目标块找到出口。",-1))]),_[9]||(_[9]=e("span",{class:"game-stamp"},"⇥",-1))]),e("div",as,[e("button",{type:"button",class:O({selected:t.value==="cars"}),"aria-pressed":t.value==="cars",onClick:_[0]||(_[0]=x=>t.value="cars")}," 交通堵塞 · 汽车",10,ls),e("button",{type:"button",class:O({selected:t.value==="wood"}),"aria-pressed":t.value==="wood",onClick:_[1]||(_[1]=x=>t.value="wood")}," Unblock · 木块 ",10,ts)]),T(Je,{levels:F(xe),current:l.value,best:F(n).best,onChange:R},null,8,["levels","current","best"]),e("div",{class:O(["unblock-frame",t.value])},[_[10]||(_[10]=e("span",{class:"exit-label","aria-hidden":"true"},"出口 →",-1)),e("div",{class:"unblock-grid",role:"group","aria-label":"6乘6解堵棋盘，点选方块后拖动、按方向键或使用下方按钮",onKeydown:Y},[(m(!0),$(z,null,H(K.value,(x,k)=>(m(),$("button",{key:x.id,type:"button",class:O(["slide-block",{selected:v.value===x.id,target:x.id==="target",horizontal:x.axis==="h",vertical:x.axis==="v"}]),style:ae({left:`calc(${x.x/6*100}% + 4px)`,top:`calc(${x.y/6*100}% + 4px)`,width:`calc(${(x.axis==="h"?x.length:1)/6*100}% - 8px)`,height:`calc(${(x.axis==="v"?x.length:1)/6*100}% - 8px)`,"--block-color":A[k%A.length]}),"aria-pressed":v.value===x.id,"aria-label":`${x.id==="target"?"目标块":"方块"+k}，第 ${x.y+1} 行第 ${x.x+1} 列，长 ${x.length} 格，可${x.axis==="h"?"左右":"上下"}移动`,onFocus:Q=>v.value=x.id,onPointerdown:Q=>q(Q,x),onPointermove:C,onPointerup:E,onPointercancel:P,onLostpointercapture:P,onClick:Q=>v.value=x.id},[e("span",os,f(x.id==="target"?"★":k),1),t.value==="cars"?(m(),$("i",us)):J("",!0)],46,ss))),128))],32)],2),e("div",is,[e("button",{type:"button",disabled:y.value,onClick:_[2]||(_[2]=x=>w(v.value,-1))},f(M.value.axis==="h"?"← 向左":"↑ 向上"),9,rs),e("button",{type:"button",disabled:y.value,onClick:_[3]||(_[3]=x=>w(v.value,1))},f(M.value.axis==="h"?"向右 →":"向下 ↓"),9,vs)]),e("p",{class:O(["game-status",{success:y.value}]),"aria-live":"polite"},f(y.value?`出口到了！用了 ${i.value} 步。${b.value?"成绩已保存。":"成绩保存失败，可重试。"}`:`${i.value} 步 · ${p.value}`),3),e("div",ds,[e("button",{type:"button",disabled:!L.value.length,onClick:g}," 撤销一步",8,cs),e("button",{type:"button",disabled:y.value||d.value,onClick:S},f(d.value?"正在想下一步…":"下一步提示"),9,ps),e("button",{type:"button",onClick:_[4]||(_[4]=x=>R())},[T(W,{name:"replay"}),_[11]||(_[11]=D("重开本关"))]),y.value&&!b.value?(m(),$("button",{key:0,type:"button",onClick:_[5]||(_[5]=x=>b.value=F(n).save(u.value.id,i.value))}," 重试保存")):J("",!0),y.value&&l.value<F(xe).length-1?(m(),$("button",{key:1,type:"button",class:"game-primary",onClick:_[6]||(_[6]=x=>R(l.value+1))}," 下一关 → ")):J("",!0)]),_[12]||(_[12]=e("p",{class:"game-footnote unblock-note"}," 汽车和木块共享进度 · 横块左右移动，竖块上下移动 · 拖到出口即完成 ",-1)),T(de,{active:y.value&&B.active},null,8,["active"])])}}});const $s=re(ms,[["__scopeId","data-v-efda1854"]]),ye=(a,s,n,l,t)=>{const u=t.reduce((i,v)=>i+v[0],0)/t.length,o=t.reduce((i,v)=>i+v[1],0)/t.length;return{id:a,kind:s,label:n,color:l,points:t.map(([i,v])=>({x:i-u,y:v-o}))}},ue=[ye("large-a","large","大三角一","#70987a",[[0,0],[4,0],[2,2]]),ye("large-b","large","大三角二","#d3a275",[[0,0],[4,0],[2,2]]),ye("medium","medium","中三角","#b4a0c7",[[0,0],[2,0],[0,2]]),ye("square","square","正方形","#e0bd60",[[0,0],[1,-1],[2,0],[1,1]]),ye("small-a","small","小三角一","#83b3bd",[[0,0],[2,0],[1,1]]),ye("small-b","small","小三角二","#d18d88",[[0,0],[2,0],[1,1]]),ye("parallelogram","parallelogram","平行四边形","#a5b66d",[[0,0],[1,-1],[3,-1],[2,0]])],le=(a,s,n=0,l=!1)=>({x:a,y:s,angle:n,flipped:l}),vn=[le(2,2/3),le(2/3,2,270),le(10/3,10/3,180),le(2,3),le(1,11/3,180),le(8/3,2,90),le(3.5,1.5,90,!0)],fs=[le(-2,2/3),le(2,2/3),le(-2/3,4/3,180),le(0,3),le(-1,7/3),le(4/3,2,270),le(.5,1.5,90)],gs=[le(2,2/3),le(6,10/3,180),le(10/3,4/3,180),le(4,3),le(3,7/3),le(16/3,2,270),le(4.5,1.5,90)];function Ie(a,s,n,l,t,u=0){const o=u*Math.PI/180;return{id:a,name:s,scale:t,targets:n.map(i=>{const v=(i.x-l.x)*t,p=(i.y-l.y)*t;return{x:240+v*Math.cos(o)-p*Math.sin(o),y:175+v*Math.sin(o)+p*Math.cos(o),angle:i.angle+u,flipped:i.flipped}})}}const Se=[Ie("square","四四方方",vn,{x:2,y:2},46),Ie("triangle","一座山峰",fs,{x:0,y:2},40),Ie("sail","顺风而行",gs,{x:4,y:2},40),Ie("diamond","闪亮菱形",vn,{x:2,y:2},46,45)];function Le(a,s,n){const l=s.angle*Math.PI/180;return a.points.map(t=>{const u=t.x*n*(s.flipped?-1:1),o=t.y*n;return{x:s.x+u*Math.cos(l)-o*Math.sin(l),y:s.y+u*Math.sin(l)+o*Math.cos(l)}})}function bs(a,s,n,l){const t=ue[s];if(!t)return-1;const u=Le(t,n,a.scale);return a.targets.findIndex((o,i)=>{if(l.includes(i)||ue[i].kind!==t.kind||Math.hypot(o.x-n.x,o.y-n.y)>18)return!1;const v=Le(ue[i],o,a.scale);return u.every(p=>v.some(b=>Math.hypot(p.x-n.x+o.x-b.x,p.y-n.y+o.y-b.y)<.1))})}const hs={class:"game-card tangram-game","aria-labelledby":"tangram-title"},ys=["points","stroke","stroke-width","stroke-dasharray"],_s=["points","fill","aria-label","aria-pressed","onPointerdown"],ks={class:"tangram-picker","aria-label":"选中拼块"},ws=["aria-pressed","disabled","aria-label","onClick"],Ls={class:"game-segments","aria-label":"拼块变换"},Cs=["disabled"],Ms=["disabled"],Ts=["disabled"],xs={class:"game-actions"},Is=["disabled"],Ss=["disabled"],As=["aria-pressed"],Es=ie({__name:"TangramGame",props:{active:{type:Boolean}},setup(a){const s=a,n=We("tangram"),l=h(0),t=h(0),u=h(0),o=h(!1),i=h(-1),v=h(!0),p=G(()=>Se[l.value]),b=()=>[{x:120,y:405,angle:0,flipped:!1},{x:360,y:405,angle:180,flipped:!1},{x:70,y:520,angle:0,flipped:!1},{x:170,y:520,angle:0,flipped:!1},{x:265,y:500,angle:0,flipped:!1},{x:360,y:510,angle:180,flipped:!1},{x:400,y:570,angle:0,flipped:!1}],d=h(b()),c=h(Array(7).fill(-1)),r=G(()=>c.value.every(I=>I>=0)),L=G(()=>c.value.filter(I=>I>=0).length),y=h(),A=h("先选拼块，旋转到合适角度，再拖到轮廓里；接近时会自动吸附。"),X=h([]),K=h(),M=G(()=>[...ue.keys()].filter(I=>I!==t.value).concat(t.value)),P=()=>({poses:d.value.map(I=>({...I})),slots:[...c.value],moves:u.value});function R(I=P()){X.value=[...X.value.slice(-199),I]}function w(I){d.value=I.poses,c.value=I.slots,u.value=I.moves}function g(){K.value&&w(K.value.before),K.value=void 0}function S(I=l.value){!Number.isInteger(I)||!Se[I]||(g(),l.value=I,d.value=b(),c.value=Array(7).fill(-1),X.value=[],t.value=u.value=0,i.value=-1,v.value=!0,A.value="这是辅助拼图模式，按预设拼法吸附；可以打开参考分割线。")}function q(I,N){return Le(ue[I],N,p.value.scale).map(Z=>`${Z.x},${Z.y}`).join(" ")}function C(){const I=t.value,N=bs(p.value,I,d.value[I],c.value.filter(Z=>Z>=0));N<0||(d.value[I]={...d.value[I],x:p.value.targets[N].x,y:p.value.targets[N].y},c.value[I]=N,i.value=-1,A.value=`${ue[I].label}已归位。`,r.value&&(v.value=n.save(p.value.id,u.value)))}function E(I){const N=t.value;!s.active||r.value||c.value[N]>=0||Le(ue[N],I,p.value.scale).some(V=>V.x<3||V.x>477||V.y<3||V.y>607)||(R(),d.value[N]=I,u.value++,C())}function Y(I){g(),E(B({...d.value[t.value],angle:(d.value[t.value].angle+I+360)%360}))}function B(I){const N=Le(ue[t.value],I,p.value.scale),Z=N.map(ne=>ne.x),V=N.map(ne=>ne.y);return{...I,x:I.x+Math.max(0,3-Math.min(...Z))-Math.max(0,Math.max(...Z)-477),y:I.y+Math.max(0,3-Math.min(...V))-Math.max(0,Math.max(...V)-607)}}function _(){g(),ue[t.value].kind==="parallelogram"&&E({...d.value[t.value],flipped:!d.value[t.value].flipped})}function W(){if(!s.active)return;g();const I=X.value.pop();I&&(w(I),i.value=-1,A.value="已撤销上一步。")}function x(I){var V;const N=(V=y.value)==null?void 0:V.getScreenCTM();if(!N)return;const Z=new DOMPoint(I.clientX,I.clientY).matrixTransform(N.inverse());return{x:Z.x,y:Z.y}}function k(I,N){var V;if(!s.active||r.value||!I.isPrimary||I.button!==0||c.value[N]>=0)return;g(),t.value!==N&&(i.value=-1),t.value=N;const Z=x(I);Z&&(K.value={pointer:I.pointerId,start:Z,before:P()},(V=y.value)==null||V.setPointerCapture(I.pointerId))}function Q(I){if(!s.active)return g();const N=K.value,Z=x(I);if(!N||N.pointer!==I.pointerId||!Z)return;const V=t.value,ne=N.before.poses[V],Ce={...ne,x:ne.x+Z.x-N.start.x,y:ne.y+Z.y-N.start.y},Qe=Le(ue[V],Ce,p.value.scale),Ze=Qe.map(Be=>Be.x),en=Qe.map(Be=>Be.y);Ce.x+=Math.max(0,3-Math.min(...Ze))-Math.max(0,Math.max(...Ze)-477),Ce.y+=Math.max(0,3-Math.min(...en))-Math.max(0,Math.max(...en)-607),d.value[V]=Ce}function j(I){if(!s.active)return g();if(!K.value||K.value.pointer!==I.pointerId)return;Q(I);const N=K.value.before,Z=N.poses[t.value],V=d.value[t.value];if(K.value=void 0,Math.hypot(Z.x-V.x,Z.y-V.y)<1){d.value[t.value]={...Z};return}R(N),u.value++,C()}function ee(){!s.active||r.value||(g(),c.value[t.value]>=0&&(t.value=c.value.findIndex(I=>I<0)),i.value=p.value.targets.findIndex((I,N)=>!c.value.includes(N)&&ue[N].kind===ue[t.value].kind),A.value="虚线是选中拼块的参考位置；旋转或翻面后，把它拖进去。")}function Oe(I){if(!s.active||I.isComposing||I.altKey||I.ctrlKey||I.metaKey)return;const N={ArrowUp:[0,-5],ArrowDown:[0,5],ArrowLeft:[-5,0],ArrowRight:[5,0]}[I.key];if(N){I.preventDefault(),g();const Z=d.value[t.value];E({...Z,x:Z.x+N[0],y:Z.y+N[1]})}else["q","e","f"].includes(I.key.toLowerCase())&&(I.preventDefault(),I.key.toLowerCase()==="f"?_():Y(I.key.toLowerCase()==="q"?-45:45))}return ve(()=>s.active,I=>{I||g()}),(I,N)=>{const Z=ce;return m(),$("section",hs,[N[11]||(N[11]=$e('<header class="game-heading" data-v-11b8a627><div data-v-11b8a627><p class="game-eyebrow" data-v-11b8a627>SEVEN PIECES, A LITTLE POSSIBILITY</p><h2 id="tangram-title" data-v-11b8a627>七巧时光</h2><p class="game-description" data-v-11b8a627>转个方向，让七块小形状拼成新的模样。</p></div><span class="game-stamp" data-v-11b8a627>◩</span></header>',1)),T(Je,{levels:F(Se),current:l.value,best:F(n).best,onChange:S},null,8,["levels","current","best"]),N[12]||(N[12]=e("p",{class:"game-footnote tangram-note"}," 辅助拼图模式 · 按预设拼法吸附 · 同形三角形可以互换 ",-1)),(m(),$("svg",{ref_key:"svg",ref:y,class:"tangram-board",viewBox:"0 0 480 610",role:"group",tabindex:"0","aria-label":"七巧板，拖动拼块；选中棋盘后方向键微调，Q E 旋转，F 翻面",onPointermove:Q,onPointerup:j,onPointercancel:g,onLostpointercapture:g,onKeydown:Oe},[N[6]||(N[6]=e("rect",{x:"5",y:"5",width:"470",height:"310",rx:"16",fill:"#f0f1e6"},null,-1)),N[7]||(N[7]=e("rect",{x:"5",y:"330",width:"470",height:"275",rx:"16",fill:"#f7f0e1"},null,-1)),N[8]||(N[8]=e("text",{x:"22",y:"30",class:"zone-label"},"拼图区域",-1)),N[9]||(N[9]=e("text",{x:"22",y:"355",class:"zone-label"},"选择下方拼块 · 拖进上方轮廓",-1)),(m(!0),$(z,null,H(p.value.targets,(V,ne)=>(m(),$("polygon",{key:`target-${ne}`,points:q(ne,V),fill:"#d9dfcd",stroke:o.value||i.value===ne?"#829275":"#d9dfcd","stroke-width":o.value||i.value===ne?1.5:.6,"stroke-dasharray":o.value||i.value===ne?"5 4":void 0},null,8,ys))),128)),(m(!0),$(z,null,H(M.value,V=>(m(),$("polygon",{key:F(ue)[V].id,points:q(V,d.value[V]),fill:F(ue)[V].color,class:O({picked:t.value===V&&c.value[V]<0,placed:c.value[V]>=0}),stroke:"#fffdf5","stroke-width":"2","stroke-linejoin":"round",role:"button","aria-label":`${F(ue)[V].label}${c.value[V]>=0?"，已归位":"，可拖动旋转"}`,"aria-pressed":t.value===V,onPointerdown:ge(ne=>k(ne,V),["prevent"])},[e("title",null,f(F(ue)[V].label),1)],42,_s))),128))],544)),e("div",ks,[(m(!0),$(z,null,H(F(ue),(V,ne)=>(m(),$("button",{key:V.id,type:"button",class:O({selected:t.value===ne}),"aria-pressed":t.value===ne,disabled:c.value[ne]>=0,"aria-label":V.label,style:ae({"--piece-color":V.color}),onClick:Ce=>{g(),t.value=ne,i.value=-1}},f(c.value[ne]>=0?"✓":ne+1),15,ws))),128))]),e("div",Ls,[e("button",{type:"button",disabled:c.value[t.value]>=0,onClick:N[0]||(N[0]=V=>Y(-45))}," ↶ 左转 45°",8,Cs),e("button",{type:"button",disabled:c.value[t.value]>=0,onClick:N[1]||(N[1]=V=>Y(45))}," 右转 45° ↷",8,Ms),e("button",{type:"button",disabled:c.value[t.value]>=0||F(ue)[t.value].kind!=="parallelogram",onClick:_}," 翻面 ",8,Ts)]),e("p",{class:O(["game-status",{success:r.value}]),"aria-live":"polite"},f(r.value?`七块都归位了！用了 ${u.value} 步。${v.value?"成绩已保存。":"成绩保存失败，可重试。"}`:`${L.value} / 7 已归位 · ${A.value}`),3),e("div",xs,[e("button",{type:"button",disabled:!X.value.length,onClick:W}," 撤销一步",8,Is),e("button",{type:"button",disabled:r.value,onClick:ee},"位置提示",8,Ss),e("button",{type:"button","aria-pressed":o.value,onClick:N[2]||(N[2]=V=>o.value=!o.value)},f(o.value?"隐藏分割线":"查看分割线"),9,As),e("button",{type:"button",onClick:N[3]||(N[3]=V=>S())},[T(Z,{name:"replay"}),N[10]||(N[10]=D("重开本关"))]),r.value&&!v.value?(m(),$("button",{key:0,type:"button",onClick:N[4]||(N[4]=V=>v.value=F(n).save(p.value.id,u.value))}," 重试保存")):J("",!0),r.value&&l.value<F(Se).length-1?(m(),$("button",{key:1,type:"button",class:"game-primary",onClick:N[5]||(N[5]=V=>S(l.value+1))}," 下一关 → ")):J("",!0)]),T(de,{active:r.value&&I.active},null,8,["active"])])}}});const Ps=re(Es,[["__scopeId","data-v-11b8a627"]]),Os={class:"fun-page"},Bs={class:"fun-hero"},Ns={class:"hero-copy"},Ds={class:"hero-note"},Rs={class:"game-picker","aria-label":"娱乐模式"},Gs=["aria-pressed","onClick"],Ks={class:"choice-symbol","aria-hidden":"true"},Us={class:"choice-copy"},qs={class:"choice-number","aria-hidden":"true"},Fs={class:"game-stage"},Vs={key:0,class:"wheel-layout"},zs={class:"game-card wheel-section","aria-labelledby":"wheel-title"},Xs={class:"wheel-wrap"},Ys={class:"wheel-rim"},js=["disabled"],Hs={class:"wheel-answer"},Ws={class:"game-card wheel-settings"},Js=["disabled"],Qs=["disabled"],Zs=["disabled"],eo={key:0,class:"saved-templates"},no=["disabled","onClick"],ao=["aria-label","onClick"],lo={key:1,class:"spin-history"},to={key:0,class:"game-card memory-section","aria-labelledby":"memory-title"},so={class:"game-stats"},oo={class:"memory-grid"},uo=["disabled","aria-label","aria-pressed","onClick"],io={class:"memory-inner","aria-hidden":"true"},ro={class:"memory-front"},vo={key:0},co={class:"game-actions"},po={key:0,class:"game-card focus-card","aria-labelledby":"focus-title"},mo={class:"focus-face-inner"},$o={role:"timer","aria-label":"专注剩余时间"},fo={class:"game-segments focus-presets","aria-label":"专注时长"},go=["aria-pressed","onClick"],bo={class:"game-actions"},_o=ie({name:"FunPage",__name:"FunPage",setup(a){const s=Mn(),n=pn(),l=Cn(),t=[{id:"wheel",name:"幸运转盘",symbol:"✦",caption:"把选择交给运气",tone:"sage"},{id:"dice",name:"随机小工具",symbol:"⚄",caption:"摇一点小惊喜",tone:"peach"},{id:"puzzle",name:"数字华容道",symbol:"▦",caption:"让数字各就各位",tone:"sand"},{id:"2048",name:"2048",symbol:"2ⁿ",caption:"碰一碰，再加倍",tone:"peach"},{id:"guess",name:"猜数字",symbol:"?",caption:"跟着直觉找答案",tone:"sage"},{id:"tic-tac-toe",name:"井字棋",symbol:"○×",caption:"一起圈圈叉叉",tone:"lilac"},{id:"memory",name:"记忆翻牌",symbol:"◇",caption:"记住每一次相遇",tone:"lilac"},{id:"mines",name:"轻松扫雷",symbol:"⚑",caption:"给每一步一点推理",tone:"sage"},{id:"lights",name:"翻灯谜阵",symbol:"☼",caption:"换个角度，点亮思路",tone:"sand"},{id:"flood",name:"色彩漫游",symbol:"◈",caption:"让喜欢的颜色长大",tone:"peach"},{id:"bubbles",name:"泡泡消消乐",symbol:"◌",caption:"啪一下，烦恼少一点",tone:"lilac"},{id:"sudoku",name:"慢慢数独",symbol:"▤",caption:"给数字找个位置",tone:"sage"},{id:"sokoban",name:"小小推箱子",symbol:"▣",caption:"想一想，再推一步",tone:"sand"},{id:"unblock",name:"滑块解堵",symbol:"⇥",caption:"汽车木块，挪出一条路",tone:"peach"},{id:"tangram",name:"七巧时光",symbol:"◩",caption:"七块形状，拼点想象",tone:"lilac"},{id:"focus",name:"专注时光",symbol:"◷",caption:"留一刻给自己",tone:"sand"}],u=h("wheel");ve(()=>s.query.tool,x=>{u.value=typeof x=="string"&&t.some(k=>k.id===x)?x:"wheel"},{immediate:!0});const o=h(`读一本书
听一首歌
出门走走
画一幅画
整理书桌
休息一会`),i=h(""),v=h(""),p=h(!1),b=h(0),d=h([]);let c;const r=G(()=>o.value.split(/\n/).map(x=>x.trim()).filter(Boolean)),L=["#d3e4c5","#f4dfa9","#e3d9ee","#edc4ad","#bddbd1","#ede5c8"],y=G(()=>`conic-gradient(${r.value.map((x,k)=>`${L[k%L.length]} ${k/r.value.length*100}% ${(k+1)/r.value.length*100}%`).join(",")})`);function A(){if(p.value)return;if(r.value.length<2||r.value.length>12||r.value.some(j=>j.length>40)){Te("请输入 2～12 个选项，每个选项不超过 40 字。");return}const x=me(r.value.length),k=r.value[x],Q=360-(x+.5)*360/r.value.length;b.value+=360*5+(Q-b.value%360+360)%360,p.value=!0,v.value="",c=window.setTimeout(()=>{v.value=k,d.value.unshift(k),d.value=d.value.slice(0,8),p.value=!1},window.matchMedia("(prefers-reduced-motion: reduce)").matches?50:3100)}function X(){if(!i.value.trim()){Te("请先给模板起个名字。");return}if(r.value.length<2||r.value.length>12||r.value.some(x=>x.length>40)){Te("模板需要 2～12 个选项，每个选项不超过 40 字。");return}Ge(()=>n.commit(x=>{x.templates.push({id:Tn(),name:i.value.trim(),options:[...r.value]})}))&&Te("模板已保存")}async function K(x){await an({title:"删除这个模板？"}).then(()=>!0,()=>!1)&&Ge(()=>n.commit(Q=>{Q.templates=Q.templates.filter(j=>j.id!==x)}))}ve(o,()=>{clearTimeout(c),p.value=!1,v.value="",b.value=0});const M=["☀","✿","♫","★","☂","☾"],P=h(we([...M,...M])),R=h([]),w=h([]),g=h(0),S=h(!1),q=h(0);let C;function E(x){if(!(S.value||R.value.includes(x)||w.value.includes(x))&&(R.value.push(x),R.value.length===2)){g.value++;const[k,Q]=R.value;P.value[k]===P.value[Q]?(w.value.push(k,Q),R.value=[]):(S.value=!0,C=window.setTimeout(()=>{R.value=[],S.value=!1},800))}}function Y(){clearTimeout(C),P.value=we([...M,...M]),R.value=[],w.value=[],g.value=0,S.value=!1,q.value++}ve(u,(x,k)=>{k==="wheel"&&p.value&&(clearTimeout(c),p.value=!1,b.value=0),k==="memory"&&S.value&&(clearTimeout(C),R.value=[],S.value=!1)});const B=G(()=>Math.min(360,Math.max(0,(1-l.remaining/(l.minutes*6e4))*360))),_=G(()=>{const x=Math.ceil(l.remaining/1e3);return`${String(Math.floor(x/60)).padStart(2,"0")}:${String(x%60).padStart(2,"0")}`});async function W(x=l.minutes){(l.state==="running"||l.state==="paused")&&!await an({title:"重新开始专注？",message:"当前倒计时将被重置。"}).then(()=>!0,()=>!1)||l.reset(x)}return ke(()=>{clearTimeout(c),clearTimeout(C)}),(x,k)=>{const Q=ce;return m(),$("div",Os,[e("header",Bs,[e("div",Ns,[k[5]||(k[5]=e("p",{class:"game-eyebrow"},[e("span",{class:"hero-dot"}),D(" LITTLE BREAK, BIG SMILE ")],-1)),k[6]||(k[6]=e("h1",null,[D("今天，玩点"),e("span",null,"开心的。")],-1)),k[7]||(k[7]=e("p",null,"把忙碌暂停一下，让小小的快乐发生。",-1)),e("span",Ds,f(t.length)+" 种小乐趣 · 随时来一局",1)]),k[8]||(k[8]=$e('<div class="hero-art" aria-hidden="true"><span class="art-orbit"></span><span class="art-spark spark-one">✦</span><span class="art-tile art-tile-back">8</span><span class="art-tile art-tile-front">16<small>JUST PLAY</small></span><span class="art-spark spark-two">✳</span><span class="art-dot"></span></div>',1))]),e("nav",Rs,[(m(),$(z,null,H(t,(j,ee)=>e("button",{key:j.id,type:"button",class:O(["game-choice",`tone-${j.tone}`,{selected:u.value===j.id}]),"aria-pressed":u.value===j.id,onClick:Oe=>u.value=j.id},[e("span",Ks,f(j.symbol),1),e("span",Us,[e("strong",null,f(j.name),1),e("small",null,f(j.caption),1)]),e("span",qs,f(String(ee+1).padStart(2,"0")),1)],10,Gs)),64))]),e("div",Fs,[T(se,{name:"game-panel"},{default:te(()=>[u.value==="wheel"?(m(),$("div",Vs,[e("section",zs,[k[11]||(k[11]=e("header",{class:"game-heading"},[e("div",null,[e("p",{class:"game-eyebrow"},"LET CHANCE DECIDE"),e("h2",{id:"wheel-title"},"下一件开心的小事"),e("p",{class:"game-description"},"犹豫的时候，让一点运气推你一把。")]),e("span",{class:"game-stamp"},"✦")],-1)),e("div",Xs,[k[9]||(k[9]=e("span",{class:"wheel-pointer","aria-hidden":"true"},null,-1)),e("div",Ys,[e("div",{class:O(["wheel",{spinning:p.value}]),style:ae({background:r.value.length?y.value:"#e8edde",transform:`rotate(${b.value}deg)`}),"aria-hidden":"true"},[(m(!0),$(z,null,H(r.value.slice(0,12),(j,ee)=>(m(),$("span",{key:ee,style:ae({transform:`rotate(${(ee+.5)*360/r.value.length}deg) translateY(calc(var(--wheel-size) * -.33))`})},f(j.slice(0,6)),5))),128))],6)]),k[10]||(k[10]=e("span",{class:"wheel-hub","aria-hidden":"true"},"✦",-1))]),e("button",{type:"button",class:"game-primary",disabled:p.value,onClick:A},[T(Q,{name:"replay"}),D(f(p.value?"好运转动中…":"帮我选一个"),1)],8,js),e("div",Hs,[T(se,{name:"answer-pop",mode:"out-in"},{default:te(()=>[(m(),$("p",{key:v.value,class:O(["game-status",{success:v.value}]),"aria-live":"polite"},f(v.value||(p.value?"你的下一件小事，马上揭晓。":"每个选项，机会都一样。")),3))]),_:1})]),k[12]||(k[12]=e("p",{class:"game-footnote"},"个人娱乐选择工具，无真实奖品或中奖动态",-1)),T(de,{active:!!v.value},null,8,["active"])]),e("section",Ws,[k[19]||(k[19]=e("p",{class:"game-eyebrow"},"MAKE IT YOURS",-1)),k[20]||(k[20]=e("h2",null,"装进你的灵感",-1)),k[21]||(k[21]=e("p",{class:"game-description"},"想吃的、想做的，都可以放进转盘。",-1)),e("label",null,[k[13]||(k[13]=D("每行一个选项 ")),k[14]||(k[14]=e("small",null,"2～12 项，每项最多 40 字",-1)),oe(e("textarea",{"onUpdate:modelValue":k[0]||(k[0]=j=>o.value=j),disabled:p.value,rows:"6",maxlength:"500"},null,8,Js),[[Me,o.value]])]),e("label",null,[k[15]||(k[15]=D("给这份选择起个名字")),oe(e("input",{"onUpdate:modelValue":k[1]||(k[1]=j=>i.value=j),maxlength:"30",placeholder:"例如：周末的小计划",disabled:p.value},null,8,Qs),[[Me,i.value]])]),e("button",{type:"button",disabled:p.value,onClick:X},[T(Q,{name:"bookmark-o"}),k[16]||(k[16]=D("保存为常用模板 "))],8,Zs),F(n).data.templates.length?(m(),$("div",eo,[k[17]||(k[17]=e("h3",null,"我的模板",-1)),(m(!0),$(z,null,H(F(n).data.templates,j=>(m(),$("div",{key:j.id,class:"template-row"},[e("button",{type:"button",disabled:p.value,onClick:ee=>{o.value=j.options.join(`
`),i.value=j.name}},[T(Q,{name:"label-o"}),D(f(j.name),1)],8,no),e("button",{type:"button",class:"remove-template","aria-label":`删除模板 ${j.name}`,onClick:ee=>K(j.id)},[T(Q,{name:"cross"})],8,ao)]))),128))])):J("",!0),d.value.length?(m(),$("div",lo,[k[18]||(k[18]=e("h3",null,"刚刚的小决定",-1)),e("ol",null,[(m(!0),$(z,null,H(d.value,(j,ee)=>(m(),$("li",{key:ee},[e("span",null,f(String(d.value.length-ee).padStart(2,"0")),1),D(f(j),1)]))),128))])])):J("",!0)])])):J("",!0)]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Fn,{active:u.value==="dice"},null,8,["active"]),[[pe,u.value==="dice"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(ga,{active:u.value==="puzzle"},null,8,["active"]),[[pe,u.value==="puzzle"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Aa,{active:u.value==="2048"},null,8,["active"]),[[pe,u.value==="2048"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(qa,null,null,512),[[pe,u.value==="guess"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(al,{active:u.value==="tic-tac-toe"},null,8,["active"]),[[pe,u.value==="tic-tac-toe"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(fl,{active:u.value==="mines"},null,8,["active"]),[[pe,u.value==="mines"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(xl,{active:u.value==="lights"},null,8,["active"]),[[pe,u.value==="lights"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Fl,{active:u.value==="flood"},null,8,["active"]),[[pe,u.value==="flood"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Jl,{active:u.value==="bubbles"},null,8,["active"]),[[pe,u.value==="bubbles"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T($t,{active:u.value==="sudoku"},null,8,["active"]),[[pe,u.value==="sudoku"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Wt,{active:u.value==="sokoban"},null,8,["active"]),[[pe,u.value==="sokoban"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T($s,{active:u.value==="unblock"},null,8,["active"]),[[pe,u.value==="unblock"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[oe(T(Ps,{active:u.value==="tangram"},null,8,["active"]),[[pe,u.value==="tangram"]])]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[u.value==="memory"?(m(),$("section",to,[k[31]||(k[31]=e("header",{class:"game-heading"},[e("div",null,[e("p",{class:"game-eyebrow"},"REMEMBER THE LITTLE THINGS"),e("h2",{id:"memory-title"},"每一次翻开，都是相遇"),e("p",{class:"game-description"}," 找出相同的图案，看看你的记忆小宇宙。 ")]),e("span",{class:"game-stamp"},"◇")],-1)),e("div",so,[e("div",null,[k[23]||(k[23]=e("small",null,"已经翻了",-1)),e("strong",null,[D(f(g.value),1),k[22]||(k[22]=e("span",null,"次",-1))])]),e("div",null,[k[25]||(k[25]=e("small",null,"找到伙伴",-1)),e("strong",null,[D(f(w.value.length/2),1),k[24]||(k[24]=e("span",null,"/ 6 对",-1))])]),e("div",null,[k[27]||(k[27]=e("small",null,"完成进度",-1)),e("strong",null,[D(f(Math.round(w.value.length/12*100)),1),k[26]||(k[26]=e("span",null,"%",-1))])])]),e("div",oo,[(m(!0),$(z,null,H(P.value,(j,ee)=>(m(),$("button",{key:`${q.value}-${ee}`,type:"button",class:O({revealed:R.value.includes(ee)||w.value.includes(ee),matched:w.value.includes(ee)}),disabled:w.value.includes(ee)||S.value||R.value.includes(ee),"aria-label":R.value.includes(ee)||w.value.includes(ee)?`图案 ${j}${w.value.includes(ee)?"，已配对":""}`:`翻开第 ${ee+1} 张`,"aria-pressed":R.value.includes(ee)||w.value.includes(ee),onClick:Oe=>E(ee)},[e("span",io,[k[28]||(k[28]=e("span",{class:"memory-back"},[D("✦"),e("small",null,"LITTLE JOY")],-1)),e("span",ro,[D(f(j),1),w.value.includes(ee)?(m(),$("i",vo,"✓")):J("",!0)])])],10,uo))),128))]),e("p",{class:O(["game-status",{success:w.value.length===12}]),"aria-live":"polite"},f(w.value.length===12?`全部找到了！用了 ${g.value} 次，记忆力不错。`:"轻轻翻开两张卡片，找找它们的另一半。"),3),e("div",co,[e("button",{type:"button",class:"game-primary",onClick:Y},[T(Q,{name:"replay"}),k[29]||(k[29]=D("重新洗牌"))]),k[30]||(k[30]=e("span",{class:"game-footnote"},"不用着急，慢慢记住就好",-1))]),T(de,{active:w.value.length===12},null,8,["active"])])):J("",!0)]),_:1}),T(se,{name:"game-panel"},{default:te(()=>[u.value==="focus"?(m(),$("section",po,[k[34]||(k[34]=e("header",{class:"game-heading"},[e("div",null,[e("p",{class:"game-eyebrow"},"ONE THING AT A TIME"),e("h2",{id:"focus-title"},"这一刻，只做一件事"),e("p",{class:"game-description"}," 给自己一小段安静，让注意力慢慢回来。 ")]),e("span",{class:"game-stamp"},"◷")],-1)),e("div",{class:O(["focus-face",{running:F(l).state==="running",done:F(l).state==="done"}]),style:ae({"--progress":`${B.value}deg`})},[e("div",mo,[T(Q,{name:F(l).state==="done"?"passed":"flower-o"},null,8,["name"]),e("span",$o,f(_.value),1),e("small",null,f(F(l).state==="running"?"把这一刻，留给手头的小事":F(l).state==="paused"?"休息一下，随时继续":F(l).state==="done"?"辛苦啦，给自己一个小奖励":"深呼吸，准备开始"),1)])],6),e("div",fo,[(m(),$(z,null,H([5,10,25,45],j=>e("button",{key:j,type:"button",class:O({selected:F(l).minutes===j}),"aria-pressed":F(l).minutes===j,onClick:ee=>W(j)},f(j)+" 分钟 ",11,go)),64))]),e("div",bo,[F(l).state==="running"?(m(),$("button",{key:0,type:"button",class:"game-primary",onClick:k[2]||(k[2]=(...j)=>F(l).pause&&F(l).pause(...j))},[T(Q,{name:"pause"}),k[32]||(k[32]=D("暂停一下"))])):(m(),$("button",{key:1,type:"button",class:"game-primary",onClick:k[3]||(k[3]=(...j)=>F(l).start&&F(l).start(...j))},[T(Q,{name:"play"}),D(f(F(l).state==="paused"?"继续专注":"开始专注"),1)])),e("button",{type:"button",onClick:k[4]||(k[4]=j=>W())},[T(Q,{name:"replay"}),k[33]||(k[33]=D("重新开始 "))])]),k[35]||(k[35]=e("p",{class:"game-footnote focus-note"}," 离开这个页面，倒计时仍会继续；关闭网站后不会提醒。 ",-1)),T(de,{active:F(l).state==="done"},null,8,["active"])])):J("",!0)]),_:1})]),k[36]||(k[36]=e("footer",{class:"fun-footer"},[e("span",{"aria-hidden":"true"},"✳"),D(" 开心不必很大，一小会儿就好 "),e("a",{href:"./licenses/Noto-Animated-Emoji.txt",target:"_blank",rel:"noopener noreferrer",title:"Google Noto Animated Emoji · CC BY 4.0"},"动效署名")],-1))])}}});export{_o as default};
