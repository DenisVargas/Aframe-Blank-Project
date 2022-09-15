AFRAME.registerComponent('myCustomComponent', {
    //https://aframe.io/docs/1.2.0/core/component.html#property-types
    //https://aframe.io/docs/1.2.0/core/component.html#property-type-inference
    //https://aframe.io/docs/1.2.0/core/component.html#component-prototype-properties
    schema: {
        arrayproperty: {type:'array', default:[]},
        assetproperty: {type:'asset', default:''},
        audioproperty: {type:'audio', default:''},
        colorproperty: {type:'color', default:'#fff'},
        intproperty: {type:'int', default:0},
        booleanproperty: {type:'boolean', default:false},
        floatproperty: {type:'number', default:0},
        modelproperty: {type:'model', default:''},
        selectorProperty: {type:'selector', default:null},
        selectorAllProperty: {type:'selector', default:null},
        stringProperty: {type:'string', default:''},
        stringProperty: {type:'string', default:''},
        vec2Property: {type:'vec2', default:{x:0,y:0}},
        vec3Property: {type:'vec3', default:{x:0,y:0,z:0}},
        vec4Property: {type:'vec4', default:{x:0,y:0,z:0,w:0}},
    },

    //For custom property Type: https://aframe.io/docs/1.2.0/core/component.html#custom-property-type

    init: function () {
      // Do something when component first attached.
      var el = this.el;
      
      el.addEventListener('model-loaded', (ev)=>{
        // Lo que se deba hacer cuando el mesh se ha cargado.
      });
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
