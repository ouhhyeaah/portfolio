<template>
    <button
        v-if="showButton"
        @click="scrollToTop"
        class="scroll-to-the-top-button h-10 w-10 fixed bottom-20 right-10 z-40 dark:bg-white rounded-full shadow-md bg-[#e0e0e0] dark:text-black transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
        title="Go to top"
        style="cursor: none"
    >
        <FontAwesomeIcon :icon="faChevronUp()" size="xl" />
    </button>
</template>

<script>
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    components: { FontAwesomeIcon },
    data() {
        return {
            showButton: false,
        };
    },
    methods: {
        faChevronUp() {
            return faChevronUp;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        handleScroll() {
            if (window.scrollY > 200) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>
