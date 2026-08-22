import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FEATURES = [
  {
    icon: '🔌',
    title: 'Arduino Q Setup',
    description:
      'Get your Arduino Q board up and running. Step-by-step hardware setup, driver installation, IDE configuration, and your first blink program.',
    link: '/docs/arduino-q/overview',
    linkLabel: 'Setup Guide →',
    accent: '#e05a17',
  },
  {
    icon: '🧠',
    title: 'Introduction to Edge AI',
    description:
      'Understand what Edge AI is, why it matters, and how inference runs directly on microcontrollers without cloud connectivity.',
    link: '/docs/edge-ai/introduction',
    linkLabel: 'Learn Edge AI →',
    accent: '#1565c0',
  },
  {
    icon: '🤖',
    title: 'Physical AI',
    description:
      'Bridge AI and the real world. Sensors, actuators, and real-time AI inference on embedded systems: making machines that perceive and react.',
    link: '/docs/physical-ai/introduction',
    linkLabel: 'Explore Physical AI →',
    accent: '#7c3aed',
  },
  {
    icon: '📱',
    title: 'TinyML',
    description:
      'Deploy ML models on microcontrollers. Keyword spotting, gesture recognition, anomaly detection: all running on tiny, low-power hardware.',
    link: '/docs/tinyml/introduction',
    linkLabel: 'Start TinyML →',
    accent: '#059669',
  },
  {
    icon: '🛠️',
    title: 'Project Examples',
    description:
      'Follow complete project walkthroughs: smart gesture controllers, voice-activated devices, predictive maintenance sensors, and more.',
    link: '/docs/projects/overview',
    linkLabel: 'View Projects →',
    accent: '#dc2626',
  },
  {
    icon: '📦',
    title: 'Bootcamp Inventory',
    description:
      'Complete list of hardware, components, sensors, and software tools included in the Edge AI Camp kit so you know what you have.',
    link: '/docs/inventory/bootcamp-inventory',
    linkLabel: 'View Inventory →',
    accent: '#d97706',
  },
];

function FeatureCard({icon, title, description, link, linkLabel, accent}) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <div className={styles.card}>
        <div className={styles.iconBox} style={{background: `${accent}18`, borderColor: `${accent}30`}}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{description}</p>
        <Link to={link} className={styles.cardLink} style={{color: accent}}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything Covered in the Workshop
          </Heading>
          <p className={styles.sectionSub}>
            Comprehensive docs spanning hardware setup, core concepts, and end-to-end projects:
            so you can focus on building, not searching.
          </p>
        </div>
        <div className="row">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
