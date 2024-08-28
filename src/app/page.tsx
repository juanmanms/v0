
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { JSX, SVGProps } from "react"
import { Hero } from "@/components/hero/hero";


export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <Hero />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Descubre algunas novedades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Image
                src="/floral.jpg"
                alt="Item Image"
                width={300}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-square"
                priority
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Floral Dress</h3>
                  <p className="text-muted-foreground text-sm">Size: M</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    <MapPinIcon className="w-4 h-4 inline-block mr-1" />
                    New York
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Image
                src="/denim.jpg"
                alt="Item Image"
                width={300}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-square"
                priority
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Denim Jacket</h3>
                  <p className="text-muted-foreground text-sm">Size: L</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    <MapPinIcon className="w-4 h-4 inline-block mr-1" />
                    Los Angeles
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Image
                src="/striped.jpg"
                alt="Item Image"
                width={300}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-square"
                priority
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Striped Shirt</h3>
                  <p className="text-muted-foreground text-sm">Size: S</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    <MapPinIcon className="w-4 h-4 inline-block mr-1" />
                    Chicago
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Image
                src="/linen.webp"
                alt="Item Image"
                width={300}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-square"
                priority
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Linen Pants</h3>
                  <p className="text-muted-foreground text-sm">Size: M</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    <MapPinIcon className="w-4 h-4 inline-block mr-1" />
                    Miami
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comparte tu armario</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image">Imagen</Label>
                  <Input id="image" type="file" />
                </div>
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea id="description" rows={3} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="size">Tamaño</Label>
                  <Select id="size">
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Ubicación</Label>
                  <Input id="location" type="text" />
                </div>
              </div>
              <Button type="submit" size="lg">
                Comparte
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
