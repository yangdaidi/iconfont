#iconfont

####项目简介
1. 使用gulp和gulp-iconfont将svg文件编译生成以下四种文件：
```
	-iconfont.eot
	-iconfont.svg
	-iconfont.ttf
	-iconfont.woff
```
2. 使用gulp-iconfont-css编译模板css生成字体图标的使用样式
```
	src/css/_icons.css         //模板css
	build/css/_icons.css       //实际使用css
```
3. 使用gulp-template编译模板html生成字体图标的使用示例
```
	src/example/index.html     //模板html
	build/example/index.html   //示例html
```

####Quick Start
安装依赖包:

	$ npm install

安装gulp:

	$ npm install --g gulp

编译iconfont,并生成css:

	$ gulp iconfont

运行example:

	$ gulp example

readme生成HTML:

	$ Ctrl+Shift+p -> preview -> save to html -> markdown


####项目结构
* `build` 存放着编译后的文件(eot、svg、ttf、woff等).
* `src`   存放待编译资源(svg图标,模板css/html).
* `.gitignore` git忽略列表.
* `gulpfile.js` gulp命令入口文件.
* `package.json` npm 配置文件.



####相关资源
* [gulp](https://github.com/gulpjs/gulp)
* [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont)
* [gulp-iconfont-css](https://github.com/backflip/gulp-iconfont-css)
* [gulp-template](https://www.npmjs.com/package/gulp-template)
* [es6 node green](http://node.green/)
