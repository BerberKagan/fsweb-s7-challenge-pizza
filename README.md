SUNUM
Projesini sunma becerisi.
Kodun nasıl çalıştığını ifade edebilme becerisi.
Süre kullanımı

DESIGN, CSS
Sayfalar arası tutarlı bir layout kullanılmış mı?
CSS kullanılırken selector kullanımı nasıl; etiket mi, id mi, tag mi kullanılmış?
Flex kullanılmış mı, ortalama ve hizalama yapılmış mı?
HTML yapısı anlamlı mı? Semantik tagler kullanılmış mı?
Tasarım uyarlama yeteneği (1-5)

ROUTING
Sipariş gönderildikten sonra, onay sayfasına yönlendirme eklenmiş mi?
Route ve linklerin yapısı doğru mu?
Tüm pathlerde görünmesi istenen kısımlar route dışında bırakılmış mı?

FORM ELEMENTS
Form elemanları semantik olarak, name, value, id, placeholder gibi attribute içeriyor mu?
Checkbox, radiobutton spesifik semantik doğru mu?
Form elemanları ile labellar eşleştirilmiş mi?
Tasarımda olmadığı halde, readme'den fark edilip isim alanı eklenmiş mi?
Changehander ile state güncelleniyor mu?
Validation eklenmiş mi?
Form anlayış seviyesi (1-5)

YUP
Form field testleri anlamlı yazılmış mı? "checkbox one of true or false" gibi
Errorlar sayfada görünüyor mu?
Yup anlayış seviyesi (1-5)

React
Form seçenekleri state'ten okunuyor mu?
Tüm form değerleri state'e ekleniyor mu?
Componentlara bölünmüş mü?
Map kullanmış mı?
Türkçe karakter kullanılmış mı?
Genel React anlayışı (1-5)

Axios
Form verilerini reqres.io'ya atıp geri alıyor mu?
Sipariş başarılı sayfasında sipariş özetini gösteriyor mu?

TEST
Kaç test yazılmış?
Testlerde validation kuralları test ediliyor mu?
Her alan test ediliyor mu?
E2E home-success sipariş testi var mı?

# Tek Sayfa Uygulamalar Sprint Challenge

**Talimatları dikkatlice okuyun. Sprint Challenge'a başlamadan neler istendiğini tam olarak anladığınıza emin olun.**
**SORU SORMADAN ÖNCE LÜTFEN TÜM TALİMATLARI OKUYUN!!**
(soracağınız soruların büyük bir kısmı SSS kısmında cevaplanmıştır)

Bu challenge, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprintte **tek sayfa uygulamalarını** keşfettiniz. Sprint boyunca, **routing, formlar, ve cypress testlerini** öğrendiniz. Bu sprint challenge'ında, aç yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesi olan **Teknolojik Yemekler**'i oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu tek başınıza yapmanız gereken bir uygulamadır. Tüm işi tek başınıza yapacaksınız. Challenge skorunuz, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yapabilme yeteneğinizin bir ölçüsüdür. Önceki günlerde tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

## Talimatlar

Bu challengeda `Teknolojik Yemekler` anasayfası üzerine çalışacaksınız. Kullanıcının, malzemelerini isteğe göre seçebileceği bir pizza formu oluşturacaksınız.

Sitenizi tasarlarken aşağıdaki wireframe(çerçeve)'leri kılavuz olarak kullanabilirsiniz, ancak bunu yapmanız zorunlu değildir.

Not: Formlardaki input alanlarını özelleştirmeyi en sona bırakmanızı tavsiye ederim. W3 Schools'da [checkbox](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp) ve [dropdown](https://www.w3schools.com/howto/howto_custom_select.asp) için harika örnekler bulabilirsiniz.

### MVP

[Sipariş Formu](./interface-designs/MVP-OrderPizza.png)
[Anasayfa](./interface-designs/MVP-Home.png)
[Sipariş Onayı](./interface-designs/MVP-Success.png)

#### Renk Kodları

Sarı #FDC913, Açık Gri: #5F5F5F, Koyu Gri #292929, Kırmızı #CE2829, Bej: #FAF7F2

#### Fontlar

[Barlow](https://fonts.google.com/specimen/Barlow)
[Quattrocento](https://fonts.google.com/specimen/Quattrocento)
[Satisfy](https://fonts.google.com/specimen/Satisfy)

## Giriş

### Görev 1: Proje Kurulumu

- [ ] Forklayarak bir kopya oluşturun
- [ ] Forku klonlayın
- [ ] Main branch üzerinde çalışın
- [ ] Comitinizi pushlayın: `git push origin main`

### Görev 2: Proje Gereklilikleri

Bitmiş proje aşağıdaki gereklilikleri içermelidir:

- [ ] Route u "/" olan ve forma linklenen bir anasayfa (button, nav bar, ya da herhangi bir link kabul edilebilir ama id'si "order-pizza" olmalı)
- [ ] Route u "/pizza" olan bir sipariş formu
- [ ] Id'si "pizza-form" olan bir form
- [ ] Id'si "name-input" olan bir isim inputu
- [ ] İsim için bir doğrulama(validation) ve hata mesajı (İsim en az 2 karakter olmalıdır) (Testlerin geçtiğinden emin olmak için tam olarak bu hata mesajını kullanın) ::: BU HATA MESAJINI KULLANMAK ÇOK ÖNEMLİ (testlere dahil!)
- [ ] Pizza boyutunun seçilebileceği "size-dropdown" id'li bir dropdown
- [ ] Malzemeler için bir checklist(checkbox) - en az 4 adet (ipucu: name attributeları farklı olsun!)
- [ ] Özel seçimler için bir text input "special-text" id'li
- [ ] "order-button" id'li bir "Sipariş Ver" butonu. Bu buton tıklandığında form gönderilerek girilen bilgileri içerecek bir veritabanı kaydı oluşturulacak

Not - Form'un payloadu, veri şu şekilde olabilir. Kendiniz de bu yapıyı değiştirebilirsiniz.

```
{
    isim: string,
    boyut: string,
    malzeme1: bool,
    malzeme2: bool,
    ...
    özel: string,
}
```

#### MVP'yi test etme

Cypress'le şu testleri ekleyin:

- [ ] inputa bir metin giren test
- [ ] birden fazla malzeme seçilebilen bir test
- [ ] formu gönderen bir test

Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir. Organizasyon ve kod yapısına göre skorunuz belirlenecek.
Çalışmanızı gözden geçirmek, iyileştirmek ve değerlendirmek için zaman planlayın ve çalışmanız üzerinde yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere temel profesyonel düzeltmeler yapın. MVP'yi karşılayan bir challenge göndermek, çok fazla kompleksleştirilmiş ama çalışmayan bir proje göndermekten daha iyidir.

Cypress kurulumu için `npm install cypress --save-dev` komutunu girin ve `npx cypress open` yazın. Bu, "Cypress 10'a Hoş Geldiniz!" başlığı ve altında "Cypress 10'a Devam Et" yazan buton içeren bir diyalog açacaktır. Bu butona tıklayın, ardından bir sonraki ekranın en altına gidin ve arka arkaya üç geçiş butonuna tıklayın (birini tıkladıktan sonra sonraki bölüm genişleyecek ve bir sonraki geçiş seçimini tıklamanıza izin verecektir). Bir sonraki ekranda 'e2e' seçeneğini seçin ve bir sonraki ekranda 'Scaffold Example Specs' seçeneğini seçin, ardından istediğiniz bir tarayıcı seçin ve 'E2E Testini Başlat' düğmesine tıklayın.

Oradan, VSCode'da yeni oluşturduğunuz cypress klasöründe, e2e klasörüne gidin ve `pizza.cy.js` adlı yeni bir dosya oluşturun. Artık testlerinizi yazmaya hazırsınız! (Dosya isminde ".cy" olduğundan emin olun, aksi takdirde Cypress testlerinizi bulamaz!)

### Görev 3: Esnek Görevler

Gerekli öğelerinizi bitirdikten sonra çalışmanızı daha da ileri götürebilirsiniz. Bu hedefler, bu modülde öğrendiğiniz şeyler olabilir veya olmayabilir, ancak az önce incelediğiniz materyal üzerine inşa edilecekler. Zaman tanıyın, sınırlarınızı zorlayın ve aşağıdaki isteğe bağlı hedeflere ulaşıp ulaşamayacağınıza bakın:

- [ ] Form öğesi bölümlerini iç içe routelara dönüştürün
- [ ] Cypressle daha çok test yazın
- [ ] Sipariş POST edilirken bir ağ hatası olasılığı için kullanıcı arabirimi oluşturun (örnek: İnternet'e bağlanılamadı)
- [ ] Sipariş butonuna `Tebrikler! Pizza'nız yola çıktı` mesajını gösterecek ve veritabanına eklenen siparişin detaylarını gösterecek bir işlevsellik ekleyin.
- [ ] Aşağıdaki görsellere göre sayfaları sırasıyla iyileştirin. Önceliklendirme çok önemli. İlk önce sipariş, sonra Sipariş Formu, en son da Anasayfadaki diğer yardımcı görselleri ekleyebilirsiniz.

#### Esnek Tasarım İyileştirmeleri

[Sipariş Formu](./interface-designs/Esnek-OrderPizza.png)
[Anasayfa](./interface-designs/Esnek-Home.png)
[Sipariş Onayı](./interface-designs/Esnek-Success.png)

## Esnek Mülakat Soruları

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. 1-2 cümle ile, React'ın `useRouteMatch` hookunun ne için kullanıdığını açıklayın.

Bu hook; uygulamanıza iç içe rotalar eklememizi sağlar, böylece URL'deki tek bir parametreyi tümünü değiştirmek zorunda kalmadan değiştirebiliriz.

2. Daha önce hiç programlama yapmamış birine form validationı(doğrulama) nasıl açıklarsınız?

Form validation kullanıcıdan aldığımız verilerin doğru formatta olup olmadığını kontrol etmek amacıyla kullanılan bir yapıdır. Onaylama kontrolünün amacı web uygulamalarında kullanıcıların girmiş olduğu verilerin veritabanına kaydedilmeden önce istenen şartları sağlayıp sağlamadığını kontrol etmektir.

3. 1-2 cümle ile, uç uca testlerin ne işe yaradığını açıklayın.

Uçtan uca test, kullanıcı deneyiminin tamamını uçtan uca inceler. Uçtan uca testler "kullanıcı, bir eylemi gerçekleştirebilir mi?" sorusunu sorar. Uçtan uca testler kullanıcı arayüzüne(UI) odaklanır ve bir kullanıcının bir uygulama ile nasıl etkileşime girebileceğini taklit ederek button click’leri, scroll’ları(kaydırmalar), form gönderimleri ve benzeri gerçek olayları simüle eder.


## SSS

**Siparişin veritabanı kaydını nasıl döndürürüm??**

Hedeflerinizden biri, siparişin bir veritabanı kaydını döndürmektir - bunun için bir post request yazmanız gerekir. Detaylı adımlar aşağıda:

1. Yeni bir state değişkeni ve hook oluşturun
2. `axios` ile [reqres](https://reqres.in/) sayfasına post request atın (adım 4'teki linke)
3. veriyi konsola yazdırın
4. Kullanacağınız URL şudur: `https://reqres.in/api/orders`. Testler bu URL'de.
