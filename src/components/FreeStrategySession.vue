<template>
  <!-- Unified Calendar and Details Container -->
  <div class="calendar-container p-8 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row justify-between">

    <!-- Left Side: Logo and Details -->
    <div class="md:w-1/3 w-full p-8 flex flex-col items-center">
      <!-- Logo -->
      <img src="../assets/logo.svg" alt="Your Logo" class="w-40 mb-4">

      <!-- Session Title -->
      <h2 class="text-3xl font-bold text-center">Book a Free Strategy Session</h2>

      <!-- Duration -->
      <p class="text-center mt-2 text-sm">30 min</p>

      <!-- Description -->
      <p class="text-center text-gray-500">Web conferencing details provided upon confirmation.</p>

      <!-- Time Zone Selection -->
      <div class="mt-4 text-center">
        <label class="block text-gray-500 mb-1">Select Time Zone</label>
        <select v-model="selectedTimeZone" class="border rounded px-2 py-1">
          <option v-for="(zone, index) in timeZones" :key="index" :value="zone">{{ zone }}</option>
        </select>
      </div>
    </div>

    <!-- Right Side: Custom Calendar -->
    <div class="md:w-2/3 w-full p-8">
      <!-- Header: Month and Year with Navigation -->
      <div class="flex justify-between items-center mb-4">
        <button @click="previousMonth" class="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 flex items-center">
          <i class="fas fa-chevron-left"></i> <!-- Font Awesome left arrow -->
        </button>
        <h2 class="text-xl font-bold">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
        <button @click="nextMonth" class="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 flex items-center">
          <i class="fas fa-chevron-right"></i> <!-- Font Awesome right arrow -->
        </button>
      </div>

      <!-- Day Labels -->
      <div class="grid grid-cols-7 gap-2 text-center font-bold mb-2">
        <div v-for="(day, index) in dayNames" :key="index">{{ day }}</div>
      </div>

      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 gap-2 text-center">
        <!-- Empty cells for days before the 1st of the current month -->
        <div v-for="blank in blankDays" :key="blank"></div>

        <!-- Calendar Days -->
        <div v-for="day in daysInMonth" :key="day">
          <button
              @click="selectDate(day)"
              :class="['w-full py-2 rounded', selectedDate === day ? 'bg-teal-500 text-white' : 'bg-white hover:bg-gray-200']"
          >
            {{ day }}
          </button>
        </div>
      </div>

      <!-- Selected Date and Time Slots -->
      <div v-if="selectedDate" class="mt-6">
        <h3 class="text-xl font-bold mb-2">Selected Date: {{ formattedSelectedDate }}</h3>
        <div>
          <label class="block text-sm font-bold mb-2">Select a Time</label>
          <div class="grid grid-cols-2 gap-2">
            <button v-for="time in availableTimes"
                    :key="time"
                    class="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200">
              {{ time }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      selectedDate: null,
      selectedTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Default to the device's current time zone
      availableTimes: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"], // Example time slots
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ],
      timeZones: [
        // Add more time zones as necessary
        "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Bamako",
        "Africa/Bangui", "Africa/Banjul", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo",
        "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam",
        "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone",
        "Africa/Harare", "Africa/Johannesburg", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali",
        "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lusaka",
        "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu",
        "Africa/Nairobi", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo",
        "Africa/Sao_Tome", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage",
        "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires",
        "America/Argentina/Catamarca", "America/Argentina/ComodRivadavia", "America/Argentina/Cordoba",
        "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza",
        "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan",
        "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia",
        "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas",
        "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon",
        "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay",
        "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne",
        "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica",
        "America/Creston", "America/Cuiaba", "America/Curacao", "America/Dawson", "America/Dawson_Creek",
        "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe",
        "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay",
        "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe",
        "America/Guatemala", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo",
        "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo",
        "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay",
        "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit",
        "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello",
        "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles",
        "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua",
        "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros",
        "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla",
        "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey",
        "America/Montevideo", "America/Nassau", "America/New_York", "America/Nipigon",
        "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem", "America/Northwest_Territory", "America/Ojinaga",
        "America/Panama", "America/Phoenix", "America/Port-au-Prince", "America/Porto_Velho",
        "America/Puerto_Rico", "America/Rainy_River", "America/Rankin_Inlet", "America/Regina",
        "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago",
        "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Shiprock",
        "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts",
        "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current",
        "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana",
        "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse",
        "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey",
        "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/McMurdo",
        "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll",
        "Antarctica/Vostok", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr",
        "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Ashkhabad", "Asia/Baghdad",
        "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Bishkek", "Asia/Brunei",
        "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka",
        "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza",
        "Asia/Harbin", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd",
        "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul",
        "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Krasnoyarsk",
        "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Magadan", "Asia/Makassar", "Asia/Manila",
        "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk",
        "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Qatar", "Asia/Qyzylorda",
        "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai",
        "Asia/Singapore", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran",
        "Asia/Thimphu", "Asia/Tokyo", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Vientiane",
        "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg",
        "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary",
        "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Jan_Mayen", "Atlantic/Madeira",
        "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley",
        "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie",
        "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman",
        "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Australia/Tasmania",
        "Australia/West", "Etc/GMT", "Etc/GMT+0", "Etc/GMT+1", "Etc/GMT+10", "Etc/GMT+11",
        "Etc/GMT+12", "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6",
        "Etc/GMT+7", "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT-0", "Etc/GMT-1", "Etc/GMT-10",
        "Etc/GMT-11", "Etc/GMT-12", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5",
        "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/UTC", "Europe/Amsterdam",
        "Europe/Andorra", "Europe/Athens", "Europe/Belfast", "Europe/Belgrade", "Europe/Bucharest",
        "Europe/Budapest", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar",
        "Europe/Helsinki", "Europe/Istanbul", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Lisbon",
        "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta",
        "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Prague", "Europe/Riga",
        "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Simferopol",
        "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Vaduz",
        "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb",
        "Europe/Zaporozhye", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos",
        "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius",
        "Indian/Mayotte", "Indian/Republic_of", "Indian/Seychelles", "Indian/Tromelin",
        "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham",
        "Pacific/Easter", "Pacific/Efate", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti",
        "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam",
        "Pacific/Honolulu", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Majuro",
        "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue",
        "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau",
        "Pacific/Pitcairn", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga",
        "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu",
        "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis", "Pacific/Yap"
      ]
    };
  },
  computed: {
    daysInMonth() {
      return [...Array(new Date(this.currentYear, this.currentMonth + 1, 0).getDate()).keys()].map(i => i + 1);
    },
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    blankDays() {
      return Array(this.firstDayOfMonth).fill(null);
    },
    formattedSelectedDate() {
      return this.selectedDate
          ? `${this.monthNames[this.currentMonth]} ${this.selectedDate}, ${this.currentYear}`
          : '';
    }
  },
  methods: {
    previousMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(day) {
      this.selectedDate = day;
    }
  }
};
</script>

<style scoped>
.calendar-container {
  max-width: 80vw;
  margin: auto;
}
</style>
