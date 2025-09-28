"use client"

import Button from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Github from "@/icons/github"

export function HeroSection() {
    const handleScrollToProjects = () => {
        const element = document.querySelector("#projects")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">
                        DLC
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                    Desarrollador Frontend
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                    Especializado en React y Next.js. Creando experiencias web modernas, accesibles y optimizadas para el
                    rendimiento.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button onClick={handleScrollToProjects} size="lg" className="text-base px-8 py-3">
                        Ver Proyectos
                        <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent">
                        Contactar
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/DavidLC578"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="mailto:lcdavid578@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
