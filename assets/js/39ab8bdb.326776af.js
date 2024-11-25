"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["10316"],{60060:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>r,frontMatter:()=>a});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-spec/connector-spec-initial-value","title":"Initial Value","description":"How to use the sourceConfigInitialValues field","source":"@site/docs/connectivity/saas-connectivity/connector-spec/initialValue.md","sourceDirName":"connectivity/saas-connectivity/connector-spec","slug":"/connectivity/saas-connectivity/connector-spec/initial-value","permalink":"/docs/connectivity/saas-connectivity/connector-spec/initial-value","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-spec/initialValue.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Spec","permalink":"/docs/tags/connector-spec"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"connector-spec-initial-value","title":"Initial Value","pagination_label":"Initial Value","sidebar_label":"Initial Value","keywords":["connectivity","connectors","connector-spec","sourceConfigInitialValues"],"description":"How to use the sourceConfigInitialValues field","slug":"/connectivity/saas-connectivity/connector-spec/initial-value","tags":["Connectivity","Connector Spec"]},"sidebar":"openApiSidebar","previous":{"title":"Card","permalink":"/docs/connectivity/saas-connectivity/connector-spec/card"},"next":{"title":"Key Value","permalink":"/docs/connectivity/saas-connectivity/connector-spec/key-value"}}'),o=n("85893"),c=n("50065");let a={id:"connector-spec-initial-value",title:"Initial Value",pagination_label:"Initial Value",sidebar_label:"Initial Value",keywords:["connectivity","connectors","connector-spec","sourceConfigInitialValues"],description:"How to use the sourceConfigInitialValues field",slug:"/connectivity/saas-connectivity/connector-spec/initial-value",tags:["Connectivity","Connector Spec"]},s=void 0,l={},r=[{value:"How to use the sourceConfigInitialValues in the connector spec",id:"how-to-use-the-sourceconfiginitialvalues-in-the-connector-spec",level:2}];function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-use-the-sourceconfiginitialvalues-in-the-connector-spec",children:"How to use the sourceConfigInitialValues in the connector spec"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to prepopulate a field in the connector spec configuration with an initial value, you can use the ",(0,o.jsx)(t.code,{children:"sourceConfigInitialValues"})," field in the connector spec to specify the prepopulated value. This can be used across all items. All you need to provide is the item's key and its corresponding default value. This is a simple example using a textbox:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"sourceConfigInitialValues": {\n    // Note that the key `airtableURL` is also the key of the item the initial value is provided for\n    "airtableURL": "https://api.airtable.com/v0"\n},\n"sourceConfig": [\n    {\n        "type": "menu",\n        "label": "Configuration",\n        "items": [\n            {\n\n                "type": "section",\n                "sectionTitle": "Authentication",\n                "sectionHelpMessage": "Provide the parameters to connect with the airtable worksheet.",\n                "items": [\n                    {\n                        // The key is what you use to assign initial values to the spec\n                        "key": "airtableURL",\n                        "label": "airtable url",\n                        "required": true,\n                        "type": "text"\n                    }\n                ]\n            }\n        ]\n    }\n]\n'})})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);