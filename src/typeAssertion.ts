// Type assertion

let id: string | number | boolean = '123';
id = true;
id = '1234';
// customerId turetu buti stringas

let customerId = <string>id;

let customerId1 = id as string;
customerId1 = 'id123';
// customerId1 = true;
