import{j as t,P as j,g as N}from"./portal-D3vPtU1u.js";import{b as p}from"./react-vendor-C0vzKmSs.js";import{f as $}from"./finance-Bsbgnso5.js";import"./students-BvLi725A.js";import"./staff-BqIqVFbs.js";const E=({isOpen:b,onClose:f,onSuccess:h,studentStatus:i,year:l,month:d,transportRoute:n})=>{const[a,u]=p.useState([]),[x,m]=p.useState(!1),y=e=>{u(o=>o.includes(e)?o.filter(s=>s!==e):[...o,e])},c=p.useMemo(()=>i.breakdown.filter(e=>a.includes(e.type)).reduce((e,o)=>e+o.amount,0),[a,i]),v=async()=>{if(a.length!==0){m(!0);try{const e=await $(i.studentId,a,l,d),o=N(),s=window.open("","_blank"),w=e.breakdown.filter(r=>a.includes(r.type)).map(r=>`
                <tr>
                    <td style="padding: 6px 10px; border: 1px solid #D4AF37; color: #1E5631;">${r.type}</td>
                    <td style="padding: 6px 10px; border: 1px solid #D4AF37; text-align: right; font-weight: bold;">৳${r.amount.toLocaleString()}</td>
                </tr>
            `).join(""),g=`
                    <div class="watermark"></div>
                    <div class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
                    
                    <div class="header">
                        <img src="${o.logo}" alt="logo">
                        <div class="header-text">
                            <h1>${o.name}</h1>
                            <p>${o.address}</p>
                            <p>Phone: ${o.phone} | Email: ${o.email}</p>
                        </div>
                    </div>
                    
                    <div class="receipt-title">Payment Receipt</div>
                    
                    <div class="info-grid">
                        <div class="info-item"><span class="label">Date:</span> ${new Date().toLocaleDateString()}</div>
                        <div class="info-item"><span class="label">Receipt No:</span> <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold;">#${e.lastReceiptNo}</span></div>
                        <div class="info-item"><span class="label">Student Name:</span> ${i.studentName}</div>
                        <div class="info-item"><span class="label">Student ID:</span> ${i.studentId}</div>
                        <div class="info-item"><span class="label">Class:</span> ${i.class}${i.section?" ("+i.section+")":""}</div>
                        <div class="info-item"><span class="label">Month:</span> ${new Date(l,d-1).toLocaleString("default",{month:"long",year:"numeric"})}</div>
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${w}
                            <tr class="total-row">
                                <td>Total Paid</td>
                                <td style="text-align: right;">৳${c.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="footer-info">
                        <div>Status: <span style="font-weight: bold; color: #1E5631;">${e.status.toUpperCase()}</span></div>
                        <div style="text-align: center;">Authorized Signature<br><br>______________</div>
                    </div>
        `,k=`
            <html>
            <head>
                <title>Receipt - ${i.studentName}</title>
                <style>
                    body { font-family: 'Times New Roman', Times, serif; color: #1E3A29; margin: 0; padding: 20px; background-color: #fff; }
                    .wrapper { display: flex; gap: 20px; justify-content: center; width: 100%; box-sizing: border-box; }
                    .container { 
                        flex: 1;
                        border: 2px solid #1E5631; 
                        outline: 1px solid #D4AF37; outline-offset: -4px;
                        padding: 20px; 
                        position: relative; background-color: #fdfbf7;
                        min-height: 500px; box-sizing: border-box;
                        display: flex; flex-direction: column;
                    }
                    .copy-badge { position: absolute; top: -1px; right: 20px; background: #1E5631; color: #D4AF37; padding: 3px 10px; font-size: 11px; font-weight: bold; font-family: sans-serif; letter-spacing: 1px; z-index: 10; border-radius: 0 0 5px 5px; }
                    
                    .watermark {
                        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        opacity: 0.25;
                        background-image: url('${o.logo}');
                        background-repeat: no-repeat; background-position: center; background-size: contain;
                        width: 60%; height: 60%; z-index: 0; pointer-events: none;
                    }
                    .header { 
                        display: flex; align-items: center; justify-content: center; gap: 15px;
                        border-bottom: 2px solid #D4AF37; padding-bottom: 8px; margin-bottom: 12px;
                        position: relative; z-index: 1; text-align: center;
                    }
                    .header img { width: 45px; height: 45px; border-radius: 50%; border: 2px solid #D4AF37; }
                    .header h1 { font-family: 'Times New Roman', Times, serif; margin: 0; color: #1E5631; font-size: 20px; text-shadow: 1px 1px 0 #D4AF37; }
                    .header p { margin: 2px 0 0; font-style: italic; color: #555; font-size: 11px; }
                    .bismillah { text-align: center; font-family: 'Times New Roman', Times, serif; font-size: 18px; color: #1E5631; margin-bottom: 5px; }
                    
                    .receipt-title {
                        text-align: center; font-family: sans-serif; font-size: 14px; color: #fff;
                        background-color: #1E5631;
                        margin: 0 auto 15px auto; font-weight: bold; 
                        padding: 6px 24px;
                        border-radius: 6px;
                        border: 2px solid #D4AF37;
                        width: fit-content;
                        position: relative; z-index: 1;
                        text-transform: uppercase; letter-spacing: 2px;
                    }
                    
                    .info-grid { 
                        display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 15px; 
                        position: relative; z-index: 1; font-size: 12px;
                    }
                    .info-item .label { font-weight: bold; color: #1E5631; margin-right: 5px; }
                    
                    table { width: 100%; border-collapse: collapse; margin-bottom: auto; position: relative; z-index: 1; font-size: 12px; }
                    th { background-color: #1E5631; color: #D4AF37; padding: 6px; text-align: left; font-family: 'Times New Roman', Times, serif; border: 1px solid #D4AF37; font-size: 12px; }
                    th:last-child { text-align: right; }
                    td { padding: 5px 8px; border: 1px solid #D4AF37; }
                    
                    .total-row { background-color: #1E5631; color: #fff; font-weight: bold; }
                    .total-row td:last-child { color: #D4AF37; }
                    
                    .footer-info { 
                        margin-top: 15px; border-top: 1px solid #D4AF37; padding-top: 8px;
                        display: flex; justify-content: space-between; font-size: 11px;
                        position: relative; z-index: 1; align-items: flex-end;
                    }
                    @media print {
                        @page { size: A4 landscape; margin: 10mm; }
                        body { background-color: #fff; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .wrapper { gap: 15mm; }
                        .container { box-shadow: none; border: 1px solid #333; outline: none; background-color: #fff; border-radius: 4px; }
                        .copy-badge { background: #333; color: #fff; border: 1px solid #000; border-top: none; }
                    }
                </style>
            </head>
            <body>
                <div class="wrapper">
                    <div class="container">
                        <div class="copy-badge">STUDENT COPY</div>
                        ${g}
                    </div>
                    <div class="container">
                        <div class="copy-badge" style="background:#555">OFFICE COPY</div>
                        ${g}
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
        `;s?.document.write(k),s?.document.close(),h(e)}catch(e){console.error("Failed to collect fee",e),alert("An error occurred during payment collection. Please check your connection and try again.")}finally{m(!1)}}};return b?t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsxs("div",{className:"bg-primary rounded-lg p-8 shadow-2xl w-full max-w-lg",children:[t.jsxs("div",{className:"flex items-start justify-between mb-1",children:[t.jsxs("h2",{className:"text-2xl font-bold text-text-primary",children:["Collect Fees: ",i.studentName]}),n!==void 0&&t.jsx("span",{className:`ml-3 mt-1 shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${n?"bg-blue-500/20 text-blue-300 border border-blue-500/40":"bg-secondary text-text-secondary border border-secondary"}`,children:n?`🚌 ${n}`:"🚶 No Transport"})]}),t.jsxs("p",{className:"text-text-secondary mb-6",children:["For ",new Date(l,d-1).toLocaleString("default",{month:"long",year:"numeric"})]}),t.jsx("div",{className:"space-y-2 mb-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar",children:i.breakdown.map(e=>t.jsxs("div",{className:`p-3 rounded-md flex justify-between items-center ${e.paid?"bg-green-500/10":"bg-secondary"}`,children:[t.jsxs("label",{className:"flex items-center gap-3 text-text-primary",children:[t.jsx("input",{type:"checkbox",checked:e.paid||a.includes(e.type),disabled:e.paid,onChange:()=>y(e.type),className:"w-5 h-5 bg-background border-secondary rounded text-accent focus:ring-accent disabled:opacity-50"}),e.type]}),t.jsxs("span",{className:e.paid?"text-green-400":"text-text-primary",children:["৳",e.amount.toLocaleString()," ",e.paid&&"(Paid)"]})]},e.type))}),t.jsxs("div",{className:"text-right font-bold text-xl text-text-primary mb-6",children:["Total to Pay: ৳",c.toLocaleString()]}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("button",{onClick:f,className:"px-6 py-2 rounded-md text-text-primary bg-secondary hover:bg-secondary/80",children:"Cancel"}),t.jsx("button",{onClick:v,disabled:c===0||x,className:"px-6 py-2 rounded-md text-white bg-accent hover:bg-accent/80 font-semibold flex items-center gap-2 disabled:bg-gray-500",children:x?"Processing...":t.jsxs(t.Fragment,{children:[t.jsx(j,{className:"w-4 h-4"})," Collect & Print Receipt"]})})]})]})}):null};export{E as default};
