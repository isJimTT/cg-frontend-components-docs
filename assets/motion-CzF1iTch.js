import{_ as n}from"./iframe-CiolPNwv.js";const r=a=>({animationDuration:a,animationFillMode:"both"}),m=a=>({animationDuration:a,animationFillMode:"both"}),u=function(a,i,o,t){const e=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${e}${a}-enter,
      ${e}${a}-appear
    `]:n(n({},r(t)),{animationPlayState:"paused"}),[`${e}${a}-leave`]:n(n({},m(t)),{animationPlayState:"paused"}),[`
      ${e}${a}-enter${a}-enter-active,
      ${e}${a}-appear${a}-appear-active
    `]:{animationName:i,animationPlayState:"running"},[`${e}${a}-leave${a}-leave-active`]:{animationName:o,animationPlayState:"running",pointerEvents:"none"}}};export{u as i};
