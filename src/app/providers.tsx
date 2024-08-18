"use client";

import ClientProvider from "@/context/ClientContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ClientProvider>
  );
}
