import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/meu-docsaurus/__docusaurus/debug',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug', '0c7'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/config',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/config', '2c6'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/content',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/content', '7e0'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/globalData', '216'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/metadata', '044'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/registry', '5a0'),
    exact: true
  },
  {
    path: '/meu-docsaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/meu-docsaurus/__docusaurus/debug/routes', '0c3'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog',
    component: ComponentCreator('/meu-docsaurus/blog', '061'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/archive',
    component: ComponentCreator('/meu-docsaurus/blog/archive', '6cc'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/first-blog-post',
    component: ComponentCreator('/meu-docsaurus/blog/first-blog-post', 'a60'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/long-blog-post',
    component: ComponentCreator('/meu-docsaurus/blog/long-blog-post', '499'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/mdx-blog-post',
    component: ComponentCreator('/meu-docsaurus/blog/mdx-blog-post', 'a3e'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/tags',
    component: ComponentCreator('/meu-docsaurus/blog/tags', '8be'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/tags/docusaurus',
    component: ComponentCreator('/meu-docsaurus/blog/tags/docusaurus', 'b1b'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/tags/facebook',
    component: ComponentCreator('/meu-docsaurus/blog/tags/facebook', '875'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/tags/hello',
    component: ComponentCreator('/meu-docsaurus/blog/tags/hello', 'efd'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/tags/hola',
    component: ComponentCreator('/meu-docsaurus/blog/tags/hola', '5e5'),
    exact: true
  },
  {
    path: '/meu-docsaurus/blog/welcome',
    component: ComponentCreator('/meu-docsaurus/blog/welcome', '301'),
    exact: true
  },
  {
    path: '/meu-docsaurus/markdown-page',
    component: ComponentCreator('/meu-docsaurus/markdown-page', '2bf'),
    exact: true
  },
  {
    path: '/meu-docsaurus/docs',
    component: ComponentCreator('/meu-docsaurus/docs', 'ff3'),
    routes: [
      {
        path: '/meu-docsaurus/docs/category/tutorial---basics',
        component: ComponentCreator('/meu-docsaurus/docs/category/tutorial---basics', '274'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/category/tutorial---extras',
        component: ComponentCreator('/meu-docsaurus/docs/category/tutorial---extras', 'a2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/intro',
        component: ComponentCreator('/meu-docsaurus/docs/intro', 'f8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/congratulations', '568'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/create-a-blog-post', '98a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/create-a-document', '6db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/create-a-page', 'be3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/deploy-your-site', '111'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-basics/markdown-features', '739'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-extras/manage-docs-versions', 'dc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/meu-docsaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/meu-docsaurus/docs/tutorial-extras/translate-your-site', '520'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/meu-docsaurus/',
    component: ComponentCreator('/meu-docsaurus/', 'd1a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
