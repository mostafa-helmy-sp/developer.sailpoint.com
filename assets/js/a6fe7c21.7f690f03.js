"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["78926"],{99009:function(e,t,a){a.r(t),a.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>p,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"api/v2024/approvals","title":"Approvals","description":"Approvals","source":"@site/docs/api/v2024/approvals.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/approvals","permalink":"/docs/api/v2024/approvals","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"approvals","title":"Approvals","description":"Approvals","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Upload CSV to Discover Applications","permalink":"/docs/api/v2024/send-manual-discover-applications-csv-template"},"next":{"title":"Get Approvals","permalink":"/docs/api/v2024/get-approvals"}}'),r=a("85893"),s=a("50065"),n=a("75493"),o=a("45043");let c={id:"approvals",title:"Approvals",description:"Approvals",custom_edit_url:null},l=void 0,p={},d=[];function u(e){let t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them."}),"\n",(0,r.jsxs)(t.p,{children:["The main advantages this API has vs ",(0,r.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/beta/access-request-approvals",children:"Access Request Approvals"})," are that you can use it to get generic approvals individually or in batches and make changes to those approvals."]}),"\n","\n",(0,r.jsx)(n.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},75493:function(e,t,a){a.d(t,{Z:()=>y});var i=a("85893");a("67294");var r=a("67026"),s=a("69369"),n=a("83012"),o=a("43115"),c=a("63150"),l=a("96025"),p=a("34403");let d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=a("62163"),m=a("97596");function v(e){let{href:t,children:a}=e;return(0,i.jsx)(n.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:a})}function h(e){let{href:t,icon:a,title:s,description:n}=e;return(0,i.jsxs)(v,{href:t,children:[(0,i.jsxs)(p.default,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:s,children:[a," ",s]}),n&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e,a=(0,s.LM)(t),r=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return a?(0,i.jsx)(h,{href:a,icon:(0,i.jsx)(u.G,{icon:m.cC_,className:d.docCardIcon}),title:t.label,description:t.description??r(t.items.length)}):null}function x(e){let{item:t}=e,a=(0,c.Z)(t.href)?(0,i.jsx)(u.G,{icon:m.FL8,className:d.docCardIcon}):(0,i.jsx)(u.G,{icon:m.wlW,className:d.docCardIcon}),r=(0,s.xz)(t.docId??void 0);return(0,i.jsx)(h,{href:t.href,icon:a,title:t.label,description:t.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:t.label})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(x,{item:t});case"category":return(0,i.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,a=(0,s.jA)();return(0,i.jsx)(y,{items:a.items,className:t})}function y(e){let{items:t,className:a}=e;if(!t)return(0,i.jsx)(j,{...e});let n=(0,s.MN)(t);return(0,i.jsx)("section",{className:(0,r.Z)("row",a),children:n.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(g,{item:e})},t))})}}}]);