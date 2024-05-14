<script setup>
import SocialView from "@/components/add-on/SocialComponent.vue";
import GetInTouchComponent from "@/components/Footer/GetInTouchComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp);
</script>

<template>
    <section class="mt-5 laptop:mt-40 p-2 laptop:p-0 lg:mx-60">
        <div>
            <div class="mt-10 mx-auto">
                <GetInTouchComponent class="mb-6" />
                <SocialView title="true" justify_type="justify-center" />
                <div class="mt-12 flex justify-center">
                  <div class="flex justify-center gap-2 mont-light capitalize">
                    <span>
                      Made By
                    </span>
                      <a
                          href="https://linkedin.com/in/louis-petitperrin"
                          target="_blank"
                          class="relative text-blue-400 hover:text-blue-300
                    transition-all ease-in-out after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:origin-left after:rounded-xl after:h-[2px] after:w-0 hover:after:w-[100%] after:bottom-[-1px] after:left-0 after:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_2px]
                    ">
                          Louis Petitperrin
                          <FontAwesomeIcon
                              class="rotate-45 align-sub"
                              icon="arrow-up"
                              size="xs"/>
                      </a>
                  </div>
                  <span class="mx-2">|</span>
                  <span class="mont-bold">
                    2024
                  </span>
                </div>
            </div>
        </div>
        <div class="gradient-circle-bottom overflow-x-hidden"></div>
    </section>
</template>

<script>
export default {
    name: "FooterView",
};
</script>
