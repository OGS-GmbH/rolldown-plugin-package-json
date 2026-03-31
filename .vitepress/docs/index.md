---
layout: home
isHome: true

hero:
  text: package.json Plugin
  tagline: A powerful and flexible plugin for Rolldown that enhances package.json handling.
  actions:
    - theme: brand
      text: Get started
      link: /guide
    - theme: alt
      text: Reference
      link: /reference
    - theme: alt
      text: GitHub
      link: https://github.com/OGS-GmbH/rolldown-plugin-package-json

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.7l3.6 3.6A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5M8 12h8M10 11v2M8 17h8M14 16v2"/></svg>
    title: Package Transformation
    details: Automated copying and modification of `package.json`, allowing selective removal of fields to produce a clean, production-ready manifest.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
    title: Dynamic Exports Generation
    details: Automatically generates `exports` maps based on build outputs, ensuring correct module resolution for ESM and CommonJS environments.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-code-xml-icon lucide-code-xml" viewBox="0 0 24 24"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>
    title: Dependency Optimization
    details: Integrates with the build pipeline to control dependency handling and reduce unnecessary bundle inclusion.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.39 4.39a1 1 0 0 0 1.68-.47 2.5 2.5 0 1 1 3.01 3.01 1 1 0 0 0-.47 1.68l1.68 1.68a2.41 2.41 0 0 1 0 3.42l-1.68 1.68a1 1 0 0 1-1.68-.47 2.5 2.5 0 1 0-3.01 3.01 1 1 0 0 1 .47 1.68l-1.68 1.68a2.41 2.41 0 0 1-3.42 0l-1.68-1.68a1 1 0 0 0-1.68.47 2.5 2.5 0 1 1-3.01-3.01 1 1 0 0 0 .47-1.68L2.71 13.7a2.41 2.41 0 0 1 0-3.42l1.68-1.68a1 1 0 0 1 1.68.47 2.5 2.5 0 1 0 3.01-3.01 1 1 0 0 1-.47-1.68l1.68-1.68a2.41 2.41 0 0 1 3.42 0z"/></svg>
    title: Build-Time Integration
    details: Seamlessly hooks into the Rolldown lifecycle to perform transformations efficiently during the build process.
---
