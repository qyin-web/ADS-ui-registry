"use client";

import { HelpCircle, Menu, Search, X, Bell, Plus, MessageSquare, Star } from "lucide-react";
import SearchIcon from "@atlaskit/icon/core/search";
import AddIcon from "@atlaskit/icon/core/add";
import NotificationIcon from "@atlaskit/icon/core/notification";
import QuestionCircleIcon from "@atlaskit/icon/core/question-circle";
import SidebarCollapseIcon from "@atlaskit/icon/core/sidebar-collapse";
import AppSwitcherIcon from "@atlaskit/icon/core/app-switcher";
import RovoChatIcon from "@atlaskit/icon/core/rovo-chat";
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
    <header className="fixed z-50 w-full border-b border-[rgba(11,18,14,0.02)] bg-white">
      <div className="flex h-16 items-center justify-between px-3">
        {/* Left Section - Sidebar Toggle + App Switcher + Logo */}
        <div className="flex items-center gap-1 min-w-[300px] pr-[106px]">
          {/* Sidebar Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-[3px] p-1.5 flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <SidebarCollapseIcon size="small" label="Collapse sidebar" />
          </Button>

          {/* App Switcher */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-[3px] p-1.5 flex items-center justify-center"
          >
            <AppSwitcherIcon size="small" label="App switcher" />
          </Button>

          {/* Logo */}
          <div className="pl-1 flex items-center">
            <Link href="/" className="flex items-center">
              <Logo size="small" />
            </Link>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 flex justify-center max-w-[780px]">
          <div className="relative w-full">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="h-8 w-full pl-[31px] pr-[13px] py-[7.5px] text-[14px] text-[#6b6e76] border-[#8c8f97] rounded-[5px] bg-white"
                style={{ fontFamily: "Atlassian Sans, sans-serif", fontWeight: 400, lineHeight: "normal" }}
              />
              <div className="absolute left-2 top-2 size-4">
                <SearchIcon size="small" label="Search" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Create Button + Actions + Avatar */}
        <div className="flex items-center gap-1 min-w-[300px] pl-[47.63px]">
          {/* Create Button */}
          <div className="mr-2">
            <Button 
              variant="default" 
              size="sm" 
              className="h-8 bg-[#1868db] hover:bg-[#1868db]/90 text-white px-2 py-1.5 rounded-[3px] gap-1"
              style={{ fontFamily: "Atlassian Sans, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}
            >
              <AddIcon size="small" label="Create" />
              <span>Create</span>
            </Button>
          </div>

          {/* Rovo Chat Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-3 text-[#505258] hover:bg-transparent gap-1.5"
            style={{ fontFamily: "Atlassian Sans, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}
          >
            <RovoChatIcon size="small" label="Rovo chat" />
            <span>Rovo chat</span>
          </Button>

          {/* Notification Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-[3px] p-1.5"
          >
            <NotificationIcon size="small" label="Notifications" />
          </Button>

          {/* Help Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-[3px] p-1.5"
          >
            <QuestionCircleIcon size="small" label="Help" />
          </Button>

          {/* Avatar */}
          <div className="px-0.5">
            <Avatar className="h-6 w-6 rounded-full">
              <AvatarFallback className="bg-orange-500 text-white text-xs font-medium rounded-full">
                <span className="text-xs">QY</span>
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
