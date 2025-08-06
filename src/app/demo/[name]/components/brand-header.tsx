import { BrandHeader } from "@/components/brand-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BrandHeaderDemo() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <BrandHeader />
        <main className="pt-16 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Brand Header Demo</h1>
            <p className="text-muted-foreground">
              This is a demo of the Brand Header component. The header should be visible at the top of the page.
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
