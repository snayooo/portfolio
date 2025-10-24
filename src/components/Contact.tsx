import ContactForm from "./ui/ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="w-full flex flex-col items-center justify-center px-4 py-16 mt-4">
            <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
            <ContactForm />
        </section>
    )
}