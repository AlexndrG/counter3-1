(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],[,,,,function(e,t,n){e.exports={display:"Display_display__2tMqQ",counterOK:"Display_counterOK__oh4WL",counterFinish:"Display_counterFinish__823N7",textOK:"Display_textOK__1ZNKX",textError:"Display_textError__2AkCl"}},function(e,t,n){e.exports={main:"Changer_main__2giff",name:"Changer_name__2uJKh",input:"Changer_input__1u77M",error:"Changer_error__3jKR1"}},,function(e,t,n){e.exports={main:"CounterSettings_main__32TVI",changers:"CounterSettings_changers__3hC1_",buttons:"CounterSettings_buttons__3JWZ3"}},,,,function(e,t,n){e.exports={main:"Counter_main__GgNRR",buttons:"Counter_buttons__1bQDg"}},,function(e,t,n){e.exports={main:"CounterWithParams_main__z9vwY"}},function(e,t,n){e.exports={button:"Button_button__uPfkH"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(6),c=n.n(u),o=(n(19),n(20),n(3)),i=n(12),s=n(2),l={counter:0,minValue:0,maxValue:5,text:"",error:!1},b=function(e){return{type:"SET_COUNTER_VALUE",value:e}},m=function(e){return{type:"SET_MIN_VALUE",value:e}},x=function(e){return{type:"SET_MAX_VALUE",value:e}},_={buttonDisabled:!0,minError:!1,maxError:!1},j=Object(i.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COUNTER_VALUE":return Object(s.a)(Object(s.a)({},e),{},{counter:t.value});case"SET_MIN_VALUE":return Object(s.a)(Object(s.a)({},e),{},{minValue:t.value});case"SET_MAX_VALUE":return Object(s.a)(Object(s.a)({},e),{},{maxValue:t.value});case"MAKE_MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{text:t.text,error:t.error});case"SET_BUTTON_PRESSED":return Object(s.a)(Object(s.a)({},e),{},{counter:e.minValue,text:"",error:!1});default:return e}},counterSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BUTTON_DISABLED":return Object(s.a)(Object(s.a)({},e),{},{buttonDisabled:t.value});case"SET_MIN_ERROR":return Object(s.a)(Object(s.a)({},e),{},{minError:t.value});case"SET_MAX_ERROR":return Object(s.a)(Object(s.a)({},e),{},{maxError:t.value});default:return e}}}),O=Object(i.b)(j,function(){var e=localStorage.getItem("counter-state");if(e){var t=JSON.parse(e);if(t.counter.minValue<0||t.counter.minValue>=t.counter.maxValue)return;return t.counter.counter=t.counter.minValue,t.counter.text="",t.counter.error=!1,t.counterSettings.buttonDisabled=!1,t}}()),d=-1,E=-1;O.subscribe((function(){var e=O.getState(),t=e.counter.minValue,n=e.counter.maxValue;d===t&&E===n||(!function(e){localStorage.setItem("counter-state",JSON.stringify(e))}(e),d=t,E=n)}));var V=n(13),f=n.n(V),v=n(7),g=n.n(v),S=n(14),h=n.n(S),p=n(1),M=function(e){return Object(p.jsx)("button",{className:h.a.button,disabled:e.disabled,onClick:function(){e.callback()},children:e.name})},T=n(5),N=n.n(T),C=function(e){return Object(p.jsxs)("div",{className:N.a.main,children:[Object(p.jsx)("div",{className:N.a.name,children:e.text}),Object(p.jsx)("input",{className:"".concat(N.a.input,"  ").concat(e.error?N.a.error:""),type:"number",value:e.value,onChange:function(t){e.changeValue(t.currentTarget.valueAsNumber)}})]})},D=Object(o.b)((function(e){return{minValue:e.counter.minValue,maxValue:e.counter.maxValue,buttonDisabled:e.counterSettings.buttonDisabled,minError:e.counterSettings.minError,maxError:e.counterSettings.maxError}}),{makeMessage:function(e,t){return{type:"MAKE_MESSAGE",text:e,error:t}},setButtonPressed:function(){return{type:"SET_BUTTON_PRESSED"}},setMinValue:m,setMaxValue:x,setButtonDisabled:function(e){return{type:"SET_BUTTON_DISABLED",value:e}},setMinError:function(e){return{type:"SET_MIN_ERROR",value:e}},setMaxError:function(e){return{type:"SET_MAX_ERROR",value:e}}})((function(e){var t=function(t,n){var r=t<0||t>=n,a=n<0||n<=t;e.setMinError(r),e.setMaxError(a);var u=r||a;e.setButtonDisabled(u),u?e.makeMessage("Incorrect value!",!0):e.makeMessage("Enter values and press 'Set'",!1)};return Object(p.jsxs)("div",{className:g.a.main,children:[Object(p.jsxs)("div",{className:g.a.changers,children:[Object(p.jsx)(C,{text:"max value:",value:e.maxValue,changeValue:function(n){e.setMaxValue(n),t(e.minValue,n)},error:e.maxError}),Object(p.jsx)(C,{text:"start value:",value:e.minValue,changeValue:function(n){e.setMinValue(n),t(n,e.maxValue)},error:e.minError})]}),Object(p.jsx)("div",{className:g.a.buttons,children:Object(p.jsx)(M,{name:"Set",disabled:e.buttonDisabled,callback:function(){e.setButtonDisabled(!0),e.setButtonPressed()}})})]})})),y=n(11),R=n.n(y),A=n(4),B=n.n(A),I=function(e){var t=e.text,n=B.a.textOK;return e.text?e.error&&(n+=" "+B.a.textError):(t=e.counterValue.toString(),n=B.a.counterOK,e.error&&(n=B.a.counterFinish)),Object(p.jsx)("div",{className:B.a.display+" "+n,children:t})},k=Object(o.b)((function(e){return{counter:e.counter.counter,minValue:e.counter.minValue,maxValue:e.counter.maxValue,text:e.counter.text,error:e.counter.error}}),{setCounterValue:b})((function(e){return Object(p.jsxs)("div",{className:R.a.main,children:[Object(p.jsx)(I,{counterValue:e.counter,text:e.text,error:e.text?e.error:e.counter>=e.maxValue}),Object(p.jsxs)("div",{className:R.a.buttons,children:[Object(p.jsx)(M,{name:"Inc",disabled:!!e.text||e.counter>=e.maxValue,callback:function(){e.counter<e.maxValue&&e.setCounterValue(e.counter+1)}}),Object(p.jsx)(M,{name:"Reset",disabled:!!e.text||e.counter===e.minValue,callback:function(){e.setCounterValue(e.minValue)}})]})]})})),U=Object(o.b)((function(e){return{counter:e.counter.counter,minValue:e.counter.minValue,maxValue:e.counter.maxValue,text:e.counter.text,error:e.counter.error}}),{setCounterValue:b,setMinValue:m,setMaxValue:x})((function(){return Object(p.jsxs)("div",{className:f.a.main,children:[Object(p.jsx)(D,{}),Object(p.jsx)(k,{})]})}));var K=function(){return Object(p.jsx)(o.a,{store:O,children:Object(p.jsx)(U,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,u=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),u(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root")),L()}],[[26,1,2]]]);
//# sourceMappingURL=main.ee26adec.chunk.js.map