(this.webpackJsonpadminlte3=this.webpackJsonpadminlte3||[]).push([[0],{26:function(e,a,t){e.exports=t(47)},31:function(e,a,t){},43:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(23),c=t.n(r);t(31);function s(){return n.a.createElement("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},n.a.createElement("i",{className:"fas fa-bars"}))),n.a.createElement("li",{className:"nav-item d-none d-sm-inline-block"},n.a.createElement("a",{href:"#/",className:"nav-link"},"Home")),n.a.createElement("li",{className:"nav-item d-none d-sm-inline-block"},n.a.createElement("a",{href:"#/ContentAllBar",className:"nav-link"},"Graph View")),n.a.createElement("li",{className:"nav-item d-none d-sm-inline-block"},n.a.createElement("a",{href:"#/Slider",className:"nav-link"},"About the Project")),n.a.createElement("li",{className:"nav-item d-none d-sm-inline-block"},n.a.createElement("a",{href:"#/ContentAllBar",className:"nav-link"},"TESTING_MY_DUDES"))))}function m(){return n.a.createElement("aside",{className:"main-sidebar sidebar-dark-primary elevation-4"},n.a.createElement("a",{href:"#/",className:"brand-link"},n.a.createElement("img",{src:"dist/img/Waterlevelicon.png",alt:"WaterLevel Logo",className:"brand-image img-circle elevation-3",style:{opacity:".8"}}),n.a.createElement("span",{className:"brand-text font-weight-light"},"Water Level tracker")),n.a.createElement("div",{className:"sidebar"},n.a.createElement("nav",{className:"mt-2"},n.a.createElement("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},n.a.createElement("li",{className:"nav-item has-treeview"},n.a.createElement("a",{href:"#",className:"nav-link"},n.a.createElement("i",{className:"nav-icon fas fa-chart-pie"}),n.a.createElement("p",null,"Charts",n.a.createElement("i",{className:"right fas fa-angle-left"}))),n.a.createElement("ul",{className:"nav nav-treeview"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/ContentOneBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Ladkrabang"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/MockupRedBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Bangkapi"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/MockupGreenBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Ladprao"))))),n.a.createElement("li",{className:"nav-item has-treeview"},n.a.createElement("a",{href:"#",className:"nav-link"},n.a.createElement("i",{className:"nav-icon fas fa-table"}),n.a.createElement("p",null,"Tables",n.a.createElement("i",{className:"fas fa-angle-left right"}))),n.a.createElement("ul",{className:"nav nav-treeview"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/ContentOneBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Ladkrabang"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/MockupRedBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Bangkapi"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#/MockupGreenBar",className:"nav-link"},n.a.createElement("i",{className:"far fa-circle nav-icon"}),n.a.createElement("p",null,"Ladprao")))))))))}function i(){return n.a.createElement("footer",{class:"main-footer"},n.a.createElement("strong",null,"king mongkut's institute of technology ladkrabang, ",n.a.createElement("a",{href:"https://www.ic.kmitl.ac.th/moodle/"},"Software Engineering"),"."),n.a.createElement("div",{class:"float-right d-none d-sm-inline-block"},n.a.createElement("b",null,"Team Software Project")," (SE#9)"))}var o=t(5),d=t.n(o),E=t(9),u=t(10),h=t(11),v=t(7),N=t(13),p=t(12),f=function(e){Object(N.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(u.a)(this,t),(l=a.call(this,e)).state={water_level:[]},l.loadData=l.loadData.bind(Object(v.a)(l)),l}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData(),setInterval(this.loadData,1e4)}},{key:"loadData",value:function(){var e=Object(E.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({water_level:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"All available sensors")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing all sensors")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level average"),n.a.createElement("a",{href:"./ContentAllLine"},"Change to linegraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:"true"})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"Allsensor-Barchart",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-blue"})," Ladkrabang \xa0 ",n.a.createElement("i",{className:"fas fa-square text-red"}),"  Bangkapi \xa0",n.a.createElement("i",{className:"fas fa-square text-green"}),"  Ladprao"))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"SENSOR"),n.a.createElement("th",null,"WATER LEVEL ( %)"),n.a.createElement("th",null,"LOCATION"),n.a.createElement("th",null,"Date && Time"))),n.a.createElement("tbody",null,this.state.water_level.slice(-5).reverse().map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.sensor),n.a.createElement("td",null,e.water_level),n.a.createElement("td",null,e.location),n.a.createElement("td",null,e.date_and_time))}))))))))))}}]),t}(l.Component);function b(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"All available sensors")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Ladkrabang's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level"),n.a.createElement("a",{href:"./ContentAllBar"},"Change to bargraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"d-flex flex-column"},n.a.createElement("span",{className:"text-bold text-lg"},"6000 cm"),n.a.createElement("span",null,"Highest level 3444")),n.a.createElement("p",{className:"ml-auto d-flex flex-column text-right"},n.a.createElement("span",{className:"text-success"},n.a.createElement("i",{className:"fas fa-arrow-up"})),n.a.createElement("span",{className:"text-muted"},"rising"))),n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"Allsensor-Linechart",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-blue"})," Ladkrabang ",n.a.createElement("i",{className:"fas fa-square text-red"})," Bangkapi",n.a.createElement("i",{className:"fas fa-square text-green"})," Ladprao"))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Height (cm)"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Time"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"120"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"170"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"140"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"110"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time"))))))))))}function g(){return n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("b",null,n.a.createElement("p",null,"Hello, punpun here, I've written this note")),n.a.createElement("b",null,n.a.createElement("p",null,"This is content for home page and it suppose to have Cesium")),n.a.createElement("b",null,n.a.createElement("p",null,"If you get directed here, it could mean:")),n.a.createElement("b",null,n.a.createElement("p",null,"1. That link you clicked suppose to bring you home")),n.a.createElement("b",null,n.a.createElement("p",null,'2. That page havent been created yet (or called to used) For example: all "expand" and "table" pages are yet to be created (because i dont know how to make it different from the table we already have when we view "graph")')))}var w=function(e){Object(N.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(u.a)(this,t),(l=a.call(this,e)).state={water_level:[]},l.loadData=l.loadData.bind(Object(v.a)(l)),l}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData(),setInterval(this.loadData,1e4)}},{key:"loadData",value:function(){var e=Object(E.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({water_level:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR : "+e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"Ladkrabang's Sensor")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Ladkrabang's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level average"),n.a.createElement("a",{href:"./ContentOneLine"},"Change to linegraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"Onesensor-Barchart",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-primary"})," Ladkrabang "))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"WATER LEVEL ( %)"),n.a.createElement("th",null,"Date && Time"))),n.a.createElement("tbody",null,this.state.water_level.filter((function(e){return"LADKRABANG"===e.location})).slice(-5).reverse().map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.water_level),n.a.createElement("td",null,e.date_and_time))}))))))))))}}]),t}(l.Component);function k(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"Ladkrabang's Sensor")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Ladkrabang's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level"),n.a.createElement("a",{href:"ContentOneBar"},"Change to bargraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"d-flex flex-column"},n.a.createElement("span",{className:"text-bold text-lg"},"6000 cm"),n.a.createElement("span",null,"Highest level")),n.a.createElement("p",{className:"ml-auto d-flex flex-column text-right"},n.a.createElement("span",{className:"text-success"},n.a.createElement("i",{className:"fas fa-arrow-up"})),n.a.createElement("span",{className:"text-muted"},"rising"))),n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"Onesensor-Linechart",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-primary"})," Ladkrabang "))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Height (cm)"),n.a.createElement("th",null,"Turbidity (NTU)"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Time"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"120"),n.a.createElement("td",null,"50 NTU"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"170"),n.a.createElement("td",null,"70 NTU"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"140"),n.a.createElement("td",null,"80 NTU"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"110"),n.a.createElement("td",null,"90 NTU"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time"))))))))))}function y(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"Bangkapi's sensor")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"#"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Bangkapi's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level"),n.a.createElement("a",{href:"javascript:void(0);"},"Change to bargraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("p",{className:"d-flex flex-column"},n.a.createElement("span",{className:"text-bold text-lg"},"3000 cm"),n.a.createElement("span",null,"Highest Level")),n.a.createElement("p",{className:"ml-auto d-flex flex-column text-right"},n.a.createElement("span",{className:"text-success"},n.a.createElement("i",{className:"fas fa-arrow-up"})),n.a.createElement("span",{className:"text-muted"},"rising"))),n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"visitors-chart",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-primary"})," Bangkapi")))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"javascript:void(0);"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Height (cm)"),n.a.createElement("th",null,"Turbidity (NTU)"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Time"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"120"),n.a.createElement("td",null,"50 NTU"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"170"),n.a.createElement("td",null,"70 NTU"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"140"),n.a.createElement("td",null,"80 NTU"),n.a.createElement("td",null,"11/02/2020"),n.a.createElement("td",null,"9:00 am standard time")),n.a.createElement("tr",null,n.a.createElement("td",null,"110"),n.a.createElement("td",null,"90 NTU"),n.a.createElement("td",null,"12/02/2020"),n.a.createElement("td",null,"9:00 am standard time")))))))))))}var x=t(24),j=["dist/img/slide1.jpg","dist/img/slide_2.jpg","dist/img/slide_3.jpg"],T={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0};function O(){return n.a.createElement("div",{className:"content-wrapper"},n.a.createElement(x.Slide,T,n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(j[0],")")}})),n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(j[1],")")}})),n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(j[2],")")}}))),n.a.createElement("b",null,n.a.createElement("p",null,"2011 Thailand flood")),n.a.createElement("p",null," Flooding is a main issue of many cities,especially those that reside below the sea level, Bangkok which is one of those cities suffered a huge damaged from one of the greatest flood since it\u2019s founding back in year 2011."),n.a.createElement("p",null,"The flooding began at the end of July triggered by the landfall of Tropical Storm Nock-ten. These floods soon spread through the provinces of northern, northeastern, and central Thailand along the Mekong and Chao Phraya river basins. In October floodwaters reached the mouth of the Chao Phraya and inundated parts of the capital city of Bangkok."),n.a.createElement("p",null,"According to wikipedia, The World Bank's estimate for this disaster means it ranks as the world's fourth costliest disaster as of 2011 surpassed only by the 2011 T\u014dhoku earthquake and tsunami in Japan, Great Hanshin earthquake in 1995, Forest fires in 1997, Indian Ocean tsunami in 2004 and Hurricane Katrina in 2005. A 2015 study suggests increasing odds for potential flooding similar to the 2011 flood intensity to occur in the future."),n.a.createElement("b",null,n.a.createElement("p",null,"Risk of flood")),n.a.createElement("p",null," Bangkok's tendency to flood is particularly acute. Bangkok and adjacent provinces are only 50 cm to two meters above sea level. Sea levels are rising four mm every year. The rising sea levels push more water into the Chao Phraya River. To combat rising sea levels a barrier dam stretching from Chonburi to Hua Hin has been proposed, at a cost of 500 billion baht.",n.a.createElement("p",null,n.a.createElement("img",{src:"dist/img/26floodmap.jpg",className:"offset-3",alt:"User Image"})),"The three-meter high dykes that sequester the river are subsiding, as is the rest of the city. In the past, some areas of Bangkok were sinking as much as three centimeters per year, due to excessive groundwater extraction. Groundwater extraction was halted in 1977. That step has slowed subsidence to about one centimeter per year on average. However, the sheer weight of Bangkok's ever expanding infrastructure has exacerbated the problem. Bangkok has some 700 buildings more than 20 storeys high and 4,000 buildings eight to 20 storeys high. The sheer weight of these structures displaces the spongy soil and increases subsidence. In a 2015 report, Thailand's National Reform Council warned that relocation of the capital was not out of the question."),n.a.createElement("b",null,n.a.createElement("p",null,"Thailand Sewage Monitering Website")),n.a.createElement("p",null," 2011 flood proved that flooding can cause a great damged to our country, infrastructure, economic, and most importantly, civilian lives. As chances of flooding is alarmingly huge for a capital city, due to the fact that the city itself its literally sinking from its sheer weight, so it is very important for government official and civilian in the city to have the ability to know where in which area is in risk of flooding. But nowadays, there are hardly way to tell especially in an unmonitered sewage system which run through the whole city."),n.a.createElement("p",null," Therefore, it is our vision for ",n.a.createElement("b",null," Thailand sewage Monitering website")," to be a tool in helping those in need, or those who are in charge of looking after our sewage syastem , to have the ability to better oversee what is happening beneath us and use that knowledge to prevent another catastrophe."))}t(43);var C=t(15),D=t(1),L=function(e){Object(N.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(u.a)(this,t),(l=a.call(this,e)).state={water_level:[]},l.loadData=l.loadData.bind(Object(v.a)(l)),l}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData(),setInterval(this.loadData,1e4)}},{key:"loadData",value:function(){var e=Object(E.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({water_level:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR : "+e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"Ladprao's Sensor (VIRTUAL_SENSOR)")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Ladprao's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level average"),n.a.createElement("a",{href:"javascript:void(0);"},"Mockup cant Change to linegraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:""}))),n.a.createElement("canvas",{id:"Onesensor-BarchartGreen",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-green"})," Ladprao"))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"WATER LEVEL ( %)"),n.a.createElement("th",null,"Date && Time"))),n.a.createElement("tbody",null,this.state.water_level.filter((function(e){return"LADPRAO"===e.location})).slice(-5).reverse().map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.water_level),n.a.createElement("td",null,e.date_and_time))}))))))))))}}]),t}(l.Component),B=function(e){Object(N.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(u.a)(this,t),(l=a.call(this,e)).state={water_level:[]},l.loadData=l.loadData.bind(Object(v.a)(l)),l}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData(),setInterval(this.loadData,1e4)}},{key:"loadData",value:function(){var e=Object(E.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({water_level:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR : "+e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"content-wrapper",style:{minHeight:"1203.6px"}},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h1",{className:"m-0 text-dark"},"Bangkapi's Sensor (VIRTUAL_SENSOR)")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("ol",{className:"breadcrumb float-sm-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"./ContentHome"},"Home")),n.a.createElement("li",{className:"breadcrumb-item active"},"viewing Bangkapi's sensor")))))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h3",{className:"card-title"},"Water level average"),n.a.createElement("a",{href:"javascript:void(0);"},"Mockup cant Change to linegraph"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"position-relative mb-4"},n.a.createElement("div",{className:"chartjs-size-monitor"},n.a.createElement("div",{className:"chartjs-size-monitor-expand"},n.a.createElement("div",{className:!0})),n.a.createElement("div",{className:"chartjs-size-monitor-shrink"},n.a.createElement("div",{className:!0}))),n.a.createElement("canvas",{id:"Onesensor-BarchartRed",height:250,width:592,className:"chartjs-render-monitor",style:{display:"block",height:200,width:474}})),n.a.createElement("div",{className:"d-flex flex-row justify-content-end"},n.a.createElement("span",{className:"mr-2"},n.a.createElement("i",{className:"fas fa-square text-red"})," Bangkapi"))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header border-0"},n.a.createElement("h3",{className:"card-title"},"Daily update"),n.a.createElement("div",{className:"card-tools"},n.a.createElement("a",{href:"./ContentHome"},"Expand"))),n.a.createElement("div",{className:"card-body table-responsive p-0"},n.a.createElement("table",{className:"table table-striped table-valign-middle"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"WATER LEVEL ( %)"),n.a.createElement("th",null,"Date && Time"))),n.a.createElement("tbody",null,this.state.water_level.filter((function(e){return"BANGKAPI"===e.location})).slice(-5).reverse().map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.water_level),n.a.createElement("td",null,e.date_and_time))}))))))))))}}]),t}(l.Component);function H(){return n.a.createElement("div",null,n.a.createElement(s,null),n.a.createElement(m,null),n.a.createElement(C.a,null,n.a.createElement(D.c,null,n.a.createElement(D.a,{path:"/ContentAllBar",component:f}),n.a.createElement(D.a,{path:"/ContentAllLine",component:b}),n.a.createElement(D.a,{exact:!0,path:"/",component:g}),n.a.createElement(D.a,{path:"/ContentOneBar",component:w}),n.a.createElement(D.a,{path:"/ContentOneLine",component:k}),n.a.createElement(D.a,{path:"/Slider",component:O}),n.a.createElement(D.a,{path:"/ContentTestingLine",component:y}),n.a.createElement(D.a,{path:"/MockupGreenBar",component:L}),n.a.createElement(D.a,{path:"/MockupRedBar",component:B}))),",",n.a.createElement(i,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(C.a,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b83c2e90.chunk.js.map