(function(t){function e(e){for(var a,i,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i={name:"app"},n=i,l=s("2877"),c=Object(l["a"])(n,o,r,!1,null,null,null),d=c.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parent-wrapper"},[s("div",{staticClass:"wrapper"},[s("TopBar"),s("GridContainer")],1)])},g=[],f=(s("b0c0"),s("bc3a")),h=s.n(f),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar"},[s("div",{staticClass:"logout-container"},[s("i",{staticClass:"fas fa-sign-out-alt fa-lg logout",on:{click:t.logout}})]),s("div",{staticClass:"todo-search-container"},[s("i",{staticClass:"fa fa-search fa-lg"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"todo-search",attrs:{type:"text",placeholder:"Search ...","aria-hidden":"true"},domProps:{value:t.query},on:{keyup:t.search,input:function(e){e.target.composing||(t.query=e.target.value)}}})]),s("div",[s("button",{staticClass:"add-todo-btn",on:{click:function(e){t.addTodo=!0}}},[t._v("Add To-do")]),s("AddTodo",{directives:[{name:"show",rawName:"v-show",value:t.addTodo,expression:"addTodo"}],on:{close:function(e){t.addTodo=!1}}})],1)])},v=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parent-add-todo-container"},[s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal",attrs:{role:"dialog"}},[s("div",{staticClass:"add-todo-grid"},[s("div",{staticClass:"add-todo-close"},[s("i",{staticClass:"fas fa-times-circle fa-lg button",on:{click:t.close}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-sticky-note fa-lg",class:{"icon-error":t.error.title}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Title ..."},domProps:{value:t.data.title},on:{keyup:t.checkTitle,input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-clipboard fa-lg",class:{"icon-error":t.error.note}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.note,expression:"data.note"}],staticClass:"input-textarea",attrs:{placeholder:"Note ..."},domProps:{value:t.data.note},on:{keyup:t.checkNote,input:function(e){e.target.composing||t.$set(t.data,"note",e.target.value)}}})]),s("div",{staticClass:"date-label-container"},[s("div",{staticClass:"input-container-date"},[s("v-date-picker",{staticClass:"no-border",attrs:{value:null,color:"green","is-inline":"","tiitle-position":"left"},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1),s("div",{staticClass:"select-label"},[s("div",{staticClass:"label-filters"},[s("div",{staticClass:"label-filter",class:{"filter-selected":t.label.personal},on:{click:t.togglePersonal}},[s("i",{staticClass:"fa fa-user fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Personal")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":t.label.work},on:{click:t.toggleWork}},[s("i",{staticClass:"fa fa-briefcase fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Work")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":t.label.shopping},on:{click:t.toggleShopping}},[s("i",{staticClass:"fa fa-shopping-cart fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Shopping")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":t.label.others},on:{click:t.toggleOthers}},[s("i",{staticClass:"fa fa-th fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Others")])])])])]),s("div",{staticClass:"add-todo-submit"},[s("i",{staticClass:"fas fa-plus-circle fa-lg button",on:{click:t.submit}})])])])])])],1)},C=[],$=(s("96cf"),s("1da1")),b={name:"AddTodo",data:function(){return{label:{personal:!0,work:!1,shopping:!1,others:!1},data:{title:"",note:"",label:"personal",date:null},error:{title:!0,note:!0}}},methods:{close:function(){this.$emit("close"),this.data.title=this.data.note="";var t=new Date;this.data.date=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0),this.error.title=this.error.note=!0,this.togglePersonal()},togglePersonal:function(){this.label.personal=!0,this.label.work=this.label.shopping=this.label.others=!1,this.data.label="personal"},toggleWork:function(){this.label.work=!0,this.label.personal=this.label.shopping=this.label.others=!1,this.data.label="work"},toggleShopping:function(){this.label.shopping=!0,this.label.work=this.label.personal=this.label.others=!1,this.data.label="shopping"},toggleOthers:function(){this.label.others=!0,this.label.work=this.label.shopping=this.label.personal=!1,this.data.label="others"},checkTitle:function(){0==this.data.title.length||this.data.title.length>30?this.error.title=!0:this.error.title=!1},checkNote:function(){0==this.data.note.length?this.error.note=!0:this.error.note=!1},submit:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=t.error.title&&1!=t.error.note){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$store.dispatch("insertTodo",t.data);case 4:t.close();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var t=new Date;this.data.date=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0)}},k=b,P=Object(l["a"])(k,w,C,!1,null,null,null),_=P.exports,T={name:"TopBar",components:{AddTodo:_},data:function(){return{addTodo:!1,query:""}},methods:{search:function(){this.$store.state.todo.query=this.query,this.$store.dispatch("fetchTodos")},logout:function(){localStorage.removeItem("token"),this.$store.state.user._id="",this.$store.state.user.name="",this.$store.state.user.email="",this.$store.state.user.password="",this.$store.state.user.image="",this.$store.state.user.token="",this.$router.push("/signin")}}},y=T,x=Object(l["a"])(y,m,v,!1,null,null,null),E=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-container"},[s("SideBar"),s("ContentHolder")],1)},I=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"side-bar"},[s("div",{staticClass:"avatar-details"},[s("div",{staticClass:"img-border"},[s("img",{staticClass:"profile-img",attrs:{src:t.$API+"/"+t.$store.state.user.image},on:{click:function(e){t.profile=!0}}}),s("UserProfile",{directives:[{name:"show",rawName:"v-show",value:t.profile,expression:"profile"}],on:{close:function(e){t.profile=!1}}})],1),s("h2",[t._v(t._s(t.$store.state.user.name))])]),s("div",{staticClass:"calendar"},[s("div",{staticClass:"date-filter"},[s("i",{staticClass:"fas fa-undo-alt fa-lg",on:{click:t.resetRange}}),s("i",{staticClass:"fas fa-check fa-lg",on:{click:t.setRange}})]),s("v-date-picker",{staticClass:"no-border",attrs:{value:null,mode:"range",color:"yellow","is-inline":"","title-position":"left"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)])},A=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-profile-parent-container"},[s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal",attrs:{role:"dialog"}},[s("div",{staticClass:"profile-grid"},[s("div",{staticClass:"profile-close"},[s("i",{staticClass:"fas fa-times-circle fa-lg button",on:{click:t.close}})]),s("div",{staticClass:"profile-photo"},[s("div",{staticClass:"current-img"},[s("div",{staticClass:"img-border"},[s("img",{staticClass:"profile-img",attrs:{src:t.$API+"/"+t.$store.state.user.image}})])]),s("div",{staticClass:"img-setters"},[s("img",{staticClass:"set-img",attrs:{src:t.$API+"/images/default-boy.png"},on:{click:function(e){return t.changePhoto(!1,1)}}}),s("img",{staticClass:"set-img",attrs:{src:t.$API+"/images/default-girl.png"},on:{click:function(e){return t.changePhoto(!1,2)}}}),s("img",{staticClass:"set-img",attrs:{src:t.$API+"/images/upload-photo.svg"},on:{click:function(e){return t.$refs.photo.click()}}}),s("input",{ref:"photo",staticClass:"hide",attrs:{type:"file",accept:".jpeg, .png, .jpg"},on:{change:function(e){return t.changePhoto(!0)}}})])]),s("div",{staticClass:"profile-name"},[s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-user fa-lg",class:{"icon-error":t.error.name}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Name to change ... and ↵"},domProps:{value:t.name},on:{keyup:t.changeName,input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"profile-password"},[s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-user-lock fa-lg",class:{"icon-error":t.error.currentPassword}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPassword,expression:"currentPassword"}],staticClass:"input-password",attrs:{type:"password",placeholder:"Current password ..."},domProps:{value:t.currentPassword},on:{input:function(e){e.target.composing||(t.currentPassword=e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-lock fa-lg",class:{"icon-error":t.error.password}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-password",attrs:{type:"password",placeholder:"New password ..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-lock fa-lg",class:{"icon-error":t.error.confirmPassword}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"input-password",attrs:{type:"password",placeholder:"Confirm password ... and ↵"},domProps:{value:t.confirmPassword},on:{keyup:t.changePassword,input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})])])])])])])],1)},N=[],j=s("279c"),R=s.n(j),U={name:"UserProfile",data:function(){return{name:"",currentPassword:"",password:"",confirmPassword:"",error:{name:!1,currentPassword:!1,password:!1,confirmPassword:!1}}},methods:{close:function(){this.$emit("close")},changePassword:function(){var t=this;if(13===event.keyCode){if(this.error.password=this.error.currentPassword=this.error.confirmPassword=!1,R.a.compareSync(this.currentPassword,this.$store.state.user.password))return this.password.length<8?(this.error.password=!0,void(this.error.currentPassword=!0)):this.password!==this.confirmPassword?(this.error.confirmPassword=!0,void(this.confirmPassword="")):void h.a.put(this.$API+"/user/"+localStorage.getItem("token")+"/password",{password:this.password}).then((function(){h.a.get(t.$API+"/user/"+localStorage.getItem("token")).then((function(e){t.$store.state.user.name=e.data.name,t.$store.state.user.email=e.data.email,t.$store.state.user.password=e.data.password,t.$store.state.user._id=e.data._id,t.$store.state.user.image=e.data.image,t.$store.state.user.token=localStorage.getItem("token"),t.confirmPassword=t.password=t.currentPassword=""}))}));this.error.currentPassword=!0}},changePhoto:function(t,e){var s=this;if(!t){var a="";return 1===e&&(a="images/default-boy.png"),2===e&&(a="images/default-girl.png"),void h.a.put(this.$API+"/user/"+localStorage.getItem("token")+"/image",{image:a}).then((function(){h.a.get(s.$API+"/user/"+localStorage.getItem("token")).then((function(t){s.$store.state.user.name=t.data.name,s.$store.state.user.email=t.data.email,s.$store.state.user.password=t.data.password,s.$store.state.user._id=t.data._id,s.$store.state.user.image=t.data.image,s.$store.state.user.token=localStorage.getItem("token")}))}))}var o=new FormData;o.append("image",event.target.files[0]),h.a.put(this.$API+"/user/"+localStorage.getItem("token")+"/image/file",o).then((function(){h.a.get(s.$API+"/user/"+localStorage.getItem("token")).then((function(t){s.$store.state.user.name=t.data.name,s.$store.state.user.email=t.data.email,s.$store.state.user.password=t.data.password,s.$store.state.user._id=t.data._id,s.$store.state.user.image=t.data.image,s.$store.state.user.token=localStorage.getItem("token")}))}))},changeName:function(){var t=this;13===event.keyCode&&(this.error.name=!1,this.name.length<4?this.error.name=!0:h.a.put(this.$API+"/user/"+localStorage.getItem("token")+"/name",{name:this.name}).then((function(){h.a.get(t.$API+"/user/"+localStorage.getItem("token")).then((function(e){t.$store.state.user.name=e.data.name,t.$store.state.user.email=e.data.email,t.$store.state.user.password=e.data.password,t.$store.state.user._id=e.data._id,t.$store.state.user.image=e.data.image,t.$store.state.user.token=localStorage.getItem("token"),t.name=""}))})))}}},q=U,B=Object(l["a"])(q,D,N,!1,null,null,null),L=B.exports,M={name:"SideBar",components:{UserProfile:L},data:function(){return{dates:{start:null,end:null},profile:!1}},methods:{resetRange:function(){this.$store.state.todo.startDate=this.$store.state.todo.endDate=null,this.dates.start=this.dates.end=null,this.$store.dispatch("fetchTodos")},setRange:function(){this.$store.state.todo.startDate=this.dates.start,this.$store.state.todo.endDate=this.dates.end,this.$store.dispatch("fetchTodos")}}},W=M,F=(s("9961"),Object(l["a"])(W,O,A,!1,null,"5a685022",null)),V=F.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-holder"},[s("TodoTitleBar"),s("TodoLegend"),s("TodoContainer")],1)},G=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo-title-bar"},[s("div",{staticClass:"welcome-user"},[s("h2",[s("font",{attrs:{color:"#357d72"}},[t._v(t._s(t.$store.state.user.name))]),t._v("'s To-do List")],1)]),s("div",{staticClass:"label-filters"},[s("div",{staticClass:"label-filter",class:{"filter-selected":!t.$store.state.todo.personal},on:{click:t.togglePersonal}},[s("i",{staticClass:"fa fa-user fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Personal")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":!t.$store.state.todo.work},on:{click:t.toggleWork}},[s("i",{staticClass:"fa fa-briefcase fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Work")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":!t.$store.state.todo.shopping},on:{click:t.toggleShopping}},[s("i",{staticClass:"fa fa-shopping-cart fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Shopping")])]),s("div",{staticClass:"label-filter",class:{"filter-selected":!t.$store.state.todo.others},on:{click:t.toggleOthers}},[s("i",{staticClass:"fa fa-th fa-lg"}),s("span",{staticClass:"tooltip"},[t._v("Others")])])]),s("div",{staticClass:"pagination"},[s("div",{staticClass:"pagination-item"},[s("i",{staticClass:"fas fa-arrow-circle-left fa-lg",on:{click:function(e){return t.$store.dispatch("prevPage")}}})]),s("div",{staticClass:"pagination-item"},[t._v(t._s(t.$store.state.todo.currentPage+1))]),s("div",{staticClass:"pagination-item"},[s("i",{staticClass:"fas fa-arrow-circle-right fa-lg",on:{click:function(e){return t.$store.dispatch("nextPage")}}})])])])},z=[],J={name:"TodoTitleBar",methods:{togglePersonal:function(){this.$store.state.todo.personal=!this.$store.state.todo.personal,this.$store.dispatch("fetchTodos")},toggleWork:function(){this.$store.state.todo.work=!this.$store.state.todo.work,this.$store.dispatch("fetchTodos")},toggleShopping:function(){this.$store.state.todo.shopping=!this.$store.state.todo.shopping,this.$store.dispatch("fetchTodos")},toggleOthers:function(){this.$store.state.todo.others=!this.$store.state.todo.others,this.$store.dispatch("fetchTodos")}}},Z=J,K=Object(l["a"])(Z,Y,z,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo-legend"},[s("div",{staticClass:"legend",class:{new:t.$store.state.todo.new},on:{click:t.toggleNew}},[t._v(" New ")]),s("div",{staticClass:"legend",class:{progress:t.$store.state.todo.progress},on:{click:t.toggleProgress}},[t._v(" On Progress ")]),s("div",{staticClass:"legend",class:{completed:t.$store.state.todo.completed},on:{click:t.toggleCompleted}},[t._v(" Completed ")])])},tt=[],et={name:"TodoLegend",methods:{toggleNew:function(){this.$store.state.todo.new=!this.$store.state.todo.new,this.$store.dispatch("fetchTodos")},toggleProgress:function(){this.$store.state.todo.progress=!this.$store.state.todo.progress,this.$store.dispatch("fetchTodos")},toggleCompleted:function(){this.$store.state.todo.completed=!this.$store.state.todo.completed,this.$store.dispatch("fetchTodos")}}},st=et,at=Object(l["a"])(st,X,tt,!1,null,null,null),ot=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo-container"},t._l(t.$store.state.todo.visibleTodos,(function(t){return s("Todo",{key:t._id,attrs:{data:t}})})),1)},it=[],nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo",class:t.data.priority},[s("h3",[t._v(t._s(t.data.title))]),s("p",[t._v(" "+t._s(t.data.note)+" ")]),s("div",{staticClass:"todo-footer"},["personal"===t.data.label?s("i",{staticClass:"fa fa-user fa-lg"}):"work"===t.data.label?s("i",{staticClass:"fa fa-briefcase fa-lg"}):"shopping"===t.data.label?s("i",{staticClass:"fa fa-shopping-cart fa-lg"}):"others"===t.data.label?s("i",{staticClass:"fa fa-th fa-lg"}):t._e(),t._v(" "),s("span",{class:{striked:t.expired}},[t._v(t._s(new Date(t.data.date).toDateString()))]),s("div",{staticClass:"todo-setting"},[s("i",{staticClass:"fas fa-wrench fa-lg"}),s("div",{staticClass:"tooltip"},[s("ul",{staticClass:"tooltip-list"},[s("li",{on:{click:t.setNew}},[t._v("New")]),s("li",{on:{click:t.setProgress}},[t._v("Progress")]),s("li",{on:{click:t.setCompleted}},[t._v("Completed")]),s("li",{on:{click:t.deleteTodo}},[t._v("Delete")])])])])])])},lt=[],ct={name:"Todo",props:["data"],methods:{setNew:function(){this.data.priority="new",this.$store.dispatch("updateTodo",{_id:this.data._id,priority:"new"})},setProgress:function(){this.data.priority="progress",this.$store.dispatch("updateTodo",{_id:this.data._id,priority:"progress"})},setCompleted:function(){this.data.priority="completed",this.$store.dispatch("updateTodo",{_id:this.data._id,priority:"completed"})},deleteTodo:function(){this.$store.dispatch("deleteTodo",this.data._id)}},data:function(){return{expired:!1}},created:function(){var t=new Date,e=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0);new Date(this.data.date)<e&&(this.expired=!0)}},dt=ct,ut=(s("b027"),Object(l["a"])(dt,nt,lt,!1,null,"91b4ec66",null)),pt=ut.exports,gt={name:"TodoContainer",components:{Todo:pt},created:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchTodos");case 2:case"end":return e.stop()}}),e)})))()}},ft=gt,ht=Object(l["a"])(ft,rt,it,!1,null,null,null),mt=ht.exports,vt={name:"ContentHolder",components:{TodoTitleBar:Q,TodoLegend:ot,TodoContainer:mt}},wt=vt,Ct=Object(l["a"])(wt,H,G,!1,null,null,null),$t=Ct.exports,bt={name:"GridContainer",components:{SideBar:V,ContentHolder:$t}},kt=bt,Pt=Object(l["a"])(kt,S,I,!1,null,null,null),_t=Pt.exports,Tt={name:"Home",components:{TopBar:E,GridContainer:_t},created:function(){var t=this;null===localStorage.getItem("token")&&this.$router.push("/signin"),h.a.get(this.$API+"/user/"+localStorage.getItem("token")).then((function(e){t.$store.state.user.name=e.data.name,t.$store.state.user.email=e.data.email,t.$store.state.user.password=e.data.password,t.$store.state.user._id=e.data._id,t.$store.state.user.image=e.data.image,t.$store.state.user.token=localStorage.getItem("token")}))}},yt=Tt,xt=Object(l["a"])(yt,p,g,!1,null,null,null),Et=xt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container",class:{"sign-up-active":t.signUp}},[s("div",{staticClass:"overlay-container"},[s("div",{staticClass:"overlay"},[s("div",{staticClass:"overlay-left"},[s("h2",[t._v("Already an User?")]),s("p",[t._v("Signin with your account to access your todos")]),s("button",{staticClass:"invert",on:{click:function(e){t.signUp=!t.signUp}}},[t._v("Sign In")])]),s("div",{staticClass:"overlay-right"},[s("h2",[t._v("First time visitor?")]),s("p",[t._v("Creating an account takes less than a minute")]),s("button",{staticClass:"invert",on:{click:function(e){t.signUp=!t.signUp}}},[t._v("Sign Up")])])])]),s("form",{staticClass:"sign-up",on:{submit:function(e){return e.preventDefault(),t.doSignup(e)}}},[s("h2",[t._v("Create account")]),s("div",{staticClass:"sub"},[t._v("60 seconds starts now!")]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-user fa-lg",class:{"icon-error":t.signupError.name}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signup.name,expression:"signup.name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.signup.name},on:{input:function(e){e.target.composing||t.$set(t.signup,"name",e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-at fa-lg",class:{"icon-error":t.signupError.email}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signup.email,expression:"signup.email"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.signup.email},on:{input:function(e){e.target.composing||t.$set(t.signup,"email",e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-lock fa-lg",class:{"icon-error":t.signupError.password}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signup.password,expression:"signup.password"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.signup.password},on:{input:function(e){e.target.composing||t.$set(t.signup,"password",e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-lock fa-lg",class:{"icon-error":t.signupError.confirmPassword}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),s("button",{attrs:{type:"submit"}},[t._v("Sign Up")]),t.signupError.exist?s("p",[s("font",{attrs:{color:"red"}},[t._v("Email already in use")])],1):t._e()]),s("form",{staticClass:"sign-in",on:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[s("h2",[t._v("Sign into your account")]),s("div",{staticClass:"sub"},[t._v("Confirm its you")]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-at fa-lg",class:{"icon-error":t.loginError.email}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})]),s("div",{staticClass:"input-container"},[s("i",{staticClass:"fa fa-lock fa-lg",class:{"icon-error":t.loginError.password}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),s("button",{attrs:{type:"submit"}},[t._v("Sign In")]),t.loginError.invalid?s("p",[s("font",{attrs:{color:"red"}},[t._v("Invalid Credentials")])],1):t._e()])])},It=[],Ot=(s("498a"),{name:"Login",data:function(){return{login:{email:"",password:""},signup:{name:"",email:"",password:""},loginError:{email:!1,password:!1,invalid:!1},signupError:{name:!1,email:!1,password:!1,exist:!1,confirmPassword:!1},confirmPassword:"",signUp:!1,loginPass:!1,signupPass:!1}},methods:{doLogin:function(){var t=this;this.loginError.email=this.loginError.password=!1,this.login.email=this.login.email.trim(),""!==this.login.email&&this.checkEmail(this.login.email)||(this.loginError.email=!0),this.login.password.length<8&&(this.loginError.password=!0),this.loginError.email||this.loginError.password||h.a.post(this.$API+"/login",this.login).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.$router.push("/"))}),(function(e){e&&(t.loginError.email=t.loginError.password=t.loginError.invalid=!0)}))},doSignup:function(){var t=this;this.signupError.name=this.signupError.email=this.signupError.password=this.signupError.confirmPassword=!1,this.signup.name.length<4&&(this.signupError.name=!0),this.signup.email=this.signup.email.trim(),""!==this.signup.email&&this.checkEmail(this.signup.email)||(this.signupError.email=!0),this.signup.password.length<8&&(this.signupError.password=!0,this.signupError.confirmPassword=!0),this.signup.password!==this.confirmPassword&&(this.signupError.confirmPassword=!0,this.confirmPassword=""),this.signupError.name||this.signupError.email||this.signupError.password||this.signupError.confirmPassword||h.a.post(this.$API+"/register",this.signup).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.$router.push("/"))}),(function(e){e&&(t.signupError.exist=t.signupError.email=!0)}))},checkEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}},created:function(){localStorage.getItem("token")&&this.$router.push("/")}}),At=Ot,Dt=Object(l["a"])(At,St,It,!1,null,null,null),Nt=Dt.exports;a["default"].use(u["a"]);var jt=new u["a"]({mode:"history",routes:[{path:"/signin",component:Nt},{path:"*",component:Et}],linkActiveClass:"active"}),Rt=jt,Ut=s("2f62"),qt=(s("4de4"),s("fb6a"),s("a434"),{allTodos:[],visibleTodos:[],currentPage:0,query:"",new:!0,progress:!0,completed:!0,personal:!0,work:!0,shopping:!0,others:!0,startDate:null,endDate:null}),Bt={insertTodo:function(t,e){var s=t.commit;h.a.post(this._vm.$API+"/todos/"+localStorage.getItem("token"),e).then((function(t){s("insertTodo",t.data)}))},fetchTodos:function(t){var e=t.commit,s="new="+qt.new+"&progress="+qt.progress+"&completed="+qt.completed;s+="&personal="+qt.personal+"&work="+qt.work+"&shopping="+qt.shopping+"&others="+qt.others,s+="&title="+qt.query,null!==qt.startDate&&(s+="&startDate="+qt.startDate.toISOString().substring(0,10),qt.startDate!==qt.endDate&&(s+="&endDate="+qt.endDate.toISOString().substring(0,10))),h.a.get(this._vm.$API+"/todos/"+localStorage.getItem("token")+"?"+s).then(function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e("fetchTodos",s.data);case 2:Bt.setVisibleTodos();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},updateTodo:function(t,e){var s=this;return Object($["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.commit,a.next=3,h.a.put(s._vm.$API+"/todos/"+localStorage.getItem("token"),e);case 3:o("dummy");case 4:case"end":return a.stop()}}),a)})))()},deleteTodo:function(t,e){var s=t.commit;h.a.delete(this._vm.$API+"/todos/"+localStorage.getItem("token")+"/"+e),s("deleteTodo",e)},setVisibleTodos:function(){qt.visibleTodos=qt.allTodos.slice(6*qt.currentPage,6*qt.currentPage+6),0==qt.visibleTodos.length&&qt.currentPage>0&&Bt.updatePage(qt.currentPage-1)},updatePage:function(t){qt.currentPage=t,Bt.setVisibleTodos()},nextPage:function(){qt.currentPage+=1,Bt.setVisibleTodos()},prevPage:function(){0!=qt.currentPage&&(qt.currentPage-=1),Bt.setVisibleTodos()}},Lt={insertTodo:function(t,e){t.allTodos.push(e),t.visibleTodos.splice(5),t.visibleTodos.unshift(e)},fetchTodos:function(t,e){return t.allTodos=e},deleteTodo:function(t,e){t.visibleTodos=t.visibleTodos.filter((function(t){return t._id!==e})),t.allTodos=t.allTodos.filter((function(t){return t._id!==e})),0===t.visibleTodos.length&&Bt.prevPage()},dummy:function(){}},Mt={state:qt,actions:Bt,mutations:Lt},Wt={_id:"",name:"",email:"",password:"",image:"",token:""},Ft={state:Wt};a["default"].use(Ut["a"]);var Vt=new Ut["a"].Store({modules:{todo:Mt,user:Ft}}),Ht=s("5887"),Gt=s.n(Ht);a["default"].config.productionTip=!1,a["default"].use(Gt.a),a["default"].prototype.$API="https://todoserver-hackerearth.herokuapp.com",new a["default"]({store:Vt,router:Rt,render:function(t){return t(d)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},9961:function(t,e,s){"use strict";var a=s("af0d"),o=s.n(a);o.a},9990:function(t,e,s){},af0d:function(t,e,s){},b027:function(t,e,s){"use strict";var a=s("9990"),o=s.n(a);o.a}});
//# sourceMappingURL=app.ec4c2601.js.map