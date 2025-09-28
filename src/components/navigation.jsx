"use client"
import { useState, useEffect } from "react"
import Button from "./ui/button"
import { X, Download, Menu } from "lucide-react"

const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
]


export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1))
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (href) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleDownloadCV = () => {
        // This would typically download a PDF file
        console.log("Downloading CV...")
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-foreground">Tu Nombre</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Button onClick={handleDownloadCV} variant="outline" size="sm" className="ml-4 bg-transparent">
                                <Download className="w-4 h-4 mr-2" />
                                CV
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors hover:text-primary ${activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                        <div className="px-3 py-2">
                            <Button onClick={handleDownloadCV} variant="outline" size="sm" className="w-full bg-transparent">
                                <Download className="w-4 h-4 mr-2" />
                                Descargar CV
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )

}