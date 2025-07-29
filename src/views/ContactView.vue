<template>
    <div ref="contact" class="p-4" id="contact">
        <h2 class="text-lg lg:text-2xl text-white font-semibold text-center lg:text-end mb-4">¿Crees que encajo en tu equipo?</h2>
        <h3 class="text-slate-300 font-mono mb-4 text-center">Si piensas que podríamos trabajar juntos, ¡escríbeme un correo y agendamos una
            llamada!</h3>
        <a href="mailto:carrerogarciapablo@gmail.com">
            <Button class="cursor-pointer p-1 text-xs lg:p-6 bg-gradient-to-br from-[#978f8f] via-[#494141] to-[#424242]">
                <MailOpen class="size-4"/>
                <p class="font-bold tracking-wide">
                    carrerogarciapablo@gmail.com
                </p>
            </Button>
        </a>
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

import { Button } from '@/components/ui/button';
import { MailOpen } from 'lucide-vue-next';

const emit = defineEmits(['section-change'])

const target = useTemplateRef<HTMLElement>('contact')

useIntersectionObserver(
  target,
  ([entry]) => {
    if(entry.isIntersecting) emit('section-change', 'contact')
  },
  {threshold: 0.2}

)
</script>
