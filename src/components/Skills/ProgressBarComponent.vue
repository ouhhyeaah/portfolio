<template>
    <div class="flex justify-end mb-1">
        <span class="mont-bold text-xl dark:text-white">{{ percentage }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div class="h-3 rounded-full progress-bar"></div>
    </div>
</template>

<script>
let observer;
export default {
    name: "ProgressBarComponent",
    props: {
        percentage: Number,
        id: Number,
    },
    methods: {
        setProgressBarColor(percentage) {
            if (percentage < 50) {
                return "bg-red-500";
            } else if (percentage < 75) {
                return "bg-yellow-500";
            } else {
                return "bg-green-500";
            }
        },
        loadProgressBar(bar_id, percent) {
            const bars = document.querySelectorAll(".progress-bar");
            bars[this.id].classList.add(this.setProgressBarColor(percent));
            let width = 0;
            let speed = 5;
            let id = setInterval(frame, speed);
            function frame() {
                if (width >= percent) {
                    clearInterval(id);
                } else {
                    width++;
                    bars[bar_id].style.width = width + "%";
                    // Ajustement de la vitesse en fonction de la progression
                    if (width >= percent - 40) {
                        speed = 20;
                        clearInterval(id);
                        id = setInterval(frame, speed);
                    }
                }
            }
        },
    },
    mounted() {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };
        const bars = document.querySelectorAll(".progress-bar");
        observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.loadProgressBar(this.id, this.percentage);
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        observer.observe(bars[this.id]);
    },
};
</script>
