export const localeCodes = ["ar","de","id","pt","zh","en"]

export const localeMessages = {
  "ar": [{ key: "../lang/ar-AR.json", load: () => import("../lang/ar-AR.json" /* webpackChunkName: "lang_ar_AR_json_ar_AR_json" */) }],
  "de": [{ key: "../lang/de-DE.json", load: () => import("../lang/de-DE.json" /* webpackChunkName: "lang_de_DE_json_de_DE_json" */) }],
  "id": [{ key: "../lang/id-ID.json", load: () => import("../lang/id-ID.json" /* webpackChunkName: "lang_id_ID_json_id_ID_json" */) }],
  "pt": [{ key: "../lang/pt-PT.json", load: () => import("../lang/pt-PT.json" /* webpackChunkName: "lang_pt_PT_json_pt_PT_json" */) }],
  "zh": [{ key: "../lang/zh-ZH.json", load: () => import("../lang/zh-ZH.json" /* webpackChunkName: "lang_zh_ZH_json_zh_ZH_json" */) }],
  "en": [{ key: "../lang/en-US.json", load: () => import("../lang/en-US.json" /* webpackChunkName: "lang_en_US_json_en_US_json" */) }],
}

export const additionalMessages = Object({"ar":[],"de":[],"id":[],"pt":[],"zh":[],"en":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"en","fallbackLocale":"en","messages": Object({}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.json","dir":"rtl","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/ar-AR.json"}),Object({"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/de-DE.json"}),Object({"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/id-ID.json"}),Object({"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/pt-PT.json"}),Object({"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/zh-ZH.json"}),Object({"code":"en","iso":"eng-US","name":"English","file":"en-US.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/en-US.json"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "lang"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.json","dir":"rtl","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/ar-AR.json"}),Object({"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/de-DE.json"}),Object({"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/id-ID.json"}),Object({"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/pt-PT.json"}),Object({"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/zh-ZH.json"}),Object({"code":"en","iso":"eng-US","name":"English","file":"en-US.json","dir":"ltr","path":"/Users/strhom/Local Sites/brandtrak/packages/saas-theme/lang/en-US.json"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = true
export const isSSR = true
