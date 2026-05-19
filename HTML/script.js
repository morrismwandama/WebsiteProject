// ============================================================
    // STEP 1: THE DATA
    // A lookup table — each key is a country code (e.g. "NG"),
    // and the value is an object with that country's details.
    // ============================================================
    const countryData = {
      AO: { flag:"🇦🇴", capital:"Luanda",       pop:"36.7M",  area:"1,246,700 km²", fact:"There are ghost towns filled with rusting tanks left behind in the wilderness." },
      BF: { flag:"🇧🇫", capital:"Ouagadougou",  pop:"22.7M",  area:"274,200 km²",   fact:"Giant caterpillars are considered a crunchy snack in some areas." },
      BI: { flag:"🇧🇮", capital:"Gitega",        pop:"13.2M",  area:"27,830 km²",    fact:"Drum performances were once so sacred that certain drums had personal names and bodyguards." },
      BJ: { flag:"🇧🇯", capital:"Porto-Novo",   pop:"13.8M",  area:"112,622 km²",   fact:"The modern zombie myth partly traces back to Vodun traditions from Benin." },
      BW: { flag:"🇧🇼", capital:"Gaborone",     pop:"2.6M",   area:"581,730 km²",   fact:"Elephants sometimes get drunk from fermented marula fruit." },
      CD: { flag:"🇨🇩", capital:"Kinshasa",     pop:"102M",   area:"2,344,858 km²", fact:"The Congo River is so deep that scientists still struggle to fully explore parts of it — some fish there look almost alien." },
      CF: { flag:"🇨🇫", capital:"Bangui",       pop:"5.6M",   area:"622,984 km²",   fact:"Forest elephants in the Central African Republic can move so quietly through jungle that people compare them to ghosts." },
      CG: { flag:"🇨🇬", capital:"Brazzaville",  pop:"6M",     area:"342,000 km²",   fact:"There are fish in the Congo River weird enough to look almost alien." },
      CI: { flag:"🇨🇮", capital:"Yamoussoukro", pop:"27.5M",  area:"322,463 km²",   fact:"Mask festivals can feature performers dressed as giant mythical forest beings." },
      CM: { flag:"🇨🇲", capital:"Yaoundé",      pop:"28.5M",  area:"475,442 km²",   fact:"One lake there can literally “burp” deadly gas from underground." },
      DJ: { flag:"🇩🇯", capital:"Djibouti",     pop:"1.1M",   area:"23,200 km²",    fact:"Djibouti's salt lakes are so reflective they can look like giant mirrors dropped into the desert." },
      DZ: { flag:"🇩🇿", capital:"Algiers",      pop:"46M",    area:"2,381,741 km²", fact:"Monkeys in the Sahara have been caught stealing tourists’ snacks like organized pickpockets." },
      EG: { flag:"🇪🇬", capital:"Cairo",        pop:"106M",   area:"1,001,450 km²", fact:"Egypt's Great Pyramid of Giza is the only surviving structure from the original Seven Wonders of the Ancient World, built around 2560 BC." },
      EH: { flag:"🇪🇭", capital:"Laayoune",     pop:"600K",   area:"266,000 km²",   fact:"Western Sahara is one of the most sparsely populated territories on Earth — fewer than 600,000 people across 266,000 km² of Sahara desert." },
      ER: { flag:"🇪🇷", capital:"Asmara",       pop:"3.7M",   area:"117,600 km²",   fact:"Eritrea's capital Asmara is a UNESCO World Heritage city, famed for its perfectly preserved Italian Modernist and Art Deco architecture from the colonial era." },
      ET: { flag:"🇪🇹", capital:"Addis Ababa",  pop:"126M",   area:"1,104,300 km²", fact:"Ethiopia is one of only two African countries never fully colonised, and it is the birthplace of coffee — the word likely derives from the region of Kaffa." },
      GA: { flag:"🇬🇦", capital:"Libreville",   pop:"2.4M",   area:"267,668 km²",   fact:"Gabon has placed over 11% of its territory under national-park protection and retains more than 85% forest cover, making it one of the greenest countries on Earth." },
      GH: { flag:"🇬🇭", capital:"Accra",        pop:"33M",    area:"238,533 km²",   fact:"Ghana was the first sub-Saharan African country to gain independence in 1957. Its name echoes a powerful medieval empire that once controlled trans-Saharan gold trade." },
      GM: { flag:"🇬🇲", capital:"Banjul",       pop:"2.7M",   area:"11,295 km²",    fact:"The Gambia is the smallest country on mainland Africa — a narrow strip just 50 km wide on each side of the Gambia River, entirely surrounded by Senegal." },
      GN: { flag:"🇬🇳", capital:"Conakry",      pop:"13.5M",  area:"245,857 km²",   fact:"Guinea's Fouta Djallon highlands are the 'water tower of West Africa' — the Niger, Senegal, and Gambia rivers all have their sources within this plateau." },
      GQ: { flag:"🇬🇶", capital:"Malabo",       pop:"1.5M",   area:"28,051 km²",    fact:"Equatorial Guinea is the only Spanish-speaking country in sub-Saharan Africa, and despite its tiny size, it is one of Africa's largest oil producers." },
      GW: { flag:"🇬🇼", capital:"Bissau",       pop:"2.1M",   area:"36,125 km²",    fact:"Guinea-Bissau's Bijagós Archipelago is the only place in the world where saltwater hippos live wild in the ocean, swimming freely between islands." },
      KE: { flag:"🇰🇪", capital:"Nairobi",      pop:"55M",    area:"580,367 km²",   fact:"Kenya's Maasai Mara hosts the Great Migration — 1.5 million wildebeest and 250,000 zebras cross the crocodile-filled Mara River each year." },
      LR: { flag:"🇱🇷", capital:"Monrovia",     pop:"5.4M",   area:"111,369 km²",   fact:"Liberia was Africa's first republic (1847), founded by freed American and Caribbean slaves. It is also home to the world's largest rubber plantation, run by Firestone." },
      LS: { flag:"🇱🇸", capital:"Maseru",       pop:"2.3M",   area:"30,355 km²",    fact:"Lesotho is one of only three countries completely surrounded by another country. No land in Lesotho sits below 1,400 m — the world's highest 'lowest point'." },
      LY: { flag:"🇱🇾", capital:"Tripoli",      pop:"7.4M",   area:"1,759,540 km²", fact:"Libya holds Africa's largest proven oil reserves and contains the Roman ruins of Leptis Magna — considered among the best-preserved Roman cities anywhere on Earth." },
      MA: { flag:"🇲🇦", capital:"Rabat",        pop:"37.5M",  area:"446,550 km²",   fact:"Morocco is the only African country with coastlines on both the Atlantic Ocean and the Mediterranean Sea, producing a dramatic range of climates." },
      MG: { flag:"🇲🇬", capital:"Antananarivo", pop:"28.9M",  area:"587,041 km²",   fact:"Madagascar broke away from the Indian subcontinent ~88 million years ago. Over 90% of its wildlife exists nowhere else on Earth — including all lemur species." },
      ML: { flag:"🇲🇱", capital:"Bamako",       pop:"22.4M",  area:"1,240,192 km²", fact:"Mali's ancient Timbuktu was the intellectual capital of the Islamic world, home to 25,000 university students and 700,000 manuscripts at its 15th-century peak." },
      MR: { flag:"🇲🇷", capital:"Nouakchott",   pop:"4.7M",   area:"1,030,700 km²", fact:"Mauritania's city of Chinguetti was historically the seventh holiest city in Islam, a crossroads where pilgrims gathered before crossing the Sahara to Mecca." },
      MW: { flag:"🇲🇼", capital:"Lilongwe",     pop:"20.4M",  area:"118,484 km²",   fact:"Lake Malawi contains more freshwater fish species than any other lake on Earth — over 1,000 species of cichlids, most found nowhere else in the world." },
      MZ: { flag:"🇲🇿", capital:"Maputo",       pop:"32.8M",  area:"801,590 km²",   fact:"Mozambique has the longest coastline in southern Africa (2,470 km), and the Mozambique Channel is one of the planet's busiest shipping lanes." },
      NA: { flag:"🇳🇦", capital:"Windhoek",     pop:"2.6M",   area:"824,292 km²",   fact:"The Namib is Earth's oldest desert at ~55 million years old. Its Sossusvlei dunes — some reaching 300 m tall — are among the world's highest sand dunes." },
      NE: { flag:"🇳🇪", capital:"Niamey",       pop:"25.3M",  area:"1,267,000 km²", fact:"Niger is home to the Aïr Mountains, where 6,000-year-old rock art depicts hippos, crocodiles, and giraffes — proof the Sahara was once a green, watered landscape." },
      NG: { flag:"🇳🇬", capital:"Abuja",        pop:"220M",   area:"923,768 km²",   fact:"Nigeria is Africa's most populous nation (220 million+), and Nollywood produces more films annually than Hollywood — the world's second-largest film industry by volume." },
      RW: { flag:"🇷🇼", capital:"Kigali",       pop:"13.8M",  area:"26,338 km²",    fact:"Rwanda is the 'Land of a Thousand Hills' and a global model for post-conflict reconciliation. It also has one of the world's highest shares of women in parliament." },
      SD: { flag:"🇸🇩", capital:"Khartoum",     pop:"46.8M",  area:"1,861,484 km²", fact:"Sudan has more ancient pyramids than Egypt — over 200 Nubian pyramids, narrower and steeper, built by Kushite kingdoms between 700 BC and 350 AD." },
      SL: { flag:"🇸🇱", capital:"Freetown",     pop:"8.4M",   area:"71,740 km²",    fact:"Sierra Leone gets its name from 'Serra Leoa' (Lion Mountains) — named in 1462 after thunderstorms that Portuguese explorer Pedro de Sintra thought sounded like a lion's roar." },
      SN: { flag:"🇸🇳", capital:"Dakar",        pop:"17.8M",  area:"196,722 km²",   fact:"Senegal's Lake Retba (Lac Rose) turns bubblegum pink thanks to salt-loving algae, and its salinity rivals — and sometimes exceeds — the Dead Sea." },
      SO: { flag:"🇸🇴", capital:"Mogadishu",    pop:"18.1M",  area:"637,657 km²",   fact:"Somalia has the longest coastline on mainland Africa — over 3,300 km — and the Gulf of Aden off its northern shore is one of the world's most strategically vital waterways." },
      SS: { flag:"🇸🇸", capital:"Juba",         pop:"11.4M",  area:"619,745 km²",   fact:"South Sudan became the world's newest sovereign country on 9 July 2011. Its Sudd wetlands form one of the largest freshwater ecosystems on the planet." },
      SZ: { flag:"🇸🇿", capital:"Mbabane",      pop:"1.2M",   area:"17,364 km²",    fact:"Eswatini (formerly Swaziland) is ruled by one of Africa's last absolute monarchs. King Mswati III renamed the country in 2018 to shed its colonial name." },
      TD: { flag:"🇹🇩", capital:"N'Djamena",    pop:"17.4M",  area:"1,284,000 km²", fact:"Lake Chad once covered 25,000 km² — it has since shrunk by over 90%, one of the world's most dramatic examples of a disappearing water body driven by climate change." },
      TG: { flag:"🇹🇬", capital:"Lomé",         pop:"8.7M",   area:"56,785 km²",    fact:"Togo's Koutammakou landscape is a UNESCO World Heritage Site of the Batammariba people, whose remarkable fortified clay tower-houses have stood for centuries." },
      TN: { flag:"🇹🇳", capital:"Tunis",        pop:"12M",    area:"163,610 km²",   fact:"Carthage, near modern Tunis, was one of Rome's greatest rivals. The phrase 'Carthage must be destroyed' was repeated obsessively by Roman senator Cato the Elder." },
      TZ: { flag:"🇹🇿", capital:"Dodoma",       pop:"63.6M",  area:"945,087 km²",   fact:"Tanzania is home to Mount Kilimanjaro (Africa's highest peak, 5,895 m) and the Serengeti, where 3 million large mammals roam one of Earth's last great plains ecosystems." },
      UG: { flag:"🇺🇬", capital:"Kampala",      pop:"48.6M",  area:"241,038 km²",   fact:"Uganda is home to roughly half the world's remaining mountain gorillas (~450 individuals), protected in the misty slopes of Bwindi Impenetrable Forest." },
      ZA: { flag:"🇿🇦", capital:"Pretoria",     pop:"60.6M",  area:"1,219,090 km²", fact:"South Africa is the only country in the world with three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)." },
      ZM: { flag:"🇿🇲", capital:"Lusaka",       pop:"19.5M",  area:"752,618 km²",   fact:"Victoria Falls on Zambia's border with Zimbabwe is the world's largest waterfall by combined width and height. Its local name 'Mosi-oa-Tunya' means 'the smoke that thunders'." },
      ZW: { flag:"🇿🇼", capital:"Harare",       pop:"15.1M",  area:"390,757 km²",   fact:"Great Zimbabwe's massive dry-stone walls were built without mortar between the 11th and 15th centuries — the ruins span 7 km² and are Africa's largest ancient stone structures." }
    };

    // ============================================================
    // STEP 2: GET REFERENCES TO HTML ELEMENTS
    // We grab each element once so we can update them later.
    // ============================================================
    const tooltip     = document.getElementById('tooltip');
    const panelHeader = document.getElementById('panel-header');
    const panelStats  = document.getElementById('panel-stats');
    const panelFlag   = document.getElementById('panel-flag');
    const panelName   = document.getElementById('panel-name');
    const panelFact   = document.getElementById('panel-fact');
    const panelHint   = document.getElementById('panel-hint');
    const statCapital = document.getElementById('stat-capital');
    const statPop     = document.getElementById('stat-pop');
    const statArea    = document.getElementById('stat-area');
    const counter     = document.getElementById('counter');

    // ============================================================
    // STEP 3: TRACK STATE
    // Which country is currently selected? Which have been visited?
    // ============================================================
    let selectedCountry = null;        // the currently highlighted <path>
    const visitedCountries = new Set(); // tracks unique countries clicked

    // ============================================================
    // STEP 4: ATTACH EVENTS TO EVERY COUNTRY PATH
    // querySelectorAll gives us all <path> elements as a list.
    // We loop through each one and add mouse event listeners.
    // ============================================================
    const allPaths = document.querySelectorAll('#africa-map path');

    allPaths.forEach(function(path) {

      // --- HOVER: show the country name tooltip ---
      path.addEventListener('mouseenter', function() {
        tooltip.textContent   = path.dataset.name; // e.g. "Nigeria"
        tooltip.style.display = 'block';
      });
      path.addEventListener('mousemove', function(e) {
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY + 'px';
   });

      path.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
      });
     path.addEventListener('touchstart', function(e) {
       const touch = e.changedTouches[0];

       tooltip.textContent = path.dataset.name;
       tooltip.style.left = touch.pageX + 'px';
       tooltip.style.top = touch.pageY + 'px';
       tooltip.style.display = 'block';

       setTimeout(() => {
         tooltip.style.display = 'none';
       }, 1200);
    }); 

      // --- CLICK: show the country's info in the panel ---
      path.addEventListener('click', function() {

        // If this country is already selected, deselect it
        if (selectedCountry === path) {
          path.classList.remove('selected');
          selectedCountry = null;
          panelHeader.style.display = 'none';
          panelStats.style.display  = 'none';
          panelFact.textContent     = '';
          panelHint.style.display   = 'block';
          return; // stop here
        }

        // Remove highlight from the previously selected country
        if (selectedCountry) {
          selectedCountry.classList.remove('selected');
        }

        // Highlight the new country
        path.classList.add('selected');
        selectedCountry = path;

        // Look up this country's data using its id (e.g. "NG")
        const data = countryData[path.id];

        if (data) {
          // Fill in the panel with the country's details
          panelFlag.textContent      = data.flag;
          panelName.textContent      = path.dataset.name;
          statCapital.textContent    = data.capital;
          statPop.textContent        = data.pop;
          statArea.textContent       = data.area;
          panelFact.textContent      = data.fact;

          // Show the header and stats (they start hidden)
          panelHeader.style.display  = 'flex';
          panelStats.style.display   = 'flex';
        }

        // Hide the default hint text
        panelHint.style.display = 'none';

        // Add this country to the visited set and update the counter
        visitedCountries.add(path.id);
        counter.textContent = visitedCountries.size + ' of 50 countries explored';
      });

    }); // end forEach