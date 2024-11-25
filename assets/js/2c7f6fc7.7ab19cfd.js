"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["9075"],{64440:function(e,r,t){t.r(r),t.d(r,{metadata:()=>i,contentTitle:()=>l,default:()=>g,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"extensibility/event-triggers/available/source-created","title":"Source Created","description":"Fires after a source is created.","source":"@site/docs/extensibility/event-triggers/available/source-created.md","sourceDirName":"extensibility/event-triggers/available","slug":"/extensibility/event-triggers/triggers/source-created","permalink":"/docs/extensibility/event-triggers/triggers/source-created","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/source-created.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"},{"inline":true,"label":"Available Event Triggers","permalink":"/docs/tags/available-event-triggers"},{"inline":true,"label":"Fire and Forget","permalink":"/docs/tags/fire-and-forget"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"source-created","title":"Source Created","pagination_label":"Source Created","sidebar_label":"Source Created","sidebar_class_name":"sourceCreated","keywords":["event","trigger","source","created","available"],"description":"Fires after a source is created.","slug":"/extensibility/event-triggers/triggers/source-created","tags":["Event Triggers","Available Event Triggers","Fire and Forget"]},"sidebar":"openApiSidebar","previous":{"title":"Scheduled Search","permalink":"/docs/extensibility/event-triggers/triggers/scheduled-search"},"next":{"title":"Source Deleted","permalink":"/docs/extensibility/event-triggers/triggers/source-deleted"}}'),n=t("85893"),s=t("50065");let a={id:"source-created",title:"Source Created",pagination_label:"Source Created",sidebar_label:"Source Created",sidebar_class_name:"sourceCreated",keywords:["event","trigger","source","created","available"],description:"Fires after a source is created.",slug:"/extensibility/event-triggers/triggers/source-created",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,o={},c=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"event-context",children:"Event Context"}),"\n",(0,n.jsx)(r.p,{children:"Source Created events occur when a new source is successfully created via the API or the Admin UI. Some uses cases for this trigger include the following:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Provide evidence to show auditors connector logic and sources are not manipulated outside of proper change control processes."}),"\n",(0,n.jsx)(r.li,{children:"Auto-configure new sources with proper owners using external data sources."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"This is an example input from this trigger:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "created": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Trigger Type"}),": ",(0,n.jsx)(r.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function g(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);