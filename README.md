# bostadsrättsföreningen.se — GitHub Pages-starter

En färdig, responsiv **statisk webbplats** byggd med vanlig HTML, CSS och JavaScript. Ingen byggprocess, databas eller beroenden.

## Innehåll

- `index.html` — startsida
- `ekonomisk-forvaltning/` — kommersiellt relevant guide
- `underhallsplan/` — SEO-guide
- `styrelsens-ansvar/` — SEO-guide
- `styrelseprogram/` — jämförelsekriterier (inga påhittade betyg eller priser)
- `verktyg/avgiftshojning/` — fungerande kalkylator
- `om/`, `integritet/` — transparens och utkast till integritetsinformation
- `assets/style.css`, `assets/main.js` — design och funktioner
- `sitemap.xml`, `robots.txt` — SEO-filer
- `CNAME`, `.nojekyll` — GitHub Pages

## Publicera på GitHub Pages

1. Skapa ett **publikt** repository på GitHub, till exempel `brf-sajt`.
2. Packa upp ZIP-filen och ladda upp **innehållet** (filerna, inte övermappen) till repositoryts rot via **Add file → Upload files**.
3. Öppna **Settings → Pages**. Välj **Deploy from a branch**, branch `main`, mapp `/(root)` och **Save**.
4. Testa först din GitHub-URL, t.ex. `https://DITT-GITHUB-NAMN.github.io/brf-sajt/`. De relativa länkarna fungerar även där.
5. Gå till **Settings → Pages → Custom domain** och ange Punycode-domänen nedan; spara. GitHub Pages kräver Punycode för IDN-domäner.
6. Ställ in DNS hos din domänleverantör. GitHubs dokumentation ger de nuvarande IP-adresserna i tabellen nedan. Lägg inte till motstridiga befintliga A-poster.
7. När DNS har slagit igenom, välj **Enforce HTTPS** i GitHub Pages om alternativet finns.
8. Öppna `https://bostadsrättsföreningen.se/` och prova menyer, länkar och kalkylatorn.

**Domän (Punycode):** `xn--bostadsrttsfreningen-izb41b.se`

**DNS för rotdomänen (`@`), A-poster:**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Valfri `www`-subdomän:** Lägg till en `CNAME` för `www` som pekar på `DITT-GITHUB-NAMN.github.io` (inte repo-namnet). GitHub kan då omdirigera mellan `www` och rotdomänen om båda är korrekt konfigurerade.

Se alltid aktuell dokumentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Viktigt innan offentlig lansering

- **Fyll i webbplatsägarens identitet och kontaktuppgifter** under `om/` och `integritet/`. Nu är de tydliga utkast och bör inte lämnas ofärdiga offentligt.
- **Granska fakta och formuleringar** inom lag, styrelseansvar och ekonomi mot gällande svensk rätt och professionell sakkunskap.
- Välj och dokumentera eventuell firma, org.nr och andra uppgifter som behövs för ditt upplägg.
- Här finns **ännu inga affiliate-länkar eller leadformulär**. Det är avsiktligt: koppla bara in verkliga avtal och använd `rel="sponsored"` samt tydlig reklammarkering när du får provision.
- Om du lägger till leadformulär, analytics eller cookies: uppdatera integritetsinformationen och ordna korrekt hantering av personuppgifter/samtycke innan du börjar samla in data.
- `sitemap.xml` och de kanoniska URL:erna utgår från slutdomänen. Efter publicering kan du skicka in sitemap via Search Console.

## Utveckla lokalt

Öppna `index.html` direkt i en webbläsare, eller kör från den här mappen:

```bash
python3 -m http.server 8000
```

Öppna sedan `http://localhost:8000/`.

## Nästa steg för att tjäna pengar

1. Säkerställ ett riktigt affiliateavtal eller en partner som betalar för kvalificerade leads.
2. Skapa en relevant, uppdaterad och transparent jämförelse med riktiga produkter/tjänster.
3. Lägg till reklammarkerade affiliatelänkar.
4. Först när partnerskap finns: testa ett separat leadformulär med fullständigt GDPR-underlag.
5. Följ trafik och konvertering innan du bygger mer teknik.

*Byggd som en enkel MVP, inte som en färdig juridiskt eller kommersiellt granskad tjänst.*
