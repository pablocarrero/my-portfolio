<template>
    <nav class="mt-12 p-8">
        <ul>
            <li v-for="navLink, index in NAV_LINKS" :key="index" class="flex items-center mb-2 cursor-crosshair group" @click="scrollToSection(navLink.path)">
                <span :class="['h-0.5 w-8 mr-4 group-hover:w-16 group-hover:bg-white transition-all bg-slate-500',{ 'active': activeSection === navLink.path}]"></span>
                <span :class="['text-bold text-2xl uppercase text-slate-500 group-hover:text-white',{ 'active-text': activeSection === navLink.path}]">{{ navLink.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
defineProps<{ activeSection?: string }>()
const emit = defineEmits(['update:activeSection']);
const NAV_LINKS = [
    { name: 'Sobre mí', path: 'about' },
  { name: 'Experiencia', path: 'experience' },
  { name: 'Proyectos', path: 'projects' },
  { name: 'Contacto', path: 'contact' }
]

function scrollToSection(path: string) {
  emit('update:activeSection', path)

  const el = document.getElementById(path)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped>
.active{
    width: 4rem;
    background-color: white;
}
.active-text{
    color: white
}

</style>