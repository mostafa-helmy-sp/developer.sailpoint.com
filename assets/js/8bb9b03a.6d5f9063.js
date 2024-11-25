"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["54013"],{43879:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"tools/sdk/python/python-sdk","title":"Python SDK","description":"Learn how to use the Python SDK in this guide.","source":"@site/docs/tools/sdk/python/index.mdx","sourceDirName":"tools/sdk/python","slug":"/tools/sdk/python","permalink":"/docs/tools/sdk/python","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/index.mdx","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"},{"inline":true,"label":"Software Development Kit","permalink":"/docs/tags/software-development-kit"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":4,"frontMatter":{"id":"python-sdk","title":"Python SDK","pagination_label":"Python SDK","sidebar_label":"Python","sidebar_position":4,"sidebar_class_name":"pythonsdk","keywords":["python","sdk"],"description":"Learn how to use the Python SDK in this guide.","slug":"/tools/sdk/python","tags":["SDK","Software Development Kit"]},"sidebar":"openApiSidebar","previous":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/error-handling"},"next":{"title":"Python SDK","permalink":"/docs/tools/sdk/python/getting-started"}}'),o=t("85893"),s=t("50065"),r=t("20398"),a=t("5525");let l={id:"python-sdk",title:"Python SDK",pagination_label:"Python SDK",sidebar_label:"Python",sidebar_position:4,sidebar_class_name:"pythonsdk",keywords:["python","sdk"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python",tags:["SDK","Software Development Kit"]},c=void 0,d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example &quot;config.json&quot;",id:"example-configjson",level:4},{value:"Example &quot;config.json&quot;",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Read this guide to learn how to use the Python SDK. The Python SDK has some pre-built code examples you can use to learn how to build tools that can interact with Identity Security Cloud."}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"You need the following to use the Python SDK:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Python version 3.7 or above. You can download it ",(0,o.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"here"}),". You can use ",(0,o.jsx)(n.code,{children:"python --version"})," to check your version."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Your tenant name in Identity Security Cloud. To learn how to find it, refer to ",(0,o.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your Identity Security Cloud instance."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["A PAT with a client secret and ID. To learn how to create one in Identity Security Cloud, refer to ",(0,o.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token",children:"Personal Access Tokens"}),". The SDK will use this PAT to authenticate with the SailPoint APIs."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:["CLI Assisted ",(0,o.jsx)("em",{children:"(Recommended)"})]}),(0,o.jsxs)(n.p,{children:["The SailPoint CLI offers a few commands that will allow you to quickly get started with the Python SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,o.jsx)(n.a,{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli",children:"SailPoint CLI"}),"."]}),(0,o.jsx)(n.p,{children:"Once the CLI is installed and configured, run this command to create a new Python project with the Python SDK:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sail sdk init python python-example\n"})}),(0,o.jsx)(n.p,{children:"Running this command will create the structure for your project:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"|-- python-example\n|   |-- requirements.txt\n|   |-- sdk.py\n"})}),(0,o.jsx)(n.p,{children:"Navigate into your project folder and run this command to install the required dependencies:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),(0,o.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,o.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Manual Installation"}),(0,o.jsx)(n.p,{children:"To begin your Python project, you will need to create a directory for your project."}),(0,o.jsx)(n.p,{children:"To create a project directory, run this command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir python-example\n"})}),(0,o.jsx)(n.p,{children:"Then run this command to change into your project directory:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd python-example\n"})}),(0,o.jsx)(n.p,{children:'To initialize your project and install the SDK, create the "requirements.txt" file with the following line in your project directory:'}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"sailpoint >= 1.0.0\n"})}),(0,o.jsx)(n.p,{children:"To install the SDK and its dependencies, run this command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),(0,o.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,o.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,o.jsx)(n.p,{children:'You must provide configuration to the SDK so it can authenticate to your SailPoint tenant and make API calls. To do so, you can either use a configuration file, "config.json", or environment variables.'}),"\n",(0,o.jsx)(n.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,o.jsxs)(n.p,{children:['The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,o.jsx)(n.code,{children:"ClientId"}),", ",(0,o.jsx)(n.code,{children:"ClientSecret"}),", ",(0,o.jsx)(n.code,{children:"BaseURL"}),"."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsxs)("summary",{children:["CLI Assisted ",(0,o.jsx)("em",{children:"(Recommended)"})]}),'\nThe SailPoint CLI offers a command to generate the "config.json" file with your currently configured CLI credentials.']}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sail sdk init config\n"})}),(0,o.jsx)(n.p,{children:'If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a "config.json" for.'}),(0,o.jsx)(n.p,{children:"To pass an additional parameter that states the environment you want to configure, run this command:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sail sdk init config --env devrel\n"})}),(0,o.jsx)(n.h4,{id:"example-configjson",children:'Example "config.json"'}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Manual Configuration"}),(0,o.jsxs)(n.p,{children:['Create a file named "config.json", and provide these key/value pairs: ',(0,o.jsx)(n.code,{children:"ClientID"}),", ",(0,o.jsx)(n.code,{children:"ClientSecret"}),", ",(0,o.jsx)(n.code,{children:"BaseUrl"}),"."]}),(0,o.jsx)(n.h4,{id:"example-configjson-1",children:'Example "config.json"'}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Please ensure this file is ignored in your version control system (ex. .gitignore for git)"})}),"\n",(0,o.jsx)(n.h3,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,o.jsx)(n.p,{children:"You can also store your configuration in environment variables."}),"\n",(0,o.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,o.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n","\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(a.default,{value:"linux_mac",label:"Linux/Mac",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"})})}),(0,o.jsxs)(a.default,{value:"windows",label:"Windows PowerShell",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n"})}),(0,o.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run these commands instead:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"discuss",children:"Discuss"}),"\n",(0,o.jsxs)(n.p,{children:["You can use this SDK to build new tools that extend your Identity Security Cloud platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,o.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(n.p,{children:["To get started using the SDK, refer to the ",(0,o.jsx)(n.a,{href:"/docs/tools/sdk/python/getting-started",children:"Getting Started Guide"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},20398:function(e,n,t){t.d(n,{Z:()=>m});var i=t("85893"),o=t("67294"),s=t("67026"),r=t("69599"),a=t("33057"),l=t("7227");let c="tabList__CuJ",d="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.o5)(),u=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==o&&(h(n),a(t))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:r}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...r,className:(0,s.Z)("tabs__item",d,r?.className,{"tabs__item--active":o===n}),children:t??n},n)})})}function u(e){let{lazy:n,children:t,selectedValue:r}=e,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function p(e){let n=(0,a.Y)(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container",c),children:[(0,i.jsx)(h,{...n,...e}),(0,i.jsx)(u,{...n,...e})]})}function m(e){let n=(0,l.default)();return(0,i.jsx)(p,{...e,children:(0,a.h)(e.children)},String(n))}}}]);