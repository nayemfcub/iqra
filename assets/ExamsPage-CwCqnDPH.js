const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AddExamModal-JP43NBaZ.js","./portal-D3vPtU1u.js","./react-vendor-C0vzKmSs.js","./classes-Dps0ngeS.js","./academics-JxQH-ACj.js","./exams-DkGkVMH5.js","./students-BvLi725A.js","./attendance-BGVrZieX.js","./staff-BqIqVFbs.js","./GenerateAdmitCardModal-DkXqMOU1.js","./finance-Bsbgnso5.js","./ManageExamNamesModal-CPIq6Fns.js"])))=>i.map(i=>d[i]);
import{u as vt,j as t,b as yt,T as xt,t as wt,P as it,G as jt,H as kt,I as Ct,_ as dt,y as mt,J as lt,K as Nt,g as ut}from"./portal-D3vPtU1u.js";import{b as d,R as ct}from"./react-vendor-C0vzKmSs.js";import{g as ht}from"./students-BvLi725A.js";import{g as Mt}from"./staff-BqIqVFbs.js";import{g as St}from"./classes-Dps0ngeS.js";import{n as tt}from"./attendance-BGVrZieX.js";import{g as $t,d as Et,a as gt,u as Tt,s as It,b as ft,c as bt}from"./exams-DkGkVMH5.js";const Rt=ct.lazy(()=>dt(()=>import("./AddExamModal-JP43NBaZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)),zt=ct.lazy(()=>dt(()=>import("./GenerateAdmitCardModal-DkXqMOU1.js"),__vite__mapDeps([9,1,2,6,10,8]),import.meta.url)),At=ct.lazy(()=>dt(()=>import("./ManageExamNamesModal-CPIq6Fns.js"),__vite__mapDeps([11,1,2,5,6,7,3,8]),import.meta.url)),Pt=p=>{if(!p)return"Invalid Date";if(/^\d{4}-\d{2}-\d{2}$/.test(p))return p;const C=new Date(p);if(!isNaN(C.getTime())){const b=C.getFullYear(),$=String(C.getMonth()+1).padStart(2,"0"),k=String(C.getDate()).padStart(2,"0");return`${b}-${$}-${k}`}return p},Ft=p=>{if(!p)return"Invalid Time";const C=new Date(p);if(isNaN(C.getTime())){if(/^\d{1,2}:\d{2}$/.test(p)){const[b,$]=p.split(":").map(Number),k=new Date;return k.setHours(b,$),k.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})}return p}return C.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})},Wt=()=>{const{user:p}=vt(),C=p?.role==="Admin",b=C||p?.role==="Teacher",[$,k]=d.useState([]),[q,z]=d.useState(!0),[U,W]=d.useState(!1),[A,Y]=d.useState(!1),[Q,K]=d.useState(!1),[l,x]=d.useState(!1),[c,F]=d.useState(!1),[B,N]=d.useState(!1),[S,E]=d.useState(null),y=async()=>{try{z(!0);const e=await $t();k(e)}catch(e){console.error("Failed to fetch exam data",e)}finally{z(!1)}};d.useEffect(()=>{y()},[]),d.useEffect(()=>{const e=()=>y();return window.addEventListener("app:refresh",e),()=>window.removeEventListener("app:refresh",e)},[]);const T=()=>{y(),F(!1),E(null)},n=async e=>{if(window.confirm(`Are you sure you want to delete the exam "${e.title}" for ${e.subject}? This will also delete all marks entered for this exam.`))try{z(!0),await Et(e.id),y()}catch(o){console.error("Failed to delete exam",o),alert("Error deleting exam. Please try again.")}finally{z(!1)}},f=()=>{W(!1),y()},i=d.useMemo(()=>{const e={};return $.forEach(o=>{e[o.class]||(e[o.class]=[]),e[o.class].push(o)}),Object.keys(e).forEach(o=>{e[o].sort((a,h)=>new Date(a.date+"T00:00:00").getTime()-new Date(h.date+"T00:00:00").getTime())}),e},[$]),M=e=>e.toLowerCase().replace(/\s+/g," ").trim(),D=["Play","Kg","Nursery","Class One","Class Two","Class Three","Class Four","Class Five","Class Six","Class Seven","Class Eight","Class Nine","Class Ten"].reduce((e,o,a)=>(e[M(o)]=a,e),{}),V=d.useMemo(()=>Object.keys(i).sort((e,o)=>(D[M(e)]??999)-(D[M(o)]??999)),[i]);return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold text-text-primary",children:"Examination & Results"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-primary p-6 rounded-lg shadow-lg flex flex-col h-full max-h-[80vh]",children:[t.jsxs("div",{className:"flex justify-between items-center mb-4 flex-shrink-0",children:[t.jsx("h3",{className:"text-xl font-semibold text-text-primary",children:"Exam Schedule"}),C&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>N(!0),className:"bg-secondary text-text-primary px-3 py-1 rounded-md text-sm font-semibold hover:bg-secondary/80",children:"Manage Exam Names"}),t.jsx("button",{onClick:()=>{E(null),F(!0)},className:"bg-accent text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-accent/90",children:"Add Exam"})]})]}),t.jsx("div",{className:"overflow-y-auto flex-grow pr-2 space-y-6",children:q?t.jsx("p",{className:"text-center py-4 text-text-secondary",children:"Loading schedule..."}):$.length===0?t.jsx("p",{className:"text-center py-4 text-text-secondary",children:"No exams scheduled."}):V.map(e=>t.jsxs("div",{className:"border border-secondary rounded-lg overflow-hidden",children:[t.jsxs("div",{className:"bg-secondary/50 p-3 border-b border-secondary flex items-center justify-between",children:[t.jsxs("h4",{className:"font-bold text-accent",children:["Class: ",e]}),t.jsxs("span",{className:"text-xs text-text-secondary bg-primary px-2 py-1 rounded-full",children:[i[e].length," Exams"]})]}),t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary/20",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-2",children:"Exam Name"}),t.jsx("th",{className:"px-4 py-2",children:"Subject"}),t.jsx("th",{className:"px-4 py-2",children:"Date/Time"}),C&&t.jsx("th",{className:"px-4 py-2 text-right",children:"Actions"})]})}),t.jsx("tbody",{children:i[e].map(o=>t.jsxs("tr",{className:"border-b border-secondary/50 hover:bg-secondary/30 last:border-0",children:[t.jsx("td",{className:"px-4 py-2 font-medium text-text-primary",children:o.title}),t.jsx("td",{className:"px-4 py-2",children:o.subject}),t.jsx("td",{className:"px-4 py-2",children:t.jsxs("div",{className:"flex flex-col text-xs",children:[t.jsx("span",{children:Pt(o.date)}),t.jsx("span",{className:"text-text-secondary",children:Ft(o.time)})]})}),C&&t.jsx("td",{className:"px-4 py-2 text-right",children:t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx("button",{onClick:()=>{E(o),F(!0)},className:"p-1 hover:bg-secondary rounded text-yellow-400",title:"Edit",children:t.jsx(yt,{className:"w-3 h-3"})}),t.jsx("button",{onClick:()=>n(o),className:"p-1 hover:bg-secondary rounded text-red-500",title:"Delete",children:t.jsx(xt,{className:"w-3 h-3"})})]})})]},o.id))})]})]},e))})]}),t.jsxs("div",{className:"bg-primary p-6 rounded-lg shadow-lg h-fit",children:[t.jsx("h3",{className:"text-xl font-semibold text-text-primary mb-4",children:"Manage Results"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-secondary/20 p-4 rounded-lg border border-secondary",children:[t.jsx("h4",{className:"font-bold text-text-primary mb-2",children:"1. Input Marks"}),t.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Enter marks for CT, MCQ, Creative Questions, and Viva for specific exams."}),b?t.jsxs("button",{onClick:()=>W(!0),className:"w-full bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex justify-between items-center group",children:[t.jsx("span",{children:"Input Results"}),t.jsx(wt,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}):t.jsx("p",{className:"text-red-400 text-xs",children:"Access Restricted"})]}),t.jsxs("div",{className:"bg-secondary/20 p-4 rounded-lg border border-secondary",children:[t.jsx("h4",{className:"font-bold text-text-primary mb-2",children:"2. Final Reports"}),t.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Calculate totals, GPAs, and generate printable report cards or tabulation sheets."}),t.jsxs("div",{className:"flex gap-3",children:[t.jsxs("button",{onClick:()=>Y(!0),className:"flex-1 bg-secondary text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex justify-between items-center group",children:[t.jsx("span",{children:"Individual Report Cards"}),t.jsx(it,{className:"w-4 h-4 group-hover:text-accent transition-colors"})]}),t.jsxs("button",{onClick:()=>K(!0),className:"flex-1 bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex justify-between items-center group",children:[t.jsx("span",{children:"Class Result Sheet"}),t.jsx(jt,{className:"w-4 h-4"})]})]})]}),t.jsxs("div",{className:"bg-secondary/20 p-4 rounded-lg border border-secondary",children:[t.jsx("h4",{className:"font-bold text-text-primary mb-2",children:"3. Logistics"}),t.jsx("p",{className:"text-sm text-text-secondary mb-3",children:"Generate admit cards for eligible students (fees cleared)."}),t.jsxs("button",{onClick:()=>x(!0),className:"w-full bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex justify-between items-center group",children:[t.jsx("span",{children:"Generate Admit Cards"}),t.jsx(kt,{className:"w-4 h-4"})]})]})]})]})]}),U&&t.jsx(Dt,{allExams:$,onClose:f,isAdmin:C}),A&&t.jsx(_t,{allExams:$,onClose:()=>Y(!1)}),Q&&t.jsx(Qt,{allExams:$,onClose:()=>K(!1)}),t.jsxs(d.Suspense,{fallback:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsx("div",{className:"w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"})}),children:[l&&t.jsx(zt,{isOpen:l,onClose:()=>x(!1),allExams:$}),c&&t.jsx(Rt,{onClose:()=>{F(!1),E(null)},onSave:T,initialData:S}),B&&t.jsx(At,{onClose:()=>N(!1)})]})]})},Dt=({allExams:p,onClose:C,isAdmin:b})=>{const[$,k]=d.useState(""),[q,z]=d.useState([]),[U,W]=d.useState(!1),[A,Y]=d.useState(""),[Q,K]=d.useState(""),[l,x]=d.useState({totalMarksCT:10,totalMarksMCQ:30,totalMarksCQ:50,totalMarksViva:10}),c=d.useMemo(()=>p.find(n=>n.id===$),[p,$]),F=d.useMemo(()=>[...new Set(p.map(n=>n.class))].sort(),[p]),B=d.useMemo(()=>A?[...new Set(p.filter(n=>n.class===A).map(n=>n.title))].sort():[],[p,A]),N=d.useMemo(()=>!A||!Q?[]:p.filter(n=>n.class===A&&n.title===Q),[p,A,Q]);d.useEffect(()=>{c?(W(!0),x({totalMarksCT:c.totalMarksCT!==void 0?Number(c.totalMarksCT):10,totalMarksMCQ:c.totalMarksMCQ!==void 0?Number(c.totalMarksMCQ):30,totalMarksCQ:c.totalMarksCQ!==void 0?Number(c.totalMarksCQ):50,totalMarksViva:c.totalMarksViva!==void 0?Number(c.totalMarksViva):10}),gt(c.id,c.class).then(n=>{z(n),W(!1)})):z([])},[c]);const S=(n,f,i)=>{const M=i===""?void 0:parseFloat(i);z(D=>D.map(V=>{if(V.studentId===n){const e={...V,[f]:M},o=(e.ct||0)+(e.mcq||0)+(e.cq||0)+(e.viva||0),a=e.ct!==void 0||e.mcq!==void 0||e.cq!==void 0||e.viva!==void 0;return{...e,marks:a?o:null}}return V}))},E=n=>{const{name:f,value:i}=n.target;x(M=>({...M,[f]:parseFloat(i)||0}))},y=async()=>{c&&(await Tt({...c,...l}),await It(c.id,q),alert("Exam configuration and results saved successfully!"))},T=l.totalMarksCT+l.totalMarksMCQ+l.totalMarksCQ+l.totalMarksViva;return t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsxs("div",{className:"bg-primary rounded-lg p-8 shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Input Exam Results"}),t.jsx("button",{onClick:C,className:"text-text-secondary hover:text-red-400",children:"Close"})]}),t.jsxs("div",{className:"space-y-4 mb-4",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 bg-secondary/10 p-4 rounded-lg border border-secondary",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-semibold text-text-secondary mb-1 uppercase",children:"1. Select Class"}),t.jsxs("select",{value:A,onChange:n=>{Y(n.target.value),K(""),k("")},className:"w-full bg-secondary p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",children:[t.jsx("option",{value:"",children:"-- Class --"}),F.map(n=>t.jsx("option",{value:n,children:n},n))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-semibold text-text-secondary mb-1 uppercase",children:"2. Select Exam Name"}),t.jsxs("select",{value:Q,onChange:n=>{K(n.target.value),k("")},className:"w-full bg-secondary p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",disabled:!A,children:[t.jsx("option",{value:"",children:"-- Exam Name --"}),B.map(n=>t.jsx("option",{value:n,children:n},n))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-semibold text-text-secondary mb-1 uppercase",children:"3. Select Subject"}),t.jsxs("select",{value:$,onChange:n=>k(n.target.value),className:"w-full bg-secondary p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",disabled:!Q,children:[t.jsx("option",{value:"",children:"-- Subject --"}),N.map(n=>t.jsx("option",{value:n.id,children:n.subject},n.id))]})]})]}),c&&t.jsxs("div",{className:"bg-secondary/30 p-3 rounded-md border border-secondary",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold text-text-primary",children:[t.jsx(Ct,{className:"w-4 h-4 text-accent"})," Configure Exam Full Marks"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-text-secondary block",children:"CT Max"}),t.jsx("input",{type:"number",name:"totalMarksCT",value:l.totalMarksCT,onChange:E,className:"w-16 p-1 rounded text-sm bg-background border border-secondary text-center"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-text-secondary block",children:"MCQ Max"}),t.jsx("input",{type:"number",name:"totalMarksMCQ",value:l.totalMarksMCQ,onChange:E,className:"w-16 p-1 rounded text-sm bg-background border border-secondary text-center"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-text-secondary block",children:"CQ Max"}),t.jsx("input",{type:"number",name:"totalMarksCQ",value:l.totalMarksCQ,onChange:E,className:"w-16 p-1 rounded text-sm bg-background border border-secondary text-center"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"text-xs text-text-secondary block",children:"Viva Max"}),t.jsx("input",{type:"number",name:"totalMarksViva",value:l.totalMarksViva,onChange:E,className:"w-16 p-1 rounded text-sm bg-background border border-secondary text-center"})]}),t.jsxs("div",{className:"ml-auto flex flex-col items-end justify-center",children:[t.jsx("span",{className:"text-xs text-text-secondary",children:"Total"}),t.jsx("span",{className:"font-bold text-accent",children:T})]})]})]})]}),t.jsx("div",{className:"flex-grow overflow-auto border border-secondary rounded-lg",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary relative",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary sticky top-0 z-10",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3",children:"Student Name"}),t.jsxs("th",{className:"px-4 py-3 text-center w-24",children:["CT (",l.totalMarksCT,")"]}),t.jsxs("th",{className:"px-4 py-3 text-center w-24",children:["MCQ (",l.totalMarksMCQ,")"]}),t.jsxs("th",{className:"px-4 py-3 text-center w-24",children:["CQ (",l.totalMarksCQ,")"]}),t.jsxs("th",{className:"px-4 py-3 text-center w-24",children:["Viva (",l.totalMarksViva,")"]}),t.jsx("th",{className:"px-4 py-3 text-center w-24 font-bold text-accent",children:"Total"}),b&&t.jsx("th",{className:"px-4 py-3 text-center w-16 text-red-500",children:"Delete"})]})}),t.jsx("tbody",{children:U?t.jsx("tr",{children:t.jsx("td",{colSpan:6,className:"text-center py-8",children:"Loading students..."})}):q.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,className:"text-center py-8",children:c?"No students found in this class.":"Please select Class, Exam Name, and Subject."})}):q.map(n=>t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/30",children:[t.jsxs("td",{className:"px-4 py-2 font-medium text-text-primary",children:[n.studentName," ",t.jsx("br",{}),t.jsx("span",{className:"text-xs text-text-secondary",children:n.studentId})]}),t.jsx("td",{className:"px-4 py-2 text-center",children:t.jsx("input",{type:"number",min:"0",placeholder:"-",value:n.ct??"",onChange:f=>S(n.studentId,"ct",f.target.value),className:"w-16 bg-background p-2 rounded-md text-text-primary text-center focus:ring-1 focus:ring-accent"})}),t.jsx("td",{className:"px-4 py-2 text-center",children:t.jsx("input",{type:"number",min:"0",placeholder:"-",value:n.mcq??"",onChange:f=>S(n.studentId,"mcq",f.target.value),className:"w-16 bg-background p-2 rounded-md text-text-primary text-center focus:ring-1 focus:ring-accent"})}),t.jsx("td",{className:"px-4 py-2 text-center",children:t.jsx("input",{type:"number",min:"0",placeholder:"-",value:n.cq??"",onChange:f=>S(n.studentId,"cq",f.target.value),className:"w-16 bg-background p-2 rounded-md text-text-primary text-center focus:ring-1 focus:ring-accent"})}),t.jsx("td",{className:"px-4 py-2 text-center",children:t.jsx("input",{type:"number",min:"0",placeholder:"-",value:n.viva??"",onChange:f=>S(n.studentId,"viva",f.target.value),className:"w-16 bg-background p-2 rounded-md text-text-primary text-center focus:ring-1 focus:ring-accent"})}),t.jsx("td",{className:"px-4 py-2 text-center font-bold text-lg text-accent",children:n.marks??"-"}),b&&t.jsx("td",{className:"px-4 py-2 text-center",children:t.jsx("button",{onClick:()=>{window.confirm(`Clear all marks for ${n.studentName}?`)&&z(f=>f.map(i=>i.studentId===n.studentId?{...i,ct:void 0,mcq:void 0,cq:void 0,viva:void 0,marks:null}:i))},className:"p-1 hover:bg-red-500/10 rounded text-red-500",title:"Clear Marks",children:t.jsx(xt,{className:"w-4 h-4"})})})]},n.studentId))})]})}),t.jsxs("div",{className:"mt-6 flex justify-end space-x-4",children:[t.jsx("button",{type:"button",onClick:C,className:"px-6 py-2 rounded-md text-text-primary bg-secondary hover:bg-secondary/80",children:"Cancel"}),t.jsx("button",{onClick:y,disabled:!c,className:"px-6 py-2 rounded-md text-white bg-accent hover:bg-accent/80 font-semibold disabled:bg-gray-500",children:"Save Configuration & Results"})]})]})})},_t=({allExams:p,onClose:C})=>{const[b,$]=d.useState(""),[k,q]=d.useState(!1),[z,U]=d.useState([]),[W,A]=d.useState([]),[Y,Q]=d.useState(new Map);d.useEffect(()=>{(async()=>{const[x,c]=await Promise.all([St(),Mt()]);U(x),A(c)})()},[]),d.useEffect(()=>{(async()=>{if(b){q(!0);const[x,c,F,B]=await Promise.all([ft(),ht(),bt(),mt("Attendance")]),N=c.filter(e=>e.class===b),S=p.filter(e=>e.class===b),E=new Set(S.map(e=>e.title)),y=new Map,T={},n={},f={};p.forEach(e=>{if(E.has(e.title)){const o=(e.totalMarksCT||0)+(e.totalMarksMCQ||0)+(e.totalMarksCQ||0)+(e.totalMarksViva||0)||100;f[e.class]=(f[e.class]||0)+o}});for(const e of N){let o,a;if(S.length>0){const m=x.find(s=>s.name===S[0].title);o=m?.attendanceStartDate?tt(m.attendanceStartDate):void 0,a=m?.attendanceEndDate?tt(m.attendanceEndDate):void 0}let h=B.filter(m=>m.studentId===e.id);(o||a)&&(h=h.filter(m=>{const s=tt(m.date);return!(o&&s<o||a&&s>a)}));const v=h.filter(m=>m.status==="Present").length,j=h.filter(m=>m.status==="Absent").length,L=h.filter(m=>m.status==="Late").length,_={total:h.length,present:v,absent:j,late:L};y.set(e.id,{student:e,results:[],attendance:_}),T[e.id]=0}const i={},M={};c.forEach(e=>{n[e.id]=0,M[e.id]=0}),N.forEach(e=>i[e.id]=0),F.forEach(e=>{const o=p.find(a=>a.id===e.examId);if(o&&E.has(o.title)){const a=parseFloat(String(e.marks));if(!isNaN(a)){n[e.studentId]!==void 0&&(n[e.studentId]+=a),T[e.studentId]!==void 0&&(T[e.studentId]+=a);const h=(o.totalMarksCT||0)+(o.totalMarksMCQ||0)+(o.totalMarksCQ||0)+(o.totalMarksViva||0)||100;lt(a,h).grade==="F"&&(M[e.studentId]!==void 0&&M[e.studentId]++,i[e.studentId]!==void 0&&i[e.studentId]++)}}});const D=Object.entries(T).map(([e,o])=>{const a=N.find(j=>j.id===e),h=a?f[a.class]:1,v=i[e]||0;return{id:e,obtained:o,percent:o/h*100,failCount:v}}).sort((e,o)=>{const a=e.failCount>0,h=o.failCount>0;return a!==h?a?1:-1:a&&h&&e.failCount!==o.failCount?e.failCount-o.failCount:o.percent-e.percent}),V=Object.entries(n).map(([e,o])=>{const a=c.find(j=>j.id===e),h=a?f[a.class]:1,v=M[e]||0;return{id:e,percent:o/h*100,failCount:v}}).sort((e,o)=>{const a=e.failCount>0,h=o.failCount>0;return a!==h?a?1:-1:a&&h&&e.failCount!==o.failCount?e.failCount-o.failCount:o.percent-e.percent});for(const e of S){const o=await gt(e.id,b),a={ct:Number(e.totalMarksCT||0),mcq:Number(e.totalMarksMCQ||0),cq:Number(e.totalMarksCQ||0),viva:Number(e.totalMarksViva||0)},h=a.ct+a.mcq+a.cq+a.viva||100;let v=0;o.forEach(j=>{const L=j.marks||0;L>v&&(v=L)});for(const j of o)y.has(j.studentId)&&y.get(j.studentId)?.results.push({subject:e.subject,examTitle:e.title,marks:j.marks,ct:j.ct,mcq:j.mcq,cq:j.cq,viva:j.viva,totalMarks:h,fullMarks:a,highestMark:v})}D.forEach((e,o)=>{const a=e.id;if(y.has(a)){y.get(a).rank=o+1,y.get(a).totalObtained=e.obtained;const h=V.findIndex(j=>j.id===a)+1;y.get(a).institutionalRank=h;const v=y.get(a).student;if(v.group&&v.group!=="-"&&v.group.toLowerCase()!=="n/a"){const _=N.filter(m=>m.group===v.group).map(m=>{const s=T[m.id]||0,r=f[m.class]||1,u=i[m.id]||0;return{id:m.id,percent:s/r*100,failCount:u}}).sort((m,s)=>{const r=m.failCount>0,u=s.failCount>0;return r!==u?r?1:-1:r&&u&&m.failCount!==s.failCount?m.failCount-s.failCount:s.percent-m.percent}).findIndex(m=>m.id===a)+1;y.get(a).groupRank=_}}}),Q(y),q(!1)}else Q(new Map)})()},[b,p]);const K=l=>{const x=Y.get(l);if(!x)return;const c=ut(),F=window.open("","_blank"),B=Nt(x.results.map(a=>({marks:a.marks,totalMarks:a.totalMarks}))),N=x.totalObtained,S=x.results.reduce((a,h)=>a+h.totalMarks,0),E=S>0?N/S*100:0,y=z.find(a=>a.name===b&&a.section===x.student.section),T=W.find(a=>a.id===y?.classTeacherId),n=x.student.rollNo||x.student.id.replace(/\D/g,""),f=n?parseInt(n,10).toString():"N/A",i={studentName:x.student.name,className:x.student.class,section:x.student.section,group:x.student.group||"N/A",studentId:x.student.id,rollNo:f,examTitle:x.results.length>0?x.results[0].examTitle:"EXAMINATION",classTeacher:y?y.classTeacherName:"_____________",teacherPhone:T?T.phone:"",totalMarksObtained:N,percentage:E,rank:x.rank,institutionalRank:x.institutionalRank,groupRank:x.groupRank},M=x.attendance||{total:0,present:0,absent:0},D=S;let V=x.results.map(a=>{const h=lt(a.marks,a.totalMarks),v=a.ct??"-",j=a.cq??"-",L=a.viva??"-",_=a.fullMarks||{ct:0,cq:0,viva:0},m=_.ct>0?_.ct:"-",s=_.cq>0?_.cq:"-",r=_.viva>0?_.viva:"-";return`
            <tr>
                <td style="text-align: left; padding-left: 5px;">${a.subject}</td>
                <td>${m}</td><td>${s}</td><td>${r}</td>
                <td>${v!=="-"?Number(v).toFixed(1):"--"}</td>
                <td>${j!=="-"?Number(j).toFixed(1):"--"}</td>
                <td>${L!=="-"?Number(L).toFixed(1):"--"}</td>
                <td style="font-weight: bold;">${a.marks?Number(a.marks).toFixed(1):"-"}</td>
                <td style="font-weight: bold;">${h.grade}</td>
                <td>${h.point.toFixed(1)}</td>
                <td>${a.highestMark?Number(a.highestMark).toFixed(1):"-"}</td>
            </tr>
        `}).join("");const e=Array(Math.max(0,15-x.results.length)).fill(0).map(()=>`
            <tr><td style="height: 24px;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        `).join(""),o=`
            <html>
            <head>
                <title>Progress Report - ${i.studentName}</title>
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
                        background-image: url('${c.logo}');
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
                                <img src="${c.logo}" class="logo" />
                                <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                                <div class="inst-name">${c.name}</div>
                                <div class="inst-address">${c.address}</div>
                                <div class="inst-contact">Phone: ${c.phone}, Email: ${c.email}</div>
                                <div class="report-title">Progress Report</div>
                                <div class="exam-name">${i.examTitle}</div>
                            </div>

                            <!-- Info -->
                            <div class="student-info">
                                <div class="info-col">
                                    <div class="info-row"><span class="label">Name :</span> <span class="val">${i.studentName}</span></div>
                                    <div class="info-row"><span class="label">Class :</span> <span class="val">${i.className}</span></div>
                                    <div class="info-row"><span class="label">Section :</span> <span class="val">${i.section}</span></div>
                                    <div class="info-row"><span class="label">Group :</span> <span class="val">${i.group}</span></div>
                                </div>
                                <div class="info-col">
                                    <div class="info-row"><span class="label">ID Number :</span> <span class="val">${i.studentId}</span></div>
                                    <div class="info-row"><span class="label">Roll No :</span> <span class="val">${i.rollNo||"-"}</span></div>
                                    <div class="info-row"><span class="label">Class Teacher :</span> <span class="val">${i.classTeacher}</span></div>
                                    <div class="info-row"><span class="label">Teacher Cell :</span> <span class="val">${i.teacherPhone}</span></div>
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
                                    ${V}
                                    ${e}
                                </tbody>
                            </table>

                            <!-- Bottom Grid -->
                            <div class="bottom-grid">
                                <!-- Col 1: Summary -->
                                <div class="col-summary">
                                    <table class="sub-table">
                                        <tr><td class="lbl">Exam Full Marks</td><td style="text-align:right;">${D}</td></tr>
                                        <tr><td class="lbl">Total Obtained Marks</td><td style="text-align:right;">${i.totalMarksObtained.toFixed(2)}</td></tr>
                                        <tr><td class="lbl">Obtained Percentage</td><td style="text-align:right;">${i.percentage.toFixed(2)}%</td></tr>
                                    </table>
                                    <table class="sub-table">
                                        <tr><td class="lbl">Obtained GPA</td><td style="text-align:right; font-weight:bold;">${B.gpa}</td></tr>
                                        <tr><td class="lbl">Class Merit</td><td style="text-align:right;">${i.rank||"-"}</td></tr>
                                        <tr><td class="lbl">Institutional Merit</td><td style="text-align:right;">${i.institutionalRank||"-"}</td></tr>
                                        <tr><td class="lbl">Group Merit</td><td style="text-align:right;">${i.groupRank||"N/A"}</td></tr>
                                    </table>
                                </div>

                                <!-- Col 2: Attendance & Remarks -->
                                <div class="col-attendance">
                                    <table class="sub-table">
                                        <tr><td class="lbl">Working Days</td><td style="text-align:center;">${M.total}</td></tr>
                                        <tr><td class="lbl">Present</td><td style="text-align:center;">${M.present}</td></tr>
                                        <tr><td class="lbl">Absent</td><td style="text-align:center;">${M.absent}</td></tr>
                                    </table>
                                    
                                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 2px;">Promotion Note / Remarks</div>
                                    <div class="remarks-box">
                                        ${B.grade==="F"?"FAILED.":"PASSED."}
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
        `;F?.document.write(o),F?.document.close()};return t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsxs("div",{className:"bg-primary rounded-lg p-8 shadow-2xl w-full max-w-2xl",children:[t.jsx("h2",{className:"text-2xl font-bold mb-6 text-text-primary",children:"Generate Report Cards"}),t.jsxs("select",{onChange:l=>$(l.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent mb-4",children:[t.jsx("option",{value:"",children:"Select Class"}),[...new Set(p.map(l=>l.class))].map(l=>t.jsxs("option",{value:l,children:["Class ",l]},l))]}),t.jsx("div",{className:"max-h-96 overflow-y-auto",children:k?t.jsx("p",{children:"Loading results..."}):Array.from(Y.values()).map(({student:l})=>t.jsxs("div",{className:"flex items-center justify-between p-3 bg-secondary rounded-md mb-2",children:[t.jsx("span",{className:"text-text-primary",children:l.name}),t.jsxs("button",{onClick:()=>K(l.id),className:"text-accent hover:underline text-sm flex items-center gap-1",children:[t.jsx(it,{className:"w-4 h-4"})," Print Report"]})]},l.id))}),t.jsx("div",{className:"mt-8 flex justify-end",children:t.jsx("button",{type:"button",onClick:C,className:"px-6 py-2 rounded-md text-text-primary bg-secondary hover:bg-secondary/80",children:"Close"})})]})})},Qt=({allExams:p,onClose:C})=>{const[b,$]=d.useState(""),[k,q]=d.useState(""),[z,U]=d.useState("summary"),[W,A]=d.useState(!1),Y=d.useMemo(()=>Array.from(new Set(p.map(l=>l.title))),[p]),Q=d.useMemo(()=>b?Array.from(new Set(p.filter(l=>l.title===b).map(l=>l.class))):[],[p,b]),K=async()=>{if(!b||!k)return;const l=window.open("","_blank");if(!l){alert("Popup Blocked! Please allow popups for this website in your browser settings to view and print the result sheet.");return}l.document.write('<html><body><p style="font-family:sans-serif; text-align:center; margin-top:20%;">Generating sheet, please wait...</p></body></html>'),l.document.close(),A(!0);try{const[x,c,F,B]=await Promise.all([ft(),ht(),bt(),mt("Attendance")]),N=ut(),S=x.find(s=>s.name===b),E=S?.attendanceStartDate?tt(S.attendanceStartDate):void 0,y=S?.attendanceEndDate?tt(S.attendanceEndDate):void 0,T=c.filter(s=>s.class===k),n=p.filter(s=>s.title===b),f=n.filter(s=>s.class===k);if(f.length===0){alert("No subjects found for this exam and class."),A(!1);return}const i={};n.forEach(s=>{const r=(s.totalMarksCT||0)+(s.totalMarksMCQ||0)+(s.totalMarksCQ||0)+(s.totalMarksViva||0)||100;i[s.class]=(i[s.class]||0)+r});const M={},D={};c.forEach(s=>{M[s.id]=0,D[s.id]=0});const V=new Map(n.map(s=>[s.id,s])),e=new Map;F.forEach(s=>{e.set(`${s.studentId}_${s.examId}`,s)});const o=new Map;B.forEach(s=>{const r=o.get(s.studentId)||[];r.push(s),o.set(s.studentId,r)}),F.forEach(s=>{const r=V.get(s.examId);if(r){const u=parseFloat(String(s.marks));if(!isNaN(u)){M[s.studentId]!==void 0&&(M[s.studentId]+=u);const g=(r.totalMarksCT||0)+(r.totalMarksMCQ||0)+(r.totalMarksCQ||0)+(r.totalMarksViva||0)||100;lt(u,g).grade==="F"&&D[s.studentId]!==void 0&&D[s.studentId]++}}});const a=c.map(s=>{const r=M[s.id]||0,u=i[s.class]||0,g=u>0?r/u*100:0,O=D[s.id]||0;return{id:s.id,percent:g,failCount:O}}).filter(s=>s.percent>0).sort((s,r)=>{const u=s.failCount>0,g=r.failCount>0;return u!==g?u?1:-1:u&&g&&s.failCount!==r.failCount?s.failCount-r.failCount:r.percent-s.percent}),h=f.length,v=T.map(s=>{let r=0,u=0,g=0,O=0;f.forEach(R=>{const X=e.get(`${s.id}_${R.id}`),st=X?parseFloat(String(X.marks)):0,ot=isNaN(st)?0:st,J=(R.totalMarksCT||0)+(R.totalMarksMCQ||0)+(R.totalMarksCQ||0)+(R.totalMarksViva||0)||100,at=lt(ot,J);at.grade==="F"&&O++,r+=ot,u+=J,g+=at.point});const w=u>0?r/u*100:0,I=O>0?0:g/h,Z=a.findIndex(R=>R.id===s.id),P=Z!==-1?Z+1:"N/A";let H=o.get(s.id)||[];(E||y)&&(H=H.filter(R=>{const X=tt(R.date);return!(E&&X<E||y&&X>y)}));const et=H.filter(R=>R.status==="Present").length,rt=H.filter(R=>R.status==="Absent").length,G=H.filter(R=>R.status==="Late").length,nt={total:H.length,present:et,absent:rt,late:G};return{id:s.id,roll:s.rollNo||s.id.replace(/\D/g,""),name:s.name,obtained:isNaN(r)?0:r,totalPossible:u,percent:isNaN(w)?0:w,totalGP:isNaN(g)?0:g,gpa:isNaN(I)?0:I,failCount:O,instMerit:P,attendance:nt}});z==="summary"?v.sort((s,r)=>{const u=s.failCount>0,g=r.failCount>0;return u!==g?u?1:-1:u&&g&&s.failCount!==r.failCount?s.failCount-r.failCount:(r.percent||0)-(s.percent||0)}):v.sort((s,r)=>{const u=parseInt(s.roll,10)||0,g=parseInt(r.roll,10)||0;return u-g});const j=T.length>0?T[0].section:"N/A",L=T.length>0&&T[0].group||"N/A",_=v.length>0?v[0].totalPossible:0;let m="";if(z==="summary"){const r=[];for(let g=0;g<v.length;g+=28)r.push(v.slice(g,g+28));const u=r.map((g,O)=>{const w=g.map((P,H)=>{const et=O*28+H;return`
                        <tr class="data-row">
                            <td style="text-align: center;">${parseInt(P.roll,10)||"-"}</td>
                            <td style="text-align: left; padding-left: 8px;">${P.name}</td>
                            <td style="text-align: center;">${P.obtained.toFixed(1)}</td>
                            <td style="text-align: center;">${P.percent.toFixed(2)}%</td>
                            <td style="text-align: center; font-weight: bold;">${P.gpa.toFixed(2)}</td>
                            <td style="text-align: center; font-weight: bold; color: #1E5631;">${P.obtained>0?et+1:"-"}</td>
                            <td style="text-align: center; font-weight: bold;">${P.instMerit}</td>
                            <td style="text-align: center;">${P.attendance.present} / ${P.attendance.total}</td>
                            <td style="text-align: center; font-size: 10px;">${P.failCount>0?`<span style="color: red; font-weight:bold;">Fail(${P.failCount})</span>`:'<span style="color: #1E5631;">Pass</span>'}</td>
                        </tr>
                    `}).join(""),I=28-g.length,Z=Array(Math.max(0,I)).fill(0).map(()=>`
                        <tr class="empty-row">
                             <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    `).join("");return`
                    <div class="page-container" style="${O<r.length-1?"page-break-after: always;":""}">
                        <div class="watermark"></div>
                        <div class="header">
                            <img src="${N.logo}" class="logo" />
                            <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                            <div class="inst-name">${N.name}</div>
                            <div class="inst-addr">${N.address}</div>
                            <div class="exam-title">${b}</div>
                            <div class="sheet-title">Result Sheet of ${k} (${new Date().getFullYear()})</div>
                        </div>

                        <div class="meta-info">
                            <div>Section: ${j} | Group: ${L} | Page: ${O+1} of ${r.length}</div>
                            <div style="text-align: right;">Total Full Marks: ${_.toFixed(1)}</div>
                        </div>

                        <table class="marks-table">
                            <thead>
                                <tr>
                                    <th style="width: 6%;">Roll</th>
                                    <th>Student Name</th>
                                    <th style="width: 9%;">Obtained</th>
                                    <th style="width: 9%;">Percent</th>
                                    <th style="width: 7%;">GPA</th>
                                    <th style="width: 7%;">Merit</th>
                                    <th style="width: 9%;">Inst. Merit</th>
                                    <th style="width: 9%;">Atten.</th>
                                    <th style="width: 9%;">Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${w}
                                ${Z}
                            </tbody>
                        </table>
                        <div class="spacer"></div>

                        <div class="footer">
                            <div class="sig-box"><div class="sig-line">Class Teacher</div></div>
                            <div class="sig-box"><div class="sig-line">Exam Coordinator</div></div>
                            <div class="sig-box"><div class="sig-line">Director</div></div>
                        </div>

                        <div class="brand">Powered by IICM</div>
                    </div>
                    `}).join("");m=`
                    <html>
                    <head>
                        <title>Result Sheet - ${k}</title>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
                        <style>
                            @media print { 
                                @page { size: A4 portrait; margin: 0; } 
                                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } 
                            }
                            body { font-family: 'Roboto', sans-serif; font-size: 11px; padding: 0; margin: 0; color: #000; background: #fff; }
                            
                            .page-container {
                                width: 210mm;
                                height: 297mm;
                                padding: 10mm;
                                margin: 0 auto;
                                box-sizing: border-box;
                                position: relative;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                            }

                            .watermark { 
                                position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                                opacity: 0.12; width: 450px; height: 450px; 
                                background-image: url('${N.logo}'); 
                                background-size: contain; background-repeat: no-repeat; z-index: -1; 
                            }

                            .header { text-align: center; position: relative; margin-bottom: 5px; border-bottom: 2px solid #1E5631; padding-bottom: 5px; flex-shrink: 0; }
                            .logo { position: absolute; left: 0; top: 10px; width: 50px; height: 50px; }
                            .bismillah-img { width: 80px; display: block; margin: 0 auto 5px auto; }
                            .inst-name { font-size: 20px; font-weight: bold; text-transform: uppercase; color: #1E5631; margin-bottom: 2px; }
                            .inst-addr { font-size: 10px; margin-bottom: 5px; color: #555; }
                            .exam-title { font-size: 16px; font-weight: bold; text-transform: uppercase; text-decoration: underline; margin-bottom: 2px; color: #1E5631; }
                            .sheet-title { font-size: 12px; font-weight: bold; margin-bottom: 5px; }
                            
                            .meta-info { display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold; font-size: 10px; border: 1px solid #333; padding: 5px 8px; background: #fdfbf7; flex-shrink: 0; }
                            
                            /* Table: fixed row heights, no stretching */
                            .marks-table { width: 100%; border-collapse: collapse; flex-shrink: 0; }
                            .marks-table th, .marks-table td { border: 1px solid #333; padding: 0 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                            .marks-table th { background-color: #f2f2f2; text-transform: uppercase; font-size: 9px; font-weight: bold; color: #1E5631; height: 22px; }
                            .data-row td { height: 28px; }
                            .empty-row td { height: 28px; }

                            /* Spacer absorbs remaining space between table and footer */
                            .spacer { flex: 1 1 auto; }

                            /* Footer always pinned at bottom */
                            .footer { padding-top: 15px; display: flex; justify-content: space-between; flex-shrink: 0; }
                            .sig-box { text-align: center; width: 180px; }
                            .sig-line { border-top: 1px solid #000; padding-top: 5px; font-weight: bold; font-size: 11px; }
                            .brand { text-align: right; font-size: 9px; font-style: italic; color: #888; margin-top: 5px; flex-shrink: 0; }
                        </style>
                    </head>
                    <body>
                        ${u}
                        <script>
                            window.onload = function() {
                                setTimeout(() => {
                                    window.print();
                                }, 500);
                            }
                        <\/script>
                    </body>
                    </html>
                `}else{const s=f.map(w=>{const I=[];return w.totalMarksCT!==void 0&&w.totalMarksCT>0&&I.push({name:"CT",field:"ct"}),w.totalMarksViva!==void 0&&w.totalMarksViva>0&&I.push({name:"VI",field:"viva"}),w.totalMarksMCQ!==void 0&&w.totalMarksMCQ>0&&I.push({name:"MCQ",field:"mcq"}),w.totalMarksCQ!==void 0&&w.totalMarksCQ>0&&I.push({name:"CQ",field:"cq"}),I.length===0&&I.push({name:"Total",field:"marks"}),{subjectName:w.subject,examId:w.id,components:I}}),r=s.reduce((w,I)=>w+I.components.length,0),u=15,g=[];for(let w=0;w<v.length;w+=u)g.push(v.slice(w,w+u));const O=g.map((w,I)=>{const Z=w.map((G,nt)=>{const R=s.map(X=>{const st=e.get(`${G.id}_${X.examId}`);return X.components.map(ot=>{const J=st?st[ot.field]:void 0;let at="-";if(J!=null&&J!==""){const pt=parseFloat(String(J));at=isNaN(pt)?"-":pt.toString()}return`<td style="text-align: center;">${at}</td>`}).join("")}).join("");return`
                        <tr class="data-row">
                            <td style="text-align: center;">${parseInt(G.roll,10)||"-"}</td>
                            <td style="text-align: left; padding-left: 6px; font-weight: 500;">${G.name}</td>
                            ${R}
                            <td style="text-align: center; font-weight: bold;">${G.obtained.toFixed(1)}</td>
                        </tr>
                        `}).join(""),P=u-w.length,H=Array(Math.max(0,P)).fill(0).map(()=>`
                        <tr class="empty-row">
                            <td></td><td></td>${Array(r).fill(0).map(()=>"<td></td>").join("")}<td></td>
                        </tr>
                        `).join(""),et=s.map(G=>`<th colspan="${G.components.length}" style="font-size: 9px; padding: 2px 0;">${G.subjectName}</th>`).join(""),rt=s.map(G=>G.components.map(nt=>`<th style="font-size: 8px; padding: 2px 0;">${nt.name}</th>`).join("")).join("");return`
                    <div class="page-container" style="${I<g.length-1?"page-break-after: always;":""}">
                        <div class="watermark"></div>
                        <div class="header">
                            <img src="${N.logo}" class="logo" />
                            <img src="https://iili.io/fEBrvMQ.png" class="bismillah-img" alt="Bismillah" />
                            <div class="inst-name">${N.name}</div>
                            <div class="inst-addr">${N.address}</div>
                            <div class="exam-title">${b}</div>
                            <div class="sheet-title">Marks Sheet of ${k} (${new Date().getFullYear()})</div>
                        </div>

                        <div class="meta-info">
                            <div>Section: ${j} | Group: ${L} | Page: ${I+1} of ${g.length}</div>
                            <div style="text-align: right;">Total Full Marks: ${_.toFixed(1)}</div>
                        </div>

                        <table class="marks-table">
                            <thead>
                                <tr>
                                    <th rowspan="2" style="width: 5%;">Roll</th>
                                    <th rowspan="2" style="width: 18%;">Student Name</th>
                                    ${et}
                                    <th rowspan="2" style="width: 8%;">Total</th>
                                </tr>
                                <tr>
                                    ${rt}
                                </tr>
                            </thead>
                            <tbody>
                                ${Z}
                                ${H}
                            </tbody>
                        </table>
                        <div class="spacer"></div>

                        <div class="footer">
                            <div class="sig-box"><div class="sig-line">Class Teacher</div></div>
                            <div class="sig-box"><div class="sig-line">Exam Coordinator</div></div>
                            <div class="sig-box"><div class="sig-line">Director</div></div>
                        </div>

                        <div class="brand">Powered by IICM</div>
                    </div>
                    `}).join("");m=`
                <html>
                <head>
                    <title>Marks Sheet - ${k}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
                    <style>
                        @media print { 
                            @page { size: A4 landscape; margin: 0; } 
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } 
                        }
                        body { font-family: 'Roboto', sans-serif; font-size: 11px; padding: 0; margin: 0; color: #000; background: #fff; }
                        
                        .page-container {
                            width: 297mm;
                            height: 210mm;
                            padding: 10mm;
                            margin: 0 auto;
                            box-sizing: border-box;
                            position: relative;
                            overflow: hidden;
                            display: flex;
                            flex-direction: column;
                        }

                        .watermark { 
                            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                            opacity: 0.08; width: 350px; height: 350px; 
                            background-image: url('${N.logo}'); 
                            background-size: contain; background-repeat: no-repeat; z-index: -1; 
                        }

                        .header { text-align: center; position: relative; margin-bottom: 5px; border-bottom: 2px solid #1E5631; padding-bottom: 5px; flex-shrink: 0; }
                        .logo { position: absolute; left: 0; top: 5px; width: 50px; height: 50px; }
                        .bismillah-img { width: 80px; display: block; margin: 0 auto 5px auto; }
                        .inst-name { font-size: 20px; font-weight: bold; text-transform: uppercase; color: #1E5631; margin-bottom: 2px; }
                        .inst-addr { font-size: 10px; margin-bottom: 5px; color: #555; }
                        .exam-title { font-size: 16px; font-weight: bold; text-transform: uppercase; text-decoration: underline; margin-bottom: 2px; color: #1E5631; }
                        .sheet-title { font-size: 12px; font-weight: bold; margin-bottom: 5px; }
                        
                        .meta-info { display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold; font-size: 10px; border: 1px solid #333; padding: 5px 8px; background: #fdfbf7; flex-shrink: 0; }
                        
                        .marks-table { width: 100%; border-collapse: collapse; flex-shrink: 0; table-layout: fixed; }
                        .marks-table th, .marks-table td { border: 1px solid #333; padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                        .marks-table th { background-color: #f2f2f2; text-transform: uppercase; font-size: 9px; font-weight: bold; color: #1E5631; text-align: center; }
                        .data-row td { height: 28px; }
                        .empty-row td { height: 28px; }

                        .spacer { flex: 1 1 auto; }

                        .footer { padding-top: 15px; display: flex; justify-content: space-between; flex-shrink: 0; }
                        .sig-box { text-align: center; width: 220px; }
                        .sig-line { border-top: 1px solid #000; padding-top: 5px; font-weight: bold; font-size: 11px; }
                        .brand { text-align: right; font-size: 9px; font-style: italic; color: #888; margin-top: 5px; flex-shrink: 0; }
                    </style>
                </head>
                <body>
                    ${O}
                    <script>
                        window.onload = function() {
                            setTimeout(() => {
                                window.print();
                            }, 500);
                        }
                    <\/script>
                </body>
                </html>
                `}l.document.open(),l.document.write(m),l.document.close()}catch(x){console.error(x),alert("Failed to generate sheet.")}finally{A(!1)}};return W?t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm",children:t.jsxs("div",{className:"bg-primary p-8 rounded-xl shadow-2xl flex flex-col items-center",children:[t.jsx("div",{className:"w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"}),t.jsx("p",{className:"text-text-primary font-bold",children:"Processing Merit Lists..."}),t.jsx("p",{className:"text-text-secondary text-sm",children:"Correcting Non-Numeric Data & Ranking"})]})}):t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4",children:t.jsxs("div",{className:"bg-primary rounded-lg p-6 sm:p-8 shadow-2xl w-full max-w-lg",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Result Sheet Generator"}),t.jsx("button",{onClick:C,className:"text-text-secondary hover:text-red-400",children:"Close"})]}),t.jsxs("div",{className:"space-y-4 mb-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1",children:"1. Select Exam"}),t.jsxs("select",{value:b,onChange:l=>{$(l.target.value),q("")},className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",required:!0,children:[t.jsx("option",{value:"",children:"-- Choose Exam --"}),Y.map(l=>t.jsx("option",{value:l,children:l},l))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-1",children:"2. Select Class"}),t.jsxs("select",{value:k,onChange:l=>q(l.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",required:!0,disabled:!b,children:[t.jsx("option",{value:"",children:"-- Select Class --"}),Q.map(l=>t.jsx("option",{value:l,children:l},l))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-text-secondary mb-2",children:"3. Select Sheet Type"}),t.jsxs("div",{className:"flex gap-6 p-3 bg-secondary/20 rounded-md border border-secondary",children:[t.jsxs("label",{className:"flex items-center gap-2 text-text-primary cursor-pointer font-medium",children:[t.jsx("input",{type:"radio",name:"sheetType",value:"summary",checked:z==="summary",onChange:()=>U("summary"),className:"w-4 h-4 text-accent bg-secondary border-secondary focus:ring-accent"}),t.jsx("span",{children:"Summary Sheet"})]}),t.jsxs("label",{className:"flex items-center gap-2 text-text-primary cursor-pointer font-medium",children:[t.jsx("input",{type:"radio",name:"sheetType",value:"marks",checked:z==="marks",onChange:()=>U("marks"),className:"w-4 h-4 text-accent bg-secondary border-secondary focus:ring-accent"}),t.jsx("span",{children:"Subject-wise Marks Sheet"})]})]})]})]}),t.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-secondary",children:[t.jsx("button",{type:"button",onClick:C,className:"px-6 py-2 rounded-md text-text-primary bg-secondary hover:bg-secondary/80",children:"Cancel"}),t.jsxs("button",{onClick:K,disabled:!b||!k,className:"px-6 py-2 rounded-md text-white bg-accent hover:bg-accent/90 font-semibold disabled:bg-gray-500 flex items-center gap-2",children:[t.jsx(it,{className:"w-4 h-4"})," Generate & Print Sheet"]})]})]})})};export{Wt as default};
