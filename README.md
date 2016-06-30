# vue-adminlte
[Admin LTE] (https://almsaeedstudio.com/preview) Starter for [Vue JS] (http://vuejs.org/)

## Installation

``` bash
# install npm
npm install

# run
npm run dev
```

## Usage

### Create Page
- Create file in components folder

  ``` html
  # user.vue
  <template>
    <h3>User Lists</h3>
  </template>

  <style>
    // style here
  </style>

  <script>
    // script here
  </script>
  ```
- Import and register route component in **main.js**

  ``` html
  import Users from './components/Users.vue'
  
  router.map({
    '/user': {
      component: Users
    }
  });

  ```

### Add Menu
Open **config/menu.js**, and modify json data.

``` html
{
  name: 'Dashboard',
  link: '/',
  icon: 'fa-home',
  child: [{
    name: 'Child Dashboard',
    link: '/child',
    icon: 'fa-circle-o',
    }
  ] 
  // child is optional
}
```

### Deploying on github

You *can* host this on gh-pages, it's not perfect as you'll notice, the routing wants to believe it's at the `username.github.io` root. That being said, it's still worth deploying to give others an idea of how the project works.

I've included a helper script to deploy from the `dist` folder by creating a temporary git branch based on the dist subtree.

```
./bin/deploy.sh
```

### License

MIT License, enjoy!

### Credit

Based on the work of [@rorikurniadi](https://github.com/rorikurniadi/vuejs-AdminLTE), updated to use webpack instead of browserify.