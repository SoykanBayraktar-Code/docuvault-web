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
  History,
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
    "DocuVault gizlilik politikası — DocuVault 2.0'da hesap ve sunucu yoktur; belgeler cihazda işlenir ve yalnızca kullanıcının iCloud hesabında saklanır.",
  lastUpdated: "Son güncelleme: 21 Kasım 2026",
  intro:
    "DocuVault 2.0'da hesap yoktur ve DocuVault'un belgelerini tuttuğu bir sunucusu yoktur. Belgelerin cihazında işlenir ve yalnızca senin Apple iCloud hesabında saklanır. Bu sayfanın sonunda, eski sürümü (1.x) kullananlar için geçiş dönemi bilgileri yer alır.",
  headerIcon: ShieldCheck,
  backLabel: "Ana Sayfa",
  questionsLabel: "Sorularınız için",
  sections: [
    {
      icon: CloudOff,
      title: "Topladığımız Veriler (DocuVault 2.0)",
      items: [
        "DocuVault 2.0 senden ad, e-posta, telefon ya da şifre istemez; hesap açılmaz.",
        "Belgelerini, okunan metinlerini, özetlerini, Acil Durum Kartını ve imzanı göremeyiz; bunlar bize hiç gönderilmez.",
        "Uygulamada analitik, reklam veya çökme raporu yazılımı (SDK) yoktur; kullanım istatistiği toplamayız.",
        "Tek istisna 1.x'ten taşımadır (aşağıda \"Eski sürümden geçiş\" bölümü).",
        "iPhone'unda \"Uygulama geliştiricileriyle paylaş\" ayarı açıksa Apple, kimliğini içermeyen çökme ve performans raporlarını bize iletebilir. Bu ayarı Ayarlar → Gizlilik ve Güvenlik → Analiz ve İyileştirmeler'den yönetebilirsin.",
      ],
    },
    {
      icon: Cloud,
      title: "Belgelerin Nerede Saklanır",
      items: [
        "Belgelerin, koleksiyonların ve belge setlerin senin iCloud hesabındaki özel CloudKit veritabanında saklanır ve aynı Apple hesabıyla giriş yaptığın cihazlarına eşitlenir.",
        "Bu veritabanına yalnızca sen erişebilirsin; DocuVault geliştiricisi içeriğini göremez.",
        "iCloud'a giriş yapılmamışsa belgeler yalnızca cihazında kalır.",
        "Depolama, şifreleme ve veri merkezleri Apple'ın iCloud koşullarına tabidir.",
      ],
    },
    {
      icon: Cpu,
      title: "Metin Tanıma ve Yapay Zekâ",
      items: [
        "Belgedeki yazı Apple'ın Vision çerçevesiyle cihazında okunur.",
        "Özet, öne çıkanlar, Belgeye Sor ve yapay zekâ ile belge seti, Apple'ın cihazdaki modeliyle (Apple Intelligence) çalışır.",
        "Belge içeriğin hiçbir yapay zekâ sunucusuna gönderilmez ve model eğitiminde kullanılmaz.",
      ],
    },
    {
      icon: Lock,
      title: "Paylaşım Linkleri ve Aile Kasası",
      items: [
        "Güvenli link oluşturduğunda belge cihazında şifrelenir (AES-GCM) ve yalnızca şifreli hâliyle Apple CloudKit'e yüklenir.",
        "Şifre çözme anahtarı yalnızca linkin içindedir (\"#\" işaretinden sonraki kısım) ve sunucuya gönderilmez; link.appdocuvault.com belgeyi tarayıcıda çözer. DocuVault içeriği okuyamaz.",
        "Linki iptal ettiğinde ya da süresi dolduğunda, uygulama şifreli kopyayı CloudKit'ten siler (süresi dolan linkler için uygulamanın bir sonraki açılışında).",
        "Aile Kasası'nda yalnızca senin seçtiğin belgeler, davet ettiğin kişilerle Apple'ın iCloud paylaşımı üzerinden paylaşılır. Paylaşımı istediğin zaman durdurabilirsin.",
      ],
    },
    {
      icon: Info,
      title: "Cihazında Kalan Bilgiler",
      items: [
        "Acil Durum Kartı iPhone'unda ve eşlenmiş Apple Watch'ında saklanır; DocuVault onu iCloud'a eşitlemez (iPhone'unun iCloud yedeği açıksa, cihaz yedeğinin bir parçası olarak şifreli biçimde yedeklenir).",
        "İmzan yalnızca bu cihazda saklanır, iCloud'a ve cihaz yedeklerine dahil edilmez.",
        "Hatırlatma bildirimleri cihazında planlanır; bildirim sunucusu kullanılmaz.",
        "Şifreli yedek dosyası senin belirlediğin parolayla cihazında şifrelenir ve senin seçtiğin yere kaydedilir; parolanı bilmeyiz ve kurtaramayız.",
      ],
    },
    {
      icon: CreditCard,
      title: "Abonelik",
      items: [
        "Plus satın alımları Apple tarafından işlenir; ödeme bilgilerine erişimimiz yoktur.",
        "Ücretsiz plan kullanım sayaçları (örneğin bu ay sorulan soru sayısı) iCloud anahtar-değer deposunda tutulur; belge içeriği içermez.",
      ],
    },
    {
      icon: Ban,
      title: "Reklam ve İzleme",
      items: [
        "Reklam göstermeyiz, reklam SDK'sı kullanmayız ve seni uygulamalar ya da web siteleri arasında izlemeyiz.",
        "Reklam kimliği (IDFA) talep etmeyiz; verilerini satmayız ve kimseyle paylaşmayız.",
      ],
    },
    {
      icon: Trash2,
      title: "Verilerini Silmek",
      items: [
        "Uygulamada sildiğin belge, iCloud üzerinden tüm cihazlarından da silinir ve o belgeyle oluşturduğun paylaşım linkleri iptal edilir.",
        "Tüm DocuVault verilerini silmek için: iPhone Ayarlar → [adın] → iCloud → Depolamayı Yönet → DocuVault → Verileri Sil.",
        "Uygulamayı silmek cihazdaki verileri kaldırır; iCloud'daki veriler yukarıdaki adımla silinir.",
      ],
    },
    {
      icon: History,
      title: "Eski Sürümden (1.x) Geçiş",
      items: [
        "DocuVault 1.x, belgeleri kendi sunucumuzda (Supabase, AB) saklıyordu ve e-postayla ya da Apple ile Giriş ile hesap kullanıyordu.",
        "2.0'da \"Eski hesaptan aktar\" ile belgelerini bir kez taşıyabilirsin. Bu sırada e-posta ve şifren (ya da Apple ile Giriş bilgin) yalnızca eski sunucuya giriş için kullanılır; uygulama bunları saklamaz ve bize yeni veri gönderilmez.",
        "Hâlâ 1.x kullanıyorsan: 1.x e-posta adresini ve belgelerini bu sunucuda saklar; yapay zekâ özetleri için belge metninin bir kısmını üçüncü taraf bir yapay zekâ servisine (Google Gemini) gönderir; anonim kullanım ve çökme verisi (PostHog, Sentry) toplar; abonelikleri RevenueCat üzerinden doğrular.",
        "Eski sunucu, 2.0'ın yayınlanmasından yaklaşık 90 gün sonra kapatılacak ve üzerindeki tüm veriler silinecektir. Tarih uygulamada ve bu sayfada duyurulur.",
        "1.x hesabının ve verilerinin daha önce silinmesini istersen destek@appdocuvault.com adresine yaz.",
      ],
    },
    {
      icon: Scale,
      title: "KVKK ve GDPR Haklarınız",
      items: [
        "Kişisel verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsin.",
        "DocuVault 2.0'da senden kişisel veri tutmadığımız için bu talepler çoğunlukla 1.x verileriyle ilgilidir.",
        "Haklarını kullanmak için destek@appdocuvault.com adresinden bize ulaş.",
      ],
    },
    {
      icon: Cookie,
      title: "Web Sitesi ve Çerezler",
      items: [
        "Uygulama çerez kullanmaz.",
        "Bu web sitesi, hizmet kalitesi için temel düzeyde analitik ve hata raporlama kullanabilir.",
        "link.appdocuvault.com paylaşım sayfası belgeyi tarayıcında çözer ve içeriğini kaydetmez.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Politika Değişiklikleri",
      items: [
        "Bu politika zaman zaman güncellenebilir; güncel tarih sayfanın başında yer alır.",
        "Önemli değişiklikler uygulamada ve bu sayfada duyurulur.",
      ],
    },
  ],
};

export const privacyEn: LegalCopy = {
  pageTitle: "Privacy Policy",
  pageDescription:
    "DocuVault privacy policy — DocuVault 2.0 has no account and no servers; documents are processed on device and stored only in the user's iCloud account.",
  lastUpdated: "Last updated: November 21, 2026",
  intro:
    "DocuVault 2.0 has no account, and DocuVault has no server that holds your documents. Your documents are processed on your device and stored only in your own Apple iCloud account. At the end of this page you will find transition details for people using the old version (1.x).",
  headerIcon: ShieldCheck,
  backLabel: "Home",
  questionsLabel: "Questions?",
  sections: [
    {
      icon: CloudOff,
      title: "Data We Collect (DocuVault 2.0)",
      items: [
        "DocuVault 2.0 does not ask for your name, email, phone number or a password; no account is created.",
        "We cannot see your documents, their recognized text, summaries, your Emergency Card or your signature; none of it is ever sent to us.",
        "The app contains no analytics, advertising or crash-reporting SDKs; we do not collect usage statistics.",
        "The only exception is moving over from 1.x (see \"Moving from the old version\" below).",
        "If \"Share With App Developers\" is turned on on your iPhone, Apple may send us crash and performance reports that do not identify you. You can manage this in Settings → Privacy & Security → Analytics & Improvements.",
      ],
    },
    {
      icon: Cloud,
      title: "Where Your Documents Are Stored",
      items: [
        "Your documents, collections and document sets are stored in the private CloudKit database of your iCloud account and sync to the devices signed in with the same Apple Account.",
        "Only you can access this database; the developer of DocuVault cannot see its contents.",
        "If you are not signed in to iCloud, documents stay on your device only.",
        "Storage, encryption and data centers are governed by Apple's iCloud terms.",
      ],
    },
    {
      icon: Cpu,
      title: "Text Recognition and AI",
      items: [
        "Text in your documents is read on your device with Apple's Vision framework.",
        "Summaries, highlights, Ask Document and AI document sets run on Apple's on-device model (Apple Intelligence).",
        "Your document content is never sent to an AI server and is never used for model training.",
      ],
    },
    {
      icon: Lock,
      title: "Share Links and Family Vault",
      items: [
        "When you create a secure link, the document is encrypted on your device (AES-GCM) and only the encrypted copy is uploaded to Apple CloudKit.",
        "The decryption key lives only in the link (the part after \"#\") and is never sent to a server; link.appdocuvault.com decrypts the document in the browser. DocuVault cannot read the content.",
        "When you revoke a link or it expires, the app deletes the encrypted copy from CloudKit (for expired links, the next time the app is opened).",
        "In the Family Vault, only the documents you choose are shared with the people you invite, through Apple's iCloud sharing. You can stop sharing at any time.",
      ],
    },
    {
      icon: Info,
      title: "Information That Stays on Your Device",
      items: [
        "The Emergency Card is stored on your iPhone and paired Apple Watch; DocuVault does not sync it to iCloud (if iCloud Backup is on, it is included, encrypted, in your device backup).",
        "Your signature is stored only on this device and is excluded from iCloud and device backups.",
        "Reminder notifications are scheduled on your device; no notification server is used.",
        "Encrypted backup files are encrypted on your device with a password you choose and saved where you choose; we do not know your password and cannot recover it.",
      ],
    },
    {
      icon: CreditCard,
      title: "Subscription",
      items: [
        "Plus purchases are processed by Apple; we have no access to your payment details.",
        "Free plan usage counters (for example, questions asked this month) are kept in iCloud key-value storage and contain no document content.",
      ],
    },
    {
      icon: Ban,
      title: "Advertising and Tracking",
      items: [
        "We show no ads, use no advertising SDKs and do not track you across apps or websites.",
        "We do not request the advertising identifier (IDFA); we do not sell or share your data.",
      ],
    },
    {
      icon: Trash2,
      title: "Deleting Your Data",
      items: [
        "A document you delete in the app is also deleted from all your devices through iCloud, and share links created for it are revoked.",
        "To delete all DocuVault data: iPhone Settings → [your name] → iCloud → Manage Storage → DocuVault → Delete Data.",
        "Deleting the app removes the data on that device; data in iCloud is deleted with the step above.",
      ],
    },
    {
      icon: History,
      title: "Moving from the Old Version (1.x)",
      items: [
        "DocuVault 1.x stored documents on our own server (Supabase, EU) and used an account with email or Sign in with Apple.",
        "In 2.0, \"Transfer from old account\" moves your documents over once. Your email and password (or Sign in with Apple credential) are used only to sign in to the old server; the app does not store them and no new data is sent to us.",
        "If you still use 1.x: 1.x stores your email address and documents on that server; sends part of the document text to a third-party AI service (Google Gemini) for summaries; collects anonymous usage and crash data (PostHog, Sentry); and verifies subscriptions through RevenueCat.",
        "The old server will be shut down about 90 days after 2.0 is released, and all data on it will be deleted. The date will be announced in the app and on this page.",
        "To have your 1.x account and data deleted sooner, write to destek@appdocuvault.com.",
      ],
    },
    {
      icon: Scale,
      title: "Your GDPR and KVKK Rights",
      items: [
        "You have the right to know whether your personal data is processed, to request information, correction and deletion, and to object to processing.",
        "Since DocuVault 2.0 holds no personal data about you, these requests mostly concern 1.x data.",
        "To exercise your rights, contact us at destek@appdocuvault.com.",
      ],
    },
    {
      icon: Cookie,
      title: "Website and Cookies",
      items: [
        "The app does not use cookies.",
        "This website may use basic analytics and error reporting for service quality.",
        "The link.appdocuvault.com share page decrypts the document in your browser and does not store its content.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Policy Changes",
      items: [
        "This policy may be updated from time to time; the current date is shown at the top of the page.",
        "Significant changes are announced in the app and on this page.",
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
