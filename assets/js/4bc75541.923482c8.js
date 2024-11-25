"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["60415"],{67357:function(e,t,i){i.r(t),i.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>g,frontMatter:()=>o});var s=JSON.parse('{"id":"extensibility/event-triggers/testing-triggers","title":"Testing Triggers","description":"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.","source":"@site/docs/extensibility/event-triggers/testing-triggers.md","sourceDirName":"extensibility/event-triggers","slug":"/extensibility/event-triggers/testing-triggers","permalink":"/docs/extensibility/event-triggers/testing-triggers","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/testing-triggers.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":5,"frontMatter":{"id":"testing-triggers","title":"Testing Triggers","pagination_label":"Testing Triggers","sidebar_label":"Testing Triggers","sidebar_position":5,"sidebar_class_name":"testingTriggers","keywords":["event","trigger","testing"],"description":"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.","slug":"/extensibility/event-triggers/testing-triggers","tags":["Event Triggers"]},"sidebar":"openApiSidebar","previous":{"title":"Filtering Events","permalink":"/docs/extensibility/event-triggers/filtering-events"},"next":{"title":"Responding to Response Required Triggers","permalink":"/docs/extensibility/event-triggers/responding-request-response-trigger"}}'),n=i("85893"),r=i("50065");let o={id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/extensibility/event-triggers/testing-triggers",tags:["Event Triggers"]},a=void 0,c={},g=[{value:"Sending Test Invocations",id:"sending-test-invocations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Trigger Service Issues",id:"trigger-service-issues",level:3},{value:"Filter Issues",id:"filter-issues",level:3},{value:"Misconfigured Subscription",id:"misconfigured-subscription",level:3}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["It is important to test your trigger subscription configuration with your actual subscribing service (not a test site like ",(0,n.jsx)(t.a,{href:"https://webhook.site",children:"webhook.site"}),") before enabling your subscription for production use. Testing subscriptions ensures that your subscribing service can successfully receive events and that you are receiving the correct events based on the filter you have provided."]}),"\n",(0,n.jsx)(t.h2,{id:"sending-test-invocations",children:"Sending Test Invocations"}),"\n",(0,n.jsxs)(t.p,{children:["The easiest way to send a test event to your subscribing service is to use the ",(0,n.jsx)(t.strong,{children:"Test Subscription"})," command. Go to your subscription in the Event Trigger UI, select ",(0,n.jsx)(t.strong,{children:"Options"})," to the right of the subscription, and select ",(0,n.jsx)(t.strong,{children:"Test Subscription"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"test subscription",src:i(1721).Z+"",width:"2041",height:"344"})}),"\n",(0,n.jsx)(t.p,{children:"Doing so sends a test event to your subscribing service, using the default example payload for the specific trigger you are subscribing to. This is an easy way to validate that your service can receive events, but it lacks the ability to modify the event payload to test your filter against different payloads. However, there is an API endpoint you can use to modify the test payload."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to control the test input to validate your filter against a more robust set of data, you can use the ",(0,n.jsx)(t.a,{href:"/docs/api/beta/start-test-trigger-invocation",children:"test invocation"})," API endpoint. You can use this API to send an input payload with any values that you want. This is an example of an invocation of this API:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/test`\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "triggerId": "idn:access-request-pre-approval",\n  "input": {\n    "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n    "requestedFor": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1313",\n      "name": "William Wilson"\n    },\n    "requestedItems": [\n      {\n        "id": "2c91808b6ef1d43e016efba0ce470904",\n        "name": "Engineering Access",\n        "description": "Access to engineering database",\n        "type": "ACCESS_PROFILE",\n        "operation": "Add",\n        "comment": "William needs this access to do his job."\n      }\n    ],\n    "requestedBy": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1314",\n      "name": "Rob Robertson"\n    }\n  },\n  "contentJson": {}\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.h3,{id:"trigger-service-issues",children:"Trigger Service Issues"}),"\n",(0,n.jsx)(t.p,{children:"If your subscribing service is not receiving your test invocations, you have a couple of options to debug the issue. Start by viewing the activity log for the subscription in the UI to ensure your test events are actually being sent."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"activity log",src:i(20740).Z+"",width:"2033",height:"316"})}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.strong,{children:"Created"})," date with the time you sent the test events. If they are being sent, check the event details. Look for any errors being reported, and ensure your subscribing service's subscription ID is in the ",(0,n.jsx)(t.code,{children:"subcriptionId"})," the event was sent to."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"debug connection",src:i(89640).Z+"",width:"2560",height:"1328"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also view the activity log by using the ",(0,n.jsx)(t.a,{href:"/docs/api/beta/list-trigger-invocation-status",children:"list latest invocation statuses"})," endpoint."]}),"\n",(0,n.jsx)(t.h3,{id:"filter-issues",children:"Filter Issues"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not see your events in the activity log, it may be a filtering issue. If the filter you configured on the subscription is not matching the test event data, no event will be sent. Double check your filter expression with the test payload in a JSONpath editor to ensure the filter is valid and matches your data. See ",(0,n.jsx)(t.a,{href:"/docs/extensibility/event-triggers/filtering-events",children:"Filtering Events"})," for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"misconfigured-subscription",children:"Misconfigured Subscription"}),"\n",(0,n.jsx)(t.p,{children:"Double check that your subscription configuration is correct."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure the URL you provided is accessible from the public internet. If your subscribing service is hosted internally in your company's intranet, you may be able to access it from your computer, but the trigger service may not be able to."}),"\n",(0,n.jsx)(t.li,{children:"Verify that the authentication details are correct. Verify that the username/password or bearer token is valid."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},20740:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/activity-log-f43d2beda4617ad71ede37afaabd3424.png"},89640:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/debug-connection-842ae82e91d48cdd9c4f2a14d4b4c2a3.png"},1721:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"}}]);