import TestPage from "@/app/demo/[name]/blocks/test-page";
import MinimalLayout from "@/app/demo/[name]/blocks/minimal-layout";

export const test = {
  name: "test",
  components: {
    Default: (
      <MinimalLayout>
        <TestPage />
      </MinimalLayout>
    ),
  },
}; 