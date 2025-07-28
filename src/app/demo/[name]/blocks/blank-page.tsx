import { BrandHeader } from "@/components/brand-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BlankPage() {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <BrandHeader />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-[#172B4D]">Welcome to Confluence</h1>
            <p className="text-[#6B778C] max-w-md">
              This is your Confluence workspace. Start creating pages, collaborating with your team, and organizing your work.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <div className="bg-[#0052CC] text-white px-4 py-2 rounded-[3px] text-sm font-medium">
                Create Page
              </div>
              <div className="border border-[#DFE1E6] text-[#172B4D] px-4 py-2 rounded-[3px] text-sm font-medium">
                Browse Spaces
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
