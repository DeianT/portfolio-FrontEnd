const mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');
const cerrar: HTMLElement | null = document.getElementById('cerrar');

function HideMenuButton(): void{
    if (mobileMenu == null)
        return;
    mobileMenu.style.display = 'none';
}

function ShowMenuButton(): void{
    if (mobileMenu == null)
        return;
    mobileMenu.style.display = 'block';
}

mobileMenu?.addEventListener('click', HideMenuButton);
cerrar?.addEventListener('click', ShowMenuButton);