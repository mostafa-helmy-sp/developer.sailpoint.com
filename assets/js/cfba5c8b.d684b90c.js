"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["69227"],{12540:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>E,default:()=>I,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"reporting/secure-data-share/secure-data-share-er-diagram","title":"Secure Data Share ER Diagram","description":"Secure Data Share Identity Entity Relationship Diagram","source":"@site/docs/reporting/secure-data-share/identity-er-diagram.md","sourceDirName":"reporting/secure-data-share","slug":"/reporting/sds-er-diagram","permalink":"/docs/reporting/sds-er-diagram","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/identity-er-diagram.md","tags":[{"inline":true,"label":"SecureDataShare","permalink":"/docs/tags/secure-data-share"},{"inline":true,"label":"SDS","permalink":"/docs/tags/sds"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":1,"frontMatter":{"id":"secure-data-share-er-diagram","title":"Secure Data Share ER Diagram","pagination_label":"Secure Data Share ER Diagram","sidebar_label":"Identity Entity Relationship Diagram","sidebar_position":1,"sidebar_class_name":"secureDataShare","keywords":["data listing","data share","secure data sharing"],"description":"Secure Data Share Identity Entity Relationship Diagram","slug":"/reporting/sds-er-diagram","tags":["SecureDataShare","SDS"],"hide_table_of_contents":true},"sidebar":"openApiSidebar","previous":{"title":"Secure Data Share","permalink":"/docs/reporting/secure-data-share"},"next":{"title":"Secure Data Share Audit ER Diagram","permalink":"/docs/reporting/sds-audit-er-diagram"}}'),i=n("85893"),o=n("50065"),s=n("23762");let r={id:"secure-data-share-er-diagram",title:"Secure Data Share ER Diagram",pagination_label:"Secure Data Share ER Diagram",sidebar_label:"Identity Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Identity Entity Relationship Diagram",slug:"/reporting/sds-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},E="Secure Data Share Identity ER Diagram",c={},d=[];function T(e){let t={h1:"h1",header:"header",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"secure-data-share-identity-er-diagram",children:"Secure Data Share Identity ER Diagram"})}),"\n",(0,i.jsx)(s.Z,{diagram:'erDiagram\nIDENTITY_ACCOUNTS {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "unique ID of the identity this account is correlated to"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntimestamp_ntz CREATED_DATE "date when the Identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntext ACCOUNT_ID PK "unique ID of the account"\ntext NATIVE_IDENTITY "unique ID of the account generated by the source system"\ntext ACCOUNT_DISPLAY_NAME "Human-readable display name of the Account"\ntext SOURCE_ID "unique ID of the source this account belongs to"\ntext SOURCE_DISPLAY_NAME "display name of the source this account belongs to"\ntext SOURCE_TYPE "Type of the Source Ex: Azure Active Directory, Okta etc."\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nIDENTITY_ENTITLEMENTS {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id for the identity"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntimestamp_ntz CREATED_DATE "date when the Identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntext ENTITLEMENT_ID PK "unique ID of the entitlement"\ntext SOURCE_DISPLAY_NAME "display name of the source this entitlement belongs to"\ntext ENTITLEMENT_ATTRIBUTE "entitlement attribute name"\ntext ENTITLEMENT_VALUE "value of the entitlement"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nIDENTITY {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id for the identity"\ntext NAME "Name of the Object"\ntimestamp_ntz CREATED_DATE "date when the identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntimestamp_ntz DELETED_DATE "date when the identity was deleted"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntext JOB_TITLE "Job Title assigned to the Identity"\ntext LOCATION "Location of the Identity"\ntext LOCATION_CODE "Location code of the Identity"\ntext DEPARTMENT "Department of the identity"\ntext EMAIL "The email address of the identity"\ntext MANAGER "manager of the identity"\ntext LIFECYCLE_STATE "name of the lifecycle state Ex: Active, leaver, dormant etc."\ntimestamp_ntz SYNC_DATE "When the row is last synced"\n}\nIDENTITY_ROLES {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id for the identity"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntimestamp_ntz CREATED_DATE "date when the Identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntext ROLE_ID PK "Unique Id for the Role"\ntext ROLE_NAME "Name of the Role Object"\ntext ROLE_DISPLAY_NAME "Human-readable display name of the role"\ntimestamp_ntz SYNC_DATE "When the row is last synced"\n}\nIDENTITY_ACCESS_PROFILES {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id for the identity"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntimestamp_ntz CREATED_DATE "date when the Identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntext ACCESS_PROFILE_ID PK "Unique Id for the Access Profile"\ntext ACCESS_PROFILE_NAME "Name of the Access Profile Object"\ntext ACCESS_PROFILE_DISPLAY_NAME "Human-readable display name of the Access Profile"\ntimestamp_ntz SYNC_DATE "When the row is last synced"\n}\nIDENTITY_APPS {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id for the identity"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntimestamp_ntz CREATED_DATE "date when the Identity was created"\ntimestamp_ntz UPDATED_DATE "date when the identity was modified"\ntext APP_ID PK "Unique Id for the APP"\ntext APP_DISPLAY_NAME "Human-readable display name of the APP"\ntimestamp_ntz SYNC_DATE "When the row is last synced"\n}\nACCESS_PROFILE {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Access Profile"\ntext NAME "Name of the object in ISC"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntext DESCRIPTION "Description of the object"\ntimestamp_ntz CREATED_DATE "date when the object was created"\ntimestamp_ntz UPDATED_DATE "date when the object was modified"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext SOURCE_ID "Unique Id of the source or application"\nboolean IS_ASSIGNABLE "To check if the object can be assigned to an Identity"\narray ENTITLEMENTS "List of entitlements associated with the Access Profile"\ntext OWNER_IDENTITY_ID "Identity that owns the object"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nACCESS_REQUEST {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Access Profile"\ntext NAME "Name of the object in ISC"\ntimestamp_ntz CREATED_DATE "date when the object was created"\ntimestamp_ntz UPDATED_DATE "date when the object was modified"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext TARGET_ID "Identity ID whose access is getting updated"\ntext REQUESTER_ID "Identity ID who raised this access request"\ntimestamp_ntz END_DATE "date when the access request was completed"\ntext EXECUTION_STATUS "Execution status at ISC Ex: Completed, Terminated etc."\ntext COMPLETION_STATUS "Completion status Ex: Success, Failure etc."\ntext PRIORITY "one of low, Normal and high"\ntext TYPE " type of access item or Identity items requested"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nCERTIFICATION {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Certification"\ntext NAME "Name of the object in ISC"\ntimestamp_ntz CREATED_DATE "date when the object was created"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext SOURCE_ID "Unique Id of the source or application"\ntext SIGNER_ID "Signer  assigned to the certification"\ntext MANAGER_ID "Manager - reviewing the certification"\ntext CAMPAIGN_ID "Campaign the certification is Spawned from"\ntext ORIGINAL_CERTIFICATION_ID "original certification before reassignment"\nboolean COMPLETE "Status of the certification"\ntext PHASE "Current Phase like Active, Staged ,end etc."\nboolean IS_BULK_REASSIGNMENT "Whether the certification is part of a bulk reassignment"\ntimestamp_ntz DUE_DATE "when the certification needs to be reviewed"\ntimestamp_ntz SIGNED_DATE "when the certification was actually signed"\ntimestamp_ntz FINISHED_DATE "when the certification was actually finished"\ntimestamp_ntz EXPIRATION_DATE "When the certification will expire"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nENTITLEMENT {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Entitlement"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntext DESCRIPTION "Description of the object"\ntimestamp_ntz DELETED_DATE "date when the enitlement was deleted from the source"\ntext SOURCE_ID "Unique Id of the source or application"\ntext ATTRIBUTE "Attribute name that defines the entitlement"\ntext VALUE "Value of the attribute"\ntext TYPE "Group, customRole, PermissionSet etc."\ntext IS_REQUESTABLE "To check if the object can be requested by other access items"\ntext OWNER_IDENTITY_ID "Identity that owns the object"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nROLE {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Role"\ntext NAME "Name of the object in ISC"\ntimestamp_ntz CREATED_DATE "date when the object was created"\ntimestamp_ntz UPDATED_DATE "date when the object was modified"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntext DESCRIPTION "Description of the object"\nboolean IS_ASSIGNABLE "To check if the object can be assigned to an Identity"\narray INHERITING_ROLES "List of Inheriting roles"\narray ACCESS_PROFILES "List of Access Profiles associated with the Role"\narray ENTITLEMENTS "List of entitlements associated with the Role"\ntext OWNER_IDENTITY_ID "Identity that owns the object"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nCERTIFICATION_ITEM {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the certification item"\ntimestamp_ntz CREATED_DATE "date when the object was created"\ntimestamp_ntz UPDATED_DATE "date when the object was modified"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext IDENTITY_ID "Identity to which the access is reviewed for"\ntext REVIEWER_ID "Identity who is reviewing the access"\ntext ENTITLEMENT_ID "Entitlement that is being reviewed"\ntext ROLE_ID "Role that is being reviewed"\ntext CERTIFICATION_ID "certification from where the item spawned"\ntext ACCOUNT_ID "Account corresponding to the Identity"\ntext SOURCE_ID "source or application related to account/entitlement"\ntext REVIEWED_ID "Who actually reviewed the access item"\ntext REVIEWED_TYPE "What type of access item was reviewed Ex: Account, Role, Entitlement etc."\ntext TYPE "Type of certification item Ex: Bundle, Exception, Account Etc."\ntext SUB_TYPE "Assocaited Sub_type for each of the type"\ntimestamp_ntz COMPLETED_DATE "time the access item certification was completed"\ntimestamp_ntz DECISION_DATE "time the decision was submitted on ISC"\nnumber APPROVED "Whether the item was approved(1) or rejected(0)"\ntext STATUS "Status of the certification item"\ntext DECISION "Decision taken by reviewer on the access item Ex: Approved, Mitigated, remediated etc."\nboolean BULK "decision made was part of bulk selection"\nboolean REMEDIATED "True when the decision was remediated"\nboolean PRIVILEGED "if any of the access items are privileged"\ntext REMEDIATION_ACTION "Assocaited action on remediation"\ntimestamp_ntz MITIGATION_EXPIRATION "Time when the decision to mitigate was set to expire"\ntext NATIVE_IDENTITY "Identity from the source"\ntext INSTANCE "instance"\nboolean ACCOUNT_ONLY "if only account is reviewed without any access items"\nboolean NEW_ACCESS "if the access item is new"\ntext POLICY_NAME "Policy if any"\ntext CONSTRAINT_NAME "Constraint if any"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nIDENTITY_REQUEST_ITEM {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext IDENTITY_REQUEST_ITEM_ID "Unique Id for the identity request item"\ntext IDENTITY_REQUEST_ITEM_DISPLAY_NAME "Human-readable display name of the object"\ntext IDENTITY_REQUEST_ITEM_NAME "Name of the access item or account"\ntext IDENTITY_REQUEST_ITEM_VALUE "Value of corresponding access item or account"\ntext OPERATION "What type of operation was performed on the Identity or account"\nnumber APPROVED "Whether the item was approved(1) or rejected(0)"\nnumber REJECTED "Whether the item was approved(1) or rejected(0)"\ntext PROVISIONING_STATE "Provisioning state Ex: Committed, Pending etc."\ntext EXPANSION_CAUSE "Role or ProvisioningPolicy that gets added"\nnumber RETRIES "Number of retries"\ntimestamp_ntz IDENTITY_REQUEST_ITEM_START_DATE "date request has started"\ntimestamp_ntz IDENTITY_REQUEST_ITEM_END_DATE "date request has ended"\ntimestamp_ntz IDENTITY_REQUEST_ITEM_CREATED_DATE "Initial date when the item is created"\ntext APPROVER_ID "Identity ID who approved the item"\ntext INSTANCE "specific instance where the account exists"\ntext NATIVE_IDENTITY "Identity from the source"\ntext ACCESS_REQUEST_ID "unique identifier of the access request"\ntext SOURCE_ID "Unique Id of the source or application"\ntext ENTITLEMENT_ID "Unique Id for the Entitlement"\ntext ROLE_ID "Unique Id for the Role"\ntext PROVISIONING_ENGINE "Source or connector used to provision"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nSOURCE {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID "Unique Id for the Source or application"\ntext NAME "Name of the Source or application"\ntimestamp_ntz DELETED_DATE "date when the object was deleted"\ntext DISPLAY_NAME "Human-readable display name of the object"\ntext TYPE "Type of the Source or Application"\ntext CONNECTOR "Connector from where the source is created"\ntimestamp_ltz SYNC_DATE "When the row is last synced"\n}\nIDENTITY ||--|{ IDENTITY_ACCOUNTS: "has and owns"\nIDENTITY ||--o{ IDENTITY_ENTITLEMENTS: "associated to and owns"\nIDENTITY ||--o{ IDENTITY_ROLES: "associated to and owns"\nIDENTITY ||--o{ IDENTITY_ACCESS_PROFILES: "associated to and owns"\nIDENTITY ||--o{ IDENTITY_APPS: "assocaited with"\nACCESS_PROFILE ||--o{ IDENTITY_ACCESS_PROFILES: "associated to"\nACCESS_PROFILE }o--|| IDENTITY: "Owned by"\nENTITLEMENT ||--o{ ACCESS_PROFILE: "assocaited with"\nENTITLEMENT ||--o{ IDENTITY_ENTITLEMENTS: "associated to"\nENTITLEMENT }o--|| IDENTITY: "Owned by"\nENTITLEMENT ||--o{ ROLE: "assocaited with"\nROLE ||--o{ IDENTITY_ROLES: "associated to"\nROLE }o--|| IDENTITY: "Owned by"\nACCESS_REQUEST ||--|| IDENTITY: "contains - requested by and for"\nCERTIFICATION ||--|{ IDENTITY: "contains"\nCERTIFICATION_ITEM ||--|| IDENTITY: "contains"\nCERTIFICATION_ITEM ||--o| ROLE: "contains"\nCERTIFICATION_ITEM ||--o| ENTITLEMENT: "contains"\nCERTIFICATION ||--|{ CERTIFICATION_ITEM: "contains"\nIDENTITY_REQUEST_ITEM ||--|| IDENTITY: "contains - requested for, reviewed or approved by"\nIDENTITY_REQUEST_ITEM ||--o| ROLE: "contains - add or remove"\nIDENTITY_REQUEST_ITEM ||--o| ENTITLEMENT: "contains - add or remove"\nACCESS_REQUEST ||--|{ IDENTITY_REQUEST_ITEM: "contains"\nSOURCE ||--|{ IDENTITY_ACCOUNTS: "contains"\nSOURCE ||--|{ ENTITLEMENT: "contains"\n'})]})}function I(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}},23762:function(e,t,n){n.d(t,{Z:()=>c});var a=n("85893"),i=n("67294"),o=n("41213"),s=n("4757");let r="zoomIn_Zi5X",E="mermaidContainer_KO9S";function c(e){let t,n,{children:c,diagram:d}=e;o.N.contentLoaded();let[T,I]=i.useState(0),[h,m]=i.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[_,D]=i.useState({x:0,y:0}),[l,A]=i.useState(!1);function N(e){e.screenX?m({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:_.x,offsetY:_.y}):m({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:_.x,offsetY:_.y}),D({x:_.x,y:_.y})}function u(e){m({cursor:"grab",clickX:0,clickY:0})}function S(e){"grabbing"===h.cursor&&(e.screenX?D({x:h.clickX-e.screenX+h.offsetX,y:h.clickY-e.screenY+h.offsetY}):D({x:h.clickX-e.changedTouches[0].screenX+h.offsetX,y:h.clickY-e.changedTouches[0].screenY+h.offsetY}))}return i.useEffect(()=>{let e=!1;return setTimeout(()=>{!e&&A(!0)},100),()=>{e=!0}}),!0===l?(n=(0,a.jsx)("div",{}),t=(0,a.jsx)("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-_.y+"px",left:-_.x+"px",width:"calc(100% + "+T+"px)",maxHeight:"1000px"},children:d})):(n=(0,a.jsx)("div",{children:"Diagram Loading ..."}),t=(0,a.jsx)("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-_.y+"px",left:-_.x+"px",width:"calc(100% + "+T+"px)",maxHeight:"1000px"},children:d})),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{className:r,onClick:e=>{var t;return t=0,void I(T+300)},src:(0,s.default)("/icons/magnifying-glass-plus-regular.svg")}),(0,a.jsx)("img",{className:r,onClick:e=>{var t;return t=e,void(I(0),m({cursor:"grab",clickX:t.screenX,clickY:t.screenY,offsetX:0,offsetY:0}),D({x:0,y:0}))},src:(0,s.default)("/icons/house-regular.svg")}),(0,a.jsx)("img",{className:r,onClick:e=>{var t;return t=0,void I(T-300)},src:(0,s.default)("/icons/magnifying-glass-minus-regular.svg")}),(0,a.jsxs)("div",{style:{cursor:h.cursor},className:E,onMouseMove:e=>S(e),onTouchMove:e=>S(e),onMouseDown:e=>N(e),onTouchStart:e=>N(e),onMouseUp:e=>u(e),onTouchEnd:e=>u(e),onMouseLeave:e=>u(e),children:[n,t]})]})}}}]);