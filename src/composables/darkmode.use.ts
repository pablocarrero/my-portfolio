import { onMounted, ref } from 'vue';

const THEME = 'theme'
type THEME_TYPES = 'dark' | 'light'

export function useDarkMode() {
    const isDarkMode = ref<boolean | undefined>(false)

    function getPredefinedTheme() {
        const predefined = localStorage.getItem(THEME) as THEME_TYPES | null
        return predefined === 'dark' ? true : predefined === 'light' ? false : window.matchMedia('(prefers-color-scheme: dark)').matches 
    }

    function applyTheme(isDark: boolean){
        const body = document.querySelector('body')
        localStorage.setItem(THEME, isDark ? 'dark' : 'light')
        isDark ? body?.classList.add('dark') : body?.classList.remove('dark')
        isDarkMode.value = isDark
    }

    function toggleDarkMode() {
        const body = document.querySelector('body')
        const isDark = body?.classList.contains('dark') as boolean
        applyTheme(!isDark)
    }

    onMounted(()=>{
        applyTheme(getPredefinedTheme())
    })

    return { isDarkMode, toggleDarkMode }
}