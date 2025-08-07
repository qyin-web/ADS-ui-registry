"use client";

import {
  AlertTriangle,
  BarChart2,
  Clock,
  Database,
  Home,
  LayoutGrid,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Table,
  User,
  Star,
  Globe,
  Grid3X3,
  Users,
  Search,
  BookOpen,
  Calendar,
  Building,
  ExternalLink,
  Volume2,
  ChevronRight,
  ChevronDown,
  Brain,
  FileText,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Blog24Icon from '@atlaskit/icon-object/glyph/blog/24';
import PersonIcon from '@atlaskit/icon/core/person';
import ClockIcon from '@atlaskit/icon/core/clock';
import StarUnstarredIcon from '@atlaskit/icon/core/star-unstarred';
import GlobeIcon from '@atlaskit/icon/core/globe';
import AppsIcon from '@atlaskit/icon/core/apps';
import TeamsIcon from '@atlaskit/icon/core/teams';
import ShortcutIcon from '@atlaskit/icon/core/shortcut';
import PagesIcon from '@atlaskit/icon/core/pages';
import QuotationMarkIcon from '@atlaskit/icon/core/quotation-mark';
import CalendarIcon from '@atlaskit/icon/core/calendar';
import AddIcon from '@atlaskit/icon/core/add';
import OfficeBuildingIcon from '@atlaskit/icon/core/migration/office-building--office-building-filled';
import { JiraIcon } from '@atlaskit/logo';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
  };
  showChevron?: boolean;
  showOverflow?: boolean;
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function BrandSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

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
  ];

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
  ];

  const bottomNavItems: NavItem[] = [
    {
      title: "Company hub",
      href: "#company-hub",
      icon: <OfficeBuildingIcon label="Company hub" />,
    },
    {
      title: "Jira",
      href: "#jira",
      icon: <JiraIcon size="small" appearance="brand" shouldUseNewLogoDesign />,
    },
    {
      title: "More",
      href: "#more",
      icon: <ShowMoreHorizontalIcon label="More" />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="mt-12">
      <SidebarContent>
        {/* Top Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {topNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (pathname === "" && item.href === "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                      {item.showChevron && (
                        <ChevronRight className="size-4 ml-auto" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Content Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                      {item.showOverflow && (
                        <MoreHorizontal className="size-4 ml-auto" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Bottom Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Search Bar */}
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title"
              className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm"
            />
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="p-2 border-t">
          <Button className="w-full mb-2" variant="outline">
            Invite people
          </Button>
          <Button className="w-8 h-8 p-0" variant="ghost" size="icon">
            <Volume2 className="size-4" />
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
