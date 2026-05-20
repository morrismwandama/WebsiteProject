// ============================================================
    // STEP 1: THE DATA
    // A lookup table — each key is a country code (e.g. "NG"),
    // and the value is an object with that country's details.
    // ============================================================
      countryData = {
  AO: { flag:"🇦🇴", capital:"Luanda", pop:"36.7M", area:"1,246,700 km²",
    fact:"Across Angola’s countryside, entire towns were abandoned after the civil war, leaving behind rusting tanks and overgrown streets frozen in time." },

  BF: { flag:"🇧🇫", capital:"Ouagadougou", pop:"22.7M", area:"274,200 km²",
    fact:"In parts of Burkina Faso, edible caterpillars are harvested seasonally and roasted as a traditional high-protein street snack." },

  BI: { flag:"🇧🇮", capital:"Gitega", pop:"13.2M", area:"27,830 km²",
    fact:"Burundi’s drumming tradition is so important that royal drums were historically treated like sacred objects with their own guardians and ceremonies." },

  BJ: { flag:"🇧🇯", capital:"Porto-Novo", pop:"13.8M", area:"112,622 km²",
    fact:"Benin’s Vodun traditions helped inspire global zombie folklore long before Hollywood reimagined the idea." },

  BW: { flag:"🇧🇼", capital:"Gaborone", pop:"2.6M", area:"581,730 km²",
    fact:"During dry seasons, elephants sometimes eat fermented marula fruit that naturally drops from trees and can mildly intoxicate them." },

  CD: { flag:"🇨🇩", capital:"Kinshasa", pop:"102M", area:"2,344,858 km²",
    fact:"The Congo River is so deep in places that large sections remain unexplored, and scientists still discover strange deep-water species." },

  CF: { flag:"🇨🇫", capital:"Bangui", pop:"5.6M", area:"622,984 km²",
    fact:"Forest elephants in the Central African Republic move so silently through dense jungle that they are often detected only by broken branches, not sound." },

  CG: { flag:"🇨🇬", capital:"Brazzaville", pop:"6M", area:"342,000 km²",
    fact:"The Congo River basin contains fish species so unusual that some look more like creatures from deep ocean trenches than freshwater life." },

  CI: { flag:"🇨🇮", capital:"Yamoussoukro", pop:"27.5M", area:"322,463 km²",
    fact:"Côte d’Ivoire’s mask festivals feature enormous carved masks believed to temporarily transform performers into forest spirits." },

  CM: { flag:"🇨🇲", capital:"Yaoundé", pop:"28.5M", area:"475,442 km²",
    fact:"Lake Nyos in Cameroon once released a sudden burst of carbon dioxide gas that spread silently and changed scientific understanding of volcanic lakes." },

  DJ: { flag:"🇩🇯", capital:"Djibouti", pop:"1.1M", area:"23,200 km²",
    fact:"Some salt lakes in Djibouti are so smooth and reflective they resemble giant mirrors embedded in the desert landscape." },

  DZ: { flag:"🇩🇿", capital:"Algiers", pop:"46M", area:"2,381,741 km²",
    fact:"In Algeria’s Sahara region, clever macaques have been observed stealing food from tourists in coordinated distraction tactics." },

  EG: { flag:"🇪🇬", capital:"Cairo", pop:"106M", area:"1,001,450 km²",
    fact:"The Great Pyramid of Giza is the only surviving wonder of the ancient world, built with stones so precisely placed they still puzzle engineers today." },

  EH: { flag:"🇪🇭", capital:"Laayoune", pop:"600K", area:"266,000 km²",
    fact:"Western Sahara is one of the least densely populated regions on Earth, where vast stretches of desert can go untouched for hundreds of kilometers." },

  ER: { flag:"🇪🇷", capital:"Asmara", pop:"3.7M", area:"117,600 km²",
    fact:"Asmara’s streets are often called an open-air museum of Art Deco architecture, preserved from the Italian colonial era like a frozen time capsule." },

  ET: { flag:"🇪🇹", capital:"Addis Ababa", pop:"126M", area:"1,104,300 km²",
    fact:"Ethiopia’s coffee origin story goes back over a thousand years, where legend says a goat herder first discovered coffee’s energizing effect." },

  GA: { flag:"🇬🇦", capital:"Libreville", pop:"2.4M", area:"267,668 km²",
    fact:"Gabon is one of the greenest countries on Earth, with vast rainforests that still shelter forest elephants, gorillas, and rare wildlife." },

  GH: { flag:"🇬🇭", capital:"Accra", pop:"33M", area:"238,533 km²",
    fact:"Ghana was the first sub-Saharan African nation to gain independence, sparking a wave of liberation movements across the continent." },

  GM: { flag:"🇬🇲", capital:"Banjul", pop:"2.7M", area:"11,295 km²",
    fact:"The Gambia is so narrow that in some places you can travel from one side of the country to the other in under an hour." },

  GN: { flag:"🇬🇳", capital:"Conakry", pop:"13.5M", area:"245,857 km²",
    fact:"Guinea’s highlands feed three major West African rivers, earning the region its nickname as the ‘water tower of West Africa’." },

  GQ: { flag:"🇬🇶", capital:"Malabo", pop:"1.5M", area:"28,051 km²",
    fact:"Equatorial Guinea is one of Africa’s smallest countries but among its largest oil producers, creating a sharp contrast between size and wealth." },

  GW: { flag:"🇬🇼", capital:"Bissau", pop:"2.1M", area:"36,125 km²",
    fact:"In Guinea-Bissau’s Bijagós Islands, saltwater hippos have been seen swimming between ocean islands, one of the rarest animal behaviors on Earth." },

  KE: { flag:"🇰🇪", capital:"Nairobi", pop:"55M", area:"580,367 km²",
    fact:"Kenya’s Maasai Mara hosts one of the greatest wildlife migrations on Earth, where millions of animals cross crocodile-filled rivers each year." },

  LR: { flag:"🇱🇷", capital:"Monrovia", pop:"5.4M", area:"111,369 km²",
    fact:"Liberia was founded by freed slaves in the 1800s and is one of the few African countries never fully colonized by European powers." },

  LS: { flag:"🇱🇸", capital:"Maseru", pop:"2.3M", area:"30,355 km²",
    fact:"Lesotho is the only country entirely above 1,400 meters in elevation, making it one of the highest nations on Earth." },

  LY: { flag:"🇱🇾", capital:"Tripoli", pop:"7.4M", area:"1,759,540 km²",
    fact:"Libya contains the ruins of Leptis Magna, one of the most perfectly preserved Roman cities outside Italy." },

  MA: { flag:"🇲🇦", capital:"Rabat", pop:"37.5M", area:"446,550 km²",
    fact:"Morocco is the only African country touching both the Atlantic Ocean and the Mediterranean Sea, giving it incredibly diverse climates." },

  MG: { flag:"🇲🇬", capital:"Antananarivo", pop:"28.9M", area:"587,041 km²",
    fact:"Madagascar split from India millions of years ago, and over 90% of its wildlife exists nowhere else on Earth." },

  ML: { flag:"🇲🇱", capital:"Bamako", pop:"22.4M", area:"1,240,192 km²",
    fact:"Timbuktu was once a global center of learning, home to thousands of manuscripts on science, astronomy, and philosophy." },

  MR: { flag:"🇲🇷", capital:"Nouakchott", pop:"4.7M", area:"1,030,700 km²",
    fact:"Chinguetti in Mauritania was once a key stop for pilgrims crossing the Sahara toward Mecca." },

  MW: { flag:"🇲🇼", capital:"Lilongwe", pop:"20.4M", area:"118,484 km²",
    fact:"Lake Malawi contains more fish species than almost any other lake in the world, many found nowhere else." },

  MZ: { flag:"🇲🇿", capital:"Maputo", pop:"32.8M", area:"801,590 km²",
    fact:"Mozambique’s long coastline plays a major role in Indian Ocean trade routes that have been active for centuries." },

  NA: { flag:"🇳🇦", capital:"Windhoek", pop:"2.6M", area:"824,292 km²",
    fact:"Namibia’s desert dunes are among the tallest in the world, shaped by winds over tens of thousands of years." },

  NE: { flag:"🇳🇪", capital:"Niamey", pop:"25.3M", area:"1,267,000 km²",
    fact:"Ancient rock carvings in Niger show that the Sahara once supported elephants, giraffes, and lush green landscapes." },

  NG: { flag:"🇳🇬", capital:"Abuja", pop:"220M", area:"923,768 km²",
    fact:"Nigeria’s film industry produces thousands of movies each year, making it one of the largest entertainment industries in the world." },

  RW: { flag:"🇷🇼", capital:"Kigali", pop:"13.8M", area:"26,338 km²",
    fact:"Rwanda is known for its rapid recovery and environmental cleanliness efforts, often ranked among Africa’s most organized countries." },

  SD: { flag:"🇸🇩", capital:"Khartoum", pop:"46.8M", area:"1,861,484 km²",
    fact:"Sudan is home to more pyramids than Egypt, built by the ancient Kushite civilization along the Nile." },

  SL: { flag:"🇸🇱", capital:"Freetown", pop:"8.4M", area:"71,740 km²",
    fact:"Sierra Leone’s name comes from Portuguese explorers who thought the mountains sounded like roaring lions during storms." },

  SN: { flag:"🇸🇳", capital:"Dakar", pop:"17.8M", area:"196,722 km²",
    fact:"Lake Retba in Senegal turns bright pink due to salt-loving microorganisms thriving in its extreme salinity." },

  SO: { flag:"🇸🇴", capital:"Mogadishu", pop:"18.1M", area:"637,657 km²",
    fact:"Somalia has one of Africa’s longest coastlines, stretching over thousands of kilometers along key global shipping routes." },

  SS: { flag:"🇸🇸", capital:"Juba", pop:"11.4M", area:"619,745 km²",
    fact:"South Sudan’s wetlands form one of the largest freshwater ecosystems in Africa, supporting massive seasonal wildlife migrations." },

  SZ: { flag:"🇸🇿", capital:"Mbabane", pop:"1.2M", area:"17,364 km²",
    fact:"Eswatini is one of Africa’s last absolute monarchies, where royal traditions still play a major role in national life." },

  TD: { flag:"🇹🇩", capital:"N'Djamena", pop:"17.4M", area:"1,284,000 km²",
    fact:"Lake Chad has shrunk dramatically over decades, becoming a major symbol of environmental change in the region." },

  TG: { flag:"🇹🇬", capital:"Lomé", pop:"8.7M", area:"56,785 km²",
    fact:"Togo’s ancient clay tower homes are still inhabited today and reflect centuries-old architectural traditions." },

  TN: { flag:"🇹🇳", capital:"Tunis", pop:"12M", area:"163,610 km²",
    fact:"Carthage once rivaled Rome for dominance of the Mediterranean before being destroyed in ancient wars." },

  TZ: { flag:"🇹🇿", capital:"Dodoma", pop:"63.6M", area:"945,087 km²",
    fact:"Tanzania is home to Mount Kilimanjaro, Africa’s highest peak, and the vast wildlife plains of the Serengeti." },

  UG: { flag:"🇺🇬", capital:"Kampala", pop:"48.6M", area:"241,038 km²",
    fact:"Uganda protects nearly half of the world’s remaining mountain gorillas in its dense rainforest reserves." },

  ZA: { flag:"🇿🇦", capital:"Pretoria", pop:"60.6M", area:"1,219,090 km²",
    fact:"South Africa uniquely has three capital cities, each serving different branches of government." },

  ZM: { flag:"🇿🇲", capital:"Lusaka", pop:"19.5M", area:"752,618 km²",
    fact:"Victoria Falls is so wide and powerful that its local name means ‘The Smoke That Thunders’." },

  ZW: { flag:"🇿🇼", capital:"Harare", pop:"15.1M", area:"390,757 km²",
    fact:"Great Zimbabwe’s stone ruins were built without mortar and remain one of Africa’s most impressive ancient architectural sites." }
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

    
    // STEP 3: TRACK STATE
    // Which country is currently selected? Which have been visited?
    
    let selectedCountry = null;        // the currently highlighted <path>
    const visitedCountries = new Set(); // tracks unique countries clicked
    
    // STEP 4: ATTACH EVENTS TO EVERY COUNTRY PATH
    // querySelectorAll gives us all <path> elements as a list.
    // We loop through each one and add mouse event listeners.
    
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