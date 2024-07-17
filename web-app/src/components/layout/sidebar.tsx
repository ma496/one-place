"use client"
import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { navItmes } from "@/nav-itmes";
import Image from "next/image";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export function Sidebar() {
  const path = usePathname()
  const t = useTranslations()

  return (
    <div className="hidden ltr:border-r rtl:border-l bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/assets/images/icon.png" alt="app icon" width={24} height={24} />
            <span>{t('EasyForNet')}</span>
          </Link>
          <Button variant="outline" size="icon" className="ltr:ml-auto rtl:mr-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
              navItmes.map((ni, i) => (
                <Link
                  key={i}
                  href={`${ni.url}`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${ni.url === path ? 'bg-muted' : ''}`}
                >
                  <ni.icon className="h-4 w-4" />
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
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>{t('UpgradetoPro')}</CardTitle>
              <CardDescription>
                {t('UpgradeBenefit')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                {t('Upgrade')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
