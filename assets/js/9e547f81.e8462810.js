"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["15024"],{9605:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"extensibility/transforms/operations/get-end-of-string","title":"Get End of String","description":"Get the rightmost N characters of a string.","source":"@site/docs/extensibility/transforms/operations/get-end-of-string.md","sourceDirName":"extensibility/transforms/operations","slug":"/extensibility/transforms/operations/get-end-of-string","permalink":"/docs/extensibility/transforms/operations/get-end-of-string","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/get-end-of-string.md","tags":[{"inline":true,"label":"Transforms","permalink":"/docs/tags/transforms"},{"inline":true,"label":"Transform Operations","permalink":"/docs/tags/transform-operations"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"get-end-of-string","title":"Get End of String","pagination_label":"Get End of String","sidebar_label":"Get End of String","sidebar_class_name":"getEndOfString","keywords":["transforms","operations","get","end","string"],"description":"Get the rightmost N characters of a string.","slug":"/extensibility/transforms/operations/get-end-of-string","tags":["Transforms","Transform Operations"]},"sidebar":"openApiSidebar","previous":{"title":"Generate Random String","permalink":"/docs/extensibility/transforms/operations/generate-random-string"},"next":{"title":"Get Reference Identity Attribute","permalink":"/docs/extensibility/transforms/operations/get-reference-identity-attribute"}}'),s=n("85893"),i=n("50065");let o={id:"get-end-of-string",title:"Get End of String",pagination_label:"Get End of String",sidebar_label:"Get End of String",sidebar_class_name:"getEndOfString",keywords:["transforms","operations","get","end","string"],description:"Get the rightmost N characters of a string.",slug:"/extensibility/transforms/operations/get-end-of-string",tags:["Transforms","Transform Operations"]},a=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Use the get end of string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the rightmost N characters of a string."}),"\n",(0,s.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(t.p,{children:["The structure of a get end of string transform requires the ",(0,s.jsx)(t.code,{children:"name"})," of the referenced rule to be the ",(0,s.jsx)(t.code,{children:"Cloud Services Deployment Utility"})," rule built by SailPoint. You must also set ",(0,s.jsx)(t.code,{children:"operation"})," to ",(0,s.jsx)(t.code,{children:"getEndOfString,"})," and provide a ",(0,s.jsx)(t.code,{children:"numChars"})," value. Last, you must include the ",(0,s.jsx)(t.code,{children:"type"})," and ",(0,s.jsx)(t.code,{children:"name"})," attributes required for all transforms:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "4"\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"rule"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"attributes.name"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"Cloud Services Deployment Utility"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"operation"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"getEndOfString"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"numChars"})," - This specifies how many of the rightmost characters within the incoming string the transform returns. If the value of numChars is greater than the string length, the transform returns null."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:'This transform returns the last four characters of the input string "abcd1234".'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'Input: "abcd1234"\nOutput: "1234"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "4"\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsx)(t.p,{children:"This transform returns a null value because the incoming string length is only 15 characters long, but the transform requests the rightmost 16 characters."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "16",\n    "input": "This is a test."\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);