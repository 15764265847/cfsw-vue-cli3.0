var t="production"!==process.env.NODE_ENV,o=function(t){var o=t.version.split(".");return Number(o[0])>1&&Number(o[1])>5},e=null,r=function(){this._vm=null};r.prototype.init=function(){if(!e)throw Error("please Vue.use() install it");if(o(e))return e.observable(this);this._vm=new e({data:{$$state:this}})},r.prototype.replace=function(t){Object.assign(this,t)};var n={Store:r,install:function(r){if(e&&r===e)return t&&console.error("vue-easy-store already installed");e=r,"$store"in r.prototype||Object.defineProperty(r.prototype,"$store",{get:function(){return o(r)?this.$root.$options.store:this.$root.$options.store._vm.$data.$$state},set:function(){t&&console.error("no modification allowed")}}),r.mixin({beforeDestroy:function(){this.$options.store&&delete this.$options.store}})}};export default n;
