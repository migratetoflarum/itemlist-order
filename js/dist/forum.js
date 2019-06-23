module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/Editor.js":
/*!****************************************!*\
  !*** ./src/forum/components/Editor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_itemListToArrayWithoutExtractingContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/itemListToArrayWithoutExtractingContent */ "./src/forum/utils/itemListToArrayWithoutExtractingContent.js");
/* harmony import */ var _utils_getStoredConfigForItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getStoredConfigForItemList */ "./src/forum/utils/getStoredConfigForItemList.js");








/* global m */

var Editor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Editor, _Component);

  function Editor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Editor.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    var config = Object(_utils_getStoredConfigForItemList__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.name);
    this.itemsOrder = config || {
      start: [],
      end: [],
      hidden: []
    };
    this.dirty = false;
    this.loading = false;
    this.saved = false;
  };

  _proto.view = function view() {
    var _this = this;

    var items = Object(_utils_itemListToArrayWithoutExtractingContent__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props.items);

    var renderItem = function renderItem(item) {
      var itemName = item.itemName;

      var indexInStart = _this.itemsOrder.start.indexOf(itemName);

      var indexInEnd = _this.itemsOrder.end.indexOf(itemName);

      var indexInHidden = _this.itemsOrder.hidden.indexOf(itemName);

      var removeFromStart = function removeFromStart() {
        if (indexInStart !== -1) {
          _this.itemsOrder.start.splice(indexInStart, 1);

          _this.dirty = true;
        }
      };

      var removeFromEnd = function removeFromEnd() {
        if (indexInEnd !== -1) {
          _this.itemsOrder.end.splice(indexInEnd, 1);

          _this.dirty = true;
        }
      };

      var removeFromHidden = function removeFromHidden() {
        if (indexInHidden !== -1) {
          _this.itemsOrder.hidden.splice(indexInHidden, 1);

          _this.dirty = true;
        }
      };

      return m('.Itemlist-Order-Item', {
        key: 'item-' + item.itemName
      }, [m('.Itemlist-Order-Original', {
        title: 'Internal item name: ' + item.itemName + ' - Original priority: ' + item.priority
      }, item.content), m('.Itemlist-Order-Actions', [m('button.Button.Button--link', {
        title: 'Move up',
        onclick: function onclick() {
          removeFromHidden();

          if (indexInStart !== -1) {
            if (indexInStart > 0) {
              removeFromStart();

              _this.itemsOrder.start.splice(indexInStart - 1, 0, itemName);

              _this.dirty = true;
            } // else: already at the top, don't move the item

          } else if (indexInEnd !== -1) {
            removeFromEnd();

            if (indexInEnd === 0) {
              _this.itemsOrder.start.push(itemName);
            } else {
              _this.itemsOrder.end.splice(indexInEnd - 1, 0, itemName);
            }

            _this.dirty = true;
          } else {
            _this.itemsOrder.start.push(itemName);

            _this.dirty = true;
          }
        },
        disabled: _this.loading
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-angle-up')), m('button.Button.Button--link', {
        title: 'Move down',
        onclick: function onclick() {
          removeFromHidden();

          if (indexInEnd !== -1) {
            if (indexInEnd < _this.itemsOrder.end.length - 1) {
              removeFromEnd();

              _this.itemsOrder.end.splice(indexInEnd + 1, 0, itemName);

              _this.dirty = true;
            } // else: already at the bottom, don't move the item

          } else if (indexInStart !== -1) {
            if (indexInStart === _this.itemsOrder.start.length - 1) {
              removeFromStart(); // Can't put this above condition or it would change the array length

              _this.itemsOrder.end.unshift(itemName);
            } else {
              removeFromStart();

              _this.itemsOrder.start.splice(indexInStart + 1, 0, itemName);
            }

            _this.dirty = true;
          } else {
            _this.itemsOrder.end.unshift(itemName);

            _this.dirty = true;
          }
        },
        disabled: _this.loading
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-angle-down')), m('button.Button.Button--link', {
        title: 'Hide',
        onclick: function onclick() {
          if (indexInHidden === -1) {
            removeFromStart();
            removeFromEnd();

            _this.itemsOrder.hidden.push(itemName);

            _this.dirty = true;
          } else {
            removeFromHidden();
          }
        },
        disabled: _this.loading
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-eye' + (indexInHidden === -1 ? '-slash' : ''))), m('button.Button.Button--link', {
        title: 'Restore default position',
        onclick: function onclick() {
          removeFromStart();
          removeFromEnd();
          removeFromHidden();
        },
        disabled: _this.loading
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-undo'))])]);
    };

    var sectionsContent = function sectionsContent(key, nothingMessage) {
      var entries = _this.itemsOrder[key].map(function (itemName) {
        var item = items.find(function (i) {
          return i.itemName === itemName;
        }); // TODO: handle missing items

        return renderItem(item);
      });

      if (entries.length) {
        return entries;
      }

      return m('p', {
        key: 'empty-' + key
      }, nothingMessage);
    };

    var defaultContent = items.filter(function (item) {
      var itemName = item.itemName;

      var indexInStart = _this.itemsOrder.start.indexOf(itemName);

      var indexInEnd = _this.itemsOrder.end.indexOf(itemName);

      var indexInHidden = _this.itemsOrder.hidden.indexOf(itemName);

      return indexInStart === -1 && indexInEnd === -1 && indexInHidden === -1;
    }).map(function (item) {
      return renderItem(item);
    });

    if (!defaultContent.length) {
      defaultContent.push(m('p', {
        key: 'empty-default'
      }, 'Items that appear in other situations or added by new extensions will be added here'));
    }

    return m('.ItemList-Order-Editor', [this.saved ? flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      type: 'info',
      dismissible: true,
      ondismiss: function ondismiss() {
        _this.saved = false;
      },
      children: 'Saved !'
    }) : null, flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      onclick: function onclick() {
        _this.loading = true;
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          method: 'POST',
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/itemlist-order/' + _this.props.name,
          data: _this.itemsOrder
        }).then(function (result) {
          _this.loading = false;
          _this.saved = true;
          _this.dirty = false;
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.itemorderConfig = result;
          m.redraw();
        });
      },
      className: 'Button Button--primary',
      children: 'Save',
      disabled: !this.dirty,
      loading: this.loading
    }), ' ', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      onclick: function onclick() {
        _this.itemsOrder = {
          start: [],
          end: [],
          hidden: []
        };
        _this.dirty = true;
      },
      icon: 'fas fa-undo',
      className: 'Button',
      children: 'Restore default order',
      disabled: this.loading
    }), m('div', [m('h4', {
      key: 'head-start'
    }, 'Before'), sectionsContent('start', 'Move elements up to place them here'), m('h4', {
      key: 'head-default'
    }, 'Default'), defaultContent, m('h4', {
      key: 'head-end'
    }, 'After'), sectionsContent('end', 'Move elements down to place them here'), m('h4', {
      key: 'head-hidden'
    }, 'Hidden'), sectionsContent('hidden', 'You have not hidden any element')])]);
  };

  return Editor;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/EditorModal.js":
/*!*********************************************!*\
  !*** ./src/forum/components/EditorModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditorModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor */ "./src/forum/components/Editor.js");




/* global m */
// We can't use Flarum modals because in order to render the itemlist children,
// the modal has to be a child of the itemlist itself or we would break Mithril rendering tree

var EditorModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditorModal, _Component);

  function EditorModal() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EditorModal.prototype;

  _proto.view = function view() {
    var _this = this;

    return m('.Itemlist-Order-Modal', [m('.ModalManager.modal.fade', {
      onclick: function onclick(event) {
        // When we create the modal as a child of a dropdown, we need to stop propagation
        // Otherwise any click would close the dropdown and hide the modal
        event.stopPropagation(); // Close modal when backdrop is clicked

        if (event.target.classList.contains('ModalManager')) {
          _this.close();
        }
      }
    }, m('.Modal.modal-dialog', m('.Modal-content', [m('.Modal-close', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-times',
      onclick: function onclick() {
        _this.close();
      },
      className: 'Button Button--icon Button--link'
    })), m('.Modal-header', m('h3.App-titleControl App-titleControl--text', 'Update order of ' + this.props.name)), m('.Modal-body', _Editor__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      items: this.props.items,
      name: this.props.name
    }))]))), m('.modal-backdrop.fade.in')]);
  };

  _proto.config = function config(isInitialized) {
    if (isInitialized) {
      return;
    } // Call bootstrap's modal method to correctly configure scrolling of the modal
    // But in fact the modal is already partially hard-coded visible
    // And we use our own backdrop to insert it inside our custom manager


    this.$('.modal').modal({
      backdrop: false
    }).modal('show');
  };

  _proto.close = function close() {
    // Properly close modal, removes body class
    this.$('.modal').modal('hide');
    this.props.finishedEdit();
  };

  return EditorModal;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_applyCustomListItemOrdering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/applyCustomListItemOrdering */ "./src/forum/utils/applyCustomListItemOrdering.js");
/* harmony import */ var _components_EditorModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EditorModal */ "./src/forum/components/EditorModal.js");
/* harmony import */ var _utils_getStoredConfigForItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getStoredConfigForItemList */ "./src/forum/utils/getStoredConfigForItemList.js");







/* global flarum */

function extendList(object, method, name) {
  var edit = false;
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(object, method, function (original) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var items = original.apply(void 0, args);

    if (edit) {
      var modified = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
      modified.add('itemlist-order-editor', _components_EditorModal__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        items: items,
        name: name,
        finishedEdit: function finishedEdit() {
          edit = false;
        }
      }));
      return modified;
    } // If empty list, we don't offer any option
    // TODO: settings if the field has a config but currently nothing in it ?


    if (!Object.keys(items.items).length) {
      return items;
    }

    var config = Object(_utils_getStoredConfigForItemList__WEBPACK_IMPORTED_MODULE_6__["default"])(name);

    if (config) {
      Object(_utils_applyCustomListItemOrdering__WEBPACK_IMPORTED_MODULE_4__["default"])(items, config);
    }

    if (localStorage.getItem('migratetoflarum-itemlist-order-mode') === 'edit') {
      items.add('itemlist-order-control', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        onclick: function onclick(event) {
          event.stopPropagation(); // Prevent dropdowns from closing

          edit = true;
        },
        icon: 'fas fa-random',
        className: 'Button',
        children: 'Edit order',
        title: name
      }), -11000);
    }

    return items;
  });
}

function extendListByName(objectName, methodName) {
  var object = flarum.core.compat[objectName];

  if (objectName.indexOf('components/') === 0) {
    object = object.prototype;
  }

  extendList(object, methodName, objectName + '.' + methodName);
}

flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('migratetoflarum-itemlist-order', function () {
  extendListByName('components/CommentPost', 'headerItems');
  extendListByName('components/DiscussionComposer', 'headerItems'); //extendListByName('components/DiscussionHero', 'items'); // TODO: post redraw strategy
  //extendListByName('components/DiscussionListItem', 'infoItems'); // TODO: clicking visits discussion

  extendListByName('components/DiscussionPage', 'sidebarItems');
  extendListByName('components/HeaderPrimary', 'items');
  extendListByName('components/HeaderSecondary', 'items');
  extendListByName('components/IndexPage', 'sidebarItems');
  extendListByName('components/IndexPage', 'viewItems');
  extendListByName('components/IndexPage', 'actionItems');
  extendListByName('components/LogInModal', 'fields');
  extendListByName('components/LogInButtons', 'items');
  extendListByName('components/ReplyComposer', 'headerItems');
  extendListByName('components/SessionDropdown', 'items');
  extendListByName('components/SettingsPage', 'settingsItems');
  extendListByName('components/SignUpModal', 'fields');
  extendListByName('components/TextEditor', 'controlItems');
  extendListByName('components/TextEditor', 'toolbarItems');
  extendListByName('components/UserCard', 'infoItems');
  extendListByName('components/UserPage', 'navItems'); //extendListByName('utils/DiscussionControls', 'controls'); // TODO: there's a CSS rule hiding the first element of the dropdown for mobile layout

  extendListByName('utils/PostControls', 'controls'); // TODO: post redraw strategy blocks editor from opening

  extendListByName('utils/UserControls', 'controls'); // TODO: itemlist for locales ? needs PR to core
});

/***/ }),

/***/ "./src/forum/utils/applyCustomListItemOrdering.js":
/*!********************************************************!*\
  !*** ./src/forum/utils/applyCustomListItemOrdering.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items, config) {
  var startIndex = 10000; // TODO: don't hard-code

  config.start.forEach(function (name) {
    if (items.has(name)) {
      items.replace(name, null, startIndex--);
    }
  });
  var endIndex = -10000; // TODO: don't hard-code

  config.end.forEach(function (name) {
    if (items.has(name)) {
      items.replace(name, null, endIndex--);
    }
  });
  config.hidden.forEach(function (name) {
    if (items.has(name)) {
      items.remove(name);
    }
  });
});

/***/ }),

/***/ "./src/forum/utils/getStoredConfigForItemList.js":
/*!*******************************************************!*\
  !*** ./src/forum/utils/getStoredConfigForItemList.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (name) {
  if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.data.attributes.itemorderConfig && flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.data.attributes.itemorderConfig.hasOwnProperty(name)) {
    var existingConfig = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.data.attributes.itemorderConfig[name];
    return {
      start: existingConfig.start || [],
      end: existingConfig.end || [],
      hidden: existingConfig.hidden || []
    };
  }

  return null;
});

/***/ }),

/***/ "./src/forum/utils/itemListToArrayWithoutExtractingContent.js":
/*!********************************************************************!*\
  !*** ./src/forum/utils/itemListToArrayWithoutExtractingContent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Same modifications and sorting as in the original ItemList::toArray
/* harmony default export */ __webpack_exports__["default"] = (function (list) {
  var items = [];

  for (var i in list.items) {
    if (list.items.hasOwnProperty(i)
    /* removed instanceof check because the class is not public */
    ) {
        list.items[i].content = Object(list.items[i].content);
        list.items[i].content.itemName = i;
        items.push(list.items[i]);
        list.items[i].key = items.length;
        list.items[i].itemName = i; // Added for ease of access
      }
  }

  return items.sort(function (a, b) {
    if (a.priority === b.priority) {
      return a.key - b.key;
    } else if (a.priority > b.priority) {
      return -1;
    }

    return 1;
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map