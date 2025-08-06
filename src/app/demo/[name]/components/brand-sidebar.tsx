import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BrandSidebarDemo() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex">
        <BrandSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Brand Sidebar Demo</h1>
            <p className="text-muted-foreground">
              This is a demo of the Brand Sidebar component. The sidebar should be visible on the left side of the page.
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
