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
                <div class="mt-12 flex justify-center gap-2">
                  <div class="flex justify-center items-center gap-2 mont-light capitalize">
                    <span>
                      Made By
                    </span>
                      <a
                          href="https://linkedin.com/in/louis-petitperrin"
                          target="_blank"
                          class="underline-animation ">
                          Louis Petitperrin
                          <FontAwesomeIcon
                              class="rotate-45 align-sub"
                              icon="arrow-up"
                              size="xs"/>
                      </a>
                  </div>
                    <span class="flex align-middle h-full"> | </span>
                    <span class="mont-bold"> 2024 </span>
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
