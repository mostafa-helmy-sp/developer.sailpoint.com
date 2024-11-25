"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["7045"],{75784:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>u,frontMatter:()=>r});var n=JSON.parse('{"id":"extensibility/event-triggers/available/va-cluster-status-change","title":"VA Cluster Status Change","description":"Fires after the status of a VA cluster has changed.","source":"@site/docs/extensibility/event-triggers/available/va-cluster-status-change.md","sourceDirName":"extensibility/event-triggers/available","slug":"/extensibility/event-triggers/triggers/va-cluster-status-change","permalink":"/docs/extensibility/event-triggers/triggers/va-cluster-status-change","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/va-cluster-status-change.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"},{"inline":true,"label":"Available Event Triggers","permalink":"/docs/tags/available-event-triggers"},{"inline":true,"label":"Fire and Forget","permalink":"/docs/tags/fire-and-forget"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"va-cluster-status-change","title":"VA Cluster Status Change","pagination_label":"VA Cluster Status Change","sidebar_label":"VA Cluster Status Change","sidebar_class_name":"vaClusterStatusChange","keywords":["event","trigger","va","cluster","status","change","available"],"description":"Fires after the status of a VA cluster has changed.","slug":"/extensibility/event-triggers/triggers/va-cluster-status-change","tags":["Event Triggers","Available Event Triggers","Fire and Forget"]},"sidebar":"openApiSidebar","previous":{"title":"Source Updated","permalink":"/docs/extensibility/event-triggers/triggers/source-updated"},"next":{"title":"Early Access Event Triggers","permalink":"/docs/extensibility/event-triggers/early-access"}}'),a=s("85893"),i=s("50065");let r={id:"va-cluster-status-change",title:"VA Cluster Status Change",pagination_label:"VA Cluster Status Change",sidebar_label:"VA Cluster Status Change",sidebar_class_name:"vaClusterStatusChange",keywords:["event","trigger","va","cluster","status","change","available"],description:"Fires after the status of a VA cluster has changed.",slug:"/extensibility/event-triggers/triggers/va-cluster-status-change",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,c={},u=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,a.jsx)(t.p,{children:"VA (Virtual Appliance) Cluster Status Change Events occur when a health check is run on a VA cluster and the health status is different from the previous health check. Customers can use this trigger to monitor all the health status changes of their VA clusters."}),"\n",(0,a.jsx)(t.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create real-time health dashboards for VA clusters."}),"\n",(0,a.jsx)(t.li,{children:"Notify an administrator or system to take the appropriate actions when a health status changes."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Additional notes about VA Cluster Status Changes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"VA cluster health checks run every 30 minutes."}),"\n",(0,a.jsx)(t.li,{children:"This trigger will invoke on any VA cluster health status change (i.e. healthy -> unhealthy, unhealthy -> healthy)."}),"\n",(0,a.jsxs)(t.li,{children:["See [troubleshooting virtual appliances](",(0,a.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Identity",children:"https://community.sailpoint.com/t5/Identity"})," Security Cloud-Connectors/Virtual-Appliance-Troubleshooting-Guide/ta-p/78735) for more information."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Healthy Cluster Source"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"VA cluster source healthy",src:s(39149).Z+"",width:"1732",height:"284"})}),"\n",(0,a.jsx)(t.p,{children:"Unhealthy Cluster Source"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"VA cluster source unhealthy",src:s(89454).Z+"",width:"1735",height:"278"})}),"\n",(0,a.jsx)(t.p,{children:"Warning - Unhealthy Cluster"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Warning unhealthy cluster",src:s(65585).Z+"",width:"1733",height:"80"})}),"\n",(0,a.jsx)(t.p,{children:"Failed - Unhealthy Cluster"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Failed unhealthy cluster",src:s(30872).Z+"",width:"1733",height:"171"})}),"\n",(0,a.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "created": "2020-06-29T22:01:50.474Z",\n  "type": "CLUSTER",\n  "application": {\n    "id": "2c9180866166b5b0016167c32ef31a66",\n    "name": "Production VA Cluster",\n    "attributes": null\n  },\n  "healthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Succeeded"\n  },\n  "previousHealthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Failed"\n  }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,a.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},30872:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/va-cluster-failed-1ad33e8a3010a710dc33dd59a60ce87d.png"},39149:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/va-cluster-healthy-source-06cde26711ac139fbb06f23f06346f44.png"},89454:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/va-cluster-unhealthy-source-2f17fe0a45d52e1d84560ff4949f8a8d.png"},65585:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/va-cluster-warning-52a694ddf6d82c82af39e843c073ee42.png"}}]);