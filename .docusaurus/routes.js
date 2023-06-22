import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '655'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '755'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3a3'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ca6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '163'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '522'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '130'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '5e8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0d5'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'fab'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1fe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '198'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1d3'),
    routes: [
      {
        path: '/docs/category/components',
        component: ComponentCreator('/docs/category/components', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/front-end',
        component: ComponentCreator('/docs/category/front-end', 'e21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/phần-mềm-máy-chấm-công',
        component: ComponentCreator('/docs/category/phần-mềm-máy-chấm-công', '6d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/web-admin',
        component: ComponentCreator('/docs/category/web-admin', '6f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end',
        component: ComponentCreator('/docs/front-end', '6b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/buttons',
        component: ComponentCreator('/docs/front-end/web-admin/buttons', '9d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/components/button-with-dropdown',
        component: ComponentCreator('/docs/front-end/web-admin/components/button-with-dropdown', 'ec6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/components/custom-input-item',
        component: ComponentCreator('/docs/front-end/web-admin/components/custom-input-item', 'c10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/components/filter-widget',
        component: ComponentCreator('/docs/front-end/web-admin/components/filter-widget', '7b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/components/general-modal',
        component: ComponentCreator('/docs/front-end/web-admin/components/general-modal', 'b75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/components/general-multigrid',
        component: ComponentCreator('/docs/front-end/web-admin/components/general-multigrid', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/conponent-generation',
        component: ComponentCreator('/docs/front-end/web-admin/conponent-generation', '133'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/Functions/setThemeColor',
        component: ComponentCreator('/docs/front-end/web-admin/Functions/setThemeColor', 'c94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/import-export-excel',
        component: ComponentCreator('/docs/front-end/web-admin/import-export-excel', '5c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/Layout/',
        component: ComponentCreator('/docs/front-end/web-admin/Layout/', '1aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/structuring',
        component: ComponentCreator('/docs/front-end/web-admin/structuring', 'e27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end/web-admin/them-color',
        component: ComponentCreator('/docs/front-end/web-admin/them-color', 'be1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TancaDesktop/tanca-v1',
        component: ComponentCreator('/docs/TancaDesktop/tanca-v1', 'e89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TancaDesktop/tanca-v2',
        component: ComponentCreator('/docs/TancaDesktop/tanca-v2', 'c5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/intro',
        component: ComponentCreator('/docs/Tutorial/intro', '039'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/Tutorial/tutorial-extras/manage-docs-versions', 'bba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/Tutorial/tutorial-extras/translate-your-site', '822'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/congratulations',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/congratulations', '389'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/create-a-blog-post',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/create-a-blog-post', 'f7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/create-a-document',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/create-a-document', 'c54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/create-a-page',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/create-a-page', '52e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/deploy-your-site',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/deploy-your-site', 'e5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/tutorial-zasics/markdown-features',
        component: ComponentCreator('/docs/Tutorial/tutorial-zasics/markdown-features', 'e2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '3e6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
