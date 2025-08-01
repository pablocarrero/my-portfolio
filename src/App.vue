<template>
  <header class="p-4 flex justify-end gap-20">
    <Button variant="ghost" size="icon" @click="toggleDarkMode">
      <Moon v-if="!isDarkMode" />
      <Sun v-else />
    </Button>
  </header>
  <main class="max-w-screen mt-4 text-slate-400 leading-relaxed lg:px-30 lg:py-16">
      <Button v-if="showScrollToTopButton" @click="scrollToTop" variant="ghost" class="fixed top-[600px] right-[10px] bg-gradient-to-br  from-[#978f8f] via-[#494141] to-[#424242]  rounded-full">
        <ChevronUp class="size-4"/>
      </Button>
    <section class="lg:flex lg:justify-between lg:gap-4 font-inter">
      <div ref="radialGlow" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        :style="glowStyle">
      </div>

      <h1 class="header-animation sticky top-0 left-0 text-center text-2xl tracking-wide font-bold text-slate-200 font-inter-italic md:text-3xl lg:text-6xl lg:animate-none lg:fixed lg:top-40 lg:left-40">
        Pablo Carrero
      </h1>
      <article class="flex flex-col gap-3 items-center justify-center min-w-[35%] h-full lg:sticky top-60">
        <h2 class="text-sm tracking-wide md:text-base lg:text-2xl lg:mt-3 font-medium font-mono text-slate-200">
          FrontEnd Developer
        </h2>
        <p class="text-xs text-center mt-1 tracking-wider lg:text-xl lg:text-justify text-gray-400 font-mono">Construyo aplicaciones web desde cero al máximo
          detalle</p>
        <NavigationBar v-if="showNavigationBar" :active-section="activeSection" @update:activeSection="e => activeSection = e"/>
        <SocialMedia class="lg:mt-10" />
      </article>
      <section class="flex flex-col gap-10 text-xs font-light text-slate-400 leading-relaxed tracking-wider mt-4 lg:pl-40 lg:text-xl">
        <AboutView @section-change="handleSectionChange" />
        <Separator v-if="!showTitlesSection" class="mb-4  lg:mb-20"/>
        <ExperienceView @section-change="handleSectionChange">
          <template #title>
            <h3 v-if="showTitlesSection" class="section-title">EXPERIENCIA LABORAL</h3>
          </template>
        </ExperienceView>
        <Separator v-if="!showTitlesSection" class="mb-4 lg:mb-20"/>
        <ProjectsView @section-change="handleSectionChange">
          <template #title>
            <h3 v-if="showTitlesSection" class="section-title">PROYECTOS</h3>
          </template>
        </ProjectsView>
        <Separator v-if="!showTitlesSection" class="mb-4 lg:mb-20"/>
        <ContactView @section-change="handleSectionChange">
          <template #title>
            <h3 v-if="showTitlesSection" class="section-title">CONTACTO</h3>
          </template>
        </ContactView>
      </section>
    </section>

  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScroll, useWindowSize } from '@vueuse/core';

import { useDarkMode } from './composables/darkmode.use';
import { useGlowEffect } from './composables/gloweffect.use';

import { Button } from './components/ui/button';
import { Separator } from '@/components/ui/separator'
import { Moon, Sun, ChevronUp } from 'lucide-vue-next';

import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import NavigationBar from './components/NavigationBar.vue';
import SocialMedia from './components/SocialMedia.vue';
import ExperienceView from './views/ExperienceView.vue';
import ProjectsView from './views/ProjectsView.vue';


const { isDarkMode, toggleDarkMode } = useDarkMode()
const {width, height} = useWindowSize()
const { glowStyle } = useGlowEffect()

// Trackeamos el scroll del window
const { y } = useScroll(window)

// Calculamos el porcentaje scrolleado
const scrollPercent = computed(() => {
  if (!height.value) return 0
  return (y.value / (height.value)) * 100
})

// Mostramos el botón si pasamos 20%
const showButton = computed(() => scrollPercent.value >= 60)

// Función para volver arriba
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const LG_BREAKPOINT = 1024
const MD_BREAKPOINT = 768

const showNavigationBar = computed(()=> width.value >= LG_BREAKPOINT)
const showScrollToTopButton = computed(()=> width.value <= MD_BREAKPOINT && showButton.value)
const showTitlesSection = computed(()=> width.value <= MD_BREAKPOINT)

const activeSection = ref("about")

function handleSectionChange(sectionId: string) {
  activeSection.value = sectionId
}
</script>
