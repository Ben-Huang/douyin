import{ao as e,ap as c,_ as V}from"./common-DV61cPE2.js";import"./vendor-fCq96TsU.js";const t=n=>(Vue.pushScopeId("data-v-5d336e50"),n=n(),Vue.popScopeId(),n),a={class:"TriggerTime"},_=t(()=>Vue.createElementVNode("span",{class:"f16"},"触发时间",-1)),m={class:"content"},E=t(()=>Vue.createElementVNode("div",{class:"left"},"40分钟",-1)),T={key:0,class:"right"},g=t(()=>Vue.createElementVNode("img",{src:c,alt:""},null,-1)),I=[g],p=t(()=>Vue.createElementVNode("div",{class:"left"},"60分钟",-1)),h={key:0,class:"right"},v=t(()=>Vue.createElementVNode("img",{src:c,alt:""},null,-1)),R=[v],f=t(()=>Vue.createElementVNode("div",{class:"left"},"90分钟",-1)),M={key:0,class:"right"},N=t(()=>Vue.createElementVNode("img",{src:c,alt:""},null,-1)),k=[N],G=t(()=>Vue.createElementVNode("div",{class:"left"},"120分钟",-1)),B={key:0,class:"right"},C=t(()=>Vue.createElementVNode("img",{src:c,alt:""},null,-1)),w=[C],S=Vue.defineComponent({name:"ChooseSchool",__name:"TriggerTime",setup(n){const l=VueRouter.useRoute(),s=Vue.reactive({triggerTime:e.TRIGGER_TIME.TIME60});Vue.onMounted(()=>{s.triggerTime=~~l.query.triggerTime});function r(i){s.triggerTime=i,localStorage.setItem("changeTriggerTime",i)}return(i,o)=>{const d=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",a,[Vue.createVNode(d,null,{center:Vue.withCtx(()=>[_]),_:1}),Vue.createElementVNode("div",m,[Vue.createElementVNode("div",{class:"row",onClick:o[0]||(o[0]=u=>r(Vue.unref(e).TRIGGER_TIME.TIME40))},[E,s.triggerTime===Vue.unref(e).TRIGGER_TIME.TIME40?(Vue.openBlock(),Vue.createElementBlock("div",T,I)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[1]||(o[1]=u=>r(Vue.unref(e).TRIGGER_TIME.TIME60))},[p,s.triggerTime===Vue.unref(e).TRIGGER_TIME.TIME60?(Vue.openBlock(),Vue.createElementBlock("div",h,R)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[2]||(o[2]=u=>r(Vue.unref(e).TRIGGER_TIME.TIME90))},[f,s.triggerTime===Vue.unref(e).TRIGGER_TIME.TIME90?(Vue.openBlock(),Vue.createElementBlock("div",M,k)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[3]||(o[3]=u=>r(Vue.unref(e).TRIGGER_TIME.TIME120))},[G,s.triggerTime===Vue.unref(e).TRIGGER_TIME.TIME120?(Vue.openBlock(),Vue.createElementBlock("div",B,w)):Vue.createCommentVNode("",!0)])])])}}}),$=V(S,[["__scopeId","data-v-5d336e50"]]);export{$ as default};