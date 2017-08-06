export class Init{
    load(){
        if(localStorage.getItem('markers')=== null || localStorage.getItem('markers') === undefined ){
            console.log('no markers there.. creating new s');

            var markers =[
                    {
                    name: 'bhattha ground',
                    lat: 32.096485,
                    lng: 76.567496,
                    zipcode: 176063,
                    intensity:10 
                    },
                    {
                    name: 'mera ghar',
                    lat:  32.097926,
                    lng: 76.568575,
                    zipcode: 176063,
                    intensity: 9
                    },
                    {
                    name: 'mera school',
                    lat: 32.094790,
                    lng: 76.566141,
                    zipcode: 176063,
                    intensity: 4
                    },
                    {
                    name: 'Dharamshala ground',
                    lat: 32.197619,
                    lng: 76.325884,
                    zipcode: 176215,
                    intensity: 7
                    },{
                    name: 'Kullu airport',
                    lat: 31.877574,
                    lng: 77.153530,
                    zipcode: 175125,
                    intensity: 4
                    }
                ];
                    localStorage.setItem('markers',JSON.stringify(markers));
        }else{
            console.log('loading markers...');
        }
    }
}