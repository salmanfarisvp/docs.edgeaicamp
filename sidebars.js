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
        'getting-started/bootcamp-overview',
        'getting-started/bootcamp-guidelines',
        'getting-started/bootcamp-hardware-kit',
      ],
    },
    {
      type: 'category',
      label: '📚 Fundamentals',
      collapsed: false,
      items: [
        'fundamentals/what-is-ml',
        'fundamentals/what-is-edge-ai',
        'fundamentals/what-is-physical-ai',
      ],
    },
    {
      type: 'category',
      label: '🔌 Arduino Q',
      items: [
        'arduino-q/overview',
        'arduino-q/app-lab',
        'arduino-q/apps',
        'arduino-q/brick',
        'arduino-q/first-project',
      ],
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
