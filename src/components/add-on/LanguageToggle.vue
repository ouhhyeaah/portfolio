<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
const DEFAULT_LANG = "EN"
const langs = [
  { code: "EN", text: "English" },
  { code: "FR", text: "Français" },
]
const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
  langs.code = langs.code === "FR" ? "EN" : "FR"
  // console.log(langs.code)
}

</script>

<template>
  <label class="flex items-center cursor-pointer select-none text-dark dark:text-white">
    <div class="relative h-full">
      <input type="checkbox" id="lang" class="sr-only" @change="handleCheckboxChange" />
      <div class="h-8 box w-8"></div>
      <div
        :class="{ 'translate-y-[150%]': isChecked }"
        class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 absolute flex items-center w-8 h-8 rounded-full dot top-0 transition duration-700 ease-in-out "
      >
        <span class="mx-auto my-auto mont-bold text-center align-text-bottom" style="color: #98a2ba"> {{langs.code || DEFAULT_LANG }} </span>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "locale-changer",
};
</script>