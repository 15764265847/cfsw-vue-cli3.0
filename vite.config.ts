import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import postcssPx2rem from 'postcss-px2rem';

const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  }
}

export default defineConfig({
  plugins: [vueJsx(), vue(
    {
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            'img-lazy-load': ssrTransformCustomDir,
            rescroll: ssrTransformCustomDir,
            // slots: ssrTransformCustomDir
          }
        }
      },
      ssr: true
    }
  )],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcssPx2rem({ remUnit: 37.5 }) // 换算的基数
  //     ]
  //   },
	// },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
