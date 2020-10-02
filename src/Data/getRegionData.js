import data from "./data"
//obtain the highest number of apearances that any single region has 

let higherNumberOfApearances = 0;

for (const region of data) {
    if (region.overallAppearances > higherNumberOfApearances) {
        higherNumberOfApearances = region.overallAppearances;
    }
}

const colourPalette = ["#38003c", "#2a404e", "#274c52", "#265053", "#255454", "#245956", "#226659", "#1f735d", "#1c8060", "#198c64", "#169968", "#14a66b", "#11b26f", "#0ebf73", "#0bcc76", "#08d97a",
    "#06e67e", "#03f281", "#00ff85"];

// FORMULA THAT MAP THE NUMBER OF APEARANCES

for (const region of data) {
    let index = Math.round((region.overallAppearances / higherNumberOfApearances) * (colourPalette.length - 1));
    if (region.overallAppearances <= 0) {
        region.colour = "rgba(51, 51, 51, 0.5)";
        console.log("LESS THAN 0 OR EQUAL-----> "+ " "+ region.regionName + " +++ "+region.colour+ "index "+ index );

    } else {
        region.colour = colourPalette[index];
        console.log("REGION FOUND WITH >>>>>>>>>>"+ region.regionName + " +++ "+region.colour +"<<<<<<<<<<<<<"+ "index "+ index );
    }
}

//Export a function that takes a region name and will return the region for that name.

const getRegionData = regionName => {
    return data.filter(region => region.name === regionName)[0];
}

export default getRegionData;