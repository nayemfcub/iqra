import{g as p,u as x,j as s,P as m,X as h,S as f}from"./portal-D3vPtU1u.js";import"./react-vendor-C0vzKmSs.js";const c=i=>{if(!i)return"-";const d=new Date(i);if(isNaN(d.getTime()))return i;const a=d.getFullYear(),r=String(d.getMonth()+1).padStart(2,"0"),l=String(d.getDate()).padStart(2,"0");return`${a}-${r}-${l}`},u=(i,d)=>{const a=p(),r=window.open("","_blank"),l=d==="student",t=i,e=i,n=`
        <html>
        <head>
            <title>Profile - ${i.name}</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Roboto', sans-serif; background: #fff; color: #333; margin: 0; padding: 0; }
                .container { width: 190mm; margin: 10mm auto; border: 2px solid #1E5631; padding: 15px; position: relative; box-sizing: border-box; }
                .header { text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 5px; margin-bottom: 15px; }
                .header img { width: 60px; height: 60px; border-radius: 50%; }
                .header h2 { font-family: 'Playfair Display', serif; color: #1E5631; margin: 5px 0; text-transform: uppercase; font-size: 22px; }
                .header p { margin: 0; font-size: 11px; color: #555; }
                .profile-header { display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-start; }
                .profile-img { width: 110px; height: 130px; object-fit: cover; border: 1px solid #ccc; padding: 3px; }
                .basic-info { flex: 1; }
                .basic-info h2 { margin: 0 0 5px; color: #1E5631; font-family: 'Playfair Display', serif; font-size: 20px; }
                .designation { display: inline-block; background: #1E5631; color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 12px; margin-bottom: 10px; text-transform: uppercase; }
                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 15px; }
                .info-item { border-bottom: 1px solid #eee; padding-bottom: 2px; }
                .label { font-weight: bold; color: #555; font-size: 10px; display: block; margin-bottom: 1px; text-transform: uppercase; }
                .value { font-size: 13px; font-weight: 500; }
                .section-title { background: #f4f4f4; padding: 5px 10px; font-weight: bold; color: #1E5631; border-left: 4px solid #D4AF37; margin: 15px 0 10px 0; font-size: 14px; }
                @media print { @page { margin: 0; size: A4; } body { -webkit-print-color-adjust: exact; padding: 0; } .container { border: none; margin: 5mm auto; page-break-inside: avoid; } }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="${a.logo}" />
                    <h2>${a.name}</h2>
                    <p>${a.address}</p>
                    <p>${a.phone} | ${a.email}</p>
                </div>
                <div class="profile-header">
                    <img src="${i.photo}" class="profile-img" />
                    <div class="basic-info">
                        <h2>${i.name}</h2>
                        <div class="designation">${l?"Student":e.designation||e.role}</div>
                        <div class="info-grid">
                            <div class="info-item"><span class="label">ID Number</span><span class="value">${i.id}</span></div>
                            <div class="info-item"><span class="label">${l?"Class":"Join Date"}</span><span class="value">${l?`${t.class} - ${t.section}`:c(e.joiningDate)}</span></div>
                            ${l?`<div class="info-item"><span class="label">Roll No</span><span class="value">${t.rollNo||"-"}</span></div>`:""}
                            <div class="info-item"><span class="label">Blood Group</span><span class="value">${i.bloodGroup||"-"}</span></div>
                        </div>
                    </div>
                </div>
                <div class="section-title">Personal Information</div>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Gender</span><span class="value">${i.gender||"-"}</span></div>
                    <div class="info-item"><span class="label">Date of Birth</span><span class="value">${c(i.dob)}</span></div>
                    ${l?`
                    <div class="info-item"><span class="label">Father's Name</span><span class="value">${t.fathersName||"-"}</span></div>
                    <div class="info-item"><span class="label">Mother's Name</span><span class="value">${t.mothersName||"-"}</span></div>
                    `:`
                    <div class="info-item"><span class="label">Father/Husband</span><span class="value">${e.fatherOrHusbandName||"-"}</span></div>
                    <div class="info-item"><span class="label">NID</span><span class="value">${e.nid||"-"}</span></div>
                    `}
                </div>
                <div class="section-title">Contact Information</div>
                <div class="info-grid">
                    ${l?`
                    <div class="info-item"><span class="label">Guardian Name</span><span class="value">${t.guardianName}</span></div>
                    <div class="info-item"><span class="label">Guardian Phone</span><span class="value">${t.guardianPhone}</span></div>
                    <div class="info-item" style="grid-column: span 2"><span class="label">Present Address</span><span class="value">${t.address||"-"}</span></div>
                    <div class="info-item" style="grid-column: span 2"><span class="label">Permanent Address</span><span class="value">${t.permanentAddress||"-"}</span></div>
                    `:`
                    <div class="info-item"><span class="label">Phone</span><span class="value">${e.phone}</span></div>
                    <div class="info-item" style="grid-column: span 2"><span class="label">Present Address</span><span class="value">${e.temporaryAddress||"-"}</span></div>
                    <div class="info-item" style="grid-column: span 2"><span class="label">Permanent Address</span><span class="value">${e.permanentAddress||"-"}</span></div>
                    `}
                </div>
                ${l?"":`
                <div class="section-title">Professional Details</div>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Official Role</span><span class="value">${e.role}</span></div>
                    <div class="info-item"><span class="label">Designation</span><span class="value">${e.designation||"-"}</span></div>
                    ${e.role==="Teacher"?`<div class="info-item"><span class="label">Subject</span><span class="value">${e.subject||"-"}</span></div>`:""}
                    <div class="info-item"><span class="label">Education</span><span class="value">${e.education||"-"}</span></div>
                    <div class="info-item"><span class="label">Specialization</span><span class="value">${e.specialization||"-"}</span></div>
                </div>
                `}
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
    `;r?.document.write(n),r?.document.close()},j=({isOpen:i,onClose:d,person:a,type:r})=>{const{user:l}=x();if(!i)return null;const t=r==="student",e=a,n=a,o=l?.role==="Teacher"&&t;return s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4",children:s.jsxs("div",{className:"bg-primary rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col",children:[s.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-secondary",children:[s.jsx("h2",{className:"text-xl font-bold text-text-primary",children:"Profile Details"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>u(a,r),className:"text-accent hover:bg-secondary p-2 rounded-full transition-colors",title:"Print Profile",children:s.jsx(m,{className:"w-5 h-5"})}),s.jsx("button",{onClick:d,className:"text-text-secondary hover:text-red-400 p-2 rounded-full transition-colors",children:s.jsx(h,{className:"w-5 h-5"})})]})]}),s.jsxs("div",{className:"overflow-y-auto p-6 flex-grow",children:[s.jsxs("div",{className:"flex flex-col md:flex-row gap-6 mb-6",children:[s.jsx("img",{src:a.photo,alt:a.name,className:"w-32 h-40 object-cover rounded-lg border-2 border-secondary self-center md:self-start"}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h3",{className:"text-2xl font-bold text-text-primary",children:a.name}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("span",{className:"bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",children:t?"Student":n.role}),!t&&n.designation&&s.jsx("span",{className:"bg-secondary text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-accent/20",children:n.designation})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"ID:"})," ",s.jsx("span",{className:"text-text-primary font-bold",children:a.id})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Blood Group:"})," ",s.jsx("span",{className:"text-text-primary",children:a.bloodGroup||"N/A"})]}),!o&&s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Gender:"})," ",s.jsx("span",{className:"text-text-primary",children:a.gender||"N/A"})]})]}),s.jsx("div",{className:"space-y-2",children:t?s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Class:"})," ",s.jsxs("span",{className:"text-text-primary",children:[e.class," - ",e.section]})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Roll No:"})," ",s.jsx("span",{className:"text-text-primary",children:e.rollNo||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Admission:"})," ",s.jsx("span",{className:"text-text-primary",children:c(e.admissionDate)})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Joined:"})," ",s.jsx("span",{className:"text-text-primary",children:c(n.joiningDate)})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium",children:"Phone:"})," ",s.jsx("span",{className:"text-text-primary",children:n.phone})]})]})})]})]})]}),o?s.jsxs("div",{className:"bg-secondary/20 p-6 rounded-lg border border-secondary flex items-center gap-4",children:[s.jsx(f,{className:"w-8 h-8 text-yellow-500 flex-shrink-0"}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-text-primary",children:"Personal Details Restricted"}),s.jsx("p",{className:"text-sm text-text-secondary",children:"As a teacher, you only have access to students' academic records. Personal contact and family details are hidden for privacy."})]})]}):s.jsxs("div",{className:"border-t border-secondary pt-4 grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-lg text-accent mb-3",children:"Personal Information"}),s.jsxs("div",{className:"space-y-2 text-sm",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Date of Birth:"})," ",s.jsx("span",{className:"text-text-primary",children:c(a.dob)})]}),t?s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Father's Name:"})," ",s.jsx("span",{className:"text-text-primary",children:e.fathersName||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Mother's Name:"})," ",s.jsx("span",{className:"text-text-primary",children:e.mothersName||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Birth Cert No:"})," ",s.jsx("span",{className:"text-text-primary",children:e.birthCertificateNo||"N/A"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Father/Husband:"})," ",s.jsx("span",{className:"text-text-primary",children:n.fatherOrHusbandName||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"NID:"})," ",s.jsx("span",{className:"text-text-primary",children:n.nid||"N/A"})]})]})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-lg text-accent mb-3",children:"Contact Details"}),s.jsx("div",{className:"space-y-2 text-sm",children:t?s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Guardian:"})," ",s.jsx("span",{className:"text-text-primary",children:e.guardianName})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Guardian Phone:"})," ",s.jsx("span",{className:"text-text-primary",children:e.guardianPhone})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Address:"})," ",s.jsx("span",{className:"text-text-primary",children:e.address||"N/A"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Present Address:"})," ",s.jsx("span",{className:"text-text-primary",children:n.temporaryAddress||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Permanent Address:"})," ",s.jsx("span",{className:"text-text-primary",children:n.permanentAddress||"N/A"})]})]})})]}),!t&&s.jsxs("div",{className:"md:col-span-2 border-t border-secondary pt-4 mt-4",children:[s.jsx("h4",{className:"font-bold text-lg text-accent mb-3",children:"Professional Details"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Education:"})," ",s.jsx("span",{className:"text-text-primary",children:n.education||"N/A"})]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Specialization:"})," ",s.jsx("span",{className:"text-text-primary",children:n.specialization||"N/A"})]}),n.role==="Teacher"&&s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"Teaching Subject:"})," ",s.jsx("span",{className:"text-text-primary",children:n.subject||"All"})]}),n.role==="Driver"&&s.jsxs("p",{children:[s.jsx("span",{className:"text-text-secondary font-medium block",children:"License No:"})," ",s.jsx("span",{className:"text-text-primary",children:n.drivingLicense||"N/A"})]})]})]})]})]})]})})};export{j as default,u as printProfile};
