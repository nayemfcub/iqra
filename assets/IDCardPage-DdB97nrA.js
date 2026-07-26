const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./IDCardModal-h4IxKiRA.js","./portal-D3vPtU1u.js","./react-vendor-C0vzKmSs.js"])))=>i.map(i=>d[i]);
import{u as E,s as R,j as t,g as M,_ as H}from"./portal-D3vPtU1u.js";import{b as s,R as G}from"./react-vendor-C0vzKmSs.js";import{g as q}from"./students-BvLi725A.js";import{g as B}from"./staff-BqIqVFbs.js";import{g as O}from"./classes-Dps0ngeS.js";const U=G.lazy(()=>H(()=>import("./IDCardModal-h4IxKiRA.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Q=()=>{const{user:w}=E(),v=["Admin","IT Admin"].includes(w?.role||""),[x,N]=s.useState([]),[p,C]=s.useState([]),[m,S]=s.useState([]),[k,u]=s.useState(!0),[a,A]=s.useState("students"),[l,f]=s.useState(""),[i,h]=s.useState(""),[g,b]=s.useState(null),[D,y]=s.useState(!1);s.useEffect(()=>{(async()=>{u(!0);const[r,o,c]=await Promise.all([q(),B(),O()]);N(r),C(o),S(c),u(!1)})()},[]);const P=s.useMemo(()=>Array.from(new Set(m.map(e=>e.name))).sort(R),[m]),n=s.useMemo(()=>{if(a==="staff")return l?p.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())||e.id.toLowerCase().includes(l.toLowerCase())):p;{let e=x;if(i&&(e=e.filter(r=>r.class===i)),l){const r=l.toLowerCase();e=e.filter(o=>o.name.toLowerCase().includes(r)||o.id.toLowerCase().includes(r))}return e}},[x,p,a,l,i]),L=e=>{b(e)},I=()=>{if(n.length===0)return;y(!0);const e=M(),r=a==="students",o=[],c=4;for(let d=0;d<n.length;d+=c){const z=n.slice(d,d+c).map(_=>generateSingleCardHTML(_,r,e.name,e.logo,e.address)).join("");o.push(`<div class="print-page">${z}</div>`)}const $=o.join(""),j=window.open("","_blank"),T=`
            <html>
            <head>
                <title>All ID Cards - ${e.name}</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
                <style>
                    ${getCardStyles(e.logo)}
                    
                    @page {
                        size: A4 landscape;
                        margin: 0.3in;
                    }
                    body {
                        font-family: 'Roboto', sans-serif;
                        background-color: #fff;
                        margin: 0;
                        padding: 0;
                    }
                    .print-page {
                        width: 10.8in;
                        height: 7.4in;
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, 1fr);
                        gap: 20px 15px;
                        justify-items: center;
                        align-items: center;
                        box-sizing: border-box;
                        page-break-after: always;
                        page-break-inside: avoid;
                    }
                    .print-page:last-of-type {
                        page-break-after: avoid;
                    }
                    .id-card {
                        margin: 0; /* Handled by grid gap */
                    }
                    
                    .print-btn {
                        position: fixed; bottom: 20px; right: 20px;
                        background: #1E5631; color: #fff;
                        border: none; padding: 12px 24px;
                        font-size: 15px; font-weight: bold;
                        border-radius: 8px; cursor: pointer;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                        z-index: 9999;
                    }
                    .print-btn:hover { background: #154a27; }
                    .card-count {
                        position: fixed; top: 12px; left: 50%; transform: translateX(-50%);
                        background: #1E5631; color: #fff;
                        padding: 6px 20px; border-radius: 20px;
                        font-family: sans-serif; font-size: 13px;
                        z-index: 9999;
                    }
                </style>
            </head>
            <body>
                <div class="card-count no-print">${n.length} ID Cards — ${e.name}</div>
                ${$}
                <button class="print-btn no-print" onclick="window.print()">🖨 Print All</button>
            </body>
            </html>
        `;j?.document.write(T),j?.document.close(),y(!1)};return v?t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold text-text-primary",children:"Generate ID Cards"}),t.jsxs("div",{className:"bg-primary p-4 rounded-lg shadow-lg",children:[t.jsx("div",{className:"flex border-b border-secondary mb-4",children:["students","staff"].map(e=>t.jsx("button",{onClick:()=>{A(e),f(""),h("")},className:`px-4 py-2 font-medium text-sm -mb-px border-b-2 ${a===e?"border-accent text-accent":"border-transparent text-text-secondary hover:text-text-primary"}`,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[a==="students"&&t.jsx("div",{className:"md:w-1/4",children:t.jsxs("select",{value:i,onChange:e=>h(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent",children:[t.jsx("option",{value:"",children:"All Classes"}),P.map(e=>t.jsx("option",{value:e,children:e},e))]})}),t.jsx("div",{className:"flex-1",children:t.jsx("input",{type:"text",placeholder:`Search ${a} by name or ID...`,value:l,onChange:e=>f(e.target.value),className:"w-full bg-secondary p-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"})}),t.jsx("div",{className:"flex items-center",children:t.jsxs("button",{onClick:I,disabled:D||n.length===0,className:"whitespace-nowrap bg-accent text-white px-4 py-3 rounded-md font-bold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors",title:`Print all ${n.length} visible ID cards`,children:["🖨 Print All (",n.length,")"]})})]})]}),t.jsx("div",{className:"bg-primary rounded-lg shadow-lg",children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm text-left text-text-secondary",children:[t.jsx("thead",{className:"text-xs text-text-primary uppercase bg-secondary",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Name"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"ID"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:a==="students"?"Class Details":"Role"}),t.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),t.jsx("tbody",{children:k?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"text-center py-4",children:"Loading..."})}):n.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"text-center py-8 text-text-secondary italic",children:"No results found."})}):n.map(e=>t.jsxs("tr",{className:"border-b border-secondary hover:bg-secondary/50",children:[t.jsx("td",{className:"px-6 py-4 font-medium text-text-primary",children:e.name}),t.jsx("td",{className:"px-6 py-4",children:e.id}),t.jsx("td",{className:"px-6 py-4",children:a==="students"?`${e.class} - ${e.section}`:e.role}),t.jsx("td",{className:"px-6 py-4",children:t.jsx("button",{onClick:()=>L(e),className:"font-medium text-accent hover:underline",children:"Generate"})})]},e.id))})]})})}),t.jsx(s.Suspense,{fallback:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:t.jsx("div",{className:"w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"})}),children:g&&t.jsx(U,{person:g,type:a,onClose:()=>b(null)})})]}):t.jsx("div",{className:"text-center p-8 text-red-400",children:"Access Denied. Contact Administrator."})};export{Q as default};
