import DashboardPage from "@/app/demo/[name]/blocks/dashboard-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const blank = {
  name: "blank",
  components: {
    Default: (
      <ShellLayout>
        <DashboardPage />
      </ShellLayout>
    ),
  },
};
