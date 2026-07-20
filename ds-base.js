<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<!-- @template name="Pentadbir SKU 2026 (Directory)" description="Searchable directory of appointed HRMIS Sub-SKU administrators by Jabatan/Unit for 2026" -->
<helmet><script src="./ds-base.js"></script><script src="./image-slot.js"></script></helmet>
<div style="background:var(--surface-page);font-family:var(--font-body);color:var(--text-primary);max-width:1000px;margin:0 auto">

<div style="background:#fff;padding:20px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;border-bottom:1px solid var(--border-default)">
<a href="../../HomepageInfographic.dc.html" style="display:flex;align-items:center;gap:10px;text-decoration:none">
<image-slot id="ppd-logo" shape="circle" style="width:44px;height:44px" placeholder="Logo"></image-slot>
<div style="display:flex;flex-direction:column;line-height:1.2">
<strong style="font-family:var(--font-display);font-weight:800;font-size:17px;color:var(--color-navy)">SUB SKU PPD 2026</strong>
<span style="font-size:12px;font-weight:600;color:var(--text-muted)">Hub Pengurusan Strategik Digital</span>
</div>
</a>
<sc-if value="{{ isMobile }}" hint-placeholder-val="{{ false }}">
<button onClick="{{ toggleNav }}" style="border:1px solid var(--border-default);background:#fff;border-radius:10px;width:40px;height:36px;font-size:18px;color:var(--color-navy);cursor:pointer">☰</button>
</sc-if>
<sc-if value="{{ isDesktop }}" hint-placeholder-val="{{ true }}">
<div style="display:flex;gap:8px;align-items:center">
<a href="../../HomepageInfographic.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:10px 14px">Utama</a>
<a href="../rujukan-sku/RujukanLive.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:10px 14px">Rujukan</a>
<a href="../workspace-sub-sku/Workspace.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:10px 14px">Workspace</a>
<a href="../sku-2026-dashboard/SkuDashboard.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:10px 14px">Dashboard</a>
<a href="PentadbirSku.dc.html" style="text-decoration:none;background:var(--color-blue-violet);color:#fff;font-weight:700;font-size:15px;padding:10px 24px;border-radius:999px">Pentadbir</a>
</div>
</sc-if>
<sc-if value="{{ showMobileMenu }}" hint-placeholder-val="{{ false }}">
<div style="width:100%;display:flex;flex-direction:column;gap:4px;padding-top:12px;border-top:1px solid var(--border-default)">
<a href="../../HomepageInfographic.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:8px 0">Utama</a>
<a href="../rujukan-sku/RujukanLive.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:8px 0">Rujukan</a>
<a href="../workspace-sub-sku/Workspace.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:8px 0">Workspace</a>
<a href="../sku-2026-dashboard/SkuDashboard.dc.html" style="text-decoration:none;color:var(--color-navy);font-weight:600;font-size:15px;padding:8px 0">Dashboard</a>
<a href="PentadbirSku.dc.html" style="text-decoration:none;color:var(--color-blue-violet);font-weight:700;font-size:15px;padding:8px 0">Pentadbir</a>
</div>
</sc-if>
</div>

<div style="background:var(--color-blue-violet);padding:44px 32px;border-radius:0 0 var(--radius-lg) var(--radius-lg)">
<div style="font-family:var(--font-display);font-weight:800;font-size:clamp(26px,3vw,36px);color:#fff">Pentadbir SKU 2026</div>
<p style="max-width:640px;color:#fff;opacity:.92;font-size:15px;line-height:1.6;margin-top:12px">Senarai Pentadbir HRMIS Sub Modul Sasaran Kerja Utama (Sub SKU) Jabatan bagi tahun 2026, berkuat kuasa 15 Julai 2026 sehingga arahan baharu.</p>
<p style="max-width:640px;color:#fff;opacity:.75;font-size:13px;line-height:1.5;margin-top:10px">Ruj. Kami: PPD.005/55 JLD 2 (75) · Bertarikh 07 Julai 2026 · Diluluskan oleh Haji Wan Zulkifly Bin Wan Zakaria, Pengarah Politeknik Port Dickson</p>
</div>

<div style="padding:32px 32px 8px">
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">
<input type="text" placeholder="Cari nama, jabatan, atau emel..." value="{{ search }}" onChange="{{ onSearch }}" style="flex:2;min-width:220px;padding:12px 16px;border-radius:var(--radius-md);border:1.5px solid var(--border-default);font-size:14px;font-family:var(--font-body)">
<select value="{{ jabatan }}" onChange="{{ onJabatan }}" style="flex:1;min-width:160px;padding:12px 16px;border-radius:var(--radius-md);border:1.5px solid var(--border-default);font-size:14px;font-family:var(--font-body)">
<sc-for list="{{ jabatanOptions }}" as="j" hint-placeholder-count="20"><option value="{{ j }}">{{ j }}</option></sc-for>
</select>
</div>
<div style="font-size:13px;color:var(--text-muted);margin-bottom:16px">Memaparkan <strong style="color:var(--color-navy)">{{ count }}</strong> daripada {{ total }} pentadbir</div>

<sc-if value="{{ isLoading }}" hint-placeholder-val="{{ false }}">
<div style="padding:40px 0;color:var(--text-muted);font-size:14px">Memuatkan senarai pentadbir...</div>
</sc-if>

<sc-if value="{{ isError }}" hint-placeholder-val="{{ false }}">
<div style="margin-bottom:32px;background:#FDECEC;border:1px solid #F5C2C2;border-radius:16px;padding:20px;color:#8A2E2E;font-size:14px">Gagal memuatkan senarai pentadbir. Sila cuba muat semula halaman.</div>
</sc-if>

<sc-if value="{{ hasData }}" hint-placeholder-val="{{ false }}">
<div style="border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;margin-bottom:48px">
<div style="display:grid;grid-template-columns:0.6fr 2fr 1fr 2fr 1.4fr;gap:0;background:#F1F0FC;padding:10px 16px;font-size:12px;font-weight:700;color:var(--color-navy);text-transform:uppercase;letter-spacing:.03em">
<div>Bil</div><div>Nama</div><div>Jabatan</div><div>Emel</div><div>Tindakan</div>
</div>
<sc-for list="{{ filtered }}" as="p" hint-placeholder-count="10">
<div style="display:grid;grid-template-columns:0.6fr 2fr 1fr 2fr 1.4fr;gap:0;padding:12px 16px;font-size:13px;border-top:1px solid var(--border-default);background:{{ p.rowBg }};align-items:center">
<div style="color:var(--text-muted)">{{ p.bil }}</div>
<div style="font-weight:600">{{ p.nama }}</div>
<div><x-import component-from-global-scope="SKUPPDDesignSystrem_48354e.Badge" tone="blue" hint-size="70,22">{{ p.jabatan }}</x-import></div>
<div><a href="mailto:{{ p.email }}" style="color:var(--color-blue-violet);text-decoration:none">{{ p.email }}</a></div>
<div><a href="{{ p.actionHref }}" target="{{ p.actionTarget }}" rel="noopener" style="color:var(--color-blue-violet);text-decoration:none;font-weight:600;font-size:12px">Lihat SUB-SKU →</a></div>
</div>
</sc-for>
<sc-if value="{{ isEmpty }}" hint-placeholder-val="{{ false }}">
<div style="padding:32px;text-align:center;color:var(--text-muted);font-size:14px">Tiada pentadbir sepadan dengan carian/tapisan ini.</div>
</sc-if>
</div>
</sc-if>
</div>

<div style="border-top:1px solid var(--border-default);padding:24px 32px;display:flex;flex-direction:column;gap:10px">
<div style="font-size:13px;color:var(--text-muted)">Sumber: Surat Pelantikan Pentadbir HRMIS Sub Modul SKU Jabatan Tahun 2026 · S.K. Ketua Unit Pengurusan Strategik</div>
<div style="font-size:13px;color:var(--text-muted)">© 2026 Politeknik Port Dickson. Hak Cipta Terpelihara.</div>
<div style="font-size:11px;color:var(--text-muted);opacity:.8">Dibangunkan oleh Julie Marlina binti Hasan, Sekretariat Data &amp; Maklumat, Jawatankuasa Pengurusan Strategik Politeknik Port Dickson.</div>
</div>
</div>

</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1000,&quot;height&quot;:900}}">
const API_URL = 'https://script.google.com/macros/s/AKfycbwZ_fBBMI1bavMM4Nhfc5Sea_yO_GH-tleFNCW7kYx31ZlsiIuMgFLDdD-_lLOkakmv/exec';

class Component extends DCLogic {
  state = { search: '', jabatan: 'ALL', navOpen: false, isMobile: false, admins: null, loadFailed: false };
  componentDidMount() {
    this.updateIsMobile = () => this.setState({ isMobile: window.innerWidth < 860 });
    this.updateIsMobile();
    window.addEventListener('resize', this.updateIsMobile);
    fetch(API_URL + '?action=getAdministrators')
      .then(res => res.json())
      .then(json => {
        if (json && json.success) this.setState({ admins: json.data });
        else throw new Error('API returned failure: ' + JSON.stringify(json));
      })
      .catch(err => {
        console.error('getAdministrators failed:', err);
        this.setState({ loadFailed: true });
      });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  }
  renderVals() {
    const { search, jabatan, navOpen, isMobile, admins, loadFailed } = this.state;
    const isLoading = admins === null && !loadFailed;
    const isError = loadFailed;
    const hasData = !isLoading && !isError;
    const list = admins || [];

    const q = search.trim().toLowerCase();
    const filtered = list.filter(p => {
      if (jabatan !== 'ALL' && p.jabatan !== jabatan) return false;
      if (q && !(`${p.nama} ${p.jabatan} ${p.email}`.toLowerCase().includes(q))) return false;
      return true;
    }).map((p, i) => {
      const hasLink = p.subSkuLink && /^https?:\/\//.test(p.subSkuLink);
      return {
        ...p,
        rowBg: i % 2 === 0 ? '#fff' : '#FAFAFE',
        actionHref: hasLink ? p.subSkuLink : ('../sku-2026-dashboard/SkuDashboard.dc.html?jabatan=' + encodeURIComponent(p.jabatan)),
        actionTarget: hasLink ? '_blank' : '_self',
      };
    });
    const jabatanOptions = ['ALL', ...new Set(list.map(p => p.jabatan))];
    return {
      isMobile, isDesktop: !isMobile, showMobileMenu: isMobile && navOpen,
      toggleNav: () => this.setState(s => ({ navOpen: !s.navOpen })),
      isLoading, isError, hasData,
      filtered, count: filtered.length, total: list.length, isEmpty: hasData && filtered.length === 0,
      search, jabatan, jabatanOptions,
      onSearch: e => this.setState({ search: e.target.value }),
      onJabatan: e => this.setState({ jabatan: e.target.value }),
    };
  }
}

</script>
</body>
</html>
