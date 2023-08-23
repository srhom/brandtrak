import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/strhom/Local Sites/brandtrak/packages/saas-theme/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}