let s=!1;try{const e=Object.defineProperty({},"passive",{get(){s=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch{}export{s};
