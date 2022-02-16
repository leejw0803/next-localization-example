import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Header from "../component/header";
import { getLocale } from "../utils";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(getLocale(locale), ["common"])),
      locale,
    },
  };
};

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
