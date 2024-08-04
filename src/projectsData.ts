type projects = {
  id: number;
  title: string;
  description: string;
  status: string;
  statusColor:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  imgUrl: string;
  githubUrl: string;
};

export const projects: projects[] = [
  {
    id: 1,
    title: "Scrimfinder",
    description: 
      "This was a Discord bot, where you can search for scrims.",
    status: "Finished",
    statusColor: "success",
    imgUrl: "projects/",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "SpeedSSH",
    description:
      "SpeedSSH is a SSH program, designed to make your SSH experience as good as it can get. Due to other projects, this project has been pushed into the background. I started it, to get to know Python a bit better. If I have more free time, I will definetly finish it!",
    status: "On hold",
    statusColor: "primary",
    imgUrl: "projects/speedssh.png",
    githubUrl: "https://github.com/snayooo/speedssh",
  },
  {
    id: 3,
    title: "Utopia Citybuild Website",
    description:
      "This website is for a Minecraft Citybuild server called Utopia Citybuild. I'm doing my best to finish it as soon as possible.",
    status: "In progress",
    statusColor: "warning",
    imgUrl: "projects/utopia-citybuild.png",
    githubUrl: "https://github.com/snayooo",
  },
  {
    id: 4,
    title: "GreenDuckStudio Website",
    description:
      "This was a website on which I was working. It was for a small German Youtuber, but sadly, the project got terminated due to inactivity.",
    status: "Terminated",
    statusColor: "danger",
    imgUrl: "projects/gd.png",
    githubUrl: "https://github.com/green-duck",
  },
];
