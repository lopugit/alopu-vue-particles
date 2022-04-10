'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */
var script = {
  name: 'vue-particles',
  props: {
    color: {
      type: String,
      default: '#dedede'
    },
    particleOpacity: {
      type: Number,
      default: 0.7
    },
    particlesNumber: {
      type: Number,
      default: 80
    },
    shapeType: {
      type: String,
      default: 'circle'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#dedede'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: true
    },
    lineOpacity: {
      type: Number,
      default: 0.4
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    hoverMode: {
      type: String,
      default: 'grab'
    },
    clickEffect: {
      type: Boolean,
      default: true
    },
    clickMode: {
      type: String,
      default: 'push'
    },
    image: {}
  },
  data(){
    return {
      id: 'particles-js-'+Math.round(Math.random()*5000)
    }
  },
  mounted () {
    // import particle.js only on client-side
    require('particles.js');
    this.$nextTick(() => {
      this.initParticleJS(
        this.color,
        this.particleOpacity,
        this.particlesNumber,
        this.shapeType,
        this.particleSize,
        this.linesColor,
        this.linesWidth,
        this.lineLinked,
        this.lineOpacity,
        this.linesDistance,
        this.moveSpeed,
        this.hoverEffect,
        this.hoverMode,
        this.clickEffect,
        this.clickMode,
        this.image,
        this.id
      );
    });
  },
  methods: {
    initParticleJS (
      color,
      particleOpacity,
      particlesNumber,
      shapeType,
      particleSize,
      linesColor,
      linesWidth,
      lineLinked,
      lineOpacity,
      linesDistance,
      moveSpeed,
      hoverEffect,
      hoverMode,
      clickEffect,
      clickMode,
      image,
      id
    ) {
      particlesJS(id, {
        "particles": {
          "number": {
            "value": particlesNumber,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": color
          },
          "shape": {
            // circle, edge, triangle, polygon, star, image
            "type": shapeType,
            "stroke": {
              "width": 0,
              "color": "#192231"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": image
          },
          "opacity": {
            "value": particleOpacity,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": particleSize,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": lineLinked,
            "distance": linesDistance,
            "color": linesColor,
            "opacity": lineOpacity,
            "width": linesWidth
          },
          "move": {
            "enable": true,
            "speed": moveSpeed,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": hoverEffect,
              "mode": hoverMode
            },
            "onclick": {
              "enable": clickEffect,
              "mode": clickMode
            },
            "onresize": {

              "enable": true,
              "density_auto": true,
              "density_area": 400

            }
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

  }
};
/* eslint-disable */

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "particles-js",
    attrs: {
      id: _vm.id,
      color: _vm.color,
      particleOpacity: _vm.particleOpacity,
      linesColor: _vm.linesColor,
      particlesNumber: _vm.particlesNumber,
      shapeType: _vm.shapeType,
      particleSize: _vm.particleSize,
      linesWidth: _vm.linesWidth,
      lineLinked: _vm.lineLinked,
      lineOpacity: _vm.lineOpacity,
      linesDistance: _vm.linesDistance,
      moveSpeed: _vm.moveSpeed,
      hoverEffect: _vm.hoverEffect,
      hoverMode: _vm.hoverMode,
      clickEffect: _vm.clickEffect,
      clickMode: _vm.clickMode,
      image: _vm.image,
    },
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent$1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* eslint-disable */
const VueParticles = {

    install (Vue, options) {
        Vue.component('vue-particles', __vue_component__);
    }

};


/* eslint-disable */

module.exports = VueParticles;
