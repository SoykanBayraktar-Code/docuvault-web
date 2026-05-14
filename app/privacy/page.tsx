import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  Cpu,
  Cloud,
  Scale,
  Ban,
  Trash2,
  Cookie,
  Mail,
  Info,
  ChevronLeft,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "DocuVault gizlilik politikası — toplanan veriler, kullanım amaçları, AI servisleri, KVKK/GDPR hakları ve veri silme süreçleri.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    icon: Database,
    title: "Toplanan Veriler",
    items: [
      "E-posta adresi (kayıt ve kimlik doğrulama için).",
      "Yüklenen belgeler ve dosyalar (yalnızca size aittir; içeriklerine düz metin olarak erişimimiz yoktur).",
      "Anonim uygulama kullanım istatistikleri (oturum süresi, ekran görüntülenme).",
      "Cihaz bilgileri (iOS sürümü, cihaz modeli, uygulama sürümü) — sorun giderme amaçlı.",
    ],
  },
  {
    icon: Info,
    title: "Verilerin Kullanımı",
    items: [
      "Hesap oluşturma ve Apple ile Giriş / e-posta kimlik doğrulaması.",
      "Belgelerinizi şifreli kasanızda saklama ve senkronize etme.",
      "OCR (optik karakter tanıma) ile içeriği aranabilir hâle getirme.",
      "AI Yönetici Özeti ve doğal dil arama hizmetlerini sağlama.",
      "Uygulama performansını iyileştirme ve teknik destek sunma.",
    ],
  },
  {
    icon: Cpu,
    title: "Yapay Zekâ Servisleri",
    items: [
      "AI Yönetici Özeti ve doğal dil arama için belge içeriğinin küçük bir parçası, işlem süresince yapay zekâ servisine gönderilir.",
      "Bu gönderim sırasında veriler şifreli kanaldan iletilir.",
      "İşlem tamamlandıktan sonra AI servisinde kalıcı bir kayıt tutulmaz.",
      "DocuVault, belge içeriklerinizi model eğitimi veya başka bir veri ürünü için kullanmaz, satmaz, satılmasına izin vermez.",
    ],
  },
  {
    icon: Cloud,
    title: "Veri Saklama ve İkamet",
    items: [
      "Yedeklenen belgeler, sektör lideri bulut altyapısı (Supabase + AWS) üzerinde şifrelenmiş olarak saklanır.",
      "Veri ikamet politikası AB tabanlı uçlarda tutulmaktadır.",
      "Tüm veri trafiği TLS 1.2+ üzerinden gerçekleştirilir.",
      "Yerel arşivdeki belgeler cihazınızda AES-256 simetrik şifreleme ile saklanır.",
    ],
  },
  {
    icon: Lock,
    title: "Veri Güvenliği",
    items: [
      "Uçtan uca şifreli aktarım ve şifreli depolama.",
      "Face ID / Touch ID biyometrik koruma ve yedek PIN.",
      "Uygulama arka plana alındığında otomatik kilit.",
      "DocuVault ekibinin belgelerinizin içeriğine düz metin olarak erişimi yoktur.",
    ],
  },
  {
    icon: Ban,
    title: "Reklam ve İzleme",
    items: [
      "Reklam ağı kurmuyor, üçüncü taraf reklam SDK'ları kullanmıyoruz.",
      "Apple'ın \"İzleme Şeffaflığı\" çerçevesi kapsamında hiçbir tanımlayıcı (IDFA) talep etmiyoruz.",
      "Üçüncü taraf pazarlama firmalarıyla içerik düzeyinde veri paylaşmıyoruz.",
      "Analitik araçlarımız yalnızca anonim ve birleşik metrikler toplar.",
    ],
  },
  {
    icon: Scale,
    title: "KVKK ve GDPR Haklarınız",
    items: [
      "Verilerinizin işlenmesi hakkında bilgi talep etme.",
      "Verilerinizin düzeltilmesini veya güncellenmesini isteme.",
      "Verilerinizin silinmesini isteme.",
      "Veri işlemeye itiraz etme veya işleme faaliyetlerini kısıtlama.",
      "Bu hakları kullanmak için support@appdocuvault.com adresinden bize ulaşın.",
    ],
  },
  {
    icon: Trash2,
    title: "Veri Silme",
    items: [
      "Hesabınızı uygulamadan Profil → Hesabı Sil seçeneğiyle istediğiniz zaman silebilirsiniz.",
      "Hesap silindiğinde belgeleriniz hem cihazınızdan hem de buluttan eş zamanlı kaldırılır.",
      "Silme işleminin tüm yedek katmanlardan tamamlanması 30 günü bulabilir.",
      "Silme onayını e-posta ile size iletiriz.",
    ],
  },
  {
    icon: Cookie,
    title: "Çerezler ve Yerel Depolama",
    items: [
      "Mobil uygulama çerez kullanmamaktadır.",
      "Yalnızca oturum durumu için yerel cihaz depolama kullanılır.",
      "Web sitemiz, hizmet kalitesi için temel düzeyde analitik çerezler kullanabilir.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Politika Değişiklikleri",
    items: [
      "Bu politika zaman zaman güncellenebilir.",
      "Önemli değişiklikler uygulama içi bildirim ve/veya e-posta ile duyurulur.",
      "Güncellemeden sonra hizmeti kullanmaya devam etmeniz, yeni politikayı kabul ettiğiniz anlamına gelir.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-muted mb-5">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Gizlilik Politikası
          </h1>
          <p className="mt-2 text-sm text-text-tertiary">
            Son güncelleme: 14 Mayıs 2026
          </p>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            DocuVault, belge yönetimi gibi son derece hassas bir kategoride
            faaliyet gösterir. Mahremiyet, ürünün eklenen değil; çekirdeğinde
            olan bir prensiptir.
          </p>
        </div>

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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-text-secondary">Sorularınız için</p>
          <a
            href="mailto:support@appdocuvault.com"
            className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <Mail className="w-4 h-4" />
            support@appdocuvault.com
          </a>
        </div>
      </main>
    </div>
  );
}
