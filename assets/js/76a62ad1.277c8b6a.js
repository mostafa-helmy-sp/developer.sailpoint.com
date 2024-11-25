"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["16124"],{4947:function(e,t,a){a.r(t),a.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>u,frontMatter:()=>o});var s=JSON.parse('{"id":"api/beta/access-model-metadata","title":"Access Model Metadata","description":"Access Model Metadata","source":"@site/docs/api/beta/access-model-metadata.tag.mdx","sourceDirName":"api/beta","slug":"/api/beta/access-model-metadata","permalink":"/docs/api/beta/access-model-metadata","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"access-model-metadata","title":"Access Model Metadata","description":"Access Model Metadata","custom_edit_url":null},"sidebar":"isc_beta_sidebar","previous":{"title":"Introduction","permalink":"/docs/api/beta/identity-security-cloud-beta-api"},"next":{"title":"List Access Model Metadata Attributes","permalink":"/docs/api/beta/list-access-model-metadata-attribute"}}'),i=a("85893"),r=a("50065"),n=a("75493"),c=a("45043");let o={id:"access-model-metadata",title:"Access Model Metadata",description:"Access Model Metadata",custom_edit_url:null},d=void 0,l={},u=[];function m(e){let t={li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to create and manage metadata attributes for your Access Model.\nAccess Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release."}),"\n",(0,i.jsx)(t.p,{children:"Common usages for Access Model metadata include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Identifying access that may requires additional approval requirements or be subject to more frequent review."}),"\n"]}),"\n"]}),"\n","\n",(0,i.jsx)(n.Z,{items:(0,c.useCurrentSidebarCategory)().items})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},75493:function(e,t,a){a.d(t,{Z:()=>y});var s=a("85893");a("67294");var i=a("67026"),r=a("69369"),n=a("83012"),c=a("43115"),o=a("63150"),d=a("96025"),l=a("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=a("62163"),p=a("97596");function f(e){let{href:t,children:a}=e;return(0,s.jsx)(n.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:a})}function h(e){let{href:t,icon:a,title:r,description:n}=e;return(0,s.jsxs)(f,{href:t,children:[(0,s.jsxs)(l.default,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:r,children:[a," ",r]}),n&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:n,children:n})]})}function g(e){let{item:t}=e,a=(0,r.LM)(t),i=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return a?(0,s.jsx)(h,{href:a,icon:(0,s.jsx)(m.G,{icon:p.cC_,className:u.docCardIcon}),title:t.label,description:t.description??i(t.items.length)}):null}function x(e){let{item:t}=e,a=(0,o.Z)(t.href)?(0,s.jsx)(m.G,{icon:p.FL8,className:u.docCardIcon}):(0,s.jsx)(m.G,{icon:p.wlW,className:u.docCardIcon}),i=(0,r.xz)(t.docId??void 0);return(0,s.jsx)(h,{href:t.href,icon:a,title:t.label,description:t.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:t.label})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(x,{item:t});case"category":return(0,s.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,a=(0,r.jA)();return(0,s.jsx)(y,{items:a.items,className:t})}function y(e){let{items:t,className:a}=e;if(!t)return(0,s.jsx)(j,{...e});let n=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",a),children:n.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(b,{item:e})},t))})}}}]);