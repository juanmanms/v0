import Image from "next/image";
import { Button } from '../ui/button'

export const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 gap-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Bienvenido a Leaveme</h1>
                <p className="text-muted-foreground mb-6">
                    Leaveme es una plataforma que te permite compartir tus prendas con tus amigas y descubrir nuevas prendas. Reduce
                    residuos, ahorra dinero.
                </p>
                <Button size="lg">Empieza a compartir</Button>
            </div>
            <div>
                <Image
                    src="/hero-leaveme.jpeg"
                    alt="Closet Swap"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    priority
                />
            </div>
        </section>
    )
}
