export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[#172B4D]">Confluence Dashboard (Updated)</h1>
        <p className="text-[#6B778C]">
          Welcome to your Confluence workspace. Here you can manage your spaces, pages, and team collaboration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-[#DFE1E6] rounded-lg p-6 space-y-3">
          <h3 className="font-semibold text-[#172B4D]">Recent Pages</h3>
          <div className="space-y-2">
            <div className="text-sm text-[#6B778C]">• Project Overview</div>
            <div className="text-sm text-[#6B778C]">• Team Meeting Notes</div>
            <div className="text-sm text-[#6B778C]">• Product Requirements</div>
          </div>
        </div>
        
        <div className="bg-white border border-[#DFE1E6] rounded-lg p-6 space-y-3">
          <h3 className="font-semibold text-[#172B4D]">Quick Actions</h3>
          <div className="space-y-2">
            <div className="text-sm text-[#0052CC] cursor-pointer">Create new page</div>
            <div className="text-sm text-[#0052CC] cursor-pointer">Invite team members</div>
            <div className="text-sm text-[#0052CC] cursor-pointer">View analytics</div>
          </div>
        </div>
        
        <div className="bg-white border border-[#DFE1E6] rounded-lg p-6 space-y-3">
          <h3 className="font-semibold text-[#172B4D]">Spaces</h3>
          <div className="space-y-2">
            <div className="text-sm text-[#6B778C]">• Engineering</div>
            <div className="text-sm text-[#6B778C]">• Product</div>
            <div className="text-sm text-[#6B778C]">• Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
