import type { GetServerSidePropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Header from "../component/header";
import { getLocale } from "../utils";
import { useRouter } from "next/router";
import { formatInTimeZone, format } from "date-fns-tz";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      ...(await serverSideTranslations(getLocale(context.locale), [
        "common",
        "home",
      ])),
    },
  };
};

const Home: NextPage = () => {
  const commonTranslater = useTranslation("common");
  const { t } = useTranslation("home");

  const date = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localizedDatetime = formatInTimeZone(
    date,
    timezone,
    "yyyy-MM-dd HH:mm:ss zzz"
  );

  return (
    <>
      <Header translator={commonTranslater.t} />
      <Link href="/test">
        <a>{t("to.test")}</a>
      </Link>
      <div>{t("title")}</div>
      <p>
        {t("time")} {localizedDatetime}
      </p>
    </>
  );
};

export default Home;
