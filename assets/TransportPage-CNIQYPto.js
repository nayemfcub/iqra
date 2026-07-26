const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AddVehicleModal-DpqcbI9z.js","./portal-D3vPtU1u.js","./react-vendor-C0vzKmSs.js","./staff-BqIqVFbs.js","./ManageTransportStudentsModal-dKz7P_Ir.js","./students-BvLi725A.js","./transport-BvU9yXbO.js"])))=>i.map(i=>d[i]);
import{u as X,j as e,w as P,P as H,b as Q,T as Y,x as q,U as k,g as J,_ as $}from"./portal-D3vPtU1u.js";import{b as s,R as A}from"./react-vendor-C0vzKmSs.js";import{g as K}from"./students-BvLi725A.js";import{g as Z,d as ee,u as te,a as se}from"./transport-BvU9yXbO.js";const ae=A.lazy(()=>$(()=>import("./AddVehicleModal-DpqcbI9z.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),ne=A.lazy(()=>$(()=>import("./ManageTransportStudentsModal-dKz7P_Ir.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url)),de=()=>{const{user:z}=X(),d=z?.role==="Admin",[V,E]=s.useState([]),[D,M]=s.useState([]),[_,l]=s.useState(!0),[m,h]=s.useState(!1),[g,f]=s.useState(!1),[L,u]=s.useState(null),[b,v]=s.useState(null),n=s.useCallback(async()=>{try{l(!0);const[t,a]=await Promise.all([Z(),K()]);E(t),M(a)}catch(t){console.error("Failed to fetch data",t)}finally{l(!1)}},[]);s.useEffect(()=>{n()},[n]),s.useEffect(()=>{const t=()=>n();return window.addEventListener("app:refresh",t),()=>window.removeEventListener("app:refresh",t)},[n]);const C=async t=>{"id"in t?await te(t):await se(t),n(),w()},I=async t=>{if(window.confirm(`Are you sure you want to delete the vehicle "${t.vehicleNumber}"?`))try{l(!0),await ee(t.id),n()}catch(a){console.error("Failed to delete vehicle",a),alert("Error deleting vehicle.")}finally{l(!1)}},y=(t=null)=>{u(t),h(!0)},w=()=>{u(null),h(!1)},R=t=>{v(t),f(!0)},T=()=>{v(null),f(!1)},O=t=>{const a=J(),c=D.filter(o=>t.studentIds?.includes(o.id)),p=window.open("","_blank");if(!p){alert("Please allow popups to print.");return}const r=23,j=[],N=Math.ceil(c.length/r);for(let o=0;o<N;o++){const x=o*r,S=c.slice(x,x+r),F=S.map((i,W)=>`
            <tr>
                <td style="text-align: center;">${x+W+1}</td>
                <td>${i.id}</td>
                <td style="text-align: left; padding-left: 10px;">${i.name}</td>
                <td>${i.fathersName||"-"}</td>
                <td style="text-align: center;">${i.class}</td>
                <td style="text-align: left; padding-left: 6px;">${i.address||i.permanentAddress||"-"}</td>
                <td>${i.guardianPhone||"N/A"}</td>
            </tr>
            `).join(""),G=Math.max(0,r-S.length),U=Array(G).fill(0).map(()=>`
            <tr><td style="height: 25px;"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            `).join("");j.push(`
            <div class="report-container">
                <div class="watermark"></div>
                <div class="content-area">
                    <div class="header">
                        <img src="${a.logo}" class="logo" />
                        <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                        <div class="inst-name">${a.name}</div>
                        <div class="inst-address">${a.address}</div>
                        <div class="inst-contact">Phone: ${a.phone}, Email: ${a.email}</div>
                        <div class="report-title">Vehicle Passenger List</div>
                    </div>

                    <div class="info-section">
                        <div class="info-col">
                            <div class="info-row"><span class="label">Vehicle No :</span> <span class="val">${t.vehicleNumber}</span></div>
                            <div class="info-row"><span class="label">Route :</span> <span class="val">${t.route}</span></div>
                            <div class="info-row"><span class="label">Total Passengers :</span> <span class="val">${c.length}</span></div>
                        </div>
                        <div class="info-col">
                            <div class="info-row"><span class="label">Driver Name :</span> <span class="val">${t.driverName}</span></div>
                            <div class="info-row"><span class="label">Phone :</span> <span class="val">${t.driverContact}</span></div>
                            <div class="info-row"><span class="label">License No :</span> <span class="val">${t.driverLicense||"-"}</span></div>
                        </div>
                    </div>

                    <table class="data-table">
                        <thead>
                            <tr>
                                <th style="width: 36px;">SL</th>
                                <th style="width: 90px;">Student ID</th>
                                <th>Student Name</th>
                                <th style="width: 110px;">Father's Name</th>
                                <th style="width: 55px;">Class</th>
                                <th>Present Address</th>
                                <th style="width: 110px;">Guardian Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${F}
                            ${U}
                        </tbody>
                    </table>

                    <div class="footer">
                        <div class="sig-box"><div class="sig-line">Driver's Sign</div></div>
                        <div class="sig-box"><div class="sig-line">Director's Sign</div></div>
                    </div>

                    <div class="page-note">Page ${o+1} of ${N}</div>
                    <div class="print-date">Printed on ${new Date().toLocaleString("en-GB")}</div>
                    <div class="watermark-text">Powered by IICM</div>
                </div>
            </div>
            `)}const B=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Vehicle Passenger List - ${t.vehicleNumber}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap" rel="stylesheet">
                    <style>
                        @media print {
                            @page { size: A4; margin: 0; }
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            .no-print { display: none; }
                        }
                        body {
                            font-family: 'Times New Roman', serif;
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        .report-container {
                            width: 210mm;
                            height: 297mm;
                            margin: 0 auto;
                            padding: 8mm;
                            box-sizing: border-box;
                            position: relative;
                            overflow: hidden;
                            page-break-after: always;
                        }
                        .report-container:last-child {
                            page-break-after: avoid;
                        }
                        .content-area {
                            height: 100%;
                            padding: 12px;
                            box-sizing: border-box;
                            position: relative;
                            z-index: 1;
                        }
                        .watermark {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 600px;
                            height: 600px;
                            background-image: url('${a.logo}');
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: contain;
                            opacity: 0.15;
                            z-index: 0;
                            pointer-events: none;
                        }
                        .header { text-align: center; position: relative; margin-bottom: 6px; }
                        .bismillah-img { width: 90px; margin-bottom: 3px; display: block; margin-left: auto; margin-right: auto; transform: scaleX(1.8); }
                        .inst-name { font-size: 18px; font-weight: bold; text-transform: uppercase; color: #2c3e50; margin: 3px 0; letter-spacing: 1px; }
                        .inst-address { font-size: 11px; margin-bottom: 3px; }
                        .inst-contact { font-size: 11px; }
                        .logo { position: absolute; left: 5px; top: 5px; width: 60px; height: 60px; }

                        .report-title { 
                            text-align: center; margin-top: 3px; margin-bottom: 3px; 
                            font-size: 15px; font-weight: bold; text-decoration: underline; 
                        }

                        .info-section { 
                            display: flex; justify-content: space-between; 
                            border: 1px solid #999; 
                            padding: 6px 14px; margin-bottom: 8px; font-size: 13px; line-height: 1.5;
                        }
                        .info-col { width: 48%; }
                        .info-row { display: flex; }
                        .label { width: 115px; font-weight: bold; }
                        .val { font-weight: 500; }

                        .data-table { width: 100%; border-collapse: collapse; font-size: 10.5px; }
                        .data-table th, .data-table td { border: 1px solid #666; padding: 4px; text-align: center; }
                        .data-table th { background-color: #f8fafc; font-weight: bold; }
                        
                        .footer { display: flex; justify-content: space-between; margin-top: 20px; padding: 0 15px; }
                        .sig-box { text-align: center; width: 130px; }
                        .sig-line { border-top: 1px solid #000; margin-top: 20px; font-size: 11px; font-weight: bold; padding-top: 4px;}

                        .page-note { position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); font-size: 10px; font-style: italic; color: #555; }
                        .print-date { position: absolute; bottom: 5px; left: 10px; font-size: 10px; font-style: italic; color: #555; }
                        .watermark-text { position: absolute; bottom: 5px; right: 10px; font-size: 10px; font-style: italic; color: #555; }
                    </style>
                </head>
                <body>
                    ${j.join("")}
                    <script>
                        window.onload = function() {
                            setTimeout(() => {
                                window.print();
                            }, 500);
                        }
                    <\/script>
                </body>
            </html>
        `;p.document.write(B),p.document.close()};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-3xl font-bold text-text-primary",children:"Transport Management"}),d&&e.jsxs("button",{onClick:()=>y(),className:"bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2",children:[e.jsx(P,{className:"w-5 h-5"}),"Add New Vehicle"]})]}),_?e.jsx("p",{className:"text-center text-text-secondary mt-8",children:"Loading transport data..."}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:V.map(t=>e.jsxs("div",{className:"bg-primary p-6 rounded-lg shadow-lg relative group border border-secondary hover:border-accent/50 transition-all flex flex-col",children:[d&&e.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("button",{onClick:()=>O(t),className:"p-2 bg-secondary rounded-full hover:bg-background text-text-secondary hover:text-accent",title:"Print",children:e.jsx(H,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>y(t),className:"p-2 bg-secondary rounded-full hover:bg-background text-text-secondary hover:text-accent",title:"Edit",children:e.jsx(Q,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>I(t),className:"p-2 bg-secondary rounded-full hover:bg-background text-red-500",title:"Delete",children:e.jsx(Y,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex items-center mb-4 border-b border-secondary pb-4",children:[e.jsx("div",{className:"p-3 bg-accent/10 rounded-full mr-4",children:e.jsx(P,{className:"w-8 h-8 text-accent"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-text-primary",children:t.vehicleNumber}),e.jsx("p",{className:"text-sm text-text-secondary font-medium",children:t.route})]})]}),e.jsxs("div",{className:"space-y-2 text-sm mb-4 flex-grow",children:[e.jsxs("div",{className:"font-semibold text-accent flex items-center gap-2",children:[e.jsx(q,{className:"w-4 h-4"})," Driver Details"]}),e.jsxs("div",{className:"bg-secondary/30 p-3 rounded-md space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Name:"})," ",e.jsx("span",{className:"font-medium text-text-primary",children:t.driverName})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Phone:"})," ",e.jsx("span",{className:"text-text-primary",children:t.driverContact})]}),t.driverFatherName&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Father:"})," ",e.jsx("span",{className:"text-text-primary",children:t.driverFatherName})]}),t.driverLicense&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"License:"})," ",e.jsx("span",{className:"text-text-primary",children:t.driverLicense})]}),t.driverNID&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"NID:"})," ",e.jsx("span",{className:"text-text-primary",children:t.driverNID})]}),t.driverAddress&&e.jsxs("div",{className:"flex justify-between flex-col mt-1",children:[e.jsx("span",{className:"text-text-secondary text-xs",children:"Address:"})," ",e.jsx("span",{className:"text-text-primary text-xs",children:t.driverAddress})]})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 bg-secondary rounded-md mt-2",children:[e.jsx("span",{className:"text-text-secondary",children:"Total Passengers"}),e.jsxs("span",{className:"font-bold text-accent flex items-center gap-1",children:[e.jsx(k,{className:"w-3 h-3"}),t.studentIds?t.studentIds.length:0]})]})]}),e.jsxs("button",{onClick:()=>R(t),className:"w-full py-2 rounded-md border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2 text-sm mt-auto",children:[e.jsx(k,{className:"w-4 h-4"})," ",d?"Manage Students":"View Students"]})]},t.id))}),e.jsxs(s.Suspense,{fallback:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:e.jsx("div",{className:"w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"})}),children:[m&&e.jsx(ae,{isOpen:m,onClose:w,onSave:C,initialData:L}),g&&b&&e.jsx(ne,{isOpen:g,onClose:T,vehicle:b,onSave:n})]})]})};export{de as default};
