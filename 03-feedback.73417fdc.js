function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?g(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(x(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function O(e){return u=void 0,p&&r?g(e):(r=o=void 0,a)}function h(){var e=v(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),g(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,y(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:O(v())},h}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form"),S=document.querySelector('input[type="email"]'),x=document.querySelector('textarea[name="message"]');document.querySelector('button[type="submit"]');g.addEventListener("input",e(t)((()=>{let e={email:S.value,textarea:x.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){const e=localStorage.getItem("feedback-form-state");null!==e&&(S.value=JSON.parse(e).email,x.value=JSON.parse(e).textarea)}(),g.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:S.value,textarea:x.value}),localStorage.removeItem("feedback-form-state"),g.reset()}));
//# sourceMappingURL=03-feedback.73417fdc.js.map