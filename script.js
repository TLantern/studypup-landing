(function() {
  const STORE_URL = 'https://apps.apple.com/us/app/studypup/id6758959038';

  function buildCtaUrl() {
    const params = new URLSearchParams(window.location.search);
    const utm = {
      utm_source: params.get('utm_source') || 'studypup_landing',
      utm_medium: params.get('utm_medium') || 'web',
      utm_campaign: params.get('utm_campaign') || 'homepage'
    };
    const url = new URL(STORE_URL);
    Object.entries(utm).forEach(([k, v]) => url.searchParams.set(k, v));
    return url.toString();
  }

  document.querySelectorAll('[id^="cta-"], .cta-primary').forEach(el => {
    if (el.href && el.href.includes('apps.apple.com')) el.href = buildCtaUrl();
  });
})();
