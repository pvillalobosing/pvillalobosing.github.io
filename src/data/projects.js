const projects = [
  {
    id: 'minisumo',
    title: 'Mini-sumo robot',
    summary: 'Autonomous fighter with a custom PCB, infrared opponent search and edge detection.',
    tags: ['Altium', 'Sensors', 'Motors'],
    confidential: false,
  },
  {
    id: 'line-follower',
    title: 'Line-follower robot',
    summary: 'High-speed racer with a 16-sensor array and closed-loop speed control.',
    tags: ['Altium', 'Control', 'Motors'],
    confidential: false,
  },
  {
    id: 'field-monitoring',
    title: 'Wireless field monitoring',
    summary: 'Multi-node sensing with lossless data delivery and a web dashboard.',
    tags: ['ESP32-C6', 'ESP-NOW', 'React'],
    confidential: true,
  },
  {
    id: 'dosing-device',
    title: 'Precision dosing device',
    summary: 'Handheld dosing tool reaching 1–3 % accuracy from 25 to 300 mL.',
    tags: ['ESP32-C6', 'Power', 'Calibration'],
    confidential: true,
  },
  {
    id: 'solar-sign',
    title: 'Solar LED road sign',
    summary: 'Unattended signaling with firmware-based solar charge management.',
    tags: ['AVR', 'Solar', 'PWM'],
    confidential: true,
  },
]

export default projects