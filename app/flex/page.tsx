import { Flex } from "@components/contents/Flex";
import { Layout } from "@components/core/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Flexbox CSS Cheat Sheet',
  description: 'Flexbox CSS Cheat Sheet',
}

export default function FlexPage() {
  return (
    <Layout>
      <Flex />
    </Layout>
  )
}
