export default function Footer() {
    return (
        <footer className="w-full h-16 flex items-center justify-center border-t mt-8 border-black">
            <p className="text-sm text-black">Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}