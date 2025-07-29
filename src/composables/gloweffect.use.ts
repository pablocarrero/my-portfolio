import { onMounted, onUnmounted, ref } from "vue"

export function useGlowEffect() {

    const glowStyle = ref('background: radial-gradient(600px at 1020px 199px, rgba(29, 78, 216, 0.15), transparent 80%)')

    function updateGlow(e: any) {
        const x = e.clientX
        const y = e.clientY
        glowStyle.value = `background: radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    }

    onMounted(() => {
        window.addEventListener('mousemove', updateGlow)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', updateGlow)
    })

    return { glowStyle }
}