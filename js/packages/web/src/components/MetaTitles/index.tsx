const title = 'UTX STORE: Virtual NFT items from your fav musicians';

const description =
  'UTX Store is a place to recieve virtual items from musicians. Get NFT to your wallet, buy/sell it on auction.';

const keywords = `
  nft, opensea, bakeryswap, Non-Fungible Token, nft marketplace, crypto punks, CryptoKitties, ukratrax, 801, український треп, music nft, merch
`;

export const MetaTitles = () => {
  return (
    <>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ukratrax.store" />
      <meta property="og:site_name" content="Ukratrax.store" key="site_name" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta
        property="og:image"
        content="https://www.ukratrax.store/social-banner.png"
      />
      <meta property="og:image:alt" content="Ukratrax" key="image:alt" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta name="twitter:site" content="@ukratrax" />
      <meta name="twitter:creator" content="@ukratrax" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://www.ukratrax.store/social-banner.png"
      />
    </>
  );
};
