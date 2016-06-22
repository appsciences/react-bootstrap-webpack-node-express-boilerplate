const nhoods= [

    {name:'Upper Manhattan', location: 'Above 96th Street'},
    {name:'Marble Hill', location: 'Physically located on the mainland'},
    {name:'Inwood', location: 'Above Dyckman Street'},
    {name:'Fort George', location: 'Between Nagle Avenue, Dyckman St and 192nd Street (includes Broadway south to Fairview Avenue)'},
    {name:'Washington Heights', location: '155th Street to Dyckman Streets'},
    {name:'Hudson Heights (part of Washington Heights)', location: '181st Street to Fort Tryon Park; Broadway to the Hudson River'},
    {name:'West Harlem', location: '125th to 155th Streets; St. Nicholas Avenue to Broadway'},
    {name:'Hamilton Heights', location: '135th to 155th Streets; Broadway to the Hudson River'},
    {name:'Manhattanville', location: '125th to 135th Streets; St. Nicholas Avenue to the Hudson River'},
    {name:'Morningside Heights, SoHa (or "South of Harlem")', location: '110th to 125th Streets; Morningside to Riverside Drives'},
    {name:'Central Harlem', location: '110th to 155th Streets; Park to St. Nicholas Avenues'},
    {name:'Harlem', location: '96th to 141st Streets (east), 110th to 155th Streets (central), 125th to 155th Streets (west)'},
    {name:'Strivers\' Row (Central Harlem)', location: "137th to 138th Streets; 7th to 8th Avenues"},
    {name:'Astor Row (Central Harlem)', location: 'Centered at West 130th Street'},
    {name:'Sugar Hill (Central Harlem)', location: '125th to 155th Streets; Edgecombe to Amsterdam Avenues'},
    {name:'Marcus Garvey Park, Mount Morris Historical District', location: '120th to 124th Streets; Madison to 5th Avenues'},
    {name:'Le Petit Senegal (Little Senegal)', location: '116th Street east of Morningside Park'},
    {name:'East Harlem (Spanish Harlem)', location: '96th to 141st Streets; the East River to 5th Avenue'},
    {name:'Upper East Side, Silk Stocking District', location: 'East 59th to 96th Streets; the East River to 5th Avenue (and 96th to 110th Streets along 5th Avenue)'},
    {name:'Lenox Hill', location: '60th to 77th Streets; the East River to Park Avenue'},
    {name:'Carnegie Hill', location: '86th to 98th Streets; 3rd to 5th Avenues (centered at East 91st Street and Park Avenue)'},
    {name:'Yorkville', location: '79th to 96th Street; the East River to 3rd Avenue (centered at East 86th Street and 3rd Avenue)'},
    {name:'Upper West Side', location: '59th to 110th Streets; Central Park West to the Hudson River'},
    {name:'Manhattan Valley, Bloomingdale District', location: '96th to 110th Streets; Central Park West to Broadway'},
    {name:'Lincoln Square (once San Juan Hill)', location: '65th to 66th Streets; Columbus Avenue to Broadway'},
    {name:'Midtown', location: '34th to 59th Streets'},
    {name:'Columbus Circle', location: '59th Street and 8th Avenue'},
    {name:'Sutton Place', location: '53rd to 59th Streets; 1st Avenue to Sutton Place'},
    {name:'Rockefeller Center', location: '49th to 51st Streets; 5th to 6th Avenues'},
    {name:'Diamond District', location: '47th Street from 5th to 6th Avenues'},
    {name:'Theater District', location: '42nd to 53rd Streets; 6th to 8th Avenues'},
    {name:'Turtle Bay', location: '42nd to 53rd Streets; East River to Lexington Avenue'},
    {name:'Midtown East', location: '42nd to 59th Streets; East River to 5th Avenue'},
    {name:'Midtown', location: '40th to 59th Streets; 3rd to 9th Avenues'},
    {name:'Tudor City', location: '40th to 43rd Streets; 1st to 2nd Avenues'},
    {name:'Little Brazil', location: '46th Street from 5th to 6th Avenues'},
    {name:'Times Square', location: '39th to 52nd Streets; 7th to 9th Avenues'},
    {name:'Hudson Yards', location: '28th to 43rd Streets; 7th Avenue to the Hudson River'},
    {name:'Midtown West', location: '34th to 59th Streets; 5th Avenue to the Hudson River'},
    {name:'Hell\'s Kitchen, Clinton', location: '34th to 57th Streets; 8th to the Hudson River'},
    {name:'Garment District', location: '34th to 42nd Streets and 5th to 9th Avenues'},
    {name:'Herald Square', location: '34th Street and 6th Avenue'},
    {name:'Koreatown', location: '31st to 36th Streets; 5th to 6th Avenues'},
    {name:'Murray Hill', location: '34th to 40th Streets; 3rd to Madison Avenues'},
    {name:'Tenderloin', location: '23rd Street to 42nd Streets; 5th to 7th Avenues'},
    {name:'Madison Square', location: '23rd to 26th Streets; 5th Avenue to Broadway'},
    {name:'Flower District', location: '26th to 28th Streets; 6th to 7th Avenues'},
    {name:'Brookdale', location: '25th Street from FDR Drive to 1st Avenue'},
    {name:'Hudson Yards', location: '30th to 34th Streets; the Hudson River to Tenth Avenue'},
    {name:'Kips Bay', location: '23rd to 34th Streets; the East River to 3rd Avenue'},
    {name:'Rose Hill', location: 'Between Murray Hill to the north and Gramercy Park to the south'},
    {name:'NoMad', location: '23rd Street to 34th Street; Madison Avenue and Second Avenue'},
    {name:'Peter Cooper Village† (former Gas House district)', location: '20th to 23rd Streets; Avenue C to 1st Avenue'},
    {name:'Chelsea', location: '14th to 34th Streets; 7th Avenue to the Hudson River'},
    {name:'Flatiron District, Toy District, Photo District', location: '16th to 27th Streets; Park Avenue South to 6th Avenue'},
    {name:'Gramercy Park', location: '14th to 23rd Streets; 1st Avenue to Park Avenue South'},
    {name:'Stuyvesant Square', location: '15th to 18th Streets; 1st to 3rd Avenues'},
    {name:'Union Square', location: '14th to 17th Streets; 4th Avenue to University Place'},
    {name:'Stuyvesant Town† (former Gas House district)', location: '14th to 20th Streets; Avenue C to 1st Avenue'},
    {name:'Meatpacking District', location: 'Gansevoort to 15th Streets; Hudson Street to the Hudson River'},
    {name:'Waterside Plaza', location: '25th to 29th Streets; the East River to FDR Drive'},
    {name:'Downtown Manhattan', location: 'Below 14th Street'},
    {name:'Little Germany (historic)', location: '7th to 10th Streets; Avenues A to B'},
    {name:'Alphabet City and Loisaida', location: 'Houston to 14th Streets; FDR Drive to Avenue A'},
    {name:'East Village', location: 'Houston to 14th Streets; the East River to the Bowery'},
    {name:'Greenwich Village', location: 'Houston to 14th Streets; Broadway to the Hudson River'},
    {name:'NoHo', location: 'Houston Street to Astor Place; the Bowery to Broadway'},
    {name:'Bowery', location: 'Canal to 4th Streets; the Bowery'},
    {name:'West Village', location: 'Houston to 14th Streets; 6th Avenue (or 7th Avenue) to the Hudson River'},
    {name:'Lower East Side', location: 'Canal to Houston Streets; the East River to the Bowery'},
    {name:'SoHo', location: 'Canal to Houston Streets; Lafayette to Varick Streets'},
    {name:'Nolita (NoLIta)', location: 'Broome to Houston Streets; the Bowery to Lafayette Street'},
    {name:'Little Italy', location: 'Mulberry Street from Canal to Broome Streets'},
    {name:'Chinatown', location: 'Chambers to Delancey Streets; East Broadway to Broadway'},
    {name:'Financial District', location: 'Below Chambers Street'},
    {name:'Five Points (historic)', location: 'Worth and Baxter Streets'},
    {name:'Cooperative Village†', location: 'Frankfort to Grand Streets; FDR Drive to East Broadway'},
    {name:'Two Bridges', location: 'Brooklyn Bridge to Montgomery Street; St. James Place to the East River'},
    {name:'Tribeca (TriBeCa)', location: 'Vesey Street to Canal Street; Broadway to the Hudson River'},
    {name:'Civic Center', location: 'Vesey to Chambers Streets; the East River to Broadway'},
    {name:'Radio Row (historic)', location: 'Greenwich Street from Cortlandt to Dey Streets (World Trade Center site)'},
    {name:'South Street Seaport Historical District', location: 'South of Fulton Street and along the FDR Drive'},
    {name:'Battery Park City†', location: 'West of West Street'},
    {name:'Little Syria (historic)', location: 'Washington Street from Battery Park to above Rector Street'}
];

module.exports = nhoods;