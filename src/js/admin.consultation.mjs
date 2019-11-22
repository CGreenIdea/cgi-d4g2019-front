export function CallGetConsultationData() {
    var response = callRest('consumption​/all', 'GET', "");

    var mockData = '{"dates":["2019/01/01","2019/01/02","2019/01/03"],"foyers": [{"name": "A","values": ["1111","1234","1564"]},{"name": "B", "values": ["7984","3462","7643"]}]}';
    ConstructDataTable(mockData);
    //if (response.content != "")
    //    ConstructDataTable(response.content);
}

function ConstructDataTable(data) {
    var dataObj = JSON.parse(data);

}