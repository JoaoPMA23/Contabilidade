"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

type SignOutButtonProps = {
  className?: string;
};

export function SignOutButton({ className }: SignOutButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className={className}
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Sair
    </Button>
  );
}
