const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AddStaffModal-D5WpFGui.js","./portal-D3vPtU1u.js","./react-vendor-C0vzKmSs.js","./ProfileModal-eBUifZPD.js"])))=>i.map(i=>d[i]);
import{u as R,j as t,d as S,E as B,P as u,b as G,T as O,g as P,_ as $}from"./portal-D3vPtU1u.js";import{b as o,R as k}from"./react-vendor-C0vzKmSs.js";import{g as _,d as Y,u as Z,a as H}from"./staff-BqIqVFbs.js";const J=({staff:d,onEdit:x,onView:m,onPrint:l,onDelete:p})=>{const{user:h}=R();return t.jsx("div",{className:"overflow-x-auto bg-primary rounded-lg shadow-lg",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Staff Name"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Staff ID"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role & Designation"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Department/Subject"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Phone"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Actions"})]})}),t.jsx("tbody",{children:d.map(i=>t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/50",children:[t.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-text-primary whitespace-nowrap flex items-center gap-3",children:[t.jsx("img",{src:i.photo||S,alt:i.name,className:"w-8 h-8 rounded-full object-cover bg-secondary",onError:g=>{const f=g.target;f.src=S}}),i.name]}),t.jsx("td",{className:"px-6 py-4 font-mono text-xs",children:i.id}),t.jsxs("td",{className:"px-6 py-4",children:[t.jsx("span",{className:"font-semibold text-text-primary",children:i.role}),i.designation&&t.jsx("span",{className:"block text-[10px] text-accent font-bold uppercase tracking-tight",children:i.designation})]}),t.jsx("td",{className:"px-6 py-4",children:i.role==="Teacher"?i.subject||"All Subjects":i.designation||"General"}),t.jsx("td",{className:"px-6 py-4",children:i.phone}),t.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[t.jsx("button",{onClick:()=>m(i),className:"p-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded transition-colors",title:"View Profile",children:t.jsx(B,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>l(i),className:"p-1.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 rounded transition-colors",title:"Print Profile",children:t.jsx(u,{className:"w-4 h-4"})}),h?.role==="Admin"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>x(i),className:"p-1.5 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 rounded transition-colors",title:"Edit",children:t.jsx(G,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>p(i),className:"p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded transition-colors",title:"Delete",children:t.jsx(O,{className:"w-4 h-4"})})]})]})]},i.id))})]})})},V=k.lazy(()=>$(()=>import("./AddStaffModal-D5WpFGui.js"),__vite__mapDeps([0,1,2]),import.meta.url)),F=k.lazy(()=>$(()=>import("./ProfileModal-eBUifZPD.js"),__vite__mapDeps([3,1,2]),import.meta.url)),X=()=>{const[d,x]=o.useState([]),[m,l]=o.useState(!0),[p,h]=o.useState(!1),[i,g]=o.useState(null),[f,w]=o.useState(!1),[v,I]=o.useState(null),[s,C]=o.useState(""),r=o.useCallback(async()=>{try{l(!0);const e=await _();x(e)}catch(e){console.error("Failed to fetch staff",e)}finally{l(!1)}},[]);o.useEffect(()=>{r()},[r]),o.useEffect(()=>{const e=()=>r();return window.addEventListener("app:refresh",e),()=>window.removeEventListener("app:refresh",e)},[r]);const M=async e=>{"id"in e?await Z(e):await H(e),r(),N()},z=async e=>{if(window.confirm(`Are you sure you want to delete ${e.name} (ID: ${e.id})? This will also remove their portal access.`))try{l(!0),await Y(e.id),await r()}catch(n){console.error("Failed to delete staff",n),alert("Error deleting staff. Please try again.")}finally{l(!1)}},j=(e=null)=>{g(e),h(!0)},N=()=>{g(null),h(!1)},L=e=>{I(e),w(!0)},D=e=>{printProfile(e,"staff")},A=()=>{const e=P(),n=window.open("","_blank");if(!n){alert("Please allow popups to print.");return}const b=c.map((a,T)=>`
            <tr>
                <td style="text-align: center; width: 40px;">${T+1}</td>
                <td style="text-align: center; width: 100px;">${a.id}</td>
                <td style="text-align: left; padding-left: 10px;">${a.name}</td>
                <td style="text-align: center; width: 120px;">${a.role}</td>
                <td style="text-align: center; width: 120px;">${a.phone}</td>
                <td style="text-align: center; width: 100px;">${a.joiningDate}</td>
            </tr>
        `).join(""),y=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Staff List</title>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap" rel="stylesheet">
                    <style>
                        @media print {
                            @page { size: A4; margin: 15mm; }
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            thead { display: table-header-group; }
                            tfoot { display: table-footer-group; }
                        }
                        body {
                            font-family: 'Times New Roman', serif;
                            margin: 0; padding: 0;
                            color: #1a1a1a;
                        }
                        .watermark {
                            position: fixed;
                            top: 50%; left: 50%;
                            transform: translate(-50%, -50%);
                            width: 600px; height: 600px;
                            background-image: url('${e.logo}');
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: contain;
                            opacity: 0.1;
                            z-index: -1;
                        }
                        
                        .data-table { width: 100%; border-collapse: collapse; font-size: 11px; table-layout: fixed; }
                        .data-table th, .data-table td { border: 1px solid #666; padding: 8px 4px; overflow: hidden; }
                        .data-table th { background-color: #f8fafc !important; font-weight: bold; }
                        .data-table tr { page-break-inside: avoid; }

                        .branding-cell { border: none !important; padding: 0 !important; background: transparent !important; }
                        .header-content { text-align: center; position: relative; padding-bottom: 25px; border-bottom: 2px solid #333; margin-bottom: 20px; }
                        .bismillah-img { width: 100px; margin-bottom: 8px; display: block; margin-left: auto; margin-right: auto; transform: scaleX(1.8); }
                        .inst-name { font-size: 22px; font-weight: bold; text-transform: uppercase; color: #1a1a1a; margin: 5px 0; }
                        .logo { position: absolute; left: 0; top: 10px; width: 75px; height: 75px; }
                        .report-title { font-size: 17px; font-weight: bold; text-decoration: underline; margin: 12px 0; }

                        .sig-area { page-break-inside: avoid; margin-top: 50px; }
                        .sig-row { display: flex; justify-content: space-between; }
                        .sig-box { text-align: center; width: 150px; }
                        .sig-line { border-top: 1px solid #000; font-size: 12px; font-weight: bold; padding-top: 5px;}
                        .footer { margin-top: 25px; font-size: 10px; font-style: italic; display: flex; justify-content: space-between; color: #555; }
                    </style>
                </head>
                <body>
                    <div class="watermark"></div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th colspan="6" class="branding-cell">
                                    <div class="header-content">
                                        <img src="${e.logo}" class="logo" />
                                        <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                                        <div class="inst-name">${e.name}</div>
                                        <div style="font-size:13px; font-weight: normal;">${e.address}</div>
                                        <div style="font-size:13px; font-weight: normal;">Phone: ${e.phone}, Email: ${e.email}</div>
                                        <div class="report-title">Staff Member List</div>
                                        <div style="font-size: 14px; font-weight: normal;">Total Record: <strong>${c.length}</strong></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th style="width: 40px;">SL</th>
                                <th style="width: 100px;">ID</th>
                                <th>Staff Name</th>
                                <th style="width: 120px;">Role</th>
                                <th style="width: 120px;">Contact</th>
                                <th style="width: 100px;">Joining Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${b}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6" class="branding-cell">
                                    <div class="sig-area">
                                        <div class="sig-row">
                                            <div class="sig-box"><div class="sig-line">Prepared By</div></div>
                                            <div class="sig-box"><div class="sig-line">Admin Officer</div></div>
                                            <div class="sig-box"><div class="sig-line">Authorized Sign</div></div>
                                        </div>
                                        <div class="footer">
                                            <div>Printed on ${new Date().toLocaleString("en-GB")}</div>
                                            <div>Powered by IICM</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <script>
                        window.onload = function() {
                            setTimeout(() => {
                                window.print();
                            }, 500);
                        }
                    <\/script>
                </body>
            </html>
        `;n.document.write(y),n.document.close()},E=()=>{const e=P(),n=window.open("","_blank");if(!n){alert("Please allow popups to print.");return}const b=c.map(a=>`
            <tr>
                <td style="text-align: center; padding: 2px;"><img src="${a.photo||"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0iI2UyZThmMCIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMjMiIHI9IjkiIGZpbGw9IiM5NGEzYjgiLz48cGF0aCBkPSJNMTAgNTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBzMjAgOC45NTQgMjAgMjAiIGZpbGw9IiM5NGEzYjgiLz48L3N2Zz4="}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid #ccc;display:block;margin:auto;"/></td>
                <td style="text-align: center;">${a.id}</td>
                <td style="text-align: left; font-weight: 500;">${a.name}</td>
                <td style="text-align: center;">${a.role}</td>
                <td style="text-align: center;">${a.designation||"-"}</td>
                <td style="text-align: center;">${a.phone}</td>
                <td style="text-align: center;">${a.gender||"-"}</td>
                <td style="text-align: center;">${a.dob||"-"}</td>
                <td style="text-align: center;">${a.bloodGroup||"-"}</td>
                <td style="text-align: left;">${a.fatherOrHusbandName||"-"}</td>
                <td style="text-align: center;">${a.nid||"-"}</td>
                <td style="text-align: left;">${a.education||"-"}</td>
                <td style="text-align: left;">${a.subject||"-"}</td>
                <td style="text-align: left;">${a.specialization||"-"}</td>
                <td style="text-align: left;">${a.previousEmployment||"-"}</td>
                <td style="text-align: center;">${a.joiningDate||"-"}</td>
                <td style="text-align: center;">${a.drivingLicense||"-"}</td>
                <td style="text-align: right;">${a.salary?a.salary.toLocaleString():"-"}</td>
                <td style="text-align: left;">${a.temporaryAddress||"-"}</td>
                <td style="text-align: left;">${a.permanentAddress||"-"}</td>
            </tr>
        `).join(""),y=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Staff Complete List</title>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
                    <style>
                        @media print {
                            @page { size: A4 landscape; margin: 8mm; }
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            thead { display: table-header-group; }
                            tfoot { display: table-footer-group; }
                        }
                        body {
                            font-family: 'Roboto', sans-serif;
                            margin: 0; padding: 0;
                            color: #1a1a1a;
                        }
                        .watermark {
                            position: fixed;
                            top: 50%; left: 50%;
                            transform: translate(-50%, -50%);
                            width: 450px; height: 450px;
                            background-image: url('${e.logo}');
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: contain;
                            opacity: 0.08;
                            z-index: -1;
                        }
                        
                        .data-table { width: 100%; border-collapse: collapse; font-size: 8px; table-layout: auto; }
                        .data-table th, .data-table td { border: 1px solid #444; padding: 4px 2px; word-break: break-word; vertical-align: middle; }
                        .data-table th { background-color: #f1f5f9 !important; font-weight: bold; text-align: center; }
                        .data-table tr { page-break-inside: avoid; }
                        .data-table td img { display: block; margin: auto; }

                        .branding-cell { border: none !important; padding: 0 !important; background: transparent !important; }
                        .header-content { text-align: center; position: relative; padding-bottom: 15px; border-bottom: 2px solid #1E5631; margin-bottom: 15px; }
                        .inst-name { font-size: 18px; font-weight: bold; text-transform: uppercase; color: #1E5631; margin: 3px 0; }
                        .logo { position: absolute; left: 0; top: 5px; width: 60px; height: 60px; }
                        .report-title { font-size: 14px; font-weight: bold; text-decoration: underline; margin: 8px 0; color: #1E5631; }
                    </style>
                </head>
                <body>
                    <div class="watermark"></div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th colspan="20" class="branding-cell">
                                    <div class="header-content">
                                        <img src="${e.logo}" class="logo" />
                                        <div class="inst-name">${e.name}</div>
                                        <div style="font-size:11px; font-weight: normal;">${e.address}</div>
                                        <div style="font-size:11px; font-weight: normal;">Phone: ${e.phone}, Email: ${e.email}</div>
                                        <div class="report-title">Staff Member Complete Profile List</div>
                                        <div style="font-size: 12px; font-weight: normal;">Total Record: <strong>${c.length}</strong></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th style="width: 38px;">Photo</th>
                                <th style="width: 55px;">ID</th>
                                <th>Name</th>
                                <th style="width: 55px;">Role</th>
                                <th>Designation</th>
                                <th style="width: 65px;">Phone</th>
                                <th style="width: 35px;">Gender</th>
                                <th style="width: 50px;">DOB</th>
                                <th style="width: 35px;">Blood</th>
                                <th>Father/Husband Name</th>
                                <th style="width: 65px;">NID</th>
                                <th>Education</th>
                                <th>Subject</th>
                                <th>Specialization</th>
                                <th>Prev Employment</th>
                                <th style="width: 50px;">Joining Date</th>
                                <th style="width: 60px;">Driving License</th>
                                <th style="width: 45px;">Salary</th>
                                <th>Present Address</th>
                                <th>Permanent Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${b}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="20" class="branding-cell" style="padding: 6px 0 0 0 !important; font-size: 8px; font-style: italic; color: #555; text-align: right;">
                                    Printed on ${new Date().toLocaleString("en-GB")} &nbsp;|&nbsp; Powered by IICM
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <script>
                        window.onload = function() {
                            setTimeout(() => {
                                window.print();
                            }, 500);
                        }
                    <\/script>
                </body>
            </html>
        `;n.document.write(y),n.document.close()},c=o.useMemo(()=>s?d.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())||e.id.toLowerCase().includes(s.toLowerCase())||e.role.toLowerCase().includes(s.toLowerCase())||e.subject&&e.subject.toLowerCase().includes(s.toLowerCase())):d,[d,s]);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-3xl font-bold text-text-primary",children:"Staff Management"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:A,className:"bg-secondary text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2",children:[t.jsx(u,{className:"w-5 h-5"}),"Print List"]}),t.jsxs("button",{onClick:E,className:"bg-secondary text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2",children:[t.jsx(u,{className:"w-5 h-5"}),"Print Complete List"]}),t.jsx("button",{onClick:()=>j(),className:"bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors",children:"Add New Staff"})]})]}),t.jsx("div",{className:"bg-primary p-4 rounded-lg shadow-lg",children:t.jsx("input",{type:"text",placeholder:"Search by name, ID, role, or subject...",value:s,onChange:e=>C(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"})}),m?t.jsx("p",{className:"text-center text-text-secondary mt-8",children:"Loading staff..."}):t.jsx(J,{staff:c,onEdit:j,onView:L,onPrint:D,onDelete:z}),t.jsxs(o.Suspense,{fallback:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsx("div",{className:"w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"})}),children:[p&&t.jsx(V,{isOpen:p,onClose:N,onSave:M,initialData:i}),v&&t.jsx(F,{isOpen:f,onClose:()=>w(!1),person:v,type:"staff"})]})]})};export{X as default};
