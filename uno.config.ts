import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        ta: () => import('@iconify-json/tabler/icons.json').then((i) => i.default as any),
      },
    }),
  ],
})
