"use client"
import { Send } from "lucide-react";
import { useState } from "react";
import Button from "./ui/button";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Download } from "lucide-react";
import Github from "@/icons/github";
import Input from "./ui/input";
import Textarea from "./ui/textarea";

export function ContactSection() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Enviando mensaje...", formData)
    }

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "DavidLattanzioCV.pdf";
        link.click();
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "lcdavid578@gmail.com",
            href: "mailto:lcdavid578@gmail.com",
        },
        {
            icon: Phone,
            label: "Teléfono",
            value: "+34 684 02 66 31",
            href: "tel:+34684026631",
        },
        {
            icon: MapPin,
            label: "Ubicación",
            value: "Guadalajara, España",
            href: null,
        },
    ]

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/DavidLC578",
        },
        {
            icon: Mail,
            label: "Email",
            href: "mailto:lcdavid578@gmail.com",
        },
    ]



    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Contacto</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escuchar de ti
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="text-card-foreground flex flex-col gap-7 rounded-xl border p-6  shadow-sm bg-card border-border">
                        <div>
                            <h2 className="text-card-foreground">Envíame un mensaje</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-card-foreground">
                                            Nombre *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-input border-border text-foreground"
                                            required
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-card-foreground">
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-input border-border text-foreground"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-card-foreground">
                                        Asunto *
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="bg-input border-border text-foreground"
                                        placeholder="¿De qué quieres hablar?"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-card-foreground">
                                        Mensaje *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="bg-input border-border text-foreground resize-none"
                                        placeholder="Cuéntame sobre tu proyecto o idea..."
                                    />
                                </div>
                                <Button disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Enviar Mensaje
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                    {/* Contact Info & CV Download */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="text-card-foreground flex flex-col gap-7 rounded-xl border p-6  shadow-sm bg-card border-border">
                            <div>
                                <div className="text-card-foreground">Información de contacto</div>
                            </div>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon
                                    const content = (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-card-foreground">{info.label}</p>
                                                <p className="text-sm text-muted-foreground">{info.value}</p>
                                            </div>
                                        </div>
                                    )

                                    return info.href ? (
                                        <a key={index} href={info.href} className="block">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>{content}</div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* CV Download */}
                        <div className="text-card-foreground flex flex-col gap-7 rounded-xl border p-6  shadow-sm bg-card border-border">
                            <div>
                                <div className="text-card-foreground">Currículum Vitae</div>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-4 text-sm">
                                    Descarga mi CV actualizado con toda mi experiencia, formación y habilidades técnicas.
                                </p>
                                <Button onClick={handleDownloadCV} className="w-full bg-transparent" variant="outline">
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar CV (PDF)
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="text-card-foreground flex flex-col gap-7 rounded-xl border p-6  shadow-sm bg-card border-border">
                            <div>
                                <div className="text-card-foreground">Sígueme en</div>
                            </div>
                            <div>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => {
                                        const IconComponent = social.icon
                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
                                                <IconComponent className="h-5 w-5" />
                                                <span className="sr-only">{social.label}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Quick Response Promise */}
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                            <h3 className="font-semibold text-foreground mb-2">Respuesta rápida garantizada</h3>
                            <p className="text-sm text-muted-foreground">
                                Me comprometo a responder todos los mensajes en un plazo máximo de 24 horas. ¡Hablemos sobre tu próximo
                                proyecto!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}