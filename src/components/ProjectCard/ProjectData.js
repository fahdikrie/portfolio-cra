import React from 'react';
import SiputPNG from '../../assets/projects/siput.png';

const strongify = (string) => {
  return(
    `<strong
      style="text-decoration: underline;
             text-decoration-color: purple;">
      ${string}</strong>`
)};

export const Projects = [
  {
    id: 1,
    image: SiputPNG,
    name: "Sistem Informasi Publikasi Terpadu (SIPUT) — FUKI",
    time: "Feb 2020 – Present",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    stacks: [
      "html",
      "css",
      "django"
    ]
  },
  {
    id: 2,
    image: SiputPNG,
    name: "Website Pembinaan Mahasiswa Baru (Web PMB) — Ristek",
    time: "July 2020 – Present",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    stacks: [
      "react",
      "redux",
      "styled-components",
      "django-rest-api"
    ]
  },
]
