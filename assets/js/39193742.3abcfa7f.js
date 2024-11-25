"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["99985"],{38225:function(n,i,t){t.r(i),t.d(i,{metadata:()=>e,contentTitle:()=>r,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>o});var e=JSON.parse('{"id":"connectivity/saas-connectivity/in-depth/linting","title":"Linting","description":"Automatically check your connector source code for programmatic and stylistic errors.","source":"@site/docs/connectivity/saas-connectivity/in-depth/linting.md","sourceDirName":"connectivity/saas-connectivity/in-depth","slug":"/connectivity/saas-connectivity/in-depth/linting","permalink":"/docs/connectivity/saas-connectivity/in-depth/linting","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/linting.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":4,"frontMatter":{"id":"linting","title":"Linting","pagination_label":"Linting","sidebar_label":"Linting","sidebar_position":4,"sidebar_class_name":"linting","keywords":["connectivity","connectors","linting"],"description":"Automatically check your connector source code for programmatic and stylistic errors.","slug":"/connectivity/saas-connectivity/in-depth/linting","tags":["Connectivity"]},"sidebar":"openApiSidebar","previous":{"title":"Error Handling","permalink":"/docs/connectivity/saas-connectivity/in-depth/error-handling"},"next":{"title":"Logging","permalink":"/docs/connectivity/saas-connectivity/in-depth/logging"}}'),s=t("85893"),c=t("50065");let o={id:"linting",title:"Linting",pagination_label:"Linting",sidebar_label:"Linting",sidebar_position:4,sidebar_class_name:"linting",keywords:["connectivity","connectors","linting"],description:"Automatically check your connector source code for programmatic and stylistic errors.",slug:"/connectivity/saas-connectivity/in-depth/linting",tags:["Connectivity"]},r=void 0,a={},l=[];function d(n){let i={code:"code",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"To add linting to your project, simply install the linter using NPM:"}),"\n",(0,s.jsx)(i.p,{children:"``npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`"}),"\n",(0,s.jsxs)(i.p,{children:["Then add the ",(0,s.jsx)(i.code,{children:".eslintrc.yml"})," file on the project root:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"env:\n  browser: true\n  es2021: true\nextends:\n  - eslint:recommended\n  - plugin:@typescript-eslint/recommended\nparser: '@typescript-eslint/parser'\nparserOptions:\n  ecmaVersion: latest\n  sourceType: module\nplugins:\n  - '@typescript-eslint'\nrules: {}\n"})})]})}function p(n={}){let{wrapper:i}={...(0,c.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}}}]);