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
let data = {
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
    }
};
const achievementLevels = {
    xpCollector: {
        name: "XP sběratel 🏆",
        levels: [100, 250, 500, 1000, 2500, 5000, 10000, 20000, 50000, 100000],
        unit: "XP"
    },
    unstoppable: {
        name: "Nezastavitelný 🔥",
        levels: [3, 7, 14, 30, 50, 75, 100, 150, 200, 365],
        unit: "dní"
    },
    flawless: {
        name: "Bezchybník 💯",
        levels: [5, 10, 20, 50, 100, 200, 350, 500, 750, 1000],
        unit: "testů"
    },
    winningStreak: {
        name: "Vítězná série 🥇",
        levels: [3, 5, 10, 20, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    topicMaster: {
        name: "Znalec témat 📚",
        levels: [2, 4, 6, 8, 10, 12, 15, 18, 20, 25],
        unit: "témat"
    },
    earlyBird: {
        name: "Ranní ptáče 🌅",
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    nightOwl: {
        name: "Večerní sova 🌙",
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    marathoner: {
        name: "Maratonec 🏃",
        levels: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150],
        unit: "testů"
    }
};

let currentUser = "defaultUser"; // Default user, since no login is required.

// DOM Elements
const header = document.querySelector('header');
const main = document.querySelector('main');
const dashboardSection = document.getElementById('dashboard-section');
const testSection = document.getElementById('test-section');
const progressSection = document.getElementById('progress-section');
const testContainer = document.getElementById('test-container');
const generateTestBtn = document.getElementById('generate-test');
const modal = document.getElementById('test-completion-modal');
const closeModalBtn = document.querySelector('.close');
const backToTestsBtn = document.getElementById('back-to-tests');
const resultCorrect = document.getElementById('result-correct');
const resultTotal = document.getElementById('result-total');
const resultPercentage = document.getElementById('result-percentage');
const subjectSelect = document.getElementById('subject-select');
const topicSelect = document.getElementById('topic-select');
const noQuestionsMessage = document.getElementById('no-questions-message');
const logoutLink = document.getElementById('logout-link');
const progressTableBody = document.getElementById('progress-table-body');
const subjectStatsContainer = document.getElementById('subject-stats'); // Get the container

function parseCSV(csvText, subject, topic) {
    const lines = csvText.split('\n');
    const header = lines[0].split(';');
    const questions = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(';');
        if (values.length >= 4) { // Musí mít aspoň otázku, správnou odpověď a 2 možnosti
            const question = {
                text: values[0],
                correctAnswer: values[1],
                options: [],
                correctIndex: 0
            };

            // Přidej možnosti (Možnost 1 až Možnost 4, pokud existují)
            for (let j = 2; j < values.length; j++) {
                question.options.push(values[j]);
            }

            questions.push(question);
        }
    }

    // Vlož otázky do data objektu
    data[subject][topic] = questions;
}

// Function to get user data from local storage
function getUserData(username) {
    const userData = localStorage.getItem(username);
    let parsedData = userData ? JSON.parse(userData) : {};

    // Initialize completedTopics specifically, and then spread other properties
    const defaultData = {
        testsToday: 0,
        correctAnswers: 0,
        progress: {},
        totalTestsCompleted: 0,
        averageSuccessRate: 0,
        dayStreak: 0,
        totalXP: 0,
        lastCompletedTestDate: null,
        achievements: {
            xpCollector: 0,
            unstoppable: 0,
            flawless: 0,
            winningStreak: 0,
            topicMaster: 0,
            earlyBird: 0,
            nightOwl: 0,
            marathoner: 0
        },
        flawlessTestCount: 0,
        winningStreakCount: 0,
        completedTopics: new Set()
    };

    parsedData = {
        ...defaultData, // Apply default values first
        ...parsedData // Then overwrite with stored data, if it exists
    };

    // Guarantee completedTopics is a Set, even if localStorage corrupted it.
    if (!(parsedData.completedTopics instanceof Set)) {
        parsedData.completedTopics = new Set();
    }

    return parsedData;
}

// Function to save user data to local storage
function saveUserData(username, data) {
    localStorage.setItem(username, JSON.stringify(data));
}

// Function to update dashboard statistics
function updateDashboard() {
    const userData = getUserData(currentUser);
    document.getElementById("tests-today").textContent =
        userData.testsToday || 0;
    document.getElementById("correct-answers").textContent =
        userData.correctAnswers || 0;
    document.getElementById("success-rate").textContent =
        userData.averageSuccessRate + "%";
    document.getElementById("day-streak").textContent = userData.dayStreak || 0; // Přidáno
    document.getElementById("total-xp").textContent = userData.totalXP || 0; // Přidáno
    subjectStatsContainer.innerHTML = "";

    for (const subject in userData.progress) {
        const subjectData = userData.progress[subject];
        const progressPercentage = subjectData.successRate || 0;

        const card = document.createElement("div");
        card.classList.add("subject-card");

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
        progressValue.style.width = `${progressPercentage}%`;
        progressBar.appendChild(progressValue);
        progressContainer.appendChild(progressBar);

        const progressText = document.createElement("div");
        progressText.classList.add("progress-text");
        progressText.innerHTML = `<span>${progressPercentage}%</span> <span>${subjectData.testsCompleted || 0
            } testů</span>`;
        progressContainer.appendChild(progressText);

        card.appendChild(progressContainer);
        subjectStatsContainer.appendChild(card);
    }
}
function updateProgressSection() {
    progressTableBody.innerHTML = ''; // Clear existing data
    const userData = getUserData(currentUser);

    document.getElementById("day-streak").textContent = userData.dayStreak || 0;
    document.getElementById("total-xp").textContent = userData.totalXP || 0;

    for (const subject in userData.progress) {
        const subjectData = userData.progress[subject];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 0.75rem;">${subject}</td>
            <td style="text-align: center; padding: 0.75rem;">${subjectData.testsCompleted || 0}</td>
            <td style="text-align: center; padding: 0.75rem;">${subjectData.correctAnswers || 0}/${(subjectData.testsCompleted || 0) * 10}</td>
            <td style="text-align: center; padding: 0.75rem;">${subjectData.successRate || 0}%</td>
        `;
        progressTableBody.appendChild(row);
    }

    // Display achievements
    let achievementsDiv = document.getElementById('achievements-div'); // Check if it already exists
    if (!achievementsDiv) {
        achievementsDiv = document.createElement('div'); // Create it if it doesn't
        achievementsDiv.id = 'achievements-div'; // Set its ID
        progressSection.appendChild(achievementsDiv); // Append to the progress section
    }

    achievementsDiv.innerHTML = '<h3>Achievementy</h3>';

    for (const achievementKey in userData.achievements) {
        const level = userData.achievements[achievementKey];
        const achievement = achievementLevels[achievementKey];
        if (!achievement) continue; // Skip if achievement data is missing
        const levelText = level > 0 ? `(Lv. ${level})` : "(Nezačato)";
        achievementsDiv.innerHTML += `<p>${achievement.name}: ${levelText}</p>`;
    }

}



// Navigation
document.getElementById('dashboard-link').addEventListener('click', function () {
    dashboardSection.style.display = 'block';
    testSection.style.display = 'none';
    progressSection.style.display = 'none';
    updateDashboard(); // Refresh data when navigating
});

document.getElementById('test-link').addEventListener('click', function () {
    dashboardSection.style.display = 'none';
    testSection.style.display = 'block';
    progressSection.style.display = 'none';
});

document.getElementById('progress-link').addEventListener('click', function () {
    dashboardSection.style.display = 'none';
    testSection.style.display = 'none';
    progressSection.style.display = 'block';
    updateProgressSection(); // Refresh data when navigating
});

document.getElementById('logout-link').addEventListener('click', function () {
    localStorage.removeItem(currentUser);
    // Reset userData object and re-render dashboard
    let userData = {
        testsToday: 0,
        correctAnswers: 0,
        progress: {}, // Store progress per subject
        totalTestsCompleted: 0, // celkovy pocet testu
        averageSuccessRate: 0 // Průměr úspěšnosti
    };

    saveUserData(currentUser, userData);
    updateDashboard();
    updateProgressSection();

});
// Subject cards navigation
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', function () {
        const subject = this.getAttribute('data-subject');

        dashboardSection.style.display = 'none';
        testSection.style.display = 'block';
        progressSection.style.display = 'none';

    });
});

// Function to populate topic select based on selected subject
function populateTopics(subject) {
    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
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
    }
}
// Event listener for subject selection
subjectSelect.addEventListener('change', function () {
    const subject = this.value;
    populateTopics(subject);
});
topicSelect.addEventListener('change', function () {
    generateTestBtn.disabled = !this.value;
});

// Funkce pro náhodné zamíchání pole (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(arr, n) {
    if (!arr || arr.length === 0) return []; // Ochrana proti prázdnému poli

    let len = arr.length;
    if (n > len) {
        n = len;
    }

    let shuffled = arr.slice(0),
        i = len,
        min = Math.min(i, n),
        temp, index;
    while (i-- && min--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, n);
}
let submitBtn;
// Generate test
generateTestBtn.addEventListener('click', function () {
    testContainer.style.display = 'block';
    noQuestionsMessage.style.display = 'none';
    testContainer.innerHTML = '';

    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    if (!subject || !topic) {
        noQuestionsMessage.style.display = 'block';
        testContainer.style.display = 'none';
        return;
    }

    let testQuestions = [];

    if (topic === "Souhrnné opakování") {
        // Pokud je vybráno souhrnné opakování, sestavíme otázky z ostatních okruhů
        const otherTopics = Object.keys(data[subject]).filter(t => t !== "Souhrnné opakování"); // Získame ostatní okruhy
        if (otherTopics.length === 0) {
            noQuestionsMessage.style.display = 'block';
            testContainer.style.display = 'none';
            return;
        }

        // Pro každý okruh vybereme 2 náhodné otázky
        for (const otherTopic of otherTopics) {
            const questionsFromTopic = data[subject][otherTopic];
            if (questionsFromTopic && questionsFromTopic.length > 0) {
                const randomQuestions = getRandomQuestions(questionsFromTopic, 2);
                testQuestions = testQuestions.concat(randomQuestions); // Přidáme do seznamu testovacích otázek
            }
        }

        if (testQuestions.length === 0) {
            noQuestionsMessage.style.display = 'block';
            testContainer.style.display = 'none';
            return;
        }
    } else {
        // Pro standardní okruhy použijeme stávající logiku
        const availableQuestions = data[subject][topic];
        if (!availableQuestions || availableQuestions.length === 0) {
            noQuestionsMessage.style.display = 'block';
            testContainer.style.display = 'none';
            return;
        }
        testQuestions = getRandomQuestions(availableQuestions, 10);
    }

    testQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('div');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${q.text}`; // Změna: použijeme q.text
        questionDiv.appendChild(questionText);

        // Zamíchání možností odpovědí
        const options = [...q.options];
        options.push(q.correctAnswer); // Přidáme správnou odpověď do pole možností
        shuffleArray(options); // Zamícháme pole možností

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('question-options');

        // Určení indexu správné odpovědi po zamíchání
        let correctIndex = options.indexOf(q.correctAnswer);

        options.forEach((option, oIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.textContent = option;

            optionDiv.dataset.correct = (oIndex === correctIndex); // Check if it's the correct answer

            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        testContainer.appendChild(questionDiv);
    });

    // Add submit button
    submitBtn = document.createElement('button');
    const originalText = 'Odeslat odpovědi'; // Ulož si původní text
    submitBtn.classList.add('btn', 'btn-primary');
    submitBtn.style.marginTop = '1rem';
    submitBtn.textContent = originalText; // Původní text
    submitBtn.addEventListener('click', evaluateTest);
    testContainer.appendChild(submitBtn);
});
evaluateTest = function () {
    let correct = 0;
    const total = document.querySelectorAll('.question').length;
    const questionElements = document.querySelectorAll('.question');
    let allCorrect = true;
    questionElements.forEach(questionElement => {
        const options = questionElement.querySelectorAll('.option');
        let selectedCorrectly = false;

        options.forEach(option => {
            // Disable all options in the question
            option.style.pointerEvents = 'none';

            if (option.dataset.correct === 'true') {
                option.classList.add('correct');
            }

            if (option.classList.contains('selected')) {
                if (option.dataset.correct === 'true') {
                    correct++;
                    selectedCorrectly = true;
                } else {
                    option.classList.add('incorrect');
                    allCorrect = false;  // Pokud je alespoň jedna odpověď špatně, nastavíme na false
                }
            }

        });

        if (!selectedCorrectly) {
            // If the user didn't select the correct answer, show it in green
            options.forEach(option => {
                if (option.dataset.correct === 'true') {
                    option.classList.add('correct');
                }
            });
        }
    });

    // Get current user data
    const userData = getUserData(currentUser);
    // Update user data
    userData.testsToday = (userData.testsToday || 0) + 1;
    userData.correctAnswers = (userData.correctAnswers || 0) + correct;

    const subject = subjectSelect.value;
    // Ensure progress object exists for user
    userData.progress = userData.progress || {};

    // Ensure subject progress object exists
    userData.progress[subject] = userData.progress[subject] || {
        testsCompleted: 0,
        correctAnswers: 0,
        overallProgress: 0,
        successRate: 0
    };

    // Update subject-specific progress
    userData.progress[subject].testsCompleted = (userData.progress[subject].testsCompleted || 0) + 1;
    userData.progress[subject].correctAnswers = (userData.progress[subject].correctAnswers || 0) + correct;
    userData.progress[subject].successRate = Math.round((userData.progress[subject].correctAnswers / (userData.progress[subject].testsCompleted * 10)) * 100);

    // Calculate overall progress for subject
    userData.progress[subject].overallProgress = Math.min(100, Math.round((userData.progress[subject].testsCompleted / 5) * 100)); // Assuming 5 tests per subject for 100% progress

    // Update overall stats
    userData.totalTestsCompleted = (userData.totalTestsCompleted || 0) + 1;
    const totalSuccessRate = Object.values(userData.progress).reduce((acc, subject) => acc + (subject.successRate || 0), 0);
    userData.averageSuccessRate = Math.round(totalSuccessRate / Object.keys(userData.progress).length) || 0;

    const successRate = Math.round((correct / total) * 100); // Calculate success rate
    if (successRate >= 80) {
        const today = new Date();
        const todayDate = today.toDateString();

        if (userData.lastCompletedTestDate !== todayDate) {
            userData.dayStreak = (userData.dayStreak || 0) + 1;
            userData.lastCompletedTestDate = todayDate;
        }
    } else {
        userData.dayStreak = 0;
        userData.lastCompletedTestDate = null;
    }
    userData.totalXP = (userData.totalXP || 0) + correct;
    //Achievement - bezchybny
    if (allCorrect) {
        userData.flawlessTestCount = (userData.flawlessTestCount || 0) + 1;
        userData.winningStreakCount = (userData.winningStreakCount || 0) + 1;  // vítězná serie
    } else {
        userData.winningStreakCount = 0;  // Reset vítězné série
    }
    // Achievement - znalec témat
    const topic = topicSelect.value;
    userData.completedTopics.add(topic);

    // Aktualizace achievementů
    updateAchievements(userData, correct, total);

    // Save updated user data
    saveUserData(currentUser, userData);

    // Update statistics
    updateStatisticsSection()

    // Show results in modal
    resultCorrect.textContent = correct;
    resultTotal.textContent = total;
    resultPercentage.textContent = `${Math.round((correct / total) * 100)}%`; // Přidání %
    modal.style.display = 'flex';
    if (submitBtn) {
        submitBtn.remove()
    }

    const testContainer = document.getElementById('test-container');
    const backToTestsBtn = document.createElement('button');
    backToTestsBtn.classList.add('btn', 'btn-primary');
    backToTestsBtn.style.marginTop = '1rem';
    backToTestsBtn.textContent = 'Zpět na výběr testů';
    backToTestsBtn.addEventListener('click', function () { // Přidej nový listener

        modal.style.display = 'none'; // Skryj modální okno
        testContainer.style.display = 'none'; // Skryj test
        testSection.style.display = 'block'; // Zobraz test sekci
        // Resetuj tlačítko zpět na původní
        topicSelect.value = "";
        topicSelect.disabled = true;
        subjectSelect.value = "";
        generateTestBtn.style.display = 'inline-block'; // Ukáže generovat test

    }); // Přidej nový listener

    testContainer.appendChild(backToTestsBtn);

    // Update Dashboard and Progress sections
    updateDashboard();
    updateProgressSection();
}
function updateStatisticsSection() {
    const userData = getUserData(currentUser);
    document.getElementById("tests-today").textContent =
        userData.testsToday || 0;
    document.getElementById("correct-answers").textContent =
        userData.correctAnswers || 0;
    document.getElementById("success-rate").textContent =
        userData.averageSuccessRate + "%";
    document.getElementById("day-streak").textContent =
        userData.dayStreak || 0;
    document.getElementById("total-xp").textContent =
        userData.totalXP || 0;
}
// Close modal
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';

});

backToTestsBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    testContainer.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function initializeSubjects() {
    subjectSelect.innerHTML = '<option value="">Vyberte předmět</option>';
    subjectSelect.innerHTML += '<option value="Programování">Programování</option>';
    subjectSelect.innerHTML += '<option value="Počítačové sítě">Počítačové sítě</option>';
    subjectSelect.innerHTML += '<option value="Elektronika">Elektronika</option>';
}
function populateTopics(subject) {
    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;

    let topics;


    if (subject === "Programování") {
        topics = [
            "Základní pojmy z algoritmizace a programování",
            "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio",
            "C# strukturované příkazy větvení, složený příkaz",
            "C# strukturované příkazy cyklů",
            "C# jednoduché datové typy, řetězce; operace",
            "C# strukturované datové typy (kolekce)",
            "C# práce se soubory a dialogovými okny",
            "C# Windows Forms Application, grafické ovládací prvky, události",
            "C# ladění programu, druhy chyb, ošetřování výjimek",
            "C# namespace Drawing – nástroje pro programování grafiky",
            "C# metody, jmenné prostory",
            "C# základy OOP",
            "Souhrnné opakování"
        ];
    } else if (subject === "Počítačové sítě") {
        topics = [
            "Topologie sítí",
            "Komunikace v síti",
            "Pasivní prvky",
            "Aktivní prvky",
            "Návrh a realizace sítě",
            "Bezdrátové technologie",
            "Připojení počítače k lokální síti",
            "Připojení k internetu",
            "Souhrnné opakování"
        ];
    } else if (subject === "Elektronika") {
        topics = [
            "Základy digitální techniky",
            "Integrované polovodičové prvky",
            "Řídící jednotka CM-530",
            "Mikroprocesor Arduino",
            "Programování mikroprocesoru Arduino",
            "Počítač",
            "Procesor",
            "Základní deska",
            "Polovodičové paměti",
            "Zařízení pro uložení dat",
            "Grafický a zobrazovací systém",
            "Digitalizace obrazu a tisk",
            "Napájecí zdroje",
            "Diferenciální parametry tranzistoru",
            "Operační zesilovače",
            "Přenos informací",
            "Zesilovače",
            "Frekvenční filtr typu dolní propust",
            "Frekvenční filtr typu horní propust",
            "Sériový a paralelní obvod RL, RC",
            "Souhrnné opakování"
        ];
    } else {
        return;
    }


    for (const topic of topics) {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    }
    topicSelect.disabled = false;
    generateTestBtn.disabled = false;
}

// Event delegation for selecting options
testContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('option')) {
        const option = event.target;
        const question = option.closest('.question');

        // Remove 'selected' class from other options in the same question
        question.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

        // Add 'selected' class to the clicked option
        option.classList.add('selected');
    }
});


// Load data on page load
window.addEventListener('load', function () {
    // Inicializuj select předmětů
    initializeSubjects();
    generateTestBtn.style.display = 'inline-block';
    // Načti data pro Programování
    parseCSV(csvDataProgramovani, "Programování", "Základní pojmy z algoritmizace a programování");
    parseCSV(csvDataVyvojJazyku, "Programování", "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio");
    parseCSV(csvDataCsharpVetveni, "Programování", "C# strukturované příkazy větvení, složený příkaz");
    parseCSV(csvDataCyklu, "Programování", "C# strukturované příkazy cyklů");
    parseCSV(csvJednoducheDatove, "Programování", "C# jednoduché datové typy, řetězce; operace");
    parseCSV(csvStrukturovaneDatove, "Programování", "C# strukturované datové typy (kolekce)");
    parseCSV(csvDataDialog, "Programování", "C# práce se soubory a dialogovými okny");
    parseCSV(csvDataPrvky, "Programování", "C# Windows Forms Application, grafické ovládací prvky, události");
    parseCSV(csvDataChyby, "Programování", "C# ladění programu, druhy chyb, ošetřování výjimek");
    parseCSV(csvDataDrawing, "Programování", "C# namespace Drawing – nástroje pro programování grafiky");
    parseCSV(csvDataMetody, "Programování", "C# metody, jmenné prostory");
    parseCSV(csvDataOOP, "Programování", "C# základy OOP");

    // Načti data pro Počítačové sítě
    parseCSV(csvDataTopologie, "Počítačové sítě", "Topologie sítí");
    parseCSV(csvDataKomunikace, "Počítačové sítě", "Komunikace v síti");
    parseCSV(csvDataPasivni, "Počítačové sítě", "Pasivní prvky");
    parseCSV(csvDataAktivni, "Počítačové sítě", "Aktivní prvky");
    parseCSV(csvDataNavrh, "Počítačové sítě", "Návrh a realizace sítě");
    parseCSV(csvDataBezdratove, "Počítačové sítě", "Bezdrátové technologie");
    parseCSV(csvDataLokalni, "Počítačové sítě", "Připojení počítače k lokální síti");
    parseCSV(csvDataInternet, "Počítačové sítě", "Připojení k internetu");

    // Načti data pro Elektroniku
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

    updateDashboard();
    updateProgressSection();


});
// Kalendář JavaScript
const calendarGrid = document.getElementById('calendar-grid');
const currentMonthDisplay = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date(); // Aktuální datum
let currentMonth = currentDate.getMonth(); // Aktuální měsíc (0-11)
let currentYear = currentDate.getFullYear(); // Aktuální rok

// Funkce pro získání dat o aktivitě z localStorage (počet testů za den)
function getActivityData(year, month) {
    const userData = getUserData(currentUser);
    // Inicializace objektu pro aktivitu, pokud neexistuje
    userData.activity = userData.activity || {};
    const activityData = userData.activity[year] && userData.activity[year][month] ? userData.activity[year][month] : {};
    return activityData;
}

// Funkce pro uložení dat o aktivitě do localStorage
function saveActivityData(year, month, day, count) {
    const userData = getUserData(currentUser);
    userData.activity = userData.activity || {};
    userData.activity[year] = userData.activity[year] || {};
    userData.activity[year][month] = userData.activity[year][month] || {};
    userData.activity[year][month][day] = count;
    saveUserData(currentUser, userData);
}

// Funkce pro vizualizaci aktivity (podle obrázku)
function getActivityClass(day, activityData) {
    const count = activityData[day] || 0;

    if (count === 0) return ''; // Žádná aktivita
    if (count >= 1 && count <= 2) return 'activity-low';
    if (count >= 3 && count <= 4) return 'activity-medium';
    if (count >= 5 && count <= 6) return 'activity-high';
    return 'activity-very-high';
}

// Funkce pro vygenerování kalendáře
function generateCalendar(year, month) {
    calendarGrid.innerHTML = ''; // Vymaže předchozí kalendář

    const firstDay = new Date(year, month, 1); // První den měsíce
    const lastDay = new Date(year, month + 1, 0); // Poslední den měsíce
    const daysInMonth = lastDay.getDate(); // Počet dnů v měsíci
    const startingDay = firstDay.getDay(); // Den v týdnu, kterým měsíc začíná (0=Neděle, 1=Pondělí, atd.)

    const activityData = getActivityData(year, month); // Získání dat o aktivitě

    currentMonthDisplay.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' }); // Zobrazí název měsíce a rok

    // Vytvoření prázdných buněk pro dny před prvním dnem měsíce
    for (let i = 0; i < startingDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day', 'inactive');
        calendarGrid.appendChild(dayDiv);
    }

    // Vytvoření buněk pro jednotlivé dny v měsíci
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;

        // Přidání třídy pro vizualizaci aktivity
        const activityClass = getActivityClass(day, activityData);
        if (activityClass) {
            dayDiv.classList.add(activityClass);
        }

        // Označení aktuálního dne
        if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
            dayDiv.classList.add('active');
        }

        // Event listener pro kliknutí na den (pro budoucí funkčnost)
        dayDiv.addEventListener('click', () => {
            // Zde by se mohlo zobrazit detailnější info o aktivitě v daný den
            console.log(`Kliknuto na den: ${day}.${month + 1}.${year}`);

        });

        calendarGrid.appendChild(dayDiv);
    }
}

// Event listenery pro tlačítka pro změnu měsíce
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

// Inicializace kalendáře při načtení stránky
generateCalendar(currentYear, currentMonth);

// Uprav funkci evaluateTest tak, aby ukládala data o aktivitě
const originalEvaluateTest = evaluateTest; // Ulož si původní funkci
evaluateTest = function () {
    originalEvaluateTest.apply(this); // Spusť původní funkci

    const correct = parseInt(resultCorrect.textContent); // Získej počet správných odpovědí
    const total = parseInt(resultTotal.textContent); // Získej celkový počet otázek

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const activityData = getActivityData(year, month);

    let testCount = activityData[day] || 0;
    testCount += 1;

    // Ulož data o aktivitě (počet testů za den)
    saveActivityData(year, month, day, testCount);
    generateCalendar(currentYear, currentMonth); // Aktualizuj kalendář
};
function updateAchievements(userData, correct, total) {

    // XP Sběratel
    userData.achievements.xpCollector = calculateLevel(
        achievementLevels.xpCollector.levels,
        userData.totalXP
    );
    // Nezastavitelný
    userData.achievements.unstoppable = calculateLevel(
        achievementLevels.unstoppable.levels,
        userData.dayStreak
    );
    // Bezchybník
    userData.achievements.flawless = calculateLevel(
        achievementLevels.flawless.levels,
        userData.flawlessTestCount
    );
    // Vítězná série
    userData.achievements.winningStreak = calculateLevel(
        achievementLevels.winningStreak.levels,
        userData.winningStreakCount
    );

    // Znalec témat
    userData.achievements.topicMaster = calculateLevel(
        achievementLevels.topicMaster.levels,
        userData.completedTopics.size
    );

    // Ranní ptáče
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 8) {
        userData.achievements.earlyBirdCount = (userData.achievements.earlyBirdCount || 0) + 1;
    }
    userData.achievements.earlyBird = calculateLevel(
        achievementLevels.earlyBird.levels,
        userData.achievements.earlyBirdCount || 0
    );

    // Večerní sova
    if (hour >= 21 || hour < 1) {
        userData.achievements.nightOwlCount = (userData.achievements.nightOwlCount || 0) + 1;
    }
    userData.achievements.nightOwl = calculateLevel(
        achievementLevels.nightOwl.levels,
        userData.achievements.nightOwlCount || 0
    );

    // Maratonec
    const marathonTests = userData.testsToday || 0;
    userData.achievements.marathoner = calculateLevel(
        achievementLevels.marathoner.levels,
        marathonTests
    );
}
function calculateLevel(levels, value) {
    let level = 0;
    for (let i = 0; i < levels.length; i++) {
        if (value >= levels[i]) {
            level = i + 1;
        } else {
            break;
        }
    }
    return level;
}
