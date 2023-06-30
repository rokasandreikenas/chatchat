import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

export const loadDynamicComponent = <P extends PropsWithChildren>(
  importPromise: Promise<{ default: React.ComponentType<P> }>
): React.ComponentType<P> => {
  return dynamic(() => importPromise, { ssr: false });
};
