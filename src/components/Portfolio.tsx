import PortfolioList from "./ui/PortfolioList";

export default function Portfolio() {
    return (
        <section id="portfolio" className="w-full flex flex-col items-center justify-center px-4 py-16 mt-8">
            <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
            <PortfolioList />
        </section>
    );
}