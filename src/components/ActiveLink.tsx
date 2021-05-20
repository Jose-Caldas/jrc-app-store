import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement, ReactNode } from "react";
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const isActive = true;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "#577BF9" : "gray.900",
      })}
    </Link>
  );
}
