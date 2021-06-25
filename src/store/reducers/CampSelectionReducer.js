import { deepClone } from '../utility';

const initialState = {
    campsData: [

        {
            title: 'Camping',
            id: 1,
            camps: [
                {
                    name: 'Chase Camping',
                    description: 'There are almost as many bikes as there are tents at Chase Camping, a pop-up campsite spread across some 30 acres of open land behind Four Oaks Farm in Staffordshire. Not that this comes as a surprise. The campsite, open just a handful of weekends a year, is a mere hundred metres from Birches Valley Forest, home to the Midland’s first dedicated mountain bike trail and attracting hundreds of riders all year round. In the heart of the Cannock Chase Area of Outstanding Natural Beauty, the campsite is also a hive for the worlds’ less hardy cyclists, with family bikes and tiny tots’ trikes peppering the grassy meadow, too. There’s something for everyone here, whether you bring a bike or not.',
                    shortDescription: 'Tent camping and glamping on a family farm within easy walking distance of Cannock Chase Forest',            
                    location: 'Rugeley(UK)',
                    duration: '15.4.2021./20.4.2021.', 
                    price: '250',
                    image: 'camp1',
                    id: 2
                },
                {
                    name: 'Lloyds Meadow',
                    description: 'First thing’s first. There’s no one called Lloyd at Lloyds Meadow. This secluded lakeside getaway, eight miles east of Chester, is run by amiable host Sarah Stone and her family, complete with a pair of friendly dogs. There’s also far more than meadows here, with lakes, rushes, alder trees and fern-clad slopes that create little enclaves. It’s more of a ‘Lloyd’s beautiful natural wilderness’ than a meadow. Whoever Lloyd happens to be.The glamping area itself has a wonderfully quiet and private feel. Children and pets are not permitted, guaranteeing some peace and quiet, and the five-metre bell tents are each kitted out for couples, meaning there’s ample room inside.',
                    shortDescription: 'Lakeside glamping on the edge of Delemere Forest and a 10-minute train ride from Chester',            
                    location: 'Cheshire(UK)',
                    duration: '25.4.2021./29.4.2021.', 
                    price: '350',
                    image: 'camp2',
                    id: 3
                }
            ]
        },
        {
            title: 'Climbing',
            id: 4,
            camps: [
                {
                    name: 'Summit to sea expedition in Scotland',
                    description: 'Trek Lurchers Ridge to the top of Ben Macdui (1309m), the second highest mountain in the UK.Tackle the notorious ‘washing machine’ section as you paddle through the Speyside whisky region, camping on the riverside.Brave the cold waters and wild swim in Loch Etchachan, at over 1000m above sea level.',
                    shortDescription: 'Traverse the Cairngorms National Park and canoe the rapids of the River Spey all the way to the sea',
                    location: 'UK',
                    duration: '30.4.2021./5.5.2021.', 
                    price: '650',
                    image: 'climb1',
                    id: 5 
                },
                {
                    name: 'Climb Mount Toubkal: The winter edition',
                    description: 'Summit North Africa’s highest mountain in the peak of winter. All 4167 metres of her.Fuelled by tagine, hike to the roof of North Africa via traditional Berber villages and scenic pitstops.Cosy down in a mountain refuge and homestay in the Atlas Mountains and a traditional Moroccan riad in the heart of Marrakech.',
                    shortDescription: 'Don your crampons and trek your way up the mighty Mount Toubkal in the height of winter',
                    location: 'Morocco',
                    duration: '20.4.2021./30.4.2021.',
                    price: '400',
                    image: 'climb2',
                    id: 6
                }
            ]
        },
        {
            title: 'Kayaking',
            id: 7,
            camps: [
                {
                    name: `Packraft and wild camp in Finland's thousand lakes`,
                    description: `Travel across 'The Land of a Thousand Lakes' and through the Helvetinjärvi National Park in small, lightweight packrafts.Stop at the famous Helvetinkolu Crevasse, the unique Haukanhieta dune beach, a lakeside sauna and moreWild camp in complete peace and quiet and as far away from light pollution as it gets`,
                    shortDescription: 'Explore a beautiful boreal forest by land and water',
                    location: 'Finland',
                    duration: '25.5.2021./30.5.2021',
                    price: '500',
                    image: 'kayak1',
                    id: 8 
                },
                {
                    name: `Kayak and wild camp Sweden's Saint Anna`,
                    description: 'Paddle around the remote Saint Anna Archipelago - a remote paradise for those looking for an epic self-powered adventure!.Find an island that’s completely your own, set up camp by the water and cook a delicious meal as you watch the sunset.Explore a maze of more than 6,000 islands, most of them uninhabited – from forested ones sheltered near the mainland, to the wild and barren islets out by the open sea.',
                    shortDescription: `Explore Sweden's most stunning and untouched coastal landscape`,
                    location: 'Sweden',
                    duration: '25.6.2021./30.6.2021',
                    price: '630',
                    image: 'kayak2',
                    id: 9
                }
            ]
        },
        {
            title: 'Riding',
            id: 10,
            camps: [
                {
                    name: 'Adventure cycling in Namibia',
                    description: `Ride through an ever-changing desert landscape beneath enormous open skies and watch the sunrise over the tallest dunes in the world.Cycle along the Skeleton Coast, the world's largest shipping graveyard and join a safari - eyes peeled for lion, elephant and rhino.Visit thousands of breeding Cape Fur Seals in their enormous reserve and stand on the highest point in the country - Spitzkoppe Mountain.`,   
                    shortDescription: `Ride through Namibia's vast dune desert, along the Skeleton Coast, jump on a safari and sleep under the stars`, 
                    location: 'Namibia',
                    duration: '3.9.2021./10.9.2021',
                    price: '1300',
                    image: 'ride1',
                    id: 11
                },
                {
                    name: 'Intro to bikepacking in the Peak District',
                    description: 'Learn about bikepacking - including what kit you need and how to load your bike - and practice riding on gravel tracks.Settle down for a night in a giant tepee as you stargaze in the Dark Peak area.Visit local cafes and pubs, enjoy fire-cooked food and a tasty nightcap - buckets full of fun in just one weekend.',
                    shortDescription: `Cycle through the best terrain the Peak District has to offer, from gravel tracks to country lanes`,            
                    location: 'UK',
                    duration: '4.4.2021./5.4.2021',
                    price: '270',
                    image: 'ride2',
                    id: 12
                }
            ]
        },
        
    ],
    selectedCamps: [],
    campsRenderData: [],
    categoriesSelected: false,
    optionsSelectedNum: 0
}

const campSelectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPTION_SELECTED': {
            let campsSelection = deepClone(state.selectedCamps);
            for(let group of state.campsData) {
                if(group.title === action.optName) {
                    campsSelection.push(group);
                }
            }
            const updatedOptionsSelectedNumber = state.optionsSelectedNum + 1;
            return {
                ...state,
                selectedCamps: campsSelection,
                optionsSelectedNum: updatedOptionsSelectedNumber
            }
        }
            

        case 'OPTION_DESELECTED': {
            let campsSelection = deepClone(state.selectedCamps);
            let filteredCampsSelection = campsSelection.filter(group => {
                return group.title !== action.optName;
            })
            const updatedOptionsSelectedNum = state.optionsSelectedNum - 1;

            return {
                ...state,
                selectedCamps: filteredCampsSelection,
                optionsSelectedNum: updatedOptionsSelectedNum
            }
        }
           

        case 'DONE_CLICK': {
            let campsSelection = deepClone(state.selectedCamps);
            return {
                ...state,
                campsRenderData: [ ...campsSelection ],
                selectedCamps: [],
                categoriesSelected: true,
                optionsSelectedNum: 0
            }
        }
            

        case 'SKIP_CLICK': {
            let campsSelection = deepClone(state.selectedCamps);
            return {
                ...state,
                campsRenderData: [ ...campsSelection ],
                selectedCamps: [],
                categoriesSelected: false,
                optionsSelectedNum: 0
            }
        }
            

        default: 
            return state;
    }
}

export default campSelectionReducer;