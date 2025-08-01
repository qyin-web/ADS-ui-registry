import { BrandHeader } from "@/components/brand-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

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
              <Button variant="default" size="sm" className="bg-[#0052CC] text-white hover:bg-[#0052CC]/90">
                Create Page
              </Button>
              <Button variant="outline" size="sm" className="text-[#172B4D] hover:bg-muted">
                Browse Spaces
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
