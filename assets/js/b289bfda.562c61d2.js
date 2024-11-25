"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["98109"],{72715:function(e,i,l){l.r(i),l.d(i,{metadata:()=>t,contentTitle:()=>d,default:()=>c,assets:()=>a,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"extensibility/rules/cloud-rules/buildmap-rule","title":"BuildMap Rule","description":"This rule manipulates raw input data provided by the rows and columns in a file.","source":"@site/docs/extensibility/rules/cloud-rules/build_map_rule.md","sourceDirName":"extensibility/rules/cloud-rules","slug":"/extensibility/rules/cloud-rules/buildmap-rule","permalink":"/docs/extensibility/rules/cloud-rules/buildmap-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/build_map_rule.md","tags":[{"inline":true,"label":"Rules","permalink":"/docs/tags/rules"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"frontMatter":{"id":"buildmap-rule","title":"BuildMap Rule","pagination_label":"BuildMap Rule","sidebar_label":"BuildMap Rule","sidebar_class_name":"buildMapRule","keywords":["cloud","rules"],"description":"This rule manipulates raw input data provided by the rows and columns in a file.","slug":"/extensibility/rules/cloud-rules/buildmap-rule","tags":["Rules"]},"sidebar":"openApiSidebar","previous":{"title":"Before Provisioning Rule","permalink":"/docs/extensibility/rules/cloud-rules/before-provisioning-rule"},"next":{"title":"Correlation Rule","permalink":"/docs/extensibility/rules/cloud-rules/correlation-rule"}}'),n=l("85893"),s=l("50065");let r={id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file.",slug:"/extensibility/rules/cloud-rules/buildmap-rule",tags:["Rules"]},d="BuildMap Rule",a={},o=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}];function u(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"buildmap-rule",children:"BuildMap Rule"})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data. Use this rule to create a new value by combining two columns together. For example, if one column was ",(0,n.jsx)(i.code,{children:"access"})," and another ",(0,n.jsx)(i.code,{children:"permissions"})," you could combine these together to create an entitlement ",(0,n.jsx)(i.code,{children:"admin-read"}),"."]}),"\n",(0,n.jsxs)(i.admonition,{title:"This rule runs in the cloud, but it's really a connector rule because it executes against the DelimitedFileConnector. :::",type:"info",children:[(0,n.jsx)(i.h2,{id:"execution",children:"Execution"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and has read-only access to the records from the Delimited File being imported. However, it doesn't have access to on-premise sources or connectors."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Rule Execution",src:l(49382).Z+"",width:"1594",height:"635"})}),(0,n.jsx)(i.h2,{id:"input",children:"Input"}),(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Argument"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Purpose"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"cols"}),(0,n.jsx)(i.td,{children:"java.util.List"}),(0,n.jsx)(i.td,{children:"Ordered list of the column names from the file\u2019s header records or specified columns list."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"record"}),(0,n.jsx)(i.td,{children:"java.util.List"}),(0,n.jsx)(i.td,{children:"Ordered list of the values for the current record, parsed based on the specified delimiter."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"application"}),(0,n.jsx)(i.td,{children:"System.Collections.Hashtable"}),(0,n.jsx)(i.td,{children:"Map of the application configuration."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"schema"}),(0,n.jsx)(i.td,{children:"sailpoint.object.Schema"}),(0,n.jsx)(i.td,{children:"Reference to the schema object for the delimited file source being read."})]})]})]}),(0,n.jsx)(i.h2,{id:"template",children:"Template"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),(0,n.jsx)(i.h2,{id:"example",children:"Example"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>This basic rule performs the combines 2 values into a single attribute.</Description>\n  <Source><![CDATA[\n\n     import sailpoint.connector.DelimitedFileConnector;\n\n     Map map = DelimitedFileConnector.defaultBuildMap( cols, record );\n     String access = (String) map.get( "access" );\n     String permission = (String) map.get( "permission" );\n\n     if ( access != null && permission != null ) {\n          map.remove("access");\n          map.remove("permission");\n          map.put("access", access + " - " + permission);\n     }\n     return map;\n\n  ]]></Source>\n</Rule>\n'})})]})]})}function c(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},49382:function(e,i,l){l.d(i,{Z:function(){return t}});let t=l.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);