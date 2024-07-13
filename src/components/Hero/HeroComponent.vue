<template>
      <div class="flex flex-col lg:p-10 px-8 w-full dark:text-white max-w-[60%]">
        <span class="md:text-6xl text-3xl pb-7 dark:text-white mont-bold"
        >
          {{ $t('hero.hello') }} 👋
        </span>
        <span class="dark:text-white lg:text-3xl md:text-xl text-xs mont-light text-wrap text-left">
          I'm a cybersecurity student, but I'm also interested in different areas of computer science, such as programming.
        </span>
        <div class="pt-10 flex gap-10 justify-center">
          <SocialView justify_type="justify-around" class="lg:text-6xl md:text-5xl text-3xl" size=16 />
        </div>
        <div class="flex justify-center">
          <ResumeButton :isDark="isDark" />
        </div>
      </div>
      <DisplayImage class="my-auto mx-auto h-1/2 aspect-square mr-5" />
</template>

<script>
import SocialView from "@/components/add-on/SocialComponent.vue";
import ResumeButton from "@/components/add-on/ResumeButton.vue";
import DisplayImage from "@/components/Hero/DisplayImageComponent.vue";
export default {
  components: {
    DisplayImage,
    SocialView,
    ResumeButton
  },
  props: {
    isDark: Boolean
  },
}
</script>