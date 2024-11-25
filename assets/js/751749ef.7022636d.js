"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["33840"],{88421:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>a});var n=JSON.parse('{"id":"tools/sdk/powershell/powershell-sdk-pagination","title":"Paginate results with the PowerShell SDK","description":"Learn how to paginate results using the PowerShell SDK in this guide.","source":"@site/docs/tools/sdk/powershell/pagination.md","sourceDirName":"tools/sdk/powershell","slug":"/tools/sdk/powershell/paginate","permalink":"/docs/tools/sdk/powershell/paginate","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/pagination.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":5,"frontMatter":{"id":"powershell-sdk-pagination","title":"Paginate results with the PowerShell SDK","pagination_label":"PowerShell SDK","sidebar_label":"Paginate Results","sidebar_position":5,"sidebar_class_name":"powershellsdk","keywords":["powershell","sdk","paginate"],"description":"Learn how to paginate results using the PowerShell SDK in this guide.","slug":"/tools/sdk/powershell/paginate","tags":["SDK"]},"sidebar":"openApiSidebar","previous":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/delete"},"next":{"title":"PowerShell SDK","permalink":"/docs/tools/sdk/powershell/search"}}'),i=s("85893"),o=s("50065");let a={id:"powershell-sdk-pagination",title:"Paginate results with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","paginate"],description:"Learn how to paginate results using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/paginate",tags:["SDK"]},r=void 0,l={},d=[];function p(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to ",(0,i.jsx)(t.a,{href:"/docs/api/standard-collection-parameters/#paginating-results",children:"Paginating Results"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Pagination is implemented with the SDK in the following code block on line 8:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",metastring:"showLineNumbers",children:'$Parameters = @{\n    "Filters" = \'name co "Andrew"\'\n}\n\n# Accounts List\ntry {\n\n    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Invoke-Paginate"})," cmdlet takes a few paramters. The first is the cmdlet you wish to call."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"-Function"})," specifies the name of the cmdlet you wish to call. This only works on list endpoints."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"-Increment"})," specifies the number of results returned in each call to the endpoint. Defaults to 250."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"-Limit"})," specifies the total number of results you can return, 1000."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"-Parameters"})," specifies a hashtable of additional values passed to the API endpoint. You would use this for ",(0,i.jsx)(t.code,{children:"filters"}),", ",(0,i.jsx)(t.code,{children:"sorters"}),", and any other query parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also provide an ",(0,i.jsx)(t.code,{children:"-InitialOffset"})," value to specify the record number to start the request on. For example, you can provide add ",(0,i.jsx)(t.code,{children:"-InitialOffset 10"})," to start getting accounts from 11 instead of 0."]}),"\n",(0,i.jsxs)(t.p,{children:["To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,i.jsx)(t.a,{href:"/docs/api/standard-collection-parameters/#paginating-results",children:"Paginating Results"}),"."]})]})}function c(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);