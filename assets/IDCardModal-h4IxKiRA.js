import{d as v,j as e,X as w,g as y,R as j,P as k}from"./portal-D3vPtU1u.js";import{b as N}from"./react-vendor-C0vzKmSs.js";const b=i=>{if(!i)return"N/A";const s=new Date(i);return isNaN(s.getTime())?i:s.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})},D=i=>`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    @media print {
        body { -webkit-print-color-adjust: exact; margin: 0; padding: 0; }
        .no-print { display: none; }
    }
    .id-card {
        width: 2.13in;
        height: 3.37in;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        background: #fff;
        border: 1px solid #ddd;
        flex-shrink: 0;
        box-sizing: border-box;
    }
    .gold-frame {
        position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px;
        border: 1px solid #D4AF37;
        border-radius: 6px;
        z-index: 1; pointer-events: none;
    }
    .pattern-bg {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background-image: url('${i}');
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.07;
        z-index: 0;
    }
    .header {
        background-color: #1E5631;
        height: 88px;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        border-bottom: 2px solid #D4AF37;
        text-align: center;
        color: white;
        padding-top: 2px;
        box-sizing: border-box;
    }
    .bismillah-img {
        width: 55px;
        display: block; margin: 0 auto 2px auto;
        filter: brightness(0) invert(1);
    }
    .logo-circle {
        width: 44px; height: 44px;
        background: white;
        border-radius: 50%;
        border: 2px solid #D4AF37;
        margin: 2px auto;
        display: flex; align-items: center; justify-content: center;
        overflow: hidden;
    }
    .logo-circle img { width: 38px; height: 38px; }
    .inst-name-arc { display: block; width: 100%; }
    .photo-area { margin-top: 4px; text-align: center; position: relative; z-index: 2; }
    .profile-img {
        width: 80px; height: 80px;
        border: 2px solid #1E5631;
        border-radius: 6px;
        object-fit: cover;
        background: #f0f0f0;
    }
    .student-name {
        text-align: center;
        font-family: serif;
        color: #1E5631;
        font-weight: bold;
        font-size: 12px;
        margin: 2px 0 1px 0;
        text-transform: uppercase;
        z-index: 2; position: relative;
        padding: 0 4px;
        display: flex; align-items: center; justify-content: center;
        min-height: 2.2em;
        line-height: 1.1;
    }
    .designation {
        background-color: #D4AF37; color: #1E5631;
        font-size: 9px; font-weight: bold;
        display: inline-block; padding: 1px 10px;
        border-radius: 10px; margin-bottom: 3px;
        z-index: 2; text-transform: uppercase;
    }
    .content-layout {
        display: grid;
        grid-template-columns: 1fr 48px;
        width: 90%; margin: 0 auto;
        gap: 3px;
        z-index: 2; position: relative;
    }
    .details-col { display: flex; flex-direction: column; font-size: 9px; gap: 3px; }
    .d-item { display: flex; align-items: baseline; width: 100%; line-height: 1.32; }
    .d-label { font-weight: bold; color: #555; width: 42px; font-size: 8px; flex-shrink: 0; }
    .d-val { color: #000; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
    .d-val.blood { color: #c00; }
    .qr-col { display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
    .qr-in-grid { width: 48px; height: 48px; border: 1px solid #ddd; padding: 1px; background: #fff; }
    .back-header {
        background-color: #1E5631;
        color: #fff;
        font-size: 10px;
        padding: 8px 5px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 2px solid #D4AF37;
    }
    .back-inst-name { font-size: 10px; font-weight: bold; }
    .back-inst-addr { font-size: 7px; font-weight: normal; opacity: 0.9; margin-top: 2px; text-transform: none; }
    .back-content { padding: 10px 15px; font-size: 9px; text-align: center; display: flex; flex-direction: column; height: 75%; justify-content: space-between; }
    .terms { font-size: 8px; color: #666; text-align: justify; margin-bottom: 5px; line-height: 1.35; }
    .signature-area { display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto; width: 100%; margin-bottom: 5px; }
    .sig-line { border-top: 1px solid #000; width: 80px; text-align: center; font-size: 7px; padding-top: 2px; }
    .barcode { height: 25px; width: 80%; margin: 5px auto 0 auto; background: repeating-linear-gradient(90deg, #000, #000 1px, #fff 1px, #fff 3px); }
    .barcode-num { font-family: monospace; font-size: 8px; letter-spacing: 2px; }
`,E=(i,s,d,a,t)=>{const l="https://iili.io/fEBrvMQ.png",p=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${i.id}`,n=s?i.rollNo||i.id.replace(/\D/g,""):"",o=n?parseInt(n,10).toString():"",r=s?"Student":i.designation||i.role||"",x=!s&&i.joiningDate?b(i.joiningDate):"",f=s?i.address:i.temporaryAddress||i.permanentAddress,h=d.toUpperCase(),m=i.photo||v,c=`
        <div class="id-card">
            <div class="gold-frame"></div>
            <div class="pattern-bg"></div>
            <div class="header">
                <img src="${l}" class="bismillah-img" />
                <svg class="inst-name-arc" viewBox="0 0 204 88" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:88px;">
                    <defs><path id="arcTop-${i.id}" d="M 10,86 A 96,96 0 0,1 194,86" /></defs>
                    <text fill="white" font-family="serif" font-size="11" font-weight="700" text-anchor="middle">
                        <textPath href="#arcTop-${i.id}" startOffset="50%">${h}</textPath>
                    </text>
                    <circle cx="102" cy="53" r="26" fill="white" stroke="#D4AF37" stroke-width="2"/>
                    <image href="${a}" x="76" y="27" width="52" height="52" clip-path="circle(25px at 26px 26px)"/>
                </svg>
            </div>
            <div class="photo-area">
                <img src="${m}" class="profile-img" />
            </div>
            <div class="student-name"><span>${i.name}</span></div>
            <div style="text-align:center;"><span class="designation">${r}</span></div>
            <div class="content-layout">
                <div class="details-col">
                    ${s?`
                    <div class="d-item"><span class="d-label">ID:</span><span class="d-val">${i.id}</span></div>
                    <div class="d-item"><span class="d-label">Roll:</span><span class="d-val">${o}</span></div>
                    <div class="d-item"><span class="d-label">Class:</span><span class="d-val">${i.class||""}</span></div>
                    <div class="d-item"><span class="d-label">Sec:</span><span class="d-val">${i.section||""}</span></div>
                    <div class="d-item"><span class="d-label">Group:</span><span class="d-val">${i.group||"-"}</span></div>
                    <div class="d-item"><span class="d-label">Blood:</span><span class="d-val blood">${i.bloodGroup||"-"}</span></div>
                    `:`
                    <div class="d-item"><span class="d-label">ID:</span><span class="d-val">${i.id}</span></div>
                    <div class="d-item"><span class="d-label">Phone:</span><span class="d-val">${i.phone||""}</span></div>
                    <div class="d-item"><span class="d-label">Gender:</span><span class="d-val">${i.gender||"-"}</span></div>
                    <div class="d-item"><span class="d-label">Blood:</span><span class="d-val blood">${i.bloodGroup||"-"}</span></div>
                    <div class="d-item"><span class="d-label">Joined:</span><span class="d-val">${x}</span></div>
                    <div class="d-item"><span class="d-label">Valid:</span><span class="d-val">Dec 2026</span></div>
                    `}
                </div>
                <div class="qr-col">
                    <img src="${p}" class="qr-in-grid" />
                </div>
            </div>
        </div>`,g=`
        <div class="id-card">
            <div class="gold-frame"></div>
            <div class="pattern-bg"></div>
            <div class="back-header">
                <div class="back-inst-name">${d}</div>
                <div class="back-inst-addr">${t}</div>
            </div>
            <div class="back-content">
                <div class="contact-info" style="margin-bottom: 5px; font-weight: bold; color: #1E5631;">
                    ${s?`
                    <div>Guardian: ${i.guardianName||""}</div>
                    <div>Phone: ${i.guardianPhone||""}</div>
                    `:`
                    <div>Emergency: ${i.phone||""}</div>
                    `}
                    <div style="margin-top:5px; font-size:8px; color:#000;">${f||t}</div>
                </div>
                <div class="terms">
                    1. This card is the property of ${d}.<br>
                    2. It is non-transferable and must be worn at all times within campus.<br>
                    3. If found, please return to the address above.<br>
                    4. Loss of this card must be reported immediately to
                    <div align="center"><b>Email: info@iqramadrasha.com</b></div>
                    <div align="center"><b>Phone: +8801718720379</b></div>
                </div>
                <div class="signature-area" style="justify-content:center;">
                    <div class="sig-line">Director's Sign</div>
                </div>
                <div>
                    <div class="barcode"></div>
                    <div class="barcode-num">${i.id}</div>
                </div>
            </div>
        </div>`;return c+g},A=({person:i,type:s,onClose:d})=>{const a=y(),t=s==="students",[l,p]=N.useState(!1),n=t?i.address:i.temporaryAddress||i.permanentAddress,o=t?i.rollNo||i.id.replace(/\D/g,""):"",r=o?parseInt(o,10).toString():"",x=()=>{const f=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${i.id}`,h=t?"":b(i.joiningDate),m="https://iili.io/fEBrvMQ.png",c=window.open("","_blank"),g=t?"Student":i.designation||i.role,u=`
            <html>
            <head>
                <title>ID Card - ${i.name}</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Roboto', sans-serif;
                        background-color: #fff;
                        padding: 20px;
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                    }
                    @media print {
                        body { -webkit-print-color-adjust: exact; margin: 0; padding: 0; }
                        .no-print { display: none; }
                    }
                    /* ID Card Container - 2.125 x 3.37 inch standard CR80 */
                    .id-card {
                        width: 2.13in;
                        height: 3.37in;
                        border-radius: 8px;
                        position: relative;
                        overflow: hidden;
                        background: #fff;
                        border: 1px solid #ddd;
                        flex-shrink: 0;
                        box-sizing: border-box;
                    }
                    .gold-frame {
                        position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px;
                        border: 1px solid #D4AF37;
                        border-radius: 6px;
                        z-index: 1; pointer-events: none;
                    }
                    .pattern-bg {
                        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                        background-image: url('${a.logo}');
                        background-size: 80%;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: 0.07;
                        z-index: 0;
                    }
                    
                    /* Header Area */
                    .header {
                        background-color: #1E5631;
                        height: 88px;
                        width: 100%;
                        position: relative;
                        z-index: 2;
                        overflow: hidden;
                        border-bottom: 2px solid #D4AF37;
                        text-align: center;
                        color: white;
                        padding-top: 2px;
                        box-sizing: border-box;
                    }
                    .bismillah-img {
                        width: 55px;
                        display: block; margin: 0 auto 2px auto;
                        filter: brightness(0) invert(1);
                    }
                    .logo-circle {
                        width: 44px; height: 44px;
                        background: white;
                        border-radius: 50%;
                        border: 2px solid #D4AF37;
                        margin: 2px auto;
                        display: flex; align-items: center; justify-content: center;
                        overflow: hidden;
                    }
                    .logo-circle img { width: 38px; height: 38px; }
                    .inst-name-arc { display: block; width: 100%; }

                    /* Photo & Name */
                    .photo-area { margin-top: 4px; text-align: center; position: relative; z-index: 2; }
                    .profile-img { 
                        width: 80px; height: 80px;
                        border: 2px solid #1E5631; 
                        border-radius: 6px; 
                        object-fit: cover;
                        background: #f0f0f0;
                    }
                    .student-name {
                        text-align: center;
                        font-family: serif;
                        color: #1E5631;
                        font-weight: bold;
                        font-size: 12px;
                        margin: 2px 0 1px 0;
                        text-transform: uppercase;
                        z-index: 2; position: relative;
                        padding: 0 4px;
                        display: flex; align-items: center; justify-content: center;
                        min-height: 2.2em;
                        line-height: 1.1;
                    }
                    .designation {
                        background-color: #D4AF37; color: #1E5631;
                        font-size: 9px; font-weight: bold;
                        display: inline-block; padding: 1px 10px;
                        border-radius: 10px; margin-bottom: 3px;
                        z-index: 2; text-transform: uppercase;
                    }

                    /* Details Grid */
                    .content-layout {
                        display: grid;
                        grid-template-columns: 1fr 48px;
                        width: 90%; margin: 0 auto;
                        gap: 3px;
                        z-index: 2; position: relative;
                    }
                    .details-col { display: flex; flex-direction: column; font-size: 9px; gap: 3px; }
                    .d-item { display: flex; align-items: baseline; width: 100%; line-height: 1.32; }
                    .d-label { font-weight: bold; color: #555; width: 42px; font-size: 8px; flex-shrink: 0; }
                    .d-val { color: #000; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
                    .d-val.blood { color: #c00; }
                    .qr-col { display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
                    .qr-in-grid { width: 48px; height: 48px; border: 1px solid #ddd; padding: 1px; background: #fff; }

                    /* Back Side specific */
                    .back-header {
                        background-color: #1E5631;
                        color: #fff;
                        font-size: 10px;
                        padding: 8px 5px;
                        text-align: center;
                        font-weight: bold;
                        text-transform: uppercase;
                        border-bottom: 2px solid #D4AF37;
                    }
                    .back-inst-name { font-size: 10px; font-weight: bold; }
                    .back-inst-addr { font-size: 7px; font-weight: normal; opacity: 0.9; margin-top: 2px; text-transform: none; }
                    
                    .back-content { padding: 10px 15px; font-size: 9px; text-align: center; display: flex; flex-direction: column; height: 75%; justify-content: space-between; }
                    .terms { font-size: 8px; color: #666; text-align: justify; margin-bottom: 5px; line-height: 1.35; }
                    .signature-area { display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto; width: 100%; margin-bottom: 5px; }
                    .sig-line { border-top: 1px solid #000; width: 80px; text-align: center; font-size: 7px; padding-top: 2px; }
                    .barcode { height: 25px; width: 80%; margin: 5px auto 0 auto; background: repeating-linear-gradient(90deg, #000, #000 1px, #fff 1px, #fff 3px); }
                    .barcode-num { font-family: monospace; font-size: 8px; letter-spacing: 2px; }

                </style>
            </head>
            <body>
                <!-- FRONT -->
                <div class="id-card">
                    <div class="gold-frame"></div>
                    <div class="pattern-bg"></div>
                    
                    <div class="header">
                        <img src="${m}" class="bismillah-img" />
                        <svg class="inst-name-arc" viewBox="0 0 204 88" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:88px;">
                            <defs>
                                <path id="arcTop-print" d="M 10,86 A 96,96 0 0,1 194,86" />
                            </defs>
                            <text fill="white" font-family="serif" font-size="11" font-weight="700" text-anchor="middle">
                                <textPath href="#arcTop-print" startOffset="50%">${a.name.toUpperCase()}</textPath>
                            </text>
                            <circle cx="102" cy="53" r="26" fill="white" stroke="#D4AF37" stroke-width="2"/>
                            <image href="${a.logo}" x="76" y="27" width="52" height="52" clip-path="circle(25px at 26px 26px)"/>
                        </svg>
                    </div>

                    <div class="photo-area">
                        <img src="${i.photo||v}" class="profile-img" />
                    </div>

                    <div class="student-name"><span>${i.name}</span></div>
                    <div style="text-align:center;"><span class="designation">${g}</span></div>

                    <div class="content-layout">
                        <div class="details-col">
                            ${t?`
                            <div class="d-item"><span class="d-label">ID:</span><span class="d-val">${i.id}</span></div>
                            <div class="d-item"><span class="d-label">Roll:</span><span class="d-val">${r}</span></div>
                            <div class="d-item"><span class="d-label">Class:</span><span class="d-val">${i.class}</span></div>
                            <div class="d-item"><span class="d-label">Sec:</span><span class="d-val">${i.section}</span></div>
                            <div class="d-item"><span class="d-label">Group:</span><span class="d-val">${i.group||"-"}</span></div>
                            <div class="d-item"><span class="d-label">Blood:</span><span class="d-val blood">${i.bloodGroup||"-"}</span></div>
                            `:`
                            <div class="d-item"><span class="d-label">ID:</span><span class="d-val">${i.id}</span></div>
                            <div class="d-item"><span class="d-label">Phone:</span><span class="d-val">${i.phone}</span></div>
                            <div class="d-item"><span class="d-label">Gender:</span><span class="d-val">${i.gender||"-"}</span></div>
                            <div class="d-item"><span class="d-label">Blood:</span><span class="d-val blood">${i.bloodGroup||"-"}</span></div>
                            <div class="d-item"><span class="d-label">Joined:</span><span class="d-val">${h}</span></div>
                            <div class="d-item"><span class="d-label">Valid:</span><span class="d-val">Dec 2026</span></div>
                            `}
                        </div>
                        <div class="qr-col">
                            <img src="${f}" class="qr-in-grid" />
                        </div>
                    </div>
                </div>

                <!-- BACK -->
                <div class="id-card">
                        <div class="gold-frame"></div>
                        <div class="pattern-bg"></div>
                        
                        <div class="back-header">
                        <div class="back-inst-name">${a.name}</div>
                        <div class="back-inst-addr">${a.address}</div>
                        </div>

                        <div class="back-content">
                        <div class="contact-info" style="margin-bottom: 5px; font-weight: bold; color: #1E5631;">
                            ${t?`
                            <div>Guardian: ${i.guardianName}</div>
                            <div>Phone: ${i.guardianPhone}</div>
                            `:`
                            <div>Emergency: ${i.phone}</div>
                            `}
                            <div style="margin-top:5px; font-size:8px; color:#000;">${n||a.address}</div>
                        </div>

                        <div class="terms">
                            1. This card is the property of ${a.name}.<br>
                            2. It is non-transferable and must be worn at all times within campus.<br>
                            3. If found, please return to the address above.<br>
                            4. Loss of this card must be reported immediately to
							<div align="center"><b>Email: info@iqramadrasha.com</b></div>
							<div align="center"><b>Phone: +8801718720379</b></div>
                        </div>

                        <div class="signature-area" style="justify-content:center;">
                            <div class="sig-line">Director's Sign</div>
                        </div>

                        <div>
                            <div class="barcode"></div>
                            <div class="barcode-num">${i.id}</div>
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
        `;c?.document.write(u),c?.document.close()};return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4",children:e.jsxs("div",{className:"bg-primary rounded-lg p-6 shadow-2xl w-full max-w-sm",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-text-primary",children:"ID Card Preview"}),e.jsx("button",{onClick:d,className:"text-text-secondary hover:text-red-400",children:e.jsx(w,{})})]}),e.jsx("div",{className:"relative mx-auto w-[240px] h-[380px] bg-white rounded-lg overflow-hidden border border-secondary shadow-inner mb-4 transition-all duration-500",style:{perspective:"1000px"},children:e.jsxs("div",{className:"w-full h-full relative transition-transform duration-700",style:{transformStyle:"preserve-3d",transform:l?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsxs("div",{className:"absolute w-full h-full backface-hidden bg-white flex flex-col items-center p-2 border-2 border-accent",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"w-full h-16 bg-[#1E5631] absolute top-0 border-b-2 border-[#D4AF37] flex flex-col items-center justify-center pt-1",children:e.jsx("img",{src:"https://iili.io/fEBrvMQ.png",className:"w-14 opacity-90 invert brightness-200 sepia saturate-200 hue-rotate-15",alt:"Bismillah"})}),e.jsx("img",{src:a.logo,className:"w-16 h-16 rounded-full bg-white p-1 border-2 border-[#D4AF37] z-10 -mt-8"}),e.jsx("h4",{className:"text-[#1E5631] font-bold text-[10px] mt-1 uppercase tracking-wider z-10 text-center px-2 leading-tight",children:a.name}),e.jsx("img",{src:i.photo,className:"w-20 h-24 object-cover border-2 border-[#1E5631] rounded mt-2 z-10 bg-gray-200"}),e.jsx("div",{className:"w-full px-2 mt-1 z-10 h-8 flex items-center justify-center",children:e.jsx("h2",{className:"text-[#1E5631] font-bold text-sm uppercase text-center leading-tight line-clamp-2",children:i.name})}),e.jsx("span",{className:"text-[9px] bg-[#D4AF37] text-[#1E5631] px-2 py-0.5 rounded-full font-bold z-10 mb-2",children:t?"STUDENT":(i.designation||i.role).toUpperCase()}),e.jsxs("div",{className:"w-full px-3 grid grid-cols-[1fr_40px] gap-2 mt-0 z-10 text-[10px] text-gray-700 leading-tight",children:[e.jsx("div",{className:"flex flex-col space-y-1",children:t?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"ID:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.id})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Roll:"})," ",e.jsx("span",{className:"font-bold truncate",children:r})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Class:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.class})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Sec:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.section})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Group:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.group||"-"})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Blood:"})," ",e.jsx("span",{className:"font-bold text-red-600 truncate",children:i.bloodGroup||"-"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"ID:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.id})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Phone:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.phone})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Gender:"})," ",e.jsx("span",{className:"font-bold truncate",children:i.gender||"-"})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Joined:"})," ",e.jsx("span",{className:"font-bold truncate",children:b(i.joiningDate)})]}),e.jsxs("div",{className:"flex overflow-hidden",children:[e.jsx("span",{className:"font-bold w-10 text-[9px] flex-shrink-0",children:"Valid:"})," ",e.jsx("span",{className:"font-bold truncate",children:"Dec 2026"})]})]})}),e.jsx("div",{className:"flex flex-col justify-end items-center",children:e.jsx("div",{className:"w-10 h-10 bg-black/10 flex items-center justify-center text-[5px] border border-gray-300 bg-white",children:"QR"})})]})]}),e.jsxs("div",{className:"absolute w-full h-full backface-hidden bg-white flex flex-col p-4 border-2 border-accent",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[e.jsxs("div",{className:"text-center border-b border-[#D4AF37] pb-2 mb-2",children:[e.jsx("h4",{className:"text-[#1E5631] font-bold uppercase text-[10px]",children:a.name}),e.jsx("p",{className:"text-[8px] text-gray-600 leading-tight",children:a.address})]}),e.jsxs("div",{className:"text-[10px] space-y-1 text-gray-700 mb-4 flex-grow",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Guardian:"})," ",t?i.guardianName:"Next of Kin"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Phone:"})," ",t?i.guardianPhone:i.phone]}),e.jsx("div",{className:"mt-2 text-[9px] text-center italic border-t border-gray-200 pt-2",children:n})]}),e.jsx("div",{className:"flex justify-center mt-auto mb-1",children:e.jsx("div",{className:"border-t border-black w-20 text-center text-[7px] pt-1",children:"Director's Sign"})}),e.jsxs("div",{className:"mt-auto pt-1",children:[e.jsx("div",{className:"h-8 w-full bg-black/10 flex items-center justify-center text-[8px] tracking-[4px]",children:"BARCODE"}),e.jsx("p",{className:"text-[8px] text-center mt-1",children:i.id})]})]})]})}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx("button",{onClick:()=>p(!l),className:"p-2 rounded-full bg-secondary hover:bg-accent/20 text-text-primary transition-colors",title:"Flip Card",children:e.jsx(j,{className:`w-5 h-5 ${l?"rotate-180":""} transition-transform`})}),e.jsxs("button",{onClick:x,className:"bg-accent text-white px-6 py-2 rounded-md font-bold hover:bg-accent/90 flex items-center gap-2 shadow-lg",children:[e.jsx(k,{className:"w-4 h-4"})," Print ID Card"]})]})]})})};export{A as default,E as generateSingleCardHTML,D as getCardStyles};
