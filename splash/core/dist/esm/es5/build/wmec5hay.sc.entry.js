import{h}from"../ionic.core.js";import{b as createColorClasses}from"./chunk-7c632336.js";var TabBar=function(){function e(){this.keyboardVisible=!1,this.translucent=!1}return e.prototype.selectedTabChanged=function(){this.ionTabBarChanged.emit({tab:this.selectedTab})},e.prototype.onKeyboardWillHide=function(){var e=this;setTimeout(function(){return e.keyboardVisible=!1},50)},e.prototype.onKeyboardWillShow=function(){"top"!==this.el.getAttribute("slot")&&(this.keyboardVisible=!0)},e.prototype.componentWillLoad=function(){this.selectedTabChanged()},e.prototype.hostData=function(){var e=this.translucent,t=this.keyboardVisible;return{role:"tablist","aria-hidden":t?"true":null,class:Object.assign({},createColorClasses(this.color),{"tab-bar-translucent":e,"tab-bar-hidden":t})}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-tab-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},keyboardVisible:{state:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},selectedTab:{type:String,attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionTabBarChanged",method:"ionTabBarChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:keyboardWillHide",method:"onKeyboardWillHide"},{name:"window:keyboardWillShow",method:"onKeyboardWillShow"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-tab-bar-ios-h{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-tab-bar-ios-h, .sc-ion-tab-bar-ios-h.ion-color .sc-ion-tab-bar-ios-s > ion-tab-button{background:var(--ion-color-base);color:rgba(var(--ion-color-contrast-rgb),.7)}.sc-ion-tab-bar-ios-h.ion-color .sc-ion-tab-bar-ios-s > ion-tab-button{--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}.sc-ion-tab-bar-ios-h.ion-color .sc-ion-tab-bar-ios-s > .tab-selected{color:var(--ion-color-contrast)}[slot=top].sc-ion-tab-bar-ios-h{padding-bottom:0;border-top:0;border-bottom:var(--border)}.tab-bar-hidden.sc-ion-tab-bar-ios-h{display:none!important}.sc-ion-tab-bar-ios-h{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--color:var(--ion-tab-bar-color,var(--ion-color-step-450,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:50px}.tab-bar-translucent.sc-ion-tab-bar-ios-h{background-color:rgba(var(--ion-color-base-rgb),.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),TabButton=function(){function e(){this.selected=!1,this.disabled=!1}return e.prototype.onTabBarChanged=function(e){this.selected=this.tab===e.detail.tab},e.prototype.onClick=function(e){void 0!==this.tab&&(this.disabled||this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),e.preventDefault())},e.prototype.componentWillLoad=function(){void 0===this.layout&&(this.layout=this.config.get("tabButtonLayout","icon-top"))},Object.defineProperty(e.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:!0,configurable:!0}),e.prototype.hostData=function(){var e,t=this,n=t.hasIcon,o=t.hasLabel,r=t.selected,a=t.tab;return{role:"tab","aria-selected":r?"true":null,id:void 0!==a?"tab-button-"+a:null,class:(e={"tab-selected":r,"tab-disabled":t.disabled,"tab-has-label":o,"tab-has-icon":n,"tab-has-label-only":o&&!n,"tab-has-icon-only":n&&!o},e["tab-layout-"+t.layout]=!0,e["ion-activatable"]=!0,e)}},e.prototype.render=function(){var e=this.mode;return h("a",{href:this.href},h("slot",null),"md"===e&&h("ion-ripple-effect",{type:"unbounded"}))},Object.defineProperty(e,"is",{get:function(){return"ion-tab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},disabled:{type:Boolean,attr:"disabled"},doc:{context:"document"},el:{elementRef:!0},href:{type:String,attr:"href"},layout:{type:String,attr:"layout",mutable:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},selected:{type:Boolean,attr:"selected",mutable:!0},tab:{type:String,attr:"tab"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionTabButtonClick",method:"ionTabButtonClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"parent:ionTabBarChanged",method:"onTabBarChanged"},{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-tab-button-ios-h{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}.sc-ion-tab-button-ios-h, a.sc-ion-tab-button-ios{height:100%}a.sc-ion-tab-button-ios{margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}a.sc-ion-tab-button-ios:focus-visible{background:var(--background-focused)}\@media (any-hover:hover){a.sc-ion-tab-button-ios:hover{color:var(--color-selected)}}.tab-selected.sc-ion-tab-button-ios-h{color:var(--color-selected)}.tab-hidden.sc-ion-tab-button-ios-h{display:none!important}.tab-disabled.sc-ion-tab-button-ios-h{pointer-events:none;opacity:.4}.sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-s > ion-label{display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-tab-button-ios-s > ion-label{-ms-flex-order:0;order:0}.sc-ion-tab-button-ios-s > ion-icon{-ms-flex-order:-1;order:-1;height:1em}.sc-ion-tab-button-ios-h.tab-has-label-only .sc-ion-tab-button-ios-s > ion-label{white-space:normal}.sc-ion-tab-button-ios-s > ion-badge{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}.tab-layout-icon-start.sc-ion-tab-button-ios-h{-ms-flex-direction:row;flex-direction:row}.tab-layout-icon-end.sc-ion-tab-button-ios-h{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.tab-layout-icon-bottom.sc-ion-tab-button-ios-h{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.sc-ion-tab-button-ios-h.tab-layout-icon-hide .sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-h.tab-layout-label-hide .sc-ion-tab-button-ios-s > ion-label{display:none}ion-ripple-effect.sc-ion-tab-button-ios{color:var(--ripple-color)}.sc-ion-tab-button-ios-h{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}.sc-ion-tab-button-ios-h.tab-has-label-only .sc-ion-tab-button-ios-s > ion-label{margin:2px 0;font-size:12px;font-size:14px;line-height:1.1}.sc-ion-tab-button-ios-s > ion-badge{padding:1px 6px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}.sc-ion-tab-button-ios-s > ion-icon{margin-top:4px;font-size:30px}.sc-ion-tab-button-ios-s > ion-icon:before{vertical-align:top}.sc-ion-tab-button-ios-s > ion-label{margin-top:0;margin-bottom:1px;min-height:11px}.sc-ion-tab-button-ios-h.tab-layout-icon-end .sc-ion-tab-button-ios-s > ion-label, .sc-ion-tab-button-ios-h.tab-layout-icon-hide .sc-ion-tab-button-ios-s > ion-label, .sc-ion-tab-button-ios-h.tab-layout-icon-start .sc-ion-tab-button-ios-s > ion-label{margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}.sc-ion-tab-button-ios-h.tab-layout-icon-end .sc-ion-tab-button-ios-s > ion-icon, .sc-ion-tab-button-ios-h.tab-layout-icon-start .sc-ion-tab-button-ios-s > ion-icon{min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}.sc-ion-tab-button-ios-h.tab-layout-icon-bottom .sc-ion-tab-button-ios-s > ion-badge{left:calc(50% + 12px)}.sc-ion-tab-button-ios-h.tab-layout-icon-bottom .sc-ion-tab-button-ios-s > ion-icon{margin-top:0;margin-bottom:1px}.sc-ion-tab-button-ios-h.tab-layout-icon-bottom .sc-ion-tab-button-ios-s > ion-label{margin-top:4px}.sc-ion-tab-button-ios-h.tab-layout-icon-end .sc-ion-tab-button-ios-s > ion-badge, .sc-ion-tab-button-ios-h.tab-layout-icon-start .sc-ion-tab-button-ios-s > ion-badge{left:calc(50% + 35px);top:10px}.sc-ion-tab-button-ios-h.tab-has-label-only .sc-ion-tab-button-ios-s > ion-badge, .sc-ion-tab-button-ios-h.tab-layout-icon-hide .sc-ion-tab-button-ios-s > ion-badge{left:calc(50% + 30px);top:10px}.sc-ion-tab-button-ios-h.tab-has-icon-only .sc-ion-tab-button-ios-s > ion-badge, .sc-ion-tab-button-ios-h.tab-layout-label-hide .sc-ion-tab-button-ios-s > ion-badge{top:10px}.sc-ion-tab-button-ios-h.tab-layout-label-hide .sc-ion-tab-button-ios-s > ion-icon{margin:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();export{TabBar as IonTabBar,TabButton as IonTabButton};