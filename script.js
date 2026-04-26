
const skillData = [
    [
        { i: '🎨', l: 'CSS3' }, { i: '⚡', l: 'JavaScript' }, { i: '💎', l: 'WordPress' },
        { i: '🅱️', l: 'Bootstrap' }, { i: '🌊', l: 'Tailwind CSS' }, { i: '📄', l: 'HTML5' },
        { i: '💅', l: 'SASS' }, { i: '🧩', l: 'Styled Components' }, { i: '🔷', l: 'TypeScript' },
        { i: '⚛️', l: 'React.js' }, { i: '▲', l: 'Next.js' }, { i: '🟢', l: 'Node.js' },
    ],
    [
        { i: '⚡', l: 'Vite.js' }, { i: '✨', l: 'Magic UI' }, { i: '🌐', l: 'Aceternity UI' },
        { i: '🔄', l: 'Redux' }, { i: '🎞️', l: 'Framer Motion' }, { i: '🎭', l: 'Material UI' },
        { i: '🔺', l: 'GraphQL' }, { i: '🔌', l: 'Socket.io' }, { i: '🍃', l: 'MongoDB' },
        { i: '🔥', l: 'Firebase' }, { i: '🚂', l: 'Express.js' }, { i: '📬', l: 'Postman' },
    ],
    [
        { i: '📊', l: 'React Charts' }, { i: '🦊', l: 'GitLab' }, { i: '📦', l: 'NPM' },
        { i: '>_', l: 'Command Line' }, { i: '🔵', l: 'Google Ads' }, { i: '💻', l: 'VS Code' },
        { i: '🐙', l: 'GitHub' }, { i: '🔑', l: 'JWT' }, { i: '🔧', l: 'Git' },
        { i: '🛡️', l: 'AWS' }, { i: '▲', l: 'Vercel' }, { i: '📱', l: 'React Native' },
    ]
];

['r1', 'r2', 'r3'].forEach((id, i) => {
    const el = document.getElementById(id);
    const pills = [...skillData[i], ...skillData[i]];
    el.innerHTML = pills.map(p =>
        `<span class="skill-pill"><span class="pill-icon">${p.i}</span>${p.l}</span>`
    ).join('');
});