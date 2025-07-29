<template>
    <ol ref="projects" class="group" id="projects">
        <li v-for="project in proyectos" :key="project.id"
            class="mb-12 cursor-pointer transition-all duration-300 rounded-xl p-4
               group-hover:opacity-50 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:scale-[1.02]">
               <a class="flex flex-wrap items-center justify-center lg:items-start gap-11 " :href="project.url" target="_blank">
                   <img class="h-[75px] w-[200px] object-cover border rounded-[5px]" loading="lazy" :srcset="project.srcset" sizes="(min-width: 800px) 500px, 
                   200px" :alt="project.alt">
                   <div class="flex flex-col gap-5">
                       <h3 class="text-white font-bold transition-colors duration-300  group-hover:text-teal-300">
                           {{ project.label }}
                       </h3>
                       <p class="text-slate-400 leading-relaxed tracking-wider">
                           {{ project.description }}
                       </p>
                   </div>
               </a>
        </li>
    </ol>
</template>

<script setup lang="ts">
import { useTemplateRef, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const emit = defineEmits(['section-change'])

const target = useTemplateRef<HTMLOListElement>('projects')

useIntersectionObserver(
    target,
    ([entry]) => {
        if (entry.isIntersecting) emit('section-change', 'projects')
    },
    { threshold: 0.2 }
)

interface Project {
    id: number
    srcset?: string
    label: string
    alt: string
    url: string
    description: string
}

const proyectos = ref<Project[]>([
    {
        id: 1,
        label: 'Parasight (Enciclopedia parásitos en progreso)',
        srcset: `
  ${new URL('../assets/img/foto-original.webp', import.meta.url).href} 1000w,
  ${new URL('../assets/img/foto-movil.webp', import.meta.url).href} 400w,
`,
        alt: 'Portada de la web de Parasight',
        url: 'https://parasight.netlify.app/',
        description: 'Web para agrupar información sobre parásitos en colaboración conjunta con una persona experta en sus morfologías y ciclos y un diseñador de modelos 3D'
    }
])
</script>
