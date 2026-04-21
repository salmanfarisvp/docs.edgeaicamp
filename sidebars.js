// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workshopSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Welcome',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-edge-ai',
        'getting-started/workshop-overview',
      ],
    },
    {
      type: 'category',
      label: '🔌 Arduino Q Setup',
      items: [
        'arduino-q/overview',
        'arduino-q/installation',
        'arduino-q/first-project',
      ],
    },
    {
      type: 'doc',
      id: 'core-concepts',
      label: '🧠 Edge AI, Physical AI & TinyML',
    },
    {
      type: 'category',
      label: '🛠️ Project Examples',
      items: [
        'projects/overview',
      ],
    },
    {
      type: 'category',
      label: '📦 Bootcamp Inventory',
      items: [
        'inventory/bootcamp-inventory',
      ],
    },
  ],
};

export default sidebars;
