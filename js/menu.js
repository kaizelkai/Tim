function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
    
     // Change l'icône en croix ou en menu hamburger
     if (navMenu.classList.contains('open')) {
        menuIcon.innerHTML = '&times;'; // Icône de croix
    } else {
        menuIcon.innerHTML = '&#9776;'; // Icône de menu hamburger
    }
    // Accessibilité: bascule le "aria-expanded"
    const isExpanded = navMenu.classList.contains('open');
    document.querySelector('.menu-icon').setAttribute('aria-expanded', isExpanded);
}
