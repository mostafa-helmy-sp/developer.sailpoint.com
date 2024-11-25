"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["82629"],{63901:function(e,o,t){t.r(o),t.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>c,assets:()=>p,toc:()=>l,frontMatter:()=>a});var n=JSON.parse('{"id":"tools/sdk/python/python-sdk-delete","title":"Deleting resources with The Python SDK","description":"Learn how to use the Python SDK to delete resources.","source":"@site/docs/tools/sdk/python/deleting-resources.md","sourceDirName":"tools/sdk/python","slug":"/tools/sdk/python/delete","permalink":"/docs/tools/sdk/python/delete","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/deleting-resources.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":4,"frontMatter":{"id":"python-sdk-delete","title":"Deleting resources with The Python SDK","pagination_label":"Delete a resource","sidebar_label":"Delete a resource","sidebar_position":4,"sidebar_class_name":"pythonsdk","keywords":["python","sdk","delete"],"description":"Learn how to use the Python SDK to delete resources.","slug":"/tools/sdk/python/delete","tags":["SDK"]},"sidebar":"openApiSidebar","previous":{"title":"Update a resource","permalink":"/docs/tools/sdk/python/update"},"next":{"title":"Paginate Results","permalink":"/docs/tools/sdk/python/paginate"}}'),s=t("85893"),r=t("50065");let a={id:"python-sdk-delete",title:"Deleting resources with The Python SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"pythonsdk",keywords:["python","sdk","delete"],description:"Learn how to use the Python SDK to delete resources.",slug:"/tools/sdk/python/delete",tags:["SDK"]},i=void 0,p={},l=[];function d(e){let o={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"You can use the SDK to delete resources."}),"\n",(0,s.jsxs)(o.p,{children:["For example, you can run a script that searches by name for a created work group, also known as a ",(0,s.jsx)(o.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html",children:"governance group"}),", and calls the delete method to remove it from your environment."]}),"\n",(0,s.jsxs)(o.p,{children:["This script searches by name for the work group created in the example in ",(0,s.jsx)(o.a,{href:"/docs/tools/sdk/python/create",children:"Creating resources"})," and calls the delete method to remove it from your environment. Copy the script into your Python project to try it out:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'import sailpoint\nimport sailpoint.beta\nfrom sailpoint.beta.models.workgroup_dto import WorkgroupDto\nfrom sailpoint.beta.models.usage_type import UsageType\nfrom sailpoint.beta.models.owner_dto import OwnerDto\nfrom sailpoint.beta.models.json_patch_operation import JsonPatchOperation\nfrom sailpoint.beta.models.json_patch_operation_value import JsonPatchOperationValue\nfrom sailpoint.configuration import Configuration\n\nconfiguration = Configuration()\n\napi_client_beta = sailpoint.beta.ApiClient(configuration)\n\nworkgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)\n\nworkgroup = workgroups_api_instance.list_workgroups(filters=\'name eq "DB Access Governance Group"\')[0]\n\n\ntry:\n    workgroupResponse = workgroups_api_instance.delete_workgroup_with_http_info(workgroup.id)\n    print("The response of GovernanceGroupsApi->delete_workgroup:\\n")\n    print(workgroupResponse)\nexcept Exception as e:\n    print("Exception when calling GovernanceGroupsApi->delete_workgroup: %s\\n" % e)\n'})}),"\n",(0,s.jsx)(o.p,{children:"Run this command to run the code:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"python sdk.py\n"})}),"\n",(0,s.jsxs)(o.p,{children:["The SDK returns the ",(0,s.jsx)(o.code,{children:"deletionStatus"})," with a value of 204."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"The response of GovernanceGroupsApi->patch_workgroup:\n\nstatus_code=204 \nheaders={'Date': 'Wed, 31 Jan 2024 18:37:33 GMT', 'Connection': 'keep-alive', 'Server': 'nginx', 'Vary': 'Access-Control-Request-Headers', 'Cache-Control': 'no-cache, no-store, must-revalidate', 'SLPT-Request-ID': 'acdbe637fc044befbfe0ce16ad2224ad', 'Access-Control-Expose-Headers': 'Retry-After,Connection,SLPT-Request-ID,Date,X-Zuul-ServiceId', 'X-Robots-Tag': 'noindex'} \ndata=None \nraw_data=b''s\n"})})]})}function c(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);