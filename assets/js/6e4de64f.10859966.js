"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["54512"],{70620:function(e,t,c){c.r(t),c.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover-customizer","title":"Source Data Discover","description":"Intercept the source data discover command.","source":"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover.md","sourceDirName":"connectivity/saas-connectivity/connector-customizers/customizer-commands","slug":"/connectivity/saas-connectivity/customizers/commands/source-data-discover","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/source-data-discover","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"source-data-discover-customizer","title":"Source Data Discover","pagination_label":"Source Data Discover","sidebar_label":"Source Data Discover","keywords":["connectivity","connectors","Source Data Discover"],"description":"Intercept the source data discover command.","slug":"/connectivity/saas-connectivity/customizers/commands/source-data-discover","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Entitlement Read","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read"},"next":{"title":"Source Data Read","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read"}}'),a=c("85893"),o=c("50065");let s={id:"source-data-discover-customizer",title:"Source Data Discover",pagination_label:"Source Data Discover",sidebar_label:"Source Data Discover",keywords:["connectivity","connectors","Source Data Discover"],description:"Intercept the source data discover command.",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-discover",tags:["Connectivity","Connector Command"]},r=void 0,i={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdSourceDataDiscoverInput",id:"example-stdsourcedatadiscoverinput",level:3},{value:"Example StdSourceDataDiscoverOutput",id:"example-stdsourcedatadiscoveroutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before source-data-discover command",id:"before-source-data-discover-command",level:3},{value:"After source-data-discover command",id:"after-source-data-discover-command",level:3}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,a.jsx)(t.a,{href:"../../commands/source-data-discover",children:"source-data-discover"})," command."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataDiscoverInput"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataDiscoverOutput"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"example-stdsourcedatadiscoverinput",children:"Example StdSourceDataDiscoverInput"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"example-stdsourcedatadiscoveroutput",children:"Example StdSourceDataDiscoverOutput"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"[\n  {\n    key: 'id',\n    label: 'Id',\n    subLabel: 'Airtable Base Id',\n  },\n  {\n    key: 'name',\n    label: 'Name',\n    subLabel: 'Airtable Source Table Name',\n  },\n];\n"})}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.h3,{id:"before-source-data-discover-command",children:"Before source-data-discover command"}),"\n",(0,a.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {\n        logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)\n        return input\n    })\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,a.jsx)(t.h3,{id:"after-source-data-discover-command",children:"After source-data-discover command"}),"\n",(0,a.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"    .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {\n        logger.info(`Running after source data discover first record key: ${output[0].key}`)\n        return output\n    })\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);