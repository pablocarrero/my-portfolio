<template>
    <slot name="title" />
    <ol ref="projects" class="group" id="projects">
        <li v-for="project in proyectos" :key="project.id"
            class="mb-12 cursor-pointer transition-all duration-300 rounded-xl p-4
               group-hover:opacity-50 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:scale-[1.02]">
               <a class="grid grid-cols-[1fr_3fr] gap-6 " :href="project.url" target="_blank">
                   <img class="h-auto w-[180px] object-cover aspect-video border-2 photo-border" loading="lazy" :srcset="project.srcset" sizes="(min-width: 800px) 500px, 
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
    },
    {
        id: 2,
        label: 'Amazinsight (Recopilador de opiniones para obtener valoracion final de un producto de Amazon mediante IA)',
        srcset: `
  ${new URL('../assets/img/foto-original-am.webp', import.meta.url).href} 1000w,
  ${new URL('../assets/img/foto-movil-am.webp', import.meta.url).href} 400w,
`,
        alt: 'Portada de la web de Amazinsight',
        url: 'https://amazinsight.netlify.app/',
        description: 'Web en la que introduciendo un enlace de un producto de amazon, te ofrece una valoración del producto teniendo en cuentas todas las opiniones que los usuarios han dado sobre él mediante IA'
    },
])
</script>
