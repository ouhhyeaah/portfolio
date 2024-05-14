<template>
    <div class="w-full">
      <!-- Navbar pour mobile et tablette -->
      <nav class="block sm:block md:block lg:hidden mobile-navbar">
        <MobileNavbar :navbar-items="navbar_items" />
      </nav>
      <!-- Navbar pour desktop -->
      <nav class="hidden lg:block">
        <DesktopNavbar :navbar-items="navbar_items" />
      </nav>
    </div>
</template>


<script>
const navbar_items = [
  {id: 1, name: 'Education', link: '#education'},
  {id: 2, name: 'Skills', link: '#skills'},
  {id: 3, name: 'Projects', link: '#projects'},
  {id: 4, name: 'Contact', link: '#contact'}
]
import MobileNavbar from "@/components/Navbar/MobileNavbarComponent.vue";
import DesktopNavbar from "@/components/Navbar/DesktopNavbarComponent.vue";

export default {
  name: "NavBar",
  components: {
    MobileNavbar,
    DesktopNavbar
  },
  setup() {
    return {
      navbar_items
    }
  },
  mounted() {
    const screenSize = window.innerWidth;
    if (screenSize >= 1024) {
      const mobileNavbar = document.querySelector(".mobile-navbar");
      if (mobileNavbar) {
        mobileNavbar.remove();
      }
    }
  }
};
</script>