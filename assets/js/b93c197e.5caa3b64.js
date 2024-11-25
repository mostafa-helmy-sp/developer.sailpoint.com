"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["78116"],{91513:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"tools/ui-development-kit/udk","title":"UI Development Kit","description":"Develop custom user interfaces.","source":"@site/docs/tools/ui-development-kit/index.md","sourceDirName":"tools/ui-development-kit","slug":"/tools/ui-development-kit","permalink":"/docs/tools/ui-development-kit","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/index.md","tags":[{"inline":true,"label":"UI","permalink":"/docs/tags/ui"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":4,"frontMatter":{"id":"udk","title":"UI Development Kit","pagination_label":"UDK","sidebar_label":"UI Development Kit","sidebar_position":4,"sidebar_class_name":"rudk","keywords":["UI","development","kit"],"description":"Develop custom user interfaces.","slug":"/tools/ui-development-kit","tags":["UI"]},"sidebar":"openApiSidebar","previous":{"title":"RDK","permalink":"/docs/tools/rule-development-kit"},"next":{"title":"UDK","permalink":"/docs/tools/ui-development-kit/getting-started"}}'),o=i("85893"),s=i("50065");let l={id:"udk",title:"UI Development Kit",pagination_label:"UDK",sidebar_label:"UI Development Kit",sidebar_position:4,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit",tags:["UI"]},r=void 0,a={},d=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Clone the project",id:"clone-the-project",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Run the application for local development",id:"run-the-application-for-local-development",level:2},{value:"Get started",id:"get-started",level:2},{value:"Discuss",id:"discuss",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The SailPoint UI Development Kit is a project you can use to quickly develop custom user interfaces that interact with Identity Security Cloud (ISC)."}),"\n",(0,o.jsx)(t.p,{children:"The UI Development Kit provides you with a framework you can use to build your own applications or processes on the ISC platform."}),"\n",(0,o.jsx)(t.p,{children:"Read this guide to learn how to use the SailPoint UI Development Kit."}),"\n",(0,o.jsx)("div",{className:"text--center",children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bloIVw1-NzU?si=m7SRpu62WSciyiOr",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),"\n",(0,o.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(t.p,{children:"These are the requirements to use the UI Development Kit:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Node"}),": To learn how to download Node and set it up, go ",(0,o.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Your ISC tenant name"}),". To learn how to find it, refer to ",(0,o.jsx)(t.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your ISC instance."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"clone-the-project",children:"Clone the project"}),"\n",(0,o.jsxs)(t.p,{children:["The first step to setting up the UI Development Kit is to clone the project from its GitHub repository. You can find the UI Development Kit and its examples in the Github repository ",(0,o.jsx)(t.a,{href:"https://github.com/sailpoint-oss/ui-development-kit",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"To clone the project, you can run this command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:sailpoint-oss/ui-development-kit.git\n"})}),"\n",(0,o.jsx)(t.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,o.jsxs)(t.p,{children:["This project is built on ",(0,o.jsx)(t.a,{href:"https://kit.svelte.dev/",children:"Svelte-Kit"})," and ultimately builds an ",(0,o.jsx)(t.a,{href:"https://www.electronjs.org/",children:"Electron"})," application."]}),"\n",(0,o.jsx)(t.p,{children:"Setting up the project is simple. The environment and application building process are configured so you can start creating custom UIs immediately. However, it is still helpful to understand the project structure."}),"\n",(0,o.jsxs)(t.p,{children:["Most of your activity will involve the ",(0,o.jsx)(t.code,{children:"src"})," folder, such as adding new pages, routes, and sidebar items. You can learn more about these processes in ",(0,o.jsx)(t.a,{href:"/docs/tools/ui-development-kit/getting-started",children:"Getting Started"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This is the project structure:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 electron-builder.yaml\n\u251C\u2500\u2500 electron.vite.config.ts\n\u251C\u2500\u2500 package-lock.json\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 postcss.config.cjs\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app.d.ts\n\u2502   \u251C\u2500\u2500 app.html\n\u2502   \u251C\u2500\u2500 app.postcss\n\u2502   \u251C\u2500\u2500 error.html\n\u2502   \u251C\u2500\u2500 hooks.server.ts\n\u2502   \u251C\u2500\u2500 lib\n\u2502   \u251C\u2500\u2500 main\n\u2502   \u251C\u2500\u2500 preload\n\u2502   \u2514\u2500\u2500 routes\n\u251C\u2500\u2500 svelte.config.js\n\u251C\u2500\u2500 tailwind.config.ts\n\u251C\u2500\u2500 tsconfig.json\n\u251C\u2500\u2500 vite.config.js\n\u2514\u2500\u2500 yarn.lock\n"})}),"\n",(0,o.jsx)(t.h2,{id:"run-the-application-for-local-development",children:"Run the application for local development"}),"\n",(0,o.jsx)(t.p,{children:"To run and develop the project locally, follow these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"In the root of the project run this command to install dependencies:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"To start the application, run this command:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsxs)(t.p,{children:["To start learning how to use the UI Development Kit and explore its possibilities, refer to ",(0,o.jsx)(t.a,{href:"/docs/tools/ui-development-kit/getting-started",children:"Getting Started"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,o.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,o.jsxs)(t.p,{children:["To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,o.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);