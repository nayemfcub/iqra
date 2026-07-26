import{K as Q,j as t,g as U,R as V,p as W,P as _,J as T}from"./portal-D3vPtU1u.js";import{b as n,L as J}from"./react-vendor-C0vzKmSs.js";import{g as E,b as K,e as X}from"./exams-DkGkVMH5.js";import"./students-BvLi725A.js";import"./attendance-BGVrZieX.js";import"./classes-Dps0ngeS.js";import"./staff-BqIqVFbs.js";const lt=()=>{const o=U(),[v,y]=n.useState([]),[x,R]=n.useState([]),[w,j]=n.useState(!1),[b,k]=n.useState(!1),[N,m]=n.useState(null),[i,z]=n.useState(""),[g,S]=n.useState(""),[u,D]=n.useState(""),[s,$]=n.useState(null);n.useEffect(()=>{E().then(y),K().then(R)},[]),n.useEffect(()=>{(async()=>{if(i){const a=x.find(r=>r.name===i);k(!0);try{const r=a?.resultUrl||void 0,d=await E(r);y(d)}catch(r){console.error("Failed to fetch exams from custom source",r)}finally{k(!1)}}})()},[i,x]);const I=n.useMemo(()=>{const e=new Set(x.filter(a=>{const r=a.isPublished;return r===!0||r==="TRUE"||r==="true"||r==="1"}).map(a=>a.name));return Array.from(e)},[x]),F=n.useMemo(()=>{if(!i)return[];const e=new Set(v.filter(a=>a.title===i).map(a=>a.class));return Array.from(e)},[v,i]),A=async e=>{if(e.preventDefault(),!i||!g||!u){m("Please select an exam, class, and enter a student ID.");return}const a=x.find(d=>d.name===i);if(!(a&&(a.isPublished===!0||a.isPublished==="TRUE"||a.isPublished==="true"||a.isPublished==="1"))){m("This result is currently not published for public view.");return}j(!0),m(null),$(null);try{const d=await X(i,g,u.trim());d?$(d):m("Result not found. Please check the details and try again.")}catch{m("An error occurred while fetching the result.")}finally{j(!1)}},c=s?Q(s.results.map(e=>({marks:e.marks,totalMarks:e.totalMarks}))):null,G=()=>{if(!s||!c)return;const e=window.open("","_blank");if(!e){alert("Please allow popups to print the report card.");return}const a=s.results.map(l=>{const h=T(l.marks,l.totalMarks),C=l.ct??"-",P=l.cq??"-",M=l.viva??"-",p=l.fullMarks||{ct:0,cq:0,viva:0},O=p.ct>0?p.ct:"-",H=p.cq>0?p.cq:"-",L=p.viva>0?p.viva:"-";return`
                <tr>
                    <td style="text-align: left; padding-left: 5px;">${l.subject}</td>
                    <td>${O}</td><td>${H}</td><td>${L}</td>
                    <td>${C!=="-"?Number(C).toFixed(1):"--"}</td>
                    <td>${P!=="-"?Number(P).toFixed(1):"--"}</td>
                    <td>${M!=="-"?Number(M).toFixed(1):"--"}</td>
                    <td style="font-weight: bold;">${l.marks?Number(l.marks).toFixed(1):"-"}</td>
                    <td style="font-weight: bold;">${h.grade}</td>
                    <td>${h.point.toFixed(1)}</td>
                    <td>${l.highestMark?Number(l.highestMark).toFixed(1):"-"}</td>
                </tr>
            `}).join(""),r=Math.max(0,15-s.results.length),d=Array(r).fill(0).map(()=>`
            <tr><td style="height: 24px;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        `).join(""),f=s.attendance||{total:0,present:0,absent:0},q=s.results.reduce((l,h)=>l+h.totalMarks,0),B=`
            <html>
            <head>
                <title>Progress Report - ${s.studentName}</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap" rel="stylesheet">
                <style>
                    @media print {
                        @page { size: A4; margin: 0; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .no-print { display: none; }
                    }
                    body {
                        font-family: 'Times New Roman', serif;
                        background-color: transparent;
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        box-sizing: border-box;
                    }
                    .report-container {
                        width: 210mm;
                        height: 297mm;
                        margin: 0 auto;
                        padding: 10mm;
                        box-sizing: border-box;
                        background-color: transparent;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .watermark {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 600px;
                        height: 600px;
                        background-image: url('${o.logo}');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                        opacity: 0.20;
                        z-index: 0;
                        pointer-events: none;
                    }
                    
                    .border-box {
                        border: 1px solid #666;
                        padding: 5px;
                        height: 98%;
                        position: relative;
                        z-index: 1;
                        background: transparent;
                    }
                    .inner-border {
                        border: 1px solid #444;
                        height: 100%;
                        padding: 15px;
                        box-sizing: border-box;
                        background: transparent;
                    }

                    .header { text-align: center; position: relative; margin-bottom: 10px; background: transparent; }
                    .bismillah-img { width: 100px; margin-bottom: 5px; display: block; margin-left: auto; margin-right: auto; transform: scaleX(1.8); }
                    .inst-name { font-size: 20px; font-weight: bold; text-transform: uppercase; color: #2c3e50; margin: 5px 0; letter-spacing: 1px; }
                    .inst-address { font-size: 12px; margin-bottom: 5px; }
                    .inst-contact { font-size: 12px; }
                    .logo { position: absolute; left: 10px; top: 10px; width: 70px; height: 70px; }
                    
                    .report-title { 
                        text-align: center; margin-top: 5px; margin-bottom: 5px; 
                        font-size: 16px; font-weight: bold; text-decoration: underline; 
                    }
                    .exam-name { text-align: center; font-size: 14px; text-transform: uppercase; margin-bottom: 10px; }

                    .student-info { 
                        display: flex; justify-content: space-between; 
                        border: 1px solid #999; background-color: transparent;
                        padding: 10px 20px; margin-bottom: 10px; font-size: 14px; line-height: 1.6;
                    }
                    .info-col { width: 48%; }
                    .info-row { display: flex; }
                    .label { width: 100px; font-weight: bold; }
                    .val { font-weight: 500; }

                    .marks-table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 15px; background-color: transparent; }
                    .marks-table th, .marks-table td { border: 1px solid #666; padding: 4px; text-align: center; background-color: transparent !important; }
                    .marks-table th { font-weight: bold; }
                    
                    .bottom-grid { display: flex; gap: 10px; margin-top: 10px; background: transparent; }
                    .col-summary { width: 30%; }
                    .col-attendance { width: 40%; }
                    .col-grading { width: 30%; }

                    .sub-table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 10px; background-color: transparent; }
                    .sub-table td { border: 1px solid #666; padding: 3px 5px; background-color: transparent !important; }
                    .sub-table .lbl { font-weight: bold; }
                    
                    .grading-table { width: 100%; border-collapse: collapse; font-size: 10px; text-align: center; background-color: transparent; }
                    .grading-table th, .grading-table td { border: 1px solid #666; padding: 2px; background-color: transparent !important; }
                    .grading-table th { font-weight: bold; }

                    .remarks-box { 
                        border: 1px solid #666; height: 50px; margin-top: 5px; padding: 5px; 
                        background-color: transparent; position: relative; font-size: 12px;
                    }

                    .footer { display: flex; justify-content: space-between; margin-top: 30px; padding: 0 20px; }
                    .sig-box { text-align: center; width: 150px; }
                    .sig-line { border-top: 1px solid #000; margin-top: 8px; font-size: 12px; font-weight: bold; padding-top: 5px;}
                    .sig-box .outstanding { font-family: 'Tiro Bangla', serif; font-size: 14px; position: relative; top: 10px; }

                    .watermark-text { position: absolute; bottom: 5px; right: 10px; font-size: 10px; font-style: italic; color: #555; }
                    .print-date { position: absolute; bottom: 5px; left: 10px; font-size: 10px; font-style: italic; color: #555; }

                </style>
            </head>
            <body>
                <div class="report-container">
                    <div class="watermark"></div>
                    <div class="border-box">
                        <div class="inner-border">
                            
                            <!-- Header -->
                            <div class="header">
                                <img src="${o.logo}" class="logo" />
                                <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                                <div class="inst-name">${o.name}</div>
                                <div class="inst-address">${o.address}</div>
                                <div class="inst-contact">Phone: ${o.phone}, Email: ${o.email}</div>
                                <div class="report-title">Progress Report</div>
                                <div class="exam-name">${s.examTitle}</div>
                            </div>

                            <!-- Info -->
                            <div class="student-info">
                                <div class="info-col">
                                    <div class="info-row"><span class="label">Name :</span> <span class="val">${s.studentName}</span></div>
                                    <div class="info-row"><span class="label">Class :</span> <span class="val">${s.className}</span></div>
                                    <div class="info-row"><span class="label">Section :</span> <span class="val">${s.section}</span></div>
                                    <div class="info-row"><span class="label">Group :</span> <span class="val">${s.group||"N/A"}</span></div>
                                </div>
                                <div class="info-col">
                                    <div class="info-row"><span class="label">ID Number :</span> <span class="val">${s.studentId}</span></div>
                                    <div class="info-row"><span class="label">Roll No :</span> <span class="val">${s.rollNo||"-"}</span></div>
                                    <div class="info-row"><span class="label">Class Teacher :</span> <span class="val">${s.classTeacher}</span></div>
                                    <div class="info-row"><span class="label">Teacher Cell :</span> <span class="val">${s.teacherPhone}</span></div>
                                </div>
                            </div>

                            <!-- Table -->
                            <table class="marks-table">
                                <thead>
                                    <tr>
                                        <th rowspan="2" style="width: 25%;">Subject</th>
                                        <th colspan="3">Exam Marks</th>
                                        <th colspan="3">Obtained / Calculated Marks</th>
                                        <th rowspan="2" style="width: 7%;">Total</th>
                                        <th rowspan="2" style="width: 6%;">Grade</th>
                                        <th rowspan="2" style="width: 6%;">Grade Point</th>
                                        <th rowspan="2" style="width: 7%;">Highest Marks</th>
                                    </tr>
                                    <tr>
                                        <th style="width: 6%;">CT</th> <th style="width: 6%;">CQ</th> <th style="width: 6%;">Viva</th>
                                        <th style="width: 6%;">CT</th> <th style="width: 6%;">CQ</th> <th style="width: 6%;">Viva</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${a}
                                    ${d}
                                </tbody>
                            </table>

                            <!-- Bottom Grid -->
                            <div class="bottom-grid">
                                <!-- Col 1: Summary -->
                                <div class="col-summary">
                                    <table class="sub-table">
                                        <tr><td class="lbl">Exam Full Marks</td><td style="text-align:right;">${q}</td></tr>
                                        <tr><td class="lbl">Total Obtained Marks</td><td style="text-align:right;">${s.totalMarksObtained.toFixed(2)}</td></tr>
                                        <tr><td class="lbl">Obtained Percentage</td><td style="text-align:right;">${s.percentage.toFixed(2)}%</td></tr>
                                    </table>
                                    <table class="sub-table">
                                        <tr><td class="lbl">Obtained GPA</td><td style="text-align:right; font-weight:bold;">${c.gpa}</td></tr>
                                        <tr><td class="lbl">Class Merit</td><td style="text-align:right;">${s.rank||"-"}</td></tr>
                                        <tr><td class="lbl">Institutional Merit</td><td style="text-align:right;">${s.institutionalRank||"-"}</td></tr>
                                        <tr><td class="lbl">Group Merit</td><td style="text-align:right;">${s.groupRank||"N/A"}</td></tr>
                                    </table>
                                </div>

                                <!-- Col 2: Attendance & Remarks -->
                                <div class="col-attendance">
                                    <table class="sub-table">
                                        <tr><td class="lbl">Working Days</td><td style="text-align:center;">${f.total}</td></tr>
                                        <tr><td class="lbl">Present</td><td style="text-align:center;">${f.present}</td></tr>
                                        <tr><td class="lbl">Absent</td><td style="text-align:center;">${f.absent}</td></tr>
                                    </table>
                                    
                                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 2px;">Promotion Note / Remarks</div>
                                    <div class="remarks-box">
                                        ${c.grade==="F"?"FAILED.":"PASSED."}
                                    </div>
                                </div>

                                <!-- Col 3: Grading Scale -->
                                <div class="col-grading">
                                    <table class="grading-table">
                                        <tr style="background-color: transparent !important;"><th colspan="3">Grade Distribution</th></tr>
                                        <tr><th>Marks</th><th>Grade</th><th>GP</th></tr>
                                        <tr><td>80% and Above</td><td>A+</td><td>5.00</td></tr>
                                        <tr><td>70% - 79%</td><td>A</td><td>4.00</td></tr>
                                        <tr><td>60% - 69%</td><td>A-</td><td>3.50</td></tr>
                                        <tr><td>50% - 59%</td><td>B</td><td>3.00</td></tr>
                                        <tr><td>40% - 49%</td><td>C</td><td>2.00</td></tr>
                                        <tr><td>33% - 39%</td><td>D</td><td>1.00</td></tr>
                                        <tr><td>Below 33%</td><td>F</td><td>0.00</td></tr>
                                    </table>
                                </div>
                            </div>

                            <!-- Footer Signatures -->
                            <div class="footer">
                                <div class="sig-box">
                                    <div style="height: 15px;"></div>
                                    <div class="sig-line">Class Teacher</div>
                                </div>
                                <div class="sig-box">
                                    <div style="height: 15px;"></div> 
                                    <div class="sig-line">Director</div>
                                </div>
                                <div class="sig-box">
                                    <div style="height: 15px;"></div>
                                    <div class="sig-line">Guardian</div>
                                </div>
                            </div>

                            <div class="remarks-box" style="margin-top: 10px; height: 30px; display:flex; align-items:center; background: transparent;">
                                <span style="font-weight:bold; margin-right: 10px;">Remarks:</span>
                            </div>

                            <div class="print-date">Printed on ${new Date().toLocaleDateString("en-GB")}</div>
                            <div class="watermark-text">Powered by IICM</div>

                        </div>
                    </div>
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
        `;e.document.write(B),e.document.close()};return t.jsx("div",{className:"min-h-screen bg-background text-text-primary p-4 sm:p-6 md:p-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx(J,{to:"/",className:"text-accent hover:underline mb-8 inline-block",children:"← Back to Home"}),t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("img",{src:o.logo,alt:"logo",className:"w-20 h-20 mx-auto mb-4 bg-white rounded-full p-1.5"}),t.jsx("h1",{className:"text-4xl font-bold text-text-primary",children:"Check Exam Results"}),t.jsx("p",{className:"text-text-secondary",children:"Select your exam database and enter your ID."})]}),t.jsxs("div",{className:"bg-primary p-8 rounded-2xl shadow-2xl mb-8 relative",children:[b&&t.jsx("div",{className:"absolute inset-0 bg-primary/60 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl",children:t.jsxs("div",{className:"flex items-center gap-3 text-accent font-bold",children:[t.jsx(V,{className:"w-6 h-6 animate-spin"}),"Connecting to Database..."]})}),t.jsxs("form",{onSubmit:A,className:"grid grid-cols-1 md:grid-cols-4 gap-4 items-end",children:[t.jsxs("div",{className:"md:col-span-1",children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1",children:"Exam Title"}),t.jsxs("select",{value:i,onChange:e=>{z(e.target.value),S("")},className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",required:!0,children:[t.jsx("option",{value:"",children:"-- Choose Exam --"}),I.map(e=>t.jsx("option",{value:e,children:e},e))]})]}),t.jsxs("div",{className:"md:col-span-1",children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1",children:"Class"}),t.jsxs("select",{value:g,onChange:e=>S(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",required:!0,disabled:!i||b,children:[t.jsx("option",{value:"",children:"-- Select Class --"}),F.map(e=>t.jsxs("option",{value:e,children:["Class ",e]},e))]})]}),t.jsxs("div",{className:"md:col-span-1",children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1",children:"Student ID"}),t.jsx("input",{type:"text",placeholder:"e.g., S001",value:u,onChange:e=>D(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",required:!0,disabled:b})]}),t.jsx("button",{type:"submit",disabled:w||b,className:"md:col-span-1 w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:bg-secondary",children:w?"Searching...":t.jsxs(t.Fragment,{children:[t.jsx(W,{className:"w-5 h-5"})," Search Result"]})})]})]}),N&&t.jsx("div",{className:"text-center p-4 bg-red-500/20 text-red-400 rounded-lg",children:N}),s&&c&&t.jsxs("div",{className:"bg-primary p-8 rounded-2xl shadow-2xl animate-[fadeIn_0.5s]",children:[t.jsxs("div",{className:"border-b-2 border-secondary pb-4 mb-6 flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-2xl font-bold text-accent uppercase tracking-tight",children:[s.examTitle," Result"]}),t.jsx("p",{className:"text-text-secondary",children:o.name})]}),t.jsxs("button",{onClick:G,className:"bg-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2",children:[t.jsx(_,{className:"w-5 h-5"}),"Print"]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-lg mb-8 bg-secondary/20 p-6 rounded-xl border border-secondary",children:[t.jsxs("div",{className:"flex justify-between border-b border-secondary pb-1",children:[t.jsx("span",{className:"text-text-secondary",children:"Student Name:"})," ",t.jsx("span",{className:"text-text-primary font-bold",children:s.studentName})]}),t.jsxs("div",{className:"flex justify-between border-b border-secondary pb-1",children:[t.jsx("span",{className:"text-text-secondary",children:"Student ID:"})," ",t.jsx("span",{className:"text-text-primary font-bold font-mono",children:s.studentId})]}),t.jsxs("div",{className:"flex justify-between border-b border-secondary pb-1",children:[t.jsx("span",{className:"text-text-secondary",children:"Class:"})," ",t.jsx("span",{className:"text-text-primary font-bold",children:s.className})]}),t.jsxs("div",{className:"flex justify-between border-b border-secondary pb-1",children:[t.jsx("span",{className:"text-text-secondary",children:"Merit Position:"})," ",t.jsxs("span",{className:"text-accent font-bold",children:["#",s.rank]})]})]}),t.jsx("div",{className:"overflow-x-auto mb-8",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"px-6 py-4",children:"Subject"}),t.jsx("th",{scope:"col",className:"px-6 py-4 text-center",children:"Marks"}),t.jsx("th",{scope:"col",className:"px-6 py-4 text-center",children:"Grade"}),t.jsx("th",{scope:"col",className:"px-6 py-4 text-center",children:"GP"})]})}),t.jsx("tbody",{children:s.results.map((e,a)=>{const r=T(e.marks,e.totalMarks);return t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/50",children:[t.jsx("td",{className:"px-6 py-4 font-medium text-text-primary",children:e.subject}),t.jsx("td",{className:"px-6 py-4 text-center font-semibold text-text-primary",children:e.marks??"Absent"}),t.jsx("td",{className:"px-6 py-4 text-center font-bold",style:{color:r.color},children:r.grade}),t.jsx("td",{className:"px-6 py-4 text-center font-bold",children:r.gpa})]},a)})})]})}),t.jsxs("div",{className:"bg-secondary/40 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary",children:[t.jsxs("div",{className:"text-center md:text-left",children:[t.jsx("p",{className:"text-text-secondary text-xs uppercase font-bold tracking-widest mb-1",children:"Total Marks"}),t.jsxs("p",{className:"text-4xl font-black text-text-primary",children:[s.totalMarksObtained," ",t.jsxs("span",{className:"text-xl text-text-secondary",children:["/ ",s.overallTotalMarks]})]})]}),t.jsx("div",{className:"h-12 w-px bg-secondary hidden md:block"}),t.jsxs("div",{className:"text-center md:text-right",children:[t.jsx("p",{className:"text-text-secondary text-xs uppercase font-bold tracking-widest mb-1",children:"Final Result"}),t.jsxs("p",{className:"text-4xl font-black",style:{color:c.color},children:[c.gpa,t.jsxs("span",{className:"text-xl ml-2 font-bold opacity-80",children:["(",c.grade,")"]})]})]})]})]})]})})};export{lt as default};
