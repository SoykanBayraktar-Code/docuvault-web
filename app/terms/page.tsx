import type { Metadata } from "next";
import Link from "next/link";
import {
  Info,
  ShieldCheck,
  CreditCard,
  FileText,
  Ban,
  CloudOff,
  UserX,
  AlertTriangle,
  RefreshCw,
  Building2,
  ChevronLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "DocuVault kullanım şartları — hizmetin tanımı, abonelik koşulları, kullanıcı sorumlulukları ve yasal bilgiler.",
};

const sections = [
  {
    icon: Info,
    title: "Hizmetin Tanımı",
    items: [
      "DocuVault, kişisel belgelerinizi (faturalar, kimlik, sözleşmeler vb.) güvenli şekilde saklamak ve aramak için tasarlanmış bir mobil uygulamadır.",
      'Hizmet, ücretsiz bir plan ve "Gold" adıyla isimlendirilmiş ücretli bir abonelik planı içerir.',
    ],
  },
  {
    icon: ShieldCheck,
    title: "Hesap ve Güvenlik",
    items: [
      "Hesap oluştururken doğru ve güncel bilgi vermekle yükümlüsünüz.",
      "Hesabınızın güvenliğinden (şifre, PIN, biyometrik) yalnızca siz sorumlusunuz.",
      "Yetkisiz erişim şüphesinide derhal şifrenizi değiştirin ve bizimle iletişime geçin.",
    ],
  },
  {
    icon: CreditCard,
    title: "Abonelik ve Otomatik Yenileme",
    items: [
      "Gold abonelik ücreti, aboneliğin başladığı anda Apple ID hesabınızdan tahsil edilir.",
      "Abonelik, mevcut dönem bitmeden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir.",
      "Yenileme ücreti, mevcut dönemin bitiminden 24 saat önce alınır.",
      "Aboneliğinizi iPhone'unuzun Ayarlar > Apple ID > Abonelikler menüsünden istediğiniz zaman yönetebilir veya iptal edebilirsiniz.",
      "Mevcut bir aboneliğin kullanılmamış kısmı, kullanıcı bir abonelik satın aldıktan sonra geçerli olduğunda kaybedilir.",
      "Tanıtım deneme süresi (varsa) bittiğinde, iptal edilmedikçe ücretli aboneliğe otomatik olarak geçilir.",
    ],
  },
  {
    icon: FileText,
    title: "İçerik ve Kullanıcı Sorumluluğu",
    items: [
      "Yüklediğiniz tüm belgelerin yasal olarak size ait olduğunu veya yükleme yetkisine sahip olduğunuzu beyan edersiniz.",
      "Yasadışı içerik, başkasına ait belgeler veya zararlı dosyalar yüklenemez.",
      "İçeriğinizin yasalara uygunluğundan tamamen siz sorumlusunuz.",
    ],
  },
  {
    icon: Ban,
    title: "Yasak Kullanımlar",
    items: [
      "Hizmeti tersine mühendislik yapmak, klonlamak veya kötü amaçlı yazılım dağıtmak yasaktır.",
      "Otomatik araçlarla (bot, scraper) hesap oluşturmak veya hizmeti aşırı kullanmak yasaktır.",
      "Başka kullanıcıların hesaplarına izinsiz erişim girişimi yasaktır.",
    ],
  },
  {
    icon: CloudOff,
    title: "Hizmetin Kesintiye Uğraması",
    items: [
      "Hizmetin %100 kesintisiz çalışacağını garanti etmiyoruz.",
      "Bakım, güncelleme veya öngörülemeyen teknik sorunlar nedeniyle geçici kesintiler olabilir.",
      "Veri kaybına karşı önemli belgelerinizin ek bir yedeğini bulundurmanızı tavsiye ederiz.",
    ],
  },
  {
    icon: UserX,
    title: "Hesap Sonlandırma",
    items: [
      "Hesabınızı dilediğiniz zaman uygulama içinden silebilirsiniz.",
      "Bu şartları ihlal etmeniz durumunda hesabınızı askıya alma veya kapatma hakkımız saklıdır.",
      "Hesap silindikten sonra verilerinizin silinmesi 30 günü bulabilir.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Sorumluluk Sınırı",
    items: [
      "DocuVault, hizmetin kullanımından doğan dolaylı zararlardan sorumlu tutulamaz.",
      "Toplam sorumluluk, ödenen son aylık abonelik ücretiyle sınırlıdır.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Şartların Değişmesi",
    items: [
      "Bu şartlar zaman zaman güncellenebilir.",
      "Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulur.",
      "Güncellemeden sonra hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.",
    ],
  },
  {
    icon: Building2,
    title: "Uygulanacak Hukuk",
    items: [
      "Bu sözleşme Türkiye Cumhuriyeti yasalarına tabidir.",
      "Anlaşmazlıklar İstanbul Mahkemeleri ve İcra Daireleri'nde çözülür.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border-warm">
        <div className="mx-auto max-w-3xl px-5 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Ana Sayfa
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-12 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-muted mb-5">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Kullanım Şartları
          </h1>
          <p className="mt-2 text-sm text-text-tertiary">
            Son güncelleme: Nisan 2026
          </p>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            DocuVault&rsquo;u kullanarak aşağıdaki şartları kabul etmiş
            olursunuz. Lütfen dikkatlice okuyunuz.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-surface rounded-2xl p-6 ring-1 ring-border-warm shadow-warm-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-primary-muted flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-base font-semibold text-text-primary">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[15px] text-text-secondary leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(
                              /Gold abonelik/g,
                              "<strong>Gold abonelik</strong>"
                            )
                            .replace(
                              /mevcut dönem bitmeden en az 24 saat önce iptal edilmediği/g,
                              "<strong>mevcut dönem bitmeden en az 24 saat önce iptal edilmediği</strong>"
                            )
                            .replace(
                              /Ayarlar > Apple ID > Abonelikler/g,
                              "<strong>Ayarlar &gt; Apple ID &gt; Abonelikler</strong>"
                            ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer contact */}
        <div className="mt-10 text-center">
          <p className="text-sm text-text-secondary">Sorularınız için</p>
          <a
            href="mailto:destek@appdocuvault.com"
            className="mt-1 inline-block text-base font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            destek@appdocuvault.com
          </a>
        </div>
      </main>
    </div>
  );
}
