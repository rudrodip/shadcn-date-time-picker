import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ExternalLink = ({ href, children, className }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" className={cn("underline", className)}>
      {children}
    </a>
  );
}