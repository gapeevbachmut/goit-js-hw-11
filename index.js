import{a as f,S as m,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50822594-66f906f8174863719ea2394f1",h="https://pixabay.com/api/";async function g(s){return(await f(h,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".list"),l=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const r=s.map(({largeImageURL:o,webformatURL:n,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${n}" alt="${e}" />
      </a>
      <div class="descr">
      <p>Likes: <span>${t}</span> </p>
      <p>Views: <span>${i}</span> </p>
      <p>Comments: <span>${p}</span> </p>
      <p>Downloads: <span>${d}</span> </p>
      </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}function q(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form"),w=document.querySelector("input");u.addEventListener("submit",$);async function $(s){s.preventDefault();const r=w.value.toLocaleLowerCase().trim();if(!r){a.error({title:"❌ Error",message:"Будь ласка, введіть запит!!!",position:"topRight"});return}b(),q();try{const o=await g(r);if(o.hits.length===0){a.error({title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits)}catch(o){console.error(o),a.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"})}finally{v(),u.reset()}}
//# sourceMappingURL=index.js.map
