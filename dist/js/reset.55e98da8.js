(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset"],{"3c63":function(e,t,n){"use strict";var a=n("83df"),r=n.n(a);r.a},"54be":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"registerdiv"}},[n("div",{attrs:{id:"back-btn"}},[n("router-link",{attrs:{to:"/"}},[n("button",{attrs:{type:"button"}},[n("span",[e._v("返回")])])])],1),n("form",{attrs:{id:"registerForm",method:"post",action:""},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"inputdiv"},[n("label",[e._v("昵称：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"请输入您的昵称",name:"nickname"},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}})]),n("div",{staticClass:"inputdiv"},[n("label",[e._v("姓名：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入您的姓名",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"inputdiv1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",value:"男"},domProps:{checked:e._q(e.sex,"男")},on:{change:function(t){e.sex="男"}}}),e._v("男\n\t\t\t"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",value:"女"},domProps:{checked:e._q(e.sex,"女")},on:{change:function(t){e.sex="女"}}}),e._v("女\n\t\t")]),n("div",{staticClass:"inputdiv"},[n("label",[e._v("年龄：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number",placeholder:"请输入您的年龄",name:"age"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),n("div",{staticClass:"inputdiv"},[n("label",[e._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入您的新密码",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("my-button",{attrs:{disabled:e.button.disabled,value:e.button.value,"btn-style":e.button.btnStyle},nativeOn:{click:function(t){return e.reset(t)}}})],1)])},r=[],i=(n("6b54"),n("2397"),n("7f7f"),n("96cf"),n("1da1")),s=n("d4ec"),o=n("bee2"),u=n("262e"),c=n("99de"),l=n("7e84"),d=n("9ab4"),p=n("60a3");function m(e){var t=v();return function(){var n,a=Object(l["a"])(e);if(t){var r=Object(l["a"])(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c["a"])(this,n)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var f=function(e){Object(u["a"])(n,e);var t=m(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.nickname="",e.name="",e.sex="",e.age="",e.password="",e.button={disabled:!1,value:"重置",btnStyle:{width:"7.75rem",height:"1.175rem",fontSize:"0.5rem"}},e}return Object(o["a"])(n,[{key:"reset",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={nickname:this.nickname,username:this.name,sex:this.sex,age:this.age,password:this.password},this.button.disabled=!0,e.next=4,this.api.userReset(t);case 4:if(n=e.sent,this.button.disabled=!1,0===n.code){e.next=8;break}return e.abrupt("return");case 8:return e.abrupt("return",this.$router.push({name:"login",query:{nickname:t.nickname}}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"api",get:function(){return this.$store.user.api}}]),n}(p["c"]);f=Object(d["a"])([Object(p["a"])({})],f);var b=f,h=b,g=(n("3c63"),n("2877")),w=Object(g["a"])(h,a,r,!1,null,"1be6fa9c",null);t["default"]=w.exports},"83df":function(e,t,n){}}]);