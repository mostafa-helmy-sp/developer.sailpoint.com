"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["24667"],{20643:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"connectivity/saas-connectivity/in-depth/testing","title":"Testing","description":"Testing SaaS Connectivity.","source":"@site/docs/connectivity/saas-connectivity/in-depth/testing.md","sourceDirName":"connectivity/saas-connectivity/in-depth","slug":"/connectivity/saas-connectivity/in-depth/testing","permalink":"/docs/connectivity/saas-connectivity/in-depth/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/testing.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1732548090000,"sidebarPosition":7,"frontMatter":{"id":"testing","title":"Testing","pagination_label":"Testing","sidebar_label":"Testing","sidebar_position":7,"sidebar_class_name":"testing","keywords":["connectivity","connectors","testing"],"description":"Testing SaaS Connectivity.","slug":"/connectivity/saas-connectivity/in-depth/testing","tags":["Connectivity"]},"sidebar":"openApiSidebar","previous":{"title":"Handling Rate Limits","permalink":"/docs/connectivity/saas-connectivity/in-depth/handling-rate-limits"},"next":{"title":"Tools","permalink":"/docs/tools"}}'),i=n("85893"),o=n("50065");let a={id:"testing",title:"Testing",pagination_label:"Testing",sidebar_label:"Testing",sidebar_position:7,sidebar_class_name:"testing",keywords:["connectivity","connectors","testing"],description:"Testing SaaS Connectivity.",slug:"/connectivity/saas-connectivity/in-depth/testing",tags:["Connectivity"]},c=void 0,r={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Testing Techniques",id:"testing-techniques",level:2},{value:"Test a method and evaluate the response using <code>expect</code>",id:"test-a-method-and-evaluate-the-response-using-expect",level:3},{value:"Test a method to ensure it calls another method using <code>spyOn</code>",id:"test-a-method-to-ensure-it-calls-another-method-using-spyon",level:3},{value:"Setting up Mock Services",id:"setting-up-mock-services",level:2},{value:"Define json mock objects",id:"define-json-mock-objects",level:3},{value:"Use the mock in your tests",id:"use-the-mock-in-your-tests",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["When you set up a new project, the following test files are created: ",(0,i.jsx)(t.code,{children:"index.spec.ts"})," and ",(0,i.jsx)(t.code,{children:"my-client.spec.ts"}),". Execute the tests immediately using npm test."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'$ npm run test\n\n> test-project-5@0.1.0 test\n> jest --coverage\n\n PASS  src/my-client.spec.ts\n PASS  src/index.spec.ts\n--------------|---------|----------|---------|---------|-------------------\nFile          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s\n--------------|---------|----------|---------|---------|-------------------\nAll files     |      72 |      100 |      75 |   70.83 |\n index.ts     |   56.25 |      100 |      50 |   53.33 | 29-56\n my-client.ts |     100 |      100 |     100 |     100 |\n--------------|---------|----------|---------|---------|-------------------\n\nTest Suites: 2 passed, 2 total\nTests:       7 passed, 7 total\nSnapshots:   0 total\nTime:        1.937 s\nRan all test suites.\n{"level":"INFO","message":"Running test connection"}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You can also view the results in an html report by viewing the ",(0,i.jsx)(t.code,{children:"index.html"})," file inside the ",(0,i.jsx)(t.code,{children:"coverage/lcov-report"})," folder:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Account List",src:n(5623).Z+"",width:"828",height:"286"})," ",(0,i.jsx)(t.img,{alt:"Account List",src:n(97054).Z+"",width:"845",height:"793"})]}),"\n",(0,i.jsx)(t.h2,{id:"testing-techniques",children:"Testing Techniques"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://jestjs.io/docs/getting-started",children:"Jest"})," is a testing framework provided for javascript that focuses on simplicity. CLI includes it when it generates the project. It is recommended to use Jest to test your code."]}),"\n",(0,i.jsx)(t.p,{children:"Testing your code is important because it can highlight implementation issues before they get into production. If your tests are setup with good descriptions, the tests can also help explain why certain conditions are important in the code, so if a new developer breaks a test, he or she will know what broke and why the functionality is important."}),"\n",(0,i.jsx)(t.p,{children:"If you have good tests setup, then you can quickly identify and fix changes or updates that occur in dependent sources."}),"\n",(0,i.jsxs)(t.p,{children:["Jest provides ",(0,i.jsx)(t.a,{href:"https://jestjs.io/docs/using-matchers",children:"many different ways to test your code"}),". Some techniques are listed below:"]}),"\n",(0,i.jsxs)(t.h3,{id:"test-a-method-and-evaluate-the-response-using-expect",children:["Test a method and evaluate the response using ",(0,i.jsx)(t.code,{children:"expect"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"it('get users populates correct fields', async () => {\n  // Execute the method\n  let res = await discourseClient.getUsers();\n\n  // Check the response, and make sure it is an array with exactly 2 elements\n  expect(res.length).toBe(2);\n\n  // Evaluate the response email and ensure it matches the expected result\n  expect(res[0].email === 'test.test@test.com');\n});\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 4 executes the method."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 7 asserts that the response is an array with 2 elements."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 10 evaluates the email field in the array to ensure it matches the expected result."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"test-a-method-to-ensure-it-calls-another-method-using-spyon",children:["Test a method to ensure it calls another method using ",(0,i.jsx)(t.code,{children:"spyOn"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'  it(\'password is generated when not provided\', async () => {\n\n    // Create the spy for later use. We want to know details about this method.\n    const spy = jest.spyOn(DiscourseClient.prototype as any, "generateRandomPassword")\n\n    // Execute the method\n    let res = await discourseClient.createUser({ "email": "", "username": "test" })\n\n    // Validate that the internal method "generateRandomPassword" was called\n    expect(spy).toBeCalled();\n\n    // Validate the email field matches the expected result\n    expect(res.email === \'test.test@test.com\')\n  })\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 4 sets up the spy. \u201CgenerateRandomPassword\u201D is an internal method that gets called when the password is not provided."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 7 executes the method."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Line 10 checks the spy to ensure that the internal method was called."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-mock-services",children:"Setting up Mock Services"}),"\n",(0,i.jsx)(t.p,{children:"The easiest way to mock your client is to set up a mock service that returns data just like your service would in production so you can test all your functions and data manipulation in your unit tests."}),"\n",(0,i.jsx)(t.p,{children:"Mocks help test your code without actually invoking your service and allow you to simulate the kind of response your client expects to receive. They can also help you pinpoint where failures occur in case something changes on your service. By using a mock service, you can test your entire application without connecting to your service."}),"\n",(0,i.jsx)(t.p,{children:"Create a mock file Jest provides a way to set up a mock service. It stores your mock files in a folder called __mocks__. If you name your typescript files the exact same as the files they are mocking, those mock implementations will be called instead when your unit tests are running. In the following example, a mock has been created to simulate calls to the airtable client:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/__mocks__/airtable.ts",children:"airtable.ts"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import { AttributeChange, CompoundKeyType, ConnectorError, ConnectorErrorType, SimpleKeyType, StdAccountCreateInput, StdAccountDiscoverSchemaOutput } from "@sailpoint/connector-sdk"\nimport { AirtableAccount } from "../models/AirtableAccount"\nimport { AirtableEntitlement } from "../models/AirtableEntitlement"\nimport { InvalidConfigurationError } from "../errors/invalid-configuration-error"\nimport accountJson from "./account.json"\nimport entitlementJson from "./entitlement.json"\nimport schemaJson from "./schema.json"\n\nexport class AirtableClient {\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        // Following properties actually do not exist in the config -- it just serves as an example.\n        if (config.apiKey == null) {\n            throw new InvalidConfigurationError(\'token must be provided from config\')\n        }\n        if (config.airtableBase == null) {\n            throw new InvalidConfigurationError(\'airtableBase base id needed\')\n        }\n    }\n\n    async getAllAccounts(): Promise<AirtableAccount[]> {\n        const recordArray: Array<AirtableAccount> = []\n        const account = Object.assign(new AirtableAccount(), accountJson)\n        recordArray.push(account)\n        return recordArray\n    }\n\n    async changeAccount(account: AirtableAccount, changes: AttributeChange): Promise<AirtableAccount> {\n        account.updateFieldByName(changes.attribute, changes.value, changes.op)\n\n        return account\n    }\n\n    async getAllEntitlements(): Promise<AirtableEntitlement[]> {\n\n            const recordArray: Array<AirtableEntitlement> = []\n            const entitlement = Object.assign(new AirtableEntitlement(), entitlementJson)\n            recordArray.push(entitlement)\n            return recordArray\n\n    }\n\n    async getAccount(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableAccount> {\n        const id = <SimpleKeyType>identity\n\n        const account = Object.assign(new AirtableAccount(), accountJson)\n        if (id.simple.id === "1234") {\n            return account\n        } else {\n            throw new ConnectorError("Account not found", ConnectorErrorType.NotFound)\n        }\n\n    }\n\n    async getAccountSchema(): Promise<StdAccountDiscoverSchemaOutput> {\n            return schemaJson\n    }\n\n    async deleteAccount(airTableid: string): Promise<Record<string, never>> {\n        return {}\n    }\n\n    async createAccount(input: StdAccountCreateInput): Promise<AirtableAccount> {\n        return Object.assign(new AirtableAccount(), accountJson)\n    }\n\n    async getEntitlement(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableEntitlement> {\n            return Object.assign(new AirtableEntitlement(), entitlementJson)\n    }\n\n    async testConnection(): Promise<any> {\n        return {}\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:['The method signatures are exactly the same on this mock file as the signature sin the "real" ',(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"}),". The only difference is that the response objects from all the calls are made without actually calling any external dependencies, so it can be run quickly in a unit test without having to make api calls to a real client"]}),"\n",(0,i.jsx)(t.h3,{id:"define-json-mock-objects",children:"Define json mock objects"}),"\n",(0,i.jsxs)(t.p,{children:["The responses are stored in directly imported json files. This helps keep the code focused on the logic and allows the response objects to be more easily generated directly from a tool like Postman without requiring any major formatting of the response. Enable this situation by setting ",(0,i.jsx)(t.code,{children:'"resolveJsonModule": true'})," in your ",(0,i.jsx)(t.code,{children:"tsconfig.json"}),". The following response file is an example:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/__mocks__/account.json",children:"account.json"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "airtableId": "1234",\n  "displayName": "Test User",\n  "email": "test@test.com",\n  "id": "1234",\n  "enabled": true,\n  "locked": false,\n  "department": "accounting",\n  "firstName": "test",\n  "lastName": "user",\n  "password": "password1234",\n  "entitlments": ["ent1", "ent2"]\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"use-the-mock-in-your-tests",children:"Use the mock in your tests"}),"\n",(0,i.jsxs)(t.p,{children:["The mock is defined in the test file, and Jest does the rest. Jest overrides all the calls to use the methods in the ",(0,i.jsx)(t.code,{children:"__mocks__"})," folder."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/test/index.spec.ts",children:"index.spec.ts"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import {connector} from '../src/index';\nimport {StandardCommand} from '@sailpoint/connector-sdk';\nimport {PassThrough} from 'stream';\n\n// setup your mock object\njest.mock('../src/airtable');\n"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5623:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/testing1-35e5b9a59e89daa364b1caa0d46ccf39.png"},97054:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/testing2-f9c4702bc532d2f2f01c62addc4c840a.png"}}]);