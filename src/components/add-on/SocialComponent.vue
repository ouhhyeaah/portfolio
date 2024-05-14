<script setup>
import socials from "@/data/socials";
import {onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const socialsData = ref()

onMounted(() => {
  let JSONSocialsData = []
  socials.forEach((s) => {
    const social = {
      id:s.id,
      title: s.title,
      link: s.link,
      icon: s.icon,
    }
    JSONSocialsData.push(social)
  })
  socialsData.value = JSONSocialsData
})

</script>
<template>
  <div class="flex flex-wrap mob:flex-nowrap link gap-10 w-full" :class="justify_type">
    <div v-for="social in socialsData" :key="social.id" class="flex flex-col">
        <a :href="social.link" class="flex flex-col justify-center align-middle">
          <FontAwesomeIcon :icon="['fab', social.icon ]" :class="'size-'+size" class="icon__ hover:scale-125 transition-all duration-[444ms] "/>
          <span :style=" title ? '' : 'display: none'" class="mx-auto"> {{social.title}}</span>
        </a>
    </div>
  </div>

</template>

<script>
export default {
  name:"SocialView",
  props: {
    title: String,
    size: String,
    justify_type:String,
  }
}
</script>