const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AddStudentModal-DwH-8UWU.js","./portal-D3vPtU1u.js","./react-vendor-C0vzKmSs.js","./classes-Dps0ngeS.js","./ProfileModal-eBUifZPD.js"])))=>i.map(i=>d[i]);
import{u as M,j as t,d as $,E as V,P as b,b as H,T as J,s as k,g as I,_ as A}from"./portal-D3vPtU1u.js";import{b as l,R as z}from"./react-vendor-C0vzKmSs.js";import{g as W,d as Q,u as U,a as X}from"./students-BvLi725A.js";import{g as q}from"./classes-Dps0ngeS.js";const K=({students:m,onEdit:h,onView:u,onPrint:x,onDelete:f})=>{const{user:g}=M(),n=g?.role==="Teacher";return t.jsx("div",{className:"overflow-x-auto bg-primary rounded-lg shadow-lg",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Student Name"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Student ID"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Class Details"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Roll"}),!n&&t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Guardian Phone"}),!n&&t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Actions"})]})}),t.jsx("tbody",{children:m.map(s=>t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/50",children:[t.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-text-primary whitespace-nowrap flex items-center gap-3",children:[t.jsx("img",{src:s.photo||$,alt:s.name,className:"w-8 h-8 rounded-full object-cover bg-secondary",onError:y=>{const r=y.target;r.src=$}}),s.name]}),t.jsx("td",{className:"px-6 py-4",children:s.id}),t.jsxs("td",{className:"px-6 py-4",children:[s.class," - ",s.section,s.group&&t.jsxs("span",{className:"block text-xs text-text-secondary",children:["(",s.group,")"]})]}),t.jsx("td",{className:"px-6 py-4",children:s.rollNo||"-"}),!n&&t.jsxs("td",{className:"px-6 py-4",children:[t.jsx("div",{children:s.guardianPhone}),t.jsx("div",{className:"text-xs text-text-secondary",children:s.guardianName})]}),!n&&t.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[t.jsx("button",{onClick:()=>u(s),className:"p-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded",title:"View Profile",children:t.jsx(V,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>x(s),className:"p-1.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 rounded",title:"Print Profile",children:t.jsx(b,{className:"w-4 h-4"})}),g?.role==="Admin"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>h(s),className:"p-1.5 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 rounded",title:"Edit",children:t.jsx(H,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>f(s),className:"p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded",title:"Delete",children:t.jsx(J,{className:"w-4 h-4"})})]})]})]},s.id))})]})})},tt=z.lazy(()=>A(()=>import("./AddStudentModal-DwH-8UWU.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),et=z.lazy(()=>A(()=>import("./ProfileModal-eBUifZPD.js"),__vite__mapDeps([4,1,2]),import.meta.url)),it=()=>{const{user:m}=M(),[h,u]=l.useState([]),[x,f]=l.useState([]),[g,n]=l.useState(!0),[s,y]=l.useState(""),[r,E]=l.useState(""),[w,v]=l.useState(!1),[D,j]=l.useState(null),[T,N]=l.useState(!1),[C,L]=l.useState(null),d=l.useCallback(async()=>{try{n(!0);const e=await W();u(e)}catch(e){console.error("Failed to fetch students",e)}finally{n(!1)}},[]);l.useEffect(()=>{(async()=>{try{const o=await q();f(o)}catch(o){console.error("Failed to fetch classes",o)}})()},[]),l.useEffect(()=>{d()},[d]),l.useEffect(()=>{const e=()=>d();return window.addEventListener("app:refresh",e),()=>window.removeEventListener("app:refresh",e)},[d]);const B=async e=>{"id"in e?await U(e):await X(e),d(),P()},G=async e=>{if(window.confirm(`Are you sure you want to delete ${e.name} (ID: ${e.id})? This will also remove their portal access.`))try{n(!0),await Q(e.id),await d()}catch(o){console.error("Failed to delete student",o),alert("Error deleting student. Please try again.")}finally{n(!1)}},S=(e=null)=>{j(e),v(!0)},P=()=>{j(null),v(!1)},R=e=>{L(e),N(!0)},_=e=>{printProfile(e,"student")},O=()=>{const e=I(),o=window.open("","_blank");if(!o){alert("Please allow popups to print.");return}const i=p.map((a,F)=>`
            <tr>
                <td style="text-align: center; width: 40px;">${F+1}</td>
                <td style="text-align: center; width: 100px;">${a.id}</td>
                <td style="text-align: left; padding-left: 10px;">${a.name}</td>
                <td style="text-align: center; width: 80px;">${a.class}</td>
                <td style="text-align: center; width: 60px;">${a.section||"-"}</td>
                <td style="text-align: center; width: 60px;">${a.rollNo||"-"}</td>
                <td style="text-align: center; width: 120px;">${a.guardianPhone||"N/A"}</td>
            </tr>
        `).join(""),c=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Student List - ${s||"All Classes"}</title>
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
                                <th colspan="7" class="branding-cell">
                                    <div class="header-content">
                                        <img src="${e.logo}" class="logo" />
                                        <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                                        <div class="inst-name">${e.name}</div>
                                        <div style="font-size:13px; font-weight: normal;">${e.address}</div>
                                        <div style="font-size:13px; font-weight: normal;">Phone: ${e.phone}, Email: ${e.email}</div>
                                        <div class="report-title">Student List - ${s||"All Classes"}</div>
                                        <div style="font-size: 14px; font-weight: normal;">Total Record: <strong>${p.length}</strong></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th style="width: 40px;">SL</th>
                                <th style="width: 100px;">ID</th>
                                <th>Student Name</th>
                                <th style="width: 80px;">Class</th>
                                <th style="width: 60px;">Sec</th>
                                <th style="width: 60px;">Roll</th>
                                <th style="width: 120px;">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${i}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="7" class="branding-cell">
                                    <div class="sig-area">
                                        <div class="sig-row">
                                            <div class="sig-box"><div class="sig-line">Prepared By</div></div>
                                            <div class="sig-box"><div class="sig-line">Class Teacher</div></div>
                                            <div class="sig-box"><div class="sig-line">Principal</div></div>
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
        `;o.document.write(c),o.document.close()},Y=()=>{const e=I(),o=window.open("","_blank");if(!o){alert("Please allow popups to print.");return}const i=p.map(a=>`
            <tr>
                <td style="text-align: center; padding: 2px;"><img src="${a.photo||"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0iI2UyZThmMCIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMjMiIHI9IjkiIGZpbGw9IiM5NGEzYjgiLz48cGF0aCBkPSJNMTAgNTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBzMjAgOC45NTQgMjAgMjAiIGZpbGw9IiM5NGEzYjgiLz48L3N2Zz4="}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid #ccc;display:block;margin:auto;"/></td>
                <td style="text-align: center;">${a.id}</td>
                <td style="text-align: left; font-weight: 500;">${a.name}</td>
                <td style="text-align: center;">${a.class}</td>
                <td style="text-align: center;">${a.section||"-"}</td>
                <td style="text-align: center;">${a.rollNo||"-"}</td>
                <td style="text-align: center;">${a.group||"-"}</td>
                <td style="text-align: center;">${a.gender||"-"}</td>
                <td style="text-align: center;">${a.dob||"-"}</td>
                <td style="text-align: center;">${a.bloodGroup||"-"}</td>
                <td style="text-align: left;">${a.fathersName||"-"}</td>
                <td style="text-align: left;">${a.mothersName||"-"}</td>
                <td style="text-align: left;">${a.guardianName||"-"}</td>
                <td style="text-align: center;">${a.guardianPhone||"-"}</td>
                <td style="text-align: center;">${a.admissionDate||"-"}</td>
                <td style="text-align: center;">${a.birthCertificateNo||"-"}</td>
                <td style="text-align: left;">${a.previousEducation||"-"}</td>
                <td style="text-align: left;">${a.address||"-"}</td>
                <td style="text-align: left;">${a.permanentAddress||"-"}</td>
            </tr>
        `).join(""),c=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Student Complete List - ${s||"All Classes"}</title>
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
                                <th colspan="19" class="branding-cell">
                                    <div class="header-content">
                                        <img src="${e.logo}" class="logo" />
                                        <div class="inst-name">${e.name}</div>
                                        <div style="font-size:11px; font-weight: normal;">${e.address}</div>
                                        <div style="font-size:11px; font-weight: normal;">Phone: ${e.phone}, Email: ${e.email}</div>
                                        <div class="report-title">Student Complete Profile List - ${s||"All Classes"}</div>
                                        <div style="font-size: 12px; font-weight: normal;">Total Record: <strong>${p.length}</strong></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th style="width: 38px;">Photo</th>
                                <th style="width: 55px;">ID</th>
                                <th>Name</th>
                                <th style="width: 35px;">Class</th>
                                <th style="width: 25px;">Sec</th>
                                <th style="width: 25px;">Roll</th>
                                <th style="width: 35px;">Group</th>
                                <th style="width: 35px;">Gender</th>
                                <th style="width: 50px;">DOB</th>
                                <th style="width: 35px;">Blood</th>
                                <th>Father Name</th>
                                <th>Mother Name</th>
                                <th>Guardian Name</th>
                                <th style="width: 65px;">Guardian Phone</th>
                                <th style="width: 50px;">Admit Date</th>
                                <th style="width: 65px;">Birth Cert No</th>
                                <th>Prev Education</th>
                                <th>Present Address</th>
                                <th>Permanent Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${i}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="19" class="branding-cell" style="padding: 6px 0 0 0 !important; font-size: 8px; font-style: italic; color: #555; text-align: right;">
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
        `;o.document.write(c),o.document.close()},p=l.useMemo(()=>{let e=h;if(s&&(e=e.filter(o=>o.class===s)),r){const o=r.toLowerCase();e=e.filter(i=>i.name.toLowerCase().includes(o)||i.id.toLowerCase().includes(o)||i.guardianName.toLowerCase().includes(o))}return[...e].sort((o,i)=>{if(o.class!==i.class)return k(o.class,i.class);const c=parseInt(o.rollNo||"0")||0,a=parseInt(i.rollNo||"0")||0;return c!==a?c-a:o.id.localeCompare(i.id,void 0,{numeric:!0,sensitivity:"base"})})},[h,s,r]),Z=l.useMemo(()=>Array.from(new Set(x.map(e=>e.name))).sort(k),[x]);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-3xl font-bold text-text-primary",children:"Student Management"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:O,className:"bg-secondary text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2",children:[t.jsx(b,{className:"w-5 h-5"}),"Print List"]}),t.jsxs("button",{onClick:Y,className:"bg-secondary text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2",children:[t.jsx(b,{className:"w-5 h-5"}),"Print Complete List"]}),m?.role==="Admin"&&t.jsx("button",{onClick:()=>S(),className:"bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors",children:"Add New Student"})]})]}),t.jsxs("div",{className:"bg-primary p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4",children:[t.jsx("div",{className:"md:w-1/4",children:t.jsxs("select",{value:s,onChange:e=>y(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",children:[t.jsx("option",{value:"",children:"All Classes"}),Z.map(e=>t.jsx("option",{value:e,children:e},e))]})}),t.jsx("div",{className:"flex-1",children:t.jsx("input",{type:"text",placeholder:"Search by name, ID, or guardian...",value:r,onChange:e=>E(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"})})]}),g?t.jsx("p",{className:"text-center text-text-secondary mt-8",children:"Loading students..."}):t.jsx(K,{students:p,onEdit:S,onView:R,onPrint:_,onDelete:G}),t.jsxs(l.Suspense,{fallback:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsx("div",{className:"w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"})}),children:[w&&t.jsx(tt,{isOpen:w,onClose:P,onSave:B,initialData:D}),C&&t.jsx(et,{isOpen:T,onClose:()=>N(!1),person:C,type:"student"})]})]})};export{it as default};
