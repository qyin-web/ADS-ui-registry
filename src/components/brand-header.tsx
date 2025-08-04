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
        <div className="flex items-center gap-1 w-[300px]">
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

          {/* Logo with 4px margin to test spacing */}
          <Link href="/" className="flex items-center ml-1 p-1 hover:bg-muted rounded">
            <Logo />
          </Link>
        </div>

        {/* Center section - Flexible search bar and Create button */}
        <div className="hidden items-center gap-2 md:flex flex-1 justify-center">
          <div className={`flex-1 max-w-[780px] flex items-center bg-background border border-input rounded focus-within:shadow-[0px_8px_12px_rgba(23,43,77,0.15),0px_0px_1px_rgba(23,43,77,0.31)] focus-within:border-none ${isSearchOpen ? 'h-10' : 'h-8'}`}>
                          <div className={`flex items-center text-muted-foreground ${isSearchOpen ? 'pl-5 pr-4' : 'pl-2 pr-2'}`}>
                <Search className="size-4" />
              </div>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              autoFocus={isSearchOpen}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>

          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 h-8">
            <div className="size-4">
              <AddIcon label="Create" />
            </div>
            Create
          </Button>
        </div>

        {/* Right button group - 300px width with specific buttons */}
        <div className="hidden items-center gap-1 md:flex w-[300px] justify-end">
          <Button variant="outline" size="sm" className="text-foreground hover:bg-muted h-8">
            <div className="size-4">
              <RovoChatIcon label="Rovo Chat" />
            </div>
            Rovo Chat
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

          <div className="px-0.5">
            <div className="p-1">
              <Avatar className="size-6 cursor-pointer select-none hover:ring-4 hover:ring-muted">
                <AvatarFallback className="bg-chart-3 text-foreground">
                  <span className="text-[10px] font-medium">QY</span>
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <div className="h-5 w-5">
              <SearchIcon label="Search" />
            </div>
          </Button>
          <Avatar className="size-6 cursor-pointer select-none hover:ring-4 hover:ring-muted">
            <AvatarFallback className="bg-chart-3 text-foreground">
              <span className="text-[10px] font-medium">QY</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
