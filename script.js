// CSV data (otázky z programování)
const csvDataProgramovani = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je algoritmus?;Jednoznačně definovaný postup k řešení problému;Programovací jazyk;Hardwarová komponenta;Uživatelské rozhraní;Definice problému
"Která vlastnost algoritmu zajišťuje, že vždy skončí?";Konečnost;Jednoznačnost;Elementárnost;Obecnost;Výpočetní složitost
"Jak se nazývá algoritmus, který volá sám sebe?";Rekurzivní algoritmus;Iterativní algoritmus;Lineární algoritmus;Podmíněný algoritmus;Paralelní algoritmus
Co je to program?;Implementace algoritmu v programovacím jazyce;Grafický diagram;Databázový systém;Hardwarová struktura;Sada instrukcí
Co je zdrojový kód?;Sekvence instrukcí v konkrétním programovacím jazyce;Textová dokumentace programu;Výsledný strojový kód;Grafický diagram;Uživatelská příručka
Jaký je rozdíl mezi funkcí a metodou v OOP?;Metoda je funkce definovaná uvnitř třídy;Metoda je funkce s více parametry;Funkce nemá návratovou hodnotu;Metoda nelze volat opakovaně;Neexistuje rozdíl
K čemu slouží proměnná?;Ukládá hodnotu v paměti pro další použití;Zajišťuje běh programu;Kompiluje zdrojový kód;Monitoruje výkon aplikace;Tiskne text
Co určuje datový typ?;Jaký typ dat může proměnná obsahovat;Strukturu vývojového diagramu;Výkon programu;Rychlost kompilace;Vzhled GUI
Co je to smyčka (loop)?;Opakování části programu;Podmíněné větvení programu;Výpočetní proces;Zastavení programu;Náhodný běh kódu
Co je pole (array)?;Datová struktura ukládající více hodnot pod jedním jménem;Matematická funkce;OOP metoda;Podmíněný výraz;Textový řetězec
Co je to debugging?;Proces hledání a opravování chyb v programu;Proces optimalizace výkonu;Spouštění programu;Testování uživatelského rozhraní;Distribuce programu
Co je kompilace?;Převod zdrojového kódu do strojového kódu;Převod dat do formátu JSON;Optimalizace algoritmu;Vykonávání kódu přímo;Generování dokumentace
Co znamená optimalizace programu?;Zlepšení výkonu nebo efektivity;Přidání nových funkcí;Odstranění chybných dat;Zvýšení počtu řádků kódu;Zmenšení počtu řádků kódu
Co je vývojový diagram?;Grafické znázornění algoritmu;Výsledný zdrojový kód;Struktura třídy v OOP;Sada testovacích případů;Popis databáze
Co je iterativní algoritmus?;Opakovaně provádí určité kroky;Volá sám sebe;Provádí kroky v náhodném pořadí;Větví se podle podmínek;Běží jen jednou
Jaká je hlavní výhoda používání funkcí?;Znovupoužitelnost kódu;Zpomalení běhu programu;Snížení čitelnosti;Nárůst paměťové náročnosti;Žádná výhoda
Co je to syntaktická chyba?;Chyba v zápisu kódu;Chyba ve výsledku algoritmu;Chyba v uživatelském rozhraní;Chyba v hardwaru;Chyba v datech
Jaký je hlavní rozdíl mezi kompilací a interpretací?;"Kompilace překládá do strojového kódu, interpretace vykonává přímo";Interpretace je vždy rychlejší než kompilace;Kompilace vyžaduje internetové připojení;Interpretace vytváří spustitelný soubor;Jsou stejné
Co je objekt v OOP?;Entita s vlastnostmi a metodami;Výsledek ladění;Datová struktura;Algoritmická smyčka;Soubor s daty
Co je třída v OOP?;Šablona pro vytvoření objektů;Funkce s více parametry;Metoda pro zpracování dat;Podmínka pro rozhodování;Instance objektu
`;
const csvDataVyvojJazyku = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3
Co je strojový kód?;Binární instrukce vykonávané procesorem;Vysoce abstraktní programovací jazyk;Textový formát pro dokumenty;Grafický diagram algoritmu
Který jazyk je považován za první objektově orientovaný?;Smalltalk;C;Pascal;Fortran
Co je hlavním cílem optimalizace kódu?;Zlepšení výkonu a efektivyty;Zvýšení čitelnosti;Přidání nových funkcí;Zajištění kompatibility
Který jazyk je známý svou flexibilitou a efektivitou?;C;Python;Java;Haskell
Co je Visual Studio?;Integrované vývojové prostředí (IDE) od Microsoftu;Operační systém pro servery;Framework pro webové aplikace;Nástroj pro monitorování sítí
Jaký jazyk byl navržen pro vědecké a technické výpočty?;Fortran;COBOL;Python;JavaScript
Který jazyk je považován za první univerzální programovací jazyk?;C;Fortran;Pascal;Java
Jaký je hlavní přínos jazyka Perl?;Zpracování textu a správa systémů;Vývoj mobilních aplikací;Grafické vykreslování;Optimalizace výkonu
Co je hlavní výhodou Pythonu?;Jednoduchost a čitelnost;Vysoká rychlost;Přímá správa paměti;Optimalizace pro hry
Jaký jazyk byl navržen pro obchodní aplikace?;COBOL;Python;Swift;Kotlin
Který jazyk je multiplatformní a klade důraz na bezpečnost?;Java;C++;Swift;Pascal
Který jazyk se stal oficiálním jazykem pro vývoj Android aplikací?;Kotlin;Java;C#;Swift
Co znamená IDE?;Integrované vývojové prostředí;Databázový systém;Grafický editor;Analytický nástroj
Co je C#?;Programovací jazyk od Microsoftu pro platformu .NET;Jazyk pro vývoj mobilních aplikací;Framework pro webové aplikace;Nástroj pro verzování kódu
Jaký je hlavní účel jazyka LISP?;Výzkum umělé inteligence;Vývoj her;Mobilní aplikace;Webové aplikace
Který jazyk byl první OOP jazyk?;Smalltalk;C++;Java;Python
Co je hlavní nevýhodou jazyka C++?;Složitost a ruční správa paměti;Nízký výkon;Špatná čitelnost;Nedostatek podpory OOP
Který jazyk byl vyvinut společností Apple?;Swift;C#;Java;Perl
Který jazyk je považován za čistě funkcionální?;Haskell;Python;C;PHP
Který jazyk je široce používán pro webové aplikace?;JavaScript;Python;COBOL;Assembly
`;
const csvDataCsharpVetveni = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3
Co je základním účelem příkazu 'if' v C#?;Vykonat blok kódu při splnění podmínky;Přerušit běh programu;Opakovat kód v cyklu;Vypsat chybovou hlášku
Kdy se používá příkaz 'else' v C#?;Pokud podmínka 'if' není splněna;Pro přerušení cyklu;Pro volání funkce;Pro načtení dat
Jaký příkaz umožňuje více větvení podmínek?;else if;switch;do-while;foreach
Co znamená 'switch' v C#?;Vícenásobné větvení na základě hodnoty;Iterace přes kolekci;Synchronizace vláken;Ladění programu
Co je účelem příkazu 'break' v 'switch'?;Ukončí vykonávání aktuální větve;Opakuje aktuální větev;Způsobí nekonečný cyklus;Přeskočí celou metodu
K čemu slouží složené závorky v C#?;Seskupují více příkazů do jednoho bloku;Oddělují proměnné;Vytvářejí nový projekt;Vykonávají jednorázovou akci
Co způsobí příkaz 'goto' v C#?;Skok na označený štítek v kódu;Spuštění debuggeru;Ukončení aplikace;Opakování cyklu
Jaký je hlavní rozdíl mezi 'if' a 'switch'?;'if' je pro logické výrazy, 'switch' pro hodnoty proměnné;'if' vždy vrátí hodnotu;'switch' nemůže obsahovat textové hodnoty;'switch' se používá pouze s čísly
Co je 'pattern matching' v C#?;Kontrola typu a hodnoty výrazu;Optimalizace paměti;Překlad kódu do strojového jazyka;Vykreslení grafického rozhraní
Co znamená 'else if'?;Testuje další podmínku, pokud předchozí 'if' nebyl splněn;Ukončí aktuální větev;Opakuje předchozí cyklus;Vytvoří novou proměnnou
Jaký je účel 'default' v příkazu 'switch'?;Zachytit všechny nespecifikované případy;Vykonat kód při splnění podmínky;Vytvořit instanci objektu;Spustit ladění programu
Co způsobí příkaz 'continue' v cyklu?;Přeskočí aktuální iteraci a pokračuje další;Ukončí celý cyklus;Vrátí hodnotu;Vyvolá výjimku
Co znamená vnořený 'if'?;Podmínka uvnitř jiné podmínky;Opakování 'if' cyklu;Přepnutí do jiného bloku;Zastavení programu
Jaká je správná syntaxe pro 'if' v C#?;if (podmínka) { příkazy };if { příkazy } (podmínka);if (podmínka) { příkazy };if { podmínka } (příkazy)
Jaký operátor v C# představuje logické AND?;&&;||;==;!=
Co se stane, pokud v 'switch' chybí 'break'?;Vykonají se všechny následující větve;Cyklus se zastaví;Program havaruje;Vypíše se chybová hláška
Kdy se používá 'return' v metodě?;Pro ukončení metody a vrácení hodnoty;Pro opakování cyklu;Pro přerušení ladění;Pro spuštění externího programu
Co znamená 'if (x && y)'?;Podmínka je splněna, pokud jsou obě hodnoty pravdivé;Podmínka je splněna, pokud je alespoň jedna hodnota pravdivá;Podmínka je splněna, pokud jsou obě hodnoty nepravdivé;Podmínka je splněna, pokud jedna hodnota je pravdivá
Co znamená 'if (x || y)'?;Podmínka je splněna, pokud alespoň jedna hodnota je pravdivá;Podmínka je splněna, pokud jsou obě hodnoty pravdivé;Podmínka je splněna, pokud jsou obě hodnoty nepravdivé;Podmínka je splněna pouze při hodnotě false
Co znamená '!' v podmínce?;Negace logické hodnoty;Porovnání dvou čísel;Dělení dvou proměnných;Násobení hodnoty
`;
const csvDataCyklu = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3
Co je hlavním účelem cyklu for?;Opakování bloku kódu známý početkrát;Opakování bloku kódu neznámý početkrát;Podmíněné větvení;Spuštění asynchronního úkolu
Jaký cyklus v C# iteruje přes kolekci?;foreach;for;while;do-while
Jaká je syntaxe cyklu for v C#?;for (inicializace; podmínka; iterace) { příkazy; };for { inicializace; podmínka; iterace } (příkazy);;for (příkazy; inicializace; iterace);for (podmínka) { inicializace; příkazy; }
Který cyklus v C# vždy provede tělo alespoň jednou?;do-while;for;while;foreach
Co znamená příkaz break v cyklu?;Okamžitě ukončí nejbližší cyklus;Přeskočí aktuální iteraci;Pokračuje na další iteraci;Ukončí celou metodu
K čemu se používá příkaz continue v cyklu?;Přeskočí aktuální iteraci a pokračuje další;Okamžitě ukončí cyklus;Vrátí hodnotu z metody;Zastaví běh programu
Jaký cyklus se používá, pokud počet iterací není předem znám?;while;for;foreach;do-while
Kdy se používá cyklus do-while?;Když se tělo cyklu musí provést alespoň jednou;Když chceme iterovat přes kolekci;Když potřebujeme paralelní zpracování;Když kontrolujeme podmínku předem
Co je nekonečný cyklus?;Cyklus, který nikdy neskončí, pokud není ukončen podmínkou;Cyklus, který běží přesně 10x;Cyklus s pevným počtem iterací;Cyklus, který se automaticky zastaví
Co je hlavní nevýhodou nekonečného cyklu?;Může způsobit zamrznutí nebo zhroucení programu;Je příliš rychlý na ladění;Spotřebovává příliš málo paměti;Je příliš jednoduchý na implementaci
Jaký cyklus použít pro iteraci známý početkrát?;for;while;do-while;foreach
Jaký cyklus se nejčastěji používá pro iteraci přes prvky pole?;foreach;for;while;do-while
Co je hlavní nevýhodou cyklu while?;Pokud podmínka není správně nastavena, může vzniknout nekonečný cyklus;Může iterovat příliš málo;Má omezený přístup k proměnným;Není vhodný pro práci s polem
Co je charakteristické pro cyklus foreach?;Iteruje přes všechny prvky kolekce;Iteruje pevný počet opakování;Provádí asynchronní operace;Kontroluje hodnotu při každé iteraci
Jaký je rozdíl mezi while a do-while cyklem?;do-while provede tělo alespoň jednou, zatímco while může tělo vynechat;while vždy provede tělo, do-while nemusí;while iteruje přes kolekci, do-while nikoli;do-while je rychlejší než while
Co znamená použití paralelního cyklu v C#?;Využití více vláken pro urychlení zpracování;Vykonávání cyklu s jedním vláknem;Opakování cyklu několikrát po sobě;Nahrazení všech ostatních cyklů
Jaký příkaz v C# se používá pro paralelní iteraci?;Parallel.For;foreach;do-while;while
Kdy použít cyklus while místo for?;Když počet iterací není předem znám;Když potřebujeme paralelní zpracování;Když potřebujeme pevný počet iterací;Když je třeba iterovat přes kolekci
Jaký je účel cyklu foreach v C#?;Iterovat přes všechny prvky kolekce bez manipulace s indexy;Opakovat pevný počet opakování;Kontrolovat pravdivostní hodnoty;Provádět asynchronní výpočty
Co je hlavní výhoda použití cyklu foreach?;Jednoduchá iterace přes všechny prvky kolekce;Možnost přímého ovlivnění prvků;Vysoká rychlost zpracování číselných hodnot;Asynchronní běh
`;
const csvJednoducheDatove = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co musí být s proměnnou v C# před použitím?";"Deklarována";"Inicializována";"Optimalizována";"Uvolněna"
"Syntaxe deklarace proměnné je:";"<typ> <název_proměnné> = <hodnota>";"<název_proměnné> <typ> = <hodnota>";"<hodnota> = <typ> <název_proměnné>";"Deklarace není potřeba"
"Co znamená 'staticky typovaný jazyk'?";"Typ proměnné je pevně stanoven při deklaraci";"Typ proměnné se může měnit";"Typ proměnné je určen až za běhu programu";"Typ proměnné není důležitý"
"Pokud chceme aby promenna, ktera nemusi mit hodnotu, muzeme pouzit:";"Nullable";"Static";"Const";"Var"
"Jaký typ bude mít proměnná 'b' v 'var b = 3.14' ?";"double";"int";"float";"string"
"Jaké klíčové slovo použijeme pro konstanty?";"const";"static";"var";"immutable"
"K cemu je datovy typ Byte?";"Uklada 8 bitové celé číslo";"Uklada 16 bitové celé číslo";"Uklada 32 bitové celé číslo";"Uklada 64 bitové celé číslo"
"Jaký datový typ použijeme pro uložení logické hodnoty?";"bool";"int";"string";"char"
"Jaký datový typ použijeme pro uložení jednoho znaku?";"char";"string";"int";"bool"
"Jaký datový typ použijeme pro uložení textu?";"string";"char";"int";"bool"
"Jak se provede explicitní konverze typu 'double' na 'int'?";"(int)doubleValue";"doubleValue.toInt()";"Convert.toInt(doubleValue)";"int.parse(doubleValue)"
"Co se stane, pokud se provede implicitní konverze s ztrátou dat?";"Data se oříznou";"Nastane chyba";"Data se zaokrouhlí";"Data se převedou na string"
"Jsou řetězce v C# měnitelné?";"Ne, jsou immutable";"Ano, jsou mutable";"Záleží na deklaraci";"Pouze s určitými metodami"
"Jak zjistíme délku řetězce 'text'?";"text.Length";"length(text)";"text.size()";"text.count()"
"Jak získáme první znak řetězce 'text'?";"text[0]";"text.first()";"text.charAt(0)";"text.get(0)"
"Jaká operace je '+' v C#?";"sčítání";"odčítání";"násobení";"dělení"
"Jaká operace je '%' v C#?";"modulo (zbytek po dělení)";"procento";"dělení";"násobení"
"Jaké operátory používáme pro porovnávání hodnot?";"==, !=, <, >, <=, >=";"+, -, *, /";"&&, ||, !";"%, ^, &"
"Co dělají logické operátory?";"Pracují s podmínkami";"Provádějí matematické operace";"Porovnávají hodnoty";"Řetězí text"
"K čemu slouží operátory přiřazení (+=, -=, *=, /=)?";"Zjednodušují zápis výpočtů";"Porovnávají hodnoty";"Pracují s podmínkami";"Deklarují proměnné"
`;
const csvStrukturovaneDatove = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou hodnotové typy v C#?";"Typy, které uchovávají přímo svou hodnotu";"Typy, které uchovávají odkaz na objekt";"Typy pro práci s textem";"Typy pro asynchronní operace"
"Kde jsou ukládány hodnotové typy?";"Na zásobníku (stack)";"Na haldě (heap)";"V paměti ROM";"Na disku"
"Jaký je příklad hodnotového typu v C#?";"int";"string";"class";"List<T>"
"Co jsou referenční typy v C#?";"Typy ukládající odkaz na objekt";"Typy ukládající hodnotu přímo";"Typy pro práci s čísly";"Typy pro správu paměti"
"Kde jsou ukládány referenční typy?";"Na haldě (heap)";"Na zásobníku (stack)";"V dočasné paměti";"V grafické paměti"
"Jaký je příklad referenčního typu?";"string";"int";"bool";"struct"
"Co je struktura (struct) v C#?";"Hodnotový typ, který může obsahovat více hodnot";"Referenční typ pro práci s textem";"Asynchronní úloha";"Statický objekt"
"Jaká je hlavní výhoda použití struktury?";"Rychlejší přístup k hodnotám";"Podpora dědičnosti";"Automatická správa paměti";"Jednoduchá implementace paralelismu"
"Co je List<T> v C#?";"Dynamická kolekce měnící velikost";"Statické pole";"Omezená fronta";"Stohovací struktura"
"Jaká je hlavní vlastnost Dictionary<TKey, TValue>?";"Ukládání dvojic klíč-hodnota";"Přímý přístup přes index";"FIFO struktura";"Ukládání pouze číselných hodnot"
"Co je Queue<T> v C#?";"Fronta typu FIFO";"Zásobník typu LIFO";"Statické pole";"Asynchronní kolekce"
"Jak funguje Stack<T>?";"První dovnitř, poslední ven (LIFO)";"První dovnitř, první ven (FIFO)";"Sekvenční zpracování";"Paralelní zpracování"
"Co je HashSet<T> v C#?";"Kolekce unikátních prvků";"Dynamické pole s duplikáty";"Fronta pro zpracování úloh";"Zásobník pro ukládání hodnot"
"K čemu slouží Garbage Collector v C#?";"Automaticky uvolňuje paměť nepoužívaných objektů";"Zajišťuje přístup k databázi";"Spravuje připojení k internetu";"Optimalizuje grafiku"
"Kde probíhá statická správa paměti?";"Na zásobníku (stack)";"Na haldě (heap)";"V operační paměti";"Na pevném disku"
"Kde probíhá dynamická správa paměti?";"Na haldě (heap)";"Na zásobníku (stack)";"V grafické paměti";"V síťové paměti"
"Co je hlavní nevýhodou dynamické správy paměti?";"Vyžaduje garbage collector";"Vyžaduje ruční uvolňování";"Způsobuje pád aplikace";"Nemá přístup k datovým typům"
"Co je to alokace paměti?";"Přidělení prostoru pro data v paměti";"Odstranění dat z paměti";"Překlad kódu do strojového jazyka";"Asynchronní volání metody"
"Jaké kolekce jsou statické?";"Pole";"List<T>";"Dictionary<TKey, TValue>";"Queue<T>"
"Jaký je rozdíl mezi statickou a dynamickou kolekcí?";"Statická má pevnou velikost, dynamická se mění za běhu";"Dynamická kolekce je rychlejší";"Statická je vždy prázdná";"Dynamická kolekce ukládá pouze texty"
"Jaký je hlavní rozdíl mezi hodnotovým a referenčním typem?";"Hodnotový typ uchovává přímo hodnotu, referenční typ odkazuje na objekt";"Referenční typ je vždy rychlejší";"Hodnotový typ je vždy uložen na haldě";"Referenční typ nelze použít v cyklu"
"Co se stane při změně objektu referenčního typu?";"Změna se projeví ve všech odkazech";"Změna je lokální pro danou proměnnou";"Vytvoří se nová instance objektu";"Všechny reference se zneplatní"
`;
const csvDataDialog = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký typ souboru je .txt?";"Textový soubor";"Binární soubor";"Archivní soubor";"Zvukový soubor"
"Jaký typ souboru je .exe?";"Binární soubor";"Textový soubor";"Archivní soubor";"Grafický soubor"
"Jaká třída v C# poskytuje rychlé operace se soubory?";"File";"FileInfo";"StreamReader";"BinaryWriter"
"Jaká třída nabízí metody pro čtení textových souborů?";"StreamReader";"BinaryReader";"FileStream";"MemoryStream"
"Jaká třída se používá pro zápis textových souborů?";"StreamWriter";"BinaryWriter";"FileStream";"MemoryStream"
"Jaká třída slouží pro čtení binárních dat?";"BinaryReader";"StreamReader";"FileStream";"StreamWriter"
"Jaká třída slouží pro zápis binárních dat?";"BinaryWriter";"StreamWriter";"FileStream";"MemoryStream"
"Co umožňuje třída FileStream?";"Práci s textovými i binárními soubory";"Připojení k databázi";"Vytváření grafického rozhraní";"Správu vláken"
"Jaký je rozdíl mezi File a FileInfo?";"File je statická třída, FileInfo používá instance";"FileInfo je statická, File používá instance";"Obě jsou statické třídy";"FileInfo je pouze pro binární soubory"
"Jaký je účel třídy StreamReader?";"Čtení textových souborů";"Zápis textových souborů";"Čtení binárních souborů";"Zápis binárních souborů"
"Jaký je účel třídy StreamWriter?";"Zápis textových souborů";"Čtení textových souborů";"Zápis binárních souborů";"Čtení binárních souborů"
"Jaká třída se používá pro dialogy s otevřením souboru?";"OpenFileDialog";"SaveFileDialog";"FileDialog";"StreamDialog"
"Jaká třída se používá pro dialogy s uložením souboru?";"SaveFileDialog";"OpenFileDialog";"StreamDialog";"DialogForm"
"Jaký namespace se používá pro práci se soubory?";"System.IO";"System.Data";"System.Text";"System.Threading"
"Jaká metoda slouží k zápisu textu do souboru?";"WriteAllText";"ReadAllText";"AppendAllText";"CopyFile"
"Jaká metoda slouží k čtení obsahu textového souboru?";"ReadAllText";"WriteAllText";"Delete";"Move"
"Jak přidáme text na konec existujícího souboru?";"AppendAllText";"WriteAllText";"AddText";"CreateText"
"Jakou metodu použijeme pro smazání souboru?";"Delete";"Remove";"Clear";"Erase"
"Jakou metodu použijeme pro přesun souboru?";"Move";"Copy";"Transfer";"ChangePath"
"Jakou metodu použijeme pro zkopírování souboru?";"Copy";"Move";"Clone";"Duplicate"
"Jaký dialog se používá pro výběr souboru v C#?";"OpenFileDialog";"SaveFileDialog";"FileSelectDialog";"DirectoryDialog"
"Jaký dialog se používá pro uložení souboru v C#?";"SaveFileDialog";"OpenFileDialog";"FileSelectDialog";"DirectoryDialog"
"Jaký je účel BinaryWriter?";"Zápis binárních dat do souboru";"Čtení binárních dat";"Zápis textových dat";"Správa vláken"
"Jaký je účel BinaryReader?";"Čtení binárních dat ze souboru";"Zápis binárních dat";"Čtení textových dat";"Správa procesů"
"Jaké rozšíření obvykle mají textové soubory?";".txt";".exe";".png";".mp3"
"Jaké rozšíření obvykle mají binární soubory?";".exe";".txt";".csv";".json"
"Jaký je hlavní účel třídy FileStream?";"Práce s datovými proudy";"Ladění programu";"Připojení k databázi";"Generování grafů"
"Co je dialogové okno OpenFileDialog?";"Dialog pro výběr souboru";"Dialog pro uložení souboru";"Dialog pro výběr adresáře";"Dialog pro výběr grafiky"
"Co je dialogové okno SaveFileDialog?";"Dialog pro uložení souboru";"Dialog pro výběr souboru";"Dialog pro kopírování souboru";"Dialog pro přejmenování souboru"
`;
const csvDataPrvky = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je Windows Forms Application (WFA) v C#?";"Technologie pro vytváření desktopových aplikací s GUI";"Systém pro správu databází";"Platforma pro webové aplikace";"Nástroj pro analýzu dat"
"Jaká knihovna se používá v C# pro Windows Forms?";"System.Windows.Forms";"System.IO";"System.Threading";"System.Data"
"Jaký typ aplikace se vytváří pomocí Windows Forms?";"Desktopová aplikace";"Webová aplikace";"Konzolová aplikace";"Mobilní aplikace"
"Jaká šablona se používá pro vytvoření WFA v Visual Studio?";"Windows Forms App (.NET Framework)";"ASP.NET Web App";"Console App";"Blazor App"
"Jaké komponenty jsou běžně používány ve Windows Forms?";"Button, Label, TextBox, ComboBox";"ImageView, RecyclerView, Intent";"Link, Header, Footer, Sidebar";"Section, Div, Span, Article"
"Jaká komponenta se používá pro tlačítko v WFA?";"Button";"Label";"TextBox";"ComboBox"
"Jaká komponenta se používá pro statický text v WFA?";"Label";"TextBox";"Button";"ListBox"
"Jaká komponenta slouží k zadávání textu?";"TextBox";"Label";"Button";"ComboBox"
"Jaký ovládací prvek umožňuje zaškrtnutí volby?";"CheckBox";"RadioButton";"Button";"ListBox"
"Jaký ovládací prvek umožňuje výběr jedné možnosti z více?";"RadioButton";"CheckBox";"TextBox";"Button"
"Jaká komponenta zobrazuje seznam položek?";"ListBox";"ComboBox";"TextBox";"Button"
"Jaká komponenta kombinuje pole pro výběr a zadání textu?";"ComboBox";"ListBox";"Label";"Button"
"Jaký ovládací prvek se používá pro zobrazení tabulkových dat?";"DataGridView";"ListBox";"ComboBox";"TextBox"
"Jaká událost je spuštěna při kliknutí na tlačítko?";"Click";"TextChanged";"Load";"SelectedIndexChanged"
"Jaká událost se vyvolá při změně textu v TextBoxu?";"TextChanged";"Click";"Load";"SelectedIndexChanged"
"Jaká událost se vyvolá při změně výběru v ComboBoxu?";"SelectedIndexChanged";"Click";"TextChanged";"Load"
"Jaký ovládací prvek se používá pro výběr z předdefinovaných možností?";"ComboBox";"TextBox";"Label";"Button"
"Jaká je vlastnost pro zjištění textu v TextBoxu?";"Text";"Content";"Label";"Caption"
"Jaká je vlastnost pro nastavení textu na tlačítku?";"Text";"Label";"Content";"Value"
"Jaká metoda se používá pro zobrazení okna se zprávou?";"MessageBox.Show";"Console.WriteLine";"TextBox.Append";"Label.SetText"
"Jaké klíčové slovo se používá pro připojení události?";"+=";"-=";"==";"!="
"Jaký je účel vlastnosti 'Enabled' u tlačítka?";"Určuje, zda je tlačítko aktivní";"Určuje barvu tlačítka";"Určuje text tlačítka";"Určuje velikost tlačítka"
"Jaký datový typ se používá pro události v C#?";"EventHandler";"Action";"Func";"Delegate"
"Jaký ovládací prvek umožňuje vícenásobný výběr?";"ListBox";"ComboBox";"TextBox";"Button"
"Jaká vlastnost ovládacího prvku Button určuje jeho text?";"Text";"Content";"Label";"Caption"
"Jaká metoda se používá pro přidání obsluhy události?";"+= Handler";"-= Handler";"* Handler";"/ Handler"
"Jaká vlastnost nastavuje barvu pozadí tlačítka?";"BackColor";"ForeColor";"Text";"Content"
"Jaká vlastnost nastavuje písmo v Labelu?";"Font";"Text";"Style";"BackColor"
"Jaká metoda se používá pro spuštění hlavního formuláře?";"Application.Run";"Form.Start";"Main.Run";"Window.Show"
"Jaký ovládací prvek se používá pro výběr jedné ze dvou nebo více možností?";"RadioButton";"CheckBox";"Button";"Label"
"Jaká vlastnost určuje aktuálně vybranou položku v ComboBoxu?";"SelectedItem";"Text";"Content";"SelectedValue"
"Jaká metoda se používá pro ukončení aplikace?";"Application.Exit";"Form.Close";"Environment.Terminate";"System.Stop"
"Jak se připojuje událost kliknutí k tlačítku?";"button1.Click += handler";"button1.OnClick = handler";"button1.Action += handler";"button1.Event = handler"
"Jakou metodou přidáme prvek do ListBoxu?";"Items.Add";"Add";"Append";"Push"
"Jaká metoda se používá pro odstranění položky z ListBoxu?";"Items.Remove";"RemoveAt";"Delete";"Clear"
"Jaká metoda se používá pro vymazání všech položek z ListBoxu?";"Items.Clear";"ClearAll";"DeleteAll";"RemoveAll"
"Jaká vlastnost určuje, zda je TextBox pouze pro čtení?";"ReadOnly";"Enabled";"Locked";"Visible"
"Jaká vlastnost TextBoxu umožňuje více řádků textu?";"Multiline";"Wrap";"Scrollable";"Resizable"
`;
const csvDataChyby = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou syntaktické chyby?";"Chyby v zápisu kódu porušující syntax jazyka";"Chyby v logice programu";"Chyby při běhu programu";"Chyby v uživatelském vstupu"
"Kdy jsou syntaktické chyby detekovány?";"Při kompilaci";"Při běhu programu";"Při načítání souboru";"Při inicializaci proměnných"
"Co jsou sémantické chyby?";"Program provede jinou činnost, než bylo zamýšleno";"Chyby při dělení nulou";"Syntax chyby v kódu";"Chyby při přístupu k poli"
"Kdy jsou runtime chyby detekovány?";"Během běhu programu";"Při kompilaci";"Při instalaci";"Při vytváření projektu"
"Co způsobí dělení nulou v C#?";"Runtime chybu";"Syntaktickou chybu";"Sémantickou chybu";"Žádnou chybu"
"Jaký typ výjimky je vyvolán při dělení nulou?";"DivideByZeroException";"NullReferenceException";"IndexOutOfRangeException";"InvalidOperationException"
"Jaká výjimka je vyvolána při přístupu k neplatnému indexu pole?";"IndexOutOfRangeException";"NullReferenceException";"DivideByZeroException";"ArgumentException"
"Co je ladění programu?";"Proces hledání a opravy chyb v kódu";"Testování uživatelského rozhraní";"Optimalizace výkonu";"Automatizace nasazení"
"Co jsou breakpoints v Visual Studiu?";"Zarážky, které zastaví běh programu na určitém místě";"Značky pro formátování textu";"Skriptovací příkazy";"Grafické prvky pro GUI"
"Jak se přidá breakpoint v Visual Studiu?";"Kliknutím na levý okraj editoru vedle čísla řádku";"Stisknutím klávesy F12";"Kliknutím na pravý okraj editoru";"Přes menu Debug"
"Co je Immediate Window?";"Okno pro zkoušení výrazu během ladění";"Prohlížeč chyb";"Nástroj pro úpravu CSS";"Editor kódu"
"Jaká klávesa slouží pro Step Into během ladění?";"F11";"F10";"Shift+F11";"Ctrl+F5"
"Jaká klávesa slouží pro Step Over během ladění?";"F10";"F11";"Shift+F11";"Ctrl+F5"
"Jaká klávesa slouží pro Step Out během ladění?";"Shift+F11";"F10";"F11";"Alt+F5"
"Co je try-catch blok v C#?";"Blok pro ošetření výjimek";"Blok pro zpracování textu";"Blok pro paralelní zpracování";"Blok pro načítání souborů"
"Jaký je účel bloku finally?";"Vykoná se vždy, bez ohledu na výjimky";"Vykoná se pouze při chybě";"Slouží k optimalizaci výkonu";"Zpracovává vstupy od uživatele"
"Jak vytvoříme vlastní výjimku v C#?";"Odvozením třídy od Exception";"Pomocí klíčového slova 'throw'";"Použitím Console.WriteLine";"Definicí proměnné typu Exception"
"Jaké výjimky by se měly zachytávat jako první?";"Specifické výjimky";"Obecná výjimka";"Chyba připojení";"Ladící informace"
"Co se provede v bloku catch?";"Zachytí výjimku a zpracuje ji";"Inicializuje proměnnou";"Načte soubor";"Optimalizuje kód"
"Co dělá klíčové slovo 'throw'?";"Vyvolá výjimku";"Zastaví aplikaci";"Zahodí návratovou hodnotu";"Uvolní paměť"
"Co je nejlepší praktikou při ošetřování výjimek?";"Používat konkrétní typy výjimek";"Zachytit všechny výjimky obecně";"Ignorovat výjimky";"Vždy ukončit aplikaci"
"Jaká výjimka je vyvolána při přístupu k objektu s hodnotou null?";"NullReferenceException";"DivideByZeroException";"IndexOutOfRangeException";"FileNotFoundException"
"Co je důležité dělat při logování výjimek?";"Zaznamenávat chybové hlášky a detaily";"Ignorovat detaily";"Mazat staré logy";"Neukládat žádné informace"
"Jaký je správný způsob uvolnění zdrojů?";"Použít blok finally";"Ignorovat uvolňování";"Použít proměnnou";"Vytvořit nový proces"
"Co je dobrá praxe při použití bloku try?";"Minimalizovat kód v bloku try";"Vložit celý program do bloku try";"Ignorovat výjimky";"Vytvořit nekonečnou smyčku"
"Jaká metoda vypíše detailní chybovou zprávu?";"ex.Message";"ex.ToString()";"ex.StackTrace";"ex.GetType()"
"Jaký je účel ladění?";"Najít a opravit chyby v programu";"Optimalizovat výkon aplikace";"Zlepšit uživatelské rozhraní";"Zjednodušit kód"
"Jaký je rozdíl mezi try a catch?";"try obsahuje rizikový kód, catch zpracovává výjimku";"catch obsahuje rizikový kód, try zpracovává výjimku";"Oba jsou stejné";"try ukončuje aplikaci"
"Co způsobí absence bloku catch po try?";"Výjimka nebude zachycena";"Výjimka se potichu vyřeší";"Výjimka se změní na jiný typ";"Aplikace se optimalizuje"
`;
const csvDataDrawing = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"K čemu slouží namespace System.Drawing?";"Pro práci s grafikou v C#";"Pro připojení k databázi";"Pro správu vláken";"Pro tvorbu konzolových aplikací"
"Jaká třída se používá pro kreslení grafických prvků?";"Graphics";"Drawing";"Pen";"Brush"
"Jaká třída se používá pro vykreslení čar a okrajů?";"Pen";"Brush";"Graphics";"Bitmap"
"Jaká třída se používá pro vyplňování tvarů?";"Brush";"Pen";"Graphics";"Image"
"Jaká struktura se používá pro barvy v C#?";"Color";"Brush";"Pen";"Graphics"
"Jaká třída se používá pro práci s bitmapami?";"Bitmap";"Image";"PictureBox";"Graphics"
"Jak získáme objekt Graphics ve Windows Forms?";"Přes PaintEventArgs nebo CreateGraphics()";"Přes Console.ReadLine()";"Přes Timer";"Přes Label.Text"
"Jaká metoda slouží pro kreslení čáry?";"DrawLine";"DrawRectangle";"FillEllipse";"DrawImage"
"Jaká metoda slouží pro kreslení obdélníku?";"DrawRectangle";"DrawLine";"FillEllipse";"DrawImage"
"Jaká metoda slouží pro vykreslení textu?";"DrawString";"DrawLine";"FillRectangle";"DrawImage"
"Jaký ovládací prvek se běžně používá pro kreslení?";"Panel";"Label";"Button";"TextBox"
"Jaké metody se používají pro vyplnění tvarů?";"FillRectangle, FillEllipse";"DrawLine, DrawCurve";"DrawText, DrawImage";"AddText, RemoveImage"
"Jaký je účel třídy Pen?";"Vykreslování čar a okrajů";"Vyplňování tvarů";"Zobrazení obrázků";"Manipulace s pixely"
"Jaká vlastnost třídy Pen určuje barvu čáry?";"Color";"Width";"Opacity";"Style"
"Jaká vlastnost třídy Pen určuje šířku čáry?";"Width";"Color";"Height";"Size"
"Co dělá metoda FillRectangle?";"Vyplní obdélník zadanou barvou";"Nakreslí obdélník bez výplně";"Vyplní text v poli";"Smaže obsah grafiky"
"Jaká metoda vykreslí obrázek na formulář?";"DrawImage";"DrawLine";"DrawText";"FillRectangle"
"Jak vytvoříme vlastní barvu?";"Color.FromArgb(255, 128, 0)";"Brush.Color(255, 0, 0)";"Pen.Color(128, 128, 128)";"Graphics.Color(0, 255, 0)"
"Jakou třídu použijeme pro vykreslení textu?";"Font";"Graphics";"Brush";"Pen"
"Jak nastavíme barvu pozadí Panelu?";"panel1.BackColor = Color.Blue";"panel1.ForeColor = Color.Green";"panel1.TextColor = Color.Red";"panel1.BackgroundColor = Color.Yellow"
"Jaká třída umožňuje vyplňovat oblasti grafiky?";"Brush";"Pen";"Graphics";"Bitmap"
"Jaký objekt použijeme pro kreslení čar?";"Pen";"Brush";"Graphics";"Image"
"Jakou metodou vykreslíme elipsu?";"DrawEllipse";"DrawLine";"DrawText";"FillRectangle"
"Jak vytvoříme přechodový štětec?";"LinearGradientBrush";"SolidBrush";"RadialBrush";"TextureBrush"
"Jak se jmenuje metoda pro vykreslení bitmapy?";"DrawImage";"DrawBitmap";"DrawIcon";"DrawGlyph"
"Jaký ovládací prvek je vhodný pro oddělení grafiky?";"Panel";"Label";"TextBox";"Button"
"Jak zajistíme, aby grafika nezmizela při překreslení okna?";"Vykreslujeme v události Paint";"Používáme statické proměnné";"Používáme Timer";"Připojujeme událost Click"
"Co je Timer v kontextu animace?";"Časovač pro periodické vykreslování";"Nástroj pro ladění aplikace";"Způsob ukládání grafiky";"Metoda pro kompresi obrázků"
"Jak vykreslíme animaci obrázku?";"Pomocí Timeru a metody Invalidate()";"Pomocí metody ShowImage()";"Použitím statických proměnných";"Voláním metody DrawTimer()"
"Co dělá metoda Invalidate()?";"Vyvolá překreslení formuláře";"Ukončí aplikaci";"Načte nový obrázek";"Změní velikost formuláře"
"Jaká metoda umožňuje přímou manipulaci s pixely bitmapy?";"SetPixel";"DrawPixel";"SetPoint";"DrawPoint"
"Jaká metoda slouží pro získání pixelu z bitmapy?";"GetPixel";"ReadPixel";"FetchPixel";"ExtractPixel"
"Co je animace bitmapy?";"Plynulý pohyb obrázku pomocí časovače";"Statické vykreslení obrázku";"Vytvoření nového obrázku";"Načítání dat z databáze"
"Jaký je hlavní účel třídy Bitmap?";"Reprezentace rastrových obrázků";"Vykreslování textu";"Správa barev";"Ladění grafiky"
"Jak vykreslit text na formulář?";"DrawString";"DrawLine";"FillRectangle";"DrawImage"
"Jaký namespace obsahuje třídy pro kreslení grafiky?";"System.Drawing";"System.Text";"System.Data";"System.Windows"
"Jaká vlastnost třídy Color určuje průhlednost?";"Alpha";"Red";"Green";"Blue"
"Jaká metoda nastaví barvu pozadí formuláře?";"BackColor";"ForeColor";"Background";"FillColor"
`;
const csvDataMetody = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou metody v C#?";"Bloky kódu vykonávající specifickou akci";"Proměnné pro ukládání hodnot";"Grafické prvky pro vykreslování";"Soubory pro ukládání dat"
"Jaká je základní syntaxe metody v C#?";"<modifikátory přístupu> <návratový typ> <název>(<parametry>)";"<návratový typ> <modifikátory přístupu> <název>(<parametry>)";"<název>(<parametry>) <návratový typ>";"<modifikátory přístupu> <parametry> <název>()"
"Jak se nazývá metoda, která nevrací hodnotu?";"void";"return";"static";"class"
"Co znamená modifikátor 'public' u metody?";"Metoda je přístupná odkudkoli";"Metoda je dostupná pouze ve třídě";"Metoda je chráněná proti přístupu";"Metoda se volá automaticky"
"Co znamená modifikátor 'static' u metody?";"Metoda patří přímo třídě, ne instanci";"Metoda patří instanci objektu";"Metoda je vždy veřejná";"Metoda je dynamicky generovaná"
"Jaká metoda se volá automaticky při vytvoření instance třídy?";"Konstruktor";"Main";"Dispose";"Finalize"
"Jaký je návratový typ metody, která vrací celé číslo?";"int";"void";"string";"double"
"Co dělá klíčové slovo 'return' v metodě?";"Vrací hodnotu z metody";"Zastavuje běh programu";"Načítá data z konzole";"Vykresluje grafiku"
"Co je přetížení metody (overloading)?";"Více metod se stejným názvem, ale různými parametry";"Více metod v různých třídách";"Metody, které se vykonávají paralelně";"Metody s různými návratovými typy"
"Jaký je rozdíl mezi metodou 'Add(int, int)' a 'Add(double, double)'?";"Jsou to přetížené metody";"Jsou to metody s chybou";"Nelze je použít ve stejné třídě";"Musí být statické"
"Co je konstruktor v C#?";"Metoda pro inicializaci objektu";"Metoda pro uvolnění paměti";"Metoda pro vykreslení grafiky";"Metoda pro zobrazení textu"
"Jaký návratový typ má konstruktor?";"Nemá žádný návratový typ";"int";"void";"string"
"Jak musí být pojmenován konstruktor?";"Stejně jako třída";"Jako 'Main'";"Jako 'Init'";"Libovolně"
"Jaký klíčový výraz používáme pro přístup k vlastnostem objektu uvnitř třídy?";"this";"base";"super";"class"
"Jak voláme metodu třídy bez vytvoření instance?";"Pomocí názvu třídy a tečky";"Pomocí názvu objektu";"Pomocí klíčového slova 'new'";"Pomocí statického inicializátoru"
"Co je namespace v C#?";"Jmenný prostor pro organizaci tříd";"Proměnná pro ukládání hodnot";"Grafický prvek pro vykreslování";"Metoda pro výpis textu"
"Jak deklarujeme namespace v C#?";"namespace MyNamespace";"using MyNamespace";"class MyNamespace";"public MyNamespace"
"Co znamená klíčové slovo 'using' v C#?";"Importuje namespace";"Definuje metodu";"Vytváří instanci třídy";"Deklaruje proměnnou"
"Co poskytuje namespace System.Math?";"Matematické funkce a konstanty";"Kreslící funkce";"Správu souborů";"Vykreslování grafiky"
"Jaká metoda vrací absolutní hodnotu čísla?";"Math.Abs()";"Math.Round()";"Math.Pow()";"Math.Sqrt()"
"Jaká metoda vrací odmocninu čísla?";"Math.Sqrt()";"Math.Pow()";"Math.Abs()";"Math.Round()"
"Jaká metoda se používá pro zaokrouhlení čísla na nejbližší celé číslo?";"Math.Round()";"Math.Floor()";"Math.Ceiling()";"Math.Sqrt()"
"Jaká metoda vrací větší ze dvou hodnot?";"Math.Max()";"Math.Min()";"Math.Abs()";"Math.Round()"
"Co poskytuje namespace System.Console?";"Metody pro interakci s konzolí";"Správu grafických objektů";"Manipulaci s obrázky";"Práci s XML"
"Jaká metoda Console vypisuje text na stejný řádek?";"Console.Write()";"Console.WriteLine()";"Console.Read()";"Console.ReadLine()"
"Jaká metoda Console vypisuje text s novým řádkem?";"Console.WriteLine()";"Console.Write()";"Console.ReadLine()";"Console.Read()"
"Jak nastavíme barvu textu v konzoli?";"Console.ForegroundColor";"Console.BackgroundColor";"Console.Color";"Console.SetColor"
"Jaký návratový typ má metoda Console.ReadLine()?";"string";"int";"void";"bool"
"Jaký návratový typ má metoda Console.Read()?";"int";"char";"string";"bool"
"Jaké klíčové slovo se používá pro návrat hodnoty z metody?";"return";"yield";"break";"continue"
"Jaké klíčové slovo používáme pro deklaraci statické metody?";"static";"public";"private";"protected"
"Jak se nazývá metoda, která patří přímo třídě a ne instanci?";"Statická metoda";"Virtuální metoda";"Abstraktní metoda";"Dynamická metoda"
"Co se stane, pokud metoda nemá klíčové slovo 'static'?";"Musí být volána přes instanci objektu";"Musí být volána přes název třídy";"Nelze ji volat";"Bude považována za globální metodu"
`;
const csvDataOOP = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je OOP?";"Objektově orientované programování";"Operační systém";"Optimalizace výkonu";"Online přenos dat"
"Jaký je hlavní koncept OOP?";"Práce s objekty a třídami";"Řízení přístupu k síti";"Zpracování textových souborů";"Vykreslování grafiky"
"Co je třída v OOP?";"Šablona nebo návrh objektu";"Přímá instance objektu";"Vykreslovací komponenta";"Databázová tabulka"
"Co je objekt v OOP?";"Konkrétní instance třídy";"Modul pro vykreslování";"Grafický prvek";"Datový typ"
"Jaký je klíčový znak OOP?";"Zapouzdření, dědičnost, polymorfismus";"Vyhledávání dat";"Čtení souborů";"Generování grafiky"
"Co je zapouzdření?";"Skrytí vnitřní implementace a vystavení rozhraní";"Kombinace dvou proměnných";"Vykreslování obrázků";"Ukládání dat do databáze"
"Jaký je účel dědičnosti v OOP?";"Dědit vlastnosti a metody základní třídy";"Ukládat data do souborů";"Vyhledávat informace na internetu";"Přenášet data po síti"
"Co je polymorfismus?";"Schopnost používat metody různých typů s jednotným rozhraním";"Dělení dat na segmenty";"Výpočet aritmetického průměru";"Rozdělení aplikace na moduly"
"Jaký modifikátor přístupu určuje, že metoda je dostupná pouze uvnitř třídy?";"private";"public";"protected";"internal"
"Jaký modifikátor přístupu umožňuje přístup i v potomcích třídy?";"protected";"private";"public";"sealed"
"Co je to konstruktor?";"Speciální metoda pro inicializaci objektu";"Metoda pro uvolnění paměti";"Metoda pro vykreslení grafiky";"Metoda pro načtení souboru"
"Jak se vytváří objekt třídy?";"Pomocí klíčového slova 'new'";"Pomocí klíčového slova 'create'";"Pomocí klíčového slova 'object'";"Pomocí klíčového slova 'var'"
"Jaká je syntaxe vytvoření objektu?";"Person person = new Person();";"Person person();";"create Person();";"new object Person();"
"Jaký je rozdíl mezi třídou a objektem?";"Třída je šablona, objekt je instance";"Třída je proměnná, objekt je konstanta";"Třída je metoda, objekt je funkce";"Třída je knihovna, objekt je soubor"
"Co znamená přetížení metody (overloading)?";"Metody se stejným názvem, ale s různými parametry";"Přepsání metody v potomkovi";"Volání metody z jiné třídy";"Kombinace metod do jedné"
"Jak se vytváří dědičnost v C#?";"Pomocí dvojtečky (:)";"Pomocí klíčového slova 'extends'";"Pomocí operátoru '+'";"Pomocí klíčového slova 'inherits'"
"Jaký je účel klíčového slova 'virtual'?";"Umožňuje přepsání metody v odvozené třídě";"Zajišťuje přístup k souborům";"Deklaruje statickou metodu";"Vytváří novou instanci objektu"
"Jaký je účel klíčového slova 'override'?";"Přepsání metody v odvozené třídě";"Vytváření nové metody";"Vyhledávání proměnných";"Deklarace proměnných"
"Co znamená klíčové slovo 'base'?";"Odkazuje na základní třídu";"Vytváří nový objekt";"Načítá data z databáze";"Ukládá data do souboru"
"Co znamená klíčové slovo 'this'?";"Odkazuje na aktuální instanci třídy";"Vytváří nový objekt";"Připojuje se k databázi";"Inicializuje grafický objekt"
"Jak se nazývá schopnost jedné metody reagovat různě na základě kontextu?";"Polymorfismus";"Zapouzdření";"Dědičnost";"Modularita"
"Jaká metoda se volá při vytvoření objektu?";"Konstruktor";"Main";"Dispose";"Finalize"
"Co znamená přístupový modifikátor 'public'?";"Metoda nebo vlastnost je přístupná odkudkoli";"Přístup pouze v rámci třídy";"Přístup pouze v rámci sestavení";"Přístup pouze v odvozených třídách"
"Jakou metodou můžeme přepsat metodu základní třídy?";"override";"virtual";"sealed";"private"
"Jaký klíčový znak třídy značí, že třída nemůže být dále děděna?";"sealed";"virtual";"abstract";"override"
"Jaký je účel klíčového slova 'abstract'?";"Označuje metodu nebo třídu, která nemůže být instancována";"Vytváří dynamickou proměnnou";"Vykresluje grafický objekt";"Označuje metodu s návratovou hodnotou"
"Co znamená zapouzdření?";"Skrytí interních dat a vystavení veřejného rozhraní";"Kombinace více metod do jedné";"Propojení několika tříd";"Přetížení metod"
"Jaký klíčový znak třídy značí, že metody musí být implementovány v potomcích?";"abstract";"virtual";"sealed";"static"
"Jak vytvoříme instanci třídy 'Car'?";"Car myCar = new Car()";"new Car myCar()";"Car()";"Car myCar = Car()"
"Jaký přístupový modifikátor umožňuje přístup pouze v rámci stejného projektu?";"internal";"public";"private";"protected"
`;
const csvDataTopologie = `otázka;správná odpověď;možnost 1;možnost 2;možnost 3;možnost 4
Co popisuje topologie sítí?;Fyzické nebo logické uspořádání prvků sítě;Způsob šifrování dat;Metodu připojení k internetu;Druh použitého hardwaru;Typ operačního systému
Jaké topologie patří mezi fyzické?;Hvězdicová, Sběrnicová, Kruhová, Stromová, Síťová, Hybridní;Logická, Token passing, Broadcast;Peer-to-peer, Klient-server;Modulární, Kombinovaná;Softwarová
Co popisuje logická topologie?;Způsob, jakým data proudí sítí;Fyzické propojení zařízení;Protokoly používané v síti;Síťovou architekturu;Počet uživatelů
Jaké jsou typy logických topologií?;Broadcast a Token passing;Hvězdicová a Kruhová;Stromová a Síťová;Hybridní a Sběrnicová;Klientská a Serverová
Kde se typicky používá hvězdicová topologie?;Lokální sítě (LAN), kanceláře, školy;Průmyslové sítě;Vojenské aplikace;Malé domácí sítě;Internet
Jaká je hlavní nevýhoda sběrnicové topologie?;Porucha hlavní sběrnice ochromí celou síť;Vysoké náklady na kabeláž;Složitá správa;Nízká redundance;Nízká přenosová rychlost
Jaká topologie se hodí pro průmyslové sítě?;Kruhová;Hvězdicová;Síťová;Hybridní;Sběrnicová
Jaká je hlavní výhoda síťové (Mesh) topologie?;Velká odolnost vůči poruchám;Nízké náklady na kabeláž;Jednoduchá správa;Snadné rozšiřování;Vysoká rychlost
Jaký prvek je typicky centrální v hvězdicové topologii?;Přepínač (Switch);Směrovač (Router);Opakovač (Repeater);Hub;Server
Který prvek slouží k propojení sítí různých topologií?;Směrovač (Router);Přepínač (Switch);Opakovač (Repeater);Hub;Bridge
Jaký prvek je považován za pasivní v síti?;Kabeláž;Přepínač (Switch);Směrovač (Router);Opakovač (Repeater);Anténa
Jaký konektor je používán pro optické vlákno?;LC konektor;RJ-45;SC konektor;BNC konektor;USB
Co je hlavní výhodou stromové topologie?;Snadné rozšiřování;Nízké náklady na kabeláž;Odolnost vůči poruchám;Vysoká rychlost přenosu;Bezpečnost
Jaké topologie kombinuje hybridní topologie?;Různé typy topologií;Jeden konkrétní typ topologie;Pouze fyzické topologie;Pouze logické topologie;Pouze bezdrátové
Jaký je hlavní problém kruhové topologie bez redundance?;Selhání jednoho uzlu ovlivní celou síť;Nízká efektivita při velkém počtu uzlů;Vysoké náklady na kabeláž;Složitá konfigurace;Malá přenosová rychlost
Jaká topologie je téměř nepoužívaná v moderních sítích?;Sběrnicová;Hvězdicová;Stromová;Síťová;Kruhová
Co je výhodou hvězdicové topologie?;Jednoduchá správa a rozšíření;Vysoká redundance;Nízké náklady;Rovnoměrné rozdělení provozu;Vysoká rychlost
Jaký je hlavní účel opakovače (Repeater)?;Posílení signálu v rozsáhlých sítích;Propojení sítí různých topologií;Správa datových toků;Monitorování provozu;Filtrování dat
Jaký typ sítě využívá token passing?;Logická topologie;Fyzická topologie;Hybridní topologie;Síťová topologie;Bezdrátová topologie
Který prvek je starší centrální zařízení pro hvězdicovou topologii?;Hub;Switch;Router;Repeater;Bridge
`;
const csvDataKomunikace = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je komunikace v síti?";"Přenos dat mezi zařízeními pomocí protokolů";"Vytváření grafických rozhraní";"Optimalizace datových toků";"Zabezpečení přístupových práv"
"Kolik vrstev má ISO/OSI model?";"7";"4";"5";"6"
"Kolik vrstev má TCP/IP model?";"4";"7";"5";"6"
"Jaký model je teoretický a používá se jako reference?";"ISO/OSI";"TCP/IP";"Ethernet";"Wi-Fi"
"Jaký model je prakticky používán v reálných sítích?";"TCP/IP";"ISO/OSI";"Bluetooth";"GSM"
"Jaká je aplikační vrstva v TCP/IP modelu?";"Aplikační";"Prezentační";"Transportní";"Fyzická"
"Jaký protokol patří do aplikační vrstvy?";"HTTP";"TCP";"IP";"Ethernet"
"Jaký protokol patří do transportní vrstvy?";"TCP";"IP";"HTTP";"FTP"
"Jaký protokol patří do internetové vrstvy?";"IP";"TCP";"SMTP";"HTTP"
"Jaký protokol patří do síťového přístupu v TCP/IP?";"Ethernet";"TCP";"IP";"DNS"
"Co je úkolem transportní vrstvy v ISO/OSI modelu?";"Spolehlivý přenos dat";"Směrování paketů";"Přenos bitů po médiu";"Řízení přístupu"
"Jaký protokol poskytuje spolehlivý přenos dat?";"TCP";"UDP";"IP";"HTTP"
"Jaký protokol poskytuje rychlý, ale nespolehlivý přenos dat?";"UDP";"TCP";"IP";"FTP"
"Co je úkolem aplikační vrstvy v ISO/OSI modelu?";"Interakce s uživatelem";"Přenos bitů";"Řízení přístupu";"Šifrování dat"
"Jaký protokol se používá pro přenos webových stránek?";"HTTP";"SMTP";"FTP";"DNS"
"Jaký protokol se používá pro přenos souborů?";"FTP";"HTTP";"IP";"ARP"
"Jaký protokol se používá pro odesílání e-mailů?";"SMTP";"FTP";"TCP";"UDP"
"Jaký protokol překládá doménová jména na IP adresy?";"DNS";"HTTP";"ARP";"RIP"
"Jaký protokol zajišťuje bezdrátovou komunikaci?";"Wi-Fi";"Ethernet";"Bluetooth";"SMTP"
"Jaký protokol slouží pro kabelové sítě?";"Ethernet";"Wi-Fi";"Bluetooth";"ARP"
"Jaká vrstva ISO/OSI modelu řeší směrování paketů?";"Síťová";"Linková";"Transportní";"Prezentační"
"Jaký protokol používá IPv4 a IPv6 adresy?";"IP";"TCP";"DNS";"FTP"
"Jaký protokol používá SSL/TLS pro zabezpečený přenos dat?";"HTTPS";"HTTP";"FTP";"SMTP"
"Jaký protokol slouží pro rychlé přenosy v reálném čase?";"UDP";"TCP";"FTP";"DNS"
"Jaký je hlavní rozdíl mezi TCP a UDP?";"TCP je spolehlivý, UDP je rychlý";"UDP je spolehlivý, TCP je rychlý";"TCP je bezdrátový, UDP je kabelový";"UDP je textový, TCP je binární"
"Jaký protokol se používá pro odesílání webových stránek pomocí šifrovaného spojení?";"HTTPS";"HTTP";"FTP";"SMTP"
"Jaký je rozdíl mezi HTTP a HTTPS?";"HTTPS je zabezpečené pomocí SSL/TLS";"HTTP je rychlejší než HTTPS";"HTTPS používá IPv6";"HTTP šifruje data"
"Jaký příkaz ve Windows zobrazí IP adresu?";"ipconfig";"ping";"tracert";"netstat"
"Jaký příkaz v Linuxu zobrazí IP adresu?";"ifconfig";"ipconfig";"ping";"route"
"Co znamená NAT?";"Překlad síťových adres";"Přenos dat po kabelu";"Zabezpečení datových toků";"Šifrování hesel"
"Jaký nástroj slouží pro sledování cesty paketů?";"tracert";"ping";"netstat";"ipconfig"
"Jaký příkaz otestuje dostupnost zařízení v síti?";"ping";"tracert";"nslookup";"ftp"
"Jaký protokol se používá pro přístup k síťovým sdíleným složkám ve Windows?";"SMB";"FTP";"HTTP";"SSH"
"Jaký protokol se používá pro bezpečný přístup k serveru přes příkazový řádek?";"SSH";"FTP";"HTTP";"SMTP"
"Jaká služba překládá doménová jména na IP adresy?";"DNS";"ARP";"NTP";"ICMP"
"Jaký protokol se používá pro synchronizaci času mezi zařízeními?";"NTP";"FTP";"DNS";"SMTP"
"Jaký nástroj lze použít pro sdílení souborů mezi počítači s Windows?";"Samba";"WinSCP";"NFS";"Telnet"
"Jaký příkaz ve Windows zobrazí aktivní síťová připojení?";"netstat";"ping";"ipconfig";"tracert"
"Jaký protokol slouží pro přenos elektronické pošty?";"SMTP";"FTP";"HTTP";"DNS"
`;
const csvDataPasivni = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou pasivní prvky v počítačových sítích?";"Prvky sloužící k fyzickému propojení bez napájení";"Zařízení pro směrování dat";"Bezdrátové přístupové body";"Servery a datová úložiště"
"Jaký kabel je nejpoužívanější pro LAN sítě?";"Kroucená dvojlinka";"Koaxiální kabel";"Optický kabel";"Telefonní kabel"
"Co je hlavní výhodou kroucené dvojlinky?";"Redukce elektromagnetického rušení";"Vysoká přenosová rychlost";"Odolnost vůči vlhkosti";"Dlouhý dosah bez zesílení"
"Jaká je maximální rychlost kabelu Cat5e?";"1 Gbps";"10 Mbps";"100 Mbps";"10 Gbps"
"Jaká je maximální rychlost kabelu Cat6a?";"10 Gbps";"1 Gbps";"100 Mbps";"100 Gbps"
"Jaká je hlavní výhoda koaxiálního kabelu?";"Odolnost vůči rušení";"Nízké náklady";"Jednoduchá instalace";"Vysoká flexibilita"
"Jaký kabel je nejvhodnější pro dlouhé vzdálenosti?";"Optický kabel";"Kroucená dvojlinka";"Koaxiální kabel";"USB kabel"
"Jaký typ optického kabelu je vhodný pro dlouhé vzdálenosti?";"Single-mode";"Multi-mode";"Kroucená dvojlinka";"Koaxiální"
"Jaký typ optického kabelu je vhodný pro kratší vzdálenosti?";"Multi-mode";"Single-mode";"Koaxiální";"Cat6"
"Jaký konektor se používá pro kroucenou dvojlinku?";"RJ-45";"RJ-11";"SC";"LC"
"Jaký konektor se používá pro telefonní linky?";"RJ-11";"RJ-45";"SC";"LC"
"Jaké konektory se používají pro optické kabely?";"SC/LC";"RJ-45/RJ-11";"HDMI/VGA";"USB/FireWire"
"Jaká je rychlost Ethernetu 10BASE-T?";"10 Mbps";"100 Mbps";"1 Gbps";"10 Gbps"
"Jaký kabel se používá pro Fast Ethernet?";"Cat5";"Cat3";"Cat6";"Optický"
"Jaká je rychlost Gigabit Ethernetu?";"1 Gbps";"10 Mbps";"100 Mbps";"10 Gbps"
"Jaká je rychlost 10G Ethernetu?";"10 Gbps";"1 Gbps";"100 Mbps";"100 Gbps"
"Jaký standard kabeláže je častěji používán v moderních sítích?";"T568B";"T568A";"IEEE 802.3";"RJ-11"
"Jaký standard kabeláže je starší a méně používaný?";"T568A";"T568B";"Cat7";"Cat6a"
"Jaký je první vodič v pořadí standardu T568B?";"Bílá/oranžová";"Bílá/zelená";"Modrá";"Hnědá"
"Jaký je druhý vodič v pořadí standardu T568B?";"Oranžová";"Zelená";"Modrá";"Hnědá"
"Jaký je čtvrtý vodič v pořadí standardu T568B?";"Modrá";"Bílá/zelená";"Hnědá";"Oranžová"
"Jaký je osmý vodič v pořadí standardu T568B?";"Hnědá";"Oranžová";"Modrá";"Bílá/modrá"
"Co je hlavním účelem krimpovacích kleští?";"Krimpování konektorů RJ-45 na kabel";"Odizolování vodičů";"Měření napětí";"Kontrola kvality kabelu"
"Jaký nástroj se používá pro odizolování kabelu?";"Ořezávač kabelu";"Tester kabelů";"Krimpovací kleště";"Síťový analyzátor"
"Jaké nástroje jsou potřeba pro výrobu kabelu T568B?";"Krimpovací kleště, RJ-45 konektory, ořezávač kabelu";"Pájka, konektory SC, tester optiky";"Vrták, koaxiální kabel, šroubovák";"Lepicí páska, měřič napětí, multimetr"
"Jaký nástroj ověřuje správnost zapojení kabelu?";"Tester kabelů";"Multimetr";"Osciloskop";"Síťový analyzátor"
"Jaký kabel se typicky používá pro televizní signál?";"Koaxiální kabel";"Kroucená dvojlinka";"Optický kabel";"USB kabel"
"Jaká je maximální délka kroucené dvojlinky bez zesílení signálu?";"100 metrů";"50 metrů";"300 metrů";"1 kilometr"
"Jaká je hlavní výhoda optického kabelu?";"Vysoká rychlost a odolnost proti rušení";"Jednoduchá instalace";"Nízké náklady";"Snadná oprava"
"Jaká je hlavní výhoda použití stíněné kroucené dvojlinky (STP)?";"Lepší ochrana proti elektromagnetickému rušení";"Levnější než nestíněná verze";"Snadnější instalace";"Vyšší rychlost přenosu"
"Jaký kabel je nejvhodnější pro propojení mezi budovami?";"Optický kabel";"Kroucená dvojlinka";"Koaxiální kabel";"USB kabel"
"Co je výhodou kabelu Cat7 oproti Cat6?";"Vyšší rychlost a stínění";"Delší dosah bez zesílení";"Levnější materiály";"Snadnější krimpování"
"Jaká je hlavní nevýhoda koaxiálního kabelu ve srovnání s optickým?";"Nižší přenosová rychlost";"Vyšší cena";"Náchylnost k vlhkosti";"Komplikovanější zapojení"
"Pro co se používá kabel s konektorem RJ-11?";"Telefonní linky";"LAN sítě";"Televizní přenos";"Optické sítě"
`;
const csvDataAktivni = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou aktivní prvky v počítačových sítích?";"Zařízení, která zajišťují přenos, směrování a zpracování dat";"Zařízení pro fyzické propojení";"Zařízení pro bezdrátový přenos";"Zařízení pro uchovávání dat"
"Jaké funkce vykonávají aktivní prvky v síti?";"Zprostředkovávají komunikaci, optimalizují provoz, zajišťují zabezpečení a správu";"Zajišťují pouze fyzické propojení";"Připojují koncová zařízení k síti";"Omezují šířku pásma"
"Co je přepínač (Switch)?";"Zařízení propojující zařízení v LAN na základě MAC adres";"Zařízení pro směrování mezi sítěmi";"Zařízení pro připojení k internetu";"Zařízení pro zajištění bezpečnosti sítě"
"Jaké typy přepínačů existují?";"Neřízený switch a řízený switch";"Přepínač a směrovač";"Repeater a access point";"Směrovač a firewall"
"Co je směrovač (Router)?";"Zařízení, které směruje datové pakety mezi různými sítěmi";"Zařízení pro připojení k internetu";"Zařízení pro správu sítě";"Zařízení pro ochranu proti hrozbám"
"Jaké funkce vykonává směrovač?";"Přidělování IP adres, překlad adres, zabezpečení";"Připojení k internetu";"Optimalizace síťového provozu";"Přenos dat mezi zařízeními"
"Co je přístupový bod (Access Point)?";"Zařízení umožňující bezdrátový přístup k síti";"Zařízení pro směrování dat";"Zařízení pro zvýšení šířky pásma";"Zařízení pro zabezpečení sítě"
"Co je opakovač (Repeater)?";"Zařízení, které posiluje signál a prodlužuje dosah sítě";"Zařízení pro směrování dat";"Zařízení pro zvýšení rychlosti připojení";"Zařízení pro zabezpečení sítě"
"Jaká je hlavní funkce firewallu?";"Chrání síť před neoprávněným přístupem";"Připojuje zařízení k síti";"Optimalizuje síťový provoz";"Zvyšuje rychlost připojení"
"Co je potřeba pro konfiguraci přepínače?";"Přístup přes webové rozhraní nebo CLI, konfigurace VLAN, QoS, port security";"Nastavení pouze základní konfigurace";"Zajištění připojení k internetu";"Nastavení IP adresy pro přístup"
"Co je potřeba pro konfiguraci směrovače?";"Přístup přes webové rozhraní, nastavení WAN/LAN, NAT, DHCP, firewall, VPN";"Připojení pouze k internetu";"Nastavení pouze firewallu";"Nastavení Wi-Fi sítě"
"Co je součástí datového rozvaděče?";"Racková skříň, patch panely, switch, router, patch kabely, napájecí panel, pořadače kabelů";"Pouze přepínače a směrovače";"Patch panely a napájecí panely";"Pouze kabely a zařízení pro připojení k internetu"
"Jaký je první krok při sestavování datového rozvaděče?";"Plánování, zjištění počtu zařízení a výběr velikosti rackové skříně";"Instalace patch panelu";"Připojení routeru";"Montáž napájecího panelu"
"Jaký je hlavní úkol přepínače (Switch)?";"Propojuje zařízení v LAN na základě MAC adres";"Připojuje zařízení k internetu";"Směruje data mezi sítěmi";"Zabezpečuje síť"
"Jaký je rozdíl mezi řízeným a neřízeným přepínačem?";"Řízený switch nabízí správu, VLAN a QoS, neřízený switch je automatický";"Neřízený switch má více portů";"Řízený switch není kompatibilní s VLAN";"Neřízený switch podporuje vyšší rychlosti"
"Co je hlavní funkcí směrovače (Router)?";"Směruje datové pakety mezi různými sítěmi";"Propojuje zařízení v LAN";"Zabezpečuje připojení k internetu";"Ovládá šířku pásma sítě"
"Co dělá NAT (Network Address Translation) na směrovači?";"Překlad adres mezi interní a externí sítí";"Zabezpečuje síť proti útokům";"Zajišťuje připojení k internetu";"Distribuuje IP adresy v LAN"
"Jaký standard Wi-Fi používá přístupový bod?";"Standardy 802.11a/b/g/n/ac/ax";"Standardy 802.3 a 802.5";"Standardy 802.15.1 a 802.16";"Standardy 802.3af a 802.3at"
"Jaký je hlavní účel opakovače (Repeater)?";"Posiluje signál a prodlužuje dosah sítě";"Zvyšuje šířku pásma sítě";"Zabezpečuje síť před hrozbami";"Připojuje více zařízení k síti"
"Co je potřeba pro konfiguraci přístupového bodu (Access Point)?";"Nastavení SSID, šifrování, kanál a výkon signálu";"Pouze nastavení IP adresy";"Připojení k internetovému směrovači";"Pouze nastavení bezpečnostního protokolu"
"Jaký je hlavní úkol firewallu?";"Filtruje datový provoz a blokuje hrozby";"Zajišťuje rychlost připojení k síti";"Připojuje zařízení k internetu";"Propojuje různé sítě"
"Co je to VPN (Virtual Private Network)?";"Virtuální síť, která šifruje a zabezpečuje připojení";"Nástroj pro správu sítě";"Zařízení pro připojení k internetu";"Kabel pro přenos dat"
"Jaký je standard pro kabeláž používaný v moderních sítích?";"T568B";"T568A";"Cat6";"RJ-45"
"Co je to VLAN (Virtual Local Area Network)?";"Virtuální síť, která odděluje provoz na úrovni přepínačů";"Reálná síť pro propojení zařízení";"Fyzické rozdělení sítě";"Rychlostní pásmo v síti"
"Jaké zařízení se používá pro připojení k internetu?";"Směrovač (Router)";"Přepínač (Switch)";"Opakovač (Repeater)";"Přístupový bod (Access Point)"
"Jaký parametr má vliv na rychlost portů u přepínačů?";"Rychlost portů (např. 10/100 Mbps, 1 Gbps, 10 Gbps)";"Počet portů";"Typ kabelu";"Podpora PoE"
"Jaké jsou možnosti zabezpečení na směrovači?";"Firewall, VPN, NAT, DHCP";"Pouze VPN a firewall";"Připojení k internetu";"Možnost změny IP adresy"
"Co je potřeba pro správnou konfiguraci datového rozvaděče?";"Správné uspořádání zařízení a kabeláže v rackové skříni";"Pouze připojení k internetu";"Připojení všech zařízení k napájení";"Nastavení přístupových bodů"
"Jaký je hlavní rozdíl mezi Cat6 a Cat7?";"Cat7 má vyšší rychlost a stínění";"Cat6 je levnější";"Cat6 má lepší dosah";"Cat7 podporuje více zařízení"
"Jaká zařízení jsou obvykle součástí datového rozvaděče?";"Patch panely, switch, router, napájecí panel, kabelové organizéry";"Přepínače a směrovače";"Pouze kabely a napájecí panely";"Opakovače a přístupové body"
"Co je důležité při plánování datového rozvaděče?";"Zjistit počet zařízení a vybrat vhodnou velikost rackové skříně";"Vybrat pouze přepínače";"Připojit zařízení bez plánu";"Použít pouze optické kabely"
"Co je součástí konfigurace switchů?";"Nastavení VLAN, QoS, port security";"Nastavení pouze IP adresy";"Připojení k internetu";"Nastavení šířky pásma"
`;
const csvDataNavrh = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je hlavním účelem návrhu sítě?";"Plánování a implementace infrastruktury pro sdílení dat a zdrojů";"Zabezpečení proti útokům";"Optimalizace výkonu procesorů";"Zálohování dat"
"Jaký typ sítě se používá pro domácnosti nebo malé firmy?";"LAN";"WAN";"MAN";"SAN"
"Jaký typ sítě pokrývá větší geografickou oblast?";"WAN";"LAN";"WLAN";"PAN"
"Jaký typ sítě se používá pro bezdrátové propojení v rámci budovy?";"WLAN";"LAN";"WAN";"MAN"
"Jaký typ sítě pokrývá město nebo kampus?";"MAN";"LAN";"WAN";"SAN"
"Jaký typ sítě je nejčastější v domácím prostředí?";"LAN";"WAN";"MAN";"CAN"
"Jaký prvek je obvykle centrálním bodem v hvězdicové topologii domácí sítě?";"Router";"Switch";"Access Point";"Modem"
"Jaký kabel se běžně používá pro kabelové připojení v domácí síti?";"Kroucená dvojlinka";"Koaxiální kabel";"Optický kabel";"Telefonní kabel"
"Jaký standard Wi-Fi je vhodný pro moderní domácí sítě?";"802.11ax";"802.11b";"802.11g";"802.11a"
"Co je úkolem routeru v domácí síti?";"Připojení LAN/WLAN k internetu";"Tisk dokumentů";"Ukládání záloh";"Přenos dat mezi procesory"
"Jaký prvek rozšiřuje počet kabelových portů v síti?";"Switch";"Router";"Access Point";"Modem"
"Jaký prvek rozšiřuje dosah bezdrátové sítě?";"Access Point";"Switch";"Router";"Modem"
"Jaká adresa se běžně používá pro přístup k nastavení routeru?";"192.168.1.1";"10.0.0.1";"172.16.0.1";"255.255.255.0"
"Jaké je výchozí přihlašovací jméno a heslo u většiny routerů?";"admin/admin";"user/user";"root/root";"guest/guest"
"Co je úkolem DHCP serveru v domácí síti?";"Automatické přidělování IP adres";"Šifrování datového provozu";"Zálohování uživatelských dat";"Přesměrování webového provozu"
"Jaký protokol slouží pro zabezpečení Wi-Fi sítě?";"WPA2 nebo WPA3";"WEP";"FTP";"HTTP"
"Jaký název sítě je zobrazen uživatelům při připojování k Wi-Fi?";"SSID";"IP adresa";"MAC adresa";"DHCP"
"Jaký standard šifrování je považován za nejbezpečnější pro Wi-Fi sítě?";"WPA3";"WPA2";"WEP";"AES"
"Co je doporučeno udělat po nastavení routeru?";"Změnit výchozí přihlašovací údaje";"Nechat původní nastavení";"Zakázat Wi-Fi";"Odpojit router od internetu"
"Co je WAN port na routeru?";"Port pro připojení k internetu";"Port pro připojení tiskárny";"Port pro připojení USB disku";"Port pro připojení Wi-Fi"
"Jaká je hlavní úloha LAN portů na routeru?";"Připojení kabelových zařízení v místní síti";"Připojení externí antény";"Napájení zařízení";"Zálohování dat"
"Jaký je hlavní úkol firewallu na routeru?";"Zabezpečení sítě před neoprávněným přístupem";"Zrychlení přenosu dat";"Sdílení tiskáren";"Automatická konfigurace IP adres"
"Jaké jsou hlavní komponenty malé domácí sítě?";"Router, kabeláž, koncová zařízení";"Server, firewall, pracovní stanice";"Tiskárna, projektor, monitor";"Procesor, grafická karta, paměť"
"Jak se propojují stolní počítače v domácí síti?";"Pomocí kabelu k routeru";"Bezdrátově přes Bluetooth";"Pomocí optického kabelu";"Přímým propojením USB"
"Jaké zařízení se obvykle připojuje bezdrátově k domácí síti?";"Notebook";"Server";"Stolní počítač";"Switch"
"Jaká funkce routeru zajišťuje připojení k internetu?";"WAN port";"LAN port";"USB port";"Audio výstup"
"Jaký přístupový bod je potřebný pro rozšíření Wi-Fi signálu?";"Access Point";"Switch";"Repeater";"Modem"
"Jaký je hlavní účel konfigurace SSID?";"Určení názvu bezdrátové sítě";"Šifrování datového provozu";"Přidělení IP adres";"Řízení přístupu do sítě"
"Jaká bezpečnostní opatření se doporučují pro domácí síť?";"Aktivace WPA3, změna výchozího hesla";"Deaktivace firewallu";"Použití veřejného SSID";"Vypnutí DHCP"
"Jaký prvek domácí sítě zajišťuje přidělování IP adres?";"DHCP server";"DNS server";"FTP server";"SMTP server"
"Co je důležité udělat při konfiguraci Wi-Fi?";"Nastavit silné heslo a šifrování WPA3";"Deaktivovat šifrování";"Nechat síť veřejně přístupnou";"Omezit počet připojených zařízení"
`;
const csvDataBezdratove = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co umožňují bezdrátové technologie?";"Přenos dat bez použití kabelů";"Rychlejší přenos dat než kabelové sítě";"Přímou komunikaci mezi servery";"Přenos dat přes optická vlákna"
"Jaká technologie je nejrozšířenější pro domácí bezdrátové sítě?";"Wi-Fi";"Bluetooth";"Zigbee";"Infrared"
"Jaký standard Wi-Fi je nejnovější a nejrychlejší?";"802.11ax";"802.11ac";"802.11g";"802.11n"
"Jaký je hlavní účel technologie Bluetooth?";"Krátký dosah a nízká spotřeba energie";"Rychlé připojení na dlouhé vzdálenosti";"Přenos optických dat";"Vysokorychlostní datový přenos"
"Jaká technologie je vhodná pro mobilní přístup k internetu?";"LTE/5G";"Wi-Fi";"Bluetooth";"Zigbee"
"Jaká technologie je vhodná pro chytré domácnosti?";"Zigbee";"Wi-Fi";"Bluetooth";"Infrared"
"Jaká technologie se používá pro dálkové ovladače?";"Infrared";"Wi-Fi";"Bluetooth";"Zigbee"
"Jaký je hlavní účel WPA2?";"Zabezpečení Wi-Fi sítě";"Rychlé připojení";"Zálohování dat";"Šifrování kabelových sítí"
"Jaký bezpečnostní standard je považován za nejbezpečnější?";"WPA3";"WPA2";"WEP";"MAC Filtering"
"Jaká metoda zabezpečení Wi-Fi je zastaralá a nedoporučuje se?";"WEP";"WPA3";"WPA2";"MAC Filtering"
"Co je hlavní nevýhodou WEP šifrování?";"Snadno prolomitelné";"Nízká přenosová rychlost";"Vysoké náklady";"Kompatibilita s moderními zařízeními"
"Jaký je hlavní rozdíl mezi 2,4 GHz a 5 GHz Wi-Fi?";"2,4 GHz má delší dosah, 5 GHz vyšší rychlost";"5 GHz má delší dosah, 2,4 GHz vyšší rychlost";"Obě mají stejnou rychlost a dosah";"2,4 GHz podporuje více zařízení"
"Jaké jsou výhody mesh systému?";"Pokrytí velkých prostor a plynulé připojení";"Nižší náklady na instalaci";"Přímá komunikace s mobilními sítěmi";"Větší šířka pásma pro jednotlivá zařízení"
"Jaké připojení poskytuje mobilní hotspot?";"Mobilní internet pro více zařízení";"Přímé připojení k optické síti";"Bezdrátový přenos dat na krátkou vzdálenost";"Zabezpečení domácí sítě"
"Jaký nástroj je nezbytný pro konfiguraci Wi-Fi routeru?";"Webový prohlížeč";"FTP klient";"Multimetr";"Optický měřič"
"Jaké jsou výhody skrývání SSID?";"Snížení viditelnosti sítě pro veřejnost";"Zvýšení rychlosti přenosu dat";"Automatické připojení nových zařízení";"Vyšší šířka pásma"
"Jaký prvek zajišťuje bezdrátové připojení v domácí síti?";"Wi-Fi router";"Ethernet switch";"Optický konvertor";"Firewall"
"Jaký bezpečnostní prvek omezuje přístup na základě fyzické adresy zařízení?";"MAC Filtering";"WPA2";"Firewall";"SSID"
"Jaký prvek rozšiřuje dosah Wi-Fi signálu?";"Access Point";"Switch";"Router";"Modem"
"Jaký prvek umožňuje plynulé pokrytí velkých prostor bez přerušení signálu?";"Mesh systém";"Standardní router";"Bluetooth brána";"Ethernet přepínač"
"Co je SSID?";"Název bezdrátové sítě";"Bezpečnostní protokol";"IP adresa";"Mac adresa"
"Jaké šifrování je doporučeno pro domácí sítě?";"WPA3";"WEP";"AES";"DES"
"Jaký prvek umožňuje sdílení internetu z mobilního telefonu?";"Mobilní hotspot";"Access Point";"Switch";"Optický konvertor"
"Jaké pásmo Wi-Fi je vhodné pro připojení na větší vzdálenosti?";"2,4 GHz";"5 GHz";"60 GHz";"1 GHz"
"Jaký typ zabezpečení Wi-Fi poskytuje ochranu před útoky hrubou silou?";"WPA3";"WPA2";"WEP";"SSID"
"Jaký typ útoku může být proveden na nezabezpečenou Wi-Fi síť?";"Man-in-the-middle";"SQL injection";"Buffer overflow";"Cross-site scripting"
"Jaká je doporučená délka hesla pro zabezpečenou Wi-Fi síť?";"Minimálně 12 znaků";"4 znaky";"6 znaků";"8 znaků"
"Jaký kanál je vhodné použít pro 2,4 GHz pásmo, aby se předešlo rušení?";"1, 6 nebo 11";"2, 4 nebo 7";"3, 5 nebo 8";"9, 10 nebo 12"
"Jaký typ připojení nabízí Wi-Fi 6 (802.11ax)?";"Vyšší rychlost a kapacitu připojení";"Nižší spotřebu energie";"Přímé připojení k mobilním sítím";"Kompatibilitu s Bluetooth"
"Jaké šifrování poskytuje vyšší ochranu dat v síti?";"AES";"WEP";"DES";"MD5"
"Jaký bezpečnostní prvek zajišťuje blokování nežádoucího provozu?";"Firewall";"Wi-Fi booster";"Mesh extender";"Bluetooth gateway"
"Jaký typ zařízení je ideální pro rozšíření signálu v domácnosti?";"Repeater";"Modem";"Počítač";"Tiskárna"
"Co může způsobovat rušení signálu Wi-Fi v domácnosti?";"Mikrovlnná trouba";"Bluetooth klávesnice";"USB kabely";"Ethernet switche"
"Jaký typ bezdrátové technologie využívají chytré domácnosti?";"Zigbee";"Wi-Fi 6";"Bluetooth";"Ethernet"
`;
const csvDataLokalni = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký kabel se používá pro kabelové připojení k LAN?";"Ethernet (kroucená dvojlinka)";"Koaxiální kabel";"Optický kabel";"Telefonní kabel"
"Jaký konektor se používá pro připojení kabelu do počítače?";"RJ-45";"RJ-11";"USB-C";"HDMI"
"Jaké připojení umožňuje Wi-Fi adaptér?";"Bezdrátové připojení";"Kabelové připojení";"Optické připojení";"Připojení přes USB"
"Jaký protokol se používá pro automatické přidělení IP adres?";"DHCP";"DNS";"FTP";"HTTP"
"Co zajišťuje překlad doménových jmen na IP adresy?";"DNS";"DHCP";"FTP";"SMTP"
"Jaký je hlavní účel firewallu v síti?";"Ochrana před neoprávněným přístupem";"Přenos souborů";"Tisk dokumentů";"Překlad adres"
"Jaký typ zabezpečení Wi-Fi je nejbezpečnější?";"WPA3";"WEP";"WPA2";"MAC Filtering"
"Jaký nástroj ve Windows zobrazí aktuální IP adresu?";"ipconfig";"ping";"tracert";"netstat"
"Co znamená zkratka VLAN?";"Virtuální lokální síť";"Vzdálený přístup";"Bezdrátová síť";"Zabezpečená síť"
"Jaký prvek je centrálním bodem kabelové LAN sítě?";"Switch nebo router";"Access Point";"Repeater";"Firewall"
"Jaká je výhoda použití DHCP?";"Automatické přidělování IP adres";"Zrychlení přenosu dat";"Zálohování souborů";"Blokování nežádoucích přístupů"
"Jaký port na routeru slouží pro připojení k internetu?";"WAN port";"LAN port";"USB port";"HDMI port"
"Jaký je účel NAT na routeru?";"Překlad privátních IP adres na veřejnou";"Zrychlení přenosu dat";"Šifrování provozu";"Monitoring připojených zařízení"
"Jaký příkaz ve Windows slouží ke kontrole připojení na router?";"ping 192.168.1.1";"tracert 192.168.1.1";"ipconfig /all";"netstat -a"
"Jaký je účel masky podsítě?";"Určuje rozsah IP adres v síti";"Šifruje data při přenosu";"Zrychluje přenos dat";"Omezuje přístup do sítě"
"Co znamená statická IP adresa?";"IP adresa je pevně nastavena";"IP adresa se mění při každém připojení";"IP adresa je skryta před veřejností";"IP adresa je sdílena mezi více zařízeními"
"Jaký nástroj slouží ke změně nastavení sítě ve Windows?";"Ovládací panely";"Task Manager";"Příkazový řádek";"Registr"
"Jaké služby se často používají pro sdílení souborů v LAN?";"File Sharing";"DHCP";"DNS";"FTP"
"Jak se připojí zařízení k síti přes Wi-Fi?";"Pomocí SSID a hesla";"Pomocí MAC adresy";"Pomocí statické IP adresy";"Pomocí NAT"
"Jaká adresa se běžně používá pro přístup do rozhraní routeru?";"192.168.1.1";"10.0.0.1";"172.16.0.1";"255.255.255.0"
"Jaké nastavení umožňuje omezení připojení jen pro vybraná zařízení?";"MAC Filtering";"WEP šifrování";"Dynamic DNS";"Port forwarding"
"Jaký prvek domácí sítě zajišťuje připojení k internetu?";"Router";"Switch";"Repeater";"Firewall"
"Co umožňuje připojení přes Access Point?";"Rozšíření dosahu Wi-Fi";"Připojení kabelového zařízení";"Monitoring sítě";"Šifrování provozu"
"Jaký prvek zajišťuje přidělení IP adres v domácí síti?";"DHCP server";"DNS server";"FTP server";"Mail server"
"Jaký kanál je vhodné zvolit pro pásmo 2,4 GHz, aby se předešlo rušení?";"1, 6 nebo 11";"2, 4 nebo 7";"3, 5 nebo 8";"9, 10 nebo 12"
"Jaké jsou hlavní výhody kabelového připojení k síti?";"Stabilita a vyšší rychlost";"Snadná instalace";"Nižší náklady";"Větší flexibilita"
"Jaký je základní rozdíl mezi DHCP a statickou IP adresou?";"DHCP přiděluje adresy automaticky, statická je pevná";"Statická IP je pro bezdrátové připojení, DHCP pro kabelové";"DHCP je rychlejší než statická IP";"Statická IP je zabezpečenější než DHCP"
"Jaký je hlavní důvod použití DNS v síti?";"Překlad doménových jmen na IP adresy";"Šifrování dat";"Přidělení IP adres";"Zabezpečení přenosu"
"Jaký příkaz ve Windows umožňuje zobrazit tabulku směrování?";"route print";"ipconfig /all";"netstat -r";"ping -t"
`;
const csvDataInternet = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký typ připojení využívá telefonní linky pro přenos dat?";"DSL/VDSL";"Kabelové připojení";"Optické připojení";"Mobilní připojení"
"Jaký typ připojení nabízí nejvyšší rychlost?";"Optické připojení (FTTH)";"DSL/VDSL";"Mobilní připojení (4G/5G)";"Satelitní připojení"
"Jaký typ připojení poskytuje mobilitu a snadnou instalaci?";"Mobilní připojení (4G/5G)";"Optické připojení";"DSL/VDSL";"Kabelové připojení"
"Jaký je hlavní nevýhodou satelitního připojení?";"Vysoká latence a citlivost na počasí";"Nízká rychlost";"Omezené pokrytí";"Vyšší provozní náklady"
"Jaký aktivní prvek je nezbytný pro DSL připojení?";"DSL modem/router";"Kabelový modem";"Optický převodník";"Mobilní router"
"Jaký aktivní prvek je potřebný pro kabelové připojení k internetu?";"Kabelový modem";"Mobilní router";"Satelitní modem";"Optický převodník"
"Jaký prvek převádí optický signál na elektrický u optického připojení?";"Optický modem (ONT)";"DSL modem";"Kabelový modem";"Mobilní router"
"Jaké připojení poskytuje mobilní router (4G/5G)?";"Mobilní připojení";"DSL připojení";"Kabelové připojení";"Optické připojení"
"Jaké zařízení je potřebné pro satelitní připojení k internetu?";"Satelitní modem a parabola";"Optický převodník";"Wi-Fi router";"Bluetooth adaptér"
"Jaký pasivní prvek je nezbytný pro DSL připojení?";"Telefonní kabel (RJ-11)";"Koaxiální kabel";"Optické vlákno";"Ethernetový kabel"
"Jaký pasivní prvek je využíván u kabelového připojení?";"Koaxiální kabel";"Optické vlákno";"Telefonní kabel";"HDMI kabel"
"Jaký je hlavní pasivní prvek optického připojení?";"Optické vlákno";"Koaxiální kabel";"Ethernetový kabel";"Telefonní kabel"
"Jaký bezdrátový standard je vhodný pro připojení k internetu doma?";"Wi-Fi 6 (802.11ax)";"Bluetooth 5.0";"Zigbee";"Infrared"
"Jaký prvek je nezbytný pro připojení počítače k Wi-Fi síti?";"Wi-Fi adaptér";"Ethernetový kabel";"Koaxiální modem";"Optický převodník"
"Jaký je první krok při připojení k Wi-Fi síti ve Windows?";"Kliknutí na ikonu Wi-Fi na hlavním panelu";"Restartování počítače";"Otevření příkazového řádku";"Vypnutí antiviru"
"Jaký údaj je nutné zadat při připojení k zabezpečené Wi-Fi síti?";"Heslo";"IP adresu";"MAC adresu";"DNS server"
"Jaký typ připojení je vhodný pro odlehlé oblasti bez kabelové infrastruktury?";"Satelitní připojení";"Optické připojení";"DSL připojení";"Kabelové připojení"
"Jaký příkaz ve Windows ověří připojení k internetu?";"ping www.google.com";"ipconfig /release";"tracert 8.8.8.8";"netstat -a"
"Jaký způsob připojení nabízí Wi-Fi hotspot z mobilního telefonu?";"Mobilní internet přes Wi-Fi";"Optické připojení";"Kabelové připojení";"Bezdrátový přenos přes Bluetooth"
"Jaké pásmo poskytuje delší dosah, ale nižší rychlost?";"2,4 GHz";"5 GHz";"60 GHz";"1 GHz"
"Jaká je hlavní výhoda optického připojení?";"Vysoká rychlost a stabilita";"Nízké náklady na instalaci";"Snadná mobilita";"Vysoká latence"
"Jaký kabel se používá u kabelového připojení?";"Koaxiální kabel";"Telefonní kabel";"Optické vlákno";"USB kabel"
"Jaký bezdrátový standard nabízí nejvyšší rychlost?";"Wi-Fi 6 (802.11ax)";"Bluetooth 4.2";"Zigbee";"Infrared"
"Jaký typ připojení je nejméně citlivý na rušení?";"Optické připojení";"Wi-Fi připojení";"Mobilní připojení";"Kabelové připojení"
"Jaký prvek je nutný pro sdílení internetu z mobilu?";"Mobilní hotspot";"Wi-Fi extender";"DSL modem";"Optický převodník"
"Jaká technologie připojení je vhodná pro domácí bezdrátovou síť?";"Wi-Fi";"Bluetooth";"Zigbee";"Satelitní připojení"
"Jaká frekvence Wi-Fi je vhodná pro vysokorychlostní přenosy?";"5 GHz";"2,4 GHz";"60 GHz";"1 GHz"
"Jaké zabezpečení Wi-Fi je nejbezpečnější?";"WPA3";"WEP";"WPA";"AES"
"Jaký typ připojení nabízí nejvyšší mobilitu?";"Mobilní připojení (4G/5G)";"DSL připojení";"Kabelové připojení";"Optické připojení"
`;
const csvDataZaklady = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je binární kód?";"Reprezentace dat pomocí 0 a 1";"Reprezentace dat pomocí 1 a 2";"Reprezentace dat pomocí písmen";"Reprezentace dat pomocí barev"
"Jaká je hodnota znaku 'A' v ASCII?";"65";"97";"48";"32"
"Co používá dvojkový doplněk v binárním kódu?";"Reprezentaci záporných čísel";"Reprezentaci kladných čísel";"Reprezentaci textu";"Reprezentaci barev"
"Co vyjadřuje logická funkce NOT?";"Inverzi logického signálu";"Logický součet";"Logický součin";"Exkluzivní součet"
"Jaký je výstup logické funkce AND při všech vstupech 1?";"1";"0";"Záleží na podmínce";"Nelze určit"
"Jaká je základní vlastnost logické funkce OR?";"Výstup je 1, pokud je alespoň jeden vstup 1";"Výstup je 1, pokud jsou všechny vstupy 1";"Výstup je 1, pokud jsou všechny vstupy 0";"Výstup je 0, pokud je alespoň jeden vstup 1"
"Jaká je hlavní vlastnost logické funkce XOR?";"Výstup je 1, pokud se vstupy liší";"Výstup je 1, pokud jsou vstupy stejné";"Výstup je vždy 0";"Výstup je vždy 1"
"Jaký je výsledek logické funkce NOT, pokud vstup je 0?";"1";"0";"Záleží na vstupu";"Nelze určit"
"Jaké jsou univerzální logické hradla?";"NAND a NOR";"AND a OR";"XOR a XNOR";"NOT a AND"
"Co vyjadřuje De Morganův zákon pro negaci logického součinu?";"Negace AND je OR s negovanými vstupy";"Negace OR je AND s negovanými vstupy";"Negace XOR je XNOR";"Negace NOT je AND"
"Jaký je výsledek funkce AND při vstupech 1 a 0?";"0";"1";"Nelze určit";"Záleží na podmínce"
"Jaký je výsledek funkce OR při vstupech 0 a 0?";"0";"1";"Nelze určit";"Záleží na podmínce"
"Jaký je hlavní přínos minimalizace logických funkcí?";"Snížení počtu hradel a zvýšení efektivity";"Zvýšení počtu proměnných";"Zvýšení počtu hradel";"Snížení rychlosti"
"Jaký je hlavní účel Karnaughovy mapy?";"Minimalizace logických funkcí";"Převod binárních čísel na desetinná";"Sčítání binárních čísel";"Kódování textu"
"Jaký logický výraz odpovídá De Morganovu zákonu (A ⋅ B)'?";"A' + B'";"A + B";"A ⋅ B";"A' ⋅ B'"
"Jaký je hlavní rozdíl mezi kombinačním a sekvenčním obvodem?";"Sekvenční obvody mají paměť, kombinační ne";"Kombinační obvody mají paměť, sekvenční ne";"Sekvenční obvody nemají logické hradla";"Kombinační obvody nemají žádné vstupy"
"Jaký typ logického obvodu provádí aritmetické operace, jako je sčítání?";"Sčítač";"Dekodér";"Multiplexer";"Registr"
"Jaký obvod se používá pro výběr jednoho z více vstupů?";"Multiplexer";"Dekodér";"Sčítač";"Klopný obvod"
"Jaká je hlavní vlastnost klopného obvodu?";"Uchovávání bitu informace";"Směrování dat";"Převod analogového signálu";"Výběr jednoho z více vstupů"
"Jaká hradla jsou využívána pro realizaci všech logických funkcí?";"NAND a NOR";"AND a OR";"XOR a XNOR";"NOT a AND"
"Co znamená zjednodušení logické funkce pomocí Booleovy algebry?";"Snížení počtu proměnných a hradel";"Zvýšení počtu proměnných";"Komplikace logického výrazu";"Výpočet binárního součtu"
"Jaký obvod umožňuje převod binárních vstupů na jedinečný výstup?";"Dekodér";"Sčítač";"Multiplexer";"Klopný obvod"
"Co zajišťuje multiplexování v digitálních obvodech?";"Výběr jednoho z více vstupů na výstup";"Součet binárních čísel";"Převod analogového signálu";"Kódování textu"
"Co je hlavním přínosem použití sekvenčních obvodů?";"Uchovávání stavu a dat";"Rychlost sčítání";"Snížení spotřeby energie";"Zvýšení šířky pásma"
`;
const csvDataPolovidice = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou polovodičové prvky?";"Stavební jednotky moderní elektroniky";"Izolátory pro přenos signálu";"Mechanické součástky";"Optické prvky pro přenos světla"
"Jaké materiály se nejčastěji používají pro polovodičové prvky?";"Křemík a germanium";"Hliník a měď";"Uhlík a kobalt";"Sklo a plast"
"Jaké jsou hlavní typy polovodičových prvků?";"Pasivní a aktivní";"Elektronické a mechanické";"Optické a magnetické";"Jednočipové a vícečipové"
"Co jsou aktivní polovodičové prvky?";"Prvky, které mohou zesilovat nebo spínat signály";"Prvky bez zesilovací schopnosti";"Prvky pro mechanické pohyby";"Prvky určené k přenosu tepla"
"Jaká technologie je typická pro vysokou hustotu integrace a nízkou spotřebu energie?";"CMOS";"TTL";"IGBT";"GTO"
"Jaká je hlavní výhoda technologie TTL?";"Rychlé přepínání";"Nízká spotřeba energie";"Vysoká hustota integrace";"Odolnost vůči teplotním výkyvům"
"Jaká je hlavní výhoda technologie CMOS?";"Nízká spotřeba energie v klidovém stavu";"Vysoká odolnost vůči šumu";"Rychlé přepínání";"Nízká hustota integrace"
"Jaký je hlavní účel časovače 555?";"Generování pulsů nebo časování";"Měření teploty";"Zesilování signálu";"Převod analogového signálu"
"Jaký režim provozu časovače 555 generuje nepřetržitou řadu pulsů?";"Astabilní režim";"Monostabilní režim";"Bistabilní režim";"Invertující režim"
"Jak se nazývá integrovaný obvod, který zesiluje rozdíl mezi dvěma signály?";"Operační zesilovač";"Časovač 555";"GTO tyristor";"IGBT tranzistor"
"Jaká je hlavní výhoda operačního zesilovače v invertující konfiguraci?";"Výstupní signál je otočen v amplitudě a fázi";"Výstupní signál je zesílen bez změny fáze";"Výstupní signál je vyhlazen";"Výstupní signál je modulován"
"Jaká je hlavní vlastnost invertujícího zesilovače?";"Výstupní signál je otočen v amplitudě a fázi";"Výstupní signál je zesílen bez změny fáze";"Výstupní signál je vyhlazen";"Výstupní signál je modulován"
"Co je hlavní vlastnost IGBT tranzistoru?";"Kombinace vlastností MOSFET a bipolárního tranzistoru";"Převod střídavého proudu na stejnosměrný";"Přenos optického signálu";"Měření teploty"
"Jaký je hlavní přínos IGCT tyristoru oproti GTO?";"Nižší spínací ztráty a lepší řízení";"Vyšší spotřeba energie";"Menší rychlost přepínání";"Horší řízení a stabilita"
"Jaký je hlavní účel GTO tyristoru?";"Přenos elektrické energie a řízení motorů";"Generování PWM signálu";"Zesilování zvukových signálů";"Měření odporu"
"Jaká je hlavní výhoda použití CMOS technologie?";"Nízká spotřeba energie";"Vysoká odolnost vůči rušení";"Rychlé přepínání";"Nízká cena"
"Co je hlavní vlastností časovače 555 v monostabilním režimu?";"Generuje jednorázový výstupní impuls";"Generuje nepřetržitou řadu pulsů";"Funguje jako invertor";"Převádí střídavý signál na stejnosměrný"
"Jaká je hlavní vlastnost časovače 555 v astabilním režimu?";"Generuje nepřetržitou řadu pulsů";"Funguje jako klopný obvod";"Převádí signál na stejnosměrný";"Generuje jednorázový impuls"
"Jaká technologie polovodičových prvků je nejvhodnější pro mobilní zařízení?";"CMOS";"TTL";"GTO";"IGCT"
"Jaký je hlavní účel použití operačních zesilovačů v elektronice?";"Zesilování analogových signálů";"Přepínání vysokonapěťových obvodů";"Generování časovacích signálů";"Kódování digitálních dat"
`;
const csvDataCM530 = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký procesor je použit v řídící jednotce CM-530?";"32bitový ARM Cortex-M3";"8bitový AVR";"16bitový PIC";"64bitový ARM Cortex-A53"
"Jaké komunikační protokoly podporuje CM-530?";"TTL, Bluetooth, IR, USB";"I2C, SPI, UART";"Wi-Fi, Zigbee, LoRa";"Ethernet, RS232, CAN"
"Jaké napájení podporuje CM-530?";"Li-Po 7,4 V nebo přímé napájení";"12 V DC pouze";"5 V USB pouze";"3,3 V baterie"
"Jaké porty jsou k dispozici na CM-530?";"TTL sériový, digitální a analogové vstupy/výstupy";"Ethernet, HDMI, USB-C";"Wi-Fi, Zigbee, Bluetooth";"I2C, SPI, GPIO"
"Pro jaké aplikace se CM-530 nejčastěji používá?";"Řízení robotů jako humanoidní roboti a hexapody";"Automatizace domů";"Řízení klimatizace";"Monitorování teploty"
"Jaký typ komunikace využívá pohon Dynamixel AX-12A?";"TTL sériová komunikace";"RS232";"Wi-Fi";"Bluetooth"
"Jaký je maximální úhel natočení pohonu AX-12A v servomotorovém režimu?";"300°";"180°";"360°";"90°"
"Jaký protokol používá Dynamixel AX-12A pro ovládání?";"Dynamixel protokol";"Modbus";"CANopen";"MAVLink"
"Jaký je maximální točivý moment AX-12A?";"1,5 Nm";"0,5 Nm";"2,0 Nm";"3,0 Nm"
"Jaký typ senzoru využívá IR senzor?";"Infračervený";"Ultrazvukový";"Laserový";"Magnetický"
"Jaký je hlavní princip měření DMS senzoru?";"Měření času návratu odraženého signálu";"Detekce magnetického pole";"Optické snímání";"Analýza zvukových vln"
"Jaké jsou hlavní výhody IR senzorů?";"Rychlá odezva a jednoduchá implementace";"Vysoká přesnost a dlouhý dosah";"Nízká cena a vysoká odolnost";"Optická přesnost"
"Jaký je hlavní problém IR senzorů?";"Citlivost na povrchové vlastnosti objektů";"Vysoká spotřeba energie";"Velká váha";"Nízká životnost"
"Jaké bezdrátové technologie lze použít pro dálkové ovládání CM-530?";"IR a Bluetooth";"Wi-Fi a Zigbee";"LoRa a RFID";"Ethernet a NFC"
"Jaké jsou hlavní výhody Bluetooth připojení u CM-530?";"Nízká spotřeba a snadné spárování";"Vysoká rychlost přenosu a dlouhý dosah";"Odolnost proti rušení";"Šifrovaná komunikace"
"Co je Robo+ Manager?";"Nástroj pro správu a konfiguraci robotických komponent";"Grafický editor 3D modelů";"Nástroj pro simulaci robotů";"Firmware aktualizační software"
"Co je Robo+ Task?";"Vývojové prostředí pro programování robotů";"Sledovací software pro analýzu pohybu";"Nástroj pro testování motorů";"Editor kinematických modelů"
"Jaký typ instrukcí se používá v Robo+ Task pro pohon Dynamixel?";"Pohybové, senzorické, podmíněné, komunikační";"Grafické, hudební, optické, zvukové";"Matematické, logické, časové, monitorovací";"Prostorové, rychlostní, teplotní, tlakoměrné"
"Jaký režim umožňuje časovač 555 generovat jednorázový výstupní impuls?";"Monostabilní";"Astabilní";"Bistabilní";"Invertující"
"Jaký je hlavní účel CM-530 v robotických aplikacích?";"Řízení a koordinace robotických pohybů";"Záznam a přehrávání zvuku";"Analýza obrazových dat";"Měření napětí a proudu"
`;
const csvDataArduino = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký mikrokontrolér používá Arduino Uno?";"ATmega328P";"ATmega2560";"ARM Cortex-M3";"PIC16F877"
"Jaká je hlavní výhoda Arduina?";"Jednoduché programování a modularita";"Vysoká cena a komplikované použití";"Nevyužitelný v praxi";"Není kompatibilní s žádnými senzory"
"Jaké napětí je potřeba pro napájení Arduina Uno?";"5 V nebo 7–12 V";"3,3 V";"24 V";"230 V"
"Které vývojové prostředí se používá pro programování Arduina?";"Arduino IDE";"Eclipse";"Visual Studio";"Code::Blocks"
"Jaké typy pohonů lze řídit pomocí Arduina?";"Servomotory, stejnosměrné motory, krokové motory";"Elektrostatické motory";"Plynové turbíny";"Parní motory"
"Jaký typ senzoru se používá pro měření teploty?";"DHT11";"HC-SR04";"TSL2561";"PIR"
"Jaký senzor se používá pro měření vzdálenosti?";"HC-SR04";"DHT11";"TSL2561";"PIR"
"Jaký typ pohonu je vhodný pro přesné řízení polohy?";"Servomotor";"Stejnosměrný motor";"Ultrazvukový motor";"Hydraulický motor"
"Co je to firmware v Arduinu?";"Software uložený na mikrokontroléru";"Grafické rozhraní pro programování";"Sada hardwarových komponent";"Aplikace pro mobilní zařízení"
"Jaký mikrokontrolér používá Arduino Mega 2560?";"ATmega2560";"ATmega328P";"ARM Cortex-M3";"ESP8266"
"K čemu slouží bootloader na Arduino desce?";"Umožňuje nahrávat programy přes USB";"Umožňuje bezdrátové ovládání";"Slouží k ukládání dat";"Připojuje Arduino k internetu"
"Jakou frekvenci má procesor Arduino Uno?";"16 MHz";"8 MHz";"32 MHz";"100 MHz"
"Co umožňuje nepájivé pole při práci s Arduinem?";"Rychlé a flexibilní propojení bez pájení";"Stabilní připojení k internetu";"Měření teploty a vlhkosti";"Rychlé stahování knihoven"
"Jaký typ motoru se používá pro přesné krokování v CNC strojích?";"Krokový motor";"Servomotor";"Stejnosměrný motor";"Třífázový synchronní motor"
"Jaký výsledek vrací funkce dht.readTemperature() v příkladu projektu?";"Teplotu ve stupních Celsia";"Vlhkost vzduchu v procentech";"Náklon v úhlech";"Intenzitu světla"
"Jaká je výhoda použití reléového modulu v Arduino projektu?";"Izolace vysokonapěťového obvodu od Arduina";"Měření teploty a vlhkosti";"Zvýšení signálu Wi-Fi";"Rychlé bezdrátové ovládání"
"Co je hlavním účelem použití Arduino Nano?";"Kompaktní provedení pro vestavěné aplikace";"Vysoký výkon pro náročné výpočty";"Bezdrátová komunikace";"Použití v mobilních telefonech"
"Jaká knihovna se používá pro čtení teploty z DHT11?";"DHT.h";"Servo.h";"Wire.h";"Stepper.h"
"Jaká je typická aplikace Arduina v oblasti IoT?";"Sběr a přenos dat přes Wi-Fi nebo Bluetooth";"Záznam a přehrávání zvuku";"Grafická vizualizace";"Editace obrázků"
"Jaké jsou hlavní výhody Arduino Due?";"Vyšší výkon díky ARM Cortex-M3";"Nízká cena a malá velikost";"Vestavěný Wi-Fi modul";"Podpora Pythonu"
`;
const csvDataArduinoProgramovani = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký jazyk používá Arduino?";"Rozšíření jazyka C/C++";"Python";"JavaScript";"Ruby"
"Co je hlavním účelem TinkerCad?";"Simulace a návrh elektronických obvodů";"Grafické programování webových aplikací";"Úprava fotografií";"Tvorba textových dokumentů"
"Co je hlavní funkcí Arduino IDE?";"Psaní, kompilace a nahrávání kódu na Arduino desky";"Tvorba 3D modelů";"Editace videa";"Správa databází"
"Jaké dvě hlavní funkce má každý Arduino program?";"setup() a loop()";"start() a stop()";"begin() a end()";"main() a exec()"
"Co dělá funkce pinMode()?";"Nastavuje směr pinu (vstup/výstup)";"Ovládá rychlost motoru";"Mění napětí na pinu";"Zapisuje hodnotu do paměti"
"Jakou hodnotu vrací funkce analogRead()?";"Celé číslo (0–1023)";"Logickou hodnotu (true/false)";"Desetinné číslo";"Řetězec znaků"
"Jakou hodnotu nastavuje funkce digitalWrite() pro zapnutí LED?";"HIGH";"LOW";"100";"0"
"Jaký typ proměnné použijeme pro ukládání desetinných čísel?";"float";"int";"boolean";"char"
"Co je to bootloader v Arduinu?";"Software pro nahrávání kódu přes USB";"Ovládací panel pro Wi-Fi";"Grafický editor";"Diagnostický nástroj"
"Jakou funkci používáme pro zpoždění v programu?";"delay()";"pause()";"sleep()";"wait()"
"K čemu slouží cyklus for v Arduinu?";"Opakování kódu po známý počet opakování";"Řízení napájení Arduina";"Ovládání LED diod";"Zabezpečení sítě"
"Jaký cyklus v Arduinu se vždy vykoná alespoň jednou?";"do-while";"for";"while";"foreach"
"Co je to proměnná v Arduinu?";"Úložiště pro hodnoty a data";"Zobrazení grafiky na displeji";"Zvukový výstup";"Bezdrátové připojení"
"Jaký příkaz použijeme pro podmíněné vykonávání kódu?";"if";"loop";"print";"goto"
"Jaká je základní jednotka programu v Arduinu?";"Sketch";"Node";"Project";"Circuit"
"Co je výhodou použití TinkerCad pro Arduino projekty?";"Simulace bez fyzického hardwaru";"Automatické generování kódu";"Přímé řízení servomotorů";"Vytváření webových aplikací"
"Jaký je rozdíl mezi digitalRead() a analogRead()?";"digitalRead() čte HIGH nebo LOW, analogRead() čte hodnoty 0–1023";"analogRead() čte pouze hodnotu 0";"digitalRead() čte napětí 5 V";"analogRead() čte logické hodnoty"
"Co znamená HIGH ve funkci digitalWrite()?";"Zapnutí pinu na 5 V";"Vypnutí pinu";"Odeslání textu na displej";"Zastavení programu"
"Jak se jmenuje hlavní smyčka v programu Arduino?";"loop()";"setup()";"main()";"start()"
"Jaký je účel používání knihoven v Arduinu?";"Zjednodušují programování speciálních funkcí";"Zvyšují výkon procesoru";"Redukují spotřebu energie";"Zajišťují grafický výstup"
`;
const csvDataPocitac = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je počítač?";"Elektronické zařízení pro zpracování, ukládání a přenos dat";"Zařízení na vaření";"Mobilní telefon";"Televize"
"Jaká je nejmenší jednotka informace?";"Bit";"Byte";"Kilobyte";"Megabyte"
"Kolik bitů má jeden Byte?";"8";"16";"4";"2"
"Kolik Megabyte má jeden Gigabyte?";"1024";"1000";"512";"2048"
"Která architektura odděluje paměť pro data a programy?";"Harvardova";"Von Neumannova";"Zjednodušená";"Multijádrová"
"Jaké jsou hlavní části Von Neumannovy architektury?";"Procesor, paměť, I/O, sběrnice";"Obrazovka, klávesnice, myš, reproduktory";"Disk, grafická karta, procesor, chladič";"Operační systém, antivir, textový editor, webový prohlížeč"
"Jaké jsou základní komponenty počítačové sestavy?";"CPU, RAM, úložiště, základní deska, GPU";"Monitor, klávesnice, myš, reproduktory";"Router, switch, kabel";"Operační systém, aplikace, data"
"Jaký je účel základní desky?";"Spojuje všechny komponenty počítače";"Slouží jako úložiště";"Zajišťuje grafický výstup";"Napájí všechny komponenty"
"Co zajišťuje napájení všech komponent v počítači?";"Napájecí zdroj (PSU)";"Grafická karta";"Procesor";"USB port"
"Jaký typ úložiště má vyšší rychlost čtení a zápisu?";"SSD";"HDD";"CD-ROM";"Disketa"
"Jaké jsou hlavní operační systémy?";"Windows, macOS, Linux";"iOS, Android, Windows Phone";"DOS, AmigaOS, Solaris";"Symbian, Blackberry OS, Palm OS"
"Co je OEM licence operačního systému?";"Předinstalovaná na zakoupeném zařízení";"Volně šiřitelná licence";"Licence pro více zařízení";"Dočasná licence"
"Jaký je účel antivirové kontroly?";"Ochrana před škodlivým softwarem";"Zvýšení výkonu procesoru";"Optimalizace grafiky";"Nastavení tiskárny"
"Jaký je hlavní úkol procesoru?";"Provádět výpočty a zpracovávat instrukce";"Ovládat grafiku";"Řídit chlazení";"Přenášet data do cloudu"
"Jaký je rozdíl mezi HDD a SSD?";"SSD je rychlejší a odolnější, HDD je levnější";"HDD je menší a lehčí";"SSD má vyšší spotřebu energie";"HDD je určen pouze pro herní PC"
"Co je hlavním úkolem operační paměti (RAM)?";"Uchovávat data pro aktuálně běžící programy";"Ukládat trvale všechna data";"Řídit napájení počítače";"Přenášet zvuk do reproduktorů"
"Jaká je hlavní výhoda SSD oproti HDD?";"Vysoká rychlost přenosu dat";"Nižší kapacita";"Vyšší hmotnost";"Vyšší spotřeba energie"
"Jaký je účel ventilace v počítači?";"Chlazení komponent a odvádění tepla";"Napájení základní desky";"Připojení monitoru";"Zvukový výstup"
"Jaký je správný postup při stavbě počítače?";"Příprava, montáž komponent, zapojení kabeláže, kontrola, instalace OS";"Nastavení monitoru, připojení klávesnice, spuštění Windows";"Instalace antiviru, zapojení reproduktorů, připojení USB myši";"Vložení CD s Windows, připojení tiskárny, zapnutí Wi-Fi"
"Jaká je hlavní funkce grafické karty (GPU)?";"Zpracovávat obrazový výstup";"Řídit napájení počítače";"Provádět aritmetické výpočty";"Přenášet data mezi disky"
"Jaký typ údržby zahrnuje pravidelné čištění skříně a ventilátorů?";"Hardwarová údržba";"Softwarová údržba";"Kancelářská údržba";"Bezpečnostní údržba"
"Proč je důležité pravidelně aktualizovat operační systém?";"Zvyšuje bezpečnost a stabilitu";"Snižuje spotřebu energie";"Opravuje hardware";"Zvyšuje grafický výkon"
"Co je hlavním účelem BIOSu/UEFI?";"Inicializace hardwaru při startu";"Ukládání uživatelských dat";"Spouštění antivirové kontroly";"Řízení napájení počítače"
"Co je úkolem firewallu v počítači?";"Ochrana před neoprávněným přístupem";"Správa zvukového výstupu";"Ovládání rychlosti procesoru";"Monitorování teploty"
"Jaké je hlavní riziko při práci s hardwarem?";"Elektrostatický výboj (ESD)";"Pomalý procesor";"Špatná kvalita zvuku";"Nedostatek USB portů"
`;
const csvDataProcesor = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je úkolem ALU v procesoru?";"Provádět aritmetické a logické operace";"Řídit tok dat";"Ukládat programy";"Připojovat externí zařízení"
"Co znamená zkratka ALU?";"Aritmeticko-logická jednotka";"Adresovací jednotka";"Analytická jednotka";"Asociativní logická úloha"
"Jakou funkci má řadič (CU) v procesoru?";"Řídí tok dat a instrukcí";"Provádí aritmetické operace";"Ukládá data";"Připojuje vstupní zařízení"
"Co jsou registry v procesoru?";"Malé a rychlé paměti pro uchování aktuálních dat";"Vstupní a výstupní zařízení";"Datové sběrnice";"Systémové hodiny"
"Jaký je účel cache paměti v procesoru?";"Zrychlit přístup k často používaným datům";"Ukládat dlouhodobě data";"Zajišťovat zálohu dat";"Provádět grafické operace"
"Jaký typ paměti má nejvyšší rychlost?";"L1 cache";"RAM";"SSD";"L3 cache"
"Co znamená frekvence procesoru?";"Rychlost zpracování instrukcí";"Kapacita paměti";"Počet jader";"Počet vláken"
"Jaký je účel chlazení procesoru?";"Odvádět teplo produkované procesorem";"Zvyšovat frekvenci procesoru";"Snižovat napětí procesoru";"Optimalizovat přístup do paměti"
"Co znamená zkratka TDP?";"Thermal Design Power";"Total Data Processing";"Transmission Data Protocol";"Tactical Device Performance"
"Který typ chlazení je nejčastěji používán v běžných PC?";"Vzduchové chlazení";"Kapalinové chlazení";"Pasivní chlazení";"Kombinované chlazení"
"Která instrukční sada se používá v procesorech Intel a AMD?";"x86";"ARM";"MIPS";"RISC"
"Pro jaké účely se používají procesory ARM?";"Mobilní zařízení a IoT";"Herní počítače";"Grafické stanice";"Výpočetní servery"
"Jaká je hlavní výhoda ARM procesorů?";"Nízká spotřeba energie";"Vysoký počet jader";"Vysoký tepelný výkon";"Integrovaná grafika"
"Co znamená pojem 'hyper-threading'?";"Zpracování více vláken na jednom jádru";"Zvýšení frekvence procesoru";"Chlazení procesoru vodou";"Připojení více monitorů"
"Jaká je hlavní výhoda multi-jádrových procesorů?";"Paralelní zpracování více úloh";"Snížení spotřeby energie";"Lepší grafický výkon";"Nižší cena"
"Jakou architekturu využívají procesory Apple M1/M2?";"ARM";"x86";"MIPS";"PowerPC"
"Jaký tranzistor se používá jako spínač v digitálních obvodech?";"NPN tranzistor";"PNP tranzistor";"MOSFET";"IGBT"
"Jak funguje tranzistor jako spínač v otevřeném stavu?";"Proud mezi kolektorem a emitorem";"Blokuje proud";"Řídí napětí";"Omezuje teplotu"
"Co je úkolem sběrnice v procesoru?";"Přenášet data mezi komponentami";"Řídit grafický výstup";"Ukládat data na disk";"Zajišťovat připojení monitoru"
"Jaký typ paměti se používá pro uložení právě běžících procesů?";"RAM";"SSD";"Cache";"ROM"
"Co znamená pojem 'tranzistor jako zesilovač'?";"Zvyšuje úroveň signálu";"Blokuje tok dat";"Připojuje periferie";"Snižuje spotřebu energie"
"Jaký typ cache paměti je sdílený mezi více jádry procesoru?";"L3 cache";"L1 cache";"L2 cache";"RAM"
"Co je úkolem akumulátoru v procesoru?";"Uchovávání dočasných dat";"Generování elektrického proudu";"Řízení grafiky";"Chlazení procesoru"
`;
const csvDataZakladniDeska = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"K čemu slouží základní deska v počítači?";"Propojuje všechny komponenty počítače";"Ukládá data";"Generuje grafický výstup";"Spravuje internetové připojení"
"Jaký parametr základní desky určuje typ připojitelného procesoru?";"Socket";"Čipová sada";"Formát";"Rozšiřující slot"
"Co znamená označení ATX u základní desky?";"Velikost a formát základní desky";"Napájecí rozhraní";"Typ procesoru";"Kapacita RAM"
"Jaký typ sběrnice se nejčastěji používá pro grafické karty?";"PCIe x16";"SATA";"USB";"Ethernet"
"Jaká je funkce čipové sady na základní desce?";"Řídí komunikaci mezi procesorem, RAM a dalšími komponentami";"Zajišťuje grafický výkon";"Reguluje otáčky ventilátorů";"Ukládá data"
"Jaký typ portu se běžně používá pro připojení úložiště (HDD, SSD)?";"SATA";"USB";"PCIe";"Ethernet"
"Jaký typ paměti je připojen přes M.2 slot?";"NVMe SSD";"USB disk";"Grafická karta";"Optická mechanika"
"Co je účelem skříně počítače?";"Ochrana komponent a zajištění chlazení";"Ukládání dat";"Řízení výkonu procesoru";"Správa softwaru"
"Co znamená modularita napájecího zdroje?";"Možnost odpojení kabelů";"Výkon zdroje";"Kvalita ventilátoru";"Podpora více procesorů"
"Jaký typ chlazení je nejefektivnější pro výkonné procesory?";"Vodní chlazení";"Vzduchové chlazení";"Pasivní chlazení";"Hybridní chlazení"
"Jaký konektor napájí grafickou kartu?";"PCIe";"SATA";"USB";"HDMI"
"Co znamená certifikace 80 Plus u napájecího zdroje?";"Vysoká účinnost zdroje";"Maximální výkon";"Podpora více jader";"Větší paměť"
"Jaký je účel záložního zdroje (UPS)?";"Zajistit nepřerušované napájení při výpadku elektřiny";"Zvýšit výkon procesoru";"Zrychlit internetové připojení";"Chladit grafickou kartu"
"Co znamená zkratka BIOS?";"Basic Input/Output System";"Binary Information Operating System";"Basic Integrated Operating System";"Buffer Input Output Service"
"Jaký je hlavní rozdíl mezi BIOS a UEFI?";"UEFI má modernější rozhraní a podporuje větší disky";"BIOS je rychlejší";"UEFI neumožňuje přetaktování";"BIOS podporuje grafické rozhraní"
"Jaké rozhraní umožňuje ovládat BIOS/UEFI pomocí myši?";"UEFI";"BIOS";"PCIe";"SATA"
"Jaký typ paměti je nejrychlejší v procesoru?";"L1 cache";"RAM";"SSD";"L3 cache"
"Jaký port se používá pro připojení monitoru?";"HDMI";"USB";"SATA";"Ethernet"
"Co je to front side bus (FSB)?";"Sběrnice spojující procesor s čipovou sadou";"Grafická sběrnice";"Datový port pro USB";"Konektor pro ventilátor"
"Jaký typ základní desky se používá v kompaktních počítačích?";"Mini-ITX";"ATX";"Full Tower";"Micro-ATX"
"Jaké jsou hlavní výhody vodního chlazení?";"Vyšší efektivita chlazení a nižší hlučnost";"Nižší cena";"Jednoduchá instalace";"Menší rozměry"
"Co je hlavní funkcí audio konektorů na základní desce?";"Připojení reproduktorů a mikrofonu";"Přenos videa";"Připojení úložiště";"Řízení chlazení"
"Jaký je hlavní účel PCIe slotů na základní desce?";"Připojení rozšiřujících karet (např. GPU)";"Napájení procesoru";"Připojení externích disků";"Zajištění grafického výstupu"
"Jaké jsou výhody modulárního napájecího zdroje?";"Možnost připojení jen potřebných kabelů";"Nižší výkon";"Pevné připojení všech kabelů";"Lepší podpora starších komponent"
"Jaký typ chlazení používají skříně s nízkým výkonem?";"Pasivní chlazení";"Vodní chlazení";"Hybridní chlazení";"Vzduchové chlazení"
`;
const csvDataPameti = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je polovodič?";"Materiál s vodivostí mezi vodiči a izolanty";"Čistý vodič";"Izolant";"Dielektrikum"
"Co je to dopování polovodiče?";"Přidání nečistot ke zvýšení vodivosti";"Snižování teploty polovodiče";"Zvyšování napětí v obvodu";"Spojování dvou vodičů"
"Co tvoří PN přechod?";"Spojení P- a N-typu polovodiče";"Spojení dvou vodičů";"Spojení dvou izolačních materiálů";"Spojení dvou tranzistorů"
"Jaká je hlavní vlastnost PN přechodu?";"Propouští proud pouze jedním směrem";"Propouští proud v obou směrech";"Zabraňuje jakémukoli proudu";"Vytváří teplo"
"Co je to klopný obvod?";"Sekvenční logický obvod se dvěma stabilními stavy";"Logický obvod typu AND";"Paměťová buňka RAM";"Výstupní zařízení"
"Jaký klopný obvod ukládá data podle hodinového signálu?";"D klopný obvod";"SR klopný obvod";"T klopný obvod";"JK klopný obvod"
"Jaký typ paměti je volatilní?";"RAM";"ROM";"Flash";"SSD"
"Jaký typ paměti je nevolatilní?";"Flash";"RAM";"Cache";"Registry"
"Jaký typ paměti je nejrychlejší v počítači?";"Registry";"RAM";"Flash";"SSD"
"Jaký typ paměti se používá jako rychlá mezipaměť mezi CPU a RAM?";"Cache";"Flash";"SSD";"USB"
"Jaké jsou typy cache paměti?";"L1, L2, L3";"DDR3, DDR4, DDR5";"SATA, NVMe, M.2";"HDD, SSD, SSHD"
"Jaká je hlavní výhoda L1 cache?";"Nejrychlejší přístup k datům";"Největší kapacita";"Nejnižší spotřeba energie";"Odolnost proti poškození"
"Jaký typ RAM se používá ve stolních počítačích?";"DIMM";"SO-DIMM";"eMMC";"GDDR"
"Jaký typ paměti se používá v noteboocích?";"SO-DIMM";"DIMM";"L3 cache";"SRAM"
"Co je to flash paměť?";"Nevolatilní paměť s rychlým přístupem k datům";"Volatilní paměť s pomalým přístupem";"Operační paměť s vysokou kapacitou";"Záložní napájení"
"Jaký typ úložiště používá flash paměť?";"SSD a USB";"HDD a CD-ROM";"Magnetická páska a disketa";"Optická média"
"Co je to adresní prostor?";"Rozsah adres, které může procesor využít";"Místo na pevném disku";"IP adresa v síti";"Frekvence procesoru"
"Jaký je maximální adresní prostor u 32bitového systému?";"4 GB";"2 GB";"8 GB";"16 GB"
"Co je virtuální paměť?";"Rozšíření RAM pomocí disku";"Nejrychlejší typ paměti";"Paměť určená pouze pro grafické karty";"Paměť pro zálohování dat"
"Jaký je hlavní rozdíl mezi fyzickou a virtuální pamětí?";"Virtuální paměť je rozšíření fyzické pomocí disku";"Fyzická paměť je rychlejší než virtuální";"Virtuální paměť je vždy na SSD";"Fyzická paměť je větší než virtuální"
"Jaký typ paměti se používá v SSD?";"Flash paměť";"Magnetická paměť";"Optická paměť";"Mechanická paměť"
"Jaký je účel cache paměti?";"Snížení latence při přístupu k často používaným datům";"Ukládání záloh dat";"Zpracování grafických operací";"Řízení spotřeby energie"
"Jaká paměť se používá pro dlouhodobé uchovávání dat?";"Flash paměť";"RAM";"Cache";"Registry"
"Jaký typ paměti zůstává zachován i po vypnutí počítače?";"Nevolatilní paměť";"Volatilní paměť";"Dočasná paměť";"Dynamická paměť"
`;
const csvDataDisky = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je principem čtení u HDD?";"Magnetický záznam na rotujících plotnách";"Elektronické přepínání v čipu";"Optický laserový záznam";"Mechanické čtení dat"
"Jaký je hlavní rozdíl mezi HDD a SSD?";"HDD je mechanický, SSD je elektronický";"HDD má větší rychlost než SSD";"SSD je levnější než HDD";"SSD má kratší životnost než HDD"
"Jaké rozhraní je typické pro SSD?";"NVMe";"IDE";"SATA II";"PCI"
"Jaká je hlavní výhoda SSD oproti HDD?";"Vyšší rychlost čtení a zápisu";"Nižší cena za GB";"Větší kapacita";"Větší odolnost proti mechanickému poškození"
"Co je to RAID?";"Technologie pro kombinaci více disků";"Technologie pro zvýšení frekvence CPU";"Typ paměti RAM";"Způsob připojení USB zařízení"
"Jaký RAID poskytuje zrcadlení dat?";"RAID 1";"RAID 0";"RAID 5";"RAID 10"
"Jaký RAID zajišťuje nejvyšší rychlost zápisu?";"RAID 0";"RAID 1";"RAID 5";"RAID 10"
"Jaký RAID poskytuje kombinaci výkonu a redundance?";"RAID 10";"RAID 0";"RAID 1";"RAID 5"
"Co je cloudové úložiště?";"Datové úložiště poskytované vzdálenými servery";"Typ lokálního HDD";"SSD připojené přes USB";"Interní úložiště v počítači"
"Jaká je hlavní výhoda cloudového úložiště?";"Přístup odkudkoliv";"Nižší náklady na hardware";"Větší rychlost než HDD";"Možnost mechanické zálohy"
"Jaký je hlavní princip zálohování dat?";"Vytváření kopie dat na jiné úložiště";"Přímé mazání starých dat";"Kompresování dat do jednoho souboru";"Připojení externího disku"
"Jaká je hlavní výhoda komprese dat?";"Snížení velikosti souboru";"Zvýšení bezpečnosti dat";"Zrychlení přístupu k datům";"Automatické zálohování"
"Jaká je hlavní nevýhoda cloudového úložiště?";"Závislost na internetovém připojení";"Nemožnost sdílení dat";"Malá kapacita";"Vysoká cena za GB"
"Jaký typ zálohy zahrnuje pouze změněná data?";"Inkrementální záloha";"Plná záloha";"Diferenciální záloha";"Kompletní záloha"
"Jaká je nevýhoda zálohy na externí HDD?";"Riziko mechanického poškození";"Nízká rychlost zápisu";"Vysoká cena";"Malá kapacita"
"Co je souborový systém NTFS vhodný pro?";"Windows";"Linux";"MacOS";"Mobilní zařízení"
"Jaký souborový systém je nejvhodnější pro flash disky?";"exFAT";"NTFS";"FAT32";"EXT4"
"Co je hlavní výhodou souborového systému FAT32?";"Kompatibilita s většinou zařízení";"Podpora velkých souborů nad 4 GB";"Vysoká rychlost zápisu";"Podpora šifrování"
"Jaké optické médium má nejvyšší kapacitu?";"Blu-ray";"CD";"DVD";"MiniDisc"
"Jaká je typická kapacita DVD?";"4,7 GB";"700 MB";"128 GB";"25 GB"
"Jaký typ média je vhodný pro ukládání hudby ve formátu MP3?";"Flash disk";"SSD";"Blu-ray";"HDD"
"Jaký typ rozhraní se používá pro připojení externího HDD?";"USB";"PCIe";"SATA";"NVMe"
"Jaký typ flash paměti je nejčastěji použit v USB flash discích?";"NAND";"DRAM";"SRAM";"EEPROM"
"Co znamená NVMe u SSD?";"Non-Volatile Memory Express";"Network Virtual Memory Extension";"Near Voltage Memory Environment";"New Virtual Memory Extension"
"Jaká je výhoda NVMe oproti SATA?";"Vyšší rychlost čtení a zápisu";"Nižší cena";"Delší životnost";"Nižší spotřeba energie"
`;
const csvDataGrafika = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je počítačová grafika?";"Obor informatiky zabývající se zpracováním a zobrazováním obrazů";"Program na kreslení obrázků";"Hardware pro vykreslování videí";"Soubor grafických karet"
"Co je rendering?";"Proces převodu 3D modelu na 2D obraz";"Editace bitmapového obrázku";"Převod textu na grafický formát";"Vytváření vektorových ilustrací"
"Jaké jsou hlavní formáty bitmapové grafiky?";"JPG, PNG, BMP, GIF";"SVG, AI, EPS";"PDF, DOC, TXT";"MP3, WAV, FLAC"
"Co je vektorová grafika?";"Obrázky tvořené geometrickými objekty";"Obrázky tvořené jednotlivými pixely";"Zvukové soubory s vysokým rozlišením";"Fotografie ve vysokém rozlišení"
"Co je barevná hloubka?";"Počet bitů pro reprezentaci barvy jednoho pixelu";"Počet pixelů na obrazovce";"Počet barev na monitoru";"Rozlišení obrazovky"
"Jaká je maximální barevná hloubka True Color?";"24 bitů";"8 bitů";"16 bitů";"32 bitů"
"Co je dedikovaná grafická karta?";"Samostatná karta pro zpracování grafiky";"Integrovaný grafický čip v procesoru";"Software pro kreslení";"Zvuková karta"
"Co je to VRAM?";"Paměť grafické karty pro ukládání textur a grafických dat";"Paměť RAM v základní desce";"Optická paměť na disku";"Záložní paměť v procesoru"
"Jaký je princip 7segmentového displeje?";"Zobrazuje číslice pomocí 7 LED segmentů";"Zobrazuje text pomocí maticového displeje";"Používá OLED pixely pro vykreslení";"Zobrazuje obrazy ve vysokém rozlišení"
"Co je BCD kód?";"Kódování číslic pomocí 4bitových binárních hodnot";"Komprimace obrázků do formátu BMP";"Zvukový formát pro bezztrátovou kompresi";"Programovací jazyk pro grafické aplikace"
"Co je osciloskop?";"Měřicí přístroj pro zobrazení elektrických signálů v čase";"Zařízení pro přehrávání zvuků";"3D tiskárna pro výrobu modelů";"Software pro vykreslování grafiky"
"Jaký je hlavní rozdíl mezi LCD a OLED?";"LCD používá tekuté krystaly, OLED organické diody";"LCD využívá laserové projekce, OLED mikrozrcadla";"OLED je pomalejší než LCD";"OLED vyžaduje chlazení ventilátorem"
"Jaký typ displeje je odolný proti poškrábání a vhodný pro stylus?";"Rezistivní dotykový displej";"Kapacitní dotykový displej";"OLED displej";"Plazmový displej"
"Jaký je hlavní rozdíl mezi kapacitním a rezistivním dotykovým displejem?";"Kapacitní reaguje na vodivé předměty, rezistivní na tlak";"Kapacitní funguje jen s rukavicemi, rezistivní bez nich";"Kapacitní má nižší rozlišení";"Rezistivní funguje pouze s dotykovým perem"
"Co je stylus?";"Vstupní zařízení ve formě pera pro dotykové obrazovky";"Zvuková karta pro editaci hudby";"Software na úpravu fotografií";"Projektor pro prezentace"
"Co je 3D tiskárna?";"Zařízení pro výrobu objektů vrstvením materiálu";"Grafická karta pro vykreslování 3D modelů";"Monitor s prostorovým zobrazením";"Software pro animaci postav"
"Jaký typ 3D tisku využívá tavení plastu?";"FDM (Fusion Deposition Modeling)";"SLA (Stereolithography)";"SLS (Selective Laser Sintering)";"DLP (Digital Light Processing)"
"Jaký je princip 3D skeneru?";"Digitalizace objektu pomocí laseru, světla nebo fotogrammetrie";"Převod textu na 3D model";"Renderování prostorové grafiky";"Vytváření hudebních vizualizací"
"Jaký je hlavní rozdíl mezi bitmapovou a vektorovou grafikou?";"Bitmapová používá pixely, vektorová geometrické objekty";"Bitmapová je menší než vektorová";"Vektorová má nižší kvalitu než bitmapová";"Bitmapová je vždy černobílá"
"Jaká je hlavní výhoda vektorové grafiky oproti bitmapové?";"Nekonečná škálovatelnost bez ztráty kvality";"Rychlejší vykreslování na obrazovce";"Nižší spotřeba energie";"Lepší kompatibilita s audio formáty"
`;
const csvDataTisk = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou optoelektronické součástky?";"Součástky převádějící světlo na elektrický signál nebo naopak";"Součástky pro přenos elektrického proudu";"Součástky pro chlazení procesorů";"Obvody pro správu napájení"
"Co je fotodioda?";"Součástka převádějící světlo na proud";"Zařízení na zesílení zvuku";"Obvod pro řízení napětí";"Paměťová jednotka"
"Jaký je hlavní princip digitálního fotoaparátu?";"Převod světla na elektrický signál pomocí snímače";"Převod zvuku na obraz";"Zpracování grafiky pomocí CPU";"Převod elektrického signálu na zvuk"
"Jaký je hlavní rozdíl mezi CMOS a CCD snímači?";"CMOS má nižší spotřebu a vyšší rychlost";"CCD je levnější a energeticky úspornější";"CMOS je pomalejší a má vyšší šum";"CCD má nižší rozlišení než CMOS"
"Co určuje citlivost ISO u fotoaparátu?";"Citlivost snímače na světlo";"Rychlost závěrky";"Ohniskovou vzdálenost objektivu";"Velikost snímače"
"Jaká je hlavní výhoda CMOS snímačů?";"Nízká spotřeba energie";"Vyšší kvalita obrazu";"Rychlejší zápis na paměťovou kartu";"Menší rozměry"
"Co znamená pojem 'clona' ve fotografii?";"Ovládání množství světla dopadajícího na snímač";"Délka expozice";"Rozlišení snímku";"Velikost objektivu"
"Jaké jsou hlavní typy skenerů?";"Plochý, ruční, 3D";"Optický, magnetický, elektronický";"Digitální, analogový, mechanický";"Infraskener, ultraskener, teplotní skener"
"Co je DPI u skeneru?";"Počet bodů na palec";"Velikost snímku v bajtech";"Rychlost skenování";"Barevná hloubka"
"Jak funguje inkoustová tiskárna?";"Stříká drobné kapky inkoustu na papír";"Pálí obraz laserem na papír";"Rytí motivu do papíru";"Promítání obrazu na papír"
"K čemu se používá plotr?";"Pro kreslení technických výkresů nebo grafů";"Pro přehrávání zvukových souborů";"Pro ukládání dat na disky";"Pro úpravu fotografií"
"Co je RAW formát?";"Nezpracovaný obraz s vysokou kvalitou";"Komprimovaný obraz s nízkou kvalitou";"Zvukový soubor";"Formát pro ukládání textových dokumentů"
"Jaký je rozdíl mezi RAW a JPEG formátem?";"RAW je nekomprimovaný a zachovává více detailů";"JPEG je nekomprimovaný a lepší pro úpravy";"RAW má menší velikost souboru";"JPEG je pouze černobílý"
"Jaký grafický program je open-source alternativou k Adobe Photoshopu?";"GIMP";"CorelDRAW";"Blender";"SketchUp"
"Co znamená DPI u tiskárny?";"Počet bodů na palec";"Počet stránek za minutu";"Velikost papíru";"Kapacita zásobníku"
"Co je Adobe Lightroom?";"Program na úpravu a organizaci fotografií";"Software pro 3D modelování";"Aplikace na zpracování zvuku";"Herní engine"
"Jaký nástroj v grafických programech slouží k odstraňování nechtěných objektů?";"Klonovací razítko";"Ořezávací nástroj";"Křivky";"Textový editor"
"Co je kompozice ve fotografii?";"Volba správného úhlu, světla a rámování";"Správné nastavení expozice";"Výběr správného objektivu";"Výběr tiskového formátu"
"Jaká je hlavní výhoda OLED displejů?";"Perfektní černá a vysoký kontrast";"Nižší výrobní náklady";"Delší životnost než LCD";"Vyšší odolnost proti poškrábání"
"Jaké je hlavní použití stylusu?";"Ovládání dotykových obrazovek";"Připojení k internetu";"Zvuková editace";"Ukládání dat na disky"
`;
const csvDataZdroje = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Jaký je hlavní účel napájecího zdroje?";"Přeměna vstupního napětí na požadované výstupní napětí";"Zvyšování teploty procesoru";"Snížení výkonu grafické karty";"Zálohování dat"
"Jaký je rozdíl mezi lineárním a spínaným zdrojem?";"Lineární zdroj má nižší účinnost a větší rozměry, spínaný zdroj má vyšší účinnost a menší velikost";"Lineární zdroj je vždy dražší";"Spínaný zdroj nepotřebuje napájení";"Lineární zdroj generuje vysoké frekvence"
"Jaký je hlavní princip spínaného zdroje?";"Vysokofrekvenční spínání napětí";"Stálý průtok proudu";"Pomalé spínání pro minimalizaci rušení";"Vyrovnávání teplot"
"Jaký je účel filtru ve spínaném zdroji?";"Redukce zvlnění napětí";"Zvýšení napětí";"Snížení frekvence";"Přenos zvukového signálu"
"K čemu slouží usměrňovač v napájecím zdroji?";"Převádí střídavé napětí na stejnosměrné";"Zvyšuje napětí na vyšší úroveň";"Mění stejnosměrné napětí na střídavé";"Stabilizuje teplotu procesoru"
"Jaký je hlavní účel stabilizátoru napětí?";"Udržovat konstantní výstupní napětí";"Zvyšovat napětí na vyšší hodnotu";"Snižovat spotřebu energie";"Ochrana proti přepětí"
"Jaký je rozdíl mezi lineárním a spínaným stabilizátorem?";"Lineární stabilizátor má nižší účinnost, spínaný má vyšší účinnost";"Spínaný stabilizátor je vždy menší";"Lineární stabilizátor nepotřebuje chlazení";"Spínaný stabilizátor je levnější"
"Jaký je účel PWM (pulzně šířková modulace) ve spínaném zdroji?";"Efektivní přeměna napětí pomocí rychlého spínání";"Snížení šumu";"Zvýšení teploty procesoru";"Zlepšení ventilace"
"Jaký je účel filtru typu RC?";"Redukovat zvlnění napětí u nízkých proudů";"Zvýšit frekvenci signálu";"Ochlazovat procesor";"Zesilovat audio signál"
"Co je hlavní nevýhoda lineárního stabilizátoru?";"Nízká účinnost a vysoké tepelné ztráty";"Vysoká spotřeba energie";"Složitá konstrukce";"Nedostatek napěťové stability"
"Jaký je hlavní rozdíl mezi buck a boost stabilizátorem?";"Buck stabilizátor snižuje napětí, boost zvyšuje napětí";"Boost stabilizátor snižuje teplotu";"Buck stabilizátor zvyšuje napětí";"Boost stabilizátor má nižší účinnost"
"Co znamená Graetzovo zapojení?";"Mostní usměrňovač se čtyřmi diodami";"Transformátor pro zvýšení napětí";"Stabilizátor s vysokou účinností";"Spínaný zdroj s řízeným výstupem"
"Jaký přístroj se používá k měření zvlnění napětí?";"Osciloskop";"Multimetr";"Ampérmetr";"Ohmmetr"
"Jak se vypočítá procentuální zvlnění napětí?";"((Max - Min) / Střední hodnota) × 100";"(Střední hodnota / Max) × 100";"((Max + Min) / Střední hodnota) × 100";"(Max / Min) × 100"
"Co je účelem spínaného stabilizátoru typu Buck-Boost?";"Umožňuje jak zvýšit, tak snížit napětí";"Pouze zvyšuje napětí";"Pouze snižuje napětí";"Zvyšuje frekvenci signálu"
"Jaký typ filtru se používá pro vyšší proudy?";"LC filtr";"RC filtr";"Pi filtr";"Kombinovaný filtr"
"Co je hlavní funkcí výstupního stabilizátoru?";"Zajistit konstantní napětí bez ohledu na změny zátěže";"Zvýšit frekvenci spínání";"Omezit průtok proudu";"Generovat vysoké napětí"
"Jaká je hlavní výhoda spínaného stabilizátoru oproti lineárnímu?";"Vyšší účinnost a menší tepelné ztráty";"Nižší cena";"Menší elektromagnetické rušení";"Snadnější konstrukce"
`;
const csvDataTranzistor = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co jsou h-parametry?";"Diferenciální parametry popisující chování bipolárního tranzistoru v lineárním režimu";"Parametry pro řízení napájení";"Parametry pro optimalizaci teploty procesoru";"Parametry pro grafické zpracování"
"Jaký je význam h-parametru h11?";"Udává vstupní odpor tranzistoru při konstantním výstupním napětí";"Udává frekvenci tranzistoru";"Udává výkon tranzistoru";"Udává teplotní stabilitu"
"Jaký je význam h-parametru h12?";"Udává vliv změny výstupního napětí na vstupní proud";"Udává proudové zesílení tranzistoru";"Udává napěťový zisk tranzistoru";"Udává výkonové ztráty"
"Jaký je význam h-parametru h21?";"Udává poměr změny výstupního a vstupního proudu";"Udává kapacitní ztráty";"Udává napěťový přenos";"Udává teplotní stabilitu"
"Jaký je význam h-parametru h22?";"Udává změnu výstupního proudu při změně výstupního napětí";"Udává maximální výkon tranzistoru";"Udává teplotní stabilitu";"Udává napěťovou citlivost"
"K čemu slouží náhradní schéma tranzistoru?";"K usnadnění analýzy tranzistoru v zapojení";"K měření teploty tranzistoru";"K optimalizaci chlazení";"K propojení tranzistoru s grafickou kartou"
"Jaké jsou typické oblasti výstupních charakteristik tranzistoru?";"Aktivní, saturační, uzavírací";"Lineární, nelineární, stabilní";"Vstupní, výstupní, přechodová";"Hlavní, vedlejší, přídavná"
"V jaké oblasti výstupních charakteristik tranzistor pracuje jako zesilovač?";"V aktivní oblasti";"V saturační oblasti";"V uzavírací oblasti";"V přechodové oblasti"
"Jak se měří výstupní charakteristiky tranzistoru?";"Nastavením různých hodnot báze a měřením IC při různých VCE";"Nastavením konstantního proudu a měřením teploty";"Použitím osciloskopu a analýzou frekvence";"Nastavením stálého napětí a měřením výkonu"
"Co popisují voltampérové charakteristiky?";"Závislost proudu na napětí";"Závislost teploty na frekvenci";"Závislost výkonu na odporu";"Závislost napětí na výkonu"
"Jaký je tvar VA charakteristiky rezistoru?";"Přímka odpovídající Ohmovu zákonu";"Parabolická křivka";"Smyčka hystereze";"Nelineární exponenciála"
"Jaký je tvar VA charakteristiky diody?";"Nelineární křivka s propustným a závěrným stavem";"Přímka procházející počátkem";"Parabolická závislost";"Sinusová křivka"
"Jaký je hlavní rozdíl mezi lineární a nelineární součástkou?";"Lineární součástka má přímkovou VA charakteristiku, nelineární má zakřivenou";"Lineární součástka mění barvu při zatížení";"Nelineární součástka vždy generuje šum";"Lineární součástka mění proud podle teploty"
"Jaká je hlavní výhoda použití h-parametrů?";"Usnadňují analýzu a návrh zesilovačů";"Zlepšují účinnost chlazení";"Snižují napěťové ztráty";"Zvyšují maximální výkon tranzistoru"
"Co popisují výstupní charakteristiky tranzistoru?";"Závislost kolektorového proudu na kolektorovém napětí při různých hodnotách základního proudu";"Závislost napětí na frekvenci";"Závislost proudu na teplotě";"Závislost výkonu na odporu"
"Co je účelem měření výstupních charakteristik tranzistoru?";"Určit pracovní oblast a vlastnosti tranzistoru";"Změřit maximální frekvenci tranzistoru";"Určit teplotní stabilitu";"Optimalizovat grafické zpracování"
"Jaké jsou hlavní metody měření VA charakteristik?";"Osciloskop a multimetr";"Teploměr a ohmmetr";"Digitální váha a barometr";"Infračervený senzor a fotodioda"
"Jaký je hlavní účel grafu VA charakteristiky?";"Vizualizovat závislost proudu na napětí";"Vizualizovat závislost frekvence na teplotě";"Vizualizovat závislost výkonu na odporu";"Vizualizovat závislost teploty na výkonu"
"Jaký je hlavní význam h-parametru hfe?";"Udává proudové zesílení tranzistoru";"Udává napěťový úbytek";"Udává tepelnou vodivost";"Udává kapacitní indukci"
`;
const csvDataOperacni = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je operační zesilovač (OZ)?";"Integrovaný obvod, který zesiluje rozdíl mezi dvěma vstupy";"Zařízení pro chlazení procesoru";"Grafická karta pro rendering";"Disk pro ukládání dat"
"Jaká je ideální hodnota vstupního odporu operačního zesilovače?";"Nekonečně vysoký";"Nulový";"1 kΩ";"10 kΩ"
"Jaké je zesílení invertujícího zesilovače?";"−R2/R1";"R1/R2";"1+R2/R1";"R2/R1"
"Jaké je zesílení neinvertujícího zesilovače?";"1+R2/R1";"−R2/R1";"R1/R2";"R2/R1"
"Jaký je výstupní signál invertujícího zesilovače?";"Fázově obrácený";"Ve stejné fázi";"Zesílený, ale bez obrácení";"Stabilizovaný"
"Jaký je výstupní signál neinvertujícího zesilovače?";"Ve stejné fázi jako vstup";"Fázově obrácený";"Zeslabený";"Nestabilizovaný"
"Co je kladná zpětná vazba?";"Zvyšuje zesílení a používá se v oscilátorech";"Snižuje šum";"Stabilizuje výstupní napětí";"Snižuje výkonové ztráty"
"Co je záporná zpětná vazba?";"Snižuje zesílení a zlepšuje stabilitu";"Zvyšuje výkon procesoru";"Optimalizuje grafické vykreslování";"Zlepšuje účinnost napájecího zdroje"
"Jaký je účel vstupního stupně operačního zesilovače?";"Porovnává a zesiluje rozdíl mezi vstupy";"Stabilizuje výstupní napětí";"Omezuje šum";"Spravuje napájení"
"Jaká je hlavní funkce výstupního stupně operačního zesilovače?";"Dodat signál s nízkým výstupním odporem";"Zesílit vstupní signál";"Stabilizovat teplotu";"Optimalizovat spotřebu"
"K čemu slouží sumační zesilovač?";"Zesiluje a sčítá více vstupních signálů";"Generuje logický výstup";"Měří frekvenci signálu";"Odměřuje časové intervaly"
"Jaký je princip derivačního zesilovače?";"Výstupní napětí je úměrné derivaci vstupního signálu";"Výstupní napětí je úměrné integrálu vstupního signálu";"Výstupní napětí je konstantní";"Výstupní napětí je vždy nulové"
"Co je integrační zesilovač?";"Realizuje matematickou integraci vstupního signálu";"Zesiluje signál pro grafické zpracování";"Zajišťuje nízké výstupní napětí";"Stabilizuje napětí v síti"
"Jaká je hlavní funkce komparátoru?";"Porovnává dva signály a generuje logický výstup";"Zesiluje zvukový signál";"Měří teplotu součástky";"Zajišťuje chlazení procesoru"
"K čemu slouží dolní propust?";"Propouští nízké frekvence a potlačuje vysoké";"Propouští vysoké frekvence a potlačuje nízké";"Zesiluje pouze zvukové signály";"Filtruje obrazové artefakty"
"K čemu slouží horní propust?";"Propouští vysoké frekvence a potlačuje nízké";"Propouští nízké frekvence a potlačuje vysoké";"Zesiluje video signály";"Filtruje teplotní šum"
"Jaký je hlavní účel záporné zpětné vazby?";"Zlepšit stabilitu a linearitu zesilovače";"Zvýšit rychlost grafického vykreslování";"Optimalizovat výkon chlazení";"Snížit spotřebu energie"
"Co způsobuje kladná zpětná vazba?";"Oscilace nebo klopné obvody";"Stabilizaci napětí";"Snížení výkonu";"Zvýšení chlazení"
"Jaký je hlavní rozdíl mezi kladnou a zápornou zpětnou vazbou?";"Kladná zpětná vazba zvyšuje zesílení, záporná ho snižuje";"Kladná zpětná vazba snižuje teplotu, záporná ji zvyšuje";"Záporná zpětná vazba optimalizuje výkon procesoru";"Kladná zpětná vazba snižuje šum"
"Jaký je princip práce diferenciálního zesilovače?";"Zesiluje rozdíl mezi dvěma vstupními signály";"Sčítá vstupní signály";"Stabilizuje výstupní napětí";"Filtruje vysoké frekvence"
`;
const csvDataInformace = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je převodník A/D?";"Převádí analogový signál na digitální hodnotu";"Převádí digitální signál na analogový";"Zesiluje vstupní signál";"Měří teplotu"
"Co je převodník D/A?";"Převádí digitální hodnotu na analogový signál";"Převádí analogový signál na digitální hodnotu";"Zesiluje výstupní signál";"Filtruje šum"
"Jaký je princip A/D převodu?";"Vzorkování, kvantování a kódování";"Sčítání, odčítání a násobení";"Odfiltrování a zesílení signálu";"Komprese a dekomprese"
"Jaký je princip D/A převodu?";"Rekonstrukce signálu a filtrování";"Zesílení a komprese";"Redukce šumu a synchronizace";"Ukládání a přenos dat"
"Jaký je hlavní účel vzorkovače v A/D převodníku?";"Periodické vzorkování vstupního signálu";"Zesílení analogového signálu";"Redukce šumu signálu";"Stabilizace napětí"
"Jaký je princip Shannon-Kotělnikova teorému?";"Vzorkovací frekvence musí být alespoň dvakrát vyšší než maximální frekvence signálu";"Vzorkovací frekvence musí být vždy konstantní";"Vzorkovací frekvence nemá vliv na kvalitu signálu";"Vzorkovací frekvence závisí na šířce pásma"
"Co je aliasing?";"Zkreslení signálu způsobené nedostatečnou vzorkovací frekvencí";"Posun fáze při přenosu signálu";"Zeslabení signálu při nízkých frekvencích";"Filtrace vysokofrekvenčních šumů"
"Co je PAM?";"Pulse Amplitude Modulation, amplituda pulzů odpovídá signálu";"Pulse Width Modulation, šířka pulzů odpovídá signálu";"Pulse Frequency Modulation, frekvence pulzů odpovídá signálu";"Pulse Position Modulation, pozice pulzů odpovídá signálu"
"Co je PPM?";"Pulse Position Modulation, pozice pulzů odpovídá signálu";"Pulse Amplitude Modulation, amplituda pulzů odpovídá signálu";"Pulse Width Modulation, šířka pulzů odpovídá signálu";"Pulse Frequency Modulation, frekvence pulzů odpovídá signálu"
"Co je PFM?";"Pulse Frequency Modulation, frekvence pulzů odpovídá signálu";"Pulse Amplitude Modulation, amplituda pulzů odpovídá signálu";"Pulse Width Modulation, šířka pulzů odpovídá signálu";"Pulse Position Modulation, pozice pulzů odpovídá signálu"
"Co je PWM?";"Pulse Width Modulation, šířka pulzů odpovídá signálu";"Pulse Amplitude Modulation, amplituda pulzů odpovídá signálu";"Pulse Frequency Modulation, frekvence pulzů odpovídá signálu";"Pulse Position Modulation, pozice pulzů odpovídá signálu"
"Co je PCM?";"Pulse Code Modulation, převod analogového signálu na digitální kód";"Pulse Amplitude Modulation, amplituda pulzů odpovídá signálu";"Pulse Width Modulation, šířka pulzů odpovídá signálu";"Pulse Position Modulation, pozice pulzů odpovídá signálu"
"Co je vzorkovací frekvence?";"Počet vzorků signálu za jednotku času";"Počet bitů v digitálním signálu";"Počet kanálů přenášených v síti";"Počet kmitů za sekundu"
"Co je Wi-Fi?";"Bezdrátový přenos dat na krátkou vzdálenost";"Drátový přenos dat na dlouhou vzdálenost";"Analogový přenos zvuku";"Přenos signálu přes optické vlákno"
"Jaké rozhraní používá Ethernet?";"Kabelové připojení pomocí UTP kabelů";"Bezdrátové připojení pomocí Bluetooth";"Optické připojení pomocí vláken";"Infra přenos dat"
"Jaké jsou hlavní generace mobilních sítí?";"2G, 3G, 4G, 5G";"1G, 2G, 3G, 4G";"Wi-Fi 4, Wi-Fi 5, Wi-Fi 6";"Bluetooth 3.0, 4.0, 5.0"
"Co je funkce PWM na Arduinu?";"Regulace jasu LED nebo rychlosti motoru";"Převod zvukového signálu na digitální";"Ukládání dat na paměťovou kartu";"Připojení k Wi-Fi síti"
"Jaké jsou hlavní druhy pulzní modulace?";"PAM, PPM, PFM, PWM, PCM";"AM, FM, PM, SSB";"ADC, DAC, FFT, DSP";"GSM, LTE, UMTS, CDMA"
"Jaký je hlavní účel filtru v A/D převodníku?";"Odstranění vysokofrekvenčních složek před vzorkováním";"Zesílení vstupního signálu";"Redukce šumu při přenosu";"Komprese dat při ukládání"
"Co je funkce Sample & Hold?";"Udržení hodnoty signálu během vzorkování";"Generování pulzního signálu";"Stabilizace napětí na výstupu";"Řízení frekvence oscilátoru"
`;
const csvDataZesilovace = `Otazka;Spravna_odpoved;Odpoved_2;Odpoved_3;Odpoved_4
"Co je napěťový zesilovač?";"Zesiluje napětí signálu";"Zesiluje proud signálu";"Zesiluje výkon signálu";"Mění frekvenci signálu"
"Co je proudový zesilovač?";"Zesiluje proud signálu";"Zesiluje napětí signálu";"Zesiluje výkon signálu";"Snižuje zkreslení signálu"
"Jaká je základní vlastnost výkonového zesilovače?";"Zesiluje výkon signálu";"Zesiluje napětí signálu";"Zesiluje proud signálu";"Zesiluje kmitočet signálu"
"Co je zesílení napětí?";"Poměr výstupního napětí k vstupnímu napětí";"Poměr vstupního napětí k výstupnímu napětí";"Poměr proudu a napětí";"Poměr výkonu a napětí"
"Co určuje vstupní impedance zesilovače?";"Odpor, který zesilovač vidí na vstupu";"Odpor na výstupu zesilovače";"Napěťový zisk zesilovače";"Proudový zisk zesilovače"
"Co určuje výstupní impedance zesilovače?";"Odpor na výstupu zesilovače";"Odpor na vstupu zesilovače";"Zesílení napětí";"Zesílení proudu"
"Jaká je hlavní vlastnost třídy A zesilovače?";"Vede celý cyklus, vysoká kvalita signálu";"Vede polovinu cyklu, vysoká účinnost";"Vede méně než polovinu cyklu";"Vede celý cyklus, nízká kvalita signálu"
"Co charakterizuje třídu B zesilovače?";"Vede polovinu cyklu, vyšší účinnost";"Vede celý cyklus, vysoká kvalita";"Vede méně než polovinu cyklu";"Vede celý cyklus, nízká účinnost"
"Co je hlavní výhodou třídy D zesilovače?";"Vysoká účinnost díky spínanému režimu";"Vysoká kvalita signálu";"Nízké zkreslení";"Nízká spotřeba energie"
"K čemu slouží emitorový sledovač?";"K přizpůsobení impedance";"K zesílení napětí";"K zesílení proudu";"K regulaci frekvence"
"Jaká je základní funkce bipolárního tranzistoru?";"Zesílení proudu";"Zesílení napětí";"Filtrace signálu";"Stabilizace napětí"
"Co je společná báze tranzistoru?";"Zapojení tranzistoru s bází uzemněnou";"Zapojení s kolektorem uzemněným";"Zapojení s emitorem uzemněným";"Zapojení bez zemnění"
"Jaká je základní vlastnost MOSFET tranzistoru?";"Řízení proudu pomocí napětí na hradle";"Řízení napětí pomocí proudu";"Zesílení výkonu";"Snížení šumu signálu"
"Co je pracovním bodem tranzistoru?";"Stav tranzistoru bez vstupního signálu";"Maximální proud tranzistorem";"Maximální napětí na kolektoru";"Minimální výkon tranzistoru"
"Jaká je základní vlastnost kladné zpětné vazby?";"Zvyšuje zesílení, může způsobit nestabilitu";"Snižuje zesílení a zlepšuje stabilitu";"Nepůsobí na zesílení";"Eliminuje šum"
"Co je hlavní nevýhodou zesilovače třídy B?";"Zkreslení při přechodu mezi polovlnami";"Vysoká spotřeba energie";"Nízké napěťové zesílení";"Vysoká cena"
"Co je hlavní výhodou zesilovače třídy AB?";"Kompromis mezi účinností a kvalitou signálu";"Nejvyšší účinnost";"Nejvyšší kvalita signálu";"Nejvyšší stabilita"
"Co určuje šířka pásma zesilovače?";"Rozsah frekvencí s minimálním poklesem zesílení";"Maximální proud zesilovače";"Minimální výkon zesilovače";"Maximální teplota zesilovače"
"Jaké je hlavní využití VF zesilovačů?";"Zesílení vysokofrekvenčních signálů";"Zesílení nízkofrekvenčních signálů";"Stabilizace napětí";"Filtrace šumu"
`;
const csvDataFFDolni = `Otázka;Správná_odpověď;Odpověď_2;Odpověď_3;Odpověď_4  
"Co je dolní propust?";"Obvod, který propouští nízké frekvence a tlumí vysoké frekvence";"Obvod, který propouští vysoké frekvence a tlumí nízké frekvence";"Obvod, který zesiluje vysoké frekvence";"Obvod, který měří výkon"  
"Jak se vypočítá mezní frekvence dolní propusti?";"fc=1/(2πRC)";"fc=2πRC";"fc=1/(RC)";"fc=2/(πRC)"  
"Co je časová konstanta dolní propusti?";"Čas potřebný k dosažení 63 % konečné hodnoty signálu";"Čas potřebný k dosažení 50 % konečné hodnoty signálu";"Čas potřebný k plnému nabití kondenzátoru";"Čas potřebný k zesílení signálu"  
"Jaký vliv má dolní propust na obdélníkový signál?";"Zaoblí hrany signálu";"Zesílí vysokofrekvenční složky";"Zrychlí změny amplitudy";"Potlačí nízkofrekvenční složky"  
"Co způsobuje tvarové zkreslení signálu?";"Potlačení vyšších harmonických složek";"Nedostatečné zesílení základní frekvence";"Zesílení nízkofrekvenčních složek";"Fázový posun 0°"  
"Jaký je vzorec pro amplitudovou charakteristiku dolní propusti?";"|H(jω)| = 1 / sqrt(1 + (ωRC)²)";"|H(jω)| = 1 + (ωRC)²";"|H(jω)| = ωRC";"|H(jω)| = 1 / (ωRC)"  
"Jak se vypočítá fázový posun dolní propusti?";"ϕ = -arctan(ωRC)";"ϕ = arctan(ωRC)";"ϕ = -ωRC";"ϕ = ωRC"  
"Jaký je význam logaritmické stupnice v analýze dolní propusti?";"Používá se pro zobrazení frekvenční charakteristiky v dB";"Používá se pro výpočet časové konstanty";"Používá se pro měření výkonu zesilovače";"Používá se pro analýzu tvarového zkreslení"  
"Co znamená hodnota |H(jω)|dB = -3 dB?";"Amplituda signálu klesla na 70,7 % původní hodnoty";"Signál je plně potlačen";"Signál je zesílen na dvojnásobek";"Signál je zeslaben na 50 %"  
"Co je komplexní číslo?";"Číslo ve tvaru z = a + jb, kde a je reálná část a b imaginární";"Číslo, které obsahuje pouze reálnou část";"Číslo ve tvaru z = a - b";"Číslo, které obsahuje pouze imaginární část"  
"Jak se určí mezní frekvence při měření?";"Sledováním poklesu amplitudy na 70,7 % maximální hodnoty";"Měřením špičkového výkonu zesilovače";"Určením nulového fázového posunu";"Sledováním zvýšení amplitudy o 3 dB"  
"Jaký nástroj se používá pro měření frekvence a fázového posunu?";"Osciloskop";"Multimetr";"Analyzátor signálu";"Spektrální analyzátor"  
"Jak vypočítáme fázový posun ϕ z časového zpoždění Δt?";"ϕ = -360° × (Δt / T)";"ϕ = 360° × (Δt / T)";"ϕ = -180° × (Δt / T)";"ϕ = 180° × (Δt / T)"  
"Jaká je jednotka impedance kondenzátoru?";"Ohm (Ω)";"Farad (F)";"Siemens (S)";"Henry (H)"  
"Jaký je vztah mezi mezní frekvencí a časovou konstantou?";"fc = 1 / (2πRC)";"fc = RC";"fc = 2πRC";"fc = 1 / RC"  
"Co způsobuje dolní propust při vysokých frekvencích?";"Potlačuje vysokofrekvenční složky signálu";"Zesiluje vysokofrekvenční složky";"Zesiluje nízkofrekvenční složky";"Propouští všechny frekvence stejně"  
"Jaký je hlavní účel dolní propusti?";"Propouštět nízké frekvence a tlumit vysoké frekvence";"Propouštět vysoké frekvence a tlumit nízké frekvence";"Zesílit všechny frekvence rovnoměrně";"Zeslabit všechny frekvence rovnoměrně"
`;
const csvDataFFHorni = `Otázka;Správná_odpověď;Odpověď_2;Odpověď_3;Odpověď_4  
"Co je horní propust?";"Obvod, který propouští vysoké frekvence a potlačuje nízké frekvence";"Obvod, který propouští nízké frekvence a potlačuje vysoké frekvence";"Obvod, který zesiluje všechny frekvence";"Obvod, který měří teplotu"  
"Jak se vypočítá mezní frekvence horní propusti?";"fc=1/(2πRC)";"fc=2πRC";"fc=1/(RC)";"fc=2/(πRC)"  
"Jaký vliv má horní propust na nízkofrekvenční signál?";"Potlačí nízké frekvence";"Zesílí nízké frekvence";"Neovlivní nízké frekvence";"Otočí fázi signálu o 180°"  
"Jaký je princip horní propusti?";"Propouštět vysoké frekvence a tlumit nízké frekvence";"Propouštět nízké frekvence a tlumit vysoké frekvence";"Zesílit všechny frekvence rovnoměrně";"Zeslabit všechny frekvence rovnoměrně"  
"Jaká je jednotka impedance kondenzátoru?";"Ohm (Ω)";"Farad (F)";"Siemens (S)";"Henry (H)"  
"Jak se vypočítá fázový posun horní propusti?";"ϕ = arctan(ωRC)";"ϕ = -arctan(ωRC)";"ϕ = ωRC";"ϕ = -ωRC"  
"Jak se určí mezní frekvence při měření?";"Sledováním nárůstu amplitudy na 70,7 % maximální hodnoty";"Měřením špičkového výkonu zesilovače";"Určením nulového fázového posunu";"Sledováním zvýšení amplitudy o 3 dB"  
"Jak se vypočítá amplitudová charakteristika horní propusti?";"|H(jω)| = ωRC / sqrt(1 + (ωRC)²)";"|H(jω)| = 1 / sqrt(1 + (ωRC)²)";"|H(jω)| = ωRC";"|H(jω)| = 1 / (ωRC)"  
"Jaký je vztah mezi mezní frekvencí a časovou konstantou?";"fc = 1 / (2πRC)";"fc = RC";"fc = 2πRC";"fc = 1 / RC"  
"Jaký je vzorec pro přenos horní propusti?";"H(jω) = jωRC / (1 + jωRC)";"H(jω) = 1 / (1 + jωRC)";"H(jω) = jωRC";"H(jω) = 1 / jωRC"  
"Co způsobuje horní propust při nízkých frekvencích?";"Potlačuje nízkofrekvenční složky signálu";"Zesiluje nízkofrekvenční složky";"Propouští všechny frekvence stejně";"Potlačuje vysokofrekvenční složky"  
"Jaký je hlavní účel horní propusti?";"Propouštět vysoké frekvence a tlumit nízké frekvence";"Propouštět nízké frekvence a tlumit vysoké frekvence";"Zesílit všechny frekvence rovnoměrně";"Zeslabit všechny frekvence rovnoměrně"  
"Jaká je hodnota amplitudy horní propusti při vysokých frekvencích?";"|H(jω)| → 1 (100 %)";"|H(jω)| → 0 (0 %)";"|H(jω)| → 0,5 (50 %)";"|H(jω)| → ∞"  
"Jaká je hodnota amplitudy horní propusti při nízkých frekvencích?";"|H(jω)| → 0 (0 %)";"|H(jω)| → 1 (100 %)";"|H(jω)| → 0,5 (50 %)";"|H(jω)| → ∞"  
"Jaká je hodnota fázového posunu horní propusti při nízkých frekvencích?";"ϕ → 0°";"ϕ → +90°";"ϕ → -90°";"ϕ → 180°"  
"Jaká je hodnota fázového posunu horní propusti při vysokých frekvencích?";"ϕ → +90°";"ϕ → 0°";"ϕ → -90°";"ϕ → 180°"  
"Jaký nástroj se používá pro měření frekvence a fázového posunu?";"Osciloskop";"Multimetr";"Spektrální analyzátor";"Analyzátor signálu"  
"Jak se počítá fázový posun ϕ z časového zpoždění Δt?";"ϕ = 360° × (Δt / T)";"ϕ = -360° × (Δt / T)";"ϕ = 180° × (Δt / T)";"ϕ = -180° × (Δt / T)"
`;
const csvDataRLC = `Otázka;Správná_odpověď;Odpověď_2;Odpověď_3;Odpověď_4
"Co je RL obvod?";"Obvod obsahující rezistor a induktor v sérii nebo paralelně";"Obvod obsahující rezistor a kondenzátor v sérii nebo paralelně";"Obvod obsahující pouze rezistor";"Obvod obsahující pouze induktor"
"Co je RC obvod?";"Obvod obsahující rezistor a kondenzátor v sérii nebo paralelně";"Obvod obsahující rezistor a induktor v sérii nebo paralelně";"Obvod obsahující pouze kondenzátor";"Obvod obsahující pouze rezistor"
"Jaký je vztah pro induktivní reaktanci?";"XL = 2πfL";"XL = 1/(2πfL)";"XL = f/L";"XL = L/f"
"Jaký je vztah pro kapacitní reaktanci?";"XC = 1/(2πfC)";"XC = 2πfC";"XC = C/f";"XC = f/C"
"Jak se vypočítá impedance RL obvodu?";"Z = √(R² + XL²)";"Z = R + XL";"Z = R * XL";"Z = XL / R"
"Jak se vypočítá impedance RC obvodu?";"Z = √(R² + XC²)";"Z = R + XC";"Z = R * XC";"Z = XC / R"
"Co je rezonance v RLC obvodu?";"Stav, kdy reaktance cívky se rovná reaktanci kondenzátoru";"Stav, kdy napětí je nulové";"Stav, kdy proud je maximální";"Stav, kdy impedance je nekonečná"
"Jaký je vztah pro rezonanční frekvenci?";"f0 = 1/(2π√(LC))";"f0 = 2π√(LC)";"f0 = √(LC)";"f0 = 1/(LC)"
"Co je kvalitní činitel Q?";"Poměr rezonanční frekvence k šířce pásma";"Poměr napětí k proudu";"Poměr výkonu ke ztrátám";"Poměr amplitudy k frekvenci"
"Jaká je jednotka impedance?";"Ohm (Ω)";"Farad (F)";"Henry (H)";"Siemens (S)"
"Jaký je vztah pro decibely v případě napětí?";"VdB = 20 * log10(V2/V1)";"VdB = 10 * log10(V2/V1)";"VdB = 30 * log10(V2/V1)";"VdB = 5 * log10(V2/V1)"
"Jaký je vztah pro decibely v případě výkonu?";"PdB = 10 * log10(P2/P1)";"PdB = 20 * log10(P2/P1)";"PdB = 30 * log10(P2/P1)";"PdB = 5 * log10(P2/P1)"
"Jaký je vztah pro fázový posun?";"ϕ = 360° * (Δt / T)";"ϕ = 180° * (Δt / T)";"ϕ = 90° * (Δt / T)";"ϕ = 45° * (Δt / T)"
"Jaké zařízení se používá pro měření frekvence a fázového posunu?";"Osciloskop";"Multimetr";"Analyzátor spektra";"Generátor signálu"
"Jaký je vztah mezi frekvencí a induktivní reaktancí?";"XL ∝ f";"XL ∝ 1/f";"XL ∝ f²";"XL ∝ 1/f²"
"Jaký je vztah mezi frekvencí a kapacitní reaktancí?";"XC ∝ 1/f";"XC ∝ f";"XC ∝ f²";"XC ∝ 1/f²"
"Jaká je fázová charakteristika sériového RL obvodu?";"Napětí na induktoru předbíhá proud o 90°";"Napětí na induktoru zpožďuje za proudem o 90°";"Napětí na rezistoru předbíhá proud o 90°";"Napětí na rezistoru zpožďuje za proudem o 90°"
"Jaká je fázová charakteristika sériového RC obvodu?";"Napětí na kondenzátoru zpožďuje za proudem o 90°";"Napětí na kondenzátoru předbíhá proud o 90°";"Napětí na rezistoru předbíhá proud o 90°";"Napětí na rezistoru zpožďuje za proudem o 90°"
"Co se stane při rezonanci v RLC obvodu?";"Impedance je minimální a proud je maximální";"Impedance je maximální a proud je minimální";"Napětí je nulové";"Proud je nulový"
"Jaký vliv má frekvence na kapacitní reaktanci?";"S rostoucí frekvencí klesá";"S rostoucí frekvencí roste";"Nemá vliv";"S rostoucí frekvencí zůstává konstantní"
`;
const csvDataRegulacni = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je regulační obvod?;Systém tvořený regulátorem a regulovanou soustavou;Uzavřený obvod bez akčního členu;Přímé řízení;Pouze regulační ventil;Mechanický spínač
Co je úkolem součtového členu?;Porovnává skutečnou a žádanou hodnotu regulované veličiny;Zesiluje signál;Generuje akční veličinu;Řídí napájení;Ověřuje výkon pohonu
Co znamená zpětná vazba v regulačním obvodu?;Vrací výstupní signál zpět k porovnání se žádanou hodnotou;Zesiluje akční veličinu;Používá se k programování regulátoru;Vytváří nové vstupní veličiny;Zajišťuje napájení pohonu
Který člen přeměňuje odchylku na akční zásah?;Regulátor;Snímač;Převodník;Měřicí člen;Relé
Jaký je rozdíl mezi otevřeným a uzavřeným regulačním obvodem?;Uzavřený obvod má zpětnou vazbu, otevřený ne;Otevřený je bez čidel;Uzavřený nepotřebuje řízení;Otevřený nemá měřicí člen;Rozdíl není žádný
Kdy je regulační obvod považován za stabilní?;Výstupní veličina se po změně vstupu ustálí;Nemění se výstupní veličina;Nepotřebuje vstupní veličinu;Výstup je trvale nulový;Je-li ručně ovládán
Co určuje jakost regulace?;Přesnost a rychlost reakce obvodu;Značka regulátoru;Druh použitého signálu;Typ pohonu;Množství vodičů
Co znamená přímé řízení?;Řízení tlačítkem v přímo spojeném obvodu;Přes stykač nebo relé;Pomocí PLC;Pomocí snímačů;Pomocí pneumatického ventilu
Jaká barva signalizuje poruchový stav?;Červená;Zelená;Modrá;Oranžová;Bílá
Co je programová regulace?;Regulovaná veličina se mění dle časového programu;Veličina je konstantní;Změna na základě venkovní teploty;Řízení poměrem veličin;Nepředvídatelná změna
K čemu slouží akční člen?;Provádí zásah do regulované soustavy;Změří vstupní signál;Upravuje napětí;Přenáší data;Zpracovává signály
Jaký je rozdíl mezi analogovým a binárním signálem?;Analogový se mění spojitě, binární má pouze dvě hodnoty;Binární signál je plynulý;Analogový pracuje pouze s 0 a 1;Binární je nepoužitelný v automatizaci;Analogový signál se nepoužívá
Co je to regulační odchylka?;Rozdíl mezi žádanou a skutečnou hodnotou veličiny;Výstupní výkon regulátoru;Proudový zisk čidla;Časová prodleva při regulaci;Změna směru otáček
K čemu slouží snímač v regulačním obvodu?;Měří a vyhodnocuje skutečnou hodnotu veličiny;Řídí akční člen;Změní analogový signál na digitální;Zajišťuje napájení soustavy;Zpětně upravuje signál
Jaký typ řízení se používá při řízení bez zpětné vazby?;Ovládání;Regulace;Kybernetické řízení;Adaptivní řízení;Automatizace
Co je funkce inteligentního senzoru?;Zpracovává a analyzuje signál v jednom modulu;Pouze měří signál;Zesiluje výstupní napětí;Přenáší proud na snímač;Detekuje barvy
Co je remanentní relé?;Relé, které drží polohu bez napájení díky feromagnetickému jádru;Relé s trvalým proudem;Časové relé bez časovače;Spínací modul s dvojitým výstupem;Relé s pamětí programu
Jaká je hlavní výhoda nepřímého řízení?;Možnost ovládat vysoké napětí malým proudem;Přímé spojení se zařízením;Používá se v domácnostech;Nezávislost na vzdálenosti;Zpětné řízení ventilů
"Jaká veličina je označena jako ""u"" v regulačním obvodu?";Akční veličina;Žádaná hodnota;Měřená hodnota;Regulovaná veličina;Odchylka
K čemu slouží časové relé se zpožděným odpadem?;Udržuje sepnutí kontaktu po určitou dobu po odpojení signálu;Sepne ihned po zapnutí;Resetuje systém;Přeruší obvod při přepětí;Generuje vysokofrekvenční signál
`;
const csvDataProstredky = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je to automatizace?;Řízení procesu bez přímého zásahu člověka;Řízení počítačem;Manuální ovládání;Nepřetržité sledování obsluhou;Přepínání elektrických obvodů
Kdy člověk zasahuje do automatizovaného procesu?;Pouze při spouštění, zastavování nebo mimořádných situacích;Nepřetržitě během celého procesu;Nikdy;Každou hodinu;Po ukončení každého cyklu
Jaké jsou technické prostředky automatizace?;Čidla, převodníky, akční členy, regulátory, řídicí počítače;Pouze senzory;Jen převodníky a motory;Výhradně softwarové prostředky;Optické kabely a relé
Podle čeho volíme druh automatizačního prostředku?;Podle požadovaných technických a provozních vlastností;Podle ceny součástek;Podle barvy komponent;Podle velikosti zařízení;Podle délky kabelu
Jaký je rozdíl mezi ovládáním a regulací?;Ovládání je bez zpětné vazby, regulace pracuje se zpětnou vazbou;Regulace je manuální;Ovládání využívá čidla;Regulace je rychlejší;Ovládání je přesnější
Co je analogový signál?;Spojitě se měnící fyzikální veličina;Signál s hodnotami 0 nebo 1;Skokový signál;Náhodný signál;Signál s chybovým kódem
Co je binární signál?;Signál se dvěma hodnotami – log. 1 a 0;Spojitě se měnící signál;Zvukový signál;Světelný signál;Skládající se z impulsů
Jaký je rozdíl mezi analogovým a digitálním signálem?;Analogový je spojitý, digitální skokový;Digitální má více hladin;Analogový má jen 0 a 1;Digitální je vždy přesnější;Analogový je optický
Co je střída u obdélníkového signálu?;Poměr mezi dobou zapnuto a vypnuto;Frekvence signálu;Napěťová úroveň;Šířka signálu;Doba přenosu dat
Jaký tvar mají taktovací signály v digitální technice?;Obdélníkové a jehlové impulsy;Sinusové;Trojúhelníkové;Zvukové;Chaotické
Co je komunikační řetězec?;Cesta, kterou signál prochází od snímače až k akčnímu členu;Sled operací v programu;Síťový kabel;Typ rozvaděče;Zpětná vazba
Co znamená pojem tok energie?;Přenos energie spolu se signály v regulačním obvodu;Měření výkonu motoru;Ztráta energie ve vodiči;Ohřev vodičů při přenosu;Stabilita signálu
Jaký člen zesiluje signál bez nositele energie?;Obecný člen;Snímač;Výkonový zesilovač;Motor;Měřicí člen
Co je řízení?;Informační proces s cílem ovlivnit systém na základě měření a výpočtů;Manuální ovládání spínačů;Činnost elektrického obvodu;Programování zařízení;Distribuce energie
Jaký je rozdíl mezi ručním a automatickým řízením?;Ruční řízení provádí člověk, automatické vykonává automat;Ruční řízení je levnější;Automatické je vždy přesnější;Automatické nepotřebuje program;Ruční má větší výkon
Co je adaptivní řízení?;Automatické řízení se schopností samočinně volit podmínky řízení;Ruční řízení;Předem naprogramovaný proces;Ovládání tlačítky;Nepřesné řízení
K čemu slouží čidlo v automatizační technice?;Získává informace o řízeném procesu;Vytváří výstupní signál;Spíná motor;Zastavuje systém;Zesiluje signál
Jaký je hlavní účel signálu v automatizaci?;Přenášet informaci o veličinách v systému;Napájet čidla;Zajišťovat chlazení;Měnit mechanickou energii;Udržovat stálou teplotu
Jaký druh signálu je nejvíce využíván ve výpočetní technice?;Binární;Analogový;Zvukový;Tepelný;Světelný
Proč se používá kódování signálu?;Aby bylo možné přenášet informaci jednoznačně;Kvůli zvýšení výkonu;Pro chlazení vodičů;Z důvodu zjednodušení konstrukce;Pro zvýšení odporu vedení
`;
const csvDataLogika = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je logické řízení?;Řízení pomocí dvouhodnotových logických funkcí;Řízení pomocí proudových zesilovačů;Mechanické ovládání;Regulace teploty;Ruční řízení
Jaké hodnoty používá dvouhodnotová logika?;1 a 0;2 a 3;5V a 12V;100 a 200;Ano a Ne
Které tři základní logické funkce tvoří úplný soubor?;NOT, AND, OR;NAND, NOR, XOR;XOR, AND, NAND;IF, ELSE, END;A, B, C
K čemu slouží logická funkce NOT?;Invertuje vstupní signál;Přenáší signál;Zesiluje signál;Zpožďuje signál;Detekuje chybu
Co je funkce AND?;Výstup je 1, když všechny vstupy jsou 1;Výstup je 0, když všechny vstupy jsou 1;Výstup je 1, když alespoň jeden vstup je 1;Výstup je vždy 1;Invertuje vstup
Co je funkce OR?;Výstup je 1, pokud alespoň jeden vstup je 1;Výstup je 1, pokud žádný vstup není 1;Výstup je 0 vždy;Vždy přerušuje signál;Spojuje signály do série
Jaká logická funkce je opakem AND?;NAND;NOR;XOR;NOT;OR
Co znamená zkratka NAND?;Negace funkce AND;Spojení NOT a OR;Zesilovač;Napěťový spínač;Negativní signál
Jaký je výstup funkce NOR, pokud jsou oba vstupy 0?;1;0;-1;Nelze určit;Závisí na čase
Jak zapisujeme logické funkce?;Booleovou algebrou, pravdivostní tabulkou, schématy;Grafickým schématem výpočtu;Pomocí UML diagramu;Číselným kódem;Binárním stromem
Jaký typ systému používá dvouhodnotové členy jako spínače?;Logický řídicí systém;Analogový systém;Hydraulický obvod;Pneumatický systém;Mechanický stroj
Co je kombinační logický obvod?;Výstup závisí pouze na kombinaci vstupních proměnných;Výstup závisí na předchozím stavu;Má paměť;Reaguje se zpožděním;Používá se pouze v PLC
Co je sekvenční logický obvod?;Výstup závisí na vstupech i jejich předchozím sledu;Výstup závisí pouze na vstupu;Nemá žádnou paměť;Pouze spíná světlo;Nelze ho programovat
Jak se značí stykač a relé ve schématu?;K;R;S;T;C
Co označuje KM5 ve schématu?;Stykač, který spíná motor číslo 5;Relé číslo 5;Motor číslo 5;Páté čidlo;Pátý logický obvod
Co je kontaktní řídicí systém?;Systém řízení pomocí kontaktů a tlačítek;Systém bezdrátového přenosu;Logický programovací jazyk;Výpočtový model;Pneumatická řídicí jednotka
Jaké napětí obvykle používá kontaktní řídicí systém?;24 V DC;230 V AC;12 V AC;5 V DC;48 V DC
Jak se označují funkční jednotky v řídicím systému?;Písmenem a číslem (např. K1, M2);Slovy;Barvou;Značkou a šipkou;Řádkem a sloupcem
Co je základní požadavek na logický řídicí systém?;Provozní spolehlivost;Barevné značení;Nízká cena;Vysoký výkon;Pomalá odezva
K čemu slouží dynamická šumová imunita?;Odolnost proti jednorázovým rušivým impulzům;Odolnost proti vysoké teplotě;Přesné spínání;Zvýšení rychlosti;Ochrana proti přepětí
`;
const csvDataVykresy = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je přehledové schéma?;Zjednodušené jednopólové instalační schéma;Schéma zapojení relé;Liniové schéma;Spojovací plán;Schéma rozvaděče
K čemu slouží vícepólové schéma?;Zobrazuje podrobné zapojení více vodičů;Zobrazuje prostorové umístění součástek;Používá se jen pro jističe;Zobrazuje pouze napájení;Zobrazuje topologii sítě
Jak se značí počet žil ve vodiči v jednopólovém schématu?;Počtem příčných čárek přes vedení;Barvou vodiče;Tloušťkou čáry;Typem izolace;Délkou čáry
Co je liniové schéma?;Ukazuje funkce elektrického zařízení;Zobrazuje pouze hlavní přívody;Slouží ke značení vodičů;Zobrazuje fyzické rozmístění součástek;Zobrazuje uzemnění
Jak jsou orientovány napájecí linie v liniovém schématu?;Svisle nebo vodorovně, + pól nahoře nebo vlevo;+ pól vždy dole;Vždy diagonálně;Nezáleží na orientaci;Pouze vodorovně
Co je kontaktní funkční schéma?;Zjednodušené liniové schéma zakreslené vodorovně;Schéma pro silové rozvody;Digitální výkres;Schéma chlazení;Spojovací plán motorů
Co ukazuje propojovací schéma?;Skutečné propojení mezi jednotlivými prvky;Přepětí v obvodu;Napájecí napětí;Funkci obvodu;Barvu vodičů
K čemu slouží schéma zapojení elektrického přístroje?;Zobrazuje vnitřní zapojení přístroje se všemi spoji;Zobrazuje polohu v rozvaděči;Ukazuje zemnění;Zobrazuje druhy kabelů;Vyhodnocuje poruchy
Co je spojovací schéma?;Zobrazuje elektrické spojení mezi přístroji jednoho zařízení;Zobrazuje signální proud;Zobrazuje napájecí zdroje;Schéma chlazení rozvaděče;Pouze schematické značení jističů
K čemu slouží přehledový plán rozvaděče?;Ukazuje rozložení a propojení prvků v rozvaděči;Zobrazuje chlazení;Zobrazuje programování;Určuje barvy tlačítek;Zobrazuje typy kabelů
Co určuje systém řídicího vedení?;Funkce, připojení a propojení řídicích obvodů;Barvu vodičů;Počet stykačů;Ochranu proti přepětí;Rozměry rozvaděče
Co je řízení s postupným spínáním?;Jednotlivé prvky se spínají v daném sledu;Vše se spíná současně;Pouze výstupní členy se spínají;Není řízeno logikou;Používá se jen v PLC
Co je reverzační zapojení?;Zapojení umožňující změnu směru otáčení motoru;Zapojení s časovým zpožděním;Zapojení s více stykači;Zapojení bez pojistek;Jednoduché reléové řízení
Co je automatické stykačové spouštění motorů?;Motor je spouštěn pomocí stykačů bez ručního zásahu;Motor se spouští ručně;Používá se jen při výpadku napájení;Využívá analogový senzor;Spínání probíhá impulsem
K čemu slouží návrh plošného spoje?;K vytvoření vodivého propojení mezi součástkami;K sestavení programového kódu;K montáži krytu rozvaděče;K návrhu mechanické skříně;K popisu algoritmu řízení
Jaké zásady platí pro návrh plošného spoje?;Minimalizace rušení, správná šířka cest, oddělení signálů;Použití modrých cest;Co nejvíce vrstev;Použití pevných drátů;Použití jednoho typu kondenzátoru
Co je význam operátorů v liniových schématech?;Řídí funkce a průběh spínání;Měří proud;Určují barvu čidel;Označují napájení;Zapisují výrobní čísla
K čemu slouží značení vodičů?;K identifikaci propojení a usnadnění servisu;Zvyšuje proud;Zajišťuje zemnění;Připojuje ochranné prvky;Slouží k chlazení
Jaký je účel elektrického výkresu?;Zobrazit elektrické zapojení a funkce obvodu;Zobrazit design rozvaděče;Zobrazit teplotu vodičů;Zobrazit výrobní proces;Zobrazit rychlost motoru
Kde se zakreslují prvky ve funkčním schématu?;V pořadí, jak přicházejí do činnosti;Dle velikosti;Podle barvy;Podle výrobce;Podle hmotnosti
`;
const csvDataRozvody = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
K čemu slouží průmyslový elektrický rozvod?;K napájení zařízení a strojů ve výrobních provozech;K osvětlení domácností;K napájení malých spotřebičů;K připojení telefonů;K řízení domácí sítě
Jaké napětí je běžné v silnoproudých rozvodech?;230 V / 400 V;12 V;5 V;1000 V;750 V
K čemu slouží slaboproudé rozvody?;Pro komunikaci, signalizaci a automatizaci;Pro napájení motorů;Pro osvětlení;Pro chlazení;Pro připojení jističů
Co jsou přípojnicové rozvody?;Systémy distribuce el. energie pomocí přípojnic;Přenosové sítě pro WiFi;Optické spoje;Spínací prvky;Zemnící systémy
K čemu slouží záložní rozvody?;Pro případ výpadku elektrické energie;Pro připojení ventilátorů;Pro zajištění chlazení;Pro dálkové ovládání;Pro regulaci teploty
Co je instalovaný výkon?;Součet jmenovitých výkonů všech spotřebičů;Maximální příkon sítě;Proud při poruše;Zkratový proud;Průměrný proud v obvodu
Jaký je součinitel náročnosti v průmyslu?;0,48;1,0;0,2;0,9;0,05
K čemu slouží výpočtové zatížení?;K dimenzování elektrického rozvodu;K výběru motoru;K určení délky vedení;K výběru pojistky;K regulaci napětí
Co je prachotěsný přípojnicový rozvod?;Rozvod v uzavřeném kanále s krytím IP65 nebo vyšším;Standardní rozvod bez ochrany;Otevřený vodič;Vodič bez izolace;Podzemní vedení
Jaký je přípustný pokles napětí v místě připojení motoru?;5 %;0 %;10 %;20 %;1 %
Jaký je hlavní požadavek při připojování elektromotoru?;Dobrý účiník a účinnost;Nízká cena;Malá velikost;Tichý chod;Nízký výkon
Co je Y-Δ spouštění motoru?;Spouštění sníženým proudem pomocí změny zapojení;Paralelní spouštění;Ruční spínání;Spínání přes tlačítko;Spouštění pomocí tepla
K čemu slouží softstartéry?;Omezují náběhový proud motoru;Zvyšují otáčky motoru;Zastavují motor;Chladí motor;Řídí světla
Jaký je rozběh motoru do 4 sekund?;Lehký;Střední;Těžký;Nemožný;Zrychlený
Jaký je hlavní rozdíl mezi dodávkou 1., 2. a 3. stupně?;V úrovni zabezpečení dodávky el. energie;V typu použitých motorů;V délce kabeláže;V typu jističů;Ve velikosti rozvaděče
Kde musí být dodávka 1. stupně vždy zajištěna?;V nemocnicích nebo kritických provozech;V běžných domácnostech;V dílně;Ve školní laboratoři;V kanceláři
Jak se označuje dodávka 3. stupně?;Není nutné ji zajišťovat;Musí být zálohovaná;Zajišťována ze dvou zdrojů;Určena pro nemocnice;Napájení pomocí UPS
K čemu slouží pravidla bezpečné práce na elektrickém zařízení?;K ochraně zdraví a života při práci;K rychlejší montáži;K levnějšímu provozu;K označení vodičů;K výběru jističů
Co znamená pravidlo 'Vypni, Zajisti, Odzkoušej'?;Zajištění bezpečné práce na EZ;Spuštění zařízení;Údržba osvětlení;Příprava PLC programu;Výpočet odporu
Co je živá část v elektrickém zařízení?;Proudovodná část určená k vedení proudu;Kovová konstrukce;Plášť rozvaděče;Vodič ochrany;Kryt přístroje
`;
const csvDataRegulace = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je elektrický pohon?;Souhrn zařízení zajišťujících přeměnu el. energie na mechanickou;Zesilovač napětí;Stabilizátor napětí;Snímač polohy;Ruční ovladač
Jaké jsou hlavní části elektrického pohonu?;Elektrický motor, ovládací a jistící prvky, napájecí zdroje;Stykač, relé, jistič;Převodovka, relé, kondenzátor;PLC, motor, ventil;Spínač, transformátor, žárovka
K čemu slouží regulační orgán?;K ovládání hodnot napětí, proudu, průtoku apod.;K připojení zařízení;K měření odporu;K detekci signálu;K přepínání světel
Jaký je příklad elektrického regulačního orgánu?;Tranzistor;Stykač;Motor;Optočlen;Pojistka
Jaký je příklad pneumatického regulačního orgánu?;Ventil;Relé;Motor;Stykač;Převodník
Jaký je příklad hydraulického regulačního orgánu?;Šoupě;Čerpadlo;Zásobník;Tepelný výměník;Měnič
Co je důležitá podmínka při volbě pohonu?;Rozsah momentu a otáček;Barva motoru;Hmotnost zařízení;Typ izolace;Materiál skříně
Jaká je konstrukční podmínka pohonu?;Poloha motoru a tvar;Spotřeba oleje;Doba chodu;Počet kabelů;Způsob chlazení
Jaké jsou energetické podmínky pro pohon?;Napojení na síť, mobilita, špičková zatížení;Barva krytu;Typ PLC;Délka kabelu;Typ ventilace
Co je součinitel náročnosti (β)?;Podíl strojů současně v provozu;Napěťový zisk;Přesnost měření;Výstupní výkon;Typ izolace
Jaké vlivy je třeba zohlednit při volbě pohonu?;Teplota, vlhkost, prašnost, chvění;Cena;Barva krytu;Typ napájení;Materiál rozvaděče
Co je podmínka daná stupněm automatizace?;Oprávněnost použití konkrétního řešení z hlediska ekonomiky;Dostupnost čidel;Dostatek kabelů;Značka zařízení;Umístění rozvaděče
K čemu slouží momentová charakteristika?;Popisuje vztah mezi momentem a otáčkami;Popisuje barvu motoru;Popisuje spotřebu energie;Popisuje délku kabelu;Popisuje izolační odpor
Co je mechanika pohonu?;Řeší pohybovou rovnici motoru a zátěže;Zabývá se barvou vodičů;Popisuje uspořádání rozvaděče;Zajišťuje chlazení;Měří výkon motoru
Jak se značí moment motoru?;MM;MZ;MP;MT;MO
Co je to ztrátový moment?;ΔM;MZ;MM;MT;MP
Jaký motor je součástí el. pohonu?;Stejnosměrný nebo střídavý motor;Jen krokový motor;Pouze hydraulický;Pouze pneumatický;Lineární motor
Jaký typ pohonu má klapku nebo ventil jako regulační orgán?;Pneumatický;Elektrický;Optický;Mechanický;Tepelný
Kde najdeme elektrické komutované motory?;V moderních řízených systémech;Ve starých osvětleních;Pouze v domácnostech;Jen v PLC;Ve vypínačích
K čemu slouží řiditelný zdroj el. energie v pohonu?;Pro napájení vinutí motoru;Pro chlazení motoru;Pro ovládání PLC;Pro osvětlení rozvaděče;Pro měření výkonu
`;
const csvDataAutomat = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je čidlo?;Zařízení, které převádí fyzikální veličinu na elektrický signál;Zařízení na ochranu proti přepětí;Spínač vysokého napětí;Mechanická pojistka;Zdroj napájení
K čemu slouží snímač?;Měří fyzikální veličinu a převádí ji na elektrický signál;Generuje mechanický pohyb;Ovládá motor;Řídí stykač;Stabilizuje napětí
Jaký je rozdíl mezi čidlem a snímačem?;Čidlo snímá, snímač převádí na elektrický signál;Není žádný rozdíl;Snímač je vždy větší;Čidlo měří napětí;Snímač má paměť
Jaké jsou druhy čidel podle fyzikální veličiny?;Teplotní, tlakové, polohové, rychlostní, průtokové;Optické, zvukové, radiofrekvenční;Digitální, analogové, binární;Mikrovlnné, ultrazvukové, zvukové;Hydraulické, pneumatické
Jak se dělí snímače podle výstupu?;Analogové a digitální;Vstupní a výstupní;Ruční a automatické;Lineární a nelineární;Vysokonapěťové a nízkonapěťové
Kde se využívají teplotní čidla?;V topných systémech, klimatizacích, výrobě;Pouze ve školství;Ve spínačích světel;V napájecích zdrojích;V LED osvětlovačích
Jak pracuje odporové teplotní čidlo?;Jeho odpor se mění s teplotou;Vydává zvuk;Přerušuje obvod;Zesiluje signál;Snižuje napětí
Co je termočlánek?;Dva různé kovy generující napětí v závislosti na teplotě;Odporový vodič;Teplotní senzor s optickým výstupem;Spínač;Pojistka
Jak pracuje indukční snímač?;Vytváří magnetické pole a detekuje kovové předměty;Měří tlak vzduchu;Reaguje na světlo;Přijímá rádiové vlny;Vysílá ultrazvuk
K čemu slouží kapacitní snímač?;Detekuje objekty s odlišnou permitivitou;Měří napětí;Zesiluje proud;Přepíná signály;Řídí motor
Kde se využívají ultrazvukové snímače?;Pro měření vzdáleností a detekci překážek;V elektrických pohonech;Pro měření napětí;V mechanických spínačích;V topných tělesech
Jaký typ snímače použijeme pro měření otáček?;Otáčkoměr nebo inkrementální snímač;Teplotní senzor;Kapacitní čidlo;Termočlánek;Tlakové čidlo
Jaký snímač se používá pro detekci polohy?;Indukční nebo optický snímač;Teplotní čidlo;Tlakový spínač;Releové čidlo;Zesilovač signálu
Jak funguje optický snímač?;Vysílá a přijímá světelný paprsek;Zesiluje světlo;Zachycuje zvukové vlny;Převádí teplo na proud;Detekuje vlhkost
Co je to PIR čidlo?;Pasivní infračervené čidlo na pohyb osob;Tlakový senzor;Optická závora;Ultrazvukový senzor;Snímač hluku
Jaký je hlavní princip Hallova senzoru?;Detekce změny magnetického pole;Měření napětí;Sledování proudu;Zesílení signálu;Přenos světla
Jaký je výstup většiny digitálních snímačů?;Logická 1 nebo 0;Analogové napětí;PWM signál;Sinusový průběh;Střídavý proud
Kde se používají tlakové snímače?;V hydraulice, pneumatice, klimatizaci;V osvětlení;V elektrických pohonech;V mikrofonech;V bezpečnostních spínačích
Jak se značí čidla ve výkresech?;Písmenem B;Písmenem M;Písmenem R;Písmenem K;Písmenem L
K čemu slouží vyhodnocovací jednotka snímače?;Zpracovává signál a přenáší ho do řídicího systému;Zvyšuje napětí;Chladí snímač;Mění frekvenci;Ovládá motor
`;
const csvDataRele = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je účelem elektrického měření?;Získání informací o elektrických veličinách a jejich změnách;Zvýšení napětí v obvodu;Spuštění motoru;Změna směru proudu;Programování PLC
Jaké základní elektrické veličiny měříme?;Napětí, proud, odpor, výkon;Frekvenci, teplotu, otáčky;Rychlost, čas, tlak;Proud, barvu, polohu;Odpor, sílu, vlhkost
Co je převodník?;Zařízení, které převádí jednu fyzikální veličinu na jinou;Zdroj napětí;Výstupní člen;Pojistka;Motor
Jaké jsou typy převodníků?;Analogové a číslicové;Digitální a optické;Mechanické a hydraulické;Zesilovací a omezovací;Odporové a proudové
K čemu slouží proudový transformátor?;K měření velkých proudů pomocí menších přístrojů;K transformaci napětí;K napájení motoru;K ochraně rozvodů;K přepínání fází
Jak se značí ampérmetr ve schématu?;A;V;R;Ω;W
Jak se značí voltmetr ve schématu?;V;A;Ω;P;U
Jaké je zapojení ampérmetru do obvodu?;Do série;Paralelně;Bez připojení;S odporem;Do země
Jaké je zapojení voltmetru do obvodu?;Paralelně;Do série;Bez odporu;S kondenzátorem;S pojistkou
Co měří wattmetr?;Elektrický výkon;Odpor;Napětí;Proud;Teplotu
Jaký přístroj se používá pro měření odporu?;Ohmmetr;Ampérmetr;Voltmetr;Wattmetr;Frekvenční měřič
Co je čítač impulzů?;Zařízení, které počítá přijaté elektrické impulzy;Zařízení pro měření napětí;Zesilovač signálu;Časovač;Spínač
Jaká je jednotka elektrického odporu?;Ohm (Ω);Volt (V);Ampér (A);Watt (W);Farad (F)
Jak se značí měřicí převodník v dokumentaci?;T;M;Z;K;S
Jaká je hlavní výhoda číslicového měření?;Větší přesnost a odolnost proti rušení;Nižší cena;Menší spotřeba;Jednodušší instalace;Větší velikost
Jaké vlastnosti má analogový signál?;Spojitost, plynulá změna hodnoty;Skokové hodnoty;Pouze dvě úrovně;Pouze log. 1;Přenos digitálních dat
Co je rozsah měřicího přístroje?;Rozmezí hodnot, které může měřit;Přesnost přístroje;Velikost displeje;Typ použití;Časová odezva
Jak se značí odporový dělič napětí?;Dvě sériově zapojené odpory;Paralelní kondenzátor;Zenerova dioda;Transformátor;Spínací obvod
Jaké chyby mohou ovlivnit měření?;Systematické a náhodné;Tepelné a akustické;Vizuální a zvukové;Lineární a nelineární;Parazitní a harmonické
K čemu slouží kalibrace měřicího přístroje?;K zajištění přesnosti měření;K připojení k síti;K ochraně proti zkratu;K nastavení displeje;K prodloužení životnosti
`;
const csvDataPrevodniky = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je stykač?;Spínací přístroj dálkově ovládaný elektromagnetem;Mechanické tlačítko;Zdroj proudu;Pojistka;Jistič na DIN lištu
K čemu slouží relé?;K sepnutí nebo rozepnutí obvodu podle vstupního signálu;K ochraně proti zkratu;K měření napětí;K omezení proudu;K chlazení zařízení
Co je jistič?;Přístroj na ochranu obvodu proti přetížení a zkratu;Pojistka s pevnou hodnotou;Ovládací tlačítko;Zesilovač;Napěťový převodník
Jaký je rozdíl mezi jističem a pojistkou?;Jistič lze opětovně zapnout, pojistku je nutné vyměnit;Pojistka je vždy lepší;Jistič je menší;Pojistka je automatická;Jistič je jednorázový
Kde se používají stykače?;K dálkovému spínání motorů a silových obvodů;Pouze v domácích instalacích;V ručních ovladačích;Na svítidla;V bateriových obvodech
Co je NO kontakt?;Normálně otevřený kontakt;Normálně uzavřený kontakt;Negativní ovladač;Neutrální odpor;Napěťový obvod
Co je NC kontakt?;Normálně zavřený kontakt;Normálně otevřený kontakt;Napájecí kontakt;Nouzové tlačítko;Zemnící bod
Jaký je princip elektromagnetického relé?;Při přivedení napětí dojde k sepnutí kontaktů pomocí elektromagnetu;Je řízeno ručně;Zesiluje signál;Používá světelný senzor;Reaguje na teplo
Co je tepelná spoušť jističe?;Prvek reagující na zahřátí vodiče vlivem proudu;Prvek reagující na světlo;Zpětný kontakt;Ovládací knoflík;Tlačítko reset
K čemu slouží zkratová spoušť jističe?;Okamžitě odpojí obvod při zkratu;Měří odpor;Slouží k indikaci poruchy;Spíná kontakt pomalu;Reguluje napětí
Jaký je účel pojistky v obvodu?;Ochrana proti nadproudu a zkratu;Zesílení napětí;Změna směru proudu;Ovládání motoru;Zpožděné spínání
K čemu slouží pomocné kontakty stykače?;Pro signalizaci stavu hlavních kontaktů;Pro napájení motoru;K měření proudu;K regulaci napětí;K ručnímu ovládání
Co značí označení 'K1' ve schématu?;Stykač číslo 1;Relé časové;Tlačítko start;Motor;Jistič B16
Jak se značí cívka stykače?;K;M;S;P;T
Co je samovrací tlačítko?;Tlačítko, které se po stisku samo vrátí do původní polohy;Zůstává stisknuté;Ovládá motor;Používá se jen pro STOP;Ovládá proudový chránič
Jaká barva tlačítka je určena pro nouzové vypnutí?;Červená;Zelená;Modrá;Bílá;Žlutá
Co je zpožděné relé?;Sepne nebo vypne s časovým zpožděním;Přepíná směry;Zesiluje signál;Spíná pouze při vysokém napětí;Reaguje na teplotu
Jaká je hlavní funkce jističe B16?;Chránit obvod s proudovým limitem 16 A;Napájet obvod;Startovat motor;Spínat relé;Řídit senzor
K čemu slouží kontrolka ve spínacím obvodu?;Signalizuje stav (zapnuto/vypnuto);Řídí výkon;Ovládá ventil;Měří napětí;Zvyšuje proud
Jaký přístroj se používá pro sepnutí motoru z více míst?;Střídavé řízení pomocí stykačů a tlačítek;Termostat;Reverzní vypínač;Pojistka;Transformátor
`;
const csvDataVystavba = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je elektromotor?;Stroj převádějící elektrickou energii na mechanickou;Zařízení na regulaci teploty;Měřicí přístroj;Akumulátor;Zdroj napětí
Jaké jsou hlavní části elektromotoru?;Stator, rotor, ložiska;Transformátor, cívka, jádro;Stykač, relé, kontakt;Kondenzátor, dioda, tyristor;Senzor, čidlo, spínač
Co je stator?;Pevná část motoru, vytváří magnetické pole;Otáčející se část;Mechanický rám;Elektronická pojistka;Snímač napětí
Co je rotor?;Otáčející se část motoru;Pevná část s vinutím;Vypínač;Zemní kontakt;Kryt motoru
Jaký je princip činnosti asynchronního motoru?;Magnetické pole statoru indukuje proud v rotoru;Motor má mechanické spínače;Funguje jako generátor;Pracuje pouze s baterií;Reguluje teplotu
Co je jmenovitý výkon motoru?;Maximální výkon při stanovených podmínkách;Nejnižší výkon motoru;Spotřeba motoru;Zkratový proud;Proud při rozběhu
Co znamená IP krytí?;Stupeň ochrany proti vniknutí cizích těles a vody;Výkon motoru;Zkratová ochrana;Proudová zatížitelnost;Typ napájení
Jaký je rozdíl mezi 1f a 3f motorem?;1f má jednofázové napájení, 3f trojfázové;1f je silnější;3f se používá v domácnostech;1f nevyžaduje spouštění;3f má menší rozměry
Jak se značí připojovací svorky 3f motoru?;U1, V1, W1 a U2, V2, W2;L1, L2, L3;N, PE, L;X1, X2, X3;P1, P2, P3
Co je Y-Δ spouštění?;Způsob spuštění motoru pomocí změny zapojení vinutí;Zpětné spouštění;Programovatelné spouštění;Spínání pomocí PLC;Ruční zapnutí
Jaké jsou výhody Y-Δ spouštění?;Snížení rozběhového proudu a zátěže;Zvýšení rychlosti motoru;Ochrana proti přetížení;Snížení hlučnosti;Jednodušší zapojení
Jak se značí motor ve schématu?;M;K;R;B;T
Co je moment setrvačnosti?;Schopnost motoru odolávat změnám otáček;Výkon motoru;Napětí při chodu naprázdno;Počet závitů;Proudový zisk
Jak se značí směr otáčení motoru?;Šipkou na krytu nebo na svorkovnici;Barvou vodiče;Kódem na štítku;Zvukovou signalizací;Značkou R/L
Co je reverzace motoru?;Změna směru otáčení;Změna napětí;Změna typu napájení;Změna zatížení;Změna krytí
Jak se provádí změna směru otáčení 3f motoru?;Záměnou dvou fází;Změnou napětí;Změnou proudu;Přepnutím jističe;Přepnutím kondenzátoru
Co je to jmenovitý proud?;Proud, který motor odebírá při jmenovitém zatížení;Maximální proud při zkratu;Proud při startu;Zkratový proud;Minimální proud při běhu
Jaký vliv má poddimenzování motoru?;Přehřívání a snížení životnosti;Úspora energie;Zvýšení výkonu;Zlepšení chlazení;Lepší účinnost
Jaká je funkce tepelné ochrany motoru?;Vypíná motor při přehřátí;Spíná motor při chladu;Zvyšuje otáčky;Zesiluje proud;Zajišťuje zemnění
Jaké druhy motorů znáš?;Stejnosměrné, asynchronní, synchronní, krokové;Optické, logické, magnetické;Lineární, kruhové, pulzní;Ruční, automatické, reléové;Jednotkové, paralelní, sériové
`;
const csvDataMale = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je PLC?;Programovatelný logický automat;Pojistka logického obvodu;Proudový limiter;Programovací jazyk;Ovládací panel
K čemu slouží PLC?;K řízení technologických procesů;K měření teploty;K napájení motorů;K přenosu dat;K zabezpečení sítě
Jaké jsou výhody použití PLC?;Spolehlivost, flexibilita, snadná změna programu;Nízká cena;Zmenšení velikosti obvodu;Zvýšení proudu;Zesílení signálu
Jak se programuje PLC?;Pomocí speciálního software v PC;Pomocí tlačítek na PLC;Manuálním nastavením přepínačů;Pomocí spínačů a relé;Pomocí mobilní aplikace
Co je to ladder diagram (LD)?;Grafické znázornění programu ve formě žebříčku;Schéma zapojení motoru;Popis elektrického vedení;Kód pro mikrořadič;Konstrukční výkres
Jaký jazyk se nejčastěji používá pro PLC?;Ladder diagram (LD);C++;Java;Python;Assembler
Jaké jsou části PLC?;CPU, vstupní a výstupní moduly, napájecí zdroj;Motor, převodovka, relé;Kondenzátor, odpor, cívka;Transformátor, jádro, kabel;Klávesnice, monitor, myš
Co je CPU v PLC?;Centrální procesorová jednotka, která zpracovává program;Napájecí zdroj;Výstupní modul;Chladicí jednotka;Paměťový čip
K čemu slouží vstupní modul v PLC?;Přijímá signály z čidel a tlačítek;Napájí celý systém;Spíná výstupy;Zobrazuje data;Ukládá program
K čemu slouží výstupní modul v PLC?;Ovládá akční členy (např. motory, ventily);Zpracovává program;Připojuje PC;Napájí vstupy;Ukládá historii
Jaký typ signálu může mít vstupní modul PLC?;Digitální nebo analogový;Pouze digitální;Pouze analogový;Mechanický;Zvukový
Jaký je hlavní rozdíl mezi digitálním a analogovým vstupem?;Digitální má 2 hodnoty, analogový spojité spektrum;Digitální měří napětí;Analogový je rychlejší;Digitální je starší;Analogový má jen 0 a 1
Co je výhoda PLC oproti klasickému řízení relé?;Snadná změna programu a menší poruchovost;Vyšší spotřeba;Lepší zvuk;Nižší výkon;Jednodušší drátování
Jak PLC vykonává program?;Skenuje vstupy, zpracuje logiku, nastaví výstupy;Řídí motor přímo;Generuje proud;Reguluje napětí;Změří odpor
K čemu slouží HMI zařízení?;Zajišťuje komunikaci mezi člověkem a PLC;Napájí senzory;Změří teplotu;Spíná výstupy;Zesiluje signál
Co je SCADA systém?;Nadřazený řídicí a monitorovací systém;Programovací jazyk;Záložní zdroj;Měřicí přístroj;Typ senzoru
K čemu slouží komunikační protokoly v PLC?;Umožňují výměnu dat mezi zařízeními;Zesilují signál;Zajišťují chlazení;Programují relé;Označují vodiče
Jaká je běžná struktura PLC programu?;Vstupy – zpracování – výstupy;Výstupy – vstupy – program;Kód – vstupy – záznam;Paměť – řízení – data;Nastavení – reset – start
Jak PLC detekuje změnu vstupu?;Pomocí pravidelného snímání (skenovací cyklus);Ručním nastavením;Přes analogové proudy;Přes internet;Hlasovým ovládáním
Jaké zařízení typicky komunikuje s PLC?;Čidla, motory, ventily, HMI;Televize;Mikrofon;Monitor;Mobilní telefon
`;
const csvDataPrvkyvObvodech = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je otevřený řídicí systém?;Systém bez zpětné vazby;Systém s adaptivními algoritmy;Systém řízený manuálně;Uzavřený regulační obvod;Systém s přímým měřením výstupu
Co je uzavřený řídicí systém?;Systém se zpětnou vazbou;Systém bez čidel;Ruční ovládání;Jednoduché spínání;Program bez výstupů
K čemu slouží zpětná vazba?;Porovnává výstup s požadovanou hodnotou;Napájí vstupy;Přepíná fáze;Ovládá pojistky;Zesiluje výstup
Jaký je rozdíl mezi otevřeným a uzavřeným systémem?;Uzavřený systém využívá zpětnou vazbu, otevřený ne;Otevřený má více snímačů;Uzavřený je rychlejší;Otevřený je spolehlivější;Uzavřený nevyžaduje napájení
Co je adaptivní řízení?;Schopnost systému přizpůsobit se změnám podmínek;Pevně nastavený program;Ruční ovládání;Řízení pouze snímačem;Neřízený systém
Kdy je vhodné použít otevřený systém?;Když je výstup snadno předvídatelný;Při složité regulaci;Při neznámém chování systému;Když je třeba vysoká přesnost;Když je více výstupních prvků
Kdy se používá uzavřený systém?;Při požadavku na přesnost a stabilitu;Při manuálním řízení;Při vysoké spotřebě;Když není zpětná vazba dostupná;Při nízké rychlosti procesu
Co je hlavním přínosem uzavřeného systému?;Přesné řízení a kompenzace odchylek;Zjednodušené zapojení;Nízká pořizovací cena;Rychlé přepínání obvodů;Jednoduchý program
Jaká zařízení mohou realizovat zpětnou vazbu?;Snímače a čidla;Relé a jističe;Motory a čerpadla;Kondenzátory;Pojistky
Co je řízená veličina?;Veličina, kterou chceme udržet na požadované hodnotě;Výstupní napětí;Proud motoru;Teplota vzduchu;Značka zařízení
Co je řízení podle programu?;Průběh řízení se řídí předem stanoveným algoritmem;Ruční ovládání systému;Nahodilé spínání;Řízení hlasem;Řízení barvou vodiče
Co je rušivá veličina?;Nepředvídaný vliv působící na řízený systém;Zpětná vazba;Požadovaná hodnota;Referenční signál;Výsledný proud
K čemu slouží regulátor v uzavřeném systému?;Porovnává žádanou a skutečnou hodnotu a upravuje výstup;Zesiluje napětí;Řídí barvu signálu;Napájí systém;Upravuje schéma zapojení
Jaká je funkce akčního členu?;Provádí zásah do řízené soustavy na základě výstupu regulátoru;Sníma signály;Zobrazuje údaje;Spouští PLC program;Ukládá data
Co je žádaná hodnota?;Hodnota, kterou chceme udržet v systému;Maximální hodnota napětí;Proud motoru;Počet výstupních členů;Značka systému
Jak se označuje řízení pomocí PLC?;Digitální automatické řízení;Mechanické řízení;Ruční logické řízení;Tepelné řízení;Bezdrátové řízení
Jaké výstupy může PLC ovládat v řízení?;Motory, ventily, světla, bzučáky;Jističe;Kondenzátory;Transformátory;Zenerovy diody
Jaká je výhoda adaptivního řízení?;Přizpůsobuje se změnám podmínek;Změní fyzickou konstrukci;Nepracuje s čidly;Je levnější než ostatní;Neobsahuje software
Které signály se běžně využívají pro zpětnou vazbu?;Analogové a digitální;Optické a zvukové;Mikrovlnné;Radiofrekvenční;Barevné
Jaká je role senzoru v uzavřeném systému?;Snímá skutečnou hodnotu řízené veličiny;Spouští celý obvod;Zesiluje výkon;Rozsvěcuje kontrolku;Napájí motor
`;
const csvDataSenzor = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je pneumatika v automatizaci?;Použití stlačeného vzduchu k přenosu a řízení energie;Použití kapaliny k přenosu energie;Použití elektroniky k řízení;Použití světla v řízení;Přenos tepla potrubím
Jaký je hlavní zdroj energie v pneumatických systémech?;Stlačený vzduch;Voda;Elektrický proud;Hydraulický olej;Sluneční energie
K čemu slouží kompresor v pneumatickém systému?;Stlačuje vzduch pro pohon systémů;Ochlazuje vzduch;Zesiluje signál;Změkčuje tlak;Napájí senzory
Co je pneumatický válec?;Pohon převádějící tlak vzduchu na mechanický pohyb;Měřící prvek tlaku;Zásobník vzduchu;Zesilovač signálu;Kabelový konektor
Jaký je rozdíl mezi jednočinným a dvojčinným válcem?;Jednočinný pracuje v jednom směru, dvojčinný v obou;Dvojčinný nepotřebuje vzduch;Jednočinný pracuje s vodou;Jednočinný má zpětnou pružinu;Dvojčinný je menší
K čemu slouží rozváděč v pneumatice?;Řídí směr proudění vzduchu;Napájí motor;Změří tlak;Ovládá PLC;Zobrazuje otáčky
Jak se značí rozváděč 5/2?;Má 5 připojovacích portů a 2 pracovní polohy;Má 2 porty a 5 poloh;Je řízený tlakem;Používá se jen pro jednočinné válce;Má jen výstup a vstup
Co je filtr v pneumatickém systému?;Čistí vzduch od nečistot a vody;Zvyšuje tlak;Snižuje průtok;Zesiluje signál;Zpětně odvádí vzduch
K čemu slouží regulátor tlaku?;Udržuje stálý výstupní tlak;Spíná vzduchové čerpadlo;Zesiluje signál;Řídí rychlost válce;Změkčuje vzduch
Jaký je účel maznice v pneumatice?;Zajišťuje mazání prvků stlačeným olejem;Zvyšuje tlak;Snižuje vlhkost;Chladí kompresor;Připojuje hadice
Co je pracovní médium pneumatického systému?;Vzduch;Voda;Olej;Plyn s vysokou teplotou;Pára
K čemu slouží tlumič hluku v pneumatice?;Snižuje hluk při vypouštění vzduchu;Zesiluje hluk;Zvýší tlak;Měří průtok;Spíná výstup
Co je rychlostní škrticí ventil?;Omezuje průtok vzduchu pro řízení rychlosti pohybu;Zvyšuje tlak;Zesiluje průtok;Měří teplotu;Ovládá napětí
Jaký prvek se používá k návratu pístu jednočinného válce?;Pružina;Přetlak;Elektrický impuls;Magnet;Třecí síla
K čemu slouží koncový spínač?;Signalizuje dosažení koncové polohy;Zastavuje činnost PLC;Zapíná kompresor;Změří tlak;Zvyšuje otáčky
Jaký je symbol pro válec v pneumatickém schématu?;Obdélník s čárou a pístnicí;Kolečko s šipkou;Čára s tečkou;Trojúhelník;Křížek
K čemu slouží škrticí ventil s obtokem?;Umožňuje regulaci rychlosti v obou směrech;Přepíná tlakové větve;Zajišťuje mazání;Označuje směr proudu;Změří tlak vzduchu
Jaké barvy se nejčastěji používají pro pneumatické hadice?;Modrá a černá;Červená a zelená;Žlutá a bílá;Oranžová a šedá;Fialová a růžová
Jak se značí směr proudění vzduchu ve schématech?;Šipkou;Kolečkem;Čarou s bodem;Obdélníkem;Trojúhelníkem
K čemu slouží přepínací ventil?;Mění směr proudění podle signálu;Přepíná fáze;Měří vlhkost;Spíná PLC;Vypíná kompresor
`;
const csvDataBinSenzory = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je hydraulika?;Použití kapaliny k přenosu a řízení energie;Použití vzduchu k řízení;Použití elektřiny k přenosu dat;Použití světla v senzorice;Přenos plynu pod tlakem
Jaké médium se používá v hydraulických systémech?;Hydraulický olej;Stlačený vzduch;Voda;Pára;Ethanol
K čemu slouží čerpadlo v hydraulickém systému?;Zajišťuje oběh kapaliny a tlak;Reguluje průtok;Měří tlak;Filtruje nečistoty;Vypíná systém
Co je hydraulický válec?;Pohon převádějící tlak kapaliny na mechanický pohyb;Nádrž na olej;Snímač tlaku;Těsnění systému;Rozvaděč
Jaký je rozdíl mezi jednočinným a dvojčinným hydraulickým válcem?;Jednočinný pracuje pouze v jednom směru, dvojčinný v obou;Dvojčinný nevyužívá kapalinu;Jednočinný má dva výstupy;Dvojčinný se vrací pružinou;Jednočinný je elektricky řízen
K čemu slouží rozváděč v hydraulice?;Řídí směr proudění kapaliny;Zesiluje tlak;Napájí systém;Spojuje obvody;Měří teplotu
Co je akumulátor v hydraulickém systému?;Zařízení pro ukládání energie ve formě stlačené kapaliny;Časovač;Filtr;Zásobník oleje;Elektronický měřič
K čemu slouží tlakový ventil?;Udržuje nebo omezuje tlak v systému;Napájí snímače;Změkčuje olej;Měří průtok;Spíná motor
Co je zpětný ventil?;Propouští kapalinu jen jedním směrem;Zesiluje tlak;Měří teplotu;Reguluje rychlost;Ovládá čerpadlo
Jak se značí hydraulické čerpadlo ve schématu?;Kolečko s šipkou;Obdélník s čarou;Trojúhelník;Křížek;Písmeno M
Co je škrticí ventil?;Reguluje průtok kapaliny a tím rychlost pohybu;Uzavírá obvod;Spíná výstupy;Zajišťuje mazání;Změkčuje tlak
K čemu slouží filtr v hydraulickém systému?;Odstraňuje nečistoty z kapaliny;Zesiluje tlak;Zpětně vypouští olej;Napájí ventily;Snižuje hluk
Jaký je význam pracovní kapaliny v systému?;Přenáší energii a mazání;Sníma teplotu;Zesiluje průtok;Snižuje hlučnost;Zajišťuje osvětlení
K čemu slouží tlakový spínač?;Spíná nebo vypíná zařízení podle nastaveného tlaku;Reguluje teplotu;Napájí senzory;Zajišťuje mazání;Řídí světla
Co je hydrogenerátor?;Zdroj hydraulické energie – čerpadlo;Zásobník oleje;Ovládací ventil;Regulátor otáček;Elektronická řídicí jednotka
Jaké výhody má hydraulický pohon?;Velká síla, plynulý pohyb, přesnost;Nízká hmotnost;Nízká cena;Vysoká hlučnost;Nízká účinnost
Co je nevýhoda hydrauliky?;Možnost úniku kapaliny a znečištění;Nízký výkon;Obtížná regulace;Náročná údržba;Slabá síla
K čemu slouží nádrž v hydraulickém systému?;Zásoba a chlazení kapaliny;Zvýšení tlaku;Ovládání ventilu;Snížení odporu;Spuštění motoru
Jaký je rozdíl mezi hydraulikou a pneumatikou?;Hydraulika používá kapaliny, pneumatika vzduch;Hydraulika je hlučnější;Pneumatika je pomalejší;Hydraulika nepřenáší sílu;Pneumatika má vyšší účinnost
Kde se používají hydraulické systémy?;Lisování, zvedání, těžké stroje;Lehká mechanika;Domácí spotřebiče;Signalizace;Osvětlení
`;
const csvDataPLC = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je měnič frekvence?;Zařízení měnící frekvenci a napětí pro řízení otáček motoru;Transformátor napětí;Jistič s regulací;Stykač pro přepínání fází;Zdroj konstantního proudu
K čemu se používá měnič frekvence?;K plynulé regulaci otáček elektromotoru;K měření frekvence;K ochraně proti zkratu;K řízení svítivosti LED;K přepínání obvodů
Jaké jsou výhody použití měniče frekvence?;Úspora energie, plynulý rozběh a brzdění, řízení otáček;Vyšší spotřeba, rychlejší záběh;Zesílení proudu;Zmenšení rozměrů motoru;Zvýšení hlučnosti
Jaký je princip činnosti měniče frekvence?;Nejprve usměrnění střídavého proudu, pak změna frekvence a napětí;Zesílení proudu pomocí relé;Přepínání fází motoru;Změna směru otáček;Vypínání a zapínání motoru
Kde se měniče frekvence nejčastěji používají?;V pohonech čerpadel, ventilátorů, dopravníků;V osvětlovacích obvodech;V topných tělesech;V signálních systémech;V nouzových zdrojích
Jaký typ motoru lze ovládat měničem frekvence?;Asynchronní motor;Krokový motor;Stejnosměrný motor;Lineární motor;Spalovací motor
Jak měnič ovlivňuje rozběh motoru?;Zajišťuje plynulý a řízený náběh bez proudových rázů;Zrychluje náběh na maximum;Zvyšuje počáteční proud;Odpojí motor při zátěži;Změní směr otáčení
Co je výstupní frekvence měniče?;Frekvence řízená dle požadavků aplikace;Frekvence ze sítě;Konstantní 50 Hz;Frekvence snímače;Digitální signál
Jaký parametr měniče ovlivňuje maximální otáčky motoru?;Nastavená výstupní frekvence;Vstupní napětí;Typ pojistky;Značka motoru;Počet relé
Co je spínaný zdroj?;Napájecí zdroj využívající vysokofrekvenční spínání;Zdroj s klasickým transformátorem;Zdroj s nízkým napětím;Bateriové napájení;Stabilizátor proudu
Jaká je výhoda spínaného zdroje oproti lineárnímu?;Menší rozměry, vyšší účinnost, nižší hmotnost;Nižší účinnost, větší hlučnost;Větší velikost;Pomalejší reakce;Vyšší zahřívání
Kde se spínané zdroje nejčastěji používají?;V napájení elektronických zařízení a PLC;V topení;Ve svítidlech;V mechanických převodovkách;V hydraulice
Jaký je hlavní princip spínaného zdroje?;Rychlé zapínání a vypínání proudu přes tranzistor;Zesílení střídavého proudu;Transformace bez spínání;Ruční spínání;Zpomalení napětí
Jak se chrání měnič frekvence před přetížením?;Pomocí elektronické ochrany a nastavení limitů;Vypínačem;Pojistkou s vysokou hodnotou;Optickým čidlem;Teplotní pojistkou
Co je EMC filtr?;Filtr omezující elektromagnetické rušení;Filtr na prach;Vodní filtr;Zesilovač signálu;Zdroj napětí
Proč je důležité odrušení měniče?;Kvůli ochraně ostatních zařízení před rušením;Pro zlepšení chlazení;Pro zrychlení odezvy;Kvůli vyššímu napětí;Pro zvýšení účinnosti
Jaké výstupní napětí má typický spínaný zdroj pro PLC?;24 V DC;230 V AC;12 V AC;5 V DC;48 V AC
Jaké jsou hlavní části měniče frekvence?;Usměrňovač, meziobvod, střídač;Transformátor, filtr, relé;Kondenzátor, stykač, jistič;Pojistka, čidlo, chladič;Motor, řemen, ventil
Co je důležité při výběru měniče?;Výkon, napětí, proud motoru, způsob řízení;Barva zařízení;Typ krytí;Typ ovládacího panelu;Délka kabeláže
Jaký je rozdíl mezi měničem a frekvenčním měřičem?;Měnič řídí frekvenci, měřič ji pouze měří;Měřič mění napětí;Měnič měří proud;Měřič reguluje motor;Měnič měří frekvenci bez regulace
`;
const csvDataSekvencni = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je elektrický pohon?;Soustava zařízení přeměňujících elektrickou energii na mechanickou;Zařízení pro přenos signálu;Proudový zdroj;Spínací obvod;Snímač polohy
Jaké hlavní části má elektrický pohon?;Motor, měnič, převodovka, řídicí jednotka;Stykač, relé, senzor;Baterie, jistič, svorkovnice;Zásuvka, kabel, tlačítko;PLC, monitor, čidlo
K čemu slouží převodovka v pohonu?;Upravuje otáčky a moment motoru;Zvyšuje napětí;Měří otáčky;Zesiluje proud;Stabilizuje frekvenci
Jaký je rozdíl mezi stejnosměrným a střídavým pohonem?;Stejnosměrný má konstantní směr proudu, střídavý mění směr;Střídavý je méně účinný;Stejnosměrný má vyšší hlučnost;Střídavý je pouze do 24V;Stejnosměrný nepotřebuje regulaci
Jak se mění otáčky stejnosměrného motoru?;Změnou napětí;Změnou odporu;Změnou směru proudu;Změnou teploty;Změnou délky kabelu
Jak se mění otáčky střídavého motoru?;Změnou frekvence napájení;Změnou typu kabelu;Změnou odporu;Změnou fáze;Změnou barvy vodiče
Co je momentová charakteristika?;Závislost momentu na otáčkách;Závislost proudu na napětí;Změna rychlosti pohonu;Teplotní závislost motoru;Zatížení kabelu
Jaký je rozdíl mezi tvrdou a měkkou momentovou charakteristikou?;Tvrdá má malou změnu otáček při změně zatížení, měkká větší;Měkká je přesnější;Tvrdá má vyšší výkon;Měkká se nepoužívá;Tvrdá je jen pro velké motory
Co je to řízení otáček?;Úprava rychlosti motoru podle požadavků;Zapínání motoru;Ovládání stykače;Změna směru otáčení;Přepínání fází
Co je regulace momentu?;Řízení síly otáčení motoru;Změna směru proudu;Změna velikosti motoru;Změna napětí sítě;Změna otáček bez zatížení
Co je reverzace pohonu?;Změna směru otáčení motoru;Přepnutí výkonu;Změna typu motoru;Změna velikosti napětí;Odpojení napájení
Jak se značí motor ve schématu?;M;R;T;K;V
K čemu slouží momentová ochrana?;Chrání motor před přetížením;Zvyšuje výkon;Zkracuje rozběh;Zesiluje signál;Zabraňuje zpětnému chodu
Co je výstupní charakteristika motoru?;Závislost výkonu na zatížení;Závislost proudu na teplotě;Vztah mezi napětím a proudem;Přímé napájení;Výkonové číslo výrobce
K čemu slouží měnič u pohonu?;Reguluje napětí a frekvenci pro motor;Zesiluje napětí;Ovládá jistič;Napájí PLC;Spíná osvětlení
Jaká je výhoda elektrického pohonu oproti mechanickému?;Snadná regulace a automatizace;Nižší výkon;Větší rozměry;Vyšší hlučnost;Složitější údržba
Co ovlivňuje volbu typu pohonu?;Požadovaný moment, otáčky, způsob regulace, prostředí;Barva motoru;Typ pojistky;Značka výrobce;Způsob chlazení
Jaký typ motoru je často použit v plynulé regulaci otáček?;Asynchronní motor s měničem;Stejnosměrný motor bez regulace;Krokový motor;Motor s relé;Lineární motor
Kdy se používá servopohon?;Při požadavku na vysokou přesnost a dynamiku;Při vysokém hluku;Při nízkém napětí;Při trvalém výkonu;Při absenci řízení
Co je funkce snímače otáček v pohonu?;Měří aktuální otáčky motoru pro zpětnou vazbu;Reguluje napětí;Přepíná fáze;Chladí motor;Napájí pohon
`;
const csvDataMereni = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
K čemu slouží signalizace ve výrobních systémech?;Informuje obsluhu o stavech zařízení;Zesiluje výkon stroje;Zastavuje výrobu;Napájí senzory;Ovládá osvětlení
Jaké základní typy signalizace známe?;Optická, akustická, kombinovaná;Elektrická, pneumatická;Ruční, automatická;Světelná, teplotní;Mechanická, digitální
Co je optická signalizace?;Vizuální indikace stavu pomocí světla;Zvuková výstraha;Mechanický pohyb;Změna napětí;Zobrazování dat na monitoru
K čemu slouží akustická signalizace?;Upozorňuje zvukem na změnu nebo poruchu;Spíná motory;Měří hladinu;Napájí zařízení;Zesiluje signál
Jaké barvy se běžně používají pro signalizační světla?;Červená, žlutá, zelená, modrá, bílá;Růžová, oranžová, černá;Fialová, tyrkysová;Hnědá, šedá;Zlatá, stříbrná
Co signalizuje červené světlo?;Poruchu nebo nouzový stav;Normální provoz;Připravenost zařízení;Zapnutí systému;Žádný stav
Co signalizuje zelené světlo?;Provozní stav;Poruchu;Zastavení;Chybu systému;Resetování stroje
Co je to ovládací pult?;Zařízení umožňující obsluze ovládat technologii;Rozvodná skříň;Elektronická pojistka;Bezpečnostní zámek;Zdroj napájení
Jaké prvky obsahuje ovládací pult?;Tlačítka, přepínače, displeje, kontrolky;Senzory, ventily, čerpadla;Motor, převodovku, řemen;Jističe, pojistky, zásuvky;Kamery, mikrofony, reproduktory
K čemu slouží tlačítka START a STOP?;START spouští a STOP vypíná zařízení;START mění směr chodu;STOP přepíná režim;START nastavuje časovač;STOP aktivuje chlazení
Co je aretace tlačítka?;Zajištění v sepnuté poloze;Blokace proti použití;Odpojení od systému;Tlačítko se samo vrací;Změna funkce
K čemu slouží přepínač režimů?;Přepíná mezi automatickým a ručním řízením;Spouští alarm;Změní teplotu;Zesiluje signál;Změní barvu světla
Co je HMI panel?;Zařízení umožňující komunikaci člověka se strojem;Signalizační věž;Zdroj napětí;Regulační ventil;Kamerový systém
Jaká je výhoda HMI panelu?;Zobrazuje aktuální stav, umožňuje nastavení a řízení;Zmenšuje zařízení;Zvyšuje hlučnost;Zajišťuje napájení;Měří proud
Co znamená barevný displej na HMI?;Zobrazení stavu zařízení pomocí barev a symbolů;Pouze číselné údaje;Změnu rychlosti;Spuštění motoru;Přepínání režimů
Jaká je funkce kontrolky přítomnosti napětí?;Signalizuje, že je zařízení pod napětím;Měří napětí;Spouští alarm;Zhasíná světlo;Zpětně napájí senzor
K čemu slouží maják (signalizační věž)?;Zobrazuje provozní stavy různými barvami světla;Spíná silové obvody;Napájí PLC;Změří teplotu;Zesiluje signál
Jaké zvuky vydává akustická signalizace?;Houkačky, bzučáky, píšťalky;Melodie;Hlasové povely;Ultrazvuk;Vibrační tóny
Kde se nachází ovládací prvky ve výrobních systémech?;Na ovládacím panelu, HMI nebo rozvaděči;Uvnitř motoru;Na kabelu;Ve stykači;V PLC modulu
Proč je důležitá signalizace ve výrobě?;Zvyšuje bezpečnost a přehled o provozu;Zvyšuje hlučnost;Zvyšuje spotřebu energie;Zmenšuje výkon;Omezuje řízení
`;
const csvDataTypy = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je vizualizace technologického procesu?;Zobrazení stavu a průběhu procesu na monitoru nebo panelu;Ovládání světel v hale;Měření napětí na čidle;Zesílení signálu v PLC;Změna teploty v motoru
K čemu slouží vizualizační systémy?;Ke sledování a řízení technologických procesů;K napájení čidel;Ke chlazení zařízení;K programování PLC;K řízení motoru
Co je SCADA?;Nadřazený řídicí a monitorovací systém;Jednoduché reléové řízení;Snímač teploty;Typ pohonu;Záložní zdroj energie
Jaké funkce má SCADA systém?;Sběr, přenos, zobrazení a archivace dat, ovládání;Pouze ovládání zařízení;Pouze měření napětí;Zesílení signálu;Zálohování napětí
Co je HMI?;Rozhraní mezi člověkem a strojem;Motor;Pojistka;Programovací jazyk;Typ čidla
Jaká zařízení tvoří vizualizační systém?;HMI panel, řídicí jednotka, senzory, zobrazovač;Motory, převodovky, PLC;Senzory, čidla, pneumatika;Stykače, relé, jističe;Kondenzátory, odpory, svorky
Jak SCADA získává data z výrobního procesu?;Z PLC a dalších zařízení pomocí komunikačních protokolů;Pomocí mikrovln;Z USB disku;Hlasovým vstupem;Z cloudového úložiště
Jaká je výhoda vizualizace?;Přehledné zobrazení a možnost dálkového řízení;Nižší cena zařízení;Rychlejší signál;Nižší spotřeba;Menší rozměry zařízení
Co je trend v SCADA systému?;Grafické znázornění vývoje veličiny v čase;Změna barvy panelu;Změna směru toku dat;Změna rozměru displeje;Náhodné hodnoty
K čemu slouží alarmy ve SCADA?;Upozorňují na mimořádné nebo chybové stavy;Zvýší napětí v systému;Měří teplotu zařízení;Upravují program;Vypínají systém
Jaké barvy se běžně používají ve SCADA vizualizaci?;Zelená – OK, červená – porucha, žlutá – varování;Modrá – nečinnost, růžová – reset;Fialová – aktivní, bílá – chyba;Oranžová – start, černá – konec;Zlatá – výkon, stříbrná – útlum
Jak se ovládá zařízení přes SCADA?;Kliknutím na grafické prvky na obrazovce;Přes externí čidla;Pomocí hlasových příkazů;Z USB tlačítka;Pomocí optických kabelů
Co je archivace dat?;Ukládání historických hodnot pro analýzu a dohled;Mazání starých dat;Změna vstupů;Ovládání senzorů;Spínání alarmů
Kde se nejčastěji používá SCADA?;V průmyslové automatizaci, energetice, dopravě;V domácnostech;Ve školství;V klimatizacích;V malých spotřebičích
Jaký je rozdíl mezi SCADA a HMI?;SCADA je rozsáhlejší systém, HMI je jeho lokální část;HMI ukládá data, SCADA je zobrazuje;SCADA je v PLC, HMI v rozvaděči;SCADA ovládá čidla, HMI motor;HMI je nadřazený SCADA
Jak SCADA přispívá k bezpečnosti provozu?;Upozorňuje na chyby a umožňuje včasný zásah;Zvýší výkon motoru;Ovládá světla;Zesiluje proud;Změní barvu ovladačů
Jaká data zobrazuje SCADA?;Stavy zařízení, hodnoty veličin, alarmy, trendy;Časy příchodů zaměstnanců;Teplotu vzduchu v místnosti;Barevnost signálu;Rozměry rozvaděče
Co je dálkový dohled ve SCADA?;Možnost sledování a řízení procesu přes síť;Pozorování kamerou;Napájení z jiného místa;Změna barev displeje;Přenos optickým kabelem
Jaký je význam vizualizace pro údržbu?;Umožňuje rychle identifikovat závadu a zasáhnout;Zastavuje zařízení;Mění program;Zvyšuje proud;Snižuje tlak
Jaká je výhoda archivace dat?;Umožňuje analýzu trendů a optimalizaci provozu;Snižuje nároky na operátora;Ukládá hesla;Zrychluje řízení;Zvyšuje spotřebu
`;
const csvDataRoboty = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Proč je důležitá bezpečnost v automatizaci?;Zajišťuje ochranu osob, zařízení i dat;Zvyšuje spotřebu energie;Snižuje rychlost systému;Zesiluje signál;Zkracuje program
Co je normotvorná organizace?;Instituce, která vytváří technické a bezpečnostní normy;Výrobce senzorů;Škola techniky;Dodavatel PLC;Distribuční firma
Jaké normy se používají v automatizaci?;ISO, IEC, EN;DIN, JIS, JIT;EU, USA, ASIA;PLC, SCADA, HMI;RGB, CMYK, HEX
Co znamená značení CE?;Shoda s evropskými normami a bezpečnostními požadavky;Česká elektrotechnika;Certifikace zařízení;Připojení k síti;Označení výrobce
K čemu slouží bezpečnostní relé?;Zajišťuje funkci bezpečnostního obvodu a nouzové vypnutí;Přepíná směry;Zesiluje napětí;Zpožďuje proud;Řídí barvu světel
Co je bezpečnostní okruh?;Obvod sloužící k vypnutí systému při nebezpečí;Záložní napájení;Zesilovač signálu;Kódovaný vstup;Zpětná vazba
Co je STOP tlačítko?;Prvek pro okamžité nouzové zastavení zařízení;Tlačítko pro start systému;Přepínač režimu;Ovladač teploty;Napájecí zdroj
Jaká je barva nouzového STOP tlačítka?;Červená;Zelená;Modrá;Žlutá;Bílá
Jak se značí bezpečnostní obvody ve výkresech?;Silnější čarou nebo odlišnou barvou;Dvojitou čárou;Přerušovaně;Tečkovaně;Barevně neutrálně
Co znamená kategorie bezpečnosti?;Určuje úroveň bezpečnostního systému dle rizika;Vyjadřuje cenu zařízení;Značí typ motoru;Měří teplotu;Označuje druh vstupu
K čemu slouží světelná závora?;Detekuje vstup do nebezpečné zóny;Ovládá motor;Změří světelný tok;Napájí čidla;Reguluje napětí
Co je bezpečnostní dveřní spínač?;Snímač, který detekuje otevření dveří do nebezpečné části;Ovladač dveří;Magnetický spínač;Světelný senzor;Zvukový bzučák
Co je PL (Performance Level)?;Úroveň výkonnosti bezpečnostního systému;Míra spotřeby;Hluk zařízení;Teplotní odchylka;Zatížení motoru
K čemu slouží bezpečnostní skener?;Detekuje přítomnost osob ve vymezené oblasti;Skenuje QR kódy;Sníma barvy;Měří vzdálenost;Zesiluje signál
Jaký je účel krytování pohyblivých částí?;Zamezuje kontaktu s nebezpečnými částmi;Zvyšuje teplotu;Napájí motor;Zmenšuje rozměry;Zvyšuje výkon
Co je funkční bezpečnost?;Zajištění správné funkce zařízení i při poruše;Změna programu při chybě;Přepnutí zařízení do režimu spánku;Zvýšení rychlosti;Změna barvy HMI
Jaký je význam zkratky SIL?;Safety Integrity Level – úroveň bezpečnostní integrity;Standard Indukce Logiky;Systém Informačního Logování;Signalizační Inteligentní Linka;Střední Indikátor Logiky
Co je bezpečnostní PLC?;PLC určené pro bezpečnostní funkce a řízení;Záložní PLC jednotka;PLC s rozšířenou pamětí;PLC bez výstupních modulů;PLC s napěťovou ochranou
K čemu slouží mechanická blokace?;Zabrání pohybu nebo spuštění zařízení bez povolení;Uzamkne kryt;Změní směr motoru;Zpětně napájí systém;Změří napětí
Jak se zajišťuje ochrana proti přepětí?;Použitím přepěťových ochran a správného uzemnění;Zvýšením napětí;Zapojením do série;Použitím barevných vodičů;Zesílením proudových obvodů
`;
const csvDataGraficke = `Otázka;Správná odpověď;Možnost 1;Možnost 2;Možnost 3;Možnost 4
Co je Průmysl 4.0?;Koncept digitalizace a automatizace výroby propojené sítí;Mechanizace výrobních procesů;Použití reléového řízení;Zavádění ruční práce;Zesílení signálu ve výrobě
Jaký je hlavní cíl Průmyslu 4.0?;Zvýšení efektivity, flexibility a automatizace výroby;Snížení počtu zařízení;Zvýšení spotřeby energie;Zesílení světelného výkonu;Omezení řídicí techniky
Co znamená zkratka IoT?;Internet věcí;Interní operace technologie;Informační obvod terminálu;Indikátor otáček;Izolace optických toků
Jakou funkci má IoT v průmyslu?;Propojení zařízení a sběr dat pro efektivní řízení;Zajištění chlazení;Zvýšení napětí;Zesílení proudového toku;Rozpojení sítě
Co je digitální dvojče?;Virtuální model reálného systému pro simulaci a řízení;Záložní řídicí jednotka;Dvojice čidel;Kopie PLC programu;Soubor dat v cloudu
K čemu slouží Big Data v automatizaci?;K analýze velkého množství výrobních dat;K záloze programů;K záznamu hlasu;K ovládání motoru;K úspoře energie
Jaký je význam cloudu v automatizaci?;Ukládání a sdílení dat mezi zařízeními a systémy;Zvýšení proudu;Zesílení signálu;Ochrana proti přepětí;Ruční ovládání stroje
Co znamená prediktivní údržba?;Údržba na základě analýzy dat a předpovědi poruch;Ruční plánování oprav;Náhodná kontrola zařízení;Časově omezená oprava;Výměna podle záruky
Jaká zařízení se běžně připojují k IoT?;Senzory, HMI, PLC, motory;Stykače, relé, jističe;Ovladače, žárovky, vypínače;Kabely, konektory, svorky;Pojistky, cívky, vodiče
Jaký přínos má Průmysl 4.0 pro výrobní firmy?;Vyšší produktivita, menší chybovost, sledovatelnost;Větší spotřeba energie;Zvýšení hluku;Zpomalení výroby;Ruční ovládání strojů
Co je kyber-fyzikální systém (CPS)?;Propojení fyzického systému s digitálním řízením;Bezdrátová kamera;Výkonný motor;Bezpečnostní čidlo;Ruční ovladač
K čemu slouží senzory v Průmyslu 4.0?;Získávají data z prostředí pro další zpracování;Spínají motor;Zesilují proud;Napájí zařízení;Změkčují vibrace
Jaký je rozdíl mezi klasickým a chytrým řízením?;Chytré řízení využívá dat, analýzy a síťovou komunikaci;Klasické je rychlejší;Chytré je vždy levnější;Klasické nepotřebuje čidla;Chytré funguje bez PLC
Kde se ukládají data v systému Průmyslu 4.0?;Na serverech nebo v cloudu;V baterii;V senzoru;Na disku PLC;V místní síti
Jaký je význam pojmu interoperabilita?;Schopnost různých zařízení spolu komunikovat;Schopnost systému měřit teplotu;Změna frekvence signálu;Změna směru výroby;Zvýšení napětí ve vedení
Co je OPC UA?;Komunikační protokol pro přenos dat v automatizaci;Programovací jazyk PLC;Typ relé;Způsob chlazení rozvaděče;Druh motoru
Jaký je význam umělé inteligence v automatizaci?;Optimalizace řízení a rozhodování na základě dat;Náhrada čidel;Zvýšení hlučnosti systému;Ruční řízení;Změna barvy displeje
Co znamená konektivita v Průmyslu 4.0?;Možnost propojení zařízení a systémů;Spínání relé;Napájení přes konektor;Zesílení signálu;Změna teploty
K čemu slouží digitální transformace?;Zavádění digitálních technologií do výrobních procesů;Změna analogového signálu;Spouštění motoru;Uložení programu;Změna rychlosti otáček
Jaké jsou klíčové technologie Průmyslu 4.0?;IoT, cloud, AI, Big Data, CPS;Stykače, pojistky, senzory;PLC, HMI, relé;Jističe, frekvenční měniče;Motory, řemeny, převodovky
`;
// --- Data Structure for Questions ---
let data = {
    "Programování": {
        "Základní pojmy z algoritmizace a programování": [],
        "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio": [],
        "C# strukturované příkazy větvení, složený příkaz": [],
        "C# strukturované příkazy cyklů": [],
        "C# jednoduché datové typy, řetězec; operace": [],
        "C# strukturované datové typy (kolekce)": [],
        "C# práce se soubory a dialogovými okny": [],
        "C# Windows Forms Application, grafické ovládací prvky, události": [],
        "C# ladění programu, druhy chyb, ošetřování výjimek": [],
        "C# namespace Drawing – nástroje pro programování grafiky": [],
        "C# metody, jmenné prostory": [],
        "C# základy OOP": [],
        "Souhrnné opakování": []
    },
    "Počítačové sítě": {
        "Topologie sítí": [],
        "Komunikace v síti": [],
        "Pasivní prvky": [],
        "Aktivní prvky": [],
        "Návrh a realizace sítě": [],
        "Bezdrátové technologie": [],
        "Připojení počítače k lokální síti": [],
        "Připojení k internetu": [],
        "Souhrnné opakování": []
    },
    "Elektronika": {
        "Základy digitální techniky": [],
        "Integrované polovodičové prvky": [],
        "Řídící jednotka CM-530": [],
        "Mikroprocesor Arduino": [],
        "Programování mikroprocesoru Arduino": [],
        "Počítač": [],
        "Procesor": [],
        "Základní deska": [],
        "Polovodičové paměti": [],
        "Zařízení pro uložení dat": [],
        "Grafický a zobrazovací systém": [],
        "Digitalizace obrazu a tisk": [],
        "Napájecí zdroje": [],
        "Diferenciální parametry tranzistoru": [],
        "Operační zesilovače": [],
        "Přenos informací": [],
        "Zesilovače": [],
        "Frekvenční filtr typu dolní propust": [],
        "Frekvenční filtr typu horní propust": [],
        "Sériový a paralelní obvod RL, RC": [],
        "Souhrnné opakování": []
    },
    "Automatizace": {
        "Regulační obvody": [],
        "Technické prostředky": [],
        "Logická zařízení": [],
        "Druhy výkresů v AT": [],
        "Elektrické rozvody v průmyslu": [],
        "Regulační pohony a orgány": [],
        "Programovatelný automat": [],
        "Relé impulzní": [],
        "Převodníky a přizpůsobovací členy": [],
        "Výstavba regulačního obvodu": [],
        "Malé řídící systémy": [],
        "Prvky používané v obvodech AT": [],
        "Senzory - rozdělení": [],
        "Analogové a binární senzory": [],
        "PLC": [],
        "Sekvenční logické obvody": [],
        "Měření neelektrických veličin": [],
        "Typy regulačních obvodů": [],
        "Roboty a jejich aplikace": [],
        "Grafické znázornění stavů": []
}
};

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
        levels: [2, 4, 6, 8, 10, 12, 15, 18, 20, 25],
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

let db;
let auth;
let currentUser = null; // Holds the UID of the logged-in user
let submitBtn = null; // Reference to the submit button during a test


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
    testsTodayEl, correctAnswersEl, successRateEl, dayStreakEl, totalXpEl, achievementListEl, themeToggleButton; // Added elements for stats


// --- Wait for DOM to Load ---
document.addEventListener('DOMContentLoaded', () => {
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
    // Stat elements
    testsTodayEl = document.getElementById('tests-today');
    correctAnswersEl = document.getElementById('correct-answers');
    successRateEl = document.getElementById('success-rate');
    dayStreakEl = document.getElementById('day-streak'); // Get element for stats section too
    totalXpEl = document.getElementById('total-xp'); // Get element for stats section too


    // --- Initialize Firebase ---
    try {
        if (typeof firebase === 'undefined') {
            throw new Error("Firebase library not loaded!");
        }
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        auth = firebase.auth();
        console.log("Firebase Initialized");

        // --- Initialize UI and Parse Data ---
        parseAllCSVData(); // Parse all static CSV data
        initializeSubjects(); // Populate subject dropdown

        // --- Attach Event Listeners ---
        setupEventListeners();

        // --- Firebase Auth Listener ---
        auth.onAuthStateChanged(async (user) => { // Make listener async
            if (user) {
                currentUser = user.uid;
                console.log('Auth State Changed: Logged in as', user.email);
                authLink.textContent = "Odhlásit se";
                showDashboard(); // Show dashboard first
                await loadUserDataFromFirestore(currentUser, db); // Load data and THEN update calendar
            } else {
                currentUser = null;
                console.log('Auth State Changed: Logged out');
                authLink.textContent = "Přihlásit se";
                clearUserDataUI(); // Clear displayed stats
                showLogin(); // Show login screen
                generateCalendar(currentYear, currentMonth, db); // Generate empty calendar
            }
        });

    } catch (error) {
        console.error("Error initializing Firebase or setting up:", error);
        alert("Došlo k chybě při inicializaci aplikace. Zkontrolujte konzoli pro více detailů.");
        // Disable parts of the UI if needed
        if(loginSection) loginSection.innerHTML = '<h1>Chyba načítání aplikace</h1><p>Nelze se připojit k Firebase.</p>';
        if(dashboardSection) dashboardSection.style.display = 'none';
        if(testSection) testSection.style.display = 'none';
        if(progressSection) progressSection.style.display = 'none';
    }
}); // End DOMContentLoaded

// --- Firebase Data Functions ---

/**
 * Fetches user data from Firestore, initializing if it doesn't exist.
 * @param {string} uid - The user's ID.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<object|null>} A promise resolving to the user data object or null on error.
 */
async function getUserData(uid, db) {
    if (!uid || !db) {
        console.warn("getUserData called without uid or db instance.");
        return null;
    }
    try {
        const docRef = db.collection("users").doc(uid);
        const doc = await docRef.get();

        if (doc.exists) {
            const data = doc.data();
            // Ensure essential structures exist after retrieval
            data.progress = data.progress || {};
            data.achievements = data.achievements || {};
            data.activity = data.activity || {};
            data.completedTopics = data.completedTopics || []; // Should be stored as array
            console.log("Fetched user data:", data);
            return data;
        } else {
            console.log("No user document found for uid:", uid, ". Creating default.");
            // Create and return a default user data structure
            const defaultUserData = {
                testsToday: 0,
                correctAnswers: 0, // Consider if this should be total correct ever or today's
                progress: {},
                totalTestsCompleted: 0,
                averageSuccessRate: 0,
                dayStreak: 0,
                totalXP: 0,
                lastCompletedTestDate: null, // Stores date string of last >80% test
                flawlessTestCount: 0,
                winningStreakCount: 0,
                completedTopics: [], // Store as array in Firestore
                achievements: { // Initialize all achievements to level 0
                    xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                    topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                    earlyBirdCount: 0, // Specific counts if needed
                    nightOwlCount: 0
                 },
                activity: {} // Activity log for calendar { year: { month: { day: count } } }
            };
            // Save the default data for the new user
            await saveUserData(uid, defaultUserData, db); // Use saveUserData to ensure correct format
            return defaultUserData;
        }
    } catch (error) {
        console.error("Error getting user document:", error);
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
 * Saves user data to Firestore, ensuring correct data types.
 * @param {string} uid - The user's ID.
 * @param {object} data - The user data object to save.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<void>}
 */
async function saveUserData(uid, data, db) {
    if (!uid || !db) {
        console.error("saveUserData called without uid or db instance!");
        return;
    }

    // --- Data Sanitization/Formatting before Saving ---
    // Ensure completedTopics is an Array
    if (data.completedTopics instanceof Set) {
        data.completedTopics = Array.from(data.completedTopics);
    } else if (!Array.isArray(data.completedTopics)) {
        console.warn("completedTopics was not a Set or Array, saving as empty array.");
        data.completedTopics = [];
    }

    // Ensure activity is a valid object
    if (typeof data.activity !== 'object' || data.activity === null) {
        console.warn("Activity data structure incorrect, resetting.");
        data.activity = {};
    }
     // Ensure achievements is a valid object
     if (typeof data.achievements !== 'object' || data.achievements === null) {
         console.warn("Achievements data structure incorrect, resetting.");
         data.achievements = {}; // Or initialize with defaults if preferred
     }
     // Ensure progress is a valid object
     if (typeof data.progress !== 'object' || data.progress === null) {
         console.warn("Progress data structure incorrect, resetting.");
         data.progress = {};
     }


    try {
        // Use set with merge:true to update or create the document
        await db.collection("users").doc(uid).set(data, { merge: true });
        console.log("User document successfully written/merged!");
    } catch (error) {
        console.error("Error writing user document:", error);
        // Consider notifying the user about the save failure
        alert("Chyba při ukládání dat. Zkuste to prosím znovu.");
    }
}
async function loadUserDataFromFirestore(uid, db) {
    console.log("Attempting to load data for user:", uid);
    if (!uid || !db) {
        console.error("loadUserDataFromFirestore: Missing UID or DB instance.");
        return; // Exit if essential parameters are missing
    }

    try {
        let userData = await getUserData(uid, db); // Fetch data (this function now handles defaults if doc doesn't exist)

        if (userData) {
            console.log("User data loaded:", userData);
            const today = new Date();
            const todayDateString = today.toDateString();
            let needsSave = false; // Flag to check if we need to save updated daily stats

            console.log("Before Daily Reset Check:", {
                lastActivity: userData.lastActivityDate,
                today: todayDateString,
                testsToday: userData.testsToday,
                correctToday: userData.correctAnswersToday
            });

            // --- Daily Reset Check ---
            // Check if the last recorded activity date is different from today
            if (userData.lastActivityDate !== todayDateString) {
                console.log(`New day detected (Last: ${userData.lastActivityDate}, Today: ${todayDateString}). Resetting daily stats.`);
                userData.testsToday = 0;
                userData.correctAnswersToday = 0; // Reset today's correct answers counter
                userData.lastActivityDate = todayDateString;
                needsSave = true;
            }
            userData.completedTopics = new Set(userData.completedTopics || []);

            if (needsSave) {
                console.log("Saving updated daily stats after reset...");
                // Ensure the Set is converted back to Array before saving
                const dataToSave = { ...userData, completedTopics: Array.from(userData.completedTopics) };
                await saveUserData(uid, dataToSave, db);
                console.log("Daily stats saved.");
                // Note: userData object in memory is already updated.
            }

            // --- Update UI Elements ---
            // Update all relevant UI sections with the fetched (and potentially reset) data           
            updateStatisticsSection(userData); // Updates top dashboard cards and progress section summaries
            updateDashboard(userData);         // Updates subject progress cards
            updateProgressSection(userData);   // Updates the detailed progress table
            updateAchievementsUI(userData);
            await generateCalendar(currentYear, currentMonth, db); 

            console.log("UI updated after loading user data.");

        } else {
            // This case should technically be handled by getUserData returning defaults,
            // but we keep a fallback log here.
            console.warn('loadUserDataFromFirestore: getUserData returned null/undefined unexpectedly.');
            clearUserDataUI(); // Clear UI elements to show logged-out state
            await generateCalendar(currentYear, currentMonth, db); // Generate empty calendar
        }
    } catch (error) {
        console.error("Error in loadUserDataFromFirestore:", error);
        alert("Nastala chyba při načítání uživatelských dat.");
        // Optionally clear UI or show specific error message
        clearUserDataUI();
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
            case 'xpCollector':   return userData?.totalXP || 0;
            case 'unstoppable':   return userData?.dayStreak || 0;
            case 'flawless':      return userData?.flawlessTestCount || 0;
            case 'winningStreak': return userData?.winningStreakCount || 0;
            case 'topicMaster':   return (userData?.completedTopics instanceof Set ? userData.completedTopics.size : (userData?.completedTopics?.length || 0)); // Handle Set or Array
            case 'earlyBird':     return achievementsData?.earlyBirdCount || 0;
            case 'nightOwl':      return achievementsData?.nightOwlCount || 0;
            case 'marathoner':    return userData?.testsToday || 0; 
            default:              return 0;
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
    if (!authInstance || !emailInput || !passwordInput || !loginMessage) return;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
        loginMessage.textContent = "Prosím zadejte email i heslo.";
        return;
    }
    if (password.length < 6) {
        loginMessage.textContent = "Heslo musí mít alespoň 6 znaků.";
        return;
    }

    loginMessage.textContent = "Registruji..."; // Feedback
    try {
        await authInstance.createUserWithEmailAndPassword(email, password);
        // NOTE: onAuthStateChanged will handle the login flow after successful registration
        loginMessage.textContent = "Registrace proběhla úspěšně. Přihlašuji...";
        // Optional: Clear form
        // loginForm.reset();
    } catch (error) {
        console.error("Registration error:", error);
        loginMessage.textContent = "Chyba registrace: " + mapAuthError(error); // Use helper for user-friendly message
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
    if(loginSection) loginSection.style.display = 'flex';
    if(dashboardSection) dashboardSection.style.display = 'none';
    if(testSection) testSection.style.display = 'none';
    if(progressSection) progressSection.style.display = 'none';
    if(loginMessage) loginMessage.textContent = ''; // Clear any previous messages
    if(loginForm) loginForm.reset(); // Clear form fields
}

function showDashboard() {
    if(loginSection) loginSection.style.display = 'none';
    if(dashboardSection) dashboardSection.style.display = 'block';
    if(testSection) testSection.style.display = 'none';
    if(progressSection) progressSection.style.display = 'none';
}

function showTestSection() {
     if(loginSection) loginSection.style.display = 'none';
     if(dashboardSection) dashboardSection.style.display = 'none';
     if(testSection) testSection.style.display = 'block';
     if(progressSection) progressSection.style.display = 'none';
}

function showProgressSection() {
     if(loginSection) loginSection.style.display = 'none';
     if(dashboardSection) dashboardSection.style.display = 'none';
     if(testSection) testSection.style.display = 'none';
     if(progressSection) progressSection.style.display = 'block';
}

/**
 * Updates ALL statistics displays (Dashboard cards, Progress section summary).
 * @param {object | null} userData - The user data object or null for default state.
 */
function updateStatisticsSection(userData) {
    // Default values if userData is null or missing properties
    const testsToday = userData?.testsToday || 0;
    const correctToday = userData?.correctAnswersToday || 0; // Using the daily count
    const rate = userData?.averageSuccessRate || 0;
    const streak = userData?.dayStreak || 0;
    const xp = userData?.totalXP || 0;

    // --- Dashboard Card Elements ---
    // MAKE SURE THESE IDs MATCH YOUR HTML EXACTLY
    const dashTestsTodayEl = document.getElementById('tests-today');
    const dashCorrectAnswersEl = document.getElementById('correct-answers');
    const dashSuccessRateEl = document.getElementById('success-rate');

    // --- Log the values being used for the dashboard card ---
    console.log(`Updating Dashboard Stats - testsToday: ${testsToday}, correctToday: ${correctToday}, rate: ${rate}%`);

    if (dashTestsTodayEl) {
        dashTestsTodayEl.textContent = testsToday;
    } else {
        console.warn("Element with ID 'tests-today' not found for dashboard.");
    }
    if (dashCorrectAnswersEl) {
        dashCorrectAnswersEl.textContent = correctToday; // Display today's correct answers
    } else {
         console.warn("Element with ID 'correct-answers' not found for dashboard.");
    }
    if (dashSuccessRateEl) {
        dashSuccessRateEl.textContent = `${rate}%`;
    } else {
         console.warn("Element with ID 'success-rate' not found for dashboard.");
    }

    const progressDayStreakEl = document.getElementById('day-streak');
    const progressTotalXpEl = document.getElementById('total-xp');

    if (progressDayStreakEl) progressDayStreakEl.textContent = streak;
    if (progressTotalXpEl) progressTotalXpEl.textContent = xp;

    console.log("UI Statistics Updated:", { testsToday, correctToday, rate, streak, xp });
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
    if(progressDayStreakEl) progressDayStreakEl.textContent = userData?.dayStreak || 0;
    if(progressTotalXpEl) progressTotalXpEl.textContent = userData?.totalXP || 0;


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
    // Reset dashboard stats
    updateStatisticsSection(null); // Pass null for default/zero state

    // Clear subject cards
    if(subjectStatsContainer) subjectStatsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Pro zobrazení pokroku se přihlaste.</p>';

    // Clear progress table
    if(progressTableBody) {
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

    // Reset test section if needed (might happen automatically on navigation)
    if(testContainer) testContainer.innerHTML = '';
    if(testContainer) testContainer.style.display = 'none';
    if(subjectSelect) subjectSelect.value = '';
    if(topicSelect) topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    if(topicSelect) topicSelect.disabled = true;
    if(generateTestBtn) generateTestBtn.disabled = true;

     // Calendar will be regenerated by auth listener with empty data
}


// --- CSV Parsing & Data Initialization ---

/**
 * Parses a single CSV string into the global 'data' object.
 * @param {string} csvText - The raw CSV data string.
 * @param {string} subject - The subject name (e.g., "Programování").
 * @param {string} topic - The topic name.
 */
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
             console.warn(`parseCSV: Skipping invalid line ${i+1} in ${subject} - ${topic}:`, lines[i]);
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

/** Calls parseCSV for all predefined CSV data constants. */
function parseAllCSVData() {
    console.log("Parsing all CSV data...");
    // Programování
    parseCSV(csvDataProgramovani, "Programování", "Základní pojmy z algoritmizace a programování");
    parseCSV(csvDataVyvojJazyku, "Programování", "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio");
    parseCSV(csvDataCsharpVetveni, "Programování", "C# strukturované příkazy větvení, složený příkaz");
    parseCSV(csvDataCyklu, "Programování", "C# strukturované příkazy cyklů");
    parseCSV(csvJednoducheDatove, "Programování", "C# jednoduché datové typy, řetězec; operace");
    parseCSV(csvStrukturovaneDatove, "Programování", "C# strukturované datové typy (kolekce)");
    parseCSV(csvDataDialog, "Programování", "C# práce se soubory a dialogovými okny");
    parseCSV(csvDataPrvky, "Programování", "C# Windows Forms Application, grafické ovládací prvky, události");
    parseCSV(csvDataChyby, "Programování", "C# ladění programu, druhy chyb, ošetřování výjimek");
    parseCSV(csvDataDrawing, "Programování", "C# namespace Drawing – nástroje pro programování grafiky");
    parseCSV(csvDataMetody, "Programování", "C# metody, jmenné prostory");
    parseCSV(csvDataOOP, "Programování", "C# základy OOP");

    // Počítačové sítě
    parseCSV(csvDataTopologie, "Počítačové sítě", "Topologie sítí");
    parseCSV(csvDataKomunikace, "Počítačové sítě", "Komunikace v síti");
    parseCSV(csvDataPasivni, "Počítačové sítě", "Pasivní prvky");
    parseCSV(csvDataAktivni, "Počítačové sítě", "Aktivní prvky");
    parseCSV(csvDataNavrh, "Počítačové sítě", "Návrh a realizace sítě");
    parseCSV(csvDataBezdratove, "Počítačové sítě", "Bezdrátové technologie");
    parseCSV(csvDataLokalni, "Počítačové sítě", "Připojení počítače k lokální síti");
    parseCSV(csvDataInternet, "Počítačové sítě", "Připojení k internetu");

    // Elektronika
    parseCSV(csvDataZaklady, "Elektronika", "Základy digitální techniky");
    parseCSV(csvDataPolovidice, "Elektronika", "Integrované polovodičové prvky");
    parseCSV(csvDataCM530, "Elektronika", "Řídící jednotka CM-530");
    parseCSV(csvDataArduino, "Elektronika", "Mikroprocesor Arduino");
    parseCSV(csvDataArduinoProgramovani, "Elektronika", "Programování mikroprocesoru Arduino");
    parseCSV(csvDataPocitac, "Elektronika", "Počítač");
    parseCSV(csvDataProcesor, "Elektronika", "Procesor");
    parseCSV(csvDataZakladniDeska, "Elektronika", "Základní deska");
    parseCSV(csvDataPameti, "Elektronika", "Polovodičové paměti");
    parseCSV(csvDataDisky, "Elektronika", "Zařízení pro uložení dat");
    parseCSV(csvDataGrafika, "Elektronika", "Grafický a zobrazovací systém");
    parseCSV(csvDataTisk, "Elektronika", "Digitalizace obrazu a tisk");
    parseCSV(csvDataZdroje, "Elektronika", "Napájecí zdroje");
    parseCSV(csvDataTranzistor, "Elektronika", "Diferenciální parametry tranzistoru");
    parseCSV(csvDataOperacni, "Elektronika", "Operační zesilovače");
    parseCSV(csvDataInformace, "Elektronika", "Přenos informací");
    parseCSV(csvDataZesilovace, "Elektronika", "Zesilovače");
    parseCSV(csvDataFFDolni, "Elektronika", "Frekvenční filtr typu dolní propust");
    parseCSV(csvDataFFHorni, "Elektronika", "Frekvenční filtr typu horní propust");
    parseCSV(csvDataRLC, "Elektronika", "Sériový a paralelní obvod RL, RC");

    //Automatizace
    parseCSV(csvDataRegulacni, "Automatizace", "Regulační obvody");
    parseCSV(csvDataProstredky, "Automatizace", "Technické prostředky");
    parseCSV(csvDataLogika, "Automatizace", "Logická zařízení");
    parseCSV(csvDataVykresy, "Automatizace", "Druhy výkresů v AT");
    parseCSV(csvDataRozvody, "Automatizace", "Elektrické rozvody v průmyslu");
    parseCSV(csvDataRegulace, "Automatizace", "Regulační pohony a orgány");
    parseCSV(csvDataAutomat, "Automatizace", "Programovatelný automat");
    parseCSV(csvDataRele, "Automatizace", "Relé impulzní");
    parseCSV(csvDataPrevodniky, "Automatizace", "Převodníky a přizpůsobovací členy");
    parseCSV(csvDataVystavba, "Automatizace", "Výstavba regulačního obvodu");
    parseCSV(csvDataMale, "Automatizace", "Malé řídící systémy");
    parseCSV(csvDataPrvkyvObvodech, "Automatizace", "Prvky používané v obvodech AT");
    parseCSV(csvDataSenzor, "Automatizace", "Senzory - rozdělení");
    parseCSV(csvDataBinSenzory, "Automatizace", "Analogové a binární senzory");
    parseCSV(csvDataPLC, "Automatizace", "PLC");
    parseCSV(csvDataSekvencni, "Automatizace", "Sekvenční logické obvody");
    parseCSV(csvDataMereni, "Automatizace", "Měření neelektrických veličin");
    parseCSV(csvDataTypy, "Automatizace", "Typy regulačních obvodů");
    parseCSV(csvDataRoboty, "Automatizace", "Roboty a jejich aplikace");
    parseCSV(csvDataGraficke, "Automatizace", "Grafické znázornění stavů");
    console.log("Finished parsing CSV data.");
}

// --- Test Logic ---

/**
 * Generates and displays a test based on selected subject and topic.
 */
function generateTest() {
    if (!testContainer || !noQuestionsMessage || !subjectSelect || !topicSelect) return;

    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    testContainer.innerHTML = ''; // Clear previous test
    testContainer.style.display = 'none'; // Hide initially
    noQuestionsMessage.style.display = 'none';

    if (!subject || !topic) {
        noQuestionsMessage.textContent = "Prosím vyberte předmět a okruh.";
        noQuestionsMessage.style.display = 'block';
        return;
    }

    let testQuestions = [];
    const questionsPerTopicSummary = 2; // How many questions per topic for summary test
    const questionsPerStandardTest = 10;

    try {
        if (topic === "Souhrnné opakování") {
            console.log(`Generating summary test for ${subject}`);
            const otherTopics = Object.keys(data[subject] || {}).filter(t => t !== "Souhrnné opakování");

            if (otherTopics.length === 0) {
                throw new Error("Nebyly nalezeny žádné okruhy pro souhrnný test.");
            }

            for (const otherTopic of otherTopics) {
                const questionsFromTopic = data[subject]?.[otherTopic];
                if (questionsFromTopic && questionsFromTopic.length > 0) {
                    const randomQuestions = getRandomQuestions(questionsFromTopic, questionsPerTopicSummary);
                    testQuestions.push(...randomQuestions); // Use spread syntax
                } else {
                     console.warn(`No questions found for ${subject} - ${otherTopic}`);
                }
            }
            // Shuffle the combined list of summary questions
            shuffleArray(testQuestions);

        } else {
            // Standard topic test
            console.log(`Generating standard test for ${subject} - ${topic}`);
            const availableQuestions = data[subject]?.[topic];

            if (!availableQuestions || availableQuestions.length === 0) {
                throw new Error(`Pro okruh "${topic}" nebyly nalezeny žádné otázky.`);
            }
            testQuestions = getRandomQuestions(availableQuestions, questionsPerStandardTest);
        }

        if (testQuestions.length === 0) {
             throw new Error("Nepodařilo se vygenerovat žádné otázky pro tento test.");
        }

        console.log(`Generated ${testQuestions.length} questions.`);

        // --- Display Questions ---
        testQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionText = document.createElement('div');
            questionText.classList.add('question-text');
            questionText.textContent = `${index + 1}. ${q.text}`;
            questionDiv.appendChild(questionText);

            const allOptions = [...q.options, q.correctAnswer]; // Combine incorrect and correct
            shuffleArray(allOptions); // Shuffle them together

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('question-options');

            allOptions.forEach((optionText) => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option');
                optionDiv.textContent = optionText;
                optionDiv.dataset.correct = (optionText === q.correctAnswer); // Set data attribute

                // Add click listener to select/deselect options within the same question
                optionDiv.addEventListener('click', () => {
                    // Deselect other options in the same question
                     questionDiv.querySelectorAll('.option.selected').forEach(sel => {
                        if(sel !== optionDiv) sel.classList.remove('selected');
                     });
                    // Toggle selection for the clicked option
                    optionDiv.classList.toggle('selected');
                });

                optionsDiv.appendChild(optionDiv);
            });

            questionDiv.appendChild(optionsDiv);
            testContainer.appendChild(questionDiv);
        });

        // --- Add Submit Button ---
        // Remove previous submit button if any (safety check)
        if (submitBtn && submitBtn.parentNode) {
            submitBtn.remove();
        }
        submitBtn = document.createElement('button');
        submitBtn.classList.add('btn', 'btn-primary');
        submitBtn.style.marginTop = '2rem'; // Add space above button
        submitBtn.textContent = 'Odeslat odpovědi';
        submitBtn.addEventListener('click', () => evaluateTest(db)); // Pass db instance
        testContainer.appendChild(submitBtn);

        testContainer.style.display = 'block'; // Show the generated test

    } catch (error) {
        console.error("Error generating test:", error);
        noQuestionsMessage.textContent = error.message || "Nepodařilo se vygenerovat test.";
        noQuestionsMessage.style.display = 'block';
        testContainer.style.display = 'none';
    }
}

/**
 * es the completed test, updates user stats/achievements, saves data, shows results.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 */
async function evaluateTest(db) {
    let correct = 0;
    const questionElements = document.querySelectorAll('.question');
    const total = questionElements.length;
    let allCorrect = true; // Assume all correct initially

    console.log(`Evaluating test with ${total} questions.`);

    if (total === 0) {
        console.warn("evaluateTest called with no questions rendered.");
        return; // Nothing to evaluate
    }

    // --- Evaluate Answers and Update Option Styles ---
    questionElements.forEach((questionElement, qIndex) => {
        const options = questionElement.querySelectorAll('.option');
        let isQuestionCorrect = false;
        let anOptionWasSelected = false;

        options.forEach(option => {
            option.style.pointerEvents = 'none'; // Disable further clicks
            const isCorrectAnswer = option.dataset.correct === 'true';

            // Always highlight the correct answer after evaluation
            if (isCorrectAnswer) {
                option.classList.add('correct');
            }

            if (option.classList.contains('selected')) {
                anOptionWasSelected = true;
                if (isCorrectAnswer) {
                    isQuestionCorrect = true;
                    correct++;
                    // Keep correct class (already added)
                } else {
                    option.classList.add('incorrect'); // Mark selected incorrect answer
                }
            } else if (!isCorrectAnswer) {
                 // If not selected and not correct, remove potential hover styles
                 option.classList.remove('selected'); // Ensure not marked selected
            }
        });

        // If no option was selected for this question, or the selected one was wrong
        if (!anOptionWasSelected || !isQuestionCorrect) {
            allCorrect = false;
        }
         console.log(`Question ${qIndex+1}: ${isQuestionCorrect ? 'Correct' : 'Incorrect'}`);
    });

    console.log(`Test Result: ${correct}/${total}`);

    // --- Show Results Modal ---
    if (resultCorrect) resultCorrect.textContent = correct;
    if (resultTotal) resultTotal.textContent = total;
    const finalSuccessRate = total > 0 ? Math.round((correct / total) * 100) : 0;
    if (resultPercentage) resultPercentage.textContent = `${finalSuccessRate}%`;
    if (modal) modal.classList.add('show'); // Use class to show modal with animation

    // --- Update User Data (only if logged in) ---
    if (!currentUser) {
        console.warn("User not logged in. Test results not saved.");
        // Modal is already shown above, just return
        addBackButtonToTestContainer(); // Add back button even for guests
        return;
    }

    console.log("Updating user data in Firestore...");
    // Get current user data AND WAIT FOR IT
    const userData = await getUserData(currentUser, db);
    if (!userData) {
        console.error("Could not retrieve user data to save results.");
        alert("Chyba: Nepodařilo se načíst uživatelská data pro uložení výsledků.");
        addBackButtonToTestContainer(); // Add back button even on error
        return;
    }

    // Ensure data structures exist and handle Set conversion
    userData.progress = userData.progress || {};
    userData.achievements = userData.achievements || { /* Initialize all to 0 */ };
    userData.activity = userData.activity || {};
    userData.completedTopics = new Set(userData.completedTopics || []); // Array from DB to Set

    // --- Update Core Stats ---
    userData.testsToday = (userData.testsToday || 0) + 1; // Increment today's count
    userData.correctAnswersToday = (userData.correctAnswersToday || 0) + correct; 
    userData.totalTestsCompleted = (userData.totalTestsCompleted || 0) + 1;
    userData.totalXP = (userData.totalXP || 0) + correct;
    console.log("EvaluateTest: Data after increment:", {
        testsToday: userData.testsToday,
        correctToday: userData.correctAnswersToday
   });

    // --- Update Subject Progress ---
    const subject = subjectSelect.value;
    if (subject && data[subject]) {
        // Ensure the structure includes the new field, initializing if necessary
        userData.progress[subject] = userData.progress[subject] || {
            testsCompleted: 0,
            correctAnswers: 0,
            totalQuestionsAnswered: 0, // Initialize new field
            successRate: 0
        };
        const subjData = userData.progress[subject];

        subjData.testsCompleted++;
        subjData.correctAnswers += correct;
        // Increment by the ACTUAL number of questions in THIS test
        subjData.totalQuestionsAnswered = (subjData.totalQuestionsAnswered || 0) + total;

        // Calculate success rate using the CORRECT total questions answered
        subjData.successRate = subjData.totalQuestionsAnswered > 0
            ? Math.round((subjData.correctAnswers / subjData.totalQuestionsAnswered) * 100)
            : 0;
    }

    // --- Update Average Success Rate (Recalculate) ---
     let totalSuccessSum = 0;
     let numSubjectsWithProgress = 0;
     for (const subjKey in userData.progress) {
         if (userData.progress[subjKey]?.testsCompleted > 0) { // Check if tests were completed
             totalSuccessSum += (userData.progress[subjKey].successRate || 0);
             numSubjectsWithProgress++;
         }
     }
     userData.averageSuccessRate = numSubjectsWithProgress > 0
         ? Math.round(totalSuccessSum / numSubjectsWithProgress)
         : 0;


    // --- Update Streaks & Activity Log ---
    const today = new Date();
    const todayDateString = today.toDateString();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    // Day Streak (>80% success)
    if (finalSuccessRate >= 80) {
        // More robust streak check: only increment if previous success wasn't today
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayString = yesterday.toDateString();

        if (userData.lastCompletedTestDate !== todayDateString) {
             if (userData.lastCompletedTestDate === yesterdayString) {
                // It was yesterday, increment streak
                userData.dayStreak = (userData.dayStreak || 0) + 1;
             } else {
                // It wasn't yesterday (or first time), start streak at 1
                userData.dayStreak = 1;
             }
             userData.lastCompletedTestDate = todayDateString;
        }
        // If lastCompletedTestDate IS todayDateString, streak doesn't change on subsequent >80% tests today
    } else {
        // Reset streak only if the last successful test wasn't also today.
         if (userData.lastCompletedTestDate !== todayDateString) {
            userData.dayStreak = 0;
         }
         // If a test today fails, but a previous one today was >80%, the streak is maintained until tomorrow.
    }


    // Activity Log
    userData.activity[todayYear] = userData.activity[todayYear] || {};
    userData.activity[todayYear][todayMonth] = userData.activity[todayYear][todayMonth] || {};
    userData.activity[todayYear][todayMonth][todayDay] = (userData.activity[todayYear][todayMonth][todayDay] || 0) + 1;


    // --- Update Achievements ---
    // Flawless & Winning Streak
    if (allCorrect) {
        userData.flawlessTestCount = (userData.flawlessTestCount || 0) + 1;
        userData.winningStreakCount = (userData.winningStreakCount || 0) + 1;
    } else {
        userData.winningStreakCount = 0; // Reset winning streak
    }

    // Topic Master
    const topic = topicSelect.value;
    if (topic && topic !== "Souhrnné opakování" && subject && data[subject]?.[topic]) { // Ensure topic is valid
        userData.completedTopics.add(topic);
    }

    // Calculate all achievement levels
    updateAchievements(userData); // Pass updated userData

    // --- Prepare for Saving ---
    userData.completedTopics = Array.from(userData.completedTopics); // Set back to Array

    // --- Save Updated Data ---
    await saveUserData(currentUser, userData, db);

    // --- Update UI Sections with new data ---
    console.log("Updating UI after test evaluation...");
    updateStatisticsSection(userData); // Pass data to avoid re-fetch
    updateDashboard(userData);
    updateProgressSection(userData);
    updateAchievementsUI(userData);
    generateCalendar(currentYear, currentMonth, db); // Update calendar

    // --- Add Back Button ---
     addBackButtonToTestContainer();

} // End of evaluateTest


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
     if(modal) modal.classList.remove('show'); // Hide modal if shown
     if(testContainer) {
         testContainer.innerHTML = ''; // Clear the test content
         testContainer.style.display = 'none';
     }
     if(subjectSelect) subjectSelect.value = "";
     if(topicSelect) {
         topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
         topicSelect.disabled = true;
     }
     if(generateTestBtn) {
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


// --- Calendar Functions ---

/**
 * Fetches activity data for the calendar.
 * @param {number} year
 * @param {number} month (0-11)
 * @param {firebase.firestore.Firestore} db
 * @returns {Promise<object>} Object with day numbers as keys and counts as values.
 */
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

/**
 * Maps activity count to CSS class name.
 * @param {number} count - Number of tests completed on a day.
 * @returns {string} CSS class name.
 */
function getActivityClass(count) {
    if (count === 0) return 'activity-none';
    if (count >= 1 && count <= 2) return 'activity-low';
    if (count >= 3 && count <= 4) return 'activity-medium';
    if (count >= 5 && count <= 6) return 'activity-high';
    return 'activity-very-high'; // 7+
}

/**
 * Generates and displays the calendar for the given month and year.
 * @param {number} year
 * @param {number} month (0-11)
 * @param {firebase.firestore.Firestore} db
 */
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
function initializeSubjects() {
    if (!subjectSelect) return;
    subjectSelect.innerHTML = '<option value="">Vyberte předmět</option>'; // Placeholder
    for (const subject in data) {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    }
}

/** Populates the topic dropdown based on the selected subject. */
function populateTopics(subject) {
    if (!topicSelect || !generateTestBtn) return;

    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>'; // Reset
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;

    if (subject && data[subject]) {
        for (const topic in data[subject]) {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        }
        topicSelect.disabled = false;
        // Enable generate button only if a topic is actually selected later
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
        showProgressSection();
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
    loginBtn?.addEventListener('click', () => loginUserHandler(auth)); // Use handler
    registerBtn?.addEventListener('click', () => registerUserHandler(auth)); // Use handler

    // Test Generation Controls
    subjectSelect?.addEventListener('change', function () {
        populateTopics(this.value);
        topicSelect.value = ""; // Reset topic selection
        generateTestBtn.disabled = true; // Disable btn until topic is chosen
    });
    topicSelect?.addEventListener('change', function () {
        generateTestBtn.disabled = !this.value; // Enable only if a topic is selected
    });
    generateTestBtn?.addEventListener('click', generateTest);

    // Modal Controls
    closeModalBtn?.addEventListener('click', () => {
        if(modal) modal.classList.remove('show');
    });
    backToTestsModalBtn?.addEventListener('click', () => { // Use correct button ID
         handleBackToTestSelection();
    });
    window.addEventListener('click', (event) => { // Close modal on outside click
        if (event.target === modal) {
            if(modal) modal.classList.remove('show');
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

     // Add listeners for subject card clicks (handled within updateDashboard)

}
