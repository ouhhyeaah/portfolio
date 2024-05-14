<script setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
import skills from "@/data/skills";
import ProgressBarComponent from "@/components/Skills/ProgressBarComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLinux,
    faAws,
    faMicrosoft,
    faDocker,
    faJs,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
library.add(faLinux, faAws, faMicrosoft, faDocker, faJs, faPython);

const ref_skills = ref(skills);
</script>

<template>
    <section id="skills" class="pt-20">
        <div class="w-full h-auto flex flex-wrap justify-center">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div
                    v-for="skill in ref_skills"
                    :key="skill.id"
                    class="flex justify-center"
                >
                    <div
                        class="p-10 m-5 w-full col-span-2"
                        :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
                    >
                        <span
                            class="text-2xl mont-bold flex justify-between gap-8 pb-5"
                        >
                            {{ skill.name }}
                            <FontAwesomeIcon
                                v-if="
                                    skill.icon !== 'ansible' &&
                                    skill.icon !== 'adobe' &&
                                    skill.icon !== 'azure'
                                "
                                :icon="['fab', skill.icon]"
                                size="lg"
                            />
                            <img
                                src="../../assets/icons/ansible.svg"
                                style="height: 30px"
                                v-if="skill.icon === 'ansible'"
                                alt="ansibleIcon"
                            />
                            <img
                                src="../../assets/icons/adobe.svg"
                                style="height: 30px"
                                v-if="skill.icon === 'adobe'"
                                alt="adobeIcon"
                                :class="isDark ? 'bg-white' : ''"
                            />
                            <img
                                src="../../assets/icons/azure.svg"
                                style="height: 30px"
                                v-if="skill.icon === 'azure'"
                                alt="azureIcon"
                            />
                        </span>
                        <ProgressBarComponent
                            :id="skill.id"
                            :percentage="skill.percentage"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SkillsComponent",
};
</script>
