import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Header from "../component/header";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Header translator={t} />
      <Link href="/test">
        <a>{t("to.test")}</a>
      </Link>
      <div>{t("title")}</div>
    </>
  );
};

export default Home;
