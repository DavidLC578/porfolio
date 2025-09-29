import { User, Target, BookOpen } from "lucide-react"
import Badge from "./ui/badge"

export function AboutSection() {
    const technologies = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "VS Code",
    ]
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Sobre mí</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Conoce más sobre mi trayectoria, habilidades y objetivos profesionales
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Personal Info */}
                    <div className="space-y-8">
                        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <User className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-semibold text-card-foreground">Mi perfil</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Soy un desarrollador frontend apasionado por crear experiencias web excepcionales. Me especializo en
                                    tecnologías modernas como React y Next.js, siempre buscando escribir código limpio, mantenible y
                                    eficiente.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Mi enfoque se centra en la experiencia del usuario, la accesibilidad y el rendimiento, asegurándome de
                                    que cada proyecto no solo se vea bien, sino que también funcione de manera óptima en todos los
                                    dispositivos.
                                </p>
                            </div>
                        </div>

                        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-semibold text-card-foreground">Objetivo profesional</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Busco mi primera oportunidad en desarrollo web para aplicar mis conocimientos en un entorno
                                    profesional, contribuir a proyectos innovadores y seguir creciendo como desarrollador en un equipo
                                    colaborativo.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Skills & Education */}
                    <div className="space-y-8">
                        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-semibold text-card-foreground">Formación y experiencia</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-primary pl-4">
                                        <h4 className="font-medium text-card-foreground">Proyectos Personales</h4>
                                        <p className="text-sm text-muted-foreground">2024 - Presente</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Desarrollo de aplicaciones web utilizando React, Next.js y otras tecnologías modernas.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-muted pl-4">
                                        <h4 className="font-medium text-card-foreground">Programador en prácticas en Alten Spain</h4>
                                        <p className="text-sm text-muted-foreground">Apr 2024 - Jun 2024</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Formación intensiva en tecnologías y frameworks modernos como Java, Spring boot, Docker, Git y herramientas de desarrollo como VS Code.
                                            Centrado en el desarrollo de aplicaciones APIREST.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-muted pl-4">
                                        <h4 className="font-medium text-card-foreground">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h4>
                                        <p className="text-sm text-muted-foreground">2022 - 2024</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Curso de Grado Superior en Desarrollo de Aplicaciones Multiplataforma,
                                            impartido por el Centro de Formación Profesional CampusFP de Alcalá de Henares.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-card-foreground mb-4">Tecnologías que manejo</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-card-foreground mb-4">Soft Skills</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        Comunicación efectiva
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        Trabajo en equipo
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        Resolución de problemas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        Aprendizaje continuo
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        Atención al detalle
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}