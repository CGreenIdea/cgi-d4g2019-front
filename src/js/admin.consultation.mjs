import { Constants } from './constant.mjs';

export function callGetConsultationData() {
    //var response = callRest('consumption/all', 'GET', "");

    var mockData = `[
        {
          "energy": 1666,
          "home": {
            "city": "Assencières",
            "constructionYear": 1908,
            "heatSource": "fuel",
            "id": 1,
            "label": "A",
            "nbRooms": 3,
            "street": "impasse des Lilas",
            "streetNb": "1",
            "surface": 70,
            "type": 1,
            "zipCode": "10220"
          },
          "id": 1,
          "readingDate": "2019-01-01"
        },
        {
          "energy": 6019,
          "home": {
            "city": "Alleins",
            "constructionYear": 1969,
            "heatSource": "électricité",
            "id": 4,
            "label": "D",
            "nbRooms": 2,
            "street": "Avenue du Maréchal Juin",
            "streetNb": "93",
            "surface": 55,
            "type": 1,
            "zipCode": "13980"
          },
          "id": 94,
          "readingDate": "2019-01-01"
        }]`;

    constructDataTable(mockData);
    //if (response.content != "")
    //    ConstructDataTable(response.content);
}

function constructDataTable(data) {
    var dataObj = JSON.parse(data);
    if (dataObj != null && dataObj.length > 0) {
        dataObj.forEach(element => {
           /*  <th>Date</th>
                <th>Foyer</th>
                <th>Energie</th> */
                const rowConsumption = `
                <tr>
                    <td>${element.readingDate}</td>
                    <td>${element.home.label}</td>
                    <td>${element.energy}</td>
                </tr>`;
        });
    }
}