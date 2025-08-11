"use client"

import { Search, ChevronRight, ChevronDown, FileText, MoreHorizontal, Briefcase } from "lucide-react"
import MegaphoneIcon from "@atlaskit/icon/core/megaphone"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import Blog24Icon from "@atlaskit/icon-object/glyph/blog/24"
import PersonIcon from "@atlaskit/icon/core/person"
import ClockIcon from "@atlaskit/icon/core/clock"
import StarUnstarredIcon from "@atlaskit/icon/core/star-unstarred"
import GlobeIcon from "@atlaskit/icon/core/globe"
import AppsIcon from "@atlaskit/icon/core/apps"
import TeamsIcon from "@atlaskit/icon/core/teams"
import ShortcutIcon from "@atlaskit/icon/core/shortcut"
import PagesIcon from "@atlaskit/icon/core/pages"
import QuotationMarkIcon from "@atlaskit/icon/core/quotation-mark"
import CalendarIcon from "@atlaskit/icon/core/calendar"
import AddIcon from "@atlaskit/icon/core/add"
import ShowMoreHorizontalIcon from "@atlaskit/icon/core/show-more-horizontal"
import LinkExternalIcon from "@atlaskit/icon/core/link-external"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  badge?: {
    text: string
  }
  showChevron?: boolean
  showOverflow?: boolean
}

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
  className?: string
}

export function BrandSidebar({ collapsed = false, onToggle, className }: SidebarProps) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const topNavItems: NavItem[] = [
    {
      title: "For you",
      href: "#for-you",
      icon: <PersonIcon label="For you" />,
    },
    {
      title: "Recent",
      href: "#recent",
      icon: <ClockIcon label="Recent" />,
      showChevron: true,
    },
    {
      title: "Starred",
      href: "#starred",
      icon: <StarUnstarredIcon label="Starred" />,
      showChevron: true,
    },
    {
      title: "Spaces",
      href: "#spaces",
      icon: <GlobeIcon label="Spaces" />,
      showChevron: true,
    },
    {
      title: "Apps",
      href: "#apps",
      icon: <AppsIcon label="Apps" />,
    },
    {
      title: "Teams",
      href: "#teams",
      icon: <TeamsIcon label="Teams" />,
    },
  ]

  const contentNavItems: NavItem[] = [
    {
      title: "Qiao's Confluence UI kit",
      href: "#test",
      icon: <Blog24Icon label="Qiao's Confluence UI kit" />,
      showOverflow: true,
    },
    {
      title: "Shortcuts",
      href: "#shortcuts",
      icon: <ShortcutIcon label="Shortcuts" />,
    },
    {
      title: "Content",
      href: "#content",
      icon: <PagesIcon label="Content" />,
    },
    {
      title: "Create",
      href: "#create",
      icon: <AddIcon label="Create" />,
    },
    {
      title: "Blogs",
      href: "#blogs",
      icon: <QuotationMarkIcon label="Blogs" />,
    },
    {
      title: "Calendars",
      href: "#calendars",
      icon: <CalendarIcon label="Calendars" />,
    },
  ]

  const bottomNavItems: NavItem[] = [
    {
      title: "More",
      href: "#more",
      icon: <ShowMoreHorizontalIcon label="More" />,
    },
  ]

  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="mt-12"
      style={
        {
          height: "calc(100vh - 3rem)",
        } as React.CSSProperties
      }
    >
      <SidebarContent className="flex flex-col h-[calc(100vh-3rem)]">
        <div className="flex-1">
          {/* Top Navigation */}
          <SidebarGroup className="pb-0">
            <SidebarGroupContent>
              <SidebarMenu>
                {topNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href || (pathname === "" && item.href === "/")}
                      tooltip={item.title}
                      className="font-medium"
                    >
                      <Link href={item.href}>
                        <div className="size-4">{item.icon}</div>
                        <span>{item.title}</span>
                        {item.showChevron && <ChevronRight className="size-4 ml-auto" />}
                      </Link>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="mt-3 mx-0" />

          {/* Content Navigation */}
          <SidebarGroup className="pt-0 pb-0">
            <SidebarGroupContent>
              <SidebarMenu>
                {contentNavItems.slice(0, 3).map((item) => (
                  <SidebarMenuItem
                    key={item.href}
                    className={item.title === "Qiao's Confluence UI kit" ? "mt-3 mb-3" : ""}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                      className="font-medium"
                    >
                      <Link href={item.href}>
                        <div
                          className={
                            item.title === "Qiao's Confluence UI kit"
                              ? "size-6 flex items-center justify-center"
                              : "size-4"
                          }
                        >
                          {item.icon}
                        </div>
                        <span>{item.title}</span>
                        {item.showOverflow && <MoreHorizontal className="size-4 ml-auto" />}
                      </Link>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}

                {/* Search Bar */}
                <div className="pt-2 pb-2 pr-0 pl-1">
                  <div className="relative">
                    <Search className="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search by title"
                      className="w-full rounded-md border border-input bg-background pl-6 pr-2 py-1 text-sm"
                    />
                  </div>
                </div>

                {/* Business Development Section */}
                <div>
                  {/* Business Content Items */}
                  <div className="ml-4 mt-0">
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Business Development" className="font-medium">
                        <div className="flex items-center cursor-pointer">
                          <ChevronDown className="size-4" />
                          <div className="size-4 ml-1">
                            <Briefcase className="size-4" />
                          </div>
                          <span>Business Development</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Revenue partnerships hub" className="font-medium">
                        <Link href="#revenue-partnerships">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 text-yellow-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8 0l2.5 5.5L16 6.5l-4 4 1 6-5-2.5L3 16l1-6-4-4 5.5-1L8 0z" />
                              </svg>
                            </div>
                          </div>
                          <span>Revenue partnerships hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={true}
                        tooltip="Global Community Playbook"
                        className="font-medium"
                      >
                        <Link href="#global-community">
                          <ChevronDown className="size-4" />
                          <div className="size-4">
                            <div className="size-4 text-red-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8 1.5c-3.5 0-6.5 2.5-6.5 6 0 2.5 1.5 4.5 3.5 5.5.5.5 1.5.5 2 0 .5-.5.5-1.5 0-2-.5-.5-1-1-1-2 0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5c0 1-.5 1.5-1 2-.5.5-.5 1.5 0 2 .5.5 1.5.5 2 0 2-1 3.5-3 3.5-5.5 0-3.5-3-6-6.5-6z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-blue-500">Global Community Playbook</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    {/* Sub-item under Global Community Playbook */}
                    <div className="ml-4">
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip="Beta Community Update" className="font-medium">
                          <Link href="#beta-community-update">
                            <div className="size-4 flex items-center justify-center">
                              <div className="size-1 bg-muted-foreground rounded-full"></div>
                            </div>
                            <div className="size-4">
                              <div className="size-4 text-muted-foreground">
                                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                  <path d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 3h6v1H5V5zm0 2h6v1H5V7zm0 2h4v1H5V9z" />
                                </svg>
                              </div>
                            </div>
                            <span>Beta Community Update</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </div>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="[H2'22] Partnerships Strategy" className="font-medium">
                        <Link href="#partnerships-strategy">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 text-blue-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M6 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H6zm4 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4z" />
                              </svg>
                            </div>
                          </div>
                          <span>{"[H2'22] Partnerships Strategy"}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="2022 embed strategy" className="font-medium">
                        <Link href="#embed-strategy">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 text-red-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <circle cx="8" cy="8" r="6" />
                              </svg>
                            </div>
                          </div>
                          <span>2022 embed strategy</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Partner-specific documents" className="font-medium">
                        <Link href="#partner-documents">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 text-blue-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0H4zm5 1.5L12.5 5H9.5V1.5zM4 2h4v4h4v8H4V2z" />
                              </svg>
                            </div>
                          </div>
                          <span>Partner-specific documents</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Channel partnerships hub" className="font-medium">
                        <Link href="#channel-partnerships">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 text-blue-400">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 1 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5 0 0 1 .5-.5z" />
                              </svg>
                            </div>
                          </div>
                          <span>Channel partnerships hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="[Partner Prep Template]" className="font-medium">
                        <Link href="#partner-prep">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 text-orange-500">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0H4zm4.5 1.5L12.5 5H8.5V1.5zM4 2h3v4h5v8H4V2z" />
                              </svg>
                            </div>
                          </div>
                          <span>[Partner Prep Template]</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Figma" className="font-medium">
                        <Link href="#figma">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">F</span>
                            </div>
                          </div>
                          <span>Figma</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Kaltura" className="font-medium">
                        <Link href="#kaltura">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <FileText className="size-4" />
                          </div>
                          <span>Kaltura</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Adobe" className="font-medium">
                        <Link href="#adobe">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <FileText className="size-4" />
                          </div>
                          <span>Adobe</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Citrix" className="font-medium">
                        <Link href="#citrix">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <FileText className="size-4" />
                          </div>
                          <span>Citrix</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Thrive Hub" className="font-medium">
                        <Link href="#thrive-hub">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">T</span>
                            </div>
                          </div>
                          <span>Thrive Hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Notion hub" className="font-medium">
                        <Link href="#notion-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-white border rounded-sm flex items-center justify-center">
                              <span className="text-black text-xs font-bold">N</span>
                            </div>
                          </div>
                          <span>Notion hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Microsoft hub" className="font-medium">
                        <Link href="#microsoft-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-blue-600 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">M</span>
                            </div>
                          </div>
                          <span>Microsoft hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Fiverr hub" className="font-medium">
                        <Link href="#fiverr-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-green-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">F</span>
                            </div>
                          </div>
                          <span>Fiverr hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Salesforce hub" className="font-medium">
                        <Link href="#salesforce-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-blue-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">S</span>
                            </div>
                          </div>
                          <span>Salesforce hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Atlassian hub" className="font-medium">
                        <Link href="#atlassian-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-blue-600 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">A</span>
                            </div>
                          </div>
                          <span>Atlassian hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Twitter hub" className="font-medium">
                        <Link href="#twitter-hub">
                          <ChevronRight className="size-4" />
                          <div className="size-4">
                            <div className="size-4 bg-black rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">T</span>
                            </div>
                          </div>
                          <span>Twitter hub</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Loom Partner FAQ" className="font-medium">
                        <Link href="#loom-partner-faq">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 bg-green-600 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">L</span>
                            </div>
                          </div>
                          <span>Loom Partner FAQ</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Compete against Vimeo" className="font-medium">
                        <Link href="#compete-against-vimeo">
                          <div className="size-4 flex items-center justify-center">
                            <div className="size-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <div className="size-4">
                            <div className="size-4 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">C</span>
                            </div>
                          </div>
                          <span>Compete against Vimeo</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Create" className="font-medium">
                        <Link href="#create">
                          <div className="size-4">
                            <AddIcon label="Create" />
                          </div>
                          <span>Create</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </div>
                </div>

                {contentNavItems
                  .slice(3)
                  .filter((item) => item.title !== "Create")
                  .map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={item.title}
                        className="font-medium"
                      >
                        <Link href={item.href}>
                          <div className="size-4">{item.icon}</div>
                          <span>{item.title}</span>
                          {item.showOverflow && <MoreHorizontal className="size-4 ml-auto" />}
                        </Link>
                      </SidebarMenuButton>
                      {item.badge && <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>}
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="mt-3 mb-3 mx-0" />

          {/* Bottom Navigation */}
          <SidebarGroup className="pt-0">
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                      className="font-medium"
                    >
                      <Link href={item.href}>
                        <div
                          className={
                            item.title === "Company hub" || item.title === "Jira"
                              ? "size-5 flex items-center justify-center"
                              : "size-4"
                          }
                        >
                          {item.icon}
                        </div>
                        <span>{item.title}</span>
                        {item.showChevron && (
                          <div className="ml-auto size-3">
                            <LinkExternalIcon label="" size="small" />
                          </div>
                        )}
                      </Link>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Bottom Action Buttons - Fixed at bottom */}
        <div className="mt-auto p-2 border-t">
          <div className="flex gap-2">
            <Button className="flex-1 bg-transparent" variant="outline">
              Invite people
            </Button>
            <Button className="w-8 h-8 p-0 bg-transparent" variant="outline" size="icon">
              <MegaphoneIcon label="" />
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
