"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["17273"],{13140:function(t,e,i){i.r(e),i.d(e,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>o});var n=JSON.parse('{"id":"api/v2024/o-auth-clients","title":"OAuth Clients","description":"OAuth Clients","source":"@site/docs/api/v2024/o-auth-clients.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/o-auth-clients","permalink":"/docs/api/v2024/o-auth-clients","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"o-auth-clients","title":"OAuth Clients","description":"OAuth Clients","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Verify domain address via DKIM","permalink":"/docs/api/v2024/create-domain-dkim"},"next":{"title":"List OAuth Clients","permalink":"/docs/api/v2024/list-oauth-clients"}}'),r=i("85893"),s=i("50065"),a=i("75493"),c=i("45043");let o={id:"o-auth-clients",title:"OAuth Clients",description:"OAuth Clients",custom_edit_url:null},l=void 0,d={},u=[];function p(t){let e={a:"a",br:"br",p:"p",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Use this API to implement OAuth client functionality.",(0,r.jsx)(e.br,{}),"\n","With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.\nRefer to ",(0,r.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/authentication/",children:"Authentication"})," for more information about OAuth and how it works with the Identity Security Cloud REST API."]}),"\n","\n",(0,r.jsx)(a.Z,{items:(0,c.useCurrentSidebarCategory)().items})]})}function h(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},75493:function(t,e,i){i.d(e,{Z:()=>v});var n=i("85893");i("67294");var r=i("67026"),s=i("69369"),a=i("83012"),c=i("43115"),o=i("63150"),l=i("96025"),d=i("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i("62163"),h=i("97596");function m(t){let{href:e,children:i}=t;return(0,n.jsx)(a.Z,{href:e,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function f(t){let{href:e,icon:i,title:s,description:a}=t;return(0,n.jsxs)(m,{href:e,children:[(0,n.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:s,children:[i," ",s]}),a&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function x(t){let{item:e}=t,i=(0,s.LM)(e),r=function(){let{selectMessage:t}=(0,c.c)();return e=>t(e,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return i?(0,n.jsx)(f,{href:i,icon:(0,n.jsx)(p.G,{icon:h.cC_,className:u.docCardIcon}),title:e.label,description:e.description??r(e.items.length)}):null}function j(t){let{item:e}=t,i=(0,o.Z)(e.href)?(0,n.jsx)(p.G,{icon:h.FL8,className:u.docCardIcon}):(0,n.jsx)(p.G,{icon:h.wlW,className:u.docCardIcon}),r=(0,s.xz)(e.docId??void 0);return(0,n.jsx)(f,{href:e.href,icon:i,title:e.label,description:e.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:e.label})}function C(t){let{item:e}=t;switch(e.type){case"link":return(0,n.jsx)(j,{item:e});case"category":return(0,n.jsx)(x,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t,i=(0,s.jA)();return(0,n.jsx)(v,{items:i.items,className:e})}function v(t){let{items:e,className:i}=t;if(!e)return(0,n.jsx)(g,{...t});let a=(0,s.MN)(e);return(0,n.jsx)("section",{className:(0,r.Z)("row",i),children:a.map((t,e)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(C,{item:t})},e))})}}}]);