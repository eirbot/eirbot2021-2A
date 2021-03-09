(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1034:function(e,t,n){var r=n(702),a=n(764),o=n(682),i=n(726),l=n(697),c=n(999),u=i((function(e,t){var n=c(t);return l(n)&&(n=void 0),l(e)?r(e,a(t,1,l,!0),o(n,2)):[]}));e.exports=u},1037:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=n(664);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=a(e,["fill"]);return o.createElement(i.default,r({},l),o.createElement("path",{d:"M8 1c3.863 0 7 3.137 7 7s-3.137 7-7 7-7-3.137-7-7 3.137-7 7-7zm3.726 7.985A.274.274 0 0 0 12 8.711V7.289a.274.274 0 0 0-.274-.274H8.985V4.274A.274.274 0 0 0 8.711 4H7.289a.274.274 0 0 0-.274.274v2.741H4.274A.274.274 0 0 0 4 7.289v1.422c0 .152.123.274.274.274h2.741v2.741c0 .151.122.274.274.274h1.422a.274.274 0 0 0 .274-.274V8.985h2.741z",style:{fill:n}}))}},2209:function(e,t,n){"use strict";n.r(t);var r=n(1034),a=n.n(r),o=n(13),i=n(176),l=n(742),c=n(716),u=n(775),s=n(972),p=n(933),f=n.n(p),d=n(733),m=n.n(d),h=n(683),g=n(665),b=n(661),y=n(672),v=n.n(y),O=n(1168),_=n.n(O),j=n(1037),E=n.n(j),k=n(710),P=n(686),w=n(670),S=n(919),N=n(746),q=n.n(N),x=n(674),C=n(693),M=n.n(C),A=n(679),L=n.n(A);var D=Object(x.b)((function(e){return{languages:e.languages}}))((function(e){var t=e.languages,n=e.profilesByLanguage,r=e.unavailableLanguages,a=o.useState({language:void 0,key:void 0}),l=a[0],c=l.language,u=l.key,s=a[1],p=Object(i.translate)("project_quality_profile.add_language_modal.title"),f=q()(Object.keys(n),r).map((function(e){return{value:e,label:t[e].name}})),d=void 0!==c?n[c].map((function(e){return{value:e.key,label:e.name}})):[];return o.createElement(L.a,{header:p,onClose:e.onClose,onSubmit:function(){c&&u&&e.onSubmit(u)}},(function(e){var t=e.onCloseClick,n=e.onFormSubmit,r=e.submitting;return o.createElement(o.Fragment,null,o.createElement("div",{className:"modal-head"},o.createElement("h2",null,p)),o.createElement("form",{onSubmit:n},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"big-spacer-bottom"},o.createElement("div",{className:"little-spacer-bottom"},o.createElement("label",{className:"text-bold",htmlFor:"language"},Object(i.translate)("project_quality_profile.add_language_modal.choose_language"))),o.createElement(M.a,{className:"abs-width-300",clearable:!1,disabled:r,id:"language",onChange:function(e){var t=e.value;return s({language:t})},options:f,value:c})),o.createElement("div",{className:"big-spacer-bottom"},o.createElement("div",{className:"little-spacer-bottom"},o.createElement("label",{className:"text-bold",htmlFor:"profiles"},Object(i.translate)("project_quality_profile.add_language_modal.choose_profile"))),o.createElement(M.a,{className:"abs-width-300",clearable:!1,disabled:r||!c,id:"profiles",onChange:function(e){var t=e.value;return s({language:c,key:t})},options:d,value:u}))),o.createElement("div",{className:"modal-foot"},r&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(b.SubmitButton,{disabled:r||!c||!u},Object(i.translate)("save")),o.createElement(b.ButtonLink,{disabled:r,onClick:t},Object(i.translate)("cancel")))))}))})),J=n(738),B=n.n(J),I=n(671);function z(e){var t,n=e.availableProfiles,r=e.component,a=e.currentProfile,l=e.usesDefault,c=o.useState(l?"-1":a.key),u=c[0],s=c[1],p=n.find((function(e){return e.isDefault}));if(void 0===p)return null;var f=Object(i.translateWithParameters)("project_quality_profile.change_lang_X_profile",a.languageName),d=n.map((function(e){return{value:e.key,label:e.name}})),m="-1"===u,h=l?!m:u!==a.key,g=!(null===(t=r.qualityProfiles)||void 0===t?void 0:t.some((function(e){return m?e.key===p.key:e.key===u})));return o.createElement(L.a,{header:f,onClose:e.onClose,onSubmit:function(){return e.onSubmit(m?void 0:u,a.key)}},(function(e){var t=e.onCloseClick,n=e.onFormSubmit,r=e.submitting;return o.createElement(o.Fragment,null,o.createElement("div",{className:"modal-head"},o.createElement("h2",null,f)),o.createElement("form",{onSubmit:n},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"big-spacer-bottom"},o.createElement(B.a,{className:"display-flex-start",checked:m,disabled:r,onCheck:function(){return s("-1")},value:"-1"},o.createElement("div",{className:"spacer-left"},o.createElement("div",{className:"little-spacer-bottom"},Object(i.translate)("project_quality_profile.always_use_default")),o.createElement("div",{className:"display-flex-center"},o.createElement("span",{className:"text-muted spacer-right"},Object(i.translate)("current_noun"),":"),p.name,p.isBuiltIn&&o.createElement(S.a,{className:"spacer-left"}))))),o.createElement("div",{className:"big-spacer-bottom"},o.createElement(B.a,{className:"display-flex-start",checked:!m,disabled:r,onCheck:function(){return s(m?a.key:u)},value:a.key},o.createElement("div",{className:"spacer-left"},o.createElement("div",{className:"little-spacer-bottom"},Object(i.translate)("project_quality_profile.always_use_specific")),o.createElement("div",{className:"display-flex-center"},o.createElement(M.a,{className:"abs-width-300",clearable:!1,disabled:r||m,onChange:function(e){var t=e.value;return s(t)},options:d,optionRenderer:function(e){return o.createElement("span",null,e.label)},value:m?a.key:u}))))),g&&o.createElement(I.Alert,{variant:"warning"},Object(i.translate)("project_quality_profile.requires_new_analysis"))),o.createElement("div",{className:"modal-foot"},r&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(b.SubmitButton,{disabled:r||!h},Object(i.translate)("save")),o.createElement(b.ButtonLink,{disabled:r,onClick:t},Object(i.translate)("cancel")))))}))}function F(e){var t=e.allProfiles,n=e.component,r=e.loading,a=e.showProjectProfileInModal,l=e.projectProfiles,c=e.showAddLanguageModal,u=m()(t,"language"),s=f()(l,(function(e){return e.profile.languageName}));return o.createElement("div",{className:"page page-limited",id:"project-quality-profiles"},o.createElement(P.a,{suggestions:"project_quality_profiles"}),o.createElement(h.a,{defer:!1,title:Object(i.translate)("project_quality_profiles.page")}),o.createElement(k.a,{anchor:"profiles_main"}),o.createElement("header",{className:"page-header"},o.createElement("div",{className:"page-title display-flex-center"},o.createElement("h1",null,Object(i.translate)("project_quality_profiles.page")," "),o.createElement(v.a,{className:"spacer-left",overlay:o.createElement("div",{className:"big-padded-top big-padded-bottom"},Object(i.translate)("quality_profiles.list.projects.help"))}))),o.createElement("div",{className:"boxed-group"},o.createElement("h2",{className:"boxed-group-header"},Object(i.translate)("project_quality_profile.subtitle")),o.createElement("div",{className:"boxed-group-inner"},o.createElement("p",{className:"big-spacer-bottom"},Object(i.translate)("project_quality_profiles.page.description")),r&&o.createElement("i",{className:"spinner spacer-left"}),!r&&s.length>0&&o.createElement("table",{className:"data zebra"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(i.translate)("language")),o.createElement("th",{className:"thin nowrap"},Object(i.translate)("project_quality_profile.current")),o.createElement("th",{className:"thin nowrap text-right"},Object(i.translate)("coding_rules.filters.activation.active_rules")),o.createElement("th",{"aria-label":Object(i.translate)("actions")}))),o.createElement("tbody",null,s.map((function(t){var n=t.profile,r=t.selected;return o.createElement("tr",{key:n.language},o.createElement("td",null,n.languageName),o.createElement("td",{className:"thin nowrap"},o.createElement("span",{className:"display-inline-flex-center"},!r&&n.isDefault?o.createElement("em",null,Object(i.translate)("project_quality_profile.instance_default")):o.createElement(o.Fragment,null,n.name,n.isBuiltIn&&o.createElement(S.a,{className:"spacer-left"})))),o.createElement("td",{className:"nowrap text-right"},o.createElement(g.c,{to:Object(w.B)({qprofile:n.key})},n.activeRuleCount)),o.createElement("td",{className:"text-right"},o.createElement(b.Button,{onClick:function(){e.onOpenSetProfileModal(t)}},o.createElement(_.a,{className:"spacer-right"}),Object(i.translate)("project_quality_profile.change_profile"))))})))),o.createElement("div",{className:"big-spacer-top"},o.createElement("h2",null,Object(i.translate)("project_quality_profile.add_language.title")),o.createElement("p",{className:"spacer-top big-spacer-bottom"},Object(i.translate)("project_quality_profile.add_language.description")),o.createElement(b.Button,{disabled:r,onClick:e.onOpenAddLanguageModal},o.createElement(E.a,{className:"little-spacer-right"}),Object(i.translate)("project_quality_profile.add_language.action"))),a&&o.createElement(z,{availableProfiles:u[a.profile.language],component:n,currentProfile:a.profile,onClose:e.onCloseModal,onSubmit:e.onSetProfile,usesDefault:!a.selected}),c&&l&&o.createElement(D,{profilesByLanguage:u,onClose:e.onCloseModal,onSubmit:e.onAddLanguage,unavailableLanguages:l.map((function(e){return e.profile.language}))}))))}var W,T=(W=function(e,t){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}W(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),U=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},R=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},H=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r},K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchProfiles=function(){return U(t,void 0,void 0,(function(){var e,t,n,r,o;return R(this,(function(i){switch(i.label){case 0:return e=this.props.component,[4,Object(c.A)().then((function(e){return e.profiles})).catch((function(){return[]}))];case 1:return t=i.sent(),[4,Promise.all(t.map((function(t){return Object(c.r)({key:t.key,q:e.name,selected:"selected"}).then((function(n){var r,a=n.results;return{selected:Boolean(null===(r=a.find((function(t){return t.key===e.key})))||void 0===r?void 0:r.selected),profile:t}})).catch((function(){return{selected:!1,profile:t}}))})))];case 2:return n=i.sent(),r=n.filter((function(e){return e.selected})).map((function(e){return{profile:e.profile,selected:!0}})),o=a()(e.qualityProfiles,r.map((function(e){return e.profile})),"key").filter((function(e){var t=e.language;return!r.some((function(e){return e.profile.language===t}))})).map((function(e){var n=e.key,r=t.find((function(e){return e.key===n}));if(r){if(r.isDefault)return{profile:r,selected:!1};var a=t.find((function(e){return e.isDefault&&e.language===r.language}));return a&&{profile:a,selected:!1}}})).filter(l.isDefined),this.mounted&&this.setState({allProfiles:t,projectProfiles:H(r,o),loading:!1}),[2]}}))}))},t.handleOpenSetProfileModal=function(e){t.setState({showProjectProfileInModal:e})},t.handleOpenAddLanguageModal=function(){t.setState({showAddLanguageModal:!0})},t.handleCloseModal=function(){t.setState({showAddLanguageModal:!1,showProjectProfileInModal:void 0})},t.handleAddLanguage=function(e){return U(t,void 0,void 0,(function(){var t,n,r;return R(this,(function(a){switch(a.label){case 0:if(t=this.props.component,n=this.state.allProfiles,!(r=(void 0===n?[]:n).find((function(t){return t.key===e}))))return[3,4];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(c.d)(r,t.key)];case 2:return a.sent(),this.mounted&&(this.setState((function(e){var t=e.projectProfiles;return{projectProfiles:H(void 0===t?[]:t,[{profile:r,selected:!0}]),showAddLanguageModal:!1}})),Object(u.a)(Object(i.translateWithParameters)("project_quality_profile.successfully_updated",r.languageName))),[3,4];case 3:return a.sent(),this.mounted&&this.setState({showAddLanguageModal:!1}),[3,4];case 4:return[2]}}))}))},t.handleSetProfile=function(e,n){return U(t,void 0,void 0,(function(){var t,r,a,o,s,p,f,d,m,h,g;return R(this,(function(b){switch(b.label){case 0:if(t=this.props.component,r=this.state,a=r.allProfiles,o=void 0===a?[]:a,s=r.projectProfiles,p=void 0===s?[]:s,f=e&&o.find((function(t){return t.key===e})),d=p.find((function(e){return e.profile.key===n})),void 0===(m=o.find((function(e){return e.isDefault&&e.language===(null==d?void 0:d.profile.language)})))||void 0===d)return[2];if(!f)return[3,5];h=f,b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Object(c.d)(f,t.key)];case 2:return b.sent(),[3,4];case 3:return b.sent(),h=d.profile,[3,4];case 4:return[3,9];case 5:if(void 0!==e)return[3,9];if(h=m,!d.selected)return[3,9];b.label=6;case 6:return b.trys.push([6,8,,9]),[4,Object(c.m)(d.profile,t.key)];case 7:return b.sent(),[3,9];case 8:return b.sent(),h=d.profile,[3,9];case 9:return this.mounted&&(g=H(p.filter((function(e){return e.profile.key!==n})),[h&&{profile:h,selected:void 0!==e}]).filter(l.isDefined),this.setState({projectProfiles:g,showProjectProfileInModal:void 0}),Object(u.a)(Object(i.translateWithParameters)("project_quality_profile.successfully_updated",m.languageName))),[2]}}))}))},t}return T(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(s.a)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityProfiles)},t.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,t=e.allProfiles,n=e.loading,r=e.showProjectProfileInModal,a=e.projectProfiles,i=e.showAddLanguageModal;return o.createElement(F,{allProfiles:t,component:this.props.component,loading:n,onAddLanguage:this.handleAddLanguage,onCloseModal:this.handleCloseModal,onOpenAddLanguageModal:this.handleOpenAddLanguageModal,onOpenSetProfileModal:this.handleOpenSetProfileModal,onSetProfile:this.handleSetProfile,projectProfiles:a,showAddLanguageModal:i,showProjectProfileInModal:r})},t}(o.PureComponent);t.default=K},672:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13),l=n(721),c=n(687);n(688);var u=n(666);function s(e){var t=e.size,n=void 0===t?12:t,r=a(e,["size"]);return i.createElement("div",{className:o("help-tooltip",r.className)},i.createElement(u.default,{mouseLeaveDelay:.25,onShow:r.onShow,overlay:r.overlay,placement:r.placement},i.createElement("span",{className:"display-inline-flex-center"},r.children||i.createElement(c.ThemeConsumer,null,(function(e){return i.createElement(l.default,{fill:e.colors.gray71,size:n})})))))}t.default=s,t.DarkHelpTooltip=function(e){var t=e.size,n=void 0===t?12:t,o=a(e,["size"]);return i.createElement(s,r({},o),i.createElement(c.ThemeConsumer,null,(function(e){var t=e.colors;return i.createElement(l.default,{fill:t.transparentBlack,fillInner:t.white,size:n})})))}},679:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=n(678),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,a=(e.onSubmit,i(e,["children","header","onClose","onSubmit"]));return l.createElement(c.default,o({contentLabel:n,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(l.Component);t.default=u},686:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(13),o=n(720),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function l(e){var t=e.suggestions;return a.createElement(o.a.Consumer,null,(function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:t})}))}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},688:function(e,t,n){var r=n(662),a=n(689);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},689:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},697:function(e,t,n){var r=n(731),a=n(740);e.exports=function(e){return a(e)&&r(e)}},702:function(e,t,n){var r=n(757),a=n(765),o=n(766),i=n(694),l=n(759),c=n(758);e.exports=function(e,t,n,u){var s=-1,p=a,f=!0,d=e.length,m=[],h=t.length;if(!d)return m;n&&(t=i(t,l(n))),u?(p=o,f=!1):t.length>=200&&(p=c,f=!1,t=new r(t));e:for(;++s<d;){var g=e[s],b=null==n?g:n(g);if(g=u||0!==g?g:0,f&&b==b){for(var y=h;y--;)if(t[y]===b)continue e;m.push(g)}else p(t,b,u)||m.push(g)}return m}},709:function(e,t,n){var r=n(694),a=n(682),o=n(792),i=n(717);e.exports=function(e,t){return(i(e)?r:o)(e,a(t,3))}},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,a=n(13),o=n(176),i=n(771),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return a.createElement(i.a.Consumer,null,(function(t){var n=t.addA11ySkipLink,r=t.removeA11ySkipLink;return a.createElement(s,c({addA11ySkipLink:n,removeA11ySkipLink:r},e))}))}var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLink=function(){var e=t.props,n=e.anchor,r=e.label;return{key:n,label:void 0===r?Object(o.translate)("skip_to_content"):r,weight:e.weight}},t}return l(t,e),t.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},t.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},t.prototype.render=function(){var e=this.props.anchor;return a.createElement("span",{id:"a11y_target__"+e})},t}(a.PureComponent)},716:function(e,t,n){"use strict";n.d(t,"A",(function(){return u})),n.d(t,"s",(function(){return s})),n.d(t,"j",(function(){return p})),n.d(t,"y",(function(){return f})),n.d(t,"r",(function(){return d})),n.d(t,"q",(function(){return m})),n.d(t,"C",(function(){return h})),n.d(t,"x",(function(){return g})),n.d(t,"i",(function(){return b})),n.d(t,"l",(function(){return y})),n.d(t,"g",(function(){return v})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return _})),n.d(t,"o",(function(){return j})),n.d(t,"n",(function(){return E})),n.d(t,"p",(function(){return k})),n.d(t,"h",(function(){return P})),n.d(t,"d",(function(){return w})),n.d(t,"m",(function(){return S})),n.d(t,"B",(function(){return N})),n.d(t,"z",(function(){return q})),n.d(t,"c",(function(){return x})),n.d(t,"w",(function(){return C})),n.d(t,"b",(function(){return M})),n.d(t,"v",(function(){return A})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return D})),n.d(t,"a",(function(){return J})),n.d(t,"k",(function(){return B}));var r=n(709),a=n.n(r),o=n(825),i=n(49),l=n(673),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function s(e){var t=e.compareToSonarWay,n=e.profile.key;return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:t,key:n})}function p(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function f(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function d(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function m(e){var t=e.language,n=e.name;return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:t,qualityProfile:n}).catch(l.a)}function h(e){var t=e.language,n=e.name;return Object(i.post)("/api/qualityprofiles/set_default",{language:t,qualityProfile:n})}function g(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function b(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function y(e){var t=e.language,n=e.name;return Object(i.post)("/api/qualityprofiles/delete",{language:t,qualityProfile:n}).catch(l.a)}function v(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/change_parent",{language:n,qualityProfile:r,parentQualityProfile:t?t.name:void 0}).catch(l.a)}function O(e){var t=e.language,n=e.name;return"/api/qualityprofiles/backup?"+Object.entries({language:t,qualityProfile:n}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function _(e,t){var n=e.key,r=t.language,a=t.name;return"/api/qualityprofiles/export?"+Object.entries({exporterKey:n,language:r,qualityProfile:a}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function j(){return Object(i.getJSON)("/api/qualityprofiles/importers").then((function(e){return e.importers}),l.a)}function E(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then((function(e){return e.exporters}))}function k(e,t,n,r){var a=n.language,o=n.name;return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:a,qualityProfile:o,p:r})}function P(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function w(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/add_project",{language:n,qualityProfile:r,project:t}).catch(l.a)}function S(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/remove_project",{language:n,qualityProfile:r,project:t}).catch(l.a)}function N(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function q(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function x(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function C(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function M(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function A(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function L(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function D(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function J(e){var t=e.params&&a()(e.params,(function(e,t){return t+"="+Object(o.csvEscape)(e)})).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",c(c({},e),{params:t})).catch(l.a)}function B(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},733:function(e,t,n){var r=n(790),a=n(760),o=Object.prototype.hasOwnProperty,i=a((function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},738:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13);n(744);var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.disabled||t.props.onCheck(t.props.value)},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.checked,r=e.children,a=e.disabled;return i.createElement("a",{"aria-checked":n,className:o("display-inline-flex-center link-radio",t,{disabled:a}),href:"#",onClick:this.handleClick,role:"radio"},i.createElement("i",{className:o("icon-radio","spacer-right",{"is-checked":n})}),r)},t}(i.PureComponent);t.default=l},744:function(e,t,n){var r=n(662),a=n(751);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},746:function(e,t,n){var r=n(702),a=n(764),o=n(726),i=n(697),l=o((function(e,t){return i(e)?r(e,a(t,1,i,!0)):[]}));e.exports=l},751:function(e,t,n){(t=n(663)(!1)).push([e.i,'.icon-radio{position:relative;display:inline-block;vertical-align:top;width:14px;height:14px;margin:1px;border:1px solid #cdcdcd;border-radius:12px;box-sizing:border-box;transition:border-color .3s ease;flex-shrink:0}.icon-radio:after{position:absolute;top:2px;left:2px;display:block;width:8px;height:8px;border-radius:8px;background-color:#236a97;content:"";opacity:0;transition:opacity .3s ease}.link-radio .icon-radio.is-checked:after{opacity:1}.link-radio{border-bottom:none}.link-radio,.link-radio:not(.disabled):active,.link-radio:not(.disabled):focus,.link-radio:not(.disabled):hover{color:inherit}.link-radio:not(.disabled):hover>.icon-radio{border-color:#4b9fd5}.link-radio.disabled,.link-radio.disabled:hover,.link-radio.disabled label{color:#bbb;cursor:not-allowed}.link-radio.disabled .icon-radio:after{background-color:#ebebeb}',""]),e.exports=t},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(754),a=n(753);function o(e){Object(a.default)().dispatch(r.b(e))}},825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}},919:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(660),a=n(13),o=n(666),i=n.n(o),l=n(176);function c(e){var t=e.className,n=e.tooltip,o=void 0===n||n,c=a.createElement("div",{className:r("badge badge-info",t)},Object(l.translate)("quality_profiles.built_in"));return o?a.createElement(i.a,{overlay:Object(l.translate)("quality_profiles.built_in.description")},c):c}},972:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(181),a=n.n(r),o=n(901),i=n(753);function l(){var e=Object(i.default)(),t=a()(),n=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(o.c)()),t.replace({pathname:"/sessions/new",query:{return_to:n}})}}}]);
//# sourceMappingURL=294.1613385090031.chunk.js.map