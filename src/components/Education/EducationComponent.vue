<template>
  <section id="education" class="pt-20 flex justify-center ">
    <div class="grid lg:grid-cols-2 lg:mx-24 lg:gap-12 grid-cols-1 ">
      <div class="mx-auto p-10 dark:text-white mb-10"
           :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
             v-for="education in ref_educations " :key="education.id"
      >
        <h1 class="text-4xl sm:text-5xl py-8 mont-bold"> {{ education.school }} </h1>
        <span class="text-2xl mont-light ">{{ education.start }} / {{ education.start + education.duration}}</span>
        <p class="py-8 mont text-xl sm:text-2xl">
          {{education.description}}
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import {ref} from 'vue'
import educations from "@/data/educations";
const ref_educations = ref(educations.reverse())
export default {
  props: {
    isDark: Boolean
  },
  setup() {
    return { ref_educations }
  }
}
</script>