
const month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

function getMonthMap() {

    const monthMap = new Map();
    monthMap.set("jan", 31)
    monthMap.set("feb", 28)
    monthMap.set("mar", 31)
    monthMap.set("apr", 30)
    monthMap.set("may", 31)
    monthMap.set("jun", 30)
    monthMap.set("jul", 31)
    monthMap.set("aug", 31)
    monthMap.set("sep", 30)
    monthMap.set("oct", 31)
    monthMap.set("nov", 30)
    monthMap.set("dec", 31)


    return monthMap;

}

function sortIntervalBoundries(Boundries) {

    return Boundries.sort((x, y) => {
        let x_index = month.indexOf(x);
        let y_index = month.indexOf(y);

        return x_index - y_index;

    })

}


function removeOverlapping(intervals, strategyType) {
    let newIntervals = [];
    if (strategyType == 1) {
        newIntervals = remove_overlapping_strategy_type_1(intervals);
    }
    else {
        newIntervals = remove_overlapping_strategy_type_2(intervals);
    }

    return newIntervals;
}


function remove_overlapping_strategy_type_1(intervals) {

    const Boundries = [];
    const mapping_interval_with_dates = new Map();
    intervals.map((eachintervals) => {
        mapping_interval_with_dates.set(eachintervals[0].split('-')[1], eachintervals[0].split('-')[0])
        mapping_interval_with_dates.set(eachintervals[1].split('-')[1], eachintervals[1].split('-')[0])
        Boundries.push(eachintervals[0].split('-')[1])
        Boundries.push(eachintervals[1].split('-')[1])

    })
    const sortBoundaries = sortIntervalBoundries(Boundries);

    return createIntervals(sortBoundaries, mapping_interval_with_dates)


}


function remove_overlapping_strategy_type_2(intervals) {

    const Boundries = [];
    const mapping_interval_with_dates = new Map();
    intervals.map(eachintervals => {
        mapping_interval_with_dates.set(eachintervals[0].split('-')[1], eachintervals[0].split('-')[0])
        mapping_interval_with_dates.set(eachintervals[1].split('-')[1], eachintervals[1].split('-')[0])
        Boundries.push(eachintervals[0].split('-')[1])
    })
    Boundries.push(intervals[intervals.length - 1][1].split('-')[1])
    const sortBoundaries = sortIntervalBoundries(Boundries);
    return createIntervals(sortBoundaries, mapping_interval_with_dates)



}


function createIntervals(boundries, mapping_interval_with_dates) {

    let created_intervals = [];
    for (let i = 0; i < (boundries.length - 1); i++) {

        let eachintervals = [];
        let leftinterval = mapping_interval_with_dates.get(boundries[i]) + "-" + boundries[i];
        let rightinterval = mapping_interval_with_dates.get(boundries[i + 1]) + '-' + boundries[i + 1];

        if (i + 1 < boundries.length - 1) {

            if (mapping_interval_with_dates.get(boundries[i + 1]) == 1) {
                let previous_month = month[month.indexOf(boundries[i + 1]) - 1];
                let intervaldate = getMonthMap().get(previous_month);
                rightinterval = intervaldate + "-" + previous_month
                
            }
            else {
                rightinterval = (mapping_interval_with_dates.get(boundries[i + 1]) - 1) + "-" + boundries[i + 1];

            }
        }
        eachintervals = [leftinterval, rightinterval];
        created_intervals.push(eachintervals);
    }

    return created_intervals;

}


(function() {
    const intervals = [["1-jan", "30-jun"], ["2-feb", "23-may"], ["3-mar", "8-jul"]];
    console.log(removeOverlapping(intervals , 1));
    console.log(removeOverlapping(intervals , 2));
})()