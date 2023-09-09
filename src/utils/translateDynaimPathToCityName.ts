function translateDynamicPathToCityName(UrlName: string): string | undefined {
  const translator: { [key: string]: string } = {
    stockholm: "Stockholm",
    goteborg: "Göteborg",
    malmo: "Malmö",
    uppsala: "Uppsala",
    vasteras: "Västerås",
    orebro: "Örebro",
    linkoping: "Linköping",
    helsingborg: "Helsingborg",
    norrkoping: "Norrköping",
    jonkoping: "Jönköping",
    lund: "Lund",
    umea: "Umeå",
    vaxjo: "Växjö",
    halmstad: "Halmstad",
    sundsvall: "Sundsvall",
  };

  if (!translator[UrlName]) {
    console.error(`Translation error for: ${UrlName}`);
    return undefined;
  }

  return translator[UrlName];
}

export default translateDynamicPathToCityName;
