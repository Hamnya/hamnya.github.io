const t=window.Ionic.h;import{b as e,d as a}from"./chunk-7c632336.js";import{f as i,i as s}from"./chunk-6d7d2f8c.js";class n{constructor(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}debounceChanged(){this.ionChange=i(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:t})}componentWillLoad(){this.updateRatio(),this.debounceChanged(),this.emitStyle()}async componentDidLoad(){this.gesture=(await import("./chunk-f56eaea8.js")).createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(this.disabled)}handleKeyboard(t,e){let a=this.step;a=a>0?a:1,a/=this.max-this.min,e||(a*=-1),"A"===t?this.ratioA+=a:this.ratioB+=a,this.updateValue()}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}fireBlur(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())}fireFocus(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}onStart(t){this.fireFocus();const e=this.rect=this.rangeSlider.getBoundingClientRect(),a=t.currentX,i=s(0,(a-e.left)/e.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.update(a)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0,this.fireBlur()}update(t){const e=this.rect;let a=s(0,(t-e.left)/e.width,1);this.snaps&&(a=h(r(a,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=a:this.ratioB=a,this.updateValue()}get valA(){return r(this.ratioA,this.min,this.max,this.step)}get valB(){return r(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:a}=this;this.dualKnobs?(this.ratioA=h(t.lower,e,a),this.ratioB=h(t.upper,e,a)):this.ratioA=h(t,e,a)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}hostData(){return{class:Object.assign({},e(this.color),{"in-item":a("ion-item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}}render(){const{min:e,max:a,step:i,ratioLower:s,ratioUpper:n}=this,r=`${100*s}%`,l=`${100-100*n}%`,d=[];if(this.snaps)for(let t=e;t<=a;t+=i){const i=h(t,e,a);d.push({ratio:i,active:i>=s&&i<=n,left:`${100*i}%`})}return[t("slot",{name:"start"}),t("div",{class:"range-slider",ref:t=>this.rangeSlider=t},d.map(e=>t("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})),t("div",{class:"range-bar",role:"presentation"}),t("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:r,right:l}}),o({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:e,max:a}),this.dualKnobs&&o({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:e,max:a})),t("slot",{name:"end"})]}static get is(){return"ion-range"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max",watchCallbacks:["maxChanged"]},min:{type:Number,attr:"min",watchCallbacks:["minChanged"]},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-range-ios-h{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.range-disabled.sc-ion-range-ios-h{pointer-events:none}.sc-ion-range-ios-s > ion-label{-ms-flex:initial;flex:initial}.sc-ion-range-ios-s > ion-icon[slot]{font-size:24px}.range-slider.sc-ion-range-ios{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}.range-pressed.sc-ion-range-ios-h   .range-slider.sc-ion-range-ios{cursor:-webkit-grabbing;cursor:grabbing}.range-pin.sc-ion-range-ios{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle.sc-ion-range-ios{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle.sc-ion-range-ios:active, .range-knob-handle.sc-ion-range-ios:focus{outline:none}.range-bar.sc-ion-range-ios{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);width:100%;height:var(--bar-height);background:var(--bar-background)}.range-bar.sc-ion-range-ios, .range-knob.sc-ion-range-ios{position:absolute;pointer-events:none}.range-knob.sc-ion-range-ios{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2}.range-pressed.sc-ion-range-ios-h   .range-bar-active.sc-ion-range-ios{will-change:left,right}.range-pressed.sc-ion-range-ios-h   .range-knob-handle.sc-ion-range-ios{will-change:left}.in-item.sc-ion-range-ios-h{width:100%}.sc-ion-range-ios-h.in-item .sc-ion-range-ios-s > ion-label{-ms-flex-item-align:center;align-self:center}.sc-ion-range-ios-h{--knob-border-radius:50%;--knob-background:var(--ion-background-color,#fff);--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:1px;--bar-background:var(--ion-color-step-250,#bfbfbf);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding:8px 16px}.ion-color.sc-ion-range-ios-h   .range-bar-active.sc-ion-range-ios, .ion-color.sc-ion-range-ios-h   .range-tick-active.sc-ion-range-ios{background:var(--ion-color-base)}.sc-ion-range-ios-s > [slot=start]{margin:0 16px 0 0}.sc-ion-range-ios-s > [slot=end]{margin:0 0 0 16px}.range-has-pin.sc-ion-range-ios-h{padding-top:20px}.range-bar-active.sc-ion-range-ios{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick.sc-ion-range-ios{margin-left:-.5px;border-radius:0;position:absolute;top:17.5px;width:1px;height:8px;background:var(--ion-color-step-250,#bfbfbf);pointer-events:none}.range-tick-active.sc-ion-range-ios{background:var(--bar-background-active)}.range-pin.sc-ion-range-ios{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}.range-knob-pressed.sc-ion-range-ios   .range-pin.sc-ion-range-ios{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.range-disabled.sc-ion-range-ios-h{opacity:.5}"}static get styleMode(){return"ios"}}function o({knob:e,value:a,ratio:i,min:s,max:n,disabled:o,pressed:r,pin:h,handleKeyboard:l}){return t("div",{onKeyDown:t=>{const a=t.key;"ArrowLeft"===a||"ArrowDown"===a?(l(e,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==a&&"ArrowUp"!==a||(l(e,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-pressed":r,"range-knob-min":a===s,"range-knob-max":a===n},style:{left:`${100*i}%`},role:"slider",tabindex:o?-1:0,"aria-valuemin":s,"aria-valuemax":n,"aria-disabled":o?"true":null,"aria-valuenow":a},h&&t("div",{class:"range-pin",role:"presentation"},Math.round(a)),t("div",{class:"range-knob",role:"presentation"}))}function r(t,e,a,i){let n=(a-e)*t;return i>0&&(n=Math.round(n/i)*i+e),s(e,n,a)}function h(t,e,a){return s(0,(t-e)/(a-e),1)}export{n as IonRange};