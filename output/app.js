"use strict";
const mobileMenu = document.getElementById('mobile-menu');
const cerrar = document.getElementById('cerrar');
// console.log(mobileMenu);
function HideMenuButton() {
    if (mobileMenu == null)
        return;
    mobileMenu.style.display = 'none';
}
function ShowMenuButton() {
    if (mobileMenu == null)
        return;
    mobileMenu.style.display = 'block';
}
mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.addEventListener('click', HideMenuButton);
cerrar === null || cerrar === void 0 ? void 0 : cerrar.addEventListener('click', ShowMenuButton);
