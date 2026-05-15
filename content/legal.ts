// Static legal content. Kept out of messages JSON to avoid bloating client bundles.

import type { LucideIcon } from "lucide-react";
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
  Database,
  Cpu,
  Cloud,
  Scale,
  Trash2,
  Cookie,
  Lock,
} from "lucide-react";

export type LegalSection = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export type LegalCopy = {
  pageTitle: string;
  pageDescription: string;
  lastUpdated: string;
  intro: string;
  headerIcon: LucideIcon;
  backLabel: string;
  questionsLabel: string;
  sections: LegalSection[];
};

// ─────────────────────────────────────────────────────────
// TERMS
// ─────────────────────────────────────────────────────────

export const termsTr: LegalCopy = {
  pageTitle: "Kullanım Şartları",
  pageDescription:
    "DocuVault kullanım şartları — hizmetin tanımı, abonelik koşulları, kullanıcı sorumlulukları ve yasal bilgiler.",
  lastUpdated: "Son güncelleme: 14 Mayıs 2026",
  intro:
    "DocuVault'u kullanarak aşağıdaki şartları kabul etmiş olursunuz. Lütfen dikkatlice okuyunuz.",
  headerIcon: FileText,
  backLabel: "Ana Sayfa",
  questionsLabel: "Sorularınız için",
  sections: [
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
        "Yetkisiz erişim şüphesinde derhal şifrenizi değiştirin ve bizimle iletişime geçin.",
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
  ],
};

export const termsEn: LegalCopy = {
  pageTitle: "Terms of Use",
  pageDescription:
    "DocuVault terms of use — service description, subscription terms, user responsibilities and legal notices.",
  lastUpdated: "Last updated: May 14, 2026",
  intro:
    "By using DocuVault you agree to the terms below. Please read carefully.",
  headerIcon: FileText,
  backLabel: "Home",
  questionsLabel: "Questions?",
  sections: [
    {
      icon: Info,
      title: "Service Description",
      items: [
        "DocuVault is a mobile app designed to securely store and search your personal documents (bills, IDs, contracts, etc.).",
        'The service includes a free plan and a paid subscription plan named "Gold".',
      ],
    },
    {
      icon: ShieldCheck,
      title: "Account & Security",
      items: [
        "You are responsible for providing accurate and current information when creating an account.",
        "You alone are responsible for the security of your account (password, PIN, biometric).",
        "If you suspect unauthorized access, change your password immediately and contact us.",
      ],
    },
    {
      icon: CreditCard,
      title: "Subscription & Auto-Renewal",
      items: [
        "Gold subscription fees are charged to your Apple ID account upon purchase confirmation.",
        "Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.",
        "Renewal is charged within 24 hours before the end of the current period.",
        "You can manage or cancel your subscription anytime via Settings > Apple ID > Subscriptions on your iPhone.",
        "Any unused portion of a free trial period (if offered) is forfeited when a subscription is purchased.",
        "When a promotional trial period ends, the paid subscription begins automatically unless cancelled.",
      ],
    },
    {
      icon: FileText,
      title: "Content & User Responsibility",
      items: [
        "You represent that you legally own or are authorized to upload all documents you submit.",
        "Illegal content, documents belonging to others, or malicious files may not be uploaded.",
        "You are fully responsible for the legal compliance of your content.",
      ],
    },
    {
      icon: Ban,
      title: "Prohibited Use",
      items: [
        "Reverse-engineering, cloning, or distributing malware via the service is prohibited.",
        "Creating accounts or excessively using the service via automated tools (bots, scrapers) is prohibited.",
        "Attempting unauthorized access to other users' accounts is prohibited.",
      ],
    },
    {
      icon: CloudOff,
      title: "Service Interruptions",
      items: [
        "We do not guarantee 100% uninterrupted service.",
        "Maintenance, updates, or unforeseen technical issues may cause temporary interruptions.",
        "We recommend keeping an additional backup of your important documents.",
      ],
    },
    {
      icon: UserX,
      title: "Account Termination",
      items: [
        "You may delete your account at any time from within the app.",
        "We reserve the right to suspend or close your account if you violate these terms.",
        "After deletion, removal of your data may take up to 30 days.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      items: [
        "DocuVault is not liable for indirect damages arising from use of the service.",
        "Total liability is limited to the last monthly subscription fee paid.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Changes to the Terms",
      items: [
        "These terms may be updated from time to time.",
        "Significant changes will be announced via in-app notification and/or email.",
        "Continuing to use the service after an update constitutes acceptance of the new terms.",
      ],
    },
    {
      icon: Building2,
      title: "Governing Law",
      items: [
        "This agreement is governed by the laws of the Republic of Türkiye.",
        "Disputes shall be resolved before the courts and enforcement offices of Istanbul.",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// PRIVACY
// ─────────────────────────────────────────────────────────

export const privacyTr: LegalCopy = {
  pageTitle: "Gizlilik Politikası",
  pageDescription:
    "DocuVault gizlilik politikası — toplanan veriler, kullanım amaçları, AI servisleri, KVKK/GDPR hakları ve veri silme süreçleri.",
  lastUpdated: "Son güncelleme: 14 Mayıs 2026",
  intro:
    "DocuVault, belge yönetimi gibi son derece hassas bir kategoride faaliyet gösterir. Mahremiyet, ürünün eklenen değil; çekirdeğinde olan bir prensiptir.",
  headerIcon: ShieldCheck,
  backLabel: "Ana Sayfa",
  questionsLabel: "Sorularınız için",
  sections: [
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
        "Yedeklenen belgeler, sektör lideri bulut altyapısı (Supabase) üzerinde şifrelenmiş olarak saklanır.",
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
        "Bu hakları kullanmak için destek@appdocuvault.com adresinden bize ulaşın.",
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
  ],
};

export const privacyEn: LegalCopy = {
  pageTitle: "Privacy Policy",
  pageDescription:
    "DocuVault privacy policy — collected data, usage, AI services, GDPR/KVKK rights and data deletion.",
  lastUpdated: "Last updated: May 14, 2026",
  intro:
    "DocuVault operates in a highly sensitive category — document management. Privacy is not bolted on; it is at the core of the product.",
  headerIcon: ShieldCheck,
  backLabel: "Home",
  questionsLabel: "Questions?",
  sections: [
    {
      icon: Database,
      title: "Data We Collect",
      items: [
        "Email address (for registration and authentication).",
        "Uploaded documents and files (yours alone — we have no plaintext access).",
        "Anonymous app usage statistics (session duration, screen views).",
        "Device information (iOS version, device model, app version) — for troubleshooting.",
      ],
    },
    {
      icon: Info,
      title: "How We Use Data",
      items: [
        "Account creation and Sign in with Apple / email authentication.",
        "Storing and syncing your documents in your encrypted vault.",
        "Making content searchable via OCR (optical character recognition).",
        "Providing AI Executive Summary and natural-language search.",
        "Improving app performance and providing technical support.",
      ],
    },
    {
      icon: Cpu,
      title: "AI Services",
      items: [
        "For AI Executive Summary and natural-language search, a small portion of document content is sent to the AI service during processing.",
        "Data is transmitted via an encrypted channel.",
        "No persistent record is kept on the AI service after processing.",
        "DocuVault does not use, sell, or permit the sale of your document content for model training or any other data product.",
      ],
    },
    {
      icon: Cloud,
      title: "Data Storage & Residency",
      items: [
        "Backed-up documents are stored encrypted on industry-leading cloud infrastructure (Supabase).",
        "Data residency is maintained at EU-based endpoints.",
        "All data traffic is performed over TLS 1.2+.",
        "Documents in the local archive are stored on your device with AES-256 symmetric encryption.",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      items: [
        "End-to-end encrypted transport and encrypted storage.",
        "Face ID / Touch ID biometric protection and backup PIN.",
        "Automatic lock when the app moves to the background.",
        "The DocuVault team has no plaintext access to your document content.",
      ],
    },
    {
      icon: Ban,
      title: "Advertising & Tracking",
      items: [
        "We do not build an ad network or use third-party advertising SDKs.",
        "Under Apple's App Tracking Transparency framework, we request no identifiers (IDFA).",
        "We do not share content-level data with third-party marketing companies.",
        "Our analytics tools collect only anonymous, aggregate metrics.",
      ],
    },
    {
      icon: Scale,
      title: "Your GDPR & KVKK Rights",
      items: [
        "Request information about how your data is processed.",
        "Request correction or update of your data.",
        "Request deletion of your data.",
        "Object to processing or restrict processing activities.",
        "To exercise these rights, contact us at destek@appdocuvault.com.",
      ],
    },
    {
      icon: Trash2,
      title: "Data Deletion",
      items: [
        "You can delete your account anytime from Profile → Delete Account in the app.",
        "When your account is deleted, documents are removed from both your device and the cloud simultaneously.",
        "Completion of deletion across all backup layers may take up to 30 days.",
        "We confirm completion via email.",
      ],
    },
    {
      icon: Cookie,
      title: "Cookies & Local Storage",
      items: [
        "The mobile app does not use cookies.",
        "Only local device storage is used for session state.",
        "Our website may use basic analytics cookies for service quality.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Policy Changes",
      items: [
        "This policy may be updated from time to time.",
        "Significant changes will be announced via in-app notification and/or email.",
        "Continuing to use the service after an update constitutes acceptance of the new policy.",
      ],
    },
  ],
};

export function getTerms(locale: string): LegalCopy {
  return locale === "en" ? termsEn : termsTr;
}

export function getPrivacy(locale: string): LegalCopy {
  return locale === "en" ? privacyEn : privacyTr;
}

// ─────────────────────────────────────────────────────────
// KVKK AYDINLATMA METNİ (TR-only — Turkey-specific legal)
// ─────────────────────────────────────────────────────────

export const kvkkTr: LegalCopy = {
  pageTitle: "KVKK Aydınlatma Metni",
  pageDescription:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında DocuVault aydınlatma metni — veri sorumlusu, işleme amaçları, veri sahibi hakları ve başvuru yöntemleri.",
  lastUpdated: "Son güncelleme: 14 Mayıs 2026",
  intro:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") Madde 10 uyarınca, kişisel verilerinizin işlenmesine ilişkin bu aydınlatma metnini bilgilerinize sunarız.",
  headerIcon: Scale,
  backLabel: "Ana Sayfa",
  questionsLabel: "Veri sahibi başvuruları için",
  sections: [
    {
      icon: Building2,
      title: "Veri Sorumlusunun Kimliği",
      items: [
        "Veri sorumlusu: DocuVault",
        "İletişim adresi: destek@appdocuvault.com",
        "Web sitesi: https://www.appdocuvault.com",
        "Hizmet türü: Mobil belge yönetim uygulaması (iOS)",
      ],
    },
    {
      icon: Database,
      title: "İşlenen Kişisel Veriler",
      items: [
        "Kimlik Verileri: Apple ile Giriş veya e-posta kayıt sırasında verdiğiniz ad, e-posta adresi.",
        "İletişim Verileri: Destek talepleri kapsamında ilettiğiniz e-posta içerikleri.",
        "İşlem Güvenliği Verileri: Cihaz bilgileri (iOS sürümü, cihaz modeli, uygulama sürümü), oturum durumu, hata kayıtları.",
        "Müşteri İşlem Verileri: Abonelik durumu, plan tercihleri (Apple ID üzerinden yönetilir).",
        "İçerik Verileri: Uygulamaya yüklediğiniz belgeler — yalnızca size aittir; içeriklerine düz metin olarak erişimimiz yoktur.",
        "Anonim Kullanım Verileri: Oturum süresi, ekran görüntülenme sayısı (kişiyle ilişkilendirilemez).",
      ],
    },
    {
      icon: Info,
      title: "Kişisel Verilerin İşlenme Amaçları",
      items: [
        "Hizmetin sunulması: Hesap oluşturma, kimlik doğrulama, belgelerin saklanması ve senkronizasyonu.",
        "Hizmet kalitesinin iyileştirilmesi: Anonim kullanım istatistikleriyle ürün geliştirme.",
        "Teknik destek sağlanması: Sorularınıza ve hata bildirimlerinize geri dönüş.",
        "Yasal yükümlülüklerin yerine getirilmesi: Yetkili kurumların talepleri durumunda mevzuata uygun cevap verilmesi.",
        "Hizmet güvenliğinin sağlanması: Sahtekârlık ve kötüye kullanım tespiti, hesap güvenliği.",
      ],
    },
    {
      icon: Scale,
      title: "İşlemenin Hukuki Sebepleri",
      items: [
        "Bir sözleşmenin kurulması veya ifası (KVKK Madde 5/2-c): Hizmetin sağlanması için zorunlu işleme.",
        "Veri sorumlusunun meşru menfaati (KVKK Madde 5/2-f): Anonim kullanım analitiği, güvenlik kontrolleri.",
        "Açık rıza (KVKK Madde 5/1): Web sitesinde isteğe bağlı analitik çerezler için.",
        "Yasal yükümlülük (KVKK Madde 5/2-ç): Yetkili makamların talepleri.",
      ],
    },
    {
      icon: Cpu,
      title: "Yapay Zekâ Servisleri ve Veri Aktarımı",
      items: [
        "AI Yönetici Özeti ve doğal dil arama özellikleri için belge içeriğinin küçük bir parçası, işlem süresince üçüncü taraf yapay zekâ servislerine şifrelenmiş kanaldan iletilir.",
        "İşlem tamamlandıktan sonra AI servislerinde kalıcı bir kayıt tutulmaz.",
        "İçerikleriniz model eğitimi veya başka bir veri ürünü için kullanılmaz, satılmaz, satılmasına izin verilmez.",
        "Aktarım, KVKK Madde 9 çerçevesinde gerçekleştirilir; veri ikamet politikası AB tabanlı uçlarda tutulmaktadır.",
      ],
    },
    {
      icon: Cloud,
      title: "Kişisel Verilerin Aktarıldığı Taraflar",
      items: [
        "Bulut altyapı sağlayıcısı (Supabase): Şifreli yedeklerin saklanması amacıyla, AB tabanlı uçlarda.",
        "Yapay zekâ servis sağlayıcıları: Yalnızca özetleme/arama işlemi süresince, kalıcı kayıt tutulmaksızın.",
        "Apple Inc.: Apple ile Giriş, App Store ödeme ve abonelik yönetimi için.",
        "Yetkili kamu kurumları: Yasal zorunluluk veya yargı kararı bulunması hâlinde, ilgili mevzuat çerçevesinde.",
      ],
    },
    {
      icon: FileText,
      title: "Kişisel Verilerin Toplanma Yöntemi",
      items: [
        "Doğrudan sizden alınan: Hesap oluşturma sırasında manuel olarak girdiğiniz bilgiler.",
        "Otomatik yöntemlerle: Uygulama içi oturum bilgileri, cihaz bilgileri (otomatik olarak).",
        "Apple aracılığıyla: Apple ile Giriş kullanılırsa Apple'ın paylaştığı temel kimlik bilgileri.",
      ],
    },
    {
      icon: Lock,
      title: "Veri Güvenliği Tedbirleri",
      items: [
        "Yerel arşivde AES-256 simetrik şifreleme.",
        "Bulut iletişiminde TLS 1.2+ üzerinden şifreli aktarım.",
        "Face ID / Touch ID biyometrik koruma ve yedek PIN.",
        "Uygulama arka plana alındığında otomatik kilit.",
        "Düzenli güvenlik denetimleri ve güncellemeler.",
        "DocuVault ekibinin belge içeriklerinize düz metin erişimi yoktur.",
      ],
    },
    {
      icon: Scale,
      title: "Veri Sahibi Olarak Haklarınız (KVKK Madde 11)",
      items: [
        "Kişisel verilerinizin işlenip işlenmediğini öğrenme.",
        "İşlenmişse buna ilişkin bilgi talep etme.",
        "İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.",
        "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.",
        "Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme.",
        "Silinmesini veya yok edilmesini isteme.",
        "Düzeltme, silme veya yok edilme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme.",
        "Otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.",
        "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Başvuru Yöntemi",
      items: [
        "Yukarıdaki haklarınızı kullanmak için, kimliğinizi tevsik edici belgelerle birlikte destek@appdocuvault.com adresine yazılı olarak başvurabilirsiniz.",
        "Başvurunuzda; ad-soyad, T.C. kimlik numarası (yabancı uyruklular için pasaport numarası), iletişim adresi, talep konusu ve hakkınızla ilgili açıklamaların bulunması gerekmektedir.",
        "Talebiniz, niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır.",
        "Başvurunuza ilişkin Kişisel Verileri Koruma Kurulu'na şikâyette bulunma hakkınız saklıdır.",
      ],
    },
    {
      icon: Trash2,
      title: "Veri Saklama Süresi",
      items: [
        "Aktif hesaplarda: Hizmet kullanımı devam ettiği sürece.",
        "Hesap silindiğinde: 30 gün içinde tüm yedek katmanlardan kaldırılır.",
        "Mevzuat gereği saklanması zorunlu kayıtlar: İlgili mevzuatın öngördüğü süre boyunca (ör. abonelik faturalandırma kayıtları).",
        "Anonim kullanım istatistikleri: Süresiz, ancak kişiyle ilişkilendirilemez biçimde.",
      ],
    },
  ],
};

export function getKvkk(): LegalCopy {
  return kvkkTr;
}
