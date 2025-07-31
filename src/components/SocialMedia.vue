<template>
    <ul class="flex gap-4">
        <li v-for="link, index in socialLinks" :key="index">
            <a :href="link.url" target="_blank">
                <Button variant="ghost"  class="bg-gradient-to-br size-6 lg:size-12 from-[#978f8f] via-[#494141] to-[#424242] hover:scale-110 hover:text-teal-300 transition-transform cursor-pointer rounded-full">
                    <component :is="link.icon" class="size-4 lg:size-6" />
                </Button>
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Github , Linkedin  } from 'lucide-vue-next';
import { Button } from './ui/button';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/pablocarrero',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/carrerogarciapablo/',
        icon: Linkedin,
    },
];
</script>
