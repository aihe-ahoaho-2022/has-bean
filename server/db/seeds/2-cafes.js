exports.seed = async function (knex) {
  await knex('cafes').insert([
    {
      id: 201,
      name: 'Thunderbird Cafe',
      address: '154 Featherston Street, CBD, Wellington 6011',
      city: 'Wellington',
      roaster_id: 1,
      lat: '-41.2835619',
      lng: '174.7766539',
    },
    {
      id: 202,
      name: 'Meshino',
      address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
      city: 'Christchurch',
      roaster_id: 2,
      lat: '-43.50606418686944',
      lng: '172.62842349325345',
    },
    {
      id: 203,
      name: 'Shore Road Cafe',
      address: '13 Shore Road, Remuera, Auckland, 1050',
      city: 'Auckland',
      roaster_id: 2,
      lat: '-36.86518025285166',
      lng: '174.78895079325343',
    },
    {
      id: 204,
      name: 'Kokako Roastery Roller Door',
      address: '9 Charles Street, Mount Eden, Auckland',
      city: 'Auckland',
      roaster_id: 3,
      lat: '-36.87019295271954',
      lng: '174.7510108644178',
    },
    {
      id: 205,
      name: 'Ozone Coffee',
      address: '1/18 Westmoreland Street West, Grey Lynn, Auckland 1021',
      city: 'Auckland',
      roaster_id: 8,
      lat: '-36.8549089669807',
      lng: ' 174.73411302023956',
    },
    {
      id: 206,
      name: 'Bestie Cafe',
      address: '179/183 Karangahape Road, Auckland CBD, Auckland 1010',
      city: 'Auckland',
      roaster_id: 12,
      lat: '-36.85742583288433',
      lng: '174.76016095888968',
    },
    {
      id: 207,
      name: 'The Hangar',
      address: '119 Dixon Street, Te Aro, Wellington 6011',
      city: 'Wellington',
      roaster_id: 5,
      lat: '-41.29082998179074',
      lng: '174.77390020674693',
    },
    {
      id: 208,
      name: 'Tuam Street Kitchen',
      address: '28 Tuam Street, Christchurch Central City, Christchurch 8011',
      city: 'Christchurch',
      roaster_id: 1,
      lat: '-43.53529112663059',
      lng: '172.628215682146',
    },
    {
      id: 209,
      name: 'Mister D',
      address: '47 Tennyson Street, Napier South, Napier 4110',
      city: 'Napier',
      roaster_id: 1,
      lat: '-39.48943512217203',
      lng: '176.9173435711646',
    },
    {
      id: 210,
      name: 'Odelay Cafe',
      address: '10/5 Hawthorne Drive, Frankton, Queenstown 9300',
      city: 'Queenstown',
      roaster_id: 2,
      lat: '-45.02468265791238',
      lng: '168.74317378636934',
    },
    {
      id: 211,
      name: 'Non Solo Pizza',
      address: '1052/259 Parnell Road, Parnell, Auckland 1052',
      city: 'Auckland',
      roaster_id: 2,
      lat: '-36.85582603026079',
      lng: '174.78059568465844',
    },
    {
      id: 212,
      name: 'Coffee Since Yesterday',
      address: '385 Grey Street, Hamilton East, Hamilton 3216',
      city: 'Hamilton',
      roaster_id: 3,
      lat: '-37.79293529096312',
      lng: '175.29302646060515',
    },
    {
      id: 213,
      name: 'Catalyst',
      address: '286 Princes Street, Central Dunedin, Dunedin 9016',
      city: 'Dunedin',
      roaster_id: 3,
      lat: '-45.87838982921476',
      lng: '170.50101122017475',
    },
    {
      id: 214,
      name: 'Mojo Vulcan Lane',
      address:
        'Corner Vulcan Lane and O Connell street, Auckland CBD, Auckland 1010',
      city: 'Auckland',
      roaster_id: 4,
      lat: '-36.84710591073034',
      lng: '174.76696765220646',
    },
    {
      id: 215,
      name: 'The Beanery by Mojo',
      address: '180 Lambton Quay, Wellington Central, Wellington 6011',
      city: 'Wellington',
      roaster_id: 4,
      lat: '-41.281796948957044',
      lng: '174.77592339987123',
    },
    {
      id: 216,
      name: 'Third Wheel Coffee Co.',
      address: '86/94 Marsden Road, Paihia 0200',
      city: 'Paihia',
      roaster_id: 5,
      lat: '-35.148479146012455',
      lng: '174.03692484693985',
    },
    {
      id: 217,
      name: 'Scroggin Coffee and Eatery',
      address: '71 Ardmore Street, Wānaka 9305',
      city: 'Wānaka',
      roaster_id: 5,
      lat: '-44.63850200039255',
      lng: '169.12588803456634',
    },
    {
      id: 218,
      name: 'Brown Lightning Bros.',
      address: '539 Te Rapa Road, Te Rapa, Hamilton 3200',
      city: 'Hamilton',
      roaster_id: 7,
      lat: '-37.759562117726574',
      lng: '175.24752316940487',
    },
    {
      id: 219,
      name: 'Raglan Roast Coffee',
      address: '40 Abel Smith Street, Te Aro, Wellington 6011',
      city: 'Wellington',
      roaster_id: 7,
      lat: '-41.296413801906795',
      lng: '174.77502219772703',
    },
    {
      id: 220,
      name: 'Ozone Coffee Roasters',
      address: '47 King Street, Central, New Plymouth 4310',
      city: 'New Plymouth',
      roaster_id: 8,
      lat: '-39.05818544509765',
      lng: '174.0706704650482',
    },
    {
      id: 221,
      name: 'ARK Coffee Company',
      address: '461-467 Lake Road, Takapuna, Auckland 0622',
      city: 'Auckland',
      roaster_id: 9,
      lat: '-36.78977853094632',
      lng: '174.77229286937956',
    },
    {
      id: 222,
      name: 'Atomic Coffee Roasters',
      address: '420c New North Road, Kingsland, Auckland 1021',
      city: 'Auckland',
      roaster_id: 11,
      lat: '-36.87185306517643',
      lng: '174.7461272897004',
    },
    {
      id: 223,
      name: 'Millers Coffee',
      address: '31 Cross Street, Auckland CBD, Auckland 1010',
      city: 'Auckland',
      roaster_id: 10,
      lat: '-36.85861220264099',
      lng: '174.7607486411044',
    },
    {
      id: 224,
      name: 'Ralphs',
      address: '225B Dominion Road, Mount Eden, Auckland 1024',
      city: 'Auckland',
      roaster_id: 12,
      lat: '-36.875711386060864',
      lng: '174.75074513777204',
    },
    {
      id: 225,
      name: 'Red Rabbit Coffee',
      address: 'Shed 3/7 Faraday Street, Parnell, Auckland 1052',
      city: 'Auckland ',
      roaster_id: 13,
      lat: '-36.85098412172408',
      lng: '174.78295817543176',
    },
    {
      id: 226,
      name: 'Mt Atkinson Coffee Roasters',
      address: '44b Portage Road, New Lynn, Auckland 0600',
      city: 'Auckland',
      roaster_id: 14,
      lat: '-36.91302054649436',
      lng: '174.69035029637087',
    },
    {
      id: 227,
      name: 'Espresso Workshop Britomart',
      address: '11 Britomart Place, Auckland CBD, Auckland 1010',
      city: 'Auckland ',
      roaster_id: 15,
      lat: '-36.8448745736623',
      lng: '174.7705732232782',
    },

    {
      id: 228,
      name: 'Espresso Workshop Parnell',
      address: '19 Falcon Street, Parnell, Auckland 1052',
      city: 'Auckland',
      roaster_id: 15,
      lat: '-36.854355009193654',
      lng: '174.77904847985187',
    },
    {
      id: 229,
      name: 'Grey St Kitchen',
      address: '355 Grey Street, Hamilton East, Hamilton 3216',
      city: 'Hamilton',
      roaster_id: 16,
      lat: '-37.79274153358427',
      lng: '175.2934018613651',
    },
    {
      id: 230,
      name: 'Toasted Coffee Roasters',
      address: '4 Link Drive, Wairau Valley, Auckland 0627',
      city: 'Auckland ',
      roaster_id: 17,
      lat: '-36.76798061971646',
      lng: '174.73776474190262',
    },
    {
      id: 231,
      name: 'Hawthorne Coffee Roastery & Espresso Bar',
      address: '23 Napier Road, Havelock North 4130',
      city: 'Havelock North',
      roaster_id: 20,
      lat: '-39.668306431086926',
      lng: '176.87869207092012',
    },
  ])
}
