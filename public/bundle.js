/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_proptypes___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || process.env.NODE_ENV!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && !vnode.children.length) { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && !vnode.children.length) { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev) { prev = parent.children[0]; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render$1(wrap, container);
	if (callback) { callback(c); }
	return c._component || c.base;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(ref) {
	var attributes = ref.attributes;

	if (!attributes) { return; }
	var cl = attributes.className || attributes.class;
	if (cl) { attributes.className = cl; }
}


function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	var this$1 = this;

	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		if (propTypes) {
			for (var prop in propTypes) {
				if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop]==='function') {
					var displayName = this$1.displayName || ctor.name;
					var err = propTypes[prop](props, prop, displayName, 'prop');
					if (err) { console.error(new Error(err.message || err)); }
				}
			}
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};



var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_proptypes___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* harmony default export */ __webpack_exports__["default"] = index;
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(25);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.propTypes = exports.createServerRenderContext = exports.matchPattern = exports.StaticRouter = exports.ServerRouter = exports.MemoryRouter = exports.HashRouter = exports.BrowserRouter = exports.Redirect = exports.NavigationPrompt = exports.Miss = exports.Match = exports.Link = undefined;

var _Link2 = __webpack_require__(106);

var _Link3 = _interopRequireDefault(_Link2);

var _Match2 = __webpack_require__(108);

var _Match3 = _interopRequireDefault(_Match2);

var _Miss2 = __webpack_require__(111);

var _Miss3 = _interopRequireDefault(_Miss2);

var _NavigationPrompt2 = __webpack_require__(112);

var _NavigationPrompt3 = _interopRequireDefault(_NavigationPrompt2);

var _Redirect2 = __webpack_require__(113);

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _BrowserRouter2 = __webpack_require__(104);

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(105);

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _MemoryRouter2 = __webpack_require__(110);

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _ServerRouter2 = __webpack_require__(114);

var _ServerRouter3 = _interopRequireDefault(_ServerRouter2);

var _StaticRouter2 = __webpack_require__(11);

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _matchPattern2 = __webpack_require__(35);

var _matchPattern3 = _interopRequireDefault(_matchPattern2);

var _createServerRenderContext2 = __webpack_require__(115);

var _createServerRenderContext3 = _interopRequireDefault(_createServerRenderContext2);

var _PropTypes = __webpack_require__(8);

var _propTypes = _interopRequireWildcard(_PropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link3.default;
exports.Match = _Match3.default;
exports.Miss = _Miss3.default;
exports.NavigationPrompt = _NavigationPrompt3.default;
exports.Redirect = _Redirect3.default;

// High-level wrappers

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.ServerRouter = _ServerRouter3.default;

// Low-level building block

exports.StaticRouter = _StaticRouter3.default;

// Util for server rendering "pre-render match"

exports.matchPattern = _matchPattern3.default;

// Util for server rendering context

exports.createServerRenderContext = _createServerRenderContext3.default;

// React PropTypes for all Components

exports.propTypes = _propTypes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'footer' },
      _react2.default.createElement(
        'div',
        { className: 'top' },
        _react2.default.createElement(
          'div',
          { className: 'left' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'COMPANY'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'DEALS'
              ),
              _react2.default.createElement(
                'li',
                null,
                'GIVEAWAY'
              ),
              _react2.default.createElement(
                'li',
                null,
                'BLOG'
              ),
              _react2.default.createElement(
                'li',
                null,
                'SELL WITH JANE'
              ),
              _react2.default.createElement(
                'li',
                null,
                'APP'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'HELP & SUPPORT'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'TERMS OF USE'
              ),
              _react2.default.createElement(
                'li',
                null,
                'PRIVACY POLICY'
              ),
              _react2.default.createElement(
                'li',
                null,
                'AFFILIATES'
              ),
              _react2.default.createElement(
                'li',
                null,
                'SUPPORT'
              ),
              _react2.default.createElement(
                'li',
                null,
                'ABOUT'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'NOW HIRING'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'CAREERS'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'right' },
          _react2.default.createElement(
            'svg',
            { className: 'facebook', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 96.124 96.123' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z', fill: '#E5E5E5' })
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'twitter', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', viewBox: '0 0 612 612', width: '20px', height: '20px' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: 'M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z', fill: '#E5E5E5' })
              )
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'pinterest', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 438.529 438.529' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M409.141,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.751,9.801,259.065,0,219.281,0   C179.5,0,142.812,9.801,109.22,29.407c-33.597,19.604-60.194,46.201-79.8,79.796C9.809,142.8,0.008,179.485,0.008,219.267   c0,44.35,12.085,84.611,36.258,120.767c24.172,36.172,55.863,62.912,95.073,80.232c-0.762-20.365,0.476-37.209,3.709-50.532   l28.267-119.348c-4.76-9.329-7.139-20.93-7.139-34.831c0-16.175,4.089-29.689,12.275-40.541   c8.186-10.85,18.177-16.274,29.979-16.274c9.514,0,16.841,3.14,21.982,9.42c5.142,6.283,7.705,14.181,7.705,23.7   c0,5.896-1.099,13.084-3.289,21.554c-2.188,8.471-5.041,18.273-8.562,29.409c-3.521,11.132-6.045,20.036-7.566,26.692   c-2.663,11.608-0.476,21.553,6.567,29.838c7.042,8.278,16.372,12.423,27.983,12.423c20.365,0,37.065-11.324,50.107-33.972   c13.038-22.655,19.554-50.159,19.554-82.514c0-24.938-8.042-45.21-24.129-60.813c-16.085-15.609-38.496-23.417-67.239-23.417   c-32.161,0-58.192,10.327-78.082,30.978c-19.891,20.654-29.836,45.352-29.836,74.091c0,17.132,4.854,31.505,14.56,43.112   c3.235,3.806,4.283,7.898,3.14,12.279c-0.381,1.143-1.141,3.997-2.284,8.562c-1.138,4.565-1.903,7.522-2.281,8.851   c-1.521,6.091-5.14,7.994-10.85,5.708c-14.654-6.085-25.791-16.652-33.402-31.689c-7.614-15.037-11.422-32.456-11.422-52.246   c0-12.753,2.047-25.505,6.14-38.256c4.089-12.756,10.468-25.078,19.126-36.975c8.663-11.9,19.036-22.417,31.123-31.549   c12.082-9.135,26.787-16.462,44.108-21.982s35.972-8.28,55.959-8.28c27.032,0,51.295,5.995,72.8,17.986   c21.512,11.992,37.925,27.502,49.252,46.537c11.327,19.036,16.987,39.403,16.987,61.101c0,28.549-4.948,54.243-14.842,77.086   c-9.896,22.839-23.887,40.778-41.973,53.813c-18.083,13.042-38.637,19.561-61.675,19.561c-11.607,0-22.456-2.714-32.548-8.135   c-10.085-5.427-17.034-11.847-20.839-19.273c-8.566,33.685-13.706,53.77-15.42,60.24c-3.616,13.508-11.038,29.119-22.27,46.819   c20.367,6.091,41.112,9.13,62.24,9.13c39.781,0,76.47-9.801,110.062-29.41c33.595-19.602,60.192-46.199,79.794-79.791   c19.606-33.599,29.407-70.287,29.407-110.065C438.527,179.485,428.74,142.795,409.141,109.203z', fill: '#E5E5E5' })
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'instagram', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 97.395 97.395' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895   V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385   h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572   c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332   c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188   H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953   c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z', fill: '#E5E5E5' })
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'snapchat', version: '1.1', id: 'Layer_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 511.117 511.117' },
            _react2.default.createElement('path', { fill: '#E5E5E5', d: 'M256,493.903c-0.883,0-2.648,0-3.531,0c-0.883,0-1.766,0-2.648,0c-30.014,0-45.903-8.828-64.441-22.069c-13.241-8.828-25.6-17.655-39.724-20.303c-7.945-0.883-15.007-1.766-22.069-1.766c-12.359,0-22.069,1.766-29.131,3.531c-4.414,0.883-7.945,1.766-10.593,1.766s-6.179-0.883-7.945-5.297c-0.883-4.414-1.766-7.945-2.648-11.476c-1.766-9.71-3.531-15.89-7.945-16.772C16.772,414.455,3.531,403.862,0,396.8c0-1.766,0-2.648,0-3.531c0-2.648,1.766-5.297,4.414-5.297c74.152-12.359,107.697-88.276,108.579-90.924l0,0c4.414-8.828,5.297-16.772,2.648-23.834c-5.297-12.359-22.069-17.655-32.662-21.186c-2.648-0.883-5.297-1.766-7.062-2.648c-22.069-8.828-23.834-17.655-22.952-22.069c1.766-7.945,11.476-13.241,20.303-13.241c2.648,0,4.414,0,6.179,0.883c9.71,4.414,18.538,7.062,26.483,7.062c10.593,0,15.007-4.414,15.89-5.297c0-5.297-0.883-10.593-0.883-15.89c-2.648-35.31-5.297-78.566,6.179-103.283C159.779,23.393,230.4,17.214,251.586,17.214c0.883,0,8.828,0,8.828,0h0.883c21.186,0,91.807,6.179,125.352,80.331c11.476,24.717,7.945,68.855,6.179,103.283v1.766c0,5.297-0.883,9.71-0.883,14.124c0.883,0.883,4.414,4.414,14.124,5.297l0,0c7.062,0,15.89-2.648,24.717-7.062c2.648-0.883,5.297-1.766,7.945-1.766c3.531,0,6.179,0.883,8.828,1.766l0,0c7.062,2.648,12.359,7.945,12.359,13.241c0,5.297-3.531,13.241-22.952,20.303c-1.766,0.883-4.414,1.766-7.062,2.648c-10.593,3.531-27.365,8.828-32.662,21.186c-2.648,6.179-1.766,14.124,2.648,23.834l0,0c1.766,3.531,32.662,79.448,106.814,91.807c2.648,0.883,4.414,2.648,4.414,5.297c0,0.883,0,1.766-0.883,3.531c-2.648,7.062-15.007,16.772-63.559,24.717c-3.531,0.883-5.297,5.297-7.945,16.772c-0.883,3.531-1.766,7.945-2.648,11.476s-3.531,5.297-7.062,5.297h-0.883c-2.648,0-6.179-0.883-10.593-1.766c-7.945-1.766-17.655-2.648-29.131-2.648c-7.062,0-14.124,0.883-21.186,1.766c-14.124,2.648-26.483,11.476-39.724,20.303C309.848,485.959,286.014,493.903,256,493.903' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'bottom' },
        _react2.default.createElement(
          'p',
          null,
          '\xA9 2017 JANE.COM'
        ),
        _react2.default.createElement('img', { src: '../../public/img/stoik.png' })
      )
    );
  };

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _account_popup = __webpack_require__(64);

var _account_popup2 = _interopRequireDefault(_account_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    string = _React$PropTypes.string,
    bool = _React$PropTypes.bool;

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      isHide: false,
      accountMenu: false
    };
    _this.hideBar = _this.hideBar.bind(_this);
    _this.isActive = _this.isActive.bind(_this);
    _this.toggleAccountMenu = _this.toggleAccountMenu.bind(_this);
    return _this;
  }

  Nav.prototype.hideBar = function hideBar() {
    var isHide = this.state.isHide;

    window.scrollY > this.prev && window.scrollY > 50 ? !isHide && this.setState({ isHide: true }) : isHide && this.setState({ isHide: false });
    this.prev = window.scrollY;
  };

  Nav.prototype.isActive = function isActive(value) {
    return value === this.props.pathname ? 'active' : '';
  };

  Nav.prototype.toggleAccountMenu = function toggleAccountMenu() {
    var obj = this.state;
    obj.accountMenu = !this.state.accountMenu;
    this.setState(obj);
  };

  Nav.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  };

  Nav.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  };

  Nav.prototype.render = function render() {
    var classAdd = this.state.isHide ? 'slide-in' : 'slide-out';
    var accountMenu = !this.state.accountMenu ? 'hide' : '';

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'nav' },
        _react2.default.createElement(
          'div',
          { className: 'nav-left' },
          _react2.default.createElement('img', { src: '../public/img/icons/menu.svg' }),
          _react2.default.createElement(
            'p',
            null,
            'MENU'
          ),
          _react2.default.createElement('input', { className: 'search', type: 'text', placeholder: 'Search...' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav-right' },
          _react2.default.createElement('img', { src: '../public/img/icons/heart.svg' }),
          _react2.default.createElement(
            'p',
            null,
            'FAVORITES'
          ),
          _react2.default.createElement('img', { src: '../public/img/icons/shopping-bag.svg' }),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/cart' },
              'MY BAG'
            )
          ),
          this.props.cartTotal ? _react2.default.createElement(
            'h1',
            { className: 'cart-qty' },
            this.props.cartTotal
          ) : '',
          this.props.loggedIn ? _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'p',
              {
                className: 'user',
                onClick: this.toggleAccountMenu },
              this.props.userName.toUpperCase()
            ),
            accountMenu !== 'hide' ? _react2.default.createElement(_account_popup2.default, { 'class': accountMenu, exitMenu: this.toggleAccountMenu }) : ''
          ) : _react2.default.createElement(
            'p',
            { className: this.props.pathname === '/logon' || this.props.pathname === '/signup' ? 'login' : '' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/logon' },
              'LOG IN'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: '../public/img/jane-logo_360.png' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'links ' + classAdd },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/clothing'), to: '/clothing' },
                'CLOTHING'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/accessories'), to: '/accessories' },
                'ACCESSORIES'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/home-decor'), to: '/home-decor' },
                'HOME DECOR'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/baby'), to: '/baby' },
                'BABY'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/kids'), to: '/kids' },
                'KIDS'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/misc'), to: '/misc' },
                'MISC'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/'), to: '/' },
                'ALL DEALS'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/new'), to: '/new' },
                'NEW DEALS'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/ending-soon'), to: '/ending-soon' },
                'ENDING SOON'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/popular'), to: '/popular' },
                'POPULAR'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { className: this.isActive('/sneak-peeks'), to: '/sneak-peeks' },
                'SNEAK PEEKS'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'spacer' },
        '&nbsp'
      )
    );
  };

  return Nav;
}(_react2.default.Component);

Nav.propTypes = {
  pathname: string,
  cartTotal: string,
  loggedIn: bool,
  userName: string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    userName: state.userName,
    cartTotal: state.cartItems
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Nav);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.routerContext = exports.historyContext = exports.location = exports.history = exports.matchContext = exports.action = undefined;

var _react = __webpack_require__(0);

var action = exports.action = _react.PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']);

var matchContext = exports.matchContext = _react.PropTypes.shape({
  addMatch: _react.PropTypes.func.isRequired,
  removeMatch: _react.PropTypes.func.isRequired
});

var history = exports.history = _react.PropTypes.shape({
  listen: _react.PropTypes.func.isRequired,
  listenBefore: _react.PropTypes.func.isRequired,
  push: _react.PropTypes.func.isRequired,
  replace: _react.PropTypes.func.isRequired,
  go: _react.PropTypes.func.isRequired
});

var location = exports.location = _react.PropTypes.shape({
  pathname: _react.PropTypes.string.isRequired,
  search: _react.PropTypes.string.isRequired,
  hash: _react.PropTypes.string.isRequired,
  state: _react.PropTypes.any,
  key: _react.PropTypes.string
});

var historyContext = exports.historyContext = _react.PropTypes.shape({
  action: action.isRequired,
  location: location.isRequired,
  push: _react.PropTypes.func.isRequired,
  replace: _react.PropTypes.func.isRequired,
  go: _react.PropTypes.func.isRequired,
  goBack: _react.PropTypes.func.isRequired,
  goForward: _react.PropTypes.func.isRequired,
  canGo: _react.PropTypes.func,
  block: _react.PropTypes.func.isRequired
});

var routerContext = exports.routerContext = _react.PropTypes.shape({
  transitionTo: _react.PropTypes.func.isRequired,
  replaceWith: _react.PropTypes.func.isRequired,
  blockTransitions: _react.PropTypes.func.isRequired,
  createHref: _react.PropTypes.func.isRequired
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.updateQty = updateQty;

var _actions = __webpack_require__(26);

function login(loggedIn, fullName, userId, cartItems) {
  return { type: _actions.LOGIN_USER, loggedIn: loggedIn, userName: fullName, userId: userId, cartItems: cartItems };
}

function logout() {
  return { type: _actions.LOGOUT_USER };
}

function updateQty(qty) {
  return { type: _actions.UPDATE_CART_TOTAL, cartItems: qty };
}
// a function that you call and returns a correctly shaped actioncreators
// it's useufl to seprate this out into pieces using an actions
// and actionscreators file instead of putting them on the u.i. to
// avoid using these two files

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _queryString = __webpack_require__(91);

var _MatchProvider = __webpack_require__(34);

var _MatchProvider2 = _interopRequireDefault(_MatchProvider);

var _Broadcasts = __webpack_require__(18);

var _LocationUtils = __webpack_require__(107);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringifyQuery = function stringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.transitionTo = function (location) {
      _this.props.onPush(_this.createLocation(location));
    }, _this.replaceWith = function (location) {
      _this.props.onReplace(_this.createLocation(location));
    }, _this.blockTransitions = function (prompt) {
      return _this.props.blockTransitions(prompt);
    }, _this.createHref = function (to) {
      var path = (0, _LocationUtils.createRouterPath)(to, _this.props.stringifyQuery);

      if (_this.props.basename) if (path === '/') path = _this.props.basename;else if (path.length >= 2 && path.charAt(0) === '/' && path.charAt(1) === '?') path = _this.props.basename + path.substring(1);else path = _this.props.basename + path;

      return _this.props.createHref(path);
    }, _this.state = {
      location: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.createLocation = function createLocation(location) {
    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    return (0, _LocationUtils.createRouterLocation)(location, parseQueryString, stringifyQuery);
  };

  StaticRouter.prototype.getRouterContext = function getRouterContext() {
    return {
      transitionTo: this.transitionTo,
      replaceWith: this.replaceWith,
      blockTransitions: this.blockTransitions,
      createHref: this.createHref
    };
  };

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: this.getRouterContext()
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      location: this.createLocation(this.props.location)
    });
  };

  StaticRouter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextLocation = this.createLocation(nextProps.location);

    if (!(0, _LocationUtils.locationsAreEqual)(this.state.location, nextLocation)) this.setState({ location: nextLocation });
  };

  StaticRouter.prototype.render = function render() {
    var location = this.state.location;
    var _props2 = this.props;
    var action = _props2.action;
    var children = _props2.children;


    return _react2.default.createElement(
      _Broadcasts.LocationBroadcast,
      { value: location },
      _react2.default.createElement(
        _MatchProvider2.default,
        null,
        typeof children === 'function' ? children({ action: action, location: location, router: this.getRouterContext() }) : _react2.default.Children.only(children)
      )
    );
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.defaultProps = {
  stringifyQuery: stringifyQuery,
  parseQueryString: _queryString.parse,
  createHref: function createHref(path) {
    return path;
  }
};
StaticRouter.childContextTypes = {
  router: _PropTypes.routerContext.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  StaticRouter.propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),

    action: _PropTypes.action.isRequired,
    location: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,

    onPush: _react.PropTypes.func.isRequired,
    onReplace: _react.PropTypes.func.isRequired,
    blockTransitions: _react.PropTypes.func,

    stringifyQuery: _react.PropTypes.func.isRequired,
    parseQueryString: _react.PropTypes.func.isRequired,
    createHref: _react.PropTypes.func.isRequired, // TODO: Clarify why this is useful

    basename: _react.PropTypes.string // TODO: Feels like we should be able to remove this
  };
}

exports.default = StaticRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname;
  var search = location.search;
  var hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(124);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _PathUtils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  }

  return location;
};

var looseEqual = function looseEqual(a, b) {
  if (a == null) return a == b;

  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (typeofA !== typeofB) return false;

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;

    return a.every(function (item, index) {
      return looseEqual(item, b[index]);
    });
  } else if (typeofA === 'object') {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return looseEqual(a[key], b[key]);
    });
  }

  return a === b;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && looseEqual(a.state, b.state);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var normalizeHeaderName = __webpack_require__(59);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(21);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(21);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(87);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = isPlainObject;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LocationSubscriber = exports.LocationBroadcast = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBroadcast = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationChannel = 'location';

var LocationBroadcast = exports.LocationBroadcast = function LocationBroadcast(props) {
  return _react2.default.createElement(_reactBroadcast.Broadcast, _extends({}, props, { channel: LocationChannel }));
};

var LocationSubscriber = exports.LocationSubscriber = function LocationSubscriber(props) {
  return _react2.default.createElement(_reactBroadcast.Subscriber, _extends({}, props, { channel: LocationChannel }));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The common public API for all *History components.
 */
var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  History.prototype.getChildContext = function getChildContext() {
    return {
      history: this.history
    };
  };

  History.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props;
    var createHistory = _props.createHistory;
    var historyOptions = _props.historyOptions;

    this.history = createHistory(historyOptions);
    this.unlisten = this.history.listen(function () {
      return _this2.forceUpdate();
    });
  };

  History.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  History.prototype.render = function render() {
    var history = this.history;
    var location = history.location;
    var action = history.action;


    return this.props.children({
      history: history,
      location: location,
      action: action
    });
  };

  return History;
}(_react2.default.Component);

History.childContextTypes = {
  history: _PropTypes.historyContext.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  History.propTypes = {
    children: _react.PropTypes.func.isRequired,
    createHistory: _react.PropTypes.func.isRequired,
    historyOptions: _react.PropTypes.object
  };
}

exports.default = History;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time') : void 0;

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(listener) {
    listeners.push(listener);

    return function () {
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var settle = __webpack_require__(51);
var buildURL = __webpack_require__(54);
var parseHeaders = __webpack_require__(60);
var isURLSameOrigin = __webpack_require__(58);
var createError = __webpack_require__(24);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(53);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(56);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(50);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN_USER = exports.LOGIN_USER = 'LOGIN_USER';
var LOGOUT_USER = exports.LOGOUT_USER = 'LOGOUT_USER';
var UPDATE_CART_TOTAL = exports.UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

var _actionCreators = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-useless-escape */


var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    func = _React$PropTypes.func;

var CreateAccount = function (_React$Component) {
  _inherits(CreateAccount, _React$Component);

  function CreateAccount(props) {
    _classCallCheck(this, CreateAccount);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      name: '',
      email: '',
      password: '',
      verifyPassword: '',
      validator: {
        name: null,
        email: null,
        password: null,
        verifyPassword: null,
        login: null
      }
    };
    _this.setValue = _this.setValue.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.handleFieldChange = _this.handleFieldChange.bind(_this);
    _this.isInvalid = _this.isInvalid.bind(_this);
    _this.buttonSubmitOnly = _this.buttonSubmitOnly.bind(_this);
    return _this;
  }

  CreateAccount.prototype.handleFieldChange = function handleFieldChange(e) {
    var obj = this.state;

    if (e.target.name === 'name') {
      if (!e.target.value && this.state.validator.name) {
        obj.validator.name = false;
        this.setState(obj);
      } else if (e.target.value && !this.state.validator.name) {
        obj.validator.name = true;
        this.setState(obj);
      }
      // throw error if no name is entered (addclass to input box and display error message p tag)
    } else if (e.target.name === 'email') {
      // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
      var re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(e.target.value) && e.target.value) {
        if (this.state.validator.email || this.state.validator.email === null) {
          obj.validator.email = false;
          this.setState(obj);
        }
      } else if (!this.state.validator.email && e.target.value) {
        obj.validator.email = true;
        this.setState(obj);
      }
    } else if (e.target.name === 'password') {
      // sets verifypassword to false if password field is changed
      if (e.target.value !== this.state.verifyPassword && this.state.validator.verifyPassword && this.state.validator.verifyPassword !== null) {
        obj.validator.verifyPassword = false;
      }

      if (e.target.value && e.target.value.length < 8) {
        if (this.state.validator.password || this.state.validator.password === null) {
          obj.validator.password = false;
          this.setState(obj);
        }
      } else if (e.target.value.length > 7 && !this.state.validator.password) {
        // automatically sets verify password to true if both fields match
        if (this.state.verifyPassword === e.target.value && !this.state.validator.verifyPassword) {
          obj.validator.verifyPassword = true;
        }
        obj.validator.password = true;
        this.setState(obj);
      } else {
        this.setState(obj);
      }
    } else if (e.target.name === 'verifyPassword') {
      if (e.target.value !== this.state.password) {
        if (this.state.validator.verifyPassword) {
          obj.validator.verifyPassword = false;
          this.setState(obj);
        } else if (e.target.value && this.state.validator.verifyPassword === null) {
          obj.validator.verifyPassword = false;
          this.setState(obj);
        }
      } else if (this.state.verifyPassword === this.state.password) {
        if (!this.state.validator.verifyPassword && this.state.validator.password) {
          obj.validator.verifyPassword = true;
          this.setState(obj);
        } else if (e.target.value && this.state.validator.verifyPassword === null) {
          obj.validator.verifyPassword = false;
          this.setState(obj);
        }
      }
    }
  };

  CreateAccount.prototype.setValue = function setValue(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  CreateAccount.prototype.buttonSubmitOnly = function buttonSubmitOnly(e) {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  };

  CreateAccount.prototype.submit = function submit(e) {
    var _this2 = this;

    e.preventDefault();

    var obj = this.state;
    if (obj.validator.name && obj.validator.email && obj.validator.password && obj.validator.verifyPassword) {
      _axios2.default.post('/signup', {
        data: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      }).then(function (res) {
        var user = res.data[0];
        if (user.email) {
          _this2.props.dispatch((0, _actionCreators.login)(true, user.fullname, user.id, +user.total));
          _this2.context.router.transitionTo('/');
        } else {
          obj.validator.login = true;
          _this2.setState(obj);
        }
      });
    } else {
      for (var key in obj.validator) {
        if (!obj.validator[key]) {
          obj.validator[key] = false;
        }
      }
      this.setState(obj);
    }
  };

  CreateAccount.prototype.isInvalid = function isInvalid(value) {
    return value === false ? 'invalid' : '';
  };

  CreateAccount.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'fb-wrapper' },
        _react2.default.createElement(
          'button',
          { className: 'fb-auth' },
          'SIGN UP WITH FACEBOOK'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            { className: 'or' },
            'or'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { className: 'login-form', onSubmit: this.submit },
          _react2.default.createElement(
            'p',
            {
              className: this.state.validator.login ? 'invalid-login' : 'hide'
            },
            'An Account with that email already exists.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-wrapper sign-up' },
            _react2.default.createElement('input', {
              className: this.isInvalid(this.state.validator.name),
              onBlur: this.handleFieldChange,
              name: 'name',
              onChange: this.setValue,
              value: this.state.name,
              onKeyPress: this.buttonSubmitOnly,
              placeholder: 'Full Name' }),
            _react2.default.createElement(
              'p',
              {
                className: this.state.validator.name === false ? 'error' : 'hide'
              },
              'Don\'t forget to enter your name.'
            ),
            _react2.default.createElement('input', {
              className: this.isInvalid(this.state.validator.email),
              onBlur: this.handleFieldChange,
              name: 'email',
              onChange: this.setValue,
              value: this.state.email,
              onKeyPress: this.buttonSubmitOnly,
              placeholder: 'Email Address' }),
            _react2.default.createElement(
              'p',
              {
                className: this.state.validator.email === false ? 'error' : 'hide'
              },
              'Don\'t forget to enter your email.'
            ),
            _react2.default.createElement('input', {
              type: 'password',
              className: this.isInvalid(this.state.validator.password),
              onBlur: this.handleFieldChange,
              name: 'password',
              onChange: this.setValue,
              value: this.state.password,
              onKeyPress: this.buttonSubmitOnly,
              placeholder: 'Password' }),
            _react2.default.createElement(
              'p',
              {
                className: this.state.validator.password === false ? 'error' : 'hide'
              },
              'Don\'t forget to come up with a great new password just for Jane! Make sure it\'s at least 8 characters.'
            ),
            _react2.default.createElement('input', {
              type: 'password',
              className: this.isInvalid(this.state.validator.verifyPassword),
              onBlur: this.handleFieldChange,
              name: 'verifyPassword',
              onChange: this.setValue,
              value: this.state.verifyPassword,
              onKeyPress: this.buttonSubmitOnly,
              placeholder: 'Confirm Password' }),
            _react2.default.createElement(
              'p',
              {
                className: this.state.validator.verifyPassword === false ? 'error' : 'hide'
              },
              'Enter your password one more time to make sure we got it right.'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sign-up' },
            'SIGN ME UP!'
          )
        )
      )
    );
  };

  return CreateAccount;
}(_react2.default.Component);

CreateAccount.propTypes = {
  dispatch: func
};

CreateAccount.contextTypes = {
  router: object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateAccount);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _actionCreators = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-useless-escape */


var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    func = _React$PropTypes.func,
    string = _React$PropTypes.string;

var SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      email: '',
      password: '',
      validator: {
        email: null,
        login: null
      },
      cartLogin: false
    };

    _this.login = _this.login.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.handleFieldChange = _this.handleFieldChange.bind(_this);
    _this.isInvalid = _this.isInvalid.bind(_this);
    return _this;
  }

  SignIn.prototype.login = function login() {
    this.props.login();
    if (!this.state.cartLogin) {
      this.setState({ cartLogin: true });
    }
  };

  SignIn.prototype.setValue = function setValue(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  SignIn.prototype.submit = function submit(e) {
    var _this2 = this;

    e.preventDefault();
    var obj = this.state;
    if (obj.validator.email && obj.password) {
      _axios2.default.get('/login/' + this.state.email + '/' + this.state.password).then(function (res) {
        var user = res.data[0];
        if (user.fullname) {
          _this2.props.dispatch((0, _actionCreators.login)(true, user.fullname, user.id, user.total));
          _this2.context.router.transitionTo('/');
        } else {
          obj.validator.login = true;
          _this2.setState(obj);
        }
      });
    }
  };

  SignIn.prototype.handleFieldChange = function handleFieldChange(e) {
    var obj = this.state;

    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value)) {
      if (this.state.validator.email !== false) {
        obj.validator.email = false;
        this.setState(obj);
      }
    } else {
      if (this.state.validator.email !== true) {
        obj.validator.email = true;
        this.setState(obj);
      }
    }
  };

  SignIn.prototype.isInvalid = function isInvalid(value) {
    return value === false ? 'invalid' : '';
  };

  SignIn.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.pathname === '/logon' ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'fb-wrapper' },
          _react2.default.createElement(
            'button',
            { className: 'fb-auth' },
            'LOG IN WITH FACEBOOK'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { className: 'or' },
              'or'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { className: 'login-form', onSubmit: this.submit },
            _react2.default.createElement(
              'p',
              {
                className: this.state.validator.login ? 'invalid-login' : 'hide'
              },
              'Invalid email address or password. Please try again.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-wrapper login' },
              _react2.default.createElement('input', {
                className: this.isInvalid(this.state.validator.email),
                onBlur: this.handleFieldChange,
                name: 'email',
                onChange: this.setValue,
                value: this.state.email,
                placeholder: 'Email Address' }),
              _react2.default.createElement(
                'p',
                {
                  className: this.state.validator.email === false ? 'error' : 'hide'
                },
                'Please enter a valid email address.'
              ),
              _react2.default.createElement('input', {
                type: 'password',
                name: 'password',
                onChange: this.setValue,
                value: this.state.password,
                placeholder: 'Password' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn' },
              'LOG IN'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Forgot your password?'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/signup' },
              _react2.default.createElement(
                'p',
                null,
                'New? Sign up.'
              )
            )
          )
        )
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { className: 'login-form', onSubmit: this.submit },
            !this.state.cartLogin ? '' : _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h2',
                {
                  className: this.state.validator.login ? 'invalid-login' : 'hide'
                },
                'Invalid email address or password. Please try again.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-wrapper login' },
                _react2.default.createElement('input', {
                  className: this.isInvalid(this.state.validator.email),
                  onBlur: this.handleFieldChange,
                  name: 'email',
                  onChange: this.setValue,
                  value: this.state.email,
                  placeholder: 'Email Address' }),
                _react2.default.createElement(
                  'p',
                  {
                    className: this.state.validator.email === false ? 'error' : 'hide'
                  },
                  'Please enter a valid email address.'
                ),
                _react2.default.createElement('input', {
                  type: 'password',
                  name: 'password',
                  onChange: this.setValue,
                  value: this.state.password,
                  placeholder: 'Password' })
              ),
              _react2.default.createElement('div', { className: 'line' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn', onClick: this.login },
              'LOG IN'
            ),
            !this.state.cartLogin ? '' : _react2.default.createElement(
              'p',
              null,
              'Forgot your password?'
            )
          )
        ),
        !this.state.cartLogin ? '' : _react2.default.createElement(
          'div',
          { className: 'fb-wrapper' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { className: 'or' },
              'or'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'fb-auth' },
            'LOG IN WITH FACEBOOK'
          )
        )
      )
    );
  };

  return SignIn;
}(_react2.default.Component);

SignIn.contextTypes = {
  router: object
};

SignIn.propTypes = {
  location: object,
  login: func,
  dispatch: func,
  pathname: string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignIn);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(86);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = Symbol;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(33);
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsFunc;


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;



function verifyPlainObject(value, displayName, methodName) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MatchProvider = function (_React$Component) {
  _inherits(MatchProvider, _React$Component);

  function MatchProvider(props) {
    _classCallCheck(this, MatchProvider);

    // **IMPORTANT** we must mutate matches, never reassign, in order for
    // server rendering to work w/ the two-pass render approach for Miss
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.addMatch = function (match) {
      _this.matches.push(match);
    };

    _this.removeMatch = function (match) {
      _this.matches.splice(_this.matches.indexOf(match), 1);
    };

    _this.matches = [];
    _this.subscribers = [];
    _this.hasMatches = null; // use null for initial value
    _this.serverRouterIndex = null;
    return _this;
  }

  MatchProvider.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    return {
      match: {
        addMatch: this.addMatch,
        removeMatch: this.removeMatch,
        matches: this.matches,
        parent: this.props.match,
        serverRouterIndex: this.serverRouterIndex,
        subscribe: function subscribe(fn) {
          _this2.subscribers.push(fn);
          return function () {
            _this2.subscribers.splice(_this2.subscribers.indexOf(fn), 1);
          };
        }
      }
    };
  };

  MatchProvider.prototype.componentDidUpdate = function componentDidUpdate() {
    this.notifySubscribers();
  };

  MatchProvider.prototype.componentWillMount = function componentWillMount() {
    var serverRouter = this.context.serverRouter;

    if (serverRouter) {
      this.serverRouterIndex = serverRouter.registerMatchContext(this.matches);
    }
  };

  MatchProvider.prototype.componentDidMount = function componentDidMount() {
    this.notifySubscribers();
  };

  MatchProvider.prototype.notifySubscribers = function notifySubscribers() {
    var _this3 = this;

    // React's contract is that cDM of descendants is called before cDM of
    // ancestors, so here we can safely check if we found a match
    if (this.subscribers.length) {
      this.hasMatches = this.matches.length !== 0;
      this.subscribers.forEach(function (fn) {
        return fn(_this3.hasMatches);
      });
    }
  };

  MatchProvider.prototype.render = function render() {
    return this.props.children;
  };

  return MatchProvider;
}(_react2.default.Component);

MatchProvider.childContextTypes = {
  match: _PropTypes.matchContext.isRequired
};
MatchProvider.contextTypes = {
  serverRouter: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  MatchProvider.propTypes = {
    match: _react.PropTypes.any,
    children: _react.PropTypes.node
  };
}

exports.default = MatchProvider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(119);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _MatcherCache = __webpack_require__(109);

var _MatcherCache2 = _interopRequireDefault(_MatcherCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cache[exactly][pattern] contains getMatcher(pattern, exactly)
var cache = {
  true: new _MatcherCache2.default(),
  false: new _MatcherCache2.default()
};

var getMatcher = function getMatcher(pattern, exactly) {
  var exactlyStr = exactly ? 'true' : 'false';
  var matcher = cache[exactlyStr].get(pattern);

  if (!matcher) {
    var keys = [];
    var regex = (0, _pathToRegexp2.default)(pattern, keys, { end: exactly, strict: true });
    matcher = { keys: keys, regex: regex };
    cache[exactlyStr].set(pattern, matcher);
  }

  return matcher;
};

var parseParams = function parseParams(pattern, match, keys) {
  return match.slice(1).reduce(function (params, value, index) {
    params[keys[index].name] = decodeURIComponent(value);
    return params;
  }, {});
};

var matchPattern = function matchPattern(pattern, location, matchExactly, parent) {
  var specialCase = !matchExactly && pattern === '/';

  if (specialCase) {
    return {
      params: null,
      isExact: location.pathname === '/',
      pathname: '/'
    };
  } else {
    if (parent && pattern.charAt(0) !== '/') {
      pattern = parent.pathname + (parent.pathname.charAt(parent.pathname.length - 1) !== '/' ? '/' : '') + pattern;
    }

    var matcher = getMatcher(pattern, matchExactly);
    var match = matcher.regex.exec(location.pathname);

    if (match) {
      var params = parseParams(pattern, match, matcher.keys);
      var pathname = match[0];
      var isExact = pathname === location.pathname;

      return { params: params, isExact: isExact, pathname: pathname };
    } else {
      return null;
    }
  }
};

exports.default = matchPattern;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(77);

var _store2 = _interopRequireDefault(_store);

var _AllDeals = __webpack_require__(62);

var _AllDeals2 = _interopRequireDefault(_AllDeals);

var _login = __webpack_require__(68);

var _login2 = _interopRequireDefault(_login);

var _cart = __webpack_require__(65);

var _cart2 = _interopRequireDefault(_cart);

var _product = __webpack_require__(73);

var _product2 = _interopRequireDefault(_product);

var _signup = __webpack_require__(74);

var _signup2 = _interopRequireDefault(_signup);

var _order_history = __webpack_require__(72);

var _order_history2 = _interopRequireDefault(_order_history);

var _account_info = __webpack_require__(63);

var _account_info2 = _interopRequireDefault(_account_info);

var _order_complete = __webpack_require__(71);

var _order_complete2 = _interopRequireDefault(_order_complete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      'div',
      { className: 'main' },
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/cart', component: _cart2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/logon', component: _login2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/signup', component: _signup2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/clothing', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/accessories', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/baby', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/kids', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/misc', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/new', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/ending-soon', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/popular', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/sneak-peeks', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/home-decor', component: _AllDeals2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/history', component: _order_history2.default }),
      _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/account', component: _account_info2.default }),
      _react2.default.createElement(_reactRouter.Match, { pattern: '/productpage/:id', component: _product2.default }),
      _react2.default.createElement(_reactRouter.Match, { pattern: '/confirmation/:id', component: _order_complete2.default })
    )
  );
};

exports.default = App;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var bind = __webpack_require__(25);
var Axios = __webpack_require__(47);
var defaults = __webpack_require__(15);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(22);
axios.CancelToken = __webpack_require__(46);
axios.isCancel = __webpack_require__(23);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(61);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(22);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(15);
var utils = __webpack_require__(2);
var InterceptorManager = __webpack_require__(48);
var dispatchRequest = __webpack_require__(49);
var isAbsoluteURL = __webpack_require__(57);
var combineURLs = __webpack_require__(55);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var transformData = __webpack_require__(52);
var isCancel = __webpack_require__(23);
var defaults = __webpack_require__(15);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(24);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _largeproduct = __webpack_require__(67);

var _largeproduct2 = _interopRequireDefault(_largeproduct);

var _smallproduct = __webpack_require__(75);

var _smallproduct2 = _interopRequireDefault(_smallproduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react2.default.PropTypes.object;

var AllDeals = function (_React$Component) {
  _inherits(AllDeals, _React$Component);

  function AllDeals(props) {
    _classCallCheck(this, AllDeals);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      products: []
    };
    return _this;
  }

  AllDeals.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _axios2.default.get('/products', {
      params: {
        path: this.props.location.pathname
      }
    }).then(function (res) {
      var products = res.data;
      _this2.setState({ products: products });
    });
  };

  AllDeals.prototype.render = function render() {
    var promise = this.state.products[0];
    return !promise ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(_footer2.default, null)
    ) : _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(
        'div',
        { className: 'shop' },
        _react2.default.createElement(
          'div',
          { className: 'ads' },
          _react2.default.createElement(
            'div',
            { className: 'small-ad' },
            _react2.default.createElement('img', { src: '../../public/img/jane-app.jpg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'small-ad' },
            _react2.default.createElement('img', { src: '../../public/img/spring.jpg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'large-ad' },
            _react2.default.createElement('img', { src: '../../public/img/spree.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'products-container' },
          this.state.products.splice(0, 2).map(function (product) {
            return _react2.default.createElement(_largeproduct2.default, _extends({}, product, { key: product.id }));
          }),
          this.state.products.map(function (product) {
            return _react2.default.createElement(_smallproduct2.default, _extends({}, product, { key: product.id }));
          })
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return AllDeals;
}(_react2.default.Component);

AllDeals.propTypes = {
  location: object
};

exports.default = AllDeals;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-useless-escape */


var number = _react2.default.PropTypes.number;

var Account = function (_React$Component) {
  _inherits(Account, _React$Component);

  function Account(props) {
    _classCallCheck(this, Account);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      changePassword: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      validator: {
        name: true,
        email: true,
        pass: true,
        valPass: true
      },
      updateSuccess: false
    };
    _this.togglePassword = _this.togglePassword.bind(_this);
    _this.updateProfile = _this.updateProfile.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    return _this;
  }

  Account.prototype.togglePassword = function togglePassword() {
    this.setState({ changePassword: !this.state.changePassword });
  };

  Account.prototype.updateProfile = function updateProfile(e) {
    var _this2 = this;

    e.preventDefault();
    var re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var obj = this.state;

    if (re.test(obj.email)) {
      obj.validator.email = true;
    } else {
      obj.validator.email = false;
    }

    if (obj.name) {
      obj.validator.name = true;
    } else {
      obj.validator.name = false;
    }

    if (obj.changePassword) {
      if (obj.password.length >= 8) {
        obj.validator.pass = true;
      } else {
        obj.validator.pass = false;
      }

      if (obj.confirmPassword === obj.password) {
        obj.validator.valPass = true;
      } else {
        obj.validator.valPass = false;
      }

      if (obj.validator.pass && obj.validator.valPass && obj.validator.name && obj.validator.email) {
        this.setState({ validator: obj.validator });
        console.log('updating validator');
        _axios2.default.put('/updateAll', {
          data: {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            id: this.props.userId
          }
        }).then(function (res) {
          if (res.data === 'Account Updated') {
            _this2.setState({ updateSuccess: true });
            var that = _this2;
            setTimeout(function () {
              that.setState({ updateSuccess: false });
            }, 4000);
          }
        });
      } else {
        this.setState({ validator: obj.validator });
      }
    } else {
      if (obj.validator.name && obj.validator.email) {
        this.setState({ validator: obj.validator });
        _axios2.default.put('/updateAccount', {
          data: {
            name: obj.name,
            email: obj.email,
            id: this.props.userId
          }
        }).then(function (res) {
          console.log(res.data);
          if (res.data === 'Account Updated') {
            console.log('running');
            _this2.setState({ updateSuccess: true });
            var that = _this2;
            setTimeout(function () {
              that.setState({ updateSuccess: false });
            }, 4000);
          }
        });
      } else {
        this.setState({ validator: obj.validator });
      }
    }
  };

  Account.prototype.setValue = function setValue(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  };

  Account.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    _axios2.default.get('/getAccount/' + this.props.userId).then(function (res) {
      var userData = res.data[0];
      var obj = _this3.state;
      obj.name = userData.fullname;
      obj.email = userData.email;
      _this3.setState(obj);
    });
  };

  Account.prototype.render = function render() {
    console.log(this.state.updateSuccess);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'account' },
        _react2.default.createElement(
          'div',
          { className: 'update_profile' },
          _react2.default.createElement(
            'h1',
            null,
            'YOUR INFORMATION'
          ),
          this.state.updateSuccess ? _react2.default.createElement(
            'div',
            { className: 'success' },
            _react2.default.createElement(
              'p',
              null,
              'Your Account has been updated!'
            )
          ) : '',
          _react2.default.createElement(
            'form',
            { onSubmit: this.updateProfile },
            _react2.default.createElement('input', { placeholder: 'Full name',
              onChange: this.setValue,
              name: 'name',
              value: this.state.name,
              className: !this.state.validator.name ? 'error mar-bot' : ''
            }),
            !this.state.validator.name ? _react2.default.createElement(
              'p',
              { className: 'invalid' },
              'Enter your name.'
            ) : '',
            _react2.default.createElement('input', { placeholder: 'Email Address',
              onChange: this.setValue,
              name: 'email',
              value: this.state.email,
              className: !this.state.validator.email ? 'error' : ''
            }),
            !this.state.validator.email ? _react2.default.createElement(
              'p',
              { className: 'invalid' },
              'Invalid Email.'
            ) : '',
            this.state.changePassword ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'clearfix' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.togglePassword },
                  'Nevermind, don\'t change it.'
                )
              ),
              _react2.default.createElement('input', { placeholder: 'Password',
                onChange: this.setValue,
                name: 'password',
                value: this.state.password,
                className: !this.state.validator.pass ? 'error mar-bot' : ''
              }),
              !this.state.validator.pass ? _react2.default.createElement(
                'p',
                { className: 'invalid' },
                'Password must be at least 8 characters in length.'
              ) : '',
              _react2.default.createElement('input', { placeholder: 'Confirm Password',
                onChange: this.setValue,
                name: 'confirmPassword',
                value: this.state.confirmPassword,
                className: !this.state.validator.valPass ? 'error' : ''
              }),
              !this.state.validator.valPass ? _react2.default.createElement(
                'p',
                { className: 'invalid' },
                'Passwords must match!'
              ) : '',
              _react2.default.createElement('div', { className: 'line clearfix' })
            ) : _react2.default.createElement(
              'div',
              { className: 'clearfix' },
              _react2.default.createElement(
                'span',
                { onClick: this.togglePassword },
                'Change your Password'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn' },
              'UPDATE ACCOUNT'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'support' },
          _react2.default.createElement(
            'h1',
            null,
            'SUPPORT'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Should you have any questions, feel free to email us at ',
            _react2.default.createElement(
              'span',
              null,
              'support@jane.com'
            ),
            '.'
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return Account;
}(_react2.default.Component);

Account.propTypes = {
  userId: number
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    userId: state.userId
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Account);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _actionCreators = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    func = _React$PropTypes.func,
    string = _React$PropTypes.string;

var AccountMenu = function (_React$Component) {
  _inherits(AccountMenu, _React$Component);

  function AccountMenu(props) {
    _classCallCheck(this, AccountMenu);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.logout = _this.logout.bind(_this);
    _this.exitMenu = _this.exitMenu.bind(_this);
    return _this;
  }

  AccountMenu.prototype.exitMenu = function exitMenu() {
    this.props.exitMenu();
  };

  AccountMenu.prototype.logout = function logout() {
    this.props.dispatch((0, _actionCreators.logout)());
    this.context.router.transitionTo('/logon');
  };

  AccountMenu.prototype.componentWillMount = function componentWillMount() {
    document.body.style.overflow = 'hidden';
  };

  AccountMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    document.body.style.overflow = 'scroll';
  };

  AccountMenu.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'account-menu' },
      _react2.default.createElement('div', { className: 'up-arrow' }),
      _react2.default.createElement('div', {
        onClick: this.exitMenu,
        className: 'menu-background ' + this.props.class }),
      _react2.default.createElement(
        'div',
        { className: 'menu-details' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/history' },
            _react2.default.createElement(
              'p',
              null,
              'Order History'
            ),
            _react2.default.createElement('img', { src: '../public/img/icons/clock.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/account' },
            _react2.default.createElement(
              'p',
              null,
              'View Account'
            ),
            _react2.default.createElement('img', { src: '../public/img/icons/account.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { className: 'no-pad' },
            _react2.default.createElement(
              'p',
              { className: 'logout', onClick: this.logout },
              'Log Out'
            )
          )
        )
      )
    );
  };

  return AccountMenu;
}(_react2.default.Component);

AccountMenu.propTypes = {
  exitMenu: func,
  dispatch: func,
  class: string
};

AccountMenu.contextTypes = {
  router: object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    userName: state.userName
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(AccountMenu);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _signin = __webpack_require__(28);

var _signin2 = _interopRequireDefault(_signin);

var _createAccount = __webpack_require__(27);

var _createAccount2 = _interopRequireDefault(_createAccount);

var _new_address = __webpack_require__(69);

var _new_address2 = _interopRequireDefault(_new_address);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _actionCreators = __webpack_require__(9);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    string = _React$PropTypes.string,
    object = _React$PropTypes.object,
    number = _React$PropTypes.number,
    func = _React$PropTypes.func,
    bool = _React$PropTypes.bool;

var Cart = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      cart: [],
      login: false,
      addressMenu: false,
      billingMenu: false,
      shippingAddress: {},
      checked: false,
      validator: {
        name: true,
        cardNumber: true,
        exp_month: true,
        exp_year: true,
        cvv: true,
        address: true,
        city: true,
        state: true,
        zip: true,
        shipping: true
      },
      payInfo: {
        name: '',
        cardNumber: '',
        exp_month: '',
        exp_year: '',
        cvv: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      }
    };
    _this.login = _this.login.bind(_this);
    _this.convertMoney = _this.convertMoney.bind(_this);
    _this.editQty = _this.editQty.bind(_this);
    _this.toggleEdit = _this.toggleEdit.bind(_this);
    _this.removeFromCart = _this.removeFromCart.bind(_this);
    _this.toggleAddress = _this.toggleAddress.bind(_this);
    _this.toggleBilling = _this.toggleBilling.bind(_this);
    _this.updateBillAddress = _this.updateBillAddress.bind(_this);
    _this.updateInput = _this.updateInput.bind(_this);
    _this.submitOrder = _this.submitOrder.bind(_this);
    return _this;
  }

  Cart.prototype.toggleAddress = function toggleAddress(e) {
    var obj = this.state;
    if (e.ship_address) {
      obj.shippingAddress = e;
    }
    obj.addressMenu = !this.state.addressMenu;
    this.setState(obj);
  };

  Cart.prototype.editQty = function editQty(e) {
    var _this2 = this;

    e.preventDefault();
    if (!isNaN(e.target.value) && +e.target.value < 10) {
      var cart = this.state.cart;
      var id = +e.target.id;
      for (var i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i].product_id === id) {
          cart[i].qty = +e.target.value;
          break;
        }
      }
      if (e.target.value === '' || e.target.value === '00') {
        this.setState({ cart: cart });
      } else {
        _axios2.default.put('/updateCartItem/' + id + '/' + +e.target.value + '/' + this.props.userId).then(function (res) {
          _this2.props.dispatch((0, _actionCreators.updateQty)(+res.data[0].total));
          _this2.setState({ cart: cart });
        });
      }
    }
  };

  Cart.prototype.convertMoney = function convertMoney(value) {
    value += '';
    value = value.split('.');
    if (value[1] && value[1].length === 1) {
      value[1] += '0';
    } else if (!value[1]) {
      value[1] = '00';
    }
    return value.join('.');
  };

  Cart.prototype.login = function login() {
    if (!this.state.login) {
      this.setState({ login: true });
    }
  };

  Cart.prototype.toggleBilling = function toggleBilling() {
    var obj = this.state;
    obj.billingMenu = !this.state.billingMenu;
    this.setState(obj);
  };

  Cart.prototype.updateBillAddress = function updateBillAddress(e) {
    var obj = this.state;
    obj.checked = !obj.checked;
    if (obj.checked && obj.shippingAddress.ship_address) {
      obj.payInfo.address = obj.shippingAddress.ship_address;
      obj.payInfo.city = obj.shippingAddress.ship_city;
      obj.payInfo.state = obj.shippingAddress.ship_state;
      obj.payInfo.zip = obj.shippingAddress.ship_zipcode;
    }
    this.setState(obj);
  };

  Cart.prototype.updateInput = function updateInput(e) {
    var obj = this.state;
    obj.payInfo[e.target.name] = e.target.value;
    this.setState(obj);
  };

  Cart.prototype.toggleEdit = function toggleEdit(e, f) {
    e = !e;
    var obj = this.state.cart;
    for (var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].product_id === f) {
        obj[i].edit = e;
        this.setState({ cart: obj });
        break;
      }
    }
  };

  Cart.prototype.removeFromCart = function removeFromCart(id, userId) {
    var _this3 = this;

    _axios2.default.delete('/deleteItem/' + id + '/' + userId).then(function (res) {
      var obj = _this3.state.cart;
      _this3.props.dispatch((0, _actionCreators.updateQty)(+res.data[0].total));
      for (var i = 0; i < _this3.state.cart.length; i++) {
        if (_this3.state.cart[i].id === id) {
          obj.splice(i, 1);
          _this3.setState({ cart: obj });
        }
      }
    });
  };

  Cart.prototype.submitOrder = function submitOrder(e) {
    var _this4 = this;

    e.preventDefault();
    var obj = this.state;
    var validator = this.state.validator;
    var validInput = true;
    for (var key in validator) {
      validator[key] = true;
    }
    if (!obj.shippingAddress.ship_first_name) validator.shipping = false;
    if (!obj.payInfo.name) validator.name = false;
    if (!obj.payInfo.cardNumber || obj.payInfo.cardNumber.length !== 16 || isNaN(obj.payInfo.cardNumber * 1)) validator.cardNumber = false;
    if (!obj.payInfo.exp_month) validator.exp_month = false;
    if (!obj.payInfo.exp_year) validator.exp_year = false;
    if (!obj.payInfo.cvv || obj.payInfo.cvv.length !== 3 || isNaN(obj.payInfo.cvv * 1)) validator.cvv = false;
    if (!obj.payInfo.address) validator.address = false;
    if (!obj.payInfo.city) validator.city = false;
    if (!obj.payInfo.state) validator.state = false;
    if (!obj.payInfo.zip || obj.payInfo.zip.length < 4 || obj.payInfo.zip.length > 10 || isNaN(obj.payInfo.zip * 1)) validator.zip = false;
    obj.validator = validator;

    for (var _key in validator) {
      if (!validator[_key]) {
        validInput = false;
      }
    }

    if (validInput) {
      var cartItems = [];
      for (var i = 0; i < obj.cart.length; i++) {
        cartItems.push({
          product_id: obj.cart[i].product_id,
          qty: obj.cart[i].qty,
          price: obj.cart[i].sale,
          shipping: obj.cart[i].shipping
        });
      }
      _axios2.default.post('/createOrder', {
        data: {
          id: this.props.userId,
          name: obj.shippingAddress.ship_first_name + ' ' + obj.shippingAddress.ship_last_name,
          address: obj.payInfo.address,
          city: obj.payInfo.city,
          state: obj.payInfo.state,
          zip: obj.payInfo.zip,
          cart: cartItems
        }
      }).then(function (res) {
        if (res.data[0]) {
          _this4.props.dispatch((0, _actionCreators.updateQty)(0));
          _this4.context.router.transitionTo('/confirmation/' + res.data[0].id);
        } else {
          console.log('something went wrong', res);
        }
      });
    } else {
      this.setState(obj);
    }
  };

  Cart.prototype.componentDidMount = function componentDidMount() {
    var _this5 = this;

    var obj = this.state;
    if (this.props.userId) {
      _axios2.default.get('/getCart/' + this.props.userId).then(function (res) {
        var cart = res.data;
        if (cart[cart.length - 1].ship_address) {
          obj.shippingAddress = cart.pop();
        }

        for (var i = 0; i < cart.length; i++) {
          cart[i].edit = false;
        }
        obj.cart = cart;
        _this5.setState(obj);
      });
    } else {
      _axios2.default.get('/getCart/' + 'getSession').then(function (res) {
        var cart = res.data;
        for (var i = 0; i < cart.length; i++) {
          cart[i].edit = false;
        }
        _this5.setState({ cart: cart });
      });
    }
  };

  Cart.prototype.render = function render() {
    var _this6 = this;

    var total = void 0,
        tax = void 0;
    if (this.state.cart) {
      total = +this.state.cart.reduce(function (acc, val) {
        return acc + val.sale * val.qty + val.shipping * val.qty;
      }, 0).toFixed(2);
      tax = +(total * 0.08).toFixed(2);
    }

    var setAddress = !this.state.addressMenu ? 'hide' : '';

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'checkout' },
        _react2.default.createElement(
          'div',
          { className: 'cart-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'cart' },
            _react2.default.createElement(
              'h1',
              null,
              'YOUR CART'
            ),
            this.props.cart ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'item-header' },
                _react2.default.createElement(
                  'div',
                  { className: 'item-left' },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'DESCRIPTION'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item-right' },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'QTY'
                  ),
                  _react2.default.createElement(
                    'h2',
                    null,
                    'SHIPPING'
                  ),
                  _react2.default.createElement(
                    'h2',
                    null,
                    'PRICE'
                  )
                )
              ),
              this.state.cart.map(function (item) {
                return _react2.default.createElement(
                  'div',
                  { className: 'cart-item', key: item.product_id },
                  _react2.default.createElement(
                    'div',
                    { className: 'cart-item-top' },
                    _react2.default.createElement(
                      'div',
                      { className: 'cart-item-left' },
                      _react2.default.createElement('img', { src: '../' + item.thumb }),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          null,
                          '$',
                          item.sale,
                          ' ',
                          item.name
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          'Seller: ',
                          item.seller
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'cart-item-right' },
                      _react2.default.createElement(
                        'h2',
                        null,
                        item.qty,
                        ' |',
                        _react2.default.createElement(
                          'span',
                          { onClick: function onClick() {
                              return _this6.toggleEdit(item.edit, item.product_id);
                            } },
                          !item.edit ? ' Edit' : ' Close'
                        )
                      ),
                      _react2.default.createElement(
                        'h2',
                        null,
                        '$',
                        item.shipping
                      ),
                      _react2.default.createElement(
                        'h2',
                        null,
                        '$',
                        item.sale
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: !item.edit ? 'hide' : 'clearfix' },
                    _react2.default.createElement(
                      'div',
                      { className: 'edit-qty' },
                      _react2.default.createElement('input', {
                        id: item.product_id,
                        value: item.qty,
                        onChange: _this6.editQty }),
                      _react2.default.createElement('img', { onClick: function onClick() {
                          return _this6.removeFromCart(item.id, item.customer_id);
                        }, src: '../../public/img/icons/cancel.svg' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'cart-item-bottom' },
                    _react2.default.createElement(
                      'div',
                      { className: 'price-ship-details' },
                      _react2.default.createElement(
                        'h2',
                        null,
                        'Estimate to ship by Tue, Mar 28.'
                      ),
                      _react2.default.createElement(
                        'h2',
                        null,
                        '$',
                        _this6.convertMoney((item.sale * item.qty + item.shipping * item.qty).toFixed(2))
                      )
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Seller usually ships within 2 business days.'
                    )
                  )
                );
              }),
              _react2.default.createElement(
                'div',
                { className: 'order-total' },
                _react2.default.createElement(
                  'div',
                  { className: 'order-right' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'h1',
                      null,
                      'TOTAL BEFORE TAX'
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      '$',
                      this.convertMoney(total)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'h1',
                      null,
                      'TAX'
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      '$',
                      this.convertMoney(tax)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'final-price' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'ORDER TOTAL:'
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      '$',
                      this.convertMoney((total + tax).toFixed(2))
                    )
                  )
                )
              ),
              this.state.cart.length > 1 ? _react2.default.createElement(
                'div',
                { className: 'note' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Note: Each deal is charged individually. Since you have multiple deals in your cart, you will see a transaction on your credit card for each deal.'
                )
              ) : '',
              this.props.loggedIn ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'shipping-header' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'SHIPPING ADDRESS'
                  ),
                  _react2.default.createElement(
                    'h1',
                    null,
                    'PAYMENT METHOD'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'shipping-payment' },
                  _react2.default.createElement(
                    'div',
                    { className: 'new-address' },
                    this.state.shippingAddress.ship_address ? _react2.default.createElement(
                      'div',
                      { className: 'shipping_address' },
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'radio',
                          checked: 'checked',
                          disabled: 'true' })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          null,
                          this.state.shippingAddress.ship_first_name,
                          ' ',
                          this.state.shippingAddress.ship_last_name
                        ),
                        _react2.default.createElement(
                          'h3',
                          null,
                          this.state.shippingAddress.ship_address
                        ),
                        _react2.default.createElement(
                          'h3',
                          null,
                          this.state.shippingAddress.ship_city,
                          ', ',
                          this.state.shippingAddress.ship_state,
                          ' ',
                          this.state.shippingAddress.ship_zipcode
                        )
                      )
                    ) : '',
                    _react2.default.createElement(
                      'button',
                      { onClick: this.toggleAddress, className: 'btn-large-font btn-empty-cart' },
                      'USE A NEW ADDRESS'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: this.state.validator.shipping ? 'hide' : 'error' },
                      'Please enter a shipping address.'
                    )
                  ),
                  setAddress !== 'hide' ? _react2.default.createElement(_new_address2.default, { 'class': setAddress, exitMenu: this.toggleAddress }) : '',
                  !this.state.billingMenu ? _react2.default.createElement(
                    'div',
                    { className: 'payment-method' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'SELECT A PAYMENT METHOD:'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'pay-btm' },
                      _react2.default.createElement(
                        'button',
                        { onClick: this.toggleBilling },
                        'CARD'
                      ),
                      _react2.default.createElement('img', { src: '../../public/img/icons/paypal.png' }),
                      _react2.default.createElement(
                        'button',
                        null,
                        'DWOLLA'
                      )
                    )
                  ) : _react2.default.createElement(
                    'div',
                    { className: 'pay-by-card' },
                    _react2.default.createElement(
                      'span',
                      { onClick: this.toggleBilling },
                      _react2.default.createElement('img', { src: '../../public/img/icons/billingClose.svg' }),
                      ' Select a different payment method'
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      'ADD A NEW CREDIT CARD'
                    ),
                    _react2.default.createElement(
                      'form',
                      null,
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        name: 'name',
                        value: this.state.payInfo.name,
                        className: this.state.validator.name ? 'input-text' : 'input-text invalid',
                        placeholder: 'Cardholder Name' }),
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        name: 'cardNumber',
                        value: this.state.payInfo.cardNumber,
                        className: this.state.validator.cardNumber ? 'input-text' : 'input-text invalid',
                        placeholder: 'Card Number' }),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateInput,
                          value: this.state.payInfo.exp_month,
                          className: this.state.validator.exp_month ? 'drop-down-box' : 'drop-down-box invalid',
                          name: 'exp_month' },
                        _react2.default.createElement(
                          'option',
                          { defaultValue: true, value: '' },
                          '[Expiration Month]'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'January' },
                          'January'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'February' },
                          'February'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'March' },
                          'March'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'April' },
                          'April'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'May' },
                          'May'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'June' },
                          'June'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'July' },
                          'July'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'August' },
                          'August'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'September' },
                          'September'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'October' },
                          'October'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'November' },
                          'November'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'December' },
                          'December'
                        )
                      ),
                      _react2.default.createElement(
                        'select',
                        {
                          onChange: this.updateInput,
                          className: this.state.validator.exp_year ? 'drop-down-box' : 'drop-down-box invalid',
                          value: this.state.payInfo.exp_year,
                          name: 'exp_year' },
                        _react2.default.createElement(
                          'option',
                          { defaultValue: true, value: '' },
                          '[Expiration Year]'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2017' },
                          '2017'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2018' },
                          '2018'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2019' },
                          '2019'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2020' },
                          '2020'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2021' },
                          '2021'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2022' },
                          '2022'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2023' },
                          '2023'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2024' },
                          '2024'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2025' },
                          '2025'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2026' },
                          '2026'
                        )
                      ),
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        value: this.state.payInfo.cvv,
                        name: 'cvv',
                        className: this.state.validator.cvv ? 'cvv' : 'cvv invalid',
                        placeholder: 'cvv' }),
                      _react2.default.createElement(
                        'h1',
                        { className: 'billing-address' },
                        'BILLING ADDRESS'
                      ),
                      _react2.default.createElement(
                        'label',
                        { className: 'same-text' },
                        _react2.default.createElement('input', { onChange: this.updateBillAddress,
                          type: 'checkbox',
                          checked: this.state.checked,
                          className: 'same-address' }),
                        'Same as my Shipping Address'
                      ),
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        name: 'address',
                        value: this.state.payInfo.address,
                        className: this.state.validator.address ? 'input-text' : 'input-text invalid',
                        placeholder: 'Billing Address' }),
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        name: 'city',
                        value: this.state.payInfo.city,
                        className: this.state.validator.city ? 'input-text' : 'input-text invalid',
                        placeholder: 'City' }),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateInput,
                          name: 'state',
                          className: this.state.validator.state ? 'drop-down-box' : 'drop-down-box invalid',
                          value: this.state.payInfo.state },
                        _react2.default.createElement(
                          'option',
                          { defaultValue: true, value: '' },
                          '[Select a State]'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AL' },
                          'Alabama'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AK' },
                          'Alaska'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AZ' },
                          'Arizona'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AR' },
                          'Arkansas'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'CA' },
                          'California'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'CO' },
                          'Colorado'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'CT' },
                          'Connecticut'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'DE' },
                          'Delaware'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'DC' },
                          'District Of Columbia'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'FL' },
                          'Florida'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'GA' },
                          'Georgia'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'HI' },
                          'Hawaii'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ID' },
                          'Idaho'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'IL' },
                          'Illinois'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'IN' },
                          'Indiana'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'IA' },
                          'Iowa'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'KS' },
                          'Kansas'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'KY' },
                          'Kentucky'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'LA' },
                          'Louisiana'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ME' },
                          'Maine'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MD' },
                          'Maryland'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MA' },
                          'Massachusetts'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MI' },
                          'Michigan'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MN' },
                          'Minnesota'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MS' },
                          'Mississippi'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MO' },
                          'Missouri'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'MT' },
                          'Montana'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NE' },
                          'Nebraska'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NV' },
                          'Nevada'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NH' },
                          'New Hampshire'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NJ' },
                          'New Jersey'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NM' },
                          'New Mexico'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NY' },
                          'New York'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'NC' },
                          'North Carolina'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ND' },
                          'North Dakota'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'OH' },
                          'Ohio'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'OK' },
                          'Oklahoma'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'OR' },
                          'Oregon'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'PA' },
                          'Pennsylvania'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'RI' },
                          'Rhode Island'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'SC' },
                          'South Carolina'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'SD' },
                          'South Dakota'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'TN' },
                          'Tennessee'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'TX' },
                          'Texas'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'UT' },
                          'Utah'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'VT' },
                          'Vermont'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'VA' },
                          'Virginia'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'WA' },
                          'Washington'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'WV' },
                          'West Virginia'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'WI' },
                          'Wisconsin'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'WY' },
                          'Wyoming'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AA' },
                          'Armed Forces Americas'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AP' },
                          'Armed Forces Pacific'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'AE' },
                          'Armed Forces Others'
                        )
                      ),
                      _react2.default.createElement('input', { onChange: this.updateInput,
                        name: 'zip',
                        value: this.state.payInfo.zip,
                        className: this.state.validator.zip ? 'input-text' : 'input-text invalid',
                        placeholder: 'Zip' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'terms-of-use' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'By completing your order, you agree to Jane.com\'s ',
                    _react2.default.createElement(
                      'span',
                      null,
                      'Terms Of Use'
                    ),
                    '.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'complete-order' },
                  _react2.default.createElement(
                    'button',
                    { onClick: this.submitOrder,
                      className: 'btn-large-font btn-empty-cart max-width' },
                    'COMPLETE MY ORDER'
                  )
                )
              ) : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'login-cart' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'SIGN UP & CHECKOUT'
                  ),
                  this.state.login ? _react2.default.createElement(
                    'h1',
                    null,
                    'LOG IN'
                  ) : _react2.default.createElement(
                    'h1',
                    null,
                    'ALREADY A MEMBER?'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cart-login-signup' },
                  _react2.default.createElement(
                    'div',
                    { className: 'login-pane cart-reset' },
                    _react2.default.createElement(_createAccount2.default, null)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'login-pane cart-reset cart-reset-login' },
                    this.state.login ? '' : _react2.default.createElement(
                      'h1',
                      null,
                      'Welcome back then! Click the Log In button below so we can help you get on your way.'
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(_signin2.default, _extends({ login: this.login }, this.props.location))
                    )
                  )
                )
              )
            ) : _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'You don\'t have anything in your cart yet Let\'s help you get this baby loaded!'
              ),
              _react2.default.createElement(
                'div',
                { className: 'btn-wrapper' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn-empty-cart' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'SHOP TODAY\'S DEALS!'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'j-promise' },
            _react2.default.createElement(
              'h1',
              null,
              'JANE\'S PROMISE'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you\'re not absolutely satisfied with your Jane order, we\'ll make it right or refund your purchase. ',
              _react2.default.createElement(
                'b',
                null,
                'Cross our hearts!'
              )
            ),
            _react2.default.createElement(
              'h1',
              null,
              'SECURE CHECKOUT'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Security at its finest. Braintree + Jane, bringing you safe shopping and a guaranteed smile.'
            ),
            _react2.default.createElement('img', { src: '../../public/img/braintree.png' })
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return Cart;
}(_react2.default.Component);

Cart.propTypes = {
  pathname: string,
  userId: number,
  location: object,
  dispatch: func,
  cart: object,
  loggedIn: bool
};

Cart.contextTypes = {
  router: object
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cartItems,
    loggedIn: state.loggedIn,
    userId: state.userId
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Cart);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react2.default.PropTypes.string;

var Details = function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Details.prototype.render = function render() {
    var detail = this.props.detail;
    return _react2.default.createElement(
      'li',
      null,
      detail
    );
  };

  return Details;
}(_react2.default.Component);

Details.propTypes = {
  detail: string
};

exports.default = Details;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    number = _React$PropTypes.number,
    string = _React$PropTypes.string;

var LargeProduct = function (_React$Component) {
  _inherits(LargeProduct, _React$Component);

  function LargeProduct() {
    _classCallCheck(this, LargeProduct);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LargeProduct.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'large-product-container' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/productpage/' + this.props.id },
        _react2.default.createElement('img', { src: this.props.burl })
      ),
      _react2.default.createElement(
        'div',
        { className: 'product-summary' },
        _react2.default.createElement(
          'div',
          { className: 'product-sum-left' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/productpage' },
            _react2.default.createElement(
              'div',
              { className: 'product-name' },
              this.props.name
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'sale-price' },
            '$',
            this.props.sale,
            ' '
          ),
          _react2.default.createElement(
            'span',
            { className: 'retail-price' },
            '$',
            this.props.price
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'product-sum-right' },
          _react2.default.createElement(
            'button',
            { className: 'like' },
            _react2.default.createElement('img', { src: '../public/img/icons/heart.svg' }),
            _react2.default.createElement(
              'span',
              null,
              this.props.favorites
            )
          )
        )
      )
    );
  };

  return LargeProduct;
}(_react2.default.Component);

LargeProduct.propTypes = {
  id: number,
  burl: string,
  name: string,
  sale: number,
  price: number,
  favorites: number
};

exports.default = LargeProduct;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _signin = __webpack_require__(28);

var _signin2 = _interopRequireDefault(_signin);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react2.default.PropTypes.object;

var MyAccount = function (_React$Component) {
  _inherits(MyAccount, _React$Component);

  function MyAccount() {
    _classCallCheck(this, MyAccount);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MyAccount.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'base' },
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(
        'div',
        { className: 'logon' },
        _react2.default.createElement(
          'div',
          { className: 'login-pane' },
          _react2.default.createElement('img', { src: '../../public/img/jane-logo_360.png' }),
          _react2.default.createElement(_signin2.default, this.props.location)
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return MyAccount;
}(_react2.default.Component);

MyAccount.contextTypes = {
  router: object
};

MyAccount.propTypes = {
  location: object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyAccount);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    func = _React$PropTypes.func,
    number = _React$PropTypes.number,
    string = _React$PropTypes.string;

var NewAddress = function (_React$Component) {
  _inherits(NewAddress, _React$Component);

  function NewAddress(props) {
    _classCallCheck(this, NewAddress);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      first: '',
      last: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zip: '',
      validator: {
        state: false,
        zip: false
      }
    };
    _this.exitMenu = _this.exitMenu.bind(_this);
    _this.updateAddress = _this.updateAddress.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    return _this;
  }

  NewAddress.prototype.exitMenu = function exitMenu(val) {
    this.props.exitMenu(val);
  };

  NewAddress.prototype.updateAddress = function updateAddress(e) {
    var _this2 = this;

    e.preventDefault();
    var obj = this.state;

    if (obj.first && obj.last && obj.addressOne && obj.city && obj.state && obj.zip) {
      if (obj.state.length < 2) {
        obj.validator.state = true;
        obj.validator.zip = false;
        this.setState(obj);
      } else if (obj.zip.length < 5 || isNaN(obj.zip * 1)) {
        obj.validator.zip = true;
        obj.validator.state = false;
        this.setState(obj);
      } else {
        _axios2.default.post('/setShipAddress', {
          data: {
            first: obj.first,
            last: obj.last,
            address: obj.addressOne + ' ' + obj.addressTwo,
            state: obj.state,
            city: obj.city,
            zip: obj.zip,
            id: this.props.userId
          }
        }).then(function (res) {
          if (res.data[0].ship_address) {
            _this2.exitMenu(res.data[0]);
          } else {
            _this2.exitMenu();
          }
        });
      }
    }
  };

  NewAddress.prototype.setValue = function setValue(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  NewAddress.prototype.componentWillMount = function componentWillMount() {
    document.body.style.overflow = 'hidden';
  };

  NewAddress.prototype.componentWillUnmount = function componentWillUnmount() {
    document.body.style.overflow = 'scroll';
  };

  NewAddress.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'address-form ' + this.props.class },
      _react2.default.createElement('div', {
        onClick: this.exitMenu,
        className: 'menu-background' }),
      _react2.default.createElement(
        'div',
        { className: 'address-details' },
        _react2.default.createElement(
          'div',
          { className: 'address-header' },
          _react2.default.createElement(
            'p',
            null,
            'ADDRESS'
          ),
          _react2.default.createElement('img', {
            onClick: this.exitMenu,
            src: '../public/img/icons/close.svg' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'address-input' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.updateAddress },
            _react2.default.createElement(
              'h1',
              null,
              'Recipient'
            ),
            _react2.default.createElement('input', {
              name: 'first',
              onChange: this.setValue,
              value: this.state.first,
              placeholder: 'First Name' }),
            _react2.default.createElement('input', {
              name: 'last',
              onChange: this.setValue,
              value: this.state.last,
              placeholder: 'Last Name' }),
            _react2.default.createElement(
              'h1',
              null,
              'Address'
            ),
            _react2.default.createElement('input', {
              name: 'addressOne',
              onChange: this.setValue,
              value: this.state.addressOne,
              placeholder: 'Address 1' }),
            _react2.default.createElement('input', {
              name: 'addressTwo',
              onChange: this.setValue,
              value: this.state.addressTwo,
              placeholder: 'Address 2' }),
            _react2.default.createElement('input', {
              name: 'city',
              onChange: this.setValue,
              value: this.state.city,
              placeholder: 'City' }),
            _react2.default.createElement('input', {
              name: 'state',
              onChange: this.setValue,
              value: this.state.state,
              placeholder: 'State' }),
            _react2.default.createElement('input', {
              name: 'zip',
              onChange: this.setValue,
              value: this.state.zip,
              placeholder: 'ZIP' }),
            _react2.default.createElement(
              'div',
              {
                className: this.state.validator.state ? 'error' : 'hide'
              },
              'Please enter a valid state name.'
            ),
            _react2.default.createElement(
              'div',
              {
                className: this.state.validator.zip ? 'error' : 'hide'
              },
              'Please enter a 5 digit zip code.'
            ),
            _react2.default.createElement(
              'button',
              null,
              'SAVE'
            )
          )
        )
      )
    );
  };

  return NewAddress;
}(_react2.default.Component);

NewAddress.propTypes = {
  exitMenu: func,
  userId: number,
  class: string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    userName: state.userName,
    userId: state.userId
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(NewAddress);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    array = _React$PropTypes.array,
    string = _React$PropTypes.string,
    number = _React$PropTypes.number;

var Order = function (_React$Component) {
  _inherits(Order, _React$Component);

  function Order(props) {
    _classCallCheck(this, Order);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      isHide: false,
      orderDetails: false
    };
    _this.toggleOrderDetails = _this.toggleOrderDetails.bind(_this);
    _this.convertMoney = _this.convertMoney.bind(_this);
    return _this;
  }

  Order.prototype.convertMoney = function convertMoney(value) {
    value += '';
    value = value.split('.');
    if (value[1] && value[1].length === 1) {
      value[1] += '0';
    } else if (!value[1]) {
      value[1] = '00';
    }
    return value.join('.');
  };

  Order.prototype.toggleOrderDetails = function toggleOrderDetails() {
    this.setState({ orderDetails: !this.state.orderDetails });
  };

  Order.prototype.render = function render() {
    var total = void 0,
        tax = void 0;

    total = +this.props.order_items.reduce(function (acc, val) {
      return acc + val.sold_price * val.qty + val.shipping_price * val.qty;
    }, 0).toFixed(2);

    tax = +(total * 0.08).toFixed(2);

    return _react2.default.createElement(
      'div',
      { className: 'order' },
      _react2.default.createElement(
        'div',
        { className: 'order-sum' },
        _react2.default.createElement(
          'div',
          null,
          'Order #',
          this.props.id
        ),
        _react2.default.createElement(
          'div',
          null,
          'Items In Order ',
          this.props.order_items.reduce(function (acc, val) {
            return acc + val.qty;
          }, 0)
        ),
        _react2.default.createElement(
          'div',
          null,
          'Order Total: $',
          this.convertMoney((total + tax).toFixed(2))
        ),
        _react2.default.createElement(
          'div',
          { className: 'show-order-items', onClick: this.toggleOrderDetails },
          this.state.orderDetails ? _react2.default.createElement(
            'p',
            null,
            'Hide Details'
          ) : _react2.default.createElement(
            'p',
            null,
            'Show Details'
          )
        )
      ),
      this.state.orderDetails ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'shipping-details' },
          _react2.default.createElement(
            'h2',
            null,
            'SHIPPING ADDRESS'
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.ship_name
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.ship_address
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.ship_city,
            ', ',
            this.props.ship_state,
            ' ',
            this.props.ship_zipcode
          )
        ),
        this.props.order_items.map(function (item) {
          return _react2.default.createElement(
            'div',
            { className: 'line-item', key: item.product_id },
            _react2.default.createElement('img', { src: '../' + item.thumb }),
            _react2.default.createElement(
              'div',
              { className: 'seller-price' },
              _react2.default.createElement(
                'p',
                null,
                '$',
                item.sold_price,
                ' ',
                item.name
              ),
              _react2.default.createElement(
                'p',
                null,
                'Seller: ',
                item.seller
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Quantity: ',
                item.qty
              ),
              _react2.default.createElement(
                'p',
                null,
                'Price: $',
                item.sold_price * item.qty
              ),
              _react2.default.createElement(
                'p',
                null,
                'Shipping: $',
                item.shipping_price * item.qty
              )
            )
          );
        }),
        _react2.default.createElement(
          'div',
          { className: 'order-pricing' },
          _react2.default.createElement(
            'div',
            { className: 'left' },
            _react2.default.createElement(
              'h3',
              null,
              'TOTAL BEFORE TAX:'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'TAX:'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'ORDER TOTAL:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'left' },
            _react2.default.createElement(
              'h3',
              null,
              ' $',
              this.convertMoney(total)
            ),
            _react2.default.createElement(
              'h3',
              null,
              ' $',
              this.convertMoney(tax)
            ),
            _react2.default.createElement(
              'h4',
              null,
              ' $',
              this.convertMoney((total + tax).toFixed(2))
            )
          )
        )
      ) : ''
    );
  };

  return Order;
}(_react2.default.Component);

Order.propTypes = {
  order_items: array,
  ship_name: string,
  ship_address: string,
  ship_city: string,
  ship_state: string,
  ship_zipcode: string,
  id: number
};

exports.default = Order;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react2.default.PropTypes.object;

var OrderSum = function (_React$Component) {
  _inherits(OrderSum, _React$Component);

  function OrderSum(props) {
    _classCallCheck(this, OrderSum);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      orderNo: null,
      order: []
    };

    _this.convertMoney = _this.convertMoney.bind(_this);
    return _this;
  }

  OrderSum.prototype.convertMoney = function convertMoney(value) {
    value += '';
    value = value.split('.');
    if (value[1] && value[1].length === 1) {
      value[1] += '0';
    } else if (!value[1]) {
      value[1] = '00';
    }
    return value.join('.');
  };

  OrderSum.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _axios2.default.get('/order/' + this.props.params.id).then(function (res) {
      console.log(res);
      var orderNo = res.data[0].order_id;
      _this2.setState({ order: res.data, orderNo: orderNo });
    });
  };

  OrderSum.prototype.render = function render() {
    var state = this.state;
    var total = void 0,
        tax = void 0;

    total = +state.order.reduce(function (acc, val) {
      return acc + val.sold_price * val.qty + val.shipping_price * val.qty;
    }, 0).toFixed(2);

    tax = +(total * 0.08).toFixed(2);

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'history' },
        _react2.default.createElement(
          'div',
          { className: 'history-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'history-orders' },
            _react2.default.createElement(
              'div',
              { className: 'order' },
              _react2.default.createElement(
                'h1',
                { className: 'bot-mar' },
                'ORDER SUMMARY'
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-sum' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Order # ',
                  state.orderNo
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Items In Order ',
                  state.order.reduce(function (acc, val) {
                    return acc + val.qty;
                  }, 0)
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Order Total: $',
                  this.convertMoney((total + tax).toFixed(2))
                )
              ),
              state.order[0] ? _react2.default.createElement(
                'div',
                { className: 'shipping-details' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'SHIPPING ADDRESS'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  state.order[0].ship_name
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  state.order[0].ship_address
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  state.order[0].ship_city,
                  ', ',
                  state.order[0].ship_state,
                  ' ',
                  state.order[0].ship_zipcode
                )
              ) : '',
              state.order.map(function (item) {
                return _react2.default.createElement(
                  'div',
                  { className: 'line-item', key: item.product_id },
                  _react2.default.createElement('img', { src: '../' + item.thumb }),
                  _react2.default.createElement(
                    'div',
                    { className: 'seller-price' },
                    _react2.default.createElement(
                      'p',
                      null,
                      '$',
                      item.sold_price,
                      ' ',
                      item.name
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Seller: ',
                      item.seller
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Quantity: ',
                      item.qty
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Price: $',
                      item.sold_price * item.qty
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Shipping: $',
                      item.shipping_price * item.qty
                    )
                  )
                );
              }),
              _react2.default.createElement(
                'div',
                { className: 'order-pricing' },
                _react2.default.createElement(
                  'div',
                  { className: 'left' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'TOTAL BEFORE TAX:'
                  ),
                  _react2.default.createElement(
                    'h3',
                    null,
                    'TAX:'
                  ),
                  _react2.default.createElement(
                    'h4',
                    null,
                    'ORDER TOTAL:'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'left' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    ' $',
                    this.convertMoney(total)
                  ),
                  _react2.default.createElement(
                    'h3',
                    null,
                    ' $',
                    this.convertMoney(tax)
                  ),
                  _react2.default.createElement(
                    'h4',
                    null,
                    ' $',
                    this.convertMoney((total + tax).toFixed(2))
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return OrderSum;
}(_react2.default.Component);

OrderSum.propTypes = {
  params: object
};

exports.default = OrderSum;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _order = __webpack_require__(70);

var _order2 = _interopRequireDefault(_order);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react2.default.PropTypes.number;

var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History(props) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      history: []
    };
    return _this;
  }

  History.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _axios2.default.get('/getHistory/' + this.props.userId).then(function (res) {
      _this2.setState({ history: res.data });
    });
  };

  History.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'history' },
        this.state.history.length ? _react2.default.createElement(
          'div',
          { className: 'history-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'history-orders' },
            _react2.default.createElement(
              'h1',
              null,
              'YOUR ORDER HISTORY'
            ),
            this.state.history.map(function (order) {
              return _react2.default.createElement(_order2.default, _extends({}, order, { key: order.id }));
            })
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'no-history' },
          _react2.default.createElement(
            'span',
            null,
            'You haven\'t purchased anything yet. '
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement(
              'span',
              null,
              'Check out today\'s deals!'
            )
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return History;
}(_react2.default.Component);

History.propTypes = {
  userId: number
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(History);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

var _actionCreators = __webpack_require__(9);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _details = __webpack_require__(66);

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    number = _React$PropTypes.number,
    func = _React$PropTypes.func,
    object = _React$PropTypes.object;

var Product = function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product(props) {
    _classCallCheck(this, Product);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      product: {},
      qty: 1
    };
    _this.updateCart = _this.updateCart.bind(_this);
    _this.updateQty = _this.updateQty.bind(_this);
    return _this;
  }

  Product.prototype.updateCart = function updateCart(e) {
    var _this2 = this;

    e.preventDefault();
    var user = null;

    if (this.props.userId) {
      user = this.props.userId;
    }
    _axios2.default.post('/addToCart/' + this.state.product[0].id + '/' + this.state.qty + '/' + user).then(function (res) {
      _this2.props.dispatch((0, _actionCreators.updateQty)(res.data[0].total));
    });
  };

  Product.prototype.updateQty = function updateQty(e) {
    e.preventDefault();
    var obj = this.state;
    obj.qty = e.target.value;
    this.setState(obj);
  };

  Product.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    _axios2.default.get('/product/' + this.props.params.id).then(function (res) {
      var product = res.data;
      _this3.setState({ product: product });
    });
  };

  Product.prototype.render = function render() {
    if (this.state.product[0]) {
      var seller = this.state.product[0].sellerimg ? '../' + this.state.product[0].sellerimg : '../public/img/vendor/none.jpg';
    }

    return !this.state.product[0] ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(_footer2.default, null)
    ) : _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(
        'div',
        { className: 'shop' },
        _react2.default.createElement(
          'div',
          { className: 'item-container' },
          _react2.default.createElement(
            'div',
            { className: 'left-item' },
            _react2.default.createElement('img', { src: '../' + this.state.product[0].burl })
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-item' },
            _react2.default.createElement(
              'h1',
              null,
              this.state.product[0].name
            ),
            _react2.default.createElement(
              'div',
              { className: 'price-favorites' },
              _react2.default.createElement(
                'div',
                { className: 'product-sum-left' },
                _react2.default.createElement(
                  'span',
                  { className: 'sale-price' },
                  '$',
                  this.state.product[0].sale,
                  ' '
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'retail-price' },
                  '$',
                  this.state.product[0].price
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'product-sum-right' },
                _react2.default.createElement(
                  'button',
                  { className: 'like' },
                  _react2.default.createElement('img', { src: '../public/img/icons/heart.svg' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    this.state.product[0].favorites
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'shipping' },
              _react2.default.createElement('img', { src: '../public/img/icons/truck.svg' }),
              _react2.default.createElement(
                'span',
                null,
                ' Seller usually ships within 3 days.'
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'add-to-cart', onSubmit: this.updateCart },
              _react2.default.createElement('input', { value: this.state.qty, onChange: this.updateQty }),
              _react2.default.createElement(
                'button',
                null,
                'ADD TO BAG'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'footer social-media' },
              _react2.default.createElement(
                'svg',
                { className: 'facebook', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 96.124 96.123' },
                _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('path', { d: 'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z', fill: '#E5E5E5' })
                )
              ),
              _react2.default.createElement(
                'svg',
                { className: 'twitter', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', viewBox: '0 0 612 612', width: '20px', height: '20px' },
                _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { d: 'M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z', fill: '#E5E5E5' })
                  )
                )
              ),
              _react2.default.createElement(
                'svg',
                { className: 'pinterest', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 438.529 438.529' },
                _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('path', { d: 'M409.141,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.751,9.801,259.065,0,219.281,0   C179.5,0,142.812,9.801,109.22,29.407c-33.597,19.604-60.194,46.201-79.8,79.796C9.809,142.8,0.008,179.485,0.008,219.267   c0,44.35,12.085,84.611,36.258,120.767c24.172,36.172,55.863,62.912,95.073,80.232c-0.762-20.365,0.476-37.209,3.709-50.532   l28.267-119.348c-4.76-9.329-7.139-20.93-7.139-34.831c0-16.175,4.089-29.689,12.275-40.541   c8.186-10.85,18.177-16.274,29.979-16.274c9.514,0,16.841,3.14,21.982,9.42c5.142,6.283,7.705,14.181,7.705,23.7   c0,5.896-1.099,13.084-3.289,21.554c-2.188,8.471-5.041,18.273-8.562,29.409c-3.521,11.132-6.045,20.036-7.566,26.692   c-2.663,11.608-0.476,21.553,6.567,29.838c7.042,8.278,16.372,12.423,27.983,12.423c20.365,0,37.065-11.324,50.107-33.972   c13.038-22.655,19.554-50.159,19.554-82.514c0-24.938-8.042-45.21-24.129-60.813c-16.085-15.609-38.496-23.417-67.239-23.417   c-32.161,0-58.192,10.327-78.082,30.978c-19.891,20.654-29.836,45.352-29.836,74.091c0,17.132,4.854,31.505,14.56,43.112   c3.235,3.806,4.283,7.898,3.14,12.279c-0.381,1.143-1.141,3.997-2.284,8.562c-1.138,4.565-1.903,7.522-2.281,8.851   c-1.521,6.091-5.14,7.994-10.85,5.708c-14.654-6.085-25.791-16.652-33.402-31.689c-7.614-15.037-11.422-32.456-11.422-52.246   c0-12.753,2.047-25.505,6.14-38.256c4.089-12.756,10.468-25.078,19.126-36.975c8.663-11.9,19.036-22.417,31.123-31.549   c12.082-9.135,26.787-16.462,44.108-21.982s35.972-8.28,55.959-8.28c27.032,0,51.295,5.995,72.8,17.986   c21.512,11.992,37.925,27.502,49.252,46.537c11.327,19.036,16.987,39.403,16.987,61.101c0,28.549-4.948,54.243-14.842,77.086   c-9.896,22.839-23.887,40.778-41.973,53.813c-18.083,13.042-38.637,19.561-61.675,19.561c-11.607,0-22.456-2.714-32.548-8.135   c-10.085-5.427-17.034-11.847-20.839-19.273c-8.566,33.685-13.706,53.77-15.42,60.24c-3.616,13.508-11.038,29.119-22.27,46.819   c20.367,6.091,41.112,9.13,62.24,9.13c39.781,0,76.47-9.801,110.062-29.41c33.595-19.602,60.192-46.199,79.794-79.791   c19.606-33.599,29.407-70.287,29.407-110.065C438.527,179.485,428.74,142.795,409.141,109.203z', fill: '#E5E5E5' })
                )
              ),
              _react2.default.createElement(
                'svg',
                { className: 'instagram', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 97.395 97.395' },
                _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('path', { d: 'M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895   V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385   h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572   c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332   c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188   H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953   c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z', fill: '#E5E5E5' })
                )
              ),
              _react2.default.createElement(
                'svg',
                { className: 'snapchat', version: '1.1', id: 'Layer_1', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 511.117 511.117' },
                _react2.default.createElement('path', { fill: '#E5E5E5', d: 'M256,493.903c-0.883,0-2.648,0-3.531,0c-0.883,0-1.766,0-2.648,0c-30.014,0-45.903-8.828-64.441-22.069c-13.241-8.828-25.6-17.655-39.724-20.303c-7.945-0.883-15.007-1.766-22.069-1.766c-12.359,0-22.069,1.766-29.131,3.531c-4.414,0.883-7.945,1.766-10.593,1.766s-6.179-0.883-7.945-5.297c-0.883-4.414-1.766-7.945-2.648-11.476c-1.766-9.71-3.531-15.89-7.945-16.772C16.772,414.455,3.531,403.862,0,396.8c0-1.766,0-2.648,0-3.531c0-2.648,1.766-5.297,4.414-5.297c74.152-12.359,107.697-88.276,108.579-90.924l0,0c4.414-8.828,5.297-16.772,2.648-23.834c-5.297-12.359-22.069-17.655-32.662-21.186c-2.648-0.883-5.297-1.766-7.062-2.648c-22.069-8.828-23.834-17.655-22.952-22.069c1.766-7.945,11.476-13.241,20.303-13.241c2.648,0,4.414,0,6.179,0.883c9.71,4.414,18.538,7.062,26.483,7.062c10.593,0,15.007-4.414,15.89-5.297c0-5.297-0.883-10.593-0.883-15.89c-2.648-35.31-5.297-78.566,6.179-103.283C159.779,23.393,230.4,17.214,251.586,17.214c0.883,0,8.828,0,8.828,0h0.883c21.186,0,91.807,6.179,125.352,80.331c11.476,24.717,7.945,68.855,6.179,103.283v1.766c0,5.297-0.883,9.71-0.883,14.124c0.883,0.883,4.414,4.414,14.124,5.297l0,0c7.062,0,15.89-2.648,24.717-7.062c2.648-0.883,5.297-1.766,7.945-1.766c3.531,0,6.179,0.883,8.828,1.766l0,0c7.062,2.648,12.359,7.945,12.359,13.241c0,5.297-3.531,13.241-22.952,20.303c-1.766,0.883-4.414,1.766-7.062,2.648c-10.593,3.531-27.365,8.828-32.662,21.186c-2.648,6.179-1.766,14.124,2.648,23.834l0,0c1.766,3.531,32.662,79.448,106.814,91.807c2.648,0.883,4.414,2.648,4.414,5.297c0,0.883,0,1.766-0.883,3.531c-2.648,7.062-15.007,16.772-63.559,24.717c-3.531,0.883-5.297,5.297-7.945,16.772c-0.883,3.531-1.766,7.945-2.648,11.476s-3.531,5.297-7.062,5.297h-0.883c-2.648,0-6.179-0.883-10.593-1.766c-7.945-1.766-17.655-2.648-29.131-2.648c-7.062,0-14.124,0.883-21.186,1.766c-14.124,2.648-26.483,11.476-39.724,20.303C309.848,485.959,286.014,493.903,256,493.903' })
              )
            ),
            this.state.product[0].details ? _react2.default.createElement(
              'div',
              { className: 'product-details' },
              _react2.default.createElement(
                'p',
                null,
                'PRODUCT DETAILS'
              ),
              _react2.default.createElement(
                'ul',
                null,
                this.state.product[0].details.split('@').map(function (detail) {
                  return _react2.default.createElement(_details2.default, { detail: detail, key: detail });
                })
              )
            ) : ''
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-container' },
          _react2.default.createElement(
            'div',
            { className: 'product-description' },
            _react2.default.createElement(
              'h1',
              null,
              'PRODUCT DESCRIPTION'
            ),
            _react2.default.createElement(
              'div',
              { className: 'description' },
              this.state.product[0].description.split('\\n').map(function (desc) {
                return _react2.default.createElement(
                  'p',
                  { key: desc },
                  desc
                );
              })
            ),
            this.state.product[0].details ? _react2.default.createElement(
              'div',
              { className: 'product-details' },
              _react2.default.createElement(
                'p',
                null,
                'PRODUCT DETAILS'
              ),
              _react2.default.createElement(
                'ul',
                null,
                this.state.product[0].details.split('@').map(function (detail) {
                  return _react2.default.createElement(_details2.default, { detail: detail, key: detail });
                })
              )
            ) : ''
          ),
          _react2.default.createElement(
            'div',
            { className: 'seller-info' },
            _react2.default.createElement(
              'h1',
              null,
              'SELLER'
            ),
            _react2.default.createElement(
              'div',
              { className: 'seller' },
              _react2.default.createElement('img', { src: seller }),
              _react2.default.createElement(
                'span',
                null,
                this.state.product[0].seller
              )
            ),
            _react2.default.createElement(
              'h1',
              null,
              'SHIPPING'
            ),
            _react2.default.createElement(
              'p',
              null,
              '$4.99 for the first item and $3.99 for each additional item. US only. Estimated to ship by Mon, Mar 20. Seller usually ships within 4 business days.'
            ),
            _react2.default.createElement(
              'h1',
              null,
              'FINE PRINT'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Please make sure that your size and color is correct since we can\'t make changes to the order. Note that colors may be slightly due to individual monitor settings. See Jane\'s return policy.'
            )
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return Product;
}(_react2.default.Component);

Product.propTypes = {
  userId: number,
  dispatch: func,
  params: object,
  location: object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Product);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _createAccount = __webpack_require__(27);

var _createAccount2 = _interopRequireDefault(_createAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react2.default.PropTypes.object;

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SignUp.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'base' },
      _react2.default.createElement(_nav2.default, this.props.location),
      _react2.default.createElement(
        'div',
        { className: 'logon' },
        _react2.default.createElement(
          'div',
          { className: 'login-pane' },
          _react2.default.createElement('img', { src: '../../public/img/jane-logo_360.png' }),
          _react2.default.createElement(_createAccount2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'has-account' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/logon' },
          _react2.default.createElement(
            'p',
            null,
            'Already have an account? Click here to log in'
          )
        )
      ),
      _react2.default.createElement(_footer2.default, null)
    );
  };

  return SignUp;
}(_react2.default.Component);

SignUp.propTypes = {
  location: object
};

SignUp.contextTypes = {
  router: object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignUp);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    number = _React$PropTypes.number,
    string = _React$PropTypes.string;

var SmallProduct = function (_React$Component) {
  _inherits(SmallProduct, _React$Component);

  function SmallProduct() {
    _classCallCheck(this, SmallProduct);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SmallProduct.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'small-product-container' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/productpage/' + this.props.id },
        _react2.default.createElement('img', { className: 'product-img', src: this.props.burl })
      ),
      _react2.default.createElement(
        'div',
        { className: 'product-summary' },
        _react2.default.createElement(
          'div',
          { className: 'product-sum-left' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/productpage/' + this.props.id },
            _react2.default.createElement(
              'div',
              { className: 'product-name small' },
              this.props.name
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'sale-price' },
            '$',
            this.props.sale,
            ' '
          ),
          _react2.default.createElement(
            'span',
            { className: 'retail-price' },
            '$',
            this.props.price
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'product-sum-right' },
          _react2.default.createElement(
            'button',
            { className: 'like' },
            _react2.default.createElement('img', { src: '../public/img/icons/heart.svg' }),
            _react2.default.createElement(
              'span',
              null,
              this.props.favorites
            )
          )
        )
      )
    );
  };

  return SmallProduct;
}(_react2.default.Component);

SmallProduct.propTypes = {
  id: number,
  burl: string,
  name: string,
  sale: number,
  price: number,
  favorites: number
};

exports.default = SmallProduct;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(26);

var DEFAULT_STATE = {
  redirectUrl: '/',
  loggedIn: false,
  userId: null,
  userName: null,
  cartItems: null
};

var logon = function logon(state, action) {
  var newState = {};
  Object.assign(newState, state, { loggedIn: action.loggedIn, userName: action.userName, userId: action.userId, cartItems: action.cartItems });
  return newState;
};
// vv if state is undefined then set state
// to default_state, this is an example
// of an es6 default paraemeter
var logout = function logout(state, action) {
  var newState = {};
  Object.assign(newState, state, {
    redirectUrl: '/',
    loggedIn: false,
    userId: null,
    userName: null,
    cartItems: null });
  return newState;
};

var updateCartTotal = function updateCartTotal(state, action) {
  var newState = {};
  Object.assign(newState, state, { cartItems: action.cartItems });
  return newState;
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.LOGIN_USER:
      return logon(state, action);
    case _actions.LOGOUT_USER:
      return logout(state, action);
    case _actions.UPDATE_CART_TOTAL:
      return updateCartTotal(state, action);
    default:
      return state;
  }
};

exports.default = rootReducer;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _redux = __webpack_require__(40);

var _reduxThunk = __webpack_require__(120);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(76);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
  return f;
}
// for getting redux devtools to work
// (f) => f does nothing if your not in the browser
// or if devtools are not available
));

exports.default = store;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(84);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = baseGetTag;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(42)))

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(85);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = getPrototype;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(29);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = getRawTag;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = objectToString;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = overArg;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(81);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = root;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = isObjectLike;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.PropTypes = mod.exports;
  }
})(this, function (exports, module) {

  'use strict';

  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var ReactElement = {};

  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };

  var emptyFunction = {
    thatReturns: function thatReturns(what) {
      return function () {
        return what;
      };
    }
  };

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];

        var preciseType = getPreciseType(propValue);

        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }

    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});

//# sourceMappingURL=index.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(125);
var objectAssign = __webpack_require__(88);

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (ret[key] === undefined) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}
	});

	return ret;
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true
	};

	opts = objectAssign(defaults, opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				if (val2 === null) {
					result.push(encode(key, opts));
				} else {
					result.push(encode(key, opts) + '=' + encode(val2, opts));
				}
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createBroadcast = function createBroadcast(initialValue) {
  var listeners = [];
  var currentValue = initialValue;

  return {
    publish: function publish(value) {
      currentValue = value;
      listeners.forEach(function (listener) {
        return listener(currentValue);
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);

      // Publish to this subscriber once immediately.
      listener(currentValue);

      return function () {
        return listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }
  };
};

/**
 * A <Broadcast> provides a generic way for descendants to "subscribe"
 * to some value that changes over time, bypassing any intermediate
 * shouldComponentUpdate's in the hierarchy. It puts all subscription
 * functions on context.broadcasts, keyed by "channel".
 *
 * To use it, a subscriber must opt-in to context.broadcasts. See the
 * <Subscriber> component for a reference implementation.
 */

var Broadcast = function (_React$Component) {
  _inherits(Broadcast, _React$Component);

  function Broadcast() {
    var _temp, _this, _ret;

    _classCallCheck(this, Broadcast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.broadcast = createBroadcast(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Broadcast.prototype.getBroadcastsContext = function getBroadcastsContext() {
    var _extends2;

    var channel = this.props.channel;
    var broadcasts = this.context.broadcasts;


    return _extends({}, broadcasts, (_extends2 = {}, _extends2[channel] = this.broadcast.subscribe, _extends2));
  };

  Broadcast.prototype.getChildContext = function getChildContext() {
    return {
      broadcasts: this.getBroadcastsContext()
    };
  };

  Broadcast.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    !(this.props.channel === nextProps.channel) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You cannot change <Broadcast channel>') : (0, _invariant2.default)(false) : void 0;

    if (this.props.value !== nextProps.value) this.broadcast.publish(nextProps.value);
  };

  Broadcast.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return Broadcast;
}(_react2.default.Component);

Broadcast.contextTypes = {
  broadcasts: _react.PropTypes.object
};
Broadcast.childContextTypes = {
  broadcasts: _react.PropTypes.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  Broadcast.propTypes = {
    channel: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node.isRequired,
    value: _react.PropTypes.any
  };
}

exports.default = Broadcast;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A <Subscriber> pulls the value for a channel off of context.broadcasts
 * and passes it to its children function.
 */
var Subscriber = function (_React$Component) {
  _inherits(Subscriber, _React$Component);

  function Subscriber() {
    var _temp, _this, _ret;

    _classCallCheck(this, Subscriber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      value: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Subscriber.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var channel = this.props.channel;


    if (this.context.broadcasts) {
      var subscribe = this.context.broadcasts[channel];

      !(typeof subscribe === 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Subscriber channel="%s"> must be rendered in the context of a <Broadcast channel="%s">', channel, channel) : (0, _invariant2.default)(false) : void 0;

      this.unsubscribe = subscribe(function (value) {
        // This function will be called once immediately.
        _this2.setState({ value: value });
      });
    }
  };

  Subscriber.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  };

  Subscriber.prototype.render = function render() {
    return this.props.children(this.state.value);
  };

  return Subscriber;
}(_react2.default.Component);

Subscriber.contextTypes = {
  broadcasts: _react2.default.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Subscriber.propTypes = {
    channel: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.func.isRequired
  };
}

exports.default = Subscriber;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Subscriber = exports.Broadcast = undefined;

var _Broadcast2 = __webpack_require__(92);

var _Broadcast3 = _interopRequireDefault(_Broadcast2);

var _Subscriber2 = __webpack_require__(93);

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Broadcast = _Broadcast3.default;
exports.Subscriber = _Subscriber3.default;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_PropTypes__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store, storeSubscription: null };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
  };

  return Provider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




if (process.env.NODE_ENV !== 'production') {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1__utils_PropTypes__["a" /* storeShape */].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
Provider.childContextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1__utils_PropTypes__["a" /* storeShape */].isRequired,
  storeSubscription: __WEBPACK_IMPORTED_MODULE_1__utils_PropTypes__["b" /* subscriptionShape */]
};
Provider.displayName = 'Provider';
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(100);
/* unused harmony export createConnect */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = createConnect();

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(31);
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(31);
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(33);
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(101);
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = __webpack_require__(116);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _StaticRouter = __webpack_require__(11);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _History = __webpack_require__(19);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BrowserRouter = function BrowserRouter(_ref) {
  var basename = _ref.basename;
  var forceRefresh = _ref.forceRefresh;
  var getUserConfirmation = _ref.getUserConfirmation;
  var keyLength = _ref.keyLength;

  var routerProps = _objectWithoutProperties(_ref, ['basename', 'forceRefresh', 'getUserConfirmation', 'keyLength']);

  return _react2.default.createElement(
    _History2.default,
    {
      createHistory: _createBrowserHistory2.default,
      historyOptions: {
        basename: basename,
        forceRefresh: forceRefresh,
        getUserConfirmation: getUserConfirmation,
        keyLength: keyLength
      }
    },
    function (_ref2) {
      var history = _ref2.history;
      var action = _ref2.action;
      var location = _ref2.location;
      return _react2.default.createElement(_StaticRouter2.default, _extends({
        action: action,
        location: location,
        basename: basename,
        onPush: history.push,
        onReplace: history.replace,
        blockTransitions: history.block
      }, routerProps));
    }
  );
};

if (process.env.NODE_ENV !== 'production') {
  BrowserRouter.propTypes = {
    basename: _react.PropTypes.string,
    forceRefresh: _react.PropTypes.bool,
    getUserConfirmation: _react.PropTypes.func,
    keyLength: _react.PropTypes.number,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = BrowserRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createHashHistory = __webpack_require__(117);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _History = __webpack_require__(19);

var _History2 = _interopRequireDefault(_History);

var _PathUtils = __webpack_require__(12);

var _StaticRouter = __webpack_require__(11);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createHref = function createHref(hashType) {
  return function (path) {
    var newPath = void 0;

    switch (hashType) {
      case 'hashbang':
        newPath = path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
        break;
      case 'noslash':
        newPath = (0, _PathUtils.stripLeadingSlash)(path);
        break;
      case 'slash':
      default:
        newPath = (0, _PathUtils.addLeadingSlash)(path);
        break;
    }

    return '#' + newPath;
  };
};

/**
 * A router that uses the URL hash.
 */
var HashRouter = function HashRouter(_ref) {
  var basename = _ref.basename;
  var getUserConfirmation = _ref.getUserConfirmation;
  var hashType = _ref.hashType;

  var routerProps = _objectWithoutProperties(_ref, ['basename', 'getUserConfirmation', 'hashType']);

  return _react2.default.createElement(
    _History2.default,
    {
      createHistory: _createHashHistory2.default,
      historyOptions: {
        basename: basename,
        getUserConfirmation: getUserConfirmation,
        hashType: hashType
      }
    },
    function (_ref2) {
      var history = _ref2.history;
      var action = _ref2.action;
      var location = _ref2.location;
      return _react2.default.createElement(_StaticRouter2.default, _extends({
        action: action,
        location: location,
        basename: basename,
        onPush: history.push,
        onReplace: history.replace,
        blockTransitions: history.block,
        createHref: createHref(hashType)
      }, routerProps));
    }
  );
};

if (process.env.NODE_ENV !== 'production') {
  HashRouter.propTypes = {
    basename: _react.PropTypes.string,
    getUserConfirmation: _react.PropTypes.func,
    hashType: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = HashRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Broadcasts = __webpack_require__(18);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) && isLeftClickEvent(event)) {
        event.preventDefault();
        _this.handleTransition();
      }
    }, _this.handleTransition = function () {
      var router = _this.context.router;
      var _this$props = _this.props;
      var to = _this$props.to;
      var replace = _this$props.replace;

      var navigate = replace ? router.replaceWith : router.transitionTo;
      navigate(to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _this2 = this;

    var router = this.context.router;
    var _props = this.props;
    var to = _props.to;
    var style = _props.style;
    var activeStyle = _props.activeStyle;
    var className = _props.className;
    var activeClassName = _props.activeClassName;
    var propLocation = _props.location;
    var getIsActive = _props.isActive;
    var activeOnlyWhenExact = _props.activeOnlyWhenExact;
    var replace = _props.replace;
    var children = _props.children;

    var rest = _objectWithoutProperties(_props, ['to', 'style', 'activeStyle', 'className', 'activeClassName', 'location', 'isActive', 'activeOnlyWhenExact', 'replace', 'children']);

    var apatheticToIsActive = activeClassName === '' && Object.keys(activeStyle).length === 0 && typeof children !== 'function';

    if (apatheticToIsActive) {
      return _react2.default.createElement('a', _extends({
        href: router ? router.createHref(to) : to,
        onClick: this.handleClick,
        style: style,
        className: className,
        children: children
      }, rest));
    }

    return _react2.default.createElement(
      _Broadcasts.LocationSubscriber,
      null,
      function (contextLocation) {
        var location = propLocation || contextLocation;

        var isActive = getIsActive(location, createLocationDescriptor(to), _this2.props);

        // If children is a function, we are using a Function as Children Component
        // so useful values will be passed down to the children function.
        if (typeof children == 'function') {
          return children({
            isActive: isActive,
            location: location,
            href: router ? router.createHref(to) : to,
            onClick: _this2.handleClick,
            transition: _this2.handleTransition
          });
        }

        // Maybe we should use <Match> here? Not sure how the custom `isActive`
        // prop would shake out, also, this check happens a LOT so maybe its good
        // to optimize here w/ a faster isActive check, so we'd need to benchmark
        // any attempt at changing to use <Match>
        return _react2.default.createElement('a', _extends({
          href: router ? router.createHref(to) : to,
          onClick: _this2.handleClick,
          style: isActive ? _extends({}, style, activeStyle) : style,
          className: isActive ? [className, activeClassName].join(' ').trim() : className,
          children: children
        }, rest));
      }
    );
  };

  return Link;
}(_react2.default.Component);

Link.defaultProps = {
  replace: false,
  activeOnlyWhenExact: false,
  className: '',
  activeClassName: '',
  style: {},
  activeStyle: {},
  isActive: function isActive(location, to, props) {
    return pathIsActive(to.pathname, location.pathname, props.activeOnlyWhenExact) && queryIsActive(to.query, location.query);
  }
};
Link.contextTypes = {
  router: _PropTypes.routerContext
};


if (process.env.NODE_ENV !== 'production') {
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    replace: _react.PropTypes.bool,
    activeStyle: _react.PropTypes.object,
    activeClassName: _react.PropTypes.string,
    location: _react.PropTypes.object,
    activeOnlyWhenExact: _react.PropTypes.bool,
    isActive: _react.PropTypes.func,
    children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),

    // props we have to deal with but aren't necessarily
    // part of the Link API
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    target: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  };
}

// we should probably use LocationUtils.createLocationDescriptor
var createLocationDescriptor = function createLocationDescriptor(to) {
  return (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to : { pathname: to };
};

var pathIsActive = function pathIsActive(to, pathname, activeOnlyWhenExact) {
  return activeOnlyWhenExact ? pathname === to : pathname.indexOf(to) === 0;
};

var queryIsActive = function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
};

var isLeftClickEvent = function isLeftClickEvent(event) {
  return event.button === 0;
};

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var deepEqual = function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
};

exports.default = Link;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createRouterPath = exports.createRouterLocation = exports.locationsAreEqual = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _LocationUtils = __webpack_require__(13);

Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(12);

var createRouterLocation = exports.createRouterLocation = function createRouterLocation(input, parseQueryString, stringifyQuery) {
  if (typeof input === 'string') {
    var location = (0, _PathUtils.parsePath)(input);
    location.query = location.search !== '' ? parseQueryString(location.search) : null;
    return location;
  } else {
    // got a location descriptor
    return {
      pathname: input.pathname || '',
      search: input.search || (input.query ? '?' + stringifyQuery(input.query) : ''),
      hash: input.hash || '',
      state: input.state || null,
      query: input.query || (input.search ? parseQueryString(input.search) : null)
    };
  }
};

var createRouterPath = exports.createRouterPath = function createRouterPath(input, stringifyQuery) {
  return typeof input === 'string' ? input : (0, _PathUtils.createPath)(_extends({}, input, {
    search: input.search || (input.query ? '?' + stringifyQuery(input.query) : '')
  }));
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MatchProvider = __webpack_require__(34);

var _MatchProvider2 = _interopRequireDefault(_MatchProvider);

var _matchPattern = __webpack_require__(35);

var _matchPattern2 = _interopRequireDefault(_matchPattern);

var _Broadcasts = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterMatch = function (_React$Component) {
  _inherits(RegisterMatch, _React$Component);

  function RegisterMatch() {
    _classCallCheck(this, RegisterMatch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RegisterMatch.prototype.registerMatch = function registerMatch() {
    var matchContext = this.context.match;
    var match = this.props.match;


    if (match && matchContext) {
      matchContext.addMatch(match);
    }
  };

  RegisterMatch.prototype.componentWillMount = function componentWillMount() {
    if (this.context.serverRouter) {
      this.registerMatch();
    }
  };

  RegisterMatch.prototype.componentDidMount = function componentDidMount() {
    if (!this.context.serverRouter) {
      this.registerMatch();
    }
  };

  RegisterMatch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var match = this.context.match;


    if (match) {
      if (prevProps.match && !this.props.match) {
        match.removeMatch(prevProps.match);
      } else if (!prevProps.match && this.props.match) {
        match.addMatch(this.props.match);
      }
    }
  };

  RegisterMatch.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.match) {
      this.context.match.removeMatch(this.props.match);
    }
  };

  RegisterMatch.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return RegisterMatch;
}(_react2.default.Component);

RegisterMatch.contextTypes = {
  match: _react.PropTypes.object,
  serverRouter: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  RegisterMatch.propTypes = {
    children: _react.PropTypes.node.isRequired,
    match: _react.PropTypes.any
  };
}

var Match = function (_React$Component2) {
  _inherits(Match, _React$Component2);

  function Match() {
    _classCallCheck(this, Match);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Match.prototype.render = function render() {
    var _this3 = this;

    return _react2.default.createElement(
      _Broadcasts.LocationSubscriber,
      null,
      function (locationContext) {
        var _props = _this3.props;
        var children = _props.children;
        var render = _props.render;
        var Component = _props.component;
        var pattern = _props.pattern;
        var location = _props.location;
        var exactly = _props.exactly;
        var matchContext = _this3.context.match;

        var loc = location || locationContext;
        var parent = matchContext && matchContext.parent;
        var match = (0, _matchPattern2.default)(pattern, loc, exactly, parent);
        var props = _extends({}, match, { location: loc, pattern: pattern });
        return _react2.default.createElement(
          RegisterMatch,
          { match: match },
          _react2.default.createElement(
            _MatchProvider2.default,
            { match: match },
            children ? children(_extends({ matched: !!match }, props)) : match ? render ? render(props) : _react2.default.createElement(Component, props) : null
          )
        );
      }
    );
  };

  return Match;
}(_react2.default.Component);

Match.defaultProps = {
  exactly: false
};
Match.contextTypes = {
  location: _react.PropTypes.object,
  match: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Match.propTypes = {
    pattern: _react.PropTypes.string,
    exactly: _react.PropTypes.bool,
    location: _react.PropTypes.object,

    children: _react.PropTypes.func,
    render: _react.PropTypes.func,
    component: _react.PropTypes.func
  };
}

exports.default = Match;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Simple cache - NEW cached items are added to cachedKeys array. When cache is
// full, oldest key is removed from array and item is removed from cache

var DEFAULT_OPTIONS = {
  limit: 200
};

var MatcherCache = function () {
  function MatcherCache() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MatcherCache);

    this.cache = {};
    this.cachedKeys = [];

    var mergedOptions = _extends({}, DEFAULT_OPTIONS, options);
    this.options = mergedOptions;
  }

  MatcherCache.prototype.set = function set(key, value) {
    // If this key is not cached add key to cachedKeys array
    if (this.cache[key] === undefined) {
      this.cachedKeys.push(key);
    }
    this.cache[key] = value;
    this.checkCacheLimit();
  };

  MatcherCache.prototype.get = function get(key) {
    return this.cache[key];
  };

  MatcherCache.prototype.checkCacheLimit = function checkCacheLimit() {
    // Clear a cache item if we are over limit
    if (this.cachedKeys.length > this.options.limit) {
      var keyToUncache = this.cachedKeys.shift();
      delete this.cache[keyToUncache];
    }
  };

  return MatcherCache;
}();

exports.default = MatcherCache;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createMemoryHistory = __webpack_require__(118);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _StaticRouter = __webpack_require__(11);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _History = __webpack_require__(19);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MemoryRouter = function MemoryRouter(_ref) {
  var getUserConfirmation = _ref.getUserConfirmation;
  var initialEntries = _ref.initialEntries;
  var initialIndex = _ref.initialIndex;
  var keyLength = _ref.keyLength;

  var routerProps = _objectWithoutProperties(_ref, ['getUserConfirmation', 'initialEntries', 'initialIndex', 'keyLength']);

  return _react2.default.createElement(
    _History2.default,
    {
      createHistory: _createMemoryHistory2.default,
      historyOptions: {
        getUserConfirmation: getUserConfirmation,
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        keyLength: keyLength
      }
    },
    function (_ref2) {
      var history = _ref2.history;
      var action = _ref2.action;
      var location = _ref2.location;
      return _react2.default.createElement(_StaticRouter2.default, _extends({
        action: action,
        location: location,
        onPush: history.push,
        onReplace: history.replace,
        blockTransitions: history.block
      }, routerProps));
    }
  );
};

if (process.env.NODE_ENV !== 'production') {
  MemoryRouter.propTypes = {
    getUserConfirmation: _react.PropTypes.func,
    initialEntries: _react.PropTypes.array,
    initialIndex: _react.PropTypes.number,
    keyLength: _react.PropTypes.number,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = MemoryRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Miss = function (_React$Component) {
  _inherits(Miss, _React$Component);

  function Miss(props, context) {
    _classCallCheck(this, Miss);

    // ignore if rendered out of context (probably for unit tests)
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    if (context.match && !context.serverRouter) {
      _this.unsubscribe = _this.context.match.subscribe(function (matchesFound) {
        _this.setState({
          noMatchesInContext: !matchesFound
        });
      });
    }

    if (context.serverRouter) {
      context.serverRouter.registerMissPresence(context.match.serverRouterIndex);
    }

    _this.state = {
      noMatchesInContext: false
    };
    return _this;
  }

  Miss.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  Miss.prototype.render = function render() {
    var _props = this.props;
    var render = _props.render;
    var Component = _props.component;
    var noMatchesInContext = this.state.noMatchesInContext;
    var locationProp = this.props.location;

    var location = locationProp || this.context.location;
    var _context = this.context;
    var serverRouter = _context.serverRouter;
    var match = _context.match;

    var noMatchesOnServerContext = serverRouter && serverRouter.missedAtIndex(match.serverRouterIndex);
    if (noMatchesInContext || noMatchesOnServerContext) {
      return render ? render({ location: location }) : _react2.default.createElement(Component, { location: location });
    } else {
      return null;
    }
  };

  return Miss;
}(_react2.default.Component);

Miss.contextTypes = {
  match: _react.PropTypes.object,
  location: _react.PropTypes.object,
  serverRouter: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Miss.propTypes = {
    children: _react.PropTypes.node,
    location: _PropTypes.location,
    render: _react.PropTypes.func,
    component: _react.PropTypes.func
  };
}

exports.default = Miss;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationPrompt = function (_React$Component) {
  _inherits(NavigationPrompt, _React$Component);

  function NavigationPrompt() {
    _classCallCheck(this, NavigationPrompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NavigationPrompt.prototype.block = function block() {
    if (!this.teardownPrompt) this.teardownPrompt = this.context.history.block(this.props.message);
  };

  NavigationPrompt.prototype.unblock = function unblock() {
    if (this.teardownPrompt) {
      this.teardownPrompt();
      this.teardownPrompt = null;
    }
  };

  NavigationPrompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.block();
  };

  NavigationPrompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      this.block();
    } else {
      this.unblock();
    }
  };

  NavigationPrompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unblock();
  };

  NavigationPrompt.prototype.render = function render() {
    return null;
  };

  return NavigationPrompt;
}(_react2.default.Component);

NavigationPrompt.contextTypes = {
  history: _PropTypes.historyContext.isRequired
};
NavigationPrompt.defaultProps = {
  when: true
};


if (process.env.NODE_ENV !== 'production') {
  NavigationPrompt.propTypes = {
    when: _react.PropTypes.bool,
    message: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired
  };
}

exports.default = NavigationPrompt;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.context.serverRouter) this.redirect();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    this.redirect();
  };

  Redirect.prototype.redirect = function redirect() {
    var router = this.context.router;
    var _props = this.props;
    var to = _props.to;
    var push = _props.push;
    // so that folks can unit test w/o hassle

    if (router) {
      var navigate = push ? router.transitionTo : router.replaceWith;
      navigate(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _PropTypes.routerContext,
  serverRouter: _react.PropTypes.object
};


if (process.env.NODE_ENV !== 'production') {
  Redirect.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    push: _react.PropTypes.bool
  };
}

exports.default = Redirect;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StaticRouter = __webpack_require__(11);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerRouter = function (_React$Component) {
  _inherits(ServerRouter, _React$Component);

  function ServerRouter() {
    _classCallCheck(this, ServerRouter);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ServerRouter.prototype.getChildContext = function getChildContext() {
    return {
      serverRouter: this.props.context
    };
  };

  ServerRouter.prototype.render = function render() {
    var _props = this.props;
    var context = _props.context;
    var location = _props.location;

    var rest = _objectWithoutProperties(_props, ['context', 'location']);

    var redirect = function redirect(location) {
      context.setRedirect(location);
    };
    return _react2.default.createElement(_StaticRouter2.default, _extends({
      action: 'POP',
      location: location,
      onReplace: redirect,
      onPush: redirect
    }, rest));
  };

  return ServerRouter;
}(_react2.default.Component);

ServerRouter.childContextTypes = {
  serverRouter: _react.PropTypes.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  ServerRouter.propTypes = {
    context: _react.PropTypes.object.isRequired,
    location: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.node])
  };
}

exports.default = ServerRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var k = function k() {};

var createServerRenderContext = function createServerRenderContext() {
  var flushed = false;
  var redirect = null;
  var matchContexts = [
    /* { hasMissComponent: bool, matchesByIdentity: [] } */
  ];

  var setRedirect = flushed ? k : function (location) {
    if (!redirect) redirect = location;
  };

  var registerMatchContext = flushed ? k : function (matchesByIdentity) {
    return matchContexts.push({
      hasMissComponent: false,
      matchesByIdentity: matchesByIdentity
    }) - 1;
  };

  // We need to know there is a potential to miss, if there are no Miss
  // components under a Match, then we need to not worry about it
  var registerMissPresence = flushed ? k : function (index) {
    matchContexts[index].hasMissComponent = true;
  };

  var getResult = function getResult() {
    flushed = true;
    var missed = matchContexts.some(function (context, index) {
      return missedAtIndex(index);
    });

    return {
      redirect: redirect,
      missed: missed
    };
  };

  var missedAtIndex = function missedAtIndex(index) {
    var context = matchContexts[index];
    return context.matchesByIdentity.length === 0 && context.hasMissComponent;
  };

  return {
    setRedirect: setRedirect,
    registerMatchContext: registerMatchContext,
    registerMissPresence: registerMissPresence,
    getResult: getResult,
    missedAtIndex: missedAtIndex
  };
};

exports.default = createServerRenderContext;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(13);

var _PathUtils = __webpack_require__(12);

var _createTransitionManager = __webpack_require__(20);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(37);

var _DOMUtils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/mjackson/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$basename = props.basename;
  var basename = _props$basename === undefined ? '' : _props$basename;
  var _props$forceRefresh = props.forceRefresh;
  var forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh;
  var _props$getUserConfirm = props.getUserConfirmation;
  var getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm;
  var _props$keyLength = props.keyLength;
  var keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {};

    var key = _ref.key;
    var state = _ref.state;
    var _window$location = window.location;
    var pathname = _window$location.pathname;
    var search = _window$location.search;
    var hash = _window$location.hash;


    var path = pathname + search + hash;

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return _extends({}, (0, _PathUtils.parsePath)(path), {
      state: state,
      key: key
    });
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var push = function push(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var url = basename + (0, _PathUtils.createPath)(location);
      var key = location.key;
      var state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, url);

        if (forceRefresh) {
          window.location.href = url;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;

        window.location.href = url;
      }
    });
  };

  var replace = function replace(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var url = basename + (0, _PathUtils.createPath)(location);
      var key = location.key;
      var state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, url);

        if (forceRefresh) {
          window.location.replace(url);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;

        window.location.replace(url);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(10);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(13);

var _PathUtils = __webpack_require__(12);

var _createTransitionManager = __webpack_require__(20);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(37);

var _DOMUtils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$basename = props.basename;
  var basename = _props$basename === undefined ? '' : _props$basename;
  var _props$getUserConfirm = props.getUserConfirmation;
  var getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm;
  var _props$hashType = props.hashType;
  var hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var _HashPathCoders$hashT = HashPathCoders[hashType];
  var encodePath = _HashPathCoders$hashT.encodePath;
  var decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return (0, _PathUtils.parsePath)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var push = function push(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _LocationUtils = __webpack_require__(13);

var _createTransitionManager = __webpack_require__(20);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getUserConfirmation = props.getUserConfirmation;
  var _props$initialEntries = props.initialEntries;
  var initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries;
  var _props$initialIndex = props.initialIndex;
  var initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex;
  var _props$keyLength = props.keyLength;
  var keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry, index) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, index ? createKey() : undefined) : (0, _LocationUtils.createLocation)(entry, undefined, index ? entry.key || createKey() : undefined);
  });

  // Public interface

  var push = function push(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(79)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(128);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42), __webpack_require__(129)(module)))

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactRouter = __webpack_require__(4);

var _App = __webpack_require__(43);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(44);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.BrowserRouter,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ })
/******/ ]);