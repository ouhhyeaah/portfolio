<template>
  <div class="group relative flex justify-center">
    <div class="my-8">
      <div @click="showModal()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="lg:w-48 lg:h-48 md:w-24 md:h-24 w-12 h-12 eye hover:scale-125 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
        >
          <defs>
            <radialGradient
              id="pinkGradient"
              gradientUnits="userSpaceOnUse"
              r="35%"
              :cx="cxPercentage"
              :cy="cyPercentage"
            >
              <stop offset="0.5" stop-color="rgba(248, 107, 223, 1)" />
              <stop offset="1" stop-color="rgba(107, 107, 248, 0.8)" />
            </radialGradient>
          </defs>
          <path
            stroke="url(#pinkGradient)"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
        <span
          class="absolute scale-0 top-[-50px] transition-all duration-200 rounded-lg bg-gray-700 p-4 lg:text-lg text-xs text-white group-hover:scale-100 w-fit justify-center flex"
        >My Resume 📝</span
        >
      </div>
      <transition name="slide-fade">
        <ModalView :header="false" v-if="ref_resume.isModalVisible" @close="closeModal()" :is-dark="isDark">
          <template v-slot:body>
            <embed class="w-full flex justify-center" :src="ref_resume.filePath" height="665vh" width="300vw" />
          </template>
          <template v-slot:footer>
            <div class="flex gap-8 justify-center w-full">
              <a class="underline-animation" :href="ref_resume.url">View In Context <FontAwesomeIcon :icon="faLinkedin()"/> </a>
            </div>
          </template>
        </ModalView>
      </transition>
    </div>
  </div>
</template>

<script>
import ModalView from '@/components/add-on/ModalView.vue'
import resume from "@/data/resume.js";
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default {
  name: 'FileComponent',
  methods: {
    faLinkedin() {
      return faLinkedin
    },
    faDownload() {
      return faDownload
    }
  },
  props: {
    isDark: Boolean,
  },
  components: { FontAwesomeIcon, ModalView },
  setup() {
    var ref_resume = ref(resume);
    const showModal = () => {
      ref_resume.value.isModalVisible = true;
    };

    const closeModal = () => {
      ref_resume.value.isModalVisible = false;
    };

    return {
      ref_resume,
      showModal,
      closeModal,
    };
  },
  data() {
    return {
      cxPercentage: 50,
      cyPercentage: 50
    }
  },
  mounted() {
    const svg = document.querySelector('.eye')
    svg.addEventListener('mouseover', () => {
      svg.addEventListener('mousemove', (event) => {
        const clientX = event.clientX
        const clientY = event.clientY
        const rect = event.currentTarget.getBoundingClientRect()
        const cursorX = clientX - rect.left
        const cursorY = clientY - rect.top
        const cxPercentage = (cursorX / rect.width) * 100 - 24 + 20 //+15 car la taille du curseur custom
        const cyPercentage = (cursorY / rect.height) * 100
        this.cxPercentage = `${cxPercentage}%`
        this.cyPercentage = `${cyPercentage}%`
      })
    })
  }
}
</script>

<style scoped>
.eye {
  @apply stroke-[0.4] hover:stroke-[0.8];
}

.tooltip {
  @apply invisible absolute;
}

.has-tooltip:hover .tooltip {
  @apply visible z-50;
}
</style>