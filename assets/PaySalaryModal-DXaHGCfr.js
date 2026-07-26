import{j as e,P as f,g as b}from"./portal-D3vPtU1u.js";import{b as g}from"./react-vendor-C0vzKmSs.js";import{p as y}from"./finance-Bsbgnso5.js";import"./students-BvLi725A.js";import"./staff-BqIqVFbs.js";const D=({isOpen:d,onClose:c,onSuccess:p,staffStatus:t,year:o,month:a})=>{const[s,r]=g.useState(!1),x=async()=>{r(!0);try{const i=await y(t.staffId,t.salaryAmount,o,a),n=b(),l=window.open("","_blank"),m=`
            <html>
            <head>
                <title>Salary Slip - ${t.staffName}</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Playfair Display', serif; color: #1E3A29; margin: 0; padding: 20px; box-sizing: border-box; background-color: #fff; }
                    .container { 
                        border: 3px solid #1E5631; 
                        outline: 1px solid #D4AF37; outline-offset: -5px;
                        padding: 30px; max-width: 800px; margin: 0 auto; 
                        position: relative; background-color: #fdfbf7;
                        min-height: 500px; box-sizing: border-box;
                        display: flex; flex-direction: column;
                    }
                    .watermark {
                        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                        opacity: 0.10;
                        background-image: url('${n.logo}');
                        background-repeat: no-repeat; background-position: center; background-size: contain;
                        width: 60%; height: 60%; z-index: 0; pointer-events: none;
                    }
                    .header { 
                        display: flex; align-items: center; justify-content: center; gap: 20px;
                        border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-bottom: 20px;
                        position: relative; z-index: 1;
                    }
                    .header img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #D4AF37; }
                    .header h1 { font-family: serif; margin: 0; color: #1E5631; font-size: 22px; text-shadow: 1px 1px 0 #D4AF37; }
                    .bismillah { text-align: center; font-family: serif; font-size: 18px; color: #1E5631; margin-bottom: 5px; }
                    
                    .slip-title {
                        text-align: center; font-family: serif; font-size: 18px; color: #D4AF37;
                        margin-bottom: 25px; font-weight: bold; text-decoration: underline; text-underline-offset: 4px;
                    }
                    
                    .info-box {
                        border: 1px solid #D4AF37; padding: 20px;
                        position: relative; z-index: 1; margin-bottom: auto;
                        background-color: rgba(255,255,255,0.7);
                    }
                    .row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
                    .row .label { font-weight: bold; color: #1E5631; }
                    
                    .amount-box {
                        background-color: #1E5631; color: white; padding: 15px; text-align: center;
                        border: 2px solid #D4AF37; margin-bottom: 30px;
                        position: relative; z-index: 1;
                    }
                    .amount-label { font-family: serif; font-size: 12px; text-transform: uppercase; color: #D4AF37; margin-bottom: 5px; }
                    .amount-value { font-family: serif; font-size: 28px; font-weight: bold; }
                    
                    .footer { 
                        margin-top: 20px; border-top: 1px solid #D4AF37; padding-top: 10px;
                        display: flex; justify-content: space-between; font-size: 12px;
                        position: relative; z-index: 1;
                    }
                    
                    @media print {
                        .container { border: 2px solid #000; box-shadow: none; margin: 0; width: 100%; max-width: none; }
                        body { background: #fff; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="watermark"></div>
                    <div class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
                    
                    <div class="header">
                        <img src="${n.logo}" alt="logo">
                        <div class="header-text">
                            <h1>${n.name}</h1>
                        </div>
                    </div>
                    
                    <div class="slip-title">Salary Slip</div>
                    
                    <div class="info-box">
                        <div class="row"><span class="label">Date:</span> ${new Date().toLocaleDateString()}</div>
                        <div class="row"><span class="label">Transaction ID:</span> TXN-${Date.now().toString().slice(-8)}</div>
                        <div class="row"><span class="label">Staff Name:</span> ${t.staffName}</div>
                        <div class="row"><span class="label">Staff ID:</span> ${t.staffId}</div>
                        <div class="row"><span class="label">Role:</span> ${t.role}</div>
                        <div class="row"><span class="label">Salary Month:</span> ${new Date(o,a-1).toLocaleString("default",{month:"long",year:"numeric"})}</div>
                    </div>
                    
                    <div class="amount-box">
                        <div class="amount-label">Net Salary Paid</div>
                        <div class="amount-value">৳${t.salaryAmount.toLocaleString()}</div>
                    </div>
                    
                    <div class="footer">
                        <div>Status: <span style="font-weight: bold; color: #1E5631;">PAID</span></div>
                        <div>Authorized Signature</div>
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
        `;l?.document.write(m),l?.document.close(),p(i)}catch(i){console.error("Failed to pay salary",i),alert("An error occurred during salary payment. Please check your connection and try again.")}finally{r(!1)}};return d?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:e.jsxs("div",{className:"bg-primary rounded-lg p-8 shadow-2xl w-full max-w-md",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2 text-text-primary",children:"Confirm Salary Payment"}),e.jsxs("p",{className:"text-text-secondary mb-6",children:["For ",new Date(o,a-1).toLocaleString("default",{month:"long",year:"numeric"})]}),e.jsxs("div",{className:"bg-secondary p-4 rounded-lg space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-text-secondary",children:[e.jsx("p",{children:"Staff Member:"}),e.jsx("p",{className:"font-semibold text-text-primary",children:t.staffName})]}),e.jsxs("div",{className:"flex justify-between text-text-secondary",children:[e.jsx("p",{children:"Amount:"}),e.jsxs("p",{className:"font-semibold text-text-primary",children:["৳",t.salaryAmount.toLocaleString()]})]})]}),e.jsxs("div",{className:"mt-8 flex justify-between",children:[e.jsx("button",{type:"button",onClick:c,className:"px-6 py-2 rounded-md text-text-primary bg-secondary hover:bg-secondary/80",children:"Cancel"}),e.jsx("button",{onClick:x,disabled:s,className:"px-6 py-2 rounded-md text-white bg-accent hover:bg-accent/80 font-semibold flex items-center gap-2 disabled:bg-gray-500",children:s?"Processing...":e.jsxs(e.Fragment,{children:[e.jsx(f,{className:"w-4 h-4"})," Pay & Print Slip"]})})]})]})}):null};export{D as default};
