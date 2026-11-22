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
    "DocuVault kullanım şartları — hizmetin tanımı, DocuVault Plus aboneliği, kullanıcı sorumlulukları ve yasal bilgiler.",
  lastUpdated: "Son güncelleme: 22 Kasım 2026",
  intro:
    "DocuVault'u kullanarak aşağıdaki şartları kabul etmiş olursunuz. Lütfen dikkatlice okuyunuz. Kişisel verilerin nasıl işlendiği Gizlilik Politikası'nda anlatılır.",
  headerIcon: FileText,
  backLabel: "Ana Sayfa",
  questionsLabel: "Sorularınız için",
  sections: [
    {
      icon: Info,
      title: "Hizmetin Tanımı",
      items: [
        "DocuVault, WOOWCODE YAZILIM ve TİCARET A.Ş. (Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa / Antalya / Türkiye) tarafından geliştirilen ve yayınlanan bir uygulamadır. Bu şartlarda \"biz\" ifadesi bu şirketi anlatır.",
        "DocuVault, kişisel belgelerinizi (faturalar, kimlik, sözleşmeler, poliçeler vb.) taramak, düzenlemek, aramak ve saklamak için tasarlanmış bir iPhone, iPad ve Apple Watch uygulamasıdır.",
        "DocuVault 2.0'da belgeler cihazınızda işlenir ve Apple iCloud hesabınızda saklanır; DocuVault'un belgelerinizi tutan bir sunucusu yoktur.",
        "Hizmet, ücretsiz bir plan ve \"DocuVault Plus\" adlı ücretli bir abonelik içerir. Planların içeriği uygulamada ve App Store sayfasında gösterilir.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cihaz, iCloud ve Güvenlik",
      items: [
        "DocuVault 2.0 hesap oluşturmanızı istemez; belgeleriniz Apple hesabınıza bağlı iCloud alanınızda tutulur. Apple hesabınızın ve cihazınızın güvenliğinden (cihaz parolası, Face ID / Touch ID) siz sorumlusunuz.",
        "Uygulamanın Face ID kilidi, cihazınıza erişimi olan kişilere karşı ek bir koruma sağlar; cihaz parolanızı bilen biri kilidi açabilir.",
        "Şifreli yedek dosyasının parolasını yalnızca siz bilirsiniz. Parolayı unutursanız yedek açılamaz; DocuVault parolanızı kurtaramaz.",
        "iCloud depolama alanınız dolarsa belgeler eşitlenmeyebilir; iCloud hizmeti Apple'ın koşullarına tabidir.",
      ],
    },
    {
      icon: CreditCard,
      title: "Abonelik ve Otomatik Yenileme",
      items: [
        "DocuVault Plus aylık ve yıllık otomatik yenilenen abonelik olarak sunulur. Ücret, satın alma onayıyla Apple hesabınızdan tahsil edilir.",
        "Abonelik, mevcut dönem bitmeden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir; yenileme ücreti dönemin bitiminden önceki 24 saat içinde alınır.",
        "Ücretsiz deneme süresi (varsa) bittiğinde, iptal edilmedikçe ücretli aboneliğe otomatik olarak geçilir. Deneme süresinin kullanılmamış kısmı, abonelik satın alındığında geçersiz olur.",
        "Aboneliğinizi iPhone'unuzun Ayarlar → [adınız] → Abonelikler menüsünden istediğiniz zaman yönetebilir veya iptal edebilirsiniz. İadeler Apple'ın politikalarına tabidir.",
        "Plus, Aile Paylaşımı ile aile üyelerinizle paylaşılabilir.",
        "Plus sona erdiğinde belgeleriniz kilitlenmez; okumaya, düzenlemeye ve dışa aktarmaya devam edebilirsiniz. Yalnızca ücretsiz plan sınırlarını aşan yeni eklemeler ve Plus'a özel araçlar durur.",
      ],
    },
    {
      icon: FileText,
      title: "İçerik ve Kullanıcı Sorumluluğu",
      items: [
        "Uygulamaya eklediğiniz tüm belgelerin yasal olarak size ait olduğunu veya saklama ve paylaşma yetkisine sahip olduğunuzu beyan edersiniz.",
        "Yasadışı içerik, başkasına ait belgeler veya zararlı dosyalar eklenemez ve paylaşılamaz.",
        "Paylaşım linkini elinde tutan herkes, link geçerli olduğu sürece belgeyi açabilir. Linki kiminle paylaştığınızdan ve gerektiğinde iptal etmekten siz sorumlusunuz.",
        "Aile Kasası'na eklediğiniz belgeleri davet ettiğiniz kişiler görebilir ve kendi kasalarına kopyalayabilir; paylaşımı durdurmak daha önce kaydedilmiş kopyaları silmez.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Yapay Zekâ, Hatırlatmalar ve Acil Durum Kartı",
      items: [
        "Özetler, öne çıkanlar, Belgeye Sor yanıtları, otomatik doldurulan tarih ve tutarlar ile belge seti listeleri otomatik üretilir ve hatalı olabilir. Önemli kararlardan önce belgenin aslını kontrol edin; bu içerikler hukuki, tıbbi veya finansal tavsiye değildir.",
        "Hazır belge seti şablonları genel bilgi amaçlıdır; gerçek gereksinimler kuruma ve ülkeye göre değişebilir, resmî kaynaktan teyit edin.",
        "Hatırlatmaların ulaşması cihazınızın bildirim ayarlarına bağlıdır; son tarihleri takip etme sorumluluğu size aittir.",
        "Acil Durum Kartı bir acil çağrı hizmeti değildir. Apple Watch'taki ACİL düğmesi yalnızca eşlenmiş iPhone'unuza bildirim gönderir; 112'yi aramaz. Acil durumlarda 112'yi veya cihazınızın Acil SOS özelliğini kullanın. Karttaki bilgilerin doğruluğundan siz sorumlusunuz.",
      ],
    },
    {
      icon: Ban,
      title: "Yasak Kullanımlar",
      items: [
        "Uygulamayı tersine mühendislik yapmak, klonlamak veya kötü amaçlı yazılım dağıtmak için kullanmak yasaktır.",
        "Paylaşım linklerini veya Aile Kasası'nı yasadışı içerik dağıtmak ya da başkalarını taciz etmek için kullanmak yasaktır.",
        "Hizmeti otomatik araçlarla aşırı kullanmak veya başkalarının verilerine izinsiz erişmeye çalışmak yasaktır.",
      ],
    },
    {
      icon: CloudOff,
      title: "Hizmetin Kesintiye Uğraması",
      items: [
        "Hizmetin %100 kesintisiz çalışacağını garanti etmiyoruz. iCloud eşitlemesi ve paylaşım linkleri Apple'ın hizmetlerine bağlıdır.",
        "Bakım, güncelleme veya öngörülemeyen teknik sorunlar nedeniyle geçici kesintiler olabilir.",
        "Veri kaybına karşı önemli belgelerinizin ek bir yedeğini (örneğin şifreli yedek dosyası) bulundurmanızı tavsiye ederiz.",
      ],
    },
    {
      icon: UserX,
      title: "Kullanımı Sonlandırma ve Veri Silme",
      items: [
        "Uygulamayı dilediğiniz zaman kullanmayı bırakabilirsiniz. Verilerinizi iPhone Ayarlar → [adınız] → iCloud → Depolamayı Yönet → DocuVault bölümünden silebilirsiniz.",
        "DocuVault 1.x hesabınız ve eski sunucudaki verileriniz, eski sunucu kapatıldığında silinir; daha önce silinmesini istiyorsanız destek@appdocuvault.com adresine yazabilirsiniz.",
        "Bu şartları ihlal etmeniz durumunda paylaşım linklerinizi iptal etme ve hizmete erişiminizi kısıtlama hakkımız saklıdır.",
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
        "Bu şartlar zaman zaman güncellenebilir; güncel tarih sayfanın başında yer alır.",
        "Önemli değişiklikler uygulamada ve bu sayfada duyurulur.",
        "Güncellemeden sonra hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.",
      ],
    },
    {
      icon: Building2,
      title: "Uygulanacak Hukuk",
      items: [
        "Bu sözleşme Türkiye Cumhuriyeti yasalarına tabidir.",
        "Anlaşmazlıklarda Antalya Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici olarak kanundan doğan haklarınız (tüketici hakem heyetleri ve yerleşim yerinizdeki tüketici mahkemeleri dahil) saklıdır.",
      ],
    },
  ],
};

export const termsEn: LegalCopy = {
  pageTitle: "Terms of Use",
  pageDescription:
    "DocuVault terms of use — service description, DocuVault Plus subscription, user responsibilities and legal information.",
  lastUpdated: "Last updated: November 22, 2026",
  intro:
    "By using DocuVault you agree to the following terms. Please read them carefully. How personal data is handled is described in the Privacy Policy.",
  headerIcon: FileText,
  backLabel: "Home",
  questionsLabel: "Questions?",
  sections: [
    {
      icon: Info,
      title: "Service Description",
      items: [
        "DocuVault is developed and published by WOOWCODE YAZILIM ve TİCARET A.Ş. (Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa, Antalya, Türkiye). In these terms, \"we\" means this company.",
        "DocuVault is an iPhone, iPad and Apple Watch app for scanning, organizing, searching and storing personal documents (bills, IDs, contracts, insurance policies, etc.).",
        "In DocuVault 2.0, documents are processed on your device and stored in your Apple iCloud account; DocuVault has no server that holds your documents.",
        "The service includes a free plan and a paid subscription called \"DocuVault Plus\". What each plan includes is shown in the app and on the App Store page.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Device, iCloud & Security",
      items: [
        "DocuVault 2.0 does not ask you to create an account; your documents are kept in the iCloud storage of your Apple Account. You are responsible for the security of your Apple Account and device (device passcode, Face ID / Touch ID).",
        "The app's Face ID lock adds protection against people who have access to your device; someone who knows your device passcode can unlock it.",
        "Only you know the password of an encrypted backup file. If you forget it, the backup cannot be opened; DocuVault cannot recover your password.",
        "If your iCloud storage is full, documents may not sync; iCloud is subject to Apple's terms.",
      ],
    },
    {
      icon: CreditCard,
      title: "Subscription & Auto-Renewal",
      items: [
        "DocuVault Plus is offered as monthly and yearly auto-renewing subscriptions. Payment is charged to your Apple Account at confirmation of purchase.",
        "The subscription renews automatically unless canceled at least 24 hours before the end of the current period; the renewal is charged within the 24 hours before the period ends.",
        "When a free trial (if offered) ends, it converts to a paid subscription unless canceled. Any unused portion of a free trial is forfeited when a subscription is purchased.",
        "You can manage or cancel your subscription at any time in iPhone Settings → [your name] → Subscriptions. Refunds are subject to Apple's policies.",
        "Plus can be shared with family members through Family Sharing.",
        "When Plus ends, your documents are not locked; you can keep reading, editing and exporting them. Only new additions beyond the free plan limits and Plus-only tools stop.",
      ],
    },
    {
      icon: FileText,
      title: "Content & User Responsibility",
      items: [
        "You represent that all documents you add are legally yours or that you are authorized to store and share them.",
        "Illegal content, documents belonging to others without permission, or harmful files may not be added or shared.",
        "Anyone who has a share link can open the document while the link is valid. You are responsible for whom you share a link with and for revoking it when needed.",
        "People you invite to the Family Vault can see the documents you add and copy them to their own vault; stopping sharing does not delete copies they already saved.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "AI, Reminders & Emergency Card",
      items: [
        "Summaries, highlights, Ask Document answers, auto-filled dates and amounts, and document set lists are generated automatically and may be wrong. Check the original document before important decisions; this content is not legal, medical or financial advice.",
        "Ready-made document set templates are for general information; actual requirements vary by institution and country, so confirm with an official source.",
        "Whether reminders arrive depends on your device's notification settings; you remain responsible for tracking your due dates.",
        "The Emergency Card is not an emergency call service. The SOS button on Apple Watch only sends a notification to your paired iPhone; it does not call emergency services. In an emergency, call your local emergency number or use your device's Emergency SOS. You are responsible for the accuracy of the information on the card.",
      ],
    },
    {
      icon: Ban,
      title: "Prohibited Use",
      items: [
        "Reverse engineering or cloning the app, or using it to distribute malware, is prohibited.",
        "Using share links or the Family Vault to distribute illegal content or to harass others is prohibited.",
        "Overusing the service with automated tools or attempting to access others' data without permission is prohibited.",
      ],
    },
    {
      icon: CloudOff,
      title: "Service Interruptions",
      items: [
        "We do not guarantee that the service will run 100% without interruption. iCloud sync and share links depend on Apple's services.",
        "Temporary interruptions may occur due to maintenance, updates or unforeseen technical issues.",
        "We recommend keeping an additional backup of important documents (for example, an encrypted backup file) to guard against data loss.",
      ],
    },
    {
      icon: UserX,
      title: "Ending Use & Deleting Data",
      items: [
        "You can stop using the app at any time. You can delete your data in iPhone Settings → [your name] → iCloud → Manage Storage → DocuVault.",
        "Your DocuVault 1.x account and the data on the old server are deleted when the old server is shut down; to have them deleted sooner, write to destek@appdocuvault.com.",
        "If you violate these terms, we reserve the right to revoke your share links and restrict your access to the service.",
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
        "These terms may be updated from time to time; the current date is shown at the top of the page.",
        "Significant changes will be announced in the app and on this page.",
        "Continuing to use the service after an update constitutes acceptance of the new terms.",
      ],
    },
    {
      icon: Building2,
      title: "Governing Law",
      items: [
        "This agreement is governed by the laws of the Republic of Türkiye.",
        "The courts and enforcement offices of Antalya have jurisdiction over disputes. Your statutory rights as a consumer (including consumer arbitration committees and consumer courts where you live) are not affected.",
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
  lastUpdated: "Son güncelleme: 22 Kasım 2026",
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
        "Veri sorumlusu: WOOWCODE YAZILIM ve TİCARET A.Ş., Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa / Antalya / Türkiye.",
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
  lastUpdated: "Last updated: November 22, 2026",
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
        "Data controller: WOOWCODE YAZILIM ve TİCARET A.Ş., Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa, Antalya, Türkiye.",
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
  lastUpdated: "Son güncelleme: 22 Kasım 2026",
  intro:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") Madde 10 uyarınca, kişisel verilerinizin işlenmesine ilişkin bu aydınlatma metnini bilgilerinize sunarız. DocuVault 2.0'da hesap yoktur ve belgeleriniz bizim sunucumuzda değil, kendi iCloud hesabınızda saklanır; bu nedenle 2.0 kapsamında işlediğimiz kişisel veri çok sınırlıdır.",
  headerIcon: Scale,
  backLabel: "Ana Sayfa",
  questionsLabel: "Veri sahibi başvuruları için",
  sections: [
    {
      icon: Building2,
      title: "Veri Sorumlusunun Kimliği",
      items: [
        "Veri sorumlusu: WOOWCODE YAZILIM ve TİCARET A.Ş. (DocuVault uygulamasının geliştiricisi ve yayıncısı)",
        "Adres: Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa / Antalya / Türkiye",
        "İletişim adresi: destek@appdocuvault.com",
        "Web sitesi: https://www.appdocuvault.com",
        "Hizmet türü: Mobil belge yönetim uygulaması (iOS, iPadOS, watchOS)",
      ],
    },
    {
      icon: Database,
      title: "İşlenen Kişisel Veriler",
      items: [
        "DocuVault 2.0: Ad, e-posta, telefon veya şifre talep edilmez. Belgeleriniz, okunan metinleri, özetleri, Acil Durum Kartınız ve imzanız tarafımızca erişilebilir bir yere gönderilmez.",
        "Belgeleriniz Apple iCloud hesabınızda (CloudKit özel veritabanı) saklanır; bu veriler Apple tarafından iCloud koşulları çerçevesinde işlenir ve tarafımızca görülemez.",
        "Teşhis verileri: Cihazınızda \"Uygulama geliştiricileriyle paylaş\" ayarı açıksa Apple, kimliğinizi içermeyen çökme ve performans raporlarını bize iletebilir.",
        "İletişim verileri: Bize e-posta ile yazdığınızda e-posta adresiniz ve mesajınızın içeriği.",
        "Geçiş dönemi (DocuVault 1.x): Eski sürümü kullananların ad, e-posta adresi, yükledikleri belgeler, abonelik durumu, cihaz bilgileri ve anonim kullanım ile hata kayıtları eski sunucuda bulunmaktadır. 2.0'daki \"Eski hesaptan aktar\" özelliği, belgelerinizi bir kez indirmek için e-posta ve şifrenizi (ya da Apple ile Giriş bilginizi) yalnızca eski sunucuya giriş amacıyla kullanır; uygulama bunları saklamaz.",
      ],
    },
    {
      icon: Info,
      title: "Kişisel Verilerin İşlenme Amaçları",
      items: [
        "Destek taleplerinize ve hata bildirimlerinize yanıt vermek.",
        "Teşhis raporlarıyla uygulamanın kararlılığını iyileştirmek.",
        "DocuVault 1.x kullanıcılarının belgelerini 2.0'a taşıyabilmesini sağlamak ve geçiş dönemi boyunca eski hizmeti sürdürmek.",
        "Yasal yükümlülüklerin yerine getirilmesi: Yetkili kurumların talepleri durumunda mevzuata uygun cevap verilmesi.",
      ],
    },
    {
      icon: Scale,
      title: "İşlemenin Hukuki Sebepleri",
      items: [
        "Bir sözleşmenin kurulması veya ifası (KVKK Madde 5/2-c): Destek hizmetinin ve 1.x'ten taşımanın sağlanması.",
        "Veri sorumlusunun meşru menfaati (KVKK Madde 5/2-f): Uygulama kararlılığının iyileştirilmesi.",
        "Açık rıza (KVKK Madde 5/1): Cihazınızda teşhis verilerinin geliştiricilerle paylaşılmasını açmanız; web sitesinde isteğe bağlı analitik çerezler.",
        "Yasal yükümlülük (KVKK Madde 5/2-ç): Yetkili makamların talepleri.",
      ],
    },
    {
      icon: Cpu,
      title: "Yapay Zekâ İşlemleri",
      items: [
        "DocuVault 2.0'da metin tanıma, özet, öne çıkanlar ve Belgeye Sor tamamen cihazınızda, Apple'ın cihazdaki modeliyle yapılır; belge içeriğiniz herhangi bir yapay zekâ sunucusuna aktarılmaz.",
        "DocuVault 1.x, yapay zekâ özetleri için belge metninin bir kısmını işlem süresince üçüncü taraf bir yapay zekâ servisine (Google Gemini) şifreli kanaldan iletmektedir. Bu işleme eski sunucuyla birlikte sona erecektir.",
      ],
    },
    {
      icon: Cloud,
      title: "Kişisel Verilerin Aktarıldığı Taraflar",
      items: [
        "Apple Inc.: iCloud depolama ve paylaşımı, App Store ödeme ve abonelik yönetimi, teşhis raporları. Apple'ın sunucuları yurt dışında bulunabilir; bu işlemler Apple'ın koşullarına tabidir.",
        "Geçiş dönemi (DocuVault 1.x): Bulut altyapı sağlayıcısı (Supabase, AB tabanlı uçlar), yapay zekâ servisi (Google Gemini), kullanım ve hata analitiği (PostHog, Sentry) ve abonelik doğrulama (RevenueCat). Bu aktarımlar eski sunucu kapatıldığında sona erecektir.",
        "Yetkili kamu kurumları: Yasal zorunluluk veya yargı kararı bulunması hâlinde, ilgili mevzuat çerçevesinde.",
      ],
    },
    {
      icon: FileText,
      title: "Kişisel Verilerin Toplanma Yöntemi",
      items: [
        "Doğrudan sizden: Bize gönderdiğiniz destek e-postaları.",
        "Apple aracılığıyla: Açtıysanız teşhis raporları; App Store abonelik durumu.",
        "Geçiş dönemi: 1.x hesabınızla giriş yaptığınızda eski sunucuya ilettiğiniz bilgiler.",
      ],
    },
    {
      icon: Lock,
      title: "Veri Güvenliği Tedbirleri",
      items: [
        "Belgeler cihazda işlenir ve kullanıcının kendi iCloud hesabında saklanır; tarafımızca erişilemez.",
        "Paylaşım linklerinde belge cihazda şifrelenir (AES-GCM); anahtar yalnızca linkin içindedir.",
        "Şifreli yedek dosyaları kullanıcının belirlediği parolayla cihazda şifrelenir.",
        "Face ID / Touch ID ile uygulama kilidi; uygulama arka plana alındığında içerik gizlenir.",
        "Uygulamada reklam, izleme veya analitik yazılımı bulunmaz.",
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
        "iCloud'daki belgeleriniz: Siz silene kadar iCloud hesabınızda kalır; iPhone Ayarlar → [adınız] → iCloud → Depolamayı Yönet → DocuVault bölümünden silebilirsiniz.",
        "Destek e-postaları: Talebin çözümü ve olası yasal yükümlülükler için gerekli süre boyunca.",
        "DocuVault 1.x verileri: Eski sunucu, 2.0'ın yayınlanmasından yaklaşık 90 gün sonra kapatılacak ve üzerindeki tüm veriler silinecektir. Daha önce silinmesini destek@appdocuvault.com adresinden talep edebilirsiniz.",
        "Mevzuat gereği saklanması zorunlu kayıtlar: İlgili mevzuatın öngördüğü süre boyunca.",
      ],
    },
  ],
};

export function getKvkk(): LegalCopy {
  return kvkkTr;
}
