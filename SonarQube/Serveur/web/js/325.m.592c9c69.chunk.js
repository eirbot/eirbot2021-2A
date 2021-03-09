(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1754:function(t,e,n){var r=n(313),i=n(1755);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});t.exports=a},1755:function(t,e,n){(e=n(314)(!1)).push([t.i,".quality-profiles-table{padding-top:7px}.quality-profiles-table-inheritance{width:280px}.quality-profiles-table-date,.quality-profiles-table-projects,.quality-profiles-table-rules{min-width:80px}.quality-profiles-list-header{line-height:24px;margin-bottom:20px;padding:5px 10px;border-bottom:1px solid #e6e6e6}.quality-profile-grid{display:flex;justify-content:space-between;align-items:flex-start}.quality-profile-grid-left{width:340px;flex-shrink:0}.quality-profile-grid-right{flex-grow:1;margin-left:20px}.quality-profile-rules-distribution{margin-bottom:15px;padding:7px 20px 0}.quality-profile-rules-deprecated{margin-top:20px;padding:15px 20px;background-color:#f2dede}.quality-profile-rules-sonarway-missing{margin-top:20px;padding:15px 20px;background-color:#fcf8e3}.quality-profile-not-found{padding-top:100px;text-align:center}.quality-profiles-evolution{padding-top:55px}.quality-profiles-evolution-deprecated{border-color:#f4b1b0;background-color:#f2dede}.quality-profiles-evolution-stagnant{border-color:#faebcc;background-color:#fcf8e3}.quality-profile-comparison-table{table-layout:fixed}.quality-profile-changelog-rule-cell{line-height:1.5}.quality-profile-changelog-parameter{max-width:270px;word-break:break-word}",""]),t.exports=e},1876:function(t,e,n){"use strict";n.r(e);var r=n(325),i=n(326),o=n(2),a=n(334),u=n(31),c=n(367),s=n(337),l=(n(1754),n(471));class p extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.updateProfiles=()=>this.fetchProfiles().then(t=>{this.mounted&&this.setState({profiles:Object(l.g)(t.profiles)})})}componentDidMount(){this.mounted=!0,this.loadData()}componentWillUnmount(){this.mounted=!1}fetchProfiles(){return Object(c.A)()}loadData(){this.setState({loading:!0}),Promise.all([Object(c.n)(),this.fetchProfiles()]).then(t=>{if(this.mounted){const[e,n]=t;this.setState({actions:n.actions,exporters:e,profiles:Object(l.g)(n.profiles),loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}renderChild(){if(this.state.loading)return o.createElement("i",{className:"spinner"});const t=Object.values(this.props.languages);return o.cloneElement(this.props.children,{actions:this.state.actions||{},profiles:this.state.profiles||[],languages:t,exporters:this.state.exporters,updateProfiles:this.updateProfiles})}render(){return o.createElement("div",{className:"page page-limited"},o.createElement(s.a,{suggestions:"quality_profiles"}),o.createElement(a.a,{defer:!1,title:Object(u.translate)("quality_profiles.page")}),this.renderChild())}}e.default=Object(r.b)(t=>({languages:Object(i.getLanguages)(t)}))(p)},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(2),i=n(371);function o({suggestions:t}){return r.createElement(i.a.Consumer,null,({addSuggestions:e,removeSuggestions:n})=>r.createElement(a,{addSuggestions:e,removeSuggestions:n,suggestions:t}))}class a extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},360:function(t,e,n){var r=n(345),i=n(333),o=n(444),a=n(368);t.exports=function(t,e){return(a(t)?r:o)(t,i(e,3))}},367:function(t,e,n){"use strict";n.d(e,"A",(function(){return l})),n.d(e,"s",(function(){return p})),n.d(e,"j",(function(){return f})),n.d(e,"y",(function(){return g})),n.d(e,"r",(function(){return d})),n.d(e,"q",(function(){return h})),n.d(e,"C",(function(){return y})),n.d(e,"x",(function(){return b})),n.d(e,"i",(function(){return m})),n.d(e,"l",(function(){return O})),n.d(e,"g",(function(){return j})),n.d(e,"t",(function(){return q})),n.d(e,"u",(function(){return x})),n.d(e,"o",(function(){return v})),n.d(e,"n",(function(){return S})),n.d(e,"p",(function(){return P})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return _})),n.d(e,"m",(function(){return N})),n.d(e,"B",(function(){return J})),n.d(e,"z",(function(){return k})),n.d(e,"c",(function(){return E})),n.d(e,"w",(function(){return D})),n.d(e,"b",(function(){return C})),n.d(e,"v",(function(){return U})),n.d(e,"e",(function(){return K})),n.d(e,"f",(function(){return M})),n.d(e,"a",(function(){return W})),n.d(e,"k",(function(){return A}));var r=n(360),i=n.n(r),o=n(477),a=n(9),u=n(324);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return Object(a.getJSON)("/api/qualityprofiles/search",t).catch(u.a)}function p({compareToSonarWay:t,profile:{key:e}}){return Object(a.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:t,key:e})}function f(t){return Object(a.postJSON)("/api/qualityprofiles/create",t).catch(u.a)}function g(t){return Object(a.postJSON)("/api/qualityprofiles/restore",t).catch(u.a)}function d(t){return Object(a.getJSON)("/api/qualityprofiles/projects",t).catch(u.a)}function h({language:t,name:e}){return Object(a.getJSON)("/api/qualityprofiles/inheritance",{language:t,qualityProfile:e}).catch(u.a)}function y({language:t,name:e}){return Object(a.post)("/api/qualityprofiles/set_default",{language:t,qualityProfile:e})}function b(t,e){return Object(a.post)("/api/qualityprofiles/rename",{key:t,name:e}).catch(u.a)}function m(t,e){return Object(a.postJSON)("/api/qualityprofiles/copy",{fromKey:t,toName:e}).catch(u.a)}function O({language:t,name:e}){return Object(a.post)("/api/qualityprofiles/delete",{language:t,qualityProfile:e}).catch(u.a)}function j({language:t,name:e},n){return Object(a.post)("/api/qualityprofiles/change_parent",{language:t,qualityProfile:e,parentQualityProfile:n?n.name:void 0}).catch(u.a)}function q({language:t,name:e}){const n=Object.entries({language:t,qualityProfile:e}).map(([t,e])=>"".concat(t,"=").concat(encodeURIComponent(e))).join("&");return"/api/qualityprofiles/backup?".concat(n)}function x({key:t},{language:e,name:n}){const r=Object.entries({exporterKey:t,language:e,qualityProfile:n}).map(([t,e])=>"".concat(t,"=").concat(encodeURIComponent(e))).join("&");return"/api/qualityprofiles/export?".concat(r)}function v(){return Object(a.getJSON)("/api/qualityprofiles/importers").then(t=>t.importers,u.a)}function S(){return Object(a.getJSON)("/api/qualityprofiles/exporters").then(t=>t.exporters)}function P(t,e,{language:n,name:r},i){return Object(a.getJSON)("/api/qualityprofiles/changelog",{since:t,to:e,language:n,qualityProfile:r,p:i})}function w(t,e){return Object(a.getJSON)("/api/qualityprofiles/compare",{leftKey:t,rightKey:e})}function _({language:t,name:e},n){return Object(a.post)("/api/qualityprofiles/add_project",{language:t,qualityProfile:e,project:n}).catch(u.a)}function N({language:t,name:e},n){return Object(a.post)("/api/qualityprofiles/remove_project",{language:t,qualityProfile:e,project:n}).catch(u.a)}function J(t){return Object(a.getJSON)("/api/qualityprofiles/search_users",t).catch(u.a)}function k(t){return Object(a.getJSON)("/api/qualityprofiles/search_groups",t).catch(u.a)}function E(t){return Object(a.post)("/api/qualityprofiles/add_user",t).catch(u.a)}function D(t){return Object(a.post)("/api/qualityprofiles/remove_user",t).catch(u.a)}function C(t){return Object(a.post)("/api/qualityprofiles/add_group",t).catch(u.a)}function U(t){return Object(a.post)("/api/qualityprofiles/remove_group",t).catch(u.a)}function K(t){return Object(a.postJSON)("/api/qualityprofiles/activate_rules",t)}function M(t){return Object(a.postJSON)("/api/qualityprofiles/deactivate_rules",t)}function W(t){const e=t.params&&i()(t.params,(t,e)=>"".concat(e,"=").concat(Object(o.csvEscape)(t))).join(";");return Object(a.post)("/api/qualityprofiles/activate_rule",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{params:e})).catch(u.a)}function A(t){return Object(a.post)("/api/qualityprofiles/deactivate_rule",t).catch(u.a)}},477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.csvEscape=function(t){return'"'+t.replace(/"/g,'\\"')+'"'}}}]);
//# sourceMappingURL=325.m.592c9c69.chunk.js.map