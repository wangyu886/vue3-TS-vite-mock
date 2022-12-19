import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
enum CommandMock {
  build = "build",
  server = "server"
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): any  =>  {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    define: {
      // __EGG_SERVER__: env.VITE_EGG,
    },
    base: './',
    server: {
      host: '0.0.0.0',
      port: env.VITE_DEV_PORT,
      proxy: {
        // 选项写法
        // 避开与 mock 冲突
        '^/api': {
          target:  env.VITE_PROXY_SERVER, //env.VITE_PROXY_SERVER,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\//, ''),
        },
      },
    },
    build: {

    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'vue': 'vue/dist/vue.esm-bundler.js',
      }
    },
    plugins: [vue(),
      viteMockServe({
        // default
        mockPath: './src/mock/',
        //false为服务器，true为本地环境
        // localEnabled: false,
        localEnabled: true,
      }),
    ]
  }
})
