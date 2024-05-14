const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website ",
    description:
      "Creation of this website using Vue.js. I used Tailwind CSS for the design. The website is responsive and has a dark mode. This project is hosted on GitHub Pages. Thanks to this project i was able to learn Vue.js and Tailwind CSS, 2 technologies that i didn't know before.",
    date: "2024-02-25 12:00:00", //Format YYYY-MM-DD HH:MM:SS
    link: "https://github.com/ouhhyeaah/portfolio-vuejs",
    keywords: ["Vue.js", "HTML", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    title: "Web Application using cloud services",
    description:
      "Creation of a web application using AWS cloud services. Front-end using React Native and back-end using Node.js and Lambda functions. Usage of DynamoDB for database. Deploy this web application using Docker and AWS ECS.",
    date: "2023-11-25 12:00:00", //Format MM-DD-YYYY
    link: "https://github.com/ouhhyeaah/cloud-project",
    keywords: [
      "React",
      "Node.js",
      "AWS",
      "DynamoDB",
      "Lambda",
      "API Gateway, Docker, ECS",
    ],
  },
  {
    id: 3,
    title: "Setting up a complete network infrastructure",
    description:
      "In this project I set up a complete enterprise infrastructure. I used a Stormshield firewall, as well as Cisco switches. I also set up a Windows Server 2019 domain controller and Windows 10 clients. The infrastructure was self-sufficient, with its own time server (ntpd) and mail service (postfix, dovecot package).",
    date: "2023-02-10 12:00:00", //Format YYYY-MM-DD HH:MM:SS
    link: "",
    keywords: [
      "Firewall",
      "ACL",
      "Cisco",
      "Windows Server",
      "Windows 10",
      "Linux",
      "ntpd",
      "postfix",
      "dovecot",
    ],
  },
];
export default projects;
