(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,a,t){e.exports=t(415)},180:function(e,a,t){},181:function(e,a,t){},338:function(e,a,t){},358:function(e,a){},360:function(e,a){},415:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(17),l=t.n(r),i=(t(180),t(35)),s=t(36),c=t(39),d=t(37),u=t(38),m=t(174),g=t.n(m),h=t(21),p=t(91),v=t.n(p),f=t(92),w=t.n(f),E=(t(181),t(27)),b=t.n(E),y=t(67),C=t.n(y),j=t(167),k=t.n(j),P=t(169),T=t.n(P),O=t(93),S=t.n(O),D=t(173),N=t.n(D),M=t(168),A=t.n(M),L=t(95),x=t.n(L),R=t(172),B=t.n(R),I=t(170),W=t.n(I),z=t(171),F=t.n(z),H=t(166),Q=t.n(H),V=t(94),J=t.n(V),Z=t(49),U=t(160),$=t.n(U),q=t(158),G=t.n(q),K=t(161),X=t.n(K),Y=t(162),_=t.n(Y),ee=t(164),ae=t.n(ee),te=t(40),ne=t.n(te),oe=t(163),re=t.n(oe),le=t(96),ie=t.n(le),se=t(165),ce=t.n(se),de=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).handleChangePage=function(e,a){t.setState({page:a})},t.handleChangeRowsPerPage=function(e){t.setState({rowsPerPage:e.target.value})},t.state={data:t.props.data,displayData:t.props.data,searchfor:"",page:0,rowsPerPage:10},t.filterList=t.filterList.bind(Object(Z.a)(Object(Z.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data,displayData:e.data})}},{key:"filterList",value:function(e){var a=e.target.value,t=a.toLowerCase(),n=this.state.data.filter(function(e){for(var a in e)if(e.hasOwnProperty(a)){var n=e[a];if("number"===typeof n&&(n=n.toString()),-1!==n.toLowerCase().indexOf(t))return!0}return!1});this.setState({searchfor:a,displayData:n})}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.displayData,n=a.searchfor,r=a.rowsPerPage,l=a.page;return o.a.createElement("div",{className:e.container},o.a.createElement(G.a,{id:"search",type:"search",value:n,className:e.searchField,onChange:this.filterList,margin:"normal",InputProps:{startAdornment:o.a.createElement($.a,{position:"start"},o.a.createElement(X.a,null))}}),o.a.createElement(_.a,{className:e.table},o.a.createElement(re.a,null,o.a.createElement(ie.a,null,o.a.createElement(ne.a,null,"Tag"),o.a.createElement(ne.a,null,"Value"))),o.a.createElement(ae.a,null,t.slice(l*r,l*r+r).map(function(a){return o.a.createElement(ie.a,{className:e.row,key:a.group+a.element},o.a.createElement(ne.a,null,a.name),o.a.createElement(ne.a,{numeric:!0},a.value))}))),o.a.createElement(ce.a,{component:"div",count:t.length,rowsPerPage:r,page:l,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),a}(o.a.Component),ue=Object(h.withStyles)(function(e){return{flex:{flex:1},spacer:{flex:"1 1 100%"},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}},searchField:{backgroundColor:"white",marginLeft:20}}})(de),me=(t(338),t(20)),ge=t.n(me);ge.a.utils.decodeQuery=ge.a.utils.base.decodeQuery,ge.a.gui.displayProgress=function(){},ge.a.gui.getElement=ge.a.gui.base.getElement,ge.a.gui.refreshElement=ge.a.gui.base.refreshElement,ge.a.image.decoderScripts={jpeg2000:"assets/dwv/decoders/pdfjs/decode-jpeg2000.js","jpeg-lossless":"assets/dwv/decoders/rii-mango/decode-jpegloss.js","jpeg-baseline":"assets/dwv/decoders/pdfjs/decode-jpegbaseline.js"};function he(e){return o.a.createElement(Q.a,Object.assign({direction:"up"},e))}var pe=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).onChangeTool=function(e){t.state.dwvApp&&(t.setState({selectedTool:e}),t.state.dwvApp.onChangeTool({currentTarget:{value:e}}))},t.onReset=function(e){t.state.dwvApp&&t.state.dwvApp.onDisplayReset()},t.handleTagsDialogOpen=function(){t.setState({showDicomTags:!0})},t.handleTagsDialogClose=function(){t.setState({showDicomTags:!1})},t.handleMenuButtonClick=function(e){t.setState({toolMenuAnchorEl:e.currentTarget})},t.handleMenuClose=function(e){t.setState({toolMenuAnchorEl:null})},t.handleMenuItemClick=function(e){t.setState({toolMenuAnchorEl:null}),t.onChangeTool(e)},t.state={versions:{dwv:ge.a.getVersion(),react:o.a.version},tools:["Scroll","ZoomAndPan","WindowLevel","Draw"],selectedTool:"Select Tool",loadProgress:0,dataLoaded:!1,dwvApp:null,tags:[],showDicomTags:!1,toolMenuAnchorEl:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.versions,r=t.tools,l=t.loadProgress,i=t.dataLoaded,s=t.tags,c=t.toolMenuAnchorEl,d=r.map(function(a){return o.a.createElement(S.a,{onClick:e.handleMenuItemClick.bind(e,a),key:a,value:a},a)});return o.a.createElement("div",{id:"dwv"},o.a.createElement(k.a,{variant:"determinate",value:l}),o.a.createElement("div",{className:"button-row"},o.a.createElement(C.a,{variant:"contained",color:"primary","aria-owns":c?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleMenuButtonClick,disabled:!i,className:a.button,size:"medium"},this.state.selectedTool,o.a.createElement(A.a,{className:a.iconSmall})),o.a.createElement(T.a,{id:"simple-menu",anchorEl:c,open:Boolean(c),onClose:this.handleMenuClose},d),o.a.createElement(C.a,{variant:"contained",color:"primary",disabled:!i,onClick:this.onReset},"Reset"),o.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.handleTagsDialogOpen,disabled:!i,className:a.button,size:"medium"},"Tags"),o.a.createElement(W.a,{open:this.state.showDicomTags,onClose:this.handleTagsDialogClose,TransitionComponent:he,classes:{paper:a.tagsDialog}},o.a.createElement(F.a,{className:a.appBar},o.a.createElement(J.a,null,o.a.createElement(x.a,{color:"inherit",onClick:this.handleTagsDialogClose,"aria-label":"Close"},o.a.createElement(B.a,null)),o.a.createElement(b.a,{variant:"title",color:"inherit",className:a.flex},"DICOM Tags"))),o.a.createElement(ue,{data:s}))),o.a.createElement("div",{className:"layerContainer"},o.a.createElement("div",{className:"dropBox"},o.a.createElement(b.a,null,"Drag and drop data here.")),o.a.createElement("canvas",{className:"imageLayer"},"Only for HTML5 compatible browsers..."),o.a.createElement("div",{className:"drawDiv"})),o.a.createElement("div",null,o.a.createElement("p",{className:"legend"},o.a.createElement(b.a,{variant:"caption"},"Powered by ",o.a.createElement(N.a,{href:"https://github.com/ivmartel/dwv",title:"dwv on github"},"dwv")," ",n.dwv," and React ",n.react))))}},{key:"componentDidMount",value:function(){var e=new ge.a.App;e.init({containerDivId:"dwv",tools:this.state.tools,shapes:["Ruler"],isMobile:!0});var a=this;e.addEventListener("load-progress",function(e){a.setState({loadProgress:e.loaded})}),e.addEventListener("load-end",function(t){a.setState({dataLoaded:!0}),a.setState({tags:e.getTags()}),e.isMonoSliceData()&&1===e.getImage().getNumberOfFrames()?a.setState({selectedTool:"ZoomAndPan"}):a.setState({selectedTool:"Scroll"})}),this.setState({dwvApp:e})}}]),a}(o.a.Component),ve=Object(h.withStyles)(function(e){return{button:{margin:e.spacing.unit},appBar:{position:"relative"},title:{flex:"0 0 auto"},tagsDialog:{minHeight:"90vh",maxHeight:"90vh",minWidth:"90vw",maxWidth:"90vw"},iconSmall:{fontSize:20}}})(pe),fe=Object(h.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:v.a,secondary:w.a,type:"light"}}),we=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(h.MuiThemeProvider,{theme:fe},o.a.createElement(g.a,null),o.a.createElement("div",{className:"App"},o.a.createElement(ve,null)))}}]),a}(n.Component),Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(we,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dwv-react/demo/trunk",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/dwv-react/demo/trunk","/service-worker.js");Ee?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):be(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):be(e)})}}()}},[[175,1,2]]]);
//# sourceMappingURL=main.6c15b3ba.chunk.js.map