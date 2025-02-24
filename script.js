const toggleButton = document.getElementById("themetoggle");
const body = document.body;
const languageSelect = document.getElementById("language-select");

// Language data
const translations = {
    en: {
        title: "Welcome",
        description: "Neontech company.",
        themetoggle: "",
        home: "Home",
        products: "Products",
        news: "News",
        support: "Support",
        contact: "Contact",
        integrity: "Integrity Policy",
        about: "About Us",
        copyright: "Copyright © 2025 NeonTech. All rights reserved.",
        neontechalphadescription: "The smartphone of the future – edge-to-edge display, revolutionary camera.",
        neontechalphadescription2: "Sleek performance at an affordable price",
        buynow:"Buy now",
        audioproducts:"NeonTech Premium Audio products",
        neontechdescription3:"Classy and High quality audio products with the best sound quality on the market",
        neontechextras:"NeonTech products",
        neontechdescription4:"For all your daily needs",
        showproducts:"Show products",
        /* about page */
        abouttitle1:"Get to Know NeonTech – Innovation in Every Detail",
        aboutdescription1:"Welcome to NeonTech, where we create technology for the future. Our goal is to combine cutting-edge innovation with sleek design, giving you a whole new way to experience technology.",
        abouttitle2:"Our Story",
        aboutdescription2:"NeonTech was founded with a vision to make technology more intuitive, powerful, and aesthetically appealing. From our first prototypes to today’s flagship products, we have always strived for perfection and performance.",
        abouttitle3:"Our Vision & Mission",
        aboutdescription3:"We believe in a world where technology seamlessly integrates into everyday life. Our mission is to create intelligent, high-performance, and stylish products that enhance your digital experience.",
        abouttitle4:"Our Products",
        aboutdescription4:"We offer premium smartphones, wireless earbuds, smartwatches, and accessories – all designed to meet the highest standards of quality, design, and functionality.",
        abouttitle5:"Our Team",
        aboutdescription5:"NeonTech is made up of engineers, designers, and tech enthusiasts passionate about innovation. With a love for modern technology and the possibilities of the future, we develop products that change the way we live, work, and communicate.",
        /* integritetspolicysida */
        integritetstitle1:"Privacy Policy – Your Security is Our Priority",
        integritetstitle2:"What Information We Collect",
        integritetstitle3:"How We Use Your Information",
        integritetstitle4:"Data Sharing",
        integritetstitle5:"Cookies & Tracking",
        integritetstitle6:"Your Rights",
        integritetstitle7:"Contact Information",
        integritetsdescription1:"At NeonTech, we are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and how we safeguard your data when you use our website and services.",
        integritetsdescription2:"When you visit our website or use our services, we may collect the following types of information:",
        integritetslista1:"Personal Data: Name, email address, phone number (if you contact us or make a purchase).",
        integritetslista2:"Technical Data: IP address, browser type, device information.",
        integritetslista3:"Usage Data: How you interact with our website, such as visited pages and click patterns.",
        integritetsdescription3:"We collect data to:",
        integritetslista4:"✔ Improve and optimize our website and services.",
        integritetslista5:"✔ Personalize your experience and provide relevant content.",
        integritetslista6:"✔ Process orders and deliveries.",
        integritetslista7:"✔ Communicate with you regarding inquiries or customer support.",
        integritetsdescription4:"We do not share your information with third parties, except in the following cases:",
        integritetslista8:"Service providers who help operate our website (e.g., payment processing).",
        integritetslista9:"Legal requirements if we are obligated by law to share certain information.",
        integritetsdescription5:"We use cookies and similar technologies to enhance your experience. You can manage or disable cookies in your browser settings.",
        integritetsdescription6:"You have the right to:",
        integritetslista10:"✔ Request access to the data we hold about you.",
        integritetslista11:"✔ Have your data corrected or deleted.",
        integritetslista12:"✔ Restrict or object to data processing.",
        integritetsdescription7:"If you have any questions about our privacy policy, contact us at:",
        /* formulär */
        formcontactus:"Contact us",
        formname:"Name:",
        formemail:"Email adress:",
        formsubject:"Subject:",
        formmessage:"Message:",
        formoption1: "General question about NeonTech products",
        formoption2: "Issue with my smartphone",
        formoption3: "Issue with my headphones",
        formoption4: "Issue with my smartwatch",
        formoption5: "Issue with charging accessories",
        formoption6: "Order or delivery inquiry",
        formoption7: "Other",
        formsubmit:"Send",
        integritetskontakt2:"Contact us",
        /* support */
        support_intro: "Welcome to NeonTech's support page",
        support_intro_text: "Here you will find solutions to common issues with our products. Select your product below to get help.",
        phone_not_charging: "1. My phone is not charging, what should I do?",
        phone_check_charger: "✔ Ensure that you are using an original NeonCharge charger.",
        phone_try_other_cable: "✔ Try a different charging cable or power outlet.",
        phone_clean_port: "✔ Clean the charging port from dust.",
        phone_restart: "✔ Restart the phone.",
        phone_not_starting: "2. My phone won't turn on, what could be wrong?",
        phone_force_restart: "✔ Hold the power button for 10 seconds to force a restart.",
        phone_charge_15min: "✔ Charge the phone for at least 15 minutes and try again.",
        phone_contact_support: "✔ If nothing works, contact support.",
        buds_not_connecting: "1. My earbuds won't connect to Bluetooth",
        buds_check_bluetooth: "✔ Ensure that Bluetooth is enabled on your device.",
        buds_reset_case: "✔ Place the earbuds back in the case and take them out again.",
        buds_factory_reset: "✔ Reset the earbuds by holding the button on the case for 10 seconds.",
        buds_one_not_working: "2. One earbud is not working",
        buds_check_charge: "✔ Ensure that the earbuds are fully charged.",
        buds_reconnect: "✔ Disconnect and re-pair the earbuds via Bluetooth.",
        buds_clean_contacts: "✔ Clean the charging contacts in the case.",
        watch_not_syncing: "1. My watch is not syncing with my phone",
        watch_check_bluetooth: "✔ Ensure that Bluetooth is enabled.",
        watch_restart: "✔ Restart both the watch and the phone.",
        watch_reinstall_app: "✔ Reinstall the NeonSync app and try again.",
        watch_battery_drain: "2. The battery drains quickly",
        watch_disable_features: "✔ Disable unnecessary features such as always-on display.",
        watch_update_software: "✔ Ensure that the watch is running the latest software.",
        watch_lower_brightness: "✔ Reduce the screen brightness.",
        charge_not_working: "1. My wireless charger is not working",
        charge_enable_wireless: "✔ Ensure that wireless charging is enabled on your phone.",
        charge_check_power: "✔ Make sure the charger is plugged into a working outlet.",
        charge_adjust_position: "✔ Adjust the phone's position on the charger.",
        need_more_help: "Do you need further assistance?",
        contact_support: "If your issue is not listed here, contact us at support@neontech.com, visit our help center, or reach out via the contact form.",
        support_intro_button: "Introduction ↴",
        support_alpha_button: "NeonTech Alpha – Common Questions & Solutions ↴",
        support_buds_button: "NeonBuds Pro – Common Questions & Solutions ↴",
        support_watch_button: "NeonWatch X – Common Questions & Solutions ↴",
        support_charge_button: "NeonCharge – Common Questions & Solutions ↴",
        productpageproducts: "Products",
        telephones:"Telephones",
        soundproducts:"Sound products",
        clocks:"Watches",
        accessories:"Accessories",
        findmoreproducts:"Find more products!",
        allproducts:"All products",
        Alphatitle1:"Specifications:",
        ordernow:"Order now",
        Alphaprice: "$899",
        Alphadescription: "NeonTech Alpha is our most powerful smartphone yet. Featuring a 6.8-inch AMOLED 120Hz display, an AI-powered camera, and the NeonChip X1 processor, it delivers an ultra-smooth experience. The 5000mAh battery ensures all-day connectivity.",
        Alphaspec1: "Display: 6.8-inch AMOLED, 120Hz, 3200x1440 resolution",
        Alphaspec2: "Processor: NeonChip X1 (5nm)",
        Alphaspec3: "RAM & Storage: 12GB/256GB or 16GB/512GB",
        Alphaspec4: "Camera: 108MP main, 12MP ultrawide, 10MP telephoto",
        Alphaspec5: "Battery: 5000mAh, 65W fast charging",
        Alphaspec6: "Dimensions: 162.3 x 75.4 x 8.1 mm",
        Alphaspec7: "Weight: 210g",
        Alphaspec8: "OS: NeonOS based on Android 14",
        Alphaspec9: "Connectivity: 5G, WiFi 6, Bluetooth 5.3, USB-C",
        Liteprice: "$479",
        Litedescription: "NeonTech Lite is a sleek and powerful budget smartphone featuring a 6.4-inch LCD display, dual cameras, and a reliable 4000mAh battery. Perfect for those who want an affordable and smooth experience.",
        Litespec1: "Display: 6.4-inch LCD, 90Hz, 2400x1080 resolution",
        Litespec2: "Processor: NeonChip Lite (7nm)",
        Litespec3: "RAM & Storage: 6GB/128GB",
        Litespec4: "Camera: 48MP main, 5MP ultrawide",
        Litespec5: "Battery: 4000mAh, 25W fast charging",
        Litespec6: "Dimensions: 158.7 x 74.5 x 7.9 mm",
        Litespec7: "Weight: 180g",
        Litespec8: "OS: NeonOS based on Android 14",
        Litespec9: "Connectivity: 4G, WiFi 5, Bluetooth 5.2, USB-C",
        NeonCaseprice: "$29",
        NeonCasedescription: "NeonCase is a durable and stylish phone case designed to protect your NeonTech device. Made from shockproof materials, it features a non-slip grip and is wireless charging compatible.",
        NeonChargerprice: "$59",
        NeonChargerdescription: "NeonCharger is our fast charger, delivering up to 65W of power, meaning you can charge your NeonTech Alpha to 50% in just 20 minutes. With USB-C and wireless charging support, it’s both versatile and efficient.",
        NeonSoundbarprice: "$239",
        NeonSoundbardescription: "NeonTech Soundbar delivers cinematic-quality sound at home. With Dolby Atmos support, powerful bass-driven speakers, and Bluetooth 5.2, you’ll enjoy an incredible audio experience whether watching movies or listening to music.",
        NeonWatchXprice: "$329",
        NeonWatchXdescription: "NeonWatch X is the ultimate smartwatch for both fitness and everyday use. Featuring a heart rate monitor, support for over 100 sports modes, and a water-resistant design, it keeps you connected and active all day.",
        NeonBandprice: "$79",
        NeonBanddescription: "NeonBand is a smart fitness tracker featuring heart rate monitoring, sleep tracking, and a lightweight design. Perfect for those who want to monitor their health and activity.",
        NeonBudsProprice: "$179",
        NeonBudsProdescription: "NeonBuds Pro are our premium wireless earbuds, featuring active noise cancellation, Hi-Fi sound, and up to 30 hours of battery life. Perfect for work, workouts, or travel.",
        NeonBudsLiteprice: "$89",
        NeonBudsLitedescription: "NeonBuds Lite are an affordable alternative to our Pro earbuds, offering powerful bass, an ergonomic fit, and 10 hours of battery life in a compact design.",
        NeonGlassprice: "$19",
        NeonGlassdescription: "NeonGlass is our high-quality tempered glass screen protector, designed to protect your display from scratches and impacts. It features an oleophobic coating to resist fingerprints and smudges.",
        NeonCaseSpec1: "Material: Shock-resistant TPU and polycarbonate",
        NeonCaseSpec2: "Thickness: 2mm protective edge",
        NeonCaseSpec3: "Features: Impact-resistant, wireless charging compatible",
        NeonChargerSpec1: "Power: 65W fast charging",
        NeonChargerSpec2: "Ports: 1x USB-C, 1x USB-A",
        NeonChargerSpec3: "Wireless Charging: Qi charging support up to 15W",
        NeonChargerSpec4: "Safety: Overcurrent protection, temperature control",
        NeonSoundbarSpec1: "Audio System: 5.1 surround with Dolby Atmos",
        NeonSoundbarSpec2: "Power Output: 120W",
        NeonSoundbarSpec3: "Connectivity: Bluetooth 5.2, HDMI ARC, AUX, Optical",
        NeonSoundbarSpec4: "Dimensions: 950 x 80 x 60 mm",
        NeonWatchXSpec1: "Display: 1.9-inch AMOLED, 410x502 resolution",
        NeonWatchXSpec2: "Battery Life: Up to 10 days",
        NeonWatchXSpec3: "Features: Heart rate monitoring, SpO2, GPS, waterproof (5ATM)",
        NeonBandSpec1: "Display: 1.2-inch OLED",
        NeonBandSpec2: "Battery Life: Up to 14 days",
        NeonBandSpec3: "Features: Step counter, sleep tracking, water-resistant (IP68)",
        NeonBudsProSpec1: "Sound: Hi-Fi with active noise cancellation (ANC)",
        NeonBudsProSpec2: "Battery Life: 30 hours (with charging case)",
        NeonBudsProSpec3: "Connectivity: Bluetooth 5.3",
        NeonBudsLiteSpec1: "Sound: Powerful bass, no ANC",
        NeonBudsLiteSpec2: "Battery Life: 10 hours",
        NeonBudsLiteSpec3: "Connectivity: Bluetooth 5.2",
        NeonGlassSpec1: "Material: 9H tempered glass",
        NeonGlassSpec2: "Thickness: 0.33mm",
        NeonGlassSpec3: "Features: Oleophobic coating, 99% transparency",
        ordernpayment:"Order and payment",
        thxforpayment1:"Thank you very much for your purchase!",
        thxforpayment2:"A receipt and order confirmation with tracking information will be sent via email",
        thxforpayment3:"If you have any further questions, please contact us via the contact form or our support email",


    },
    sv: {
        title: "Välkommen",
        description: "Neontech företag.",
        themetoggle: "",
        home: "Hem",
        products: "Produkter",
        news: "Nyheter",
        support: "Support",
        contact: "Kontakt",
        integrity: "Integritetspolicy",
        about: "Om oss",
        copyright: "Copyright © 2025 NeonTech. Alla rättigheter förbehålls.",
        neontechalphadescription: "Framtidens smartphone – kantlös skärm, revolutionerande kamera.",
        neontechalphadescription2: "Stilren prestanda till ett överkomligt pris.",
        buynow:"Köp nu",
        audioproducts:"NeonTech Premium Ljudprodukter",
        neontechdescription3:"Stilrena och Högkvalitativa ljudprodukter med bästa ljudkvaliten på marknaden",
        neontechextras:"NeonTech produkter",
        neontechdescription4:"För alla dina dagliga behov",
        showproducts:"Visa produkter",
        /* om oss sida */
        abouttitle1:"Lär känna NeonTech – Innovation i varje detalj",
        aboutdescription1:"Välkommen till NeonTech, där vi skapar teknik för framtiden. Vårt mål är att kombinera banbrytande innovation med stilren design, så att du kan uppleva teknik på ett helt nytt sätt.",
        abouttitle2:"Vår historia",
        aboutdescription2:"NeonTech grundades med en vision om att göra teknologi mer intuitiv, kraftfull och estetiskt tilltalande. Från våra första prototyper till dagens flaggskeppsprodukter har vi alltid strävat efter perfektion och prestanda.",
        abouttitle3:"Vår vision & mission",
        aboutdescription3:"Vi tror på en värld där teknik integreras sömlöst i vardagen. Vår mission är att skapa intelligenta, högpresterande och stilrena produkter som lyfter din digitala upplevelse.",
        abouttitle4:"Våra produkter",
        aboutdescription4:"Vi erbjuder premium smartphones, trådlösa hörlurar, smartklockor och tillbehör – alla designade för att möta de högsta kraven på kvalitet, design och funktionalitet.",
        abouttitle5:"Vårt team",
        aboutdescription5:"NeonTech består av ingenjörer, designers och teknikentusiaster som brinner för innovation. Med en passion för modern teknik och framtidens möjligheter utvecklar vi produkter som förändrar sättet vi lever, arbetar och kommunicerar.",
        /* integritetspolicysida */
        integritetstitle1:"Integritetspolicy – Din säkerhet är vår prioritet",
        integritetstitle2:"Vilken information vi samlar in",
        integritetstitle3:"Hur vi använder din information",
        integritetstitle4:"Delning av data",
        integritetstitle5:"Cookies och spårning",
        integritetstitle6:"Dina rättigheter",
        integritetstitle7:"Kontaktinformation",
        integritetsdescription1:"Vi på NeonTech värnar om din integritet och arbetar för att skydda dina personuppgifter. Denna integritetspolicy förklarar vilken information vi samlar in, hur vi använder den och hur vi skyddar dina uppgifter när du använder vår webbplats och våra tjänster.",
        integritetsdescription2:"När du besöker vår webbplats eller använder våra tjänster kan vi samla in följande typer av information:",
        integritetslista1:"Personuppgifter: Namn, e-postadress, telefonnummer (vid kontakt eller köp).",
        integritetslista2:"Teknisk information: IP-adress, webbläsartyp, enhetsinformation.",
        integritetslista3:"Användningsdata: Hur du interagerar med vår webbplats, såsom besökta sidor och klickmönster.",
        integritetsdescription3:"Vi samlar in data för att:",
        integritetslista4:"✔ Förbättra och optimera vår webbplats och tjänster.",
        integritetslista5:"✔ Anpassa din upplevelse och erbjuda relevant innehåll.",
        integritetslista6:"✔ Behandla beställningar och leveranser.",
        integritetslista7:"✔ Kommunicera med dig vid förfrågningar eller kundsupport.",
        integritetsdescription4:"Vi delar inte din information med tredje part, förutom i följande fall:",
        integritetslista8:"Tjänsteleverantörer som hjälper oss med webbplatsens drift (ex. betalningslösningar).",
        integritetslista9:"Juridiska skäl om vi är skyldiga enligt lag att dela viss information.",
        integritetsdescription5:"Vi använder cookies och liknande teknologier för att förbättra din upplevelse. Du kan hantera eller inaktivera cookies via din webbläsares inställningar.",
        integritetsdescription6:"Du har rätt att:",
        integritetslista10:"✔ Begära åtkomst till den information vi har om dig.",
        integritetslista11:"✔ Få dina uppgifter rättade eller raderade.",
        integritetslista12:"✔ Begränsa eller invända mot vår databehandling.",
        integritetsdescription7:"Om du har frågor om vår integritetspolicy, kontakta oss på:",
        /* formulär */
        formcontactus:"Kontakta oss",
        formname:"Namn:",
        formemail:"E-postadress:",
        formsubject:"Ämne:",
        formmessage:"Meddelande:",
        formoption1:"Allmän fråga om NeonTech-produkter",
        formoption2:"Problem med min smartphone",
        formoption3:"Problem med mina hörlurar",
        formoption4:"Problem med min smartklocka",
        formoption5:"Problem med laddningstillbehör",
        formoption6:"Beställnings- eller leveransfråga",
        formoption7:"Övrigt",
        formsubmit:"Skicka",
        integritetskontakt2:"Kontakta Oss",
        /* support */
        support_intro: "Välkommen till NeonTechs supportsida",
        support_intro_text: "Här hittar du lösningar på vanliga problem med våra produkter. Välj din produkt nedan för att få hjälp.",
        phone_not_charging: "1. Min telefon laddar inte, vad ska jag göra?",
        phone_check_charger: "✔ Kontrollera att du använder en original NeonCharge-laddare.",
        phone_try_other_cable: "✔ Testa en annan laddningskabel eller eluttag.",
        phone_clean_port: "✔ Rengör laddningsporten från damm.",
        phone_restart: "✔ Starta om telefonen.",
        phone_not_starting: "2. Telefonen startar inte, vad kan vara fel?",
        phone_force_restart: "✔ Håll in strömbrytaren i 10 sekunder för att göra en tvångsomstart.",
        phone_charge_15min: "✔ Ladda telefonen i minst 15 minuter och försök igen.",
        phone_contact_support: "✔ Om inget fungerar, kontakta supporten.",
        buds_not_connecting: "1. Mina hörlurar ansluter inte till Bluetooth",
        buds_check_bluetooth: "✔ Se till att Bluetooth är aktiverat på din enhet.",
        buds_reset_case: "✔ Lägg tillbaka hörlurarna i fodralet och ta ut dem igen.",
        buds_factory_reset: "✔ Återställ hörlurarna genom att hålla inne knappen på fodralet i 10 sekunder.",
        buds_one_not_working: "2. Ena hörluren fungerar inte",
        buds_check_charge: "✔ Kontrollera att hörlurarna är fulladdade.",
        buds_reconnect: "✔ Koppla från och para om hörlurarna via Bluetooth.",
        buds_clean_contacts: "✔ Rengör laddningskontakterna i fodralet.",
        watch_not_syncing: "1. Min klocka synkar inte med telefonen",
        watch_check_bluetooth: "✔ Kontrollera att Bluetooth är på.",
        watch_restart: "✔ Starta om både klockan och telefonen.",
        watch_reinstall_app: "✔ Installera om NeonSync-appen och prova igen.",
        watch_battery_drain: "2. Batteriet laddas ur snabbt",
        watch_disable_features: "✔ Stäng av onödiga funktioner som ständigt aktiv skärm.",
        watch_update_software: "✔ Se till att klockan kör den senaste programvaran.",
        watch_lower_brightness: "✔ Minska ljusstyrkan på skärmen.",
        charge_not_working: "1. Min trådlösa laddare fungerar inte",
        charge_enable_wireless: "✔ Se till att telefonen har trådlös laddning aktiverad.",
        charge_check_power: "✔ Kontrollera att laddaren är ansluten till ett fungerande eluttag.",
        charge_adjust_position: "✔ Justera telefonens position på laddaren.",
        need_more_help: "Behöver du ytterligare hjälp?",
        contact_support: "Om ditt problem inte finns här, kontakta oss på support@neontech.com, besök vårt hjälpcenter eller kontakta oss via kontaktformuläret.",
        support_intro_button: "Introduktion ↴",
        support_alpha_button: "NeonTech Alpha – Vanliga frågor & lösningar ↴",
        support_buds_button: "NeonBuds Pro – Vanliga frågor & lösningar ↴",
        support_watch_button: "NeonWatch X – Vanliga frågor & lösningar ↴",
        support_charge_button: "NeonCharge – Vanliga frågor & lösningar ↴",
        productpageproducts:"Produkter",
        telephones:"Telefoner",
        soundproducts:"Ljudprodukter",
        clocks:"Klockor",
        accessories:"Tillbehör",
        findmoreproducts:"Hitta fler produkter!",
        allproducts:"Alla produkter",
        Alphatitle1:"Specifikationer:",
        ordernow:"Beställ nu",
        Alphaprice: "9 499 SEK",
        Alphadescription: "NeonTech Alpha är vår mest kraftfulla smartphone hittills. Med en 6,8-tums AMOLED 120Hz-skärm, AI-driven kamera och NeonChip X1-processor får du en blixtsnabb och smidig upplevelse. Batteriet på 5000mAh säkerställer att du håller dig ansluten hela dagen.",
        Alphaspec1: "Skärm: 6,8-tums AMOLED, 120Hz, 3200x1440 upplösning",
        Alphaspec2: "Processor: NeonChip X1 (5nm)",
        Alphaspec3: "RAM & Lagring: 12GB/256GB eller 16GB/512GB",
        Alphaspec4: "Kamera: 108MP huvudkamera, 12MP ultravid, 10MP telefoto",
        Alphaspec5: "Batteri: 5000mAh, 65W snabbladdning",
        Alphaspec6: "Mått: 162.3 x 75.4 x 8.1 mm",
        Alphaspec7: "Vikt: 210g",
        Alphaspec8: "Operativsystem: NeonOS baserat på Android 14",
        Alphaspec9: "Anslutning: 5G, WiFi 6, Bluetooth 5.3, USB-C",
        Liteprice: "4 999 SEK",
        Litedescription: "NeonTech Lite är en stilren och kraftfull budgetsmartphone med en 6,4-tums LCD-skärm, dubbla kameror och ett effektivt 4000mAh-batteri. Perfekt för dig som vill ha en prisvärd och smidig mobil.",
        Litespec1: "Skärm: 6,4-tums LCD, 90Hz, 2400x1080 upplösning",
        Litespec2: "Processor: NeonChip Lite (7nm)",
        Litespec3: "RAM & Lagring: 6GB/128GB",
        Litespec4: "Kamera: 48MP huvudkamera, 5MP ultravid",
        Litespec5: "Batteri: 4000mAh, 25W snabbladdning",
        Litespec6: "Mått: 158.7 x 74.5 x 7.9 mm",
        Litespec7: "Vikt: 180g",
        Litespec8: "Operativsystem: NeonOS baserat på Android 14",
        Litespec9: "Anslutning: 4G, WiFi 5, Bluetooth 5.2, USB-C",
        NeonCaseprice: "299 SEK",
        NeonCasedescription: "NeonCase är ett robust och elegant mobilskal, designat för att skydda din NeonTech-mobil. Det är tillverkat av stötsäkert material, har en greppvänlig yta, och är kompatibelt med trådlös laddning.",
        NeonChargerprice: "599 SEK",
        NeonChargerdescription: "NeonCharger är vår snabbladdare som ger upp till 65W kraft, vilket innebär att du kan ladda din NeonTech Alpha till 50% på bara 20 minuter. Stöd för USB-C och trådlös laddning gör den mångsidig och effektiv.",
        NeonSoundbarprice: "2 499 SEK",
        NeonSoundbardescription: "NeonTech Soundbar ger dig biokvalitet på ljudet hemma. Med Dolby Atmos-stöd, kraftfulla basdrivna högtalare och Bluetooth 5.2, får du en fantastisk ljudupplevelse oavsett om du ser på film eller lyssnar på musik.",
        NeonWatchXprice: "3 499 SEK",
        NeonWatchXdescription: "NeonWatch X är den ultimata smartklockan för både träning och vardag. Med hjärtfrekvensmätare, stöd för över 100 sportlägen och vattentålig design, håller den dig uppkopplad och aktiv hela dagen.",
        NeonBandprice: "899 SEK",
        NeonBanddescription: "NeonBand är ett smart träningsarmband med pulsmätning, sömnövervakning, och en lätt och smidig design. Perfekt för dig som vill hålla koll på din hälsa och aktivitet.",
        NeonBudsProprice: "1 999 SEK",
        NeonBudsProdescription: "NeonBuds Pro är våra premium trådlösa hörlurar med aktiv brusreducering, Hi-Fi-ljud och upp till 30 timmars batteritid. Perfekt för arbete, träning eller resor.",
        NeonBudsLiteprice: "999 SEK",
        NeonBudsLitedescription: "NeonBuds Lite är ett prisvärt alternativ till våra Pro-hörlurar, med kraftfull bas, ergonomisk passform och 10 timmars batteritid i en kompakt design.",
        NeonGlassprice: "199 SEK",
        NeonGlassdescription: "NeonGlass är vårt högkvalitativa skärmskydd i härdat glas som skyddar din skärm från repor och stötar. Det har en oleofobisk yta som motverkar fingeravtryck och smuts.",
        NeonCaseSpec1: "Material: Stötsäkert TPU och polykarbonat",
        NeonCaseSpec2: "Tjocklek: 2mm skyddande kant",
        NeonCaseSpec3: "Funktioner: Stöttåligt, kompatibelt med trådlös laddning",
        NeonChargerSpec1: "Effekt: 65W snabbladdning",
        NeonChargerSpec2: "Portar: 1x USB-C, 1x USB-A",
        NeonChargerSpec3: "Trådlös laddning: Stöd för Qi-laddning upp till 15W",
        NeonChargerSpec4: "Skydd: Överströmsskydd, temperaturkontroll",
        NeonSoundbarSpec1: "Ljudsystem: 5.1-surround med Dolby Atmos",
        NeonSoundbarSpec2: "Effekt: 120W",
        NeonSoundbarSpec3: "Anslutning: Bluetooth 5.2, HDMI ARC, AUX, Optical",
        NeonSoundbarSpec4: "Mått: 950 x 80 x 60 mm",
        NeonWatchXSpec1: "Skärm: 1,9-tums AMOLED, 410x502 upplösning",
        NeonWatchXSpec2: "Batteri: Upp till 10 dagars batteritid",
        NeonWatchXSpec3: "Funktioner: Pulsmätare, syremättnad, GPS, vattentät (5ATM)",
        NeonBandSpec1: "Skärm: 1,2-tums OLED",
        NeonBandSpec2: "Batteri: Upp till 14 dagar",
        NeonBandSpec3: "Funktioner: Stegräknare, sömnövervakning, vattentålig (IP68)",
        NeonBudsProSpec1: "Ljud: Hi-Fi med aktiv brusreducering (ANC)",
        NeonBudsProSpec2: "Batteritid: 30 timmar (med laddningsfodral)",
        NeonBudsProSpec3: "Anslutning: Bluetooth 5.3",
        NeonBudsLiteSpec1: "Ljud: Kraftfull bas, ingen ANC",
        NeonBudsLiteSpec2: "Batteritid: 10 timmar",
        NeonBudsLiteSpec3: "Anslutning: Bluetooth 5.2",
        NeonGlassSpec1: "Material: Härdat glas 9H",
        NeonGlassSpec2: "Tjocklek: 0,33mm",
        NeonGlassSpec3: "Funktioner: Oleofobisk beläggning, 99% transparens",
        ordernpayment:"Beställning och betalning",
        thxforpayment1:"Tack så mycket för köpet!",
        thxforpayment2:"Ett kvitto och en orderbekräftelse med spårningsinformation kommer att skickas via e-post",
        thxforpayment3:"Har du någon vidare fråga, vänligen kontakta oss via kontaktformuläret eller vår supportmail",
    }
};

// Byt språk
function switchLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => { //loopar igenom alla element med data-i18n
        const key = element.getAttribute("data-i18n"); //returnan värdet på data-i18n elementet
        if (translations[lang][key]) { //kollar om den finns i translations
            element.textContent = translations[lang][key]; //sätter textkontent till det som står i språk->id
        }
    });

    // spara i localstorage så det funkar mellan sidor
    localStorage.setItem("language", lang);
}

// ladda språket vid start
function loadLanguage() {
    const savedLang = localStorage.getItem("language") || "en";
    languageSelect.value = savedLang;
    switchLanguage(savedLang);
}

// Event listener for language dropdown
languageSelect.addEventListener("change", () => {
    switchLanguage(languageSelect.value);
});

// ljusläge-mörkläge
function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// laddar sparade ljus/mörkläget
function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
}


function menutoggle(menu) {
    menu.classList.toggle("dropdown");

    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("dropdown");
  }


function checkScreenSize() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuHeader = document.querySelector(".menuheader");

    if (window.innerWidth > 1180) {
        dropdownMenu.classList.remove("dropdown");

        menuHeader.classList.remove("dropdown");
    }
}





/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// kollar skärmstorlek vid start och vid resize
window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);


// laddar upp vid sidostart
loadTheme();
loadLanguage();

// när dark mode klickas på
toggleButton.addEventListener("click", toggleDarkMode);
