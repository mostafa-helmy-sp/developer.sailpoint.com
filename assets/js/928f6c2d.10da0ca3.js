"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["95332"],{95513:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"extensibility/transforms/operations/iso-3166","title":"ISO3166","description":"Convert a string into an ISO 3166 country code value.","source":"@site/docs/extensibility/transforms/operations/iso-3166.md","sourceDirName":"extensibility/transforms/operations","slug":"/extensibility/transforms/operations/iso-3166","permalink":"/docs/extensibility/transforms/operations/iso-3166","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/iso-3166.md","tags":[{"inline":true,"label":"Transforms","permalink":"/docs/tags/transforms"},{"inline":true,"label":"Transform Operations","permalink":"/docs/tags/transform-operations"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"iso-3166","title":"ISO3166","pagination_label":"ISO3166","sidebar_label":"ISO3166","sidebar_class_name":"iso3166","keywords":["transforms","operations","iso3166"],"description":"Convert a string into an ISO 3166 country code value.","slug":"/extensibility/transforms/operations/iso-3166","tags":["Transforms","Transform Operations"]},"sidebar":"openApiSidebar","previous":{"title":"Index Of","permalink":"/docs/extensibility/transforms/operations/index-of"},"next":{"title":"Last Index Of","permalink":"/docs/extensibility/transforms/operations/last-index-of"}}'),i=r("85893"),t=r("50065");let o={id:"iso-3166",title:"ISO3166",pagination_label:"ISO3166",sidebar_label:"ISO3166",sidebar_class_name:"iso3166",keywords:["transforms","operations","iso3166"],description:"Convert a string into an ISO 3166 country code value.",slug:"/extensibility/transforms/operations/iso-3166",tags:["Transforms","Transform Operations"]},a=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ISO3166 transform to convert an incoming string into an ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166",children:"ISO 3166"})," country code value. The incoming data must be either a recognized country name or country code:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The alpha2 country code (e.g. "ES")'}),"\n",(0,i.jsx)(n.li,{children:'The alpha3 country code (e.g. "ESP)'}),"\n",(0,i.jsx)(n.li,{children:"The numeric country code (e.g. 724)"}),"\n",(0,i.jsx)(n.li,{children:"The English name for the country (e.g. Spain)"}),"\n",(0,i.jsx)(n.li,{children:"The native name for the country (e.g. Espa\xf1a)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The output value can be any of these three values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Two-character country code (e.g., "US")'}),"\n",(0,i.jsx)(n.li,{children:'Three-character country code (e.g., "USA")'}),"\n",(0,i.jsx)(n.li,{children:'Numeric country code (e.g., "840")'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Other Considerations",type:"note",children:(0,i.jsx)(n.p,{children:"If the input string to the transform does not represent a valid country code or country name, the transform returns null."})}),"\n",(0,i.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The transform for iso3166 only requires the transform's ",(0,i.jsx)(n.code,{children:"type"})," and ",(0,i.jsx)(n.code,{children:"name"})," attributes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Required Attributes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,i.jsx)(n.code,{children:"iso3166"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optional Attributes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"format"})," - Use this optional value to denote which ISO 3166 format to return. The following values are valid:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha2"}),' - Two-character country code (e.g., "US"). This is the default value if you do not provide a format.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha3"}),' - Three-character country code (e.g., "USA")']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"numeric"}),' - The numeric country code (e.g., "840")']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:'Because no specific format is provided, this transform defaults to the alpha2 output and returns "US".'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Input: "United States of America"\nOutput: "US"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)("p",{children:"\xa0"}),"\n",(0,i.jsx)(n.p,{children:'Because the desired format is specified as numeric, the output of this transform returns "724".'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Input: "ES"\nOutput: "724"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "format": "numeric"\n  },\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166",children:"https://en.wikipedia.org/wiki/ISO_3166"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);