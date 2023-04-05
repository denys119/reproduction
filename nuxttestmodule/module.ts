import { name, version } from './package.json';
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    configKey: 'test',
    name,
    version,
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const plugin = resolve('plugins', 'testplugin.js');

    console.log(plugin);
    addPlugin(plugin);
  }
});
