import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityNameService {

  public cityList: CityList[] = [
    {
      id: 1,
      name: 'Adilabad',
    },
    {
      id: 2,
      name: 'Adwani',
    },
    {
      id: 3,
      name: 'Agartala',
    },
    {
      id: 4,
      name: 'Agra',
    },
    {
      id: 5,
      name: 'Ahmedabad',
    },
    {
      id: 6,
      name: 'Ahmednagar',
    },
    {
      id: 7,
      name: 'Aizawl',
    },
    {
      id: 8,
      name: 'Ajabpur',
    },
    {
      id: 9,
      name: 'Ajmer',
    },
    {
      id: 10,
      name: 'Akividu',
    },
    {
      id: 11,
      name: 'Akola',
    },
    {
      id: 12,
      name: 'Alanallur',
    },
    {
      id: 13,
      name: 'Alangulam',
    },
    {
      id: 14,
      name: 'Alappuzha',
    },
    {
      id: 15,
      name: 'Aldona',
    },
    {
      id: 16,
      name: 'Alibag',
    },
    {
      id: 17,
      name: 'Aligarh',
    },
    {
      id: 18,
      name: 'Alipur',
    },
    {
      id: 19,
      name: 'Allahabad',
    },
    {
      id: 20,
      name: 'Almora',
    },
    {
      id: 21,
      name: 'Aluva',
    },
    {
      id: 22,
      name: 'Alwar',
    },
    {
      id: 23,
      name: 'Amal',
    },
    {
      id: 24,
      name: 'Amalapuram',
    },
    {
      id: 25,
      name: 'Ambad',
    },
    {
      id: 26,
      name: 'Ambah',
    },
    {
      id: 27,
      name: 'Ambala',
    },
    {
      id: 28,
      name: 'Ambarnath',
    },
    {
      id: 29,
      name: 'Ambejogai',
    },
    {
      id: 30,
      name: 'Ambikapur',
    },
    {
      id: 31,
      name: 'Ambur',
    },
    {
      id: 32,
      name: 'Amer',
    },
    {
      id: 33,
      name: 'Amet',
    },
    {
      id: 34,
      name: 'Amravati',
    },
    {
      id: 35,
      name: 'Amreli',
    },
    {
      id: 36,
      name: 'Amritsar',
    },
    {
      id: 37,
      name: 'Anand',
    },
    {
      id: 38,
      name: 'Anantapur',
    },
    {
      id: 39,
      name: 'Anantnag',
    },
    {
      id: 40,
      name: 'Anantpur',
    },
    {
      id: 41,
      name: 'Anchal',
    },
    {
      id: 42,
      name: 'Andheri',
    },
    {
      id: 43,
      name: 'Andra',
    },
    {
      id: 44,
      name: 'Angadipuram',
    },
    {
      id: 45,
      name: 'Angul',
    },
    {
      id: 46,
      name: 'Ankleshwar',
    },
    {
      id: 47,
      name: 'Annamalainagar',
    },
    {
      id: 48,
      name: 'Antapur',
    },
    {
      id: 49,
      name: 'Arakkonam',
    },
    {
      id: 50,
      name: 'Arani',
    },
    {
      id: 51,
      name: 'Aranmula',
    },
    {
      id: 52,
      name: 'Arch',
    },
    {
      id: 53,
      name: 'Ariyalur',
    },
    {
      id: 54,
      name: 'Arora',
    },
    {
      id: 55,
      name: 'Arpora',
    },
    {
      id: 56,
      name: 'Arunachal',
    },
    {
      id: 57,
      name: 'Arvi',
    },
    {
      id: 58,
      name: 'Asansol',
    },
    {
      id: 59,
      name: 'Assagao',
    },
    {
      id: 60,
      name: 'Attingal',
    },
    {
      id: 61,
      name: 'Attur',
    },
    {
      id: 62,
      name: 'Aundh',
    },
    {
      id: 63,
      name: 'Aurangabad',
    },
    {
      id: 64,
      name: 'Avanigadda',
    },
    {
      id: 65,
      name: 'Azamgarh',
    },
    {
      id: 66,
      name: 'Baddi',
    },
    {
      id: 67,
      name: 'Badlapur',
    },
    {
      id: 68,
      name: 'Bagalkot',
    },
    {
      id: 69,
      name: 'Bagh',
    },
    {
      id: 70,
      name: 'Bagpat',
    },
    {
      id: 71,
      name: 'Bahadurgarh',
    },
    {
      id: 72,
      name: 'Baharampur',
    },
    {
      id: 73,
      name: 'Baidyabati',
    },
    {
      id: 74,
      name: 'Bala',
    },
    {
      id: 75,
      name: 'Balaghat',
    },
    {
      id: 76,
      name: 'Balana',
    },
    {
      id: 77,
      name: 'Balanagar',
    },
    {
      id: 78,
      name: 'Balangir',
    },
    {
      id: 79,
      name: 'Balasore',
    },
    {
      id: 80,
      name: 'Bali',
    },
    {
      id: 81,
      name: 'Ballabgarh',
    },
    {
      id: 82,
      name: 'Balu',
    },
    {
      id: 83,
      name: 'Balurghat',
    },
    {
      id: 84,
      name: 'Bambolim',
    },
    {
      id: 85,
      name: 'Banda',
    },
    {
      id: 86,
      name: 'Bandra',
    },
    {
      id: 87,
      name: 'Banga',
    },
    {
      id: 88,
      name: 'Bangalore',
    },
    {
      id: 89,
      name: 'Bangaon',
    },
    {
      id: 90,
      name: 'Bank',
    },
    {
      id: 91,
      name: 'Banka',
    },
    {
      id: 92,
      name: 'Bankura',
    },
    {
      id: 93,
      name: 'Banswara',
    },
    {
      id: 94,
      name: 'Bapatla',
    },
    {
      id: 95,
      name: 'Barakpur',
    },
    {
      id: 96,
      name: 'Baramati',
    },
    {
      id: 97,
      name: 'Barddhaman',
    },
    {
      id: 98,
      name: 'Bardoli',
    },
    {
      id: 99,
      name: 'Bareilly',
    },
    {
      id: 100,
      name: 'Bargarh',
    },
    {
      id: 101,
      name: 'Barmer',
    },
    {
      id: 102,
      name: 'Barnala',
    },
    {
      id: 103,
      name: 'Baroda',
    },
    {
      id: 104,
      name: 'Barpali',
    },
    {
      id: 105,
      name: 'Barpeta',
    },
    {
      id: 106,
      name: 'Basirhat',
    },
    {
      id: 107,
      name: 'Basti',
    },
    {
      id: 108,
      name: 'Basu',
    },
    {
      id: 109,
      name: 'Batala',
    },
    {
      id: 110,
      name: 'Bawan',
    },
    {
      id: 111,
      name: 'Bawana',
    },
    {
      id: 112,
      name: 'Beawar',
    },
    {
      id: 113,
      name: 'Begusarai',
    },
    {
      id: 114,
      name: 'Behala',
    },
    {
      id: 115,
      name: 'Bela',
    },
    {
      id: 116,
      name: 'Belapur',
    },
    {
      id: 117,
      name: 'Belgaum',
    },
    {
      id: 118,
      name: 'Belgharia',
    },
    {
      id: 119,
      name: 'Bellare',
    },
    {
      id: 120,
      name: 'Bellary',
    },
    {
      id: 121,
      name: 'Bemetara',
    },
    {
      id: 122,
      name: 'Berasia',
    },
    {
      id: 123,
      name: 'Betalbatim',
    },
    {
      id: 124,
      name: 'Betim',
    },
    {
      id: 125,
      name: 'Betul',
    },
    {
      id: 126,
      name: 'Bhadath',
    },
    {
      id: 127,
      name: 'Bhadohi',
    },
    {
      id: 128,
      name: 'Bhadravati',
    },
    {
      id: 129,
      name: 'Bhagalpur',
    },
    {
      id: 130,
      name: 'Bhagwan',
    },
    {
      id: 131,
      name: 'Bhandari',
    },
    {
      id: 132,
      name: 'Bhandup',
    },
    {
      id: 133,
      name: 'Bharatpur',
    },
    {
      id: 134,
      name: 'Bharuch',
    },
    {
      id: 135,
      name: 'Bhatapara',
    },
    {
      id: 136,
      name: 'Bhatinda',
    },
    {
      id: 137,
      name: 'Bhatkal',
    },
    {
      id: 138,
      name: 'Bhavnagar',
    },
    {
      id: 139,
      name: 'Bhawan',
    },
    {
      id: 140,
      name: 'Bhilai',
    },
    {
      id: 141,
      name: 'Bhilwara',
    },
    {
      id: 142,
      name: 'Bhimavaram',
    },
    {
      id: 143,
      name: 'Bhiwandi',
    },
    {
      id: 144,
      name: 'Bhiwani',
    },
    {
      id: 145,
      name: 'Bhoj',
    },
    {
      id: 146,
      name: 'Bhongir',
    },
    {
      id: 147,
      name: 'Bhopal',
    },
    {
      id: 148,
      name: 'Bhubaneswar',
    },
    {
      id: 149,
      name: 'Bhuj',
    },
    {
      id: 150,
      name: 'Bhusawal',
    },
    {
      id: 151,
      name: 'Bichpuri',
    },
    {
      id: 152,
      name: 'Bidar',
    },
    {
      id: 153,
      name: 'Bihar Sharif',
    },
    {
      id: 154,
      name: 'Bijapur',
    },
    {
      id: 155,
      name: 'Bikaner',
    },
    {
      id: 156,
      name: 'Bilaspur',
    },
    {
      id: 157,
      name: 'Bilimora',
    },
    {
      id: 158,
      name: 'Binavas',
    },
    {
      id: 159,
      name: 'Binnaguri',
    },
    {
      id: 160,
      name: 'Bishnupur',
    },
    {
      id: 161,
      name: 'Bobbili',
    },
    {
      id: 162,
      name: 'Bodhan',
    },
    {
      id: 163,
      name: 'Bodinayakkanur',
    },
    {
      id: 164,
      name: 'Boisar',
    },
    {
      id: 165,
      name: 'Bokaro',
    },
    {
      id: 166,
      name: 'Bolpur',
    },
    {
      id: 167,
      name: 'Botad',
    },
    {
      id: 168,
      name: 'Brahmapur',
    },
    {
      id: 169,
      name: 'Budaun',
    },
    {
      id: 170,
      name: 'Budbud',
    },
    {
      id: 171,
      name: 'Budha',
    },
    {
      id: 172,
      name: 'Bulandshahr',
    },
    {
      id: 173,
      name: 'Bundi',
    },
    {
      id: 174,
      name: 'Calangute',
    },
    {
      id: 175,
      name: 'Candolim',
    },
    {
      id: 176,
      name: 'Canning',
    },
    {
      id: 177,
      name: 'Caranzalem',
    },
    {
      id: 178,
      name: 'Chakan',
    },
    {
      id: 179,
      name: 'Chakra',
    },
    {
      id: 180,
      name: 'Chalisgaon',
    },
    {
      id: 181,
      name: 'Chamba',
    },
    {
      id: 182,
      name: 'Champa',
    },
    {
      id: 183,
      name: 'Chand',
    },
    {
      id: 184,
      name: 'Chandan',
    },
    {
      id: 185,
      name: 'Chandannagar',
    },
    {
      id: 186,
      name: 'Chandauli',
    },
    {
      id: 187,
      name: 'Chandausi',
    },
    {
      id: 188,
      name: 'Chandigarh',
    },
    {
      id: 189,
      name: 'Chandrapur',
    },
    {
      id: 190,
      name: 'Changanacheri',
    },
    {
      id: 191,
      name: 'Channapatna',
    },
    {
      id: 192,
      name: 'Charan',
    },
    {
      id: 193,
      name: 'Charu',
    },
    {
      id: 194,
      name: 'Chen',
    },
    {
      id: 195,
      name: 'Chengannur',
    },
    {
      id: 196,
      name: 'Chennai',
    },
    {
      id: 197,
      name: 'Chetan',
    },
    {
      id: 198,
      name: 'Cheyyar',
    },
    {
      id: 199,
      name: 'Chhabra',
    },
    {
      id: 200,
      name: 'Chhachhrauli',
    },
    {
      id: 201,
      name: 'Chhota Udepur',
    },
    {
      id: 202,
      name: 'Chicalim',
    },
    {
      id: 203,
      name: 'Chidambaram',
    },
    {
      id: 204,
      name: 'Chikodi',
    },
    {
      id: 205,
      name: 'Chinchvad',
    },
    {
      id: 206,
      name: 'Chintamani',
    },
    {
      id: 207,
      name: 'Chiplun',
    },
    {
      id: 208,
      name: 'Chirala',
    },
    {
      id: 209,
      name: 'Chitra',
    },
    {
      id: 210,
      name: 'Chitradurga',
    },
    {
      id: 211,
      name: 'Chittoor',
    },
    {
      id: 212,
      name: 'Chittur',
    },
    {
      id: 213,
      name: 'Choolai',
    },
    {
      id: 214,
      name: 'Chopda',
    },
    {
      id: 215,
      name: 'Chopra',
    },
    {
      id: 216,
      name: 'Churachandpur',
    },
    {
      id: 217,
      name: 'Coimbatore',
    },
    {
      id: 218,
      name: 'Colaba',
    },
    {
      id: 219,
      name: 'Connaught Place',
    },
    {
      id: 220,
      name: 'Coonoor',
    },
    {
      id: 221,
      name: 'Cuddalore',
    },
    {
      id: 222,
      name: 'Cumbum',
    },
    {
      id: 223,
      name: 'Cuncolim',
    },
    {
      id: 224,
      name: 'Curchorem',
    },
    {
      id: 225,
      name: 'Cuttack',
    },
    {
      id: 226,
      name: 'Dadri',
    },
    {
      id: 227,
      name: 'Dahanu',
    },
    {
      id: 228,
      name: 'Dahod',
    },
    {
      id: 229,
      name: 'Dam Dam',
    },
    {
      id: 230,
      name: 'Daman',
    },
    {
      id: 231,
      name: 'Damoh',
    },
    {
      id: 232,
      name: 'Dang',
    },
    {
      id: 233,
      name: 'Dangi',
    },
    {
      id: 234,
      name: 'Darbhanga',
    },
    {
      id: 235,
      name: 'Darjeeling',
    },
    {
      id: 236,
      name: 'Darsi',
    },
    {
      id: 237,
      name: 'Dasna',
    },
    {
      id: 238,
      name: 'Dasua',
    },
    {
      id: 239,
      name: 'Davangere',
    },
    {
      id: 240,
      name: 'Dehradun',
    },
    {
      id: 241,
      name: 'Delhi',
    },
    {
      id: 242,
      name: 'Deolali',
    },
    {
      id: 243,
      name: 'Deoria',
    },
    {
      id: 244,
      name: 'Devgarh',
    },
    {
      id: 245,
      name: 'Devipattinam',
    },
    {
      id: 246,
      name: 'Dewas',
    },
    {
      id: 247,
      name: 'Dhaka',
    },
    {
      id: 248,
      name: 'Dhamtari',
    },
    {
      id: 249,
      name: 'Dhanbad',
    },
    {
      id: 250,
      name: 'Dhansura',
    },
    {
      id: 251,
      name: 'Dhar',
    },
    {
      id: 252,
      name: 'Dharamsala',
    },
    {
      id: 253,
      name: 'Dharapuram',
    },
    {
      id: 254,
      name: 'Dharavi',
    },
    {
      id: 255,
      name: 'Dhariwal',
    },
    {
      id: 256,
      name: 'Dharmapuri',
    },
    {
      id: 257,
      name: 'Dharwad',
    },
    {
      id: 258,
      name: 'Dhenkanal',
    },
    {
      id: 259,
      name: 'Dhone',
    },
    {
      id: 260,
      name: 'Dhrol',
    },
    {
      id: 261,
      name: 'Dhubri',
    },
    {
      id: 262,
      name: 'Dhule',
    },
    {
      id: 263,
      name: 'Dhuri',
    },
    {
      id: 264,
      name: 'Dibrugarh',
    },
    {
      id: 265,
      name: 'Dicholi',
    },
    {
      id: 266,
      name: 'Dimapur',
    },
    {
      id: 267,
      name: 'Dinanagar',
    },
    {
      id: 268,
      name: 'Dindigul',
    },
    {
      id: 269,
      name: 'Dindori',
    },
    {
      id: 270,
      name: 'Dipas',
    },
    {
      id: 271,
      name: 'Dogadda',
    },
    {
      id: 272,
      name: 'Dona Paula',
    },
    {
      id: 273,
      name: 'Dumka',
    },
    {
      id: 274,
      name: 'Durg',
    },
    {
      id: 275,
      name: 'Durgapur',
    },
    {
      id: 276,
      name: 'Dwarahat',
    },
    {
      id: 277,
      name: 'Dwarka',
    },
    {
      id: 278,
      name: 'Edavanna',
    },
    {
      id: 279,
      name: 'Ekkattuthangal',
    },
    {
      id: 280,
      name: 'Ellora Caves',
    },
    {
      id: 281,
      name: 'Eluru',
    },
    {
      id: 282,
      name: 'Eral',
    },
    {
      id: 283,
      name: 'Ernakulam',
    },
    {
      id: 284,
      name: 'Erode',
    },
    {
      id: 285,
      name: 'Etawah',
    },
    {
      id: 286,
      name: 'Faizabad',
    },
    {
      id: 287,
      name: 'Farakka',
    },
    {
      id: 288,
      name: 'Faridabad',
    },
    {
      id: 289,
      name: 'Faridkot',
    },
    {
      id: 290,
      name: 'Fatehabad',
    },
    {
      id: 291,
      name: 'Fatehgarh',
    },
    {
      id: 292,
      name: 'Fatehpur',
    },
    {
      id: 293,
      name: 'Firozabad',
    },
    {
      id: 294,
      name: 'Firozpur',
    },
    {
      id: 295,
      name: 'Fort',
    },
    {
      id: 296,
      name: 'Gadag',
    },
    {
      id: 297,
      name: 'Gampalagudem',
    },
    {
      id: 298,
      name: 'Gandhidham',
    },
    {
      id: 299,
      name: 'Gandhigram',
    },
    {
      id: 300,
      name: 'Gandhinagar',
    },
    {
      id: 301,
      name: 'Ganga',
    },
    {
      id: 302,
      name: 'Ganganagar',
    },
    {
      id: 303,
      name: 'Gangapur',
    },
    {
      id: 304,
      name: 'Gangrar',
    },
    {
      id: 305,
      name: 'Gangtok',
    },
    {
      id: 306,
      name: 'Gannavaram',
    },
    {
      id: 307,
      name: 'Ganpat',
    },
    {
      id: 308,
      name: 'Gargoti',
    },
    {
      id: 309,
      name: 'Garhshankar',
    },
    {
      id: 310,
      name: 'Gaya',
    },
    {
      id: 311,
      name: 'Ghana',
    },
    {
      id: 312,
      name: 'Ghatal',
    },
    {
      id: 313,
      name: 'Ghatkopar',
    },
    {
      id: 314,
      name: 'Ghaziabad',
    },
    {
      id: 315,
      name: 'Goa',
    },
    {
      id: 316,
      name: 'Gobichettipalayam',
    },
    {
      id: 317,
      name: 'Godhra',
    },
    {
      id: 318,
      name: 'Gohana',
    },
    {
      id: 319,
      name: 'Golaghat',
    },
    {
      id: 320,
      name: 'Gold',
    },
    {
      id: 321,
      name: 'Gonda',
    },
    {
      id: 322,
      name: 'Gorakhpur',
    },
    {
      id: 323,
      name: 'Goregaon',
    },
    {
      id: 324,
      name: 'Goshaingaon',
    },
    {
      id: 325,
      name: 'Gudivada',
    },
    {
      id: 326,
      name: 'Gudur',
    },
    {
      id: 327,
      name: 'Guindy',
    },
    {
      id: 328,
      name: 'Gujrat',
    },
    {
      id: 329,
      name: 'Gulbarga',
    },
    {
      id: 330,
      name: 'Guna',
    },
    {
      id: 331,
      name: 'Guntur',
    },
    {
      id: 332,
      name: 'Gurdaspur',
    },
    {
      id: 333,
      name: 'Gurgaon',
    },
    {
      id: 334,
      name: 'Guruvayur',
    },
    {
      id: 335,
      name: 'Guwahati',
    },
    {
      id: 336,
      name: 'Gwalior',
    },
    {
      id: 337,
      name: 'Habra',
    },
    {
      id: 338,
      name: 'Hadadi',
    },
    {
      id: 339,
      name: 'Haldia',
    },
    {
      id: 340,
      name: 'Haldwani',
    },
    {
      id: 341,
      name: 'Hamirpur',
    },
    {
      id: 342,
      name: 'Hansi',
    },
    {
      id: 343,
      name: 'Hapur',
    },
    {
      id: 344,
      name: 'Hari',
    },
    {
      id: 345,
      name: 'Haridwar',
    },
    {
      id: 346,
      name: 'Haripad',
    },
    {
      id: 347,
      name: 'Haripur',
    },
    {
      id: 348,
      name: 'Haryana',
    },
    {
      id: 349,
      name: 'Hassan',
    },
    {
      id: 350,
      name: 'Haveri',
    },
    {
      id: 351,
      name: 'Hazaribagh',
    },
    {
      id: 352,
      name: 'Himatnagar',
    },
    {
      id: 353,
      name: 'Hinganghat',
    },
    {
      id: 354,
      name: 'Hingoli',
    },
    {
      id: 355,
      name: 'Hira',
    },
    {
      id: 356,
      name: 'Hiriyur',
    },
    {
      id: 357,
      name: 'Hisar',
    },
    {
      id: 358,
      name: 'Honavar',
    },
    {
      id: 359,
      name: 'Hong',
    },
    {
      id: 360,
      name: 'Hoshangabad',
    },
    {
      id: 361,
      name: 'Hoshiarpur',
    },
    {
      id: 362,
      name: 'Hosur',
    },
    {
      id: 363,
      name: 'Howrah',
    },
    {
      id: 364,
      name: 'Hubli',
    },
    {
      id: 365,
      name: 'Hugli',
    },
    {
      id: 366,
      name: 'Hyderabad',
    },
    {
      id: 367,
      name: 'Ichalkaranji',
    },
    {
      id: 368,
      name: 'Idukki',
    },
    {
      id: 369,
      name: 'Igatpuri',
    },
    {
      id: 370,
      name: 'Iglas',
    },
    {
      id: 371,
      name: 'Imphal',
    },
    {
      id: 372,
      name: 'Indore',
    },
    {
      id: 373,
      name: 'Indraprast',
    },
    {
      id: 374,
      name: 'Irinjalakuda',
    },
    {
      id: 375,
      name: 'Itanagar',
    },
    {
      id: 376,
      name: 'Jabalpur',
    },
    {
      id: 377,
      name: 'Jadabpur',
    },
    {
      id: 378,
      name: 'Jagdalpur',
    },
    {
      id: 379,
      name: 'Jagraon',
    },
    {
      id: 380,
      name: 'Jaipur',
    },
    {
      id: 381,
      name: 'Jaisalmer',
    },
    {
      id: 382,
      name: 'Jajpur',
    },
    {
      id: 383,
      name: 'Jalalabad',
    },
    {
      id: 384,
      name: 'Jalalpur',
    },
    {
      id: 385,
      name: 'Jalandhar',
    },
    {
      id: 386,
      name: 'Jalesar',
    },
    {
      id: 387,
      name: 'Jalgaon Jamod',
    },
    {
      id: 388,
      name: 'Jalna',
    },
    {
      id: 389,
      name: 'Jalpaiguri',
    },
    {
      id: 390,
      name: 'Jamal',
    },
    {
      id: 391,
      name: 'Jammu',
    },
    {
      id: 392,
      name: 'Jamnagar',
    },
    {
      id: 393,
      name: 'Jamshedpur',
    },
    {
      id: 394,
      name: 'Janjgir',
    },
    {
      id: 395,
      name: 'Jaspur',
    },
    {
      id: 396,
      name: 'Jatani',
    },
    {
      id: 397,
      name: 'Jaunpur',
    },
    {
      id: 398,
      name: 'Jayanti',
    },
    {
      id: 399,
      name: 'Jaynagar',
    },
    {
      id: 400,
      name: 'Jaypur',
    },
    {
      id: 401,
      name: 'Jha Jha',
    },
    {
      id: 402,
      name: 'Jhajjar',
    },
    {
      id: 403,
      name: 'Jhalawar',
    },
    {
      id: 404,
      name: 'Jhansi',
    },
    {
      id: 405,
      name: 'Jhargram',
    },
    {
      id: 406,
      name: 'Jharsuguda',
    },
    {
      id: 407,
      name: 'Jhunjhunun',
    },
    {
      id: 408,
      name: 'Jind',
    },
    {
      id: 409,
      name: 'Jodhpur',
    },
    {
      id: 410,
      name: 'Jorhat',
    },
    {
      id: 411,
      name: 'Junagadh',
    },
    {
      id: 412,
      name: 'Kadapa',
    },
    {
      id: 413,
      name: 'Kagal',
    },
    {
      id: 414,
      name: 'Kailaras',
    },
    {
      id: 415,
      name: 'Kaimganj',
    },
    {
      id: 416,
      name: 'Kaithal',
    },
    {
      id: 417,
      name: 'Kakdwip',
    },
    {
      id: 418,
      name: 'Kakinada',
    },
    {
      id: 419,
      name: 'Kaladi',
    },
    {
      id: 420,
      name: 'Kalam',
    },
    {
      id: 421,
      name: 'Kalamboli',
    },
    {
      id: 422,
      name: 'Kalan',
    },
    {
      id: 423,
      name: 'Kalinga',
    },
    {
      id: 424,
      name: 'Kalka',
    },
    {
      id: 425,
      name: 'Kalkaji Devi',
    },
    {
      id: 426,
      name: 'Kalol',
    },
    {
      id: 427,
      name: 'Kalpakkam',
    },
    {
      id: 428,
      name: 'Kalpetta',
    },
    {
      id: 429,
      name: 'Kalra',
    },
    {
      id: 430,
      name: 'Kalyan',
    },
    {
      id: 431,
      name: 'Kalyani',
    },
    {
      id: 432,
      name: 'Kamalpur',
    },
    {
      id: 433,
      name: 'Kamalpura',
    },
    {
      id: 434,
      name: 'Kamat',
    },
    {
      id: 435,
      name: 'Kanakpura',
    },
    {
      id: 436,
      name: 'Kanchipuram',
    },
    {
      id: 437,
      name: 'Kanchrapara',
    },
    {
      id: 438,
      name: 'Kandi',
    },
    {
      id: 439,
      name: 'Kangayam',
    },
    {
      id: 440,
      name: 'Kangra',
    },
    {
      id: 441,
      name: 'Kanhangad',
    },
    {
      id: 442,
      name: 'Kanigiri',
    },
    {
      id: 443,
      name: 'Kaniyambadi',
    },
    {
      id: 444,
      name: 'Kankauli',
    },
    {
      id: 445,
      name: 'Kanniyakumari',
    },
    {
      id: 446,
      name: 'Kannur',
    },
    {
      id: 447,
      name: 'Kanpur',
    },
    {
      id: 448,
      name: 'Kapurthala Town',
    },
    {
      id: 449,
      name: 'Karad',
    },
    {
      id: 450,
      name: 'Karaikal',
    },
    {
      id: 451,
      name: 'Karaikudi',
    },
    {
      id: 452,
      name: 'Karamadai',
    },
    {
      id: 453,
      name: 'Karamsad',
    },
    {
      id: 454,
      name: 'Karanja',
    },
    {
      id: 455,
      name: 'Karari',
    },
    {
      id: 456,
      name: 'Kargil',
    },
    {
      id: 457,
      name: 'Karimganj',
    },
    {
      id: 458,
      name: 'Karimnagar',
    },
    {
      id: 459,
      name: 'Karjat',
    },
    {
      id: 460,
      name: 'Karnal',
    },
    {
      id: 461,
      name: 'Karsiyang',
    },
    {
      id: 462,
      name: 'Karur',
    },
    {
      id: 463,
      name: 'Karwar',
    },
    {
      id: 464,
      name: 'Kasal',
    },
    {
      id: 465,
      name: 'Kasaragod',
    },
    {
      id: 466,
      name: 'Kasganj',
    },
    {
      id: 467,
      name: 'Kashipur',
    },
    {
      id: 468,
      name: 'Kasia',
    },
    {
      id: 469,
      name: 'Kataria',
    },
    {
      id: 470,
      name: 'Kathua',
    },
    {
      id: 471,
      name: 'Katni',
    },
    {
      id: 472,
      name: 'Katoya',
    },
    {
      id: 473,
      name: 'Katra',
    },
    {
      id: 474,
      name: 'Kaul',
    },
    {
      id: 475,
      name: 'Kavali',
    },
    {
      id: 476,
      name: 'Kavaratti',
    },
    {
      id: 477,
      name: 'Kayamkulam',
    },
    {
      id: 478,
      name: 'Keshod',
    },
    {
      id: 479,
      name: 'Khajuraho Group of Monuments',
    },
    {
      id: 480,
      name: 'Khalapur',
    },
    {
      id: 481,
      name: 'Khambhat',
    },
    {
      id: 482,
      name: 'Khammam',
    },
    {
      id: 483,
      name: 'Khan',
    },
    {
      id: 484,
      name: 'Khanna',
    },
    {
      id: 485,
      name: 'Kharagpur',
    },
    {
      id: 486,
      name: 'Kharar',
    },
    {
      id: 487,
      name: 'Khargone',
    },
    {
      id: 488,
      name: 'Khatauli',
    },
    {
      id: 489,
      name: 'Kheda',
    },
    {
      id: 490,
      name: 'Khergam',
    },
    {
      id: 491,
      name: 'Kheri',
    },
    {
      id: 492,
      name: 'Khinwara',
    },
    {
      id: 493,
      name: 'Khopoli',
    },
    {
      id: 494,
      name: 'Khurda',
    },
    {
      id: 495,
      name: 'Khurja',
    },
    {
      id: 496,
      name: 'Kishangarh',
    },
    {
      id: 497,
      name: 'Koch Bihar',
    },
    {
      id: 498,
      name: 'Kochi',
    },
    {
      id: 499,
      name: 'Kodaikanal',
    },
    {
      id: 500,
      name: 'Kodungallur',
    },
    {
      id: 501,
      name: 'Kohima',
    },
    {
      id: 502,
      name: 'Kokrajhar',
    },
    {
      id: 503,
      name: 'Kolar',
    },
    {
      id: 504,
      name: 'Kolayat',
    },
    {
      id: 505,
      name: 'Kolhapur',
    },
    {
      id: 506,
      name: 'Kolkata',
    },
    {
      id: 507,
      name: 'Kollam',
    },
    {
      id: 508,
      name: 'Kollegal',
    },
    {
      id: 509,
      name: 'Koni',
    },
    {
      id: 510,
      name: 'Konnagar',
    },
    {
      id: 511,
      name: 'Koothanallur',
    },
    {
      id: 512,
      name: 'Koppal',
    },
    {
      id: 513,
      name: 'Koraput',
    },
    {
      id: 514,
      name: 'Korba',
    },
    {
      id: 515,
      name: 'Kosamba',
    },
    {
      id: 516,
      name: 'Kot Isa Khan',
    },
    {
      id: 517,
      name: 'Kota',
    },
    {
      id: 518,
      name: 'Kotian',
    },
    {
      id: 519,
      name: 'Kottagudem',
    },
    {
      id: 520,
      name: 'Kottakkal',
    },
    {
      id: 521,
      name: 'Kottarakara',
    },
    {
      id: 522,
      name: 'Kottayam',
    },
    {
      id: 523,
      name: 'Kovilpatti',
    },
    {
      id: 524,
      name: 'Kovvur',
    },
    {
      id: 525,
      name: 'Kozhikode',
    },
    {
      id: 526,
      name: 'Krishnagiri',
    },
    {
      id: 527,
      name: 'Kulti',
    },
    {
      id: 528,
      name: 'Kumar',
    },
    {
      id: 529,
      name: 'Kumbakonam',
    },
    {
      id: 530,
      name: 'Kumhari',
    },
    {
      id: 531,
      name: 'Kundan',
    },
    {
      id: 532,
      name: 'Kunwar',
    },
    {
      id: 533,
      name: 'Kuppam',
    },
    {
      id: 534,
      name: 'Kurali',
    },
    {
      id: 535,
      name: 'Kurnool',
    },
    {
      id: 536,
      name: 'Kushalnagar',
    },
    {
      id: 537,
      name: 'Kuzhithurai',
    },
    {
      id: 538,
      name: 'Ladwa',
    },
    {
      id: 539,
      name: 'Lakhimpur',
    },
    {
      id: 540,
      name: 'Lala',
    },
    {
      id: 541,
      name: 'Lalgudi',
    },
    {
      id: 542,
      name: 'Lamba Harisingh',
    },
    {
      id: 543,
      name: 'Lanka',
    },
    {
      id: 544,
      name: 'Latur',
    },
    {
      id: 545,
      name: 'Liluah',
    },
    {
      id: 546,
      name: 'Lohaghat',
    },
    {
      id: 547,
      name: 'Lucknow',
    },
    {
      id: 548,
      name: 'Ludhiana',
    },
    {
      id: 549,
      name: 'Machhiwara',
    },
    {
      id: 550,
      name: 'Machilipatnam',
    },
    {
      id: 551,
      name: 'Madanapalle',
    },
    {
      id: 552,
      name: 'Madgaon',
    },
    {
      id: 553,
      name: 'Madhoganj',
    },
    {
      id: 554,
      name: 'Madikeri',
    },
    {
      id: 555,
      name: 'Madurai',
    },
    {
      id: 556,
      name: 'Madurantakam',
    },
    {
      id: 557,
      name: 'Mahabalipuram',
    },
    {
      id: 558,
      name: 'Mahad',
    },
    {
      id: 559,
      name: 'Mahajan',
    },
    {
      id: 560,
      name: 'Mahal',
    },
    {
      id: 561,
      name: 'Maharaj',
    },
    {
      id: 562,
      name: 'Mahatma',
    },
    {
      id: 563,
      name: 'Mahesana',
    },
    {
      id: 564,
      name: 'Mahesh',
    },
    {
      id: 565,
      name: 'Mahim',
    },
    {
      id: 566,
      name: 'Mahulia',
    },
    {
      id: 567,
      name: 'Malappuram',
    },
    {
      id: 568,
      name: 'Maldah',
    },
    {
      id: 569,
      name: 'Malpur',
    },
    {
      id: 570,
      name: 'Manali',
    },
    {
      id: 571,
      name: 'Mancherial',
    },
    {
      id: 572,
      name: 'Mandal',
    },
    {
      id: 573,
      name: 'Mandapeta',
    },
    {
      id: 574,
      name: 'Mandi',
    },
    {
      id: 575,
      name: 'Mandla',
    },
    {
      id: 576,
      name: 'Mandsaur',
    },
    {
      id: 577,
      name: 'Mandvi',
    },
    {
      id: 578,
      name: 'Mandya',
    },
    {
      id: 579,
      name: 'Mangalagiri',
    },
    {
      id: 580,
      name: 'Mangalore',
    },
    {
      id: 581,
      name: 'Mangaon',
    },
    {
      id: 582,
      name: 'Manipala',
    },
    {
      id: 583,
      name: 'Manipur',
    },
    {
      id: 584,
      name: 'Manjeri',
    },
    {
      id: 585,
      name: 'Manna',
    },
    {
      id: 586,
      name: 'Mannargudi',
    },
    {
      id: 587,
      name: 'Manor',
    },
    {
      id: 588,
      name: 'Mansa',
    },
    {
      id: 589,
      name: 'Manu',
    },
    {
      id: 590,
      name: 'Markal',
    },
    {
      id: 591,
      name: 'Markapur',
    },
    {
      id: 592,
      name: 'Marmagao',
    },
    {
      id: 593,
      name: 'Maru',
    },
    {
      id: 594,
      name: 'Mashobra',
    },
    {
      id: 595,
      name: 'Matar',
    },
    {
      id: 596,
      name: 'Mathan',
    },
    {
      id: 597,
      name: 'Mathura',
    },
    {
      id: 598,
      name: 'Mattanur',
    },
    {
      id: 599,
      name: 'Mavelikara',
    },
    {
      id: 600,
      name: 'Mawana',
    },
    {
      id: 601,
      name: 'Mayapur',
    },
    {
      id: 602,
      name: 'Medak',
    },
    {
      id: 603,
      name: 'Medarametla',
    },
    {
      id: 604,
      name: 'Medchal',
    },
    {
      id: 605,
      name: 'Medinipur',
    },
    {
      id: 606,
      name: 'Meerut',
    },
    {
      id: 607,
      name: 'Mehra',
    },
    {
      id: 608,
      name: 'Mettur',
    },
    {
      id: 609,
      name: 'Mhow',
    },
    {
      id: 610,
      name: 'Mill',
    },
    {
      id: 611,
      name: 'Miraj',
    },
    {
      id: 612,
      name: 'Mirza Murad',
    },
    {
      id: 613,
      name: 'Mirzapur',
    },
    {
      id: 614,
      name: 'Mithapur',
    },
    {
      id: 615,
      name: 'Modasa',
    },
    {
      id: 616,
      name: 'Moga',
    },
    {
      id: 617,
      name: 'Mohala',
    },
    {
      id: 618,
      name: 'Mohali',
    },
    {
      id: 619,
      name: 'Mohan',
    },
    {
      id: 620,
      name: 'Moradabad',
    },
    {
      id: 621,
      name: 'Morena',
    },
    {
      id: 622,
      name: 'Morinda',
    },
    {
      id: 623,
      name: 'Morvi',
    },
    {
      id: 624,
      name: 'Motihari',
    },
    {
      id: 625,
      name: 'Mount Abu',
    },
    {
      id: 626,
      name: 'Muddanuru',
    },
    {
      id: 627,
      name: 'Mukerian',
    },
    {
      id: 628,
      name: 'Muktsar',
    },
    {
      id: 629,
      name: 'Multi',
    },
    {
      id: 630,
      name: 'Mumbai',
    },
    {
      id: 631,
      name: 'Mundgod',
    },
    {
      id: 632,
      name: 'Mundra',
    },
    {
      id: 633,
      name: 'Munger',
    },
    {
      id: 634,
      name: 'Murshidabad',
    },
    {
      id: 635,
      name: 'Mussoorie',
    },
    {
      id: 636,
      name: 'Muzaffarnagar',
    },
    {
      id: 637,
      name: 'Muzaffarpur',
    },
    {
      id: 638,
      name: 'Mylapore',
    },
    {
      id: 639,
      name: 'Mysore',
    },
    {
      id: 640,
      name: 'Nabadwip',
    },
    {
      id: 641,
      name: 'Nabha',
    },
    {
      id: 642,
      name: 'Nadgaon',
    },
    {
      id: 643,
      name: 'Nadia',
    },
    {
      id: 644,
      name: 'Nadiad',
    },
    {
      id: 645,
      name: 'Nagal',
    },
    {
      id: 646,
      name: 'Nagapattinam',
    },
    {
      id: 647,
      name: 'Nagar',
    },
    {
      id: 648,
      name: 'Nagara',
    },
    {
      id: 649,
      name: 'Nagari',
    },
    {
      id: 650,
      name: 'Nagaur',
    },
    {
      id: 651,
      name: 'Nagercoil',
    },
    {
      id: 652,
      name: 'Nagpur',
    },
    {
      id: 653,
      name: 'Nagwa',
    },
    {
      id: 654,
      name: 'Naini',
    },
    {
      id: 655,
      name: 'Nalagarh',
    },
    {
      id: 656,
      name: 'Nalbari',
    },
    {
      id: 657,
      name: 'Nalgonda',
    },
    {
      id: 658,
      name: 'Namakkal',
    },
    {
      id: 659,
      name: 'Namrup',
    },
    {
      id: 660,
      name: 'Nanda',
    },
    {
      id: 661,
      name: 'Nanded',
    },
    {
      id: 662,
      name: 'Nandi',
    },
    {
      id: 663,
      name: 'Nandigama',
    },
    {
      id: 664,
      name: 'Nandurbar',
    },
    {
      id: 665,
      name: 'Nandyal',
    },
    {
      id: 666,
      name: 'Naraina',
    },
    {
      id: 667,
      name: 'Narasaraopet',
    },
    {
      id: 668,
      name: 'Narayangaon',
    },
    {
      id: 669,
      name: 'Narela',
    },
    {
      id: 670,
      name: 'Narnaul',
    },
    {
      id: 671,
      name: 'Narsapur',
    },
    {
      id: 672,
      name: 'Nashik',
    },
    {
      id: 673,
      name: 'Nathdwara',
    },
    {
      id: 674,
      name: 'Navelim',
    },
    {
      id: 675,
      name: 'Navsari',
    },
    {
      id: 676,
      name: 'Nayagarh',
    },
    {
      id: 677,
      name: 'Nazira',
    },
    {
      id: 678,
      name: 'Nehra',
    },
    {
      id: 679,
      name: 'Nellore',
    },
    {
      id: 680,
      name: 'Neral',
    },
    {
      id: 681,
      name: 'Neri',
    },
    {
      id: 682,
      name: 'New Delhi',
    },
    {
      id: 683,
      name: 'Neyveli',
    },
    {
      id: 684,
      name: 'Nila',
    },
    {
      id: 685,
      name: 'Nilambur',
    },
    {
      id: 686,
      name: 'Nilokheri',
    },
    {
      id: 687,
      name: 'Nizamabad',
    },
    {
      id: 688,
      name: 'Noida',
    },
    {
      id: 689,
      name: 'Nongpoh',
    },
    {
      id: 690,
      name: 'Nongstoin',
    },
    {
      id: 691,
      name: 'North Lakhimpur',
    },
    {
      id: 692,
      name: 'Nurpur',
    },
    {
      id: 693,
      name: 'Nuzvid',
    },
    {
      id: 694,
      name: 'Odhan',
    },
    {
      id: 695,
      name: 'Omalur',
    },
    {
      id: 696,
      name: 'Ongole',
    },
    {
      id: 697,
      name: 'Ooty',
    },
    {
      id: 698,
      name: 'Orai',
    },
    {
      id: 699,
      name: 'Osmanabad',
    },
    {
      id: 700,
      name: 'Ottappalam',
    },
    {
      id: 701,
      name: 'Pachmarhi',
    },
    {
      id: 702,
      name: 'Padrauna',
    },
    {
      id: 703,
      name: 'Pahalgam',
    },
    {
      id: 704,
      name: 'Pakala',
    },
    {
      id: 705,
      name: 'Pala',
    },
    {
      id: 706,
      name: 'Palakkad',
    },
    {
      id: 707,
      name: 'Palampur',
    },
    {
      id: 708,
      name: 'Palani',
    },
    {
      id: 709,
      name: 'Palayam',
    },
    {
      id: 710,
      name: 'Palghar',
    },
    {
      id: 711,
      name: 'Pali',
    },
    {
      id: 712,
      name: 'Palladam',
    },
    {
      id: 713,
      name: 'Paloncha',
    },
    {
      id: 714,
      name: 'Palus',
    },
    {
      id: 715,
      name: 'Palwal',
    },
    {
      id: 716,
      name: 'Panchal',
    },
    {
      id: 717,
      name: 'Panchgani',
    },
    {
      id: 718,
      name: 'Pandharpur',
    },
    {
      id: 719,
      name: 'Panipat',
    },
    {
      id: 720,
      name: 'Panjim',
    },
    {
      id: 721,
      name: 'Panruti',
    },
    {
      id: 722,
      name: 'Pantnagar',
    },
    {
      id: 723,
      name: 'Panvel',
    },
    {
      id: 724,
      name: 'Paonta Sahib',
    },
    {
      id: 725,
      name: 'Parappanangadi',
    },
    {
      id: 726,
      name: 'Paravur',
    },
    {
      id: 727,
      name: 'Parbhani',
    },
    {
      id: 728,
      name: 'Parel',
    },
    {
      id: 729,
      name: 'Parra',
    },
    {
      id: 730,
      name: 'Patan',
    },
    {
      id: 731,
      name: 'Patancheru',
    },
    {
      id: 732,
      name: 'Patel',
    },
    {
      id: 733,
      name: 'Patelguda',
    },
    {
      id: 734,
      name: 'Pathanamthitta',
    },
    {
      id: 735,
      name: 'Pathankot',
    },
    {
      id: 736,
      name: 'Patiala',
    },
    {
      id: 737,
      name: 'Patna',
    },
    {
      id: 738,
      name: 'Pattambi',
    },
    {
      id: 739,
      name: 'Pattukkottai',
    },
    {
      id: 740,
      name: 'Pauri',
    },
    {
      id: 741,
      name: 'Payyanur',
    },
    {
      id: 742,
      name: 'Peddapuram',
    },
    {
      id: 743,
      name: 'Pehowa',
    },
    {
      id: 744,
      name: 'Perambalur',
    },
    {
      id: 745,
      name: 'Peranampattu',
    },
    {
      id: 746,
      name: 'Perundurai',
    },
    {
      id: 747,
      name: 'Petlad',
    },
    {
      id: 748,
      name: 'Phagwara',
    },
    {
      id: 749,
      name: 'Phaphamau',
    },
    {
      id: 750,
      name: 'Piduguralla',
    },
    {
      id: 751,
      name: 'Pilani',
    },
    {
      id: 752,
      name: 'Pileru',
    },
    {
      id: 753,
      name: 'Pilkhuwa',
    },
    {
      id: 754,
      name: 'Pimpri',
    },
    {
      id: 755,
      name: 'Pitampura',
    },
    {
      id: 756,
      name: 'Pithapuram',
    },
    {
      id: 757,
      name: 'Pithoragarh',
    },
    {
      id: 758,
      name: 'Pochampalli',
    },
    {
      id: 759,
      name: 'Pollachi',
    },
    {
      id: 760,
      name: 'Ponda',
    },
    {
      id: 761,
      name: 'Ponnani',
    },
    {
      id: 762,
      name: 'Ponneri',
    },
    {
      id: 763,
      name: 'Porbandar',
    },
    {
      id: 764,
      name: 'Port Blair',
    },
    {
      id: 765,
      name: 'Potti',
    },
    {
      id: 766,
      name: 'Powai',
    },
    {
      id: 767,
      name: 'Proddatur',
    },
    {
      id: 768,
      name: 'Puducherry',
    },
    {
      id: 769,
      name: 'Pudukkottai',
    },
    {
      id: 770,
      name: 'Puliyur',
    },
    {
      id: 771,
      name: 'Punalur',
    },
    {
      id: 772,
      name: 'Pune',
    },
    {
      id: 773,
      name: 'Puras',
    },
    {
      id: 774,
      name: 'Puri',
    },
    {
      id: 775,
      name: 'Purnea',
    },
    {
      id: 776,
      name: 'Puruliya',
    },
    {
      id: 777,
      name: 'Pusa',
    },
    {
      id: 778,
      name: 'Pushkar',
    },
    {
      id: 779,
      name: 'Puttur',
    },
    {
      id: 780,
      name: 'Quepem',
    },
    {
      id: 781,
      name: 'Raichur',
    },
    {
      id: 782,
      name: 'Raigarh',
    },
    {
      id: 783,
      name: 'Raipur',
    },
    {
      id: 784,
      name: 'Rajahmundry',
    },
    {
      id: 785,
      name: 'Rajapalaiyam',
    },
    {
      id: 786,
      name: 'Rajapur',
    },
    {
      id: 787,
      name: 'Rajkot',
    },
    {
      id: 788,
      name: 'Rajpur',
    },
    {
      id: 789,
      name: 'Rajpura',
    },
    {
      id: 790,
      name: 'Raju',
    },
    {
      id: 791,
      name: 'Rama',
    },
    {
      id: 792,
      name: 'Ramanagaram',
    },
    {
      id: 793,
      name: 'Ramanathapuram',
    },
    {
      id: 794,
      name: 'Ramapuram',
    },
    {
      id: 795,
      name: 'Ramavaram',
    },
    {
      id: 796,
      name: 'Ramgarh',
    },
    {
      id: 797,
      name: 'Ramnagar',
    },
    {
      id: 798,
      name: 'Rampur',
    },
    {
      id: 799,
      name: 'Rana',
    },
    {
      id: 800,
      name: 'Ranaghat',
    },
    {
      id: 801,
      name: 'Ranchi',
    },
    {
      id: 802,
      name: 'Rander',
    },
    {
      id: 803,
      name: 'Raniganj',
    },
    {
      id: 804,
      name: 'Ranippettai',
    },
    {
      id: 805,
      name: 'Ranjan',
    },
    {
      id: 806,
      name: 'Ratlam',
    },
    {
      id: 807,
      name: 'Ratnagiri',
    },
    {
      id: 808,
      name: 'Raurkela',
    },
    {
      id: 809,
      name: 'Rawal',
    },
    {
      id: 810,
      name: 'Raxaul',
    },
    {
      id: 811,
      name: 'Rayagada',
    },
    {
      id: 812,
      name: 'Rewa',
    },
    {
      id: 813,
      name: 'Rewari',
    },
    {
      id: 814,
      name: 'Ring',
    },
    {
      id: 815,
      name: 'Rishikesh',
    },
    {
      id: 816,
      name: 'Rohtak',
    },
    {
      id: 817,
      name: 'Roorkee',
    },
    {
      id: 818,
      name: 'Roshan',
    },
    {
      id: 819,
      name: 'Rudrapur',
    },
    {
      id: 820,
      name: 'Rupnagar',
    },
    {
      id: 821,
      name: 'Rupnarayanpur',
    },
    {
      id: 822,
      name: 'Sachin',
    },
    {
      id: 823,
      name: 'Sagar',
    },
    {
      id: 824,
      name: 'Saha',
    },
    {
      id: 825,
      name: 'Saharanpur',
    },
    {
      id: 826,
      name: 'Sahibabad',
    },
    {
      id: 827,
      name: 'Sakri',
    },
    {
      id: 828,
      name: 'Salem',
    },
    {
      id: 829,
      name: 'Saligao',
    },
    {
      id: 830,
      name: 'Salt Lake City',
    },
    {
      id: 831,
      name: 'Samastipur',
    },
    {
      id: 832,
      name: 'Sambalpur',
    },
    {
      id: 833,
      name: 'Sanand',
    },
    {
      id: 834,
      name: 'Sandur',
    },
    {
      id: 835,
      name: 'Sangam',
    },
    {
      id: 836,
      name: 'Sangamner',
    },
    {
      id: 837,
      name: 'Sangli',
    },
    {
      id: 838,
      name: 'Sangola',
    },
    {
      id: 839,
      name: 'Sangrur',
    },
    {
      id: 840,
      name: 'Sanquelim',
    },
    {
      id: 841,
      name: 'Saranga',
    },
    {
      id: 842,
      name: 'Sarangi',
    },
    {
      id: 843,
      name: 'Sarwar',
    },
    {
      id: 844,
      name: 'Satara',
    },
    {
      id: 845,
      name: 'Satna',
    },
    {
      id: 846,
      name: 'Sattur',
    },
    {
      id: 847,
      name: 'Sawi',
    },
    {
      id: 848,
      name: 'Secunderabad',
    },
    {
      id: 849,
      name: 'Sehore',
    },
    {
      id: 850,
      name: 'Sendhwa',
    },
    {
      id: 851,
      name: 'Serampore',
    },
    {
      id: 852,
      name: 'Shadnagar',
    },
    {
      id: 853,
      name: 'Shahabad',
    },
    {
      id: 854,
      name: 'Shahapur',
    },
    {
      id: 855,
      name: 'Shahdara',
    },
    {
      id: 856,
      name: 'Shahdol',
    },
    {
      id: 857,
      name: 'Shahjahanpur',
    },
    {
      id: 858,
      name: 'Shahkot',
    },
    {
      id: 859,
      name: 'Shamsabad',
    },
    {
      id: 860,
      name: 'Shanti Grama',
    },
    {
      id: 861,
      name: 'Shillong',
    },
    {
      id: 862,
      name: 'Shimla',
    },
    {
      id: 863,
      name: 'Shimoga',
    },
    {
      id: 864,
      name: 'Shirgaon',
    },
    {
      id: 865,
      name: 'Shiv',
    },
    {
      id: 866,
      name: 'Sholavandan',
    },
    {
      id: 867,
      name: 'Shoranur',
    },
    {
      id: 868,
      name: 'Shrigonda',
    },
    {
      id: 869,
      name: 'Shyamnagar',
    },
    {
      id: 870,
      name: 'Sibsagar',
    },
    {
      id: 871,
      name: 'Sidhi',
    },
    {
      id: 872,
      name: 'Sidhpur',
    },
    {
      id: 873,
      name: 'Sikar',
    },
    {
      id: 874,
      name: 'Sikka',
    },
    {
      id: 875,
      name: 'Silchar',
    },
    {
      id: 876,
      name: 'Siliguri',
    },
    {
      id: 877,
      name: 'Silvassa',
    },
    {
      id: 878,
      name: 'Singarayakonda',
    },
    {
      id: 879,
      name: 'Singtam',
    },
    {
      id: 880,
      name: 'Sinnar',
    },
    {
      id: 881,
      name: 'Sion',
    },
    {
      id: 882,
      name: 'Sirhind',
    },
    {
      id: 883,
      name: 'Sirkazhi',
    },
    {
      id: 884,
      name: 'Sirohi',
    },
    {
      id: 885,
      name: 'Sirsa',
    },
    {
      id: 886,
      name: 'Sirsi',
    },
    {
      id: 887,
      name: 'Siruguppa',
    },
    {
      id: 888,
      name: 'Siruseri',
    },
    {
      id: 889,
      name: 'Sirwani',
    },
    {
      id: 890,
      name: 'Sitapur',
    },
    {
      id: 891,
      name: 'Siuri',
    },
    {
      id: 892,
      name: 'Sivaganga',
    },
    {
      id: 893,
      name: 'Sivakasi',
    },
    {
      id: 894,
      name: 'Sodhi',
    },
    {
      id: 895,
      name: 'Sojat',
    },
    {
      id: 896,
      name: 'Solan',
    },
    {
      id: 897,
      name: 'Solapur',
    },
    {
      id: 898,
      name: 'Solim',
    },
    {
      id: 899,
      name: 'Somnath',
    },
    {
      id: 900,
      name: 'Soni',
    },
    {
      id: 901,
      name: 'Sonipat',
    },
    {
      id: 902,
      name: 'Sopara',
    },
    {
      id: 903,
      name: 'Srikakulam',
    },
    {
      id: 904,
      name: 'Srikalahasti',
    },
    {
      id: 905,
      name: 'Srinagar',
    },
    {
      id: 906,
      name: 'Sriperumbudur',
    },
    {
      id: 907,
      name: 'Srirangam',
    },
    {
      id: 908,
      name: 'Srivilliputhur',
    },
    {
      id: 909,
      name: 'Sukma',
    },
    {
      id: 910,
      name: 'Sultan',
    },
    {
      id: 911,
      name: 'Sultanpur',
    },
    {
      id: 912,
      name: 'Sultans Battery',
    },
    {
      id: 913,
      name: 'Suman',
    },
    {
      id: 914,
      name: 'Sunam',
    },
    {
      id: 915,
      name: 'Sundargarh',
    },
    {
      id: 916,
      name: 'Surana',
    },
    {
      id: 917,
      name: 'Suratgarh',
    },
    {
      id: 918,
      name: 'Surendranagar',
    },
    {
      id: 919,
      name: 'Suriapet',
    },
    {
      id: 920,
      name: 'Tadepallegudem',
    },
    {
      id: 921,
      name: 'Tala',
    },
    {
      id: 922,
      name: 'Talcher',
    },
    {
      id: 923,
      name: 'Talegaon Dabhade',
    },
    {
      id: 924,
      name: 'Talwandi Sabo',
    },
    {
      id: 925,
      name: 'Tambaram',
    },
    {
      id: 926,
      name: 'Tanda',
    },
    {
      id: 927,
      name: 'Tanuku',
    },
    {
      id: 928,
      name: 'Tarn Taran',
    },
    {
      id: 929,
      name: 'Teri',
    },
    {
      id: 930,
      name: 'Tezpur',
    },
    {
      id: 931,
      name: 'Thalassery',
    },
    {
      id: 932,
      name: 'Thane',
    },
    {
      id: 933,
      name: 'Thanjavur',
    },
    {
      id: 934,
      name: 'Thasra',
    },
    {
      id: 935,
      name: 'Thenali',
    },
    {
      id: 936,
      name: 'Thenkasi',
    },
    {
      id: 937,
      name: 'Thirumangalam',
    },
    {
      id: 938,
      name: 'Thiruthani',
    },
    {
      id: 939,
      name: 'Thiruvananthapuram',
    },
    {
      id: 940,
      name: 'Thiruvarur',
    },
    {
      id: 941,
      name: 'Thoothukudi',
    },
    {
      id: 942,
      name: 'Thrissur',
    },
    {
      id: 943,
      name: 'Tikamgarh',
    },
    {
      id: 944,
      name: 'Tindivanam',
    },
    {
      id: 945,
      name: 'Tinsukia',
    },
    {
      id: 946,
      name: 'Tiptur',
    },
    {
      id: 947,
      name: 'Tiruchchendur',
    },
    {
      id: 948,
      name: 'Tiruchi',
    },
    {
      id: 949,
      name: 'Tirumala',
    },
    {
      id: 950,
      name: 'Tirumala - Tirupati',
    },
    {
      id: 951,
      name: 'Tirunelveli',
    },
    {
      id: 952,
      name: 'Tiruppur',
    },
    {
      id: 953,
      name: 'Tirur',
    },
    {
      id: 954,
      name: 'Tiruvalla',
    },
    {
      id: 955,
      name: 'Tiruvallur',
    },
    {
      id: 956,
      name: 'Tiruvannamalai',
    },
    {
      id: 957,
      name: 'Tohana',
    },
    {
      id: 958,
      name: 'Tonk',
    },
    {
      id: 959,
      name: 'Trimbak',
    },
    {
      id: 960,
      name: 'Tuljapur',
    },
    {
      id: 961,
      name: 'Turaiyur',
    },
    {
      id: 962,
      name: 'Udaigiri',
    },
    {
      id: 963,
      name: 'Udaipur',
    },
    {
      id: 964,
      name: 'Udupi',
    },
    {
      id: 965,
      name: 'Ujjain',
    },
    {
      id: 966,
      name: 'Ulhasnagar',
    },
    {
      id: 967,
      name: 'Ulubari',
    },
    {
      id: 968,
      name: 'Umred',
    },
    {
      id: 969,
      name: 'Unnao',
    },
    {
      id: 970,
      name: 'Uppal',
    },
    {
      id: 971,
      name: 'Uttarkashi',
    },
    {
      id: 972,
      name: 'Vadamadurai',
    },
    {
      id: 973,
      name: 'Vadner',
    },
    {
      id: 974,
      name: 'Vadodara',
    },
    {
      id: 975,
      name: 'Vaikam',
    },
    {
      id: 976,
      name: 'Vainguinim',
    },
    {
      id: 977,
      name: 'Valsad',
    },
    {
      id: 978,
      name: 'Vandalur',
    },
    {
      id: 979,
      name: 'Vandavasi',
    },
    {
      id: 980,
      name: 'Vaniyambadi',
    },
    {
      id: 981,
      name: 'Vapi',
    },
    {
      id: 982,
      name: 'Varanasi',
    },
    {
      id: 983,
      name: 'Vasai',
    },
    {
      id: 984,
      name: 'Vasco',
    },
    {
      id: 985,
      name: 'Vashi',
    },
    {
      id: 986,
      name: 'Vazhakulam',
    },
    {
      id: 987,
      name: 'Vellore',
    },
    {
      id: 988,
      name: 'Verna',
    },
    {
      id: 989,
      name: 'Vidisha',
    },
    {
      id: 990,
      name: 'Vijapur',
    },
    {
      id: 991,
      name: 'Vijayawada',
    },
    {
      id: 992,
      name: 'Vikarabad',
    },
    {
      id: 993,
      name: 'Vikasnagar',
    },
    {
      id: 994,
      name: 'Villupuram',
    },
    {
      id: 995,
      name: 'Vinukonda',
    },
    {
      id: 996,
      name: 'Virar',
    },
    {
      id: 997,
      name: 'Visakhapatnam',
    },
    {
      id: 998,
      name: 'Visnagar',
    },
    {
      id: 999,
      name: 'Vizianagaram',
    },
    {
      id: 1000,
      name: 'Wai',
    },
    {
      id: 1001,
      name: 'Warangal',
    },
    {
      id: 1002,
      name: 'Wardha',
    },
    {
      id: 1003,
      name: 'Wellington',
    },
    {
      id: 1004,
      name: 'Yadgir',
    },
    {
      id: 1005,
      name: 'Yamunanagar',
    },
    {
      id: 1006,
      name: 'Yanam',
    },
    {
      id: 1007,
      name: 'Yavatmal',
    },
    {
      id: 1008,
      name: 'Yeola',
    },
    {
      id: 1009,
      name: 'Yercaud',
    },
    {
      id: 1010,
      name: 'Bamboo Flat',
    },
    {
      id: 1011,
      name: 'Nicobar',
    },
    {
      id: 1012,
      name: 'South Andaman',
    },
    {
      id: 1013,
      name: 'Addanki',
    },
    {
      id: 1014,
      name: 'Ādoni',
    },
    {
      id: 1015,
      name: 'Akasahebpet',
    },
    {
      id: 1016,
      name: 'Akivīdu',
    },
    {
      id: 1017,
      name: 'Akkarampalle',
    },
    {
      id: 1018,
      name: 'Amalāpuram',
    },
    {
      id: 1019,
      name: 'Amudālavalasa',
    },
    {
      id: 1020,
      name: 'Anakāpalle',
    },
    {
      id: 1021,
      name: 'Atmakūr',
    },
    {
      id: 1022,
      name: 'Attili',
    },
    {
      id: 1023,
      name: 'Badvel',
    },
    {
      id: 1024,
      name: 'Banganapalle',
    },
    {
      id: 1025,
      name: 'Bāpatla',
    },
    {
      id: 1026,
      name: 'Betamcherla',
    },
    {
      id: 1027,
      name: 'Bhattiprolu',
    },
    {
      id: 1028,
      name: 'Bhīmavaram',
    },
    {
      id: 1029,
      name: 'Bhīmunipatnam',
    },
    {
      id: 1030,
      name: 'Challapalle',
    },
    {
      id: 1031,
      name: 'Chemmumiahpet',
    },
    {
      id: 1032,
      name: 'Chilakalūrupet',
    },
    {
      id: 1033,
      name: 'Chinnachowk',
    },
    {
      id: 1034,
      name: 'Chīpurupalle',
    },
    {
      id: 1035,
      name: 'Chīrāla',
    },
    {
      id: 1036,
      name: 'Chodavaram',
    },
    {
      id: 1037,
      name: 'Cuddapah',
    },
    {
      id: 1038,
      name: 'Dharmavaram',
    },
    {
      id: 1039,
      name: 'Diguvametta',
    },
    {
      id: 1040,
      name: 'East Godāvari',
    },
    {
      id: 1041,
      name: 'Elamanchili',
    },
    {
      id: 1042,
      name: 'Ellore',
    },
    {
      id: 1043,
      name: 'Emmiganūr',
    },
    {
      id: 1044,
      name: 'Erraguntla',
    },
    {
      id: 1045,
      name: 'Etikoppāka',
    },
    {
      id: 1046,
      name: 'Gajuwaka',
    },
    {
      id: 1047,
      name: 'Ganguvāda',
    },
    {
      id: 1048,
      name: 'Giddalūr',
    },
    {
      id: 1049,
      name: 'Gokavaram',
    },
    {
      id: 1050,
      name: 'Gorantla',
    },
    {
      id: 1051,
      name: 'GovindapuramChilakaluripetGuntur',
    },
    {
      id: 1052,
      name: 'Gudivāda',
    },
    {
      id: 1053,
      name: 'Gudlavalleru',
    },
    {
      id: 1054,
      name: 'Gūdūr',
    },
    {
      id: 1055,
      name: 'Guntakal Junction',
    },
    {
      id: 1056,
      name: 'Guntūr',
    },
    {
      id: 1057,
      name: 'Hindupur',
    },
    {
      id: 1058,
      name: 'Ichchāpuram',
    },
    {
      id: 1059,
      name: 'Jaggayyapeta',
    },
    {
      id: 1060,
      name: 'Jammalamadugu',
    },
    {
      id: 1061,
      name: 'Kadiri',
    },
    {
      id: 1062,
      name: 'Kaikalūr',
    },
    {
      id: 1063,
      name: 'Kākināda',
    },
    {
      id: 1064,
      name: 'Kalyandurg',
    },
    {
      id: 1065,
      name: 'Kāmalāpuram',
    },
    {
      id: 1066,
      name: 'Kandukūr',
    },
    {
      id: 1067,
      name: 'Kankipādu',
    },
    {
      id: 1068,
      name: 'Kanuru',
    },
    {
      id: 1069,
      name: 'Kāvali',
    },
    {
      id: 1070,
      name: 'Kolanukonda',
    },
    {
      id: 1071,
      name: 'Kondapalle',
    },
    {
      id: 1072,
      name: 'Korukollu',
    },
    {
      id: 1073,
      name: 'Kosigi',
    },
    {
      id: 1074,
      name: 'Kovūr',
    },
    {
      id: 1075,
      name: 'Kovvūr',
    },
    {
      id: 1076,
      name: 'Krishna',
    },
    {
      id: 1077,
      name: 'Mācherla',
    },
    {
      id: 1078,
      name: 'Machilīpatnam',
    },
    {
      id: 1079,
      name: 'Mādugula',
    },
    {
      id: 1080,
      name: 'Mandasa',
    },
    {
      id: 1081,
      name: 'Mārkāpur',
    },
    {
      id: 1082,
      name: 'Nāgireddipalli',
    },
    {
      id: 1083,
      name: 'Nandigāma',
    },
    {
      id: 1084,
      name: 'Nandikotkūr',
    },
    {
      id: 1085,
      name: 'Nandyāl',
    },
    {
      id: 1086,
      name: 'Narasannapeta',
    },
    {
      id: 1087,
      name: 'Narasapur',
    },
    {
      id: 1088,
      name: 'Narasingāpuram',
    },
    {
      id: 1089,
      name: 'Nārāyanavanam',
    },
    {
      id: 1090,
      name: 'Narsīpatnam',
    },
    {
      id: 1091,
      name: 'Nāyudupet',
    },
    {
      id: 1092,
      name: 'Nidadavole',
    },
    {
      id: 1093,
      name: 'Nūzvīd',
    },
    {
      id: 1094,
      name: 'Pākāla',
    },
    {
      id: 1095,
      name: 'Pālakollu',
    },
    {
      id: 1096,
      name: 'Palāsa',
    },
    {
      id: 1097,
      name: 'Pālkonda',
    },
    {
      id: 1098,
      name: 'Pallevāda',
    },
    {
      id: 1099,
      name: 'Palmaner',
    },
    {
      id: 1100,
      name: 'Parlākimidi',
    },
    {
      id: 1101,
      name: 'Pārvatipuram',
    },
    {
      id: 1102,
      name: 'Pavuluru',
    },
    {
      id: 1103,
      name: 'Pedana',
    },
    {
      id: 1104,
      name: 'pedda nakkalapalem',
    },
    {
      id: 1105,
      name: 'Peddāpuram',
    },
    {
      id: 1106,
      name: 'Penugonda',
    },
    {
      id: 1107,
      name: 'Penukonda',
    },
    {
      id: 1108,
      name: 'Phirangipuram',
    },
    {
      id: 1109,
      name: 'Pippara',
    },
    {
      id: 1110,
      name: 'Pithāpuram',
    },
    {
      id: 1111,
      name: 'Polavaram',
    },
    {
      id: 1112,
      name: 'Ponnur',
    },
    {
      id: 1113,
      name: 'Ponnūru',
    },
    {
      id: 1114,
      name: 'Prakasam',
    },
    {
      id: 1115,
      name: 'Proddatūr',
    },
    {
      id: 1116,
      name: 'Pulivendla',
    },
    {
      id: 1117,
      name: 'Punganūru',
    },
    {
      id: 1118,
      name: 'Puttaparthi',
    },
    {
      id: 1119,
      name: 'Puttūr',
    },
    {
      id: 1120,
      name: 'Rājahmundry',
    },
    {
      id: 1121,
      name: 'Rāmachandrapuram',
    },
    {
      id: 1122,
      name: 'Ramanayyapeta',
    },
    {
      id: 1123,
      name: 'Rāmāpuram',
    },
    {
      id: 1124,
      name: 'Rampachodavaram',
    },
    {
      id: 1125,
      name: 'Rāyachoti',
    },
    {
      id: 1126,
      name: 'Rāyadrug',
    },
    {
      id: 1127,
      name: 'Rāzām',
    },
    {
      id: 1128,
      name: 'Rāzampeta',
    },
    {
      id: 1129,
      name: 'Rāzole',
    },
    {
      id: 1130,
      name: 'Renigunta',
    },
    {
      id: 1131,
      name: 'Repalle',
    },
    {
      id: 1132,
      name: 'Sālūr',
    },
    {
      id: 1133,
      name: 'Sāmalkot',
    },
    {
      id: 1134,
      name: 'Sattenapalle',
    },
    {
      id: 1135,
      name: 'Singarāyakonda',
    },
    {
      id: 1136,
      name: 'Sompeta',
    },
    {
      id: 1137,
      name: 'Srīkākulam',
    },
    {
      id: 1138,
      name: 'Srīsailain',
    },
    {
      id: 1139,
      name: 'Sūlūru',
    },
    {
      id: 1140,
      name: 'Tādepalle',
    },
    {
      id: 1141,
      name: 'Tādepallegūdem',
    },
    {
      id: 1142,
      name: 'Tādpatri',
    },
    {
      id: 1143,
      name: 'Tekkali',
    },
    {
      id: 1144,
      name: 'Tirupati',
    },
    {
      id: 1145,
      name: 'Tuni',
    },
    {
      id: 1146,
      name: 'Uravakonda',
    },
    {
      id: 1147,
      name: 'vadlamuru',
    },
    {
      id: 1148,
      name: 'Vadlapūdi',
    },
    {
      id: 1149,
      name: 'Venkatagiri',
    },
    {
      id: 1150,
      name: 'Vepagunta',
    },
    {
      id: 1151,
      name: 'Vetapālem',
    },
    {
      id: 1152,
      name: 'Vishākhapatnam',
    },
    {
      id: 1153,
      name: 'Vizianagaram District',
    },
    {
      id: 1154,
      name: 'Vuyyūru',
    },
    {
      id: 1155,
      name: 'West Godāvari',
    },
    {
      id: 1156,
      name: 'Yanamalakuduru',
    },
    {
      id: 1157,
      name: 'Yārāda',
    },
    {
      id: 1158,
      name: 'Along',
    },
    {
      id: 1159,
      name: 'Anjaw',
    },
    {
      id: 1160,
      name: 'Bāsār',
    },
    {
      id: 1161,
      name: 'Bomdila',
    },
    {
      id: 1162,
      name: 'Changlang',
    },
    {
      id: 1163,
      name: 'Dibāng Valley',
    },
    {
      id: 1164,
      name: 'East Kameng',
    },
    {
      id: 1165,
      name: 'East Siang',
    },
    {
      id: 1166,
      name: 'Hayuliang',
    },
    {
      id: 1167,
      name: 'Itānagar',
    },
    {
      id: 1168,
      name: 'Khonsa',
    },
    {
      id: 1169,
      name: 'Kurung Kumey',
    },
    {
      id: 1170,
      name: 'Lohit District',
    },
    {
      id: 1171,
      name: 'Lower Dibang Valley',
    },
    {
      id: 1172,
      name: 'Lower Subansiri',
    },
    {
      id: 1173,
      name: 'Margherita',
    },
    {
      id: 1174,
      name: 'Naharlagun',
    },
    {
      id: 1175,
      name: 'Pāsighāt',
    },
    {
      id: 1176,
      name: 'Tawang',
    },
    {
      id: 1177,
      name: 'Tezu',
    },
    {
      id: 1178,
      name: 'Tirāp',
    },
    {
      id: 1179,
      name: 'Upper Siang',
    },
    {
      id: 1180,
      name: 'Upper Subansiri',
    },
    {
      id: 1181,
      name: 'West Kameng',
    },
    {
      id: 1182,
      name: 'West Siang',
    },
    {
      id: 1183,
      name: 'Ziro',
    },
    {
      id: 1184,
      name: 'Abhayāpuri',
    },
    {
      id: 1185,
      name: 'Amguri',
    },
    {
      id: 1186,
      name: 'Badarpur',
    },
    {
      id: 1187,
      name: 'Baksa',
    },
    {
      id: 1188,
      name: 'Barpathār',
    },
    {
      id: 1189,
      name: 'Barpeta Road',
    },
    {
      id: 1190,
      name: 'Bāsugaon',
    },
    {
      id: 1191,
      name: 'Bihpuriāgaon',
    },
    {
      id: 1192,
      name: 'Bijni',
    },
    {
      id: 1193,
      name: 'Bilāsipāra',
    },
    {
      id: 1194,
      name: 'Bokajān',
    },
    {
      id: 1195,
      name: 'Bokākhāt',
    },
    {
      id: 1196,
      name: 'Bongaigaon',
    },
    {
      id: 1197,
      name: 'Cāchār',
    },
    {
      id: 1198,
      name: 'Chābua',
    },
    {
      id: 1199,
      name: 'Chāpar',
    },
    {
      id: 1200,
      name: 'Chirang',
    },
    {
      id: 1201,
      name: 'Darrang',
    },
    {
      id: 1202,
      name: 'Dergaon',
    },
    {
      id: 1203,
      name: 'Dhekiajuli',
    },
    {
      id: 1204,
      name: 'Dhemaji',
    },
    {
      id: 1205,
      name: 'Dhemāji',
    },
    {
      id: 1206,
      name: 'Dhing',
    },
    {
      id: 1207,
      name: 'Dhuburi',
    },
    {
      id: 1208,
      name: 'Digboi',
    },
    {
      id: 1209,
      name: 'Dima Hasao District',
    },
    {
      id: 1210,
      name: 'Diphu',
    },
    {
      id: 1211,
      name: 'Dispur',
    },
    {
      id: 1212,
      name: 'Duliāgaon',
    },
    {
      id: 1213,
      name: 'Dum Duma',
    },
    {
      id: 1214,
      name: 'Gauripur',
    },
    {
      id: 1215,
      name: 'Goālpāra',
    },
    {
      id: 1216,
      name: 'Gohpur',
    },
    {
      id: 1217,
      name: 'Golāghāt',
    },
    {
      id: 1218,
      name: 'Golakganj',
    },
    {
      id: 1219,
      name: 'Hāflong',
    },
    {
      id: 1220,
      name: 'Hailakandi',
    },
    {
      id: 1221,
      name: 'Hailākāndi',
    },
    {
      id: 1222,
      name: 'Hājo',
    },
    {
      id: 1223,
      name: 'Hojāi',
    },
    {
      id: 1224,
      name: 'Howli',
    },
    {
      id: 1225,
      name: 'Jogīghopa',
    },
    {
      id: 1226,
      name: 'Jorhāt',
    },
    {
      id: 1227,
      name: 'Kāmrūp',
    },
    {
      id: 1228,
      name: 'Kamrup Metropolitan',
    },
    {
      id: 1229,
      name: 'Kārbi Ānglong',
    },
    {
      id: 1230,
      name: 'Karīmganj',
    },
    {
      id: 1231,
      name: 'Khārupatia',
    },
    {
      id: 1232,
      name: 'Lakhipur',
    },
    {
      id: 1233,
      name: 'Lāla',
    },
    {
      id: 1234,
      name: 'Lumding Railway Colony',
    },
    {
      id: 1235,
      name: 'Mahur',
    },
    {
      id: 1236,
      name: 'Maibong',
    },
    {
      id: 1237,
      name: 'Mākum',
    },
    {
      id: 1238,
      name: 'Mangaldai',
    },
    {
      id: 1239,
      name: 'Mariāni',
    },
    {
      id: 1240,
      name: 'Morānha',
    },
    {
      id: 1241,
      name: 'Morigaon',
    },
    {
      id: 1242,
      name: 'Nagaon',
    },
    {
      id: 1243,
      name: 'Nahorkatiya',
    },
    {
      id: 1244,
      name: 'Nāmrup',
    },
    {
      id: 1245,
      name: 'Nāzirā',
    },
    {
      id: 1246,
      name: 'North Guwāhāti',
    },
    {
      id: 1247,
      name: 'Numāligarh',
    },
    {
      id: 1248,
      name: 'Palāsbāri',
    },
    {
      id: 1249,
      name: 'Rahā',
    },
    {
      id: 1250,
      name: 'Rangāpāra',
    },
    {
      id: 1251,
      name: 'Rangia',
    },
    {
      id: 1252,
      name: 'Sapatgrām',
    },
    {
      id: 1253,
      name: 'Sarupathar',
    },
    {
      id: 1254,
      name: 'Sibsāgar',
    },
    {
      id: 1255,
      name: 'Silapathar',
    },
    {
      id: 1256,
      name: 'Soalkuchi',
    },
    {
      id: 1257,
      name: 'Sonāri',
    },
    {
      id: 1258,
      name: 'Sonitpur',
    },
    {
      id: 1259,
      name: 'Sorbhog',
    },
    {
      id: 1260,
      name: 'Titābar',
    },
    {
      id: 1261,
      name: 'Udalguri',
    },
    {
      id: 1262,
      name: 'Amarpur',
    },
    {
      id: 1263,
      name: 'Araria',
    },
    {
      id: 1264,
      name: 'Arāria',
    },
    {
      id: 1265,
      name: 'Arrah',
    },
    {
      id: 1266,
      name: 'Arwal',
    },
    {
      id: 1267,
      name: 'Asarganj',
    },
    {
      id: 1268,
      name: 'Aurangābād',
    },
    {
      id: 1269,
      name: 'Bagaha',
    },
    {
      id: 1270,
      name: 'Bahādurganj',
    },
    {
      id: 1271,
      name: 'Bairāgnia',
    },
    {
      id: 1272,
      name: 'Baisi',
    },
    {
      id: 1273,
      name: 'Bakhtiyārpur',
    },
    {
      id: 1274,
      name: 'Bānka',
    },
    {
      id: 1275,
      name: 'Banmankhi',
    },
    {
      id: 1276,
      name: 'Bar Bigha',
    },
    {
      id: 1277,
      name: 'Barauli',
    },
    {
      id: 1278,
      name: 'Bārh',
    },
    {
      id: 1279,
      name: 'Barhiya',
    },
    {
      id: 1280,
      name: 'Bariārpur',
    },
    {
      id: 1281,
      name: 'Bāruni',
    },
    {
      id: 1282,
      name: 'Begusarāi',
    },
    {
      id: 1283,
      name: 'Belsand',
    },
    {
      id: 1284,
      name: 'Bettiah',
    },
    {
      id: 1285,
      name: 'Bhabhua',
    },
    {
      id: 1286,
      name: 'Bhāgalpur',
    },
    {
      id: 1287,
      name: 'Bhagirathpur',
    },
    {
      id: 1288,
      name: 'Bhawanipur',
    },
    {
      id: 1289,
      name: 'Bhojpur',
    },
    {
      id: 1290,
      name: 'Bihār Sharīf',
    },
    {
      id: 1291,
      name: 'Bihārīganj',
    },
    {
      id: 1292,
      name: 'Bikramganj',
    },
    {
      id: 1293,
      name: 'Bīrpur',
    },
    {
      id: 1294,
      name: 'Buddh Gaya',
    },
    {
      id: 1295,
      name: 'Buxar',
    },
    {
      id: 1296,
      name: 'Chākia',
    },
    {
      id: 1297,
      name: 'Chāpra',
    },
    {
      id: 1298,
      name: 'Chhātāpur',
    },
    {
      id: 1299,
      name: 'Colgong',
    },
    {
      id: 1300,
      name: 'Dalsingh Sarai',
    },
    {
      id: 1301,
      name: 'Daudnagar',
    },
    {
      id: 1302,
      name: 'Dehri',
    },
    {
      id: 1303,
      name: 'Dhāka',
    },
    {
      id: 1304,
      name: 'Dighwāra',
    },
    {
      id: 1305,
      name: 'Dinapore',
    },
    {
      id: 1306,
      name: 'Dumra',
    },
    {
      id: 1307,
      name: 'Dumraon',
    },
    {
      id: 1308,
      name: 'Fatwa',
    },
    {
      id: 1309,
      name: 'Forbesganj',
    },
    {
      id: 1310,
      name: 'Gayā',
    },
    {
      id: 1311,
      name: 'Ghoga',
    },
    {
      id: 1312,
      name: 'Gopālganj',
    },
    {
      id: 1313,
      name: 'Hājīpur',
    },
    {
      id: 1314,
      name: 'Hilsa',
    },
    {
      id: 1315,
      name: 'Hisuā',
    },
    {
      id: 1316,
      name: 'Islāmpur',
    },
    {
      id: 1317,
      name: 'Jagdīspur',
    },
    {
      id: 1318,
      name: 'Jahānābād',
    },
    {
      id: 1319,
      name: 'Jamālpur',
    },
    {
      id: 1320,
      name: 'Jamui',
    },
    {
      id: 1321,
      name: 'Jamūī',
    },
    {
      id: 1322,
      name: 'Jehanabad',
    },
    {
      id: 1323,
      name: 'Jhā-Jhā',
    },
    {
      id: 1324,
      name: 'Jhanjhārpur',
    },
    {
      id: 1325,
      name: 'Jogbani',
    },
    {
      id: 1326,
      name: 'Kaimur District',
    },
    {
      id: 1327,
      name: 'Kasba',
    },
    {
      id: 1328,
      name: 'Katihar',
    },
    {
      id: 1329,
      name: 'Khagaria',
    },
    {
      id: 1330,
      name: 'Khagaul',
    },
    {
      id: 1331,
      name: 'Khusropur',
    },
    {
      id: 1332,
      name: 'Kishanganj',
    },
    {
      id: 1333,
      name: 'Koāth',
    },
    {
      id: 1334,
      name: 'Koelwār',
    },
    {
      id: 1335,
      name: 'Lakhisarai',
    },
    {
      id: 1336,
      name: 'Lālganj',
    },
    {
      id: 1337,
      name: 'Luckeesarai',
    },
    {
      id: 1338,
      name: 'Madhepura',
    },
    {
      id: 1339,
      name: 'Madhipura',
    },
    {
      id: 1340,
      name: 'Madhubani',
    },
    {
      id: 1341,
      name: 'Mahārājgani',
    },
    {
      id: 1342,
      name: 'Mairwa',
    },
    {
      id: 1343,
      name: 'Maner',
    },
    {
      id: 1344,
      name: 'Manihāri',
    },
    {
      id: 1345,
      name: 'Marhaura',
    },
    {
      id: 1346,
      name: 'Masaurhi Buzurg',
    },
    {
      id: 1347,
      name: 'Mohiuddinnagar',
    },
    {
      id: 1348,
      name: 'Mokameh',
    },
    {
      id: 1349,
      name: 'Monghyr',
    },
    {
      id: 1350,
      name: 'Mothīhāri',
    },
    {
      id: 1351,
      name: 'Murlīganj',
    },
    {
      id: 1352,
      name: 'Nabīnagar',
    },
    {
      id: 1353,
      name: 'Nālanda',
    },
    {
      id: 1354,
      name: 'Nāsriganj',
    },
    {
      id: 1355,
      name: 'Naugachhia',
    },
    {
      id: 1356,
      name: 'Nawāda',
    },
    {
      id: 1357,
      name: 'Nirmāli',
    },
    {
      id: 1358,
      name: 'Pashchim Champāran',
    },
    {
      id: 1359,
      name: 'Piro',
    },
    {
      id: 1360,
      name: 'Pupri',
    },
    {
      id: 1361,
      name: 'Pūrba Champāran',
    },
    {
      id: 1362,
      name: 'Purnia',
    },
    {
      id: 1363,
      name: 'Rafiganj',
    },
    {
      id: 1364,
      name: 'Raghunāthpur',
    },
    {
      id: 1365,
      name: 'Rājgīr',
    },
    {
      id: 1366,
      name: 'Rāmnagar',
    },
    {
      id: 1367,
      name: 'Revelganj',
    },
    {
      id: 1368,
      name: 'Rohtās',
    },
    {
      id: 1369,
      name: 'Rusera',
    },
    {
      id: 1370,
      name: 'Sagauli',
    },
    {
      id: 1371,
      name: 'Saharsa',
    },
    {
      id: 1372,
      name: 'Samastīpur',
    },
    {
      id: 1373,
      name: 'Samāstipur',
    },
    {
      id: 1374,
      name: 'Sāran',
    },
    {
      id: 1375,
      name: 'Shahbazpur',
    },
    {
      id: 1376,
      name: 'Shāhpur',
    },
    {
      id: 1377,
      name: 'Sheikhpura',
    },
    {
      id: 1378,
      name: 'Sheohar',
    },
    {
      id: 1379,
      name: 'Sherghāti',
    },
    {
      id: 1380,
      name: 'Silao',
    },
    {
      id: 1381,
      name: 'Sītāmarhi',
    },
    {
      id: 1382,
      name: 'Siwān',
    },
    {
      id: 1383,
      name: 'Supaul',
    },
    {
      id: 1384,
      name: 'Teghra',
    },
    {
      id: 1385,
      name: 'Tekāri',
    },
    {
      id: 1386,
      name: 'Thākurganj',
    },
    {
      id: 1387,
      name: 'Vaishāli',
    },
    {
      id: 1388,
      name: 'Wāris Alīganj',
    },
    {
      id: 1389,
      name: 'Akaltara',
    },
    {
      id: 1390,
      name: 'Ambāgarh Chauki',
    },
    {
      id: 1391,
      name: 'Ambikāpur',
    },
    {
      id: 1392,
      name: 'Arang',
    },
    {
      id: 1393,
      name: 'Baikunthpur',
    },
    {
      id: 1394,
      name: 'Balod',
    },
    {
      id: 1395,
      name: 'Baloda',
    },
    {
      id: 1396,
      name: 'Baloda Bāzār',
    },
    {
      id: 1397,
      name: 'Basna',
    },
    {
      id: 1398,
      name: 'Bastar',
    },
    {
      id: 1399,
      name: 'Bemetāra',
    },
    {
      id: 1400,
      name: 'Bhānpurī',
    },
    {
      id: 1401,
      name: 'Bhātāpāra',
    },
    {
      id: 1402,
      name: 'Bhatgaon',
    },
    {
      id: 1403,
      name: 'Bilāspur',
    },
    {
      id: 1404,
      name: 'Chāmpa',
    },
    {
      id: 1405,
      name: 'Chhuīkhadān',
    },
    {
      id: 1406,
      name: 'Deori',
    },
    {
      id: 1407,
      name: 'Dongargaon',
    },
    {
      id: 1408,
      name: 'Dongargarh',
    },
    {
      id: 1409,
      name: 'Gandai',
    },
    {
      id: 1410,
      name: 'Gariāband',
    },
    {
      id: 1411,
      name: 'Gaurela',
    },
    {
      id: 1412,
      name: 'Gharghoda',
    },
    {
      id: 1413,
      name: 'Gīdam',
    },
    {
      id: 1414,
      name: 'Jānjgīr',
    },
    {
      id: 1415,
      name: 'Janjgir-Champa',
    },
    {
      id: 1416,
      name: 'Jashpur',
    },
    {
      id: 1417,
      name: 'Jashpurnagar',
    },
    {
      id: 1418,
      name: 'Jūnāgarh',
    },
    {
      id: 1419,
      name: 'Kabeerdham',
    },
    {
      id: 1420,
      name: 'Kānker',
    },
    {
      id: 1421,
      name: 'Katghora',
    },
    {
      id: 1422,
      name: 'Kawardha',
    },
    {
      id: 1423,
      name: 'Khairāgarh',
    },
    {
      id: 1424,
      name: 'Khamharia',
    },
    {
      id: 1425,
      name: 'Kharod',
    },
    {
      id: 1426,
      name: 'Kharsia',
    },
    {
      id: 1427,
      name: 'Kirandul',
    },
    {
      id: 1428,
      name: 'Kondagaon',
    },
    {
      id: 1429,
      name: 'Koriya',
    },
    {
      id: 1430,
      name: 'Kotā',
    },
    {
      id: 1431,
      name: 'Kotapārh',
    },
    {
      id: 1432,
      name: 'Kumhāri',
    },
    {
      id: 1433,
      name: 'Kurud',
    },
    {
      id: 1434,
      name: 'Lormi',
    },
    {
      id: 1435,
      name: 'Mahasamund',
    },
    {
      id: 1436,
      name: 'Mahāsamund',
    },
    {
      id: 1437,
      name: 'Mungeli',
    },
    {
      id: 1438,
      name: 'Narayanpur',
    },
    {
      id: 1439,
      name: 'Narharpur',
    },
    {
      id: 1440,
      name: 'Pandaria',
    },
    {
      id: 1441,
      name: 'Pāndātarai',
    },
    {
      id: 1442,
      name: 'Pasān',
    },
    {
      id: 1443,
      name: 'Pātan',
    },
    {
      id: 1444,
      name: 'Pathalgaon',
    },
    {
      id: 1445,
      name: 'Pendra',
    },
    {
      id: 1446,
      name: 'Pithora',
    },
    {
      id: 1447,
      name: 'Rāj Nāndgaon',
    },
    {
      id: 1448,
      name: 'Rāj-Nāndgaon',
    },
    {
      id: 1449,
      name: 'Rāmānuj Ganj',
    },
    {
      id: 1450,
      name: 'Ratanpur',
    },
    {
      id: 1451,
      name: 'Saktī',
    },
    {
      id: 1452,
      name: 'Saraipali',
    },
    {
      id: 1453,
      name: 'Sārangarh',
    },
    {
      id: 1454,
      name: 'Seorīnārāyan',
    },
    {
      id: 1455,
      name: 'Simga',
    },
    {
      id: 1456,
      name: 'Surguja',
    },
    {
      id: 1457,
      name: 'Takhatpur',
    },
    {
      id: 1458,
      name: 'Umarkot',
    },
    {
      id: 1459,
      name: 'Uttar Bastar Kanker',
    },
    {
      id: 1460,
      name: 'Āmli',
    },
    {
      id: 1461,
      name: 'Dadra',
    },
    {
      id: 1462,
      name: 'Dadra & Nagar Haveli',
    },
    {
      id: 1463,
      name: 'Daman District',
    },
    {
      id: 1464,
      name: 'Diu',
    },
    {
      id: 1465,
      name: 'Alīpur',
    },
    {
      id: 1466,
      name: 'Bawāna',
    },
    {
      id: 1467,
      name: 'Central Delhi',
    },
    {
      id: 1468,
      name: 'Deoli',
    },
    {
      id: 1469,
      name: 'East Delhi',
    },
    {
      id: 1470,
      name: 'Karol Bāgh',
    },
    {
      id: 1471,
      name: 'Najafgarh',
    },
    {
      id: 1472,
      name: 'Nāngloi Jāt',
    },
    {
      id: 1473,
      name: 'North Delhi',
    },
    {
      id: 1474,
      name: 'North East Delhi',
    },
    {
      id: 1475,
      name: 'North West Delhi',
    },
    {
      id: 1476,
      name: 'Rohini',
    },
    {
      id: 1477,
      name: 'South Delhi',
    },
    {
      id: 1478,
      name: 'South West Delhi',
    },
    {
      id: 1479,
      name: 'West Delhi',
    },
    {
      id: 1480,
      name: 'Arambol',
    },
    {
      id: 1481,
      name: 'Baga',
    },
    {
      id: 1482,
      name: 'Bandora',
    },
    {
      id: 1483,
      name: 'Benaulim',
    },
    {
      id: 1484,
      name: 'Carapur',
    },
    {
      id: 1485,
      name: 'Cavelossim',
    },
    {
      id: 1486,
      name: 'Chinchinim',
    },
    {
      id: 1487,
      name: 'Colovale',
    },
    {
      id: 1488,
      name: 'Colva',
    },
    {
      id: 1489,
      name: 'Cortalim',
    },
    {
      id: 1490,
      name: 'Curti',
    },
    {
      id: 1491,
      name: 'Davorlim',
    },
    {
      id: 1492,
      name: 'Goa Velha',
    },
    {
      id: 1493,
      name: 'Guirim',
    },
    {
      id: 1494,
      name: 'Jua',
    },
    {
      id: 1495,
      name: 'Kānkon',
    },
    {
      id: 1496,
      name: 'Māpuca',
    },
    {
      id: 1497,
      name: 'Morjim',
    },
    {
      id: 1498,
      name: 'Mormugao',
    },
    {
      id: 1499,
      name: 'North Goa',
    },
    {
      id: 1500,
      name: 'Palle',
    },
    {
      id: 1501,
      name: 'Panaji',
    },
    {
      id: 1502,
      name: 'Pernem',
    },
    {
      id: 1503,
      name: 'Queula',
    },
    {
      id: 1504,
      name: 'Raia',
    },
    {
      id: 1505,
      name: 'Sancoale',
    },
    {
      id: 1506,
      name: 'Sanguem',
    },
    {
      id: 1507,
      name: 'Sanvordem',
    },
    {
      id: 1508,
      name: 'Serula',
    },
    {
      id: 1509,
      name: 'South Goa',
    },
    {
      id: 1510,
      name: 'Taleigao',
    },
    {
      id: 1511,
      name: 'Vagator',
    },
    {
      id: 1512,
      name: 'Valpoy',
    },
    {
      id: 1513,
      name: 'Varca',
    },
    {
      id: 1514,
      name: 'Vasco da Gama',
    },
    {
      id: 1515,
      name: 'Abrama',
    },
    {
      id: 1516,
      name: 'Adalaj',
    },
    {
      id: 1517,
      name: 'Ahmadābād',
    },
    {
      id: 1518,
      name: 'Ahwa',
    },
    {
      id: 1519,
      name: 'Amod',
    },
    {
      id: 1520,
      name: 'Amroli',
    },
    {
      id: 1521,
      name: 'Anjar',
    },
    {
      id: 1522,
      name: 'Babra',
    },
    {
      id: 1523,
      name: 'Bagasara',
    },
    {
      id: 1524,
      name: 'Bagasra',
    },
    {
      id: 1525,
      name: 'Banas Kantha',
    },
    {
      id: 1526,
      name: 'Bantva',
    },
    {
      id: 1527,
      name: 'Bedi',
    },
    {
      id: 1528,
      name: 'Bhachau',
    },
    {
      id: 1529,
      name: 'Bhanvad',
    },
    {
      id: 1530,
      name: 'Bhayavadar',
    },
    {
      id: 1531,
      name: 'Bilkha',
    },
    {
      id: 1532,
      name: 'Borsad',
    },
    {
      id: 1533,
      name: 'Chaklasi',
    },
    {
      id: 1534,
      name: 'Chalala',
    },
    {
      id: 1535,
      name: 'Chanasma',
    },
    {
      id: 1536,
      name: 'Chhala',
    },
    {
      id: 1537,
      name: 'Chikhli',
    },
    {
      id: 1538,
      name: 'Chotila',
    },
    {
      id: 1539,
      name: 'Dabhoi',
    },
    {
      id: 1540,
      name: 'Dahegam',
    },
    {
      id: 1541,
      name: 'Dakor',
    },
    {
      id: 1542,
      name: 'Damnagar',
    },
    {
      id: 1543,
      name: 'Dangs (India)',
    },
    {
      id: 1544,
      name: 'Dayapar',
    },
    {
      id: 1545,
      name: 'Delvada',
    },
    {
      id: 1546,
      name: 'Delwada',
    },
    {
      id: 1547,
      name: 'Devbhumi Dwarka',
    },
    {
      id: 1548,
      name: 'Devgadh Bariya',
    },
    {
      id: 1549,
      name: 'Dhandhuka',
    },
    {
      id: 1550,
      name: 'Dhanera',
    },
    {
      id: 1551,
      name: 'Dharampur',
    },
    {
      id: 1552,
      name: 'Dhāri',
    },
    {
      id: 1553,
      name: 'Dhola',
    },
    {
      id: 1554,
      name: 'Dholka',
    },
    {
      id: 1555,
      name: 'Dhoraji',
    },
    {
      id: 1556,
      name: 'Dhrangadhra',
    },
    {
      id: 1557,
      name: 'Dhuwaran',
    },
    {
      id: 1558,
      name: 'Disa',
    },
    {
      id: 1559,
      name: 'Dohad',
    },
    {
      id: 1560,
      name: 'Dungarpur',
    },
    {
      id: 1561,
      name: 'Gadhada',
    },
    {
      id: 1562,
      name: 'Gandevi',
    },
    {
      id: 1563,
      name: 'Gariadhar',
    },
    {
      id: 1564,
      name: 'Ghogha',
    },
    {
      id: 1565,
      name: 'Gir Somnath',
    },
    {
      id: 1566,
      name: 'Gondal',
    },
    {
      id: 1567,
      name: 'Halol',
    },
    {
      id: 1568,
      name: 'Halvad',
    },
    {
      id: 1569,
      name: 'Hansot',
    },
    {
      id: 1570,
      name: 'Harij',
    },
    {
      id: 1571,
      name: 'Jalalpore',
    },
    {
      id: 1572,
      name: 'Jambusar',
    },
    {
      id: 1573,
      name: 'Jasdan',
    },
    {
      id: 1574,
      name: 'Jetalsar',
    },
    {
      id: 1575,
      name: 'Jetpur',
    },
    {
      id: 1576,
      name: 'Jhulasan',
    },
    {
      id: 1577,
      name: 'Jodia',
    },
    {
      id: 1578,
      name: 'Jodiya Bandar',
    },
    {
      id: 1579,
      name: 'Kachchh',
    },
    {
      id: 1580,
      name: 'Kadi',
    },
    {
      id: 1581,
      name: 'Kadod',
    },
    {
      id: 1582,
      name: 'Kalavad',
    },
    {
      id: 1583,
      name: 'Kālol',
    },
    {
      id: 1584,
      name: 'Kandla',
    },
    {
      id: 1585,
      name: 'Kanodar',
    },
    {
      id: 1586,
      name: 'Kapadvanj',
    },
    {
      id: 1587,
      name: 'Kathor',
    },
    {
      id: 1588,
      name: 'Katpur',
    },
    {
      id: 1589,
      name: 'Kavant',
    },
    {
      id: 1590,
      name: 'Kawant',
    },
    {
      id: 1591,
      name: 'Khambhalia',
    },
    {
      id: 1592,
      name: 'Khambhaliya',
    },
    {
      id: 1593,
      name: 'Khedbrahma',
    },
    {
      id: 1594,
      name: 'Kheralu',
    },
    {
      id: 1595,
      name: 'Kodīnar',
    },
    {
      id: 1596,
      name: 'Kundla',
    },
    {
      id: 1597,
      name: 'Kutch district',
    },
    {
      id: 1598,
      name: 'Kutiyana',
    },
    {
      id: 1599,
      name: 'Lakhtar',
    },
    {
      id: 1600,
      name: 'Lalpur',
    },
    {
      id: 1601,
      name: 'Lathi',
    },
    {
      id: 1602,
      name: 'Limbdi',
    },
    {
      id: 1603,
      name: 'Lunavada',
    },
    {
      id: 1604,
      name: 'Mahemdavad',
    },
    {
      id: 1605,
      name: 'Mahudha',
    },
    {
      id: 1606,
      name: 'Manavadar',
    },
    {
      id: 1607,
      name: 'Māndal',
    },
    {
      id: 1608,
      name: 'Mandvi (Surat)',
    },
    {
      id: 1609,
      name: 'Mangrol',
    },
    {
      id: 1610,
      name: 'Meghraj',
    },
    {
      id: 1611,
      name: 'Mehsana',
    },
    {
      id: 1612,
      name: 'Mendarda',
    },
    {
      id: 1613,
      name: 'Morbi',
    },
    {
      id: 1614,
      name: 'Morva (Hadaf)',
    },
    {
      id: 1615,
      name: 'Morwa',
    },
    {
      id: 1616,
      name: 'Naliya',
    },
    {
      id: 1617,
      name: 'Narmada',
    },
    {
      id: 1618,
      name: 'Naroda',
    },
    {
      id: 1619,
      name: 'Okha',
    },
    {
      id: 1620,
      name: 'Olpad',
    },
    {
      id: 1621,
      name: 'Paddhari',
    },
    {
      id: 1622,
      name: 'Padra',
    },
    {
      id: 1623,
      name: 'Palanpur',
    },
    {
      id: 1624,
      name: 'Palitana',
    },
    {
      id: 1625,
      name: 'Paliyad',
    },
    {
      id: 1626,
      name: 'Panch Mahals',
    },
    {
      id: 1627,
      name: 'Panchmahal district',
    },
    {
      id: 1628,
      name: 'Pardi',
    },
    {
      id: 1629,
      name: 'Parnera',
    },
    {
      id: 1630,
      name: 'Pavi Jetpur',
    },
    {
      id: 1631,
      name: 'Radhanpur',
    },
    {
      id: 1632,
      name: 'Rajpipla',
    },
    {
      id: 1633,
      name: 'Rajula',
    },
    {
      id: 1634,
      name: 'Ranavav',
    },
    {
      id: 1635,
      name: 'Rapar',
    },
    {
      id: 1636,
      name: 'Roha',
    },
    {
      id: 1637,
      name: 'Sabar Kantha',
    },
    {
      id: 1638,
      name: 'Salaya',
    },
    {
      id: 1639,
      name: 'Sankheda',
    },
    {
      id: 1640,
      name: 'Sarkhej',
    },
    {
      id: 1641,
      name: 'Savarkundla',
    },
    {
      id: 1642,
      name: 'Sayla',
    },
    {
      id: 1643,
      name: 'Shahpur',
    },
    {
      id: 1644,
      name: 'Shivrajpur',
    },
    {
      id: 1645,
      name: 'Siddhapur',
    },
    {
      id: 1646,
      name: 'Siddhpur',
    },
    {
      id: 1647,
      name: 'Sihor',
    },
    {
      id: 1648,
      name: 'Sinor',
    },
    {
      id: 1649,
      name: 'Sojitra',
    },
    {
      id: 1650,
      name: 'Songadh',
    },
    {
      id: 1651,
      name: 'Surat',
    },
    {
      id: 1652,
      name: 'Talaja',
    },
    {
      id: 1653,
      name: 'Tankara',
    },
    {
      id: 1654,
      name: 'Tapi',
    },
    {
      id: 1655,
      name: 'Than',
    },
    {
      id: 1656,
      name: 'Thangadh',
    },
    {
      id: 1657,
      name: 'Tharad',
    },
    {
      id: 1658,
      name: 'The Dāngs',
    },
    {
      id: 1659,
      name: 'Umrala',
    },
    {
      id: 1660,
      name: 'Umreth',
    },
    {
      id: 1661,
      name: 'Un',
    },
    {
      id: 1662,
      name: 'Una',
    },
    {
      id: 1663,
      name: 'Unjha',
    },
    {
      id: 1664,
      name: 'Upleta',
    },
    {
      id: 1665,
      name: 'Utran',
    },
    {
      id: 1666,
      name: 'Vadnagar',
    },
    {
      id: 1667,
      name: 'Vaghodia',
    },
    {
      id: 1668,
      name: 'Valabhipur',
    },
    {
      id: 1669,
      name: 'Vallabh Vidyanagar',
    },
    {
      id: 1670,
      name: 'Vallabhipur',
    },
    {
      id: 1671,
      name: 'Vansada',
    },
    {
      id: 1672,
      name: 'Vansda',
    },
    {
      id: 1673,
      name: 'Vartej',
    },
    {
      id: 1674,
      name: 'Vasa',
    },
    {
      id: 1675,
      name: 'Vaso',
    },
    {
      id: 1676,
      name: 'Vejalpur',
    },
    {
      id: 1677,
      name: 'Veraval',
    },
    {
      id: 1678,
      name: 'Vinchhiya',
    },
    {
      id: 1679,
      name: 'Vinchia',
    },
    {
      id: 1680,
      name: 'Virpur',
    },
    {
      id: 1681,
      name: 'Visavadar',
    },
    {
      id: 1682,
      name: 'Vyara',
    },
    {
      id: 1683,
      name: 'Wadhai',
    },
    {
      id: 1684,
      name: 'Wadhwan',
    },
    {
      id: 1685,
      name: 'Waghai',
    },
    {
      id: 1686,
      name: 'Wankaner',
    },
    {
      id: 1687,
      name: 'Ambāla',
    },
    {
      id: 1688,
      name: 'Āsandh',
    },
    {
      id: 1689,
      name: 'Ateli Mandi',
    },
    {
      id: 1690,
      name: 'Bahādurgarh',
    },
    {
      id: 1691,
      name: 'Bara Uchāna',
    },
    {
      id: 1692,
      name: 'Barwāla',
    },
    {
      id: 1693,
      name: 'Bāwal',
    },
    {
      id: 1694,
      name: 'Beri Khās',
    },
    {
      id: 1695,
      name: 'Bhiwāni',
    },
    {
      id: 1696,
      name: 'Būriya',
    },
    {
      id: 1697,
      name: 'Charkhi Dādri',
    },
    {
      id: 1698,
      name: 'Dabwāli',
    },
    {
      id: 1699,
      name: 'Dhāruhera',
    },
    {
      id: 1700,
      name: 'Ellenabad',
    },
    {
      id: 1701,
      name: 'Faridabad District',
    },
    {
      id: 1702,
      name: 'Farrukhnagar',
    },
    {
      id: 1703,
      name: 'Fatehābād',
    },
    {
      id: 1704,
      name: 'Fatehabad District',
    },
    {
      id: 1705,
      name: 'Fīrozpur Jhirka',
    },
    {
      id: 1706,
      name: 'Gharaunda',
    },
    {
      id: 1707,
      name: 'Gohāna',
    },
    {
      id: 1708,
      name: 'Hānsi',
    },
    {
      id: 1709,
      name: 'Hasanpur',
    },
    {
      id: 1710,
      name: 'Hisār',
    },
    {
      id: 1711,
      name: 'Hodal',
    },
    {
      id: 1712,
      name: 'Inda Chhoi',
    },
    {
      id: 1713,
      name: 'Indri',
    },
    {
      id: 1714,
      name: 'Jagādhri',
    },
    {
      id: 1715,
      name: 'Jākhal',
    },
    {
      id: 1716,
      name: 'Jīnd',
    },
    {
      id: 1717,
      name: 'Kalānaur',
    },
    {
      id: 1718,
      name: 'Kālānwāli',
    },
    {
      id: 1719,
      name: 'Kanīna Khās',
    },
    {
      id: 1720,
      name: 'Karnāl',
    },
    {
      id: 1721,
      name: 'Kharkhauda',
    },
    {
      id: 1722,
      name: 'Kheri Sāmpla',
    },
    {
      id: 1723,
      name: 'Kurukshetra',
    },
    {
      id: 1724,
      name: 'Lādwa',
    },
    {
      id: 1725,
      name: 'Lohāru',
    },
    {
      id: 1726,
      name: 'Maham',
    },
    {
      id: 1727,
      name: 'Mahendragarh',
    },
    {
      id: 1728,
      name: 'Mandholi Kalān',
    },
    {
      id: 1729,
      name: 'Mustafābād',
    },
    {
      id: 1730,
      name: 'Narāyangarh',
    },
    {
      id: 1731,
      name: 'Nārnaul',
    },
    {
      id: 1732,
      name: 'Nārnaund',
    },
    {
      id: 1733,
      name: 'Narwāna',
    },
    {
      id: 1734,
      name: 'Nīlokheri',
    },
    {
      id: 1735,
      name: 'Nūh',
    },
    {
      id: 1736,
      name: 'Panchkula',
    },
    {
      id: 1737,
      name: 'Pānīpat',
    },
    {
      id: 1738,
      name: 'Pataudi',
    },
    {
      id: 1739,
      name: 'Pinjaur',
    },
    {
      id: 1740,
      name: 'Pūnāhāna',
    },
    {
      id: 1741,
      name: 'Pūndri',
    },
    {
      id: 1742,
      name: 'Radaur',
    },
    {
      id: 1743,
      name: 'Rānia',
    },
    {
      id: 1744,
      name: 'Ratia',
    },
    {
      id: 1745,
      name: 'Rewāri',
    },
    {
      id: 1746,
      name: 'Rewari District',
    },
    {
      id: 1747,
      name: 'Safidon',
    },
    {
      id: 1748,
      name: 'Samālkha',
    },
    {
      id: 1749,
      name: 'Shādīpur Julāna',
    },
    {
      id: 1750,
      name: 'Shāhābād',
    },
    {
      id: 1751,
      name: 'Sohna',
    },
    {
      id: 1752,
      name: 'Sonīpat',
    },
    {
      id: 1753,
      name: 'Tāoru',
    },
    {
      id: 1754,
      name: 'Thānesar',
    },
    {
      id: 1755,
      name: 'Tohāna',
    },
    {
      id: 1756,
      name: 'Toshām',
    },
    {
      id: 1757,
      name: 'Uklāna',
    },
    {
      id: 1758,
      name: 'Yamunānagar',
    },
    {
      id: 1759,
      name: 'Arki',
    },
    {
      id: 1760,
      name: 'Banjār',
    },
    {
      id: 1761,
      name: 'Chaupāl',
    },
    {
      id: 1762,
      name: 'Chowari',
    },
    {
      id: 1763,
      name: 'Chuāri Khās',
    },
    {
      id: 1764,
      name: 'Dagshai',
    },
    {
      id: 1765,
      name: 'Dalhousie',
    },
    {
      id: 1766,
      name: 'Daulatpur',
    },
    {
      id: 1767,
      name: 'Dera Gopipur',
    },
    {
      id: 1768,
      name: 'Gagret',
    },
    {
      id: 1769,
      name: 'Ghumārwīn',
    },
    {
      id: 1770,
      name: 'Hamīrpur',
    },
    {
      id: 1771,
      name: 'Jawāla Mukhi',
    },
    {
      id: 1772,
      name: 'Jogindarnagar',
    },
    {
      id: 1773,
      name: 'Jubbal',
    },
    {
      id: 1774,
      name: 'Jutogh',
    },
    {
      id: 1775,
      name: 'Kālka',
    },
    {
      id: 1776,
      name: 'Kāngar',
    },
    {
      id: 1777,
      name: 'Kāngra',
    },
    {
      id: 1778,
      name: 'Kasauli',
    },
    {
      id: 1779,
      name: 'Kinnaur',
    },
    {
      id: 1780,
      name: 'Kotkhai',
    },
    {
      id: 1781,
      name: 'Kotla',
    },
    {
      id: 1782,
      name: 'Kulu',
    },
    {
      id: 1783,
      name: 'Kyelang',
    },
    {
      id: 1784,
      name: 'Lāhul and Spiti',
    },
    {
      id: 1785,
      name: 'Manāli',
    },
    {
      id: 1786,
      name: 'Nādaun',
    },
    {
      id: 1787,
      name: 'Nagrota',
    },
    {
      id: 1788,
      name: 'Nāhan',
    },
    {
      id: 1789,
      name: 'Nālāgarh',
    },
    {
      id: 1790,
      name: 'Pālampur',
    },
    {
      id: 1791,
      name: 'Pāndoh',
    },
    {
      id: 1792,
      name: 'Pāonta Sāhib',
    },
    {
      id: 1793,
      name: 'Parwanoo',
    },
    {
      id: 1794,
      name: 'Rājgarh',
    },
    {
      id: 1795,
      name: 'Rāmpur',
    },
    {
      id: 1796,
      name: 'Rohru',
    },
    {
      id: 1797,
      name: 'Sabāthu',
    },
    {
      id: 1798,
      name: 'Santokhgarh',
    },
    {
      id: 1799,
      name: 'Sarāhan',
    },
    {
      id: 1800,
      name: 'Sarka Ghāt',
    },
    {
      id: 1801,
      name: 'Seoni',
    },
    {
      id: 1802,
      name: 'Sirmaur',
    },
    {
      id: 1803,
      name: 'Sundarnagar',
    },
    {
      id: 1804,
      name: 'Theog',
    },
    {
      id: 1805,
      name: 'Tīra Sujānpur',
    },
    {
      id: 1806,
      name: 'Yol',
    },
    {
      id: 1807,
      name: 'Akhnūr',
    },
    {
      id: 1808,
      name: 'Anantnāg',
    },
    {
      id: 1809,
      name: 'Awantipur',
    },
    {
      id: 1810,
      name: 'Badgam',
    },
    {
      id: 1811,
      name: 'Bandipore',
    },
    {
      id: 1812,
      name: 'Bandipura',
    },
    {
      id: 1813,
      name: 'Banihāl',
    },
    {
      id: 1814,
      name: 'Bāramūla',
    },
    {
      id: 1815,
      name: 'Batoti',
    },
    {
      id: 1816,
      name: 'Bhadarwāh',
    },
    {
      id: 1817,
      name: 'Bijbehara',
    },
    {
      id: 1818,
      name: 'Bishnāh',
    },
    {
      id: 1819,
      name: 'Doda',
    },
    {
      id: 1820,
      name: 'Gāndarbal',
    },
    {
      id: 1821,
      name: 'Ganderbal',
    },
    {
      id: 1822,
      name: 'Gho Brāhmanān de',
    },
    {
      id: 1823,
      name: 'Hājan',
    },
    {
      id: 1824,
      name: 'Hirānagar',
    },
    {
      id: 1825,
      name: 'Jauriān',
    },
    {
      id: 1826,
      name: 'Khaur',
    },
    {
      id: 1827,
      name: 'Kishtwar',
    },
    {
      id: 1828,
      name: 'Kishtwār',
    },
    {
      id: 1829,
      name: 'Kūd',
    },
    {
      id: 1830,
      name: 'Kulgam',
    },
    {
      id: 1831,
      name: 'Kupwara',
    },
    {
      id: 1832,
      name: 'Kupwāra',
    },
    {
      id: 1833,
      name: 'Ladākh',
    },
    {
      id: 1834,
      name: 'Māgām',
    },
    {
      id: 1835,
      name: 'Nawānshahr',
    },
    {
      id: 1836,
      name: 'Norīa',
    },
    {
      id: 1837,
      name: 'Padam',
    },
    {
      id: 1838,
      name: 'Pahlgām',
    },
    {
      id: 1839,
      name: 'Parol',
    },
    {
      id: 1840,
      name: 'Pattan',
    },
    {
      id: 1841,
      name: 'Pulwama',
    },
    {
      id: 1842,
      name: 'Punch',
    },
    {
      id: 1843,
      name: 'Pūnch',
    },
    {
      id: 1844,
      name: 'Qāzigund',
    },
    {
      id: 1845,
      name: 'Rajaori',
    },
    {
      id: 1846,
      name: 'Rājauri',
    },
    {
      id: 1847,
      name: 'Rāmban',
    },
    {
      id: 1848,
      name: 'Ramban',
    },
    {
      id: 1849,
      name: 'Rāmgarh',
    },
    {
      id: 1850,
      name: 'Riāsi',
    },
    {
      id: 1851,
      name: 'Samba',
    },
    {
      id: 1852,
      name: 'Sāmba',
    },
    {
      id: 1853,
      name: 'Shupiyan',
    },
    {
      id: 1854,
      name: 'Shupīyan',
    },
    {
      id: 1855,
      name: 'Sopur',
    },
    {
      id: 1856,
      name: 'Soyībug',
    },
    {
      id: 1857,
      name: 'Srīnagar',
    },
    {
      id: 1858,
      name: 'Sumbal',
    },
    {
      id: 1859,
      name: 'Thang',
    },
    {
      id: 1860,
      name: 'Thanna Mandi',
    },
    {
      id: 1861,
      name: 'Trāl',
    },
    {
      id: 1862,
      name: 'Tsrār Sharīf',
    },
    {
      id: 1863,
      name: 'Udhampur',
    },
    {
      id: 1864,
      name: 'Uri',
    },
    {
      id: 1865,
      name: 'Bagra',
    },
    {
      id: 1866,
      name: 'Barkā Kānā',
    },
    {
      id: 1867,
      name: 'Barki Saria',
    },
    {
      id: 1868,
      name: 'Barwādih',
    },
    {
      id: 1869,
      name: 'Bhojudih',
    },
    {
      id: 1870,
      name: 'Bokāro',
    },
    {
      id: 1871,
      name: 'Būndu',
    },
    {
      id: 1872,
      name: 'Chāībāsa',
    },
    {
      id: 1873,
      name: 'Chakradharpur',
    },
    {
      id: 1874,
      name: 'Chākuliā',
    },
    {
      id: 1875,
      name: 'Chāndil',
    },
    {
      id: 1876,
      name: 'Chās',
    },
    {
      id: 1877,
      name: 'Chatrā',
    },
    {
      id: 1878,
      name: 'Chiria',
    },
    {
      id: 1879,
      name: 'Daltonganj',
    },
    {
      id: 1880,
      name: 'Deogarh',
    },
    {
      id: 1881,
      name: 'Dhanbād',
    },
    {
      id: 1882,
      name: 'Dhānbād',
    },
    {
      id: 1883,
      name: 'Dhanwār',
    },
    {
      id: 1884,
      name: 'Dugda',
    },
    {
      id: 1885,
      name: 'Garhwa',
    },
    {
      id: 1886,
      name: 'Ghātsīla',
    },
    {
      id: 1887,
      name: 'Girīdīh',
    },
    {
      id: 1888,
      name: 'Gīrīdīh',
    },
    {
      id: 1889,
      name: 'Gobindpur',
    },
    {
      id: 1890,
      name: 'Godda',
    },
    {
      id: 1891,
      name: 'Gomoh',
    },
    {
      id: 1892,
      name: 'Gopināthpur',
    },
    {
      id: 1893,
      name: 'Gua',
    },
    {
      id: 1894,
      name: 'Gumia',
    },
    {
      id: 1895,
      name: 'Gumla',
    },
    {
      id: 1896,
      name: 'Gumlā',
    },
    {
      id: 1897,
      name: 'Hazārībāg',
    },
    {
      id: 1898,
      name: 'Hazāribāgh',
    },
    {
      id: 1899,
      name: 'Hesla',
    },
    {
      id: 1900,
      name: 'Husainābād',
    },
    {
      id: 1901,
      name: 'Jagannāthpur',
    },
    {
      id: 1902,
      name: 'Jāmadoba',
    },
    {
      id: 1903,
      name: 'Jamtara',
    },
    {
      id: 1904,
      name: 'Jāmtāra',
    },
    {
      id: 1905,
      name: 'Jasidih',
    },
    {
      id: 1906,
      name: 'Jharia',
    },
    {
      id: 1907,
      name: 'Jugsālai',
    },
    {
      id: 1908,
      name: 'Jumri Tilaiyā',
    },
    {
      id: 1909,
      name: 'Kālikāpur',
    },
    {
      id: 1910,
      name: 'Kāndra',
    },
    {
      id: 1911,
      name: 'Kānke',
    },
    {
      id: 1912,
      name: 'Kātrās',
    },
    {
      id: 1913,
      name: 'Kenduadīh',
    },
    {
      id: 1914,
      name: 'Kharsāwān',
    },
    {
      id: 1915,
      name: 'Khunti',
    },
    {
      id: 1916,
      name: 'Kodarmā',
    },
    {
      id: 1917,
      name: 'Kuju',
    },
    {
      id: 1918,
      name: 'Latehar',
    },
    {
      id: 1919,
      name: 'Lātehār',
    },
    {
      id: 1920,
      name: 'Lohardaga',
    },
    {
      id: 1921,
      name: 'Lohārdagā',
    },
    {
      id: 1922,
      name: 'Madhupur',
    },
    {
      id: 1923,
      name: 'Malkera',
    },
    {
      id: 1924,
      name: 'Manoharpur',
    },
    {
      id: 1925,
      name: 'Mugma',
    },
    {
      id: 1926,
      name: 'Mushābani',
    },
    {
      id: 1927,
      name: 'Neturhāt',
    },
    {
      id: 1928,
      name: 'Nirsā',
    },
    {
      id: 1929,
      name: 'Noāmundi',
    },
    {
      id: 1930,
      name: 'Pakur',
    },
    {
      id: 1931,
      name: 'Palāmu',
    },
    {
      id: 1932,
      name: 'Pashchim Singhbhūm',
    },
    {
      id: 1933,
      name: 'patamda',
    },
    {
      id: 1934,
      name: 'Pāthardih',
    },
    {
      id: 1935,
      name: 'Purba Singhbhum',
    },
    {
      id: 1936,
      name: 'Rānchī',
    },
    {
      id: 1937,
      name: 'Rāy',
    },
    {
      id: 1938,
      name: 'Sahibganj',
    },
    {
      id: 1939,
      name: 'Sāhibganj',
    },
    {
      id: 1940,
      name: 'Saraikela',
    },
    {
      id: 1941,
      name: 'Sāruberā',
    },
    {
      id: 1942,
      name: 'Sijua',
    },
    {
      id: 1943,
      name: 'Simdega',
    },
    {
      id: 1944,
      name: 'Sini',
    },
    {
      id: 1945,
      name: 'Topchānchi',
    },
    {
      id: 1946,
      name: 'Afzalpur',
    },
    {
      id: 1947,
      name: 'Ajjampur',
    },
    {
      id: 1948,
      name: 'Aland',
    },
    {
      id: 1949,
      name: 'Alnāvar',
    },
    {
      id: 1950,
      name: 'Alūr',
    },
    {
      id: 1951,
      name: 'Anekal',
    },
    {
      id: 1952,
      name: 'Ankola',
    },
    {
      id: 1953,
      name: 'Annigeri',
    },
    {
      id: 1954,
      name: 'Arkalgūd',
    },
    {
      id: 1955,
      name: 'Arsikere',
    },
    {
      id: 1956,
      name: 'Athni',
    },
    {
      id: 1957,
      name: 'Aurād',
    },
    {
      id: 1958,
      name: 'Bādāmi',
    },
    {
      id: 1959,
      name: 'Bāgepalli',
    },
    {
      id: 1960,
      name: 'Bail-Hongal',
    },
    {
      id: 1961,
      name: 'Ballari',
    },
    {
      id: 1962,
      name: 'Bānāvar',
    },
    {
      id: 1963,
      name: 'Bangalore Rural',
    },
    {
      id: 1964,
      name: 'Bangalore Urban',
    },
    {
      id: 1965,
      name: 'Bangarapet',
    },
    {
      id: 1966,
      name: 'Bannūr',
    },
    {
      id: 1967,
      name: 'Bantvāl',
    },
    {
      id: 1968,
      name: 'Basavakalyān',
    },
    {
      id: 1969,
      name: 'Basavana Bāgevādi',
    },
    {
      id: 1970,
      name: 'Bellūru',
    },
    {
      id: 1971,
      name: 'Beltangadi',
    },
    {
      id: 1972,
      name: 'Belūr',
    },
    {
      id: 1973,
      name: 'Bengaluru',
    },
    {
      id: 1974,
      name: 'Bhadrāvati',
    },
    {
      id: 1975,
      name: 'Bhālki',
    },
    {
      id: 1976,
      name: 'Bīdar',
    },
    {
      id: 1977,
      name: 'Bijāpur',
    },
    {
      id: 1978,
      name: 'Bilgi',
    },
    {
      id: 1979,
      name: 'Birūr',
    },
    {
      id: 1980,
      name: 'Byādgi',
    },
    {
      id: 1981,
      name: 'Byndoor',
    },
    {
      id: 1982,
      name: 'Canacona',
    },
    {
      id: 1983,
      name: 'Challakere',
    },
    {
      id: 1984,
      name: 'Chamrajnagar',
    },
    {
      id: 1985,
      name: 'Channagiri',
    },
    {
      id: 1986,
      name: 'Channarāyapatna',
    },
    {
      id: 1987,
      name: 'Chik Ballāpur',
    },
    {
      id: 1988,
      name: 'Chikkaballapur',
    },
    {
      id: 1989,
      name: 'Chikmagalur',
    },
    {
      id: 1990,
      name: 'Chikmagalūr',
    },
    {
      id: 1991,
      name: 'Chiknāyakanhalli',
    },
    {
      id: 1992,
      name: 'Chincholi',
    },
    {
      id: 1993,
      name: 'Chintāmani',
    },
    {
      id: 1994,
      name: 'Chītāpur',
    },
    {
      id: 1995,
      name: 'Closepet',
    },
    {
      id: 1996,
      name: 'Coondapoor',
    },
    {
      id: 1997,
      name: 'Dakshina Kannada',
    },
    {
      id: 1998,
      name: 'Dandeli',
    },
    {
      id: 1999,
      name: 'Davanagere',
    },
    {
      id: 2000,
      name: 'Devanhalli',
    },
    {
      id: 2001,
      name: 'Dod Ballāpur',
    },
    {
      id: 2002,
      name: 'French Rocks',
    },
    {
      id: 2003,
      name: 'Gadag-Betageri',
    },
    {
      id: 2004,
      name: 'Gajendragarh',
    },
    {
      id: 2005,
      name: 'Gangāwati',
    },
    {
      id: 2006,
      name: 'Gangolli',
    },
    {
      id: 2007,
      name: 'Gokak',
    },
    {
      id: 2008,
      name: 'Gokarna',
    },
    {
      id: 2009,
      name: 'Goribidnūr',
    },
    {
      id: 2010,
      name: 'Gorūr',
    },
    {
      id: 2011,
      name: 'Gubbi',
    },
    {
      id: 2012,
      name: 'Gudibanda',
    },
    {
      id: 2013,
      name: 'Guledagudda',
    },
    {
      id: 2014,
      name: 'Gundlupēt',
    },
    {
      id: 2015,
      name: 'Gurmatkāl',
    },
    {
      id: 2016,
      name: 'Hadagalli',
    },
    {
      id: 2017,
      name: 'Haliyal',
    },
    {
      id: 2018,
      name: 'Hampi',
    },
    {
      id: 2019,
      name: 'Hāngal',
    },
    {
      id: 2020,
      name: 'Harihar',
    },
    {
      id: 2021,
      name: 'Harpanahalli',
    },
    {
      id: 2022,
      name: 'Hāveri',
    },
    {
      id: 2023,
      name: 'Heggadadevankote',
    },
    {
      id: 2024,
      name: 'Hirekerūr',
    },
    {
      id: 2025,
      name: 'Hiriyūr',
    },
    {
      id: 2026,
      name: 'Holalkere',
    },
    {
      id: 2027,
      name: 'Hole Narsipur',
    },
    {
      id: 2028,
      name: 'Homnābād',
    },
    {
      id: 2029,
      name: 'Honāvar',
    },
    {
      id: 2030,
      name: 'Honnāli',
    },
    {
      id: 2031,
      name: 'Hosakote',
    },
    {
      id: 2032,
      name: 'Hosanagara',
    },
    {
      id: 2033,
      name: 'Hosangadi',
    },
    {
      id: 2034,
      name: 'Hosdurga',
    },
    {
      id: 2035,
      name: 'Hoskote',
    },
    {
      id: 2036,
      name: 'Hospet',
    },
    {
      id: 2037,
      name: 'Hukeri',
    },
    {
      id: 2038,
      name: 'Hungund',
    },
    {
      id: 2039,
      name: 'Hunsūr',
    },
    {
      id: 2040,
      name: 'Ilkal',
    },
    {
      id: 2041,
      name: 'Indi',
    },
    {
      id: 2042,
      name: 'Jagalūr',
    },
    {
      id: 2043,
      name: 'Jamkhandi',
    },
    {
      id: 2044,
      name: 'Jevargi',
    },
    {
      id: 2045,
      name: 'Kadūr',
    },
    {
      id: 2046,
      name: 'Kalghatgi',
    },
    {
      id: 2047,
      name: 'Kampli',
    },
    {
      id: 2048,
      name: 'Kānkānhalli',
    },
    {
      id: 2049,
      name: 'Kārkala',
    },
    {
      id: 2050,
      name: 'Kavalūr',
    },
    {
      id: 2051,
      name: 'Kerūr',
    },
    {
      id: 2052,
      name: 'Khānāpur',
    },
    {
      id: 2053,
      name: 'Kodagu',
    },
    {
      id: 2054,
      name: 'Kodigenahalli',
    },
    {
      id: 2055,
      name: 'Kodlipet',
    },
    {
      id: 2056,
      name: 'Kolār',
    },
    {
      id: 2057,
      name: 'Kollegāl',
    },
    {
      id: 2058,
      name: 'Konanūr',
    },
    {
      id: 2059,
      name: 'Konnūr',
    },
    {
      id: 2060,
      name: 'Koppa',
    },
    {
      id: 2061,
      name: 'Koratagere',
    },
    {
      id: 2062,
      name: 'Kottūru',
    },
    {
      id: 2063,
      name: 'Krishnarājpet',
    },
    {
      id: 2064,
      name: 'Kudachi',
    },
    {
      id: 2065,
      name: 'Kūdligi',
    },
    {
      id: 2066,
      name: 'Kumsi',
    },
    {
      id: 2067,
      name: 'Kumta',
    },
    {
      id: 2068,
      name: 'Kundgol',
    },
    {
      id: 2069,
      name: 'Kunigal',
    },
    {
      id: 2070,
      name: 'Kurgunta',
    },
    {
      id: 2071,
      name: 'Kushālnagar',
    },
    {
      id: 2072,
      name: 'Kushtagi',
    },
    {
      id: 2073,
      name: 'Lakshmeshwar',
    },
    {
      id: 2074,
      name: 'Lingsugūr',
    },
    {
      id: 2075,
      name: 'Londa',
    },
    {
      id: 2076,
      name: 'Maddagiri',
    },
    {
      id: 2077,
      name: 'Maddūr',
    },
    {
      id: 2078,
      name: 'Māgadi',
    },
    {
      id: 2079,
      name: 'Mahālingpur',
    },
    {
      id: 2080,
      name: 'Malavalli',
    },
    {
      id: 2081,
      name: 'Malpe',
    },
    {
      id: 2082,
      name: 'Mālūr',
    },
    {
      id: 2083,
      name: 'Manipal',
    },
    {
      id: 2084,
      name: 'Mānvi',
    },
    {
      id: 2085,
      name: 'Māyakonda',
    },
    {
      id: 2086,
      name: 'Melukote',
    },
    {
      id: 2087,
      name: 'Mūdbidri',
    },
    {
      id: 2088,
      name: 'Muddebihāl',
    },
    {
      id: 2089,
      name: 'Mudgal',
    },
    {
      id: 2090,
      name: 'Mudgere',
    },
    {
      id: 2091,
      name: 'Mudhol',
    },
    {
      id: 2092,
      name: 'Mulbāgal',
    },
    {
      id: 2093,
      name: 'Mulgund',
    },
    {
      id: 2094,
      name: 'Mūlki',
    },
    {
      id: 2095,
      name: 'Mundargi',
    },
    {
      id: 2096,
      name: 'Munirābād',
    },
    {
      id: 2097,
      name: 'Murudeshwara',
    },
    {
      id: 2098,
      name: 'Nāgamangala',
    },
    {
      id: 2099,
      name: 'Nanjangūd',
    },
    {
      id: 2100,
      name: 'Narasimharājapura',
    },
    {
      id: 2101,
      name: 'Naregal',
    },
    {
      id: 2102,
      name: 'Nargund',
    },
    {
      id: 2103,
      name: 'Navalgund',
    },
    {
      id: 2104,
      name: 'Nelamangala',
    },
    {
      id: 2105,
      name: 'Nyāmti',
    },
    {
      id: 2106,
      name: 'Pāngāla',
    },
    {
      id: 2107,
      name: 'Pāvugada',
    },
    {
      id: 2108,
      name: 'Piriyāpatna',
    },
    {
      id: 2109,
      name: 'Ponnampet',
    },
    {
      id: 2110,
      name: 'Rabkavi',
    },
    {
      id: 2111,
      name: 'Rāichūr',
    },
    {
      id: 2112,
      name: 'Ramanagara',
    },
    {
      id: 2113,
      name: 'Rānībennur',
    },
    {
      id: 2114,
      name: 'Rāybāg',
    },
    {
      id: 2115,
      name: 'Robertsonpet',
    },
    {
      id: 2116,
      name: 'Ron',
    },
    {
      id: 2117,
      name: 'Sadalgi',
    },
    {
      id: 2118,
      name: 'Sāgar',
    },
    {
      id: 2119,
      name: 'Sakleshpur',
    },
    {
      id: 2120,
      name: 'Sandūr',
    },
    {
      id: 2121,
      name: 'Sanivārsante',
    },
    {
      id: 2122,
      name: 'Sankeshwar',
    },
    {
      id: 2123,
      name: 'Sargūr',
    },
    {
      id: 2124,
      name: 'Saundatti',
    },
    {
      id: 2125,
      name: 'Savanūr',
    },
    {
      id: 2126,
      name: 'Seram',
    },
    {
      id: 2127,
      name: 'Shiggaon',
    },
    {
      id: 2128,
      name: 'Shikārpur',
    },
    {
      id: 2129,
      name: 'Shirhatti',
    },
    {
      id: 2130,
      name: 'Shorāpur',
    },
    {
      id: 2131,
      name: 'Shrīrangapattana',
    },
    {
      id: 2132,
      name: 'Siddāpur',
    },
    {
      id: 2133,
      name: 'Sidlaghatta',
    },
    {
      id: 2134,
      name: 'Sindgi',
    },
    {
      id: 2135,
      name: 'Sindhnūr',
    },
    {
      id: 2136,
      name: 'Sīra',
    },
    {
      id: 2137,
      name: 'Someshwar',
    },
    {
      id: 2138,
      name: 'Somvārpet',
    },
    {
      id: 2139,
      name: 'Sorab',
    },
    {
      id: 2140,
      name: 'Srāvana Belgola',
    },
    {
      id: 2141,
      name: 'Sringeri',
    },
    {
      id: 2142,
      name: 'Srīnivāspur',
    },
    {
      id: 2143,
      name: 'Sulya',
    },
    {
      id: 2144,
      name: 'Suntikoppa',
    },
    {
      id: 2145,
      name: 'Tālīkota',
    },
    {
      id: 2146,
      name: 'Tarikere',
    },
    {
      id: 2147,
      name: 'Tekkalakote',
    },
    {
      id: 2148,
      name: 'Terdāl',
    },
    {
      id: 2149,
      name: 'Tiptūr',
    },
    {
      id: 2150,
      name: 'Tīrthahalli',
    },
    {
      id: 2151,
      name: 'Tirumakūdal Narsipur',
    },
    {
      id: 2152,
      name: 'Tumkur',
    },
    {
      id: 2153,
      name: 'Tumkūr',
    },
    {
      id: 2154,
      name: 'Turuvekere',
    },
    {
      id: 2155,
      name: 'Ullal',
    },
    {
      id: 2156,
      name: 'Uttar Kannada',
    },
    {
      id: 2157,
      name: 'Vadigenhalli',
    },
    {
      id: 2158,
      name: 'Vīrarājendrapet',
    },
    {
      id: 2159,
      name: 'Wādi',
    },
    {
      id: 2160,
      name: 'Yādgīr',
    },
    {
      id: 2161,
      name: 'Yelahanka',
    },
    {
      id: 2162,
      name: 'Yelandūr',
    },
    {
      id: 2163,
      name: 'Yelbarga',
    },
    {
      id: 2164,
      name: 'Yellāpur',
    },
    {
      id: 2165,
      name: 'Adūr',
    },
    {
      id: 2166,
      name: 'Alwaye',
    },
    {
      id: 2167,
      name: 'Angamāli',
    },
    {
      id: 2168,
      name: 'Aroor',
    },
    {
      id: 2169,
      name: 'Arukutti',
    },
    {
      id: 2170,
      name: 'Avanoor',
    },
    {
      id: 2171,
      name: 'Azhikkal',
    },
    {
      id: 2172,
      name: 'Badagara',
    },
    {
      id: 2173,
      name: 'Beypore',
    },
    {
      id: 2174,
      name: 'Changanācheri',
    },
    {
      id: 2175,
      name: 'Chēlakara',
    },
    {
      id: 2176,
      name: 'Chengannūr',
    },
    {
      id: 2177,
      name: 'Cherpulassery',
    },
    {
      id: 2178,
      name: 'Cherthala',
    },
    {
      id: 2179,
      name: 'Chetwayi',
    },
    {
      id: 2180,
      name: 'Chittūr',
    },
    {
      id: 2181,
      name: 'Cochin',
    },
    {
      id: 2182,
      name: 'Dharmadam',
    },
    {
      id: 2183,
      name: 'Edakkulam',
    },
    {
      id: 2184,
      name: 'Elūr',
    },
    {
      id: 2185,
      name: 'Erāttupetta',
    },
    {
      id: 2186,
      name: 'Ernākulam',
    },
    {
      id: 2187,
      name: 'Ferokh',
    },
    {
      id: 2188,
      name: 'Guruvāyūr',
    },
    {
      id: 2189,
      name: 'Iringal',
    },
    {
      id: 2190,
      name: 'Irinjālakuda',
    },
    {
      id: 2191,
      name: 'Kadakkavoor',
    },
    {
      id: 2192,
      name: 'Kalamassery',
    },
    {
      id: 2193,
      name: 'Kalavoor',
    },
    {
      id: 2194,
      name: 'Kalpatta',
    },
    {
      id: 2195,
      name: 'Kānnangād',
    },
    {
      id: 2196,
      name: 'Kannavam',
    },
    {
      id: 2197,
      name: 'Kāsaragod',
    },
    {
      id: 2198,
      name: 'Kāsaragod District',
    },
    {
      id: 2199,
      name: 'Kattanam',
    },
    {
      id: 2200,
      name: 'Kāyankulam',
    },
    {
      id: 2201,
      name: 'Kizhake Chālakudi',
    },
    {
      id: 2202,
      name: 'Kodungallūr',
    },
    {
      id: 2203,
      name: 'Kotamangalam',
    },
    {
      id: 2204,
      name: 'Kovalam',
    },
    {
      id: 2205,
      name: 'Kumbalam',
    },
    {
      id: 2206,
      name: 'Kunnamangalam',
    },
    {
      id: 2207,
      name: 'Kunnamkulam',
    },
    {
      id: 2208,
      name: 'Kunnumma',
    },
    {
      id: 2209,
      name: 'Kutiatodu',
    },
    {
      id: 2210,
      name: 'Kuttampuzha',
    },
    {
      id: 2211,
      name: 'Lālam',
    },
    {
      id: 2212,
      name: 'Mahē',
    },
    {
      id: 2213,
      name: 'Manjēshvar',
    },
    {
      id: 2214,
      name: 'Mannārakkāt',
    },
    {
      id: 2215,
      name: 'Marayur',
    },
    {
      id: 2216,
      name: 'Māvelikara',
    },
    {
      id: 2217,
      name: 'Mavoor',
    },
    {
      id: 2218,
      name: 'Muluppilagadu',
    },
    {
      id: 2219,
      name: 'Munnar',
    },
    {
      id: 2220,
      name: 'Mūvattupula',
    },
    {
      id: 2221,
      name: 'Muvattupuzha',
    },
    {
      id: 2222,
      name: 'Nādāpuram',
    },
    {
      id: 2223,
      name: 'Naduvannūr',
    },
    {
      id: 2224,
      name: 'Nedumangād',
    },
    {
      id: 2225,
      name: 'Neyyāttinkara',
    },
    {
      id: 2226,
      name: 'Nīlēshwar',
    },
    {
      id: 2227,
      name: 'Ottappālam',
    },
    {
      id: 2228,
      name: 'Palackattumala',
    },
    {
      id: 2229,
      name: 'Palakkad district',
    },
    {
      id: 2230,
      name: 'Pālghāt',
    },
    {
      id: 2231,
      name: 'Panamaram',
    },
    {
      id: 2232,
      name: 'Pāppinisshēri',
    },
    {
      id: 2233,
      name: 'Paravūr Tekkumbhāgam',
    },
    {
      id: 2234,
      name: 'Pariyāpuram',
    },
    {
      id: 2235,
      name: 'Pattanamtitta',
    },
    {
      id: 2236,
      name: 'Payyannūr',
    },
    {
      id: 2237,
      name: 'Perumbavoor',
    },
    {
      id: 2238,
      name: 'Perumpāvūr',
    },
    {
      id: 2239,
      name: 'Perya',
    },
    {
      id: 2240,
      name: 'Piravam',
    },
    {
      id: 2241,
      name: 'Ponmana',
    },
    {
      id: 2242,
      name: 'Ponnāni',
    },
    {
      id: 2243,
      name: 'Punalūr',
    },
    {
      id: 2244,
      name: 'Rāmamangalam',
    },
    {
      id: 2245,
      name: 'Shertallai',
    },
    {
      id: 2246,
      name: 'Shōranūr',
    },
    {
      id: 2247,
      name: 'Talipparamba',
    },
    {
      id: 2248,
      name: 'Tellicherry',
    },
    {
      id: 2249,
      name: 'Thanniyam',
    },
    {
      id: 2250,
      name: 'Thrissur District',
    },
    {
      id: 2251,
      name: 'Varkala',
    },
    {
      id: 2252,
      name: 'Vayalār',
    },
    {
      id: 2253,
      name: 'Vettūr',
    },
    {
      id: 2254,
      name: 'Wayanad',
    },
    {
      id: 2255,
      name: 'Leh',
    },
    {
      id: 2256,
      name: 'Lakshadweep',
    },
    {
      id: 2257,
      name: 'Agar',
    },
    {
      id: 2258,
      name: 'Ajaigarh',
    },
    {
      id: 2259,
      name: 'Akodia',
    },
    {
      id: 2260,
      name: 'Alampur',
    },
    {
      id: 2261,
      name: 'Alirajpur',
    },
    {
      id: 2262,
      name: 'Alot',
    },
    {
      id: 2263,
      name: 'Amānganj',
    },
    {
      id: 2264,
      name: 'Amarkantak',
    },
    {
      id: 2265,
      name: 'Amarpātan',
    },
    {
      id: 2266,
      name: 'Amarwāra',
    },
    {
      id: 2267,
      name: 'Ambāh',
    },
    {
      id: 2268,
      name: 'Amla',
    },
    {
      id: 2269,
      name: 'Anjad',
    },
    {
      id: 2270,
      name: 'Antri',
    },
    {
      id: 2271,
      name: 'Anuppur',
    },
    {
      id: 2272,
      name: 'Anūppur',
    },
    {
      id: 2273,
      name: 'Āron',
    },
    {
      id: 2274,
      name: 'Ashoknagar',
    },
    {
      id: 2275,
      name: 'Ashta',
    },
    {
      id: 2276,
      name: 'Bābai',
    },
    {
      id: 2277,
      name: 'Badarwās',
    },
    {
      id: 2278,
      name: 'Badnāwar',
    },
    {
      id: 2279,
      name: 'Bāg',
    },
    {
      id: 2280,
      name: 'Bāgli',
    },
    {
      id: 2281,
      name: 'Baihar',
    },
    {
      id: 2282,
      name: 'Bakshwāho',
    },
    {
      id: 2283,
      name: 'Bālāghāt',
    },
    {
      id: 2284,
      name: 'Baldeogarh',
    },
    {
      id: 2285,
      name: 'Bamna',
    },
    {
      id: 2286,
      name: 'Bāmor Kalān',
    },
    {
      id: 2287,
      name: 'Bamora',
    },
    {
      id: 2288,
      name: 'Barela',
    },
    {
      id: 2289,
      name: 'Barghāt',
    },
    {
      id: 2290,
      name: 'Bargi',
    },
    {
      id: 2291,
      name: 'Barhi',
    },
    {
      id: 2292,
      name: 'Barwani',
    },
    {
      id: 2293,
      name: 'Barwāni',
    },
    {
      id: 2294,
      name: 'Bāsoda',
    },
    {
      id: 2295,
      name: 'Begamganj',
    },
    {
      id: 2296,
      name: 'Beohāri',
    },
    {
      id: 2297,
      name: 'Betma',
    },
    {
      id: 2298,
      name: 'Betūl',
    },
    {
      id: 2299,
      name: 'Betūl Bazār',
    },
    {
      id: 2300,
      name: 'Bhābhra',
    },
    {
      id: 2301,
      name: 'Bhainsdehi',
    },
    {
      id: 2302,
      name: 'Bhānder',
    },
    {
      id: 2303,
      name: 'Bhānpura',
    },
    {
      id: 2304,
      name: 'Bhawāniganj',
    },
    {
      id: 2305,
      name: 'Bhikangaon',
    },
    {
      id: 2306,
      name: 'Bhind',
    },
    {
      id: 2307,
      name: 'Bhitarwār',
    },
    {
      id: 2308,
      name: 'Bhopāl',
    },
    {
      id: 2309,
      name: 'Biaora',
    },
    {
      id: 2310,
      name: 'Bijāwar',
    },
    {
      id: 2311,
      name: 'Bijrauni',
    },
    {
      id: 2312,
      name: 'Bodri',
    },
    {
      id: 2313,
      name: 'Burhanpur',
    },
    {
      id: 2314,
      name: 'Burhānpur',
    },
    {
      id: 2315,
      name: 'Burhar',
    },
    {
      id: 2316,
      name: 'Chanderi',
    },
    {
      id: 2317,
      name: 'Chandia',
    },
    {
      id: 2318,
      name: 'Chandla',
    },
    {
      id: 2319,
      name: 'Chhatarpur',
    },
    {
      id: 2320,
      name: 'Chhindwāra',
    },
    {
      id: 2321,
      name: 'Chichli',
    },
    {
      id: 2322,
      name: 'Chorhat',
    },
    {
      id: 2323,
      name: 'Daboh',
    },
    {
      id: 2324,
      name: 'Dabra',
    },
    {
      id: 2325,
      name: 'Datia',
    },
    {
      id: 2326,
      name: 'Deori Khās',
    },
    {
      id: 2327,
      name: 'Depālpur',
    },
    {
      id: 2328,
      name: 'Dhāmnod',
    },
    {
      id: 2329,
      name: 'Dhāna',
    },
    {
      id: 2330,
      name: 'Dhār',
    },
    {
      id: 2331,
      name: 'Dharampuri',
    },
    {
      id: 2332,
      name: 'Etāwa',
    },
    {
      id: 2333,
      name: 'Gādarwāra',
    },
    {
      id: 2334,
      name: 'Garha Brahman',
    },
    {
      id: 2335,
      name: 'Garhākota',
    },
    {
      id: 2336,
      name: 'Gautampura',
    },
    {
      id: 2337,
      name: 'Ghansor',
    },
    {
      id: 2338,
      name: 'Gogāpur',
    },
    {
      id: 2339,
      name: 'Gohadi',
    },
    {
      id: 2340,
      name: 'Govindgarh',
    },
    {
      id: 2341,
      name: 'Gurh',
    },
    {
      id: 2342,
      name: 'Harda',
    },
    {
      id: 2343,
      name: 'Harda Khās',
    },
    {
      id: 2344,
      name: 'Harpālpur',
    },
    {
      id: 2345,
      name: 'Harrai',
    },
    {
      id: 2346,
      name: 'Harsūd',
    },
    {
      id: 2347,
      name: 'Hātod',
    },
    {
      id: 2348,
      name: 'Hatta',
    },
    {
      id: 2349,
      name: 'Hindoria',
    },
    {
      id: 2350,
      name: 'Hoshangābād',
    },
    {
      id: 2351,
      name: 'Iāwar',
    },
    {
      id: 2352,
      name: 'Ichhāwar',
    },
    {
      id: 2353,
      name: 'Iklehra',
    },
    {
      id: 2354,
      name: 'Isāgarh',
    },
    {
      id: 2355,
      name: 'Itārsi',
    },
    {
      id: 2356,
      name: 'Jaisinghnagar',
    },
    {
      id: 2357,
      name: 'Jaithāri',
    },
    {
      id: 2358,
      name: 'Jāmai',
    },
    {
      id: 2359,
      name: 'Jaorā',
    },
    {
      id: 2360,
      name: 'Jatāra',
    },
    {
      id: 2361,
      name: 'Jāwad',
    },
    {
      id: 2362,
      name: 'Jhābua',
    },
    {
      id: 2363,
      name: 'Jīran',
    },
    {
      id: 2364,
      name: 'Jobat',
    },
    {
      id: 2365,
      name: 'Jora',
    },
    {
      id: 2366,
      name: 'Kailāras',
    },
    {
      id: 2367,
      name: 'Kaimori',
    },
    {
      id: 2368,
      name: 'Kannod',
    },
    {
      id: 2369,
      name: 'Kareli',
    },
    {
      id: 2370,
      name: 'Karera',
    },
    {
      id: 2371,
      name: 'Karrāpur',
    },
    {
      id: 2372,
      name: 'Kasrāwad',
    },
    {
      id: 2373,
      name: 'Katangi',
    },
    {
      id: 2374,
      name: 'Khāchrod',
    },
    {
      id: 2375,
      name: 'Khailār',
    },
    {
      id: 2376,
      name: 'Khamaria',
    },
    {
      id: 2377,
      name: 'Khandwa',
    },
    {
      id: 2378,
      name: 'Khandwa district',
    },
    {
      id: 2379,
      name: 'Khargāpur',
    },
    {
      id: 2380,
      name: 'Khātegaon',
    },
    {
      id: 2381,
      name: 'Khilchipur',
    },
    {
      id: 2382,
      name: 'Khirkiyān',
    },
    {
      id: 2383,
      name: 'Khujner',
    },
    {
      id: 2384,
      name: 'Khurai',
    },
    {
      id: 2385,
      name: 'Kolāras',
    },
    {
      id: 2386,
      name: 'Korwai',
    },
    {
      id: 2387,
      name: 'Kotār',
    },
    {
      id: 2388,
      name: 'Kothi',
    },
    {
      id: 2389,
      name: 'Kotma',
    },
    {
      id: 2390,
      name: 'Kotwa',
    },
    {
      id: 2391,
      name: 'Kukshi',
    },
    {
      id: 2392,
      name: 'Kumbhrāj',
    },
    {
      id: 2393,
      name: 'Lahār',
    },
    {
      id: 2394,
      name: 'Lakhnādon',
    },
    {
      id: 2395,
      name: 'Leteri',
    },
    {
      id: 2396,
      name: 'Lodhīkheda',
    },
    {
      id: 2397,
      name: 'Māchalpur',
    },
    {
      id: 2398,
      name: 'Madhogarh',
    },
    {
      id: 2399,
      name: 'Maheshwar',
    },
    {
      id: 2400,
      name: 'Mahgawān',
    },
    {
      id: 2401,
      name: 'Maihar',
    },
    {
      id: 2402,
      name: 'Majholi',
    },
    {
      id: 2403,
      name: 'Maksi',
    },
    {
      id: 2404,
      name: 'Malhārgarh',
    },
    {
      id: 2405,
      name: 'Manāsa',
    },
    {
      id: 2406,
      name: 'Manāwar',
    },
    {
      id: 2407,
      name: 'Mandideep',
    },
    {
      id: 2408,
      name: 'Mandlā',
    },
    {
      id: 2409,
      name: 'Māndleshwar',
    },
    {
      id: 2410,
      name: 'Mangawān',
    },
    {
      id: 2411,
      name: 'Mānpur',
    },
    {
      id: 2412,
      name: 'Mau',
    },
    {
      id: 2413,
      name: 'Mauganj',
    },
    {
      id: 2414,
      name: 'Mihona',
    },
    {
      id: 2415,
      name: 'Mohgaon',
    },
    {
      id: 2416,
      name: 'Morār',
    },
    {
      id: 2417,
      name: 'Multai',
    },
    {
      id: 2418,
      name: 'Mundi',
    },
    {
      id: 2419,
      name: 'Mungaoli',
    },
    {
      id: 2420,
      name: 'Murwāra',
    },
    {
      id: 2421,
      name: 'Nagda',
    },
    {
      id: 2422,
      name: 'Nāgod',
    },
    {
      id: 2423,
      name: 'Naīgarhi',
    },
    {
      id: 2424,
      name: 'Nainpur',
    },
    {
      id: 2425,
      name: 'Namli',
    },
    {
      id: 2426,
      name: 'Naraini',
    },
    {
      id: 2427,
      name: 'Nārāyangarh',
    },
    {
      id: 2428,
      name: 'Narsimhapur',
    },
    {
      id: 2429,
      name: 'Narsinghgarh',
    },
    {
      id: 2430,
      name: 'Narwar',
    },
    {
      id: 2431,
      name: 'Nasrullāhganj',
    },
    {
      id: 2432,
      name: 'Neemuch',
    },
    {
      id: 2433,
      name: 'Nepānagar',
    },
    {
      id: 2434,
      name: 'Orchha',
    },
    {
      id: 2435,
      name: 'Palera',
    },
    {
      id: 2436,
      name: 'Pāli',
    },
    {
      id: 2437,
      name: 'Panāgar',
    },
    {
      id: 2438,
      name: 'Panara',
    },
    {
      id: 2439,
      name: 'Pandhāna',
    },
    {
      id: 2440,
      name: 'Pāndhurnā',
    },
    {
      id: 2441,
      name: 'Panna',
    },
    {
      id: 2442,
      name: 'Pānsemāl',
    },
    {
      id: 2443,
      name: 'Parāsia',
    },
    {
      id: 2444,
      name: 'Patharia',
    },
    {
      id: 2445,
      name: 'Pawai',
    },
    {
      id: 2446,
      name: 'Petlāwad',
    },
    {
      id: 2447,
      name: 'Piploda',
    },
    {
      id: 2448,
      name: 'Pithampur',
    },
    {
      id: 2449,
      name: 'Porsa',
    },
    {
      id: 2450,
      name: 'Punāsa',
    },
    {
      id: 2451,
      name: 'Rāghogarh',
    },
    {
      id: 2452,
      name: 'Rāhatgarh',
    },
    {
      id: 2453,
      name: 'Raisen',
    },
    {
      id: 2454,
      name: 'Rājnagar',
    },
    {
      id: 2455,
      name: 'Rāmpura',
    },
    {
      id: 2456,
      name: 'Rānāpur',
    },
    {
      id: 2457,
      name: 'Ratangarh',
    },
    {
      id: 2458,
      name: 'Ratlām',
    },
    {
      id: 2459,
      name: 'Rehli',
    },
    {
      id: 2460,
      name: 'Rehti',
    },
    {
      id: 2461,
      name: 'Sabalgarh',
    },
    {
      id: 2462,
      name: 'Sailāna',
    },
    {
      id: 2463,
      name: 'Sanāwad',
    },
    {
      id: 2464,
      name: 'Sānchi',
    },
    {
      id: 2465,
      name: 'Sānwer',
    },
    {
      id: 2466,
      name: 'Sārangpur',
    },
    {
      id: 2467,
      name: 'Satwās',
    },
    {
      id: 2468,
      name: 'Saugor',
    },
    {
      id: 2469,
      name: 'Sausar',
    },
    {
      id: 2470,
      name: 'Seondha',
    },
    {
      id: 2471,
      name: 'Seonī',
    },
    {
      id: 2472,
      name: 'Seoni Mālwa',
    },
    {
      id: 2473,
      name: 'Shāhgarh',
    },
    {
      id: 2474,
      name: 'Shāhpura',
    },
    {
      id: 2475,
      name: 'Shājāpur',
    },
    {
      id: 2476,
      name: 'Shāmgarh',
    },
    {
      id: 2477,
      name: 'Sheopur',
    },
    {
      id: 2478,
      name: 'Shivpuri',
    },
    {
      id: 2479,
      name: 'Shivpurī',
    },
    {
      id: 2480,
      name: 'Shujālpur',
    },
    {
      id: 2481,
      name: 'Sihorā',
    },
    {
      id: 2482,
      name: 'Simaria',
    },
    {
      id: 2483,
      name: 'Singoli',
    },
    {
      id: 2484,
      name: 'Singrauli',
    },
    {
      id: 2485,
      name: 'Sironj',
    },
    {
      id: 2486,
      name: 'Sītāmau',
    },
    {
      id: 2487,
      name: 'Sohāgi',
    },
    {
      id: 2488,
      name: 'Sohāgpur',
    },
    {
      id: 2489,
      name: 'Sultānpur',
    },
    {
      id: 2490,
      name: 'Susner',
    },
    {
      id: 2491,
      name: 'Tāl',
    },
    {
      id: 2492,
      name: 'Talen',
    },
    {
      id: 2493,
      name: 'Tarāna',
    },
    {
      id: 2494,
      name: 'Tekanpur',
    },
    {
      id: 2495,
      name: 'Tendūkheda',
    },
    {
      id: 2496,
      name: 'Teonthar',
    },
    {
      id: 2497,
      name: 'Thandla',
    },
    {
      id: 2498,
      name: 'Tīkamgarh',
    },
    {
      id: 2499,
      name: 'Tirodi',
    },
    {
      id: 2500,
      name: 'Udaipura',
    },
    {
      id: 2501,
      name: 'Ukwā',
    },
    {
      id: 2502,
      name: 'Umaria',
    },
    {
      id: 2503,
      name: 'Umaria District',
    },
    {
      id: 2504,
      name: 'Umri',
    },
    {
      id: 2505,
      name: 'Unhel',
    },
    {
      id: 2506,
      name: 'Wārāseonī',
    },
    {
      id: 2507,
      name: 'Achalpur',
    },
    {
      id: 2508,
      name: 'Ahiri',
    },
    {
      id: 2509,
      name: 'Ahmadnagar',
    },
    {
      id: 2510,
      name: 'Ahmadpur',
    },
    {
      id: 2511,
      name: 'Airoli',
    },
    {
      id: 2512,
      name: 'Ajra',
    },
    {
      id: 2513,
      name: 'Akalkot',
    },
    {
      id: 2514,
      name: 'Akot',
    },
    {
      id: 2515,
      name: 'Alandi',
    },
    {
      id: 2516,
      name: 'Alībāg',
    },
    {
      id: 2517,
      name: 'Allāpalli',
    },
    {
      id: 2518,
      name: 'Amalner',
    },
    {
      id: 2519,
      name: 'Amarnāth',
    },
    {
      id: 2520,
      name: 'Ambājogāi',
    },
    {
      id: 2521,
      name: 'Amrāvati',
    },
    {
      id: 2522,
      name: 'Amravati Division',
    },
    {
      id: 2523,
      name: 'Anjangaon',
    },
    {
      id: 2524,
      name: 'Anshing',
    },
    {
      id: 2525,
      name: 'Ārangaon',
    },
    {
      id: 2526,
      name: 'Artist Village',
    },
    {
      id: 2527,
      name: 'Ārvi',
    },
    {
      id: 2528,
      name: 'Ashti',
    },
    {
      id: 2529,
      name: 'Ausa',
    },
    {
      id: 2530,
      name: 'Bālāpur',
    },
    {
      id: 2531,
      name: 'Ballālpur',
    },
    {
      id: 2532,
      name: 'Bārāmati',
    },
    {
      id: 2533,
      name: 'Bārsi',
    },
    {
      id: 2534,
      name: 'Basmat',
    },
    {
      id: 2535,
      name: 'Beed',
    },
    {
      id: 2536,
      name: 'Bhandara',
    },
    {
      id: 2537,
      name: 'Bhandāra',
    },
    {
      id: 2538,
      name: 'Bhayandar',
    },
    {
      id: 2539,
      name: 'Bhigvan',
    },
    {
      id: 2540,
      name: 'Bhor',
    },
    {
      id: 2541,
      name: 'Bhudgaon',
    },
    {
      id: 2542,
      name: 'Bhūm',
    },
    {
      id: 2543,
      name: 'Bhusāval',
    },
    {
      id: 2544,
      name: 'Bid',
    },
    {
      id: 2545,
      name: 'Biloli',
    },
    {
      id: 2546,
      name: 'Borivli',
    },
    {
      id: 2547,
      name: 'Buldana',
    },
    {
      id: 2548,
      name: 'Buldāna',
    },
    {
      id: 2549,
      name: 'Chākan',
    },
    {
      id: 2550,
      name: 'Chālisgaon',
    },
    {
      id: 2551,
      name: 'Chānda',
    },
    {
      id: 2552,
      name: 'Chāndor',
    },
    {
      id: 2553,
      name: 'Chāndur',
    },
    {
      id: 2554,
      name: 'Chāndūr',
    },
    {
      id: 2555,
      name: 'Chāndūr Bāzār',
    },
    {
      id: 2556,
      name: 'Chicholi',
    },
    {
      id: 2557,
      name: 'Chinchani',
    },
    {
      id: 2558,
      name: 'Chiplūn',
    },
    {
      id: 2559,
      name: 'Dābhol',
    },
    {
      id: 2560,
      name: 'Dāhānu',
    },
    {
      id: 2561,
      name: 'Dārwha',
    },
    {
      id: 2562,
      name: 'Daryāpur',
    },
    {
      id: 2563,
      name: 'Dattāpur',
    },
    {
      id: 2564,
      name: 'Daulatābād',
    },
    {
      id: 2565,
      name: 'Daund',
    },
    {
      id: 2566,
      name: 'Dehu',
    },
    {
      id: 2567,
      name: 'Deolāli',
    },
    {
      id: 2568,
      name: 'Deūlgaon Rāja',
    },
    {
      id: 2569,
      name: 'Dharangaon',
    },
    {
      id: 2570,
      name: 'Dharmābād',
    },
    {
      id: 2571,
      name: 'Dhārūr',
    },
    {
      id: 2572,
      name: 'Dhūlia',
    },
    {
      id: 2573,
      name: 'Dīglūr',
    },
    {
      id: 2574,
      name: 'Digras',
    },
    {
      id: 2575,
      name: 'Dombivli',
    },
    {
      id: 2576,
      name: 'Dondaicha',
    },
    {
      id: 2577,
      name: 'Dudhani',
    },
    {
      id: 2578,
      name: 'Durgāpur',
    },
    {
      id: 2579,
      name: 'Erandol',
    },
    {
      id: 2580,
      name: 'Faizpur',
    },
    {
      id: 2581,
      name: 'Gadchiroli',
    },
    {
      id: 2582,
      name: 'Gadhinglaj',
    },
    {
      id: 2583,
      name: 'Gangākher',
    },
    {
      id: 2584,
      name: 'Gangāpur',
    },
    {
      id: 2585,
      name: 'Gevrai',
    },
    {
      id: 2586,
      name: 'Ghātanji',
    },
    {
      id: 2587,
      name: 'Ghoti Budrukh',
    },
    {
      id: 2588,
      name: 'Ghugus',
    },
    {
      id: 2589,
      name: 'Gondiā',
    },
    {
      id: 2590,
      name: 'Gondiya',
    },
    {
      id: 2591,
      name: 'Guhāgar',
    },
    {
      id: 2592,
      name: 'Hadgāon',
    },
    {
      id: 2593,
      name: 'Harnai',
    },
    {
      id: 2594,
      name: 'Hinganghāt',
    },
    {
      id: 2595,
      name: 'Hīrāpur Hamesha',
    },
    {
      id: 2596,
      name: 'Indāpur',
    },
    {
      id: 2597,
      name: 'Jaisingpur',
    },
    {
      id: 2598,
      name: 'Jalgaon',
    },
    {
      id: 2599,
      name: 'Jālna',
    },
    {
      id: 2600,
      name: 'Jawhār',
    },
    {
      id: 2601,
      name: 'Jejūri',
    },
    {
      id: 2602,
      name: 'Jintūr',
    },
    {
      id: 2603,
      name: 'Junnar',
    },
    {
      id: 2604,
      name: 'Kāgal',
    },
    {
      id: 2605,
      name: 'Kalamb',
    },
    {
      id: 2606,
      name: 'Kalamnūri',
    },
    {
      id: 2607,
      name: 'Kalas',
    },
    {
      id: 2608,
      name: 'Kalmeshwar',
    },
    {
      id: 2609,
      name: 'Kālundri',
    },
    {
      id: 2610,
      name: 'Kalyān',
    },
    {
      id: 2611,
      name: 'Kāmthi',
    },
    {
      id: 2612,
      name: 'Kāndri',
    },
    {
      id: 2613,
      name: 'Kannad',
    },
    {
      id: 2614,
      name: 'Karād',
    },
    {
      id: 2615,
      name: 'Kāranja',
    },
    {
      id: 2616,
      name: 'Karmāla',
    },
    {
      id: 2617,
      name: 'Kāti',
    },
    {
      id: 2618,
      name: 'Kātol',
    },
    {
      id: 2619,
      name: 'Khadki',
    },
    {
      id: 2620,
      name: 'Khāmgaon',
    },
    {
      id: 2621,
      name: 'Khāpa',
    },
    {
      id: 2622,
      name: 'Kharakvasla',
    },
    {
      id: 2623,
      name: 'Khed',
    },
    {
      id: 2624,
      name: 'Khetia',
    },
    {
      id: 2625,
      name: 'Khuldābād',
    },
    {
      id: 2626,
      name: 'Kinwat',
    },
    {
      id: 2627,
      name: 'Kodoli',
    },
    {
      id: 2628,
      name: 'Kolhāpur',
    },
    {
      id: 2629,
      name: 'Kondalwādi',
    },
    {
      id: 2630,
      name: 'Kopargaon',
    },
    {
      id: 2631,
      name: 'Korādi',
    },
    {
      id: 2632,
      name: 'Koregaon',
    },
    {
      id: 2633,
      name: 'Koynanagar',
    },
    {
      id: 2634,
      name: 'Kudāl',
    },
    {
      id: 2635,
      name: 'Kurandvād',
    },
    {
      id: 2636,
      name: 'Kurduvādi',
    },
    {
      id: 2637,
      name: 'Lānja',
    },
    {
      id: 2638,
      name: 'Lāsalgaon',
    },
    {
      id: 2639,
      name: 'Lohogaon',
    },
    {
      id: 2640,
      name: 'Lonār',
    },
    {
      id: 2641,
      name: 'Lonavla',
    },
    {
      id: 2642,
      name: 'Mahābaleshwar',
    },
    {
      id: 2643,
      name: 'Mahād',
    },
    {
      id: 2644,
      name: 'Maindargi',
    },
    {
      id: 2645,
      name: 'Mājalgaon',
    },
    {
      id: 2646,
      name: 'Mākhjan',
    },
    {
      id: 2647,
      name: 'Mālegaon',
    },
    {
      id: 2648,
      name: 'Malkapur',
    },
    {
      id: 2649,
      name: 'Malkāpur',
    },
    {
      id: 2650,
      name: 'Mālvan',
    },
    {
      id: 2651,
      name: 'Manchar',
    },
    {
      id: 2652,
      name: 'Mangrūl Pīr',
    },
    {
      id: 2653,
      name: 'Manmād',
    },
    {
      id: 2654,
      name: 'Mansar',
    },
    {
      id: 2655,
      name: 'Mānwat',
    },
    {
      id: 2656,
      name: 'Mātherān',
    },
    {
      id: 2657,
      name: 'Mehekar',
    },
    {
      id: 2658,
      name: 'Mhasla',
    },
    {
      id: 2659,
      name: 'Mhāsvād',
    },
    {
      id: 2660,
      name: 'Mohpa',
    },
    {
      id: 2661,
      name: 'Moram',
    },
    {
      id: 2662,
      name: 'Morsi',
    },
    {
      id: 2663,
      name: 'Mowād',
    },
    {
      id: 2664,
      name: 'Mudkhed',
    },
    {
      id: 2665,
      name: 'Mukher',
    },
    {
      id: 2666,
      name: 'Mūl',
    },
    {
      id: 2667,
      name: 'Mumbai Suburban',
    },
    {
      id: 2668,
      name: 'Murbād',
    },
    {
      id: 2669,
      name: 'Murgūd',
    },
    {
      id: 2670,
      name: 'Murtajāpur',
    },
    {
      id: 2671,
      name: 'Murud',
    },
    {
      id: 2672,
      name: 'Nāgothana',
    },
    {
      id: 2673,
      name: 'Nagpur Division',
    },
    {
      id: 2674,
      name: 'Naldurg',
    },
    {
      id: 2675,
      name: 'Nāndgaon',
    },
    {
      id: 2676,
      name: 'Nāndūra Buzurg',
    },
    {
      id: 2677,
      name: 'Nashik Division',
    },
    {
      id: 2678,
      name: 'Navi Mumbai',
    },
    {
      id: 2679,
      name: 'Nilanga',
    },
    {
      id: 2680,
      name: 'Nipāni',
    },
    {
      id: 2681,
      name: 'Ozar',
    },
    {
      id: 2682,
      name: 'Pāchora',
    },
    {
      id: 2683,
      name: 'Paithan',
    },
    {
      id: 2684,
      name: 'Pālghar',
    },
    {
      id: 2685,
      name: 'Pānchgani',
    },
    {
      id: 2686,
      name: 'Panhāla',
    },
    {
      id: 2687,
      name: 'Parli Vaijnāth',
    },
    {
      id: 2688,
      name: 'Parola',
    },
    {
      id: 2689,
      name: 'Partūr',
    },
    {
      id: 2690,
      name: 'Pāthardi',
    },
    {
      id: 2691,
      name: 'Pāthri',
    },
    {
      id: 2692,
      name: 'Pātūr',
    },
    {
      id: 2693,
      name: 'Pawni',
    },
    {
      id: 2694,
      name: 'Pen',
    },
    {
      id: 2695,
      name: 'Phaltan',
    },
    {
      id: 2696,
      name: 'Pīpri',
    },
    {
      id: 2697,
      name: 'Pulgaon',
    },
    {
      id: 2698,
      name: 'Pune Division',
    },
    {
      id: 2699,
      name: 'Pūrna',
    },
    {
      id: 2700,
      name: 'Pusad',
    },
    {
      id: 2701,
      name: 'Rahimatpur',
    },
    {
      id: 2702,
      name: 'Rāhuri',
    },
    {
      id: 2703,
      name: 'Rājāpur',
    },
    {
      id: 2704,
      name: 'Rājgurunagar',
    },
    {
      id: 2705,
      name: 'Rājur',
    },
    {
      id: 2706,
      name: 'Rājūra',
    },
    {
      id: 2707,
      name: 'Rāmtek',
    },
    {
      id: 2708,
      name: 'Rāver',
    },
    {
      id: 2709,
      name: 'Revadanda',
    },
    {
      id: 2710,
      name: 'Risod',
    },
    {
      id: 2711,
      name: 'Sāngli',
    },
    {
      id: 2712,
      name: 'Sāngola',
    },
    {
      id: 2713,
      name: 'Saoner',
    },
    {
      id: 2714,
      name: 'Sāsvad',
    },
    {
      id: 2715,
      name: 'Satānā',
    },
    {
      id: 2716,
      name: 'Satara Division',
    },
    {
      id: 2717,
      name: 'Sāvantvādi',
    },
    {
      id: 2718,
      name: 'Sāvda',
    },
    {
      id: 2719,
      name: 'Selu',
    },
    {
      id: 2720,
      name: 'Shāhāda',
    },
    {
      id: 2721,
      name: 'Shāhāpur',
    },
    {
      id: 2722,
      name: 'Shegaon',
    },
    {
      id: 2723,
      name: 'Shiraguppi',
    },
    {
      id: 2724,
      name: 'Shirdi',
    },
    {
      id: 2725,
      name: 'Shirpur',
    },
    {
      id: 2726,
      name: 'Shirwal',
    },
    {
      id: 2727,
      name: 'Shivaji Nagar',
    },
    {
      id: 2728,
      name: 'Shrīgonda',
    },
    {
      id: 2729,
      name: 'Sillod',
    },
    {
      id: 2730,
      name: 'Sindhudurg',
    },
    {
      id: 2731,
      name: 'Sindi',
    },
    {
      id: 2732,
      name: 'Sirūr',
    },
    {
      id: 2733,
      name: 'Solāpur',
    },
    {
      id: 2734,
      name: 'Sonegaon',
    },
    {
      id: 2735,
      name: 'Soygaon',
    },
    {
      id: 2736,
      name: 'Srīvardhan',
    },
    {
      id: 2737,
      name: 'Surgāna',
    },
    {
      id: 2738,
      name: 'Talegaon Dābhāde',
    },
    {
      id: 2739,
      name: 'Taloda',
    },
    {
      id: 2740,
      name: 'Tārāpur',
    },
    {
      id: 2741,
      name: 'Tāsgaon',
    },
    {
      id: 2742,
      name: 'Telhāra',
    },
    {
      id: 2743,
      name: 'Thāne',
    },
    {
      id: 2744,
      name: 'Tuljāpur',
    },
    {
      id: 2745,
      name: 'Tumsar',
    },
    {
      id: 2746,
      name: 'Udgīr',
    },
    {
      id: 2747,
      name: 'Umarga',
    },
    {
      id: 2748,
      name: 'Umarkhed',
    },
    {
      id: 2749,
      name: 'Uran',
    },
    {
      id: 2750,
      name: 'Vāda',
    },
    {
      id: 2751,
      name: 'Vaijāpur',
    },
    {
      id: 2752,
      name: 'Varangaon',
    },
    {
      id: 2753,
      name: 'Vasind',
    },
    {
      id: 2754,
      name: 'Vengurla',
    },
    {
      id: 2755,
      name: 'Virār',
    },
    {
      id: 2756,
      name: 'Vite',
    },
    {
      id: 2757,
      name: 'Wadgaon',
    },
    {
      id: 2758,
      name: 'Wani',
    },
    {
      id: 2759,
      name: 'Warora',
    },
    {
      id: 2760,
      name: 'Warud',
    },
    {
      id: 2761,
      name: 'Wāshīm',
    },
    {
      id: 2762,
      name: 'Washim',
    },
    {
      id: 2763,
      name: 'Yāval',
    },
    {
      id: 2764,
      name: 'Yavatmāl',
    },
    {
      id: 2765,
      name: 'Churāchāndpur',
    },
    {
      id: 2766,
      name: 'Kakching',
    },
    {
      id: 2767,
      name: 'Mayāng Imphāl',
    },
    {
      id: 2768,
      name: 'Moirāng',
    },
    {
      id: 2769,
      name: 'Phek',
    },
    {
      id: 2770,
      name: 'Senapati',
    },
    {
      id: 2771,
      name: 'Tamenglong',
    },
    {
      id: 2772,
      name: 'Thoubal',
    },
    {
      id: 2773,
      name: 'Thoubāl',
    },
    {
      id: 2774,
      name: 'Ukhrul',
    },
    {
      id: 2775,
      name: 'Wāngjing',
    },
    {
      id: 2776,
      name: 'Yairipok',
    },
    {
      id: 2777,
      name: 'Cherrapunji',
    },
    {
      id: 2778,
      name: 'East Gāro Hills',
    },
    {
      id: 2779,
      name: 'East Jaintia Hills',
    },
    {
      id: 2780,
      name: 'East Khāsi Hills',
    },
    {
      id: 2781,
      name: 'Mairang',
    },
    {
      id: 2782,
      name: 'Mankāchar',
    },
    {
      id: 2783,
      name: 'North Garo Hills',
    },
    {
      id: 2784,
      name: 'Ri-Bhoi',
    },
    {
      id: 2785,
      name: 'South Garo Hills',
    },
    {
      id: 2786,
      name: 'South West Garo Hills',
    },
    {
      id: 2787,
      name: 'South West Khasi Hills',
    },
    {
      id: 2788,
      name: 'Tura',
    },
    {
      id: 2789,
      name: 'West Garo Hills',
    },
    {
      id: 2790,
      name: 'West Jaintia Hills',
    },
    {
      id: 2791,
      name: 'West Khasi Hills',
    },
    {
      id: 2792,
      name: 'Champhai',
    },
    {
      id: 2793,
      name: 'Darlawn',
    },
    {
      id: 2794,
      name: 'Khawhai',
    },
    {
      id: 2795,
      name: 'Kolasib',
    },
    {
      id: 2796,
      name: 'Kolasib district',
    },
    {
      id: 2797,
      name: 'Lawngtlai',
    },
    {
      id: 2798,
      name: 'Lunglei',
    },
    {
      id: 2799,
      name: 'Mamit',
    },
    {
      id: 2800,
      name: 'North Vanlaiphai',
    },
    {
      id: 2801,
      name: 'Saiha',
    },
    {
      id: 2802,
      name: 'Sairang',
    },
    {
      id: 2803,
      name: 'Sāitlaw',
    },
    {
      id: 2804,
      name: 'Serchhip',
    },
    {
      id: 2805,
      name: 'Serchhīp',
    },
    {
      id: 2806,
      name: 'Thenzawl',
    },
    {
      id: 2807,
      name: 'Dimāpur',
    },
    {
      id: 2808,
      name: 'Kohīma',
    },
    {
      id: 2809,
      name: 'Mokokchūng',
    },
    {
      id: 2810,
      name: 'Mon',
    },
    {
      id: 2811,
      name: 'Peren',
    },
    {
      id: 2812,
      name: 'Tuensang',
    },
    {
      id: 2813,
      name: 'Tuensang District',
    },
    {
      id: 2814,
      name: 'Wokha',
    },
    {
      id: 2815,
      name: 'Zunheboto',
    },
    {
      id: 2816,
      name: 'Angul District',
    },
    {
      id: 2817,
      name: 'Āsika',
    },
    {
      id: 2818,
      name: 'Āthagarh',
    },
    {
      id: 2819,
      name: 'Bada Barabīl',
    },
    {
      id: 2820,
      name: 'Balāngīr',
    },
    {
      id: 2821,
      name: 'Bāleshwar',
    },
    {
      id: 2822,
      name: 'Balimila',
    },
    {
      id: 2823,
      name: 'Bālugaon',
    },
    {
      id: 2824,
      name: 'Bānapur',
    },
    {
      id: 2825,
      name: 'Bānki',
    },
    {
      id: 2826,
      name: 'Bānposh',
    },
    {
      id: 2827,
      name: 'Baragarh',
    },
    {
      id: 2828,
      name: 'Barbil',
    },
    {
      id: 2829,
      name: 'Barpāli',
    },
    {
      id: 2830,
      name: 'Bāsudebpur',
    },
    {
      id: 2831,
      name: 'Baud',
    },
    {
      id: 2832,
      name: 'Baudh',
    },
    {
      id: 2833,
      name: 'Belaguntha',
    },
    {
      id: 2834,
      name: 'Bhadrak',
    },
    {
      id: 2835,
      name: 'Bhadrakh',
    },
    {
      id: 2836,
      name: 'Bhanjanagar',
    },
    {
      id: 2837,
      name: 'Bhawānipatna',
    },
    {
      id: 2838,
      name: 'Bhuban',
    },
    {
      id: 2839,
      name: 'Bhubaneshwar',
    },
    {
      id: 2840,
      name: 'Binka',
    },
    {
      id: 2841,
      name: 'Birmitrapur',
    },
    {
      id: 2842,
      name: 'Bolānīkhodān',
    },
    {
      id: 2843,
      name: 'Brājarājnagar',
    },
    {
      id: 2844,
      name: 'Buguda',
    },
    {
      id: 2845,
      name: 'Burla',
    },
    {
      id: 2846,
      name: 'Chāmpua',
    },
    {
      id: 2847,
      name: 'Chāndbāli',
    },
    {
      id: 2848,
      name: 'Chatrapur',
    },
    {
      id: 2849,
      name: 'Chikitigarh',
    },
    {
      id: 2850,
      name: 'Chittarkonda',
    },
    {
      id: 2851,
      name: 'Daitari',
    },
    {
      id: 2852,
      name: 'Dhenkānāl',
    },
    {
      id: 2853,
      name: 'Digapahandi',
    },
    {
      id: 2854,
      name: 'Gajapati',
    },
    {
      id: 2855,
      name: 'Ganjām',
    },
    {
      id: 2856,
      name: 'Gopālpur',
    },
    {
      id: 2857,
      name: 'Gudāri',
    },
    {
      id: 2858,
      name: 'Gunupur',
    },
    {
      id: 2859,
      name: 'Hinjilikatu',
    },
    {
      id: 2860,
      name: 'Hīrākud',
    },
    {
      id: 2861,
      name: 'Jagatsinghapur',
    },
    {
      id: 2862,
      name: 'Jagatsinghpur',
    },
    {
      id: 2863,
      name: 'Jājpur',
    },
    {
      id: 2864,
      name: 'Jaleshwar',
    },
    {
      id: 2865,
      name: 'Jeypore',
    },
    {
      id: 2866,
      name: 'Jharsuguda District',
    },
    {
      id: 2867,
      name: 'Kaintragarh',
    },
    {
      id: 2868,
      name: 'Kālāhandi',
    },
    {
      id: 2869,
      name: 'Kāmākhyānagar',
    },
    {
      id: 2870,
      name: 'Kandhamal',
    },
    {
      id: 2871,
      name: 'Kantābānji',
    },
    {
      id: 2872,
      name: 'Kantilo',
    },
    {
      id: 2873,
      name: 'Kendrapara',
    },
    {
      id: 2874,
      name: 'Kendrāparha',
    },
    {
      id: 2875,
      name: 'Kendujhar',
    },
    {
      id: 2876,
      name: 'Kesinga',
    },
    {
      id: 2877,
      name: 'Khallikot',
    },
    {
      id: 2878,
      name: 'Kharhiāl',
    },
    {
      id: 2879,
      name: 'Khordha',
    },
    {
      id: 2880,
      name: 'Kiri Buru',
    },
    {
      id: 2881,
      name: 'Kodala',
    },
    {
      id: 2882,
      name: 'Konārka',
    },
    {
      id: 2883,
      name: 'Korāput',
    },
    {
      id: 2884,
      name: 'Kuchaiburi',
    },
    {
      id: 2885,
      name: 'Kuchinda',
    },
    {
      id: 2886,
      name: 'Malakanagiri',
    },
    {
      id: 2887,
      name: 'Malkangiri',
    },
    {
      id: 2888,
      name: 'Mayūrbhanj',
    },
    {
      id: 2889,
      name: 'Nabarangpur',
    },
    {
      id: 2890,
      name: 'Nayāgarh',
    },
    {
      id: 2891,
      name: 'Nayagarh District',
    },
    {
      id: 2892,
      name: 'Nīlgiri',
    },
    {
      id: 2893,
      name: 'Nimāparha',
    },
    {
      id: 2894,
      name: 'Nowrangapur',
    },
    {
      id: 2895,
      name: 'Nuapada',
    },
    {
      id: 2896,
      name: 'Padampur',
    },
    {
      id: 2897,
      name: 'Parādīp Garh',
    },
    {
      id: 2898,
      name: 'Patāmundai',
    },
    {
      id: 2899,
      name: 'Patnāgarh',
    },
    {
      id: 2900,
      name: 'Phulbāni',
    },
    {
      id: 2901,
      name: 'Pipili',
    },
    {
      id: 2902,
      name: 'Polasara',
    },
    {
      id: 2903,
      name: 'Purushottampur',
    },
    {
      id: 2904,
      name: 'Rambha',
    },
    {
      id: 2905,
      name: 'Remuna',
    },
    {
      id: 2906,
      name: 'Rengāli',
    },
    {
      id: 2907,
      name: 'Sonepur',
    },
    {
      id: 2908,
      name: 'Sorada',
    },
    {
      id: 2909,
      name: 'Soro',
    },
    {
      id: 2910,
      name: 'Subarnapur',
    },
    {
      id: 2911,
      name: 'Tālcher',
    },
    {
      id: 2912,
      name: 'Tarabha',
    },
    {
      id: 2913,
      name: 'Titlāgarh',
    },
    {
      id: 2914,
      name: 'Udayagiri',
    },
    {
      id: 2915,
      name: 'Kāraikāl',
    },
    {
      id: 2916,
      name: 'Mahe',
    },
    {
      id: 2917,
      name: 'Abohar',
    },
    {
      id: 2918,
      name: 'Adampur',
    },
    {
      id: 2919,
      name: 'Ajitgarh',
    },
    {
      id: 2920,
      name: 'Ajnala',
    },
    {
      id: 2921,
      name: 'Akalgarh',
    },
    {
      id: 2922,
      name: 'Alawalpur',
    },
    {
      id: 2923,
      name: 'Amloh',
    },
    {
      id: 2924,
      name: 'Anandpur Sahib',
    },
    {
      id: 2925,
      name: 'Badhni Kalan',
    },
    {
      id: 2926,
      name: 'Bagha Purana',
    },
    {
      id: 2927,
      name: 'Bakloh',
    },
    {
      id: 2928,
      name: 'Balachor',
    },
    {
      id: 2929,
      name: 'Banur',
    },
    {
      id: 2930,
      name: 'Begowal',
    },
    {
      id: 2931,
      name: 'Bhadaur',
    },
    {
      id: 2932,
      name: 'Bhawanigarh',
    },
    {
      id: 2933,
      name: 'Bhikhi',
    },
    {
      id: 2934,
      name: 'Bhogpur',
    },
    {
      id: 2935,
      name: 'Bholath',
    },
    {
      id: 2936,
      name: 'Budhlada',
    },
    {
      id: 2937,
      name: 'Chima',
    },
    {
      id: 2938,
      name: 'Dasuya',
    },
    {
      id: 2939,
      name: 'Dera Baba Nanak',
    },
    {
      id: 2940,
      name: 'Dera Bassi',
    },
    {
      id: 2941,
      name: 'Dhanaula',
    },
    {
      id: 2942,
      name: 'Dhilwan',
    },
    {
      id: 2943,
      name: 'Dhudi',
    },
    {
      id: 2944,
      name: 'Dina Nagar',
    },
    {
      id: 2945,
      name: 'Dirba',
    },
    {
      id: 2946,
      name: 'Doraha',
    },
    {
      id: 2947,
      name: 'Fatehgarh Churian',
    },
    {
      id: 2948,
      name: 'Fatehgarh Sahib',
    },
    {
      id: 2949,
      name: 'Fazilka',
    },
    {
      id: 2950,
      name: 'Firozpur District',
    },
    {
      id: 2951,
      name: 'Gardhiwala',
    },
    {
      id: 2952,
      name: 'Ghanaur',
    },
    {
      id: 2953,
      name: 'Giddarbaha',
    },
    {
      id: 2954,
      name: 'Guru Har Sahai',
    },
    {
      id: 2955,
      name: 'Hajipur',
    },
    {
      id: 2956,
      name: 'Hariana',
    },
    {
      id: 2957,
      name: 'Ishanpur',
    },
    {
      id: 2958,
      name: 'Jaito',
    },
    {
      id: 2959,
      name: 'Jandiala',
    },
    {
      id: 2960,
      name: 'Jandiala Guru',
    },
    {
      id: 2961,
      name: 'Kalanaur',
    },
    {
      id: 2962,
      name: 'Kapurthala',
    },
    {
      id: 2963,
      name: 'Kartarpur',
    },
    {
      id: 2964,
      name: 'Khamanon',
    },
    {
      id: 2965,
      name: 'Khemkaran',
    },
    {
      id: 2966,
      name: 'Kotkapura',
    },
    {
      id: 2967,
      name: 'Laungowal',
    },
    {
      id: 2968,
      name: 'Majitha',
    },
    {
      id: 2969,
      name: 'Makhu',
    },
    {
      id: 2970,
      name: 'Malaut',
    },
    {
      id: 2971,
      name: 'Malerkotla',
    },
    {
      id: 2972,
      name: 'Maur Mandi',
    },
    {
      id: 2973,
      name: 'Nakodar',
    },
    {
      id: 2974,
      name: 'Nangal',
    },
    {
      id: 2975,
      name: 'Nawanshahr',
    },
    {
      id: 2976,
      name: 'Nurmahal',
    },
    {
      id: 2977,
      name: 'Nurpur Kalan',
    },
    {
      id: 2978,
      name: 'Patti',
    },
    {
      id: 2979,
      name: 'Phillaur',
    },
    {
      id: 2980,
      name: 'Qadian',
    },
    {
      id: 2981,
      name: 'Rahon',
    },
    {
      id: 2982,
      name: 'Raikot',
    },
    {
      id: 2983,
      name: 'Rajasansi',
    },
    {
      id: 2984,
      name: 'Ram Das',
    },
    {
      id: 2985,
      name: 'Rampura',
    },
    {
      id: 2986,
      name: 'Samrala',
    },
    {
      id: 2987,
      name: 'Sanaur',
    },
    {
      id: 2988,
      name: 'Sardulgarh',
    },
    {
      id: 2989,
      name: 'Shahid Bhagat Singh Nagar',
    },
    {
      id: 2990,
      name: 'Sham Churasi',
    },
    {
      id: 2991,
      name: 'Sirhind-Fategarh',
    },
    {
      id: 2992,
      name: 'Sri Muktsar Sahib',
    },
    {
      id: 2993,
      name: 'Sultanpur Lodhi',
    },
    {
      id: 2994,
      name: 'Talwandi Bhai',
    },
    {
      id: 2995,
      name: 'Talwara',
    },
    {
      id: 2996,
      name: 'Tarn Taran Sahib',
    },
    {
      id: 2997,
      name: 'Zira',
    },
    {
      id: 2998,
      name: 'Abhaneri',
    },
    {
      id: 2999,
      name: 'Ābu',
    },
    {
      id: 3000,
      name: 'Ābu Road',
    },
    {
      id: 3001,
      name: 'Aklera',
    },
    {
      id: 3002,
      name: 'Anta',
    },
    {
      id: 3003,
      name: 'Anūpgarh',
    },
    {
      id: 3004,
      name: 'Āsind',
    },
    {
      id: 3005,
      name: 'Bagar',
    },
    {
      id: 3006,
      name: 'Bakāni',
    },
    {
      id: 3007,
      name: 'Bāli',
    },
    {
      id: 3008,
      name: 'Bālotra',
    },
    {
      id: 3009,
      name: 'Bāndīkūi',
    },
    {
      id: 3010,
      name: 'Bānswāra',
    },
    {
      id: 3011,
      name: 'Baran',
    },
    {
      id: 3012,
      name: 'Bārān',
    },
    {
      id: 3013,
      name: 'Bāri',
    },
    {
      id: 3014,
      name: 'Bari Sādri',
    },
    {
      id: 3015,
      name: 'Bārmer',
    },
    {
      id: 3016,
      name: 'Basi',
    },
    {
      id: 3017,
      name: 'Basni',
    },
    {
      id: 3018,
      name: 'Baswa',
    },
    {
      id: 3019,
      name: 'Bayāna',
    },
    {
      id: 3020,
      name: 'Beāwar',
    },
    {
      id: 3021,
      name: 'Begūn',
    },
    {
      id: 3022,
      name: 'Behror',
    },
    {
      id: 3023,
      name: 'Bhādāsar',
    },
    {
      id: 3024,
      name: 'Bhādra',
    },
    {
      id: 3025,
      name: 'Bhasāwar',
    },
    {
      id: 3026,
      name: 'Bhīlwāra',
    },
    {
      id: 3027,
      name: 'Bhindār',
    },
    {
      id: 3028,
      name: 'Bhīnmāl',
    },
    {
      id: 3029,
      name: 'Bhiwadi',
    },
    {
      id: 3030,
      name: 'Bhuma',
    },
    {
      id: 3031,
      name: 'Bīkaner',
    },
    {
      id: 3032,
      name: 'Bīkāner',
    },
    {
      id: 3033,
      name: 'Bilāra',
    },
    {
      id: 3034,
      name: 'Bissāu',
    },
    {
      id: 3035,
      name: 'Borkhera',
    },
    {
      id: 3036,
      name: 'Būndi',
    },
    {
      id: 3037,
      name: 'Chaksu',
    },
    {
      id: 3038,
      name: 'Chechat',
    },
    {
      id: 3039,
      name: 'Chhāpar',
    },
    {
      id: 3040,
      name: 'Chhoti Sādri',
    },
    {
      id: 3041,
      name: 'Chidawa',
    },
    {
      id: 3042,
      name: 'Chittaurgarh',
    },
    {
      id: 3043,
      name: 'Chūru',
    },
    {
      id: 3044,
      name: 'Dariba',
    },
    {
      id: 3045,
      name: 'Dausa',
    },
    {
      id: 3046,
      name: 'Deshnoke',
    },
    {
      id: 3047,
      name: 'Dhaulpur',
    },
    {
      id: 3048,
      name: 'Dīdwāna',
    },
    {
      id: 3049,
      name: 'Dīg',
    },
    {
      id: 3050,
      name: 'Dūngarpur',
    },
    {
      id: 3051,
      name: 'Galiākot',
    },
    {
      id: 3052,
      name: 'Gangānagar',
    },
    {
      id: 3053,
      name: 'Gulābpura',
    },
    {
      id: 3054,
      name: 'Hanumangarh',
    },
    {
      id: 3055,
      name: 'Hanumāngarh',
    },
    {
      id: 3056,
      name: 'Hindaun',
    },
    {
      id: 3057,
      name: 'Jahāzpur',
    },
    {
      id: 3058,
      name: 'Jaitāran',
    },
    {
      id: 3059,
      name: 'Jalor',
    },
    {
      id: 3060,
      name: 'Jalore',
    },
    {
      id: 3061,
      name: 'Jhālāwār',
    },
    {
      id: 3062,
      name: 'Jhālrapātan',
    },
    {
      id: 3063,
      name: 'Jhunjhunūn',
    },
    {
      id: 3064,
      name: 'Jobner',
    },
    {
      id: 3065,
      name: 'Kāman',
    },
    {
      id: 3066,
      name: 'Kānor',
    },
    {
      id: 3067,
      name: 'Kāpren',
    },
    {
      id: 3068,
      name: 'Karanpur',
    },
    {
      id: 3069,
      name: 'Karauli',
    },
    {
      id: 3070,
      name: 'Kekri',
    },
    {
      id: 3071,
      name: 'Keshorai Pātan',
    },
    {
      id: 3072,
      name: 'Khandela',
    },
    {
      id: 3073,
      name: 'Khānpur',
    },
    {
      id: 3074,
      name: 'Khetri',
    },
    {
      id: 3075,
      name: 'Kotputli',
    },
    {
      id: 3076,
      name: 'Kuchāman',
    },
    {
      id: 3077,
      name: 'Kuchera',
    },
    {
      id: 3078,
      name: 'Kūmher',
    },
    {
      id: 3079,
      name: 'Kushālgarh',
    },
    {
      id: 3080,
      name: 'Lachhmangarh Sīkar',
    },
    {
      id: 3081,
      name: 'Lādnūn',
    },
    {
      id: 3082,
      name: 'Lākheri',
    },
    {
      id: 3083,
      name: 'Lālsot',
    },
    {
      id: 3084,
      name: 'Losal',
    },
    {
      id: 3085,
      name: 'Mahwah',
    },
    {
      id: 3086,
      name: 'Makrāna',
    },
    {
      id: 3087,
      name: 'Mālpura',
    },
    {
      id: 3088,
      name: 'Māndalgarh',
    },
    {
      id: 3089,
      name: 'Mandāwar',
    },
    {
      id: 3090,
      name: 'Manohar Thāna',
    },
    {
      id: 3091,
      name: 'Meethari Marwar',
    },
    {
      id: 3092,
      name: 'Merta',
    },
    {
      id: 3093,
      name: 'Mūndwa',
    },
    {
      id: 3094,
      name: 'Nādbai',
    },
    {
      id: 3095,
      name: 'Nāgaur',
    },
    {
      id: 3096,
      name: 'Nainwa',
    },
    {
      id: 3097,
      name: 'Napāsar',
    },
    {
      id: 3098,
      name: 'Nasīrābād',
    },
    {
      id: 3099,
      name: 'Nāthdwāra',
    },
    {
      id: 3100,
      name: 'Nāwa',
    },
    {
      id: 3101,
      name: 'Nawalgarh',
    },
    {
      id: 3102,
      name: 'Neem ka Thana',
    },
    {
      id: 3103,
      name: 'Nīmāj',
    },
    {
      id: 3104,
      name: 'Nīmbāhera',
    },
    {
      id: 3105,
      name: 'Niwai',
    },
    {
      id: 3106,
      name: 'Nohar',
    },
    {
      id: 3107,
      name: 'Nokha',
    },
    {
      id: 3108,
      name: 'Partāpur',
    },
    {
      id: 3109,
      name: 'Parvatsar',
    },
    {
      id: 3110,
      name: 'Phalodi',
    },
    {
      id: 3111,
      name: 'Phulera',
    },
    {
      id: 3112,
      name: 'Pilāni',
    },
    {
      id: 3113,
      name: 'Pilibangan',
    },
    {
      id: 3114,
      name: 'Pindwāra',
    },
    {
      id: 3115,
      name: 'Pīpār',
    },
    {
      id: 3116,
      name: 'Pirāwa',
    },
    {
      id: 3117,
      name: 'Pokaran',
    },
    {
      id: 3118,
      name: 'Pratapgarh',
    },
    {
      id: 3119,
      name: 'Pratāpgarh',
    },
    {
      id: 3120,
      name: 'Rāisinghnagar',
    },
    {
      id: 3121,
      name: 'Rājākhera',
    },
    {
      id: 3122,
      name: 'Rājaldesar',
    },
    {
      id: 3123,
      name: 'Rājsamand',
    },
    {
      id: 3124,
      name: 'Rajsamand',
    },
    {
      id: 3125,
      name: 'Rāmganj Mandi',
    },
    {
      id: 3126,
      name: 'Rāni',
    },
    {
      id: 3127,
      name: 'Rāwatbhāta',
    },
    {
      id: 3128,
      name: 'Rāwatsār',
    },
    {
      id: 3129,
      name: 'Rīngas',
    },
    {
      id: 3130,
      name: 'Sādri',
    },
    {
      id: 3131,
      name: 'Sālūmbar',
    },
    {
      id: 3132,
      name: 'Sāmbhar',
    },
    {
      id: 3133,
      name: 'Samdari',
    },
    {
      id: 3134,
      name: 'Sānchor',
    },
    {
      id: 3135,
      name: 'Sangariā',
    },
    {
      id: 3136,
      name: 'Sangod',
    },
    {
      id: 3137,
      name: 'Sardārshahr',
    },
    {
      id: 3138,
      name: 'Sarwār',
    },
    {
      id: 3139,
      name: 'Sawāi Mādhopur',
    },
    {
      id: 3140,
      name: 'Sheoganj',
    },
    {
      id: 3141,
      name: 'Sīkar',
    },
    {
      id: 3142,
      name: 'Siwāna',
    },
    {
      id: 3143,
      name: 'Sri Dūngargarh',
    },
    {
      id: 3144,
      name: 'Sri Mādhopur',
    },
    {
      id: 3145,
      name: 'Sūjāngarh',
    },
    {
      id: 3146,
      name: 'Suket',
    },
    {
      id: 3147,
      name: 'Sunel',
    },
    {
      id: 3148,
      name: 'Sūrajgarh',
    },
    {
      id: 3149,
      name: 'Sūratgarh',
    },
    {
      id: 3150,
      name: 'Takhatgarh',
    },
    {
      id: 3151,
      name: 'Tārānagar',
    },
    {
      id: 3152,
      name: 'Tijāra',
    },
    {
      id: 3153,
      name: 'Todabhim',
    },
    {
      id: 3154,
      name: 'Todaraisingh',
    },
    {
      id: 3155,
      name: 'Udpura',
    },
    {
      id: 3156,
      name: 'Uniāra',
    },
    {
      id: 3157,
      name: 'Wer',
    },
    {
      id: 3158,
      name: 'East District',
    },
    {
      id: 3159,
      name: 'Gyalshing',
    },
    {
      id: 3160,
      name: 'Jorethang',
    },
    {
      id: 3161,
      name: 'Mangan',
    },
    {
      id: 3162,
      name: 'Namchi',
    },
    {
      id: 3163,
      name: 'Naya Bāzār',
    },
    {
      id: 3164,
      name: 'North District',
    },
    {
      id: 3165,
      name: 'Rangpo',
    },
    {
      id: 3166,
      name: 'South District',
    },
    {
      id: 3167,
      name: 'West District',
    },
    {
      id: 3168,
      name: 'Abirāmam',
    },
    {
      id: 3169,
      name: 'Adirampattinam',
    },
    {
      id: 3170,
      name: 'Aduthurai',
    },
    {
      id: 3171,
      name: 'Alagāpuram',
    },
    {
      id: 3172,
      name: 'Alandur',
    },
    {
      id: 3173,
      name: 'Alangānallūr',
    },
    {
      id: 3174,
      name: 'Alangāyam',
    },
    {
      id: 3175,
      name: 'Ālangudi',
    },
    {
      id: 3176,
      name: 'Ālangulam',
    },
    {
      id: 3177,
      name: 'Ālappākkam',
    },
    {
      id: 3178,
      name: 'Alwa Tirunagari',
    },
    {
      id: 3179,
      name: 'Ambasamudram',
    },
    {
      id: 3180,
      name: 'Ambattūr',
    },
    {
      id: 3181,
      name: 'Ammāpettai',
    },
    {
      id: 3182,
      name: 'Anamalais',
    },
    {
      id: 3183,
      name: 'Āndippatti',
    },
    {
      id: 3184,
      name: 'Annāmalainagar',
    },
    {
      id: 3185,
      name: 'Annavāsal',
    },
    {
      id: 3186,
      name: 'Annur',
    },
    {
      id: 3187,
      name: 'Anthiyur',
    },
    {
      id: 3188,
      name: 'Arantāngi',
    },
    {
      id: 3189,
      name: 'Arcot',
    },
    {
      id: 3190,
      name: 'Arimalam',
    },
    {
      id: 3191,
      name: 'Ariyalūr',
    },
    {
      id: 3192,
      name: 'Arni',
    },
    {
      id: 3193,
      name: 'Arumbāvūr',
    },
    {
      id: 3194,
      name: 'Arumuganeri',
    },
    {
      id: 3195,
      name: 'Aruppukkottai',
    },
    {
      id: 3196,
      name: 'Aruvankad',
    },
    {
      id: 3197,
      name: 'Āttayyāmpatti',
    },
    {
      id: 3198,
      name: 'Auroville',
    },
    {
      id: 3199,
      name: 'Āvadi',
    },
    {
      id: 3200,
      name: 'Avinashi',
    },
    {
      id: 3201,
      name: 'Ayakudi',
    },
    {
      id: 3202,
      name: 'Ayyampettāi',
    },
    {
      id: 3203,
      name: 'Bhavāni',
    },
    {
      id: 3204,
      name: 'Bodināyakkanūr',
    },
    {
      id: 3205,
      name: 'Chengam',
    },
    {
      id: 3206,
      name: 'Chennimalai',
    },
    {
      id: 3207,
      name: 'Chetput',
    },
    {
      id: 3208,
      name: 'Chettipālaiyam',
    },
    {
      id: 3209,
      name: 'Cheyyur',
    },
    {
      id: 3210,
      name: 'Chingleput',
    },
    {
      id: 3211,
      name: 'Chinna Salem',
    },
    {
      id: 3212,
      name: 'Chinnamanūr',
    },
    {
      id: 3213,
      name: 'Chinnasekkadu',
    },
    {
      id: 3214,
      name: 'Cholapuram',
    },
    {
      id: 3215,
      name: 'Colachel',
    },
    {
      id: 3216,
      name: 'Denkanikota',
    },
    {
      id: 3217,
      name: 'Desūr',
    },
    {
      id: 3218,
      name: 'Devadānappatti',
    },
    {
      id: 3219,
      name: 'Devakottai',
    },
    {
      id: 3220,
      name: 'Dhali',
    },
    {
      id: 3221,
      name: 'Dūsi',
    },
    {
      id: 3222,
      name: 'Elāyirampannai',
    },
    {
      id: 3223,
      name: 'Elumalai',
    },
    {
      id: 3224,
      name: 'Eraniel',
    },
    {
      id: 3225,
      name: 'Erumaippatti',
    },
    {
      id: 3226,
      name: 'Ettaiyapuram',
    },
    {
      id: 3227,
      name: 'Gāndhī Nagar',
    },
    {
      id: 3228,
      name: 'Gangaikondān',
    },
    {
      id: 3229,
      name: 'Gangavalli',
    },
    {
      id: 3230,
      name: 'Gingee',
    },
    {
      id: 3231,
      name: 'Gudalur',
    },
    {
      id: 3232,
      name: 'Gudiyatham',
    },
    {
      id: 3233,
      name: 'Gūduvāncheri',
    },
    {
      id: 3234,
      name: 'Gummidipundi',
    },
    {
      id: 3235,
      name: 'Harūr',
    },
    {
      id: 3236,
      name: 'Hosūr',
    },
    {
      id: 3237,
      name: 'Idappadi',
    },
    {
      id: 3238,
      name: 'Ilampillai',
    },
    {
      id: 3239,
      name: 'Iluppūr',
    },
    {
      id: 3240,
      name: 'Injambakkam',
    },
    {
      id: 3241,
      name: 'Irugūr',
    },
    {
      id: 3242,
      name: 'Jalakandapuram',
    },
    {
      id: 3243,
      name: 'Jalārpet',
    },
    {
      id: 3244,
      name: 'Jayamkondacholapuram',
    },
    {
      id: 3245,
      name: 'Kadambūr',
    },
    {
      id: 3246,
      name: 'Kadayanallur',
    },
    {
      id: 3247,
      name: 'Kalakkādu',
    },
    {
      id: 3248,
      name: 'Kalavai',
    },
    {
      id: 3249,
      name: 'Kallakkurichchi',
    },
    {
      id: 3250,
      name: 'Kallidaikurichi',
    },
    {
      id: 3251,
      name: 'Kallupatti',
    },
    {
      id: 3252,
      name: 'Kalugumalai',
    },
    {
      id: 3253,
      name: 'Kamuthi',
    },
    {
      id: 3254,
      name: 'Kanadukattan',
    },
    {
      id: 3255,
      name: 'Kancheepuram',
    },
    {
      id: 3256,
      name: 'Kanniyākumāri',
    },
    {
      id: 3257,
      name: 'Kāraikkudi',
    },
    {
      id: 3258,
      name: 'Kāramadai',
    },
    {
      id: 3259,
      name: 'Karambakkudi',
    },
    {
      id: 3260,
      name: 'Kariapatti',
    },
    {
      id: 3261,
      name: 'Karumbākkam',
    },
    {
      id: 3262,
      name: 'Kātpādi',
    },
    {
      id: 3263,
      name: 'Kattivākkam',
    },
    {
      id: 3264,
      name: 'Kāttupputtūr',
    },
    {
      id: 3265,
      name: 'Kāveripatnam',
    },
    {
      id: 3266,
      name: 'Kayalpattinam',
    },
    {
      id: 3267,
      name: 'Kayattār',
    },
    {
      id: 3268,
      name: 'Keelakarai',
    },
    {
      id: 3269,
      name: 'Kelamangalam',
    },
    {
      id: 3270,
      name: 'Kīl Bhuvanagiri',
    },
    {
      id: 3271,
      name: 'Kilvelur',
    },
    {
      id: 3272,
      name: 'Kīranūr',
    },
    {
      id: 3273,
      name: 'Kodaikānāl',
    },
    {
      id: 3274,
      name: 'Kodumudi',
    },
    {
      id: 3275,
      name: 'Kombai',
    },
    {
      id: 3276,
      name: 'Konganāpuram',
    },
    {
      id: 3277,
      name: 'Koradāchcheri',
    },
    {
      id: 3278,
      name: 'Korampallam',
    },
    {
      id: 3279,
      name: 'Kotagiri',
    },
    {
      id: 3280,
      name: 'Kottaiyūr',
    },
    {
      id: 3281,
      name: 'Kulattūr',
    },
    {
      id: 3282,
      name: 'Kulittalai',
    },
    {
      id: 3283,
      name: 'Kumaralingam',
    },
    {
      id: 3284,
      name: 'Kunnattūr',
    },
    {
      id: 3285,
      name: 'Kurinjippādi',
    },
    {
      id: 3286,
      name: 'Kuttālam',
    },
    {
      id: 3287,
      name: 'Madambakkam',
    },
    {
      id: 3288,
      name: 'Madipakkam',
    },
    {
      id: 3289,
      name: 'Madukkarai',
    },
    {
      id: 3290,
      name: 'Madukkūr',
    },
    {
      id: 3291,
      name: 'Madurāntakam',
    },
    {
      id: 3292,
      name: 'Mallāpuram',
    },
    {
      id: 3293,
      name: 'Mallasamudram',
    },
    {
      id: 3294,
      name: 'Māllūr',
    },
    {
      id: 3295,
      name: 'Manalūrpettai',
    },
    {
      id: 3296,
      name: 'Manamadurai',
    },
    {
      id: 3297,
      name: 'Manappakkam',
    },
    {
      id: 3298,
      name: 'Manapparai',
    },
    {
      id: 3299,
      name: 'Manavālakurichi',
    },
    {
      id: 3300,
      name: 'Mandapam',
    },
    {
      id: 3301,
      name: 'Mangalam',
    },
    {
      id: 3302,
      name: 'Marakkanam',
    },
    {
      id: 3303,
      name: 'Mārāndahalli',
    },
    {
      id: 3304,
      name: 'Masinigudi',
    },
    {
      id: 3305,
      name: 'Māttūr',
    },
    {
      id: 3306,
      name: 'Mayiladuthurai',
    },
    {
      id: 3307,
      name: 'Melur',
    },
    {
      id: 3308,
      name: 'Mettupalayam',
    },
    {
      id: 3309,
      name: 'Mettuppālaiyam',
    },
    {
      id: 3310,
      name: 'Mīnjūr',
    },
    {
      id: 3311,
      name: 'Mohanūr',
    },
    {
      id: 3312,
      name: 'Mudukulattūr',
    },
    {
      id: 3313,
      name: 'Mūlanūr',
    },
    {
      id: 3314,
      name: 'Musiri',
    },
    {
      id: 3315,
      name: 'Muttupet',
    },
    {
      id: 3316,
      name: 'Naduvattam',
    },
    {
      id: 3317,
      name: 'Nāgercoil',
    },
    {
      id: 3318,
      name: 'Nāmagiripettai',
    },
    {
      id: 3319,
      name: 'Nāmakkal',
    },
    {
      id: 3320,
      name: 'Nambiyūr',
    },
    {
      id: 3321,
      name: 'Nambutalai',
    },
    {
      id: 3322,
      name: 'Nandambakkam',
    },
    {
      id: 3323,
      name: 'Nangavalli',
    },
    {
      id: 3324,
      name: 'Nangilickondan',
    },
    {
      id: 3325,
      name: 'Nanguneri',
    },
    {
      id: 3326,
      name: 'Nannilam',
    },
    {
      id: 3327,
      name: 'Nāravārikuppam',
    },
    {
      id: 3328,
      name: 'Nattam',
    },
    {
      id: 3329,
      name: 'Nāttarasankottai',
    },
    {
      id: 3330,
      name: 'Needamangalam',
    },
    {
      id: 3331,
      name: 'Neelankarai',
    },
    {
      id: 3332,
      name: 'Negapatam',
    },
    {
      id: 3333,
      name: 'Nellikkuppam',
    },
    {
      id: 3334,
      name: 'Nilakottai',
    },
    {
      id: 3335,
      name: 'Nilgiris',
    },
    {
      id: 3336,
      name: 'Odugattūr',
    },
    {
      id: 3337,
      name: 'Padmanābhapuram',
    },
    {
      id: 3338,
      name: 'Pālakkodu',
    },
    {
      id: 3339,
      name: 'Pālamedu',
    },
    {
      id: 3340,
      name: 'Palavakkam',
    },
    {
      id: 3341,
      name: 'Pallappatti',
    },
    {
      id: 3342,
      name: 'Pallattūr',
    },
    {
      id: 3343,
      name: 'Pallāvaram',
    },
    {
      id: 3344,
      name: 'Pallikondai',
    },
    {
      id: 3345,
      name: 'Pallipattu',
    },
    {
      id: 3346,
      name: 'Pallippatti',
    },
    {
      id: 3347,
      name: 'Papanasam',
    },
    {
      id: 3348,
      name: 'Pāpireddippatti',
    },
    {
      id: 3349,
      name: 'Pāppārappatti',
    },
    {
      id: 3350,
      name: 'Paramagudi',
    },
    {
      id: 3351,
      name: 'Pennādam',
    },
    {
      id: 3352,
      name: 'Pennāgaram',
    },
    {
      id: 3353,
      name: 'Pennāthur',
    },
    {
      id: 3354,
      name: 'Peraiyur',
    },
    {
      id: 3355,
      name: 'Peranamallūr',
    },
    {
      id: 3356,
      name: 'Peranāmpattu',
    },
    {
      id: 3357,
      name: 'Peravurani',
    },
    {
      id: 3358,
      name: 'Periyakulam',
    },
    {
      id: 3359,
      name: 'Periyanayakkanpalaiyam',
    },
    {
      id: 3360,
      name: 'Periyanegamam',
    },
    {
      id: 3361,
      name: 'Periyapatti',
    },
    {
      id: 3362,
      name: 'Periyapattinam',
    },
    {
      id: 3363,
      name: 'Perungudi',
    },
    {
      id: 3364,
      name: 'Perūr',
    },
    {
      id: 3365,
      name: 'Polūr',
    },
    {
      id: 3366,
      name: 'Ponnamarāvati',
    },
    {
      id: 3367,
      name: 'Poonamalle',
    },
    {
      id: 3368,
      name: 'Porur',
    },
    {
      id: 3369,
      name: 'Puduppatti',
    },
    {
      id: 3370,
      name: 'Pudūr',
    },
    {
      id: 3371,
      name: 'Puduvāyal',
    },
    {
      id: 3372,
      name: 'Puliyangudi',
    },
    {
      id: 3373,
      name: 'Puliyūr',
    },
    {
      id: 3374,
      name: 'Pullambādi',
    },
    {
      id: 3375,
      name: 'Punjai Puliyampatti',
    },
    {
      id: 3376,
      name: 'Rāmanāthapuram',
    },
    {
      id: 3377,
      name: 'Rameswaram',
    },
    {
      id: 3378,
      name: 'Rasipuram',
    },
    {
      id: 3379,
      name: 'Saint Thomas Mount',
    },
    {
      id: 3380,
      name: 'Sathankulam',
    },
    {
      id: 3381,
      name: 'Sathyamangalam',
    },
    {
      id: 3382,
      name: 'Sāyalkudi',
    },
    {
      id: 3383,
      name: 'Seven Pagodas',
    },
    {
      id: 3384,
      name: 'Sholinghur',
    },
    {
      id: 3385,
      name: 'Singānallūr',
    },
    {
      id: 3386,
      name: 'Singapperumālkovil',
    },
    {
      id: 3387,
      name: 'Sīrkāzhi',
    },
    {
      id: 3388,
      name: 'Sirumugai',
    },
    {
      id: 3389,
      name: 'Sivagiri',
    },
    {
      id: 3390,
      name: 'Srīmushnam',
    },
    {
      id: 3391,
      name: 'Srīperumbūdūr',
    },
    {
      id: 3392,
      name: 'Srivaikuntam',
    },
    {
      id: 3393,
      name: 'Suchindram',
    },
    {
      id: 3394,
      name: 'Sulur',
    },
    {
      id: 3395,
      name: 'Sūrandai',
    },
    {
      id: 3396,
      name: 'Swāmimalai',
    },
    {
      id: 3397,
      name: 'Tanjore',
    },
    {
      id: 3398,
      name: 'Tāramangalam',
    },
    {
      id: 3399,
      name: 'Tāttayyangārpettai',
    },
    {
      id: 3400,
      name: 'Teni',
    },
    {
      id: 3401,
      name: 'Tharangambadi',
    },
    {
      id: 3402,
      name: 'Theni',
    },
    {
      id: 3403,
      name: 'Thirukattupalli',
    },
    {
      id: 3404,
      name: 'Thiruvaiyaru',
    },
    {
      id: 3405,
      name: 'Thiruvallur',
    },
    {
      id: 3406,
      name: 'Thiruvidaimaruthur',
    },
    {
      id: 3407,
      name: 'Thoothukkudi',
    },
    {
      id: 3408,
      name: 'Tinnanūr',
    },
    {
      id: 3409,
      name: 'Tiruchengode',
    },
    {
      id: 3410,
      name: 'Tiruchirappalli',
    },
    {
      id: 3411,
      name: 'Tirukkoyilur',
    },
    {
      id: 3412,
      name: 'Tirumullaivāsal',
    },
    {
      id: 3413,
      name: 'Tirunelveli Kattabo',
    },
    {
      id: 3414,
      name: 'Tiruppālaikudi',
    },
    {
      id: 3415,
      name: 'Tirupparangunram',
    },
    {
      id: 3416,
      name: 'Tiruppuvanam',
    },
    {
      id: 3417,
      name: 'Tiruttangal',
    },
    {
      id: 3418,
      name: 'Tiruvannāmalai',
    },
    {
      id: 3419,
      name: 'Tiruvottiyūr',
    },
    {
      id: 3420,
      name: 'Tisaiyanvilai',
    },
    {
      id: 3421,
      name: 'Tondi',
    },
    {
      id: 3422,
      name: 'Turaiyūr',
    },
    {
      id: 3423,
      name: 'Udangudi',
    },
    {
      id: 3424,
      name: 'Udumalaippettai',
    },
    {
      id: 3425,
      name: 'Uppiliyapuram',
    },
    {
      id: 3426,
      name: 'Usilampatti',
    },
    {
      id: 3427,
      name: 'Uttamapālaiyam',
    },
    {
      id: 3428,
      name: 'Uttiramerūr',
    },
    {
      id: 3429,
      name: 'Ūttukkuli',
    },
    {
      id: 3430,
      name: 'V.S.K.Valasai (Dindigul-Dist.)',
    },
    {
      id: 3431,
      name: 'Vadakku Valliyūr',
    },
    {
      id: 3432,
      name: 'Vadakku Viravanallur',
    },
    {
      id: 3433,
      name: 'Vādippatti',
    },
    {
      id: 3434,
      name: 'Valangaiman',
    },
    {
      id: 3435,
      name: 'Valavanur',
    },
    {
      id: 3436,
      name: 'Vallam',
    },
    {
      id: 3437,
      name: 'Valparai',
    },
    {
      id: 3438,
      name: 'Vandalūr',
    },
    {
      id: 3439,
      name: 'Vandavāsi',
    },
    {
      id: 3440,
      name: 'Vāsudevanallūr',
    },
    {
      id: 3441,
      name: 'Vattalkundu',
    },
    {
      id: 3442,
      name: 'Vedaraniyam',
    },
    {
      id: 3443,
      name: 'Vedasandūr',
    },
    {
      id: 3444,
      name: 'Velankanni',
    },
    {
      id: 3445,
      name: 'Vellānūr',
    },
    {
      id: 3446,
      name: 'Velur',
    },
    {
      id: 3447,
      name: 'Vengavasal',
    },
    {
      id: 3448,
      name: 'Vettaikkaranpudur',
    },
    {
      id: 3449,
      name: 'Vettavalam',
    },
    {
      id: 3450,
      name: 'Vijayapuri',
    },
    {
      id: 3451,
      name: 'Vikravāndi',
    },
    {
      id: 3452,
      name: 'Vilattikulam',
    },
    {
      id: 3453,
      name: 'Vīraganūr',
    },
    {
      id: 3454,
      name: 'Virudhunagar',
    },
    {
      id: 3455,
      name: 'Virudunagar',
    },
    {
      id: 3456,
      name: 'Vriddhāchalam',
    },
    {
      id: 3457,
      name: 'Walajapet',
    },
    {
      id: 3458,
      name: 'Wallajahbad',
    },
    {
      id: 3459,
      name: 'Ādilābād',
    },
    {
      id: 3460,
      name: 'Ālampur',
    },
    {
      id: 3461,
      name: 'Andol',
    },
    {
      id: 3462,
      name: 'Asifābād',
    },
    {
      id: 3463,
      name: 'Bānswāda',
    },
    {
      id: 3464,
      name: 'Bellampalli',
    },
    {
      id: 3465,
      name: 'Bhadrāchalam',
    },
    {
      id: 3466,
      name: 'Bhadradri Kothagudem',
    },
    {
      id: 3467,
      name: 'Bhaisa',
    },
    {
      id: 3468,
      name: 'Bhongīr',
    },
    {
      id: 3469,
      name: 'Chandūr',
    },
    {
      id: 3470,
      name: 'Chātakonda',
    },
    {
      id: 3471,
      name: 'Dasnapur',
    },
    {
      id: 3472,
      name: 'Devarkonda',
    },
    {
      id: 3473,
      name: 'Dornakal',
    },
    {
      id: 3474,
      name: 'Gaddi Annaram',
    },
    {
      id: 3475,
      name: 'Gadwāl',
    },
    {
      id: 3476,
      name: 'Ghatkesar',
    },
    {
      id: 3477,
      name: 'Gopālur',
    },
    {
      id: 3478,
      name: 'Hyderābād',
    },
    {
      id: 3479,
      name: 'Jagitial',
    },
    {
      id: 3480,
      name: 'Jagtiāl',
    },
    {
      id: 3481,
      name: 'Jangaon',
    },
    {
      id: 3482,
      name: 'Jangoan',
    },
    {
      id: 3483,
      name: 'Jayashankar Bhupalapally',
    },
    {
      id: 3484,
      name: 'Jogulamba Gadwal',
    },
    {
      id: 3485,
      name: 'Kagaznāgār',
    },
    {
      id: 3486,
      name: 'Kāmāreddi',
    },
    {
      id: 3487,
      name: 'Kamareddy',
    },
    {
      id: 3488,
      name: 'Karīmnagar',
    },
    {
      id: 3489,
      name: 'Kodār',
    },
    {
      id: 3490,
      name: 'Koratla',
    },
    {
      id: 3491,
      name: 'Kothāpet',
    },
    {
      id: 3492,
      name: 'Kottagūdem',
    },
    {
      id: 3493,
      name: 'Kottapalli',
    },
    {
      id: 3494,
      name: 'Kūkatpalli',
    },
    {
      id: 3495,
      name: 'Kyathampalle',
    },
    {
      id: 3496,
      name: 'Lakshettipet',
    },
    {
      id: 3497,
      name: 'Lal Bahadur Nagar',
    },
    {
      id: 3498,
      name: 'Mahabubabad',
    },
    {
      id: 3499,
      name: 'Mahbūbābād',
    },
    {
      id: 3500,
      name: 'Mahbūbnagar',
    },
    {
      id: 3501,
      name: 'Malkajgiri',
    },
    {
      id: 3502,
      name: 'Mancherāl',
    },
    {
      id: 3503,
      name: 'Mandamarri',
    },
    {
      id: 3504,
      name: 'Manthani',
    },
    {
      id: 3505,
      name: 'Manuguru',
    },
    {
      id: 3506,
      name: 'Medchal Malkajgiri',
    },
    {
      id: 3507,
      name: 'Miriālgūda',
    },
    {
      id: 3508,
      name: 'Nāgar Karnūl',
    },
    {
      id: 3509,
      name: 'Nārāyanpet',
    },
    {
      id: 3510,
      name: 'Nārsingi',
    },
    {
      id: 3511,
      name: 'Nāspur',
    },
    {
      id: 3512,
      name: 'Nirmal',
    },
    {
      id: 3513,
      name: 'Nizāmābād',
    },
    {
      id: 3514,
      name: 'Pāloncha',
    },
    {
      id: 3515,
      name: 'Palwancha',
    },
    {
      id: 3516,
      name: 'Peddapalli',
    },
    {
      id: 3517,
      name: 'Quthbullapur',
    },
    {
      id: 3518,
      name: 'Rajanna Sircilla',
    },
    {
      id: 3519,
      name: 'Ramagundam',
    },
    {
      id: 3520,
      name: 'Rāmgundam',
    },
    {
      id: 3521,
      name: 'Rangareddi',
    },
    {
      id: 3522,
      name: 'Sadāseopet',
    },
    {
      id: 3523,
      name: 'Sangāreddi',
    },
    {
      id: 3524,
      name: 'Sathupalli',
    },
    {
      id: 3525,
      name: 'Serilingampalle',
    },
    {
      id: 3526,
      name: 'Siddipet',
    },
    {
      id: 3527,
      name: 'Singāpur',
    },
    {
      id: 3528,
      name: 'Sirpur',
    },
    {
      id: 3529,
      name: 'Sirsilla',
    },
    {
      id: 3530,
      name: 'Srīrāmnagar',
    },
    {
      id: 3531,
      name: 'Suriāpet',
    },
    {
      id: 3532,
      name: 'Tāndūr',
    },
    {
      id: 3533,
      name: 'Uppal Kalan',
    },
    {
      id: 3534,
      name: 'Vemalwāda',
    },
    {
      id: 3535,
      name: 'Vikārābād',
    },
    {
      id: 3536,
      name: 'Wanparti',
    },
    {
      id: 3537,
      name: 'Yellandu',
    },
    {
      id: 3538,
      name: 'Zahirābād',
    },
    {
      id: 3539,
      name: 'Āmbāsa',
    },
    {
      id: 3540,
      name: 'Barjala',
    },
    {
      id: 3541,
      name: 'Belonia',
    },
    {
      id: 3542,
      name: 'Dhalai',
    },
    {
      id: 3543,
      name: 'Dharmanagar',
    },
    {
      id: 3544,
      name: 'Gomati',
    },
    {
      id: 3545,
      name: 'Kailāshahar',
    },
    {
      id: 3546,
      name: 'Khowai',
    },
    {
      id: 3547,
      name: 'North Tripura',
    },
    {
      id: 3548,
      name: 'Rānīr Bāzār',
    },
    {
      id: 3549,
      name: 'Sabrūm',
    },
    {
      id: 3550,
      name: 'Sonāmura',
    },
    {
      id: 3551,
      name: 'South Tripura',
    },
    {
      id: 3552,
      name: 'Unakoti',
    },
    {
      id: 3553,
      name: 'West Tripura',
    },
    {
      id: 3554,
      name: 'Achhnera',
    },
    {
      id: 3555,
      name: 'Afzalgarh',
    },
    {
      id: 3556,
      name: 'Āgra',
    },
    {
      id: 3557,
      name: 'Ahraura',
    },
    {
      id: 3558,
      name: 'Ajodhya',
    },
    {
      id: 3559,
      name: 'Akbarpur',
    },
    {
      id: 3560,
      name: 'Alīganj',
    },
    {
      id: 3561,
      name: 'Alīgarh',
    },
    {
      id: 3562,
      name: 'Allahābād',
    },
    {
      id: 3563,
      name: 'Allāhganj',
    },
    {
      id: 3564,
      name: 'Amānpur',
    },
    {
      id: 3565,
      name: 'Ambahta',
    },
    {
      id: 3566,
      name: 'Ambedkar Nagar',
    },
    {
      id: 3567,
      name: 'Amethi',
    },
    {
      id: 3568,
      name: 'Amethī',
    },
    {
      id: 3569,
      name: 'Amroha',
    },
    {
      id: 3570,
      name: 'Anandnagar',
    },
    {
      id: 3571,
      name: 'Antu',
    },
    {
      id: 3572,
      name: 'Anūpshahr',
    },
    {
      id: 3573,
      name: 'Aonla',
    },
    {
      id: 3574,
      name: 'Atarra',
    },
    {
      id: 3575,
      name: 'Atraulī',
    },
    {
      id: 3576,
      name: 'Atraulia',
    },
    {
      id: 3577,
      name: 'Auraiya',
    },
    {
      id: 3578,
      name: 'Aurās',
    },
    {
      id: 3579,
      name: 'Āzamgarh',
    },
    {
      id: 3580,
      name: 'Baberu',
    },
    {
      id: 3581,
      name: 'Babīna',
    },
    {
      id: 3582,
      name: 'Babrāla',
    },
    {
      id: 3583,
      name: 'Babugarh',
    },
    {
      id: 3584,
      name: 'Bachhraon',
    },
    {
      id: 3585,
      name: 'Bachhrāwān',
    },
    {
      id: 3586,
      name: 'Baghpat',
    },
    {
      id: 3587,
      name: 'Bāghpat',
    },
    {
      id: 3588,
      name: 'Bāh',
    },
    {
      id: 3589,
      name: 'Baheri',
    },
    {
      id: 3590,
      name: 'Bahjoi',
    },
    {
      id: 3591,
      name: 'Bahraich',
    },
    {
      id: 3592,
      name: 'Bahraigh',
    },
    {
      id: 3593,
      name: 'Bahsūma',
    },
    {
      id: 3594,
      name: 'Bahua',
    },
    {
      id: 3595,
      name: 'Bājna',
    },
    {
      id: 3596,
      name: 'Bakewar',
    },
    {
      id: 3597,
      name: 'Baldev',
    },
    {
      id: 3598,
      name: 'Ballia',
    },
    {
      id: 3599,
      name: 'Balrampur',
    },
    {
      id: 3600,
      name: 'Balrāmpur',
    },
    {
      id: 3601,
      name: 'Banat',
    },
    {
      id: 3602,
      name: 'Banbasa',
    },
    {
      id: 3603,
      name: 'Bānda',
    },
    {
      id: 3604,
      name: 'Bāngarmau',
    },
    {
      id: 3605,
      name: 'Bānsdīh',
    },
    {
      id: 3606,
      name: 'Bānsgāon',
    },
    {
      id: 3607,
      name: 'Bānsi',
    },
    {
      id: 3608,
      name: 'Bāra Banki',
    },
    {
      id: 3609,
      name: 'Barāgaon',
    },
    {
      id: 3610,
      name: 'Baraut',
    },
    {
      id: 3611,
      name: 'Barkhera Kalān',
    },
    {
      id: 3612,
      name: 'Barsāna',
    },
    {
      id: 3613,
      name: 'Bastī',
    },
    {
      id: 3614,
      name: 'Behat',
    },
    {
      id: 3615,
      name: 'Benīganj',
    },
    {
      id: 3616,
      name: 'Beswān',
    },
    {
      id: 3617,
      name: 'Bewar',
    },
    {
      id: 3618,
      name: 'Bhagwantnagar',
    },
    {
      id: 3619,
      name: 'Bharthana',
    },
    {
      id: 3620,
      name: 'Bharwāri',
    },
    {
      id: 3621,
      name: 'Bhinga',
    },
    {
      id: 3622,
      name: 'Bhongaon',
    },
    {
      id: 3623,
      name: 'Bidhūna',
    },
    {
      id: 3624,
      name: 'Bīghāpur Khurd',
    },
    {
      id: 3625,
      name: 'Bijnor',
    },
    {
      id: 3626,
      name: 'Bīkāpur',
    },
    {
      id: 3627,
      name: 'Bilāri',
    },
    {
      id: 3628,
      name: 'Bilariāganj',
    },
    {
      id: 3629,
      name: 'Bīlāspur',
    },
    {
      id: 3630,
      name: 'Bilgrām',
    },
    {
      id: 3631,
      name: 'Bilhaur',
    },
    {
      id: 3632,
      name: 'Bilsanda',
    },
    {
      id: 3633,
      name: 'Bilsi',
    },
    {
      id: 3634,
      name: 'Bilthra',
    },
    {
      id: 3635,
      name: 'Bindki',
    },
    {
      id: 3636,
      name: 'Bīsalpur',
    },
    {
      id: 3637,
      name: 'Bisauli',
    },
    {
      id: 3638,
      name: 'Bisenda Buzurg',
    },
    {
      id: 3639,
      name: 'Bishunpur Urf Mahārājganj',
    },
    {
      id: 3640,
      name: 'Biswān',
    },
    {
      id: 3641,
      name: 'Bithūr',
    },
    {
      id: 3642,
      name: 'Budhāna',
    },
    {
      id: 3643,
      name: 'Captainganj',
    },
    {
      id: 3644,
      name: 'Chail',
    },
    {
      id: 3645,
      name: 'Chakia',
    },
    {
      id: 3646,
      name: 'Chandauli District',
    },
    {
      id: 3647,
      name: 'Chāndpur',
    },
    {
      id: 3648,
      name: 'Chanduasi',
    },
    {
      id: 3649,
      name: 'Charkhāri',
    },
    {
      id: 3650,
      name: 'Charthāwal',
    },
    {
      id: 3651,
      name: 'Chhaprauli',
    },
    {
      id: 3652,
      name: 'Chharra',
    },
    {
      id: 3653,
      name: 'Chhāta',
    },
    {
      id: 3654,
      name: 'Chhibrāmau',
    },
    {
      id: 3655,
      name: 'Chhutmalpur',
    },
    {
      id: 3656,
      name: 'Chillupār',
    },
    {
      id: 3657,
      name: 'Chirgaon',
    },
    {
      id: 3658,
      name: 'Chitrakoot',
    },
    {
      id: 3659,
      name: 'Chopan',
    },
    {
      id: 3660,
      name: 'Chunār',
    },
    {
      id: 3661,
      name: 'Colonelganj',
    },
    {
      id: 3662,
      name: 'Dādri',
    },
    {
      id: 3663,
      name: 'Dalmau',
    },
    {
      id: 3664,
      name: 'Dankaur',
    },
    {
      id: 3665,
      name: 'Dāsna',
    },
    {
      id: 3666,
      name: 'Dātāganj',
    },
    {
      id: 3667,
      name: 'Daurāla',
    },
    {
      id: 3668,
      name: 'Dayāl Bāgh',
    },
    {
      id: 3669,
      name: 'Deoband',
    },
    {
      id: 3670,
      name: 'Deoraniān',
    },
    {
      id: 3671,
      name: 'Dewā',
    },
    {
      id: 3672,
      name: 'Dhāmpur',
    },
    {
      id: 3673,
      name: 'Dhanaura',
    },
    {
      id: 3674,
      name: 'Dhaurahra',
    },
    {
      id: 3675,
      name: 'Dibai',
    },
    {
      id: 3676,
      name: 'Dohrighāt',
    },
    {
      id: 3677,
      name: 'Dostpur',
    },
    {
      id: 3678,
      name: 'Dūdhi',
    },
    {
      id: 3679,
      name: 'Etah',
    },
    {
      id: 3680,
      name: 'Etāwah',
    },
    {
      id: 3681,
      name: 'Faizābād',
    },
    {
      id: 3682,
      name: 'Farah',
    },
    {
      id: 3683,
      name: 'Farīdnagar',
    },
    {
      id: 3684,
      name: 'Farīdpur',
    },
    {
      id: 3685,
      name: 'Farrukhābād',
    },
    {
      id: 3686,
      name: 'Fatehganj West',
    },
    {
      id: 3687,
      name: 'Fatehpur Chaurāsi',
    },
    {
      id: 3688,
      name: 'Fatehpur Sīkri',
    },
    {
      id: 3689,
      name: 'Fīrozābād',
    },
    {
      id: 3690,
      name: 'Fyzābād',
    },
    {
      id: 3691,
      name: 'Gajraula',
    },
    {
      id: 3692,
      name: 'Gangoh',
    },
    {
      id: 3693,
      name: 'Ganj Dundwāra',
    },
    {
      id: 3694,
      name: 'Ganj Murādābād',
    },
    {
      id: 3695,
      name: 'Garautha',
    },
    {
      id: 3696,
      name: 'Garhi Pūkhta',
    },
    {
      id: 3697,
      name: 'Garhmuktesar',
    },
    {
      id: 3698,
      name: 'Gautam Buddha Nagar',
    },
    {
      id: 3699,
      name: 'Gawān',
    },
    {
      id: 3700,
      name: 'Ghātampur',
    },
    {
      id: 3701,
      name: 'Ghāziābād',
    },
    {
      id: 3702,
      name: 'Ghazīpur',
    },
    {
      id: 3703,
      name: 'Ghāzīpur',
    },
    {
      id: 3704,
      name: 'Ghiror',
    },
    {
      id: 3705,
      name: 'Ghorāwal',
    },
    {
      id: 3706,
      name: 'Ghosī',
    },
    {
      id: 3707,
      name: 'Gohānd',
    },
    {
      id: 3708,
      name: 'Gokul',
    },
    {
      id: 3709,
      name: 'Gola Bāzār',
    },
    {
      id: 3710,
      name: 'Gola Gokarannāth',
    },
    {
      id: 3711,
      name: 'Gondā City',
    },
    {
      id: 3712,
      name: 'Gopāmau',
    },
    {
      id: 3713,
      name: 'Goshāinganj',
    },
    {
      id: 3714,
      name: 'Goshāīnganj',
    },
    {
      id: 3715,
      name: 'Govardhan',
    },
    {
      id: 3716,
      name: 'Greater Noida',
    },
    {
      id: 3717,
      name: 'Gulāothi',
    },
    {
      id: 3718,
      name: 'Gunnaur',
    },
    {
      id: 3719,
      name: 'Gursahāiganj',
    },
    {
      id: 3720,
      name: 'Gursarāi',
    },
    {
      id: 3721,
      name: 'Gyānpur',
    },
    {
      id: 3722,
      name: 'Haldaur',
    },
    {
      id: 3723,
      name: 'Handiā',
    },
    {
      id: 3724,
      name: 'Hāpur',
    },
    {
      id: 3725,
      name: 'Haraiya',
    },
    {
      id: 3726,
      name: 'Hardoi',
    },
    {
      id: 3727,
      name: 'Hardoī',
    },
    {
      id: 3728,
      name: 'Harduāganj',
    },
    {
      id: 3729,
      name: 'Hastināpur',
    },
    {
      id: 3730,
      name: 'Hātā',
    },
    {
      id: 3731,
      name: 'Hāthras',
    },
    {
      id: 3732,
      name: 'Iglās',
    },
    {
      id: 3733,
      name: 'Ikauna',
    },
    {
      id: 3734,
      name: 'Indergarh',
    },
    {
      id: 3735,
      name: 'Islāmnagar',
    },
    {
      id: 3736,
      name: 'Itaunja',
    },
    {
      id: 3737,
      name: 'Itimādpur',
    },
    {
      id: 3738,
      name: 'Jagdīshpur',
    },
    {
      id: 3739,
      name: 'Jagnair',
    },
    {
      id: 3740,
      name: 'Jahāngīrābād',
    },
    {
      id: 3741,
      name: 'Jahāngīrpur',
    },
    {
      id: 3742,
      name: 'Jainpur',
    },
    {
      id: 3743,
      name: 'Jais',
    },
    {
      id: 3744,
      name: 'Jalālābad',
    },
    {
      id: 3745,
      name: 'Jalālābād',
    },
    {
      id: 3746,
      name: 'Jalālī',
    },
    {
      id: 3747,
      name: 'Jalālpur',
    },
    {
      id: 3748,
      name: 'Jālaun',
    },
    {
      id: 3749,
      name: 'Jānsath',
    },
    {
      id: 3750,
      name: 'Jarwal',
    },
    {
      id: 3751,
      name: 'Jasrāna',
    },
    {
      id: 3752,
      name: 'Jaswantnagar',
    },
    {
      id: 3753,
      name: 'Jewar',
    },
    {
      id: 3754,
      name: 'Jhālu',
    },
    {
      id: 3755,
      name: 'Jhānsi',
    },
    {
      id: 3756,
      name: 'Jhīnjhak',
    },
    {
      id: 3757,
      name: 'Jhinjhāna',
    },
    {
      id: 3758,
      name: 'Jhūsi',
    },
    {
      id: 3759,
      name: 'Jyotiba Phule Nagar',
    },
    {
      id: 3760,
      name: 'Kabrāi',
    },
    {
      id: 3761,
      name: 'Kachhwa',
    },
    {
      id: 3762,
      name: 'Kadaura',
    },
    {
      id: 3763,
      name: 'Kādīpur',
    },
    {
      id: 3764,
      name: 'Kairāna',
    },
    {
      id: 3765,
      name: 'Kākori',
    },
    {
      id: 3766,
      name: 'Kakrāla',
    },
    {
      id: 3767,
      name: 'Kālīnagar',
    },
    {
      id: 3768,
      name: 'Kālpi',
    },
    {
      id: 3769,
      name: 'Kamalganj',
    },
    {
      id: 3770,
      name: 'Kampil',
    },
    {
      id: 3771,
      name: 'Kāndhla',
    },
    {
      id: 3772,
      name: 'Kannauj',
    },
    {
      id: 3773,
      name: 'Kānpur',
    },
    {
      id: 3774,
      name: 'Kanpur Dehat',
    },
    {
      id: 3775,
      name: 'Kānt',
    },
    {
      id: 3776,
      name: 'Kānth',
    },
    {
      id: 3777,
      name: 'Karārī',
    },
    {
      id: 3778,
      name: 'Karhal',
    },
    {
      id: 3779,
      name: 'Kāsganj',
    },
    {
      id: 3780,
      name: 'Kaushambi District',
    },
    {
      id: 3781,
      name: 'Kemrī',
    },
    {
      id: 3782,
      name: 'Khada',
    },
    {
      id: 3783,
      name: 'Khāga',
    },
    {
      id: 3784,
      name: 'Khair',
    },
    {
      id: 3785,
      name: 'Khairābād',
    },
    {
      id: 3786,
      name: 'Khalīlābād',
    },
    {
      id: 3787,
      name: 'Kharela',
    },
    {
      id: 3788,
      name: 'Khargupur',
    },
    {
      id: 3789,
      name: 'Khekra',
    },
    {
      id: 3790,
      name: 'Khudāganj',
    },
    {
      id: 3791,
      name: 'Khūtār',
    },
    {
      id: 3792,
      name: 'Kirākat',
    },
    {
      id: 3793,
      name: 'Kiraoli',
    },
    {
      id: 3794,
      name: 'Kīratpur',
    },
    {
      id: 3795,
      name: 'Kishanpur',
    },
    {
      id: 3796,
      name: 'Kishni',
    },
    {
      id: 3797,
      name: 'Kithor',
    },
    {
      id: 3798,
      name: 'Konch',
    },
    {
      id: 3799,
      name: 'Kopāganj',
    },
    {
      id: 3800,
      name: 'Kosi',
    },
    {
      id: 3801,
      name: 'Kotra',
    },
    {
      id: 3802,
      name: 'Kulpahār',
    },
    {
      id: 3803,
      name: 'Kunda',
    },
    {
      id: 3804,
      name: 'Kundarkhi',
    },
    {
      id: 3805,
      name: 'Kurāra',
    },
    {
      id: 3806,
      name: 'Kushinagar',
    },
    {
      id: 3807,
      name: 'Lāharpur',
    },
    {
      id: 3808,
      name: 'Lakhīmpur',
    },
    {
      id: 3809,
      name: 'Lakhnā',
    },
    {
      id: 3810,
      name: 'Lalitpur',
    },
    {
      id: 3811,
      name: 'Lar',
    },
    {
      id: 3812,
      name: 'Lāwar Khās',
    },
    {
      id: 3813,
      name: 'Loni',
    },
    {
      id: 3814,
      name: 'Lucknow District',
    },
    {
      id: 3815,
      name: 'Machhlīshahr',
    },
    {
      id: 3816,
      name: 'Mādhoganj',
    },
    {
      id: 3817,
      name: 'Mādhogarh',
    },
    {
      id: 3818,
      name: 'Maghar',
    },
    {
      id: 3819,
      name: 'Mahāban',
    },
    {
      id: 3820,
      name: 'Mahārāganj',
    },
    {
      id: 3821,
      name: 'Maharajganj',
    },
    {
      id: 3822,
      name: 'Mahārājganj',
    },
    {
      id: 3823,
      name: 'Mahmudābād',
    },
    {
      id: 3824,
      name: 'Mahoba',
    },
    {
      id: 3825,
      name: 'Mahobā',
    },
    {
      id: 3826,
      name: 'Maholi',
    },
    {
      id: 3827,
      name: 'Mahroni',
    },
    {
      id: 3828,
      name: 'Mailāni',
    },
    {
      id: 3829,
      name: 'Mainpuri',
    },
    {
      id: 3830,
      name: 'Malīhābād',
    },
    {
      id: 3831,
      name: 'Maniar',
    },
    {
      id: 3832,
      name: 'Mānikpur',
    },
    {
      id: 3833,
      name: 'Manjhanpur',
    },
    {
      id: 3834,
      name: 'Mankāpur',
    },
    {
      id: 3835,
      name: 'Mārahra',
    },
    {
      id: 3836,
      name: 'Mariāhu',
    },
    {
      id: 3837,
      name: 'Mataundh',
    },
    {
      id: 3838,
      name: 'Mau Aimma',
    },
    {
      id: 3839,
      name: 'Maudaha',
    },
    {
      id: 3840,
      name: 'Maurānwān',
    },
    {
      id: 3841,
      name: 'Mawāna',
    },
    {
      id: 3842,
      name: 'Mehnagar',
    },
    {
      id: 3843,
      name: 'Mehndāwal',
    },
    {
      id: 3844,
      name: 'Milak',
    },
    {
      id: 3845,
      name: 'Mīrānpur',
    },
    {
      id: 3846,
      name: 'Mīrānpur Katra',
    },
    {
      id: 3847,
      name: 'Mīrganj',
    },
    {
      id: 3848,
      name: 'Mirzāpur',
    },
    {
      id: 3849,
      name: 'Misrikh',
    },
    {
      id: 3850,
      name: 'Mohān',
    },
    {
      id: 3851,
      name: 'Mohanpur',
    },
    {
      id: 3852,
      name: 'Morādābād',
    },
    {
      id: 3853,
      name: 'Moth',
    },
    {
      id: 3854,
      name: 'Mubārakpur',
    },
    {
      id: 3855,
      name: 'Mughal Sarāi',
    },
    {
      id: 3856,
      name: 'Muhammadābād',
    },
    {
      id: 3857,
      name: 'Murādnagar',
    },
    {
      id: 3858,
      name: 'Mursān',
    },
    {
      id: 3859,
      name: 'Musāfir-Khāna',
    },
    {
      id: 3860,
      name: 'Nadīgaon',
    },
    {
      id: 3861,
      name: 'Nagīna',
    },
    {
      id: 3862,
      name: 'Nagrām',
    },
    {
      id: 3863,
      name: 'Najībābād',
    },
    {
      id: 3864,
      name: 'Nakūr',
    },
    {
      id: 3865,
      name: 'Nanauta',
    },
    {
      id: 3866,
      name: 'Nandgaon',
    },
    {
      id: 3867,
      name: 'Nānpāra',
    },
    {
      id: 3868,
      name: 'Narauli',
    },
    {
      id: 3869,
      name: 'Naraura',
    },
    {
      id: 3870,
      name: 'Nautanwa',
    },
    {
      id: 3871,
      name: 'Nawābganj',
    },
    {
      id: 3872,
      name: 'Nichlaul',
    },
    {
      id: 3873,
      name: 'Nihtaur',
    },
    {
      id: 3874,
      name: 'Niwāri',
    },
    {
      id: 3875,
      name: 'Nūrpur',
    },
    {
      id: 3876,
      name: 'Obra',
    },
    {
      id: 3877,
      name: 'Oran',
    },
    {
      id: 3878,
      name: 'Pachperwa',
    },
    {
      id: 3879,
      name: 'Pahāsu',
    },
    {
      id: 3880,
      name: 'Paliā Kalān',
    },
    {
      id: 3881,
      name: 'Pārīchha',
    },
    {
      id: 3882,
      name: 'Parīchhatgarh',
    },
    {
      id: 3883,
      name: 'Parshādepur',
    },
    {
      id: 3884,
      name: 'Patiāli',
    },
    {
      id: 3885,
      name: 'Pawāyan',
    },
    {
      id: 3886,
      name: 'Phalauda',
    },
    {
      id: 3887,
      name: 'Phaphūnd',
    },
    {
      id: 3888,
      name: 'Pharihā',
    },
    {
      id: 3889,
      name: 'Phulpur',
    },
    {
      id: 3890,
      name: 'Phūlpur',
    },
    {
      id: 3891,
      name: 'Pihānī',
    },
    {
      id: 3892,
      name: 'Pīlibhīt',
    },
    {
      id: 3893,
      name: 'Pīlībhīt',
    },
    {
      id: 3894,
      name: 'Pilkhua',
    },
    {
      id: 3895,
      name: 'Pināhat',
    },
    {
      id: 3896,
      name: 'Pipraich',
    },
    {
      id: 3897,
      name: 'Pukhrāyān',
    },
    {
      id: 3898,
      name: 'Pūranpur',
    },
    {
      id: 3899,
      name: 'Purwā',
    },
    {
      id: 3900,
      name: 'Rabūpura',
    },
    {
      id: 3901,
      name: 'Rādhākund',
    },
    {
      id: 3902,
      name: 'Rāe Bareli',
    },
    {
      id: 3903,
      name: 'Raebareli',
    },
    {
      id: 3904,
      name: 'Rāmkola',
    },
    {
      id: 3905,
      name: 'Rānīpur',
    },
    {
      id: 3906,
      name: 'Rasrā',
    },
    {
      id: 3907,
      name: 'Rasūlābād',
    },
    {
      id: 3908,
      name: 'Rāth',
    },
    {
      id: 3909,
      name: 'Rāya',
    },
    {
      id: 3910,
      name: 'Renukūt',
    },
    {
      id: 3911,
      name: 'Reoti',
    },
    {
      id: 3912,
      name: 'Richha',
    },
    {
      id: 3913,
      name: 'Robertsganj',
    },
    {
      id: 3914,
      name: 'Rūdarpur',
    },
    {
      id: 3915,
      name: 'Rura',
    },
    {
      id: 3916,
      name: 'Sadābād',
    },
    {
      id: 3917,
      name: 'Sādāt',
    },
    {
      id: 3918,
      name: 'Safīpur',
    },
    {
      id: 3919,
      name: 'Sahāranpur',
    },
    {
      id: 3920,
      name: 'Sahaspur',
    },
    {
      id: 3921,
      name: 'Sahaswān',
    },
    {
      id: 3922,
      name: 'Sahāwar',
    },
    {
      id: 3923,
      name: 'Saidpur',
    },
    {
      id: 3924,
      name: 'Sakīt',
    },
    {
      id: 3925,
      name: 'Salon',
    },
    {
      id: 3926,
      name: 'Sambhal',
    },
    {
      id: 3927,
      name: 'Samthar',
    },
    {
      id: 3928,
      name: 'Sāndi',
    },
    {
      id: 3929,
      name: 'Sandīla',
    },
    {
      id: 3930,
      name: 'Sant Kabir Nagar',
    },
    {
      id: 3931,
      name: 'Sant Ravi Das Nagar',
    },
    {
      id: 3932,
      name: 'Sarāi Ākil',
    },
    {
      id: 3933,
      name: 'Sarai Ekdil',
    },
    {
      id: 3934,
      name: 'Sarāi Mīr',
    },
    {
      id: 3935,
      name: 'Sarauli',
    },
    {
      id: 3936,
      name: 'Sardhana',
    },
    {
      id: 3937,
      name: 'Sarīla',
    },
    {
      id: 3938,
      name: 'Sāsni',
    },
    {
      id: 3939,
      name: 'Satrikh',
    },
    {
      id: 3940,
      name: 'Saurikh',
    },
    {
      id: 3941,
      name: 'Sector',
    },
    {
      id: 3942,
      name: 'Seohāra',
    },
    {
      id: 3943,
      name: 'Shāhganj',
    },
    {
      id: 3944,
      name: 'Shāhi',
    },
    {
      id: 3945,
      name: 'Shāhjahānpur',
    },
    {
      id: 3946,
      name: 'Shāhjānpur',
    },
    {
      id: 3947,
      name: 'Shāmli',
    },
    {
      id: 3948,
      name: 'Shamsābād',
    },
    {
      id: 3949,
      name: 'Shankargarh',
    },
    {
      id: 3950,
      name: 'Shergarh',
    },
    {
      id: 3951,
      name: 'Sherkot',
    },
    {
      id: 3952,
      name: 'Shikārpūr',
    },
    {
      id: 3953,
      name: 'Shikohābād',
    },
    {
      id: 3954,
      name: 'Shīshgarh',
    },
    {
      id: 3955,
      name: 'Shrawasti',
    },
    {
      id: 3956,
      name: 'Siddharthnagar',
    },
    {
      id: 3957,
      name: 'Sidhaulī',
    },
    {
      id: 3958,
      name: 'Sidhpura',
    },
    {
      id: 3959,
      name: 'Sikandarābād',
    },
    {
      id: 3960,
      name: 'Sikandarpur',
    },
    {
      id: 3961,
      name: 'Sikandra',
    },
    {
      id: 3962,
      name: 'Sikandra Rao',
    },
    {
      id: 3963,
      name: 'Sirāthu',
    },
    {
      id: 3964,
      name: 'Sirsā',
    },
    {
      id: 3965,
      name: 'Sirsāganj',
    },
    {
      id: 3966,
      name: 'Sisauli',
    },
    {
      id: 3967,
      name: 'Siswā Bāzār',
    },
    {
      id: 3968,
      name: 'Sītāpur',
    },
    {
      id: 3969,
      name: 'Sonbhadra',
    },
    {
      id: 3970,
      name: 'Soron',
    },
    {
      id: 3971,
      name: 'Suār',
    },
    {
      id: 3972,
      name: 'Suriānwān',
    },
    {
      id: 3973,
      name: 'Tājpur',
    },
    {
      id: 3974,
      name: 'Tālbahat',
    },
    {
      id: 3975,
      name: 'Tālgrām',
    },
    {
      id: 3976,
      name: 'Tānda',
    },
    {
      id: 3977,
      name: 'Tāndā',
    },
    {
      id: 3978,
      name: 'Thakurdwara',
    },
    {
      id: 3979,
      name: 'Thāna Bhawan',
    },
    {
      id: 3980,
      name: 'Tikaitnagar',
    },
    {
      id: 3981,
      name: 'Tīkri',
    },
    {
      id: 3982,
      name: 'Tilhar',
    },
    {
      id: 3983,
      name: 'Tindwāri',
    },
    {
      id: 3984,
      name: 'Titron',
    },
    {
      id: 3985,
      name: 'Tori-Fatehpur',
    },
    {
      id: 3986,
      name: 'Tulsīpur',
    },
    {
      id: 3987,
      name: 'Tūndla',
    },
    {
      id: 3988,
      name: 'Ugu',
    },
    {
      id: 3989,
      name: 'Ujhāni',
    },
    {
      id: 3990,
      name: 'Ūn',
    },
    {
      id: 3991,
      name: 'Unnāo',
    },
    {
      id: 3992,
      name: 'Usehat',
    },
    {
      id: 3993,
      name: 'Utraula',
    },
    {
      id: 3994,
      name: 'Vārānasi',
    },
    {
      id: 3995,
      name: 'Vrindāvan',
    },
    {
      id: 3996,
      name: 'Wazīrganj',
    },
    {
      id: 3997,
      name: 'Zafarābād',
    },
    {
      id: 3998,
      name: 'Zaidpur',
    },
    {
      id: 3999,
      name: 'Zamānia',
    },
    {
      id: 4000,
      name: 'Bageshwar',
    },
    {
      id: 4001,
      name: 'Bāgeshwar',
    },
    {
      id: 4002,
      name: 'Barkot',
    },
    {
      id: 4003,
      name: 'Bāzpur',
    },
    {
      id: 4004,
      name: 'Bhīm Tāl',
    },
    {
      id: 4005,
      name: 'Bhowali',
    },
    {
      id: 4006,
      name: 'Birbhaddar',
    },
    {
      id: 4007,
      name: 'Chakrāta',
    },
    {
      id: 4008,
      name: 'Chamoli',
    },
    {
      id: 4009,
      name: 'Champawat',
    },
    {
      id: 4010,
      name: 'Clement Town',
    },
    {
      id: 4011,
      name: 'Dehra Dūn',
    },
    {
      id: 4012,
      name: 'Devaprayāg',
    },
    {
      id: 4013,
      name: 'Dhārchula',
    },
    {
      id: 4014,
      name: 'Doiwāla',
    },
    {
      id: 4015,
      name: 'Dugadda',
    },
    {
      id: 4016,
      name: 'Dwārāhāt',
    },
    {
      id: 4017,
      name: 'Garhwāl',
    },
    {
      id: 4018,
      name: 'Harbatpur',
    },
    {
      id: 4019,
      name: 'Joshīmath',
    },
    {
      id: 4020,
      name: 'Kālādhūngi',
    },
    {
      id: 4021,
      name: 'Kālāgarh Project Colony',
    },
    {
      id: 4022,
      name: 'Khatīma',
    },
    {
      id: 4023,
      name: 'Kichha',
    },
    {
      id: 4024,
      name: 'Kotdwāra',
    },
    {
      id: 4025,
      name: 'Laksar',
    },
    {
      id: 4026,
      name: 'Lansdowne',
    },
    {
      id: 4027,
      name: 'Lohaghāt',
    },
    {
      id: 4028,
      name: 'Manglaur',
    },
    {
      id: 4029,
      name: 'Naini Tāl',
    },
    {
      id: 4030,
      name: 'Narendranagar',
    },
    {
      id: 4031,
      name: 'Pīpalkoti',
    },
    {
      id: 4032,
      name: 'Pithorāgarh',
    },
    {
      id: 4033,
      name: 'Rāipur',
    },
    {
      id: 4034,
      name: 'Rāīwāla Bara',
    },
    {
      id: 4035,
      name: 'Rānikhet',
    },
    {
      id: 4036,
      name: 'Rishīkesh',
    },
    {
      id: 4037,
      name: 'Rudraprayag',
    },
    {
      id: 4038,
      name: 'Rudraprayāg',
    },
    {
      id: 4039,
      name: 'Sitārganj',
    },
    {
      id: 4040,
      name: 'Tanakpur',
    },
    {
      id: 4041,
      name: 'Tehri',
    },
    {
      id: 4042,
      name: 'Tehri-Garhwāl',
    },
    {
      id: 4043,
      name: 'Udham Singh Nagar',
    },
    {
      id: 4044,
      name: 'Uttarkāshi',
    },
    {
      id: 4045,
      name: 'Vikāsnagar',
    },
    {
      id: 4046,
      name: 'Ahmedpur',
    },
    {
      id: 4047,
      name: 'Aistala',
    },
    {
      id: 4048,
      name: 'Aknapur',
    },
    {
      id: 4049,
      name: 'Alīpur Duār',
    },
    {
      id: 4050,
      name: 'Alipurduar',
    },
    {
      id: 4051,
      name: 'Āmlāgora',
    },
    {
      id: 4052,
      name: 'Amta',
    },
    {
      id: 4053,
      name: 'Amtala',
    },
    {
      id: 4054,
      name: 'Andal',
    },
    {
      id: 4055,
      name: 'Arambagh community development block',
    },
    {
      id: 4056,
      name: 'Ashoknagar Kalyangarh',
    },
    {
      id: 4057,
      name: 'Badkulla',
    },
    {
      id: 4058,
      name: 'Baduria',
    },
    {
      id: 4059,
      name: 'Bagdogra',
    },
    {
      id: 4060,
      name: 'Bagnan',
    },
    {
      id: 4061,
      name: 'Bagula',
    },
    {
      id: 4062,
      name: 'Bahula',
    },
    {
      id: 4063,
      name: 'Bakreswar',
    },
    {
      id: 4064,
      name: 'Balarāmpur',
    },
    {
      id: 4065,
      name: 'Bāli Chak',
    },
    {
      id: 4066,
      name: 'Bally',
    },
    {
      id: 4067,
      name: 'Bamangola community development block',
    },
    {
      id: 4068,
      name: 'Baneswar',
    },
    {
      id: 4069,
      name: 'Bankra',
    },
    {
      id: 4070,
      name: 'Bansberia',
    },
    {
      id: 4071,
      name: 'Bansihari community development block',
    },
    {
      id: 4072,
      name: 'Barabazar',
    },
    {
      id: 4073,
      name: 'Baranagar',
    },
    {
      id: 4074,
      name: 'Barasat',
    },
    {
      id: 4075,
      name: 'Bardhaman',
    },
    {
      id: 4076,
      name: 'Barjora',
    },
    {
      id: 4077,
      name: 'Barrackpore',
    },
    {
      id: 4078,
      name: 'Baruipur',
    },
    {
      id: 4079,
      name: 'Basanti',
    },
    {
      id: 4080,
      name: 'Bāwāli',
    },
    {
      id: 4081,
      name: 'Begampur',
    },
    {
      id: 4082,
      name: 'Belda',
    },
    {
      id: 4083,
      name: 'Beldanga',
    },
    {
      id: 4084,
      name: 'Beliatore',
    },
    {
      id: 4085,
      name: 'Berhampore',
    },
    {
      id: 4086,
      name: 'Bhadreswar',
    },
    {
      id: 4087,
      name: 'Bhandardaha',
    },
    {
      id: 4088,
      name: 'Bhatpara',
    },
    {
      id: 4089,
      name: 'Birbhum district',
    },
    {
      id: 4090,
      name: 'Birpara',
    },
    {
      id: 4091,
      name: 'Budge Budge',
    },
    {
      id: 4092,
      name: 'Chakapara',
    },
    {
      id: 4093,
      name: 'Chakdaha',
    },
    {
      id: 4094,
      name: 'Champadanga',
    },
    {
      id: 4095,
      name: 'Chāmpāhāti',
    },
    {
      id: 4096,
      name: 'Champdani',
    },
    {
      id: 4097,
      name: 'Chandrakona',
    },
    {
      id: 4098,
      name: 'Chittaranjan',
    },
    {
      id: 4099,
      name: 'Churulia',
    },
    {
      id: 4100,
      name: 'Contai',
    },
    {
      id: 4101,
      name: 'Cooch Behar',
    },
    {
      id: 4102,
      name: 'Cossimbazar',
    },
    {
      id: 4103,
      name: 'Dakshin Dinajpur district',
    },
    {
      id: 4104,
      name: 'Dalkola',
    },
    {
      id: 4105,
      name: 'Debagram',
    },
    {
      id: 4106,
      name: 'Debīpur',
    },
    {
      id: 4107,
      name: 'Dhaniakhali community development block',
    },
    {
      id: 4108,
      name: 'Dhulagari',
    },
    {
      id: 4109,
      name: 'Dhulian',
    },
    {
      id: 4110,
      name: 'Dhupguri',
    },
    {
      id: 4111,
      name: 'Diamond Harbour',
    },
    {
      id: 4112,
      name: 'Digha',
    },
    {
      id: 4113,
      name: 'Dinhata',
    },
    {
      id: 4114,
      name: 'Domjur',
    },
    {
      id: 4115,
      name: 'Dubrajpur',
    },
    {
      id: 4116,
      name: 'Egra',
    },
    {
      id: 4117,
      name: 'Falakata',
    },
    {
      id: 4118,
      name: 'Fort Gloster',
    },
    {
      id: 4119,
      name: 'Gaighata community development block',
    },
    {
      id: 4120,
      name: 'Gairkata',
    },
    {
      id: 4121,
      name: 'Gangadharpur',
    },
    {
      id: 4122,
      name: 'Gangarampur',
    },
    {
      id: 4123,
      name: 'Garui',
    },
    {
      id: 4124,
      name: 'Garulia',
    },
    {
      id: 4125,
      name: 'Giria',
    },
    {
      id: 4126,
      name: 'Gobardanga',
    },
    {
      id: 4127,
      name: 'Gobindapur',
    },
    {
      id: 4128,
      name: 'Gopinathpur',
    },
    {
      id: 4129,
      name: 'Gorubathan',
    },
    {
      id: 4130,
      name: 'Gosaba',
    },
    {
      id: 4131,
      name: 'Gosanimari',
    },
    {
      id: 4132,
      name: 'Gurdaha',
    },
    {
      id: 4133,
      name: 'Guskhara',
    },
    {
      id: 4134,
      name: 'Haldibari',
    },
    {
      id: 4135,
      name: 'Halisahar',
    },
    {
      id: 4136,
      name: 'Harindanga',
    },
    {
      id: 4137,
      name: 'Haringhata',
    },
    {
      id: 4138,
      name: 'Hasimara',
    },
    {
      id: 4139,
      name: 'Hindusthan Cables Town',
    },
    {
      id: 4140,
      name: 'Hooghly district',
    },
    {
      id: 4141,
      name: 'Ichapur',
    },
    {
      id: 4142,
      name: 'Indpur community development block',
    },
    {
      id: 4143,
      name: 'Ingrāj Bāzār',
    },
    {
      id: 4144,
      name: 'Islampur',
    },
    {
      id: 4145,
      name: 'Jafarpur',
    },
    {
      id: 4146,
      name: 'Jaigaon',
    },
    {
      id: 4147,
      name: 'Jamuria',
    },
    {
      id: 4148,
      name: 'Jangipur',
    },
    {
      id: 4149,
      name: 'Jaynagar Majilpur',
    },
    {
      id: 4150,
      name: 'Jejur',
    },
    {
      id: 4151,
      name: 'Jhalida',
    },
    {
      id: 4152,
      name: 'Jhilimili',
    },
    {
      id: 4153,
      name: 'Kalaikunda',
    },
    {
      id: 4154,
      name: 'Kaliaganj',
    },
    {
      id: 4155,
      name: 'Kalimpong',
    },
    {
      id: 4156,
      name: 'Kalna',
    },
    {
      id: 4157,
      name: 'Kamarhati',
    },
    {
      id: 4158,
      name: 'Kamarpukur',
    },
    {
      id: 4159,
      name: 'Karimpur',
    },
    {
      id: 4160,
      name: 'Katwa',
    },
    {
      id: 4161,
      name: 'Kenda',
    },
    {
      id: 4162,
      name: 'Keshabpur',
    },
    {
      id: 4163,
      name: 'Kharba',
    },
    {
      id: 4164,
      name: 'Khardaha',
    },
    {
      id: 4165,
      name: 'Khatra',
    },
    {
      id: 4166,
      name: 'Kirnahar',
    },
    {
      id: 4167,
      name: 'Krishnanagar',
    },
    {
      id: 4168,
      name: 'Krishnapur',
    },
    {
      id: 4169,
      name: 'Kshirpai',
    },
    {
      id: 4170,
      name: 'Kulpi',
    },
    {
      id: 4171,
      name: 'Kultali',
    },
    {
      id: 4172,
      name: 'Kurseong',
    },
    {
      id: 4173,
      name: 'Lalgarh',
    },
    {
      id: 4174,
      name: 'Lalgola',
    },
    {
      id: 4175,
      name: 'Loyabad',
    },
    {
      id: 4176,
      name: 'Madanpur',
    },
    {
      id: 4177,
      name: 'Madhyamgram',
    },
    {
      id: 4178,
      name: 'Mahiari',
    },
    {
      id: 4179,
      name: 'Mahishadal community development block',
    },
    {
      id: 4180,
      name: 'Mainaguri',
    },
    {
      id: 4181,
      name: 'Manikpara',
    },
    {
      id: 4182,
      name: 'Masila',
    },
    {
      id: 4183,
      name: 'Mathabhanga',
    },
    {
      id: 4184,
      name: 'Matiali community development block',
    },
    {
      id: 4185,
      name: 'Matigara community development block',
    },
    {
      id: 4186,
      name: 'Mejia community development block',
    },
    {
      id: 4187,
      name: 'Memari',
    },
    {
      id: 4188,
      name: 'Mirik',
    },
    {
      id: 4189,
      name: 'Mohanpur community development block',
    },
    {
      id: 4190,
      name: 'Monoharpur',
    },
    {
      id: 4191,
      name: 'Muragācha',
    },
    {
      id: 4192,
      name: 'Muri',
    },
    {
      id: 4193,
      name: 'Nabagram',
    },
    {
      id: 4194,
      name: 'Nadia district',
    },
    {
      id: 4195,
      name: 'Nagarukhra',
    },
    {
      id: 4196,
      name: 'Nagrakata',
    },
    {
      id: 4197,
      name: 'Naihati',
    },
    {
      id: 4198,
      name: 'Naksalbari',
    },
    {
      id: 4199,
      name: 'Nalhati',
    },
    {
      id: 4200,
      name: 'Nalpur',
    },
    {
      id: 4201,
      name: 'Namkhana community development block',
    },
    {
      id: 4202,
      name: 'Nandigram',
    },
    {
      id: 4203,
      name: 'Nangi',
    },
    {
      id: 4204,
      name: 'Nayagram community development block',
    },
    {
      id: 4205,
      name: 'North 24 Parganas district',
    },
    {
      id: 4206,
      name: 'Odlabari',
    },
    {
      id: 4207,
      name: 'Paikpara',
    },
    {
      id: 4208,
      name: 'Panagarh',
    },
    {
      id: 4209,
      name: 'Panchla',
    },
    {
      id: 4210,
      name: 'Panchmura',
    },
    {
      id: 4211,
      name: 'Pandua',
    },
    {
      id: 4212,
      name: 'Panihati',
    },
    {
      id: 4213,
      name: 'Panskura',
    },
    {
      id: 4214,
      name: 'Parbatipur',
    },
    {
      id: 4215,
      name: 'Paschim Medinipur district',
    },
    {
      id: 4216,
      name: 'Patiram',
    },
    {
      id: 4217,
      name: 'Pātrasāer',
    },
    {
      id: 4218,
      name: 'Patuli',
    },
    {
      id: 4219,
      name: 'Pujali',
    },
    {
      id: 4220,
      name: 'Puncha community development block',
    },
    {
      id: 4221,
      name: 'Purba Medinipur district',
    },
    {
      id: 4222,
      name: 'Purulia',
    },
    {
      id: 4223,
      name: 'Raghudebbati',
    },
    {
      id: 4224,
      name: 'Raghunathpur',
    },
    {
      id: 4225,
      name: 'Raiganj',
    },
    {
      id: 4226,
      name: 'Rajmahal',
    },
    {
      id: 4227,
      name: 'Rajnagar community development block',
    },
    {
      id: 4228,
      name: 'Ramchandrapur',
    },
    {
      id: 4229,
      name: 'Ramjibanpur',
    },
    {
      id: 4230,
      name: 'Rampur Hat',
    },
    {
      id: 4231,
      name: 'Raypur',
    },
    {
      id: 4232,
      name: 'Rishra',
    },
    {
      id: 4233,
      name: 'Sahapur',
    },
    {
      id: 4234,
      name: 'Sainthia',
    },
    {
      id: 4235,
      name: 'Salanpur community development block',
    },
    {
      id: 4236,
      name: 'Sankarpur',
    },
    {
      id: 4237,
      name: 'Sankrail',
    },
    {
      id: 4238,
      name: 'Santipur',
    },
    {
      id: 4239,
      name: 'Santoshpur',
    },
    {
      id: 4240,
      name: 'Santuri community development block',
    },
    {
      id: 4241,
      name: 'Sarenga',
    },
    {
      id: 4242,
      name: 'Serpur',
    },
    {
      id: 4243,
      name: 'Shyamnagar West Bengal',
    },
    {
      id: 4244,
      name: 'Singur',
    },
    {
      id: 4245,
      name: 'Sodpur',
    },
    {
      id: 4246,
      name: 'Solap',
    },
    {
      id: 4247,
      name: 'Sonada',
    },
    {
      id: 4248,
      name: 'Sonamukhi',
    },
    {
      id: 4249,
      name: 'Sonarpur community development block',
    },
    {
      id: 4250,
      name: 'South 24 Parganas district',
    },
    {
      id: 4251,
      name: 'Srikhanda',
    },
    {
      id: 4252,
      name: 'Srirampur',
    },
    {
      id: 4253,
      name: 'Suri',
    },
    {
      id: 4254,
      name: 'Swarupnagar community development block',
    },
    {
      id: 4255,
      name: 'Takdah',
    },
    {
      id: 4256,
      name: 'Taki',
    },
    {
      id: 4257,
      name: 'Tamluk',
    },
    {
      id: 4258,
      name: 'Tarakeswar',
    },
    {
      id: 4259,
      name: 'Titagarh',
    },
    {
      id: 4260,
      name: 'Tufanganj',
    },
    {
      id: 4261,
      name: 'Tulin',
    },
    {
      id: 4262,
      name: 'Uchalan',
    },
    {
      id: 4263,
      name: 'Ula',
    },
    {
      id: 4264,
      name: 'Uluberia',
    },
    {
      id: 4265,
      name: 'Uttar Dinajpur district',
    },
    {
      id: 4266,
      name: 'Uttarpara Kotrung',
    },
  ];

  constructor() {}
}

export interface CityList {
  id: number;
  name: string;
}
