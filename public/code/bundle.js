/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/@jamescoyle/svg-icon/lib/svg-icon.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@jamescoyle/svg-icon/lib/svg-icon.js ***!
  \***********************************************************/
      /***/ () => {
        eval(
          "const types = {\r\n\tmdi: {\r\n\t\tsize: 24,\r\n\t\tviewbox: '0 0 24 24',\r\n\t},\r\n\t'simple-icons': {\r\n\t\tsize: 24,\r\n\t\tviewbox: '0 0 24 24',\r\n\t},\r\n\tdefault: {\r\n\t\tsize: 0,\r\n\t\tviewbox: '0 0 0 0',\r\n\t},\r\n}\r\n\r\nclass SvgIcon extends HTMLElement {\r\n\tstatic get observedAttributes() {\r\n\t\treturn ['type', 'path', 'size', 'viewbox', 'flip', 'rotate']\r\n\t}\r\n\r\n\tget defaults() {\r\n\t\treturn types[this.getAttribute('type')] || types.default\r\n\t}\r\n\r\n\tget size() {\r\n\t\treturn this.getAttribute('size') || this.defaults.size\r\n\t}\r\n\r\n\tget viewbox() {\r\n\t\treturn this.getAttribute('viewbox') || this.defaults.viewbox\r\n\t}\r\n\r\n\tget flip() {\r\n\t\tconst flip = (this.getAttribute('flip') || '').toLowerCase()\r\n\t\treturn {\r\n\t\t\tx: ['both', 'horizontal'].includes(flip) ? '-1' : '1',\r\n\t\t\ty: ['both', 'vertical'].includes(flip) ? '-1' : '1',\r\n\t\t}\r\n\t}\r\n\r\n\tget rotate() {\r\n\t\tconst rotate = this.getAttribute('rotate')\r\n\r\n\t\tif (!isNaN(rotate)) return rotate + 'deg'\r\n\t\treturn rotate\r\n\t}\r\n\r\n\tconstructor(...args) {\r\n\t\tconst self = super(...args)\r\n\r\n\t\tself.attachShadow({ mode: 'open' })\r\n\r\n\t\tconst style = document.createElement('style')\r\n\t\tconst svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')\r\n\t\tconst path = document.createElementNS('http://www.w3.org/2000/svg', 'path')\r\n\r\n\t\tstyle.textContent = `\r\n\t\t\tsvg {\r\n\t\t\t\ttransform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); \r\n\t\t\t}\r\n\r\n\t\t\tpath {\r\n\t\t\t\tfill: currentColor;\r\n\t\t\t}\r\n\t\t`\r\n\r\n\t\tsvg.append(path)\r\n\r\n\t\tself.shadowRoot.append(style, svg)\r\n\r\n\t\treturn self\r\n\t}\r\n\r\n\tconnectedCallback() {\r\n\t\tconst svg = this.shadowRoot.querySelector('svg')\r\n\t\tconst path = this.shadowRoot.querySelector('path')\r\n\r\n\t\tsvg.setAttribute('width', this.size)\r\n\t\tsvg.setAttribute('height', this.size)\r\n\t\tsvg.setAttribute('viewBox', this.viewbox)\r\n\r\n\t\tsvg.style.setProperty('--sx', this.flip.x)\r\n\t\tsvg.style.setProperty('--sy', this.flip.y)\r\n\t\tsvg.style.setProperty('--r', this.rotate)\r\n\r\n\t\tpath.setAttribute('d', this.getAttribute('path'))\r\n\t}\r\n\r\n\tattributeChangedCallback(name, oldValue, newValue) {\r\n\t\tconst svg = this.shadowRoot.querySelector('svg')\r\n\t\tconst path = this.shadowRoot.querySelector('path')\r\n\r\n\t\tswitch (name) {\r\n\t\t\tcase 'type':\r\n\t\t\t\t// update all values that icon type affects\r\n\t\t\t\tsvg.setAttribute('width', this.size)\r\n\t\t\t\tsvg.setAttribute('height', this.size)\r\n\t\t\t\tsvg.setAttribute('viewBox', this.viewbox)\r\n\t\t\t\tbreak\r\n\r\n\t\t\tcase 'path':\r\n\t\t\t\tpath.setAttribute('d', newValue)\r\n\t\t\t\tbreak\r\n\r\n\t\t\tcase 'size':\r\n\t\t\t\tsvg.setAttribute('width', this.size)\r\n\t\t\t\tsvg.setAttribute('height', this.size)\r\n\t\t\t\tbreak\r\n\r\n\t\t\tcase 'viewbox':\r\n\t\t\t\tsvg.setAttribute('viewBox', this.viewbox)\r\n\t\t\t\tbreak\r\n\r\n\t\t\tcase 'flip':\r\n\t\t\t\tsvg.style.setProperty('--sx', this.flip.x)\r\n\t\t\t\tsvg.style.setProperty('--sy', this.flip.y)\r\n\t\t\t\tbreak\r\n\r\n\t\t\tcase 'rotate':\r\n\t\t\t\tsvg.style.setProperty('--r', this.rotate)\r\n\t\t\t\tbreak\r\n\t\t}\r\n\t}\r\n}\r\n\r\ncustomElements.define('svg-icon', SvgIcon)\r\n\n\n//# sourceURL=webpack://anolet/./node_modules/@jamescoyle/svg-icon/lib/svg-icon.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/index.js":
      /*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");\n\n//# sourceURL=webpack://anolet/./node_modules/axios/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/adapters/xhr.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ \"./node_modules/axios/lib/defaults/transitional.js\");\nvar Cancel = __webpack_require__(/*! ../cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n    var responseType = config.responseType;\n    var onCanceled;\n    function done() {\n      if (config.cancelToken) {\n        config.cancelToken.unsubscribe(onCanceled);\n      }\n\n      if (config.signal) {\n        config.signal.removeEventListener('abort', onCanceled);\n      }\n    }\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    function onloadend() {\n      if (!request) {\n        return;\n      }\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?\n        request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(function _resolve(value) {\n        resolve(value);\n        done();\n      }, function _reject(err) {\n        reject(err);\n        done();\n      }, response);\n\n      // Clean up request\n      request = null;\n    }\n\n    if ('onloadend' in request) {\n      // Use onloadend if available\n      request.onloadend = onloadend;\n    } else {\n      // Listen for ready state to emulate onloadend\n      request.onreadystatechange = function handleLoad() {\n        if (!request || request.readyState !== 4) {\n          return;\n        }\n\n        // The request errored out and we didn't get a response, this will be\n        // handled by onerror instead\n        // With one exception: request that using file: protocol, most browsers\n        // will return status as 0 even though it's a successful request\n        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n          return;\n        }\n        // readystate handler is calling before onerror or ontimeout handlers,\n        // so we should call onloadend on the next 'tick'\n        setTimeout(onloadend);\n      };\n    }\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';\n      var transitional = config.transitional || transitionalDefaults;\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(\n        timeoutErrorMessage,\n        config,\n        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (responseType && responseType !== 'json') {\n      request.responseType = config.responseType;\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken || config.signal) {\n      // Handle cancellation\n      // eslint-disable-next-line func-names\n      onCanceled = function(cancel) {\n        if (!request) {\n          return;\n        }\n        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);\n        request.abort();\n        request = null;\n      };\n\n      config.cancelToken && config.cancelToken.subscribe(onCanceled);\n      if (config.signal) {\n        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);\n      }\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/adapters/xhr.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/axios.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");\nvar bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");\nvar Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");\nvar defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  // Factory for creating new instances\n  instance.create = function create(instanceConfig) {\n    return createInstance(mergeConfig(defaultConfig, instanceConfig));\n  };\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");\naxios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");\n\n// Expose isAxiosError\naxios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports["default"] = axios;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/axios.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/Cancel.js":
      /*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/cancel/Cancel.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/CancelToken.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n\n  // eslint-disable-next-line func-names\n  this.promise.then(function(cancel) {\n    if (!token._listeners) return;\n\n    var i;\n    var l = token._listeners.length;\n\n    for (i = 0; i < l; i++) {\n      token._listeners[i](cancel);\n    }\n    token._listeners = null;\n  });\n\n  // eslint-disable-next-line func-names\n  this.promise.then = function(onfulfilled) {\n    var _resolve;\n    // eslint-disable-next-line func-names\n    var promise = new Promise(function(resolve) {\n      token.subscribe(resolve);\n      _resolve = resolve;\n    }).then(onfulfilled);\n\n    promise.cancel = function reject() {\n      token.unsubscribe(_resolve);\n    };\n\n    return promise;\n  };\n\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Subscribe to the cancel signal\n */\n\nCancelToken.prototype.subscribe = function subscribe(listener) {\n  if (this.reason) {\n    listener(this.reason);\n    return;\n  }\n\n  if (this._listeners) {\n    this._listeners.push(listener);\n  } else {\n    this._listeners = [listener];\n  }\n};\n\n/**\n * Unsubscribe from the cancel signal\n */\n\nCancelToken.prototype.unsubscribe = function unsubscribe(listener) {\n  if (!this._listeners) {\n    return;\n  }\n  var index = this._listeners.indexOf(listener);\n  if (index !== -1) {\n    this._listeners.splice(index, 1);\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/cancel/CancelToken.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/isCancel.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/cancel/isCancel.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/Axios.js":
      /*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar validator = __webpack_require__(/*! ../helpers/validator */ \"./node_modules/axios/lib/helpers/validator.js\");\n\nvar validators = validator.validators;\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(configOrUrl, config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof configOrUrl === 'string') {\n    config = config || {};\n    config.url = configOrUrl;\n  } else {\n    config = configOrUrl || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  var transitional = config.transitional;\n\n  if (transitional !== undefined) {\n    validator.assertOptions(transitional, {\n      silentJSONParsing: validators.transitional(validators.boolean),\n      forcedJSONParsing: validators.transitional(validators.boolean),\n      clarifyTimeoutError: validators.transitional(validators.boolean)\n    }, false);\n  }\n\n  // filter out skipped interceptors\n  var requestInterceptorChain = [];\n  var synchronousRequestInterceptors = true;\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {\n      return;\n    }\n\n    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;\n\n    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var responseInterceptorChain = [];\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var promise;\n\n  if (!synchronousRequestInterceptors) {\n    var chain = [dispatchRequest, undefined];\n\n    Array.prototype.unshift.apply(chain, requestInterceptorChain);\n    chain = chain.concat(responseInterceptorChain);\n\n    promise = Promise.resolve(config);\n    while (chain.length) {\n      promise = promise.then(chain.shift(), chain.shift());\n    }\n\n    return promise;\n  }\n\n\n  var newConfig = config;\n  while (requestInterceptorChain.length) {\n    var onFulfilled = requestInterceptorChain.shift();\n    var onRejected = requestInterceptorChain.shift();\n    try {\n      newConfig = onFulfilled(newConfig);\n    } catch (error) {\n      onRejected(error);\n      break;\n    }\n  }\n\n  try {\n    promise = dispatchRequest(newConfig);\n  } catch (error) {\n    return Promise.reject(error);\n  }\n\n  while (responseInterceptorChain.length) {\n    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/Axios.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/InterceptorManager.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected, options) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected,\n    synchronous: options ? options.synchronous : false,\n    runWhen: options ? options.runWhen : null\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/InterceptorManager.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/buildFullPath.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/buildFullPath.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/createError.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/createError.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/dispatchRequest.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults/index.js\");\nvar Cancel = __webpack_require__(/*! ../cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n\n  if (config.signal && config.signal.aborted) {\n    throw new Cancel('canceled');\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData.call(\n    config,\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData.call(\n      config,\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData.call(\n          config,\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/dispatchRequest.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/enhanceError.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code,\n      status: this.response && this.response.status ? this.response.status : null\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/enhanceError.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/mergeConfig.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(undefined, config2[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      return getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDirectKeys(prop) {\n    if (prop in config2) {\n      return getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      return getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  var mergeMap = {\n    'url': valueFromConfig2,\n    'method': valueFromConfig2,\n    'data': valueFromConfig2,\n    'baseURL': defaultToConfig2,\n    'transformRequest': defaultToConfig2,\n    'transformResponse': defaultToConfig2,\n    'paramsSerializer': defaultToConfig2,\n    'timeout': defaultToConfig2,\n    'timeoutMessage': defaultToConfig2,\n    'withCredentials': defaultToConfig2,\n    'adapter': defaultToConfig2,\n    'responseType': defaultToConfig2,\n    'xsrfCookieName': defaultToConfig2,\n    'xsrfHeaderName': defaultToConfig2,\n    'onUploadProgress': defaultToConfig2,\n    'onDownloadProgress': defaultToConfig2,\n    'decompress': defaultToConfig2,\n    'maxContentLength': defaultToConfig2,\n    'maxBodyLength': defaultToConfig2,\n    'transport': defaultToConfig2,\n    'httpAgent': defaultToConfig2,\n    'httpsAgent': defaultToConfig2,\n    'cancelToken': defaultToConfig2,\n    'socketPath': defaultToConfig2,\n    'responseEncoding': defaultToConfig2,\n    'validateStatus': mergeDirectKeys\n  };\n\n  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {\n    var merge = mergeMap[prop] || mergeDeepProperties;\n    var configValue = merge(prop);\n    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/mergeConfig.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/settle.js":
      /*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/settle.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/transformData.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");\nvar defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  var context = this || defaults;\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn.call(context, data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/core/transformData.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/defaults/index.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\nvar enhanceError = __webpack_require__(/*! ../core/enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\nvar transitionalDefaults = __webpack_require__(/*! ./transitional */ \"./node_modules/axios/lib/defaults/transitional.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ../adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ../adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nfunction stringifySafely(rawValue, parser, encoder) {\n  if (utils.isString(rawValue)) {\n    try {\n      (parser || JSON.parse)(rawValue);\n      return utils.trim(rawValue);\n    } catch (e) {\n      if (e.name !== 'SyntaxError') {\n        throw e;\n      }\n    }\n  }\n\n  return (encoder || JSON.stringify)(rawValue);\n}\n\nvar defaults = {\n\n  transitional: transitionalDefaults,\n\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {\n      setContentTypeIfUnset(headers, 'application/json');\n      return stringifySafely(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    var transitional = this.transitional || defaults.transitional;\n    var silentJSONParsing = transitional && transitional.silentJSONParsing;\n    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;\n    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';\n\n    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {\n      try {\n        return JSON.parse(data);\n      } catch (e) {\n        if (strictJSONParsing) {\n          if (e.name === 'SyntaxError') {\n            throw enhanceError(e, this, 'E_JSON_PARSE');\n          }\n          throw e;\n        }\n      }\n    }\n\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  },\n\n  headers: {\n    common: {\n      'Accept': 'application/json, text/plain, */*'\n    }\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/defaults/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/defaults/transitional.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\nmodule.exports = {\n  silentJSONParsing: true,\n  forcedJSONParsing: true,\n  clarifyTimeoutError: false\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/defaults/transitional.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/env/data.js":
      /*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
      /***/ (module) => {
        eval(
          'module.exports = {\n  "version": "0.26.1"\n};\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/env/data.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/bind.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/bind.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/buildURL.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/buildURL.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/combineURLs.js":
      /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/combineURLs.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/cookies.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/cookies.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d+\\-.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/isAbsoluteURL.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nmodule.exports = function isAxiosError(payload) {\n  return utils.isObject(payload) && (payload.isAxiosError === true);\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/isAxiosError.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/isURLSameOrigin.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
      /*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\nvar utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/normalizeHeaderName.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/parseHeaders.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/spread.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/spread.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/validator.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar VERSION = (__webpack_require__(/*! ../env/data */ \"./node_modules/axios/lib/env/data.js\").version);\n\nvar validators = {};\n\n// eslint-disable-next-line func-names\n['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {\n  validators[type] = function validator(thing) {\n    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;\n  };\n});\n\nvar deprecatedWarnings = {};\n\n/**\n * Transitional option validator\n * @param {function|boolean?} validator - set to false if the transitional option has been removed\n * @param {string?} version - deprecated version / removed since version\n * @param {string?} message - some message with additional info\n * @returns {function}\n */\nvalidators.transitional = function transitional(validator, version, message) {\n  function formatMessage(opt, desc) {\n    return '[Axios v' + VERSION + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');\n  }\n\n  // eslint-disable-next-line func-names\n  return function(value, opt, opts) {\n    if (validator === false) {\n      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));\n    }\n\n    if (version && !deprecatedWarnings[opt]) {\n      deprecatedWarnings[opt] = true;\n      // eslint-disable-next-line no-console\n      console.warn(\n        formatMessage(\n          opt,\n          ' has been deprecated since v' + version + ' and will be removed in the near future'\n        )\n      );\n    }\n\n    return validator ? validator(value, opt, opts) : true;\n  };\n};\n\n/**\n * Assert object's properties type\n * @param {object} options\n * @param {object} schema\n * @param {boolean?} allowUnknown\n */\n\nfunction assertOptions(options, schema, allowUnknown) {\n  if (typeof options !== 'object') {\n    throw new TypeError('options must be an object');\n  }\n  var keys = Object.keys(options);\n  var i = keys.length;\n  while (i-- > 0) {\n    var opt = keys[i];\n    var validator = schema[opt];\n    if (validator) {\n      var value = options[opt];\n      var result = value === undefined || validator(value, opt, options);\n      if (result !== true) {\n        throw new TypeError('option ' + opt + ' must be ' + result);\n      }\n      continue;\n    }\n    if (allowUnknown !== true) {\n      throw Error('Unknown option ' + opt);\n    }\n  }\n}\n\nmodule.exports = {\n  assertOptions: assertOptions,\n  validators: validators\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/helpers/validator.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/utils.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return Array.isArray(val);\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return toString.call(val) === '[object FormData]';\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return toString.call(val) === '[object URLSearchParams]';\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/axios/lib/utils.js?"
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss":
      /*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".title {\\n  color: white;\\n  font-family: Circular Std;\\n  text-align: center;\\n  font-size: 1.5em;\\n  margin-top: 5%;\\n}\\n\\n.error {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 30%;\\n  height: 25%;\\n  background: #090909;\\n  border-radius: 15px;\\n  cursor: default;\\n  z-index: 50;\\n  transform: translate(-50%, -50%);\\n  display: none;\\n}\\n\\n.button {\\n  font-family: \\"Roboto\\", sans-serif;\\n  font-size: 1.25em;\\n  color: white;\\n  background: #121212;\\n  width: 80%;\\n  cursor: pointer;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding-top: 1%;\\n  border-radius: 10px;\\n  padding-bottom: 1%;\\n  margin-top: 3%;\\n  text-align: center;\\n}\\n\\n.description {\\n  color: white;\\n  font-family: Circular Std;\\n  padding-left: 10%;\\n  padding-right: 10%;\\n  text-align: center;\\n  margin-top: 5%;\\n}\\n\\n.player {\\n  user-select: none;\\n  animation-fill-mode: forwards;\\n  background: none;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  opacity: 1;\\n  pointer-events: none;\\n  z-index: 2;\\n}\\n\\n.username {\\n  text-align: center;\\n  position: absolute;\\n  bottom: 45px;\\n  left: 50%;\\n  white-space: nowrap;\\n  transform: translate(-50%);\\n}\\n\\n.playerimage {\\n  width: 200px;\\n}\\n\\n#game {\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: #161616;\\n  width: 100%;\\n  overflow: hidden;\\n  color: white;\\n  transition: filter 0.5s linear;\\n  z-index: -1;\\n}\\n\\n.chat {\\n  position: absolute;\\n  top: calc(50px + 1% + 10px);\\n  left: 10px;\\n  background: rgba(18, 18, 18, 0.4);\\n  color: white;\\n  transition: 0.2s opacity linear;\\n  opacity: 1;\\n  width: 30%;\\n  height: 25%;\\n  z-index: 2;\\n  border-radius: 10px;\\n}\\n.chat:hover {\\n  background: rgba(18, 18, 18, 0.8);\\n}\\n.chat:hover .chatbox {\\n  background: rgba(16, 16, 16, 0.8);\\n}\\n\\n.chatbox {\\n  width: 100%;\\n  background: rgba(16, 16, 16, 0.4);\\n  border: none;\\n  color: white;\\n  padding: 10px 0 10px 10px;\\n  margin-right: -10px;\\n  outline: none;\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  border-bottom-right-radius: 10px;\\n  border-bottom-left-radius: 10px;\\n}\\n\\n.log {\\n  height: calc(100% - 45px);\\n  padding-right: 5px;\\n  overflow: scroll;\\n  overflow-x: hidden;\\n  padding-top: 10px;\\n  padding-left: 10px;\\n}\\n\\n.message {\\n  margin-bottom: 5px;\\n  word-break: break-all;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n@font-face {\\n  font-family: \\"Circular Std\\";\\n  src: url(\\"circular/CircularStd-Bold.woff2\\") format(\\"woff2\\"), url(\\"circular/CircularStd-Bold.woff\\") format(\\"woff\\"), url(\\"circular/CircularStd-Bold.svg#CircularStd-Bold\\") format(\\"svg\\");\\n  font-weight: bold;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  user-select: none;\\n  cursor: default;\\n  background: #101010;\\n  font-family: Circular Std;\\n}\\n\\n.logo {\\n  width: 100px;\\n  position: absolute;\\n  bottom: 10px;\\n  left: 10px;\\n  background: #ebebeb;\\n  padding: 20px;\\n  border-radius: 20px;\\n}\\n\\n.red {\\n  display: contents;\\n  color: #ff6464;\\n}\\n\\n.topbar {\\n  position: absolute;\\n  top: 10px;\\n}\\n\\n.item {\\n  background: #101010;\\n  height: 50px;\\n  width: 50px;\\n  margin-left: 10px;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  float: left;\\n}\\n\\n.svg {\\n  position: relative;\\n  top: calc(50% + 2px);\\n  left: calc(50% + 4px);\\n  transform: translate(-50%, -50%);\\n  color: white;\\n}\\n\\n.chatbtn {\\n  top: calc(50% + 2px);\\n  left: calc(50% + 10px);\\n}\\n\\n#chat_toggle {\\n  transition: 0.2s filter linear;\\n}\\n\\n#list_toggle {\\n  transition: 0.2s filter linear;\\n}\\n\\n#info_toggle {\\n  transition: 0.2s filter linear;\\n}\\n\\n.toplogo {\\n  display: none;\\n}\\n\\n#menu {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  transition: 0.2s opacity linear;\\n  opacity: 0;\\n  background: #121212;\\n  width: 500px;\\n  height: 200px;\\n  color: white;\\n  border-radius: 10px;\\n  z-index: -1;\\n}\\n\\n.menbtn {\\n  background: #262626;\\n  margin: revert;\\n  width: calc(50% - 10px);\\n  margin-left: 10px;\\n}\\n\\n.game-meta {\\n  padding-right: 30px;\\n}\\n\\n.game-name {\\n  font-size: 2rem;\\n  font-family: Circular Std;\\n}\\n\\n.game-image {\\n  margin-left: 30px;\\n  border-radius: 15px;\\n  margin-top: 37.5px;\\n  width: 125px;\\n  position: absolute;\\n}\\n\\n.game-name,\\n.game-author {\\n  margin-left: 175px;\\n  padding-top: 37.5px;\\n}\\n\\n.game-author {\\n  padding: revert;\\n}\\n\\n.close {\\n  font-family: \\"Highway Gothic\\";\\n  background: #101010;\\n  width: fit-content;\\n  padding: 5px;\\n  position: absolute;\\n  border-radius: 5px;\\n  top: 10px;\\n  right: 10px;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\nhr {\\n  background: #262626;\\n  border-style: solid;\\n  border-color: #262626;\\n  margin-top: 85px;\\n}\\n\\n.exit {\\n  background: #262626;\\n  width: fit-content;\\n  position: absolute;\\n  bottom: 10px;\\n  right: 10px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.layer {\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\nul {\\n  list-style-type: none;\\n  float: right;\\n  margin-right: 16px;\\n  transition: 0.2s opacity linear;\\n  opacity: 1;\\n  z-index: 2;\\n}\\n\\nli {\\n  width: 200px;\\n  background: #121212;\\n  color: white;\\n  padding: 10px;\\n  margin-bottom: 5px;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  border-style: solid;\\n  border-width: 0.5px;\\n}\\n\\n.bubble {\\n  max-height: 500px;\\n  background: #101010;\\n  position: absolute;\\n  padding: 10px;\\n  border-radius: 15px;\\n  max-width: 200%;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  margin-left: 50%;\\n  transform: translate(-50%);\\n  transition: 0.2s opacity linear;\\n}\\n\\n.caret {\\n  position: absolute;\\n  padding: 10px;\\n  border-radius: 15px;\\n  margin-left: 50%;\\n  transform: translate(-50%);\\n  transition: 0.2s opacity linear;\\n  margin-top: calc(1ch + 15px);\\n  color: #101010;\\n  opacity: 0;\\n}\\n\\n#loading {\\n  position: absolute;\\n  transition: 0.2s opacity linear;\\n  opacity: 1;\\n  background: #121212;\\n  width: 100%;\\n  height: 100%;\\n  color: white;\\n  z-index: 2147483647;\\n}\\n\\n#load-status {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  font-size: 2rem;\\n  font-family: Circular Std;\\n}\\n\\n#load-detail {\\n  position: absolute;\\n  top: 55%;\\n  left: 50%;\\n  transform: translate(-50%);\\n  font-size: 1rem;\\n  font-family: Circular Std;\\n}\\n\\n.refresh {\\n  background: #262626;\\n  width: fit-content;\\n  padding: 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  display: inline;\\n}", "",{"version":3,"sources":["webpack://./src/scss/error.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/main.scss","webpack://./src/scss/game.scss","webpack://./src/scss/chat.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,yBCEK;EDDL,kBAAA;EACA,gBAAA;EACA,cAAA;AEDF;;AFIA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,mBCdM;EDeN,mBAAA;EACA,eAAA;EACA,WAAA;EACA,gCAAA;EACA,aAAA;AEDF;;AFIA;EACE,iCAAA;EACA,iBAAA;EACA,YAAA;EACA,mBC3Be;ED4Bf,UAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;AEDF;;AFIA;EACE,YAAA;EACA,yBCpCK;EDqCL,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AEDF;;AC3CA;EACE,iBAAA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,oBAAA;EACA,UAAA;AD8CF;;AC3CA;EACE,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,mBAAA;EACA,0BAAA;AD8CF;;AC3CA;EACE,YAAA;AD8CF;;AC3CA;EACE,YAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,mBF7BK;EE8BL,WAAA;EACA,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,WAAA;AD8CF;;AEnFA;EACE,kBAAA;EACA,2BAAA;EACA,UAAA;EACA,iCAAA;EACA,YAAA;EACA,+BAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,mBAAA;AFsFF;AErFE;EACE,iCAAA;AFuFJ;AEtFI;EACE,iCAAA;AFwFN;;AEnFA;EACE,WAAA;EACA,iCAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,gCAAA;EACA,+BAAA;AFsFF;;AEnFA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AFsFF;;AEnFA;EACI,kBAAA;EACA,qBAAA;AFsFJ;;AEnFA;EACE,aAAA;AFsFF;;AAnIA;EACE,2BAAA;EACA,sLAAA;EAGA,iBAAA;EACA,kBAAA;EACA,kBAAA;AAoIF;AAjIA;EACE,sBAAA;AAmIF;;AAhIA;EACE,iBAAA;EACA,eAAA;EACA,mBDtBK;ECuBL,yBDjBK;ACoJP;;AAhIA;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AAmIF;;AAhIA;EACE,iBAAA;EACA,cAAA;AAmIF;;AAhIA;EACE,kBAAA;EACA,SAAA;AAmIF;;AAjIA;EACE,mBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;AAoIF;;AAjIA;EACE,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,gCAAA;EACA,YAAA;AAoIF;;AAjIA;EACE,oBAAA;EACA,sBAAA;AAoIF;;AAjIA;EACE,8BAAA;AAoIF;;AAjIA;EACE,8BAAA;AAoIF;;AAjIA;EACE,8BAAA;AAoIF;;AAjIA;EACE,aAAA;AAoIF;;AAjIA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,+BAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;AAoIF;;AAjIA;EACE,mBAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;AAoIF;;AAjIA;EACE,mBAAA;AAoIF;;AAlIA;EACE,eAAA;EACA,yBDzGK;AC8OP;;AAlIA;EACE,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;AAqIF;;AAlIA;;EAEE,kBAAA;EACA,mBAAA;AAqIF;;AAlIA;EACE,eAAA;AAqIF;;AAlIA;EACE,6BAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AAqIF;;AAlIA;EACE,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;AAqIF;;AAlIA;EACE,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;AAqIF;;AAlIA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAqIF;;AAlIA;EACE,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,+BAAA;EACA,UAAA;EACA,UAAA;AAqIF;;AAlIA;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AAqIF;;AAlIA;EACE,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,0BAAA;EACA,+BAAA;AAqIF;;AAlIA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,0BAAA;EACA,+BAAA;EACA,4BAAA;EACA,cAAA;EACA,UAAA;AAqIF;;AAjIA;EACE,kBAAA;EACA,+BAAA;EACA,UAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAoIF;;AAjIA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,eAAA;EACA,yBDxOK;AC4WP;;AAjIA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,eAAA;EACA,yBDjPK;ACqXP;;AAjIA;EACE,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AAoIF","sourcesContent":["@use \\"_variables.scss\\" as *;\\r\\n\\r\\n.title {\\r\\n  color: white;\\r\\n  font-family: $font;\\r\\n  text-align: center;\\r\\n  font-size: 1.5em;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  width: 30%;\\r\\n  height: 25%;\\r\\n  background: $error;\\r\\n  border-radius: 15px;\\r\\n  cursor: default;\\r\\n  z-index: 50;\\r\\n  transform: translate(-50%, -50%);\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  font-family: \\"Roboto\\", sans-serif;\\r\\n  font-size: 1.25em;\\r\\n  color: white;\\r\\n  background: $button-chooser;\\r\\n  width: 80%;\\r\\n  cursor: pointer;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding-top: 1%;\\r\\n  border-radius: 10px;\\r\\n  padding-bottom: 1%;\\r\\n  margin-top: 3%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  color: white;\\r\\n  font-family: $font;\\r\\n  padding-left: 10%;\\r\\n  padding-right: 10%;\\r\\n  text-align: center;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n","$body: #101010;\\r\\n$button-chooser: #121212;\\r\\n$error: #090909;\\r\\n$game: #161616;\\r\\n$info: #fefefe;\\r\\n\\r\\n$font: Circular Std;\\r\\n\\r\\n$chooser-scale: scale(1.8);","@use \\"_variables.scss\\" as *;\\r\\n@use \\"error.scss\\";\\r\\n@use \\"game.scss\\";\\r\\n@use \\"chat.scss\\";\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\"Circular Std\\";\\r\\n  src: url(\\"circular/CircularStd-Bold.woff2\\") format(\\"woff2\\"),\\r\\n    url(\\"circular/CircularStd-Bold.woff\\") format(\\"woff\\"),\\r\\n    url(\\"circular/CircularStd-Bold.svg#CircularStd-Bold\\") format(\\"svg\\");\\r\\n  font-weight: bold;\\r\\n  font-style: normal;\\r\\n  font-display: swap;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  user-select: none;\\r\\n  cursor: default;\\r\\n  background: $body;\\r\\n  font-family: $font;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 100px;\\r\\n  position: absolute;\\r\\n  bottom: 10px;\\r\\n  left: 10px;\\r\\n  background: #ebebeb;\\r\\n  padding: 20px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  display: contents;\\r\\n  color: #ff6464;\\r\\n}\\r\\n\\r\\n.topbar {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n}\\r\\n.item {\\r\\n  background: #101010;\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  margin-left: 10px;\\r\\n  border-radius: 10px;\\r\\n  cursor: pointer;\\r\\n  float: left;\\r\\n}\\r\\n\\r\\n.svg {\\r\\n  position: relative;\\r\\n  top: calc(50% + 2px);\\r\\n  left: calc(50% + 4px);\\r\\n  transform: translate(-50%, -50%);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.chatbtn {\\r\\n  top: calc(50% + 2px);\\r\\n  left: calc(50% + 10px);\\r\\n}\\r\\n\\r\\n#chat_toggle {\\r\\n  transition: 0.2s filter linear;\\r\\n}\\r\\n\\r\\n#list_toggle {\\r\\n  transition: 0.2s filter linear;\\r\\n}\\r\\n\\r\\n#info_toggle {\\r\\n  transition: 0.2s filter linear;\\r\\n}\\r\\n\\r\\n.toplogo {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#menu {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  transition: 0.2s opacity linear;\\r\\n  opacity: 0;\\r\\n  background: #121212;\\r\\n  width: 500px;\\r\\n  height: 200px;\\r\\n  color: white;\\r\\n  border-radius: 10px;\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n.menbtn {\\r\\n  background: #262626;\\r\\n  margin: revert;\\r\\n  width: calc(50% - 10px);\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.game-meta {\\r\\n  padding-right: 30px;\\r\\n}\\r\\n.game-name {\\r\\n  font-size: 2rem;\\r\\n  font-family: $font;\\r\\n}\\r\\n\\r\\n.game-image {\\r\\n  margin-left: 30px;\\r\\n  border-radius: 15px;\\r\\n  margin-top: 37.5px;\\r\\n  width: 125px;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.game-name,\\r\\n.game-author {\\r\\n  margin-left: 175px;\\r\\n  padding-top: 37.5px;\\r\\n}\\r\\n\\r\\n.game-author {\\r\\n  padding: revert;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  font-family: \\"Highway Gothic\\";\\r\\n  background: #101010;\\r\\n  width: fit-content;\\r\\n  padding: 5px;\\r\\n  position: absolute;\\r\\n  border-radius: 5px;\\r\\n  top: 10px;\\r\\n  right: 10px;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  background: #262626;\\r\\n  border-style: solid;\\r\\n  border-color: #262626;\\r\\n  margin-top: 85px;\\r\\n}\\r\\n\\r\\n.exit {\\r\\n  background: #262626;\\r\\n  width: fit-content;\\r\\n  position: absolute;\\r\\n  bottom: 10px;\\r\\n  right: 10px;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.layer {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  pointer-events: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  float: right;\\r\\n  margin-right: 16px;\\r\\n  transition: 0.2s opacity linear;\\r\\n  opacity: 1;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\nli {\\r\\n  width: 200px;\\r\\n  background: #121212;\\r\\n  color: white;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 5px;\\r\\n  border-radius: 10px;\\r\\n  overflow: hidden;\\r\\n  border-style: solid;\\r\\n  border-width: 0.5px;\\r\\n}\\r\\n\\r\\n.bubble {\\r\\n  max-height: 500px;\\r\\n  background: #101010;\\r\\n  position: absolute;\\r\\n  padding: 10px;\\r\\n  border-radius: 15px;\\r\\n  max-width: 200%;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n  white-space: nowrap;\\r\\n  margin-left: 50%;\\r\\n  transform: translate(-50%);\\r\\n  transition: 0.2s opacity linear;\\r\\n}\\r\\n\\r\\n.caret {\\r\\n  position: absolute;\\r\\n  padding: 10px;\\r\\n  border-radius: 15px;\\r\\n  margin-left: 50%;\\r\\n  transform: translate(-50%);\\r\\n  transition: 0.2s opacity linear;\\r\\n  margin-top: calc(1ch + 15px);\\r\\n  color: #101010;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n\\r\\n#loading {\\r\\n  position: absolute;\\r\\n  transition: 0.2s opacity linear;\\r\\n  opacity: 1;\\r\\n  background: #121212;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  color: white;\\r\\n  z-index: 2147483647;\\r\\n}\\r\\n\\r\\n#load-status {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  font-size: 2rem;\\r\\n  font-family: $font;\\r\\n}\\r\\n\\r\\n#load-detail {\\r\\n  position: absolute;\\r\\n  top: 55%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%);\\r\\n  font-size: 1rem;\\r\\n  font-family: $font;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  background: #262626;\\r\\n  width: fit-content;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n  display: inline;\\r\\n}","@use \\"_variables.scss\\" as *;\\r\\n\\r\\n.player {\\r\\n  user-select: none;\\r\\n  animation-fill-mode: forwards;\\r\\n  background: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  opacity: 1;\\r\\n  pointer-events: none;\\r\\n  z-index: 2\\r\\n}\\r\\n\\r\\n.username {\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  bottom: 45px;\\r\\n  left: 50%;\\r\\n  white-space: nowrap;\\r\\n  transform: translate(-50%);\\r\\n}\\r\\n\\r\\n.playerimage {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n#game {\\r\\n  height: 100%;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: $game;\\r\\n  width: 100%;\\r\\n  overflow: hidden;\\r\\n  color: white;\\r\\n  transition: filter 0.5s linear;\\r\\n  z-index: -1;\\r\\n}\\r\\n",".chat {\\r\\n  position: absolute;\\r\\n  top: calc(50px + 1% + 10px);\\r\\n  left: 10px;\\r\\n  background: rgba(18, 18, 18, 0.4);\\r\\n  color: white;\\r\\n  transition: 0.2s opacity linear;\\r\\n  opacity: 1;\\r\\n  width: 30%;\\r\\n  height: 25%;\\r\\n  z-index: 2;\\r\\n  border-radius: 10px;\\r\\n  &:hover {\\r\\n    background: rgba(18, 18, 18, 0.8);\\r\\n    .chatbox {\\r\\n      background: rgb(16, 16, 16, 0.8);\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n.chatbox {\\r\\n  width: 100%;\\r\\n  background: rgb(16, 16, 16, 0.4);\\r\\n  border: none;\\r\\n  color: white;\\r\\n  padding: 10px 0 10px 10px;\\r\\n  margin-right: -10px;\\r\\n  outline: none;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  border-bottom-right-radius: 10px;\\r\\n  border-bottom-left-radius: 10px;\\r\\n}\\r\\n\\r\\n.log {\\r\\n  height: calc(100% - 45px);\\r\\n  padding-right: 5px;\\r\\n  overflow: scroll;\\r\\n  overflow-x: hidden;\\r\\n  padding-top: 10px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.message {\\r\\n    margin-bottom: 5px;\\r\\n    word-break: break-all;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anolet/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://anolet/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === "function") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n    var sourceMapping = "/*# ".concat(data, " */");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join("\\n");\n  }\n\n  return [content].join("\\n");\n};\n\n//# sourceURL=webpack://anolet/./node_modules/css-loader/dist/runtime/sourceMaps.js?'
        );

        /***/
      },

    /***/ "./node_modules/point-in-polygon/flat.js":
      /*!***********************************************!*\
  !*** ./node_modules/point-in-polygon/flat.js ***!
  \***********************************************/
      /***/ (module) => {
        eval(
          "module.exports = function pointInPolygonFlat (point, vs, start, end) {\n    var x = point[0], y = point[1];\n    var inside = false;\n    if (start === undefined) start = 0;\n    if (end === undefined) end = vs.length;\n    var len = (end-start)/2;\n    for (var i = 0, j = len - 1; i < len; j = i++) {\n        var xi = vs[start+i*2+0], yi = vs[start+i*2+1];\n        var xj = vs[start+j*2+0], yj = vs[start+j*2+1];\n        var intersect = ((yi > y) !== (yj > y))\n            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);\n        if (intersect) inside = !inside;\n    }\n    return inside;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/point-in-polygon/flat.js?"
        );

        /***/
      },

    /***/ "./node_modules/point-in-polygon/index.js":
      /*!************************************************!*\
  !*** ./node_modules/point-in-polygon/index.js ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var pointInPolygonFlat = __webpack_require__(/*! ./flat.js */ "./node_modules/point-in-polygon/flat.js")\nvar pointInPolygonNested = __webpack_require__(/*! ./nested.js */ "./node_modules/point-in-polygon/nested.js")\n\nmodule.exports = function pointInPolygon (point, vs, start, end) {\n    if (vs.length > 0 && Array.isArray(vs[0])) {\n        return pointInPolygonNested(point, vs, start, end);\n    } else {\n        return pointInPolygonFlat(point, vs, start, end);\n    }\n}\nmodule.exports.nested = pointInPolygonNested\nmodule.exports.flat = pointInPolygonFlat\n\n\n//# sourceURL=webpack://anolet/./node_modules/point-in-polygon/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/point-in-polygon/nested.js":
      /*!*************************************************!*\
  !*** ./node_modules/point-in-polygon/nested.js ***!
  \*************************************************/
      /***/ (module) => {
        eval(
          "// ray-casting algorithm based on\n// https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html\n\nmodule.exports = function pointInPolygonNested (point, vs, start, end) {\n    var x = point[0], y = point[1];\n    var inside = false;\n    if (start === undefined) start = 0;\n    if (end === undefined) end = vs.length;\n    var len = end - start;\n    for (var i = 0, j = len - 1; i < len; j = i++) {\n        var xi = vs[i+start][0], yi = vs[i+start][1];\n        var xj = vs[j+start][0], yj = vs[j+start][1];\n        var intersect = ((yi > y) !== (yj > y))\n            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);\n        if (intersect) inside = !inside;\n    }\n    return inside;\n};\n\n\n//# sourceURL=webpack://anolet/./node_modules/point-in-polygon/nested.js?"
        );

        /***/
      },

    /***/ "./src/scss/main.scss":
      /*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://anolet/./src/scss/main.scss?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        "use strict";
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/js/animation/logo.js":
      /*!**********************************!*\
  !*** ./src/js/animation/logo.js ***!
  \**********************************/
      /***/ () => {
        eval(
          'const logo = document.getElementById("logo");\r\n\r\nlogo.addEventListener("click", function () {\r\n    logo.animate([{ transform: \'rotate(360deg)\' }], {\r\n        duration: 800,\r\n        ease: "ease-in-out"\r\n    });\r\n});\n\n//# sourceURL=webpack://anolet/./src/js/animation/logo.js?'
        );

        /***/
      },

    /***/ "./src/js/events/chatmsg.js":
      /*!**********************************!*\
  !*** ./src/js/events/chatmsg.js ***!
  \**********************************/
      /***/ (module) => {
        eval(
          'function escapeHtml(unsafe) {\r\n    return unsafe\r\n        .replace(/&/g, "&amp;")\r\n        .replace(/</g, "&lt;")\r\n        .replace(/>/g, "&gt;")\r\n        .replace(/"/g, "&quot;")\r\n        .replace(/\'/g, "&#039;");\r\n}\r\nmodule.exports = function (msg) {\r\n    var chat = document.createElement("div");\r\n    var log = document.getElementById("log");\r\n    var admin = "";\r\n    chat.classList.add("message");\r\n    if (msg?.system) {\r\n        chat.innerHTML = `<b>System<span style="margin-left: 5px;" class="mdi mdi-check-decagram"></span>: </b>${msg.message}`;\r\n    } else {\r\n        if (msg.admin) {\r\n            admin = "<div class=\'red\' style=\'display: contents;\'>[ADMIN] </div>";\r\n        }\r\n        if (msg.admin) {\r\n            chat.innerHTML = `${admin}<b>${msg.username}: </b> ${msg.message}`;\r\n        } else {\r\n            chat.innerHTML = `${admin}<b>${escapeHtml(msg.username)}: </b> ${escapeHtml(msg.message)}`;\r\n        }\r\n    }\r\n\r\n    log.appendChild(chat);\r\n    log.scrollTop = log.scrollHeight; // Scroll to bottom when new message is added\r\n    \r\n    // bubble\r\n    clearTimeout(document.chatHide);\r\n    document.getElementById("player-" + msg.plrid).children[0].innerText = msg.message;\r\n    document.getElementById("player-" + msg.plrid).children[0].style.opacity = "1";\r\n    document.getElementById("player-" + msg.plrid).children[1].style.opacity = "1";\r\n    document.chatHide = setTimeout(function() {\r\n        document.getElementById("player-" + msg.plrid).children[0].style.opacity = "0";\r\n        document.getElementById("player-" + msg.plrid).children[1].style.opacity = "0";\r\n    }, 5000);\r\n}\r\n\n\n//# sourceURL=webpack://anolet/./src/js/events/chatmsg.js?'
        );

        /***/
      },

    /***/ "./src/js/events/exit.js":
      /*!*******************************!*\
  !*** ./src/js/events/exit.js ***!
  \*******************************/
      /***/ (module) => {
        eval(
          'module.exports = function(msg) {\r\n    document.getElementById("player-" + msg.plrid).style.opacity = "0";\r\n    document.getElementById("listusr-" + msg.plrid).remove();\r\n    setTimeout(function(){\r\n        document.getElementById("player-" + msg.plrid).remove();\r\n    }, 500);\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/events/exit.js?'
        );

        /***/
      },

    /***/ "./src/js/events/init.js":
      /*!*******************************!*\
  !*** ./src/js/events/init.js ***!
  \*******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'function percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n};\r\n\r\nvar detail = __webpack_require__(/*! ../loadDetail */ "./src/js/loadDetail.js");\r\n\r\nmodule.exports = function (msg) {\r\n    detail("Rendering Players")\r\n    msg.players.forEach(player => {\r\n        detail("Rendering Player " + player.name)\r\n        var plr = document.createElement("div");\r\n        plr.className = "player";\r\n        plr.id = "player-" + player.id;\r\n        plr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="${player.avatar}" class="playerimage"><div class="username">${player.username}</div>`;\r\n        plr.style.top = "calc(" + player.y.toString() + "%" + " - 100px)";\r\n        plr.style.left = "calc(" + player.x.toString() + "%" + " - 100px)";\r\n        detail("Adding Player")\r\n        document.getElementById("game").appendChild(plr);\r\n        if (player.admin) {\r\n            document.getElementById("player-" + player.id).children[3].innerHTML = "<div class=\'red\' style=\'display: contents;\'>[ADMIN] </div>" + document.getElementById("player-" + player.id).children[3].innerText;\r\n            document.getElementById("list").innerHTML += `<li id="listusr-${player.id}"><div class=\'red\' style=\'display: contents;\'>[ADMIN] </div>${player.username}</li>`\r\n        } else {\r\n            document.getElementById("list").innerHTML += `<li id="listusr-${player.id}">${player.username}</li>`\r\n        }\r\n    });\r\n\r\n    detail("Rendering Menu")\r\n    document.getElementById("game-name").innerText = msg.gameState.title;\r\n    document.getElementById("game-author").innerText = msg.gameState.creator.name;\r\n    document.getElementById("game-image").src = msg.gameState.iconAssetURL;\r\n\r\n    detail("Initializing Speed Animation")\r\n    var styleSheet = document.createElement("style")\r\n    styleSheet.innerHTML = `\r\n    .player {\r\n        transition: top ${msg.gameState.worldSettings.defaultSpeed}s ease-out, left ${msg.gameState.worldSettings.defaultSpeed}s ease-out, opacity ${msg.gameState.worldSettings.defaultSpeed}s ease-out;\r\n    }\r\n    `\r\n    document.head.appendChild(styleSheet);\r\n\r\n    detail("Calculating Zone Settings")\r\n    document.defaultZone = msg.gameState.zones.find(zone => zone.id == msg.gameState.worldSettings.defaultZone);\r\n    document.currentZone = document.defaultZone;\r\n\r\n    detail("Rendering Zone Layers")\r\n    document.defaultZone.layers.forEach(layer => {\r\n        detail("Rendering Layer " + layer.name)\r\n        var layerElement = document.createElement("img");\r\n        layerElement.classList.add("layer");\r\n        layerElement.src = layer.assetURL;\r\n        if (layer.layer == 1) {\r\n            layerElement.style = "z-index: 1;";\r\n        } else {\r\n            layerElement.style = `z-index: ${layer.layer + 1};`\r\n        }\r\n        detail("Adding Zone Layer")\r\n        document.getElementById("game").appendChild(layerElement);\r\n    });\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/events/init.js?'
        );

        /***/
      },

    /***/ "./src/js/events/newplr.js":
      /*!*********************************!*\
  !*** ./src/js/events/newplr.js ***!
  \*********************************/
      /***/ (module) => {
        eval(
          'module.exports = function (msg, plrid) {\r\n    var nplr = document.createElement("div");\r\n    nplr.className = "player";\r\n    nplr.id = "player-" + msg.plrid;\r\n    nplr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="${msg.avatar}" class="playerimage"><div class="username">${msg.username}</div>`;\r\n    if (msg.plrid == plrid) {\r\n        nplr.classList.add("me");\r\n    }\r\n    if (msg.admin) {\r\n        document.iamadmin = true;\r\n        nplr.children[3].innerHTML = "<div class=\'red\' style=\'display: contents;\'>[ADMIN] </div>" + nplr.children[3].innerText;\r\n    }\r\n    nplr.style.top = `calc(${msg.y}% - 100px)`;\r\n    nplr.style.left = `calc(${msg.x}% - 100px)`;\r\n    document.getElementById("game").appendChild(nplr);\r\n    if (msg.admin) {\r\n        document.getElementById("list").innerHTML += `<li id="listusr-${msg.plrid}"><div class=\'red\' style=\'display: contents;\'>[ADMIN] </div>${msg.username}</li>`\r\n    } else {\r\n        document.getElementById("list").innerHTML += `<li id="listusr-${msg.plrid}">${msg.username}</li>`\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://anolet/./src/js/events/newplr.js?'
        );

        /***/
      },

    /***/ "./src/js/events/posupdate.js":
      /*!************************************!*\
  !*** ./src/js/events/posupdate.js ***!
  \************************************/
      /***/ (module) => {
        eval(
          'function percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n};\r\n\r\nmodule.exports = function (msg) {\r\n    document.getElementById("player-" + msg.id).style.top = "calc(" + msg.y.toString() + "%" + " - 100px)";\r\n    document.getElementById("player-" + msg.id).style.left = "calc(" + msg.x.toString() + "%" + " - 100px)";\r\n};\n\n//# sourceURL=webpack://anolet/./src/js/events/posupdate.js?'
        );

        /***/
      },

    /***/ "./src/js/events sync recursive ^\\.\\/.*$":
      /*!**************************************!*\
  !*** ./src/js/events/ sync ^\.\/.*$ ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var map = {\n\t"./chatmsg": "./src/js/events/chatmsg.js",\n\t"./chatmsg.js": "./src/js/events/chatmsg.js",\n\t"./exit": "./src/js/events/exit.js",\n\t"./exit.js": "./src/js/events/exit.js",\n\t"./init": "./src/js/events/init.js",\n\t"./init.js": "./src/js/events/init.js",\n\t"./newplr": "./src/js/events/newplr.js",\n\t"./newplr.js": "./src/js/events/newplr.js",\n\t"./posupdate": "./src/js/events/posupdate.js",\n\t"./posupdate.js": "./src/js/events/posupdate.js"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./src/js/events sync recursive ^\\\\.\\\\/.*$";\n\n//# sourceURL=webpack://anolet/./src/js/events/_sync_^\\.\\/.*$?'
        );

        /***/
      },

    /***/ "./src/js/game.js":
      /*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket */ "./src/js/websocket.js");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");\n/* harmony import */ var _animation_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/logo */ "./src/js/animation/logo.js");\n/* harmony import */ var _animation_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_logo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _jamescoyle_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jamescoyle/svg-icon */ "./node_modules/@jamescoyle/svg-icon/lib/svg-icon.js");\n/* harmony import */ var _jamescoyle_svg_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jamescoyle_svg_icon__WEBPACK_IMPORTED_MODULE_3__);\n // Import our websocket handler\r\n // Import SCSS\r\n // Import animation for the logo\r\n\r\nvar pointInPolygon = __webpack_require__(/*! point-in-polygon */ "./node_modules/point-in-polygon/index.js");\r\nvar detail = __webpack_require__(/*! ./loadDetail */ "./src/js/loadDetail.js");\r\nfunction percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n};\r\n\r\nfunction closeSelf() {\r\n    try { ws.ws.close(); } catch(e) { } // Still close window even if websocket is not connected\r\n    parent.window.postMessage("disconnect", "*");\r\n}\r\nwindow.closeSelf = closeSelf;\r\n\r\ndocument.addEventListener(\'contextmenu\', event => event.preventDefault());\r\nvar gameid = new URLSearchParams(window.location.search).get("game");\r\n\r\ndetail("Getting game information")\r\naxios.get("https://staging-api-infra.anolet.com/game/" + gameid).then((res) => {\r\n    detail("Processing game information")\r\n    document.getElementById("load-name").innerText = res.data.title;\r\n    document.getElementById("load-author").innerText = res.data.creator.name;\r\n    document.getElementById("load-image").src = res.data.iconAssetURL;\r\n\r\n    detail("Beginning websocket processor");\r\n    (0,_websocket__WEBPACK_IMPORTED_MODULE_0__.start)(gameid).then(wsresp => {\r\n        detail("Tidying up");\r\n        var ws = wsresp;\r\n\r\n        // Ran by MouseClick Event\r\n        function moved(event) {\r\n            let allowed = true;\r\n            document.currentZone.boundaryPolylines.forEach((boundary, index) => {\r\n                if (pointInPolygon([percentage(event.clientX, window.innerWidth), percentage(event.clientY, window.innerHeight)], boundary)) {\r\n                    return allowed = false;\r\n                }\r\n                if (index == document.currentZone.boundaryPolylines.length - 1 && allowed) {\r\n                    ws.ws.send(JSON.stringify({\r\n                        type: "pos",\r\n                        x: percentage(event.clientX, window.innerWidth),\r\n                        y: percentage(event.clientY, window.innerHeight)\r\n                    }));\r\n                }\r\n            });\r\n        }\r\n\r\n        // Ran when chat is sent\r\n        function chat(event, el) {\r\n            if (event.which == 13) {\r\n                if (event.target.value.length > 150 || event.target.value.length < 2) return;\r\n                ws.ws.send(JSON.stringify({\r\n                    type: "chat",\r\n                    message: event.target.value\r\n                }));\r\n                el.disabled = true;\r\n                var timeLeft = 1;\r\n                el.placeholder = "Please wait 1 second...";\r\n                var timeout = setInterval(() => {\r\n                    timeLeft--;\r\n                    el.placeholder = "Please wait " + timeLeft + " second...";\r\n                    if (timeLeft == 0) {\r\n                        el.placeholder = "Send a chat message";\r\n                        el.disabled = false\r\n                    }\r\n                }, 1000);\r\n                setTimeout(function () { clearInterval(timeout) }, 1000);\r\n                setTimeout(function () {\r\n                    el.placeholder = "Send a chat message";\r\n                    el.disabled = false\r\n                }, 1000); // bandaid solution\r\n                el.value = "";\r\n            }\r\n        };\r\n        window.chat = chat;\r\n\r\n        function kick(id) {\r\n            ws.ws.send(JSON.stringify({\r\n                type: "kick",\r\n                id: id.substring(7)\r\n            }));\r\n        }\r\n        window.kick = kick;\r\n\r\n        detail("Adding Event Listeners");\r\n        // Assign the move event to when the mouse is clicked\r\n        document.getElementById("game").addEventListener("click", moved);\r\n\r\n        document.getElementById("chat_toggle").addEventListener("click", function () {\r\n            if (document.getElementById("chat").style.opacity == "0") {\r\n                document.getElementById("chat").style["z-index"] = "1";\r\n                document.getElementById("chat").style.opacity = "1";\r\n                document.getElementById("chat_toggle").style.filter = "invert(1)";\r\n            } else {\r\n                setTimeout(function () {\r\n                    document.getElementById("chat").style["z-index"] = "-1";\r\n                }, 200);\r\n                document.getElementById("chat").style.opacity = "0";\r\n                document.getElementById("chat_toggle").style.filter = "invert(0)";\r\n            }\r\n        });\r\n\r\n\r\n        document.getElementById("list_toggle").addEventListener("click", function () {\r\n            if (document.getElementById("list").style.opacity == "0") {\r\n                document.getElementById("list").style["z-index"] = "1";\r\n                document.getElementById("list").style.opacity = "1";\r\n                document.getElementById("list_toggle").style.filter = "invert(1)";\r\n            } else {\r\n                setTimeout(function () {\r\n                    document.getElementById("list").style["z-index"] = "-1";\r\n                }, 200);\r\n                document.getElementById("list").style.opacity = "0";\r\n                document.getElementById("list_toggle").style.filter = "invert(0)";\r\n            }\r\n        });\r\n\r\n\r\n        document.getElementById("menu_toggle").addEventListener("click", function () {\r\n            if (document.getElementById("menu").style.opacity == "0") {\r\n                document.getElementById("menu").style["z-index"] = "0";\r\n                document.getElementById("menu").style.opacity = "1";\r\n                document.getElementById("menu_toggle").style.filter = "invert(1)";\r\n            } else {\r\n                setTimeout(function () {\r\n                    document.getElementById("menu").style["z-index"] = "-1";\r\n                }, 200);\r\n                document.getElementById("menu").style.opacity = "0";\r\n                document.getElementById("menu_toggle").style.filter = "invert(0)";\r\n            }\r\n        });\r\n        document.getElementById("menu_close").addEventListener("click", function () {\r\n            setTimeout(function () {\r\n                document.getElementById("menu").style["z-index"] = "-1";\r\n            }, 200);\r\n            document.getElementById("menu").style.opacity = "0";\r\n            document.getElementById("menu_toggle").style.filter = "invert(0)";\r\n        });\r\n\r\n        detail("Waiting On Assets To Load");\r\n        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {\r\n            detail("Assets Loaded");\r\n            document.getElementById("loading").style.opacity = "0"\r\n            setTimeout(function () {\r\n                document.getElementById("loading").style.display = "none"\r\n            }, 800);\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://anolet/./src/js/game.js?'
        );

        /***/
      },

    /***/ "./src/js/loadDetail.js":
      /*!******************************!*\
  !*** ./src/js/loadDetail.js ***!
  \******************************/
      /***/ (module) => {
        eval(
          'module.exports = function (detail, reshow) {\r\n    document.getElementById("load-detail").innerText = detail;\r\n    if (reshow == true) {\r\n        document.getElementById("loading").style.opacity = "1";\r\n        document.getElementById("load-status").innerHTML = \'<div class="refresh" onclick="window.location.reload()">Refresh</div><div style="margin-left: 10px;" class="refresh" onclick="window.closeSelf()">Exit Client</div>\';\r\n        document.getElementById("loading").style.display = "block"\r\n    }\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/loadDetail.js?'
        );

        /***/
      },

    /***/ "./src/js/websocket.js":
      /*!*****************************!*\
  !*** ./src/js/websocket.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "start": () => (/* binding */ start)\n/* harmony export */ });\nvar wsurl = "";\r\nvar plrid;\r\nvar players = 0;\r\n\r\nconst axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js")\r\nvar detail = __webpack_require__(/*! ./loadDetail */ "./src/js/loadDetail.js");\r\n\r\nvar err = "";\r\nfunction start(gameid) {\r\n    return new Promise((resolve, reject) => {\r\n\r\n        detail("Finding Websocket Address")\r\n        // Determine WS URL based off of environment and connect\r\n        if (location.protocol === \'https:\') {\r\n            wsurl = window.location.origin.replace("https", "wss") + "/ws"\r\n        } else {\r\n            wsurl = window.location.origin.replace("http", "ws") + "/ws"\r\n        }\r\n        detail("Connecting To Websocket")\r\n        var ws = new WebSocket(wsurl + "/" + gameid + "/" + new URLSearchParams(window.location.search).get("auth"));\r\n\r\n        // Notify the user if the connection is closed\r\n        ws.onclose = function (e) {\r\n            console.log(err)\r\n            if (err) {\r\n                detail("Error Launching: " + err, true);\r\n            } else {\r\n                detail("Websocket Connection Closed", true);\r\n            }\r\n        };\r\n\r\n        detail("Waiting On init Message")\r\n        // Process the messages received by server and act accordingly\r\n        ws.onmessage = function (event) {\r\n            try {\r\n                var msg = JSON.parse(event.data);\r\n            } catch {\r\n                err = event.data;\r\n            }\r\n\r\n            __webpack_require__("./src/js/events sync recursive ^\\\\.\\\\/.*$")("./" + msg.type)(msg, plrid);\r\n            if (msg.type == "init") {\r\n                detail("Processing init Message")\r\n                plrid = msg.myid;\r\n                resolve({ ws, plrid });\r\n            }\r\n        }\r\n\r\n        ws.onerror = function (e) {\r\n            detail("Unable To Connect To Websocket", true)\r\n        }\r\n        // Close the socket connection when the browser is closed so the user is instantly removed from the game.\r\n        window.onbeforeunload = function (evt) {\r\n            evt.preventDefault();\r\n            ws.close();\r\n            return null;\r\n        };\r\n\r\n\r\n    });\r\n\r\n}\r\n\n\n//# sourceURL=webpack://anolet/./src/js/websocket.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/js/game.js");
  /******/
  /******/
})();
