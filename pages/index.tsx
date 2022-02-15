import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Link href="/test">
        <a>테스트 버튼</a>
      </Link>
      <div>{t("title")}</div>
    </>
  );
};

export default Home;
