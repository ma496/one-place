"use client"
import { CircleUser, Menu, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Link, usePathname, useRouter } from "@/navigation"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { ThemesToggle } from "./themes-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { navItmes } from "@/nav-itmes"
import Image from "next/image"
import { LanguageDropdownCircle } from "../language-dropdown-circle"
import { useTranslations } from "next-intl"
import { useAppSelector } from "@/store/hooks"

export function Header() {
  const path = usePathname()
  const t = useTranslations()
  const themeConfig = useAppSelector(s => s.themeConfig)

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src='/assets/images/icon.png' alt="app icon" width={30} height={30} />
              <span>{t('EasyForNet')}</span>
            </Link>
            {
              navItmes.map((ni, i) => (
                <Link
                  key={i}
                  href={ni.url}
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${ni.url === path ? 'bg-muted' : ''}`}
                >
                  {
                    ni.icon && (
                      <ni.icon className="h-5 w-5" />
                    )
                  }
                  {t(`nav.${ni.label}`)}
                  {
                    ni.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {ni.badge}
                      </Badge>
                    )
                  }
                </Link>
              ))
            }
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>{t('UpgradetoPro')}</CardTitle>
                <CardDescription>
                  {t('UpgradeBenefit')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  {t('Upgrade')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 rtl:right-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('SearchProducts')}
              className="w-full appearance-none bg-background pl-8 rtl:pr-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ThemesToggle />
      {themeConfig.localeEnabled && <LanguageDropdownCircle />}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex rtl:flex-row-reverse">{t('MyAccount')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex rtl:flex-row-reverse">{t('Settings')}</DropdownMenuItem>
          <DropdownMenuItem className="flex rtl:flex-row-reverse">{t('Support')}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex rtl:flex-row-reverse">{t('Logout')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
