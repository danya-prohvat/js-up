import { Grid } from "@components/contents/Grid";
import { Layout } from "@components/core/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Grid CSS Cheat Sheet',
  description: 'Grid CSS Cheat Sheet',
}

export default function GridPage() {
  return (
    <Layout>
      <Grid />
    </Layout>
  )
}
