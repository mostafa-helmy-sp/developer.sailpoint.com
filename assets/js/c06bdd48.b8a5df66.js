"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["13240"],{90048:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-commands/entitlement-list","title":"Entitlement List","description":"Gather a list of all entitlements available on the source.","source":"@site/docs/connectivity/saas-connectivity/connector-commands/entitlement-list.md","sourceDirName":"connectivity/saas-connectivity/connector-commands","slug":"/connectivity/saas-connectivity/commands/entitlement-list","permalink":"/docs/connectivity/saas-connectivity/commands/entitlement-list","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/entitlement-list.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"entitlement-list","title":"Entitlement List","pagination_label":"Entitlement List","sidebar_label":"Entitlement List","keywords":["connectivity","connectors","entitlement list"],"description":"Gather a list of all entitlements available on the source.","slug":"/connectivity/saas-connectivity/commands/entitlement-list","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Change Password","permalink":"/docs/connectivity/saas-connectivity/commands/change-password"},"next":{"title":"Entitlement Read","permalink":"/docs/connectivity/saas-connectivity/commands/entitlement-read"}}'),s=n("85893"),a=n("50065");let o={id:"entitlement-list",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","entitlement list"],description:"Gather a list of all entitlements available on the source.",slug:"/connectivity/saas-connectivity/commands/entitlement-list",tags:["Connectivity","Connector Command"]},l=void 0,r={},c=[{value:"Example StdEntitlementListInput",id:"example-stdentitlementlistinput",level:3},{value:"Example StdEntitlementListOutput",id:"example-stdentitlementlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Defining the Schema",id:"defining-the-schema",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Delta Aggregation (State)",id:"delta-aggregation-state",level:2}];function d(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"StdEntitlementListInput"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Output"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"StdEntitlementListOutput"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"example-stdentitlementlistinput",children:"Example StdEntitlementListInput"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'{\n    "type": "group"\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"example-stdentitlementlistoutput",children:"Example StdEntitlementListOutput"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"The entitlement list command triggers during a manual or scheduled entitlement aggregation operation within ISC. This operation gathers a list of all entitlements available on the target source, usually multi-valued entitlements like groups or roles. This operation provides ISC administrators with a list of entitlements available on the source so they can create access profiles and roles accordingly, and it provides ISC with more details about the entitlements. The entitlement schema\u2019s minimum requirements are name and ID, but you can add other values, such as created date, updated date, status, etc."}),"\n",(0,s.jsxs)(e.p,{children:["To use this command, you must specify this value in the ",(0,s.jsx)(e.code,{children:"commands"})," array: ",(0,s.jsx)(e.code,{children:"std:entitlement:list"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Discover Schema 4",src:n(11868).Z+"",width:"2628",height:"1228"})}),"\n",(0,s.jsx)(e.h2,{id:"defining-the-schema",children:"Defining the Schema"}),"\n",(0,s.jsxs)(e.p,{children:["The entitlement schema is defined in the ",(0,s.jsx)(e.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json",children:"connector-spec.json"})," file. Currently, only the multi-valued \u201Cgroup\u201D type is supported. The following values are the minimum requirements, but you can add more attributes."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'...\n"entitlementSchemas": [\n {\n  "type": "group",\n  "displayAttribute": "name",\n  "identityAttribute": "id",\n  "attributes": [\n   {\n    "name": "id",\n    "type": "string",\n    "description": "Unique ID of the group (ex. admin)"\n   },\n   {\n    "name": "name",\n    "type": "string",\n    "description": "The display name of the group (ex. Admin)"\n   }\n  ]\n }\n],\n...\n'})}),"\n",(0,s.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsxs)(e.p,{children:["This can be implemented in the main connector file, ",(0,s.jsx)(e.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts",children:"index.ts"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"...\n.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {\n    const groups = await airtable.getAllEntitlements()\n\n    for (const group of groups) {\n        res.send(group.toStdEntitlementListOutput())\n    }\n})\n...\n...\n...\npublic toStdEntitlementListOutput(): StdEntitlementListOutput {\n    return this.buildStandardObject();\n}\nprivate buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {\n    return {\n        key: SimpleKey(this.id),\n        type: 'group',\n        attributes: {\n            id: this.id,\n            name: this.name\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(e.p,{children:["ISC will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to ISC as it's retrieved from your source system. For more details and an example, refer to ",(0,s.jsx)(e.a,{href:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts",children:"Connector Timeouts"}),"."]})}),"\n",(0,s.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(e.p,{children:["ISC supports ",(0,s.jsx)(e.a,{href:"#delta-aggregation-state",children:"delta aggregation"}),". If your source has a large number of entitlements that will be syncronized with ISC, then it is highly recommended to utilize ",(0,s.jsx)(e.a,{href:"#delta-aggregation-state",children:"delta aggregation"})," for the source."]})}),"\n",(0,s.jsx)(e.h2,{id:"delta-aggregation-state",children:"Delta Aggregation (State)"}),"\n",(0,s.jsx)(e.p,{children:"If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["In your connector-spec.json file, the feature needs to be enabled by adding the following key: ",(0,s.jsx)(e.code,{children:'"supportsStatefulCommands": true,'})," and in the sourceConfig section, a checkbox needs to be added to enable state with the key ",(0,s.jsx)(e.code,{children:"spConnEnableStatefulCommands"}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'"supportsStatefulCommands": true,\n...\n{\n    "key": "spConnEnableStatefulCommands",\n    "label": "Stateful",\n    "required": true,\n    "type": "checkbox"\n}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["In the ",(0,s.jsx)(e.code,{children:"stdEntitlementList"})," command, when you are done sending entitlments, you need to also send the state to ISC so it knows where to start the next time it sends a list request:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const state = {"data": Date.now().toString()}\n...\nres.saveState(state)\n'})}),"\n",(0,s.jsx)(e.p,{children:"In the above example, I am capturing the date, but you can use any value you want to store the state"}),"\n",(0,s.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(e.p,{children:["The state that you send using the ",(0,s.jsx)(e.code,{children:"saveState"})," command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state."]})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["In the ",(0,s.jsx)(e.code,{children:"stdEntitlementList"})," command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {\n    let groups = []\n    const state = {"data": Date.now().toString()}\n    if (!input.state && input.stateful) {\n        logger.info(input, "No state provided, fetching all entitlements")\n        const groups = await airtable.getAllEntitlements()\n    } else if (input.state && input.stateful) {\n        logger.info(input ,"Current state provided, only fetching entitlements after that state")\n        const groups = await airtable.getAllStatefulEntitlements(new Date(Number(input.state?.data)))\n    } else {\n        logger.info(input.state ,"Source is not stateful, getting all entitlements")\n        const groups = await airtable.getAllEntitlements()\n    }\n    logger.info(groups, "fetched the following entitlements in Airtable")\n    for (const group of groups) {\n        res.send(group.toStdEntitlementListOutput())\n    }\n    res.saveState(state)\n})\n'})})]})}function m(t={}){let{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11868:function(t,e,n){n.d(e,{Z:function(){return i}});let i=n.p+"assets/images/entitlement_list_idn-746c496b20dbf4823d27a3b9f63af578.png"}}]);