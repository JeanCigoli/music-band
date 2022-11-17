export const SeoConfig = () => {
  const seo = {
    name: 'Banda Véu e Grinalda',
    title: 'Banda Véu e Grinalda',
    description:
      'Banda para cerimônia de casamentos na região de osasco e suas cidades vizinhas',
    image: '',
    url: 'https://veuegrinalda.com.br',
    keywords:
      'Banda de Casamento, Banda para casamento, Banda para Cerimônia, Música para casamento, Cerimônia, Casamento, Banda, Música',
  };

  return (
    <>
      <title>{seo.name}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="keywords" content={seo.keywords} />

      <meta name="image" content="" />

      <meta name="creator" content="Jean Cigoli de Almeida" />

      <meta name="DC.Suject" content={seo.keywords} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
};

export default SeoConfig;
