function _createForOfIteratorHelper(e,t){var n,r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}import{debounce}from"../../debounce/index.js";var Search=function(){function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"element",void 0),_defineProperty(this,"subElements",{}),_defineProperty(this,"onKeyUp",debounce(function(e){e=e.target.value.trim();t.dispatchEvent(e)},300)),this.initialize()}return _createClass(e,[{key:"initialize",value:function(){this.render(),this.getSubElements(),this.addEventListeners()}},{key:"template",get:function(){return'\n      <form>\n        <div class="os-form-input use-icon">\n          <input id="search-input"\n                 type="text"\n                 data-element="search"\n                 placeholder="Search">\n          <label class="bi bi-search input-icon"\n                 for="search-input"></label>\n        </div>\n      </form>\n    '}},{key:"render",value:function(){var e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild}},{key:"getSubElements",value:function(){var e,t={},n=_createForOfIteratorHelper(this.element.querySelectorAll("[data-element]"));try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.dataset.element]=r}}catch(e){n.e(e)}finally{n.f()}this.subElements=t}},{key:"dispatchEvent",value:function(e){this.element.dispatchEvent(new CustomEvent("search-filter",{bubbles:!0,detail:e}))}},{key:"addEventListeners",value:function(){this.subElements.search.addEventListener("input",this.onKeyUp)}},{key:"clear",value:function(){this.element.reset()}},{key:"remove",value:function(){this.element&&this.element.remove()}},{key:"destroy",value:function(){this.remove(),this.element=null,this.subElements={}}}]),e}();export{Search as default};