import { ThemeProvider } from "@/components/theme/provider";
import { Toaster } from "@/components/ui/sonner";

type RootProvider = {
  children: React.ReactNode;
};

export const RootProvider: React.FC<RootProvider> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster position="top-right" />
      {children}
    </ThemeProvider>
  );
};
