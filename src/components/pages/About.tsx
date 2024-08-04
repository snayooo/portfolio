import { Accordion, AccordionItem } from "@nextui-org/react"

export default function About() {

    const scratch = "Back in 2020, in the Covid-19 lockdown, I was playing a lot of video games with my friends and wanted to try to code my own because it was very interesting to me at that time. That is when I found Scratch, a block-based programming language. I watched some Youtube tutorials on how to make your own games on there, but after 2-3 weeks, I got bored an stopped making games on there."
    const html_and_css = "In 2021, I didn't touch Scratch once. I didn't even thought about programming, until our teacher in school announced, that we're going to learn how to make a website in class. That is when I got interested in programming again. My website definetly wasn't the prettiest in existence, but for my first website I'd say it was alright."
    const reactjs_java_python = "In 2022, I joined a Discord server from a small youtuber. There I met two developers, Tiqan and Cyklon73. They both helped me a lot, in fact they're still helping me, if I have a problem. At the moment, I made my websites using basic HTML and CSS. Tiqan introduced me to ReactJS, a JavaScript framework. At first, it seemed realy complicated, but I gave it a try and I really liked it! Cyklon73 introduced me to Java and sent me some tutorials to learn it. With the help of alpha6565, Cyklon73 introduced me to Python. I started out by making some simple Discord bots and applications"
    const nextjs_discordjs_db = "2023 was an exciting year, I learned a lot of new things! As I already mentioned, Tiqan introduced me to ReactJS. In 2023, he showed me NextJS, a framework based on ReactJS. Since then, I use NextJS for all my web applications. I also learned the discord.js-library because I didn't really use Python that often and over the years, I gained some JavaScript experience, so, I learned how to make Discord bots in JavaScript using discord.js. I also learned how to use databases. At first I used MongoDB, to store some simple user data for my Discord bots, but after I joined the team of DevSky, a German programming Discord server, I learned about MySQL. With the help of Prisma, an OEM, I currently use MySQL and MongoDB as databases."
    const clerk_express = "This year, I started by learning about user authentication. That's when I learned about Clerk, a very easy-to-use and user-friendly User Managment Platform. It's very easy to use, but still very secure. I built some simple applications with it to try it out and I really enjoy using it. After that I thaught myself how to use ExpressJS, a framework to build RestAPIs. I think it is pretty simple and fun to use! But as of now, I'm hoping to learn new things this year and improve my skills to the next level!"

    return(
        <>
            <Accordion className="sm:w-[40vw] sm:ml-[30vw] w-[80vw] ml-[10vw]">
                <AccordionItem key="1" subtitle="2020" title="Scratch" classNames={{title: "text-2xl text-neutral-50", subtitle: "text-neutral-400 text-xl"}} className="text-xl">
                    {scratch}
                </AccordionItem>
                <AccordionItem key="2" subtitle="2021" title="HTML and CSS" classNames={{title: "text-2xl text-neutral-50", subtitle: "text-neutral-400 text-xl"}} className="text-xl">
                    {html_and_css}
                </AccordionItem>
                <AccordionItem key="3" subtitle="2022" title="ReactJS, Java and Python" classNames={{title: "text-2xl text-neutral-50", subtitle: "text-neutral-400 text-xl"}} className="text-xl">
                    {reactjs_java_python}
                </AccordionItem>
                <AccordionItem key="4" subtitle="2023" title="NextJS, discord.js and databases" classNames={{title: "text-2xl text-neutral-50", subtitle: "text-neutral-400 text-xl"}} className="text-xl">
                    {nextjs_discordjs_db}
                </AccordionItem>
                <AccordionItem key="5" subtitle="2024" title="Clerk and Express" classNames={{title: "text-2xl text-neutral-50", subtitle: "text-neutral-400 text-xl"}} className="text-xl">
                    {clerk_express}
                </AccordionItem>
            </Accordion>
        </>
    )
}