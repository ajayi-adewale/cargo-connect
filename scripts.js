document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sidebar')
    const sideBarWrapper = document.querySelector('.sidebar-wrapper')
    const closeBtn = document.querySelector('.closebtn')
    const menuBtn = document.querySelector('.menu-icon')

    function openSidebar() {
        sideBarWrapper.style.display = 'block'
        sideBar.classList.add('sidebar-open')
    }

    function closeSidebar() {
        sideBarWrapper.style.display = 'none'
        sideBar.classList.remove('sidebar-open')
    }

    menuBtn.addEventListener('click', openSidebar)

    closeBtn.addEventListener('click', closeSidebar)

    window.addEventListener('resize', closeSidebar)

})