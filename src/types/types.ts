export type Language = 'pt' | 'en'
export interface MainHomeProps{
    currentLang: Language,
    onLanguageChange: (lang: Language) => void
}