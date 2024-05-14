<template>
    <transition name="modal-fade">
        <div v-show="true"
            class="fixed inset-0 flex items-center bg-gray-500 bg-opacity-80 justify-center z-50"
        >
            <div class="modal-backdrop fixed inset-0 bg-black opacity-50"></div>
            <div
                class="modal-container z-50 mx-auto p-6 rounded-lg shadow-lg max-w-lg w-full"
                :class="
                    isDark ? 'bg-dark-mode text-white' : 'bg-white text-black'
                "
            >
                <header
                    class="modal-header flex justify-between items-center px-4 py-2 rounded-t-lg"
                >
                    <h2
                        class="text-lg underline underline-offset-8"
                        id="modalTitle"
                    >
                        <slot name="header">Modal Title</slot>
                    </h2>
                    <button
                        @click="close"
                        aria-label="Close modal"
                        class="text-gray-600 hover:text-pink-color focus:outline-none"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </header>

                <section class="modal-body px-4 py-6 text-justify">
                    <slot name="body"> Modal Body </slot>
                </section>

                <footer
                    class="modal-footer flex justify-start px-4 py-4 rounded-b-lg text-blue-300"
                >
                    <slot name="footer"> </slot>
                </footer>
                <button
                    @click="close"
                    class="px-4 py-2 mt-4 w-full rounded hover:text-black transition-all duration-500 hover:bg-pink-color focus:outline-none"
                    :class="isDark ? 'bg-gray-700' : 'text-black bg-gray-300'"
                >
                    Close
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalView",
    props: {
        title: String,
        description: String,
        link: String,
        isDark: Boolean,
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>
