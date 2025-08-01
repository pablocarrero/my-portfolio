<template>
    <slot name="title" />
    <ol ref="experience" class="group" id="experience">
      <li
        v-for="project in experiencia"
        :key="project.id"
        class="flex gap-2.5 mb-4 flex-wrap cursor-pointer transition-all duration-300 rounded-xl p-4
               group-hover:opacity-50 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:scale-[1.02] lg:mb-10"
      >
        <span class="font-bold min-w-[25%] text-[0.6rem] lg:text-sm">
          {{ `${project.from} - ${project.to}` }}
        </span>
        <div class="flex flex-col gap-5">
          <h3 class="text-white font-bold transition-colors duration-300  group-hover:text-teal-300">
            {{ project.label }}
          </h3>
          <p class="text-slate-400 leading-relaxed tracking-wider">
            {{ project.description }}
          </p>
          <ul class="flex gap-4 flex-wrap">
            <li
              v-for="(tag, i) in project.tags"
              :key="i"
              class="rounded-full bg-teal-800/60 text-[0.5rem] px-2 py-1 lg:text-[1rem] lg:px-4 lg:py-4 font-bold leading-5 text-teal-300"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </template>
  
  <script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'
  
  const emit = defineEmits(['section-change'])
  
  const target = useTemplateRef<HTMLOListElement>('experience')
  
  useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry.isIntersecting) emit('section-change', 'experience')
    },
    { threshold: 0.5 }
  )
  
  interface Experience {
    id: number
    from: string
    to: string
    label: string
    description: string
    tags: string[]
  }
  
  const experiencia = ref<Experience[]>([
    {
      id: 1,
      from: 'ENE 24',
      to: 'ACTUALIDAD',
      label: 'FrontEnd Engineer para Knowmad-mood',
      description: 'Desarrollo de nuevas aplicaciones desde cero para importante cliente del sector de seguros. Mantenimiento y nuevos desarrollos para aplicaciones del mismo cliente ya existentes. Mantenimiento de librería de componentes estilados y reutilizables para cada proyecto. Responsabilidad total de la parte front junto con otro compañero de todos los productos de este cliente',
      tags: ['Vue 3', 'Pinia', 'Storybook', 'Typescript', 'VueUse', 'Saas/BEM']
    },
    {
      id: 2,
      from: 'SEP 23',
      to: 'ENE 24',
      label: 'Vue FrontEnd Developer para Iteriam',
      description: 'Migracion de aplicaciones para un cliente del sector bancario desde Vue 2 + Options API a Vue 3 + Composition API. Mantenimiento de librerías desarrolladas en Vue 2 para servir a las distintas aplicaciones. Trabajo conjunto con el equipo de diseño, y con líderes técnicos para definir fechas y tiempos de entrega',
      tags: ['Vue 2', 'Vue 3', 'Vuex', 'Pinia', 'Jest']
    },
    {
      id: 3,
      from: 'MAY 22',
      to: 'SEP 23',
      label: 'Middle Full Stack Developer para Viewnext/IBM',
      description:
        'Desarrollo y mantenimiento de SPA`s en arquitectura de micro-frontales para plataforma que alojaba varias aplicaciones del AMB (Área Metropolitana de Barcelona). Contacto directo con el cliente para el desarrollo de requerimientos y features. Despliegues en OpenShift. Responsable tanto de la parte front como back de todas las aplicaciones, liderando un equipo técnico compuesto por 3 personas',
      tags: ['Vue 2', 'Vue 3', 'Typescript', 'Micro-frontends', 'Vuex', 'Pinia', 'Express.js', 'MongoDB']
    },
    {
      id: 4,
      from: 'DIC 21',
      to: 'MAY 22',
      label: 'Junior Full Stack Developer para Viewnext/IBM',
      description:
        'Desarrollo de plataforma con IA para el área jurídica de Navantia. Integración de plataforma con varios SASS de IBM Cloud. Colaboración continua con compañeros del mismo área enfocados en el desarrollo del front y back de la plataforma. Trabajo directo con diseñadores para la maquetación de las distintas vistas',
      tags: ['Angular 13', 'Typescript', 'PrimeNg', 'Express.js', 'Python', 'REST APIS']
    },
  ])
  </script>
  