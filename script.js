const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/ItzKast/MaturiTrener/main/data/';

const schoolSubjectConfig = {
    "Průmyslová škola": {
        "Programování": {
            "Základní pojmy z algoritmizace a programování": "DataProgramovani.csv",
            "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio": "DataVyvojJazyku.csv",
            "C# strukturované příkazy větvení, složený příkaz": "DataCSharpVetveni.csv",
            "C# strukturované příkazy cyklů": "DataCyklu.csv",
            "C# jednoduché datové typy, řetězec; operace": "JednoducheDatove.csv",
            "C# strukturované datové typy (kolekce)": "StrukturovaneDatove.csv",
            "C# práce se soubory a dialogovými okny": "DataDialog.csv",
            "C# Windows Forms Application, grafické ovládací prvky, události": "DataPrvky.csv",
            "C# ladění programu, druhy chyb, ošetřování výjimek": "DataChyby.csv",
            "C# namespace Drawing – nástroje pro programování grafiky": "DataDrawing.csv",
            "C# metody, jmenné prostory": "DataMetody.csv",
            "C# základy OOP": "DataOOP.csv",
            "Souhrnné opakování": null
        },
        "Počítačové sítě": {
            "Topologie sítí": "DataTopologie.csv",
            "Komunikace v síti": "DataKomunikace.csv",
            "Pasivní prvky": "DataPasivni.csv",
            "Aktivní prvky": "DataAktivni.csv",
            "Návrh a realizace sítě": "DataNavrh.csv",
            "Bezdrátové technologie": "DataBezdratove.csv",
            "Připojení počítače k lokální síti": "DataLokalni.csv",
            "Připojení k internetu": "DataInternet.csv",
            "Souhrnné opakování": null
        },
        "Elektronika": {
            "Základy digitální techniky": "DataZaklady.csv",
            "Integrované polovodičové prvky": "DataPolovodice.csv",
            "Řídící jednotka CM-530": "DataCM530.csv",
            "Mikroprocesor Arduino": "DataArduino.csv",
            "Programování mikroprocesoru Arduino": "DataArduinoProgramovani.csv",
            "Počítač": "DataPocitac.csv",
            "Procesor": "DataProcesor.csv",
            "Základní deska": "DataZakladniDeska.csv",
            "Polovodičové paměti": "DataPameti.csv",
            "Zařízení pro uložení dat": "DataDisky.csv",
            "Grafický a zobrazovací systém": "DataGrafika.csv",
            "Digitalizace obrazu a tisk": "DataTisk.csv",
            "Napájecí zdroje": "DataZdroje.csv",
            "Diferenciální parametry tranzistoru": "DataTranzistor.csv",
            "Operační zesilovače": "DataOperacni.csv",
            "Přenos informací": "DataInformace.csv",
            "Zesilovače": "DataZesilovace.csv",
            "Frekvenční filtr typu dolní propust": "DataFFDolni.csv",
            "Frekvenční filtr typu horní propust": "DataFFHorni.csv",
            "Sériový a paralelní obvod RL, RC": "DataRLC.csv",
            "Souhrnné opakování": null
        },
        "Automatizace": {
            "Regulační obvody": "otazky_tema_1.csv",
            "Technické prostředky": "otazky_tema_2.csv",
            "Logická zařízení": "otazky_tema_3.csv",
            "Druhy výkresů v AT": "otazky_tema_4.csv",
            "Elektrické rozvody v průmyslu": "otazky_tema_5.csv",
            "Regulační pohony a orgány": "otazky_tema_6.csv",
            "Programovatelný automat": "otazky_tema_7.csv",
            "Relé impulzní": "otazky_tema_8.csv",
            "Převodníky a přizpůsobovací členy": "otazky_tema_9.csv",
            "Výstavba regulačního obvodu": "otazky_tema_10.csv",
            "Malé řídící systémy": "otazky_tema_11.csv",
            "Prvky používané v obvodech AT": "otazky_tema_12.csv",
            "Senzory - rozdělení": "otazky_tema_13.csv",
            "Analogové a binární senzory": "otazky_tema_14.csv",
            "PLC": "otazky_tema_15.csv",
            "Sekvenční logické obvody": "otazky_tema_16.csv",
            "Měření neelektrických veličin": "otazky_tema_17.csv",
            "Typy regulačních obvodů": "otazky_tema_18.csv",
            "Roboty a jejich aplikace": "otazky_tema_19.csv",
            "Grafické znázornění stavů": "otazky_tema_20.csv",
            "Souhrnné opakování": null
        },
        "Čeština": {
            "William Shakespeare - Romeo a Julie": "cestina_william_shakespeare_romeo_a_julie.json",
            "William Shakespeare - Hamlet": "cestina_william_shakespeare_hamlet.json",
            "Molière - Lakomec": "cestina_moliere_lakomec.json",
            "Alexandr Sergejevič Puškin - Evžen Oněgin": "cestina_Puskin_Evžen_Oněgin.json",
            "Honoré de Balzac - Otec Goriot": "cestina_balzak_otec_goriot.json",
            "Nikolaj Vasiljevič Gogol - Revizor": "cestina_Gogol_Revizor.json",
            "Edgar Allan Poe - Jáma a kyvadlo": "cestina_Poe_Jáma_a_kyvadlo.json",
            "Oscar Wilde - Obraz Doriana Graye": "cestina_Wilde_Obraz_Doriana_Graye.json",
            "Gustave Flaubert - Paní Bovaryová": "cestina_Flaubert_Paní_Bovaryová.json",
            "Guy de Maupassant - Kulička": "cestina_Maupassant_Kulička.json",
            "Émile Zola - Zabiják": "cestina_Zola_Zabiják.json",
            "Karel Hynek Mácha - Máj": "cestina_Mácha_Máj.json",
            "Karel Jaromír Erben - Kytice": "cestina_Erben_Kytice.json",
            "Alois a Vilém Mrštíkové - Maryša": "cestina_Mrštíkové_Maryša.json",
            "Romain Rolland - Petr a Lucie": "cestina_Rolland_Petr_a_Lucie.json",
            "Erich Maria Remarque - Na západní frontě klid": "cestina_Remarque_Na_západní_frontě_klid.json",
            "Erich Maria Remarque - Tři kamarádi": "cestina_Remarque_Tři_kamarádi.json",
            "Antoine de Saint-Exupéry - Malý princ": "cestina_Saint-Exupéry_Malý_princ.json",
            "Ernest Hemingway - Stařec a moře": "cestina_Hemingway_Stařec_a_moře.json",
            "Jack Kerouac - Na cestě": "cestina_Kerouac_Na_cestě.json",
            "John Steinbeck - O myších a lidech": "cestina_Steinbeck_O_myších_a_lidech.json",
            "George Orwell - Farma zvířat": "cestina_Orwell_Farma_zvířat.json",
            "Ken Kesey - Vyhoďme ho z kola ven": "cestina_Kesey_Vyhoďme_ho_z_kola_ven.json",
            "J.R.R. Tolkien - Hobit": "cestina_Tolkien_Hobit.json",
            "Francis Scott Fitzgerald - Velký Gatsby": "cestina_Fitzgerald_Velký_Gatsby.json",
            "Franz Kafka - Proměna": "cestina_Kafka_Proměna.json",
            "Jiří Wolker - Těžká hodina": "cestina_Wolker_Těžká_hodina.json",
            "Viktor Dyk - Krysař": "cestina_Dyk_Krysař.json",
            "Ota Pavel - Plná bedna šampaňského": "cestina_Pavel_Plná_bedna_šampaňského.json",
            "Jan Otčenášek - Romeo, Julie a tma": "cestina_Otčenášek_Romeo_Julie_a_tma.json",
            "Arnošt Lustig - Modlitba pro Kateřinu Horovitzovou": "cestina_Lustig_Modlitba_pro_Kateřinu_Horovitzovou.json",
            "Karel Čapek - Bílá nemoc": "cestina_Čapek_Bílá_nemoc.json",
            "Karel Čapek - R.U.R.": "cestina_karel_capek_rur.json",
            "Karel Čapek - Válka s mloky": "cestina_Čapek_Válka_s_mloky.json",
            "Karel Kryl - Kníška": "cestina_Kryl_Kníška.json",
            "Josef Škvorecký - Zbabělci": "cestina_Škvorecký_Zbabělci.json",
            "Ladislav Fuks - Spalovač mrtvol": "cestina_Fuks_Spalovač_mrtvol.json",
            "Bohumil Hrabal - Ostře sledované vlaky": "cestina_Hrabal_Ostře_sledované_vlaky.json"
        },
        "Angličtina": {
            "Zatím žádná témata": null
        }
    },
    "Gymnázium": {
        "Biologie": {
            "Prokaryotní organismy a viry": "DataProkaryotniOrganismyAViry.csv",
            "Tělesné tekutiny a cévní soustava člověka": "DataTekutinyACevniSoustava.csv",
            "Buněčné dýchání a fotosyntéza": "DataBunecneDychaniAFotosynteza.csv",
            "Nervová soustava člověka a nervové řízení organismů": "DataNervovaSoustava.csv",
            "Hormonální regulace člověka a organismů": "DataHormonalniRegulace.csv",
            "Semenné rostliny": "DataSemenneRostliny.csv",
            "Ploštěnci, hlísti, měkkýši": "DataPlostenciHlistiMekkysi.csv",
            "Ekologie a ochrana přírody": "DataEkologieAOchranaPrirody.csv",
            "Strunatci a ektotermní obratlovci": "DataStrunatciAEktotermniObratlovci.csv",
            "Opěrná soustava člověka": "DataOpernaSoustava.csv",
            "Pohybová soustava člověka": "DataPohybovaSoustava.csv",
            "Smyslová soustava člověka": "DataSmyslovaSoustava.csv",
            "Rostlinná pletiva a rostlinné orgány": "DataRostlinnaPletivaARostlinneOrgany.csv",
            "Růst a rozmnožování rostlin": "DataRustARozmnozovaniRostlin.csv",
            "Prvoci a diblastica": "DataPrvociADiblastica.csv",
            "Kroužkovci a členovci": "DataKrouzkovciAClenovci.csv",
            "Trávicí soustava člověka a metabolismus": "DataTraviciSoustavaAMetabolismus.csv",
            "Dědičnost a genetická proměnlivost": "DataDedicnostAGenetickaPromenlivost.csv",
            "Stélkaté rostliny a Kapraďorosty": "DataStelkateRostlinyAKapradorosty.csv",
            "Původ a vývoj člověka": "DataPuvodAVyvojCloveka.csv",
            "Eukaryotní buňka rostlin a živočichů": "DataEukaryotniBunka.csv",
            "Ptáci a savci": "DataPtaciASavci.csv",
            "Vzdušnicovci a ostnokožci": "DataVzdusnicovciAOstnokozci.csv",
            "Molekulární základy dědičnosti": "DataMolekularniZakladyDedicnosti.csv",
            "Systém a evoluce hub (Fungi)": "DataSystemAEvoluceHub.csv",
            "Stavba a činnost rozmnožovací soustavy člověka": "DataRozmnozovaciSoustava.csv",
            "Vylučovací soustava člověka a kůže": "DataVylucovaciSoustavaAKuze.csv",
            "Dědičnost mnohobuněčného organismu": "DataDedicnostMnohobunecnehoOrganismu.csv",
            "Stavba a funkce dýchací soustavy člověka a živočichů": "DataDychaciSoustava.csv",
            "Ekosystém a potravní strategie": "DataEkosystemAPotravniStrategie.csv",
            "Souhrnné opakování": null
        },
        "Fyzika": {
            "Kinematika hmotného bodu. Základní charakteristika pohybů. Aplikace": "DataKinematika.csv",
            "Dynamika hmotného bodu a soustavy bodů": "DataDynamika.csv",
            "Mechanická práce a energie. Mechanika tuhého tělesa": "DataPraceAEnergie.csv",
            "Gravitační pole – charakteristika, zákony, veličiny. Pohyby v gravitačním poli": "DataGravitacniPole.csv",
            "Mechanika kapalin a plynů – základní zákonitosti a praktické využití": "DataMechanikaKapalinAPlynu.csv",
            "Základní poznatky molekulové fyziky a termodynamiky": "DataMolekulovaFyzika.csv",
            "Práce plynu, kruhový děj, druhý termodynamický zákon, tepelné motory": "DataTepelneMotory.csv",
            "Struktura a vlastnosti pevných látek, deformace a teplotní roztažnost": "DataPevneLatkyARoztaznost.csv",
            "Struktura a vlastnosti kapalin": "DataKapaliny.csv",
            "Mechanické kmity, mechanické vlnění, základní charakteristika": "DataKmitaniAVlneni.csv",
            "Elektrický náboj a elektrické pole, veličiny, zákonitosti, kapacita": "DataElektrickyNabojAEPole.csv",
            "Elektrický proud v kovech, základní zákony a jejich aplikace": "DataElektrickyProudVKovech.csv",
            "Elektrický proud v polovodičích. Základy elektroniky": "DataPolovodiceAElektronika.csv",
            "Elektrický proud v elektrolytech a v plynech, podstata, zákony a praktické využití": "DataElektrolytyAPlyny.csv",
            "Stacionární magnetické pole, střídavý proud": "DataMagnetickePoleAStridavyProud.csv",
            "Elektromagnetické kmity a vlnění, oscilační obvod, sdělovací technika": "DataElektromagnetickeKmityAVlneni.csv",
            "Vlnová povaha světla, šíření, odraz, lom, disperze, interference, ohyb, polarizace": "DataVlnovaPovahaSvetla.csv",
            "Zobrazování optickými soustavami, paprsková optika, optické přístroje": "DataOptickeSoustavy.csv",
            "Speciální teorie relativity": "DataRelativita.csv",
            "Kvantová fyzika, fyzika atomového obalu a jaderná fyzika": "DataKvantovaFyzika.csv",
            "Souhrnné opakování": null
        },
        "Chemie": {
            "Klasifikace látek": "DataKlasifikaceLatek.csv",
            "Názvosloví anorganika a živé soustavy": "DataNazvosloviAnorganikaAZiveSoustavy.csv",
            "Stavba atomu a radioaktivita": "DataStavbaAtomuARadioaktivita.csv",
            "Orbitaly a PSP": "DataOrbitalyAPSP.csv",
            "Chemická vazba a rovnice": "DataChemickeVazbyARovnice.csv",
            "Chemické výpočty; atom uhlík": "DataChemickeVypoctyAUhlik.csv",
            "Termochemie, kinetika, rovnováha, enzymy": "DataTermochemieKinetikaRovnovahaEnzymy.csv",
            "Vodík, kyslík; alkoholy, fenoly": "DataVodikKyslikAlkoholyFenoly.csv",
            "Voda, vzduch; lipidy, detergenty, izoprenoidy": "DataVodaVzduchLipidyDetergentyIzoprenoidy.csv",
            "Roztoky; kyseliny, zásady, karboxyly": "DataRoztokyKyselinyZasadyKarboxyly.csv",
            "Halogeny; halogenderiváty uhlovodíků": "DataHalogenyAHalogenderivaty.csv",
            "Chalkogeny; bílkoviny": "DataChalkogenyABilkoviny.csv",
            "Skupina dusíku; dusíkaté deriváty uhlovodíků": "DataSkupinaDusikuADusikateDerivaty.csv",
            "Prvky III. A skupiny; léčiva, barviva, pesticidy": "DataIIIASkupinaLecivaBarvivaPesticidy.csv",
            "Prvky IV. A skupiny; heterocykly": "DataIVASkupinaAHeterocykly.csv",
            "Prvky I. A skupiny – alkalické kovy; fotosyntéza": "DataAlkalickeKovyAFotosynteza.csv",
            "Nukleové kyseliny; proteosyntéza, aminokyseliny": "DataNukleoveKyselinyProteosyntezaAminokyseliny.csv",
            "Prvky II. A skupiny; alkaloidy": "DataIIASkupinaAAlkaloidy.csv",
            "Koordinační sloučeniny; vitamíny": "DataKoordinacniSlouceninyAVitaminy.csv",
            "Syntetické makromolekulární látky; zdroje uhlovodíků": "DataMakromolekulyAZdrojeUhlovodiku.csv",
            "Monosacharidy; triáda železa": "DataMonosacharidyATriadaZeleza.csv",
            "Oligosacharidy a polysacharidy; chrom, mangan": "DataOligosacharidyPolysacharidyChromMangan.csv",
            "Klasifikace organických sloučenin a názvosloví; aldehydy a ketony": "DataOrganickeSlouceninyAldehydyKetony.csv",
            "Nearomatické uhlovodíky; měď a zinek": "DataNearomatickeUhlovodikyMecZinek.csv",
            "Deriváty karboxylových kyselin; areny": "DataDerivatyKarboxylovychKyselinAreny.csv",
            "Souhrnné opakování": null
        },
        "Dějepis": {
            "Pravěká společnost": "DataPravekaSpolecnost.csv",
            "Starověk – východní despocie": "DataVychodniDespocie.csv",
            "Starověk – dějiny Řecka": "DataRecko.csv",
            "Starověk – dějiny Říma": "DataRim.csv",
            "Vznik raně středověkých říší": "DataRaneStredovekeRise.csv",
            "První slovanské celky a státní útvary na našem území": "DataSlovaneACeskeUzemi.csv",
            "Rozvinutý feudalismus – vznik západoevropských monarchií": "DataFeudalismusAZapadniMonarchie.csv",
            "Český stát za Přemyslovců": "DataPremyslovci.csv",
            "Český stát za Lucemburků": "DataLucemburkove.csv",
            "Husitské hnutí – předpoklady, příčiny, průběh, důsledky": "DataHusitskeHnuti.csv",
            "Velké zeměpisné objevy v 15. a 16. století, mimoevropské civilizace": "DataZemepisneObjevy.csv",
            "Humanismus, renesance a protestantismus, náboženské války": "DataRenesanceAReformace.csv",
            "České země za vlády Jiřího z Poděbrad a Jagellonců": "DataPoděbradJagellonci.csv",
            "Český stát za prvních Habsburků, stavovské povstání a jeho důsledky": "DataStavovskePovstani.csv",
            "Třicetiletá válka a mezinárodní vztahy v Evropě do roku 1715": "DataTricetiletaValka.csv",
            "První buržoazní revoluce – Nizozemí, Anglie, USA": "DataBurzoazniRevoluce.csv",
            "Velká francouzská revoluce a napoleonské války, Vídeňský kongres": "DataFrancouzskaRevoluce.csv",
            "Osvícenství a osvícenský absolutismus, národní obrození": "DataOsviceniANarodniObrozeni.csv",
            "Evropa po Vídeňském kongresu, průmyslová revoluce, revoluce roku 1848": "DataPrumyslovaRevoluce1848.csv",
            "Habsburská monarchie v letech 1849–1900, východní otázka": "DataHabsburskaMonarchie.csv",
            "Svět ve druhé polovině 19. stol., sjednocení Itálie a Německa, občanská válka v USA, počátek 20. stol.": "DataSvet19stoleti.csv",
            "První světová válka": "DataPrvniSvetovaValka.csv",
            "Svět mezi světovými válkami – velmoci a mezinárodní vztahy": "DataMezivalecneObdobi.csv",
            "Vznik první Československé republiky – charakteristika, rozbití, okupace, odboj": "DataPrvniRepublika.csv",
            "Druhá světová válka": "DataDruhaSvetovaValka.csv",
            "Československo po druhé světové válce do roku 1989": "DataCeskoslovenskoPo1945.csv",
            "Studená válka – svět po druhé světové válce do roku 1989": "DataStudenaValka.csv",
            "Současný svět – rozpad Československa, mezinárodní vztahy, dekolonizace": "DataSoucasnySvet.csv",
            "Souhrnné opakování": null
        },
        "Informační a výpočetní technika": {
            "Informace, informatika, základní pojmy": "DataInformaceInformatika.csv",
            "Úprava dokumentů (typografie, citace, normy)": "DataUpravaDokumentu.csv",
            "Informační etika a autorská práva": "DataEtikaAutorskaPrava.csv",
            "Bezpečný internet a hygiena práce": "DataBezpecnyInternet.csv",
            "Počítačové sítě LAN": "DataSiteLAN.csv",
            "Počítačové sítě WAN, Internet": "DataSiteWANInternet.csv",
            "Webové prezentace, HTML": "DataWebovePrezentace.csv",
            "Hardware – základní struktura": "DataHardwareZaklad.csv",
            "Hardware – periferní zařízení": "DataHardwarePeriferie.csv",
            "Software, operační systémy, licence": "DataSoftwareOS.csv",
            "Textové editory, MS Word": "DataTextoveEditory.csv",
            "Tabulkové editory, MS Excel": "DataTabulkoveEditory.csv",
            "Prezentace informací, MS PowerPoint": "DataPrezentacePowerPoint.csv",
            "Počítačová grafika": "DataPocitacovaGrafika.csv",
            "Multimédia – zvuk a video": "DataMultimediaZvukVideo.csv",
            "Zabezpečení dat, kryptologie": "DataZabezpeceniKryptologie.csv",
            "Historie výpočetní techniky": "DataHistoriePocitacu.csv",
            "Moderní technologie, komunikace": "DataModerniTechnologie.csv",
            "Uchování informací – paměťová média": "DataUchovaniInformaci.csv",
            "Algoritmizace – základní pojmy": "DataAlgoritmizaceZaklady.csv",
            "Algoritmizace – zápis kódu": "DataAlgoritmizaceKod.csv",
            "Souhrnné opakování": null
        },
        "Základy společenských věd": {
            "Vznik a význam psychologie": "DataPsychologieVznikAVyznam.csv",
            "Psychické jevy a psychologie činnosti": "DataPsychickeJevyAPsychologieCinnosti.csv",
            "Psychologie osobnosti": "DataPsychologieOsobnosti.csv",
            "Duševní zdraví": "DataDusevniZdravi.csv",
            "Sociologie": "DataSociologie.csv",
            "Sociální interakce, komunikace, sociální útvary": "DataSocialniInterakceAUtvary.csv",
            "Kultura a média": "DataKulturaAMedia.csv",
            "Politologie a stát": "DataPolitologieAStat.csv",
            "Demokracie a nedemokratické režimy": "DataDemokracieANedemokratickeRezimy.csv",
            "Politický systém v ČR": "DataPolitickySystemVCR.csv",
            "Politické ideologie a lidská práva": "DataPolitickeIdeologieALidskaPrava.csv",
            "Mezinárodní vztahy a globalizace": "DataMezinarodniVztahyAGlobalizace.csv",
            "Mezinárodní organizace": "DataMezinarodniOrganizace.csv",
            "Právní systém a základní pojmy práva": "DataPravoASystem.csv",
            "Soukromé právo": "DataSoukromePravo.csv",
            "Veřejné právo – trestní": "DataVerejnePravoTrestni.csv",
            "Pracovní právo": "DataPracovniPravo.csv",
            "Ekonomie a tržní ekonomika": "DataEkonomieATrzniEkonomika.csv",
            "Národní hospodářství": "DataNarodniHospodarstvi.csv",
            "Osobní finance": "DataOsobniFinance.csv",
            "Víra a náboženství, východní filosofie": "DataViraANabozenstvi.csv",
            "Filosofie a etika": "DataFilosofieAEtika.csv",
            "Antická filosofie": "DataAntickaFilosofie.csv",
            "Monoteistická náboženství": "DataMonoteistickaNabozenstvi.csv",
            "Renesanční filosofie, reformace, novověká filosofie, osvícenství": "DataRenesanceOsviceni.csv",
            "Německé osvícenství a filosofové 19. století": "DataNemeckeOsviceniAFilosofove19stoleti.csv",
            "Filosofie 20. a 21. století, postmodernismus": "DataFilosofie20a21stoleti.csv",
            "Česká filosofie": "DataCeskaFilosofie.csv",
            "Souhrnné opakování": null
        },
        "Čeština": {
            "William Shakespeare - Romeo a Julie": "cestina_william_shakespeare_romeo_a_julie.json",
            "Molière - Lakomec": "cestina_moliere_lakomec.json",
            "Alexandr Sergejevič Puškin - Evžen Oněgin": "cestina_Puskin_Evžen_Oněgin.json",
            "Honoré de Balzac - Otec Goriot": "cestina_balzak_otec_goriot.json",
            "Nikolaj Vasiljevič Gogol - Revizor": "cestina_Gogol_Revizor.json",
            "Edgar Allan Poe - Jáma a kyvadlo": "cestina_Poe_Jáma_a_kyvadlo.json",
            "Oscar Wilde - Obraz Doriana Graye": "cestina_Wilde_Obraz_Doriana_Graye.json",
            "Guy de Maupassant - Kulička": "cestina_Maupassant_Kulička.json",
            "Émile Zola - Zabiják": "cestina_Zola_Zabiják.json",
            "Karel Hynek Mácha - Máj": "cestina_Mácha_Máj.json",
            "Karel Jaromír Erben - Kytice": "cestina_Erben_Kytice.json",
            "Alois a Vilém Mrštíkové - Maryša": "cestina_Mrštíkové_Maryša.json",
            "Romain Rolland - Petr a Lucie": "cestina_Rolland_Petr_a_Lucie.json",
            "Erich Maria Remarque - Na západní frontě klid": "cestina_Remarque_Na_západní_frontě_klid.json",
            "Erich Maria Remarque - Tři kamarádi": "cestina_Remarque_Tři_kamarádi.json",
            "Antoine de Saint-Exupéry - Malý princ": "cestina_Saint-Exupéry_Malý_princ.json",
            "Ernest Hemingway - Stařec a moře": "cestina_Hemingway_Stařec_a_moře.json",
            "Jack Kerouac - Na cestě": "cestina_Kerouac_Na_cestě.json",
            "John Steinbeck - O myších a lidech": "cestina_Steinbeck_O_myších_a_lidech.json",
            "George Orwell - Farma zvířat": "cestina_Orwell_Farma_zvířat.json",
            "Ken Kesey - Vyhoďme ho z kola ven": "cestina_Kesey_Vyhoďme_ho_z_kola_ven.json",
            "J.R.R. Tolkien - Hobit": "cestina_Tolkien_Hobit.json",
            "Francis Scott Fitzgerald - Velký Gatsby": "cestina_Fitzgerald_Velký_Gatsby.json",
            "Franz Kafka - Proměna": "cestina_Kafka_Proměna.json",
            "Jiří Wolker - Těžká hodina": "cestina_Wolker_Těžká_hodina.json",
            "Viktor Dyk - Krysař": "cestina_Dyk_Krysař.json",
            "Ota Pavel - Plná bedna šampaňského": "cestina_Pavel_Plná_bedna_šampaňského.json",
            "Jan Otčenášek - Romeo, Julie a tma": "cestina_Otčenášek_Romeo_Julie_a_tma.json",
            "Arnošt Lustig - Modlitba pro Kateřinu Horovitzovou": "cestina_Lustig_Modlitba_pro_Kateřinu_Horovitzovou.json",
            "Karel Čapek - Bílá nemoc": "cestina_Čapek_Bílá_nemoc.json",
            "Karel Čapek - R.U.R.": "cestina_karel_capek_rur.json",
            "Karel Čapek - Válka s mloky": "cestina_Čapek_Válka_s_mloky.json",
            "Karel Kryl - Kníška": "cestina_Kryl_Kníška.json",
            "Josef Škvorecký - Zbabělci": "cestina_Škvorecký_Zbabělci.json",
            "Ladislav Fuks - Spalovač mrtvol": "cestina_Fuks_Spalovač_mrtvol.json",
            "Bohumil Hrabal - Ostře sledované vlaky": "cestina_Hrabal_Ostře_sledované_vlaky.json"
        },
        "Angličtina": {
            "Education": "education_questions.json",
            "Culture": "culture_questions.json",
            "Food and drink": "food_drink_questions.json",
            "Sport": "sport_questions.json",
            "Science": "science_questions.json",
            "Living with my family, friends": null,
            "Daily routine and free time": null,
            "The Czech Republic, my town": "czech_republic_questions.json",
            "Holidays and festivals": "holidays_festivals_questions.json",
            "Global problems": "global_problems_questions.json",
            "Living in Europe": "living_in_europe_questions.json",
            "Work and jobs": null,
            "Great Britain": "great_britain_questions.json",
            "The USA and Canada": "usa_canada_questions.json",
            "Australia and New Zealand": "australia_nz_questions.json",
            "British literature": "british_literature_questions.json",
            "American literature": "american_literature_questions.json",
            "Protection of the environment and seasons of the year": "environment_seasons_questions.json",
            "Mass Media": "mass_media_questions.json",
            "Health and body care": "health_body_care_questions.json"
        }

    }
};
// --- Data Structure for Questions ---
let data = {}; // Start with an empty object

for (const schoolType in schoolSubjectConfig) {
    if (schoolSubjectConfig.hasOwnProperty(schoolType)) {
        const subjectsInSchool = schoolSubjectConfig[schoolType];
        for (const subjectName in subjectsInSchool) {
            if (subjectsInSchool.hasOwnProperty(subjectName)) {
                if (!data.hasOwnProperty(subjectName)) {
                    data[subjectName] = {}; // Create the subject entry if it's the first time we see it
                    console.log(`Initializing subject in flat data: ${subjectName}`);
                }
                const topicsInSubject = subjectsInSchool[subjectName];

                // Loop through TOPICS within the subject
                for (const topicName in topicsInSubject) {
                    if (topicsInSubject.hasOwnProperty(topicName)) {
                        if (!data[subjectName].hasOwnProperty(topicName)) {
                            const filename = topicsInSubject[topicName]; // Get filename from config
                            // Initialize based on filename or default
                            if (filename && filename.toLowerCase().endsWith('.json')) {
                                data[subjectName][topicName] = null; // Placeholder for JSON
                            } else {
                                // Default to array for CSV, null filename (summary), or missing file
                                data[subjectName][topicName] = [];
                            }
                            console.log(`Initializing topic in flat data: ${subjectName} - ${topicName}`);
                        }
                    }
                }
            }
        }
    }
}

// --- Achievement Definitions ---
const achievementLevels = {
    xpCollector: {
        name: "XP sběratel 🏆",
        description: "Získej celkem {value} XP.", // {value} will be replaced with the next level's XP threshold
        levels: [100, 250, 500, 1000, 2500, 5000, 10000, 20000, 50000, 100000],
        unit: "XP"
    },
    unstoppable: {
        name: "Nezastavitelný 🔥",
        description: "Dokonči úspěšně test ({value}+ dní) v řadě.", // {value} is the next streak target
        levels: [3, 7, 14, 30, 50, 75, 100, 150, 200, 365],
        unit: "dní"
    },
    flawless: {
        name: "Bezchybník 💯",
        description: "Dokonči {value} testů bez jediné chyby.", // {value} is the next flawless test target
        levels: [5, 10, 20, 50, 100, 200, 350, 500, 750, 1000],
        unit: "testů"
    },
    winningStreak: {
        name: "Vítězná série 🥇",
        description: "Dokonči {value} testů bez chyby v řadě za sebou.", // {value} is the next consecutive flawless test target
        levels: [3, 5, 10, 20, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    topicMaster: {
        name: "Znalec témat 📚",
        description: "Dokonči alespoň jeden test z {value} různých okruhů.", // {value} is the next unique topic target
        levels: [2, 5, 10, 15, 20, 25, 30, 35, 40, 50],
        unit: "témat"
    },
    earlyBird: {
        name: "Ranní ptáče 🌅",
        description: "Dokonči {value} testů mezi 5:00 a 8:00 ráno.", // {value} is the next early test target
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    nightOwl: {
        name: "Večerní sova 🌙",
        description: "Dokonči {value} testů mezi 21:00 a 1:00 v noci.", // {value} is the next late test target
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    marathoner: {
        name: "Maratonec 🏃",
        description: "Dokonči {value} testů během jednoho dne.", // {value} is the next daily test target
        levels: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150],
        unit: "testů"
    }
};
const dailyQuestTemplates = [
    { type: "complete_tests", target: 1, description: "Dokonči 1 test" },
    { type: "complete_tests", target: 2, description: "Dokonči 2 testy" },
    { type: "complete_tests", target: 3, description: "Dokonči 3 testy" },
    { type: "flawless_tests", target: 1, description: "Dokonči 1 test bez chyby" },
    { type: "flawless_tests", target: 2, description: "Dokonči 2 testy bez chyby" },
    { type: "earn_xp", target: 10, description: "Získej 10 XP" },
    { type: "earn_xp", target: 20, description: "Získej 20 XP" },
    { type: "earn_xp", target: 30, description: "Získej 30 XP" },
    { type: "unique_subjects", target: 2, description: "Dokonči testy ze 2 různých předmětů" },
    { type: "unique_subjects", target: 3, description: "Dokonči testy ze 3 různých předmětů" },
    { type: "unique_tests", target: 2, description: "Dokonči 2 různé testy (předmět/okruh)" },
    { type: "unique_tests", target: 3, description: "Dokonči 3 různé testy (předmět/okruh)" },
    { type: "new_tests", target: 1, description: "Vyzkoušej 1 nový test (okruh)" },
    { type: "new_tests", target: 2, description: "Vyzkoušej 2 nové testy (okruhy)" },
];

// --- Firebase Configuration & Initialization ---
const firebaseConfig = {
    apiKey: "AIzaSyCsaY8QZCiozpDnLbpiid3a6ilom7rp4Bk",
    authDomain: "maturitrener.firebaseapp.com",
    projectId: "maturitrener",
    storageBucket: "maturitrener.firebasestorage.app",
    messagingSenderId: "485827643986",
    appId: "1:485827643986:web:838563f26c0fafda9c6d8b",
    measurementId: "G-FLVEDE8H82"
};
async function loadAllDataFromURLs() {
    console.log("Starting to load data from URLs based on schoolSubjectConfig...");
    const fetchPromises = [];
    const loadedFiles = new Set(); // Keep track of files to load only once
    data = {}; // Clear and initialize the global flat 'data' object

    for (const schoolType in schoolSubjectConfig) {
        for (const subject in schoolSubjectConfig[schoolType]) {
            if (!data[subject]) { data[subject] = {}; } // Initialize subject in flat 'data'

            for (const topic in schoolSubjectConfig[schoolType][subject]) {
                const filename = schoolSubjectConfig[schoolType][subject][topic];

                // Initialize topic placeholder in flat 'data' if not already present
                if (!data[subject][topic]) {
                    if (filename && filename.toLowerCase().endsWith('.json')) {
                        data[subject][topic] = null;
                    } else {
                        data[subject][topic] = [];
                    }
                }

                // Schedule fetch only if filename exists and not already loading/loaded
                if (filename && !loadedFiles.has(filename)) {
                    loadedFiles.add(filename);
                    const url = GITHUB_RAW_BASE_URL + filename;
                    const isJson = filename.toLowerCase().endsWith('.json');
                    console.log(`Scheduling load for: ${filename} (Subject: ${subject}, Topic: ${topic})`);

                    const promise = fetch(url)
                        .then(response => {
                            if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
                            return isJson ? response.json() : response.text();
                        })
                        .then(content => {
                            // Store loaded data in the FLAT 'data' object
                            if (isJson) {
                                data[subject][topic] = content; // Store parsed JSON object
                                console.log(`Loaded JSON for ${subject} - ${topic}`);
                            } else {
                                parseCSV(content, subject, topic); // parseCSV adds to data[subject][topic]
                            }
                        })
                        .catch(error => {
                            console.error(`Failed ${isJson ? 'JSON' : 'CSV'} load: ${filename} (${subject}/${topic})`, error);
                            // Keep placeholder (null/[]) on error
                        });
                    fetchPromises.push(promise);
                } else if (!filename) { /* Skip null filenames */ }
                else { /* Skip already loading files */ }
            }
        }
    }

    await Promise.all(fetchPromises);
    console.log("Finished loading and parsing all data.");
}

let db;
let auth;
let currentUser = null; // Holds the UID of the logged-in user
let submitBtn = null; // Reference to the submit button during a test
let leaderboardListenerUnsubscribe = null;


// Calendar state variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// --- DOM Element References --- (Declared globally for access within functions)
let header, main, dashboardSection, testSection, progressSection, testContainer,
    generateTestBtn, modal, closeModalBtn, backToTestsModalBtn, resultCorrect,
    resultTotal, resultPercentage, subjectSelect, topicSelect, noQuestionsMessage,
    authLink, progressTableBody, subjectStatsContainer, loginSection, loginForm,
    emailInput, passwordInput, loginBtn, registerBtn, loginMessage,
    calendarGrid, currentMonthDisplay, prevMonthBtn, nextMonthBtn,
    testsTodayEl, correctAnswersEl, successRateEl, dayStreakEl, totalXpEl, achievementListEl, themeToggleButton, toggleFavoriteBtn; // Added elements for stats
let profileSection, profileEmail, profileNickname, profileJoined,
    nicknameChangeForm, newNicknameInput, changeNicknameBtn, nicknameChangeMessage,
    changePasswordBtn, passwordChangeMessage, deleteAccountBtn, deleteAccountMessage, profileLinkleaderboardList, noLeaderboardLi, nicknameInput, schoolTypeSelect, dailyQuestsListEl;


// --- Wait for DOM to Load ---
document.addEventListener('DOMContentLoaded', async () => {
    applyInitialTheme();
    // Get DOM elements safely after DOM is ready
    header = document.querySelector('header');
    main = document.querySelector('main');
    dashboardSection = document.getElementById('dashboard-section');
    testSection = document.getElementById('test-section');
    progressSection = document.getElementById('progress-section');
    testContainer = document.getElementById('test-container');
    generateTestBtn = document.getElementById('generate-test');
    modal = document.getElementById('test-completion-modal');
    closeModalBtn = modal.querySelector('.close'); // More specific selector
    backToTestsModalBtn = document.getElementById('back-to-tests-modal');
    resultCorrect = document.getElementById('result-correct');
    resultTotal = document.getElementById('result-total');
    resultPercentage = document.getElementById('result-percentage');
    subjectSelect = document.getElementById('subject-select');
    topicSelect = document.getElementById('topic-select');
    noQuestionsMessage = document.getElementById('no-questions-message');
    authLink = document.getElementById('auth-link');
    progressTableBody = document.getElementById('progress-table-body');
    subjectStatsContainer = document.getElementById('subject-stats');
    loginSection = document.getElementById('login-section');
    loginForm = document.getElementById('login-form');
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    loginBtn = document.getElementById('login-btn');
    registerBtn = document.getElementById('register-btn');
    loginMessage = document.getElementById('login-message');
    calendarGrid = document.getElementById('calendar-grid');
    currentMonthDisplay = document.getElementById('current-month');
    prevMonthBtn = document.getElementById('prev-month');
    nextMonthBtn = document.getElementById('next-month');
    achievementListEl = document.getElementById('achievement-list');
    themeToggleButton = document.getElementById('theme-toggle-btn');
    toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
    schoolTypeSelect = document.getElementById('school-type-select');
    dailyQuestsListEl = document.getElementById('daily-quests-list');
    // Stat elements
    testsTodayEl = document.getElementById('tests-today');
    correctAnswersEl = document.getElementById('correct-answers');
    successRateEl = document.getElementById('success-rate');
    dayStreakEl = document.getElementById('day-streak'); // Get element for stats section too
    totalXpEl = document.getElementById('total-xp'); // Get element for stats section too
    // Profile Section
    profileSection = document.getElementById('profile-section');
    profileLink = document.getElementById('profile-link');
    profileEmail = document.getElementById('profile-email');
    profileNickname = document.getElementById('profile-nickname');
    profileJoined = document.getElementById('profile-joined');
    nicknameChangeForm = document.getElementById('nickname-change-form');
    newNicknameInput = document.getElementById('new-nickname');
    changeNicknameBtn = document.getElementById('change-nickname-btn');
    nicknameChangeMessage = document.getElementById('nickname-change-message');
    changePasswordBtn = document.getElementById('change-password-btn');
    passwordChangeMessage = document.getElementById('password-change-message');
    deleteAccountBtn = document.getElementById('delete-account-btn');
    deleteAccountMessage = document.getElementById('delete-account-message');


    // Leaderboard
    leaderboardList = document.getElementById('leaderboard-list');
    noLeaderboardLi = leaderboardList?.querySelector('.no-leaderboard'); // Get initial placeholder

    // Registration Nickname
    nicknameInput = document.getElementById('nickname');

    await loadAllDataFromURLs();
    // --- Initialize Firebase ---
    try {
        if (typeof firebase === 'undefined') {
            throw new Error("Firebase library not loaded!");
        }
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        auth = firebase.auth();
        console.log("Firebase Initialized");

        initializeSchoolTypes(); // Populate subject dropdown

        // --- Attach Event Listeners ---
        setupEventListeners();

        // --- Firebase Auth Listener ---
        // --- Firebase Auth Listener ---
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                // --- USER IS LOGGED IN ---
                const uid = user.uid;
                currentUser = uid; // Set global currentUser immediately
                console.log('Auth State Changed: Logged in as', user.email);
                authLink.textContent = "Odhlásit se"; // Update logout button text

                // Determine if this is potentially a brand new registration
                const creationTime = user.metadata.creationTime ? new Date(user.metadata.creationTime).getTime() : 0;
                const lastSignInTime = user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).getTime() : 0;
                // Check if creation and last sign-in are very close (e.g., within 5 seconds)
                // Use a slightly larger window just in case of clock skew or minor delays
                const isPotentiallyNewUser = creationTime && lastSignInTime && (Math.abs(lastSignInTime - creationTime) < 5000);

                console.log(`DEBUG: Auth state change for UID: ${uid}. Potentially New User: ${isPotentiallyNewUser}`);

                // Regardless of new or existing, show the main application view immediately
                showDashboard(); // Or whichever view is appropriate after login

                if (isPotentiallyNewUser) {
                    // --- NEW USER REGISTRATION SCENARIO ---
                    console.log("DEBUG: Handling as potential new user registration. Delaying full data load.");
                    const registrationDataLoadDelay = 2000; // 2 seconds
                    setTimeout(async () => {
                        console.log(`DEBUG: Delayed data load starting for new user ${uid}.`);
                        // Load data normally now, assuming transaction has likely committed.
                        // Pass 'false' for isNewlyRegistered as we expect data to exist now.
                        await loadUserDataFromFirestore(uid, db, false);
                    }, registrationDataLoadDelay);

                } else {
                    // --- EXISTING USER LOGIN SCENARIO ---
                    console.log("DEBUG: Handling as existing user login. Loading data immediately.");
                    // Load data immediately and normally for existing users.
                    // Pass 'false' for isNewlyRegistered.
                    await loadUserDataFromFirestore(uid, db, false);
                }

            } else {
                // --- USER IS LOGGED OUT ---
                currentUser = null;
                console.log('Auth State Changed: Logged out');
                authLink.textContent = "Přihlásit se";
                clearUserDataUI(); // Clear displayed stats and potentially profile/leaderboard
                showLogin();      // Show the login screen
                // Regenerate calendar with empty data (assuming generateCalendar handles null currentUser)
                generateCalendar(currentYear, currentMonth, db);
            }
        });

    } catch (error) {
        console.error("Error initializing Firebase or setting up:", error);
        alert("Došlo k chybě při inicializaci aplikace. Zkontrolujte konzoli pro více detailů.");
        // Disable parts of the UI if needed
        if (loginSection) loginSection.innerHTML = '<h1>Chyba načítání aplikace</h1><p>Nelze se připojit k Firebase.</p>';
        if (dashboardSection) dashboardSection.style.display = 'none';
        if (testSection) testSection.style.display = 'none';
        if (progressSection) progressSection.style.display = 'none';
    }
}); // End DOMContentLoaded

// --- Firebase Data Functions ---

/**
 * Fetches user data from Firestore, initializing if it doesn't exist.
 * @param {string} uid - The user's ID.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<object|null>} A promise resolving to the user data object or null on error.
 */
async function getUserData(uid, db, isNewlyRegistered = false) { // Added isNewlyRegistered parameter
    if (!uid || !db) {
        console.warn("getUserData called without uid or db instance.");
        return null;
    }
    try {
        const docRef = db.collection("users").doc(uid);
        const doc = await docRef.get();

        if (doc.exists) {
            // --- Document Exists: Return Existing Data ---
            const data = doc.data();
            // Ensure essential structures exist after retrieval (Good practice)
            data.progress = data.progress || {};
            data.achievements = data.achievements || { /* default achievement levels */ };
            data.activity = data.activity || {};
            data.completedTopics = Array.isArray(data.completedTopics) ? data.completedTopics : []; // Ensure array
            data.favoriteBooks = Array.isArray(data.favoriteBooks) ? data.favoriteBooks : []; // Ensure array
            data.nickname = data.nickname || null; // Default to null if missing
            data.weeklyXP = typeof data.weeklyXP === 'number' ? data.weeklyXP : 0;
            // Add defaults for any other fields potentially missing from older docs
            data.testsToday = data.testsToday || 0;
            data.correctAnswersToday = data.correctAnswersToday || 0;
            data.totalTestsCompleted = data.totalTestsCompleted || 0;
            data.averageSuccessRate = data.averageSuccessRate || 0;
            data.dayStreak = data.dayStreak || 0;
            data.totalXP = data.totalXP || 0;
            data.flawlessTestCount = data.flawlessTestCount || 0;
            data.winningStreakCount = data.winningStreakCount || 0;
            data.lastActivityDate = data.lastActivityDate || null;
            data.lastCompletedTestDate = data.lastCompletedTestDate || null;


            console.log("Fetched user data:", data);
            return data;
        } else {
            // --- Document Does NOT Exist: Create Default Data ---
            console.log("No user document found for uid:", uid, ". Returning default structure.");

            // Create the default user data structure IN MEMORY
            // NOTE: The actual nickname/email should come from the registration transaction payload.
            // This default structure is mainly for initializing the app state if needed,
            // or if getUserData is somehow called before the transaction commits.
            const defaultUserData = {
                // Include ALL fields expected in a user document, matching the registration payload
                nickname: null, // Default nickname is null, registration transaction sets the real one
                email: null, // Default email is null, registration transaction sets the real one
                createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Important for the rule later
                weeklyXP: 0,
                testsToday: 0,
                correctAnswersToday: 0,
                progress: {},
                totalTestsCompleted: 0,
                averageSuccessRate: 0,
                dayStreak: 0,
                totalXP: 0,
                lastCompletedTestDate: null,
                flawlessTestCount: 0,
                winningStreakCount: 0,
                favoriteBooks: [],
                completedTopics: [],
                achievements: {
                    xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                    topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                    earlyBirdCount: 0, nightOwlCount: 0
                },
                activity: {},
                lastActivityDate: null
            };

            // --- Conditional Save ---
            if (!isNewlyRegistered) {
                // Save the default data ONLY if this isn't the immediate post-registration call
                console.log(`Saving default data for user ${uid} because isNewlyRegistered is false.`);
                // Use saveUserData to ensure correct format and merge behavior if needed elsewhere
                await saveUserData(uid, defaultUserData, db);
            } else {
                // If it IS the post-registration call, DON'T save.
                // The registration transaction is responsible for the initial write.
                console.log(`DEBUG: Skipping saveUserData for newly registered user ${uid} within getUserData.`);
            }

            // Always return the default structure so the calling function has something to work with
            return defaultUserData;
        }
    } catch (error) {
        console.error(`Error getting user document for ${uid}:`, error);
        return null; // Return null on error
    }
}
function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggleBtn = document.getElementById('theme-toggle-btn'); // Get button inside function too

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙'; // Moon icon for light mode
    }
}
function toggleTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn'); // Get button inside function
    const isDarkMode = document.body.classList.toggle('dark-mode'); // Toggle and check result

    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️'; // Sun icon
    } else {
        localStorage.setItem('theme', 'light');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙'; // Moon icon
    }
}

/**
 * Saves user data to Firestore, ensuring correct data types and using merge.
 * @param {string} uid - The user's ID.
 * @param {object} data - The user data object to save.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<void>}
 */
async function saveUserData(uid, data, db) {
    if (!uid || !db) {
        console.error("saveUserData called without uid or db instance!");
        return; // Exit if essential parameters missing
    }

    // Create a deep copy to avoid modifying the original object passed in,
    // especially important if it came directly from component state/props.
    let dataToSave = JSON.parse(JSON.stringify(data));

    // --- Data Sanitization/Formatting before Saving ---
    // Ensure completedTopics is an Array
    if (dataToSave.completedTopics instanceof Set) { // Should be array already, but check just in case
        console.warn("completedTopics was still a Set in saveUserData, converting.");
        dataToSave.completedTopics = Array.from(dataToSave.completedTopics);
    } else if (!Array.isArray(dataToSave.completedTopics)) {
        console.warn("completedTopics was not an Array, saving as empty array.");
        dataToSave.completedTopics = [];
    }

    // Ensure favoriteBooks is an Array (if used)
    if (dataToSave.favoriteBooks && !Array.isArray(dataToSave.favoriteBooks)) {
        console.warn("favoriteBooks was not an array, converting/resetting.");
        dataToSave.favoriteBooks = Array.isArray(dataToSave.favoriteBooks) ? dataToSave.favoriteBooks : [];
    }


    // Ensure core map structures are valid objects
    const keysToCheck = ['progress', 'achievements', 'activity', 'dailyQuests'];
    keysToCheck.forEach(key => {
        if (typeof dataToSave[key] !== 'object' || dataToSave[key] === null || Array.isArray(dataToSave[key])) {
            // Avoid overwriting potentially valid arrays like dailyQuests.quests if that logic changes
            if (!Array.isArray(dataToSave[key])) {
                console.warn(`${key} data structure incorrect in saveUserData, resetting to {}.`);
                dataToSave[key] = {};
            }
        }
    });

    // Specifically ensure dailyQuests sub-arrays are arrays if dailyQuests exists
    if (dataToSave.dailyQuests) {
        dataToSave.dailyQuests.quests = dataToSave.dailyQuests.quests || [];
        dataToSave.dailyQuests.subjectsToday = dataToSave.dailyQuests.subjectsToday || [];
        dataToSave.dailyQuests.testsTodayIds = dataToSave.dailyQuests.testsTodayIds || [];
        if (!Array.isArray(dataToSave.dailyQuests.quests)) dataToSave.dailyQuests.quests = [];
        if (!Array.isArray(dataToSave.dailyQuests.subjectsToday)) dataToSave.dailyQuests.subjectsToday = [];
        if (!Array.isArray(dataToSave.dailyQuests.testsTodayIds)) dataToSave.dailyQuests.testsTodayIds = [];
    }


    // ---> Log data being sent to Firestore <---
    console.log(`DEBUG: Data being sent to Firestore for user ${uid}:`, JSON.stringify(dataToSave, null, 2));
    // ---> End Log <---


    try {
        // Use set with merge:true to update only provided fields or create the document
        await db.collection("users").doc(uid).set(dataToSave, { merge: true });
        console.log(`User document ${uid} successfully written/merged!`);
    } catch (error) {
        console.error(`Error writing user document ${uid}:`, error);
        // Avoid annoying alerts, maybe use a less intrusive notification method?
        // alert("Chyba při ukládání dat. Zkuste to prosím znovu.");
        // Consider re-throwing or returning an error indicator if needed by caller
    }
}
async function loadUserDataFromFirestore(uid, db, isNewlyRegistered = false) {
    console.log("Attempting to load data for user:", uid, `Is New: ${isNewlyRegistered}`);
    if (!uid || !db) {
        console.error("loadUserDataFromFirestore: Missing UID or DB instance.");
        return;
    }

    try {
        let userData = await getUserData(uid, db, isNewlyRegistered);

        if (userData) {
            console.log("User data loaded:", userData);
            // --- Define date variables ---
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0]; // For quest check
            const todayDateString = today.toDateString();      // For daily reset check

            let needsSave = false; // Flag for saving updates

            // --- Check and Generate Daily Quests ---
            const lastGeneratedDate = userData.dailyQuests?.generatedDate;
            if (!lastGeneratedDate || lastGeneratedDate !== todayStr) {
                console.log(`Generating new daily quests for ${todayStr}. Last generated: ${lastGeneratedDate}`);
                const newQuests = generateNewDailyQuests(userData);
                userData.dailyQuests = {
                    generatedDate: todayStr,
                    quests: newQuests,
                    subjectsToday: [],
                    testsTodayIds: [],
                    bonusXPAwarded: false
                };
                needsSave = true;
                console.log("New daily quests prepared for saving:", userData.dailyQuests);
            } else {
                // Ensure structure exists even if quests are already generated
                userData.dailyQuests = userData.dailyQuests || {};
                userData.dailyQuests.quests = userData.dailyQuests.quests || [];
                userData.dailyQuests.subjectsToday = userData.dailyQuests.subjectsToday || [];
                userData.dailyQuests.testsTodayIds = userData.dailyQuests.testsTodayIds || [];
                userData.dailyQuests.bonusXPAwarded = userData.dailyQuests.bonusXPAwarded || false;
                console.log("Daily quests already generated for today.");
            }
            // --- End Daily Quest Check ---

            // --- Daily Reset Check ---
            // ---> ADDED DEFINITIVE DEBUG LOG HERE <---
            console.log(`DEBUG: Checking daily reset. Type of todayDateString: ${typeof todayDateString}, Value: ${todayDateString}`);
            // ---> END DEBUG LOG <---

            // This line (approx script.js:910) was causing the error previously
            if (userData.lastActivityDate !== todayDateString) {
                console.log(`New day detected (Last: ${userData.lastActivityDate}, Today: ${todayDateString}). Resetting daily stats.`);
                userData.testsToday = 0;
                userData.correctAnswersToday = 0;
                userData.lastActivityDate = todayDateString; // Use todayDateString here
                if (userData.dailyQuests) {
                    userData.dailyQuests.subjectsToday = [];
                    userData.dailyQuests.testsTodayIds = [];
                }
                needsSave = true;
            }
            // --- End Daily Reset Check ---

            // Ensure completedTopics is a Set for processing
            userData.completedTopics = new Set(userData.completedTopics || []);

            // --- Save if needed ---
            if (needsSave) {
                console.log("Saving user data due to quest generation or daily reset...");
                // Convert Set back to Array before saving
                const dataToSave = { ...userData, completedTopics: Array.from(userData.completedTopics) };
                await saveUserData(uid, dataToSave, db);
                console.log("User data saved.");
            }

            // --- Update UI ---
            // Pass necessary data to UI update functions
            updateDailyQuestsUI(userData.dailyQuests?.quests || [], userData.dailyQuests?.bonusXPAwarded || false);
            updateStatisticsSection(userData);
            updateDashboard(userData);
            updateAchievementsUI(userData);
            await generateCalendar(currentYear, currentMonth, db);
            console.log("UI updated after loading user data.");

        } else {
            // Handle case where getUserData returned null (e.g., user document deleted unexpectedly)
            console.warn('loadUserDataFromFirestore: getUserData returned null/undefined unexpectedly for UID:', uid);
            clearUserDataUI(); // Clear UI elements
            updateDailyQuestsUI([], false); // Clear quests UI
            await generateCalendar(currentYear, currentMonth, db); // Show empty calendar
        }
    } catch (error) {
        // Log error with context
        console.error("Error in loadUserDataFromFirestore:", error, ` | UID: ${uid}, isNewlyRegistered: ${isNewlyRegistered}`);
        // Consider showing a user-friendly error message instead of alert
        // displayErrorMessage("Chyba při načítání uživatelských dat.");
        clearUserDataUI();
        updateDailyQuestsUI([], false); // Clear quests UI
    }
}
function generateNewDailyQuests(userData) {
    const availableTemplates = [...dailyQuestTemplates];
    const selectedQuests = [];
    const todayStr = new Date().toISOString().split('T')[0];
    let totalAvailableTopics = 0;
    if (typeof data !== 'undefined') { // Check if global 'data' is loaded
        for (const subject in data) {
            totalAvailableTopics += Object.keys(data[subject] || {}).filter(topic => topic !== "Zatím žádná témata").length;
        }
    } else {
        console.warn("Global 'data' object not available for 'new_tests' check during quest generation.");
    }
    const completedTopicsCount = userData?.completedTopics?.size || userData?.completedTopics?.length || 0; // Handle Set or Array
    const canDoNewTests = totalAvailableTopics > completedTopicsCount;
    let attempts = 0;

    while (selectedQuests.length < 3 && attempts < 20 && availableTemplates.length > 0) {
        attempts++;
        const randomIndex = Math.floor(Math.random() * availableTemplates.length);
        const template = availableTemplates[randomIndex];
        let possible = true;

        if (template.type === "new_tests" && !canDoNewTests) {
            possible = false;
            console.log("Skipping 'new_tests' quest as not possible.");
        }

        if (possible) {
            const newQuest = {
                ...template,
                id: `${template.type}_${template.target}_${todayStr}`,
                currentProgress: 0,
                isCompleted: false,
            };
            selectedQuests.push(newQuest);
            availableTemplates.splice(randomIndex, 1);
            // Optional: Remove all of the same type to prevent "Complete 1" and "Complete 2"
            // availableTemplates = availableTemplates.filter(t => t.type !== template.type);
        } else {
            availableTemplates.splice(randomIndex, 1);
        }
    }
    console.log("Generated daily quests:", selectedQuests);
    return selectedQuests;
}
/**
 * Updates the Daily Quests list in the UI.
 * @param {Array<object>} [quests=[]] - The array of quest objects for the day.
 * @param {boolean} [bonusAwarded=false] - Whether the overall daily bonus has been awarded.
 */
function updateDailyQuestsUI(quests = [], bonusAwarded = false) {
    // Ensure the list element exists
    if (!dailyQuestsListEl) {
        console.warn("Daily quests list element not found (dailyQuestsListEl). Cannot update UI.");
        return;
    }

    // Clear previous quest items
    dailyQuestsListEl.innerHTML = '';

    // Handle case where there are no quests (e.g., loading, error, or empty array)
    if (!quests || quests.length === 0) {
        dailyQuestsListEl.innerHTML = '<li class="no-quests">Žádné denní úkoly nejsou k dispozici.</li>';
        return;
    }

    // --- Loop through and display each quest ---
    quests.forEach(quest => {
        const li = document.createElement('li');
        // Add 'quest-completed' class dynamically based on quest status
        if (quest.isCompleted) {
            li.classList.add('quest-completed');
        }

        // Create span for quest description
        const descriptionSpan = document.createElement('span');
        descriptionSpan.classList.add('quest-description');
        descriptionSpan.textContent = quest.description || "Chybějící popis úkolu"; // Fallback text

        // Create span for quest progress display
        const progressSpan = document.createElement('span');
        progressSpan.classList.add('quest-progress');

        // Determine the text for the progress span
        let progressText;
        if (quest.isCompleted) {
            progressText = '✅'; // Show checkmark if completed
        } else {
            // Format progress based on quest type (optional: add units)
            progressText = `${quest.currentProgress || 0} / ${quest.target || '?'}`;
            if (quest.type === 'earn_xp') {
                progressText += ' XP';
            }
            // Add more specific units like ' testů', ' okruhů' if desired
            // else if (quest.type.includes('_tests') || quest.type.includes('_subjects')) {
            //     progressText += quest.target > 1 ? ' testů/předmětů' : ' test/předmět';
            // }
        }
        progressSpan.textContent = progressText;

        // Append description and progress to the list item
        li.appendChild(descriptionSpan);
        li.appendChild(progressSpan);

        // Append the list item to the main list
        dailyQuestsListEl.appendChild(li);
    });
    // --- End loop ---


    // --- Add the Bonus Summary Line ---
    // Check if there were actually quests to potentially get a bonus for
    if (quests.length > 0) {
        const bonusLi = document.createElement('li');
        bonusLi.classList.add('quest-bonus-summary'); // Add a class for specific styling if needed
        bonusLi.style.marginTop = '10px';
        // Use CSS variable for border color based on bonus status
        bonusLi.style.borderTop = `2px solid ${bonusAwarded ? 'var(--success)' : 'var(--gray)'}`;
        bonusLi.style.paddingTop = '10px';

        const bonusDesc = document.createElement('span');
        bonusDesc.textContent = "Bonus za všechny úkoly:";
        bonusDesc.style.fontWeight = 'bold';

        const bonusStatus = document.createElement('span');
        bonusStatus.style.fontWeight = 'bold';

        if (bonusAwarded) {
            // Bonus has been awarded
            bonusStatus.textContent = "Získáno (+25 XP)";
            bonusStatus.style.color = 'var(--success)';
        } else {
            // Bonus not awarded yet - check if requirements met (all quests completed)
            const allComplete = quests.every(q => q.isCompleted); // Re-check based on current quest data
            if (allComplete) {
                // Should technically have been awarded if all are complete, but handle this display case
                bonusStatus.textContent = "Splněno! (+25 XP)"; // Indicate bonus earned
                bonusStatus.style.color = 'var(--success)';
                // You might want to slightly dim it if bonusAwarded is false but all are complete,
                // indicating the award *should* have happened or is pending save.
                // bonusStatus.style.opacity = '0.8';
            } else {
                // Not all quests are complete yet
                bonusStatus.textContent = "Nesplněno (Odměna: 25 XP)";
                bonusStatus.style.color = 'var(--warning)'; // Use warning color for pending reward
            }
        }

        // Append bonus description and status to the summary list item
        bonusLi.appendChild(bonusDesc);
        bonusLi.appendChild(bonusStatus);

        // Append the summary list item to the main list
        dailyQuestsListEl.appendChild(bonusLi);
    }
    // --- End Bonus Summary Line ---
}
/**
 * Fetches the latest leaderboard data and updates the UI.
 */
async function refreshLeaderboard() {
    if (!currentUser || !leaderboardList) {
        console.log("Cannot refresh leaderboard: No user or list element.");
        return; // Exit if not logged in or element missing
    }
    console.log("Refreshing leaderboard data...");
    try {
        const leaderboardData = await fetchLeaderboardData(10); // Fetch top 10
        updateLeaderboardUI(leaderboardData); // Update the list
        console.log("Leaderboard UI updated.");
    } catch (error) {
        console.error("Error refreshing leaderboard:", error);
        // Optionally display an error in the leaderboard list
        if (leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba načítání žebříčku.</li>';
    }
}
function updateAchievementsUI(userData) {
    if (!achievementListEl) return; // Check if element exists

    achievementListEl.innerHTML = ''; // Clear previous items

    const achievementsData = userData?.achievements;
    let noAchievementsLi = achievementListEl.querySelector('.no-achievements'); // Get placeholder

    // Hide placeholder if there are achievements
    if (!noAchievementsLi) {
        noAchievementsLi = document.createElement('li');
        noAchievementsLi.classList.add('no-achievements');
        noAchievementsLi.style.display = 'none'; // Hide by default
        noAchievementsLi.textContent = 'Zatím žádné úspěchy. Dokonči nějaké testy!';
        achievementListEl.appendChild(noAchievementsLi);
    }
    const hasAchievements = achievementsData &&
        Object.keys(achievementsData).length > 0 &&
        Object.values(achievementsData).some(level => typeof level === 'number' && level > 0); // Check if at least one level > 0


    if (!hasAchievements) {
        noAchievementsLi.style.display = 'block'; // Show placeholder
        console.log("No achievements to display or all are level 0.");
        return;
    }
    noAchievementsLi.style.display = 'none'; // Hide placeholder if there are achievements


    // Helper to get current value based on achievement key
    const getCurrentValue = (key) => {
        switch (key) {
            case 'xpCollector': return userData?.totalXP || 0;
            case 'unstoppable': return userData?.dayStreak || 0;
            case 'flawless': return userData?.flawlessTestCount || 0;
            case 'winningStreak': return userData?.winningStreakCount || 0;
            case 'topicMaster': return (userData?.completedTopics instanceof Set ? userData.completedTopics.size : (userData?.completedTopics?.length || 0)); // Handle Set or Array
            case 'earlyBird': return achievementsData?.earlyBirdCount || 0;
            case 'nightOwl': return achievementsData?.nightOwlCount || 0;
            case 'marathoner': return userData?.testsToday || 0;
            default: return 0;
        }
    };

    // Iterate through the defined achievement levels
    for (const [key, definition] of Object.entries(achievementLevels)) {
        const currentLevel = achievementsData[key] || 0; // User's current level for this achievement
        const currentValue = getCurrentValue(key);
        const maxLevel = definition.levels.length;
        const unit = definition.unit;
        const descriptionTemplate = definition.description || "Popis chybí.";

        // Determine next level threshold and progress
        let nextLevelThreshold = Infinity;
        let prevLevelThreshold = 0; // Threshold for the start of the current level
        let progressPercent = 0;
        let valueText = `${currentValue} ${unit}`;
        let tooltipText = '';

        if (currentLevel < maxLevel) {
            nextLevelThreshold = definition.levels[currentLevel]; // Threshold to reach next level (index = currentLevel)
            if (currentLevel > 0) {
                prevLevelThreshold = definition.levels[currentLevel - 1]; // Threshold of the current level (index = currentLevel - 1)
            }
            const range = nextLevelThreshold - prevLevelThreshold;
            const currentProgressInLevel = currentValue - prevLevelThreshold;
            // Calculate percentage, ensuring range > 0 and capping at 100
            progressPercent = range > 0 ? Math.max(0, Math.min(100, Math.round((currentProgressInLevel / range) * 100))) : (currentValue >= nextLevelThreshold ? 100 : 0);
            valueText = `<span class="current">${currentValue}</span> / <span class="next">${nextLevelThreshold} ${unit}</span>`;

            // *** Set Tooltip for next level ***
            tooltipText = descriptionTemplate.replace('{value}', nextLevelThreshold);

        } else {
            // Max level reached
            progressPercent = 100;
            valueText = `<span class="max">MAX ${unit}</span>`; // Or just show total value
            tooltipText = `Maximální úroveň dosažena! (${descriptionTemplate.replace('{value}', finalThreshold)})`;
        }

        // Create List Item
        const li = document.createElement('li');
        li.dataset.tooltip = tooltipText;

        // Extract icon (simple approach, might need refinement)
        const nameParts = definition.name.split(' ');
        const icon = nameParts.length > 1 ? nameParts.pop() : '⭐'; // Use last part or default
        const name = nameParts.join(' ');

        li.innerHTML = `
            <div class="achievement-header">
                <span class="achievement-icon">${icon}</span>
                <span class="achievement-name">${name}</span>
            </div>
            <div class="achievement-details">
                <div class="achievement-level">Úroveň ${currentLevel} / ${maxLevel}</div>
                ${currentLevel < maxLevel ? `
                <div class="achievement-progress">
                    <div class="progress-bar">
                        <div class="progress-value" style="width: ${progressPercent}%;"></div>
                    </div>
                    <div class="achievement-value">${valueText}</div>
                </div>
                ` : `
                 <div class="achievement-value">${valueText}</div>
                `}
            </div>
        `;
        achievementListEl.appendChild(li);
    }
}
// --- Authentication Functions ---

/**
 * Handles user registration.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function registerUserHandler(authInstance) {
    // Add nicknameInput to the checks at the top
    if (!authInstance || !emailInput || !passwordInput || !loginMessage || !nicknameInput) return;

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const nickname = nicknameInput.value.trim(); // Get nickname

    // --- Basic validation ---
    if (!email || !password || !nickname) { // Check nickname too
        loginMessage.textContent = "Prosím vyplňte email, heslo a přezdívku.";
        return;
    }
    if (password.length < 6) {
        loginMessage.textContent = "Heslo musí mít alespoň 6 znaků.";
        return;
    }
    // Nickname validation (adjust pattern/message as needed)
    const nicknamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!nicknamePattern.test(nickname)) {
        loginMessage.textContent = "Přezdívka může obsahovat 3-15 písmen, čísel a podtržítek.";
        return;
    }

    loginMessage.textContent = "Registruji a ověřuji přezdívku..."; // Feedback
    changeNicknameBtn.disabled = true; // Disable button
    registerBtn.disabled = true;


    try {
        // 1. Check Nickname Uniqueness
        const isUnique = await checkNicknameUniqueness(nickname);
        if (!isUnique) {
            loginMessage.textContent = "Tato přezdívka je již obsazena.";
            changeNicknameBtn.disabled = false;
            registerBtn.disabled = false;
            return;
        }

        // 2. Create User Account
        const userCredential = await authInstance.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const uid = user.uid;

        // 3. Save Initial User Data and Nickname Reservation in a Transaction
        const userDocRef = db.collection("users").doc(uid);
        const nicknameDocRef = db.collection("nicknames").doc(nickname.toLowerCase());

        await db.runTransaction(async (transaction) => {
            // Set default user data including nickname and timestamp
            const userDataPayload = {
                nickname: nickname, // The variable from input
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                // ... include ALL OTHER necessary default fields ...
                weeklyXP: 0,
                testsToday: 0,
                correctAnswersToday: 0,
                progress: {},
                totalTestsCompleted: 0,
                averageSuccessRate: 0,
                dayStreak: 0,
                totalXP: 0,
                lastCompletedTestDate: null,
                flawlessTestCount: 0,
                winningStreakCount: 0,
                favoriteBooks: [],
                completedTopics: [],
                achievements: {
                    xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                    topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                    earlyBirdCount: 0, nightOwlCount: 0
                },
                activity: {},
                lastActivityDate: null
            };

            // --- NOW Log the payload ---
            console.log("DEBUG: Payload being set for userDocRef:", JSON.stringify(userDataPayload));
            console.log("DEBUG: Value of 'nickname' variable just before set:", nickname); // Log the variable directly too

            // --- Set the user document using the defined payload ---
            transaction.set(userDocRef, userDataPayload);

            // --- Set the nickname document ---
            transaction.set(nicknameDocRef, { userId: uid });
        });


        console.log("User registered and initial data saved successfully.");
        // onAuthStateChanged will handle the rest of the login flow
        loginMessage.textContent = "Registrace proběhla úspěšně. Přihlašuji...";
        // loginForm.reset(); // Optional: Clear form

    } catch (error) {
        console.error("Registration error:", error);
        loginMessage.textContent = "Chyba registrace: " + mapAuthError(error);
        // TODO: If error occurred *after* user creation but *before* data save,
        // need cleanup logic (delete user, delete nickname entry if created).
        // This is complex and often handled server-side. For now, log it.
        if (error.code !== 'auth/email-already-in-use' && error.message !== "Tato přezdívka je již obsazena.") {
            loginMessage.textContent += " Zkuste to prosím znovu.";
        }
    } finally {
        // Re-enable buttons unless successful
        if (loginMessage.textContent !== "Registrace proběhla úspěšně. Přihlašuji...") {
            changeNicknameBtn.disabled = false;
            registerBtn.disabled = false;
        }
    }
}
/**
 * Checks if a nickname is already taken in the 'nicknames' collection.
 * @param {string} nickname - The nickname to check.
 * @returns {Promise<boolean>} True if unique, false otherwise.
 */
async function checkNicknameUniqueness(nickname) {
    if (!nickname) return false;
    const nicknameLower = nickname.toLowerCase();
    const nicknameDocRef = db.collection("nicknames").doc(nicknameLower);
    try {
        const doc = await nicknameDocRef.get();
        return !doc.exists; // Return true if the document DOES NOT exist
    } catch (error) {
        console.error("Error checking nickname uniqueness:", error);
        // Fail safe: assume not unique on error to prevent duplicates
        return false;
    }
}

/**
 * Handles user login.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function loginUserHandler(authInstance) {
    if (!authInstance || !emailInput || !passwordInput || !loginMessage) return;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        loginMessage.textContent = "Prosím zadejte email i heslo.";
        return;
    }

    loginMessage.textContent = "Přihlašuji..."; // Feedback
    try {
        await authInstance.signInWithEmailAndPassword(email, password);
        // NOTE: onAuthStateChanged will handle the UI update after successful login
        loginMessage.textContent = "Přihlášení proběhlo úspěšně.";
        // Optional: Clear form
        // loginForm.reset();
    } catch (error) {
        console.error("Login error:", error);
        loginMessage.textContent = "Chyba přihlášení: " + mapAuthError(error); // User-friendly message
    }
}

/**
 * Handles user logout.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function logoutUserHandler(authInstance) {
    if (!authInstance) return;
    try {
        await authInstance.signOut();
        // NOTE: onAuthStateChanged will handle the UI update
        console.log("User signed out successfully.");
    } catch (error) {
        console.error("Sign out error:", error);
        alert("Chyba při odhlašování.");
    }
}

/**
 * Maps Firebase Auth error codes to user-friendly messages (Czech).
 * @param {Error} error - The Firebase Auth error object.
 * @returns {string} A user-friendly error message.
 */
function mapAuthError(error) {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Neplatný formát emailu.';
        case 'auth/user-disabled':
            return 'Tento uživatelský účet byl deaktivován.';
        case 'auth/user-not-found':
            return 'Uživatel s tímto emailem nebyl nalezen.';
        case 'auth/wrong-password':
            return 'Nesprávné heslo.';
        case 'auth/email-already-in-use':
            return 'Tento email je již registrován.';
        case 'auth/weak-password':
            return 'Heslo je příliš slabé (musí mít alespoň 6 znaků).';
        case 'auth/operation-not-allowed':
            return 'Přihlášení tímto způsobem není povoleno.';
        case 'auth/network-request-failed':
            return 'Chyba sítě. Zkontrolujte připojení k internetu.';
        default:
            return error.message; // Fallback to the default message
    }
}

// --- UI Update & Navigation Functions ---

function showLogin() {
    if (leaderboardListenerUnsubscribe) { // Detach when leaving Profile/Stats
        console.log("Detaching leaderboard listener when showing Login.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    if (loginSection) loginSection.style.display = 'flex';
    if (dashboardSection) dashboardSection.style.display = 'none';
    if (testSection) testSection.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';
    if (loginMessage) loginMessage.textContent = '';
    if (loginForm) {
        loginForm.reset();
        loginForm.classList.remove('register-mode');
    }
    if (loginBtn) loginBtn.style.display = 'block';
    if (registerBtn) registerBtn.textContent = 'Registrovat se';
}

// Ensure leaderboardListenerUnsubscribe is declared globally
// let leaderboardListenerUnsubscribe = null;

function showDashboard() {
    if (leaderboardListenerUnsubscribe) {
        console.log("Detaching previous leaderboard listener before showing Dashboard.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    if (profileSection) profileSection.style.display = 'none';
    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block'; // Show Dashboard
    if (testSection) testSection.style.display = 'none';
    if (currentUser) {
        console.log("Attaching real-time leaderboard listener for Dashboard section...");

        const query = db.collection("users")
            .orderBy("weeklyXP", "desc")
            .limit(10);

        leaderboardListenerUnsubscribe = query.onSnapshot(querySnapshot => {
            console.log("Leaderboard snapshot received (Dashboard).");
            const topUsers = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                if (data.nickname && typeof data.weeklyXP === 'number') {
                    topUsers.push({
                        nickname: data.nickname,
                        xp: data.weeklyXP
                    });
                }
            });
            updateLeaderboardUI(topUsers); // Update the UI
        }, error => {
            console.error("Error fetching leaderboard snapshot (Dashboard):", error);
            if (leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba live žebříčku.</li>';
        });
    } else {
        updateLeaderboardUI([]);
    }
}

function showTestSection() {
    if (leaderboardListenerUnsubscribe) { // Detach when leaving Profile/Stats
        console.log("Detaching leaderboard listener when showing Test Section.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';
    if (testSection) testSection.style.display = 'block';
}

/**
 * Updates statistics displays (NOW ONLY Streak/XP in the Profile section).
 * @param {object | null} userData - The user data object or null for default state.
 */
function updateStatisticsSection(userData) {
    const testsToday = userData?.testsToday || 0;
    const correctToday = userData?.correctAnswersToday || 0;
    const rate = userData?.averageSuccessRate || 0;
    // --- These are the values actually used now ---
    const streak = userData?.dayStreak || 0;
    const xp = userData?.totalXP || 0;
    const progressDayStreakEl = document.getElementById('day-streak'); // Keep this ID check
    const progressTotalXpEl = document.getElementById('total-xp');     // Keep this ID check

    if (progressDayStreakEl) {
        progressDayStreakEl.textContent = streak;
    } else {
        // Add warning if these specific elements are missing
        console.warn("Element with ID 'day-streak' not found.");
    }
    if (progressTotalXpEl) {
        progressTotalXpEl.textContent = xp;
    } else {
        // Add warning if these specific elements are missing
        console.warn("Element with ID 'total-xp' not found.");
    }

    // Updated log to reflect only what's being set
    console.log("UI Statistics Updated (Profile Section):", { streak, xp });
}


/**
 * Updates the subject progress cards on the dashboard.
 * @param {object | null} userData - The user data object, or null for default state.
 */
function updateDashboard(userData) {
    if (!subjectStatsContainer) return;
    subjectStatsContainer.innerHTML = ''; // Clear previous cards

    if (!userData || !userData.progress || Object.keys(userData.progress).length === 0) {
        console.log("No user data or progress to display on dashboard subjects.");
        // Optionally display a message
        const noProgressMsg = document.createElement('p');
        noProgressMsg.textContent = "Zatím žádný pokrok v předmětech.";
        noProgressMsg.style.gridColumn = '1 / -1'; // Span full width if in grid
        noProgressMsg.style.textAlign = 'center';
        subjectStatsContainer.appendChild(noProgressMsg);
        return;
    }

    // Generate subject cards
    for (const subject in data) { // Iterate through defined subjects to ensure order/all are shown
        const subjectData = userData.progress[subject] || { testsCompleted: 0, successRate: 0 }; // Default if no progress yet
        const progressPercentage = subjectData.successRate || 0;
        const testsCompleted = subjectData.testsCompleted || 0;

        const card = document.createElement("div");
        card.classList.add("subject-card");
        card.setAttribute('data-subject', subject); // Use the subject name for navigation

        const title = document.createElement("h3");
        title.classList.add("subject-title");
        title.textContent = subject;
        card.appendChild(title);

        const progressContainer = document.createElement("div");
        progressContainer.classList.add("subject-progress");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        const progressValue = document.createElement("div");
        progressValue.classList.add("progress-value");
        // Ensure correct initial width even if 0
        progressValue.style.width = `${Math.max(0, progressPercentage)}%`;
        progressBar.appendChild(progressValue);
        progressContainer.appendChild(progressBar);

        const progressText = document.createElement("div");
        progressText.classList.add("progress-text");
        progressText.innerHTML = `<span>${progressPercentage}%</span> <span>${testsCompleted} testů</span>`;
        progressContainer.appendChild(progressText);

        card.appendChild(progressContainer);

        // Add event listener for navigation
        card.addEventListener('click', function () {
            const clickedSubject = this.getAttribute('data-subject');
            if (subjectSelect) subjectSelect.value = clickedSubject; // Pre-select subject
            populateTopics(clickedSubject); // Populate topics
            showTestSection(); // Navigate to test section
        });

        subjectStatsContainer.appendChild(card);
    }
}

/**
 * Updates the detailed progress table in the 'Statistiky' section.
 * @param {object | null} userData - The user data object, or null for default state.
 */
function updateProgressSection(userData) {
    if (!progressTableBody) return;
    progressTableBody.innerHTML = ''; // Clear previous rows

    // Update summary stats if elements exist
    const progressDayStreakEl = document.getElementById('day-streak');
    const progressTotalXpEl = document.getElementById('total-xp');
    if (progressDayStreakEl) progressDayStreakEl.textContent = userData?.dayStreak || 0;
    if (progressTotalXpEl) progressTotalXpEl.textContent = userData?.totalXP || 0;


    if (!userData || !userData.progress || Object.keys(userData.progress).length === 0) {
        console.log("No user data or progress to display in progress table.");
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Zatím nebyly dokončeny žádné testy.';
        cell.style.textAlign = 'center';
        cell.style.padding = '1rem';
        row.appendChild(cell);
        progressTableBody.appendChild(row);
        return;
    }

    // Generate table rows for subjects with progress
    for (const subject in userData.progress) {
        const subjectData = userData.progress[subject];
        const testsCompleted = subjectData.testsCompleted || 0;
        const correctAnswers = subjectData.correctAnswers || 0;
        const successRate = subjectData.successRate || 0;
        const totalQuestionsAnswered = subjectData.totalQuestionsAnswered || 0;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 0.75rem;">${subject}</td>
            <td style="text-align: center; padding: 0.75rem;">${testsCompleted}</td>
            <td style="text-align: center; padding: 0.75rem;">${correctAnswers}/${totalQuestionsAnswered}</td>
            <td style="text-align: center; padding: 0.75rem;">${successRate}%</td>
        `;
        progressTableBody.appendChild(row);
    }
}

/**
 * Clears user-specific data from the UI, typically called on logout.
 */
function clearUserDataUI() {
    if (leaderboardListenerUnsubscribe) {
        console.log("Detaching leaderboard listener during UI clear.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    // Reset dashboard stats
    updateStatisticsSection(null); // Pass null for default/zero state
    updateDailyQuestsUI([], false);

    // Clear subject cards
    if (subjectStatsContainer) subjectStatsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Pro zobrazení pokroku se přihlaste.</p>';

    // Clear progress table
    if (progressTableBody) {
        progressTableBody.innerHTML = '';
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Pro zobrazení statistik se přihlaste.';
        cell.style.textAlign = 'center';
        cell.style.padding = '1rem';
        row.appendChild(cell);
        progressTableBody.appendChild(row);
    }
    if (toggleFavoriteBtn) {
        toggleFavoriteBtn.style.display = 'none';
        toggleFavoriteBtn.disabled = true;
    }

    // Reset test section if needed (might happen automatically on navigation)
    if (testContainer) testContainer.innerHTML = '';
    if (testContainer) testContainer.style.display = 'none';
    if (subjectSelect) subjectSelect.value = '';
    if (topicSelect) topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    if (topicSelect) topicSelect.disabled = true;
    if (generateTestBtn) generateTestBtn.disabled = true;
    if (profileSection) profileSection.style.display = 'none';

    // Calendar will be regenerated by auth listener with empty data
}

function parseCSV(csvText, subject, topic) {
    if (!csvText || !subject || !topic) {
        console.error("parseCSV: Missing input data", { subject, topic });
        return;
    }
    // Trim whitespace and filter out empty lines
    const lines = csvText.trim().split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) { // Need header + at least one data line
        console.warn(`parseCSV: Not enough lines in CSV for ${subject} - ${topic}`);
        return;
    }

    // Header isn't strictly used here but good practice to acknowledge it
    // const header = lines[0].split(';').map(h => h.trim());
    const questions = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(';').map(val => val.trim().replace(/^"(.*)"$/, '$1')); // Trim values and remove surrounding quotes

        if (values.length >= 3 && values[0] && values[1]) { // Need at least Question, Correct Answer, Option 1
            const questionText = values[0];
            const correctAnswer = values[1];
            const options = values.slice(2).filter(opt => opt); // Get options (from index 2 onwards), filter out empty ones

            // Ensure we have at least a few options + the correct one makes sense
            if (options.length < 1) {
                console.warn(`parseCSV: Question "${questionText}" has no options. Skipping.`);
                continue;
            }


            const question = {
                text: questionText,
                correctAnswer: correctAnswer,
                options: options, // Incorrect options
                // correctIndex will be determined after shuffling in generateTest
            };
            questions.push(question);
        } else {
            console.warn(`parseCSV: Skipping invalid line ${i + 1} in ${subject} - ${topic}:`, lines[i]);
        }
    }

    // Add the parsed questions to the main data structure
    if (!data[subject]) {
        console.warn(`parseCSV: Subject "${subject}" not found in data structure. Creating.`);
        data[subject] = {};
    }
    if (!data[subject][topic]) {
        data[subject][topic] = []; // Initialize if topic doesn't exist (shouldn't happen with predefined structure)
    }
    data[subject][topic] = questions;
    console.log(`Parsed ${questions.length} questions for ${subject} - ${topic}`);
}

function generateTest() {
    console.log("Generating test...");
    if (!testContainer || !noQuestionsMessage || !subjectSelect || !topicSelect || !schoolTypeSelect) {
        console.error("generateTest prerequisite elements missing.");
        return;
    }

    const schoolType = schoolTypeSelect.value; // Get selected school
    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    testContainer.innerHTML = '';
    testContainer.style.display = 'none';
    noQuestionsMessage.style.display = 'none';

    if (!schoolType || !subject || !topic) {
        noQuestionsMessage.textContent = "Prosím vyberte typ školy, předmět a okruh.";
        noQuestionsMessage.style.display = 'block';
        return;
    }

    try {
        // --- Check if Subject uses JSON Format ---
        if (subject === "Čeština" || subject === "Angličtina") {
            const jsonData = data[subject]?.[topic];
            if (!jsonData || typeof jsonData !== 'object' || !jsonData.questions || jsonData.questions.length === 0) {
                let errorMsg = `Data pro ${subject} - "${topic}" nebyla nalezena nebo načtena.`;
                if (jsonData && (!jsonData.questions || jsonData.questions.length === 0)) {
                    errorMsg = `Chyba ve struktuře JSON souboru pro ${subject} - "${topic}". Chybí pole 'questions' nebo je prázdné.`;
                }
                throw new Error(errorMsg);
            }

            console.log(`Generating JSON test for ${subject} - ${topic}`);
            // Find correct 'druh' ONLY if it's Czech
            let correctDruh = null;
            if (subject === "Čeština") {
                correctDruh = jsonData.questions.find(q => q.id === 'druh')?.correctAnswer;
                console.log("DEBUG: Correct 'druh' for conditional questions:", correctDruh);
            }

            jsonData.questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question', `question-type-${q.type}`);
                const uniqueQuestionId = `${subject}|${topic}|${q.id}`; // Create unique ID
                questionDiv.dataset.questionId = uniqueQuestionId;
                questionDiv.dataset.questionType = q.type;

                // --- Store Correct Answer(s) ---
                let correctValue = null;
                if (subject === "Čeština" && q.type === 'conditional_mc_single' && q.correctBasedOn && correctDruh) {
                    correctValue = q.correctBasedOn[correctDruh] || null; // Get conditional answer
                    if (correctValue === null) console.error(`Missing conditional correct answer for ${uniqueQuestionId} based on druh ${correctDruh}`);
                } else if (q.correctAnswers) { // Handle multiple correct first
                    correctValue = JSON.stringify([...q.correctAnswers].sort()); // Ensure array and sort
                } else if (q.correctAnswer) { // Handle single correct
                    correctValue = (q.type === 'free_text') ? q.correctAnswer.toLowerCase() : q.correctAnswer;
                } else {
                    console.error(`Missing correct answer data for question ${uniqueQuestionId}`);
                }
                if (correctValue !== null) {
                    questionDiv.dataset.correct = correctValue;
                } else {
                    questionDiv.dataset.correct = "CHYBA_V_DATECH"; // Fallback marker
                }
                // --- End Store Correct Answer ---

                const questionTextDiv = document.createElement('div');
                questionTextDiv.classList.add('question-text');
                questionTextDiv.textContent = `${index + 1}. ${q.questionText}`;
                questionDiv.appendChild(questionTextDiv);

                // Add placeholder for stats display
                let statsSpan = document.createElement('span');
                statsSpan.classList.add('question-stats-display');
                questionTextDiv.insertAdjacentElement('afterend', statsSpan);

                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('question-options');

                // --- Generate Input Based on Type ---
                switch (q.type) {
                    case 'mc_single':
                    case 'conditional_mc_single':
                        let optionsToShow = q.options || [];
                        // Apply Czech-specific conditional logic for OPTIONS display
                        if (subject === "Čeština" && q.type === 'conditional_mc_single') {
                            if (q.optionsBasedOn && correctDruh) optionsToShow = q.optionsBasedOn[correctDruh] || [];
                            else { optionsToShow = []; console.error(`Missing options for conditional Q ${q.id}`); }
                        } // English/Other conditional MIGHT just use standard options

                        if (optionsToShow.length === 0) optionsDiv.textContent = "Chyba: Možnosti nenalezeny.";
                        else {
                            const shuffledOptions = shuffleArray([...optionsToShow]); // Always shuffle options
                            shuffledOptions.forEach(optionText => {
                                const label = document.createElement('label'); label.classList.add('option-label');
                                const input = document.createElement('input'); input.type = 'radio'; input.name = `question_${q.id}`; input.value = optionText;
                                label.appendChild(input); label.appendChild(document.createTextNode(` ${optionText}`));
                                optionsDiv.appendChild(label);
                            });
                        }
                        break;
                    case 'free_text':
                        const input = document.createElement('input'); input.type = 'text'; input.name = `question_${q.id}`; input.placeholder = 'Napište odpověď...'; input.classList.add('free-text-input');
                        optionsDiv.appendChild(input);
                        break;
                    case 'mc_multiple':
                        if (!q.options || q.options.length === 0) optionsDiv.textContent = "Chyba: Možnosti nenalezeny.";
                        else {
                            const shuffledOptions = shuffleArray([...q.options]);
                            shuffledOptions.forEach(optionText => {
                                const label = document.createElement('label'); label.classList.add('option-label');
                                const input = document.createElement('input'); input.type = 'checkbox'; input.name = `question_${q.id}_${optionText}`; input.value = optionText; // Unique name per checkbox helpful
                                label.appendChild(input); label.appendChild(document.createTextNode(` ${optionText}`));
                                optionsDiv.appendChild(label);
                            });
                        }
                        break;
                    default: optionsDiv.textContent = `Neznámý typ otázky: ${q.type}`;
                }
                questionDiv.appendChild(optionsDiv);
                testContainer.appendChild(questionDiv);
            }); // End forEach question

            // --- End JSON Test Generation ---
        } else {
            // --- Generate Standard Multiple Choice Test (CSV based) ---
            console.log(`Generating CSV test for ${subject} - ${topic}`);
            let sourceQuestions = [];
            if (topic === "Souhrnné opakování") {
                // ... (Logic to get questionsPerTopicSummary from other topics in data[subject]) ...
                const otherTopics = Object.keys(data[subject] || {}).filter(t => t !== "Souhrnné opakování" && data[subject][t]?.length > 0); // Ensure topic has data
                if (otherTopics.length === 0) throw new Error("Nebyly nalezeny žádné okruhy s otázkami pro souhrnný test.");
                otherTopics.forEach(ot => {
                    const questionsFromTopic = data[subject][ot];
                    sourceQuestions.push(...getRandomQuestions(questionsFromTopic, questionsPerTopicSummary));
                });
                shuffleArray(sourceQuestions); // Shuffle combined questions
            } else {
                const availableQuestions = data[subject]?.[topic];
                if (!availableQuestions || !Array.isArray(availableQuestions) || availableQuestions.length === 0) throw new Error(`Pro okruh "${topic}" nebyly nalezeny žádné otázky (CSV).`);
                sourceQuestions = getRandomQuestions(availableQuestions, questionsPerStandardTest); // Get random subset
            }

            if (sourceQuestions.length === 0) throw new Error("Nepodařilo se vygenerovat žádné otázky pro tento test.");
            console.log(`Generated ${sourceQuestions.length} CSV-based questions.`);

            sourceQuestions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question', 'question-type-standard-mc');
                // Unique ID: Subject|Topic|SourceIdentifier (ensure _sourceIdentifier exists from parseCSV)
                const uniqueQuestionId = `${subject}|${topic}|${q._sourceIdentifier || `csv-unknown-${index}`}`; // Fallback ID
                questionDiv.dataset.questionId = uniqueQuestionId;
                questionDiv.dataset.questionType = 'standard-mc';

                const questionTextDiv = document.createElement('div');
                questionTextDiv.classList.add('question-text');
                questionTextDiv.textContent = `${index + 1}. ${q.text}`;
                questionDiv.appendChild(questionTextDiv);

                // Add placeholder for stats display
                let statsSpan = document.createElement('span');
                statsSpan.classList.add('question-stats-display');
                questionTextDiv.insertAdjacentElement('afterend', statsSpan);

                const allOptions = [...q.options, q.correctAnswer];
                shuffleArray(allOptions);
                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('question-options');
                allOptions.forEach(optionText => { /* ... create standard-mc option divs ... */ });
                questionDiv.appendChild(optionsDiv);
                testContainer.appendChild(questionDiv);
            });
            // --- End CSV Test Generation ---
        }

        // --- Add Submit Button ---
        if (submitBtn && submitBtn.parentNode) submitBtn.remove();
        submitBtn = document.createElement('button');
        submitBtn.classList.add('btn', 'btn-primary', 'submit-test-btn');
        submitBtn.style.marginTop = '2rem';
        submitBtn.textContent = 'Odeslat odpovědi';
        submitBtn.addEventListener('click', () => evaluateTest(db));
        testContainer.appendChild(submitBtn);
        testContainer.style.display = 'block'; // Show test

    } catch (error) { // Catch errors during generation
        console.error("Error generating test:", error);
        noQuestionsMessage.textContent = error.message || "Nepodařilo se vygenerovat test.";
        noQuestionsMessage.style.display = 'block';
        testContainer.style.display = 'none';
    }
}

/**
 * Evaluates the completed test, updates user stats/achievements/quests, saves data, shows results.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 */
async function evaluateTest(db) {
    console.log("Starting test evaluation...");

    // --- 1. Get DOM Elements and Initial Variables ---
    const questionElements = document.querySelectorAll('#test-container .question');
    const total = questionElements.length;
    const resultCorrectEl = document.getElementById('result-correct');
    const resultTotalEl = document.getElementById('result-total');
    const resultPercentageEl = document.getElementById('result-percentage');
    const modalEl = document.getElementById('test-completion-modal');
    const submitButton = document.querySelector('.submit-test-btn');
    const currentSubject = subjectSelect.value; // Get subject early
    const currentTopic = topicSelect.value;    // Get topic early
    const currentSchool = schoolTypeSelect.value; // Get school type early

    let correctAnswersCount = 0;
    let allQuestionsCorrect = total > 0;

    if (total === 0) {
        console.warn("evaluateTest called with no questions rendered.");
        return;
    }
    if (submitButton) submitButton.disabled = true; // Disable submit button

    // --- 2. Evaluate Each Question ---
    questionElements.forEach((questionElement, qIndex) => {
        // Disable inputs/options first
        questionElement.querySelectorAll('input, .option').forEach(el => {
            if (el.tagName === 'INPUT') el.disabled = true;
            else el.style.pointerEvents = 'none';
        });

        const questionType = questionElement.dataset.questionType;
        const correctAnswer = questionElement.dataset.correct;
        let isQuestionCorrect = false;

        try {
            // --- Answer Evaluation Logic (Switch statement) ---
            switch (questionType) {
                case 'mc_single':
                case 'conditional_mc_single':
                    const selectedRadio = questionElement.querySelector('input[type="radio"]:checked');
                    questionElement.querySelectorAll('.option-label').forEach(label => {
                        const radio = label.querySelector('input');
                        if (!radio) return;
                        if (radio.value === correctAnswer) label.classList.add('correct');
                        if (radio.checked) {
                            if (radio.value === correctAnswer) isQuestionCorrect = true;
                            else label.classList.add('incorrect');
                        }
                    });
                    if (!selectedRadio) allQuestionsCorrect = false;
                    else if (!isQuestionCorrect) allQuestionsCorrect = false;
                    break;
                case 'free_text':
                    const input = questionElement.querySelector('.free-text-input');
                    if (!input) break;
                    const userAnswer = input.value.trim().toLowerCase();
                    const correctAnswerLower = correctAnswer?.toLowerCase() ?? '';
                    if (userAnswer === correctAnswerLower && userAnswer !== '') {
                        isQuestionCorrect = true; input.classList.add('correct');
                    } else {
                        input.classList.add('incorrect'); allQuestionsCorrect = false;
                        if (userAnswer !== '' && correctAnswer != null) {
                            const correctAnswerDisplay = document.createElement('span');
                            correctAnswerDisplay.classList.add('correct-answer-display');
                            correctAnswerDisplay.textContent = ` (Správně: ${correctAnswer})`;
                            input.parentNode.appendChild(correctAnswerDisplay);
                        }
                    }
                    if (!input.value.trim()) allQuestionsCorrect = false;
                    break;
                case 'mc_multiple':
                    let correctAnswersArray = [];
                    try { if (correctAnswer) correctAnswersArray = JSON.parse(correctAnswer).sort(); }
                    catch (e) { console.error("JSON parse error mc_multiple:", e); }
                    const selectedCheckboxes = questionElement.querySelectorAll('input[type="checkbox"]:checked');
                    const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.value).sort();
                    isQuestionCorrect = selectedValues.length === correctAnswersArray.length && selectedValues.every((v, i) => v === correctAnswersArray[i]);
                    questionElement.querySelectorAll('.option-label').forEach(label => {
                        const checkbox = label.querySelector('input');
                        if (!checkbox) return;
                        const isActuallyCorrect = correctAnswersArray.includes(checkbox.value);
                        if (isActuallyCorrect) label.classList.add('correct');
                        if (checkbox.checked && !isActuallyCorrect) label.classList.add('incorrect');
                    });
                    if (!isQuestionCorrect) allQuestionsCorrect = false;
                    break;
                case 'standard-mc':
                    const selectedOptionDiv = questionElement.querySelector('.option.selected');
                    questionElement.querySelectorAll('.option').forEach(option => {
                        const isCorrect = option.dataset.correct === 'true';
                        if (isCorrect) option.classList.add('correct');
                        if (option.classList.contains('selected')) {
                            if (isCorrect) isQuestionCorrect = true; else option.classList.add('incorrect');
                        }
                    });
                    if (!selectedOptionDiv) allQuestionsCorrect = false;
                    else if (!isQuestionCorrect) allQuestionsCorrect = false;
                    break;
                default:
                    console.warn(`Unknown question type: ${questionType}`); allQuestionsCorrect = false;
            }
            // --- End Evaluation Logic ---
        } catch (evalError) {
            console.error(`Error evaluating question ${qIndex + 1}:`, evalError); allQuestionsCorrect = false;
        }

        if (isQuestionCorrect) correctAnswersCount++;
        console.log(`Question ${qIndex + 1} (${questionType}): ${isQuestionCorrect ? 'Correct' : 'Incorrect'}`);

    }); // End questionElements.forEach

    console.log(`Test Result: ${correctAnswersCount}/${total}, Flawless: ${allQuestionsCorrect}`);

    // --- 3. Show Results Modal ---
    if (resultCorrectEl) resultCorrectEl.textContent = correctAnswersCount;
    if (resultTotalEl) resultTotalEl.textContent = total;
    const finalSuccessRate = total > 0 ? Math.round((correctAnswersCount / total) * 100) : 0;
    if (resultPercentageEl) resultPercentageEl.textContent = `${finalSuccessRate}%`;
    if (modalEl) modalEl.classList.add('show');

    // --- 4. Update User Data (If Logged In) ---
    if (!currentUser || !db) {
        console.warn("User not logged in or DB not available. Test results not saved.");
        addBackButtonToTestContainer();
        return;
    }

    console.log("Attempting user data update in Firestore...");
    try {
        // --- 4a. Get Fresh User Data ---
        const userData = await getUserData(currentUser, db);
        if (!userData) throw new Error("Nepodařilo se načíst data uživatele pro update.");

        // --- 4b. Initialize Structures ---
        userData.progress = userData.progress || {};
        userData.achievements = userData.achievements || {};
        userData.activity = userData.activity || {};
        userData.dailyQuests = userData.dailyQuests || { quests: [], subjectsToday: [], testsTodayIds: [], bonusXPAwarded: false };
        userData.dailyQuests.quests = userData.dailyQuests.quests || [];
        userData.dailyQuests.subjectsToday = userData.dailyQuests.subjectsToday || [];
        userData.dailyQuests.testsTodayIds = userData.dailyQuests.testsTodayIds || [];
        userData.dailyQuests.bonusXPAwarded = userData.dailyQuests.bonusXPAwarded || false;
        userData.completedTopics = new Set(userData.completedTopics || []);

        const uniqueTestId = currentSubject && currentTopic ? `${currentSubject}-${currentTopic}` : null;

        // --- 4c. Update Base Stats & Activity ---
        const baseXPIncrement = correctAnswersCount;
        userData.testsToday = (userData.testsToday || 0) + 1;
        userData.correctAnswersToday = (userData.correctAnswersToday || 0) + correctAnswersCount;
        userData.totalTestsCompleted = (userData.totalTestsCompleted || 0) + 1;
        userData.totalXP = (userData.totalXP || 0) + baseXPIncrement;
        userData.weeklyXP = (userData.weeklyXP || 0) + baseXPIncrement;

        // Subject Progress
        if (currentSubject && data[currentSubject]) {
            userData.progress[currentSubject] = userData.progress[currentSubject] || { testsCompleted: 0, correctAnswers: 0, totalQuestionsAnswered: 0, successRate: 0 };
            const subjData = userData.progress[currentSubject];
            subjData.testsCompleted++; subjData.correctAnswers += correctAnswersCount;
            subjData.totalQuestionsAnswered = (subjData.totalQuestionsAnswered || 0) + total;
            subjData.successRate = subjData.totalQuestionsAnswered > 0 ? Math.round((subjData.correctAnswers / subjData.totalQuestionsAnswered) * 100) : 0;
        } else if (currentSubject) { console.warn(`Progress not updated for subject "${currentSubject}" (no data loaded).`); }

        // Average Success Rate
        let totalSuccessSum = 0, numSubjectsWithProgress = 0;
        for (const subjKey in userData.progress) {
            if (userData.progress[subjKey]?.testsCompleted > 0) {
                totalSuccessSum += (userData.progress[subjKey].successRate || 0); numSubjectsWithProgress++;
            }
        }
        userData.averageSuccessRate = numSubjectsWithProgress > 0 ? Math.round(totalSuccessSum / numSubjectsWithProgress) : 0;

        // Streaks & Activity Log
        const today = new Date(); const todayDateString = today.toDateString();
        const todayYear = today.getFullYear(); const todayMonth = today.getMonth(); const todayDay = today.getDate();
        if (finalSuccessRate >= 80) {
            const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
            if (userData.lastCompletedTestDate !== todayDateString) {
                if (userData.lastCompletedTestDate === yesterday.toDateString()) userData.dayStreak = (userData.dayStreak || 0) + 1; else userData.dayStreak = 1;
                userData.lastCompletedTestDate = todayDateString;
            }
        } else { if (userData.lastCompletedTestDate !== todayDateString) userData.dayStreak = 0; }
        userData.activity[todayYear] = userData.activity[todayYear] || {}; userData.activity[todayYear][todayMonth] = userData.activity[todayYear][todayMonth] || {};
        userData.activity[todayYear][todayMonth][todayDay] = (userData.activity[todayYear][todayMonth][todayDay] || 0) + 1;
        userData.lastActivityDate = todayDateString;


        // --- 4d. Update Daily Quests ---
        let earnedBonusXP = 0;
        const quests = userData.dailyQuests.quests;
        const bonusWasAlreadyAwarded = userData.dailyQuests.bonusXPAwarded;
        const schoolType = schoolTypeSelect.value;

        // Track unique subjects/tests today
        if (currentSubject && !userData.dailyQuests.subjectsToday.includes(currentSubject)) userData.dailyQuests.subjectsToday.push(currentSubject);
        if (uniqueTestId && !userData.dailyQuests.testsTodayIds.includes(uniqueTestId)) userData.dailyQuests.testsTodayIds.push(uniqueTestId);
        const topicFileExists = schoolType && currentSubject && currentTopic && schoolSubjectConfig[schoolType]?.[currentSubject]?.[currentTopic];
        const isNewTopicOverall = currentTopic && topicFileExists && !userData.completedTopics.has(currentTopic);

        let allQuestsNowComplete = true;
        console.log("Checking daily quests update...");
        quests.forEach(quest => {
            if (!quest.isCompleted) {
                let progressIncrement = 0;
                switch (quest.type) {
                    case "complete_tests": progressIncrement = 1; break;
                    case "flawless_tests": if (allQuestionsCorrect) progressIncrement = 1; break;
                    case "earn_xp": progressIncrement = correctAnswersCount; break;
                    case "unique_subjects": quest.currentProgress = userData.dailyQuests.subjectsToday.length; break;
                    case "unique_tests": quest.currentProgress = userData.dailyQuests.testsTodayIds.length; break;
                    case "new_tests": if (isNewTopicOverall) progressIncrement = 1; break;
                }
                if (progressIncrement > 0) quest.currentProgress += progressIncrement;
                if (quest.currentProgress >= quest.target) { quest.isCompleted = true; console.log(`DQ Item Completed: ${quest.description}`); }
            }
            if (!quest.isCompleted) allQuestsNowComplete = false;
        });

        if (allQuestsNowComplete && !bonusWasAlreadyAwarded) {
            console.log("All DQ completed! Awarding bonus.");
            earnedBonusXP = 25; userData.dailyQuests.bonusXPAwarded = true;
            userData.totalXP += earnedBonusXP; userData.weeklyXP += earnedBonusXP;
        }
        // --- End Quest Update ---

        // --- 4e. Update Achievements & Completed Topics ---
        if (allQuestionsCorrect) {
            userData.flawlessTestCount = (userData.flawlessTestCount || 0) + 1;
            userData.winningStreakCount = (userData.winningStreakCount || 0) + 1;
        } else userData.winningStreakCount = 0;
        if (isNewTopicOverall) userData.completedTopics.add(currentTopic);
        updateAchievements(userData);


        // --- 5. Prepare & Save ---
        // ---> Log activity object right before creating dataToSave <---
        console.log("DEBUG: userData.activity BEFORE creating dataToSave:", JSON.stringify(userData.activity, null, 2));

        const dataToSave = { ...userData, completedTopics: Array.from(userData.completedTopics) };

        // ---> Log the object being sent to saveUserData <---
        console.log("DEBUG: dataToSave object being sent:", JSON.stringify(dataToSave, null, 2));

        await saveUserData(currentUser, dataToSave, db); // Call save

        // --- 6. Update UI ---
        console.log("Updating UI after save...");
        updateDailyQuestsUI(userData.dailyQuests.quests, userData.dailyQuests.bonusXPAwarded);
        updateStatisticsSection(userData); // Reflects final XP
        updateDashboard(userData);
        updateProgressSection(userData); // Reflects final XP/counts
        updateAchievementsUI(userData);
        await generateCalendar(currentYear, currentMonth, db); // Regenerate calendar
        if (isNewTopicOverall) {
            userData.completedTopics.add(currentTopic); // Add to set
            console.log(`Added "${currentTopic}" to overall completed topics.`);
        }

        // --- 7. Refresh Leaderboard ---
        const isDashboardVisible = (dashboardSection && dashboardSection.style.display === 'block');
        if (isDashboardVisible) { console.log("Refreshing leaderboard..."); await refreshLeaderboard(); }

    } catch (error) {
        console.error("Error during user data update/save:", error);
        alert(`Chyba při ukládání výsledků: ${error.message || error}`);
    } finally {
        // --- 8. Add Back Button ---
        addBackButtonToTestContainer();
    }
}


/** Adds the 'Back to Test Selection' button if not already present */
function addBackButtonToTestContainer() {
    if (!testContainer) return;
    // Remove old submit button if it exists
    if (submitBtn && submitBtn.parentNode) {
        submitBtn.remove();
        submitBtn = null; // Clear reference
    }
    // Check if back button already exists
    let existingBackBtn = testContainer.querySelector('#dynamic-back-btn');
    if (!existingBackBtn) {
        const backBtn = document.createElement('button');
        backBtn.id = 'dynamic-back-btn'; // Give it an ID
        backBtn.type = 'button';
        backBtn.classList.add('btn', 'btn-primary');
        backBtn.style.marginTop = '2rem'; // Add space
        backBtn.textContent = 'Zpět na výběr testů';
        backBtn.addEventListener('click', handleBackToTestSelection);
        // Append after the last question or at the end
        testContainer.appendChild(backBtn);
    }
}

/** Logic for the 'Back to Test Selection' button */
function handleBackToTestSelection() {
    if (modal) modal.classList.remove('show'); // Hide modal if shown
    if (testContainer) {
        testContainer.innerHTML = ''; // Clear the test content
        testContainer.style.display = 'none';
    }
    if (subjectSelect) subjectSelect.value = "";
    if (topicSelect) {
        topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
        topicSelect.disabled = true;
    }
    if (generateTestBtn) {
        generateTestBtn.disabled = true; // Disable until subject/topic selected
        generateTestBtn.style.display = 'inline-block'; // Ensure visible
    }
    showTestSection(); // Show the test selection interface
}


// --- Achievement Calculation ---

/**
 * Calculates the achievement level based on a value and predefined levels.
 * @param {number[]} levels - An array of thresholds for each level.
 * @param {number} value - The current value to check against the levels.
 * @returns {number} The achieved level (0 if none).
 */
function calculateLevel(levels, value) {
    let level = 0;
    if (value === undefined || value === null || !Array.isArray(levels)) return 0; // Basic validation
    for (let i = 0; i < levels.length; i++) {
        if (value >= levels[i]) {
            level = i + 1;
        } else {
            break; // Stop checking once a threshold isn't met
        }
    }
    return level;
}

/**
 * Updates all achievement levels within the userData object.
 * @param {object} userData - The user data object (will be mutated).
 */
function updateAchievements(userData) {
    if (!userData || !userData.achievements) return; // Safety check

    const achievements = userData.achievements; // Shortcut

    // XP Collector
    achievements.xpCollector = calculateLevel(
        achievementLevels.xpCollector.levels,
        userData.totalXP || 0
    );
    // Unstoppable (Day Streak)
    achievements.unstoppable = calculateLevel(
        achievementLevels.unstoppable.levels,
        userData.dayStreak || 0
    );
    // Flawless (Perfect Tests)
    achievements.flawless = calculateLevel(
        achievementLevels.flawless.levels,
        userData.flawlessTestCount || 0
    );
    // Winning Streak (Consecutive Perfect Tests)
    achievements.winningStreak = calculateLevel(
        achievementLevels.winningStreak.levels,
        userData.winningStreakCount || 0
    );
    // Topic Master (Unique Topics Completed)
    // Use the size of the Set *before* it was converted back to Array
    const completedTopicsSet = new Set(userData.completedTopics || []);
    achievements.topicMaster = calculateLevel(
        achievementLevels.topicMaster.levels,
        completedTopicsSet.size
    );

    // --- Time-Based Achievements ---
    const now = new Date();
    const hour = now.getHours();

    // Early Bird (Tests between 5 AM and 8 AM)
    if (hour >= 5 && hour < 8) {
        // Note: This increments count every time evaluateTest runs in this window.
        // If you only want to count *days* with early tests, logic needs adjustment.
        achievements.earlyBirdCount = (achievements.earlyBirdCount || 0) + 1;
    }
    achievements.earlyBird = calculateLevel(
        achievementLevels.earlyBird.levels,
        achievements.earlyBirdCount || 0
    );

    // Night Owl (Tests between 9 PM and 1 AM)
    if (hour >= 21 || hour < 1) {
        achievements.nightOwlCount = (achievements.nightOwlCount || 0) + 1;
    }
    achievements.nightOwl = calculateLevel(
        achievementLevels.nightOwl.levels,
        achievements.nightOwlCount || 0
    );

    // Marathoner (Tests completed today)
    achievements.marathoner = calculateLevel(
        achievementLevels.marathoner.levels,
        userData.testsToday || 0 // Assuming testsToday is reset daily (needs separate logic)
    );
}

async function getActivityData(year, month, db) {
    if (!currentUser || !db) return {}; // Return empty if no user/db
    try {
        const userData = await getUserData(currentUser, db); // Use the improved getter
        if (userData?.activity?.[year]?.[month]) {
            return userData.activity[year][month];
        }
        return {}; // Return empty if no data for this period
    } catch (error) {
        console.error("Error fetching activity data:", error);
        return {}; // Return empty on error
    }
}

function getActivityClass(count) {
    if (count === 0) return 'activity-none';
    if (count >= 1 && count <= 2) return 'activity-low';
    if (count >= 3 && count <= 4) return 'activity-medium';
    if (count >= 5 && count <= 6) return 'activity-high';
    return 'activity-very-high'; // 7+
}

async function generateCalendar(year, month, db) {
    if (!calendarGrid || !currentMonthDisplay) return;
    calendarGrid.innerHTML = ''; // Clear previous grid

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    // Adjust startingDay: 0=Sunday -> 6, 1=Monday -> 0, etc. to make Monday first day
    const startingDay = (firstDayOfMonth.getDay() + 6) % 7;

    // Fetch activity data for the month asynchronously
    const activityData = await getActivityData(year, month, db);

    // Display month and year
    currentMonthDisplay.textContent = firstDayOfMonth.toLocaleString('cs-CZ', { month: 'long', year: 'numeric' });

    // Add day headers (optional but good UX)
    const dayNames = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];
    dayNames.forEach(name => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header'); // Add a class for styling
        dayHeader.textContent = name;
        dayHeader.style.textAlign = 'center'; // Basic styling
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.fontSize = '0.8em';
        calendarGrid.appendChild(dayHeader);
    });


    // Create blank cells for days before the 1st
    for (let i = 0; i < startingDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day', 'inactive');
        calendarGrid.appendChild(dayDiv);
    }

    // Create cells for each day of the month
    const today = new Date(); // Get today's date for highlighting
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;

        // Apply activity class
        const dayCount = activityData[day] || 0;
        const activityClass = getActivityClass(dayCount);
        if (activityClass) {
            dayDiv.classList.add(activityClass);
        }

        // Highlight today's date
        if (year === todayYear && month === todayMonth && day === todayDate) {
            dayDiv.classList.add('active');
        }

        // Add tooltip or click event (optional)
        dayDiv.title = `${day}.${month + 1}.${year}: ${dayCount} testů`; // Simple tooltip
        dayDiv.addEventListener('click', () => {
            console.log(`Kliknuto na den: ${day}.${month + 1}.${year} (${dayCount} testů)`);
            // Could show more details here in the future
        });

        calendarGrid.appendChild(dayDiv);
    }
}


// --- Utility Functions ---

/** Shuffles array in place using Fisher-Yates. */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/** Selects N random elements from an array without replacement. */
function getRandomQuestions(arr, n) {
    if (!arr || arr.length === 0) return [];
    const shuffled = shuffleArray(arr.slice()); // Create a shuffled copy
    return shuffled.slice(0, Math.min(n, arr.length)); // Return the first N elements
}

/** Initializes the subject dropdown menu. */
function initializeSchoolTypes() {
    if (!schoolTypeSelect) return;
    schoolTypeSelect.innerHTML = '<option value="">Vyberte typ školy</option>'; // Reset
    for (const schoolType in schoolSubjectConfig) {
        const option = document.createElement('option');
        option.value = schoolType;
        option.textContent = schoolType;
        schoolTypeSelect.appendChild(option);
    }
    // Ensure subject/topic are disabled initially
    if (subjectSelect) subjectSelect.disabled = true;
    if (topicSelect) topicSelect.disabled = true;
    if (generateTestBtn) generateTestBtn.disabled = true;
}
/**
 * Populates the Subject dropdown based on the selected school type.
 */
function populateSubjects(selectedSchoolType) {
    if (!subjectSelect || !topicSelect || !generateTestBtn) return;

    // Reset subject and topic dropdowns
    subjectSelect.innerHTML = '<option value="">Vyberte předmět</option>';
    topicSelect.innerHTML = '<option value="">Nejprve předmět</option>';
    subjectSelect.disabled = true;
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;
    if (toggleFavoriteBtn) { // Hide/disable favorite button too
        toggleFavoriteBtn.style.display = 'none';
        toggleFavoriteBtn.disabled = true;
    }


    if (!selectedSchoolType || !schoolSubjectConfig[selectedSchoolType]) {
        subjectSelect.innerHTML = '<option value="">Nejprve typ školy</option>';
        return; // Exit if no valid school type selected
    }

    const subjectsForSchool = Object.keys(schoolSubjectConfig[selectedSchoolType]);

    // Optional: Sort subjects alphabetically if desired for this dropdown
    // subjectsForSchool.sort((a, b) => a.localeCompare(b, 'cs'));

    subjectsForSchool.forEach(subject => {
        // Optional: Check if any data actually exists for this subject before adding
        if (!data[subject] || Object.keys(data[subject]).length === 0) {
            console.warn(`No data found for subject "${subject}", not adding to dropdown.`);
            // return; // Uncomment to hide subjects with no loaded topics
        }

        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    subjectSelect.disabled = false; // Enable subject selection
}

function populateTopics(subject, userData) {
    console.log(`DEBUG: populateTopics started with subject: "${subject}"`);
    if (!topicSelect || !generateTestBtn || !toggleFavoriteBtn) {
        console.error("DEBUG: populateTopics exiting - elements missing!");
        return;
    }

    const currentTopicValue = topicSelect.value;
    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;
    toggleFavoriteBtn.style.display = 'none'; // Hide favorite button by default
    toggleFavoriteBtn.disabled = true;

    if (!subject || !data[subject]) {
        console.warn(`DEBUG: populateTopics - Invalid subject "${subject}" or no data.`);
        topicSelect.innerHTML = '<option value="">Neplatný předmět nebo chybí data</option>';
        return;
    }

    let topics = Object.keys(data[subject]); // Get topics from the flat 'data' object
    console.log(`DEBUG: Topics found for "${subject}":`, topics);

    if (topics.length === 0 || (topics.length === 1 && topics[0] === "Zatím žádná témata")) {
        console.warn(`DEBUG: No actual topics found for subject "${subject}".`);
        topicSelect.innerHTML = '<option value="">Žádné okruhy nenalezeny</option>';
        return;
    }

    // --- SORTING (ONLY for Čeština Favorites) ---
    if (subject === "Čeština") {
        const favoriteBooks = userData?.favoriteBooks || [];
        topics.sort((a, b) => {
            const aIsFav = favoriteBooks.includes(a);
            const bIsFav = favoriteBooks.includes(b);
            if (aIsFav && !bIsFav) return -1;
            if (!aIsFav && bIsFav) return 1;
            return a.localeCompare(b, 'cs'); // Alpha for others
        });
        // Favorite button only visible for Czech
        toggleFavoriteBtn.style.display = 'inline-block';
    }
    // No 'else' needed - other subjects retain original order from Object.keys

    // --- Populate Options ---
    topics.forEach(topic => {
        if (topic === "Zatím žádná témata" && data[subject][topic] === null) {
            return; // Skip placeholder option
        }

        const option = document.createElement('option');
        option.value = topic;
        let displayText = topic;
        // Add star ONLY if subject is Čeština AND it's a favorite
        if (subject === "Čeština" && userData?.favoriteBooks?.includes(topic)) {
            displayText = "★ " + topic;
        }
        option.textContent = displayText;
        topicSelect.appendChild(option);
    });

    topicSelect.disabled = false; // Enable dropdown

    // --- Restore Selection & Enable Buttons ---
    if (topics.includes(currentTopicValue)) {
        topicSelect.value = currentTopicValue;
        generateTestBtn.disabled = false; // Enable generate test
        // Enable favorite button ONLY if Czech AND a topic is selected
        if (subject === "Čeština") {
            toggleFavoriteBtn.disabled = false;
        }
    } else {
        // No valid selection restored, keep buttons disabled
        generateTestBtn.disabled = true;
        if (subject === "Čeština") {
            toggleFavoriteBtn.disabled = true;
        }
    }
}
async function handleToggleFavorite() {
    if (!currentUser || !subjectSelect || !topicSelect || !db) {
        console.warn("Cannot toggle favorite: User not logged in or elements missing.");
        return;
    }

    const selectedSubject = subjectSelect.value;
    const selectedTopic = topicSelect.value;

    if (selectedSubject !== "Čeština" || !selectedTopic) {
        console.warn("Cannot toggle favorite: Not Čeština subject or no topic selected.");
        return;
    }

    // Disable button temporarily to prevent double clicks
    toggleFavoriteBtn.disabled = true;

    try {
        console.log(`Toggling favorite for: ${selectedTopic}`);
        // Fetch the LATEST user data before modifying
        const userData = await getUserData(currentUser, db);
        if (!userData) {
            throw new Error("Nepodařilo se načíst uživatelská data.");
        }

        // Initialize favoriteBooks if it doesn't exist
        userData.favoriteBooks = userData.favoriteBooks || [];

        const index = userData.favoriteBooks.indexOf(selectedTopic);

        if (index > -1) {
            // It's a favorite, remove it
            userData.favoriteBooks.splice(index, 1);
            console.log(`Removed ${selectedTopic} from favorites.`);
        } else {
            // It's not a favorite, add it
            userData.favoriteBooks.push(selectedTopic);
            console.log(`Added ${selectedTopic} to favorites.`);
        }

        // Save the updated data
        await saveUserData(currentUser, userData, db);
        console.log("User favorites saved.");

        populateTopics(selectedSubject, userData);

        toggleFavoriteBtn.disabled = !topicSelect.value;

    } catch (error) {
        console.error("Error toggling favorite:", error);
        alert("Chyba při ukládání oblíbené položky.");
        // Re-enable button even on error
        toggleFavoriteBtn.disabled = !topicSelect.value;
    }
}
// --- Event Listener Setup ---
function setupEventListeners() {
    // Navigation Links
    document.getElementById('dashboard-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showDashboard();
        // Data is updated automatically if needed when loading user data
    });
    document.getElementById('test-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showTestSection();
    });
    document.getElementById('progress-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showProfileSection();
        // Data should be up-to-date from previous actions or load
        if (currentUser) {
            getUserData(currentUser, db).then(userData => updateProgressSection(userData));
        }
    });
    themeToggleButton?.addEventListener('click', toggleTheme);

    // Auth Link (Login/Logout)
    authLink?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser) {
            logoutUserHandler(auth); // Use handler
        } else {
            showLogin();
        }
    });

    // Login/Register Buttons
    // Modify the event listener setup for registerBtn
    registerBtn?.addEventListener('click', () => {
        if (loginForm.classList.contains('register-mode')) {
            // Already in register mode, perform registration
            registerUserHandler(auth);
        } else {
            // Switch to register mode
            loginForm.classList.add('register-mode');
            loginMessage.textContent = ''; // Clear login messages
            registerBtn.textContent = 'Dokončit registraci'; // Change button text
            if (loginBtn) loginBtn.style.display = 'none'; // Hide login button
        }
    });
    // Add back listener for login button to potentially clear register mode if user clicks login again
    loginBtn?.addEventListener('click', () => {
        if (loginForm.classList.contains('register-mode')) {
            // If user clicks Login while in register mode, switch back
            loginForm.classList.remove('register-mode');
            registerBtn.textContent = 'Registrovat se';
            if (loginBtn) loginBtn.style.display = 'block';
            loginMessage.textContent = ''; // Clear messages
        } else {
            // Perform login
            loginUserHandler(auth);
        }
    });
    profileLink?.addEventListener('click', (e) => {
        e.preventDefault();
        showProfileSection();
    });
    nicknameChangeForm?.addEventListener('submit', handleNicknameChange);
    changePasswordBtn?.addEventListener('click', handleChangePassword);
    deleteAccountBtn?.addEventListener('click', handleDeleteAccount); // Add delete listener
    async function showProfileSection() {
        // 1. Detach any existing listener (Safety check, other show functions should handle it)
        if (leaderboardListenerUnsubscribe) {
            console.log("Detaching previous leaderboard listener before showing Profile/Stats.");
            leaderboardListenerUnsubscribe();
            leaderboardListenerUnsubscribe = null;
        }

        // 2. Show/Hide Sections
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'none';
        if (testSection) testSection.style.display = 'none';
        if (profileSection) profileSection.style.display = 'block';

        // 3. Load Data if User is Logged In
        if (currentUser) {
            console.log("Loading data for Profile/Stats section...");
            try {
                const userData = await getUserData(currentUser, db);
                if (!userData) { throw new Error("Nepodařilo se načíst data uživatele."); }

                loadProfileData();
                updateProgressSection(userData);
                updateAchievementsUI(userData);
            } catch (error) {
                // Handle errors during initial data fetch
                console.error("Error loading profile/stats section data:", error);
                // Clear UI...
                if (profileEmail) profileEmail.textContent = 'Chyba';
                // ... etc ...
                updateProgressSection(null);
                updateAchievementsUI(null);
            }
        } else {
            if (profileEmail) profileEmail.textContent = 'N/A';
            // ... etc ...
            updateProgressSection(null);
            updateAchievementsUI(null);
            // No need to update leaderboard UI here, showLogin/clearUserDataUI handles it
        }
    }
    async function loadProfileData() {
        if (!currentUser || !auth.currentUser || !profileEmail || !profileNickname || !profileJoined) return;

        profileEmail.textContent = auth.currentUser.email || 'N/A';

        try {
            const userData = await getUserData(currentUser, db);
            if (userData) {
                profileNickname.textContent = userData.nickname || 'Nenastaveno';

                if (userData.createdAt && userData.createdAt.toDate) {
                    // Format the timestamp
                    const joinDate = userData.createdAt.toDate();
                    profileJoined.textContent = joinDate.toLocaleDateString('cs-CZ', {
                        day: 'numeric', month: 'long', year: 'numeric'
                    });
                } else {
                    profileJoined.textContent = 'Neznámé';
                }
            } else {
                profileNickname.textContent = 'Chyba';
                profileJoined.textContent = 'Chyba';
            }
        } catch (error) {
            console.error("Error loading profile data:", error);
            profileNickname.textContent = 'Chyba načítání';
            profileJoined.textContent = 'Chyba načítání';
        }
    }
    async function handleNicknameChange(event) {
        event.preventDefault(); // Prevent form submission
        if (!currentUser || !newNicknameInput || !nicknameChangeMessage || !changeNicknameBtn) return;

        const newNickname = newNicknameInput.value.trim();
        console.log("DEBUG: Nickname read from input:", nickname);
        nicknameChangeMessage.textContent = ''; // Clear previous message
        nicknameChangeMessage.className = ''; // Clear success/error class

        // Validation
        const nicknamePattern = /^[a-zA-Z0-9_]{3,15}$/;
        if (!nicknamePattern.test(newNickname)) {
            nicknameChangeMessage.textContent = "Nová přezdívka má neplatný formát.";
            nicknameChangeMessage.classList.add('error');
            return;
        }

        changeNicknameBtn.disabled = true;
        nicknameChangeMessage.textContent = 'Ověřuji a ukládám...';

        try {
            const userData = await getUserData(currentUser, db);
            const oldNickname = userData?.nickname;
            const oldNicknameLower = oldNickname?.toLowerCase();
            const newNicknameLower = newNickname.toLowerCase();


            if (oldNicknameLower === newNicknameLower) {
                nicknameChangeMessage.textContent = "Nová přezdívka je stejná jako stará.";
                changeNicknameBtn.disabled = false;
                return;
            }

            // Check uniqueness ONLY if it's different
            const isUnique = await checkNicknameUniqueness(newNickname);
            if (!isUnique) {
                nicknameChangeMessage.textContent = "Tato přezdívka je již obsazena.";
                nicknameChangeMessage.classList.add('error');
                changeNicknameBtn.disabled = false;
                return;
            }

            // Transaction to update user doc and nickname collection
            const userDocRef = db.collection("users").doc(currentUser);
            const newNicknameDocRef = db.collection("nicknames").doc(newNicknameLower);
            const oldNicknameDocRef = oldNickname ? db.collection("nicknames").doc(oldNicknameLower) : null;


            await db.runTransaction(async (transaction) => {
                // 1. Delete old nickname reservation (if exists)
                if (oldNicknameDocRef) {
                    transaction.delete(oldNicknameDocRef);
                }
                // 2. Create new nickname reservation
                transaction.set(newNicknameDocRef, { userId: currentUser });
                // 3. Update nickname in user document
                transaction.update(userDocRef, { nickname: newNickname });
            });

            nicknameChangeMessage.textContent = "Přezdívka úspěšně změněna!";
            nicknameChangeMessage.classList.add('success');
            if (profileNickname) profileNickname.textContent = newNickname; // Update UI immediately
            newNicknameInput.value = ''; // Clear input


        } catch (error) {
            console.error("Error changing nickname:", error);
            nicknameChangeMessage.textContent = "Chyba při změně přezdívky.";
            nicknameChangeMessage.classList.add('error');
        } finally {
            changeNicknameBtn.disabled = false;
        }
    }
    async function handleChangePassword() {
        if (!auth || !auth.currentUser || !passwordChangeMessage || !changePasswordBtn) return;

        const email = auth.currentUser.email;
        passwordChangeMessage.textContent = '';
        passwordChangeMessage.className = '';
        changePasswordBtn.disabled = true;

        try {
            await auth.sendPasswordResetEmail(email);
            passwordChangeMessage.textContent = `Odkaz pro reset hesla byl zaslán na ${email}. Zkontrolujte si poštu (i spam).`;
            passwordChangeMessage.classList.add('success');
        } catch (error) {
            console.error("Error sending password reset email:", error);
            passwordChangeMessage.textContent = "Chyba při zasílání emailu: " + mapAuthError(error);
            passwordChangeMessage.classList.add('error');
            changePasswordBtn.disabled = false; // Re-enable only on error
        }
        // Keep button disabled on success to prevent spamming
    }
    async function handleDeleteAccount() {
        if (!auth || !auth.currentUser || !db || !deleteAccountBtn || !deleteAccountMessage) return;

        const user = auth.currentUser;
        const uid = user.uid;
        const userEmail = user.email; // For confirmation message

        // --- Confirmation ---
        const confirmation = prompt(`Opravdu chcete trvale smazat svůj účet (${userEmail})? Tato akce je nevratná! Napište "SMAZAT" pro potvrzení:`);
        if (confirmation !== "SMAZAT") {
            deleteAccountMessage.textContent = "Smazání účtu zrušeno.";
            return;
        }
        deleteAccountBtn.disabled = true;
        deleteAccountMessage.textContent = "Mažu účet a data...";
        deleteAccountMessage.className = '';
        try {
            // 1. Get user data to find nickname
            const userData = await getUserData(uid, db);
            const nickname = userData?.nickname;
            const nicknameLower = nickname?.toLowerCase();

            // 2. Delete Firestore Data (User Doc and Nickname Reservation) in Transaction
            const userDocRef = db.collection("users").doc(uid);
            const nicknameDocRef = nicknameLower ? db.collection("nicknames").doc(nicknameLower) : null;


            await db.runTransaction(async (transaction) => {
                if (nicknameDocRef) {
                    // Check if nickname doc still exists before deleting
                    const nickDoc = await transaction.get(nicknameDocRef);
                    if (nickDoc.exists) {
                        transaction.delete(nicknameDocRef);
                    }
                }
                // Check if user doc exists before deleting
                const userDoc = await transaction.get(userDocRef);
                if (userDoc.exists) {
                    transaction.delete(userDocRef);
                }
            });
            console.log("Firestore data deleted for user:", uid);

            // 3. Delete Firebase Auth User
            await user.delete();

            // Auth state listener will handle UI changes (logout, show login)
            console.log("Firebase Auth user deleted successfully.");
            alert("Váš účet byl úspěšně smazán.");
        } catch (error) {
            console.error("Error deleting account:", error);
            deleteAccountMessage.textContent = "Chyba při mazání účtu: " + mapAuthError(error);
            deleteAccountMessage.classList.add('error');
            if (error.code === 'auth/requires-recent-login') {
                deleteAccountMessage.textContent += " Prosím, odhlaste se a znovu přihlaste, poté zkuste smazání znovu.";
            }
            deleteAccountBtn.disabled = false; // Re-enable on error
        }
    }
    schoolTypeSelect?.addEventListener('change', function () {
        const selectedSchool = this.value;
        populateSubjects(selectedSchool);
    });
    // Test Generation Controls
    subjectSelect?.addEventListener('change', async function () { // Make async
        const selectedSubject = this.value; // Get the selected subject name
        console.log(`DEBUG: Subject changed to: "${selectedSubject}"`); // Add log

        // --- Ensure this part runs ---
        const selectedSchool = schoolTypeSelect.value;
        let currentUserData = null;
        if (currentUser) {
            currentUserData = await getUserData(currentUser, db);
        }
        // --- Ensure populateTopics is called with the correct subject ---
        console.log("DEBUG: Calling populateTopics for subject:", selectedSubject);
        populateTopics(selectedSubject, currentUserData);

    });
    topicSelect?.addEventListener('change', function () {
        const isTopicSelected = !!this.value;
        const isCestina = subjectSelect.value === "Čeština";
        if (generateTestBtn) generateTestBtn.disabled = !isTopicSelected;
        if (toggleFavoriteBtn) {
            // Favorite button logic now depends only on Čeština subject being selected,
            // and a topic being chosen. The school type doesn't directly affect it here.
            toggleFavoriteBtn.style.display = isCestina ? 'inline-block' : 'none';
            toggleFavoriteBtn.disabled = !(isTopicSelected && isCestina);
        }
    });
    generateTestBtn?.addEventListener('click', generateTest);

    // Modal Controls
    closeModalBtn?.addEventListener('click', () => {
        if (modal) modal.classList.remove('show');
    });
    backToTestsModalBtn?.addEventListener('click', () => { // Use correct button ID
        handleBackToTestSelection();
    });
    toggleFavoriteBtn?.addEventListener('click', handleToggleFavorite);
    window.addEventListener('click', (event) => { // Close modal on outside click
        if (event.target === modal) {
            if (modal) modal.classList.remove('show');
        }
    });

    // Calendar Navigation
    prevMonthBtn?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth, db); // Regenerate with db
    });
    nextMonthBtn?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth, db); // Regenerate with db
    });
}
/**
 * Fetches top N users based on total XP from Firestore.
 * @param {number} limit - Number of users to fetch.
 * @returns {Promise<Array<{nickname: string, xp: number}>>}
 */
async function fetchLeaderboardData(limit = 10) {
    if (!db) return [];
    try {
        const querySnapshot = await db.collection("users")
            // This line was changed from "totalXP" to "weeklyXP"
            .orderBy("weeklyXP", "desc")
            .limit(limit)
            .get();

        const topUsers = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.nickname && typeof data.weeklyXP === 'number') {
                topUsers.push({
                    nickname: data.nickname,
                    // This now represents the weekly XP value
                    xp: data.weeklyXP
                });
            }
        });
        return topUsers;
    } catch (error) {
        console.error("Error fetching weekly leaderboard data:", error);
        return [];
    }
}

/**
 * Updates the leaderboard UI in the progress section.
 * @param {Array<{nickname: string, xp: number}>} leaderboardData
 */
function updateLeaderboardUI(leaderboardData) {
    if (!leaderboardList) return;

    leaderboardList.innerHTML = ''; // Clear previous entries

    if (!leaderboardData || leaderboardData.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Žebříček je zatím prázdný.';
        li.style.textAlign = 'center';
        li.style.color = '#718096';
        li.style.listStyle = 'none';
        leaderboardList.appendChild(li);
        return;
    }

    leaderboardData.forEach((user, index) => {
        const li = document.createElement('li');
        // Create spans for better styling control
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${index + 1}. ${user.nickname}`;

        const xpSpan = document.createElement('strong'); // Use strong for XP
        xpSpan.textContent = `${user.xp} XP`;

        li.appendChild(nameSpan);
        li.appendChild(xpSpan);
        leaderboardList.appendChild(li);
    });
}

