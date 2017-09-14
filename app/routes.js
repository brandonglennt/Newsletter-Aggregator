const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '/Submission',
      name: 'Submission',
      getComponent(nextState, comMod) {
        import('containers/Submission')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
    {
     path: '/Login',
     name: 'Login',
     getComponent(nextState, comMod) {
       import('containers/Login')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
