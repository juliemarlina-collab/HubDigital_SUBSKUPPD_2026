(() => {
  const base = '../../_ds/sku-ppd-design-systrem-48354ec1-8c7d-4ebf-9d6b-0ac25bf76fb8';
  for (const p of ["tokens/colors.css","tokens/typography.css","tokens/spacing.css","styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  document.head.appendChild(s);
})();
