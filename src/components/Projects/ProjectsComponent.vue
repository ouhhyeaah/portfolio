<template>
    <section id="projects" class="mont mt-20 mx-8 p-4 lg:mx-60">
        <h1 class="mont-bold text-4xl">Projects :</h1>
        <div v-for="project in ref_projects" :key="project.id" class="my-8">
            <div
                class="z-10 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-300 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 relative w-128 border text-left text-base font-bold rounded-lg overflow-hidden hover:text-pink-color before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#6B6BF8CC] before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-[#F86BDFFF] after:right-8 after:top-3 after:rounded-full after:blur-lg"
                :class="
                    isDark
                        ? 'border-gray-800 text-white'
                        : 'text-dark-mode bg-transparent border-gray-400 shadow-2xl'
                "
                @click="showModal(project)"
            >
                <h1 class="mont-bold w-7/12 text-wrap my-4 mx-4">
                    {{ project.title }}
                </h1>
                <p class="z-40 w-2/3 line-clamp-1 my-4 mx-4">
                    {{ project.description }}
                </p>
            </div>
            <transition name="slide-fade">
                <ModalView
                    v-if="project.isModalVisible"
                    @close="closeModal(project)"
                    :is-dark="isDark"
                >
                    <template v-slot:header>
                        {{ project.title }}
                    </template>
                    <template v-slot:body>
                        {{ project.description }}
                        <br /><br />
                        <span
                            class="hover:text-pink-200 transition-all duration-300 font-bold"
                        >
                            Date :
                            {{ new Date(project.date).toLocaleDateString() }}
                            <br />
                        </span>
                        <span class="mont-light italic mt-2">
                            {{
                                (new Date().getFullYear() -
                                    new Date(project.date).getFullYear()) *
                                    12 +
                                new Date().getMonth() -
                                new Date(project.date).getMonth()
                            }}
                            months ago
                        </span>
                        <br />
                        <br />
                        <span class="italic mont-light">{{
                            project.keywords.join(", ")
                        }}</span>
                    </template>
                    <template v-slot:footer>
                        <a v-if="project.link" :href="project.link">{{
                            project.link
                        }}</a>
                        <span v-else
                            >Unfortunately, this project is not available on
                            GitHub</span
                        >
                    </template>
                </ModalView>
            </transition>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import projects from "@/data/projects";
import ModalView from "@/components/add-on/ModalView.vue";
export default {
    props: {
        isDark: Boolean,
    },
    setup() {
        const ref_projects = ref(
            projects.map((project) => ({
                ...project,
                isModalVisible: false,
            })),
        );
        const showModal = (project) => {
            project.isModalVisible = true;
        };

        const closeModal = (project) => {
            project.isModalVisible = false;
        };

        return {
            ref_projects,
            showModal,
            closeModal,
        };
    },
    components: {
        ModalView,
    },
};
</script>

<style>
.slide-fade-enter-active {
    transition: all 0.5s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
