"use client";

import { HelpCircle, Menu, Search, X, Bell, Plus, MessageSquare, Star, Grid3X3 } from "lucide-react";
import SidebarCollapseIcon from '@atlaskit/icon/core/sidebar-collapse';
import AppSwitcherIcon from '@atlaskit/icon/core/app-switcher';
import SearchIcon from '@atlaskit/icon/core/search';
import AddIcon from '@atlaskit/icon/core/add';
import RovoChatIcon from '@atlaskit/icon/core/rovo-chat';
import NotificationIcon from '@atlaskit/icon/core/notification';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "./logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background">
      <div className="flex h-12 items-center justify-between px-3 gap-2">
        {/* Left section - Sidebar, App Switcher, Logo (300px width) */}
        <div className="flex items-center space-x-2 w-[300px]">
          {/* Sidebar Collapse Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 md:flex hover:bg-muted"
            onClick={toggleSidebar}
          >
            <div className="size-4">
              <SidebarCollapseIcon label="Toggle sidebar" />
            </div>
          </Button>

          {/* App Switcher Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 md:flex hover:bg-muted"
          >
            <div className="size-4">
              <AppSwitcherIcon label="App switcher" />
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="size-8 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="size-4" />
          </Button>

          {/* Logo with 6px spacing (ml-1.5 = 6px) */}
          <Link href="/" className="flex items-center ml-1.5">
            <Logo />
          </Link>
        </div>

        {/* Center section - Flexible search bar and Create button */}
        <div className="hidden items-center space-x-2 md:flex flex-1 justify-center">
          {isSearchOpen ? (
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search"
                className="h-9 w-full pl-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <div className="absolute top-2.5 left-3 size-4 text-muted-foreground">
                <SearchIcon label="Search" />
              </div>
            </div>
          ) : (
            <div className="relative flex-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:bg-muted h-9"
                onClick={() => setIsSearchOpen(true)}
              >
                <div className="size-4 mr-2">
                  <SearchIcon label="Search" />
                </div>
                Search
              </Button>
            </div>
          )}

          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 h-8">
            <div className="size-4">
              <AddIcon label="Create" />
            </div>
            Create
          </Button>
        </div>

        {/* Right button group - 300px width with specific buttons */}
        <div className="hidden items-center space-x-2 md:flex w-[300px] justify-end">
          <Button variant="outline" size="sm" className="text-foreground hover:bg-muted h-8">
            <div className="size-4">
              <RovoChatIcon label="Rovo chat" />
            </div>
            Rovo chat
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 hover:bg-muted"
          >
            <div className="size-4">
              <NotificationIcon label="Notifications" />
            </div>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 hover:bg-muted"
          >
            <div className="size-4">
              <QuestionCircleIcon label="Support" />
            </div>
          </Button>

          <Avatar className="size-8 ml-2">
            <AvatarFallback className="bg-orange-500 text-white">
              <span className="text-xs font-medium">QY</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <div className="h-5 w-5">
              <SearchIcon label="Search" />
            </div>
          </Button>
          <Avatar className="size-8">
            <AvatarFallback className="bg-orange-500 text-white">
              <span className="text-xs font-medium">QY</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
