# File Creator  

Easily Create Files Using Templates  
It must have occurred to you that you have to write duplicate code when creating each file. This extension solves this problem for you using templates!

![preview](https://user-images.githubusercontent.com/69081259/125350515-156b5800-e374-11eb-826f-8414dbba5167.gif)  

## ✅ Available Templates  

Js:
 - Array Module
 - Function Module
 - Object Module  

React:
 - Class Component
 - Function Component  

Vue:
 - Component
 - Plugin
 - Router
 - Store  

Graphql:
 - Query
 - Mutation  

## ✅ Add Custom Template

1. start a folder called .templates in root of project
2. in folder create file {file-format}-{name-of-template}.template. for example js-custom.template
3. write your template and save

🚧 NOTICE: you can use target folder name with %foldername and file name with %filename keywords  

## ✅ Customize Current Templates
1. start a folder called .templates in root of project
2. create file with your target template file name.
	template file names:
	- graphql-mutation.template
	- graphql-query
	- js-array-module
	- js-function-module
	- js-object-module
	- react-class-component
	- react-function-component
	- vue-component
	- vue-plugin
	- vue-router
	- vue-store
3. write your template and save  

🚧 NOTICE: you can use target folder name with %foldername and file name with %filename keywords  

## ✅ Combine Custom Template

1. Follow the steps above to create a custom template file

2. Create template.json in the templates folder

3. We configure the combine item in JSON, the combine item is an object, we take the js property for example, js is the name of the combine, displayed in the tree selection box after selecting combine, name is the final output name of the file, file is the corresponding template file


``````json
{
    "combine": {
      "js": [
        {
          "name": "test01",
          "file": "js-test01.template" 
        },
        {
          "name": "test02",
          "file": "js-test02.template"
        }
      ],
      "less": [{
          "name": "index.module.less",
          "file": "module.less-index.template"
      }]
    }
  }
  
``````
File location：
![](https://static.fuxi.netease.com/yaotai/portal/index/lk6nmrrk_583375.png)
![](https://static.fuxi.netease.com/yaotai/portal/index/lk6o2ft5_314377.png)
  

## Contribution
help us to improve extension and add other templates