export function getData() {
  return {
    type: 'GET_ASYNCDATA',
    promise: new Promise((resolve, reject) => {
      // 'simulate' async action
      setTimeout(() => {
        resolve({
          author: 'joakim ahrlin',
          github: 'https://github.com/jahrlin'
        });
      }, 500);
    }),
  }
};
