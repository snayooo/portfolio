import Accordion from "./ui/Accordion";

export default function About() {
    return (
        <section id="about" className="w-full flex flex-col items-center justify-center px-4 py-16 mt-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <Accordion />
        </section>
    );
}