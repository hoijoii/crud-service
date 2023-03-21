const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { 
		proxy: { // proxyTable 설정
			'/': {
				target: 'http://localhost:3000/',
				changeOrigin: true	,
				ws: false
				/* pathRewrite:{
					"^/api" : ''
				} */
			},
		},
	},
	outputDir: "../backend/public",
	},
	)
