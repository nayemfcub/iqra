import{j as t,X as M,P as D,i as H,A as B,d as $,g as S}from"./portal-D3vPtU1u.js";import{b as h}from"./react-vendor-C0vzKmSs.js";import{g as R}from"./students-BvLi725A.js";import{g as G}from"./finance-Bsbgnso5.js";import"./staff-BqIqVFbs.js";const U=l=>{if(!l)return"TBA";if(/^\d{1,2}:\d{2}(:\d{2})?$/.test(l)){const[m,n]=l.split(":").map(Number),f=new Date;return f.setHours(m,n,0,0),f.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}const x=new Date(l);return isNaN(x.getTime())?l:x.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})},C=l=>{if(!l)return"";const x=new Date(l);return isNaN(x.getTime())?l:x.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})},Q=({isOpen:l,onClose:x,allExams:m})=>{const[n,f]=h.useState(""),[r,y]=h.useState(""),[g,w]=h.useState([]),[z,j]=h.useState(!1),E=h.useMemo(()=>Array.from(new Set(m.map(e=>e.title))),[m]),F=h.useMemo(()=>n?Array.from(new Set(m.filter(e=>e.title===n).map(e=>e.class))):[],[m,n]);h.useEffect(()=>{(async()=>{if(n&&r){j(!0);try{const s=await R({class:r}),i=new Date,d=await G(i.getFullYear(),i.getMonth()+1),c=s.map(o=>{const a=d.find(u=>u.studentId===o.id),p=a?["Paid","Partially Paid"].includes(a.status)||a.totalDue<=0:!1;return{student:o,isEligible:p,feeStatus:a?a.status:"Unknown"}});w(c)}catch(s){console.error("Error fetching data for admit cards",s)}finally{j(!1)}}else w([])})()},[n,r]);const N=()=>m.filter(e=>e.title===n&&e.class===r).sort((e,s)=>new Date(e.date).getTime()-new Date(s.date).getTime()),k=e=>e.map(s=>`
            <tr>
                <td style="padding: 3px 5px; border: 1px solid #D4AF37; text-align: center;">${C(s.date)}</td>
                <td style="padding: 3px 5px; border: 1px solid #D4AF37; text-align: center;">${U(s.time)}</td>
                <td style="padding: 3px 5px; border: 1px solid #D4AF37; font-weight: bold;"><span class="latin-fix">${s.subject}</span></td>
                <td style="padding: 3px 5px; border: 1px solid #D4AF37;"></td>
            </tr>
        `).join(""),b=(e,s,i)=>{const d=e.rollNo||e.id.replace(/\D/g,""),c=d?parseInt(d,10).toString():"N/A",o=e.dob?C(e.dob):"N/A",a=s.logo||$;return`
            <div class="card">
                <div class="watermark" style="background-image: url('${a}');"></div>
                <div class="card-body">
                    <div class="header">
                        <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" />
                        <div class="header-logo-title">
                            <img src="${a}" class="inst-logo" />
                            <div class="header-text">
                                <h1>${s.name}</h1>
                                <p>${s.address}</p>
                            </div>
                        </div>
                        <div class="admit-title">${n} ADMIT CARD</div>
                    </div>
                    
                    <div class="candidate-box">
                        <div class="photo-frame"><img src="${e.photo||$}" /></div>
                        <div class="details-container">
                            <div class="details-section border-r">
                                <div class="section-title">Academic Info</div>
                                <div><span class="label">ID No:</span><span class="val">${e.id}</span></div>
                                <div><span class="label">Roll No:</span><span class="val">${c}</span></div>
                                <div><span class="label">Class:</span><span class="val">${e.class}</span></div>
                                <div><span class="label">Section:</span><span class="val">${e.section||"N/A"}</span></div>
                                <div><span class="label">Group:</span><span class="val">${e.group||"N/A"}</span></div>
                                <div><span class="label">Session:</span><span class="val">${new Date().getFullYear()}</span></div>
                            </div>
                            <div class="details-section">
                                <div class="section-title">Personal Info</div>
                                <div><span class="label">Name:</span><span class="val name-val">${e.name}</span></div>
                                <div><span class="label">Guardian:</span><span class="val">${e.guardianName}</span></div>
                                <div><span class="label">Phone:</span><span class="val">${e.guardianPhone}</span></div>
                                <div><span class="label">DOB:</span><span class="val">${o}</span></div>
                                <div><span class="label">Gender:</span><span class="val">${e.gender||"N/A"}</span></div>
                                <div><span class="label">Blood:</span><span class="val blood-val">${e.bloodGroup||"N/A"}</span></div>
                            </div>
                        </div>
                    </div>
                    
                    <table class="exam-table">
                        <thead>
                            <tr>
                                <th style="width: 22%;">Date</th>
                                <th style="width: 20%;">Time</th>
                                <th style="width: 38%;">Subject</th>
                                <th style="width: 20%;">Invigilator Sign</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${i}
                        </tbody>
                    </table>
                </div>
                
                <div class="instructions-footer-container">
                    <div class="instructions">
                        <span class="instruction-heading">Important Instructions:</span>
                        1. Candidates must bring this Admit Card to the exam hall. 2. Arrive 15 minutes before the scheduled time. 3. Mobile phones or electronic gadgets are strictly prohibited. 4. Maintain silence and discipline.
                    </div>
                    
                    <div class="footer">
                        <div class="sig-block">
                            <div class="sig-line">Class Teacher</div>
                        </div>
                        <div class="seal-block">
                            <div class="seal-circle">OFFICIAL<br>STAMP</div>
                        </div>
                        <div class="sig-block">
                            <div class="sig-line">Director</div>
                        </div>
                    </div>
                </div>
            </div>
        `},A=()=>`
            <style>
                @page {
                    size: A4;
                    margin: 0;
                }
                body {
                    font-family: 'Libre Baskerville', serif;
                    background-color: #fff;
                    margin: 0;
                    padding: 0;
                    color: #1E3A29;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                .a4-page {
                    width: 210mm;
                    height: 297mm;
                    box-sizing: border-box;
                    padding: 8mm 8mm;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    page-break-after: always;
                    position: relative;
                    background-color: #fff;
                }
                .card {
                    width: 100%;
                    height: 132mm;
                    box-sizing: border-box;
                    border: 2px solid #1E5631;
                    outline: 1px solid #D4AF37;
                    outline-offset: -4px;
                    background: #fdfbf7;
                    padding: 5mm 6mm;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                }
                .watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 320px;
                    height: 320px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    opacity: 0.06;
                    z-index: 0;
                }
                .card-body {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 3mm;
                }
                .header {
                    text-align: center;
                    border-bottom: 2px solid #D4AF37;
                    padding-bottom: 4px;
                    position: relative;
                    z-index: 1;
                }
                .bismillah-img {
                    width: 55px;
                    display: block;
                    margin: 0 auto 2px;
                    filter: invert(81%) sepia(23%) saturate(966%) hue-rotate(359deg) brightness(89%) contrast(90%);
                }
                .header-logo-title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }
                .inst-logo {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1.5px solid #1E5631;
                    background: white;
                }
                .header-text {
                    text-align: left;
                }
                .header h1 {
                    font-family: serif;
                    font-size: 15px;
                    color: #1E5631;
                    margin: 0;
                    text-transform: uppercase;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                }
                .header p {
                    font-size: 8px;
                    margin: 1px 0 0 0;
                    color: #555;
                }
                .admit-title {
                    background-color: #1E5631;
                    color: #D4AF37;
                    display: inline-block;
                    padding: 2px 14px;
                    border-radius: 12px;
                    font-family: serif;
                    font-weight: bold;
                    font-size: 10px;
                    margin-top: 4px;
                    border: 1px solid #D4AF37;
                    letter-spacing: 0.5px;
                }
                .candidate-box {
                    display: flex;
                    gap: 12px;
                    border: 1px solid #D4AF37;
                    padding: 6px;
                    background: rgba(255,255,255,0.65);
                    position: relative;
                    z-index: 1;
                }
                .photo-frame {
                    width: 76px;
                    height: 90px;
                    border: 1.5px solid #1E5631;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                    flex-shrink: 0;
                    border-radius: 3px;
                }
                .photo-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .details-container {
                    display: flex;
                    width: 100%;
                    font-size: 10px;
                }
                .details-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 0 6px;
                }
                .border-r {
                    border-right: 1px solid rgba(212, 175, 55, 0.4);
                }
                .section-title {
                    font-size: 8px;
                    font-weight: bold;
                    color: #D4AF37;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 2px;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                }
                .details-section > div {
                    display: flex;
                    align-items: center;
                    line-height: 1.25;
                }
                .details-section .label {
                    font-weight: bold;
                    color: #1E5631;
                    width: 58px;
                    flex-shrink: 0;
                }
                .details-section .val {
                    color: #000;
                    font-weight: 500;
                }
                .details-section .name-val {
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 10px;
                    color: #1E5631;
                }
                .details-section .blood-val {
                    color: #b00;
                    font-weight: bold;
                }
                .exam-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 9px;
                    position: relative;
                    z-index: 1;
                }
                .exam-table th {
                    background-color: #1E5631;
                    color: #fff;
                    padding: 3px 5px;
                    border: 1px solid #D4AF37;
                    font-family: serif;
                    font-size: 8.5px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .exam-table td {
                    padding: 3px 5px;
                    border: 1px solid #D4AF37;
                }
                .exam-table tbody tr:nth-child(even) {
                    background-color: rgba(212, 175, 55, 0.05);
                }
                .latin-fix {
                    direction: ltr;
                    unicode-bidi: isolate;
                    font-variant-ligatures: none;
                    font-feature-settings: "liga" 0, "clig" 0, "calt" 0;
                }
                .instructions-footer-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5mm;
                    position: relative;
                    z-index: 1;
                }
                .instructions {
                    font-size: 7.5px;
                    line-height: 1.25;
                    color: #444;
                    border-top: 1px solid rgba(212, 175, 55, 0.4);
                    padding-top: 3px;
                }
                .instruction-heading {
                    font-weight: bold;
                    color: #1E5631;
                    margin-right: 4px;
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 2px;
                }
                .sig-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .sig-line {
                    border-top: 1px solid #1E5631;
                    width: 110px;
                    text-align: center;
                    font-size: 8.5px;
                    font-weight: bold;
                    color: #1E5631;
                    padding-top: 2px;
                }
                .seal-block {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .seal-circle {
                    width: 44px;
                    height: 44px;
                    border: 1px dashed #D4AF37;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 5px;
                    color: #D4AF37;
                    text-align: center;
                    font-weight: bold;
                    line-height: 1.1;
                }
                .cut-line {
                    width: 100%;
                    border-top: 1px dashed #D4AF37;
                    position: relative;
                    height: 1px;
                    margin: 0;
                    z-index: 10;
                }
                .cut-line::after {
                    content: '✂ Cut Here';
                    font-family: 'Libre Baskerville', serif;
                    font-size: 7.5px;
                    color: #D4AF37;
                    background: #fff;
                    padding: 0 8px;
                    position: absolute;
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            </style>
        `,P=e=>{const s=S(),i=window.open("","_blank");if(!i)return;const d=N(),c=k(d),o=b(e,s,c),a=`
            <html>
            <head>
                <title>Admit Card - ${e.name}</title>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
                ${A()}
            </head>
            <body>
                <div class="a4-page">
                    ${o}
                    <!-- Half page layout has empty bottom half for single cards -->
                    <div style="height: 132mm; visibility: hidden;"></div>
                </div>
                <script>
                    window.onload = function() {
                        setTimeout(() => {
                            window.print();
                        }, 500);
                    }
                <\/script>
            </body>
            </html>
        `;i.document.write(a),i.document.close()},T=()=>{const e=S(),s=g.filter(p=>p.isEligible);if(s.length===0)return;const i=window.open("","_blank");if(!i)return;const d=N(),c=k(d);let o="";for(let p=0;p<s.length;p+=2){const u=s[p].student,v=s[p+1]?.student,I=b(u,e,c),L=v?b(v,e,c):'<div style="height: 132mm; visibility: hidden;"></div>';o+=`
                <div class="a4-page">
                    ${I}
                    ${v?'<div class="cut-line"></div>':'<div style="height: 1px; visibility: hidden;"></div>'}
                    ${L}
                </div>
            `}const a=`
            <html>
            <head>
                <title>All Admit Cards - ${r}</title>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
                ${A()}
            </head>
            <body>
                ${o}
                <script>
                    window.onload = function() {
                        setTimeout(() => {
                            window.print();
                        }, 500);
                    }
                <\/script>
            </body>
            </html>
        `;i.document.write(a),i.document.close()};return l?t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsxs("div",{className:"bg-primary rounded-lg p-8 shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-secondary pb-4",children:[t.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Generate Admit Cards"}),t.jsx("button",{onClick:x,className:"text-text-secondary hover:text-red-400",children:t.jsx(M,{})})]}),t.jsxs("div",{className:"flex gap-4 mb-6",children:[t.jsxs("div",{className:"w-1/2",children:[t.jsx("label",{className:"block text-sm text-text-secondary mb-1",children:"Select Exam"}),t.jsxs("select",{value:n,onChange:e=>{f(e.target.value),y("")},className:"w-full bg-secondary p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",children:[t.jsx("option",{value:"",children:"-- Choose Exam --"}),E.map(e=>t.jsx("option",{value:e,children:e},e))]})]}),t.jsxs("div",{className:"w-1/2",children:[t.jsx("label",{className:"block text-sm text-text-secondary mb-1",children:"Select Class"}),t.jsxs("select",{value:r,onChange:e=>y(e.target.value),className:"w-full bg-secondary p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",disabled:!n,children:[t.jsx("option",{value:"",children:"-- Choose Class --"}),F.map(e=>t.jsx("option",{value:e,children:e},e))]})]})]}),t.jsx("div",{className:"flex-grow overflow-y-auto bg-secondary/30 rounded-lg p-6 border border-secondary flex flex-col",children:z?t.jsx("div",{className:"text-center py-10 text-text-secondary",children:"Checking eligibility..."}):g.length===0?t.jsx("div",{className:"text-center py-10 text-text-secondary",children:r?"No students found.":"Please select an exam and class to view students."}):t.jsxs("div",{className:"flex flex-col h-full w-full",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6 pb-3 border-b border-secondary flex-shrink-0",children:[t.jsxs("h3",{className:"text-lg font-semibold text-text-primary",children:[r," — Students List"]}),g.filter(e=>e.isEligible).length>0&&t.jsxs("button",{onClick:T,className:"bg-accent text-white px-4 py-2 rounded-md font-bold hover:bg-accent/90 flex items-center gap-2 text-sm shadow-md transition-all duration-300 transform active:scale-95",children:[t.jsx(D,{className:"w-4 h-4"})," Print All Eligible (",g.filter(e=>e.isEligible).length,")"]})]}),t.jsx("div",{className:"overflow-x-auto flex-grow",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary sticky top-0",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3",children:"ID"}),t.jsx("th",{className:"px-4 py-3",children:"Student Name"}),t.jsx("th",{className:"px-4 py-3",children:"Fee Status"}),t.jsx("th",{className:"px-4 py-3 text-center",children:"Action"})]})}),t.jsx("tbody",{children:g.map(({student:e,isEligible:s,feeStatus:i})=>t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/50",children:[t.jsx("td",{className:"px-4 py-3",children:e.id}),t.jsx("td",{className:"px-4 py-3 font-medium text-text-primary",children:e.name}),t.jsx("td",{className:"px-4 py-3",children:s?t.jsxs("span",{className:"flex items-center gap-1 font-semibold text-green-400",children:[t.jsx(H,{className:"w-4 h-4"})," ",i==="Partially Paid"?"Cleared (Partial)":"Cleared"]}):t.jsxs("span",{className:"flex items-center gap-1 text-red-400 font-semibold",title:"Must clear dues for current month",children:[t.jsx(B,{className:"w-4 h-4"})," ",i]})}),t.jsx("td",{className:"px-4 py-3 text-center",children:t.jsxs("button",{onClick:()=>P(e),disabled:!s,className:"bg-accent text-white px-3 py-1 rounded hover:bg-accent/90 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-2 mx-auto text-xs",children:[t.jsx(D,{className:"w-3 h-3"})," Print"]})})]},e.id))})]})})]})})]})}):null};export{Q as default};
