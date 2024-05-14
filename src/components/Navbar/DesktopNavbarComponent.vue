<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const toggleAnimation = () => {
    const isDark = document.getElementsByClassName("dark");
    const toggleButton = document.getElementById("toggleBtn");
    if (isDark.length !== 0) {
        toggleButton.style.transition = "translate .7s";
        toggleButton.style.translate = "0% 150%";
    } else {
        toggleButton.style.transition = "translate .7s";
        toggleButton.style.translate = "0% 0%";
    }
};
import ThemeToggle from "@/components/add-on/ThemeToggleComponent.vue";
</script>

<template>
    <div class="w-full flex justify-between p-10">
        <div
            class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower"
        >
            <a href="#" class="text-gradient"> Louis. </a>
        </div>
        <div class="flex gap-10">
            <ul
                class="dark:text-white flex gap-6 mont-bold my-auto"
                v-for="navbar_item in navbarItems"
                :key="navbar_item.id"
            >
                <a :href="navbar_item.link" class="flex">
                    <li
                        class="p-6 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:text-pink-color"
                        :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
                    >
                        {{ navbar_item.name }}
                    </li>
                </a>
            </ul>
            <ul class="h-full" @click="toggleAnimation">
                <ThemeToggle
                    @click="toggleDark(), toggleAnimation()"
                    id="toggleBtn"
                    style="cursor: none"
                />
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "DesktopNavbar",
    props: {
        isDark: Boolean,
        navbarItems: Array,
    },
};
</script>
