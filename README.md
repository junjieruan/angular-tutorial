# 基于angular-seed构建的书籍阅读应用

## Dependencies

```
    "angular": "~1.5.0",
    "angular-route": "~1.5.0",
    "angular-animate": "~1.5.0",
    "angular-resource": "~1.5.0",
    "angular-loader": "~1.5.0",
    "angular-mocks": "~1.5.0",
    "html5-boilerplate": "^5.3.0",
    "bootstrap",
    "jquery"
```

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

### Install Dependencies

* We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
```
 You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.

## Directory Layout

```
app/                    --> all of the source files for the application
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  mainView/                --> 书籍查阅主页面
    mainView.html            --> 主页面 template
    mainView.js     --> 主页面 controller
    （依赖$ngRoute,用.config()管理路由,路由中包含templateUrl与controller声明；.controller()管理控制逻辑;$http请求数据）
    mainView_test.js         --> tests of the controller
  view2/                --> 书籍详情页
    view2.html            --> 详情页 template
    view2.js              --> 详情页 controller ($routeParams用于路由传值，与：符号结合，根据路由值使$http请求动态请求数据)
    view2_test.js         --> tests of the controller
  img/                    -->图片源
    books/
      honglou.png
      sanzhi.png
      ...
  books/                  -->本地json数据，用于$http请求
    books.json
    first.json
    second.json
    honglou.json
    ...
  app.js                --> 应用主module（对子module，ngAnimate动画，ngRoute路由等依赖 ）
  app.css               --> 默认样式表
  app.animations.js            --> 页面动画 (.animation指定操作的元素)
  app.animations.css           --> 页面动画样式表
  index.html            --> 主模板(用于添加局部模板 ng-view)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

### Clone angular-seed
每个页面控制js中都引入依赖$ngRoute,用.config()管理路由——路由中包含templateUrl指明模板html与声明controller控制器
然后再controller中$http请求数据（根据路由值获取时要用$routeParams）,供相应的template使用

template中要声明ng-controller，确定作用域
filter过滤器，ng-repeat用于操作数组，ng-click(Event Handlers),ng-src等方法
