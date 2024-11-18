"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9991],{6144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(4848),r=t(8453);const s={sidebar_position:3},o="Install Judge",l={id:"install-online-judge/install-judge",title:"Install Judge",description:"Original source: H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t h\u1ec7 th\u1ed1ng ch\u1ea5m \u0111i\u1ec3m tr\u1ef1c tuy\u1ebfn VNOJ s\u1eed d\u1ee5ng Docker",source:"@site/docs/install-online-judge/install-judge.md",sourceDirName:"install-online-judge",slug:"/install-online-judge/install-judge",permalink:"/tempdocs/docs/install-online-judge/install-judge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install Site",permalink:"/tempdocs/docs/install-online-judge/install-site"},next:{title:"Cloudflare IP Update",permalink:"/tempdocs/docs/install-online-judge/cloudflare-ip-update"}},d={},a=[{value:"Install docker",id:"install-docker",level:2},{value:"Setting up judge configuration on admin site",id:"setting-up-judge-configuration-on-admin-site",level:2},{value:"Create compilation environment",id:"create-compilation-environment",level:2},{value:"Create judge on the server",id:"create-judge-on-the-server",level:2},{value:"Build docker image",id:"build-docker-image",level:2},{value:"Check the status of the judge",id:"check-the-status-of-the-judge",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"install-judge",children:"Install Judge"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Original source:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/VietThienTran/DeploymentTools/blob/main/VNOJ/readme.md",children:"H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t h\u1ec7 th\u1ed1ng ch\u1ea5m \u0111i\u1ec3m tr\u1ef1c tuy\u1ebfn VNOJ s\u1eed d\u1ee5ng Docker"})," ",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(n.strong,{children:"Author:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/VietThienTran",children:"Tr\u1ea7n Vi\u1ebft Thi\u1ec7n"})]})}),"\n",(0,i.jsx)(n.h2,{id:"install-docker",children:"Install docker"}),"\n",(0,i.jsxs)(n.p,{children:["Find out more at ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/install/linux/",children:"Install the Compose plugin"}),"!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:"$ sudo apt-get update\r\n$ sudo apt-get install docker-compose-plugin\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-judge-configuration-on-admin-site",children:"Setting up judge configuration on admin site"}),"\n",(0,i.jsxs)(n.p,{children:["Access your online judge admin site and navigate to the ",(0,i.jsx)(n.strong,{children:"Judge"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["Create judges and save their judge ID and key (case in point, create three judges named ",(0,i.jsx)(n.strong,{children:"Yuri"}),", ",(0,i.jsx)(n.strong,{children:"Naomi"}),", ",(0,i.jsx)(n.strong,{children:"Sayuki"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"create-compilation-environment",children:"Create compilation environment"}),"\n",(0,i.jsx)(n.p,{children:"Download the compilation environment (execute this on both Local Server and Remote Judge):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:"$ git clone https://github.com/VNOI-Admin/judge-server\r\n$ cd judge-server/.docker\r\n$ sudo apt install make\r\n$ sudo make <judge-tier>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can replace ",(0,i.jsx)(n.code,{children:"<judge-tier>"})," with ",(0,i.jsx)(n.code,{children:"tiervnoj"}),", ",(0,i.jsx)(n.code,{children:"tier1"}),", ",(0,i.jsx)(n.code,{children:"tier2"}),", or ",(0,i.jsx)(n.code,{children:"tier3"}),". Higher tiers include more languages but have larger sizes."]}),"\n",(0,i.jsx)(n.h2,{id:"create-judge-on-the-server",children:"Create judge on the server"}),"\n",(0,i.jsxs)(n.p,{children:["Create configuration files for each judge with the format ",(0,i.jsx)(n.code,{children:"<judge-name>.yml"})," (",(0,i.jsx)(n.strong,{children:"Yuri"}),", ",(0,i.jsx)(n.strong,{children:"Naomi"}),", ",(0,i.jsx)(n.strong,{children:"Sayuki"}),") and include the following information"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="<judge-name>.yml | Yuri.yml, Naomi.yml, Sayuki.yml"',children:"id: <judge-name>\r\nkey: <judge-key>\r\nproblem_storage_globs:\r\n  - /problems/*\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: Replace ",(0,i.jsx)(n.code,{children:"<judge-name>"})," and ",(0,i.jsx)(n.code,{children:"<judge-key>"})," with the IDs and keys you previously created on the web."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will run ",(0,i.jsx)(n.strong,{children:"Yuri"})," on the Local Server."]}),"\n",(0,i.jsx)(n.h2,{id:"build-docker-image",children:"Build docker image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:'$ sudo docker run \\\r\n    --name <judge-name> \\\r\n    --network="host" \\\r\n    -v <directory-to-problem-data-storage>:/problems \\\r\n    --cap-add=SYS_PTRACE \\\r\n    -d \\\r\n    --restart=always \\\r\n    vnoj/judge-<judge-tier>:latest \\\r\n    run -p 9999 -c /problems/<judge-name>.yml localhost -A 0.0.0.0 -a 9111\n'})}),"\n",(0,i.jsx)(n.p,{children:"Notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For each judge, replace ",(0,i.jsx)(n.code,{children:"<judge-name>"}),", ",(0,i.jsx)(n.code,{children:"<judge-name>.yml"})," (judge config), and ",(0,i.jsx)(n.code,{children:"9111"})," (PID) with unique values for each instance."]}),"\n",(0,i.jsxs)(n.li,{children:["Judges running on the same Local Server must have different IDs (case in point, replace ",(0,i.jsx)(n.code,{children:"9111"})," with ",(0,i.jsx)(n.code,{children:"9112"}),", ",(0,i.jsx)(n.code,{children:"9113"}),", etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust the file path to the online judge's problem data storage directory, change ",(0,i.jsx)(n.code,{children:"<directory-to-problem-data-storage>"})," to your own configuration."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"check-the-status-of-the-judge",children:"Check the status of the judge"}),"\n",(0,i.jsx)(n.p,{children:"Open Docker logs to verify the installation result of the judge:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:"$ sudo docker logs -ft <judge-name>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);