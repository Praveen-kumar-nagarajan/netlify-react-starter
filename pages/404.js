import Image from "next/image";

import Layout from "@components/layout/Layout";

export default function Custom404() {
  return (
    <div className="custom_404">
      <Image
        src="/images/404-error.svg"
        layout="fill"
        alt="custom_404"
        className="custom_404_image"
      />
    </div>
  );
}

Custom404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
