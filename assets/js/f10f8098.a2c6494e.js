"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["39340"],{9854:function(t,e,r){r.r(e),r.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>p,frontMatter:()=>c});var i=JSON.parse('{"id":"api/v3/reports-data-extraction","title":"Reports Data Extraction","description":"Reports Data Extraction","source":"@site/docs/api/v3/reports-data-extraction.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/reports-data-extraction","permalink":"/docs/api/v3/reports-data-extraction","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"reports-data-extraction","title":"Reports Data Extraction","description":"Reports Data Extraction","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"Update the Public Identities Configuration","permalink":"/docs/api/v3/update-public-identity-config"},"next":{"title":"Get Report Result","permalink":"/docs/api/v3/get-report-result"}}'),n=r("85893"),a=r("50065"),s=r("75493"),o=r("45043");let c={id:"reports-data-extraction",title:"Reports Data Extraction",description:"Reports Data Extraction",custom_edit_url:null},l=void 0,d={},p=[];function u(t){let e={p:"p",...(0,a.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Use this API to implement reports lifecycle managing and monitoring.\nWith this functionality in place, users can run reports, view their results, and cancel reports in progress.\nThis can be potentially helpful for auditing purposes."}),"\n","\n",(0,n.jsx)(s.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(t={}){let{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},75493:function(t,e,r){r.d(e,{Z:()=>C});var i=r("85893");r("67294");var n=r("67026"),a=r("69369"),s=r("83012"),o=r("43115"),c=r("63150"),l=r("96025"),d=r("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=r("62163"),m=r("97596");function x(t){let{href:e,children:r}=t;return(0,i.jsx)(s.Z,{href:e,className:(0,n.Z)("card padding--lg",p.cardContainer),children:r})}function f(t){let{href:e,icon:r,title:a,description:s}=t;return(0,i.jsxs)(x,{href:e,children:[(0,i.jsxs)(d.default,{as:"h2",className:(0,n.Z)("text--truncate",p.cardTitle),title:a,children:[r," ",a]}),s&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",p.cardDescription),title:s,children:s})]})}function h(t){let{item:e}=t,r=(0,a.LM)(e),n=function(){let{selectMessage:t}=(0,o.c)();return e=>t(e,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,i.jsx)(f,{href:r,icon:(0,i.jsx)(u.G,{icon:m.cC_,className:p.docCardIcon}),title:e.label,description:e.description??n(e.items.length)}):null}function g(t){let{item:e}=t,r=(0,c.Z)(e.href)?(0,i.jsx)(u.G,{icon:m.FL8,className:p.docCardIcon}):(0,i.jsx)(u.G,{icon:m.wlW,className:p.docCardIcon}),n=(0,a.xz)(e.docId??void 0);return(0,i.jsx)(f,{href:e.href,icon:r,title:e.label,description:e.description??(n?.description!="<Heading"&&n?.description!="<span")?n?.description:e.label})}function j(t){let{item:e}=t;switch(e.type){case"link":return(0,i.jsx)(g,{item:e});case"category":return(0,i.jsx)(h,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function v(t){let{className:e}=t,r=(0,a.jA)();return(0,i.jsx)(C,{items:r.items,className:e})}function C(t){let{items:e,className:r}=t;if(!e)return(0,i.jsx)(v,{...t});let s=(0,a.MN)(e);return(0,i.jsx)("section",{className:(0,n.Z)("row",r),children:s.map((t,e)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(j,{item:t})},e))})}}}]);