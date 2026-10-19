export const THEME_STORAGE_KEY = 'graffiticode-theme'

/** Runs in the document head so a saved theme is applied before the first paint. */
export const THEME_INIT_SCRIPT = `(() => {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch {}
  const override = new URLSearchParams(location.search).get('theme');
  if (override === 'dark' || override === 'light') {
    theme = override;
    try { localStorage.setItem('${THEME_STORAGE_KEY}', theme); } catch {}
  }
  document.documentElement.dataset.theme = theme;
})();`
