import Nav from "./Nav";
import Head from "next/head";

const Header = () => {
  return (
    <>
      {/* // SEO META TAGS */}
      <Head key="layout">
        <meta name="title" content="Wordy Wasif" />
        <meta
          name="description"
          content="The personal portfolio and blog of Wasif Ali. A Pianist, Programmer, and Guitarist. Here I write my thoughts and I've also listed my skills."
        />
        <meta
          name="keywords"
          content="programmer portfolio, developer portfolio, blog, pianist, wordy wasif, wasif ali"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Wasif Ali"></meta>
      </Head>

      <Nav />
    </>
  );
};

export default Header;
