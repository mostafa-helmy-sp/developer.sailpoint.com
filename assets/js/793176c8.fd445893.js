"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["75907"],{57440:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"extensibility/event-triggers/early-access/source-account-updated","title":"Source Account Updated","description":"Fires after a source account is updated.","source":"@site/docs/extensibility/event-triggers/early-access/source-account-updated.md","sourceDirName":"extensibility/event-triggers/early-access","slug":"/extensibility/event-triggers/triggers/source-account-updated","permalink":"/docs/extensibility/event-triggers/triggers/source-account-updated","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/source-account-updated.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"},{"inline":true,"label":"Early Access Event Triggers","permalink":"/docs/tags/early-access-event-triggers"},{"inline":true,"label":"Fire and Forget","permalink":"/docs/tags/fire-and-forget"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"source-account-updated","title":"Source Account Updated","pagination_label":"Source Account Updated","sidebar_label":"Source Account Updated","sidebar_class_name":"sourceAccountUpdated","keywords":["event","trigger","source","account","updated","early access"],"description":"Fires after a source account is updated.","slug":"/extensibility/event-triggers/triggers/source-account-updated","tags":["Event Triggers","Early Access Event Triggers","Fire and Forget"]},"sidebar":"openApiSidebar","previous":{"title":"Source Account Deleted","permalink":"/docs/extensibility/event-triggers/triggers/source-account-deleted"},"next":{"title":"Configuration Management","permalink":"/docs/extensibility/configuration-management"}}'),r=n("85893"),a=n("50065");let s={id:"source-account-updated",title:"Source Account Updated",pagination_label:"Source Account Updated",sidebar_label:"Source Account Updated",sidebar_class_name:"sourceAccountUpdated",keywords:["event","trigger","source","account","updated","early access"],description:"Fires after a source account is updated.",slug:"/extensibility/event-triggers/triggers/source-account-updated",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},c=void 0,o={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and links",id:"additional-information-and-links",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This is an early access event trigger. Please contact support to have it enabled in your tenant."})}),"\n",(0,r.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,r.jsx)(t.p,{children:"Source Account Updated events occur whenever one or more account attributes change on a single account during an account aggregation operation. The trigger cannot determine whether the account update happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin. The following actions are considered updates:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Update account attributes"}),"\n",(0,r.jsx)(t.li,{children:"Enable or disable an account"}),"\n",(0,r.jsx)(t.li,{children:"Lock or unlock source accounts"}),"\n",(0,r.jsx)(t.li,{children:"Change source account password"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Use this event trigger to watch for updates to accounts that add highly privileged access, such as an account that is granted privileged access on a sensitive source."}),"\n",(0,r.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and links"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,r.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);