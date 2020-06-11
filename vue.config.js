const path = require('path');

const resolve = (dir) => {
	return path.join(__dirname, dir);	//利用path模块设置为绝对路径
}

module.exports = {
	chainWebpack: (config) => {
		//set第一个参数：设置的别名，第二个参数：设置的路径
		config.resolve.alias
		.set('@', resolve('./src'))
		.set('components', resolve('./src/components'))
		.set('views', resolve('./src/views'))
		.set('assets', resolve('./src/assets'))
		.set('public', resolve('./public'));
		//set第一个参数：设置的别名，第二个参数：设置的路径
	}
}