"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["58524"],{26093:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"extensibility/transforms/operations/substring","title":"Substring","description":"Get the inner portion of a string passed into the transform.","source":"@site/docs/extensibility/transforms/operations/substring.md","sourceDirName":"extensibility/transforms/operations","slug":"/extensibility/transforms/operations/substring","permalink":"/docs/extensibility/transforms/operations/substring","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/substring.md","tags":[{"inline":true,"label":"Transforms","permalink":"/docs/tags/transforms"},{"inline":true,"label":"Transform Operations","permalink":"/docs/tags/transform-operations"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"substring","title":"Substring","pagination_label":"Substring","sidebar_label":"Substring","sidebar_class_name":"substring","keywords":["transforms","operations","substring"],"description":"Get the inner portion of a string passed into the transform.","slug":"/extensibility/transforms/operations/substring","tags":["Transforms","Transform Operations"]},"sidebar":"openApiSidebar","previous":{"title":"Static","permalink":"/docs/extensibility/transforms/operations/static"},"next":{"title":"Trim","permalink":"/docs/extensibility/transforms/operations/trim"}}'),r=n("85893"),i=n("50065");let a={id:"substring",title:"Substring",pagination_label:"Substring",sidebar_label:"Substring",sidebar_class_name:"substring",keywords:["transforms","operations","substring"],description:"Get the inner portion of a string passed into the transform.",slug:"/extensibility/transforms/operations/substring",tags:["Transforms","Transform Operations"]},o=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Use the substring transform to get the inner portion of a string passed into the transform. You can use the substring transform to get the first n characters or get a set number of characters within the middle of a string."}),"\n",(0,r.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The substring transform does not currently provide an easy way to get the last n characters of a string. To do so, use the ",(0,r.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/get-end-of-string",children:"Get End of String"})," transform."]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to the standard ",(0,r.jsx)(t.code,{children:"type"})," and ",(0,r.jsx)(t.code,{children:"name"})," attributes, the substring transform requires you to provide the beginning location of the input, which indicates the start of the desired substring output:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "begin": 4\n  },\n  "type": "substring",\n  "name": "Substring Transform"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,r.jsx)(t.code,{children:"substring."})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"begin"})," - This is the integer value for the location within the input data that contains the first character of the substring you want to return.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.code,{children:"begin"})," is set to -1, the transform begins at character 0 of the input data."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,r.jsx)(t.code,{children:"true"})," or ",(0,r.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"beginOffset"})," - This integer value is the number of characters to add to the ",(0,r.jsx)(t.code,{children:"begin"})," attribute when the transform returns a substring. The transform only uses this attribute if ",(0,r.jsx)(t.code,{children:"begin"})," is not -1."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"end"})," - This is the integer value for the location within the input data that no longer contains the substring you want to return.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.code,{children:"end"})," is -1 or not provided at all, the substring transform returns everything up to the end of the input string."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"endOffset"})," - This integer value is the number of characters to add to the ",(0,r.jsx)(t.code,{children:"end"})," attribute when the transform returns a substring. The transform only uses this attribute if ",(0,r.jsx)(t.code,{children:"end"})," is provided and is not -1."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:'This transform uses a zero-based array to determine that the letter "c" is the begin index of the substring it will return because "c" is in index location 2. Index location 4 contains the letter "e," so the transform will return a substring consisting of anything between the letters "c" and "e," including "c" but excluding "e".'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Input: "abcdef"\nOutput: "cd"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "begin": 2,\n    "end": 4\n  },\n  "type": "substring",\n  "name": "Substring Transform"\n}\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)("p",{children:"\xa0"}),"\n",(0,r.jsx)(t.p,{children:'This transform uses a zero-based array to determine that the substring transform must begin with the letter "c" because even though the letter "b\' is in index location 1, the beginOffset value indicates one additional character must be skipped. Index location 3 contains the letter "d," so the transform would normally end at the character preceding "d." However, with the endOffset value set to 2, the transform must include an additional two characters, "d" and "e". Thus, the transform returns "cde".'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Input: "abcdef"\nOutput: "cde"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "begin": 1,\n    "end": 3,\n    "beginOffset": 1,\n    "endOffset": 2\n  },\n  "type": "substring",\n  "name": "Substring Transform"\n}\n'})})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);