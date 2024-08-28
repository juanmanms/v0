import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="bg-card py-4 shadow-sm header">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-semibold" >
                        <ShirtIcon className="h-6 w-6" />
                        <span>Leaveme</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/profile" className="text-sm font-medium hover:text-primary" >
                            Buscar
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary" >
                            Compartir
                        </Link>
                        <Button variant="secondary" size="sm">
                            Iniciar
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    )

}
function MenuIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function ShirtIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
    )
}

