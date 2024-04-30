import{_ as c}from"./lock-Be6elCLs.js";import{u,k as V}from"./other-0fqFMdJ7.js";import{an as m,B as p,_ as v}from"./common-Cq4hAAbZ.js";import"./vendor-EcFAmbRN.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXElEQVRYR+2Xu48PURTHP9/SI17REfwBQmU1JDbxLsTSCKFEsp14rMqqrF3RSVASovGIAovEJjRWRfwBCJ14xaM8cuRMco2Z3+/O+NlEsreamXvOPZ/5nnvPmRGlYWZWftbLe0lK1/vtxiemAUKFt8Aivy5L1jQdiaLvJC0u+/+RggB4CvSF8UpJL5oGjnVWAM/Dd1LS6lyAG8BAGO+TdLklwF7gUvjelLQjF+A0cDSMz0g60hJgDDgcvqOSjuUCbAHuhPF9SZtaAowDG8N3q6S7uQBzgM+JcZ+kZ00gzGwVMJn4zJX0JQsgNtA9oHjzMUlFSrI4zGwUKFI3LmlzlWPlKQiAE8BwOL0Clkv6lhPdzGYBL4FlYT8s6WQjgIB4BKwLxxFJxzMBTgFDYTshqb/Or1aBAPDgDlGMa8CgpA9VC5rZAuAcsCuZ75c00QqgIhX+yIuUB/Fz/TVsZkfdGATSYlMrfQHUUYHCyMzS/VA8/gH4RvXhG2xG6S27Bnf7LIAaJTpth6zg/w9ATQq+A7dDhm3AzH+SgorgXhHPenBJDuEfMR7cIQ4BXgGL0TUVTY/hdeCgpPc1x3AhcB7Y2ZNjaGZpIarsZjUgaTdtV4hK0k99KS69/d82o1oV6j7J5gEfE3l70Y7nS/pUTlkdwHYvtWH8UNKGTlWnbs7MHgDrY35A0q1cgLSbXZR0oCXABWB/+FZ20zoFrgC7w3FIku/qxsPM/BtwJByvStqTq8BjYE0Yd2ynnajMLG3nTyStzQV4DSz51SxK/3JNZUh+TN5IWtoVYPrfcKoV+AnThhIwJw9nGAAAAABJRU5ErkJggg==",_=""+new URL("../assets/qingshaonian-Cjy-fMTM.png",import.meta.url).href,A=""+new URL("../assets/img-type3-TUUXfOQ_.png",import.meta.url).href,t=a=>(Vue.pushScopeId("data-v-5b591513"),a=a(),Vue.popScopeId(),a),E={class:"DetailSetting"},h={key:0,class:"content type1"},B=Vue.createStaticVNode('<div class="notice" data-v-5b591513><img src="'+c+'" alt="" data-v-5b591513><span data-v-5b591513>时间锁已关闭</span></div><div class="row mt1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+g+'" alt="" data-v-5b591513><span data-v-5b591513>可为时间锁设置一个触发时间</span></div></div><div class="row mt1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+V+'" alt="" data-v-5b591513><span data-v-5b591513>开启时间锁后，单日使用时长超过触发时间，需输入密码才能继续使用</span></div></div><div class="row mt1r mb1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+c+'" alt="" data-v-5b591513><span data-v-5b591513>开启时间锁，需先设置独立密码；忘记密码后可通过申诉重置密码</span></div></div>',4),N=t(()=>Vue.createElementVNode("div",{class:"left"},[Vue.createElementVNode("span",null,"触发时间")],-1)),y={class:"right"},S=t(()=>Vue.createElementVNode("div",{class:"footer"},[Vue.createElementVNode("div",{class:"button primary"},"开启时间锁")],-1)),T={key:1,class:"content type2"},f=t(()=>Vue.createElementVNode("img",{class:"desc",src:_,alt:""},null,-1)),b={class:"footer"},C={class:"notice"},k=t(()=>Vue.createElementVNode("span",null,"更多信息可阅读",-1)),w=t(()=>Vue.createElementVNode("div",{class:"button primary"},"开启青少年模式",-1)),U={key:2,class:"content type2"},G=t(()=>Vue.createElementVNode("img",{class:"desc",src:A,alt:""},null,-1)),I={class:"footer"},M={class:"notice"},R=t(()=>Vue.createElementVNode("span",null,"我已阅读并接受",-1)),J=Vue.defineComponent({name:"DetailSetting",__name:"DetailSetting",setup(a){const l=VueRouter.useRoute(),s=u(),e=Vue.reactive({type:0,triggerTime:m.TRIGGER_TIME.TIME60});return Vue.onMounted(()=>{e.type=~~l.query.type;let n=localStorage.getItem("changeTriggerTime");n!==null&&(e.triggerTime=Number(n))}),(n,o)=>{const i=Vue.resolveComponent("BaseHeader"),d=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createVNode(i),e.type===0?(Vue.openBlock(),Vue.createElementBlock("div",h,[B,Vue.createElementVNode("div",{class:"row mt1r mb1r",onClick:o[0]||(o[0]=r=>Vue.unref(s)("trigger-time",{triggerTime:e.triggerTime}))},[N,Vue.createElementVNode("div",y,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.triggerTime)+"分钟",1),Vue.createVNode(d,{direction:"right"})])]),S])):Vue.createCommentVNode("",!0),e.type===1?(Vue.openBlock(),Vue.createElementBlock("div",T,[f,Vue.createElementVNode("div",b,[Vue.createElementVNode("div",C,[k,Vue.createElementVNode("span",{style:{color:"yellow"},onClick:o[1]||(o[1]=r=>Vue.unref(s)("/service-protocol",{type:"儿童/青少年使用须知"}))},"《儿童/青少年使用须知》")]),w])])):Vue.createCommentVNode("",!0),e.type===2?(Vue.openBlock(),Vue.createElementBlock("div",U,[G,Vue.createElementVNode("div",I,[Vue.createElementVNode("div",M,[R,Vue.createElementVNode("span",{style:{color:"yellow"},onClick:o[2]||(o[2]=r=>Vue.unref(s)("/service-protocol",{type:"抖音亲子平台服务协议"}))}," 《抖音亲子平台服务协议》 ")]),Vue.createVNode(p,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode("立即绑定")]),_:1})])])):Vue.createCommentVNode("",!0)])}}}),Y=v(J,[["__scopeId","data-v-5b591513"]]);export{Y as default};
