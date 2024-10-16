import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import navigationBarComponents from '@/app/data/navigationBar';
import Link from "next/link";

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
type Props = {}

export default function NavigationBar({}: Props) {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-xs">Sobre nosotros</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          
            <ListItem href="/docs" title="Bienvenido" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs/installation" title="Estado de la misión" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Liderazgo" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs" title="Historia" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs/installation" title="Declaración de fe" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Socios" className="text-xs">
              
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Contactos" className="text-xs">
              
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
      <Link href="/recursos" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            ¿Qué Hacemos?
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-xs">Comunidad</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {navigationBarComponents.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
                className="text-xs"
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/proyectos" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Proyectos
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/recursos" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Recursos
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
  )
}