import { BrandHeader } from "@/components/brand-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function BlankPage() {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen">
        <BrandHeader />
        <div className="flex-1 flex flex-col items-center gap-4 p-8 pt-16 overflow-y-auto h-[calc(100vh-48px)]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-[#172B4D]">Welcome to Confluence</h1>
            <p className="text-[#6B778C] max-w-md">
              This is your Confluence workspace. Start creating pages, collaborating with your team, and organizing your work.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button variant="default" size="sm">
                Create Page
              </Button>
              <Button variant="outline" size="sm">
                Browse Spaces
              </Button>
            </div>
          </div>
          
          {/* Test content to trigger scrollbar */}
          <div className="w-full space-y-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Sample Content {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    This is sample content to test the scrollbar behavior. The header should remain sticky at the top while only the content below scrolls.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
