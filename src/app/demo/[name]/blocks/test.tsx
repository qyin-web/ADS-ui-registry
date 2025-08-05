import TestPage from "@/app/demo/[name]/blocks/test-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const test = {
  name: "test",
  components: {
    Default: (
      <ShellLayout>
        <TestPage />
      </ShellLayout>
    ),
  },
}; 