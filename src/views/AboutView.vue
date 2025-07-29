<template>
    <div class="font-light text-slate-400 leading-relaxed tracking-wider text-center px-4 lg:text-left" ref="about" id="about">
        <p class="mb-5" v-once>
        Soy un desarrollador apasionado por crear interfaces de usuario accesibles que combinen un diseño cuidadoso con una ingeniería sólida. Mi <span class="font-bold text-white">trabajo favorito</span> se encuentra en la intersección del <span class="font-bold text-white">diseño</span> y el <span class="font-bold text-white">desarrollo</span>, creando experiencias que no solo se ven geniales sino que están meticulosamente construidas para brindar rendimiento y usabilidad.
        </p>
        <p class="mb-5">Actualmente trabajo como <span class="font-bold text-white">Vue FrontEnd Developer</span> para Knowmad-mood. Mi trabajo se centra en el desarrollo de nuevas features para productos del área de seguros, además del mantenimiento y solución de incidencias en otras aplicaciones puestas en producción.</p>
        <p class="mb-5">En otras etapas laborales, he trabajado en proyectos para clientes de gran envergadura a nivel nacional enfocados en sectores distintos, incluso con otras tecnologías, demostrando así mi <span class="font-bold text-white">capacidad para adaptarme a cualquier entorno</span>.</p>
        <p class="mb-5">Me considero una persona <span class="font-bold text-white">proactiva, creativa y con habilidades de comunicación y liderazgo</span>.</p>
        <p>Me encanta pasar mi tiempo libre con mi familia, amigos, haciendo deporte, o jugando videojuegos acompañado siempre por mis tres fieles mascotas</p>
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const emit = defineEmits(['section-change'])

const target = useTemplateRef<HTMLElement>('about')

useIntersectionObserver(
  target,
  ([entry]) => {
    if(entry.isIntersecting) emit('section-change', 'about')
  },
{threshold: 0.8}
)
</script>