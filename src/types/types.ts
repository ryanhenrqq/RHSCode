export type Language = 'pt' | 'en'
export interface MainHomeProps{
    currentLang: Language,
    onLanguageChange: (lang: Language) => void
}
export interface CardGeneratorObjects{
    projName: string,
    projDesc: string,
    imgSrc: string,
    invertImg: boolean,
    hasPage: boolean,
    redirectPg: string,
    redirectSource: string,
    badgeSrc: string
}
export type RedirectConfigs = {
    // type safety scheme
    type: "internal" | "external",
    url: string
}
export interface PropsDefinerHeader {
    name: string,
    description: string
}
export type RedirecterLinkProps = {
  toTarget?: string,
  isActive?: boolean
}
export type FullHeaderDesktopProps = {
  classNaming?: string
}
export type FullHeaderMobileProps = {
  classNaming?: string
}