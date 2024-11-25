"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["3236"],{23088:function(t,e,i){i.r(e),i.d(e,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>p,frontMatter:()=>r});var n=JSON.parse('{"id":"tools/sdk/python/python-sdk-retries","title":"Retries with The Python SDK","description":"Learn how to configure retries when using the Python SDK.","source":"@site/docs/tools/sdk/python/retries.md","sourceDirName":"tools/sdk/python","slug":"/tools/sdk/python/retries","permalink":"/docs/tools/sdk/python/retries","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/retries.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":7,"frontMatter":{"id":"python-sdk-retries","title":"Retries with The Python SDK","pagination_label":"Retries","sidebar_label":"Retries","sidebar_position":7,"sidebar_class_name":"pythonsdk","keywords":["py","python","sdk","retry"],"description":"Learn how to configure retries when using the Python SDK.","slug":"/tools/sdk/python/retries","tags":["SDK"]},"sidebar":"openApiSidebar","previous":{"title":"Search","permalink":"/docs/tools/sdk/python/search"},"next":{"title":"Error Handling","permalink":"/docs/tools/sdk/python/error-handling"}}'),o=i("85893"),s=i("50065");let r={id:"python-sdk-retries",title:"Retries with The Python SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","retry"],description:"Learn how to configure retries when using the Python SDK.",slug:"/tools/sdk/python/retries",tags:["SDK"]},a=void 0,l={},p=[];function d(t){let e={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["The Python SDK uses the ",(0,o.jsx)(e.a,{href:"https://urllib3.readthedocs.io/en/stable/reference/urllib3.util.html",children:"urllib3 retry"})," module to support retry logic."]}),"\n",(0,o.jsx)(e.p,{children:"Here is an example of the retry logic, implemented on line 8. With this configuration, if the returned status code from the API is equal to 502, 503, or 504, the SDK will retry the call up to 5 times:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.paginator import Paginator\nimport urllib3\n\nconfiguration = Configuration()\nconfiguration.retries = urllib3.Retry(total=5, status_forcelist=[ 502, 503, 504 ])\n\napi_client = sailpoint.v3.ApiClient(configuration)\n\naccounts = Paginator.paginate(sailpoint.v3.AccountsApi(api_client).list_accounts, result_limit=1000, limit=250)\n\nprint(accounts)\n"})}),"\n",(0,o.jsx)(e.p,{children:"Run this command to run the code:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"python sdk.py\n"})})]})}function h(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}}}]);