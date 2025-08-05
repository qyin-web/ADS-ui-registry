export default function TestPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[#172B4D]">Test Block</h1>
        <p className="text-[#6B778C]">
          This is a simple test block to verify that V0 can load our custom blocks correctly.
        </p>
      </div>
      
      <div className="bg-green-100 border border-green-300 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-2">✅ Success!</h2>
        <p className="text-green-700">
          If you can see this green box in V0, then our block creation process is working correctly.
        </p>
      </div>
    </div>
  );
} 