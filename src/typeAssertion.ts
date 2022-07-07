// Type assertion

let id: string | number | boolean = '123';
id = true;
id = '1234';

// type assertion === id as string;
// type assertion === <string>id;

// customerId turetu buti stringas
let customerId: string = <string>id;

let customerId1: string = id as string;

customerId1 = 'id123';
// customerId1 = true;
