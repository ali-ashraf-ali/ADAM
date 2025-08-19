document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');

    // وظيفة لتبديل حالة القائمة
    function toggleMenu() {
        hamburgerBtn.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    }

    // فتح وإغلاق القائمة عند الضغط على زر الهامبرغر
    hamburgerBtn.addEventListener('click', toggleMenu);

    // إغلاق القائمة عند النقر على أي رابط
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });

});