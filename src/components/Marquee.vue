<template>
  <div class="bg-brand-black py-10 overflow-hidden relative">
    <!-- Top decorative line -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute bottom-0 left-0 w-full section-divider"></div>

    <!-- Row 1: scrolling LEFT -->
    <div class="marquee-wrapper mb-4">
      <div class="marquee-row-left flex items-center whitespace-nowrap">
        <span v-for="(item, i) in [...row1, ...row1, ...row1]" :key="'a' + i"
              class="flex items-center gap-4 shrink-0 mx-6 md:mx-10 group cursor-default">
          <i :class="[item.icon, 'text-2xl md:text-3xl text-brand-orange/70 group-hover:text-brand-orange transition-colors duration-300']"></i>
          <span class="font-heading text-lg md:text-xl font-extrabold text-white uppercase tracking-wider group-hover:text-brand-orange transition-colors duration-300">{{ item.name }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-white/20 ml-4"></span>
        </span>
      </div>
    </div>

    <!-- Row 2: scrolling RIGHT (reversed + different content order) -->
    <div class="marquee-wrapper">
      <div class="marquee-row-right flex items-center whitespace-nowrap">
        <span v-for="(item, i) in [...row2, ...row2, ...row2]" :key="'b' + i"
              class="flex items-center gap-4 shrink-0 mx-6 md:mx-10 group cursor-default">
          <span class="font-heading text-lg md:text-xl font-extrabold uppercase tracking-wider transition-colors duration-300" style="-webkit-text-stroke: 1px rgba(249,115,22,0.3); color: transparent;">{{ item.name }}</span>
          <i :class="[item.icon, 'text-2xl md:text-3xl text-white/20 group-hover:text-brand-orange transition-colors duration-300']"></i>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-orange/20 ml-4"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const row1 = [
  { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Laravel', icon: 'devicon-laravel-original' },
  { name: 'Flutter', icon: 'devicon-flutter-plain' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
  { name: 'Python', icon: 'devicon-python-plain' },
]

const row2 = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
  { name: 'Dart', icon: 'devicon-dart-plain' },
]
</script>

<style scoped>
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); }
}

@keyframes scroll-right {
  0% { transform: translateX(calc(-100% / 3)); }
  100% { transform: translateX(0); }
}

.marquee-row-left {
  animation: scroll-left 25s linear infinite;
  width: max-content;
}

.marquee-row-right {
  animation: scroll-right 30s linear infinite;
  width: max-content;
}

.marquee-wrapper:hover .marquee-row-left,
.marquee-wrapper:hover .marquee-row-right {
  animation-play-state: paused;
}
</style>
