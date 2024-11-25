"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["18939"],{73364:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>p,frontMatter:()=>a});var s=JSON.parse('{"id":"tools/cli/Templates/cli-template-spconfig","title":"SPConfig Template","description":"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.","source":"@site/docs/tools/cli/Templates/spconfig.md","sourceDirName":"tools/cli/Templates","slug":"/tools/cli/templates/spconfig","permalink":"/docs/tools/cli/templates/spconfig","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/Templates/spconfig.md","tags":[{"inline":true,"label":"CLI","permalink":"/docs/tags/cli"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":10,"frontMatter":{"id":"cli-template-spconfig","title":"SPConfig Template","pagination_label":"CLI Templates SPConfig","sidebar_label":"SPConfig","sidebar_position":10,"sidebar_class_name":"cli-template-spconfig","keywords":["cli","template","spconfig"],"description":"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.","slug":"/tools/cli/templates/spconfig","tags":["CLI"]},"sidebar":"openApiSidebar","previous":{"title":"CLI Templates Search","permalink":"/docs/tools/cli/templates/search"},"next":{"title":"SDKs","permalink":"/docs/tools/sdk"}}'),i=t("85893"),o=t("50065");let a={id:"cli-template-spconfig",title:"SPConfig Template",pagination_label:"CLI Templates SPConfig",sidebar_label:"SPConfig",sidebar_position:10,sidebar_class_name:"cli-template-spconfig",keywords:["cli","template","spconfig"],description:"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.",slug:"/tools/cli/templates/spconfig",tags:["CLI"]},l=void 0,c={},p=[];function r(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Use SPConfig templates to perform complex import and export operations with Identity Security Cloud (ISC) configurations."}),"\n",(0,i.jsx)(n.p,{children:"This is an example of a template file with one SPConfig template populated:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "all-objects",\n    "description": "Export all available objects",\n    "variables": [],\n    "exportBody": {\n      "description": "Export all available objects",\n      "excludeTypes": [],\n      "includeTypes": [\n        "SOURCE",\n        "RULE",\n        "TRIGGER_SUBSCRIPTION",\n        "TRANSFORM",\n        "IDENTITY_PROFILE"\n      ],\n      "objectOptions": {}\n    }\n  }\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is the SPConfig template anatomy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n    {\n        "name": "all-objects",\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is the SPConfig template's name."}),"\n",(0,i.jsxs)(n.p,{children:["The SPConfig template name displays in the template list when you run ",(0,i.jsx)(n.code,{children:"sail spconfig template"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also provide this name as an argument: ",(0,i.jsx)(n.code,{children:"sail spconfig template all-objects"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'        "description": "Export all available objects",\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is the SPConfig template's description."}),"\n",(0,i.jsxs)(n.p,{children:["in the ",(0,i.jsx)(n.code,{children:"sail spconfig template"})," list"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'        "variables": [],\n'})}),"\n",(0,i.jsx)(n.p,{children:"Use variables to dynamically populate values in the following content during command run time."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'        "exportBody": {\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following object matches that detailed in the ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/docs/api/beta/export-sp-config",children:"API docs"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'        "description": "Export all available objects",\n        "excludeTypes": [],\n        "includeTypes": [\n            "SOURCE",\n            "RULE",\n            "TRIGGER_SUBSCRIPTION",\n            "TRANSFORM",\n            "IDENTITY_PROFILE"\n        ],\n        "objectOptions": {}\n        }\n\n    }\n\n'})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}}}]);