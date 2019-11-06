// import 'gitalk/dist/gitalk.css'
// import Gitalk from 'gitalk'

function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  console.log(1111)
  router.afterEach((to, from) => {
    if (to.path != from.path) {
      console.log(to.path)
      // loadGitalk(to);
      if (scriptGitalk.onload) {
        loadGitalk(to);
      } else {
        scriptGitalk.onload = () => {
          loadGitalk(to);
        }
      }
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList && commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }

  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      clientID: '071b084546d9f5bd6306',
      clientSecret: 'a19c22f6b78dd87a731a192afca81cf63e57c5d5', // come from github development
      repo: 'ibooks',
      owner: 'JoeyBling',
      admin: ['JoeyBling'],
      id: fullPath, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }
}

export default ({
  Vue,
  options,
  router
}) => {
  try {
    // 修复Node同构代码的问题
    if (typeof (document) !== "undefined") {
      // console.log(typeof document !== "undefined")
      integrateGitalk(router)
    }
  } catch (e) {
    console.error && console.error(e.message)
  }
}
