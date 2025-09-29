import { BookOpen } from "lucide-react";
import { Code, Database, Palette, Wrench } from "lucide-react"
import Badge from "./ui/badge";
import { Languages } from "lucide-react";

export function SkillsSection() {

    const skillCategories = [
        {
            title: "Lenguajes de Programación",
            icon: Code,
            skills: [
                { name: "JavaScript", level: 85 },
                { name: "TypeScript", level: 75 },
                { name: "HTML5", level: 90 },
                { name: "CSS3", level: 85 },
                { name: "Python", level: 60 },
            ],
        },
        {
            title: "Frameworks y Librerías",
            icon: Palette,
            skills: [
                { name: "React", level: 80 },
                { name: "Next.js", level: 75 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Node.js", level: 65 },
                { name: "Express", level: 75 },
            ],
        },
        {
            title: "Bases de Datos",
            icon: Database,
            skills: [
                { name: "PostgreSQL", level: 75 },
                { name: "MongoDB", level: 65 },
                { name: "Firebase", level: 65 },
                { name: "Supabase", level: 70 },
            ],
        },
        {
            title: "Herramientas y Tecnologías",
            icon: Wrench,
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "VS Code", level: 90 },
                { name: "Docker", level: 90 },
                { name: "Postman", level: 75 },
            ],
        },
    ]

    const additionalSkills = [
        "Linux",
        "Servers",
        "API REST",
        "Responsive Design",
        "Vite",
        "Docker",
        "SEO",
        "Performance Optimization",
        "Agile/Scrum",
    ]

    const languages = [
        { name: "Español", level: "Nativo", percentage: 100, flag: "🇪🇸" },
        { name: "Inglés", level: "Fluido", percentage: 85, flag: "🇺🇸" },
    ]

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Habilidades</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Tecnologías y herramientas que domino para crear soluciones web modernas y eficientes
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={index} className="text-card-foreground flex flex-col gap-3 rounded-xl border p-6  shadow-sm bg-card border-border">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                                </div>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                                <span className="text-sm text-foreground font-medium">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-primary/10 rounded-full h-2.5">
                                                <div
                                                    className="bg-primary h-2.5 rounded-full"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Languages Card */}
                <div className="text-card-foreground flex flex-col gap-1 rounded-xl border p-6  shadow-sm bg-card border-border mb-12">
                    <div>
                        <div className="flex items-center gap-3 text-card-foreground">
                            <Languages className="size-10 text-primary bg-primary/10 rounded-xl p-2" />
                            Idiomas
                        </div>
                    </div>
                    <div className="space-y-4">
                        {languages.map((language) => (
                            <div key={language.name} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{language.flag}</span>
                                        <span className="text-sm font-medium text-card-foreground">{language.name}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">{language.level}</span>
                                </div>
                                <div className="w-full bg-primary/10 rounded-full h-2.5">
                                    <div
                                        className="bg-primary h-2.5 rounded-full"
                                        style={{ width: `${language.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Skills */}
                <div className="text-card-foreground flex flex-col gap-1 rounded-xl border p-6  shadow-sm bg-card border-border">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Conocimientos Adicionales</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {additionalSkills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-transparent border-border text-card-foreground">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Soft Skills Highlight */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Habilidades Blandas</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h4 className="font-medium text-card-foreground mb-2">Comunicación</h4>
                            <p className="text-sm text-muted-foreground">
                                Capacidad para explicar conceptos técnicos de manera clara y colaborar efectivamente en equipo.
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h4 className="font-medium text-card-foreground mb-2">Resolución de Problemas</h4>
                            <p className="text-sm text-muted-foreground">
                                Enfoque analítico para identificar, diagnosticar y resolver desafíos técnicos complejos.
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <h4 className="font-medium text-card-foreground mb-2">Aprendizaje Continuo</h4>
                            <p className="text-sm text-muted-foreground">
                                Pasión por mantenerse actualizado con las últimas tecnologías y mejores prácticas del desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}