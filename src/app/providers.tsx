"use client";

import ClientProvider from "@/context/ClientContext";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactFlowProvider } from "reactflow";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <ReactFlowProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ReactFlowProvider>
    </ClientProvider>
  );
}
