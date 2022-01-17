import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "@components/layout/Layout";

export default function Home({ children }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/about");
  });

  return <div></div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
