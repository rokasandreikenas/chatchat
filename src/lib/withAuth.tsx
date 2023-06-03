import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import ProtectedLayout from "@/layouts/ProtectedLayout";

export const withAuth = <P extends JSX.IntrinsicAttributes>(
  Component: NextPage<P>
) => {
  const AuthenticatedComponent: NextPage<P> = (props: P) => {
    const router = useRouter();
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null;
    }

    return (
      <ProtectedLayout>
        <Component {...props} />
      </ProtectedLayout>
    );
  };

  if (Component.getInitialProps) {
    AuthenticatedComponent.getInitialProps = Component.getInitialProps;
  }

  return AuthenticatedComponent;
};
