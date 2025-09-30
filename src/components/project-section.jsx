import Github from "@/icons/github"
import { Eye } from "lucide-react"
import Button from "./ui/button"
import Badge from "./ui/badge"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "Valorlink",
            description:
                "ValorLink es una plataforma social moderna y con características avanzadas diseñada específicamente para los jugadores de VALORANT que buscan encontrar compañeros de juego compatibles y construir relaciones duraderas en el juego.",
            image: "/valorlink.png",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Supabase"],
            demoUrl: "https://valorlink.vercel.app",
            githubUrl: "https://github.com/DavidLC578/Valorlink",
            featured: true,
        },
        {
            id: 4,
            title: "Weather App",
            description:
                "Aplicación del clima con pronóstico extendido, geolocalización, búsqueda por ciudad y visualización de datos meteorológicos. Integración con API externa y diseño adaptativo.",
            image: "/weather-app-with-forecast-cards-and-location-searc.jpg",
            technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Chart.js"],
            demoUrl: "https://weather-app-demo.vercel.app",
            githubUrl: "https://github.com/usuario/weather-app",
            featured: false,
        },
        {
            id: 5,
            title: "Portfolio Personal",
            description:
                "Sitio web personal responsive con animaciones suaves, formulario de contacto funcional y optimización SEO. Desarrollado con las mejores prácticas de rendimiento.",
            image: "/personal-portfolio-website-with-modern-design-and-.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
            demoUrl: "https://mi-portfolio.vercel.app",
            githubUrl: "https://github.com/usuario/portfolio",
            featured: false,
        },
        {
            id: 6,
            title: "Blog Platform",
            description:
                "Plataforma de blog con editor de texto enriquecido, sistema de comentarios, categorías y búsqueda. Panel de administración para gestión de contenido y usuarios.",
            image: "/blog-platform-with-rich-text-editor-and-content-ma.jpg",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "TinyMCE"],
            demoUrl: "https://blog-platform-demo.vercel.app",
            githubUrl: "https://github.com/usuario/blog-platform",
            featured: false,
        },
    ]

    const featuredProjects = projects.filter((project) => project.featured)
    const otherProjects = projects.filter((project) => !project.featured)

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Proyectos</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Una selección de mis mejores trabajos que demuestran mis habilidades técnicas y creatividad
                    </p>
                </div>
                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Proyectos Destacados</h3>
                    <div className={`grid gap-8 ${featuredProjects.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-2"}`}>
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className={`text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border overflow-hidden group hover:shadow-lg transition-shadow 
                                    ${featuredProjects.length === 1 ? "max-w-1/2 " : ""}`}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <Button size="sm" variant="secondary">
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <Eye className="w-4 h-4 mr-2" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="secondary">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <Github className="w-4 h-4 mr-2" />
                                                Código
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                                <div className="px-6">
                                    <h3 className="text-card-foreground">{project.title}</h3>
                                </div>
                                <div className="px-6 space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button size="sm" variant="outline" className="bg-transparent">
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Ver Demo
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="outline" className="bg-transparent">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <Github className="w-4 h-4 mr-2" />
                                                GitHub
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Other Projects */}
                <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Otros Proyectos</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <div
                                key={project.id}
                                className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border overflow-hidden group hover:shadow-md transition-shadow"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg text-card-foreground">{project.title}</h3>
                                </div>
                                <div className="space-y-3 px-6">
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Badge variant="secondary" className="text-xs">
                                                +{project.technologies.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex gap-2 pt-1">
                                        <Button size="sm" variant="outline" className="bg-transparent flex-1">
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="outline" className="bg-transparent flex-1">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <Github className="w-3 h-3 mr-1" />
                                                Código
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">¿Interesado en ver más de mi trabajo?</p>
                    <Button variant="outline" size="lg" className="bg-transparent">
                        <a href="https://github.com/DavidLC578" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            Ver todos mis repositorios
                        </a>
                    </Button>
                </div>
            </div>
        </section >
    )

}