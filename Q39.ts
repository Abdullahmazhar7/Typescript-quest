function city_Country(name: string, country: string): string {
    return `${name}, ${country}`;
}

const place1=city_Country("Lahore","Pakistan");
const place2=city_Country("tokyo","japan");
const place3=city_Country("london","England");

console.log(place1);
console.log(place2);
console.log(place3);

